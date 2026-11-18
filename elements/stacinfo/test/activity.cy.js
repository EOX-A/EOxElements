import "../src/main.js";
import { linkActivityTest } from "./cases/activity.js";

describe("STAC info activity", () => {
  it(
    "reports user link clicks across shadow boundaries without initialization activity",
    linkActivityTest,
  );
});
