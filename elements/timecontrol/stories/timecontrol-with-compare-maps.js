import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * Compare wind and NO₂ on separate maps with date navigation and a calendar.
 * Point `for` at the comparison container to import dates from both maps.
 */
const TimecontrolWithCompareMapsStory = {
  name: "Timecontrol with Compare maps",
  args: {
    for: "eox-map-compare#timecontrol-compare",
  },
  render: (args) => html`
    <eox-map-compare id="timecontrol-compare" style="height: 500px;">
      <eox-map
        id="compare-wind"
        slot="first"
        style="height: 100%;"
        .zoom=${STORY_ARGS.zoom}
        .center=${STORY_ARGS.center}
        .layers=${[STORY_ARGS.layers[0], STORY_ARGS.layers[1]]}
      ></eox-map>
      <eox-map
        id="compare-no2"
        slot="second"
        sync="eox-map#compare-wind"
        style="height: 100%;"
        .layers=${[STORY_ARGS.layers[0], STORY_ARGS.layers[2]]}
      ></eox-map>
    </eox-map-compare>
    <eox-timecontrol .for=${args.for}>
      <eox-timecontrol-date navigation></eox-timecontrol-date>
      <eox-timecontrol-picker
        popup
        show-dots
        show-items
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `,
};

export default TimecontrolWithCompareMapsStory;
