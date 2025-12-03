import { v4 as uuidv4 } from "uuid";

/**
 *
 * @param {Object} EOxTimeControlTimeline - The timeslider EOxTimeSlider instance
 * @param {boolean} visibility - The visibility of the layer
 * @param {number} i - The index of the layer
 */
export function updateVisibility(EOxTimeControlTimeline, visibility, i) {
  const labelEle =
    EOxTimeControlTimeline.visTimeline.dom.leftContainer.querySelectorAll(
      ".vis-label",
    )[i];
  const dataEle =
    EOxTimeControlTimeline.visTimeline.dom.centerContainer.querySelectorAll(
      ".vis-foreground .vis-group",
    )[i];
  if (visibility) {
    labelEle.classList.remove("vis-label-hide");
    dataEle.classList.remove("vis-group-hide");
  } else {
    labelEle.classList.add("vis-label-hide");
    dataEle.classList.add("vis-group-hide");
  }
}

/**
 * Updates timeline groups and items based on slider values
 * @param {Array} sliderValues - Array of slider configuration objects
 * @param {import("vis-timeline/standalone").DataSet} groups - Timeline groups dataset
 * @param {import("vis-timeline/standalone").DataSet} items - Timeline items dataset
 * @param {Object} EOxTimeControlTimeline - The timeslider EOxTimeSlider instance
 */
export default function updateTimelineItems(
  sliderValues,
  groups,
  items,
  EOxTimeControlTimeline,
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
    slider.layerInstance.un("change:visible", visibilityFunc);
    slider.layerInstance.on("change:visible", visibilityFunc);
    groups.add({
      id: slider.layer,
      content: slider.name,
    });
    for (const value of slider.values) {
      const id = uuidv4(slider.layer + value.date);
      items.add({
        ...value,
        id: id,
        group: slider.layer,
        className: `milestone item-${id}`,
        start: value.date,
        originalDate: value.originalDate,
        type: "point",
        property: slider.property,
      });
    }
  }
}
