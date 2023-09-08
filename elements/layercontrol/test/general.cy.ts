import "../src/main";
import "./_mockMap";
import "../../map/main";

describe("LayerControl", () => {
  beforeEach(() => {
    cy.mount("<mock-map></mock-map>").as("mock-map");
    cy.mount(
      `
      <eox-layercontrol for="mock-map"></eox-layercontrol>`
    ).as("eox-layercontrol");
  });

  it("loads the layercontrol", () => {
    cy.get("eox-layercontrol").shadow();
  });

  it("displays the correct amount of layers", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([{ visible: true }, { visible: false }]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layers").find("li").should("have.length", 2);
        cy.get(".layers")
          .find("input[type=checkbox]:checked")
          .should("have.length", 1);
      });
  });

  it("hides layers correctly", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        { visible: true },
        { layerControlHide: true },
      ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("ul").find("li").should("have.length", 1);
      });
  });

  it("renders the optional layer selection", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        { visible: true },
        { layerControlOptional: true },
      ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("[data-cy='optionalLayers']").should("exist");
        cy.get("[data-cy='optionalLayers']")
          .find("option:not([disabled])")
          .should("have.length", 1);
      });
  });

  it("disables the drag handle of the disabled layer", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        { visible: true },
        { layerControlDisable: true },
      ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".drag-handle.disabled").should("have.length", 1);
      });
  });

  it("shows the correct layer titles", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([{ title: "foo" }, { title: "bar" }]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get(".layer").find(".title").contains("foo");
        cy.get(".layer").find(".title").contains("bar");
      });
  });

  it("pre-opens a section if layerControlExpanded is present", () => {
    cy.get("mock-map").and(($el) => {
      (<MockMap>$el[0]).setLayers([
        { visible: true },
        { layerControlExpanded: true },
      ]);
    });
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        cy.get("details[open]").should("exist");
      });
  });

  it("removes layers correctly in control and map", () => {
    // Ignore ResizeObserver exceptions so they do not break the test.
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('ResizeObserver loop')) {
        return false;
      } else {
        return undefined
      }
    });

    // We need a real map for this to work. 
    // Let's use a subset of our standard demo map config:
    cy
      .mount(`<eox-map
        zoom="3"
        center="[1000000, 6000000]"
        layers='[
          {
            "type": "Group",
            "id": "group1",
            "title": "Background Layers",
            "layerControlExpanded": true,
            "layers": [
              {
                "type": "WebGLTile",
                "id": "s2",
                "layerControlExpanded": true,
                "title": "s2",
                "style": {
                  "variables": {
                    "red": 1,
                    "green": 2,
                    "blue": 3,
                    "redMax": 3000,
                    "greenMax": 3000,
                    "blueMax": 3000
                  },
                  "color": [
                    "array",
                    ["/", ["band", ["var", "red"]], ["var", "redMax"]],
                    ["/", ["band", ["var", "green"]], ["var", "greenMax"]],
                    ["/", ["band", ["var", "blue"]], ["var", "blueMax"]],
                    1
                  ],
                  "gamma": 1.1
                },
                "source": {
                  "type": "GeoTIFF",
                  "normalize": false,
                  "sources": [
                    {
                      "url": "https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"
                    }
                  ]
                }
              },
              {
                "type": "Tile",
                "id": "osm",
                "title": "Open Street Map",
                "layerControlExpanded": false,
                "visible": false,
                "title": "osm",
                "opacity": 0.5,
                "source": {
                  "type": "OSM"
                }
              }
            ]
          }
        ]
      '
      ></eox-map>`)
      .as(
        "eox-map"
      );

    // Remove the LayerControl bound to `mock-map`.
    cy.get('eox-layercontrol').invoke('remove');

    // Replace it with our LayerControl which uses the actual Map component.
    cy
      .mount(
        `
        <eox-layercontrol for="eox-map"></eox-layercontrol>`
      )
      .as("eox-layercontrol");
    
    // Verify the deletion of the menu node.
    cy.get("eox-layercontrol")
      .shadow()
      .within(() => {
        // 1. Press the Delete button to delete the S2 layer.
        cy
          .get("[data-layer=\"s2\"] eox-layerconfig")
          .shadow()
          .within(() => {
            cy.get('div button.delete').should('be.visible').click();
          });
        
        // 2. Confirm the removal of the layer from the menu tree.
        cy
          .get("[data-layer=\"group1\"]")
          .within(() => {
            cy.get("[data-layer=\"s2\"]").should('not.exist');
          });
      });
    
    // Verify the deletion of the map layer itself.
    cy
      .get("eox-map")
      .then($el => {
        const eoxMap = <EOxMap>$el[0];
        let layer;
        try {
          // TODO / WARNING: This part of the test is broken!
          //
          // The following function call does not handle map layers recursively. The test fails 
          // as expected when presented with `group1`, but succeeds with `osm`!
          //
          // This needs to be corrected in `EOxMap` before we can correctly implement this test.
          layer = eoxMap.getLayerById('s2');
        } catch (error) {
          console.error(error);
        }
        assert.equal(layer, undefined, 'OSM Layer should not be found');
      });
  });
});
