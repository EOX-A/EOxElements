import { html } from "lit";
/**
 * Generates a story configuration for the Primary TimeSlider.
 *
 * @returns {Object} The story configuration with arguments for the component and a play function for interaction testing.
 */
export const TestStory = {
  args: {
    center: [10000, 5500000],
    zoom: 5,
    for: "eox-map",
    layerIdKey: "id",
    titleKey: "name",
    filters: [
      {
        key: "cloudCoverage",
        title: "Cloud Coverage",
        type: "range",
        expanded: true,
        min: 0,
        max: 100,
        step: 5,
        state: {
          min: 0,
          max: 100,
        },
      },
    ],
    externalMapRendering: true,
  },
  render: (args) => html`
    <eox-map
      id="primary"
      style="width: 100%; height: 500px;"
      .zoom=${args.zoom}
      .center=${args.center}
    ></eox-map>
    <eox-timeslider
      .for=${args.for}
      .layerIdKey=${args.layerIdKey}
      .titleKey=${args.titleKey}
      .filters=${args.filters}
      .externalMapRendering=${args.externalMapRendering}
      @update=${args.update}
    ></eox-timeslider>
    <script>
      const init = async () => {
        // Fetch collection
        const collectionResponse = await fetch(
          "https://api.explorer.eopf.copernicus.eu/stac/collections/sentinel-2-l2a",
        );
        const collectionData = await collectionResponse.json();
        // Fetch items (stored as features)
        const itemsResponse = await fetch(
          collectionData.links.find((l) => l.rel === "items").href,
        );
        const { features } = await itemsResponse.json();
        const items = features;
        // Layer creation function
        const createXyzLayer = (item) => ({
          type: "Tile",
          source: {
            type: "ImageTile",
            url: item?.links.find((l) => l.rel === "xyz").href,
          },
          properties: {
            id: collectionData.title,
            title: collectionData.title,
            timeControlValues: items.map((f) => ({
              date: f.properties.datetime,
              itemId: f.id,
              cloudCoverage: f.properties["eo:cloud_cover"],
            })),
            timeControlProperty: "dummy",
          },
        });
        // Listen for timeslider updates and update map layers accordingly
        document
          .querySelector("eox-timeslider")
          .addEventListener("update", (e) => {
            document.querySelector("eox-map").layers = [
              createXyzLayer(
                items.find(
                  (item) =>
                    item.id ===
                    e.detail.selectedItems[collectionData.title]?.[0].itemId,
                ),
              ),
              document.querySelector("eox-map").layers[1],
            ];
          });
        // Initial rendering
        document.querySelector("eox-map").layers = [
          createXyzLayer(),
          {
            type: "Tile",
            properties: {
              id: "OSM",
            },
            source: {
              type: "OSM",
            },
          },
        ];
      };
      init();
    </script>
  `,
};
export default TestStory;
