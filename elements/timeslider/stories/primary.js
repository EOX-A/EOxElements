import { html } from "lit";

/**
 * Generates a story configuration for the Primary TimeSlider.
 *
 * @returns {Object} The story configuration with arguments for the component and a play function for interaction testing.
 */
export const Primary = {
  args: {
    center: [1000000, 6000000],
    zoom: 5,
    layers: [
      {
        type: "Tile",
        properties: {
          id: "AWS_NO2-VISUALISATION",
        },
        source: {
          type: "TileWMS",
          url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
          params: {
            LAYERS: "AWS_NO2-VISUALISATION",
            TIME: "2022-12-05",
          },
        },
      },
      {
        type: "Tile",
        properties: {
          id: "AWS_VIS_WIND_V_10M",
        },
        source: {
          type: "TileWMS",
          url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
          params: {
            LAYERS: "AWS_VIS_WIND_V_10M",
            TIME: "2022-12-05",
          },
        },
      },
      {
        type: "Tile",
        properties: {
          id: "OSM",
        },
        source: {
          type: "OSM",
        },
      },
    ],
    for: "eox-map",
    sliderValues: [
      {
        layer: "AWS_VIS_WIND_V_10M",
        name: "Wind Visualisation 10M",
        property: "TIME",
        values: [
          {
            date: "2022-12-05",
            cloudCoverage: 20,
          },
          {
            date: "2022-12-12",
            cloudCoverage: 15,
          },
          {
            date: "2022-12-19",
            cloudCoverage: 35,
          },
          {
            date: "2022-12-26",
            cloudCoverage: 8,
          },
          {
            date: "2023-01-16",
            cloudCoverage: 42,
          },
          {
            date: "2023-01-23",
            cloudCoverage: 28,
          },
          {
            date: "2023-01-30",
            cloudCoverage: 12,
          },
          {
            date: "2023-02-06",
            cloudCoverage: 55,
          },
          {
            date: "2023-02-13",
            cloudCoverage: 33,
          },
          {
            date: "2023-02-27",
            cloudCoverage: 18,
          },
          {
            date: "2023-03-06",
            cloudCoverage: 47,
          },
          {
            date: "2023-03-13",
            cloudCoverage: 25,
          },
          {
            date: "2023-03-20",
            cloudCoverage: 9,
          },
          {
            date: "2023-03-27",
            cloudCoverage: 38,
          },
          {
            date: "2023-04-03",
            cloudCoverage: 22,
          },
          {
            date: "2023-04-10",
            cloudCoverage: 51,
          },
          {
            date: "2023-04-17",
            cloudCoverage: 14,
          },
          {
            date: "2023-04-24",
            cloudCoverage: 29,
          },
        ],
      },
      {
        layer: "AWS_NO2-VISUALISATION",
        name: "NO2 Visualisation",
        property: "TIME",
        values: [
          {
            date: "2022-12-05",
            cloudCoverage: 73,
          },
          {
            date: "2022-12-12",
            cloudCoverage: 41,
          },
          {
            date: "2022-12-19",
            cloudCoverage: 87,
          },
          {
            date: "2022-12-26",
            cloudCoverage: 12,
          },
          {
            date: "2023-01-16",
            cloudCoverage: 95,
          },
          {
            date: "2023-01-23",
            cloudCoverage: 64,
          },
          {
            date: "2023-01-30",
            cloudCoverage: 28,
          },
          {
            date: "2023-02-06",
            cloudCoverage: 91,
          },
          {
            date: "2023-02-13",
            cloudCoverage: 56,
          },
          {
            date: "2023-02-27",
            cloudCoverage: 7,
          },
          {
            date: "2023-03-06",
            cloudCoverage: 83,
          },
          {
            date: "2023-03-13",
            cloudCoverage: 39,
          },
          {
            date: "2023-03-20",
            cloudCoverage: 15,
          },
          {
            date: "2023-03-27",
            cloudCoverage: 76,
          },
          {
            date: "2023-04-03",
            cloudCoverage: 52,
          },
          {
            date: "2023-04-10",
            cloudCoverage: 98,
          },
          {
            date: "2023-04-17",
            cloudCoverage: 23,
          },
          {
            date: "2023-04-24",
            cloudCoverage: 67,
          },
        ],
      },
    ],
  },
  render: (args) => html`
    <eox-map
      id="primary"
      style="width: 100%; height: 500px;"
      .zoom=${args.zoom}
      .center=${args.center}
      .layers=${args.layers}
    ></eox-map>
    <eox-timeslider
      .sliderValues=${args.sliderValues}
      .for=${args.for}
    ></eox-timeslider>
  `,
};

export default Primary;
