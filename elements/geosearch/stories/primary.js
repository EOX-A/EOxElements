import { html } from "lit";

const Primary = {
  args: {
    endpoint: "/opencage-mock-data.json",
  },
  render: (args) => {
    return html`
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; left: 32px; z-index: 12;"
        .endpoint="${args.endpoint}"
        .for="${document.querySelector("#geosearch-map-primary")}"
      ></eox-geosearch>

      <eox-map
        id="geosearch-map-primary"
        .animationOptions=${{
          duration: 400,
          padding: [10, 10, 10, 10],
        }}
        .config=${{
          layers: [{ type: "Tile", source: { type: "OSM" } }],
          view: { center: [15, 48], zoom: 3 },
        }}
        style="width: 100%; height: 500px;"
      >
      </eox-map>
    `;
  },
};

export default Primary;
