import { checkGeoZarr } from "./cases/general";

describe("GeoZarr layer support in layercontrol", () => {
  it("fetches and initializes layerDatetime and layerConfig for GeoZarr layer", () => {
    checkGeoZarr();
  });
});
