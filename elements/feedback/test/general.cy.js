// Importing necessary modules, test cases, and enums
import "../../jsonform/src/main.js";
import "../src/main";
import {
  loadFeedbackTest,
  clickFeedbackButtonTest,
  customFormTest,
  buttonSchemaTest,
} from "./cases";

describe("Feedback", () => {
  afterEach(() => {
    document.querySelectorAll("eox-feedback").forEach((el) => el.remove());
  });

  it("loads eox-feedback", () => loadFeedbackTest());
  it("loads eox-feedback-button and opens modal on click", () =>
    clickFeedbackButtonTest());
  it("loads eox-feedback with custom schema", () => customFormTest());
  it("loads eox-feedback-button with custom schema", () => buttonSchemaTest());
});
