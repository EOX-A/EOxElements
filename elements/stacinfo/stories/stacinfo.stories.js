// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";
import {
  AllPropertiesStory,
  BasicStory,
  CustomSlotContentStory,
  FeaturedPropertiesStory,
  FooterStory,
  PropertiesWhitelistStory,
  SinglePropertyStory,
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
  render: (args) => html`
    <eox-stacinfo
      for=${args.for}
      .header=${args.header}
      .tags="${args.tags}"
      .properties="${args.properties}"
      .featured=${args.featured}
      .footer=${args.footer}
      ?unstyled=${args.unstyled}
    ></eox-stacinfo>
  `,
};

/**
 * In its most basic form, the element fetches a STAC file and displays its properties.
 */
export const Basic = BasicStory;

/**
 * The rendered STAC properties can be whitelisted to show only certain properties (by setting the `properties` array). By default, title and description are always rendered at the top.
 */
export const PropertiesWhitelist = PropertiesWhitelistStory;

/**
 * If no `properties` whitelist is defined, all properties from the STAC JSON are rendered.
 */
export const AllProperties = AllPropertiesStory;

/**
 * If only one property is whitelisted, then it renders the content full-width and without the key.
 */
export const SingleProperty = SinglePropertyStory;

/**
 * Individual STAC properties can be rendered in a more prominent way by using the `featured` property.
 */
export const FeaturedProperties = FeaturedPropertiesStory;

/**
 * The footer allows to highlight one or more properties.
 */
export const Footer = FooterStory;

/**
 * Custom rendering of properties can be achieved using `slots`. Automatically generated slots are provided for properties, featured properties, featured summaries, header and footer.
 */
export const CustomSlotContent = CustomSlotContentStory;

/**
 * By using the `unstyled` attribute, only the bare minimum styles are applied to the element.
 */
export const Unstyled = UnstyledStory;
