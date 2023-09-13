import { EOxChart } from "./src/main";
import "./src/main";

export default {
  title: "Elements/eox-chart",
  tags: ["autodocs"],
  component: "eox-chart",
  parameters: {
    docs: {
      toc: true,
    },
    options: { selectedPanel: "addon-controls" },
  },
  render: (args) => {
    const eoxChart = new EOxChart();
    const options = {
      endpoint:
        "https://xcube-geodb.brockmann-consult.de/gtif/f0ad1e25-98fa-4b82-9228-815ab24f5dd1",
      source: "GTIF",
      table: "no2_data",
      timeParameter: "date",
      features: [["no2_ec_station_ppbv"]],
      colors: [
        "#ff0029",
        "#377eb8",
        "#66a61e",
        "#984ea3",
        "#00d2d5",
        "#ff7f00",
        "#af8d00",
      ],
      active: ["no2_ec_station_ppbv"],
      timeInterval: {
        months: 3,
      },
      startTime: "2022-01-01",
      endTime: "2022-03-30",
    };
    eoxChart.setGeoDBEndpoint(options);
    return eoxChart;
  },
};

export const Primary = {
  args: {},
};
