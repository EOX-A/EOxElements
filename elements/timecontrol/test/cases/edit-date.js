import { html } from "lit";

/**
 * Test to verify that editable dates commit on blur or Enter using the assigned format.
 * Ensures that a wrong format restores the previous date without triggering a change.
 */
const editDate = () => {
  cy.mount(html`
    <eox-timecontrol
      show-utc
      init-date="first"
      .controlValues=${[
        { id: "dates", timeControlValues: [{ date: "2024-01-10" }] },
      ]}
    >
      <eox-timecontrol-date editable format="DD/MM/YYYY"></eox-timecontrol-date>
    </eox-timecontrol>
  `);
  cy.get("eox-timecontrol-date").shadow().find("input").as("dateInput");
  cy.get("@dateInput").should("have.value", "10/01/2024");
  cy.get("eox-timecontrol").then(($control) => {
    $control[0].addEventListener("select", cy.stub().as("selection"));
  });

  // A valid edit commits when focus leaves the field.
  cy.get("@dateInput").clear();
  cy.get("@dateInput").type("11/01/2024");
  cy.get("@selection").should("not.have.been.called");
  cy.get("@dateInput").blur();
  cy.get("@dateInput").should("have.value", "11/01/2024");
  cy.get("@selection").should("have.been.calledOnce");
  cy.get("eox-timecontrol")
    .its("0.selectedDateRange.0")
    .should("equal", "2024-01-11T00:00:00.000Z");

  // A wrong format restores the accepted date without another change.
  cy.get("@dateInput").clear();
  cy.get("@dateInput").type("2024-01-12");
  cy.get("@dateInput").blur();
  cy.get("@dateInput").should("have.value", "11/01/2024");
  cy.get("@selection").should("have.been.calledOnce");

  // Enter commits while focused; a later blur does not duplicate the change.
  cy.get("@dateInput").clear();
  cy.get("@dateInput").type("12/01/2024{enter}");
  cy.get("@dateInput").should("have.value", "12/01/2024").and("be.focused");
  cy.get("eox-timecontrol")
    .its("0.selectedDateRange.0")
    .should("equal", "2024-01-12T00:00:00.000Z");
  cy.get("@dateInput").blur();
  cy.get("@selection").should("have.been.calledTwice");
};

export default editDate;
