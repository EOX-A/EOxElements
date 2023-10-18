import { html } from "lit";
import "./src/main";

export default {
  title: "Elements/eox-stacinfo",
  tags: ["autodocs"],
  component: "eox-stacinfo",
  parameters: {
    componentSubtitle: "Automatically fetch & display properties of STAC files",
    layout: "centered",
  },
  render: (args) => html`
    <eox-stacinfo
      for=${args.for}
      .header=${args.header}
      .properties="${args.properties}"
      .featured=${args.featured}
      .footer=${args.footer}
      ?unstyled=${args.unstyled}
      style="width: 400px"
    ></eox-stacinfo>
  `,
};

/**
 * In its most basic form, the element fetches a STAC file and displays its properties.
 */
export const Basic = {
  args: {
    for: "https://metadata.opensciencedata.esa.int/open-science-catalog-metadata/products/bathymetry-arctic-cp4o/collection.json",
    header: ["title"],
    properties: ["osc:region", "osc:status", "osc:missions", "created"],
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
    properties: undefined,
    featured: undefined,
    footer: undefined,
  },
};

/**
 * Individual STAC properties can be rendered in a more prominent way by using the `featured` property.
 */
export const FeaturedProperties = {
  args: {
    ...Basic.args,
    featured: ["description", "extent"],
    footer: undefined,
  },
};

/**
 * The footer allows to highlight one or more properties.
 */
export const Footer = {
  args: {
    ...Basic.args,
    featured: ["description", "extent"],
    footer: ["osc:project"],
  },
};

/**
 * Custom rendering of properties can be achieved using `slots`. Automatically generated slots are provided for properties, featured properties, featured summaries, header and footer.
 */
export const CustomSlotContent = {
  args: {
    ...Basic.args,
  },
  render: (args) => html`
    <eox-stacinfo
      id="slot"
      for=${args.for}
      .header=${args.header}
      .properties="${args.properties}"
      .featured=${args.featured}
      .footer=${args.footer}
      ?unstyled=${args.unstyled}
      style="width: 400px"
    >
      <div
        slot="region"
        style="background: lightgrey; width: 100%; padding: 10px 20px; border-radius: 4px;"
      >
        <p>
          Replacing the "region" property slot to render it in a custom manner:
        </p>
        <p>--> <strong>Region:</strong> <span class="content"></span>!</p>
      </div>
    </eox-stacinfo>
    <script>
      const stacInfo = document.querySelector("eox-stacinfo#slot");
      stacInfo.addEventListener("loaded", () => {
        setTimeout(() => {
          const value = stacInfo.stacProperties["osc:region"];
          document.querySelector(".content").innerHTML = value.formatted;
        });
      });
    </script>
  `,
};

/**
 * By using the `unstyled` attribute, only the bare minimum styles are applied to the element.
 */
export const Unstyled = {
  args: {
    ...Footer.args,
    unstyled: true,
  },
};
