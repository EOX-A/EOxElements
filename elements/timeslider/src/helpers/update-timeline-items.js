import { DataSet } from "vis-timeline/standalone";
import { v4 as uuidv4 } from "uuid";

/**
 * Updates timeline groups and items based on slider values
 * @param {Array} sliderValues - Array of slider configuration objects
 * @param {DataSet} groups - Timeline groups dataset
 * @param {DataSet} items - Timeline items dataset
 */
export default function updateTimelineItems(sliderValues, groups, items) {
  groups.clear();
  items.clear();

  for (const slider of sliderValues) {
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
        type: "point",
        property: slider.property,
      });
    }
  }
}
