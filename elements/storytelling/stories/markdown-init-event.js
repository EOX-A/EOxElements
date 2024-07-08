/**
 * Renders storytelling with @init event.
 */
import { html } from "lit";

function initEventFunc(element) {
  if (element?.tagName === "EOX-MAP") {
    element.registerProjection(
      "ESRI:53009",
      "+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 " +
        "+b=6371000 +units=m +no_defs"
    );
    const projection = element.getAttribute("projection");
    if (projection) element.setAttribute("projection", projection);
  }
}

export const MarkdownInitEvent = {
  args: {
    markdown: `## Map section <!--{as="eox-map" projection="ESRI:53009" style="width: 100%; height: 500px;" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->

## Map Tour section <!--{ projection="ESRI:53009" as="eox-map" zoom="9" center=[12.46,41.89] mode="tour" layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' }-->

### <!--{ projection="ESRI:53009" animationOptions="{duration:500}" }-->
#### ESRI:53009

### <!--{ projection="EPSG:3857" animationOptions="{duration:500}" }-->
#### EPSG:3857

### <!--{ projection="EPSG:4326" animationOptions="{duration:500}" }-->
#### EPSG:4326
`,
  },
  render: (args) => html`
    <eox-storytelling
      id="markdown-editor"
      markdown=${args.markdown}
      @init=${({ detail }) => initEventFunc(detail)}
    ></eox-storytelling>
  `,
};

export default MarkdownInitEvent;
