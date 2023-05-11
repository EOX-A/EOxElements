import { EOxChart } from "../src/main";
import signalsData from "./sh.json";

describe("SH Display", () => {
  beforeEach(() => {
    cy.visit("/elements/chart/test/general.html");
  });

  it("loads data retrieved from signals-api endpoint", () => {
    cy.get("eox-chart").should(($el) => {
      const eoxChart = <EOxChart>$el[0];
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
