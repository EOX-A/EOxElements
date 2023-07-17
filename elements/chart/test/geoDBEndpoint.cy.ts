import { EOxChart } from "../src";
import { html } from "lit";

describe("SH Display", () => {
  it("configures signals endpoint for chart to retrieve data", () => {
    const eoxChart = new EOxChart();
    // @ts-ignore 
    cy.mount(eoxChart, html`<eox-chart id="chart" class="chart"></eox-chart>`).as(
      "eox-chart"
    );
    cy.get("eox-chart").should(() => {
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
    });
  });
});
