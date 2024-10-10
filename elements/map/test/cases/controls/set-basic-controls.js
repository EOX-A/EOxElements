import { html } from "lit";
import tileWmsLayerStyleJson from "../../fixtures/tileWmsLayer.json";

/**
 * Tests to set basic controls via webcomponent
 */
const setBasicControls = () => {
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
    ></eox-map>`,
  ).as("eox-map");
  cy.get("eox-map").and(async ($el) => {
    const eoxMap = $el[0];
    expect(
      eoxMap.map.getControls().getLength(),
      "set controls via webcomponent properties",
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
      "remove controls by setting new control object",
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
        .getOverviewMap()
        .getLayers()
        .getArray()[0]
        .getSource()
        .getParams().LAYERS,
      "update controls by changing the control prop",
    ).to.be.equal("AWS_NO2-VISUALISATION");
  });
};

export default setBasicControls;
