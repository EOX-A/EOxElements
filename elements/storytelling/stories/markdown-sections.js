/**
 * Renders storytelling sections.
 */
import { html } from "lit";
import "../src/main.js";

export const MarkdownSections = {
  args: {
    markdown: `
## EarthCODE Portal <!--{as="esa-main-section" title="EarthCODE Portal"}-->
This portal shall provide an entry point to the collaborative development tools and resources, as well as access to community guidelines and open documentation to help researchers adopt FAIR principles in their scientific practice.

Through community and capacity building focused on Open Science, the activity shall promote a trusted collaborative experience of conducting Earth system science.

Just like the European Space Agency (ESA), we advocate for and actively support Open Science, as we believe in the significance of collaborative efforts in advancing scientific knowledge and addressing global challenges. We acknowledge the transformative power of Open Science in driving interdisciplinary collaboration, facilitating reproducibility, and ultimately contributing to a more sustainable and resilient future for our world.

The OSC aims to advance science initiatives and projects by providing a platform to store catalog records for science themes, variables, projects, products, and contributing (EO) missions. This system allows users an easy way to browse, search, and access metadata information associated with these records. This blog post provides some technical details about the OSC.

## OSC <!--{as="div" style="display: flex; width: 100%; justify-content: center; align-items: center;"}-->
![](https://eox.at/images/osc-title.jpg) <!--{style="min-width: 40vw;"}-->

The contents of the catalog is actually managed by a public GitHub repository, allowing for a full history of changes to the contents of records. Additionally changes to the repository are done using the mechanism of a Pull Request. Users can suggest changes, which can be revised by the data administrators of the Open Science Catalog, and run through rigorous checks using GitHub actions, which perform checks on the validity and the integrity of the changes. When a Pull Request is accepted, the changes are incorporated in the main branch of the catalog, triggering a new release of the static catalog, which is subsequently merged into the resource catalog.

## FutureEO <!--{as="esa-main-section"}-->
For all components (technology, community, partnerships), the Reproducible Open Science Environment can rely on elements developed as part of other FutureEO activities and on readily available operational services provided by Member States' public and industrial facilities, including interoperable building blocks, platform services, Open Science capacity building, scientific communication, and international cooperation.`,
  },
  render: (args) => html`
    <eox-storytelling
      show-nav
      id="markdown-sections"
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownSections;
