import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * Date display component with navigation buttons for stepping through available dates
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const DateWithNavigationStory = {
  args: {
    layerIdKey: STORY_ARGS.layerIdKey,
    titleKey: STORY_ARGS.titleKey,
    filters: STORY_ARGS.filters,
    externalMapRendering: STORY_ARGS.externalMapRendering,
    navigation: true,
    for: "eox-map#date-with-navigation",
    storyAdditionalComponents: {
      "eox-map": {
        id: "date-with-navigation",
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
        .navigation=${args.storyAdditionalComponents["eox-timecontrol-date"]
          .navigation}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `,
};

export default DateWithNavigationStory;
