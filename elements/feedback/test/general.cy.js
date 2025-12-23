// Importing necessary modules, test cases, and enums
import "../src/main";
import {
  loadFeedbackTest,
  clickFeedbackButtonTest,
  customFormTest,
} from "./cases";

describe("Feedback", () => {
  it("loads eox-feedback", () => loadFeedbackTest());
  it("loads eox-feedback-button and opens modal on click", () =>
    clickFeedbackButtonTest());
  it("loads eox-feedback with custom schema", () => customFormTest());
});
