import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { feedbackElement, feedbackButtonElement } = TEST_SELECTORS;

/**
 * Test to verify if the feedback button passes schema to the modal.
 */
const buttonSchemaTest = () => {
  const schema = {
    type: "object",
    properties: {
      test_field: {
        type: "string",
        title: "Test Field",
      },
    },
  };

  // Mounting eox-feedback-button element with schema
  cy.mount(
    html`<eox-feedback-button .schema=${schema}></eox-feedback-button>`
  ).as(feedbackButtonElement);

  // Click the button to open the modal
  cy.get(feedbackButtonElement).shadow().find("button").click();

  // Check if the modal exists and has the schema applied
  cy.get(feedbackElement).should("exist");
  cy.get(feedbackElement)
    .shadow()
    .find("eox-jsonform")
    .should("exist")
    .and(($el) => {
      const jsonForm = $el[0];
      expect(jsonForm.schema).to.deep.equal(schema);
    });
    
  // Check if the field is rendered
  cy.get(feedbackElement)
    .shadow()
    .find("eox-jsonform")
    .shadow()
    .contains("Test Field")
    .should("exist");
};

export default buttonSchemaTest;
