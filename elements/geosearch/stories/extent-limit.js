import { html } from "lit";

const ExtentLimit = {
  args: {
    endpoint: "/opencage-mock-data.json",
    extent: "-125.0,24.0,-66.0,49.0", // North America extent
    tooltip: "Search within North America",
    tooltipDirection: "right",
  },
  render: (args) => {
    return html`
      <eox-geosearch
        label="Search"
        button
        small
        style="position: absolute; top: 36px; left: 32px; z-index: 12;"
        .endpoint="${args.endpoint}"
        .extent="${args.extent}"
        .tooltip="${args.tooltip}"
        .tooltipDirection="${args.tooltipDirection}"
      ></eox-geosearch>

      <eox-map
        id="geosearch-map-extent"
        .animationOptions=${{
          duration: 400,
          padding: [10, 10, 10, 10],
        }}
        .config=${{
          layers: [{ type: "Tile", source: { type: "OSM" } }],
          view: { center: [-95, 38], zoom: 4 },
        }}
        style="width: 100%; height: 500px;"
      >
      </eox-map>
    `;
  },
};

export default ExtentLimit;
