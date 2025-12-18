import dayjs from "dayjs";
import groupBy from "lodash.groupby";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { updateChildrenDateRange, getFlatLayersArray } from "./";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../types").DateRange} DateRange
 * @typedef {import("../main").EOxTimeControl} EOxTimeControl
 * @typedef {import("@eox/map").EOxMap} EOxMap
 */

/**
 * Sets the selected date range on the timecontrol component and updates map layers accordingly.
 * This function:
 * - Updates the selectedDateRange property on the timecontrol component
 * - Updates all child components (date, picker, timeline, timelapse, slider) with the new date range
 * - Filters timeline items to find those within the selected date range
 * - Updates WMS layer source parameters with the selected date (if not using external map rendering)
 * - Dispatches a 'select' event with details about selected items, date range, filters, and layer instances
 *
 * @param {DateRange} dateRange - The selected date range as [startDate, endDate] in ISO format.
 * @param {EOxMap | null} eoxMap - The EOx map instance, or null if no map is associated.
 * @param {EOxTimeControl} EOxTimeControl - The timecontrol component instance.
 */
export default function setSelectedDate(dateRange, eoxMap, EOxTimeControl) {
  EOxTimeControl.selectedDateRange = dateRange;
  updateChildrenDateRange(
    EOxTimeControl,
    [
      "eox-timecontrol-date",
      "eox-timecontrol-picker",
      "eox-timecontrol-slider",
      "eox-timecontrol-timeline",
      "eox-timecontrol-timelapse",
    ],
    dateRange,
    EOxTimeControl.items.get(),
  );
  const selectedDateRange = dayjs(dateRange[0]);
  if (Number.isNaN(selectedDateRange.unix())) return;
  const flatLayers = eoxMap
    ? getFlatLayersArray(
        /** @type {import('ol/layer/Base').default[]} */ (
          eoxMap.map.getLayers().getArray()
        ),
      )
    : [];

  let selectedRangeItems = [];
  const dayjsDateRange = [dayjs(dateRange[0]), dayjs(dateRange[1])];

  const [start, end] = dayjsDateRange[0].isBefore(dayjsDateRange[1])
    ? [dayjsDateRange[0], dayjsDateRange[1]]
    : [dayjsDateRange[1], dayjsDateRange[0]];

  selectedRangeItems = EOxTimeControl.items.get().filter((item) => {
    const itemDate = item.utc;
    if (!itemDate) return false;
    const d = dayjs(itemDate);
    return (
      (d.isSame(start, "day") || d.isAfter(start, "day")) &&
      (d.isSame(end, "day") || d.isBefore(end, "day"))
    );
  });

  let instances = {};

  selectedRangeItems.forEach((item) => {
    if (item.group && eoxMap) {
      const layer = flatLayers.find((l) => l.get("id") === item.group);
      // @ts-expect-error Property 'getSource' does not exist on type 'BaseLayer'.
      const source = layer?.getLayers ? null : layer?.getSource();
      instances = {
        ...instances,
        [item.group]: { layer, source: source || null },
      };

      if (!EOxTimeControl.externalMapRendering) {
        source.updateParams({
          [item.property]: item.originalDate,
        });
      }
    }
  });

  const itemsFilter = /** @type {any} */ (
    EOxTimeControl.renderRoot.querySelector("#timecontrol-filter")
  );

  EOxTimeControl.dispatchEvent(
    new CustomEvent("select", {
      detail: {
        selectedItems: groupBy(selectedRangeItems, "group"),
        date: [
          dayjs(dateRange[0]).utc().toDate(),
          dayjs(dateRange[1]).utc().toDate(),
        ],
        filters: itemsFilter?.filters || [],
        instances: instances,
      },
    }),
  );
  EOxTimeControl.requestUpdate();
}
