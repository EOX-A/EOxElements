import "../src/main.js";
import {
  selectSubscriptionLifecycle,
  selectDeferredSubscriptionCleanup,
} from "./cases/select/index.js";

describe("Select interaction subscription lifecycle", () => {
  it(
    "releases target and layer listeners without accumulation",
    selectSubscriptionLifecycle,
  );
  it(
    "releases deferred source load listeners",
    selectDeferredSubscriptionCleanup,
  );
});
