import { html } from "lit";

/**
 * Test eox-map-side-by-side rendering and container layout
 */
export const mapSideBySideTest = () => {
  cy.mount(html`
    <eox-map-side-by-side style="width: 800px; height: 600px;">
      <div id="side-a">Map A</div>
      <div id="side-b">Map B</div>
    </eox-map-side-by-side>
  `);

  cy.get("eox-map-side-by-side").should("exist");
  cy.get("#side-a").should("exist");
  cy.get("#side-b").should("exist");

  cy.get("eox-map-side-by-side")
    .shadow()
    .within(() => {
      cy.get(".container").should("exist");
      cy.get("slot").should("exist");
    });
};
