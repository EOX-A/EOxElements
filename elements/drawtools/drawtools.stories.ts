import "../map/main";
import "./src/main";

export default {
  title: "Elements/eox-drawtools",
  tags: ["autodocs"],
  component: "eox-drawtools",
  parameters: {
    docs: {
      toc: true,
    },
    options: { selectedPanel: "addon-controls" },
  },
  render: () => `<eox-map style="width: 400px; height: 300px;"
  zoom="3"
  center="[1000000, 6000000]"
  layers='[
    {"type": "Vector","id": "draw","source": {"type": "Vector"}},
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
></eox-map>
<eox-drawtools for="eox-map" layer="draw"></eox-drawtools>`,
};

export const Primary = {
  args: {},
};
