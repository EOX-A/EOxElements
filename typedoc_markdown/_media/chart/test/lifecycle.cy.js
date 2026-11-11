import "../src/main";
import {
  mountLifecycleChart,
  disposeChartTest,
  reconnectChartTest,
  staleChartTest,
  disconnectedPendingChartTest,
} from "./cases";

describe("Chart lifecycle", () => {
  beforeEach(() => mountLifecycleChart());

  it("finalizes embeds on replacement and disconnect exactly once", () =>
    disposeChartTest());

  it("restores rendering and resize observation without duplicating delegation", () =>
    reconnectChartTest());

  it("finalizes out-of-order results without replacing the current chart", () =>
    staleChartTest());

  it("finalizes pending results after disconnect", () =>
    disconnectedPendingChartTest());
});
