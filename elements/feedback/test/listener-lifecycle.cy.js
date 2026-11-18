import "../src/main";
import { detachedKeyboardTest, reconnectedKeyboardTest } from "./cases";

describe("Feedback listener lifecycle", () => {
  it("does not process keyboard events after removal", detachedKeyboardTest);
  it(
    "registers one set of handlers after reconnecting",
    reconnectedKeyboardTest,
  );
});
