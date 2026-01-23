import "../src/main";
import "@eox/timecontrol";
import "./_mockMap";

describe("LayerControl Datetime Emit", () => {
  beforeEach(() => {
    cy.mount("<mock-map></mock-map>").as("mock-map");
    cy.mount(`<eox-layercontrol for="mock-map"></eox-layercontrol>`).as(
      "eox-layercontrol",
    );
  });

  it("does not trigger datetime:updated on initialization if values match", () => {
    const onDatetimeUpdated = cy.spy().as("onDatetimeUpdated");
    cy.get("eox-layercontrol").then(($el) => {
      $el[0].addEventListener("datetime:updated", onDatetimeUpdated);
    });

    const mockLayer = {
      properties: {
        id: "datetime-init-test",
        title: "Datetime Init Test",
        layerDatetime: {
          slider: true,
          controlValues: ["2024-01-01", "2024-01-02"],
          currentStep: "2024-01-01",
        },
      },
    };

    cy.get("mock-map").then(($el) => {
      const mockMap = $el[0];
      mockMap.setLayers([mockLayer]);
    });

    // Wait for initialization
    cy.get("eox-layercontrol")
      .shadow()
      .find("eox-layercontrol-layer-tools")
      .shadow()
      .find("eox-timecontrol-slider")
      .should("exist");

    cy.get("@onDatetimeUpdated").should("not.have.been.called");
  });

  it("triggers datetime:updated when values change", () => {
    const onDatetimeUpdated = cy.spy().as("onDatetimeUpdated");
    cy.get("eox-layercontrol").then(($el) => {
      $el[0].addEventListener("datetime:updated", onDatetimeUpdated);
    });

    const controlValues = ["2024-01-01", "2024-01-02"];
    const mockLayer = {
      properties: {
        id: "datetime-init-test",
        title: "Datetime Init Test",
        layerDatetime: {
          slider: true,
          controlValues: controlValues,
          currentStep: "2024-01-01",
        },
      },
    };

    cy.get("mock-map").then(($el) => {
      const mockMap = $el[0];
      mockMap.setLayers([mockLayer]);
    });

    // Wait for initialization
    cy.get("eox-layercontrol")
      .shadow()
      .find("eox-layercontrol-layer-tools")
      .shadow()
      .find("eox-timecontrol-slider")
      .should("exist");

    cy.get("eox-layercontrol")
      .shadow()
      .find("eox-layercontrol-layer-tools")
      .shadow()
      .find("eox-timecontrol-slider")
      .shadow()
      .find("tc-range-slider")
      .as("slider");

    // Change the slider value
    cy.get("@slider").then(($el) => {
      // Simulate slider change
      $el[0].value1 = controlValues[1];
      $el[0].dispatchEvent(
        new CustomEvent("change", {
          detail: {
            value1: controlValues[1],
            value2: undefined,
          },
        }),
      );
    });

    cy.get("@onDatetimeUpdated").should("have.been.called");
  });

  it("emits a valid datetime string", () => {
    const onDatetimeUpdated = cy.spy().as("onDatetimeUpdated");
    cy.get("eox-layercontrol").then(($el) => {
      $el[0].addEventListener("datetime:updated", onDatetimeUpdated);
    });

    const controlValues = ["2024-01-01T10:00:00Z", "2024-01-01T12:00:00Z"];
    const mockLayer = {
      properties: {
        id: "datetime-emit-test",
        title: "Datetime Emit Test",
        layerDatetime: {
          slider: true,
          controlValues: controlValues,
          currentStep: "2024-01-01T10:00:00Z",
        },
      },
    };

    cy.get("mock-map").then(($el) => {
      const mockMap = $el[0];
      mockMap.setLayers([mockLayer]);
    });

    // Wait for initialization
    cy.get("eox-layercontrol")
      .shadow()
      .find("eox-layercontrol-layer-tools")
      .shadow()
      .find("eox-timecontrol-slider")
      .should("exist");

    cy.get("eox-layercontrol")
      .shadow()
      .find("eox-layercontrol-layer-tools")
      .shadow()
      .find("eox-timecontrol-slider")
      .shadow()
      .find("tc-range-slider")
      .as("slider");

    // Change the slider value
    cy.get("@slider").then(($el) => {
      // Simulate slider change
      $el[0].value1 = controlValues[1];
      $el[0].dispatchEvent(
        new CustomEvent("change", {
          detail: {
            value1: controlValues[1],
            value2: undefined,
          },
        }),
      );
    });

    cy.get("@onDatetimeUpdated").should((spy) => {
      expect(spy).to.be.called;
      const call = spy.getCall(0);
      const { datetime } = call.args[0].detail;
      // Check if it contains time information.
      expect(datetime).to.include("T");
      // Check if it matches ISO format roughly
      expect(datetime).to.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    });
  });
});
