import { BasicStory } from "./";

/**
 * If no `properties` whitelist is defined, all properties from the STAC JSON are rendered.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const AllPropertiesStory = {
  args: {
    ...BasicStory.args,
    properties: undefined,
    featured: undefined,
    footer: undefined,
  },
};

export default AllPropertiesStory;
