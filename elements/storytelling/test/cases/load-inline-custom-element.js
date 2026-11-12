import { LitElement } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

if (!customElements.get("mock-color-legend")) {
  class MockColorLegend extends LitElement {
    static properties = {
      domain: { type: Array },
      range: { type: Array },
      titletext: { type: String },
    };
  }
  customElements.define("mock-color-legend", MockColorLegend);
}

/**
 * Loads inline custom element with attributes and verifies attributes and properties.
 */
const loadInlineCustomElementTest = () => {
  const testMarkdown = [
    "# Story with Inline Custom Element",
    "",
    '<mock-color-legend domain="[0, 100]" range=\'["#eff3ff", "#08519c"]\' titletext="Snowfall" onclick="window.evilTriggered = true"></mock-color-legend>',
  ].join("\n");

  cy.mount("<eox-storytelling></eox-storytelling>").as(storyTelling);

  cy.get(storyTelling).then(([el]) => {
    el.markdown = testMarkdown;
  });

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get("mock-color-legend").should("exist");
      cy.get("mock-color-legend").should("have.attr", "domain", "[0, 100]");
      cy.get("mock-color-legend").should(
        "have.attr",
        "range",
        '["#eff3ff", "#08519c"]',
      );
      cy.get("mock-color-legend").should("have.attr", "titletext", "Snowfall");
      cy.get("mock-color-legend").should("not.have.attr", "onclick");

      cy.get("mock-color-legend").should(($el) => {
        const el = $el[0];
        expect(el.domain).to.deep.equal([0, 100]);
        expect(el.range).to.deep.equal(["#eff3ff", "#08519c"]);
        expect(el.titletext).to.equal("Snowfall");
      });
    });
};

export default loadInlineCustomElementTest;
