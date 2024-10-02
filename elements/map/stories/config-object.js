import { html } from "lit";

/**
 * A single config object for all the attribute and properties
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const ConfigObjectStory = {
  args: {
    config: {
      controls: {
        Zoom: {},
      },
      layers: [{ type: "Tile", source: { type: "OSM" } }],
      view: {
        center: [16.8, 48.2],
        zoom: 9,
      },
    },
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${args.config}
    ></eox-map>
  `,
};

export default ConfigObjectStory;
