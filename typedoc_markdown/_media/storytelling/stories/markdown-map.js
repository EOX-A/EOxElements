import { html } from "lit";

export const MarkdownMap = {
  argTypes: {
    markdown: {
      table: {
        category: "properties",
      },
    },
  },
  args: {
    markdown: `## Map section <!--{as="eox-map" class="overlay-br" style="width: 100%; height: 500px;" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->
### Some title for map <!--{ style="color: white; font-size: 1.25rem;" }-->
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. <!--{ style="opacity: 0.75; font-size: 1rem;" }-->`,
    id: "markdown-map",
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

export default MarkdownMap;
