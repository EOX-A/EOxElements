import {
  DEFAULT_TIMELINE_OPTIONS,
  DATE_FORMATS,
} from "../enums/timeline-config";

/**
 * Creates vis-timeline options configuration
 * @param {string} min - Minimum date string
 * @param {string} max - Maximum date string
 * @returns {Object} Timeline options configuration
 */
export default function createTimelineOptions(min, max) {
  return {
    ...DEFAULT_TIMELINE_OPTIONS,
    start: min,
    end: max,
    min: min,
    max: max,
    format: DATE_FORMATS,
  };
}
