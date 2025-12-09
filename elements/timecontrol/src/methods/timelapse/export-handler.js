import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import groupBy from "lodash.groupby";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function exportHandlerMethod(EOxTimelapse) {
  const EOxTimeControl = EOxTimelapse.getEOxTimeControl();
  let selectedRangeItems = [];
  const selectedDateRange = EOxTimeControl.selectedDateRange;
  if (selectedDateRange && selectedDateRange.length) {
    const dateRange = [
      dayjs(selectedDateRange[0]),
      dayjs(selectedDateRange[1]),
    ];
    const [start, end] = dateRange[0].isBefore(dateRange[1])
      ? [dateRange[0], dateRange[1]]
      : [dateRange[1], dateRange[0]];

    const allItems = EOxTimeControl.items.get();

    selectedRangeItems = allItems.filter((item) => {
      const itemDate = item.date || item.start;
      if (!itemDate) return false;
      const d = dayjs(itemDate);
      return (
        (d.isSame(start, "day") || d.isAfter(start, "day")) &&
        (d.isSame(end, "day") || d.isBefore(end, "day"))
      );
    });
  }

  const selectedItemsGroup = groupBy(selectedRangeItems, "group");
  let instances = {};

  Object.keys(selectedItemsGroup).forEach((group) => {
    const layer = EOxTimeControl.eoxMap.map
      .getLayers()
      .getArray()
      .find((l) => l.get("id") === group);

    // Get the source if it is not a group layer
    const source = layer?.getLayers ? null : layer.getSource();

    instances = {
      ...instances,
      [group]: { layer, source },
    };
  });

  const itemsFilter = /** @type {any} */ (
    EOxTimeControl.querySelector("eox-itemfilter")
  );

  return selectedRangeItems
    ? {
        selectedRangeItems: groupBy(selectedRangeItems, "date"),
        range: [
          dayjs(EOxTimeControl.selectedDateRange[0]).utc().toDate(),
          dayjs(EOxTimeControl.selectedDateRange[1]).utc().toDate(),
        ],
        filters: itemsFilter?.filters || [],
        instances,
        eoxMapConfig: {
          layers: EOxTimeControl.eoxMap.layers,
          center: EOxTimeControl.eoxMap.map.getView().getCenter(),
          zoom: EOxTimeControl.eoxMap.map.getView().getZoom(),
        },
      }
    : null;
}
