import "./main";

export default {
  title: "Elements/eox-map",
  tags: ["autodocs"],
  component: "eox-map",
  parameters: {
    docs: {
      toc: true,
    },
    options: { selectedPanel: "addon-controls" },
  },
  render: () =>
    `<eox-map style="width: 400px; height: 300px;"zoom="7" center="[1800000, 6150000]" layers='[{"type":"Tile","source":{"type":"OSM"}}]'></eox-map>`,
};

export const Primary = {
  args: {},
};
