import "cypress-network-idle";
import { getFilteredStories, runBatch } from "../support/storyUtils";

describe("Stories test - batch 3", () => {
  const all = getFilteredStories();
  const chunkSize = Math.ceil(all.length / 3);
  runBatch(all.slice(chunkSize * 2));
});
