import { EOxGeoSearch } from "./main";
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
    endpoint:
      "https://api.opencagedata.com/geocode/v1/json?=&q={{query}}&key={{key}}&limit={{limit}}",
    key: "",
  },
  render: (args) => {
    return html`
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; right: 32px; z-index: 12;"
        direction="left"
        limit="8"
        .onSelect="${(item) => {
          console.log(item.zoomExtent);
          document.querySelector("eox-map#geosearch-map-primary").zoomExtent =
            item.zoomExtent;
        }}"
        .endpoint="${args.endpoint}"
        .key="${args.key}"
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
        Set both the <code>endpoint</code> and <code>key</code> attributes to switch to actual real-time API access.
      </p>
    `;
  },
};

export const ButtonMode = {
  args: {
    center: [15.0, 48.0],
    endpoint:
      "https://api.opencagedata.com/geocode/v1/json?=&q={{query}}&key={{key}}&limit={{limit}}",
    key: "",
  },
  render: (args) => {
    return html`
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; right: 32px; z-index: 12;"
        small
        button
        direction="left"
        limit="8"
        .onSelect="${(item) => {
          console.log(item.zoomExtent);
          document.querySelector("eox-map#geosearch-map-primary").zoomExtent =
            item.zoomExtent;
        }}"
        .endpoint="${args.endpoint}"
        .key="${args.key}"
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
        Set both the <code>endpoint</code> and <code>key</code> attributes to switch to actual real-time API access.
      </p>
    `;
  },
};

export const CustomAlignments = {
  args: {
    center: [15.0, 48.0],
    endpoint:
      "https://api.opencagedata.com/geocode/v1/json?=&q={{query}}&key={{key}}&limit={{limit}}",
    key: "",
  },
  render: (args) => {
    return html`
      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; right: 32px; z-index: 12;"
        small
        button
        direction="left"
        limit="8"
        .onSelect="${(item) => {
          console.log(item.zoomExtent);
          document.querySelector("eox-map#geosearch-map-primary").zoomExtent =
            item.zoomExtent;
        }}"
        .endpoint="${args.endpoint}"
        .key="${args.key}"
      ></eox-geosearch>

      <eox-geosearch
        label="Search"
        style="position: absolute; top: 36px; left: 32px; z-index: 12;"
        small
        button
        direction="right"
        limit="8"
        .onSelect="${(item) => {
          console.log(item.zoomExtent);
          document.querySelector("eox-map#geosearch-map-primary").zoomExtent =
            item.zoomExtent;
        }}"
        .endpoint="${args.endpoint}"
        .key="${args.key}"
      ></eox-geosearch>

      <eox-geosearch
        label="Search"
        style="position: absolute; bottom: 96px; right: 32px; z-index: 12;"
        small
        button
        direction="top"
        limit="8"
        .onSelect="${(item) => {
          console.log(item.zoomExtent);
          document.querySelector("eox-map#geosearch-map-primary").zoomExtent =
            item.zoomExtent;
        }}"
        .endpoint="${args.endpoint}"
        .key="${args.key}"
      ></eox-geosearch>

      <eox-geosearch
        label="Search"
        style="position: absolute; bottom: 96px; left: 32px; z-index: 12;"
        small
        button
        direction="right"
        limit="8"
        .onSelect="${(item) => {
          console.log(item.zoomExtent);
          document.querySelector("eox-map#geosearch-map-primary").zoomExtent =
            item.zoomExtent;
        }}"
        .endpoint="${args.endpoint}"
        .key="${args.key}"
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
        style="width: 100%; height: 700px;"
      >
      </eox-map>

      <p>
        Set both the <code>endpoint</code> and <code>key</code> attributes to switch to actual real-time API access.
      </p>
    `;
  },
};
