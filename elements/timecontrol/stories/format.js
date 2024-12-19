import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

export const Format = {
  args: {
    ...DEFAULT_ARGS,
    for: "eox-map#format",
    displayFormat: "MMMM DD, YYYY",
    play: false,
  },
  render: (args) => html`
    <eox-map
      id="format"
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
      .navigation=${args.navigation}
      .play=${args.play}
      .slider=${args.slider}
      style="margin-top: 10px;"
      .displayFormat=${args.displayFormat}
    ></eox-timecontrol>
  `,
};

export default Format;
