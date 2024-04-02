/**
 * Renders map tour in StoryTelling
 */
import { html } from "lit";

export const MarkdownMapTour = {
  parameters: {
    docs: {
      story: {
        // To show the effect on the docs page we need to limit the height
        inline: false,
        height: "400px",
      },
    },
  },
  args: {
    markdown: `
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
