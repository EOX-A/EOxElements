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

  it("updates XYZ tileUrlFunction, clearing removeProperties from the existing URL while applying the full update", () => {
    const setTileUrlFunctionSpy = cy.spy().as("setTileUrlFunctionSpy");
    const setKeySpy = cy.spy().as("setKeySpy");

    const mockSource = {
      getTileUrlFunction: () => () =>
        `https://tiles.com/z/y/x?style=old&cmap=speed&stale=1`,
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
          style: { type: "string" },
          cmap: { type: "string" },
        },
        options: {
          removeProperties: ["cmap", "stale"],
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
              style: "new",
              cmap: "thermal",
            },
          }),
        );
      });

    // Verify tile function updated and refresh triggered
    cy.get("@setTileUrlFunctionSpy").should("have.been.called");
    cy.get("@setKeySpy").should("have.been.called");

    cy.get("@setTileUrlFunctionSpy").then((spy) => {
      const newTileFunc = spy.getCall(0).args[0];
      const resultUrl = newTileFunc([0, 0, 0]);
      // The full form update is applied, including a removeProperties key
      expect(resultUrl).to.contain("style=new");
      expect(resultUrl).to.contain("cmap=thermal");
      // Stale/initial values from the existing URL are cleared
      expect(resultUrl).to.not.contain("style=old");
      expect(resultUrl).to.not.contain("cmap=speed");
      expect(resultUrl).to.not.contain("stale=1");
    });
  });

  it("builds tile URLs from the new source after the layer source is replaced", () => {
    const createMockSource = (datetime) => ({
      getTileUrlFunction: () => () =>
        `https://tiles.com/8/133/91?rescale=0,1&datetime=${datetime}`,
      setTileUrlFunction: cy.spy(),
      setKey: () => {},
      getUrls: () => [
        `https://tiles.com/{z}/{x}/{y}?rescale=0,1&datetime=${datetime}`,
      ],
      on: () => {},
      un: () => {},
      getState: () => "ready",
    });
    const firstSource = createMockSource("2026-01-01");
    const secondSource = createMockSource("2026-02-01");

    let source = firstSource;
    let propertyChangeListener;
    const mockLayer = {
      getSource: () => source,
      get: (prop) => (prop === "id" ? "test-mosaic" : null),
      on: (_type, listener) => {
        propertyChangeListener = listener;
      },
      un: () => {},
    };

    const layerConfig = {
      type: "tileUrl",
      schema: {
        type: "object",
        properties: { rescale: { type: "string" } },
      },
    };

    const dispatchFormChange = (detail) =>
      cy
        .get("eox-layercontrol-layerconfig")
        .shadow()
        .find("eox-jsonform", { timeout: 10000 })
        .then(($jsonform) => {
          $jsonform[0].dispatchEvent(new CustomEvent("change", { detail }));
        });

    cy.clock();
    cy.mount(html`
      <eox-layercontrol-layerconfig
        .layer=${mockLayer}
        .layerConfig=${layerConfig}
      ></eox-layercontrol-layerconfig>
    `);

    dispatchFormChange({ rescale: "0,1" });
    cy.then(() => {
      // mirrors OL's layer.setSource(), which fires propertychange with key "source"
      source = secondSource;
      propertyChangeListener({ key: "source" });
    });
    // move past the 1000 ms throttle window so the next change is applied immediately
    cy.tick(1000);
    dispatchFormChange({ rescale: "2,3" });

    cy.wrap(secondSource.setTileUrlFunction).should("have.been.called");
    cy.then(() => {
      const tileUrlFunction = secondSource.setTileUrlFunction.lastCall.args[0];
      const resultUrl = decodeURIComponent(tileUrlFunction([8, 133, 91]));
      expect(resultUrl).to.contain("datetime=2026-02-01");
      expect(resultUrl).to.contain("rescale=2,3");
      expect(resultUrl).to.not.contain("datetime=2026-01-01");
    });
  });

  /**
   * Mounts a layerconfig for a mock tile layer and yields the value seeded into eox-jsonform.
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

  // it("seeds start values from the tile URL when the schema nests fields under anyOf", () => {
  //   // fields live in the anyOf branches, `properties` is empty; without seeding,
  //   // json-editor's defaults get written back into the tile URL
  //   seededValueFor(
  //     "https://tiles.com/0/0/0.png?expression=%2Fdescending%3Avv&bidx=2",
  //     {
  //       type: "object",
  //       properties: {},
  //       anyOf: [
  //         {
  //           type: "object",
  //           title: "Composite",
  //           properties: {
  //             expression: { type: "string", default: "/ascending:vv" },
  //             bidx: { type: "number", default: 1 },
  //           },
  //         },
  //       ],
  //     },
  //   ).should("deep.include", {
  //     expression: "/descending:vv",
  //     bidx: 2,
  //   });
  // });

  // it("seeds start values when anyOf branches are $refs into definitions", () => {
  //   seededValueFor(
  //     "https://tiles.com/0/0/0.png?expression=%2Fdescending%3Avv&bidx=2",
  //     {
  //       type: "object",
  //       properties: {},
  //       anyOf: [{ $ref: "#/definitions/composite" }],
  //       definitions: {
  //         composite: {
  //           type: "object",
  //           title: "Composite",
  //           properties: {
  //             expression: { type: "string", default: "/ascending:vv" },
  //             bidx: { type: "number", default: 1 },
  //           },
  //         },
  //       },
  //     },
  //   ).should("deep.include", {
  //     expression: "/descending:vv",
  //     bidx: 2,
  //   });
  // });

  it("keeps seeding top-level properties when anyOf branches carry constraint-only entries", () => {
    // constraint entries like `{const: "a"}` must not shadow the real definitions in `properties`
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
    seededValueFor("https://tiles.com/0/0/0.png?rescale=auto&bidx=2&zoom=3", {
      type: "object",
      properties: {
        rescale: { type: "number" },
        bidx: { type: "number" },
        zoom: { type: "integer" },
      },
    }).should("deep.include", { rescale: "auto", bidx: 2, zoom: 3 });
  });
});
