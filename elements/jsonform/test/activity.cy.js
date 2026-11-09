import "../src/main";
import {
  programmaticActivityTest,
  inputActivityTest,
  noOpActivityTest,
  arrayActivityTest,
  customButtonActivityTest,
  genericButtonActivityTest,
  submitButtonAttributionTest,
  recreatedActivityTest,
} from "./cases";

describe("JSONForm activity attribution", () => {
  it("keeps programmatic updates out of activity", programmaticActivityTest);
  it("reports changed input values", inputActivityTest);
  it(
    "ignores no-op interactions and expires pending attribution",
    noOpActivityTest,
  );
  it("reports array additions, reordering, and deletion", arrayActivityTest);
  it(
    "reports custom button mutations but ignores no-op clicks",
    customButtonActivityTest,
  );
  it(
    "handles classless buttons and nested click targets",
    genericButtonActivityTest,
  );
  it(
    "excludes explicit and default submit buttons from edit attribution",
    submitButtonAttributionTest,
  );
  it("replaces listeners when the editor is recreated", recreatedActivityTest);
});
