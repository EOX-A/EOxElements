import {
  DEFAULT_MODE_ATTRS,
  TAGS_EXPR,
  TAGS_OPENING,
  HERO_MEDIA_TYPES,
  TAGS_SELF_CLOSING,
} from "../enums";
import slugify from "@sindresorhus/slugify";
import { convertAttributeValueBasedOnItsType } from "../helpers/render-html-string.js";

/**
 * Plugin registration with Markdown-it - Annotate Markdown documents with HTML attributes, IDs and classes.
 * This plugin is improved ES6 version of `markdown-it-decorate`
 * Ref - https://github.com/rstacruz/markdown-it-decorate
 *
 * @param {import("markdown-it").default} md - Markdown-It instances
 */
export default function attributes(md) {
  md.core.ruler.push("curly_attributes", curlyAttrs);
}

/**
 * Main function to process tokens and apply attributes
 *
 * @param {{tokens: Array<Object>}} state - Token state
 */
function curlyAttrs(state) {
  state.md.nav = [];
  state.md.attrs = [];
  state.md.sections = {};

  const tokens = state.tokens;
  const omissions = [];
  let parent;
  const stack = { len: 0, contents: [], types: {} };
  const nav = [];
  let finalTokens = [];
  let sectionStart = false;
  let sectionStartIndex = 0;
  let sectionSteps = false;
  let sectionStepsIndex = 0;

  // Iterate through tokens to process them
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    // Parse fallback mode
    if (token.tag === "p") {
      const { shouldContinue } = parseFallBack(tokens, tokens[i + 1]);
      if (shouldContinue) {
        i = i + 2;
        continue; // continuing with next opening token if just fallback mode is present
      }
    }

    // Initialise opening tag
    if (isOpener(token.type) || TAGS_SELF_CLOSING[token.type]) {
      sPush(stack, token);
    }

    // Parse opening section through h1/h2 tag
    if (token.tag === "h1" || token.tag === "h2") {
      const data = parseSection(
        i,
        tokens,
        finalTokens,
        sectionStart,
        sectionStartIndex,
        sectionSteps,
        sectionStepsIndex,
        state,
        stack
      );
      sectionStart = data.sectionStart;
      sectionSteps = data.sectionSteps;
      sectionStartIndex = data.sectionStartIndex;
      sectionStepsIndex = data.sectionStepsIndex;
    }

    // Parse opening step section through h3 tag
    if (token.tag === "h3") {
      const data = parseStepSection(
        i,
        tokens,
        finalTokens,
        sectionStart,
        sectionStartIndex,
        sectionSteps,
        sectionStepsIndex,
        state,
        stack
      );
      sectionStart = data.sectionStart;
      sectionSteps = data.sectionSteps;
      sectionStartIndex = data.sectionStartIndex;
      sectionStepsIndex = data.sectionStepsIndex;
    }

    // Parse html block and apply token
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

    // Parse inline content
    if (token.type === "inline")
      finalTokens = parseInlineContent(
        token,
        stack,
        nav,
        finalTokens,
        sectionStartIndex,
        sectionStepsIndex,
        sectionSteps
      );

    token.level = token.level + 1;
    finalTokens.push(token);

    const currAttr = getAttr(stack.last.attrs, "as");
    if (stack.last.markup === "#" && HERO_MEDIA_TYPES.includes(currAttr)) {
      finalTokens = parseHeroSection(finalTokens, state, stack);
      i++;
    }
  }

  // Close opened sections and step section tags if opened
  if (sectionStart) pushClosingTag(finalTokens, sectionStartIndex, state);
  if (sectionSteps) pushClosingTag(finalTokens, sectionStepsIndex, state);

  generateCustomAttrsAndSectionMetaList(finalTokens, state.md);

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
 * Process fallback mode
 *
 * @param {Array<Object>} tokens - List of markdown tokens
 * @param {Object} nextInlineToken - Next inline token
 * @return {{ shouldContinue: Boolean }} - Final list of updated states
 */
function parseFallBack(tokens, nextInlineToken) {
  const newLineRegex = /\r\n|\r|\n/;
  const fallBackModeRegex = /mode\s*=\s*(['"])fallback\1/g;
  let shouldContinue = false;

  // Check content contain fallback mode or not
  if (fallBackModeRegex.test(nextInlineToken?.content || "")) {
    // Check if any next line content present if true then remove fallback image from rendering
    if (newLineRegex.test(nextInlineToken.content)) {
      const nextLineTextArr = nextInlineToken.content.split(newLineRegex);

      nextLineTextArr.shift();
      nextInlineToken.content = nextLineTextArr.join(/\n/);

      if (nextInlineToken.children[0].type === "text")
        nextInlineToken.children.shift();

      nextInlineToken.children.shift();
    } else shouldContinue = true;
  }

  return { shouldContinue };
}

/**
 * Process inline tokens for attributes
 *
 * @param {Object} token - current token
 * @param {Object} stack
 * @param {Array<Object>} nav
 * @param {Array<Object>} finalTokens
 * @param {Number} sectionStartIndex
 * @param {Number} sectionStepsIndex
 * @param {Boolean} sectionSteps
 * @return {Array<Object>} finalTokens
 *
 */
function parseInlineContent(
  token,
  stack,
  nav,
  finalTokens,
  sectionStartIndex,
  sectionStepsIndex,
  sectionSteps
) {
  let lastText;
  const omissions = [];

  token.children.forEach((child, i) => {
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

  if (stack.last.tag === "h3" && sectionSteps && sectionStepsIndex !== -1) {
    const currentSectionStepToken = finalTokens[sectionStepsIndex];
    currentSectionStepToken.section = finalTokens[sectionStartIndex].id;
    applyToToken(currentSectionStepToken, stack.last.attrStr);
  }

  // Generate nav value and transform div section to `as` attribute
  if (stack.last.tag === "h1" || stack.last.tag === "h2") {
    const title = lastText && lastText["content"];
    const attrsId = getAttr(stack.last.attrs, "id");
    const attrAs = getAttr(stack.last.attrs, "as");
    const mode = getAttr(stack.last.attrs, "mode") || "container";
    const position = getAttr(stack.last.attrs, "position") || "left";
    const titleSlug = slugify(title || "");
    const id = attrsId || titleSlug;
    const sectionId = `section-${id}`;

    if (stack.last.tag === "h2" && title) nav.push({ title, id: sectionId });

    const currentSectionToken = finalTokens[sectionStartIndex];
    const currentHeadingSectionToken = finalTokens[finalTokens.length - 1];

    const sectionClass = `.${mode} .${position}`;
    currentSectionToken.attrs.push(["id", sectionId]);
    currentSectionToken.id = sectionId;

    // Transform section div to `as` attribute
    if (attrAs) {
      currentHeadingSectionToken.tag = attrAs;
      currentHeadingSectionToken.type = "html_open";
      currentHeadingSectionToken.as = attrAs;
      currentHeadingSectionToken.section = sectionId;

      token.type = "html_inline";
      token.content = "";
      token.children = null;

      applyToToken(
        currentHeadingSectionToken,
        `${lastText ? `title='${lastText.content}'` : ""}${
          stack.last.attrStr
        } #${id}`
      );

      currentSectionToken.mode = mode;
      currentSectionToken.position = position;

      // Combining div attribute with h2 attributes
      applyToToken(
        currentSectionToken,
        `#${sectionId} .${currentSectionToken.attrs[0][1]} .section-custom`
      );
    }

    applyToToken(currentSectionToken, sectionClass);
  }

  if (token.children) omissions.forEach((idx) => token.children.splice(idx, 1));

  return finalTokens;
}

/**
 * Process section tokens with help of h1/h2 tag
 *
 * @param {Object} index - current token index
 * @param {Array<Object>} tokens - List of markdown tokens
 * @param {Array<Object>} finalTokens - Processed final set of markdown token
 * @param {Boolean} sectionStart - Section started or not
 * @param {Boolean} sectionStartIndex - Section start index
 * @param {Boolean} sectionSteps - Step Section started or not
 * @param {Boolean} sectionStepsIndex - Step Section start index
 * @param {{tokens: Array<Object>}} state - Token state
 * @param {Object} stack
 * @return {Object} - Final list of updated states
 */
function parseSection(
  index,
  tokens,
  finalTokens,
  sectionStart,
  sectionStartIndex,
  sectionSteps,
  sectionStepsIndex,
  state,
  stack
) {
  const token = tokens[index];

  if (token.type === "heading_close") {
    token.tag = finalTokens[finalTokens.length - 2].tag;
    token.type = finalTokens[finalTokens.length - 2].type.replace(
      "_open",
      "_close"
    );
  }

  // Adding closing section div
  if (token.type === "heading_open") {
    if (sectionStart) {
      if (sectionSteps) {
        pushClosingTag(finalTokens, sectionStepsIndex, state);
        sectionSteps = false;
        sectionStepsIndex = -1;
      }

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
      stack.last.as = !!tokens[index + 1].content.includes("as=");
    }
  }

  return {
    sectionStart,
    sectionStartIndex,
    sectionSteps,
    sectionStepsIndex,
    stack,
    finalTokens,
  };
}

/**
 * Process step section tokens with help of h3 tag
 *
 * @param {Object} index - current token index
 * @param {Array<Object>} tokens - List of markdown tokens
 * @param {Array<Object>} finalTokens - Processed final set of markdown token
 * @param {Boolean} sectionStart - Section started or not
 * @param {Boolean} sectionStartIndex - Section start index
 * @param {Boolean} sectionSteps - Step Section started or not
 * @param {Boolean} sectionStepsIndex - Step Section start index
 * @param {{tokens: Array<Object>}} state - Token state
 * @param {Object} stack
 * @return {Object} - Final list of updated states
 */
function parseStepSection(
  index,
  tokens,
  finalTokens,
  sectionStart,
  sectionStartIndex,
  sectionSteps,
  sectionStepsIndex,
  state,
  stack
) {
  const token = tokens[index];

  if (
    token.type === "heading_open" &&
    sectionStart &&
    finalTokens[sectionStartIndex].mode === "tour"
  ) {
    if (sectionSteps) {
      finalTokens.push(
        addNewHTMLSection(state, "section-step", -1, -1, "html_close")
      );
      sectionSteps = false;
      sectionStepsIndex = -1;
    }

    // Adding opening section div
    if (!sectionSteps) {
      finalTokens.push(
        addNewHTMLSection(state, "section-step", 0, 1, "html_open")
      );
      sectionSteps = true;
      sectionStepsIndex = finalTokens.length - 1;
      stack.last.as = !!tokens[index + 1].content.includes("as=");
    }
  }

  return {
    sectionStart,
    sectionStartIndex,
    sectionSteps,
    sectionStepsIndex,
    stack,
    finalTokens,
  };
}

/**
 * Process hero section
 *
 * @param {Array<Object>} finalTokens - Processed final set of markdown token
 * @param {{tokens: Array<Object>}} state - Token state
 * @param {Object} stack
 * @return {Object} - Final processed markdown tokens
 */
function parseHeroSection(finalTokens, state, stack) {
  finalTokens.push(
    addNewHTMLSection(state, stack.last.tag, 1, -1, "html_close", null)
  );

  finalTokens.push(addNewHTMLSection(state, "h1", 1, 1, "html_open", null));

  finalTokens.push(addNewHTMLSection(state, "h1", 2, 0, "html_inline", null));
  finalTokens[finalTokens.length - 1].content = getAttr(
    stack.last.attrs,
    "title"
  );

  finalTokens.push(addNewHTMLSection(state, "h1", 1, -1, "html_close", null));

  return finalTokens;
}

/**
 * Process and push closing tags for section and step section
 *
 * @param {Array<Object>} finalTokens - Processed final set of markdown token
 * @param {Object} index - current token index
 * @param {{tokens: Array<Object>}} state - Token state
 */
function pushClosingTag(finalTokens, index, state) {
  const tag = finalTokens[index].tag;
  finalTokens.push(addNewHTMLSection(state, tag, -1, -1, "html_close"));
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
function applyToToken(token, attrs = "") {
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

  const asAttr = getAttr(token.attrs, "as");
  const modeAttr = getAttr(token.attrs, "mode");

  // Adding default attribute based on mode and as
  DEFAULT_MODE_ATTRS[asAttr]?.[modeAttr]?.forEach((attr) => {
    addAttr(token, attr[0], attr[1]);
    attrs = attrs.slice(attr[0].length);
  });

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
function generateCustomAttrsAndSectionMetaList(tokens, md) {
  tokens.forEach((token) => {
    const attrs = token.attrs || [];

    // Initialize sections meta
    initializeSectionsMeta(token, md);

    // Process each attribute for the current token
    attrs.forEach((attr) => {
      // Add attribute to md.attrs if it's not already included
      if (!md.attrs.includes(attr[0])) {
        md.attrs.push(attr[0]);
      }

      // Special handling for sections based on markup and tag
      if (token.section) {
        updateSectionMetaBasedOnMarkup(token, attr, md);
        updateStepBasedOnStepSection(token, attr, md);
      }
    });
  });
}

/**
 * Initialize sections meta list
 *
 * @param {Object} token - Markdown token
 * @param {import("markdown-it").default} md - Markdown-It instances
 */
function initializeSectionsMeta(token, md) {
  if (token.section) {
    if (token.tag === "section-step" && !md.sections[token.section].steps) {
      md.sections[token.section].steps = [];
    }
    if (token.markup === "#" || token.markup === "##") {
      md.sections[token.section] = md.sections[token.section] || {};
    }

    md.sections[token.section]?.steps?.push({});
  }
}

/**
 * Update section list based on attribute values mentioned in comment decorate
 *
 * @param {Object} token - Markdown token
 * @param {Array} attr - Attribute key & value
 * @param {import("markdown-it").default} md - Markdown-It instances
 */
function updateSectionMetaBasedOnMarkup(token, attr, md) {
  if (token.markup === "##") {
    md.sections[token.section] = {
      [attr[0]]: convertAttributeValueBasedOnItsType(attr[1]),
      ...md.sections[token.section],
    };
  }
}

/**
 * Update section list based on attribute values declared in <section-step>
 *
 * @param {Object} token - Markdown token
 * @param {Array} attr - Attribute key & value
 * @param {import("markdown-it").default} md - Markdown-It instances
 */
function updateStepBasedOnStepSection(token, attr, md) {
  if (token.tag === "section-step") {
    const steps = md.sections[token.section].steps;
    const currentStepIndex = steps.length - 1;
    const currentStep = steps[currentStepIndex];

    steps[currentStepIndex] = {
      [attr[0]]: convertAttributeValueBasedOnItsType(attr[1]),
      ...currentStep,
    };
  }
}
