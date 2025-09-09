/**
 * Default timeline configuration options
 */
export const DEFAULT_TIMELINE_OPTIONS = {
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
  orientation: { axis: "top" },
};

/**
 * Date format configurations for vis-timeline
 */
export const DATE_FORMATS = {
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
