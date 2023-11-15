import { html } from "lit";
import "../map/main";
import "./src/main";
import { getDefaultSelectedOption } from "./src/helpers";

export default {
  title: "Elements/eox-drawtools",
  tags: ["autodocs"],
  component: "eox-drawtools",
};

export const Primary = {
  render: () => html` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type": "Vector","id": "draw","source": {"type": "Vector"}},
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary" layer="draw"></eox-drawtools>`,
};

/**
 * By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,
 * multiple polygons can be drawn.
 */
export const MultiPolygon = {
  render: () => html` <eox-map
      id="multi"
      style="width: 400px; height: 300px;"
      layers='[
      {"type": "Vector","id": "draw","source": {"type": "Vector"}},
      {"type":"Tile","source":{"type":"OSM"}}
    ]'
    ></eox-map>
    <eox-drawtools
      for="eox-map#multi"
      layer="draw"
      multiple-features
    ></eox-drawtools>`,
};

/**
 * By setting the `show-list` attribute or `showList` property to `true`,
 * List of features will be visible
 */
export const MultiPolygonWithList = {
  play: async ({ canvasElement }) => {
    const EOxMap = canvasElement.querySelector("eox-map");

    EOxMap.addSelect(
      "draw",
      getDefaultSelectedOption("draw-hover", "pointermove")
    );
    EOxMap.addSelect(
      "draw",
      getDefaultSelectedOption("draw-click", "click", true)
    );
  },
  render: () => html`
    <div style="display: flex">
      <eox-map
        id="list"
        style="width: 500px; height: 300px;"
        layers=${JSON.stringify([
          {
            type: "Vector",
            id: "draw",
            source: {
              type: "Vector",
            },
          },
          {
            type: "Tile",
            source: {
              type: "OSM",
            },
          },
        ])}
      ></eox-map>
      <eox-drawtools
        for="eox-map#list"
        layer="draw"
        multiple-features
        show-list
      ></eox-drawtools>
    </div>
  `,
};
