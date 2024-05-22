import { html } from "lit";

export default {
  title: "Elements/eox-geosearch",
  tags: ["autodocs"],
  component: "eox-geosearch",
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  args: {
    center: [15.0, 48.0],
    endpoint: "./opencage-mock-data.json",
  },
  render: (args) => {
    return html`
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; right: 32px; z-index: 12;"
        list-direction="left"
        results-direction="down"
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
        .zoomExtent=${[
          -8172569.397164129, -7410537.976763416, -5969880.614083453,
          -2491403.9138794523,
        ]}
        .layers="${[{ type: "Tile", source: { type: "OSM" } }]}"
        .zoom="${0}"
        style="width: 100%; height: 500px;"
      >
      </eox-map>

      <p>
        Set both the <code>endpoint</code> and <code>key</code> attributes to
        enable real-time API access.
      </p>
    `;
  },
};

export const ButtonMode = {
  args: {
    center: [15.0, 48.0],
    endpoint: "./opencage-mock-data.json",
  },
  render: (args) => {
    return html`
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; right: 32px; z-index: 12;"
        small
        button
        list-direction="left"
        results-direction="down"
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
        .zoomExtent=${[
          -8172569.397164129, -7410537.976763416, -5969880.614083453,
          -2491403.9138794523,
        ]}
        .layers="${[{ type: "Tile", source: { type: "OSM" } }]}"
        .zoom="${0}"
        style="width: 100%; height: 500px;"
      >
      </eox-map>

      <p>
        Set both the <code>endpoint</code> and <code>key</code> attributes to
        enable real-time API access.
      </p>
    `;
  },
};

export const CustomAlignments = {
  args: {
    center: [15.0, 48.0],
    endpoint: "./opencage-mock-data.json",
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
        .onSelect="${(item) =>
          (document.querySelector("eox-map#geosearch-map-primary").zoomExtent =
            item.zoomExtent)}"
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
        .zoomExtent=${[
          -8172569.397164129, -7410537.976763416, -5969880.614083453,
          -2491403.9138794523,
        ]}
        .layers="${[{ type: "Tile", source: { type: "OSM" } }]}"
        .zoom="${0}"
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
