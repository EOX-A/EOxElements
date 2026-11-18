import { html } from "lit";

/**
 * Test eox-map-workspace automatic slotting and layout
 */
export const mapWorkspaceTest = () => {
  cy.mount(html`
    <eox-map-workspace style="width: 800px; height: 600px;">
      <div id="my-map">Map Content</div>
      <div id="my-sidebar">Sidebar Content</div>
    </eox-map-workspace>
  `);

  cy.get("eox-map-workspace").should("exist");
  cy.get("#my-map").should("have.attr", "slot", "map");
  cy.get("#my-sidebar").should("have.attr", "slot", "sidebar");

  cy.get("eox-map-workspace")
    .shadow()
    .within(() => {
      cy.get("slot[name='map']").should("exist");
      cy.get(".sidebar").should("exist");
      cy.get("slot[name='sidebar']").should("exist");
    });
};

/**
 * Test eox-map-workspace with explicit slots
 */
export const mapWorkspaceSlotsTest = () => {
  cy.mount(html`
    <eox-map-workspace style="width: 800px; height: 600px;">
      <div id="explicit-map" slot="map">Map</div>
      <div id="explicit-sidebar" slot="sidebar">Sidebar</div>
    </eox-map-workspace>
  `);

  cy.get("#explicit-map").should("have.attr", "slot", "map");
  cy.get("#explicit-sidebar").should("have.attr", "slot", "sidebar");
};
