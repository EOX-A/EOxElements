import { html } from "lit";

const CustomAlignments = {
  args: {
    endpoint: "/opencage-mock-data.json",
    label: "Search",
    style: "position: absolute; z-index: 12;",
    small: true,
    button: true,
    storyAdditionalComponents: {
      "eox-map": {
        id: "geosearch-map-primary",
        animationOptions: { duration: 400, padding: [10, 10, 10, 10] },
        config: {
          layers: [{ type: "Tile", source: { type: "OSM" } }],
          view: { center: [15, 48], zoom: 3 },
        },
        style: "width: 100%; height: 600px;",
      },
    },
  },
  render: (args) => {
    // Event handler as stringified function
    const onSelectHandler = `item => {
      document.querySelector('eox-map#geosearch-map-primary').zoomExtent = item.zoomExtent;
    }`;
    return html`
      <!-- Top Right -->
      <eox-geosearch
        .endpoint="${args.endpoint}"
        .label="${args.label}"
        style="top: 36px; right: 32px; ${args.style}"
        ?small="${args.small}"
        ?button="${args.button}"
        list-direction="left"
        results-direction="down"
      ></eox-geosearch>
      <!-- Top Left -->
      <eox-geosearch
        .endpoint="${args.endpoint}"
        .label="${args.label}"
        style="top: 36px; left: 32px; ${args.style}"
        ?small="${args.small}"
        ?button="${args.button}"
        list-direction="right"
        results-direction="down"
        .onSelect="${onSelectHandler}"
      ></eox-geosearch>
      <!-- Bottom Right -->
      <eox-geosearch
        .endpoint="${args.endpoint}"
        .label="${args.label}"
        style="top: 296px; right: 32px; ${args.style}"
        ?small="${args.small}"
        ?button="${args.button}"
        list-direction="left"
        results-direction="up"
        .onSelect="${onSelectHandler}"
      ></eox-geosearch>
      <!-- Bottom Left -->
      <eox-geosearch
        .endpoint="${args.endpoint}"
        .label="${args.label}"
        style="top: 296px; left: 32px; ${args.style}"
        ?small="${args.small}"
        ?button="${args.button}"
        list-direction="right"
        results-direction="up"
        .onSelect="${onSelectHandler}"
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

export default CustomAlignments;
