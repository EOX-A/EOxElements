import "../src/main";
import {
  addDrawInteraction,
  createBox,
  createGeometry,
  createLineMeasureEvent,
  createPolygonMeasureEvent,
  removeDrawInteractionFirstCase,
  removeDrawInteractionSecondCase,
} from "./cases/draw";

/**
 * Test suite for the EOX Map to test draw interaction
 */
describe("draw interaction", () => {
  beforeEach(() => {});

  /**
   * Test case to add draw interaction in EOx Map
   */
  it("adds a draw interaction", () => addDrawInteraction());

  /**
   * Test case to create correct geometry with draw interaction in EOx Map
   */
  it("creates correct geometry", () => createGeometry());

  /**
   * First test case to remove draw interaction in EOx Map
   */
  it("remove interaction", () => removeDrawInteractionFirstCase());

  /**
   * Second test case to remove draw interaction in EOx Map
   */
  it("remove interaction", () => removeDrawInteractionSecondCase());

  /**
   * Test case to create line and measure with draw interaction in EOx Map
   */
  it("creates line and measure event", () => createLineMeasureEvent());

  /**
   * Test case to create polygon and measure with draw interaction in EOx Map
   */
  it("creates polygon and measure event", () => createPolygonMeasureEvent());

  /**
   * Test case to create box with draw interaction in EOx Map
   */
  it("creates box", () => createBox());
});
