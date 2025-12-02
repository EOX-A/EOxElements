import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

export const DatePicker = {
  args: {
    ...STORY_ARGS,
    for: "eox-map#date-picker",
    navigation: true,
    temporary: true,
  },
  render: (args) => html`
    <eox-map
      id="date-picker"
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
    >
      <eox-timecontrol-date
        format="YYYY-MM-DD"
        .navigation=${args.navigation}
      />
      <eox-timecontrol-picker .temporary=${args.temporary} />
    </eox-timecontrol>
  `,
};

export default DatePicker;
