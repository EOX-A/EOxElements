import dayjs from "dayjs";
import groupBy from "lodash.groupby";
import getFlatLayersArray from "./get-flat-layers-array";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

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
  // const now = Date.now();
  EOxTimeSlider.selectedDate = dayjs(date);
  if (Number.isNaN(EOxTimeSlider.selectedDate.unix())) return;

  try {
    visTimeline.addCustomTime(EOxTimeSlider.selectedDate.toDate(), "selected");
  } catch (_) {
    /* exists */
  }

  const container = EOxTimeSlider.getContainer();

  visTimeline.setCustomTime(EOxTimeSlider.selectedDate.toDate(), "selected");
  visTimeline.setCustomTimeTitle(
    EOxTimeSlider.selectedDate.format("MMM DD' YYYY"),
    "selected",
  );

  const el = container.querySelector('.vis-custom-time[data-id="selected"]');
  if (el) el.classList.add("vis-custom-time-selected");

  const prevSelectionCell = container.querySelectorAll(
    ".vis-item.milestone.vis-point.vis-selected-item",
  );
  prevSelectionCell.forEach((cell) => {
    cell.classList.remove("vis-selected-item");
  });

  const selectedEle = container.querySelector(".vis-custom-time");
  if (selectedEle) {
    const labelEle = /** @type {HTMLElement} */ (selectedEle.children[0]);
    labelEle.classList.add("vis-custom-time-selected-label");
    labelEle.innerText = dayjs(date).format("MMM DD' YYYY");
  }
   /** @type {import("@eox/map/src/types").AnyLayerWithSource[]} */
  const flatLayers = getFlatLayersArray(
      eoxMap.map.getLayers().getArray()
  );
  //@ts-expect-error TODO: Fix typing
  const selectedItems = visTimeline.itemsData.get().filter((item) => {
    return EOxTimeSlider.selectedDate.format().includes(item.date);
  });
  let instances = {};

  selectedItems.forEach((item) => {
    if (item.group && eoxMap) {
      const layer = flatLayers.find((l) => l.get("id") === item.group);
      if (!layer) return;
      if (!("getLayers" in layer) && !("getSource" in layer)) return;
      // Get the source if it is not a group layer
      const source = "getLayers" in layer ? null : layer.getSource();

      const newSelectionCell = container.querySelector(
        `.vis-item.milestone.vis-point.item-${item.id}`,
      );
      newSelectionCell.classList.add("vis-selected-item");

      instances = {
        ...instances,
        [item.group]: { layer, source },
      };

      if (!EOxTimeSlider.externalMapRendering) {
        if (!source ||
           !("updateParams" in source) ||
            typeof source.updateParams !== "function"
          ) return;
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
        date: dayjs(EOxTimeSlider.selectedDate).utc().toDate(),
        filters: itemsFilter?.filters || [],
        instances: instances,
      },
    }),
  );
  EOxTimeSlider.requestUpdate();
}
