import { createChart } from "../../src/interface";

describe("general", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html");
  });
  it("loads the chart", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const chart = await createChart(doc.querySelector("#chart"));
        const data = {
          datasets: [
            {
              type: "bar",
              label: "Bar Dataset",
              data: [1, 2, 3, 4],
            },
            {
              type: "line",
              label: "Line Dataset",
              data: [6, 6, 6, 6],
            },
          ],
          labels: ["January", "February", "March", "April"],
        };
        chart?.setData(data);
        const test = await chart?.getFoo();
        console.log(test);
      };
      init();
    });
    cy.get('[data-cy="chart"] > iframe').should("exist");
  });
});
