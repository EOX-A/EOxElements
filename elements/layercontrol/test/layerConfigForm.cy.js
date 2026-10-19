import "../src/main";
import "@eox/jsonform";
import { html } from "lit";

describe("LayerControl: LayerConfig form", () => {
  it("keeps the fields of the first anyOf branch after a re-render", () => {
    // no start values can be read from this layer, like a style with only anyOf branches
    const mockLayer = {
      get: () => undefined,
      on: () => {},
      un: () => {},
      getSource: () => ({}),
      updateStyleVariables: cy.spy(),
    };
    const layerConfig = {
      type: "style",
      schema: {
        type: "object",
        options: { keep_oneof_values: false, no_additional_properties: true },
        anyOf: [
          {
            type: "object",
            title: "First",
            options: { no_additional_properties: true },
            properties: {
              gain: { type: "number", default: 1 },
              label: { type: "string", default: "a" },
            },
          },
          {
            type: "object",
            title: "Second",
            options: { no_additional_properties: true },
            properties: {
              offset: { type: "number", default: 0 },
            },
          },
        ],
      },
    };

    cy.mount(html`
      <eox-layercontrol-layerconfig
        .layer=${mockLayer}
        .layerConfig=${layerConfig}
      ></eox-layercontrol-layerconfig>
    `);

    const gainField = () =>
      cy
        .get("eox-layercontrol-layerconfig")
        .shadow()
        .find("eox-jsonform")
        .find('[name="root[gain]"]');

    gainField().should("exist");

    cy.get("eox-layercontrol-layerconfig").then(async ($el) => {
      $el[0].requestUpdate();
      await $el[0].updateComplete;
    });

    gainField().should("exist");
  });
});
