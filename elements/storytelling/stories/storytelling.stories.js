/**
 * Stories for eox-storytelling component showcasing various configurations.
 * These stories provide visual representations and usage examples for different scenarios.
 */
import {
  PrimaryStory,
  MarkdownAsURLStory,
  MarkdownSlotStory,
  MarkdownEditorStory,
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
 * StoryTelling using basic markdownL.
 */
export const Primary = PrimaryStory;

/**
 * StoryTelling using markdown URL.
 */
export const MarkdownAsURL = MarkdownAsURLStory;

/**
 * StoryTelling using markdown from the slot.
 */
export const MarkdownInsideSlot = MarkdownSlotStory;

/**
 * StoryTelling with editor
 */
export const MarkdownWithEditor = MarkdownEditorStory;
