import { BasicStory } from "./";

/**
 * If only one property is whitelisted, then it renders the content full-width and without the key.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const SinglePropertyStory = {
  args: {
    ...BasicStory.args,
    header: [],
    subheader: [],
    properties: ["description"],
    featured: [],
    footer: [],
  },
};

export default SinglePropertyStory;
