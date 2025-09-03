import { html } from "lit";
import { DEFAULT_ARGS } from "../src/enums/stories";

/**
 * Generates a story configuration for the Primary TimeSlider.
 *
 * @returns {Object} The story configuration with arguments for the component and a play function for interaction testing.
 */
export const Primary = {
  args: {
    ...DEFAULT_ARGS,
    for: "eox-map",
  },
  render: (args) => html`
    <eox-map
      id="primary"
      style="width: 100%; height: 300px;"
      .zoom=${args.zoom}
      .center=${args.center}
      .layers=${args.layers}
    ></eox-map>
    <eox-timeslider .for=${args.for}></eox-timeslider>
  `,
};

export default Primary;
