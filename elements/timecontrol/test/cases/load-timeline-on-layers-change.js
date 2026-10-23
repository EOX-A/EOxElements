import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";

// Base layer without timeControlValues.
const baseLayer = {
  type: "Tile",
  properties: { id: "OSM" },
  source: { type: "OSM" },
};

// Tile layer carrying timeControlValues for the given dates.
const timeLayer = (id, name, dates) => ({
  type: "Tile",
  properties: {
    id,
    name,
    timeControlValues: dates.map((date) => ({ date })),
    timeControlProperty: "TIME",
  },
  source: { type: "OSM" },
});

const layerA = timeLayer("time-layer-a", "Layer A", [
  "2020-01-01",
  "2020-01-02",
]);
const layerB = timeLayer("time-layer-b", "Layer B", [
  "2021-05-01",
  "2021-05-02",
  "2021-05-03",
]);

// Stable group: children added into it update in place (not a top-level add),
// so the change reaches the timeline only via `layerschanged`.
const GroupLayer = (children) => ({
  type: "Group",
  properties: { id: "group-layer", title: "Group Layer" },
  layers: children,
});

// Current timeline state: item count and group ids.
const readState = ($tc) => {
  const tc = /** @type {any} */ ($tc[0]);
  return {
    items: tc.items.get().length,
    groups: tc.groups.get().map((/** @type {any} */ g) => g.id),
  };
};

// Verifies the timeline reacts to nested-group layer changes via `layerschanged`.
const loadTimelineOnLayersChange = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // group present but empty
  cy.mount(html`
    <eox-map
      id="timeline-dynamic"
      style="width: 600px; height: 400px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${[baseLayer, GroupLayer([])]}
    ></eox-map>
    <eox-timecontrol
      for="eox-map#timeline-dynamic"
      .externalMapRendering=${true}
    >
      <eox-timecontrol-timeline></eox-timecontrol-timeline>
    </eox-timecontrol>
  `);

  // no values yet
  cy.get("eox-timecontrol")
    .should("exist")
    .then(($tc) => {
      expect(readState($tc).items).to.equal(0);
    });

  // add values into the group
  cy.get("eox-map").then(($map) => {
    /** @type {any} */ ($map[0]).layers = [baseLayer, GroupLayer([layerA])];
  });
  cy.get("eox-timecontrol").should(($tc) => {
    const state = readState($tc);
    expect(state.items).to.equal(2);
    expect(state.groups).to.deep.equal(["time-layer-a"]);
  });

  // swap to different values, old cleared
  cy.get("eox-map").then(($map) => {
    /** @type {any} */ ($map[0]).layers = [baseLayer, GroupLayer([layerB])];
  });
  cy.get("eox-timecontrol").should(($tc) => {
    const state = readState($tc);
    expect(state.items).to.equal(3);
    expect(state.groups).to.deep.equal(["time-layer-b"]);
  });

  // two assignments in one tick: last wins
  cy.get("eox-map").then(($map) => {
    /** @type {any} */ ($map[0]).layers = [baseLayer, GroupLayer([layerA])];
    /** @type {any} */ ($map[0]).layers = [baseLayer, GroupLayer([layerB])];
  });
  cy.get("eox-timecontrol").should(($tc) => {
    const state = readState($tc);
    expect(state.items).to.equal(3);
    expect(state.groups).to.deep.equal(["time-layer-b"]);
  });

  cy.get("eox-timecontrol-timeline")
    .shadow()
    .find("#timeline .vis-timeline", { timeout: 4000 })
    .should("exist");

  // Select an intermediate date
  cy.get("eox-timecontrol").then(($tc) => {
    /** @type {any} */ ($tc[0]).dateChange(
      ["2021-05-02T00:00:00Z", "2021-05-02T23:59:59Z"],
      $tc[0],
    );
  });
  cy.get("eox-timecontrol").should(($tc) => {
    expect(/** @type {any} */ ($tc[0]).selectedDateRange[0]).to.include(
      "2021-05-02",
    );
  });

  // Capture existing visTimeline instance
  let timelineInstance;
  cy.get("eox-timecontrol-timeline").then(($tl) => {
    timelineInstance = /** @type {any} */ ($tl[0]).visTimeline;
    expect(timelineInstance).to.exist;
  });

  // Reassign layer with identical time values (e.g. state or style re-render)
  cy.get("eox-map").then(($map) => {
    const freshLayerB = timeLayer("time-layer-b", "Layer B", [
      "2021-05-01",
      "2021-05-02",
      "2021-05-03",
    ]);
    /** @type {any} */ ($map[0]).layers = [
      baseLayer,
      GroupLayer([freshLayerB]),
    ];
  });

  // Verify: selection is preserved (not reset to latest date 2021-05-03)
  cy.get("eox-timecontrol").should(($tc) => {
    expect(/** @type {any} */ ($tc[0]).selectedDateRange[0]).to.include(
      "2021-05-02",
    );
  });

  // Verify: timeline instance is preserved in-place (no DOM wipe / flash)
  cy.get("eox-timecontrol-timeline").should(($tl) => {
    expect(/** @type {any} */ ($tl[0]).visTimeline).to.equal(timelineInstance);
  });

  // Set a custom zoom window
  const zoomStart = new Date("2021-05-01T12:00:00Z");
  const zoomEnd = new Date("2021-05-02T12:00:00Z");
  cy.get("eox-timecontrol-timeline").then(($tl) => {
    /** @type {any} */ ($tl[0]).visTimeline.setWindow(zoomStart, zoomEnd, {
      animation: false,
    });
  });

  // Swap to new layer with different dates (triggers rebuild)
  cy.get("eox-map").then(($map) => {
    const layerC = timeLayer("time-layer-c", "Layer C", [
      "2021-05-01",
      "2021-05-02",
      "2021-05-04",
    ]);
    /** @type {any} */ ($map[0]).layers = [baseLayer, GroupLayer([layerC])];
  });

  // Verify: timeline preserves zoom window instead of resetting via fit()
  cy.get("eox-timecontrol-timeline").should(($tl) => {
    const win = /** @type {any} */ ($tl[0]).visTimeline.getWindow();
    expect(new Date(win.start).getTime()).to.be.closeTo(
      zoomStart.getTime(),
      2000,
    );
    expect(new Date(win.end).getTime()).to.be.closeTo(zoomEnd.getTime(), 2000);
  });
};

export default loadTimelineOnLayersChange;
