import "cypress-network-idle";
import { getFilteredStories, runBatch } from "../support/storyUtils";

describe("Stories test - batch 2", () => {
  const all = getFilteredStories();
  const chunkSize = Math.ceil(all.length / 3);
  runBatch(all.slice(chunkSize, chunkSize * 2));
});
