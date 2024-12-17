import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

export const Format = {
  args: {
    ...DEFAULT_ARGS,
    for: "eox-map#primary",
    format: "MMMM DD, YYYY",
  },
  render: (args) => html`
    <eox-map
      id="primary"
      style="width: 1005; height: 300px;"
      .zoom=${args.zoom}
      .center=${args.center}
      .layers=${args.layers}
    ></eox-map>
    <eox-timecontrol
      .for=${args.for}
      .layer=${args.layer}
      .controlProperty=${args.controlProperty}
      .controlValues=${args.controlValues}
      .slider=${args.slider}
      style="margin-top: 10px;"
      .format=${args.format}
    ></eox-timecontrol>
  `,
};

export default Format;
