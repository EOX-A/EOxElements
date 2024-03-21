/**
 * Renders map tour in StoryTelling
 */
import { html } from "lit";
import "../src/main.js";

export const MarkdownMapTour = {
  args: {
    markdown: `
## EOX Map <!--{as="eox-map" mode="tour" position="left" prevent-scroll="true" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {} }, "layers": [ { "type": "Tile", "properties":{"id":"tile","title":"tiles"}, "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->

### <!--{ layers='[{"type":"Tile","properties":{"id":"osmq","title":"OpenStreetMapq"},"source":{"type":"OSM"}}]' zoom="5" }-->
#### Hello World
Description of step two, which changes the zoom property

### <!--{ zoom="2" layers='[{"type":"Tile","properties":{"title":"EOxCloudless2019","id":"EOxCloudless"},"source":{"type":"XYZ","url":"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg"}},{"type":"Vector","properties":{"title":"Regions","id":"regions","description":"Ecologicalregionsoftheearth."},"source":{"type":"Vector","url":"https://openlayers.org/data/vector/ecoregions.json","format":"GeoJSON","attributions":"Regions:@openlayers.org"}}]' }-->
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
