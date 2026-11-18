import {
  testDisposedLayerReplacement,
  testDisposedLayerDebounce,
  testCapturedGlobeRefresh,
  testAbortedOrderFrame,
  testAlreadyAbortedOrder,
} from "./cases/globe-subscriptions";

describe("globe subscription primitives", () => {
  it("isolates same-ID replacements from disposed OL callbacks", () =>
    testDisposedLayerReplacement());

  it("cancels pending debounced refreshes on disposal", () =>
    testDisposedLayerDebounce());

  it("refreshes the captured globe and disposes animation reset timers", () =>
    testCapturedGlobeRefresh());

  it("unsubscribes and cancels pending layer-order frames on abort", () =>
    testAbortedOrderFrame());

  it("does not subscribe with an already-aborted signal", () =>
    testAlreadyAbortedOrder());
});
