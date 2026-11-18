import TimecontrolWithCompareMapsStory from "../../stories/timecontrol-with-compare-maps";

/** Verifies that selecting a calendar date updates both comparison maps. */
const loadCompareMaps = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.intercept("https://services.sentinel-hub.com/**", {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  cy.mount(
    TimecontrolWithCompareMapsStory.render(
      TimecontrolWithCompareMapsStory.args,
    ),
  );
  cy.get("eox-timecontrol-date").shadow().find("input").click();
  cy.get('.vc [data-vc-date="2023-04-10"] .vc-date__btn').click();

  cy.get("#compare-wind").should(($map) => {
    expect(
      $map[0].getLayerById("AWS_VIS_WIND_V_10M").getSource().getParams().TIME,
    ).to.equal("2023-04-10");
  });
  cy.get("#compare-no2").should(($map) => {
    expect(
      $map[0].getLayerById("AWS_NO2-VISUALISATION").getSource().getParams()
        .TIME,
    ).to.equal("2023-04-10");
  });
};

export default loadCompareMaps;
