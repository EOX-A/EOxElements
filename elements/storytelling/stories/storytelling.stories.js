/**
 * Stories for eox-storytelling component showcasing various configurations.
 * These stories provide visual representations and usage examples for different scenarios.
 */
import {
  PrimaryStory,
  MarkdownAsURLStory,
  MarkdownSlotStory,
  MarkdownTourStory,
  MarkdownInitEventStory,
} from "./index";
import { html } from "lit";

export default {
  title: "Elements/eox-storytelling",
  tags: ["autodocs"],
  component: "eox-storytelling",
  decorators: [
    (story) =>
      html`${story()}
        <style>
          .sb-show-main.sb-main-padded {
            padding: 0;
          }
        </style>`,
  ],
};

// Exporting each individual story for the eox-storytelling component.

/**
 * Basic usage of eox-storytelling. Renders a simple Markdown string as a story.
 */
export const Primary = PrimaryStory;

/**
 * Loads Markdown content from a remote URL and displays it in the storytelling component.
 * Useful for dynamic or externally managed story content.
 */
export const MarkdownAsURL = MarkdownAsURLStory;

/**
 * Renders Markdown content provided via the slot, demonstrating slot-based story input.
 */
export const MarkdownInsideSlot = MarkdownSlotStory;

/**
 * Shows complex markdown with maps and tours.
 * Demonstrates advanced features like custom sections and map tours.
 */
export const MarkdownTour = MarkdownTourStory;

/**
 * Demonstrates the @init event, allowing custom initialization logic (e.g., map projection setup) when the story or embedded elements are initialized.
 */
export const MarkdownInitEvent = MarkdownInitEventStory;
