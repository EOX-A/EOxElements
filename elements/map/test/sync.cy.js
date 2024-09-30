import "../src/main";
import {
  syncOneMapToAnother,
  syncOneMapToAnotherUsingMapEle,
} from "./cases/sync/index.js";

/**
 * Test suite for the EOX Map to sync map
 */
describe("map syncing", () => {
  /**
   * Test case to syncs one map to another
   */
  it("syncs one map to another", () => syncOneMapToAnother());

  /**
   * Test case to syncs one map to another using `eox-map` element
   */
  it("supports passing an eox-map to the sync property", () =>
    syncOneMapToAnotherUsingMapEle());
});
