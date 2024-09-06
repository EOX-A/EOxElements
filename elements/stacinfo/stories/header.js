/**
 * Individual STAC properties can be rendered in the header by using the `header` property.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const HeaderPropertiesStory = {
  args: {
    for: `${window.location.href.split("iframe.html")[0]}/collection.json`,
    header: ["title"],
  },
};

export default HeaderPropertiesStory;
