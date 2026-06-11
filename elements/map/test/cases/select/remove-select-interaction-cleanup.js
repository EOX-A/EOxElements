import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerJson from "../../fixtures/vectorLayer.json";

/**
 * Removing a select interaction (by removing its layer) must tear down its
 * layer-group "change" listener. Otherwise, re-adding a layer with the same id
 * re-attaches the dead selection style layer, leaving stale/duplicate highlights.
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

    // Spy on the (soon to be dead) selection style layer's re-attach.
    const setMapSpy = cy.spy(interaction.selectStyleLayer, "setMap");

    // Remove the select layer -> tears down the interaction.
    eoxMap.layers = otherLayer;
    expect(
      eoxMap.selectInteractions.selectInteraction,
      "interaction removed with its layer",
    ).to.not.exist;

    // Re-add a layer with the same id; a leaked listener would re-attach the
    // dead style layer to the map here.
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
