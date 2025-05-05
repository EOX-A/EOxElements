import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { feedbackElement } = TEST_SELECTORS;

/**
 * Test to verify if the layout component loads successfully.
 */
const loadFeedbackTest = () => {
  // Mounting eox-layout element
  cy.mount(`<eox-feedback></eox-feedback>`).as(feedbackElement);

  // Find the feedback element and access its shadow DOM
  cy.get(feedbackElement).shadow();
};

export default loadFeedbackTest;
