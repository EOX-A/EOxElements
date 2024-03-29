import "../src/main";

describe("SH Display", () => {
  it("configures signals endpoint for chart to retrieve data", () => {
    cy.mount("<eox-chart></eox-chart>").as("eox-chart");
    cy.get("eox-chart").should(($el) => {
      const options = {
        endpoint:
          "https://prototype-gftb1dhets8kbrfhr3zdka.ddc.hub.eox.at/eo-signals-api/eo-signals-for-geometry",
        source: "sentinelhub",
        features: [
          [
            "s1_rvi",
            "s2_ndvi",
            "s2_ndwi",
            "s2_mndwi",
            "s2_nddi",
            "s2_ndmi",
            "s2_nbsi",
            "s2_evi",
            "s2_savi",
            "meteo_spei",
            "meteo_pni",
            "meteo_spi",
          ],
          ["s2_vci"],
          ["modis_ndvi", "modis_ndwi", "modis_savi", "modis_evi", "modis_nddi"],
          ["s3_ndvi", "s3_otci", "s2_lai", "s2_fapar"],
          ["eto", "temp_min", "temp_avg", "temp_max", "prec"],
        ],
        additionalYAxis: [
          {
            id: "temperature",
            containedSignals: ["temp_min", "temp_avg", "temp_max"],
          },
          {
            id: "precipitation",
            containedSignals: ["prec"],
          },
        ],
        colors: [
          "#ff0029",
          "#377eb8",
          "#66a61e",
          "#984ea3",
          "#00d2d5",
          "#ff7f00",
          "#af8d00",
          "#7f80cd",
          "#b3e900",
          "#c42e60",
          "#a65628",
          "#f781bf",
          "#8dd3c7",
          "#bebada",
          "#fb8072",
          "#80b1d3",
          "#fdb462",
          "#fccde5",
          "#bc80bd",
          "#ffed6f",
          "#c4eaff",
          "#cf8c00",
          "#1976D2",
          "#0288D1",
          "#757575",
          "#ff5722",
          "#303f9f",
        ],
        // retries: 5,
        // normalize: true,
        active: ["modis_ndvi", "modis_ndwi", "modis_savi"],
        // timeAggregation: { week: 1 },
        timeInterval: {
          months: 3,
        },
        startTime: "2023-01-01",
        endTime: "2023-03-30",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [20.13079927, 47.10302768],
              [20.13084045, 47.1028265],
              [20.1358676, 47.10146968],
              [20.13740927, 47.10014585],
              [20.13947607, 47.09893601],
              [20.14091366, 47.09999145],
              [20.1449318, 47.10150223],
              [20.14791146, 47.10230676],
              [20.15021132, 47.10395088],
              [20.15405271, 47.10427089],
              [20.15892741, 47.10398568],
              [20.15852441, 47.10137122],
              [20.15762095, 47.09983277],
              [20.15739972, 47.0975736],
              [20.15803736, 47.09471102],
              [20.16078555, 47.09278008],
              [20.16202649, 47.09216975],
              [20.15674646, 47.08971359],
              [20.14955762, 47.08650222],
              [20.13871746, 47.08287273],
              [20.13206638, 47.08157835],
              [20.12726444, 47.08162372],
              [20.12231283, 47.0824622],
              [20.11401767, 47.08174784],
              [20.11216468, 47.08018127],
              [20.10948393, 47.07862235],
              [20.10265513, 47.07664915],
              [20.09653792, 47.07715786],
              [20.08739187, 47.07520495],
              [20.08127912, 47.07681145],
              [20.07655974, 47.08095206],
              [20.06658042, 47.07842296],
              [20.05716056, 47.0777923],
              [20.05220315, 47.08017979],
              [20.04630443, 47.08419526],
              [20.04133418, 47.08864202],
              [20.03220524, 47.08935493],
              [20.03172385, 47.09164789],
              [20.03114258, 47.09606486],
              [20.03149467, 47.09719311],
              [20.03319485, 47.09955417],
              [20.03803622, 47.10154872],
              [20.04451973, 47.10273689],
              [20.04782854, 47.10248179],
              [20.05408279, 47.1002776],
              [20.05902427, 47.09876342],
              [20.06282968, 47.0985035],
              [20.06912826, 47.09867377],
              [20.07212495, 47.0994389],
              [20.08114396, 47.10320425],
              [20.08584159, 47.10621624],
              [20.08800841, 47.10687536],
              [20.09697203, 47.10769864],
              [20.10840521, 47.10770649],
              [20.12110234, 47.10464688],
              [20.12769884, 47.1031142],
              [20.13079927, 47.10302768],
            ],
          ],
        },
      };
      (<EOxChart>$el[0]).setSignalsEndpoint(options);
    });
  });
});
