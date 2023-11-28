import { html } from "lit";
import "../main";

describe("webcomponent property parsing", () => {
  it("set simple initial controls via webcomponent properties as Array", () => {
    cy.mount(
      html`<eox-map
        .controls=${["Zoom", "Attribution", "FullScreen"]}
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      expect(
        (<EOxMap>$el[0]).map.getControls().getLength(),
        "set controls via webcomponent properties (Array)"
      ).to.be.equal(3);
    });
  });
  it("set initial controls via webcomponent properties", () => {
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
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      expect(
        eoxMap.map.getControls().getLength(),
        "set controls via webcomponent properties"
      ).to.be.equal(4);
      eoxMap.removeControl("FullScreen");
      expect(
        eoxMap.map.getControls().getLength(),
        "can remove control by name"
      ).to.be.equal(3);
    });
  });
});
