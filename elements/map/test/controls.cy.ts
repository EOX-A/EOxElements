import { html } from "lit";
import "../main";
import tileWmsLayerStyleJson from "./tileWmsLayer.json";

describe("webcomponent property parsing", () => {
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

  it("Geolocation Control", () => {
    cy.mount(
      html`<eox-map
        .zoom=${0}
        .center=${[0, 0]}
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
        .controls=${{
          Geolocation: {},
        }}
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(async ($el) => {
      const eoxMap = <EOxMap>$el[0];
      expect(eoxMap.map.getControls().getLength()).to.be.equal(1);
      //@ts-ignore
      expect(eoxMap.map.getControls().getArray()[0].getElement()).to.exist;
    });
  });

  it("Default Loading Indicator Control", () => {
    cy.mount(
      html`<eox-map
        .layers=${[]}
        .controls=${{
          LoadingIndicator: {},
        }}
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(async ($el) => {
      const eoxMap = <EOxMap>$el[0];
      expect(eoxMap.map.getControls().getLength()).to.be.equal(1);
      const loadingIndicatorElement = eoxMap.map
        .getTargetElement()
        .querySelector(".loading-indicator");
      expect(loadingIndicatorElement).to.exist;
    });
  });

  it("Custom Full Screen Loading Indicator Control", () => {
    cy.mount(
      html`<eox-map
        .layers=${[]}
        .controls=${{
          LoadingIndicator: {
            type: "fullscreen",
            spinnerSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
  <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
      </circle><g></g></g></svg>`,
          },
        }}
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(async ($el) => {
      const eoxMap = <EOxMap>$el[0];
      expect(eoxMap.map.getControls().getLength()).to.be.equal(1);
      const loadingIndicatorElement = eoxMap.map
        .getTargetElement()
        .querySelector(".loading-indicator");
      expect(loadingIndicatorElement).to.exist;
    });
  });
});
