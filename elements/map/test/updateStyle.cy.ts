import "../main";
import { EOxMap } from "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("layers", () => {
  it("correctly updates applies flat style", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    // @ts-ignore
    vectorLayerStyleJson[0].style = {
      "fill-color": "yellow",
      "stroke-color": "black",
      "stroke-width": 2,
    };
    cy.mount(
      `<eox-map zoom=5 center="[20, 50]" layers='${JSON.stringify(
        vectorLayerStyleJson
      )}'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const updatedLayerJson = vectorLayerStyleJson[0];
      // @ts-ignore
      updatedLayerJson.style = [
        {
          "fill-color": ["string", ["get", "COLOR"], "#eee"],
          "stroke-color": "white",
          "stroke-width": 2,
          "text-value": ["string", ["get", "ECO_NAME"], ""],
        },
      ];
      // @ts-ignore
      (<EOxMap>$el[0]).addOrUpdateLayer(updatedLayerJson);
      const layer = (<EOxMap>$el[0]).map.getLayers().getArray()[0];
      // @ts-ignore
      const styleFunction = layer.getStyle();
      // @ts-ignore
      const appliedStyle = styleFunction(layer.getSource().getFeatures()[0]);
      expect(appliedStyle[0].getFill().getColor(), "sets color").to.be.equal(
        "#7BF5CC"
      );
      expect(appliedStyle[0].getText().getText(), "sets text").to.be.equal(
        "Northeast Siberian coastal tundra"
      );
    });
  });
});
