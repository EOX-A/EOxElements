import { html } from "lit";
import "../../map/main";
import "../src/main";

const layersConfig = [
  {
    type: "Vector",
    id: "draw",
    source: { type: "Vector" },
  },
  {
    type: "Tile",
    source: { type: "OSM" },
  },
];

/**
 * By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,
 * multiple polygons can be drawn.
 */
export const MultiPolygon = {
  render: () => html`<eox-map
      id="multi"
      .layers=${layersConfig}
      style="width: 400px; height: 300px;"
    />
    <eox-drawtools for="eox-map#multi" layer="draw" multiple-features />`,
};

export default MultiPolygon;
