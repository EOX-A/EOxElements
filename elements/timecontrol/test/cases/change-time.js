import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";
import "../_mockMap";

// Destructure TEST_SELECTORS object
const { timeControl } = TEST_SELECTORS;

const testParam = "TIME";
const testTimes = ["2024-01-01", "2024-01-02"];
let timeChangeEventValue = "";

let testLayer;

/**
 * Test to verify if the times change successfully.
 */
const changeTimeTest = () => {
  cy.mount("<mock-map></mock-map>").as("mock-map");
  cy.mount(
    html`<eox-timecontrol
      for="mock-map"
      layer="TEST_ID"
      .animationProperty=${testParam}
      .animationValues=${testTimes}
      @onTimeChange="${(e) => {
        timeChangeEventValue = e.detail.currentTime;
      }}"
    ></eox-timecontrol>`
  ).as(timeControl);

  cy.get("mock-map").and(($el) => {
    const map = $el[0].map;
    map.events["loadend"]();
    testLayer = map.getLayers().getArray()[0];
  });
  cy.get(timeControl).and(($el) => {
    expect($el[0].currentTime).to.be.eq(testTimes[0]);
    expect(testLayer.getSource().getParams()[testParam]).to.be.eq(testTimes[0]);
  });

  cy.get(timeControl)
    .shadow()
    .within(() => {
      cy.get(".next").click();
    });

  cy.get(timeControl).and(($el) => {
    expect($el[0].currentTime).to.be.eq(testTimes[1]);
    expect(testLayer.getSource().getParams()[testParam]).to.be.eq(testTimes[1]);
  });

  cy.get(timeControl).and(($el) => {
    expect(timeChangeEventValue).to.be.eq($el[0].currentTime);
  });
};

export default changeTimeTest;
