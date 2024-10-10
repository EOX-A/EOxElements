import { html } from "lit";

/**
 * Tests to check whether map fire lifecycle event
 */
const doesMapFiresLifecycleEvent = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.mount(
    html`<eox-map
      .layers=${[
        { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      ]}
      @mapmounted=${(e) => {
        expect(e.detail.getTargetElement(), "fires mounted event").to.not.be
          .undefined;
      }}
    ></eox-map>`
  ).as("eox-map");
};

export default doesMapFiresLifecycleEvent;
