import { html } from "lit";
/**
 * Generates a story configuration for the Primary TimeSlider.
 *
 * @returns {Object} The story configuration with arguments for the component and a play function for interaction testing.
 */
export const ExternalMapRendering = {
  args: {
    center: [269335.4, 5288649.6],
    zoom: 9,
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
        // Exclude the first four items (indices 0, 1, 2, 4) from features
        const excludeIndices = new Set([0, 1, 2, 4]);
        const items = features.filter((_, i) => !excludeIndices.has(i));
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
            const eoxMap = document.querySelector("eox-map");
            const item = items.find(
              (item) =>
                item.id ===
                e.detail.selectedItems[collectionData.title]?.[0].itemId,
            );
            createXyzLayer(item);
            const center = item.properties["proj:centroid"];
            eoxMap.layers = [createXyzLayer(item), eoxMap.layers[0]];
            eoxMap.center = [center.lon, center.lat];
          });
        document
          .querySelector("eox-timeslider")
          .addEventListener("export", (e) => {
            const eoxMap = document.querySelector("eox-map");
            const mapLayers = [];
            for (const dateKey in e.detail.selectedRangeItems) {
              const date = e.detail.selectedRangeItems[dateKey];
              const layers = [];
              let center = null;
              for (const itemKey in date) {
                const item = items.find(
                  (item) => item.id === date[itemKey].itemId,
                );
                center = item.properties["proj:centroid"];
                layers.push(createXyzLayer(item));
              }
              layers.push(eoxMap.layers[0]);
              mapLayers.push({
                layers,
                center: [center.lon, center.lat],
                zoom: 9,
              });
            }
            e.detail.generate({
              mapLayers,
            });
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
export default ExternalMapRendering;
