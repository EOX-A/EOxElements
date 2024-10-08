import "../src/main";
import signalsData from "./sh.json";

describe("SH Display", () => {
  it("loads data retrieved from signals-api endpoint", () => {
    cy.mount("<eox-chart></eox-chart>").as("eox-chart");
    cy.get("eox-chart").and(($el) => {
      const options = {
        parsing: {
          xAxisKey: "date",
          yAxisKey: "basicStats.mean",
        },
      };
      (<EOxChart>$el[0]).setOptions(options);
      (<EOxChart>$el[0]).setSignalsData(signalsData);
    });
  });
});
