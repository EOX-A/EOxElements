import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import tempFixture from "../../fixtures/budapest3035.json";

/**
 * Tests to load Vector Layer
 */
const applyGeojsonFormat = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.intercept("https://budapest", (req) => {
    req.reply(tempFixture);
  });
  cy.mount(html`<eox-map .layers=${[]}></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    eoxMap.registerProjection(
      "EPSG:3035",
      "+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"
    );

    const layerWithFormats = {
      type: "Vector",
      properties: { id: "0" },
      style: {
        "stroke-color": "black",
        "stroke-width": 1,
      },
      source: {
        type: "Vector",
        url: "https://budapest",
        format: {
          type: "GeoJSON",
          dataProjection: "EPSG:3035",
        },
      },
    };
    eoxMap.layers = [layerWithFormats];

    const source = eoxMap.getLayerById("0").getSource();
    const coordinates = source.getFeatures()[0].getGeometry().getCoordinates();
    const firstVertex = coordinates[0][0][0];
    expect(
      Math.floor(firstVertex[0]),
      "correctly transforms coordinates"
    ).to.be.equal(2106704);
    expect(
      Math.floor(firstVertex[1]),
      "correctly transforms coordinates"
    ).to.be.equal(6027918);
  });
};

export default applyGeojsonFormat;
