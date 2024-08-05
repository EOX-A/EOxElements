import { BasicStory } from "./";

/**
 * If no `properties` whitelist is defined, all properties from the STAC JSON are rendered.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const AllPropertiesStory = {
  args: {
    ...BasicStory.args,
    // @ts-ignore
    properties: undefined,
    // @ts-ignore
    featured: undefined,
    // @ts-ignore
    footer: undefined,
  },
};

export default AllPropertiesStory;
