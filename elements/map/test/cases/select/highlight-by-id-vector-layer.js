import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerJson from "../../fixtures/vectorLayer.json";

/**
 * Tests to highlight by ID (Vector Layer)
 */
const highlightByIdVectorLayer = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  const styleJson = JSON.parse(JSON.stringify(vectorLayerJson));
  styleJson[0].interactions = [
    {
      type: "select",
      options: {
        id: "selectInteraction",
        condition: "click",
        style: {
          "stroke-color": "white",
          "stroke-width": 3,
        },
      },
    },
  ];
  cy.mount(html`<eox-map .center=${[0, 0]} .layers=${styleJson}></eox-map>`).as(
    "eox-map",
  );

  const highlightPromise = new Promise((resolve) => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      eoxMap.map.on("loadend", () => {
        //on loadend, programmatically select a few features...
        eoxMap.selectInteractions.selectInteraction.highlightById(
          [710, 717, 828],
          {
            duration: 0, // CI does not handle animation properly
            padding: [50, 50, 50, 50],
          },
        );
        // ..and expect the map to animate to them
        setTimeout(() => {
          const center = eoxMap.map.getView().getCenter();
          resolve(center);
        }, 200);
      });
    });
  });
  cy.wrap(highlightPromise).then((center) => {
    expect(center, "animates to selected features").to.not.deep.equal([0, 0]);
  });
};

export default highlightByIdVectorLayer;
