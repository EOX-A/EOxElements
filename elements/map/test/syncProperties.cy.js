import "../src/main";
import { syncProperties } from "./cases/sync/index.js";

/**
 * Test suite for the EOX Map to sync map using properties
 */
describe("layers", () => {
  /*
   * Test case to syncs one map to another using properties
   */
  it("syncs properties", () => syncProperties());
});
