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
  testGlobeWMSOptions,
  testGlobePolarAndAsyncCanvasTiles,
  testGlobeGeoZarrPoolSync,
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
   * Test case to strip conflicting GetMap parameters from globe WMS layers and sync parameter updates
   */
  it("strips conflicting GetMap parameters from globe WMS layers and syncs updates", () =>
    testGlobeWMSOptions());

  /**
   * Test case to await async DataTile sources, render polar EPSG:4326 segments, and abort queued pool jobs cleanly
   */
  it("awaits async DataTile sources and renders polar globe segments via CanvasTiles", () =>
    testGlobePolarAndAsyncCanvasTiles());

  /**
   * Test case to initialize GeoZarr layers with empty bands and synchronize pool layers on updates
   */
  it("initializes GeoZarr pool layers and syncs band, dimension, and style updates", () =>
    testGlobeGeoZarrPoolSync());
});
