import { html } from "lit";

/**
 * Prevent `eox-map` mouse-scroll or drag-touch event while scrolling a page.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const PreventScrollStory = {
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
      preventScroll: true,
    },
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      style="width: 100%; height: 300px;"
      .config=${args.config}
    ></eox-map>
  `,
};

export default PreventScrollStory;
