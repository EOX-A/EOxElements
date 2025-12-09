import { html } from "lit";
import { simulateEvent } from "../../utils/events";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerJson from "../../fixtures/vectorLayer.json";
import vectorTileLayerJson from "../../fixtures/vectorTilesLayer.json";


/**
 * Tests to adds a select interaction to Vector layer
 */
const addSelectInteractionVector = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.intercept(/^.*geoserver.*$/, {
    fixture:
      "./map/test/fixtures/tiles/mapbox-streets-v6/14/8937/5679.vector.pbf,null",
    encoding: "binary",
  });
  const styleJson = vectorLayerJson;
  styleJson[0].interactions = [
    {
      type: "select",
      options: {
        id: "compoundSelectInteraction",
        condition: "click",
        style: {
          "stroke-color": "white",
          "stroke-width": 3,
        },
      },
    },
  ];

  vectorTileLayerJson[0].interactions = [
    {
      type: "select",
      options: {
        id: "compoundSelectInteraction",
        condition: "click",
        layer: {
          type: "VectorTile",
          properties: {
            id: "selectLayer",
          },
          source: {
            type: "VectorTile",
          },
          style: {
            "fill-color": "rgba(255, 187, 0, 0.5)",
            "stroke-color": "rgba(255, 187, 0, 1)",
            "stroke-width": 5,
          },
        },
      },
    },
  ];
  vectorTileLayerJson[0].style = {
      "fill-color": "yellow",
      "stroke-color": "black",
      "stroke-width": 4,
    };
  styleJson.push(...vectorTileLayerJson);

  console.log(styleJson);
  cy.mount(html`<eox-map .layers=${styleJson}>
    <eox-map-tooltip></eox-map-tooltip>
    </eox-map>`).as("eox-map");

  const selectInteractionPromise = new Promise((resolve) => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      eoxMap.addEventListener("select", (evt) => {
        console.log(evt.detail.feature);
        resolve(evt.detail.feature);
      });
      eoxMap.map.on("loadend", () => {
        simulateEvent(eoxMap.map, "click", 120, -140);
      });
    });
  });
  cy.wrap(selectInteractionPromise).should("exist");
};

export default addSelectInteractionVector;
