import { html } from "lit";
import drawInteractionLayerJson from "./drawInteraction.json";
import { EoxLayer } from "../src/generate";
import "../main";

const OsmJson = {
  type: "Tile",
  properties: {
    id: "osm",
  },
  source: {
    type: "OSM",
  },
} as EoxLayer;

const OsmJson2 = {
  type: "Tile",
  properties: {
    id: "osm2",
  },
  source: {
    type: "OSM",
  },
} as EoxLayer;

describe("Map", () => {
  it("add layer by setting it as property", () => {
    cy.mount(html`<eox-map></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.layers = [OsmJson];
      expect(eoxMap.getLayerById("osm")).to.exist;
    });
  });

  it("add another layer", () => {
    cy.mount(html`<eox-map></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.layers = [OsmJson];
      eoxMap.layers = [OsmJson, OsmJson2];
      expect(eoxMap.map.getLayers().getArray().length).to.be.equal(2);
    });
  });

  it("remove a layer", () => {
    cy.mount(html`<eox-map></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.layers = [OsmJson, OsmJson2];
      eoxMap.layers = [OsmJson];
      expect(eoxMap.map.getLayers().getArray().length).to.be.equal(1);
    });
  });

  it("add an interaction to an existing layer", () => {
    cy.mount(html`<eox-map></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const interactions = drawInteractionLayerJson[0].interactions;
      delete drawInteractionLayerJson[0].interactions;
      //@ts-ignore
      eoxMap.layers = drawInteractionLayerJson;

      drawInteractionLayerJson[0].interactions = interactions;
      //@ts-ignore
      eoxMap.layers = drawInteractionLayerJson;
      expect(eoxMap.interactions.drawInteraction).to.exist;
      expect(eoxMap.interactions.drawInteraction_modify).to.exist;
    });
  });
});
