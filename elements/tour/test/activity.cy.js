import "../src/main.js";
import {
  programmaticDriveIsSilent,
  programmaticNavigationIsSilent,
  userNavigationEmitsOnce,
  programmaticNavigationAfterClickIsSilent,
  keyboardNavigationEmitsOnce,
} from "./cases/index.js";

describe("eox-tour activity attribution", () => {
  afterEach(() => {
    cy.get("eox-tour").then(([$tour]) => $tour.driver.destroy());
    cy.document().then((doc) => {
      doc.body.innerHTML = '<div id="data-cy-root" data-cy-root></div>';
    });
  });

  it(
    "emits functional events but no activity for drive(1)",
    programmaticDriveIsSilent,
  );
  it(
    "keeps moveTo(1), moveNext and movePrevious activity-silent",
    programmaticNavigationIsSilent,
  );
  it(
    "emits one activity for each real Next, Prev and close click",
    userNavigationEmitsOnce,
  );
  it(
    "does not attribute programmatic navigation after a user click",
    programmaticNavigationAfterClickIsSilent,
  );
  it(
    "attributes arrow-key navigation through driver UI callbacks",
    keyboardNavigationEmitsOnce,
  );
});
