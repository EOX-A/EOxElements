import { html } from "lit";

/**
 * To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const ABCompareStory = {
  args: {
    layersA: [{ type: "Tile", source: { type: "OSM" } }],
    layersB: [
      {
        type: "Tile",
        source: {
          type: "TileWMS",
          url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
          params: {
            LAYERS: "AWS_VIS_WIND_V_10M",
          },
        },
      },
    ],
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <style>
      eox-map-compare,
      eox-map {
        width: 100%;
        height: 300px;
      }
    </style>
    <eox-map-compare>
      <eox-map slot="first" id="compareA" .layers=${args.layersA}></eox-map>
      <eox-map
        slot="second"
        sync="eox-map#compareA"
        .layers=${args.layersB}
      ></eox-map>
    </eox-map-compare>
    <button
      @click=${() =>
        document
          .querySelector("eox-map-compare")
          .setAttribute("enabled", "first")}
    >
      First
    </button>
    <button
      @click=${() =>
        document
          .querySelector("eox-map-compare")
          .setAttribute("enabled", "second")}
    >
      Second
    </button>
    <button
      @click=${() =>
        document.querySelector("eox-map-compare").removeAttribute("enabled")}
    >
      Both (default)
    </button>
  `,
};

export default ABCompareStory;
