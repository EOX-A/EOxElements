import { equals } from "ol/coordinate";
import { EOxMap } from "../main";
// import "https://unpkg.com/@eox/map@latest";
import layers from "../examples/layers.json" assert { type: "json" };

describe("Map", () => {
  beforeEach(() => {
    const eoxMap = new EOxMap();
    // @ts-ignore
    cy.mount(eoxMap).as("eox-map");
    eoxMap.setLayers(layers);
  });

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

  it("correctly parses and guesses web mercator and lonLat center coordinate systems", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];

      const lonLatMapElement = document.createElement("eox-map");
      lonLatMapElement.setAttribute("center", "[20, 20]");
      lonLatMapElement.setAttribute("zoom", "7");
      lonLatMapElement.classList.add("map");
      eoxMap.parentElement.appendChild(lonLatMapElement);
      expect(
        equals(
          (lonLatMapElement as EOxMap).map.getView().getCenter(),
          [2226389.8158654715, 2273030.926987689]
        ),
        "parse lon lat center"
      ).to.be.true;

      const noCenterMapElement = document.createElement("eox-map") as EOxMap;
      noCenterMapElement.setAttribute("zoom", "7");
      noCenterMapElement.classList.add("map");
      eoxMap.parentElement.appendChild(noCenterMapElement);
      const center = noCenterMapElement.map.getView().getCenter();
      expect(
        center,
        "set center to [0, 0] if nothing is defined"
      ).to.deep.equal([0, 0]);
    });
  });
});
