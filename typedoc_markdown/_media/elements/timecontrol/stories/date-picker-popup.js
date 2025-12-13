import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * Calendar date picker displayed in popup mode
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const DatePickerPopupStory = {
  args: {
    layerIdKey: STORY_ARGS.layerIdKey,
    titleKey: STORY_ARGS.titleKey,
    filters: STORY_ARGS.filters,
    externalMapRendering: STORY_ARGS.externalMapRendering,
    navigation: true,
    popup: true,
    for: "eox-map#date-picker-popup",
    select: (e) => {
      console.log(e.detail);
    },
    storyAdditionalComponents: {
      "eox-map": {
        id: "date-picker-popup",
        zoom: STORY_ARGS.zoom,
        center: STORY_ARGS.center,
        layers: STORY_ARGS.layers,
      },
      "eox-timecontrol-date": {
        storyImport: false,
        storySlot: true,
        format: STORY_ARGS.format,
        navigation: true,
      },
      "eox-timecontrol-picker": {
        storyImport: false,
        storySlot: true,
        format: STORY_ARGS.format,
        showDots: true,
        popup: true,
      },
    },
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <style>
      eox-map {
        width: 100%;
        height: 500px;
      }
    </style>
    <eox-map
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
      <eox-timecontrol-date
        .format=${args.storyAdditionalComponents["eox-timecontrol-date"].format}
        .navigation=${args.storyAdditionalComponents["eox-timecontrol-date"]
          .navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .format=${args.storyAdditionalComponents["eox-timecontrol-picker"]
          .format}
        .showDots=${args.storyAdditionalComponents["eox-timecontrol-picker"]
          .showDots}
        .popup=${args.storyAdditionalComponents["eox-timecontrol-picker"].popup}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `,
};

export default DatePickerPopupStory;
