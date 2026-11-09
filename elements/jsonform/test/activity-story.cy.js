import "../src/main.js";
import {
  programmaticStoryTest,
  userStoryTest,
  frameworkExportsTest,
  vanillaExportStoryTest,
} from "./cases/activity-story.js";

describe("Activity Storybook example", () => {
  it(
    "preserves the demo in actual vanilla, React, Vue, and Svelte exports",
    frameworkExportsTest,
  );
  it(
    "runs the generated vanilla/MCP snippet with attributed edits and silent property updates",
    vanillaExportStoryTest,
  );
  it(
    "retains functional events without activity for initialization and property updates",
    programmaticStoryTest,
  );
  it(
    "reports form edits as activity but not later programmatic updates",
    userStoryTest,
  );
});
