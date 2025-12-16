import { html } from "lit";

/**
 * To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const ABCompareStory = {
  argTypes: {
    enabled: {
      control: { type: "select" },
      options: [undefined, "first", "second"],
    },
  },
  args: {
    layers: [{ type: "Tile", source: { type: "OSM" } }],
    slot: "first",
    id: "compareA",
    storyAdditionalComponents: {
      "eox-map": {
        layers: [
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
        id: "compareB",
        slot: "second",
        sync: "eox-map#compareA",
      },
      "eox-map-compare": {
        enabled: undefined,
        storyImport: false,
        storyWrap: true,
      },
    },
    storyTemplateWrap: `<eox-map-compare>{{content}}</eox-map-compare>`,
    storyStyle: `
      eox-map-compare,
      eox-map {
        width: 100%;
        height: 100%;
      }
    `,
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <style>
      eox-map-compare,
      eox-map {
        width: 100%;
        height: 100%;
      }
    </style>
    <eox-map-compare
      enabled=${args.storyAdditionalComponents["eox-map-compare"].enabled}
    >
      <eox-map slot=${args.slot} id=${args.id} .layers=${args.layers}></eox-map>
      <eox-map
        id=${args.storyAdditionalComponents["eox-map"].id}
        slot=${args.storyAdditionalComponents["eox-map"].slot}
        sync=${args.storyAdditionalComponents["eox-map"].sync}
        .layers=${args.storyAdditionalComponents["eox-map"].layers}
      ></eox-map>
    </eox-map-compare>
  `,
};

export default ABCompareStory;
