import { html } from "lit";

/**
 * Test to verify that date range endpoints display time using the assigned format.
 * Ensures that switching to a date-only format removes hours, minutes, and seconds.
 */
const loadDateRangeWithTime = () => {
  cy.mount(html`
    <eox-timecontrol
      show-utc
      init-date="first"
      .controlValues=${[
        { id: "dates", timeControlValues: [{ date: "2024-01-10" }] },
      ]}
    >
      <eox-timecontrol-date format="DD/MM/YYYY HH:mm:ss"></eox-timecontrol-date>
    </eox-timecontrol>
  `);
  cy.get("eox-timecontrol-date").shadow().find("input").as("dateInput");
  cy.get("@dateInput").should("not.have.value", "");
  cy.get("eox-timecontrol").then(($control) => {
    $control[0].dateChange(
      ["2024-01-10T13:45:30Z", "2024-01-12T16:20:15Z"],
      $control[0],
    );
  });
  cy.get("@dateInput").should(
    "have.value",
    "10/01/2024 13:45:30 - 12/01/2024 16:20:15",
  );

  cy.get("eox-timecontrol-date").then(($date) => {
    $date[0].format = "DD/MM/YYYY";
  });
  cy.get("@dateInput").should("have.value", "10/01/2024 - 12/01/2024");
};

export default loadDateRangeWithTime;
