import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

/** Mount a populated timeline using the existing map story configuration. */
const mountTimeline = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.mount(html`
    <eox-map id="lifecycle-map" .layers=${STORY_ARGS.layers}></eox-map>
    <eox-timecontrol for="eox-map#lifecycle-map">
      <eox-timecontrol-timeline></eox-timecontrol-timeline>
    </eox-timecontrol>
  `);
  cy.get("eox-timecontrol-timeline").should(([element]) => {
    expect(
      /** @type {import("../../src/components/timecontrol-timeline").EOxTimeControlTimeline} */ (
        element
      ).visTimeline,
    ).not.to.equal(null);
  });
};

/** Reinitialization must destroy the previous instance and preserve its window. */
export const replacedTimelineTest = () => {
  mountTimeline();
  cy.get("eox-timecontrol-timeline").then(([element]) => {
    const timeline =
      /** @type {import("../../src/components/timecontrol-timeline").EOxTimeControlTimeline} */ (
        element
      );
    const previous = timeline.visTimeline;
    const destroy = cy.spy(previous, "destroy").as("destroy");
    const window = previous.getWindow();
    // Consecutive requests should coalesce into a single replacement.
    timeline.initTimeline();
    timeline.initTimeline();
    cy.wrap(timeline).should((current) => {
      expect(current.visTimeline).not.to.equal(previous);
      expect(destroy).to.have.been.calledOnce;
      const range = current.visTimeline.getWindow();
      expect(range.start.getTime()).to.equal(window.start.getTime());
      expect(range.end.getTime()).to.equal(window.end.getTime());
    });
  });
  cy.get("eox-timecontrol-timeline")
    .shadow()
    .find(".vis-timeline")
    .should("have.length", 1);
};

/** Detachment must cancel pending work, destroy the instance, and reconnect cleanly. */
export const reconnectedTimelineTest = () => {
  mountTimeline();
  cy.get("eox-timecontrol-timeline").then(([element]) => {
    const timeline =
      /** @type {import("../../src/components/timecontrol-timeline").EOxTimeControlTimeline} */ (
        element
      );
    const parent = timeline.parentElement;
    const previous = timeline.visTimeline;
    const destroy = cy.spy(previous, "destroy");
    timeline.initTimeline();
    timeline.remove();
    expect(destroy).to.have.been.calledOnce;
    expect(timeline.visTimeline).to.equal(null);
    expect(timeline._timelineInitTimeout).to.equal(null);
    expect(timeline._timelineDrawInterval).to.equal(null);
    // Give a queued initialization a chance to run while disconnected.
    cy.then(() => new Cypress.Promise((resolve) => setTimeout(resolve))).then(
      () => {
        expect(timeline.visTimeline).to.equal(null);
        parent.append(timeline);
      },
    );
    cy.wrap(timeline).should((current) => {
      expect(current.visTimeline).not.to.equal(null);
      expect(current.visTimeline).not.to.equal(previous);
    });
    cy.then(() => {
      const current = timeline.visTimeline;
      const destroyCurrent = cy.spy(current, "destroy");
      timeline.remove();
      expect(destroyCurrent).to.have.been.calledOnce;
      expect(timeline._timelineDrawInterval).to.equal(null);
      expect(destroy).to.have.been.calledOnce;
    });
  });
};
