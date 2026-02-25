/**
 * Demonstrates how to filter STAC lists (assets, links, etc.) using a `filter` function.
 *
 * You can pass a `Filter` object ({ key, filter }) to any section array.
 * The `filter` function receives the list item and must return a boolean to include/exclude it.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const ItemStory = {
  args: {
    for: `${window.location.href.split("iframe.html")[0]}/ports_cars_aq/2020/Genoa.json`,
    header: ["id", "title"],
    tags: ["platform", "instruments", "constellation"],
    body: [
      "description",
      "sci:citation",
      "processing:software",
      "eopf:instrument_mode",
      "eo:cloud_cover",
      "view:sun_elevation",
    ],
    featured: [
      {
        key: "assets",
        filter: (val) => val.type?.includes("image/tiff"),
      },
      {
        key: "links",
        filter: (val) => val.type?.includes("text/html"),
      },
    ],
    footer: ["start_datetime", "end_datetime"],
  },
};
export default ItemStory;
