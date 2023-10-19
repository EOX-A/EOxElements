import "../src/main";

describe("Chart", () => {
  it("loads the chart", () => {
    cy.mount("<eox-chart></eox-chart>").as("eox-chart");
    cy.get("eox-chart").and(($el) => {
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
      // @ts-ignore
      (<EOxChart>$el[0]).setData(data);
    });
  });
});
