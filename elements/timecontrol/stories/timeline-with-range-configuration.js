import { html } from "lit";
import { STORY_ARGS } from "../src/enums";

/**
 * Timeline visualization using vis-timeline with range configuration
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const TimelineWithRangeConfigurationStory = {
  args: {
    layerIdKey: STORY_ARGS.layerIdKey,
    for: "eox-map#timeline-with-range-configuration",
    select: (e) => {
      console.log(e.detail);
    },
    storyAdditionalComponents: {
      "eox-map": {
        id: "timeline-with-range-configuration",
        zoom: STORY_ARGS.zoom,
        center: STORY_ARGS.center,
        layers: STORY_ARGS.layers,
      },
      "eox-timecontrol-timeline": {
        storyImport: false,
        storySlot: true,
        selectRangeType: "second",
        rangeSelection: true,
      },
    },
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      style="width: 100%; height: 500px;"
      id=${args.storyAdditionalComponents["eox-map"].id}
      .zoom=${args.storyAdditionalComponents["eox-map"].zoom}
      .center=${args.storyAdditionalComponents["eox-map"].center}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-timecontrol
      .for=${args.for}
      .layerIdKey=${args.layerIdKey}
      .titleKey=${args.titleKey}
      .filters=${args.filters}
      .externalMapRendering=${args.externalMapRendering}
      @select=${args.select}
    >
      <eox-timecontrol-timeline
        .selectRangeType=${args.storyAdditionalComponents[
          "eox-timecontrol-timeline"
        ].selectRangeType}
        .rangeSelection=${args.storyAdditionalComponents[
          "eox-timecontrol-timeline"
        ].rangeSelection}
      ></eox-timecontrol-timeline>
    </eox-timecontrol>
    <div
      style="margin-top: 10px; display: flex; align-items: center; gap: 10px;"
    >
      <label for="rangeSelection">Enable/Disable range selection</label>
      <input
        checked
        type="checkbox"
        id="rangeSelection"
        name="rangeSelection"
        value="rangeSelection"
        @change=${(e) => {
          const isChecked = e.target.checked;
          const timeline = document.querySelector(
            "#timeline-with-range-configuration + eox-timecontrol eox-timecontrol-timeline",
          );
          if (timeline) {
            timeline.rangeSelection = isChecked;
          }
        }}
      />
    </div>
    <div
      style="margin-top: 10px; display: flex; align-items: center; gap: 10px;"
    >
      <label for="selectRangeType">Select range type:</label>
      <select
        id="selectRangeType"
        name="selectRangeType"
        @change=${(e) => {
          const type = e.target.value;
          const timeline = document.querySelector(
            "#timeline-with-range-configuration + eox-timecontrol eox-timecontrol-timeline",
          );
          if (timeline) {
            timeline.selectRangeType = type;
          }
        }}
      >
        <option selected value="second">Second</option>
        <option value="hour">Hour</option>
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>
    </div>
  `,
};

export default TimelineWithRangeConfigurationStory;
