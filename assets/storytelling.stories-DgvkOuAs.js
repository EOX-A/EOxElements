import{x as o}from"./iframe-CxOOrUit.js";import"./preload-helper-PPVm8Dsz.js";const m={args:{markdown:"## Hello World, Welcome to EOxStoryTelling.",id:"markdown-str"},render:e=>o`
    <!-- Render eox-storytelling with basic markdown. -->
    <eox-storytelling
      id=${e.id}
      markdown=${e.markdown}
    ></eox-storytelling>
  `},u={args:{markdownURL:`${window.location.href.split("iframe.html")[0]}/sample.md`,id:"markdown-url"},render:e=>o`
    <eox-storytelling
      id=${e.id}
      markdown-url=${e.markdownURL}
    ></eox-storytelling>
  `},h={args:{id:"markdown-slot",storySlotContent:"## Hello World, this is some Markdown Inside the slot."},render:e=>o`
    <eox-storytelling id=${e.id}
      >## Hello World, this is some Markdown Inside the slot.</eox-storytelling
    >
  `},w={argTypes:{markdown:{table:{category:"properties"}}},args:{markdown:`# Hero Section <!--{ as="video" mode="hero" src="https://dlmultimedia.esa.int/download/public/videos/2023/06/010/2306_010_AR_EN.mp4" }-->
#### An introduction on how to write interactive and multimedial stories using markdown. Scroll down to get started! <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->

## Introduction
The hero is the initial section of a story. It can be either a full-screen image or a full-screen video, with some overlaying text.
In each story, only one hero should be added at the very beginning. After the hero, you will see the nav menu, and after that, the story content.

To create a Hero section, you start with an H1 (\`#\`), followed by an HTML comment where you define the background media:
\`<!--{ as="video" mode="hero" src="..." }-->\` or \`<!--{ as="img" mode="hero" src="..." }-->\`
`,id:"markdown-hero",showNav:!0,showHeroScrollIndicator:!0},render:e=>o`
    <eox-storytelling
      id=${e.id}
      ?show-nav=${e.showNav}
      ?show-hero-scroll-indicator=${e.showHeroScrollIndicator}
      markdown=${e.markdown}
    ></eox-storytelling>
  `},y={argTypes:{markdown:{table:{category:"properties"}}},args:{markdown:`## Map section <!--{as="eox-map" class="overlay-br" style="width: 100%; height: 500px;" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->
### Some title for map <!--{ style="color: white; font-size: 1.25rem;" }-->
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. <!--{ style="opacity: 0.75; font-size: 1rem;" }-->`,id:"markdown-map",showNav:!0},render:e=>o`
    <eox-storytelling
      id=${e.id}
      ?show-nav=${e.showNav}
      markdown=${e.markdown}
    ></eox-storytelling>
  `},g={argTypes:{markdown:{table:{category:"properties"}}},args:{markdown:`## Map Tour section <!--{ as="eox-map" class="overlay-br" mode="tour" }-->
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
To change individual parameters like zoom or center, or to change the map layers for a step, just set them using the HTML comment syntax. This changes the map setting for the current map`,id:"markdown-map-tour",showNav:!0},render:e=>o`
    <eox-storytelling
      id=${e.id}
      ?show-nav=${e.showNav}
      markdown=${e.markdown}
    ></eox-storytelling>
  `},f={argTypes:{markdown:{table:{category:"properties"}}},args:{markdown:`## Image Tour section <!--{ as="img" mode="tour" }-->

### <!--{ src="https://picsum.photos/800/600" style="background: #fff0c4;" }-->
#### This is an image tour.
It allows you to have different sources for each tour "step".

\`\`\`markdown
## Image Tour section <!--{ as="img" mode="tour" }-->

### <!--{ src="https://picsum.photos/800/600" style="background: #fff0c4;" }-->
#### This is an image tour.
It allows you to have different sources for each tour "step".
\`\`\`

### <!--{ src="https://picsum.photos/900/700" style="background: #ffe7ef;" }-->
#### Second tour step.
Each tour step is described as an *h3* (*###*) heading.

### <!--{ src="https://picsum.photos/900/800" style="background: #e2fffc;" }-->
#### Third tour step.
![](https://placehold.co/200x100)`,id:"markdown-image-tour",showNav:!0},render:e=>o`
    <eox-storytelling
      id=${e.id}
      ?show-nav=${e.showNav}
      markdown=${e.markdown}
    ></eox-storytelling>
  `},k={argTypes:{markdown:{table:{category:"properties"}}},args:{markdown:`# Welcome to Storytelling <!--{ as="video" mode="hero" src="https://dlmultimedia.esa.int/download/public/videos/2023/06/010/2306_010_AR_EN.mp4" }-->
#### An introduction on how to write interactive and multimedial stories using markdown. Scroll down to get started! <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->



## Why storytelling?

Storytelling is crucial in the realm of science because scientific data, while rich in information, can often be complex and challenging to communicate. By framing data within narratives, storytelling makes scientific concepts accessible, engaging, and memorable to a wider audience. It bridges the gap between the technical details of research and the public's understanding, fostering appreciation, curiosity, and ultimately, a deeper connection to the wonders of science.

Specifically, **scrolly**telling[^1] adds another layer of engagement, which allows the user to interact with the website by simply scrolling through it.

[^1]: Blend of *scroll* + *storytelling*. [Storytelling enriched with multimedial elements triggered while scrolling down a webpage](https://en.wiktionary.org/wiki/scrollytelling).

## Markdown with superpowers
The main story language is Markdown, a lightweight markup language that uses plain text formatting syntax to convert plain text into structured HTML documents. Read more about Markdown [in this Wikipedia article](https://en.wikipedia.org/wiki/Markdown) and find a guide on how to get started (including a cheatsheet) [here](https://www.markdownguide.org/).

Addtiionally to normal Markdown, the storytelling rendering engine allows adding additional configuration; this configuration is hidden to the reader.
It allows adding "superpowers" to Markdown using [HTML](https://en.wikipedia.org/wiki/HTML) comments and attributes.

---

Let's say we want a small image with a specific size and a colored text underneath. With normal Markdown you would write it like this:

\`\`\`markdown
![Image](https://placehold.co/800x100)

*Some italic text*
\`\`\`

![Image](https://placehold.co/800x100)

*Some italic text*

---

Let's add some configuration to reduce the width of the image and add color to the text:

\`\`\`markdown
![Image](https://placehold.co/800x100) <!--{ width="300" }-->

*Some italic text, now in red* <!--{ style="color:red" }-->
\`\`\`

![Image](https://placehold.co/800x100) <!--{ width="300" }-->

*Some italic text, now in red* <!--{ style="color:red" }-->

---

You can use any HTML attributes, plus some shorthands: *#* is a shorthand for *id* (e.g. <code>#hello</code> renders as <code>id="hello"</code>) and *.* is a shorthand for *class* (e.g. <code>.foo</code> renders as <code>class="foo"</code>).

## Story structure
### The hero
The hero is the initial section of a story. It can be either a full-screen image or a full-screen video, with some overlaying text.
In each story, only one hero should be added at the very beginning. After the hero, you will see the nav menu, and after that, the story content. The hero uses the Markdown syntax for *h1* (Header 1), so it starts with one *#*.

### Story sections
To start a new section, use the Markdown syntax for *h2* (Header 2), so starting with *##*. Eeach section is automatically added to the nav menu (unless explicitly hidden by having added a configuration comment to it). 

### Special sections
Additionally to the hero section, there are other special sections (like media, map). They use the "as" attribute, which replaces the entire section with the corresponding element. So, for example, *as="div"* will replace the entire sectioni (including the title) with a *div*.
We will now have a more in-depth look about the map section. The map section shows a single map, with optional text underneath. It is powered by [EOxMap](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-map--docs), so you can use the same syntax as with any EOxMap.

\`\`\`markdown
## Map section <!--{as="eox-map" class="overlay-br" style="width: 100%; height: 500px;" config='{ "controls": { ... }, "layers": [ ... ], "view": { "center": [15,48], "zoom": 1 } }'}-->
\`\`\`

## Map section <!--{as="eox-map" class="overlay-br" style="width: 100%; height: 500px;" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->
### Some title for map <!--{ style="color: white; font-size: 1.25rem;" }-->
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. <!--{ style="opacity: 0.75; font-size: 1rem;" }-->

\`\`\`markdown
## Map Tour section <!--{ as="eox-map" class="overlay-br" mode="tour" }-->
\`\`\`

## Map Tour section <!--{ as="eox-map" class="overlay-br" mode="tour" }-->
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
To change individual parameters like zoom or center, or to change the map layers for a step, just set them using the HTML comment syntax. This changes the map setting for the current map

## Image Tour section <!--{ as="img" mode="tour" }-->

### <!--{ src="https://picsum.photos/800/600" style="background: #fff0c4;" }-->
#### This is an image tour.
It allows you to have different sources for each tour "step".

\`\`\`markdown
## Image Tour section <!--{ as="img" mode="tour" }-->

### <!--{ src="https://picsum.photos/800/600" style="background: #fff0c4;" }-->
#### This is an image tour.
It allows you to have different sources for each tour "step".
\`\`\`

### <!--{ src="https://picsum.photos/900/700" style="background: #ffe7ef;" }-->
#### Second tour step.
Each tour step is described as an *h3* (*###*) heading.

### <!--{ src="https://picsum.photos/900/800" style="background: #e2fffc;" }-->
#### Third tour step.
![](https://placehold.co/200x100)

## Final Words
Hopefully, this was a good introduction to the story writing possibilities using EOxStorytelling - get started writing your own story!
More features will be added soon, so feel free to follow progress at the [EOxElements GitHub repository](https://github.com/EOX-A/EOxElements).
    `,id:"markdown-tour",showNav:!0,showHeroScrollIndicator:!0},render:e=>o`
    <eox-storytelling
      id=${e.id}
      ?show-nav=${e.showNav}
      ?show-hero-scroll-indicator=${e.showHeroScrollIndicator}
      markdown=${e.markdown}
    ></eox-storytelling>
  `};function M(e){if(e?.tagName==="EOX-MAP"){e.registerProjection("ESRI:53009","+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 +b=6371000 +units=m +no_defs");const p=e.getAttribute("projection");p&&e.setAttribute("projection",p)}}const S={argTypes:{markdown:{table:{category:"properties"}}},args:{markdown:`## Map section <!--{as="eox-map" projection="ESRI:53009" style="width: 100%; height: 500px;" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->

## Map Tour section <!--{ projection="ESRI:53009" as="eox-map" zoom="9" center=[12.46,41.89] mode="tour" layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' }-->

### <!--{ projection="ESRI:53009" animationOptions="{duration:500}" }-->
#### ESRI:53009

### <!--{ projection="EPSG:3857" animationOptions="{duration:500}" }-->
#### EPSG:3857

### <!--{ projection="EPSG:4326" animationOptions="{duration:500}" }-->
#### EPSG:4326
`,id:"markdown-init-event",init:e=>M(e.detail),storyCodeBefore:`
    function initEventFunc(element) {
      if (element?.tagName === "EOX-MAP") {
        element.registerProjection(
          "ESRI:53009",
          "+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 +b=6371000 +units=m +no_defs",
        );
        const projection = element.getAttribute("projection");
        if (projection) element.setAttribute("projection", projection);
      }
    }
    `},render:e=>o`
    <eox-storytelling
      id=${e.id}
      markdown=${e.markdown}
      @init=${e.init}
    ></eox-storytelling>
  `},b={title:"Elements/eox-storytelling",tags:["autodocs"],component:"eox-storytelling",decorators:[e=>o`${e()}
        <style>
          .sb-show-main.sb-main-padded {
            padding: 0;
          }
        </style>`]},t=m,r=u,i=h,s=w,a=y,n=g,d=f,c=S,l=k;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"PrimaryStory",...t.parameters?.docs?.source},description:{story:"Basic usage of eox-storytelling. Renders a simple Markdown string as a story.\nUse standard markdown like `# Header`, `## Subheader`, `**bold**`, `*italic*`, `[link](url)`.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"MarkdownAsURLStory",...r.parameters?.docs?.source},description:{story:"Loads Markdown content from a remote URL and displays it in the storytelling component.\nUseful for dynamic or externally managed story content. Pass the URL to the \\`markdown-url\\` attribute.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"MarkdownSlotStory",...i.parameters?.docs?.source},description:{story:`Renders Markdown content provided via the slot, demonstrating slot-based story input.
Just place your raw Markdown inside the \`<eox-storytelling>\` tags.

**NOTE:** Beware of indentation! Leading spaces will be included in the markdown string and might affect rendering.`,...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"MarkdownHeroStory",...s.parameters?.docs?.source},description:{story:'Hero Section story.\nDemonstrates how to create a full-screen hero section at the start of a story.\nUse an h1 (\\`#\\`) followed by an HTML comment to configure the hero media:\n`# Title <!--{ as="video" mode="hero" src="..." }-->` or\n`# Title <!--{ as="img" mode="hero" src="..." }-->`.',...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"MarkdownMapStory",...a.parameters?.docs?.source},description:{story:`Map Section story.
Demonstrates how to embed a map in the story using EOxMap.
Use an h2 (\`##\`) followed by an HTML comment to configure the map:
\`## Map section <!--{ as="eox-map" style="width: 100%; height: 500px;" config='{ "layers": [...], "view": {"center": [15,48], "zoom": 1} }' }-->\`.`,...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"MarkdownMapTourStory",...n.parameters?.docs?.source},description:{story:'Map Tour story.\nDemonstrates how to create a scroll-driven map tour (scrollytelling) where the map state changes as you scroll.\n1. Define the base map tour section with an h2: `## Map Tour <!--{ as="eox-map" mode="tour" }-->`\n2. Define each step in the tour with an h3 (`###`) and a configuration comment overriding the map\'s state for that step:\n`### <!--{ center=[12.46,41.89] zoom="5" animationOptions="{duration:500}" }-->`.',...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"MarkdownImageTourStory",...d.parameters?.docs?.source},description:{story:'Image Tour story.\nDemonstrates how to create a scroll-driven image tour where the image changes as you scroll.\n1. Define the base image tour section with an h2: `## Image Tour <!--{ as="img" mode="tour" }-->`\n2. Define each step in the tour with an h3 (`###`) and a configuration comment providing the new image source:\n`### <!--{ src="https://picsum.photos/800/600" }-->`.',...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"MarkdownInitEventStory",...c.parameters?.docs?.source},description:{story:"* Demonstrates the @init event, allowing custom initialization logic (e.g., map projection setup) when the story or embedded elements are initialized.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"MarkdownShowcaseStory",...l.parameters?.docs?.source},description:{story:`* Storytelling Showcase.
A comprehensive example combining a hero section, standard markdown with configuration, a map section, a map tour, and an image tour all in one story.`,...l.parameters?.docs?.description}}};const x=["Primary","MarkdownAsURL","MarkdownInsideSlot","MarkdownHero","MarkdownMap","MarkdownMapTour","MarkdownImageTour","MarkdownInitEvent","MarkdownShowcase"];export{r as MarkdownAsURL,s as MarkdownHero,d as MarkdownImageTour,c as MarkdownInitEvent,i as MarkdownInsideSlot,a as MarkdownMap,n as MarkdownMapTour,l as MarkdownShowcase,t as Primary,x as __namedExportsOrder,b as default};
