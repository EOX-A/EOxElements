import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

/**
 * Test case to verify that the timecontrol timeline component loads correctly
 * and loads with range configuration.
 */
const loadTimelineWithRangeConfiguration = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // mount - mount components with timeline
  cy.mount(html`
    <eox-map
      id="timeline"
      style="width: 500px; height: 0px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#timeline">
      <eox-timecontrol-timeline
        .selectionDuration=${{
          minutes: 1,
        }}
        .selectionResizable=${true}
      ></eox-timecontrol-timeline>
    </eox-timecontrol>
  `);

  // verify timeline shadow DOM structure
  cy.get("eox-timecontrol-timeline")
    .shadow()
    .within(() => {
      cy.get(".timeline-wrapper").should("exist");

      // verify range selection is enabled
      cy.get(".timeline-wrapper").should(
        "have.class",
        "range-selection-enabled",
      );

      // click a background area to select a minute range
      cy.get(".vis-timeline").click(200, 80);
    });

  cy.get("eox-timecontrol").then(($el) => {
    const timeControlEl = $el[0];
    const selectedDateRange = timeControlEl.selectedDateRange;
    const start = dayjs(selectedDateRange[0]);
    const end = dayjs(selectedDateRange[1]);

    // verify the selected range is 59 seconds
    const diffMinutes = end.diff(start, "second");
    expect(diffMinutes).to.equal(60);
  });
};

export default loadTimelineWithRangeConfiguration;
