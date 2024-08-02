/**
 * In its most basic form, the element fetches a STAC file and displays its properties.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const BasicStory = {
  args: {
    for: `${window.location.href.split("iframe.html")[0]}/collection.json`,
    header: ["title"],
    tags: ["tags"],
    properties: ["satellite", "sensor", "agency", "extent"],
    featured: ["description", "providers", "assets", "links"],
    footer: ["sci:citation"],
  },
};

export default BasicStory;
