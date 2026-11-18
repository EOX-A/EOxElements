import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerJson from "../../fixtures/vectorLayer.json";

/**
 * A hover (pointermove) interaction must clear its highlight when the pointer
 * leaves the map.
 */
const clearHoverHighlightOnPointerLeave = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });

  const styleJson = JSON.parse(JSON.stringify(vectorLayerJson));
  styleJson[0].interactions = [
    {
      type: "select",
      options: {
        id: "hoverInteraction",
        condition: "pointermove",
        style: { "stroke-color": "white", "stroke-width": 3 },
      },
    },
  ];

  cy.mount(html`<eox-map .center=${[0, 0]} .layers=${styleJson}></eox-map>`).as(
    "eox-map",
  );

  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const interaction = eoxMap.selectInteractions.hoverInteraction;
    expect(interaction, "hover interaction created").to.exist;

    interaction.highlightById(["someFeatureId"]);
    expect(interaction.selectedFids, "highlight set").to.have.length(1);

    eoxMap.map
      .getTargetElement()
      .dispatchEvent(new PointerEvent("pointerleave"));
    expect(
      interaction.selectedFids,
      "highlight cleared on pointer leave",
    ).to.have.length(0);
  });
};

export default clearHoverHighlightOnPointerLeave;
