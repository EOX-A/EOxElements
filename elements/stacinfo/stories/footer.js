import { BasicStory } from "./";

/**
 * The footer allows to highlight one or more properties.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const FooterStory = {
  args: {
    ...BasicStory.args,
    featured: ["description", "extent"],
    footer: ["osc:project"],
  },
};

export default FooterStory;
