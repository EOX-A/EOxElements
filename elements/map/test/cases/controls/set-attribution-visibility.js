import { html } from "lit";

/**
 * Tests that the attribution control is hidden when there are no attributions
 * and shown once a layer provides one.
 */
const setAttributionVisibility = () => {
  cy.mount(
    html`<eox-map
      .layers=${[
        {
          type: "Tile",
          properties: { id: "noAttribution" },
          source: { type: "XYZ", url: "https://example.com/{z}/{x}/{y}.png" },
        },
      ]}
      .controls=${{ Attribution: {} }}
    ></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map").should(($el) => {
    const attribution = $el[0].shadowRoot.querySelector(".ol-attribution");
    expect(attribution, "attribution control exists").to.exist;
    expect(
      getComputedStyle(attribution).display,
      "hidden when there are no attributions",
    ).to.equal("none");
  });

  cy.get("eox-map").then(($el) => {
    $el[0].layers = [
      {
        type: "Tile",
        properties: { id: "with-attribution" },
        source: {
          type: "XYZ",
          url: "https://example.com/{z}/{x}/{y}.png",
          attributions: "Test Attribution",
        },
      },
    ];
  });

  cy.get("eox-map").should(($el) => {
    const attribution = $el[0].shadowRoot.querySelector(".ol-attribution");
    expect(
      getComputedStyle(attribution).display,
      "visible once a layer provides an attribution",
    ).to.equal("flex");
  });
};

export default setAttributionVisibility;
