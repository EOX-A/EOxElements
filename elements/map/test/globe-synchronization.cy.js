import "../src/main.js";
import {
  testPoolEventIsolation,
  testSynchronizationOrigin,
  testGlobeToggleOwnership,
  testGlobeReconnectOwnership,
  testDetachedGlobeRegistration,
  testDynamicGlobeSelection,
  testSameIdGlobeReplacement,
} from "./cases/globe-synchronization/index.js";

describe("globe synchronization ownership", () => {
  it(
    "isolates internal map events without changing public propagation",
    testPoolEventIsolation,
  );
  it(
    "reconciles root events once and ignores retargeted nested events",
    testSynchronizationOrigin,
  );
  it(
    "does not reactivate stale listeners after toggling globe mode",
    testGlobeToggleOwnership,
  );
  it(
    "pauses on disconnection and resumes with one synchronization owner",
    testGlobeReconnectOwnership,
  );
  it(
    "defers late initialization until the host is reconnected",
    testDetachedGlobeRegistration,
  );
  it(
    "preserves selection and activity for dynamically added layers",
    testDynamicGlobeSelection,
  );
  it(
    "disconnects old OL instances when replacing layers with the same ID",
    testSameIdGlobeReplacement,
  );
});
