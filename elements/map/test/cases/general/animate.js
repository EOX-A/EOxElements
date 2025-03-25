import { html } from "lit";

/**
 * Tests to animate on `zoom` or `center` change
 */
const animateOnZoomCenterChange = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.mount(
    html`<eox-map
      .layers=${[
        { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      ]}
      .zoom=${0}
      .animationOptions=${{
        duration: 1000,
      }}
      .center=${[0, 0]}
    ></eox-map>`,
  ).as("eox-map");
  const settingsPromise = new Promise((resolve) => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      eoxMap.zoom = 4;
      eoxMap.center = [2200000, 6100000];
      setTimeout(() => {
        // after half the animation time, expect to be in the middle of the animation (not initial, not target center)
        const payload = {};
        payload.center = eoxMap.map.getView().getCenter();
        payload.zoom = eoxMap.map.getView().getZoom();
        resolve(payload);
      }, 200);
    });
  });
  cy.wrap(settingsPromise).then(({ center, zoom }) => {
    expect(center).to.not.deep.equal([0, 0]);
    expect(center).to.not.deep.equal([2200000, 6100000]);
    expect(zoom).to.not.equal(0);
    expect(zoom).to.not.equal(4);
  });
};

/**
 * Tests to animate on `extent`
 */
const animateOnExtent = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.mount(
    html`<eox-map
      .layers=${[
        { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      ]}
      .zoom=${0}
      .center=${[0, 0]}
      .animationOptions=${{
        duration: 400,
        padding: [10, 10, 10, 10],
      }}
      .zoomExtent=${[
        -8172569.397164129, -7410537.976763416, -5969880.614083453,
        -2491403.9138794523,
      ]}
    ></eox-map>`,
  ).as("eox-map");
  const settingsPromise = new Promise((resolve) => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      setTimeout(() => {
        // after half the animation time, expect to be in the middle of the animation (not initial, not target center)
        const payload = {};
        payload.center = eoxMap.map.getView().getCenter();
        payload.zoom = eoxMap.map.getView().getZoom();
        resolve(payload);
      }, 200);
    });
  });
  cy.wrap(settingsPromise).then(({ center, zoom }) => {
    expect(center).to.not.deep.equal([0, 0]);
    expect(zoom).to.not.equal(0);
  });
};

export { animateOnZoomCenterChange, animateOnExtent };
