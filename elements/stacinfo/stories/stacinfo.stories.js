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
    // @ts-ignore
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
 * In its most basic form, the element fetches a STAC file and displays its properties.
 */
export const Primary = PrimaryStory;

/**
 * If only one body property is whitelisted, then it renders the content full-width and without the key.
 */
export const SingleProperty = SinglePropertyStory;

/**
 * Individual STAC properties can be rendered in the header by using the `header` property.
 */
export const Header = HeaderPropertiesStory;

/**
 * Individual STAC properties can be rendered as tags by using the `tags` property.
 */
export const Tags = TagsStory;

/**
 * Individual STAC properties can be rendered in a more prominent way by using the `featured` property.
 */
export const FeaturedProperties = FeaturedPropertiesStory;

/**
 * The `footer` allows to highlight one or more properties in a dedicated section.
 */
export const Footer = FooterStory;

/**
 * Custom rendering of properties can be achieved using `slots`.
 * Automatically generated slots are provided for body properties, featured properties, featured summaries, header and footer.
 */
export const CustomSlotContent = CustomSlotContentStory;

/**
 * By using the `unstyled` attribute, only the bare minimum styles are applied to the element.
 */
export const Unstyled = UnstyledStory;
