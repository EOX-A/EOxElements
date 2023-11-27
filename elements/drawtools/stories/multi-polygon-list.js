import { html } from "lit";
import { getDefaultSelectedOption } from "../src/helpers";
import "../../map/main";
import "../src/main";

const layersConfig = [
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
];

/**
 * Add select interaction
 */
const addSelect = async ({ canvasElement }) => {
  const EOxMap = canvasElement.querySelector("eox-map");
  EOxMap.addSelect(
    "draw",
    getDefaultSelectedOption("draw-hover", "pointermove")
  );
  EOxMap.addSelect(
    "draw",
    getDefaultSelectedOption("draw-click", "click", true)
  );
};

/**
 * By setting the `show-list` attribute or `showList` property to `true`,
 * List of features will be visible
 */
export const MultiPolygonWithList = {
  play: addSelect,
  render: () => html`
    <div style="display: flex">
      <eox-map
        id="list"
        .layers=${layersConfig}
        style="width: 500px; height: 300px;"
      />
      <eox-drawtools
        for="eox-map#list"
        layer="draw"
        multiple-features
        show-list
      />
    </div>
  `,
};

export default MultiPolygonWithList;
