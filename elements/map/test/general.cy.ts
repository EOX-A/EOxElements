import { EOxMap } from "../main";
import { html } from "lit";
// import "https://unpkg.com/@eox/map@latest";
import layers from "../examples/layers.json" assert { type: "json" };

describe("Map", () => {
  beforeEach(() => {
    const eoxMap = new EOxMap();
    // @ts-ignore
    cy.mount(eoxMap, html`<eox-map layers='[{"type":"Tile","source":{"type":"OSM"}}]'></eox-map>`)
  });

  /*it("sends loadend event", () => {
    cy.document().then((doc) => {
      const eoxMap = doc.querySelector("eox-map");
      eoxMap.addEventListener("loadend", cy.stub().as("loadend"));
    });
    cy.get("@loadend").should("have.been.calledOnce");
  });*/

  it("map should exist", () => {
    // const eoxMap = new EOxMap();
    // @ts-ignore
    // cy.mount(eoxMap, html`<eox-map layers='[{"type":"Tile","source":{"type":"OSM"}}]'></eox-map>`)
    // eoxMap.setLayers(layers);
    // cy.get("eox-map").should(($el) => {
    //   const eoxMap = <EOxMap>$el[0];
    //   expect(eoxMap.map).to.exist;
    // });
  });

  // it("should parse the initial zoom/center attributes correctly", () => {
  //   cy.get("eox-map").should(($el) => {
  //     const eoxMap = <EOxMap>$el[0];
  //     const zoom = eoxMap.map.getView().getZoom();
  //     const center = eoxMap.map.getView().getCenter();
  //     expect(JSON.parse(eoxMap.getAttribute("zoom"))).to.equal(zoom);
  //     expect(JSON.parse(eoxMap.getAttribute("center"))).to.deep.equal(center);
  //   });
  // });

  /*it("should have an attribution li", () => {
    cy.get("eox-map")
      .shadow()
      .find("li")
      .should("contain.text", "© OpenStreetMap contributors.");
  });*/
});
