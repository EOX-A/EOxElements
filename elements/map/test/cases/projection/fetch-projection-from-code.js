import { html } from "lit";

/**
 * Tests to fetch projection from code
 */
const fetchProjectionFromCode = () => {
  cy.mount(
    html`<eox-map
      .controls=${{
        Zoom: {},
        Attribution: {},
        FullScreen: {},
        OverviewMap: {
          layers: [
            {
              type: "Tile",
              properties: {
                id: "customId",
              },
              source: {
                type: "OSM",
              },
            },
          ],
        },
      }}
      .layers=${[
        {
          type: "Tile",
          properties: {
            id: "customId",
          },
          source: {
            type: "OSM",
          },
        },
      ]}
    ></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    eoxMap.registerProjectionFromCode("EPSG:32633").then(() => {
      eoxMap.setAttribute("projection", "EPSG:32633");
      expect(eoxMap.map.getView().getProjection().getCode()).to.be.equal(
        "EPSG:32633",
      );
    });
  });
};

export default fetchProjectionFromCode;
