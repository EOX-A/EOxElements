import initVisTimeline from "../../helpers/init-vis-timeline";
import { getElement } from "@eox/elements-utils";

/**
 * First updated lifecycle method for timeslider
 * @param {Object} EOxTimeSlider - The timeslider EOxTimeSlider instance
 */
export default function firstUpdatedMethod(EOxTimeSlider) {
  // Update map reference
  const foundElement = getElement(EOxTimeSlider.for);
  if (foundElement) {
    const EoxMap = /** @type {import("@eox/map").EOxMap} */ (foundElement);
    EOxTimeSlider.eoxMap = EoxMap;

    if (EoxMap.layers?.length > 0) {
      const sliderValues = [];
      EoxMap.layers.forEach((layer) => {
        if (
          layer.properties?.timeControlValues &&
          Array.isArray(layer.properties.timeControlValues)
        ) {
          sliderValues.push({
            layer: layer.properties[EOxTimeSlider.layerIdKey],
            name: layer.properties[EOxTimeSlider.titleKey],
            property: EOxTimeSlider.timeControlKey,
            values: layer.properties.timeControlValues,
          });
        }
      });

      EOxTimeSlider.sliderValues = sliderValues;

      initVisTimeline(EOxTimeSlider);
      EOxTimeSlider.requestUpdate();
    }
  }
}
