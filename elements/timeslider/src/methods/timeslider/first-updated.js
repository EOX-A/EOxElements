import { initVisTimeline, getFlatLayersArray } from "../../helpers";
import { getElement } from "@eox/elements-utils";
import dayjs from "dayjs";
import isequal from "lodash.isequal";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * First updated lifecycle method for timeslider
 *
 * @param {Object} EOxTimeSlider - The timeslider EOxTimeSlider instance
 */
export default function firstUpdatedMethod(EOxTimeSlider) {
  // Update map reference
  const foundElement =
    typeof EOxTimeSlider.for === "object"
      ? EOxTimeSlider.for
      : getElement(EOxTimeSlider.for);
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
            Array.isArray(properties.timeControlValues) &&
            properties.timeControlProperty
          ) {
            const values = properties.timeControlValues
              .map((value) => ({
                ...value,
                date: dayjs(value.date).utc().local().format().split("T")[0],
                utc: dayjs(value.date).utc().format(),
                local: dayjs(value.date).utc().local().format(),
                originalDate: value.date,
              }))
              .sort((a, b) => new Date(a.date) - new Date(b.date));
            sliderValues.push({
              layer: properties[EOxTimeSlider.layerIdKey],
              name: properties[EOxTimeSlider.titleKey],
              property: properties.timeControlProperty,
              values: values,
              layerInstance: layer,
            });
            layer.on("change:timeControlValues", () => init());
          }
        }
      }

      if (!isequal(EOxTimeSlider.sliderValues, sliderValues)) {
        EOxTimeSlider.sliderValues = sliderValues;
        initVisTimeline(EOxTimeSlider);
      }
      EOxTimeSlider.requestUpdate();
    };

    if (flatLayers.length > 0) init();
    EoxMap.map.getLayers().on("add", () => init());
    EoxMap.map.getLayers().on("remove", () => init());
    EoxMap.map.on("change", () => {
      init();
    });
  }
}
