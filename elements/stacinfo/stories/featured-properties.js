import { BasicStory } from "./";

/**
 * Individual STAC properties can be rendered in a more prominent way by using the `featured` property.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const FeaturedPropertiesStory = {
  args: {
    ...BasicStory.args,
    featured: ["description", "extent"],
    footer: undefined,
  },
};

export default FeaturedPropertiesStory;
