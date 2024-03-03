// Regular expression to match the custom tag expressions
export const TAGS_EXPR =
  /^<!-- ?\{(?:([a-z0-9]+)(\^[0-9]*)?: ?)?(.*)} ?-->\n?$/;

// Mapping of tag to token type. This helps in identifying the opening tags and their corresponding Markdown-it token types.
export const TAGS_OPENING = {
  li: ["list_item"],
  ul: ["bullet_list"],
  p: ["paragraph"],
  ol: ["ordered_list"],
  blockquote: ["blockquote"],
  h1: ["heading"],
  h2: ["heading"],
  h3: ["heading"],
  h4: ["heading"],
  h5: ["heading"],
  h6: ["heading"],
  a: ["link"],
  code: ["code_inline", "code_block", "fence"],
};

// Self-closing tags
export const TAGS_SELF_CLOSING = {
  hr: true,
  image: true,
};
