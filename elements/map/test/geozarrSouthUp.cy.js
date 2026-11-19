import "@eox/map/src/plugins/advancedLayersAndSources/index.js";
import {
  deriveSouthUpExtent,
  flipSouthUpLayoutRows,
  respectFlipYFallback,
} from "./cases/geozarr/south-up.js";

describe("Experimental GeoZarr south-up support", () => {
  it("derives extent and origin from spatial:transform without spatial:bbox", () =>
    deriveSouthUpExtent());

  it("flips south-up layout pixels while deriving resolutions from shape", () =>
    flipSouthUpLayoutRows());

  it("respects flipY when the store does not declare a transform", () =>
    respectFlipYFallback());
});
