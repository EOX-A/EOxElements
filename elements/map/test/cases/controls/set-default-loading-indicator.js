import { html } from "lit";

/**
 * Tests to set default loading indicator control via webcomponent
 */
const setDefaultLoadingIndicator = () => {
  cy.mount(
    html`<eox-map
      .layers=${[]}
      .controls=${{
        LoadingIndicator: {},
      }}
    ></eox-map>`,
  ).as("eox-map");
  cy.get("eox-map").and(async ($el) => {
    const eoxMap = $el[0];
    expect(eoxMap.map.getControls().getLength()).to.be.equal(1);
    const loadingIndicatorElement = eoxMap.map
      .getTargetElement()
      .querySelector(".loading-indicator");
    expect(loadingIndicatorElement).to.exist;
  });
};

export default setDefaultLoadingIndicator;
