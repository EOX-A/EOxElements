import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

const NoMap = {
  args: {
    ...DEFAULT_ARGS,
    disablePlay: true,
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
      .slider=${args.slider}
      .disablePlay=${args.disablePlay}
      @stepchange=${args.onStepChange}
    ></eox-timecontrol>
  `,
};

export default NoMap;
