import dayjs from "dayjs";
import groupBy from "lodash.groupby";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { updateProps, getFlatLayersArray } from "./";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Sets the selected date on the timeline and updates map layers accordingly
 *
 * @param {string|Date} date - The selected date
 * @param {import("vis-timeline/standalone").Timeline} visTimeline - The vis-timeline instance
 * @param {Object} eoxMap - The EOx map instance
 * @param {Object} EOxTimeSlider - The timeslider EOxTimeSlider component
 */
export default function setSelectedDate(
  date,
  visTimeline,
  eoxMap,
  EOxTimeSlider,
) {
  EOxTimeSlider.selectedDate = date;
  updateProps(EOxTimeSlider, "eox-timecontrol-date", { selectedDate: date });
  const selectedDate = dayjs(date);
  if (Number.isNaN(selectedDate.unix())) return;

  const container = EOxTimeSlider.getContainer();

  // TODO: RE-INIT
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

  const selectedItems = EOxTimeSlider.items.get().filter((item) => {
    return selectedDate.format().includes(item.date);
  });
  let instances = {};

  selectedItems.forEach((item) => {
    if (item.group && eoxMap) {
      const layer = flatLayers.find((l) => l.get("id") === item.group);
      // Get the source if it is not a group layer
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
          [item.property]: dayjs(date).utc().format("YYYY-MM-DD"),
        });
      }
    }
  });

  const itemsFilter = /** @type {any} */ (
    EOxTimeSlider.renderRoot.querySelector("#timeslider-filter")
  );

  EOxTimeSlider.dispatchEvent(
    new CustomEvent("update", {
      detail: {
        selectedItems: groupBy(selectedItems, "group"),
        date: dayjs(selectedDate).utc().toDate(),
        filters: itemsFilter?.filters || [],
        instances: instances,
      },
    }),
  );
  EOxTimeSlider.requestUpdate();
}
