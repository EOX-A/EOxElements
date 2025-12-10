// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";
import {
  PrimaryStory,
  CustomSlotContentStory,
  FeaturedPropertiesStory,
  FooterStory,
  HeaderPropertiesStory,
  SinglePropertyStory,
  TagsStory,
  UnstyledStory,
} from "./";

export default {
  title: "Elements/eox-stacinfo",
  tags: ["autodocs"],
  component: "eox-stacinfo",
  parameters: {
    componentSubtitle: "Automatically fetch & display properties of STAC files",
    layout: "fullscreen",
  },
  render:
    // @ts-expect-error TODO
    (args) => html`
      <eox-stacinfo
        for=${args.for}
        .header=${args.header}
        .tags="${args.tags}"
        .body="${args.body}"
        .featured=${args.featured}
        .footer=${args.footer}
        ?unstyled=${args.unstyled}
      ></eox-stacinfo>
    `,
};

/**
 * Basic usage of eox-stacinfo. Automatically fetches a STAC file and displays its properties in configurable sections (header, tags, body, featured, footer).
 * The `for` attribute/property should point to a valid STAC resource URL.
 */
export const Primary = PrimaryStory;

/**
 * Renders only a single body property. When only one property is whitelisted in the body, the content is shown full-width and without a key label, for a cleaner look.
 */
export const SingleProperty = SinglePropertyStory;

/**
 * Displays selected STAC properties in the header section using the `header` attribute/property. Useful for highlighting key metadata at the top of the info panel.
 */
export const Header = HeaderPropertiesStory;

/**
 * Renders selected STAC properties as tags using the `tags` attribute/property. This is useful for visualizing categorical or thematic metadata as compact tags.
 */
export const Tags = TagsStory;

/**
 * Highlights important STAC properties in a prominent featured section using the `featured` attribute/property. This section is ideal for drawing attention to key dataset attributes.
 */
export const FeaturedProperties = FeaturedPropertiesStory;

/**
 * Displays one or more STAC properties in a dedicated footer section using the `footer` attribute/property. Useful for citations or additional metadata at the bottom of the info panel.
 */
export const Footer = FooterStory;

/**
 * Demonstrates custom slot rendering for properties. Slots can be used to override the default rendering of any property, enabling advanced customization and integration with application-specific UI.
 */
export const CustomSlotContent = CustomSlotContentStory;

/**
 * Shows the unstyled version of the element. By setting the `unstyled` attribute/property, only minimal styles are applied, allowing for full custom styling and integration into different design systems.
 */
export const Unstyled = UnstyledStory;
