import "../src/main";
import "../src/plugins/advancedLayersAndSources/index";
import "../src/plugins/globe/index";
import { isGlobeExist } from "./cases/general";
import {
  testTranslateColorExpression,
  testGlobeSelect,
  testGlobeSelectStyle,
  testGeoTIFFSourceOptions,
  testGlobeLayerOrder,
  testGlobeFlyPitch,
  testGlobeLonLatExtent,
} from "./cases/globe";

/**
 * Test suite for the EOX Map to load a globe when the projection is set to "globe".
 */
describe("globe", () => {
  /**
   * Test case to display a globe with layers
   */
  it("displays a globe with layers", () => isGlobeExist());

  /**
   * Test case to translate OpenLayers color expressions into OpenGlobus ColorScale and renderOptions
   */
  it("translates OpenLayers color expressions into OpenGlobus ColorScale and renderOptions", () =>
    testTranslateColorExpression());

  /**
   * Test case to pick GeoTIFF band values and parse GetFeatureInfo responses for globe tooltips
   */
  it("picks GeoTIFF values and feature info for globe tooltips", () =>
    testGlobeSelect());

  /**
   * Test case to apply and reset the select interaction style on globe vector entities
   */
  it("applies the select interaction style to globe vector entities", () =>
    testGlobeSelectStyle());

  /**
   * Test case to translate single url and multi source COG definitions into OpenGlobus GeoTIFFLayer options
   */
  it("accepts single url and multi source COGs for native globe rendering", () =>
    testGeoTIFFSourceOptions());

  /**
   * Test case to mirror the OL layer order (groups, zIndex, reordering) onto the globe layers
   */
  it("syncs the OL layer order to the globe layers", () =>
    testGlobeLayerOrder());

  /**
   * Test case to animate pitch changes as part of the globe flight
   */
  it("animates pitch changes during globe flights", () => testGlobeFlyPitch());

  /**
   * Test cases to read the visible extent in lon/lat while the globe is on
   */
  it("returns the visible lonLatExtent around the camera", () =>
    testGlobeLonLatExtent([16.36, 48.2], 1e6, ([minX, , maxX]) =>
      // a real view extent, not the whole-world fallback
      expect(maxX - minX).to.be.lessThan(90),
    ));

  it("returns a lonLatExtent reaching the pole when looking at it", () =>
    testGlobeLonLatExtent([0, 88], 2e6, ([minX, , maxX, maxY]) => {
      // pole branch, not just border samples reaching high latitudes
      expect(maxY).to.equal(90);
      expect([minX, maxX]).to.deep.equal([-180, 180]);
    }));

  it("returns a lonLatExtent covering both sides of the antimeridian", () =>
    testGlobeLonLatExtent([179.5, 0], 2e6, ([minX, , maxX]) => {
      // continues past 180 instead of wrapping to -180
      expect(minX).to.be.lessThan(180);
      expect(maxX).to.be.greaterThan(180);
      expect(maxX - minX).to.be.lessThan(90);
    }));

  it("returns a lonLatExtent up to the horizon for a tilted camera", () =>
    testGlobeLonLatExtent(
      [16.36, 48.2],
      1e5,
      ([minX, , maxX, maxY], eoxMap) => {
        const { camera } = eoxMap.globe.planet;
        // precondition: the top edge sees space, so the horizon is on screen
        expect(camera.getRayIntersectionEllipsoid(camera.width / 2, 0)).to.be
          .undefined;
        // horizon on screen must not fall back to the whole world
        expect(maxX - minX).to.be.lessThan(90);
        // looking north: the extent reaches well beyond the target
        expect(maxY).to.be.greaterThan(50);
      },
      2,
    ));
});
