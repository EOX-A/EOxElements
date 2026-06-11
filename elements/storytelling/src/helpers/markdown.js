import markdownit from "markdown-it";
import markdownitFootnote from "markdown-it-footnote";
import DOMPurify from "isomorphic-dompurify";
import {
  markdownItConfig,
  markdownItDecorateImproved,
} from "../markdown-it-plugin/index.js";
import { getCustomEleHandling } from "./misc.js";
import { DEFAULT_SENSITIVE_TAGS } from "../enums/index.js";

export const md = /** @type {import("../types").CustomMarkdownIt} */ (
  markdownit({ html: true, linkify: true })
);

md.use(markdownItDecorateImproved).use(markdownItConfig);
md.use(markdownitFootnote);

/**
 * Renders markdown to HTML and sanitizes it.
 *
 * @param {string} markdown - The markdown content to render.
 * @returns {string} The sanitized HTML.
 */
export function renderAndSanitizeMarkdown(markdown) {
  if (!markdown) return "";
  const unsafeHTML = md.render(markdown);
  return DOMPurify.sanitize(unsafeHTML, {
    CUSTOM_ELEMENT_HANDLING: getCustomEleHandling(md),
    ADD_TAGS: DEFAULT_SENSITIVE_TAGS,
  });
}
