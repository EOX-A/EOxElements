import { html } from "lit";

const ExtentLimit = {
  args: {
    endpoint: "/opencage-mock-data.json",
    label: "Search",
    style: "position: absolute; top: 36px; left: 32px; z-index: 12;",
    button: true,
    small: true,
    extent: "-125.0,24.0,-66.0,49.0", // North America extent
    tooltip: "Search within North America",
    tooltipDirection: "right",
    storyAdditionalComponents: {
      "eox-map": {
        id: "geosearch-map-extent",
        animationOptions: { duration: 400, padding: [10, 10, 10, 10] },
        config: {
          layers: [{ type: "Tile", source: { type: "OSM" } }],
          view: { center: [-95, 38], zoom: 4 },
        },
        style: "width: 100%; height: 500px;",
      },
    },
  },
  render: (args) => {
    return html`
      <eox-geosearch
        .endpoint=${args.endpoint}
        .label=${args.label}
        style=${args.style}
        ?button=${args.button}
        ?small=${args.small}
        .extent=${args.extent}
        .tooltip=${args.tooltip}
        .tooltipDirection=${args.tooltipDirection}
      ></eox-geosearch>
      <eox-map
        id=${args.storyAdditionalComponents["eox-map"].id}
        .animationOptions=${args.storyAdditionalComponents["eox-map"]
          .animationOptions}
        .config=${args.storyAdditionalComponents["eox-map"].config}
        style=${args.storyAdditionalComponents["eox-map"].style}
      ></eox-map>
    `;
  },
};

export default ExtentLimit;
