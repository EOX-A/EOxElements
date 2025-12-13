import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * Basic timecontrol rendered using only the date display component
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const OnlyDateStory = {
  args: {
    layerIdKey: STORY_ARGS.layerIdKey,
    titleKey: STORY_ARGS.titleKey,
    filters: STORY_ARGS.filters,
    externalMapRendering: STORY_ARGS.externalMapRendering,
    for: "eox-map#only-date",
    storyAdditionalComponents: {
      "eox-map": {
        id: "only-date",
        zoom: STORY_ARGS.zoom,
        center: STORY_ARGS.center,
        layers: STORY_ARGS.layers,
      },
      "eox-timecontrol-date": {
        storyImport: false,
        storySlot: true,
        format: STORY_ARGS.format,
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
      <eox-timecontrol-date
        .format=${args.storyAdditionalComponents["eox-timecontrol-date"].format}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `,
};

export default OnlyDateStory;
