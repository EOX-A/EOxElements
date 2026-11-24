import "../src/main";
import "@eox/timecontrol";
import "./_mockMap";
import {
  datetimeInitializationWithMilliseconds,
  datetimeInitializationWithoutActivity,
  datetimeProgrammaticSelectionWithoutActivity,
  datetimeUserSelectionActivity,
} from "./cases";

describe("LayerControl datetime activity attribution", () => {
  it(
    "ignores millisecond normalization but emits once for a different step",
    datetimeInitializationWithMilliseconds,
  );
  it(
    "initializes a missing currentStep without activity",
    datetimeInitializationWithoutActivity,
  );
  it(
    "updates programmatic timecontrol selections without activity",
    datetimeProgrammaticSelectionWithoutActivity,
  );
  it(
    "emits one root activity for genuine UI navigation",
    datetimeUserSelectionActivity,
  );
});
