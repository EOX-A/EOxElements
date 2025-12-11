/**
 * Basic Globe rendered using `projection: "globe"`
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const GlobeStory = {
  args: {
    center: [15, 48],
    projection: "globe",
    layers: [
      // {
      //   type: "STAC",
      //   properties: {
      //     id: "stacLayer",
      //   },
      //   url: "https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json",
      // },
      {
        type: "WebGLTile",
        style: {
          variables: {
            vmin: 2,
            vmax: 5,
            settlementDistance: 0,
          },
          color: [
            "case",
            [
              "all",
              [">", ["band", 1], 1],
              [">=", ["band", 2], ["var", "settlementDistance"]],
            ],
            [
              "interpolate",
              ["linear"],
              [
                "/",
                ["-", ["band", 1], ["var", "vmin"]],
                ["-", ["var", "vmax"], ["var", "vmin"]],
              ],
              0,
              [68, 1, 84, 1],
              0.067,
              [70, 23, 103, 1],
              0.133,
              [71, 44, 122, 1],
              0.2,
              [65, 63, 131, 1],
              0.266,
              [59, 81, 139, 1],
              0.333,
              [52, 97, 141, 1],
              0.4,
              [44, 113, 142, 1],
              0.467,
              [39, 129, 142, 1],
              0.533,
              [33, 144, 141, 1],
              0.6,
              [39, 173, 129, 1],
              0.666,
              [66, 187, 114, 1],
              0.733,
              [92, 200, 99, 1],
              0.8,
              [131, 210, 75, 1],
              0.867,
              [170, 220, 50, 1],
              0.933,
              [212, 226, 44, 1],
              1,
              [253, 231, 37, 1],
            ],
            ["color", 0, 0, 0, 0],
          ],
        },
        properties: {
          id: "tile",
          title: "Solar Energy COG Example",
          layerConfig: {
            type: "style",
            legend: {
              title: "Global horizontal irradiation",
              range: [
                "rgba(253, 231, 37, 1)",
                "rgba(33, 144, 141, 1)",
                "rgba(68, 1, 84, 1)",
              ],
              domainProperties: ["vmin", "vmax"],
            },
            schema: {
              type: "object",
              title: "Data configuration",
              properties: {
                settlementDistance: {
                  type: "number",
                  minimum: 0,
                  maximum: 5000,
                  format: "range",
                  default: 0,
                },
                vminmax: {
                  title: "Global horizontal irradiation",
                  description: "[kWh/m²/day]",
                  type: "object",
                  properties: {
                    vmin: {
                      type: "number",
                      minimum: 0,
                      maximum: 5,
                      format: "range",
                      default: 2,
                    },
                    vmax: {
                      type: "number",
                      minimum: 0,
                      maximum: 5,
                      format: "range",
                      default: 5,
                    },
                  },
                  format: "minmax",
                },
              },
            },
          },
        },
        source: {
          type: "GeoTIFF",
          normalize: false,
          sources: [
            {
              url: "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/v2/SolarPowerPotential_Annual_COG_clipped_3857_fixed.tif",
            },
            {
              url: "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/DHI/WSF_EucDist_Austria_3857_COG_fix.tif",
            },
          ],
        },
      },
      {
        type: "Tile",
        properties: {
          id: "cloudless",
          title: "Sentinel-2 Cloudless 2024",
        },
        source: {
          type: "XYZ",
          url: "https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2024_3857/default/g/{z}/{y}/{x}.jpg",
          crossOrigin: "anonymous",
        },
      },
    ],
    zoom: 7,
  },
};

export default GlobeStory;
