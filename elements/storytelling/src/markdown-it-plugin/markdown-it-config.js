import yaml from "js-yaml";
import { checkMarkdownVersion } from "../helpers";

/**
 * Extends markdown-it instance with a custom plugin to extract basic config for StoryTelling
 *
 * @param {import("markdown-it").default} md - Markdown-It instances
 */
function markdownItConfig(md) {
  md.core.ruler.before("normalize", "extract-config", (state) => {
    const regex = /^\s*---\s*\n([\s\S]+?)\n\s*---\s*/;
    const match = state.src.match(regex);

    // Init config with {}
    md.config = {};

    if (match) {
      try {
        // Config generate with help of yaml load
        md.config = yaml.load(match[1]);
        state.src = state.src.replace(match[0], "");
      } catch (e) {
        console.error("Error parsing frontmatter:", e);
        return null;
      }
    }

    md.config.version = Number(checkMarkdownVersion(md.config.version));
  });
}

export default markdownItConfig;
