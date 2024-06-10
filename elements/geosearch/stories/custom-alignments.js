import { html } from "lit";

const CustomAlignments = {
  args: {
    endpoint: "/opencage-mock-data.json",
  },
  render: (args) => {
    return html`
      <!-- Top Right -->
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; right: 32px; z-index: 12;"
        small
        button
        list-direction="left"
        results-direction="down"
        .endpoint="${args.endpoint}"
      ></eox-geosearch>

      <!-- Top Left -->
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; left: 32px; z-index: 12;"
        small
        button
        list-direction="right"
        results-direction="down"
        .onSelect="${(item) =>
          (document.querySelector("eox-map#geosearch-map-primary").zoomExtent =
            item.zoomExtent)}"
        .endpoint="${args.endpoint}"
      ></eox-geosearch>

      <!-- Bottom Right -->
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 296px; right: 32px; z-index: 12;"
        small
        button
        list-direction="left"
        results-direction="up"
        .onSelect="${(item) =>
          (document.querySelector("eox-map#geosearch-map-primary").zoomExtent =
            item.zoomExtent)}"
        .endpoint="${args.endpoint}"
      ></eox-geosearch>

      <!-- Bottom Left -->
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 296px; left: 32px; z-index: 12;"
        small
        button
        list-direction="right"
        results-direction="up"
        .onSelect="${(item) =>
          (document.querySelector("eox-map#geosearch-map-primary").zoomExtent =
            item.zoomExtent)}"
        .endpoint="${args.endpoint}"
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
        style="width: 100%; height: 600px;"
      >
      </eox-map>

      <p>
        Set both the <code>endpoint</code> and <code>key</code> attributes to
        enable real-time API access.
      </p>
    `;
  },
};

export default CustomAlignments;
