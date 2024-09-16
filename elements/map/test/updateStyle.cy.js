import { html } from "lit";
import "../src/main";
import vectorLayerStyleJson from "./vectorLayer.json";
import ecoRegionsFixture from "./fixtures/ecoregions.json";

describe("layers", () => {
  it("correctly updates applies flat style", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    vectorLayerStyleJson[0].style = {
      "fill-color": "yellow",
      "stroke-color": "black",
      "stroke-width": 2,
    };
    cy.mount(
      html`<eox-map
        .zoom=${5}
        .center=${[20, 50]}
        .layers=${vectorLayerStyleJson}
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const updatedLayerJson = {
        ...vectorLayerStyleJson[0],
      };
      updatedLayerJson.style = [
        {
          "fill-color": ["string", ["get", "COLOR"], "#eee"],
          "stroke-color": "white",
          "stroke-width": 2,
          "text-value": ["string", ["get", "ECO_NAME"], ""],
        },
      ];
      $el[0].addOrUpdateLayer(updatedLayerJson);
      const layer = $el[0].map.getLayers().getArray()[0];

      const features = layer.getSource().getFeatures();

      expect(features.length).to.be.greaterThan(0);

      const styleFunction = layer.getStyleFunction();
      const featureStyle = styleFunction(features[0], 1)[0];

      const featureColor = featureStyle.getFill().getColor();

      expect(featureColor, "sets color").to.be.equal("#7BF5CC");
      const featureText = featureStyle.getText().getText();
      expect(featureText, "sets text").to.be.equal(
        "Northeast Siberian coastal tundra"
      );
    });
  });
});
