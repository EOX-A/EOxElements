/**
 * Stories for eox-storytelling component showcasing various configurations.
 * These stories provide visual representations and usage examples for different scenarios.
 */
import {
  PrimaryStory,
  MarkdownAsURLStory,
  MarkdownSlotStory,
  MarkdownAttrCommentStory,
  NavigationStory,
  MarkdownBasicConfigStory,
} from "./index";

export default {
  title: "Elements/eox-storytelling",
  tags: ["autodocs"],
  component: "eox-storytelling",
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
 * Renders storytelling using attribute as a comment in markdown.
 */
export const MarkdownWithAttributeAsComment = MarkdownAttrCommentStory;

/**
 * StoryTelling with Basic Config
 */
export const MarkdownWithBasicConfig = MarkdownBasicConfigStory;

/**
 * StoryTelling with Navigation
 */
export const MarkdownWithNavigation = NavigationStory;
