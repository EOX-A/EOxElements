import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

export const Slider = {
  args: {
    ...DEFAULT_ARGS,
    for: "eox-map#slider",
    slider: true,
    navigation: false,
    play: false,
  },
  render: (args) => html`
    <eox-map
      id="slider"
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
      .navigation=${args.navigation}
      .play=${args.play}
      .slider=${args.slider}
      style="margin-top: 8px"
    ></eox-timecontrol>
  `,
};

export default Slider;
