import "../src/main";
import "../../map/src/main";
import "../../map/src/plugins/advancedLayersAndSources";
import { replacedTimelineTest, reconnectedTimelineTest } from "./cases";

describe("Timeline listener lifecycle", () => {
  it(
    "destroys the previous instance before replacing it",
    replacedTimelineTest,
  );
  it(
    "cancels work on disconnect and restores a single instance on reconnect",
    reconnectedTimelineTest,
  );
});
