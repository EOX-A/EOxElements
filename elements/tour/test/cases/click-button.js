import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { feedbackElement, feedbackButtonElement } = TEST_SELECTORS;

/**
 * Test to verify if the layout component loads successfully.
 */
const clickFeedbackButtonTest = () => {
  // Mounting eox-layout element
  cy.mount(`<eox-feedback-button></eox-feedback-button>`).as(
    feedbackButtonElement,
  );

  // Find the feedback element and access its shadow DOM
  cy.get(feedbackButtonElement).shadow();
  cy.get(feedbackButtonElement).click();
  cy.get(feedbackElement).should("exist");
};

export default clickFeedbackButtonTest;
