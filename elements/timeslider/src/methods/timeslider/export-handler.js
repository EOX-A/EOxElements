import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import groupBy from "lodash.groupby";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function exportHandler(EOxTimeSlider) {
  let selectedRangeItems = [];
  if (
    EOxTimeSlider.selectedRange &&
    EOxTimeSlider.selectedRange.length &&
    EOxTimeSlider.visTimeline
  ) {
    const [start, end] = EOxTimeSlider.selectedRange[0].isBefore(
      EOxTimeSlider.selectedRange[1],
    )
      ? [EOxTimeSlider.selectedRange[0], EOxTimeSlider.selectedRange[1]]
      : [EOxTimeSlider.selectedRange[1], EOxTimeSlider.selectedRange[0]];

    const allItems = EOxTimeSlider.visTimeline.itemsData.get();

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
    const layer = EOxTimeSlider.eoxMap.map
      .getLayers()
      .getArray()
      .find((l) => l.get("id") === group);
    const source = layer?.getSource();
    instances = {
      ...instances,
      [group]: { layer, source },
    };
  });

  const itemsFilter = /** @type {any} */ (
    EOxTimeSlider.renderRoot.querySelector("#timeslider-filter")
  );

  return selectedRangeItems
    ? {
        selectedRangeItems: groupBy(selectedRangeItems, "date"),
        range: EOxTimeSlider.selectedRange,
        filters: itemsFilter?.filters || [],
        instances,
        eoxMapConfig: {
          layers: EOxTimeSlider.eoxMap.layers,
          center: EOxTimeSlider.eoxMap.map.getView().getCenter(),
          zoom: EOxTimeSlider.eoxMap.map.getView().getZoom(),
        },
      }
    : null;
}
