import { html } from "lit";

/**
 * Changing the properties `zoom`, `center` or `zoomExtent` will trigger animations
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const AnimationsStory = {
  args: {
    layers: [
      {
        type: "Tile",
        properties: {
          id: "osm",
          title: "Background",
        },
        source: { type: "OSM" },
      },
    ],
    animationOptions: {
      duration: 500,
    },
    center: [16.8, 48.2],
    zoom: 7,
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      id="animationMap"
      style="width: 100%; height: 300px;"
      .center=${args.center}
      .layers=${args.layers}
      .zoom=${args.zoom}
      .animationOptions=${args.animationOptions}
    >
    </eox-map>
    <button
      @click=${() => {
        const eoxMap = /** @type {import("../src/main").EOxMap} **/ (
          /** @type {any} **/ document.querySelector("#animationMap")
        );
        eoxMap.zoom = eoxMap.zoom + 1;
      }}
    >
      zoom in animation
    </button>
    <button
      @click=${() => {
        const eoxMap = /** @type {import("../src/main").EOxMap} **/ (
          /** @type {any} **/ document.querySelector("#animationMap")
        );
        eoxMap.zoom = eoxMap.zoom - 1;
      }}
    >
      zoom out animation
    </button>
  `,
};

export default AnimationsStory;
