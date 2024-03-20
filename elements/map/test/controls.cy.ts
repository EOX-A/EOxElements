import { html } from "lit";
import "../main";
import tileWmsLayerStyleJson from "./tileWmsLayer.json";

describe("webcomponent property parsing", () => {
  /*it("set simple initial controls via webcomponent properties as Array", () => {
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
  });*/
  it("set controls via webcomponent properties", () => {
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
    cy.get("eox-map").and(async ($el) => {
      const eoxMap = <EOxMap>$el[0];
      expect(
        eoxMap.map.getControls().getLength(),
        "set controls via webcomponent properties"
      ).to.be.equal(4);

      eoxMap.controls = {
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
      };
      expect(
        eoxMap.map.getControls().getLength(),
        "remove controls by setting new control object"
      ).to.be.equal(1);

      eoxMap.controls = {
        OverviewMap: {
          layers: tileWmsLayerStyleJson,
          collapsible: false,
        },
      };
      expect(
        eoxMap.map
          .getControls()
          .getArray()[0]
          //@ts-ignore
          .getOverviewMap()
          .getLayers()
          .getArray()[0]
          .getSource()
          .getParams().LAYERS,
        "update controls by changing the control prop"
      ).to.be.equal("AWS_NO2-VISUALISATION");
    });
  });
});
