import "../src/main.js";
import { rendersAndStartsTour, iframeHandoff } from "./cases/index.js";

describe("eox-tour", () => {
  afterEach(() => {
    cy.get("eox-tour").then(($el) => {
      if ($el[0] && $el[0].driver) {
        $el[0].driver.destroy();
      }
    });
    cy.document().then((doc) => {
      doc.body.innerHTML = '<div id="data-cy-root" data-cy-root></div>';
    });
  });

  it("renders and starts the tour", rendersAndStartsTour);
  it("handles iframe handoff", iframeHandoff);
});
