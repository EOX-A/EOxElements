import { initVisTimeline, getFlatLayersArray } from "../../helpers";
import { getElement } from "@eox/elements-utils";

/**
 * First updated lifecycle method for timeslider
 *
 * @param {Object} EOxTimeSlider - The timeslider EOxTimeSlider instance
 */
export default function firstUpdatedMethod(EOxTimeSlider) {
  // Update map reference
  const foundElement = getElement(EOxTimeSlider.for);
  if (foundElement) {
    const EoxMap = /** @type {import("@eox/map").EOxMap} */ (foundElement);
    EOxTimeSlider.eoxMap = EoxMap;

    const flatLayers = getFlatLayersArray(
      /** @type {import('ol/layer/Base').default[]} */ (
        EoxMap.map.getLayers().getArray()
      ),
    );

    const init = () => {
      const flatLayers = getFlatLayersArray(
        /** @type {import('ol/layer/Base').default[]} */ (
          EoxMap.map.getLayers().getArray()
        ),
      );

      const sliderValues = [];

      if (flatLayers.length) {
        for (const layer of flatLayers) {
          const properties = layer.getProperties();
          if (
            properties &&
            properties.timeControlValues &&
            Array.isArray(properties.timeControlValues)
          ) {
            sliderValues.push({
              layer: properties[EOxTimeSlider.layerIdKey],
              name: properties[EOxTimeSlider.titleKey],
              property: EOxTimeSlider.timeControlKey,
              values: properties.timeControlValues,
            });
          }
        }
      }

      EOxTimeSlider.sliderValues = sliderValues;

      initVisTimeline(EOxTimeSlider);
      EOxTimeSlider.requestUpdate();
    };

    if (flatLayers.length > 0) init();
    else {
      EoxMap.map.getLayers().on("add", () => init());
      EoxMap.map.getLayers().on("remove", () => init());
    }
  }
}
