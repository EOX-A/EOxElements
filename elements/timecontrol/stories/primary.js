import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

export const Primary = {
  args: {
    ...DEFAULT_ARGS,
    for: "eox-map#primary",
    storyAdditionalComponents: {
      "eox-map": {
        id: "primary",
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
      .play=${args.play}
      .slider=${args.slider}
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

export default Primary;
