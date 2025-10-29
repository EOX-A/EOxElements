import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

const NoMap = {
  args: {
    ...DEFAULT_ARGS,
    play: true,
    layer: undefined,
    for: undefined,
    controlProperty: undefined,
    slider: true,
    onStepChange: (evt) => {
      console.log("stepchange", evt.detail);
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
      @stepchange=${args.onStepChange}
    ></eox-timecontrol>
  `,
};

export default NoMap;
