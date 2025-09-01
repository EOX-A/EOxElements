/**
 * Stories for eox-tour component showcasing various configurations.
 * These stories provide visual representations and usage examples for different scenarios.
 */
import { PrimaryStory, TourLoadOnceStory } from "./index";

export default {
  title: "Elements/eox-tour",
  tags: ["autodocs"],
  component: "eox-tour",
};

// Exporting each individual story for the eox-tour component.

/**
 * Primary story showcasing basic usage.
 */
export const Primary = PrimaryStory;

/**
 * Story in which the tour is loaded once and if the user delete the tour state the tour is loaded again.
 */
export const TourLoadOnce = TourLoadOnceStory;
