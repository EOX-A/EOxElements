import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * Range slider for selecting date ranges with visual indicators for years and months
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const SliderStory = {
  args: {
    layerIdKey: STORY_ARGS.layerIdKey,
    for: "eox-map#slider",
    storyAdditionalComponents: {
      "eox-map": {
        id: "slider",
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
        showDots: true,
        popup: true,
      },
      "eox-timecontrol-slider": {
        storyImport: false,
        storySlot: true,
        animateOnClickInterval: "0.3s",
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
    >
      <div style="display: flex; gap: 10px;align-items: center;">
        <eox-timecontrol-date
          .format=${args.storyAdditionalComponents["eox-timecontrol-date"]
            .format}
          .navigation=${args.storyAdditionalComponents["eox-timecontrol-date"]
            .navigation}
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .showDots=${args.storyAdditionalComponents["eox-timecontrol-picker"]
            .showDots}
          .popup=${args.storyAdditionalComponents["eox-timecontrol-picker"]
            .popup}
        ></eox-timecontrol-picker>
      </div>
      <eox-timecontrol-slider
        style="width: 600px;"
        .animateOnClickInterval=${args.storyAdditionalComponents[
          "eox-timecontrol-slider"
        ].animateOnClickInterval}
      ></eox-timecontrol-slider>
    </eox-timecontrol>
  `,
};

export default SliderStory;
