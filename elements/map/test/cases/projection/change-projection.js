import { html } from "lit";

/**
 * Tests to change the projection of the view
 */
const changeProjection = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  cy.mount(
    html`<eox-map
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
    eoxMap.map
      .getView()
      .on("change:resolution", (e) =>
        e.target.set("keepResolutionListener", true),
      );
    eoxMap.map
      .getView()
      .on("change:rotation", (e) => e.target.set("keepRotationListener", true));
    eoxMap.map
      .getView()
      .on("change:center", (e) => e.target.set("keepCenterListener", true));
    setTimeout(() => {
      eoxMap.projection = "EPSG:4326";
      expect(eoxMap.map.getView().getProjection().getCode()).to.be.equal(
        "EPSG:4326",
      );
      const newView = eoxMap.map.getView();
      newView.setZoom(newView.getZoom() + 1);
      newView.setRotation(1);
      newView.setCenter([1, 1]);

      setTimeout(() => {
        expect(
          eoxMap.map.getView().get("keepResolutionListener"),
          "keeps resolution listener",
        ).to.be.true;
        expect(
          eoxMap.map.getView().get("keepRotationListener"),
          "keeps rotation listener",
        ).to.be.true;
        expect(
          eoxMap.map.getView().get("keepCenterListener"),
          "keeps center listener",
        ).to.be.true;
      }, 100);
    }, 1000);
  });
};

export default changeProjection;
