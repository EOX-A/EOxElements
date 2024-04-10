import{x as o}from"./lit-element-Bq1Y8_dt.js";import"./main-BskPPSXE.js";import"./_commonjsHelpers-BosuxZz1.js";const Me={args:{markdown:"## Hello World, Welcome to EOxStoryTelling."},render:e=>o`
    <!-- Render eox-storytelling with basic markdown. -->
    <eox-storytelling
      id="markdown-str"
      markdown=${e.markdown}
    ></eox-storytelling>
  `},xe={args:{markdownURL:`${window.location.href.split("iframe.html")[0]}/sample.md`},render:e=>o`
    <!-- Render eox-storytelling with basic markdown url. -->
    <eox-storytelling
      id="markdown-url"
      markdown-url=${e.markdownURL}
    ></eox-storytelling>
  `},Te={args:{markdown:"## Hello World, Markdown Inside Slot."},render:e=>o`
    <!-- Render eox-storytelling from markdown inside the slot. -->
    <eox-storytelling id="markdown-slot">${e.markdown}</eox-storytelling>
  `},Ee={args:{markdown:`
  ## Hero World section <!--{.some-comment}-->
  Some text with red color <!--{#red-color style="color:red;"}-->
  
  ![Image](https://www.gstatic.com/prettyearth/assets/full/14617.jpg)<!-- {width=300} -->
  
  ## Natural Disasters <!--{as="iframe" src="https://ourworldindata.org/grapher/deaths-and-missing-persons-due-to-natural-disasters" style="width: 100%; height: 600px; border: none;"}-->
`},render:e=>o`
    <!-- Render eox-storytelling with attribute as comment markdown. -->
    <eox-storytelling
      id="markdown-str"
      markdown=${e.markdown}
    ></eox-storytelling>
  `},Oe={args:{markdown:`
## What is Lorem Ipsum? <!--{#what}-->
Lorem Ipsum is simply dummy text of the **printing and typesetting** industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and **scrambled it to make a type specimen book.** It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Sustainable Development Goal 13 is to _**“take urgent action to combat climate change and its impacts”**_, [according to the United Nations](https://www.un.org/sustainabledevelopment/climate-change/).

The visualizations and data below present the global perspective on where the world stands today and how it has changed over time. Further data and statistics can be found at the Our World in Data topic pages on CO2 and Greenhouse Gas Emissions and [Climate Change](https://ourworldindata.org/climate-change).

The [UN has defined](https://unstats.un.org/sdgs/indicators/Global%20Indicator%20Framework%20after%202023%20refinement_Eng.pdf) 5 targets and 8 indicators for SDG 13. Targets specify the goals and indicators represent the metrics by which the world aims to track whether these targets are achieved. Below we quote the original text of all targets and show the data on the agreed indicators.

### List of targets and indicators

- [Target 13.1Strengthen resilience and adaptive capacity to climate-related disasters](https://ourworldindata.org/sdgs/climate-action#target-13-1-strengthen-resilience-and-adaptive-capacity-to-climate-related-disasters)
- [SDG Indicator 13.1.1Deaths and injuries from natural disasters](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-1-1-deaths-and-injuries-from-natural-disasters)
- [SDG Indicator 13.1.2National disaster risk management](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-1-2-national-disaster-risk-management)
- [SDG Indicator 13.1.3Local disaster risk management](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-1-3-local-disaster-risk-management)
- [Target 13.2Integrate climate change measures into policy and planning](https://ourworldindata.org/sdgs/climate-action#target-13-2-integrate-climate-change-measures-into-policy-and-planning)
- [SDG Indicator 13.2.1Integration of climate change into national policies](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-2-1-integration-of-climate-change-into-national-policies)
- [SDG Indicator 13.2.2Total greenhouse gas emissions per year](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-2-2-total-greenhouse-gas-emissions-per-year)
- [Target 13.3Build knowledge and capacity to meet climate change](https://ourworldindata.org/sdgs/climate-action#target-13-3-build-knowledge-and-capacity-to-meet-climate-change)
- [SDG Indicator 13.3.1Education on climate change](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-3-1-education-on-climate-change)
- [Target 13.aImplement the UN Framework Convention on Climate Change](https://ourworldindata.org/sdgs/climate-action#target-13-a-implement-the-un-framework-convention-on-climate-change)
- [SDG Indicator 13.a.1Green Climate Fund mobilization of $100 billion](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-a-1-green-climate-fund-mobilization-of-100-billion)
- [Target 13.bPromote mechanisms to raise capacity for planning and management](https://ourworldindata.org/sdgs/climate-action#target-13-b-promote-mechanisms-to-raise-capacity-for-planning-and-management)
- [SDG Indicator 13.b.1Support for planning and management in least-developed countries](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-b-1-support-for-planning-and-management-in-least-developed-countries)

| Country/area         | 2018       |
| -------------------- | ---------- |
| Iceland              | 3,505.6 kg |
| Qatar                | 2,472.7 kg |
| United Arab Emirates | 2,195.1 kg |
| Singapore            | 1,741.0 kg |
| Malta                | 991.6 kg   |
| New Zealand          | 640.3 kg   |
| Mauritius            | 599.8 kg   |
| Ireland              | 574.1 kg   |
| Switzerland          | 513.3 kg   |
| Australia            | 495.9 kg   |

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
## Where does it come from? <!--{#where}-->
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
`},render:e=>o`
    <!-- Render eox-storytelling with attribute as comment markdown. -->
    <eox-storytelling
      show-nav
      id="markdown-str"
      markdown=${e.markdown}
    ></eox-storytelling>
  `},Re={args:{markdown:`
---
nav: true
---

## Section 1
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Section 2
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
`},render:e=>o`
    <!-- Render eox-storytelling with basic config. -->
    <eox-storytelling
      id="markdown-config"
      markdown=${e.markdown}
    ></eox-storytelling>
  `},Be={args:{markdown:`## First Custom Element <!--{as="foo-bar" .custom-block}-->
## Second Custom Element <!--{as="baz-que" .custom-block}-->
## Third Custom Element <!--{as="quux-corge" .custom-block}-->`},render:e=>o`
    <!-- Render eox-storytelling with basic markdown. -->
    <eox-storytelling
      id="markdown-custom-element"
      markdown=${e.markdown}
      no-shadow
    ></eox-storytelling>
    <style>
      .custom-block {
        display: block;
        width: 100%;
      }
      .custom-block:before {
        padding: 1rem;
        display: block;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.1rem;
        color: darkred;
      }
      foo-bar:before {
        content: "First Element";
        background: lightgoldenrodyellow;
      }
      baz-que:before {
        content: "Second Element";
        background: antiquewhite;
      }
      quux-corge:before {
        content: "Third Element";
        background: wheat;
      }
    </style>
  `},We={args:{markdown:`
## EarthCODE Portal <!--{as="esa-main-section" title="EarthCODE Portal"}-->
### EarthCODE
This portal shall provide an entry point to the collaborative development tools and resources, as well as access to community guidelines and open documentation to help researchers adopt FAIR principles in their scientific practice.

Through community and capacity building focused on Open Science, the activity shall promote a trusted collaborative experience of conducting Earth system science.

Just like the European Space Agency (ESA), we advocate for and actively support Open Science, as we believe in the significance of collaborative efforts in advancing scientific knowledge and addressing global challenges. We acknowledge the transformative power of Open Science in driving interdisciplinary collaboration, facilitating reproducibility, and ultimately contributing to a more sustainable and resilient future for our world.

The OSC aims to advance science initiatives and projects by providing a platform to store catalog records for science themes, variables, projects, products, and contributing (EO) missions. This system allows users an easy way to browse, search, and access metadata information associated with these records. This blog post provides some technical details about the OSC.

## OSC <!--{as="div" style="width: 100%;"}-->
![](https://eox.at/images/osc-title.jpg) <!--{style="min-width: 40vw;"}-->

The contents of the catalog is actually managed by a public GitHub repository, allowing for a full history of changes to the contents of records. Additionally changes to the repository are done using the mechanism of a Pull Request. Users can suggest changes, which can be revised by the data administrators of the Open Science Catalog, and run through rigorous checks using GitHub actions, which perform checks on the validity and the integrity of the changes. When a Pull Request is accepted, the changes are incorporated in the main branch of the catalog, triggering a new release of the static catalog, which is subsequently merged into the resource catalog.

## FutureEO <!--{as="esa-main-section"}-->
### FutureEO
For all components (technology, community, partnerships), the Reproducible Open Science Environment can rely on elements developed as part of other FutureEO activities and on readily available operational services provided by Member States' public and industrial facilities, including interoperable building blocks, platform services, Open Science capacity building, scientific communication, and international cooperation.`},render:e=>o`
    <eox-storytelling
      show-nav
      id="markdown-sections"
      markdown=${e.markdown}
    ></eox-storytelling>
  `},He={args:{markdown:`
## EOX Map <!--{as="eox-map" style="width: 100%; height: 500px;" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->

### What is Lorem Ipsum? <!--{ style="padding-top: 2rem;" }-->
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

### Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

`},render:e=>o`
    <eox-storytelling
      id="markdown-map-sections"
      markdown=${e.markdown}
    ></eox-storytelling>
  `},Fe={parameters:{docs:{story:{inline:!1,height:"400px"}}},args:{markdown:`
## Map tour
The map is initialized with mode "tour".

Please scroll to start the tour.

## EOX Map <!--{ as="eox-map" mode="tour" }-->

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center=[15,48] zoom="5" }-->
#### Tour step one
Sets layers to OSM layer, the center to [15,48] and the zoom to 5.

### <!--{ zoom="2" layers='[{"type":"Tile","properties":{"id":"EOxCloudless"},"source":{"type":"XYZ","url":"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2022_3857/default/g/{z}/{y}/{x}.jpg"}}]' }-->
#### Tour step two
Sets the layers to EOxCloudless, and the zoom to 2

## Map tour end
Section after the map tour
`},render:e=>o`
    <eox-storytelling
      id="markdown-map-tour"
      markdown=${e.markdown}
    ></eox-storytelling>
  `},Ge={args:{markdown:`
## EOX Map <!--{as="eox-map" style="width: 100%; height: 500px;" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ], "view": { "center": [15,48], "zoom": 1 } }'}-->

### What is Lorem Ipsum? <!--{ style="padding-top: 2rem;" }-->
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

### Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

`},render:e=>o`
    <eox-storytelling
      id="markdown-editor"
      show-editor
      markdown=${e.markdown}
    ></eox-storytelling>
  `},Ae={args:{markdown:`
# Hero Bg Image <!--{ as="img" mode="hero" src="https://www.gstatic.com/prettyearth/assets/full/14617.jpg" }-->
### by EOX <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->

# Hero Bg Video <!--{ as="video" mode="hero" src="https://dlmultimedia.esa.int/download/public/videos/2023/06/010/2306_010_AR_EN.mp4" }-->
#### by EOX <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->
`},render:e=>o`
    <eox-storytelling
      id="markdown-hero"
      markdown=${e.markdown}
    ></eox-storytelling>
  `},$e={args:{markdown:`
# Hero Bg Image <!--{ as="img" mode="hero" src="https://www.gstatic.com/prettyearth/assets/full/14617.jpg" }-->
### by EOX <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->

## EarthCODE Portal <!--{as="esa-main-section" title="EarthCODE Portal"}-->
### EarthCODE
This portal shall provide an entry point to the collaborative development tools and resources, as well as access to community guidelines and open documentation to help researchers adopt FAIR principles in their scientific practice.

Through community and capacity building focused on Open Science, the activity shall promote a trusted collaborative experience of conducting Earth system science.

Just like the European Space Agency (ESA), we advocate for and actively support Open Science, as we believe in the significance of collaborative efforts in advancing scientific knowledge and addressing global challenges. We acknowledge the transformative power of Open Science in driving interdisciplinary collaboration, facilitating reproducibility, and ultimately contributing to a more sustainable and resilient future for our world.

The OSC aims to advance science initiatives and projects by providing a platform to store catalog records for science themes, variables, projects, products, and contributing (EO) missions. This system allows users an easy way to browse, search, and access metadata information associated with these records. This blog post provides some technical details about the OSC.

## OSC <!--{as="div" style="width: 100%;"}-->
![](https://eox.at/images/osc-title.jpg) <!--{style="min-width: 40vw;"}-->

The contents of the catalog is actually managed by a public GitHub repository, allowing for a full history of changes to the contents of records. Additionally changes to the repository are done using the mechanism of a Pull Request. Users can suggest changes, which can be revised by the data administrators of the Open Science Catalog, and run through rigorous checks using GitHub actions, which perform checks on the validity and the integrity of the changes. When a Pull Request is accepted, the changes are incorporated in the main branch of the catalog, triggering a new release of the static catalog, which is subsequently merged into the resource catalog.

## FutureEO <!--{as="esa-main-section"}-->
### FutureEO
For all components (technology, community, partnerships), the Reproducible Open Science Environment can rely on elements developed as part of other FutureEO activities and on readily available operational services provided by Member States' public and industrial facilities, including interoperable building blocks, platform services, Open Science capacity building, scientific communication, and international cooperation.
`},render:e=>o`
    <eox-storytelling
      id="markdown-hero-with-nav"
      show-nav
      markdown=${e.markdown}
    ></eox-storytelling>
  `},Ne={title:"Elements/eox-storytelling",tags:["autodocs"],component:"eox-storytelling",decorators:[e=>o`${e()}
        <style>
          .sb-show-main.sb-main-padded {
            padding: 0;
          }
        </style>`]},t=Me,r=xe,a=Te,i=Ee,s=Re,n=Oe,c=Be,l=We,d=He,m=Fe,p=Ge,u=Ae,h=$e;var g,y,f,w,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"PrimaryStory",...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"StoryTelling using basic markdownL.",...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.description}}};var k,v,L,S,I;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:"MarkdownAsURLStory",...(L=(v=r.parameters)==null?void 0:v.docs)==null?void 0:L.source},description:{story:"StoryTelling using markdown URL.",...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.description}}};var C,M,x,T,E;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:"MarkdownSlotStory",...(x=(M=a.parameters)==null?void 0:M.docs)==null?void 0:x.source},description:{story:"StoryTelling using markdown from the slot.",...(E=(T=a.parameters)==null?void 0:T.docs)==null?void 0:E.description}}};var O,R,B,W,H;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:"MarkdownAttrCommentStory",...(B=(R=i.parameters)==null?void 0:R.docs)==null?void 0:B.source},description:{story:"Renders storytelling using attribute as a comment in markdown.",...(H=(W=i.parameters)==null?void 0:W.docs)==null?void 0:H.description}}};var F,G,A,$,P;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:"MarkdownBasicConfigStory",...(A=(G=s.parameters)==null?void 0:G.docs)==null?void 0:A.source},description:{story:"StoryTelling with Basic Config",...(P=($=s.parameters)==null?void 0:$.docs)==null?void 0:P.description}}};var D,z,N,V,j;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:"NavigationStory",...(N=(z=n.parameters)==null?void 0:z.docs)==null?void 0:N.source},description:{story:"StoryTelling with Navigation",...(j=(V=n.parameters)==null?void 0:V.docs)==null?void 0:j.description}}};var U,q,_,X,Z;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:"CustomElementStory",...(_=(q=c.parameters)==null?void 0:q.docs)==null?void 0:_.source},description:{story:"With the `as` attribute, `h2` sections can be replaced by other elements (native and custom elements).\nThe newly rendered element replaces the original `h2' text content (fallback for vanilla md rendering) completely.",...(Z=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var Y,J,Q,K,ee;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:"MarkdownSectionsStory",...(Q=(J=l.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"StoryTelling with simple and custom sections",...(ee=(K=l.parameters)==null?void 0:K.docs)==null?void 0:ee.description}}};var oe,te,re,ae,ie;d.parameters={...d.parameters,docs:{...(oe=d.parameters)==null?void 0:oe.docs,source:{originalSource:"MarkdownMapSectionStory",...(re=(te=d.parameters)==null?void 0:te.docs)==null?void 0:re.source},description:{story:"StoryTelling with @eox-map sections",...(ie=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:ie.description}}};var se,ne,ce,le,de;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:"MarkdownMapTourStory",...(ce=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:ce.source},description:{story:"StoryTelling with map tour",...(de=(le=m.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var me,pe,ue,he,ge;p.parameters={...p.parameters,docs:{...(me=p.parameters)==null?void 0:me.docs,source:{originalSource:"MarkdownEditorStory",...(ue=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:"StoryTelling with editor",...(ge=(he=p.parameters)==null?void 0:he.docs)==null?void 0:ge.description}}};var ye,fe,we,be,ke;u.parameters={...u.parameters,docs:{...(ye=u.parameters)==null?void 0:ye.docs,source:{originalSource:"MarkdownHeroStory",...(we=(fe=u.parameters)==null?void 0:fe.docs)==null?void 0:we.source},description:{story:"StoryTelling with Hero Image and Video",...(ke=(be=u.parameters)==null?void 0:be.docs)==null?void 0:ke.description}}};var ve,Le,Se,Ie,Ce;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:"MarkdownHeroWithNavStory",...(Se=(Le=h.parameters)==null?void 0:Le.docs)==null?void 0:Se.source},description:{story:"StoryTelling with Hero and Nav",...(Ce=(Ie=h.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.description}}};const Ve=["Primary","MarkdownAsURL","MarkdownInsideSlot","MarkdownWithAttributeAsComment","MarkdownWithBasicConfig","MarkdownWithNavigation","CustomElement","MarkdownWithSections","MarkdownMapSection","MarkdownMapTour","MarkdownWithEditor","MarkdownWithHeroSection","MarkdownHeroWithNav"];export{c as CustomElement,r as MarkdownAsURL,h as MarkdownHeroWithNav,a as MarkdownInsideSlot,d as MarkdownMapSection,m as MarkdownMapTour,i as MarkdownWithAttributeAsComment,s as MarkdownWithBasicConfig,p as MarkdownWithEditor,u as MarkdownWithHeroSection,n as MarkdownWithNavigation,l as MarkdownWithSections,t as Primary,Ve as __namedExportsOrder,Ne as default};
