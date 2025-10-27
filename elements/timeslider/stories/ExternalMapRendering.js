import { html } from "lit";
/**
 * Generates a story configuration for the Primary TimeSlider.
 *
 * @returns {Object} The story configuration with arguments for the component and a play function for interaction testing.
 */
export const ExternalMapRendering = {
  args: {
    center: [12, 42],
    zoom: 10,
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
          max: 40,
        },
      },
    ],
    externalMapRendering: true,
    animate: true,
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
      .animate=${args.animate}
      @update=${args.update}
    ></eox-timeslider>
    <script>
      const eoxMap = document.querySelector("eox-map");
      let items = [];
      const createLayerGroup = (
        items,
        displayFilter = (i) =>
          i.properties.datetime === items[items.length - 1].properties.datetime
      ) => ({
        type: "Group",
        layers: [
          ...items
            .filter((i) => displayFilter(i))
            .map((i) => ({
              type: "Tile",
              source: {
                type: "TileJSON",
                url: i.assets.tilejson.href,
                crossOrigin: "anonymous",
              },
              properties: {
                id: i.id,
                title: "test",
              },
            })),
        ],
        properties: {
          id: "sentinel-2",
          title: items.length ? items[0].properties.datetime : "dummy title",
          timeControlValues:
            items?.map((f) => ({
              date: f.properties.datetime,
              itemId: f.id,
              cloudCoverage: f.properties["eo:cloud_cover"],
            })) || [],
          timeControlProperty: "dummy",
        },
      });

      const fetchItems = async (extent = eoxMap.lonLatExtent) => {
        const url =
          "https://planetarycomputer.microsoft.com/api/stac/v1/search?collections=sentinel-2-l2a&bbox=" +
          eoxMap.lonLatExtent +
          "&limit=200&datetime=2025-01-01T00:00:00Z/2026-01-01T00:00:00Z&sortby=-datetime";
        const searchResponse = await fetch(url);
        const { features } = await searchResponse.json();
        return features;
      };

      // Listen for timeslider updates and update map layers accordingly
      document.querySelector("eox-timeslider").addEventListener("update", (e) => {
        if (!items.length) return;
        eoxMap.layers = [
          createLayerGroup(
            items,
            (i) =>
              i.properties.datetime ===
              e.detail.selectedItems["sentinel-2"]?.[0].originalDate
          ),
          eoxMap.layers[0],
        ];
      });
      document.querySelector("eox-timeslider").addEventListener("export", (e) => {
        const mapLayers = [];
        for (const dateKey in e.detail.selectedRangeItems) {
          const date = e.detail.selectedRangeItems[dateKey];
          const layers = [];
          let center = null;
          for (const itemKey in date) {
            const item = items.find((item) => item.id === date[itemKey].itemId);
            center = item.properties["proj:centroid"];
            layers.push(createXyzLayer(item));
          }
          layers.push(eoxMap.layers[0]);
          mapLayers.push({
            layers,
            center: [center.lon, center.lat],
            zoom: 9,
            date: dateKey,
          });
        }
        e.detail.generate({
          mapLayers,
        });
      });

      // Initial rendering
      document.querySelector("eox-map").layers = [
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

      document.querySelector("eox-map").map.on("moveend", async () => {
        items = await fetchItems(eoxMap.currentLonLatExtent);
        eoxMap.layers = [createLayerGroup(items), eoxMap.layers[0]];
      });
    </script>
  `,
};
export default ExternalMapRendering;
