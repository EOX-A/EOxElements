import "../src/main";
import "@eox/timecontrol";
import "./_mockMap";
import {
  datetimeInitializationWithoutActivity,
  datetimeProgrammaticSelectionWithoutActivity,
  datetimeUserSelectionActivity,
} from "./cases";

describe("LayerControl datetime activity attribution", () => {
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
