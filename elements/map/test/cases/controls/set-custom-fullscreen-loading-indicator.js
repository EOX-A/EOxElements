import { html } from "lit";

/**
 * Tests to set custom fullscreen loading indicator control via webcomponent
 */
const setCustomFullScreenLoadingIndicator = () => {
  cy.mount(
    html`<eox-map
      .layers=${[]}
      .controls=${{
        LoadingIndicator: {
          type: "fullscreen",
          spinnerSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
  <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
      </circle><g></g></g></svg>`,
        },
      }}
    ></eox-map>`
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

export default setCustomFullScreenLoadingIndicator;
