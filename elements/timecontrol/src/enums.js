export const TIME_CONTROL_DATE_FORMAT = "YYYY-MM-DD";

/**
 * Default timeline configuration options
 */
export const DEFAULT_VIS_TIMELINE_OPTIONS = {
  stack: false,
  selectable: true,
  zoomable: true,
  moveable: true,
  margin: { item: 40, axis: 20 },
  showCurrentTime: true,
  timeAxis: {
    scale: "day",
    step: 5,
  },
  showTooltips: true,
  orientation: { axis: "top" },
};

/**
 * Date format configurations for vis-timeline
 */
export const VIS_TIMELINE_DATE_FORMATS = {
  minorLabels: {
    millisecond: "SSS",
    second: "s",
    minute: "HH:mm",
    hour: "HH:mm",
    weekday: "ddd D",
    day: "DD",
    week: "w",
    month: "MMM",
    year: "YYYY",
  },
  majorLabels: {
    millisecond: "HH:mm:ss",
    second: "D MMMM HH:mm",
    minute: "ddd D MMMM",
    hour: "ddd D MMMM",
    weekday: "MMM YYYY",
    day: "MMM YYYY",
    week: "MMM YYYY",
    month: "YYYY",
    year: "",
  },
};

export const STORY_ARGS = {
  center: [1000000, 6000000],
  zoom: 5,
  layers: [
    {
      type: "Tile",
      properties: {
        id: "AWS_NO2-VISUALISATION",
        name: "NO2 Visualisation",
        timeControlValues: [
          {
            date: "2022-12-05",
            cloudCoverage: 20,
          },
          {
            date: "2022-12-06",
            cloudCoverage: 18,
          },
          {
            date: "2022-12-07",
            cloudCoverage: 22,
          },
          {
            date: "2022-12-08",
            cloudCoverage: 25,
          },
          {
            date: "2022-12-09",
            cloudCoverage: 19,
          },
          {
            date: "2022-12-10",
            cloudCoverage: 16,
          },
          {
            date: "2022-12-11",
            cloudCoverage: 21,
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
            date: "2023-01-17",
            cloudCoverage: 38,
          },
          {
            date: "2023-01-18",
            cloudCoverage: 45,
          },
          {
            date: "2023-01-19",
            cloudCoverage: 41,
          },
          {
            date: "2023-01-20",
            cloudCoverage: 39,
          },
          {
            date: "2023-01-21",
            cloudCoverage: 43,
          },
          {
            date: "2023-01-22",
            cloudCoverage: 37,
          },
          {
            date: "2023-01-23",
            cloudCoverage: 28,
          },
          {
            date: "2023-01-24",
            cloudCoverage: 31,
          },
          {
            date: "2023-01-25",
            cloudCoverage: 26,
          },
          {
            date: "2023-01-26",
            cloudCoverage: 29,
          },
          {
            date: "2023-01-27",
            cloudCoverage: 24,
          },
          {
            date: "2023-01-28",
            cloudCoverage: 32,
          },
          {
            date: "2023-01-29",
            cloudCoverage: 27,
          },
          {
            date: "2023-01-30",
            cloudCoverage: 12,
          },
          {
            date: "2023-01-31",
            cloudCoverage: 14,
          },
          {
            date: "2023-02-01",
            cloudCoverage: 11,
          },
          {
            date: "2023-02-02",
            cloudCoverage: 16,
          },
          {
            date: "2023-02-03",
            cloudCoverage: 13,
          },
          {
            date: "2023-02-04",
            cloudCoverage: 18,
          },
          {
            date: "2023-02-05",
            cloudCoverage: 15,
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
            date: "2023-02-14",
            cloudCoverage: 36,
          },
          {
            date: "2023-02-15",
            cloudCoverage: 30,
          },
          {
            date: "2023-02-16",
            cloudCoverage: 38,
          },
          {
            date: "2023-02-17",
            cloudCoverage: 34,
          },
          {
            date: "2023-02-18",
            cloudCoverage: 31,
          },
          {
            date: "2023-02-19",
            cloudCoverage: 35,
          },
          {
            date: "2023-02-20",
            cloudCoverage: 29,
          },
          {
            date: "2023-02-21",
            cloudCoverage: 32,
          },
          {
            date: "2023-02-22",
            cloudCoverage: 27,
          },
          {
            date: "2023-02-23",
            cloudCoverage: 33,
          },
          {
            date: "2023-02-24",
            cloudCoverage: 25,
          },
          {
            date: "2023-02-25",
            cloudCoverage: 28,
          },
          {
            date: "2023-02-26",
            cloudCoverage: 22,
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
            date: "2023-03-14",
            cloudCoverage: 28,
          },
          {
            date: "2023-03-15",
            cloudCoverage: 23,
          },
          {
            date: "2023-03-16",
            cloudCoverage: 26,
          },
          {
            date: "2023-03-17",
            cloudCoverage: 21,
          },
          {
            date: "2023-03-18",
            cloudCoverage: 24,
          },
          {
            date: "2023-03-19",
            cloudCoverage: 19,
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
        timeControlProperty: "TIME",
      },
      source: {
        type: "TileWMS",
        url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        params: {
          LAYERS: "AWS_NO2-VISUALISATION",
          TIME: "2022-12-05",
        },
        crossOrigin: "anonymous",
      },
    },
    {
      type: "Tile",
      properties: {
        id: "AWS_VIS_WIND_V_10M",
        name: "Wind Visualisation 10M",
        timeControlValues: [
          {
            date: "2022-12-05",
            cloudCoverage: 20,
          },
          {
            date: "2022-12-07",
            cloudCoverage: 68,
          },
          {
            date: "2022-12-08",
            cloudCoverage: 72,
          },
          {
            date: "2022-12-09",
            cloudCoverage: 65,
          },
          {
            date: "2022-12-10",
            cloudCoverage: 58,
          },
          {
            date: "2022-12-11",
            cloudCoverage: 61,
          },
          {
            date: "2022-12-12",
            cloudCoverage: 55,
          },
          {
            date: "2022-12-13",
            cloudCoverage: 63,
          },
          // Second continuous range: 10 days starting from 2023-02-01
          {
            date: "2023-02-01",
            cloudCoverage: 33,
          },
          {
            date: "2023-02-02",
            cloudCoverage: 28,
          },
          {
            date: "2023-02-03",
            cloudCoverage: 31,
          },
          {
            date: "2023-02-04",
            cloudCoverage: 36,
          },
          {
            date: "2023-02-05",
            cloudCoverage: 42,
          },
          {
            date: "2023-02-06",
            cloudCoverage: 38,
          },
          {
            date: "2023-02-07",
            cloudCoverage: 34,
          },
          {
            date: "2023-02-08",
            cloudCoverage: 40,
          },
          {
            date: "2023-02-09",
            cloudCoverage: 45,
          },
          {
            date: "2023-02-10",
            cloudCoverage: 39,
          },
          // Third continuous range: 17 days starting from 2023-04-01
          {
            date: "2023-04-01",
            cloudCoverage: 52,
          },
          {
            date: "2023-04-02",
            cloudCoverage: 48,
          },
          {
            date: "2023-04-03",
            cloudCoverage: 55,
          },
          {
            date: "2023-04-04",
            cloudCoverage: 61,
          },
          {
            date: "2023-04-05",
            cloudCoverage: 58,
          },
          {
            date: "2023-04-06",
            cloudCoverage: 64,
          },
          {
            date: "2023-04-07",
            cloudCoverage: 59,
          },
          {
            date: "2023-04-08",
            cloudCoverage: 67,
          },
          {
            date: "2023-04-09",
            cloudCoverage: 71,
          },
          {
            date: "2023-04-10",
            cloudCoverage: 68,
          },
          {
            date: "2023-04-11",
            cloudCoverage: 73,
          },
          {
            date: "2023-04-12",
            cloudCoverage: 69,
          },
          {
            date: "2023-04-13",
            cloudCoverage: 75,
          },
          {
            date: "2023-04-14",
            cloudCoverage: 72,
          },
          {
            date: "2023-04-15",
            cloudCoverage: 66,
          },
          {
            date: "2023-04-16",
            cloudCoverage: 70,
          },
          {
            date: "2023-04-17",
            cloudCoverage: 74,
          },
        ],
        timeControlProperty: "TIME",
      },
      source: {
        type: "TileWMS",
        url: "https://services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54",
        params: {
          LAYERS: "AWS_VIS_WIND_V_10M",
          TIME: "2022-12-05",
        },
        crossOrigin: "anonymous",
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
  layerIdKey: "id",
  titleKey: "name",
  filters: [
    {
      key: "cloudCoverage",
      title: "Cloud Coverage",
      type: "range",
      expanded: true,
      min: 0,
      max: 100,
      step: 5,
      state: {
        min: 0,
        max: 40,
      },
    },
  ],
  externalMapRendering: false,
  format: TIME_CONTROL_DATE_FORMAT,
};
