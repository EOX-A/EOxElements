import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { getUTCLocalDateTime } from ".";
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../types").SliderValue} SliderValue
 * @typedef {import("../components/timecontrol-timeline").EOxTimeControlTimeline} EOxTimeControlTimeline
 */

/**
 * Updates the visibility of a timeline group and its associated items.
 * Shows or hides the group label and data elements based on the visibility parameter.
 *
 * @param {EOxTimeControlTimeline} EOxTimeControlTimeline - The timeline component instance.
 * @param {boolean} visibility - Whether the layer should be visible.
 * @param {number} i - The index of the layer/group to update.
 */
export function updateVisibility(EOxTimeControlTimeline, visibility, i) {
  const visTimeline =
    /** @type {import("vis-timeline/standalone").Timeline | any} */ (
      EOxTimeControlTimeline.visTimeline
    );
  const labelEle = /** @type {any} */ (
    visTimeline.dom.leftContainer.querySelectorAll(".vis-label")[i]
  );
  const dataEle = /** @type {any} */ (
    visTimeline.dom.centerContainer.querySelectorAll(
      ".vis-foreground .vis-group",
    )[i]
  );
  if (visibility) {
    labelEle.classList.remove("vis-label-hide");
    dataEle.classList.remove("vis-group-hide");
  } else {
    labelEle.classList.add("vis-label-hide");
    dataEle.classList.add("vis-group-hide");
  }
}

/**
 * Updates timeline groups and items based on slider values extracted from map layers.
 * Creates groups for each layer and items for each time value, setting up visibility change listeners.
 *
 * @param {Array<SliderValue>} sliderValues - Array of slider configuration objects with layer information and time values.
 * @param {import("vis-data/standalone").DataSet} groups - Timeline groups DataSet to populate.
 * @param {import("vis-data/standalone").DataSet} items - Timeline items DataSet to populate.
 * @param {EOxTimeControlTimeline | null} EOxTimeControlTimeline - The timeline component instance, or null if not present.
 * @param {boolean} showUTC - Whether to show UTC dates in the timeline.
 */
export default function updateTimelineItems(
  sliderValues,
  groups,
  items,
  EOxTimeControlTimeline,
  showUTC,
) {
  groups.clear();
  items.clear();

  for (let i = 0; i < sliderValues.length; i++) {
    const slider = sliderValues[i];
    const visibilityFunc = (props) => {
      if (EOxTimeControlTimeline) {
        const visibility = props.target.getVisible();
        updateVisibility(EOxTimeControlTimeline, visibility, i);
      }
    };
    slider.layerInstance?.un("change:visible", visibilityFunc);
    slider.layerInstance?.on("change:visible", visibilityFunc);
    groups.add({
      id: slider.layer,
      content: slider.name,
    });
    for (const value of slider.values) {
      const options = /** @type {import("uuid").Version4Options} */ ({
        data: slider.layer + value.date,
      });
      const id = /** @type {string} */ (uuidv4(options));
      const start = getUTCLocalDateTime(value.date, showUTC, true);
      const end = getUTCLocalDateTime(value.date, showUTC, false);
      items.add({
        ...value,
        id: id,
        group: slider.layer,
        className: `milestone item-${id}`,
        start: start,
        end: end,
        originalDate: value.originalDate,
        type: "point",
        property: slider.property,
      });
    }
  }
}
