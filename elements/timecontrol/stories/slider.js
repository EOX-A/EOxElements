import { html } from "lit";

/**
 * Creates monthly observations for a standalone slider.
 * @param {number} startYear - First year, starting in October.
 * @param {number} monthCount - Number of monthly observations.
 * @returns {Array<Object>} Timecontrol values.
 */
function createControlValues(startYear, monthCount) {
  return [
    {
      id: "monthly-observations",
      timeControlValues: Array.from({ length: monthCount }, (_, index) => ({
        date: new Date(Date.UTC(startYear, 9 + index, 4)).toISOString(),
      })),
    },
  ];
}

/** Two independently resizable sliders demonstrating automatic year label spacing. */
const SliderStory = {
  args: {
    narrowControlValues: createControlValues(2018, 90),
    manyYearsControlValues: createControlValues(1900, 1506),
  },
  render: (args) => html`
    <p>Drag either panel's bottom-right corner to resize its slider.</p>
    <h3>Partial first and last years (2018–2026)</h3>
    <div
      class="border round"
      style="width: 320px; min-width: 320px; max-width: 100%; resize: horizontal; overflow: auto; padding: 16px; box-sizing: border-box;"
    >
      <eox-timecontrol .controlValues=${args.narrowControlValues} show-utc>
        <eox-timecontrol-date navigation></eox-timecontrol-date>
        <eox-timecontrol-slider></eox-timecontrol-slider>
      </eox-timecontrol>
    </div>
    <h3>Many years (1900–2026)</h3>
    <div
      class="border round"
      style="width: 320px; min-width: 320px; max-width: 100%; resize: horizontal; overflow: auto; padding: 16px; box-sizing: border-box;"
    >
      <eox-timecontrol .controlValues=${args.manyYearsControlValues} show-utc>
        <eox-timecontrol-date navigation></eox-timecontrol-date>
        <eox-timecontrol-slider></eox-timecontrol-slider>
      </eox-timecontrol>
    </div>
  `,
};

export default SliderStory;
