import "../map/main";
import "./src/main";

export default {
  title: "Elements/eox-timecontrol",
  tags: ["autodocs"],
  component: "eox-timecontrol",
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
    {
      "type": "Tile",
      "id":"AWS_NO2-VISUALISATION",
      "source": {
        "type": "TileWMS",
        "url": "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        "params": {
          "LAYERS": "AWS_NO2-VISUALISATION"
        }
      }
    },
    {
      "type":"Tile",
      "source":{
        "type":"OSM"
      }
    }
  ]'
></eox-map>
<p>Basic time control for WMS layer:</p>
<eox-timecontrol
  for="eox-map"
  layer="AWS_NO2-VISUALISATION"
  animation-property="TIME"
  animation-values='[
    "2023-01-16",
    "2023-01-23",
    "2023-01-30",
    "2023-02-06",
    "2023-02-13",
    "2023-02-27",
    "2023-03-06",
    "2023-03-13",
    "2023-03-20",
    "2023-03-27",
    "2023-04-03",
    "2023-04-10",
    "2023-04-17",
    "2023-04-24"
  ]'
></eox-timecontrol>`,
};

export const Primary = {
  args: {},
};
