export const TIME_CONTROL_DATE_FORMAT = "YYYY-MM-DD";

function dayKey(date) {
  const d = new Date(date);
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}

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
  // timeAxis: {
  //   scale: "day",
  //   step: 5,
  // },
  showTooltips: true,
  orientation: { axis: "top" },
  cluster: {
    maxItems: 1,
    clusterCriteria: function (first, second) {
      if (first.group !== second.group) return false;
      return dayKey(first.start) === dayKey(second.start);
    },
    showStipes: true,
    fitOnDoubleClick: true,
  },
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
        id: "OSM",
      },
      source: {
        type: "OSM",
      },
    },
    {
      type: "Tile",
      properties: {
        id: "AWS_VIS_WIND_V_10M",
        name: "Wind Visualisation 10M",
        timeControlValues: [
          // Example of multiple time values in a single day
          {
            date: "2022-12-05T06:00:00Z",
            cloudCoverage: 20,
          },
          {
            date: "2022-12-05T12:00:00Z",
            cloudCoverage: 22,
          },
          {
            date: "2022-12-05T18:00:00Z",
            cloudCoverage: 24,
          },
          {
            date: "2022-12-07T09:00:00Z",
            cloudCoverage: 68,
          },
          {
            date: "2022-12-08T00:00:00Z",
            cloudCoverage: 72,
          },
          {
            date: "2022-12-09T00:00:00Z",
            cloudCoverage: 65,
          },
          {
            date: "2022-12-10T00:00:00Z",
            cloudCoverage: 58,
          },
          {
            date: "2022-12-11T00:00:00Z",
            cloudCoverage: 61,
          },
          {
            date: "2022-12-12T00:00:00Z",
            cloudCoverage: 55,
          },
          {
            date: "2022-12-13T00:00:00Z",
            cloudCoverage: 63,
          },
          // Another example: 3 times in one day
          {
            date: "2023-02-01T06:00:00Z",
            cloudCoverage: 33,
          },
          {
            date: "2023-02-01T12:00:00Z",
            cloudCoverage: 35,
          },
          {
            date: "2023-02-01T18:00:00Z",
            cloudCoverage: 34,
          },
          {
            date: "2023-02-02T00:00:00Z",
            cloudCoverage: 28,
          },
          {
            date: "2023-02-03T00:00:00Z",
            cloudCoverage: 31,
          },
          {
            date: "2023-02-04T00:00:00Z",
            cloudCoverage: 36,
          },
          {
            date: "2023-02-05T00:00:00Z",
            cloudCoverage: 42,
          },
          {
            date: "2023-02-06T00:00:00Z",
            cloudCoverage: 38,
          },
          {
            date: "2023-02-07T00:00:00Z",
            cloudCoverage: 34,
          },
          {
            date: "2023-02-08T00:00:00Z",
            cloudCoverage: 40,
          },
          {
            date: "2023-02-09T00:00:00Z",
            cloudCoverage: 45,
          },
          {
            date: "2023-02-10T00:00:00Z",
            cloudCoverage: 39,
          },
          {
            date: "2023-04-01T00:00:00Z",
            cloudCoverage: 52,
          },
          {
            date: "2023-04-02T00:00:00Z",
            cloudCoverage: 48,
          },
          // Multiple times again
          {
            date: "2023-04-03T06:00:00Z",
            cloudCoverage: 55,
          },
          {
            date: "2023-04-03T12:00:00Z",
            cloudCoverage: 56,
          },
          {
            date: "2023-04-03T18:00:00Z",
            cloudCoverage: 53,
          },
          {
            date: "2023-04-04T00:00:00Z",
            cloudCoverage: 61,
          },
          {
            date: "2023-04-05T00:00:00Z",
            cloudCoverage: 58,
          },
          {
            date: "2023-04-06T00:00:00Z",
            cloudCoverage: 64,
          },
          {
            date: "2023-04-07T00:00:00Z",
            cloudCoverage: 59,
          },
          {
            date: "2023-04-08T00:00:00Z",
            cloudCoverage: 67,
          },
          {
            date: "2023-04-09T00:00:00Z",
            cloudCoverage: 71,
          },
          {
            date: "2023-04-10T00:00:00Z",
            cloudCoverage: 68,
          },
          {
            date: "2023-04-11T00:00:00Z",
            cloudCoverage: 73,
          },
          {
            date: "2023-04-12T00:00:00Z",
            cloudCoverage: 69,
          },
          {
            date: "2023-04-13T00:00:00Z",
            cloudCoverage: 75,
          },
          {
            date: "2023-04-14T00:00:00Z",
            cloudCoverage: 72,
          },
          {
            date: "2023-04-15T00:00:00Z",
            cloudCoverage: 66,
          },
          {
            date: "2023-04-16T00:00:00Z",
            cloudCoverage: 70,
          },
          {
            date: "2023-04-17T00:00:00Z",
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
          TIME: "2022-12-05T06:00:00Z",
        },
        crossOrigin: "anonymous",
      },
    },
    {
      type: "Tile",
      properties: {
        id: "AWS_NO2-VISUALISATION",
        name: "NO2 Visualisation",
        timeControlValues: [
          // Example with multiple times per day
          {
            date: "2022-12-05T08:00:00Z",
            cloudCoverage: 20,
          },
          {
            date: "2022-12-05T14:00:00Z",
            cloudCoverage: 19,
          },
          {
            date: "2022-12-05T20:00:00Z",
            cloudCoverage: 21,
          },
          {
            date: "2022-12-06T00:00:00Z",
            cloudCoverage: 18,
          },
          {
            date: "2022-12-07T00:00:00Z",
            cloudCoverage: 22,
          },
          {
            date: "2022-12-08T00:00:00Z",
            cloudCoverage: 25,
          },
          {
            date: "2022-12-09T00:00:00Z",
            cloudCoverage: 19,
          },
          {
            date: "2022-12-10T00:00:00Z",
            cloudCoverage: 16,
          },
          {
            date: "2022-12-11T00:00:00Z",
            cloudCoverage: 21,
          },
          {
            date: "2022-12-12T00:00:00Z",
            cloudCoverage: 15,
          },
          {
            date: "2022-12-19T00:00:00Z",
            cloudCoverage: 35,
          },
          {
            date: "2022-12-26T00:00:00Z",
            cloudCoverage: 8,
          },
          {
            date: "2023-01-16T00:00:00Z",
            cloudCoverage: 42,
          },
          {
            date: "2023-01-17T00:00:00Z",
            cloudCoverage: 38,
          },
          {
            date: "2023-01-18T00:00:00Z",
            cloudCoverage: 45,
          },
          {
            date: "2023-01-19T00:00:00Z",
            cloudCoverage: 41,
          },
          {
            date: "2023-01-20T00:00:00Z",
            cloudCoverage: 39,
          },
          {
            date: "2023-01-21T00:00:00Z",
            cloudCoverage: 43,
          },
          {
            date: "2023-01-22T00:00:00Z",
            cloudCoverage: 37,
          },
          {
            date: "2023-01-23T06:00:00Z",
            cloudCoverage: 28,
          },
          {
            date: "2023-01-23T12:00:00Z",
            cloudCoverage: 30,
          },
          {
            date: "2023-01-23T18:00:00Z",
            cloudCoverage: 29,
          },
          {
            date: "2023-01-24T00:00:00Z",
            cloudCoverage: 31,
          },
          {
            date: "2023-01-25T00:00:00Z",
            cloudCoverage: 26,
          },
          {
            date: "2023-01-26T00:00:00Z",
            cloudCoverage: 29,
          },
          {
            date: "2023-01-27T00:00:00Z",
            cloudCoverage: 24,
          },
          {
            date: "2023-01-28T00:00:00Z",
            cloudCoverage: 32,
          },
          {
            date: "2023-01-29T00:00:00Z",
            cloudCoverage: 27,
          },
          {
            date: "2023-01-30T00:00:00Z",
            cloudCoverage: 12,
          },
          {
            date: "2023-01-31T00:00:00Z",
            cloudCoverage: 14,
          },
          {
            date: "2023-02-01T08:00:00Z",
            cloudCoverage: 11,
          },
          {
            date: "2023-02-01T14:00:00Z",
            cloudCoverage: 15,
          },
          {
            date: "2023-02-01T20:00:00Z",
            cloudCoverage: 12,
          },
          {
            date: "2023-02-02T00:00:00Z",
            cloudCoverage: 16,
          },
          {
            date: "2023-02-03T00:00:00Z",
            cloudCoverage: 13,
          },
          {
            date: "2023-02-04T00:00:00Z",
            cloudCoverage: 18,
          },
          {
            date: "2023-02-05T00:00:00Z",
            cloudCoverage: 15,
          },
          {
            date: "2023-02-06T00:00:00Z",
            cloudCoverage: 55,
          },
          // Multiple times for illustrative purposes
          {
            date: "2023-02-13T06:00:00Z",
            cloudCoverage: 33,
          },
          {
            date: "2023-02-13T12:00:00Z",
            cloudCoverage: 34,
          },
          {
            date: "2023-02-13T18:00:00Z",
            cloudCoverage: 35,
          },
          {
            date: "2023-02-14T00:00:00Z",
            cloudCoverage: 36,
          },
          {
            date: "2023-02-15T00:00:00Z",
            cloudCoverage: 30,
          },
          {
            date: "2023-02-16T00:00:00Z",
            cloudCoverage: 38,
          },
          {
            date: "2023-02-17T00:00:00Z",
            cloudCoverage: 34,
          },
          {
            date: "2023-02-18T00:00:00Z",
            cloudCoverage: 31,
          },
          {
            date: "2023-02-19T00:00:00Z",
            cloudCoverage: 35,
          },
          {
            date: "2023-02-20T00:00:00Z",
            cloudCoverage: 29,
          },
          {
            date: "2023-02-21T00:00:00Z",
            cloudCoverage: 32,
          },
          {
            date: "2023-02-22T00:00:00Z",
            cloudCoverage: 27,
          },
          {
            date: "2023-02-23T00:00:00Z",
            cloudCoverage: 33,
          },
          {
            date: "2023-02-24T00:00:00Z",
            cloudCoverage: 25,
          },
          {
            date: "2023-02-25T00:00:00Z",
            cloudCoverage: 28,
          },
          {
            date: "2023-02-26T00:00:00Z",
            cloudCoverage: 22,
          },
          {
            date: "2023-02-27T00:00:00Z",
            cloudCoverage: 18,
          },
          {
            date: "2023-03-06T00:00:00Z",
            cloudCoverage: 47,
          },
          {
            date: "2023-03-13T00:00:00Z",
            cloudCoverage: 25,
          },
          {
            date: "2023-03-14T00:00:00Z",
            cloudCoverage: 28,
          },
          {
            date: "2023-03-15T00:00:00Z",
            cloudCoverage: 23,
          },
          {
            date: "2023-03-16T00:00:00Z",
            cloudCoverage: 26,
          },
          {
            date: "2023-03-17T00:00:00Z",
            cloudCoverage: 21,
          },
          {
            date: "2023-03-18T00:00:00Z",
            cloudCoverage: 24,
          },
          {
            date: "2023-03-19T00:00:00Z",
            cloudCoverage: 19,
          },
          {
            date: "2023-03-20T00:00:00Z",
            cloudCoverage: 9,
          },
          {
            date: "2023-03-27T00:00:00Z",
            cloudCoverage: 38,
          },
          {
            date: "2023-04-03T00:00:00Z",
            cloudCoverage: 22,
          },
          {
            date: "2023-04-10T00:00:00Z",
            cloudCoverage: 51,
          },
          {
            date: "2023-04-17T00:00:00Z",
            cloudCoverage: 14,
          },
          {
            date: "2023-04-21T00:00:00Z",
            cloudCoverage: 29,
          },
          {
            date: "2023-04-22T00:00:00Z",
            cloudCoverage: 27,
          },
          {
            date: "2023-04-23T00:00:00Z",
            cloudCoverage: 26,
          },
          {
            date: "2023-04-24T00:00:00Z",
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
          TIME: "2022-12-05T08:00:00Z",
        },
        crossOrigin: "anonymous",
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
