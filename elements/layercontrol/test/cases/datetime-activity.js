import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import Collection from "ol/Collection";

const dates = ["2024-01-01", "2024-01-02"];

/** @param {boolean} [withCurrentStep=true] */
function mountDatetime(withCurrentStep = true) {
  const layer = new TileLayer({
    source: new XYZ(),
    properties: {
      id: "datetime-activity",
      title: "Datetime activity",
      layerControlExpand: true,
      layerControlToolsExpand: true,
      layerDatetime: {
        controlValues: dates,
        navigation: true,
        displayFormat: "YYYY-MM-DD",
        ...(withCurrentStep ? { currentStep: dates[0] } : {}),
      },
    },
  });
  cy.mount("<mock-map></mock-map>");
  cy.get("mock-map").then(([map]) => {
    const layers = new Collection([layer]);
    map.map.getLayers = () => layers;
  });
  const datetime = cy.spy().as("datetime");
  const activity = cy.spy().as("activity");
  cy.mount('<section id="datetime-events"></section>');
  cy.get("#datetime-events").then(([container]) => {
    container.addEventListener("datetime:updated", datetime);
    container.addEventListener("eox:activity", activity);
    container.innerHTML =
      '<eox-layercontrol for="mock-map" toolsAsList></eox-layercontrol>';
  });
  cy.get("eox-layercontrol")
    .shadow()
    .find("eox-layercontrol-layer-tools")
    .shadow()
    .find("eox-timecontrol")
    .as("timecontrol");
  cy.get("@timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .find("input")
    .should("have.value", dates[withCurrentStep ? 0 : 1]);
  return layer;
}

/** @param {string} date @param {TileLayer<XYZ>} layer @param {boolean} isUser */
function assertDatetime(date, layer, isUser) {
  cy.get("@datetime").should((spy) => {
    expect(spy).to.have.been.calledOnce;
    const event = spy.firstCall.args[0];
    expect(event.detail).to.deep.equal({ datetime: date, layer });
    expect(event.bubbles).to.equal(true);
    expect(event.composed).to.equal(true);
    expect(event.isUser).to.equal(isUser);
    expect(event.target.tagName).to.equal("EOX-LAYERCONTROL");
  });
}

export function datetimeInitializationWithoutActivity() {
  const layer = mountDatetime(false);
  assertDatetime(dates[1], layer, false);
  cy.get("@activity").should("not.have.been.called");
}

export function datetimeProgrammaticSelectionWithoutActivity() {
  const layer = mountDatetime();
  cy.get("@datetime").should("not.have.been.called");
  cy.get("@timecontrol").then(([timecontrol]) => {
    timecontrol.dateChange([dates[1], dates[1]], timecontrol);
  });
  assertDatetime(dates[1], layer, false);
  cy.get("@activity").should("not.have.been.called");
}

export function datetimeUserSelectionActivity() {
  const layer = mountDatetime();
  cy.get("@timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .find("button.next")
    .click();
  assertDatetime(dates[1], layer, true);
  cy.get("@activity").should((spy) => {
    expect(spy).to.have.been.calledOnce;
    const event = spy.firstCall.args[0];
    expect(event.target.tagName).to.equal("EOX-LAYERCONTROL");
    expect(event.detail).to.deep.equal({
      element: "eox-layercontrol",
      action: "datetime:updated",
      payload: { datetime: dates[1], layer },
    });
  });
}
