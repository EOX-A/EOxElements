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
  md.customElements = ["eox-", "story-telling-"];
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
      if (sectionStart) {
        finalTokens.push(addNewHTMLSection(state, "</div>", -1, -1));
        sectionStart = false;
        sectionStartIndex = -1;
      }

      if (!sectionStart) {
        finalTokens.push(
          addNewHTMLSection(state, `<div id="{id}" class="section-wrap">`, 0, 1)
        );
        sectionStart = true;
        sectionStartIndex = finalTokens.length - 1;
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
        sectionStartIndex,
        state
      );

    if (
      token.type === "heading_open" &&
      token.tag === "h1" &&
      tokens[i + 1].content.includes("as=")
    )
      continue;

    if (stack.last.tag === "h1" && token.content.includes("as=")) {
      i += 1;
      continue;
    }

    token.level = token.level + 1;
    finalTokens.push(token);
  }
  if (sectionStart)
    finalTokens.push(addNewHTMLSection(state, "</div>", -1, -1));

  finalTokens.forEach((token) => {
    const attrs = token.attrs || [];
    attrs.forEach((attr) => {
      if (!state.md.attrs.includes(attr[0]))
        state.md.attrs = [...state.md.attrs, attr[0]];
      if (attr[0] === "as") {
        if (!state.md.customElements.includes(attr[1]))
          state.md.customElements.push(attr[1]);
      }
    });
  });
  omissions.forEach((idx) => tokens.splice(idx, 1));
  state.tokens = finalTokens;
  state.md.nav = nav || [];
}

// Utility functions below this line handle specific tasks within the plugin logic

/**
 * Add new html section token
 *
 * @param {{tokens: Array<Object>}} state - Token state
 * @param {String} html
 * @param {Number} level
 * @param {Number} nesting
 */
function addNewHTMLSection(state, html, level, nesting) {
  const token = new state.Token("html_block", "", level);
  token.content = html;
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
 * @param {{tokens: Array<Object>}} state - Token state
 *
 */
function curlyInline(
  children,
  stack,
  nav,
  finalTokens,
  sectionStartIndex,
  state
) {
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

  if (stack.last.tag === "h2") {
    const title = (lastText && lastText["content"]) || children[0].content;
    const attrsId = (stack.last.attrs || []).find(
      (subArr) => subArr[0] === "id"
    )?.[1];
    const titleSlug = slugify(title);
    const id = `section-${attrsId || titleSlug}`;

    finalTokens[sectionStartIndex].content = finalTokens[
      sectionStartIndex
    ].content.replace("{id}", id);

    nav.push({ title, id });
  }

  // Generate custom element if h1 has `as` attribute.
  if (stack.last.tag === "h1") {
    const attrAs = (stack.last.attrs || []).find(
      (subArr) => subArr[0] === "as"
    )?.[1];

    if (attrAs)
      finalTokens = [
        ...finalTokens,
        ...transformToCustomElement(
          children[1],
          attrAs,
          state,
          stack.last.attrs
        ),
      ];
  }

  omissions.forEach((idx) => children.splice(idx, 1));

  return finalTokens;
}

/**
 * Transform H1 to custom element based on `as`
 *
 * @param {Object} token - List of markdown tokens
 * @param {String} as - value of custom element
 * @param {{tokens: Array<Object>}} state - Token state
 * @param {{tokens: Array}} attrs - List of attribute with key and value
 * @return {Array<Object>} finalTokens
 *
 */
function transformToCustomElement(token, as, state, attrs) {
  // Generate HTML open token for custom element
  const openToken = new state.Token("html_open", as, 1);
  openToken.attrs = attrs;

  // Generate HTML inline token for custom element
  const contentToken = new state.Token("html_inline", as, 0);
  contentToken.level = 1;
  contentToken.children = token.children;

  // Generate HTML close token for custom element
  const closeToken = new state.Token("html_close", as, -1);

  return [openToken, contentToken, closeToken];
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
