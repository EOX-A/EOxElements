import { html } from "lit";
import proj4 from "proj4";

const ExternalMapRendering = {
  args: {
    endpoint: "/opencage-mock-data.json",
    label: "Search",
    style: "position: absolute; top: 36px; left: 32px; z-index: 12;",
    externalMapRendering: true,
    geosearchSelect: (event) => {
      const eoxMap = document.querySelector("eox-map");
      const viewProjection = eoxMap.map.getView().getProjection().getCode();

      let sw = proj4("EPSG:4326", viewProjection, [
        event.detail.bounds.southwest.lng,
        event.detail.bounds.southwest.lat,
      ]);
      let ne = proj4("EPSG:4326", viewProjection, [
        event.detail.bounds.northeast.lng,
        event.detail.bounds.northeast.lat,
      ]);
      const zoomExtent = [sw[0], sw[1], ne[0], ne[1]];

      eoxMap.map.getView().fit(zoomExtent, {
        padding: [100, 100, 100, 100],
        duration: 400,
      });

      document.querySelector("p strong").textContent = event.detail.formatted;
    },
    storyAdditionalComponents: {
      "eox-map": {
        id: "geosearch-map-primary",
        animationOptions: { duration: 400, padding: [10, 10, 10, 10] },
        config: {
          layers: [{ type: "Tile", source: { type: "OSM" } }],
          view: { center: [15, 48], zoom: 3 },
        },
        style: "width: 100%; height: 500px;",
      },
    },
  },
  render: (args) => {
    return html`
      <eox-geosearch
        .endpoint="${args.endpoint}"
        .label="${args.label}"
        ?externalMapRendering="${args.externalMapRendering}"
        @geosearchSelect="${args.geosearchSelect}"
        style="${args.style}"
      ></eox-geosearch>
      <eox-map
        id="${args.storyAdditionalComponents["eox-map"].id}"
        .animationOptions="${args.storyAdditionalComponents["eox-map"]
          .animationOptions}"
        .config="${args.storyAdditionalComponents["eox-map"].config}"
        style="${args.storyAdditionalComponents["eox-map"].style}"
      ></eox-map>
      <p>Selected: <strong></strong></p>
    `;
  },
};

export default ExternalMapRendering;
