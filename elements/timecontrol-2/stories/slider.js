import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

export const Slider = {
  args: {
    ...DEFAULT_ARGS,
    for: "eox-map#slider",
    slider: true,
    navigation: false,
    play: false,
    storyAdditionalComponents: {
      "eox-map": {
        id: "slider",
        style: "width: 400px; height: 300px;",
        zoom: DEFAULT_ARGS.zoom,
        center: DEFAULT_ARGS.center,
        layers: DEFAULT_ARGS.layers,
      },
    },
  },
  render: (args) => html`
    <eox-timecontrol-2
      .for=${args.for}
      .layer=${args.layer}
      .controlProperty=${args.controlProperty}
      .controlValues=${args.controlValues}
      .navigation=${args.navigation}
      .play=${args.play}
      .slider=${args.slider}
    ></eox-timecontrol-2>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      style=${args.storyAdditionalComponents["eox-map"].style}
      .zoom=${args.storyAdditionalComponents["eox-map"].zoom}
      .center=${args.storyAdditionalComponents["eox-map"].center}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default Slider;
