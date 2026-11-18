import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";
import dayjs from "dayjs";

/**
 * Test case to verify Expert mode functionality with timelapse export capabilities.
 * This test verifies the complete expert mode workflow including external map rendering,
 * STAC data fetching, mosaic layer creation, date range selection, and timelapse export.
 */
const loadExpertModeExport = () => {
  // handle ResizeObserver errors that can occur with complex components
  cy.on("uncaught:exception", (err) => {
    if (
      err.message.includes(
        "ResizeObserver loop completed with undelivered notifications",
      )
    ) {
      return false; // ignore ResizeObserver errors
    }
    return true;
  });

  const todayDate = dayjs().format("YYYY-MM-DD");
  const pastDate = dayjs().subtract(30, "day").format("YYYY-MM-DD");

  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  cy.intercept(/^.*planetarycomputer.*search.*$/, {
    body: {
      features: [
        {
          id: "S2_CURRENT",
          properties: {
            datetime: `${todayDate}T10:00:00Z`,
            "eo:cloud_cover": 10,
          },
        },
        {
          id: "S2_PAST",
          properties: {
            datetime: `${pastDate}T10:00:00Z`,
            "eo:cloud_cover": 15,
          },
        },
      ],
    },
  });

  cy.intercept(/^.*planetarycomputer.*mosaic\/register.*$/, {
    body: {
      links: [
        {
          rel: "tilejson",
          href: "https://example.com/mock-tilejson",
        },
      ],
    },
  });

  const mockItems = [
    {
      id: "S2_PAST",
      properties: {
        datetime: `${pastDate}T10:00:00Z`,
        "eo:cloud_cover": 15,
      },
    },
    {
      id: "S2_CURRENT",
      properties: {
        datetime: `${todayDate}T10:00:00Z`,
        "eo:cloud_cover": 10,
      },
    },
  ];

  const osmLayer = {
    type: "Tile",
    properties: {
      id: "OSM",
    },
    source: {
      type: "OSM",
    },
  };

  // mosaic layer factory - creates sentinel-2 mosaic layer from STAC items
  const createMosaicLayer = (items, _tileJson = "") => ({
    type: "Tile",
    source: {
      type: "OSM",
    },
    properties: {
      id: "sentinel-2",
      name: "sentinel-2",
      title: items.length
        ? items[0].properties?.datetime || "dummy"
        : "dummy title",
      // map STAC items to timeControlValues format
      timeControlValues:
        items?.map((f) => ({
          date: f.properties?.datetime || f.date,
          itemId: f.id || f.itemId,
          cloudCoverage: f.properties?.["eo:cloud_cover"] ?? f.cloudCoverage,
        })) || [],
      timeControlProperty: "dummy",
    },
  });

  // mount - mount expert mode components with external map rendering
  cy.mount(html`
    <eox-map
      style="width: 100%; height: 500px;"
      id="external-map-rendering-mosaic"
      .zoom=${10}
      .center=${[12, 42]}
      .layers=${[osmLayer, createMosaicLayer(mockItems, "")]}
    ></eox-map>
    <eox-timecontrol
      .for=${"eox-map#external-map-rendering-mosaic"}
      .layerIdKey=${STORY_ARGS.layerIdKey}
      .titleKey=${STORY_ARGS.titleKey}
      .externalMapRendering=${true}
      .filters=${STORY_ARGS.filters}
    >
      <div style="display: flex; gap: 10px;align-items: center;">
        <eox-timecontrol-date
          style="flex-grow: 1;"
          .navigation=${true}
        ></eox-timecontrol-date>
        <eox-timecontrol-picker
          .range=${true}
          .showDots=${true}
          .popup=${true}
        ></eox-timecontrol-picker>
        <div style="display: flex;align-items: center;">
          <eox-itemfilter
            id="timecontrol-filter"
            .inlineMode=${true}
            .titleProperty=${"id"}
            .showResults=${false}
            .filterProperties=${STORY_ARGS.filters}
            style="--inline-container-height: 40px"
          ></eox-itemfilter>
          <eox-timecontrol-timelapse></eox-timecontrol-timelapse>
        </div>
      </div>
      <eox-timecontrol-timeline
        style="margin-top: 10px;"
      ></eox-timecontrol-timeline>
    </eox-timecontrol>
  `);

  // ensure components are ready before proceeding with setup
  cy.get("eox-map#external-map-rendering-mosaic", { timeout: 10000 }).should(
    (el) => {
      expect(el[0].map).to.exist;
    },
  );

  // setup logic after mount to ensure DOM and map are ready
  cy.get("eox-map#external-map-rendering-mosaic").then(($eoxMap) => {
    const eoxMap = $eoxMap[0];
    const exportMode = eoxMap.parentElement;

    // event listener - handle timelapse export functionality
    const timelapse = exportMode.querySelector("eox-timecontrol-timelapse");
    timelapse.addEventListener("export", async (e) => {
      const mapLayers = [];

      // extract cloud coverage filter values from event detail
      const minCloudCover = e.detail.filters.cloudCoverage?.state.min;
      const maxCloudCover = e.detail.filters.cloudCoverage?.state.max;

      // iterate through selected date range items for export
      for (const dateKey in e.detail.selectedRangeItems) {
        const date = e.detail.selectedRangeItems[dateKey][0].originalDate;
        // filter items by cloud coverage and create mosaic layers
        if (
          date &&
          date.length &&
          !e.detail.selectedRangeItems[dateKey].some(
            (o) =>
              o.cloudCoverage > maxCloudCover ||
              o.cloudCoverage < minCloudCover,
          )
        ) {
          mapLayers.push({
            layers: [osmLayer, createMosaicLayer([], "")],
            date: dateKey,
          });
        }
      }
      // trigger timelapse generation with configured map layers
      e.detail.generate({
        mapLayers,
      });
    });
  });

  // setup - stub window functions for download testing
  cy.window().then((win) => {
    // stub URL methods for blob handling
    win.URL.createObjectURL = cy.stub().returns("blob:mock-url");
    win.URL.revokeObjectURL = cy.stub();
  });

  // assertions - verify component existence and structure
  cy.get("eox-timecontrol").should("exist");
  cy.get("eox-timecontrol").find("eox-timecontrol-date").should("exist");
  cy.get("eox-timecontrol").find("eox-timecontrol-picker").should("exist");

  // user interaction - open date picker calendar
  cy.get("eox-timecontrol")
    .find("eox-timecontrol-date")
    .shadow()
    .within(() => {
      cy.get("#date-container input[type='text']", { timeout: 20000 }).click();
    });

  cy.get("eox-timecontrol").then(($timecontrol) => {
    const timecontrolElement = $timecontrol[0];
    const selectedDateRange = timecontrolElement.selectedDateRange;

    // data preparation - calculate date range for calendar navigation
    const currentDate = dayjs(selectedDateRange[0]).format("YYYY-MM-DD");
    const weekAgoDate = dayjs().subtract(30, "day").format("YYYY-MM-DD");
    // check if date range spans different months for calendar navigation
    const isDifferentMonth =
      dayjs(currentDate).month() !== dayjs(weekAgoDate).month();

    // calendar navigation - select date range for testing
    cy.get(".vc", { timeout: 10000 }).should("exist").and("be.visible");

    // navigate to previous month if date range spans different months
    if (isDifferentMonth) {
      cy.get(".vc .vc-header .vc-arrow_prev").last().click();
    }

    // select start date (30 days ago)
    cy.get(`[data-vc-date="${weekAgoDate}"]`).last().click();

    // navigate back to current month if needed
    if (isDifferentMonth) {
      cy.get(".vc .vc-header .vc-arrow_next").last().click();
    }

    // select end date (current date)
    cy.get(`[data-vc-date="${currentDate}"]`).last().click();

    // close calendar by clicking outside
    cy.get("body").click(0, 0, { force: true });

    // trigger timelapse export functionality
    cy.get("eox-timecontrol-timelapse").click();

    // verify export dialog appears
    cy.get(".timecontrol-export", { timeout: 30000 }).should("exist");
  });
};

export default loadExpertModeExport;
