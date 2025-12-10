import { html } from "lit";

const Primary = {
  args: {
    endpoint: "/opencage-mock-data.json",
    label: "Search",
    style: "position: absolute; top: 36px; left: 32px; z-index: 12;",
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
        style="${args.style}"
      ></eox-geosearch>
      <eox-map
        id="${args.storyAdditionalComponents["eox-map"].id}"
        .animationOptions="${args.storyAdditionalComponents["eox-map"]
          .animationOptions}"
        .config="${args.storyAdditionalComponents["eox-map"].config}"
        style="${args.storyAdditionalComponents["eox-map"].style}"
      ></eox-map>
    `;
  },
};

export default Primary;
