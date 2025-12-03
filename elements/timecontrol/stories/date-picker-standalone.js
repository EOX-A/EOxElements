import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

export const DatePickerStandalone = {
  args: {
    ...STORY_ARGS,
    for: "eox-map#date-picker-standalone",
    popup: true,
    select: (e) => {
      console.log(e.detail);
    },
  },
  render: (args) => html`
    <eox-map
      id="date-picker-standalone"
      style="width: 100%; height: 500px;"
      .zoom=${args.zoom}
      .center=${args.center}
      .layers=${args.layers}
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
        .format=${args.format}
        .showDots=${true}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `,
};

export default DatePickerStandalone;
