import "../src/main";
import { setConfig } from "./cases/config-object";

/**
 * Test suite for the EOX Map to configure map using config property.
 */
describe("config property", () => {
  /**
   * Test case to set configuration using `config` parameter
   */
  it("sets controls, layers and view using the config object", () =>
    setConfig());
});
