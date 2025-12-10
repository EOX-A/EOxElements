import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import groupBy from "lodash.groupby";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../../types").ExportHandlerDetail} ExportHandlerDetail
 * @typedef {import("@eox/itemfilter").EOxItemFilter} EOxItemFilter
 */

/**
 * Utility function to normalize a date range so [start, end] are in chronological order.
 * @param {any} selectedDateRange
 * @returns {[import("dayjs").Dayjs, import("dayjs").Dayjs]}
 */
function getNormalizedRange(selectedDateRange) {
  const dateA = dayjs(selectedDateRange[0]);
  const dateB = dayjs(selectedDateRange[1]);
  return dateA.isBefore(dateB) ? [dateA, dateB] : [dateB, dateA];
}

/**
 * Utility to get datetime or fallback to null.
 * @param {any} item
 * @returns {string|null}
 */
function getItemDate(item) {
  return item.date || item.start || null;
}

/**
 * Utility to get layer and its source (or null if a group layer).
 * @param {any} map - OpenLayers map
 * @param {string} groupId - Layer group ID
 * @returns {{ layer: any, source: any }}
 */
function getLayerInstanceAndSource(map, groupId) {
  const layersArray = map.getLayers().getArray();
  const layer = layersArray.find((l) => l.get("id") === groupId);
  // If layer has getLayers (layer group), do not call getSource
  const source =
    layer && typeof layer.getLayers === "function"
      ? null
      : layer?.getSource?.();
  return { layer, source };
}

/**
 * Handles the export process by collecting selected timeline items within the current date range
 * and preparing export configuration data including map layers, filters, and instances.
 *
 * @param {import("../../components/timecontrol-timelapse").EOxTimeControlTimelapse} EOxTimelapse - The timelapse component instance.
 * @returns {ExportHandlerDetail | null} Export handler detail object containing selected range items, filters, instances, and map configuration, or null if no date range is selected.
 */
export default function exportHandlerMethod(EOxTimelapse) {
  const EOxTimeControl = EOxTimelapse.getEOxTimeControl();
  const selectedDateRange = EOxTimeControl.selectedDateRange;
  if (!selectedDateRange || selectedDateRange.length < 2) {
    return null;
  }

  const [start, end] = getNormalizedRange(selectedDateRange);

  const allItems = EOxTimeControl.items.get();
  const selectedRangeItems = allItems.filter((item) => {
    const itemDateRaw = getItemDate(item);
    if (!itemDateRaw) return false;
    const d = dayjs(itemDateRaw);
    return (
      (d.isSame(start, "day") || d.isAfter(start, "day")) &&
      (d.isSame(end, "day") || d.isBefore(end, "day"))
    );
  });

  const selectedItemsGroup = groupBy(selectedRangeItems, "group");
  /** @type {Record<string, { layer: any, source: any }>} */
  const instances = Object.keys(selectedItemsGroup).reduce((acc, groupId) => {
    const { layer, source } = getLayerInstanceAndSource(
      EOxTimeControl.eoxMap.map,
      groupId,
    );
    return {
      ...acc,
      [groupId]: { layer, source },
    };
  }, {});

  /** @type {EOxItemFilter | null} */
  const itemsFilter = EOxTimeControl.querySelector("eox-itemfilter");

  // Conform strictly to the ExportHandlerDetail type (removing "range" prop),
  // only include known properties.

  return selectedRangeItems.length > 0
    ? {
        selectedRangeItems: groupBy(selectedRangeItems, "date"),
        filters: itemsFilter?.filters ?? [],
        instances,
        eoxMapConfig: {
          layers: EOxTimeControl.eoxMap.layers,
          center: EOxTimeControl.eoxMap.map.getView().getCenter(),
          zoom: EOxTimeControl.eoxMap.map.getView().getZoom(),
        },
      }
    : null;
}
