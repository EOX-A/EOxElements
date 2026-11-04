/**
 * Stories for eox-storytelling component showcasing various configurations.
 * These stories provide visual representations and usage examples for different scenarios.
 */
import {
  PrimaryStory,
  MarkdownAsURLStory,
  MarkdownSlotStory,
  MarkdownHeroStory,
  MarkdownMapStory,
  MarkdownMapTourStory,
  MarkdownImageTourStory,
  MarkdownShowcaseStory,
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
 * Use standard markdown like `# Header`, `## Subheader`, `**bold**`, `*italic*`, `[link](url)`.
 */
export const Primary = PrimaryStory;

/**
 * Loads Markdown content from a remote URL and displays it in the storytelling component.
 * Useful for dynamic or externally managed story content. Pass the URL to the \`markdown-url\` attribute.
 */
export const MarkdownAsURL = MarkdownAsURLStory;

/**
 * Renders Markdown content provided via the slot, demonstrating slot-based story input.
 * Just place your raw Markdown inside the `<eox-storytelling>` tags.
 *
 * **NOTE:** Beware of indentation! Leading spaces will be included in the markdown string and might affect rendering.
 */
export const MarkdownInsideSlot = MarkdownSlotStory;

/**
 * Hero Section story.
 * Demonstrates how to create a full-screen hero section at the start of a story.
 * Use an h1 (\`#\`) followed by an HTML comment to configure the hero media:
 * `# Title <!--{ as="video" mode="hero" src="..." }-->` or
 * `# Title <!--{ as="img" mode="hero" src="..." }-->`.
 */
export const MarkdownHero = MarkdownHeroStory;

/**
 * Map Section story.
 * Demonstrates how to embed a map in the story using EOxMap.
 * Use an h2 (`##`) followed by an HTML comment to configure the map:
 * `## Map section <!--{ as="eox-map" style="width: 100%; height: 500px;" config='{ "layers": [...], "view": {"center": [15,48], "zoom": 1} }' }-->`.
 */
export const MarkdownMap = MarkdownMapStory;

/**
 * Map Tour story.
 * Demonstrates how to create a scroll-driven map tour (scrollytelling) where the map state changes as you scroll.
 * 1. Define the base map tour section with an h2: `## Map Tour <!--{ as="eox-map" mode="tour" }-->`
 * 2. Define each step in the tour with an h3 (`###`) and a configuration comment overriding the map's state for that step:
 * `### <!--{ center=[12.46,41.89] zoom="5" animationOptions="{duration:500}" }-->`.
 */
export const MarkdownMapTour = MarkdownMapTourStory;

/**
 * Image Tour story.
 * Demonstrates how to create a scroll-driven image tour where the image changes as you scroll.
 * 1. Define the base image tour section with an h2: `## Image Tour <!--{ as="img" mode="tour" }-->`
 * 2. Define each step in the tour with an h3 (`###`) and a configuration comment providing the new image source:
 * `### <!--{ src="https://picsum.photos/800/600" }-->`.
 */
export const MarkdownImageTour = MarkdownImageTourStory;

/** * Demonstrates the @init event, allowing custom initialization logic (e.g., map projection setup) when the story or embedded elements are initialized.
 */
export const MarkdownInitEvent = MarkdownInitEventStory;

/** * Storytelling Showcase.
 * A comprehensive example combining a hero section, standard markdown with configuration, a map section, a map tour, and an image tour all in one story.
 */
export const MarkdownShowcase = MarkdownShowcaseStory;
