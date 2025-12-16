import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * Calendar date picker displayed inline (not in popup mode)
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const DatePickerStandaloneStory = {
  args: {
    layerIdKey: STORY_ARGS.layerIdKey,
    titleKey: STORY_ARGS.titleKey,
    filters: STORY_ARGS.filters,
    externalMapRendering: STORY_ARGS.externalMapRendering,
    popup: true,
    for: "eox-map#date-picker-standalone",
    select: (e) => {
      console.log(e.detail);
    },
    storyAdditionalComponents: {
      "eox-map": {
        id: "date-picker-standalone",
        zoom: STORY_ARGS.zoom,
        center: STORY_ARGS.center,
        layers: STORY_ARGS.layers,
      },
      "eox-timecontrol-picker": {
        storyImport: false,
        storySlot: true,
        format: STORY_ARGS.format,
        showDots: true,
      },
    },
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${args.storyAdditionalComponents["eox-map"].id}
      .zoom=${args.storyAdditionalComponents["eox-map"].zoom}
      .center=${args.storyAdditionalComponents["eox-map"].center}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${args.for}
      .layerIdKey=${args.layerIdKey}
      .titleKey=${args.titleKey}
      .filters=${args.filters}
      .externalMapRendering=${args.externalMapRendering}
      @select=${args.select}
    >
      <eox-timecontrol-picker
        style="width: fit-content; border: 1.5px solid #80808026; border-radius: 6px;"
        .format=${args.storyAdditionalComponents["eox-timecontrol-picker"]
          .format}
        .showDots=${args.storyAdditionalComponents["eox-timecontrol-picker"]
          .showDots}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `,
};

export default DatePickerStandaloneStory;
