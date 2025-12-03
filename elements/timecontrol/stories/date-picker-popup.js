import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

export const DatePickerPopup = {
  args: {
    ...STORY_ARGS,
    for: "eox-map#date-picker-popup",
    navigation: true,
    popup: true,
    update: (e) => {
      console.log(e.detail);
    },
  },
  render: (args) => html`
    <eox-map
      id="date-picker-popup"
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
      @update=${args.update}
    >
      <eox-timecontrol-date
        format=${args.format}
        .navigation=${args.navigation}
      />
      <eox-timecontrol-picker
        .format=${args.format}
        .showDots=${true}
        .popup=${args.popup}
      />
    </eox-timecontrol>
  `,
};

export default DatePickerPopup;
