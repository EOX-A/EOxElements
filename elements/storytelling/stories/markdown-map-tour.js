/**
 * Renders map tour in StoryTelling
 */
import { html } from "lit";
import "../src/main.js";

export const MarkdownMapTour = {
  args: {
    markdown: `
## EOX Map <!--{as="eox-map" mode="tour" prevent-scroll="true" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->
### <!--{ layers='[ { "type": "Tile", "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ]' }-->
#### Hello World
Description of step two, which changes the zoom property    

### <!--{ .zoom=${7} }-->
#### Hello World
Description of step two, which changes the zoom property    
`,
  },
  render: (args) => html`
    <eox-storytelling
      id="markdown-map-tour"
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownMapTour;
