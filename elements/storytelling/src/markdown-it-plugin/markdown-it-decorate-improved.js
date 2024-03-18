import { TAGS_EXPR, TAGS_OPENING, TAGS_SELF_CLOSING } from "../enums";
import slugify from "@sindresorhus/slugify";

/**
 * Plugin registration with Markdown-it - Annotate Markdown documents with HTML attributes, IDs and classes.
 * This plugin is improved ES6 version of `markdown-it-decorate`
 * Ref - https://github.com/rstacruz/markdown-it-decorate
 *
 * @param {import("markdown-it").default} md - Markdown-It instances
 */
export default function attributes(md) {
  md.nav = [];
  md.attrs = [];
  md.core.ruler.push("curly_attributes", curlyAttrs);
}

/**
 * Main function to process tokens and apply attributes
 *
 * @param {{tokens: Array<Object>}} state - Token state
 */
function curlyAttrs(state) {
  const tokens = state.tokens;
  const omissions = [];
  let parent;
  const stack = { len: 0, contents: [], types: {} };
  const nav = [];
  let finalTokens = [];
  let sectionStart = false;
  let sectionStartIndex = 0;

  // Iterate through tokens to process them
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (isOpener(token.type) || TAGS_SELF_CLOSING[token.type]) {
      sPush(stack, token);
    }

    if (token.type === "heading_open" && token.tag === "h2") {
      // Adding closing section div
      if (sectionStart) {
        const tag = finalTokens[sectionStartIndex].tag;
        finalTokens.push(addNewHTMLSection(state, tag, -1, -1, "html_close"));
        sectionStart = false;
        sectionStartIndex = -1;
      }

      // Adding opening section div
      if (!sectionStart) {
        finalTokens.push(
          addNewHTMLSection(state, "div", 0, 1, "html_open", [
            ["class", "section-wrap"],
          ])
        );
        sectionStart = true;
        sectionStartIndex = finalTokens.length - 1;
        stack.last.as = !!tokens[i + 1].content.includes("as=");
      }
    }

    if (token.type === "html_block") {
      const m = token.content.match(TAGS_EXPR);
      if (!m) {
        token.level = token.level + 1;
        finalTokens.push(token);
        return;
      }

      parent = findParent(stack, m[1], m[2]);
      if (parent && applyToToken(parent, m[3])) {
        omissions.unshift(i);
      }
    }

    if (token.type === "inline")
      finalTokens = curlyInline(
        token.children,
        stack,
        nav,
        finalTokens,
        sectionStartIndex
      );

    token.level = token.level + 1;
    if (!stack.last.as) finalTokens.push(token);
  }

  if (sectionStart) {
    const tag = finalTokens[sectionStartIndex].tag;
    finalTokens.push(addNewHTMLSection(state, tag, -1, -1, "html_close"));
  }

  generateCustomAttrsList(finalTokens, state.md);

  omissions.forEach((idx) => tokens.splice(idx, 1));
  state.tokens = finalTokens;
  state.md.nav = nav || [];
}

// Utility functions below this line handle specific tasks within the plugin logic

/**
 * Add new html section token
 *
 * @param {{tokens: Array<Object>}} state - Token state
 * @param {String} tag
 * @param {Number} level
 * @param {Number} nesting
 * @param {String} type
 * @param {Array<Array> | null} attrs
 */
function addNewHTMLSection(state, tag, level, nesting, type, attrs = null) {
  const token = new state.Token(type, tag, level);
  token.attrs = attrs;
  token.nesting = nesting;

  return token;
}

/**
 * Check if a token type is a block opener
 *
 * @param {String} type - Token type
 */
function isOpener(type) {
  return (
    type.match(/_(open|start)$/) || type === "fence" || type === "code_block"
  );
}

/**
 * Process inline tokens for attributes
 *
 * @param {Array<Object>} children - Inline children
 * @param {Object} stack
 * @param {Array<Object>} nav
 * @param {Array<Object>} finalTokens
 * @param {Number} sectionStartIndex
 * @return {Array<Object>} finalTokens
 *
 */
function curlyInline(children, stack, nav, finalTokens, sectionStartIndex) {
  let lastText;
  const omissions = [];

  children.forEach((child, i) => {
    if (
      isOpener(child.type) ||
      TAGS_SELF_CLOSING[child.type] ||
      child.type === "code_inline"
    ) {
      sPush(stack, child);
    }

    const m = child.content.match(TAGS_EXPR);
    if (m) {
      const parent = findParent(stack, m[1], m[2]);
      if (parent && applyToToken(parent, m[3])) {
        omissions.unshift(i);
        if (lastText) trimRight(lastText, "content");
      }
    }

    if (child.type === "text") lastText = child;
  });

  // Generate nav value and transform div section to `as` attribute
  if (stack.last.tag === "h2") {
    const title = (lastText && lastText["content"]) || children[0]?.content;
    const attrsId = getAttr(stack.last.attrs, "id");
    const titleSlug = slugify(title);
    const id = `section-${attrsId || titleSlug}`;

    nav.push({ title, id });

    const attrAs = getAttr(stack.last.attrs, "as");
    const currentSectionToken = finalTokens[sectionStartIndex];
    currentSectionToken.attrs.push(["id", id]);

    // Transform section div to `as` attribute
    if (attrAs) {
      currentSectionToken.tag = attrAs;
      currentSectionToken.as = attrAs;

      // Combining div attribute with h2 attributes
      applyToToken(
        currentSectionToken,
        `${lastText ? `title='${lastText.content}'` : ""}${
          stack.last.attrStr
        } #${id} .${currentSectionToken.attrs[0][1]}`
      );
    }
  }

  omissions.forEach((idx) => children.splice(idx, 1));

  return finalTokens;
}

/**
 * Get attribute value from 3d attribute array
 *
 * @param {Array<Array>} attrs - 3d array of attributes
 * @param {String} key - key which we need to get
 * @return {String | null} Attribute Value
 *
 */
function getAttr(attrs, key) {
  return (attrs || []).find((subArr) => subArr[0] === key)?.[1] || null;
}

/**
 * Find parent token for applying attributes
 *
 * @param {Object} stack
 * @param {String} tag
 * @param {Number | String} depth
 */
function findParent(stack, tag, depth) {
  if (!tag) return stack.last;

  if (depth === "^") {
    depth = 1;
  } else if (typeof depth === "string") {
    depth = +depth.slice(1);
  } else {
    depth = 0;
  }

  const targets = TAGS_OPENING[tag.toLowerCase()] || [tag.toLowerCase()];
  const target = targets.find((t) => stack.types[t]);
  const list = stack.types[target];
  if (!list) return;

  return list[list.length - 1 - depth];
}

/**
 * Apply attributes to a token, correctly handling id and classes
 *
 * @param {Object} token
 * @param {String} attrs
 */
function applyToToken(token, attrs) {
  let m;
  token.attrStr = attrs;

  // Iterate over the attributes string to find all matches for id, class, or other attributes
  while (attrs.length > 0) {
    // Match class names, prefixed with a dot (.)
    if ((m = attrs.match(/^\s*\.([a-zA-Z0-9\-_]+)/))) {
      addAttr(token, "class", m[1], { append: true });
      attrs = attrs.slice(m[0].length);
    }
    // Match IDs, prefixed with a hash (#)
    else if ((m = attrs.match(/^\s*#([a-zA-Z0-9\-_]+)/))) {
      addAttr(token, "id", m[1]);
      attrs = attrs.slice(m[0].length);
    }
    // Match other attributes in the format attr="value"
    else if ((m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)="([^"]*)"/))) {
      addAttr(token, m[1], m[2]);
      attrs = attrs.slice(m[0].length);
    }
    // Match other attributes in the format attr='value'
    else if ((m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)='([^']*)'/))) {
      addAttr(token, m[1], m[2]);
      attrs = attrs.slice(m[0].length);
    }
    // Match other attributes without quotes
    else if ((m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)=([^ ]*)/))) {
      addAttr(token, m[1], m[2]);
      attrs = attrs.slice(m[0].length);
    }
    // Match boolean attributes
    else if ((m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)/))) {
      addAttr(token, m[1], "");
      attrs = attrs.slice(m[0].length);
    }
    // Skip whitespace
    else if ((m = attrs.match(/^\s+/))) {
      attrs = attrs.slice(m[0].length);
    }
    // Match "as" attribute
    else if ((m = attrs.match(/^\s*as="([a-zA-Z0-9\-_]+)"/))) {
      addAttr(token, "as", m[1]);
      attrs = attrs.slice(m[0].length);
    }
    // If no matches are found, break the loop to avoid an infinite loop
    else {
      break;
    }
  }

  return true;
}

/**
 * Function to add or append an attribute to a token
 *
 * @param {Object} token
 * @param {String} attr
 * @param {String} value
 * @param {Object} options
 */
function addAttr(token, attr, value, options = {}) {
  const idx = token.attrIndex(attr);

  // If the attribute is 'class' and append is true, add the value to the existing class list
  if (attr === "class" && options.append && idx !== -1) {
    // Ensure not to duplicate the class name
    if (!token.attrs[idx][1].includes(value)) {
      token.attrs[idx][1] += ` ${value}`;
    }
  } else if (idx === -1) {
    // If the attribute does not exist, add it
    token.attrPush([attr, value]);
  } else if (options.append) {
    token.attrs[idx][1] += ` ${value}`;
  } else {
    // If the attribute exists and it's not class append, replace its value
    token.attrs[idx][1] = value;
  }
}

/**
 * Push a token to the stack
 *
 * @param {Object} stack
 * @param {Object} token
 */
function sPush(stack, token) {
  const type = token.type.replace(/_(open|start)$/, "");
  if (!stack.types[type]) stack.types[type] = [];
  stack.types[type].push(token);
  stack.last = token;
}

/**
 * Trim whitespace from the right of a string
 *
 * @param {Object} obj
 * @param {String} attr
 */
function trimRight(obj, attr) {
  obj[attr] = obj[attr].replace(/\s*$/, "");
}

/**
 * Generate list of custom attributes for DOM sanitize whitelist.
 *
 * @param {Array<Object>} tokens - List of markdown tokens
 * @param {import("markdown-it").default} md - Markdown-It instances
 */
function generateCustomAttrsList(tokens, md) {
  tokens.forEach((token) => {
    const attrs = token.attrs || [];
    attrs.forEach((attr) => {
      if (!md.attrs.includes(attr[0])) md.attrs = [...md.attrs, attr[0]];
    });
  });
}
