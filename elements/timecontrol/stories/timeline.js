import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * Timeline visualization using vis-timeline with date picker and calendar integration
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const TimelineStory = {
  args: {
    layerIdKey: STORY_ARGS.layerIdKey,
    for: "eox-map#timeline",
    select: (e) => {
      console.log(e.detail);
    },
    storyAdditionalComponents: {
      "eox-map": {
        id: "timeline",
        zoom: STORY_ARGS.zoom,
        center: STORY_ARGS.center,
        layers: STORY_ARGS.layers,
      },
      "eox-timecontrol-timeline": {
        storyImport: false,
        storySlot: true,
      },
      "eox-timecontrol-date": {
        storyImport: false,
        storySlot: true,
        navigation: true,
      },
      "eox-timecontrol-picker": {
        storyImport: false,
        storySlot: true,
        showDots: true,
        popup: true,
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
      <eox-timecontrol-timeline></eox-timecontrol-timeline>
      <eox-timecontrol-date
        .navigation=${args.storyAdditionalComponents["eox-timecontrol-date"]
          .navigation}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .showDots=${args.storyAdditionalComponents["eox-timecontrol-picker"]
          .showDots}
        .popup=${args.storyAdditionalComponents["eox-timecontrol-picker"].popup}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `,
};

export default TimelineStory;
