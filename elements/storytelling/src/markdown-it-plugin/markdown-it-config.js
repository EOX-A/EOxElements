import yaml from "js-yaml";

/**
 * Extends markdown-it instance with a custom plugin to extract basic config for StoryTelling
 *
 * @param {import("markdown-it").default} md - Markdown-It instances
 */
function markdownItConfig(md) {
  md.core.ruler.before("normalize", "extract-config", (state) => {
    const regex = /^\s*---\s*\n([\s\S]+?)\n\s*---\s*/;
    const match = state.src.match(regex);

    // Init config with null
    md.config = {};

    if (match) {
      try {
        md.config = yaml.load(match[1]);
        state.src = state.src.replace(match[0], "");
      } catch (e) {
        console.error("Error parsing YAML front matter:", e);
        return null;
      }
    }
  });
}

export default markdownItConfig;
