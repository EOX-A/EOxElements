import { BasicStory } from "./";

/**
 * If only one property is whitelisted, then it renders the content full-width and without the key.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const SinglePropertyStory = {
  args: {
    ...BasicStory.args,
    // @ts-ignore
    header: [],
    // @ts-ignore
    subheader: [],
    properties: ["description"],
    // @ts-ignore
    featured: [],
    // @ts-ignore
    footer: [],
  },
};

export default SinglePropertyStory;
