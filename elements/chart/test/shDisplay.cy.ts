import { EOxChart } from "../src";
import "../src/index.ts";
import signalsData from "./sh.json";

describe("SH Display", () => {
  it("loads data retrieved from signals-api endpoint", () => {
    const eoxChart = new EOxChart();
    // @ts-ignore 
    cy.mount(eoxChart).as(
      "eox-chart"
    );
    cy.get("eox-chart").should(() => {
      const options = {
        parsing: {
          xAxisKey: "date",
          yAxisKey: "basicStats.mean",
        },
      };
      eoxChart.setOptions(options);
      eoxChart.setSignalsData(signalsData);
    });
  });
});
