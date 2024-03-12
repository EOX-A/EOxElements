/**
 * Stories for eox-layout component showcasing various configurations.
 * These stories provide visual representations and usage examples for different scenarios.
 */
import { PrimaryStory, GridStory, GapStory } from "./index";

export default {
  title: "Elements/eox-layout",
  tags: ["autodocs"],
  component: "eox-layout",
};

// Exporting each individual story for the eox-layout component.

/**
 * Primary story showcasing basic usage.
 */
export const Primary = PrimaryStory;

/**
 * The layout grid consists of 12x12 slots, where `x` and `y` coordinates are zero-indexed.
 */
export const Grid = GridStory;

/**
 * When using the `gap` attribute on `eox-layout`, a padding as well as gaps are
 * created between the individual items. A 1px border was added to demonstrate the padding.
 */
export const Gap = GapStory;
