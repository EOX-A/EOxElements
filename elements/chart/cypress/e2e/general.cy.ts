import { createChart } from "../../src/interface";

describe("general", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html");
  });
  it("loads the chart", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const chart = await createChart(doc.querySelector("#map"));
        chart?.setFoo("hello!");
        const test = await chart?.getFoo();
        console.log(test);
      };
      init();
    });
    cy.get('[data-cy="chart"] > iframe').should("exist");
  });
});
