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
    style: "width: 100%; height: 300px;",
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      .center=${args.center}
      .layers=${args.layers}
      .zoom=${args.zoom}
      .animationOptions=${args.animationOptions}
      style=${args.style}
    >
    </eox-map>
  `,
};

export default AnimationsStory;
