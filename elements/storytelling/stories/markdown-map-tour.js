import { html } from "lit";

export const MarkdownMapTour = {
  argTypes: {
    markdown: {
      table: {
        category: "properties",
      },
    },
  },
  args: {
    markdown: `## Map Tour section <!--{ as="eox-map" class="overlay-br" mode="tour" }-->
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. <!--{ style="opacity: 0.75; font-size: 1rem;" }-->

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center=[12.46,41.89] zoom="5" animationOptions="{duration:500}" }-->
#### This is a map tour.
It allows you to have different layers, zoom and center settings for each tour "step".

You achieve this by starting a new step with an *h3* (*###*) heading and passing properties inside a configuration comment:

\`\`\`markdown
### <!--{ layers='[...]' center=[12.46,41.89] zoom="5" animationOptions="{duration:500}" }-->
\`\`\`

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}},{"type":"Tile","properties":{"id":"customId"},"source":{"type":"WMTSCapabilities","url":"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml","layer":"s2cloudless-2017"}}]' center=[12.46,41.89] zoom="10" }-->
#### Second tour step.
Each tour step is described as an *h3* (*###*) heading.

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}},{"type":"Tile","properties":{"id":"customId"},"source":{"type":"WMTSCapabilities","url":"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml","layer":"s2cloudless-2017"}}]' center="[16.36,48.2]" zoom="10" animationOptions="{duration:500}" }-->
#### Third tour step.
To change individual parameters like zoom or center, or to change the map layers for a step, just set them using the HTML comment syntax. This changes the map setting for the current map`,
    id: "markdown-map-tour",
    showNav: true,
  },
  render: (args) => html`
    <eox-storytelling
      id=${args.id}
      ?show-nav=${args.showNav}
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownMapTour;
