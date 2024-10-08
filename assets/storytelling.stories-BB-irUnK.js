import{k as t}from"./lit-element-CHc5qsYe.js";const z={args:{markdown:"## Hello World, Welcome to EOxStoryTelling."},render:e=>t`
    <!-- Render eox-storytelling with basic markdown. -->
    <eox-storytelling
      id="markdown-str"
      markdown=${e.markdown}
    ></eox-storytelling>
  `},H={args:{markdownURL:`${window.location.href.split("iframe.html")[0]}/sample.md`},render:e=>t`
    <!-- Render eox-storytelling with basic markdown url. -->
    <eox-storytelling
      id="markdown-url"
      markdown-url=${e.markdownURL}
    ></eox-storytelling>
  `},P={args:{markdown:"## Hello World, Markdown Inside Slot."},render:e=>t`
    <!-- Render eox-storytelling from markdown inside the slot. -->
    <eox-storytelling id="markdown-slot">${e.markdown}</eox-storytelling>
  `},j={args:{markdown:`# Welcome to Storytelling <!--{ as="video" mode="hero" src="https://dlmultimedia.esa.int/download/public/videos/2023/06/010/2306_010_AR_EN.mp4" }-->
#### An introduction on how to write interactive and multimedial stories using markdown. Scroll down to get started! <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->



## Why storytelling?

Storytelling is crucial in the realm of science because scientific data, while rich in information, can often be complex and challenging to communicate. By framing data within narratives, storytelling makes scientific concepts accessible, engaging, and memorable to a wider audience. It bridges the gap between the technical details of research and the public's understanding, fostering appreciation, curiosity, and ultimately, a deeper connection to the wonders of science.

## How do I get started?
### Story editor and live preview
The main view of this page shows the live preview of the finished story. Floating above that you can see the story editor, which you can show and hide using the toggle:

![](./img/editor-toggle-off.png) ![](./img/editor-toggle-on.png)

This editor can also be dragged and resized in order to position it in such a way that you can comfortably see the live preview of the story.

To resize it, drag the lower left corner of the editor window:

![](./img/editor-resize.png)

To move it, drag any of the borders of the editor window:

![](./img/editor-move.png)

Try moving and resizing the editor in order to find a location that suits you best!

Any time you write something in the editor, it updates the live preview. This helps you seeing the final story without immediately. Try typing something and see how the preview changes.

The editor offers a toolbar for formatting (bold, italic, strikethrough etc.), exporting and importing markdown files, and creating sections (more on this later). Her's how the toolbar looks like:

![](./img/editor-toolbar.png)

For this introduction, compare both the content of the editor and the live preview, as you might find some interesting behind-the-scenes information in the editor 😉

### Markdown with superpowers
The main story language is Markdown, a lightweight markup language that uses plain text formatting syntax to convert plain text into structured HTML documents. Read more about Markdown [in this Wikipedia article](https://en.wikipedia.org/wiki/Markdown) and find a guide on how to get started (including a cheatsheet) [here](https://www.markdownguide.org/).

Addtiionally to normal Markdown, the storytelling rendering engine allows adding additional configuration; this configuration is only visible to you, the editor, and is hidden to the reader.
It allows adding "superpowers" to Markdown using [HTML](https://en.wikipedia.org/wiki/HTML) comments and attributes.

To write a HTML comment, use the syntax ![](./img/editor-comments.png)

---

Let's say we want a small image with a specific size and a colored text underneath. With normal Markdown you would write it like this:

![Image](https://placehold.co/800x100)

*Some italic text*

---

Let's add some configuration to reduce the width of the image and add color to the text:

![Image](https://placehold.co/800x100) <!--{ width="300" }-->

*Some italic text, now in red* <!--{ style="color:red" }-->

---

In the editor, try to change the height of the following image!

![Image](https://placehold.co/200x200)

You can use any HTML attributes, plus some shorthands: *#* is a shorthand for *id* (e.g. <code>#hello</code> renders as <code>id="hello"</code>) and *.* is a shorthand for *class* (e.g. <code>.foo</code> renders as <code>class="foo"</code>).

## Story structure
### The hero
The hero is the initial section of a story. It can be either a full-screen image or a full-screen video, with some overlaying text. You can either write the hero section by hand, or by using the "plus" icon in the editor toolbar (or in the story preview).
In each story, only one hero should be added at the very beginning. After the hero, you will see the nav menu, and after that, the story content. The hero uses the Markdown syntax for *h1* (Header 1), so it starts with one *#*.

### Story sections
To start a new section, use the Markdown syntax for *h2* (Header 2), so starting with *##*. Eeach section is automatically added to the nav menu. 

### Special sections
Additionally to the hero section, there are other special sections (like media, map), and the most convenient way to add them is via the "plus" icon. They use the "as" attribute, which replaces the entire section with the corresponding element. So, for example, *as="div"* will replace the entire sectioni (including the title) with a *div*.
We will now have a more in-depth look about the map section. The map section shows a single map, with optional text underneath. It is powered by [EOxMap](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-map--docs), so you can use the same syntax as with any EOxMap.

## Map section <!--{as="eox-map" style="width: 100%; height: 500px;" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->

## Map Tour section <!--{ as="eox-map" mode="tour" }-->

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center=[12.46,41.89] zoom="5" animationOptions="{duration:500}" }-->
#### This is a map tour.
It allows you to have different layers, zoom and center settings for each tour "step".

### <!--{ layers='[{"type":"Tile","properties":{"id":"customId"},"source":{"type":"WMTSCapabilities","url":"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml","layer":"s2cloudless-2017"}},{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center=[12.46,41.89] zoom="10" }-->
#### Second tour step.
Each tour step is described as an *h3* (*###*) heading.

### <!--{ layers='[{"type":"Tile","properties":{"id":"customId"},"source":{"type":"WMTSCapabilities","url":"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml","layer":"s2cloudless-2017"}},{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center="[16.36,48.2]" zoom="10" animationOptions="{duration:500}" }-->
#### Third tour step.
To change individual parameters like zoom or center, or to change the map layers for a step, just set them using the HTML comment syntax. This changes the map setting for the current map

## Final Words
Hopefully, this was a good introduction to the story writing possibilities using EOxStorytelling - get started writing your own story!
More features will be added soon, so feel free to follow progress at the [EOxElements GitHub repository](https://github.com/EOX-A/EOxElements).
    `},render:e=>t`
    <eox-storytelling
      id="markdown-editor"
      show-nav
      show-editor="closed"
      markdown=${e.markdown}
    ></eox-storytelling>
  `};function $(e){if((e==null?void 0:e.tagName)==="EOX-MAP"){e.registerProjection("ESRI:53009","+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 +b=6371000 +units=m +no_defs");const n=e.getAttribute("projection");n&&e.setAttribute("projection",n)}}const _={args:{markdown:`## Map section <!--{as="eox-map" projection="ESRI:53009" style="width: 100%; height: 500px;" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->

## Map Tour section <!--{ projection="ESRI:53009" as="eox-map" zoom="9" center=[12.46,41.89] mode="tour" layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' }-->

### <!--{ projection="ESRI:53009" animationOptions="{duration:500}" }-->
#### ESRI:53009

### <!--{ projection="EPSG:3857" animationOptions="{duration:500}" }-->
#### EPSG:3857

### <!--{ projection="EPSG:4326" animationOptions="{duration:500}" }-->
#### EPSG:4326
`},render:e=>t`
    <eox-storytelling
      id="markdown-editor"
      markdown=${e.markdown}
      @init=${({detail:n})=>$(n)}
    ></eox-storytelling>
  `},F={title:"Elements/eox-storytelling",tags:["autodocs"],component:"eox-storytelling",decorators:[e=>t`${e()}
        <style>
          .sb-show-main.sb-main-padded {
            padding: 0;
          }
        </style>`]},o=z,i=H,r=P,s=j,a=_;var d,l,c,h,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"PrimaryStory",...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:"StoryTelling using basic markdownL.",...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.description}}};var m,g,u,w,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"MarkdownAsURLStory",...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:"StoryTelling using markdown URL.",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var f,k,v,M,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"MarkdownSlotStory",...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.source},description:{story:"StoryTelling using markdown from the slot.",...(S=(M=r.parameters)==null?void 0:M.docs)==null?void 0:S.description}}};var x,b,T,E,O;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"MarkdownEditorStory",...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source},description:{story:"StoryTelling with editor",...(O=(E=s.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};var I,R,W,A,L;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:"MarkdownInitEventStory",...(W=(R=a.parameters)==null?void 0:R.docs)==null?void 0:W.source},description:{story:"StoryTelling with @init event",...(L=(A=a.parameters)==null?void 0:A.docs)==null?void 0:L.description}}};const G=["Primary","MarkdownAsURL","MarkdownInsideSlot","MarkdownWithEditor","MarkdownInitEvent"];export{i as MarkdownAsURL,a as MarkdownInitEvent,r as MarkdownInsideSlot,s as MarkdownWithEditor,o as Primary,G as __namedExportsOrder,F as default};
