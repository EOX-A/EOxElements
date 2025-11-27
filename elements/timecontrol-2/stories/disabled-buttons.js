import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

export const DisabledButtons = {
  args: {
    ...DEFAULT_ARGS,
    for: "eox-map#disabled-play",
    play: false,
    navigation: false,
  },
  render: (args) => html`
    <eox-map
      id="disabled-play"
      style="width: 400px; height: 300px;"
      .zoom=${args.zoom}
      .center=${args.center}
      .layers=${args.layers}
    ></eox-map>
    <eox-timecontrol-2
      .for=${args.for}
      .layer=${args.layer}
      .controlProperty=${args.controlProperty}
      .controlValues=${args.controlValues}
      .navigation=${args.navigation}
      .slider=${args.slider}
      .play=${args.play}
      style="margin-top: 8px"
    ></eox-timecontrol-2>
  `,
};

export default DisabledButtons;
