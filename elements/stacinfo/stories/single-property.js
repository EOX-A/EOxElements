/**
 * If only one body property is whitelisted, then it renders the content full-width and without the key.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const SinglePropertyStory = {
  args: {
    for: `${window.location.href.split("iframe.html")[0]}/collection.json`,
    body: ["description"],
  },
};

export default SinglePropertyStory;
