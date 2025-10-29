import { html } from "lit";

/**
 * Tests to initialise default center  `[0, 0]` if `center` is nor provided in properties
 */
const initDefaultCenter = () => {
  cy.mount(html`<eox-map .zoom=${7}></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const center = $el[0].map.getView().getCenter();
    expect(center, "set center to [0, 0] if nothing is defined").to.deep.equal([
      0, 0,
    ]);
  });
};

export default initDefaultCenter;
