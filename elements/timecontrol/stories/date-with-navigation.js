import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

export const DateWithNavigation = {
  args: {
    ...STORY_ARGS,
    navigation: true,
    for: "eox-map#date-with-navigation",
  },
  render: (args) => html`
    <eox-map
      id="date-with-navigation"
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
    </eox-timecontrol>
  `,
};

export default DateWithNavigation;
