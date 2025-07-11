import "../src/main";
import { loadClusterLayer } from "./cases/layer-type";
import {
  addClusterInteraction,
  removeClusterInteraction,
} from "./cases/cluster-interaction/index.js";
import "../src/plugins/advancedLayersAndSources/index";

/**
 * Test suite for the EOX Map to load and test Cluster-Vector Layer
 */
describe("layers", () => {
  /**
   * Test case to load Cluster-Vector Layer
   */
  it("loads a Cluster Layer", () => loadClusterLayer());

  /**
   * Test case to add a Cluster Interaction
   */
  it("adds a cluster interaction", () => addClusterInteraction());

  /**
   * Test case to remove a Cluster Interaction
   */
  it("cleanly removes cluster interaction", () => removeClusterInteraction());
});
