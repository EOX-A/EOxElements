import { html } from "lit";

export const BlocksShowcase = {
  argTypes: {
    blocks: {
      table: {
        category: "properties",
      },
    },
  },
  args: {
    blocks: [
      {
        type: "hero-video",
        props: {
          title: "Welcome to Storytelling",
          src: "https://dlmultimedia.esa.int/download/public/videos/2023/06/010/2306_010_AR_EN.mp4",
          description:
            "An introduction on how to write interactive and multimedial stories using structured JSON blocks. Scroll down to get started!",
        },
      },
      {
        type: "text",
        props: {
          markdown: `
## Why storytelling?

Storytelling is crucial in the realm of science because scientific data, while rich in information, can often be complex and challenging to communicate. By framing data within narratives, storytelling makes scientific concepts accessible, engaging, and memorable to a wider audience. It bridges the gap between the technical details of research and the public's understanding, fostering appreciation, curiosity, and ultimately, a deeper connection to the wonders of science.

Specifically, **scrolly**telling[^1] adds another layer of engagement, which allows the user to interact with the website by simply scrolling through it.

[^1]: Blend of *scroll* + *storytelling*. [Storytelling enriched with multimedial elements triggered while scrolling down a webpage](https://en.wiktionary.org/wiki/scrollytelling).
`,
        },
      },
      {
        type: "text",
        props: {
          markdown: `
## Structured Block Composition

This entire storytelling page was generated from a **clean, structured JSON array** (A2UI format) instead of direct raw Markdown compilation.

### Why Structured Blocks?
- **AI Agent-Friendly:** LLMs are exceptionally good at returning exact structured JSON schemas, eliminating the risk of malformed HTML comments.
- **Dynamic Content Updates:** The agent can stream updates of specific blocks (like changing coordinates on a map or adding a section) securely.
- **Standardized Prototyping:** Separates block-level content structures from prose formatting.
`,
        },
      },
      {
        type: "text",
        props: {
          markdown: `
## Story structure
### The hero
The hero is the initial section of a story. It can be either a full-screen image or a full-screen video, with some overlaying text.

### Story sections
Each section represents a structured piece of the narrative document, which can easily be managed, re-ordered, or modified dynamically by a co-pilot chat agent.
`,
        },
      },
      {
        type: "eox-map",
        props: {
          title: "Map section",
          class: "overlay-br",
          style: "width: 100%; height: 500px;",
          config: {
            controls: {
              Zoom: {},
              Attribution: {},
              FullScreen: {},
              OverviewMap: {
                layers: [
                  {
                    type: "Tile",
                    properties: { id: "overviewMap" },
                    source: { type: "OSM" },
                  },
                ],
              },
            },
            layers: [
              {
                type: "Tile",
                properties: { id: "overviewMap" },
                source: {
                  type: "TileWMS",
                  url: "https://ows.mundialis.de/services/service",
                  params: { LAYERS: "TOPO-WMS" },
                },
              },
            ],
            view: {
              center: [15, 48],
              zoom: 1,
            },
          },
          description:
            '### Some title for map <!--{ style="color: white; font-size: 1.25rem;" }-->\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. <!--{ style="opacity: 0.75; font-size: 1rem;" }-->',
        },
      },
      {
        type: "eox-map",
        props: {
          title: "Map Tour section",
          class: "overlay-br",
          mode: "tour",
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. <!--{ style="opacity: 0.75; font-size: 1rem;" }-->',
          steps: [
            {
              title: "This is a map tour.",
              description:
                "It allows you to have different layers, zoom and center settings for each tour 'step'.",
              center: [12.46, 41.89],
              zoom: 5,
              layers: [
                {
                  type: "Tile",
                  properties: { id: "osm" },
                  source: { type: "OSM" },
                },
              ],
              animationOptions: { duration: 500 },
            },
            {
              title: "Second tour step.",
              description:
                "Each tour step is described as an item in the steps array.",
              center: [12.46, 41.89],
              zoom: 10,
              layers: [
                {
                  type: "Tile",
                  properties: { id: "osm" },
                  source: { type: "OSM" },
                },
                {
                  type: "Tile",
                  properties: { id: "customId" },
                  source: {
                    type: "WMTSCapabilities",
                    url: "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
                    layer: "s2cloudless-2017",
                  },
                },
              ],
            },
            {
              title: "Third tour step.",
              description:
                "To change individual parameters like zoom or center, or to change the map layers for a step, just set them using the HTML comment syntax. This changes the map setting for the current map.",
              center: [16.36, 48.2],
              zoom: 10,
              layers: [
                {
                  type: "Tile",
                  properties: { id: "osm" },
                  source: { type: "OSM" },
                },
                {
                  type: "Tile",
                  properties: { id: "customId" },
                  source: {
                    type: "WMTSCapabilities",
                    url: "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
                    layer: "s2cloudless-2017",
                  },
                },
              ],
              animationOptions: { duration: 500 },
            },
          ],
        },
      },
      {
        type: "img",
        props: {
          title: "Image Tour section",
          mode: "tour",
          steps: [
            {
              title: "This is an image tour.",
              description:
                "It allows you to have different sources for each tour 'step'.",
              src: "https://picsum.photos/800/600",
              style: "background: #fff0c4;",
            },
            {
              title: "Second tour step.",
              description:
                "Each tour step is described as an h3 heading behind the scenes.",
              src: "https://picsum.photos/900/700",
              style: "background: #ffe7ef;",
            },
            {
              title: "Third tour step.",
              description:
                "The tour transitions smoothly as the user scrolls down the page.",
              src: "https://picsum.photos/900/800",
              style: "background: #e2fffc;",
            },
          ],
        },
      },
      {
        type: "text",
        props: {
          markdown: `
## Final Words
Hopefully, this was a good introduction to the story writing possibilities using structured blocks in EOxStorytelling - get started writing your own story!
More features will be added soon, so feel free to follow progress at the [EOxElements GitHub repository](https://github.com/EOX-A/EOxElements).
`,
        },
      },
    ],
    id: "blocks-showcase",
    showNav: true,
    showHeroScrollIndicator: true,
  },
  render: (args) => html`
    <eox-storytelling
      id=${args.id}
      ?show-nav=${args.showNav}
      ?show-hero-scroll-indicator=${args.showHeroScrollIndicator}
      .blocks=${args.blocks}
    ></eox-storytelling>
  `,
};

export default BlocksShowcase;
