import { html } from "lit";

/**
 * og registers every globe on `window.__globus{n}__` until it is destroyed.
 *
 * @param {unknown} globe
 */
const isRegistered = (globe) =>
  Object.keys(window).some(
    (key) =>
      key.startsWith("__globus") && /** @type {any} */ (window)[key] === globe,
  );

/**
 * Tests that leaving globe mode destroys the globe, so toggling between 2D and
 * 3D does not keep old globes, their WebGL contexts and offscreen maps alive.
 */
export const testGlobeLifecycle = () => {
  /** @type {unknown[]} */
  const globes = [];
  cy.mount(
    html`<eox-map
      .layers=${[
        { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      ]}
      .projection=${"globe"}
    ></eox-map>`,
  ).as("eox-map");

  [0, 1, 2].forEach((toggle) => {
    cy.get("eox-map")
      .should(($el) => expect($el[0].globe).to.exist)
      .then(($el) => {
        globes.push($el[0].globe);
        $el[0].projection = "EPSG:3857";
      });
    cy.get("eox-map")
      .should(($el) => expect($el[0].globeEnabled).to.be.false)
      .then(($el) => {
        if (toggle < 2) $el[0].projection = "globe";
      });
  });

  cy.wrap(globes).should((all) =>
    all.forEach((globe) => expect(isRegistered(globe)).to.be.false),
  );
};
