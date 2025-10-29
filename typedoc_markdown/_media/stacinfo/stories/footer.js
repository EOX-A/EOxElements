/**
 * The `footer` allows to highlight one or more properties in a dedicated section.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const FooterStory = {
  args: {
    for: `${window.location.href.split("iframe.html")[0]}/collection.json`,
    footer: ["sci:citation"],
  },
};

export default FooterStory;
