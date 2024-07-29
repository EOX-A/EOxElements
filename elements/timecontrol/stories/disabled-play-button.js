import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

export const DisabledPlayButton = {
  args: {
    ...DEFAULT_ARGS,
    for: "eox-map#disabled-play",
    disablePlay: true,
  },
  render: (args) => html`
    <eox-map
      id="disabled-play"
      style="width: 400px; height: 300px;"
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
      .disablePlay=${args.disablePlay}
    ></eox-timecontrol>
  `,
};

export default DisabledPlayButton;
