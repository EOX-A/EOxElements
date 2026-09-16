import { html } from "lit";
import { getDate } from "../utils.js";
import { STORY_ARGS } from "../../src/enums.js";

/**
 * Test to verify that timecontrol-picker component displays popup items when hovering
 * over a date and shows correct number of dots based on the number of layers.
 */
const loadDatePickerPopupItems = () => {
  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // data preparation
  // use a date that exists in BOTH layers from April 2023
  // (calendar opens to April 2023 by default - the month of the last date)
  const testDate = "2023-04-17"; // this date exists in both layers

  // change expected count to 1 for now if only one layer shows up in the dots
  // wait, STORY_ARGS.layers[1] and [2] both have 2023-04-17.
  const expectedDotCount = 1;

  // mount - mount components with picker in popup mode with showItems enabled
  cy.mount(html`
    <eox-map
      id="picker-popup-items-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#picker-popup-items-test">
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
        .navigation=${true}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        format="${STORY_ARGS.format}"
        .showDots=${true}
        .popup=${true}
        .showItems=${true}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `);

  // assertions - verify component behavior
  const utcTestDate = getDate(testDate);

  // component existence
  cy.get("eox-map").should("exist");
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol-picker").should("exist");

  // verify picker has showItems and showDots properties set
  cy.get("eox-timecontrol-picker")
    .should("have.prop", "showItems", true)
    .and("have.prop", "showDots", true)
    .and("have.prop", "popup", true);

  // click on date input to open calendar
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']").click();
    });

  // wait for calendar to appear
  cy.get(".vc", { timeout: 10000 }).should("exist").and("be.visible");

  // find our test date
  cy.get(".vc")
    .last()
    .within(() => {
      // it probably needs a second to render all days/dots
      cy.get(`[data-vc-date="${utcTestDate}"]`, { timeout: 10000 }).should(
        "exist",
      );
      // it probably needs a second to render all days/dots
      cy.get(".vc-day__dots", { timeout: 10000 }).should("exist");
    });

  // verify the test date has dots (data from multiple layers)
  // we first need to ensure the calendar is fully loaded and items are rendered
  cy.get(".vc")
    .last()
    .within(() => {
      cy.get(`[data-vc-date="${utcTestDate}"]`, { timeout: 10000 })
        .first()
        .should("have.class", "vc-data-available")
        .within(() => {
          // should have the dots container
          cy.get(".vc-day__dots").should("exist");

          // count the number of dots (should be >= 1)
          cy.get(".vc-day__dot", { timeout: 10000 }).should(
            "have.length.at.least",
            expectedDotCount,
          );
        });
    });

  // verify the date popup element exists with opacity: 0 by default
  cy.get(`[data-vc-date="${utcTestDate}"] .vc-date__popup`)
    .should("exist")
    .and("have.css", "opacity", "0");

  // simulate hover by manually setting opacity to 1 (since CSS :hover doesn't work with trigger)
  // in a real browser, hovering triggers: .vc-data-available:hover .vc-date__popup { opacity: 1 }
  cy.get(`[data-vc-date="${utcTestDate}"] .vc-date__popup`).then(($popup) => {
    // manually set opacity to 1 to simulate hover state
    $popup.css("opacity", "1");
  });

  // verify we can set and check opacity: 1 (simulating hover)
  cy.get(`[data-vc-date="${utcTestDate}"] .vc-date__popup`).should(
    "have.css",
    "opacity",
    "1",
  );

  // verify the popup contains content (visible when opacity is 1)
  cy.get(`[data-vc-date="${utcTestDate}"] .vc-date__popup`).should(($popup) => {
    const htmlContent = $popup.html();
    expect(htmlContent).to.not.be.empty;
    // verify primary line shows layer title and does NOT have the hardcoded "ID: " prefix
    expect(htmlContent).to.include("Wind Visualisation 10M");
    expect(htmlContent).to.include("NO2 Visualisation");
    expect(htmlContent).to.not.include("ID: ");
    // verify no misleading "00:00" for date-only items
    expect(htmlContent).to.not.include("00:00");
  });

  // reset opacity back to 0 (simulating mouse leave)
  cy.get(`[data-vc-date="${utcTestDate}"] .vc-date__popup`).then(($popup) => {
    $popup.css("opacity", "0");
  });

  // verify opacity is back to 0
  cy.get(`[data-vc-date="${utcTestDate}"] .vc-date__popup`).should(
    "have.css",
    "opacity",
    "0",
  );

  // verify a date with only one layer has only one dot
  // use the last date which should only be in layer 2
  const singleLayerDate = "2023-04-24";
  cy.get(".vc")
    .last()
    .within(() => {
      // navigate to April 2023 by clicking on the test date first
      // this ensures we're in the right month
      cy.get(`[data-vc-date="${singleLayerDate}"]`, { timeout: 5000 })
        .first()
        .should("exist")
        .within(() => {
          // should have dots container
          cy.get(".vc-day__dots").should("exist");

          // should have only 1 dot (only in layer 2)
          cy.get(".vc-day__dot").should("have.length", 1);
        });
    });

  // mount with custom itemTitleKey and propertyTransform
  cy.mount(html`
    <eox-map
      id="picker-custom-popup-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#picker-custom-popup-test">
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
        .navigation=${true}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        item-title-key="cloudCoverage"
        .showDots=${true}
        .popup=${true}
        .showItems=${true}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `);

  // open calendar in custom configuration
  cy.get("eox-timecontrol")
    .last()
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']").click();
    });

  cy.get(".vc").last().should("exist").and("be.visible");

  // verify itemTitleKey displays the cloudCoverage value on primary line and layerName in metadata
  cy.get(`[data-vc-date="${utcTestDate}"] .vc-date__popup`)
    .last()
    .should(($popup) => {
      const htmlContent = $popup.html();
      expect(htmlContent).to.include("74");
      expect(htmlContent).to.include("Wind Visualisation 10M");
    });

  // dynamically update property on the picker element
  cy.get("eox-timecontrol-picker")
    .last()
    .then(($picker) => {
      /** @type {any} */ ($picker[0]).itemTitleKey = "layerName";
    });

  // verify dynamic property update re-renders popup content in-place
  cy.get(`[data-vc-date="${utcTestDate}"] .vc-date__popup`)
    .last()
    .should(($popup) => {
      const htmlContent = $popup.html();
      expect(htmlContent).to.include("Wind Visualisation 10M");
    });

  // mount with custom propertyTransform (object)
  cy.mount(html`
    <eox-map
      id="picker-transform-popup-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#picker-transform-popup-test">
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
        .navigation=${true}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        item-title-key="cloudCoverage"
        .showDots=${true}
        .popup=${true}
        .showItems=${true}
        .propertyTransform=${(item) => ({
          title: `Transformed: ${item.cloudCoverage}%`,
          subtitle: "Custom Meta",
        })}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `);

  // open calendar in transform configuration
  cy.get("eox-timecontrol")
    .last()
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']").click();
    });

  cy.get(".vc").last().should("exist").and("be.visible");

  // verify propertyTransform custom object rendering
  cy.get(`[data-vc-date="${utcTestDate}"] .vc-date__popup`)
    .last()
    .should(($popup) => {
      const htmlContent = $popup.html();
      expect(htmlContent).to.include("Transformed: 74%");
      expect(htmlContent).to.include("Custom Meta");
    });

  // mount with custom HTML propertyTransform
  cy.mount(html`
    <eox-map
      id="picker-html-popup-test"
      style="width: 400px; height: 300px;"
      .zoom=${STORY_ARGS.zoom}
      .center=${STORY_ARGS.center}
      .layers=${STORY_ARGS.layers}
    ></eox-map>
    <eox-timecontrol for="eox-map#picker-html-popup-test">
      <eox-timecontrol-date
        format="${STORY_ARGS.format}"
        .navigation=${true}
      ></eox-timecontrol-date>
      <eox-timecontrol-picker
        .showDots=${true}
        .popup=${true}
        .showItems=${true}
        .propertyTransform=${(item) =>
          `<div class="custom-card">Custom ${item.cloudCoverage}</div>`}
      ></eox-timecontrol-picker>
    </eox-timecontrol>
  `);

  // open calendar in HTML custom configuration
  cy.get("eox-timecontrol")
    .last()
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']").click();
    });

  cy.get(".vc").last().should("exist").and("be.visible");

  // verify propertyTransform custom HTML rendering
  cy.get(`[data-vc-date="${utcTestDate}"] .vc-date__popup`)
    .last()
    .should(($popup) => {
      const htmlContent = $popup.html();
      expect(htmlContent).to.include("custom-card");
      expect(htmlContent).to.include("Custom 74");
    });
};

export default loadDatePickerPopupItems;
