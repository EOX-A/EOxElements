/**
 * Individual STAC properties can be rendered as tags by using the `tags` property.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const TagsStory = {
  args: {
    for: `${window.location.href.split("iframe.html")[0]}/collection.json`,
    tags: ["themes"],
  },
};

export default TagsStory;
