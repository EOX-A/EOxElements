import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerJson from "../../fixtures/vectorLayer.json";

/**
 * Removing a select layer must not leave a listener that re-attaches its dead style layer
 * when a same-id layer is re-added (stale/duplicate highlights).
 */
const removeSelectInteractionCleansUp = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });

  const withSelect = JSON.parse(JSON.stringify(vectorLayerJson));
  withSelect[0].interactions = [
    {
      type: "select",
      options: {
        id: "selectInteraction",
        condition: "click",
        style: { "stroke-color": "white", "stroke-width": 3 },
      },
    },
  ];

  const otherLayer = JSON.parse(JSON.stringify(vectorLayerJson));
  otherLayer[0].properties.id = "otherLayer";

  cy.mount(
    html`<eox-map .center=${[0, 0]} .layers=${withSelect}></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const interaction = eoxMap.selectInteractions.selectInteraction;
    expect(interaction, "select interaction created").to.exist;

    const setMapSpy = cy.spy(interaction.selectStyleLayer, "setMap");

    // Remove the select layer, then re-add one with the same id.
    eoxMap.layers = otherLayer;
    expect(
      eoxMap.selectInteractions.selectInteraction,
      "interaction removed with its layer",
    ).to.not.exist;

    eoxMap.layers = withSelect;

    const reAttached = setMapSpy
      .getCalls()
      .some((call) => call.args[0] === eoxMap.map);
    expect(
      reAttached,
      "dead select style layer is not re-attached after re-adding the layer",
    ).to.equal(false);
  });
};

export default removeSelectInteractionCleansUp;
