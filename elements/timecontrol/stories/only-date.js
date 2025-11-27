import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

export const OnlyDate = {
  args: {
    ...STORY_ARGS,
    for: "eox-map#primary",
  },
  render: (args) => html`
    <eox-map
      id="primary"
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
      <eox-timecontrol-date format="YYYY-MM-DD" />
    </eox-timecontrol>
  `,
};

export default OnlyDate;
