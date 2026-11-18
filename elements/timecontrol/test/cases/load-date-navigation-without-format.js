import { html } from "lit";

/**
 * Test to verify that navigation works when the date component gets no format
 * (e.g. a layercontrol datetime tool without `displayFormat`) and keeps the time of each step.
 */
const loadDateNavigationWithoutFormat = () => {
  // data preparation - timestamped values, like acquisitions in a time cube
  const dates = [
    "2026-06-23T05:19:03.000Z",
    "2026-06-28T05:27:11.000Z",
    "2026-07-01T05:10:03.000Z",
  ];
  const onSelect = cy.spy().as("onSelect");

  // mount - same setup as the layercontrol datetime tool
  cy.mount(html`
    <eox-timecontrol
      .showUTC=${true}
      .initDate=${[dates[2]]}
      .controlValues=${[
        {
          id: "cube",
          name: "Cube",
          timeControlValues: dates.map((date) => ({ date })),
        },
      ]}
      @select=${onSelect}
    >
      <eox-timecontrol-date
        .format=${undefined}
        .navigation=${true}
      ></eox-timecontrol-date>
    </eox-timecontrol>
  `);

  // click PREVIOUS and verify the step keeps the time of the previous value
  cy.get("eox-timecontrol-date")
    .shadow()
    .find('button[part="previous"]')
    .click();

  cy.get("@onSelect").should((spy) => {
    const { date } = spy.lastCall.args[0].detail;
    expect(date[0].toISOString()).to.equal(dates[1]);
  });
};

export default loadDateNavigationWithoutFormat;
