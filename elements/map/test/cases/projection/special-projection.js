import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerStyleJson from "../../fixtures/vectorLayer.json";

/**
 * Tests to use special projection
 */
const specialProjection = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });

  // not using osm because of performance issues while testing
  cy.mount(html`<eox-map .layers=${vectorLayerStyleJson}></eox-map>`).as(
    "eox-map"
  );

  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const testExtent = [-10, -9, 10, 9];
    eoxMap.registerProjection(
      "ESRI:53009",
      "+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 " +
        "+b=6371000 +units=m +no_defs",
      testExtent
    );
    eoxMap.setAttribute("projection", "ESRI:53009");
    expect(eoxMap.map.getView().getProjection().getCode()).to.be.equal(
      "ESRI:53009"
    );
    expect(
      eoxMap.map.getView().getProjection().getExtent(),
      "passes the projection extent correctly"
    ).to.be.deep.equal(testExtent);

    eoxMap.getLayerById("regions").getSource().refresh();
    const transformedCoordinateFromWgs = eoxMap.transform(
      [10, 10],
      "EPSG:4326",
      "ESRI:53009"
    );
    expect(
      transformedCoordinateFromWgs.map(Math.round),
      "can transform coordinate to custom system"
    ).to.be.deep.equal([991693, 1232660]);
    const transformedCoordinateToWgs = eoxMap.transform(
      [991693, 1232660],
      "ESRI:53009"
    );
    expect(
      transformedCoordinateToWgs.map(Math.round),
      "can transform coordinate from custom system"
    ).to.be.deep.equal([10, 10]);

    const transformedExtentFromWgs = eoxMap.transformExtent(
      [10, 10, 11, 11],
      "EPSG:4326",
      "ESRI:53009"
    );
    expect(
      transformedExtentFromWgs.map(Math.round),
      "can transform extent to custom system"
    ).to.be.deep.equal([989714, 1232660, 1090862, 1355370]);

    const transformedExtentToWgs = eoxMap.transformExtent(
      [
        989714.093446643, 1232660.4789432778, 1090862.1263438729,
        1355370.4556459172,
      ],
      "ESRI:53009"
    );
    expect(
      transformedExtentToWgs.map(Math.round),
      "can transform extent from custom system"
    ).to.be.deep.equal([10, 10, 11, 11]);

    const transformedCoordinateOutsideExtent = eoxMap.transform(
      [20, 20],
      "EPSG:4326",
      "ESRI:53009"
    );
    expect(
      transformedCoordinateOutsideExtent.map(Math.round),
      "can transform coordinate to custom system"
    ).to.be.deep.equal([1926715, 2450840]);

    expect(
      transformedExtentToWgs.map(Math.round),
      "can transform extent from custom system"
    ).to.be.deep.equal([10, 10, 11, 11]);
  });
};

export default specialProjection;
