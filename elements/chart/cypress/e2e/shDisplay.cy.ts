import { createChart } from "../../src/interface";
import signalsData from "./sh.json";

describe("shDisplay", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html");
  });
  it("loads data retrieved from signals-api endpoint", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const chart = await createChart(doc.querySelector("#chart"));

        const options = {
          parsing: {
            xAxisKey: "date",
            yAxisKey: "basicStats.mean",
          },
        };
        chart?.setOptions(options);
        chart?.setSignalsData(signalsData);
      };
      init();
    });
    cy.get('[data-cy="chart"] > iframe').should("exist");
  });
});
