/**
 * In its most basic form, the element fetches a STAC file and displays its properties.
 *
 * @returns {object} The story configuration with arguments for the component.
 */
const PrimaryStory = {
  args: {
    for: `${window.location.href.split("iframe.html")[0]}/collection.json`,
    header: ["title"],
    tags: ["tags"],
    body: ["satellite", "sensor", "agency", "extent", "updated"],
    featured: ["description", "providers", "assets", "links"],
    footer: ["sci:citation"],
    "click:link": (e) => console.log("Link clicked! Detail: ", e.detail),
  },
};

export default PrimaryStory;
