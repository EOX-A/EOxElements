import "../src/components/layer.js";
import {
  layerRowSubscriptionLifecycle,
  layerRowSubscriptionReplacement,
} from "./cases/index.js";

describe("Layercontrol row subscription lifecycle", () => {
  it(
    "releases detached rows and restores one set on reconnect",
    layerRowSubscriptionLifecycle,
  );
  it(
    "follows layer, map, view, and zoom-state replacements",
    layerRowSubscriptionReplacement,
  );
});
