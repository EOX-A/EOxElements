import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

export const DisabledButtons = {
  args: {
    ...DEFAULT_ARGS,
    for: "eox-map#disabled-play",
    play: false,
    navigation: false,
    storyAdditionalComponents: {
      "eox-map": {
        id: "disabled-play",
        style: "width: 400px; height: 300px;",
        zoom: DEFAULT_ARGS.zoom,
        center: DEFAULT_ARGS.center,
        layers: DEFAULT_ARGS.layers,
      },
    },
  },
  render: (args) => html`
    <eox-timecontrol
      .for=${args.for}
      .layer=${args.layer}
      .controlProperty=${args.controlProperty}
      .controlValues=${args.controlValues}
      .navigation=${args.navigation}
      .slider=${args.slider}
      .play=${args.play}
    ></eox-timecontrol>
    <eox-map
      id="${args.storyAdditionalComponents["eox-map"].id}"
      style="${args.storyAdditionalComponents["eox-map"].style}"
      .zoom=${args.storyAdditionalComponents["eox-map"].zoom}
      .center=${args.storyAdditionalComponents["eox-map"].center}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default DisabledButtons;
