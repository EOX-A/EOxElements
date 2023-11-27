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

export const Primary = {
  render: () => html`<eox-map
      id="primary"
      .layers=${layersConfig}
      style="width: 400px; height: 300px;"
    />
    <eox-drawtools for="eox-map#primary" layer="draw" />`,
};

export default Primary;
