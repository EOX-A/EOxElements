import { html } from "lit";
import { STORY_ARGS } from "../../src/enums.js";
import dayjs from "dayjs";

/**
 * Test case to verify Expert mode functionality with timelapse export capabilities.
 * This test verifies the complete expert mode workflow including external map rendering,
 * STAC data fetching, mosaic layer creation, date range selection, and timelapse export.
 */
const loadExpertModeExport = () => {
  // data preparation - calculate date range for calendar navigation
  const currentDate = dayjs().format("YYYY-MM-DD");
  const weekAgoDate = dayjs().subtract(30, "day").format("YYYY-MM-DD");
  // check if date range spans different months for calendar navigation
  const isDifferentMonth =
    dayjs(currentDate).month() !== dayjs(weekAgoDate).month();

  // setup - intercept network requests
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  // mount - mount expert mode components with external map rendering
  cy.mount(html`
    <div class="expert-mode">
      <eox-map
        style="width: 100%; height: 500px;"
        id="external-map-rendering-mosaic"
        .zoom=${10}
        .center=${[12, 42]}
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
    </div>
  `);

  // expert mode setup - configure external map rendering and data fetching
  cy.get("div.expert-mode").then(($el) => {
    const exportMode = $el[0];
    const eoxMap = exportMode.querySelector(
      "eox-map#external-map-rendering-mosaic",
    );

    // initialize data variables for STAC items and mosaic layers
    let items = [];
    let tileJson = "";
    let startDate = "2025-09-01T00:00:00Z";
    let endDate = new Date().toISOString();

    // layer configuration - define base OSM layer
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
    const createMosaicLayer = (items, tileJson) => ({
      type: "Tile",
      source: {
        type: "TileJSON",
        url:
          tileJson +
          "?&tile_scale=2&assets=B04&assets=B03&assets=B02&color_formula=Gamma%20RGB%203.2%20Saturation%200.8%20Sigmoidal%20RGB%2025%200.35&nodata=0&minzoom=9&collection=sentinel-2-l2a&format=png",
        crossOrigin: "anonymous",
      },
      properties: {
        id: "sentinel-2",
        title: items.length ? items[0].properties.datetime : "dummy title",
        // map STAC items to timeControlValues format
        timeControlValues:
          items?.map((f) => ({
            date: f.properties.datetime,
            itemId: f.id,
            cloudCoverage: f.properties["eo:cloud_cover"],
          })) || [],
        timeControlProperty: "dummy",
      },
    });

    // async function - fetch STAC items from planetary computer API
    const fetchItems = async (extent, dateStart, dateEnd) => {
      const url =
        "https://planetarycomputer.microsoft.com/api/stac/v1/search?collections=sentinel-2-l2a&bbox=" +
        eoxMap.lonLatExtent +
        "&limit=200&datetime=" +
        dateStart +
        "/" +
        dateEnd +
        "&sortby=-datetime";
      const searchResponse = await fetch(url);
      const { features } = await searchResponse.json();
      return features;
    };

    // async function - register mosaic with planetary computer for tile generation
    const registerMosaic = async (dateStart, dateEnd) => {
      const registerResponse = await fetch(
        "https://planetarycomputer.microsoft.com/api/data/v1/mosaic/register",
        {
          method: "POST",
          body: JSON.stringify({
            "filter-lang": "cql2-json",
            filter: {
              op: "and",
              args: [
                {
                  op: "=",
                  args: [{ property: "collection" }, "sentinel-2-l2a"],
                },
                {
                  op: "anyinteracts",
                  args: [
                    { property: "datetime" },
                    { interval: [dateStart, dateEnd] },
                  ],
                },
              ],
            },
            sortby: [{ field: "datetime", direction: "desc" }],
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const { links } = await registerResponse.json();
      return links.find((l) => l.rel === "tilejson").href;
    };

    // event listener - handle date range selection from timecontrol
    exportMode
      .querySelector("eox-timecontrol")
      .addEventListener("select", async (e) => {
        console.log(e.detail);
        const now = Date.now();
        // skip if no items loaded yet
        if (!items.length) return;

        // extract date range from event detail
        const start = new Date(e.detail.date[0]);
        const end = new Date(e.detail.date[1]);

        // register mosaic for selected date range and update map layers
        tileJson = await registerMosaic(start.toISOString(), end.toISOString());
        eoxMap.layers = [osmLayer, createMosaicLayer(items, tileJson)];
      });

    // event listener - handle timelapse export functionality
    exportMode
      .querySelector("eox-timecontrol-timelapse")
      .addEventListener("export", async (e) => {
        console.log("ksdjkjsd");
        const mapLayers = [];

        // extract cloud coverage filter values from event detail
        const minCloudCover = e.detail.filters.cloudCoverage?.state.min;
        const maxCloudCover = e.detail.filters.cloudCoverage?.state.max;
        console.log(e.detail);

        // iterate through selected date range items for export
        for (const dateKey in e.detail.selectedRangeItems) {
          const date = e.detail.selectedRangeItems[dateKey][0].originalDate;
          const start = new Date(date);
          // create end date as next day for single-day mosaic
          const end = new Date(
            new Date(start).setDate(new Date(start).getDate() + 1),
          );

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
            // register mosaic for this specific date
            const currentTileJson = await registerMosaic(
              start.toISOString(),
              end.toISOString(),
            );
            // add layer configuration for this date to export
            mapLayers.push({
              layers: [osmLayer, createMosaicLayer([], currentTileJson)],
              date: dateKey,
            });
          }
        }
        console.log(mapLayers);
        // trigger timelapse generation with configured map layers
        e.detail.generate({
          mapLayers,
        });
      });

    // initialize map with base OSM layer
    eoxMap.layers = [osmLayer];

    // map event listener - fetch new items when map extent changes
    eoxMap.map.on("moveend", async () => {
      items = await fetchItems(eoxMap.lonLatExtent, startDate, endDate);
      eoxMap.layers = [osmLayer, createMosaicLayer(items, tileJson)];
    });
  });

  // setup - stub window functions for download testing
  cy.window().then((win) => {
    // stub URL methods for blob handling
    win.URL.createObjectURL = cy.stub().returns("blob:mock-url");
    win.URL.revokeObjectURL = cy.stub();

    // stub document.createElement to mock download link creation
    const originalCreateElement = win.document.createElement.bind(win.document);
    win.document.createElement = cy.stub().callsFake((tagName) => {
      if (tagName === "a") {
        const mockLink = originalCreateElement("a");
        // stub click method for download testing
        mockLink.click = cy.stub().as("downloadClick");
        return mockLink;
      }
      return originalCreateElement(tagName);
    });
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
  cy.get("body").click();

  // trigger timelapse export functionality
  cy.get("eox-timecontrol-timelapse").click();

  // verify export dialog appears
  cy.get(".timecontrol-export", { timeout: 30000 }).should("exist");
};

export default loadExpertModeExport;
