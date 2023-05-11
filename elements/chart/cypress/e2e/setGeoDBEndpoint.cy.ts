import { createChart } from "../../src/interface";

describe("shDisplay", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html");
  });
  it("configures signals endpoint for chart to retrieve data", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const chart = await createChart(doc.querySelector("#chart"));

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
        chart?.setGeoDBEndpoint(options);
      };
      init();
    });
    cy.get('[data-cy="chart"] > iframe').should("exist");
  });
});
