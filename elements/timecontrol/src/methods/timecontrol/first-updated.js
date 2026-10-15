import {
  getDateRange,
  getUTCLocalDateTime,
  updateTimelineItems,
} from "../../helpers";
import { DataSet } from "vis-data/standalone";
import resolveMapsMethod from "./resolve-maps";
import { getUid } from "ol/util";
import dayjs from "dayjs";
import isequal from "lodash.isequal";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { updateChildrenProp, getInitDate } from "../../helpers";
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../../main").EOxTimeControl} EOxTimeControl
 * @typedef {import("../../components/timecontrol-timeline").EOxTimeControlTimeline} EOxTimeControlTimeline
 * @typedef {import("../../types").DateRange} DateRange
 * @typedef {import("../../components/timecontrol-picker").EOxTimeControlPicker} EOxTimeControlPicker
 */

/**
 * First updated lifecycle method for the timecontrol component.
 * Initializes the timecontrol by finding the associated maps, extracting time control values
 * from map layers, setting up timeline items and groups, and initializing child components.
 *
 * This method:
 * - Resolves map or comparison selectors/references using the `for` attribute/property
 * - Extracts time control values from layers with `timeControlValues` and `timeControlProperty` properties
 * - Creates timeline groups and items from the extracted values
 * - Initializes the timeline component if present
 * - Sets up the initial date range and calendar picker
 * - Registers listeners for layer changes and filter events
 *
 * @param {EOxTimeControl} EOxTimeControl - The timecontrol component instance.
 * @param {Function} emitUpdateEvent - The function to emit the update event.
 * @returns {() => void} Cleanup that removes map, layer, and child listeners.
 */
export default function firstUpdatedMethod(EOxTimeControl, emitUpdateEvent) {
  const maps = resolveMapsMethod(EOxTimeControl);
  EOxTimeControl.eoxMap = maps[0] || null;
  const eventListenerRemovers = [];
  const onUpdateView = () => emitUpdateEvent(EOxTimeControl);
  let itemFilterAdded = false;
  let disposed = false;
  let removeTimelineVisibilityListeners;
  const layerListeners = new Map();
  const EOxTimeControlTimeline = EOxTimeControl.getTimeControlTimeline();
  const EOxTimeControlPicker = EOxTimeControl.getTimeControlPicker();

  for (const child of [EOxTimeControlTimeline, EOxTimeControlPicker]) {
    if (!child) continue;
    child.addEventListener("update:view", onUpdateView);
    eventListenerRemovers.push(() =>
      child.removeEventListener("update:view", onUpdateView),
    );
  }

  if (!maps.length) EOxTimeControl.externalMapRendering = true;

  if (maps.length || EOxTimeControl.controlValues.length) {
    const getFlatLayers = () =>
      maps.flatMap((map) =>
        map.getFlatLayersArray(
          /** @type {import('ol/layer/Base').default[]} */ (
            map.map.getLayers().getArray()
          ),
        ),
      );
    let usedInitDate = EOxTimeControl.initDate ? false : true;

    let initialized = false;
    const init = () => {
      const flatLayers = getFlatLayers();
      for (const [layer, listener] of layerListeners) {
        if (!flatLayers.includes(layer)) {
          layer.un("change:timeControlValues", listener);
          layerListeners.delete(layer);
        }
      }
      const sliderValues = [];

      if (flatLayers.length || EOxTimeControl.controlValues.length) {
        const layers = EOxTimeControl.controlValues.length
          ? EOxTimeControl.controlValues
          : flatLayers;
        for (const layer of layers) {
          if (typeof layer?.on === "function" && !layerListeners.has(layer)) {
            layer.on("change:timeControlValues", init);
            layerListeners.set(layer, init);
          }
          const properties = EOxTimeControl.controlValues.length
            ? layer
            : layer.getProperties();
          if (
            properties &&
            properties.timeControlValues &&
            Array.isArray(properties.timeControlValues)
          ) {
            const values = properties.timeControlValues
              .map((value) => {
                const date = getUTCLocalDateTime(
                  value.date,
                  EOxTimeControl.showUTC,
                  true,
                );
                return {
                  ...value,
                  date: dayjs(date).format().split("T")[0],
                  utc: dayjs(date).utc().format(),
                  local: dayjs(date).format(),
                  originalDate: value.date,
                };
              })
              // @ts-expect-error TODO: Fix typing
              .sort((a, b) => new Date(a.date) - new Date(b.date));
            sliderValues.push({
              layer: properties[EOxTimeControl.layerIdKey],
              name: properties[EOxTimeControl.titleKey],
              property: properties.timeControlProperty || "dummy",
              values: values,
              layerInstance: EOxTimeControl.controlValues.length
                ? flatLayers.find(
                    (candidate) =>
                      candidate.get(EOxTimeControl.layerIdKey) ===
                      properties[EOxTimeControl.layerIdKey],
                  ) || null
                : layer,
            });
          }
        }
      }

      // Layer IDs are only unique within a map. Keep separate groups and source
      // references when two maps contain a layer with the same ID.
      const ids = sliderValues.map((slider) => slider.layer);
      for (const slider of sliderValues) {
        if (
          ids.filter((id) => id === slider.layer).length > 1 &&
          slider.layerInstance
        ) {
          slider.layer = `${slider.layer}:${getUid(slider.layerInstance)}`;
        }
      }

      if (!initialized || !isequal(EOxTimeControl.sliderValues, sliderValues)) {
        initialized = true;
        removeTimelineVisibilityListeners?.();
        EOxTimeControl.sliderValues = sliderValues;

        updateChildrenProp(EOxTimeControl, ["eox-timecontrol-timeline"], {
          loading: true,
        });
        const groups = new DataSet([]);
        const items = new DataSet([]);

        const EOxTimeControlTimeline = /** @type {EOxTimeControlTimeline} */ (
          EOxTimeControl.querySelector("eox-timecontrol-timeline")
        );

        removeTimelineVisibilityListeners = updateTimelineItems(
          EOxTimeControl.sliderValues,
          groups,
          items,
          EOxTimeControlTimeline,
          EOxTimeControl.showUTC,
        );

        EOxTimeControl.groups = groups;
        EOxTimeControl.items = items;

        if (EOxTimeControlTimeline) {
          if (items.length) {
            EOxTimeControlTimeline.initTimeline();
          } else {
            EOxTimeControlTimeline.visTimeline?.setData({
              items: [],
              groups: [],
            });
          }
        }
        updateChildrenProp(EOxTimeControl, ["eox-timecontrol-timeline"], {
          loading: false,
        });

        const itemValues = EOxTimeControl.items.get();
        const initDateRange = getInitDate(
          EOxTimeControl.initDate,
          itemValues,
          EOxTimeControl.showUTC,
        );
        if (itemValues && itemValues.length) {
          const { dateRange } = getDateRange(
            EOxTimeControl,
            itemValues,
            initDateRange,
          );

          const EOxTimeControlPicker = /** @type {EOxTimeControlPicker} */ (
            EOxTimeControl.querySelector("eox-timecontrol-picker")
          );

          setTimeout(() => {
            if (disposed) return;
            EOxTimeControl.dateChange(dateRange, EOxTimeControl);
            const EOxItemFilter = /** @type {EOxItemFilter} */ (
              EOxTimeControl.querySelector("eox-itemfilter")
            );
            if (EOxItemFilter) {
              // Convert items to FilterConfig[] before assigning
              EOxItemFilter.items = EOxTimeControl.items.get().map((item) => ({
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
                eventListenerRemovers.push(() =>
                  EOxItemFilter.removeEventListener("filter", filterHandler),
                );
              }
            }
          });
          if (EOxTimeControlPicker) {
            EOxTimeControlPicker.initCalendar({
              selectedDateRange: dateRange,
            });
          }
        } else if (!usedInitDate && initDateRange) {
          EOxTimeControl.dateChange(initDateRange, EOxTimeControl);
        }
        if (
          !itemValues.length &&
          EOxTimeControlPicker &&
          EOxTimeControl.selectedDateRange
        ) {
          /** @type {EOxTimeControlPicker} */ (
            EOxTimeControlPicker
          ).initCalendar();
        }
        usedInitDate = true;
      }
      EOxTimeControl.requestUpdate();
    };

    init();
    for (const map of maps) {
      map.addEventListener("layerschanged", init);
      eventListenerRemovers.push(() =>
        map.removeEventListener("layerschanged", init),
      );
    }
  }
  return () => {
    disposed = true;
    eventListenerRemovers.forEach((removeListener) => removeListener());
    removeTimelineVisibilityListeners?.();
    for (const [layer, listener] of layerListeners) {
      layer.un("change:timeControlValues", listener);
    }
  };
}
