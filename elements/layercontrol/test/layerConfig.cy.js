import "../src/main";
import { html } from "lit";

describe("LayerControl: LayerConfig", () => {
  beforeEach(() => {
    if (!customElements.get("eox-jsonform")) {
      customElements.define(
        "eox-jsonform",
        class extends HTMLElement {
          set schema(val) {}
          set value(val) {}
          set options(val) {}
        },
      );
    }
  });

  it("updates WMS parameters and respects removeProperties", () => {
    const updateParamsSpy = cy.spy().as("updateParamsSpy");

    const mockSource = {
      updateParams: updateParamsSpy,
      getTileUrlFunction: () => null,
      on: () => {},
      un: () => {},
      getState: () => "ready",
    };

    const mockLayer = {
      getSource: () => mockSource,
      get: (prop) => (prop === "id" ? "test-wms" : null),
      on: () => {},
      un: () => {},
    };

    const layerConfig = {
      schema: {
        type: "object",
        properties: {
          LAYERS: { type: "string" },
          temp_slider: { type: "number" },
        },
        options: {
          removeProperties: ["temp_slider"],
        },
      },
    };

    cy.mount(html`
      <eox-layercontrol-layerconfig
        .layer=${mockLayer}
        .layerConfig=${layerConfig}
      ></eox-layercontrol-layerconfig>
    `);

    cy.get("eox-layercontrol-layerconfig")
      .shadow()
      .find("eox-jsonform", { timeout: 10000 })
      .then(($jsonform) => {
        $jsonform[0].dispatchEvent(
          new CustomEvent("change", {
            detail: {
              LAYERS: "updated_layer",
              temp_slider: 42,
            },
          }),
        );
      });

    // Verify updateParams called with filtered data
    cy.get("@updateParamsSpy").should("have.been.calledWith", {
      LAYERS: "updated_layer",
    });
  });

  it("updates XYZ tileUrlFunction and respects removeProperties", () => {
    const setTileUrlFunctionSpy = cy.spy().as("setTileUrlFunctionSpy");
    const setKeySpy = cy.spy().as("setKeySpy");

    const mockSource = {
      getTileUrlFunction: () => (coord) =>
        `https://tiles.com/z/y/x?foo=bar&removeMe=old`,
      setTileUrlFunction: setTileUrlFunctionSpy,
      setKey: setKeySpy,
      getUrls: () => ["https://tiles.com/z/y/x"],
      on: () => {},
      un: () => {},
      getState: () => "ready",
    };

    const mockLayer = {
      getSource: () => mockSource,
      get: (prop) => (prop === "id" ? "test-xyz" : null),
      on: () => {},
      un: () => {},
    };

    const layerConfig = {
      schema: {
        type: "object",
        properties: {
          foo: { type: "string" },
          removeMe: { type: "string" },
        },
        options: {
          removeProperties: ["removeMe"],
        },
      },
    };

    cy.mount(html`
      <eox-layercontrol-layerconfig
        .layer=${mockLayer}
        .layerConfig=${layerConfig}
      ></eox-layercontrol-layerconfig>
    `);

    cy.get("eox-layercontrol-layerconfig")
      .shadow()
      .find("eox-jsonform", { timeout: 10000 })
      .then(($jsonform) => {
        $jsonform[0].dispatchEvent(
          new CustomEvent("change", {
            detail: {
              foo: "new_bar",
              removeMe: "should_be_stripped",
            },
          }),
        );
      });

    // Verify tile function updated and refresh triggered
    cy.get("@setTileUrlFunctionSpy").should("have.been.called");
    cy.get("@setKeySpy").should("have.been.called");

    // Verify the new tile function correctly filters the URL
    cy.get("@setTileUrlFunctionSpy").then((spy) => {
      const newTileFunc = spy.getCall(0).args[0];
      const resultUrl = newTileFunc([0, 0, 0]);
      expect(resultUrl).to.contain("foo=new_bar");
      expect(resultUrl).to.not.contain("removeMe=should_be_stripped");
    });
  });
});
