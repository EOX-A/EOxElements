import { html } from "lit";

/**
 * Standalone date navigation that stops at the first and last available dates.
 * Set dateWrap to false on the date component to disable wrapping.
 */
const DateWithoutWrapStory = {
  args: {
    showUTC: true,
    initDate: "first",
    controlValues: [
      {
        id: "observations",
        timeControlValues: [
          { date: "2024-01-01" },
          { date: "2024-01-02" },
          { date: "2024-01-03" },
          { date: "2024-01-04" },
          { date: "2024-01-05" },
          { date: "2024-01-06" },
          { date: "2024-01-07" },
          { date: "2024-01-08" },
          { date: "2024-01-09" },
          { date: "2024-01-10" },
        ],
      },
    ],
    storyAdditionalComponents: {
      "eox-timecontrol-date": {
        storyImport: false,
        storySlot: true,
        navigation: true,
        dateWrap: false,
      },
    },
  },
  render: (args) => html`
    <eox-timecontrol
      .showUTC=${args.showUTC}
      .initDate=${args.initDate}
      .controlValues=${args.controlValues}
    >
      <eox-timecontrol-date
        navigation
        .dateWrap=${args.storyAdditionalComponents["eox-timecontrol-date"]
          .dateWrap}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `,
};

export default DateWithoutWrapStory;
