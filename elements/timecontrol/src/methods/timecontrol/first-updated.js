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
 * @typedef {import("../../main").EOxTimeControl} EOxTimeControl
 * @typedef {import("../../components/timecontrol-timeline").EOxTimeControlTimeline} EOxTimeControlTimeline
 * @typedef {import("../../types").DateRange} DateRange
 * @typedef {import("../../components/timecontrol-picker").EOxTimeControlPicker} EOxTimeControlPicker
 */

let itemFilterAdded = false;

/**
 * First updated lifecycle method for the timecontrol component.
 * Initializes the timecontrol by finding the associated eox-map element, extracting time control values
 * from map layers, setting up timeline items and groups, and initializing child components.
 *
 * This method:
 * - Finds and associates the eox-map element using the `for` attribute
 * - Extracts time control values from layers with `timeControlValues` and `timeControlProperty` properties
 * - Creates timeline groups and items from the extracted values
 * - Initializes the timeline component if present
 * - Sets up the initial date range and calendar picker
 * - Registers listeners for layer changes and filter events
 *
 * @param {EOxTimeControl} EOxTimeControl - The timecontrol component instance.
 */
export default function firstUpdatedMethod(EOxTimeControl) {
  // Update map reference
  const foundElement =
    typeof EOxTimeControl.for === "object"
      ? EOxTimeControl.for
      : getElement(EOxTimeControl.for);
  if (foundElement) {
    const EoxMap = /** @type {import("@eox/map").EOxMap} */ (foundElement);
    EOxTimeControl.eoxMap = EoxMap;

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
              layer: properties[EOxTimeControl.layerIdKey],
              name: properties[EOxTimeControl.titleKey],
              property: properties.timeControlProperty,
              values: values,
              layerInstance: layer,
            });
            // @ts-expect-error TODO: Fix typing
            layer.on("change:timeControlValues", () => init());
          }
        }
      }

      if (!isequal(EOxTimeControl.sliderValues, sliderValues)) {
        EOxTimeControl.sliderValues = sliderValues;
        if (EOxTimeControl.sliderValues.length) {
          EOxTimeControl.setLoading();
          const groups = new DataSet([]);
          const items = new DataSet([]);

          const EOxTimeControlTimeline = /** @type {EOxTimeControlTimeline} */ (
            EOxTimeControl.querySelector("eox-timecontrol-timeline")
          );

          updateTimelineItems(
            EOxTimeControl.sliderValues,
            groups,
            items,
            EOxTimeControlTimeline,
          );

          EOxTimeControl.groups = groups;
          EOxTimeControl.items = items;
          EOxTimeControl.setLoading();

          if (EOxTimeControlTimeline) {
            EOxTimeControlTimeline.initTimeline();
          }

          const itemValues = EOxTimeControl.items.get();
          if (itemValues && itemValues.length) {
            const utc = dayjs(itemValues[itemValues.length - 1].utc);
            const initDate = /** @type {DateRange} */ ([
              utc.startOf("day").utc().format(),
              utc.endOf("day").utc().format(),
            ]);

            const EOxTimeControlPicker = /** @type {EOxTimeControlPicker} */ (
              EOxTimeControl.querySelector("eox-timecontrol-picker")
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
              EOxTimeControl.dateChange(initDate, EOxTimeControl);

              const EOxItemFilter = /** @type {EOxItemFilter} */ (
                EOxTimeControl.querySelector("eox-itemfilter")
              );
              if (EOxItemFilter) {
                // Convert items to FilterConfig[] before assigning
                EOxItemFilter.items = EOxTimeControl.items
                  .get()
                  .map((item) => ({
                    key: item.id,
                    title: item.name || item.title || String(item.id),
                    ...item,
                  }));
                const filterHandler = (e) => {
                  EOxTimeControl.filter(e, EOxTimeControl);
                };
                if (!itemFilterAdded) {
                  EOxItemFilter.addEventListener("filter", filterHandler);
                  itemFilterAdded = true;
                }
              }
            });
            if (EOxTimeControlPicker) {
              EOxTimeControlPicker.initCalendar({
                selectedDateRange: initDate,
              });
            }
          }
        }
        // initVisTimeline(EOxTimeControl);
      }
      EOxTimeControl.requestUpdate();
    };

    if (flatLayers.length > 0) init();
    EoxMap.map.getLayers().on("add", () => init());
    EoxMap.map.getLayers().on("remove", () => init());
    EoxMap.map.on("change", () => {
      init();
    });
  }
}
