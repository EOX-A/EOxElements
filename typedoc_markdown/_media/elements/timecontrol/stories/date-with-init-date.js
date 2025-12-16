import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * Basic timecontrol rendered using only the date display component
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const DateWithInitDateStory = {
  args: {
    for: "eox-map#date-with-init-date",
    initDate: ["2021-02-28"],
    storyAdditionalComponents: {
      "eox-map": {
        id: "date-with-init-date",
        zoom: STORY_ARGS.zoom,
        center: STORY_ARGS.center,
        layers: STORY_ARGS.layers,
      },
      "eox-timecontrol-date": {
        storyImport: false,
        storySlot: true,
        format: "D. MMMM YYYY",
      },
    },
    select: (e) => {
      console.log(e.detail);
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
      @select=${args.select}
      .for=${args.for}
      .layerIdKey=${args.layerIdKey}
      .titleKey=${args.titleKey}
      .filters=${args.filters}
      .externalMapRendering=${args.externalMapRendering}
      .initDate=${args.initDate}
    >
      <eox-timecontrol-date
        .format=${args.storyAdditionalComponents["eox-timecontrol-date"].format}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `,
};

export default DateWithInitDateStory;
