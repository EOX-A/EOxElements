import { html } from "lit";
import "../main";
import { EOxMap } from "../main";
import vectorLayerStyleJson from "./vectorLayer.json";
import ecoRegionsFixture from "./fixtures/ecoregions.json";
import { EoxLayer } from "../src/generate";

describe("layers", () => {
  it("correctly updates applies flat style", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    (vectorLayerStyleJson[0] as import("../src/generate").EoxLayer).style = {
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
      } as import("../src/generate").EoxLayer;
      updatedLayerJson.style = [
        {
          "fill-color": ["string", ["get", "COLOR"], "#eee"],
          "stroke-color": "white",
          "stroke-width": 2,
          "text-value": ["string", ["get", "ECO_NAME"], ""],
        },
      ];
      (<EOxMap>$el[0]).addOrUpdateLayer(updatedLayerJson as EoxLayer);
      const layer = (<EOxMap>$el[0]).map.getLayers().getArray()[0];

      const features = (
        layer as import("ol/layer/Vector").default<
          import("ol/Feature").FeatureLike
        >
      )
        .getSource()
        .getFeatures();

      expect(features.length).to.be.greaterThan(0);

      const styleFunction = (
        layer as import("ol/layer/Vector").default<
          import("ol/Feature").FeatureLike
        >
      ).getStyleFunction();
      const featureStyle = (
        styleFunction(features[0], 1) as Array<import("ol/style").Style>
      )[0];

      const featureColor = featureStyle.getFill().getColor();

      expect(featureColor, "sets color").to.be.equal("#7BF5CC");
      const featureText = featureStyle.getText().getText();
      expect(featureText, "sets text").to.be.equal(
        "Northeast Siberian coastal tundra"
      );
    });
  });
});
