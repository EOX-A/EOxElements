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
  CustomElementStory,
  MarkdownMapSectionStory,
  MarkdownSectionsStory,
  MarkdownMapTourStory,
  MarkdownEditorStory,
} from "./index";
import { html } from "lit";
import "../../jsonform/src/main";
import "../../map/main";

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

/**
 * With the `as` attribute, `h2` sections can be replaced by other elements (native and custom elements).
 * The newly rendered element replaces the original `h2' text content (fallback for vanilla md rendering) completely.
 */
export const CustomElement = CustomElementStory;

/**
 * StoryTelling with simple and custom sections
 */
export const MarkdownWithSections = MarkdownSectionsStory;

/**
 * StoryTelling with @eox-map sections
 */
export const MarkdownMapSection = MarkdownMapSectionStory;

/**
 * StoryTelling with map tour
 */
export const MarkdownMapTour = MarkdownMapTourStory;

/**
 * StoryTelling with editor
 */
export const MarkdownWithEditor = MarkdownEditorStory;
