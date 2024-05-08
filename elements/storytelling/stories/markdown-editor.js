/**
 * Renders storytelling with text editor.
 */
import { html } from "lit";

export const MarkdownEditor = {
  args: {
    markdown: `
# Welcome to Storytelling <!--{ as="video" mode="hero" src="https://dlmultimedia.esa.int/download/public/videos/2023/06/010/2306_010_AR_EN.mp4" }-->
#### An introduction on how to write interactive and multimedial stories using markdown. Scroll to get started! <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->



## Why storytelling?

Scientific data is often times cdifficult to communicate; by guiding the audience you can communicate better.

## How do I get started?
In the background you see live preview, on the right you see the  markdown editor. This editor can be dragged, resized, hidden. Any time you write something in the editor, it updates the live preview. Try typing something in this line!
editor offers a toolbar for formatting, exporting and importing markdown files, and creating sections (see below)

### Write in Markdown
bla markdown

### Markdown extension
Addtiionally to normal markdown, the storytelling rendering engine allows adding additional configuration (which is transformed and hidden in the rendered output).

Let's say we want an image with a specific size and a colored text underneath. With basic markdown it would look like this:

X
X

Let's add some configuration,

![Image](https://www.gstatic.com/prettyearth/assets/full/14617.jpg)<!-- {width=300} -->

Some text with red color <!--{#red-color style="color:red;"}-->

## Story structure
### hero -h1
### sections -h2
each section is automatically added to the nav menu
### special sections
plus icon in toolbar or in live preview

special "map" section see below

## map
-> how to create map JSON?

## EOX Map <!--{as="eox-map" style="width: 100%; height: 500px;" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->


## map tour section

## final words
get started writing your own!
more features to come, follow progress on GitHub (link)




    

    
    `,
  },
  render: (args) => html`
    <eox-storytelling
      id="markdown-editor"
      show-editor
      show-nav
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownEditor;
