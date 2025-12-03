import dayjs from "dayjs";
import groupBy from "lodash.groupby";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { updateChildrenDateRange, getFlatLayersArray } from "./";
import { TIME_CONTROL_DATE_FORMAT } from "../enums.js";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Sets the selected date on the timeline and updates map layers accordingly
 *
 * @param {Array<string>} dateRange - The selected date range
 * @param {Object} eoxMap - The EOx map instance
 * @param {Object} EOxTimeSlider - The timeslider EOxTimeSlider component
 */
export default function setSelectedDate(dateRange, eoxMap, EOxTimeSlider) {
  EOxTimeSlider.selectedDateRange = dateRange;
  updateChildrenDateRange(
    EOxTimeSlider,
    [
      "eox-timecontrol-date",
      "eox-timecontrol-picker",
      "eox-timecontrol-timeline",
    ],
    dateRange,
  );
  const selectedDateRange = dayjs(dateRange[0]);
  if (Number.isNaN(selectedDateRange.unix())) return;

  // TODO: RE-INIT
  // const container = EOxTimeSlider.getContainer();
  // try {
  //   visTimeline.addCustomTime(selectedDate.toDate(), "selected");
  // } catch (_) {
  //   /* exists */
  // }

  // visTimeline.setCustomTime(selectedDate.toDate(), "selected");
  // visTimeline.setCustomTimeTitle(
  //   selectedDate.format("MMM DD' YYYY"),
  //   "selected",
  // );

  // const el = container.querySelector('.vis-custom-time[data-id="selected"]');
  // if (el) el.classList.add("vis-custom-time-selected");

  // const prevSelectionCell = container.querySelectorAll(
  //   ".vis-item.milestone.vis-point.vis-selected-item",
  // );
  // prevSelectionCell.forEach((cell) => {
  //   cell.classList.remove("vis-selected-item");
  // });

  // const selectedEle = container.querySelector(".vis-custom-time");
  // if (selectedEle) {
  //   const labelEle = /** @type {HTMLElement} */ (selectedEle.children[0]);
  //   labelEle.classList.add("vis-custom-time-selected-label");
  //   labelEle.innerText = dayjs(date).format("MMM DD' YYYY");
  // }

  const flatLayers = getFlatLayersArray(
    /** @type {import('ol/layer/Base').default[]} */ (
      eoxMap.map.getLayers().getArray()
    ),
  );

  let selectedRangeItems = [];
  const dayjsDateRange = [dayjs(dateRange[0]), dayjs(dateRange[1])];

  const [start, end] = dayjsDateRange[0].isBefore(dayjsDateRange[1])
    ? [dayjsDateRange[0], dayjsDateRange[1]]
    : [dayjsDateRange[1], dayjsDateRange[0]];

  selectedRangeItems = EOxTimeSlider.items.get().filter((item) => {
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
      // Get the source if it is not a group layer
      // @ts-expect-error Property 'getSource' does not exist on type 'BaseLayer'.
      const source = layer?.getLayers ? null : layer.getSource();

      // TODO: RE-INIT
      // const newSelectionCell = container.querySelector(
      //   `.vis-item.milestone.vis-point.item-${item.id}`,
      // );
      // newSelectionCell.classList.add("vis-selected-item");

      instances = {
        ...instances,
        [item.group]: { layer, source },
      };

      if (!EOxTimeSlider.externalMapRendering) {
        source.updateParams({
          [item.property]: dayjs(dateRange[0])
            .utc()
            .format(TIME_CONTROL_DATE_FORMAT),
        });
      }
    }
  });

  const itemsFilter = /** @type {any} */ (
    EOxTimeSlider.renderRoot.querySelector("#timeslider-filter")
  );

  EOxTimeSlider.dispatchEvent(
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
  EOxTimeSlider.requestUpdate();
}
