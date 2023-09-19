import { html } from "lit";
import "./src/main";

export default {
  title: "Elements/eox-stacinfo",
  tags: ["autodocs"],
  component: "eox-stacinfo",
  render: (args) => html`
    <eox-stacinfo
      for=${args.for}
      .header=${args.header}
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
export const Basic = {
  args: {
    for: "https://metadata.opensciencedata.esa.int/open-science-catalog-metadata/products/aerosol-pure-dust-op-livas/collection.json",
    header: ["title"],
    properties: ["osc:status", "osc:missions"],
    featured: ["description"],
    footer: ["osc:project"],
  },
};

/**
 * The rendered STAC properties can be whitelisted to show only certain properties (by setting the `properties` array). By default, title and description are always rendered at the top.
 */
export const PropertiesWhitelist = {
  args: {
    ...Basic.args,
    properties: [
      "title",
      "description",
      "osc:missions",
      "osc:project",
      "osc:region",
      "osc:status",
      "osc:themes",
      "osc:type",
    ],
  },
};

/**
 * If no `properties` whitelist is defined, all properties from the STAC JSON are rendered.
 */
export const AllProperties = {
  args: {
    ...Basic.args,
    // @ts-ignore
    properties: undefined,
  },
};

/**
 * Individual STAC properties can be rendered in a more prominent way by using the `featured` property.
 */
export const FeaturedProperties = {
  args: {
    ...Basic.args,
    featured: ["osc:project", "osc:status"],
  },
};

/**
 * By using the `unstyled` attribute, only the bare minimum styles are applied to the element.
 */
export const Unstyled = {
  args: {
    ...Basic.args,
    unstyled: true,
  },
};
