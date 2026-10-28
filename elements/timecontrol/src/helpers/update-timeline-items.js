import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import isequal from "lodash.isequal";
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
 * Compares two slider value arrays by their timeline-relevant content
 * (`layer`, `name`, `property`, `values`), ignoring transient layer instance references.
 *
 * @param {Array<SliderValue>} prevSliders - Previous slider values.
 * @param {Array<SliderValue>} nextSliders - Next slider values.
 * @returns {boolean} True if timeline content is identical.
 */
export function hasSameSliderContent(prevSliders = [], nextSliders = []) {
  const project = (sliders) =>
    sliders.map(({ layer, name, property, values }) => ({
      layer,
      name,
      property,
      values,
    }));
  return isequal(project(prevSliders), project(nextSliders));
}

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
      EOxTimeControlTimeline?.visTimeline
    );
  if (!visTimeline?.dom) return;
  const labelEle = /** @type {any} */ (
    visTimeline.dom.leftContainer.querySelectorAll(".vis-label")[i]
  );
  const dataEle = /** @type {any} */ (
    visTimeline.dom.centerContainer.querySelectorAll(
      ".vis-foreground .vis-group",
    )[i]
  );
  if (!labelEle || !dataEle) return;
  if (visibility) {
    labelEle.classList.remove("vis-label-hide");
    dataEle.classList.remove("vis-group-hide");
  } else {
    labelEle.classList.add("vis-label-hide");
    dataEle.classList.add("vis-group-hide");
  }
}

/**
 * Registers OpenLayers `change:visible` listeners for each slider layer
 * and syncs their current visibility to the timeline.
 *
 * @param {Array<SliderValue>} sliderValues - Array of slider configuration objects.
 * @param {EOxTimeControlTimeline | null} EOxTimeControlTimeline - The timeline component instance, or null if not present.
 * @returns {() => void} Cleanup function that removes all registered visibility listeners.
 */
export function setupVisibilityListeners(sliderValues, EOxTimeControlTimeline) {
  const visibilityListenerRemovers = [];
  for (let i = 0; i < sliderValues.length; i++) {
    const slider = sliderValues[i];
    const visibilityFunc = (props) => {
      if (EOxTimeControlTimeline) {
        const visibility = props.target.getVisible();
        updateVisibility(EOxTimeControlTimeline, visibility, i);
      }
    };

    slider.layerInstance?.on("change:visible", visibilityFunc);
    visibilityListenerRemovers.push(() =>
      slider.layerInstance?.un("change:visible", visibilityFunc),
    );
    if (EOxTimeControlTimeline && slider.layerInstance) {
      updateVisibility(
        EOxTimeControlTimeline,
        slider.layerInstance.getVisible(),
        i,
      );
    }
  }
  return () =>
    visibilityListenerRemovers.forEach((removeListener) => removeListener());
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
 * @returns {() => void} Removes visibility listeners when layers or maps change.
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
    groups.add({
      id: slider.layer,
      content: slider.name,
    });
    for (const value of slider.values) {
      const options = /** @type {import("uuid").Version4Options} */ ({
        data: slider.layer + value.date,
      });
      const id = /** @type {string} */ (uuidv4(options));
      const date = showUTC ? value.utc : value.local;
      const start = getUTCLocalDateTime(date, showUTC, true);
      const end = getUTCLocalDateTime(date, showUTC, false);
      items.add({
        ...value,
        id: id,
        itemId: value.id || id,
        layerName: slider.name,
        group: slider.layer,
        className: `milestone item-${id} ${value.originalDate}`,
        start: start,
        end: end,
        originalDate: value.originalDate,
        type: "point",
        property: slider.property,
      });
    }
  }
  return setupVisibilityListeners(sliderValues, EOxTimeControlTimeline);
}
