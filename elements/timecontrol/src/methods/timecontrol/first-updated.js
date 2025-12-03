import { getFlatLayersArray, updateTimelineItems } from "../../helpers";
import { DataSet } from "vis-timeline/standalone";
import { getElement } from "@eox/elements-utils";
import dayjs from "dayjs";
import isequal from "lodash.isequal";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { TIME_CONTROL_DATE_FORMAT } from "../../enums";
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
                date: dayjs(value.date).format().split("T")[0],
                utc: dayjs(value.date).utc().format(),
                local: dayjs(value.date).format(),
                originalDate: value.date,
              }))
              // @ts-expect-error TODO: Fix typing
              .sort((a, b) => new Date(a.date) - new Date(b.date));
            sliderValues.push({
              layer: properties[EOxTimeSlider.layerIdKey],
              name: properties[EOxTimeSlider.titleKey],
              property: properties.timeControlProperty,
              values: values,
              layerInstance: layer,
            });
            // @ts-expect-error TODO: Fix typing
            layer.on("change:timeControlValues", () => init());
          }
        }
      }

      if (!isequal(EOxTimeSlider.sliderValues, sliderValues)) {
        EOxTimeSlider.sliderValues = sliderValues;
        if (EOxTimeSlider.sliderValues.length) {
          EOxTimeSlider.setLoading(true);
          const groups = new DataSet([]);
          const items = new DataSet([]);

          const EOxTimeControlTimeline = /** @type {EOxTimeControlTimeline} */ (
            EOxTimeSlider.querySelector("eox-timecontrol-timeline")
          );

          updateTimelineItems(
            EOxTimeSlider.sliderValues,
            groups,
            items,
            EOxTimeControlTimeline,
          );

          EOxTimeSlider.groups = groups;
          EOxTimeSlider.items = items;
          EOxTimeSlider.setLoading(false);

          if (EOxTimeControlTimeline) {
            EOxTimeControlTimeline.initTimeline();
          }

          const itemValues = EOxTimeSlider.items.get();
          if (itemValues && itemValues.length) {
            const utc = dayjs(itemValues[itemValues.length - 1].utc);
            const initDate = [
              utc.startOf("day").utc().format(),
              utc.endOf("day").utc().format(),
            ];

            const EOxTimeControlPicker = /** @type {EOxTimeControlPicker} */ (
              EOxTimeSlider.querySelector("eox-timecontrol-picker")
            );

            setTimeout(() => {
              if (EOxTimeControlTimeline) {
                EOxTimeControlTimeline.visTimeline.setOptions({
                  ...EOxTimeControlTimeline.visTimeline.setOptions,
                  start: dayjs(initDate[0])
                    .subtract(40, "day")
                    .format(TIME_CONTROL_DATE_FORMAT),
                  end: dayjs(initDate[0])
                    .add(40, "day")
                    .format(TIME_CONTROL_DATE_FORMAT),
                });
              }
              EOxTimeSlider.dateChange(initDate, EOxTimeSlider);
            });
            if (EOxTimeControlPicker) {
              EOxTimeControlPicker.initCalendar({
                selectedDateRange: initDate,
              });
            }
          }
        }
        // initVisTimeline(EOxTimeSlider);
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
