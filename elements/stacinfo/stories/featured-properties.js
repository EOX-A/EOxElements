/**
 * Individual STAC properties can be rendered in a more prominent way by using the `featured` property.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const FeaturedPropertiesStory = {
  args: {
    for: `${window.location.href.split("iframe.html")[0]}/collection.json`,
    featured: ["description", "extent"],
  },
};

export default FeaturedPropertiesStory;
