import "../src/main";
import { html } from "lit";

describe("LayerControl: LayerConfig", () => {
  beforeEach(() => {
    if (!customElements.get("eox-jsonform")) {
      customElements.define(
        "eox-jsonform",
        class extends HTMLElement {
          set schema(val) {}
          set value(val) {
            this.seededValue = val;
          }
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
      getTileUrlFunction: () => () =>
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

  /**
   * Mounts a layerconfig for a mock tile layer whose URL carries the given query string,
   * and yields the value the component seeds into eox-jsonform.
   */
  const seededValueFor = (tileUrl, schema) => {
    const mockSource = {
      getTileUrlFunction: () => () => tileUrl,
      setTileUrlFunction: () => {},
      setKey: () => {},
      getUrls: () => [tileUrl.split("?")[0]],
      on: () => {},
      un: () => {},
      getState: () => "ready",
    };

    const mockLayer = {
      getSource: () => mockSource,
      get: (prop) => (prop === "id" ? "test-seed" : null),
      on: () => {},
      un: () => {},
    };

    cy.mount(html`
      <eox-layercontrol-layerconfig
        .layer=${mockLayer}
        .layerConfig=${{ schema }}
      ></eox-layercontrol-layerconfig>
    `);

    return cy
      .get("eox-layercontrol-layerconfig")
      .shadow()
      .find("eox-jsonform", { timeout: 10000 })
      .then(($jsonform) => $jsonform[0].seededValue);
  };

  it("seeds start values from the tile URL when the schema nests fields under anyOf", () => {
    // json-editor's "pick one variant" shape: the fields live in the anyOf branches and the
    // schema's own `properties` is empty. The layer's URL asks for one variant, the schema
    // defaults to another — without seeding, json-editor applies the default and layer-config
    // writes it straight back into the tile URL, re-rendering the layer with parameters it
    // never asked for.
    seededValueFor(
      "https://tiles.com/0/0/0.png?expression=%2Fdescending%3Avv&bidx=2",
      {
        type: "object",
        properties: {},
        anyOf: [
          {
            type: "object",
            title: "Composite",
            properties: {
              expression: { type: "string", default: "/ascending:vv" },
              bidx: { type: "number", default: 1 },
            },
          },
        ],
      },
    ).should("deep.include", {
      expression: "/descending:vv",
      bidx: 2,
    });
  });

  it("keeps seeding top-level properties when anyOf branches carry constraint-only entries", () => {
    // The conditional-validation idiom: real fields live in `properties`, and anyOf branches
    // repeat some of them as constraints (e.g. `{const: "a"}` plus a `required` list). Those
    // constraint entries must not shadow the real definitions, or the field stops seeding.
    seededValueFor("https://tiles.com/0/0/0.png?mode=a&other=y", {
      type: "object",
      properties: {
        mode: { type: "string" },
        other: { type: "string" },
      },
      anyOf: [
        { properties: { mode: { const: "a" } }, required: ["other"] },
        { properties: { mode: { const: "b" } } },
      ],
    }).should("deep.include", { mode: "a", other: "y" });
  });

  it("seeds the raw URL value instead of NaN when a number field carries a non-numeric value", () => {
    seededValueFor("https://tiles.com/0/0/0.png?rescale=auto&bidx=2", {
      type: "object",
      properties: {
        rescale: { type: "number" },
        bidx: { type: "number" },
      },
    }).should("deep.include", { rescale: "auto", bidx: 2 });
  });
});
