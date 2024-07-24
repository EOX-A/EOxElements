import dayjs from "dayjs";
import { indexItems } from "../../helpers";
import uniq from "lodash.uniq";
import flatMap from "lodash.flatmap";

/**
 * Applies filters to the provided items based on the given configuration and updates the EOxItemFilter instance.
 *
 * @param {Object} config - The configuration object for the filters.
 * @param {Array<Object>} items - The items to be filtered.
 * @param {Object} EOxItemFilter - The EOxItemFilter component instance.
 * @returns {Array<string>} The aggregated results if config.aggregateResults is specified, otherwise an empty array.
 */
function filterApplyMethod(config, items, EOxItemFilter) {
  // build filters
  let resultAggregation = [];

  if (config.filterProperties.length) {
    config.filterProperties.forEach((filterProperty) => {
      const filterKeys = {};

      // Function to parse values based on their format
      const parseValue = (value) => {
        return filterProperty.format === "date"
          ? dayjs(value).unix()
          : parseInt(value, 10);
      };

      // Iterate over items to build filter keys
      items.forEach((item) => {
        if (filterProperty.type === "range") {
          if (Array.isArray(item[filterProperty.key])) {
            const currentValues = [
              parseValue(item[filterProperty.key][0]),
              parseValue(item[filterProperty.key][1]),
            ];
            filterKeys.min =
              filterKeys.min !== undefined
                ? Math.min(filterKeys.min, currentValues[0])
                : currentValues[0];
            filterKeys.max =
              filterKeys.max !== undefined
                ? Math.max(filterKeys.max, currentValues[1])
                : currentValues[1];
          } else {
            const currentValue = parseValue(item[filterProperty.key]);
            filterKeys.min =
              filterKeys.min !== undefined
                ? Math.min(filterKeys.min, currentValue)
                : currentValue;
            filterKeys.max =
              filterKeys.max !== undefined
                ? Math.max(filterKeys.max, currentValue)
                : currentValue;
          }
          return;
        }
        if (Array.isArray(item[filterProperty.key])) {
          item[filterProperty.key].forEach((prop) => {
            filterKeys[prop] = undefined;
          });
        } else {
          if (filterProperty.type === "spatial") {
            filterKeys.geometry = undefined;
            filterKeys.mode = filterProperty.mode || "intersects";
          } else {
            if (filterProperty.key?.includes(".")) {
              uniq(flatMap(EOxItemFilter.items, filterProperty.key))
                .filter((i) => i)
                .forEach((key) => {
                  filterKeys[key] = undefined;
                });
            } else filterKeys[item[filterProperty.key]] = undefined;
          }
        }
      });

      // Combine filter properties into the filter object
      const filterKey = filterProperty.key || filterProperty.keys.join("|");
      EOxItemFilter.filters[filterKey] = Object.assign(
        {
          type: filterProperty.type || "multiselect",
          dirty: filterProperty.state ? false : undefined,
          key: filterKey,
        },
        filterProperty.type === "range"
          ? {
              min: filterKeys.min,
              max: filterKeys.max,
              format: filterProperty.format,
            }
          : {},
        filterProperty
      );
      EOxItemFilter.filters[filterKey].state = Object.assign(
        {},
        filterKeys,
        filterProperty.state
      );
    });
  }

  // Render all items if matchAllWhenEmpty is true
  if (config.matchAllWhenEmpty !== false) {
    // initially render all items
    EOxItemFilter.results = EOxItemFilter.sortResults(items);
    EOxItemFilter.requestUpdate();
  }

  // Aggregate results if specified in the configuration
  if (config.aggregateResults) {
    resultAggregation = Array.from(
      new Set(
        items.reduce(
          (store, item) => store.concat(item[config.aggregateResults]),
          []
        )
      )
    ).sort((a, b) => a.localeCompare(b));
  }

  // Build Fuse.js search keys
  const fuseKeys = [];
  Object.values(EOxItemFilter.filters).forEach((f) => {
    if (f.type === "text") {
      f.keys.forEach((k) => {
        if (!fuseKeys.includes(k)) {
          fuseKeys.push(k);
        }
      });
    } else if (f.type === "select" || f.type === "multiselect") {
      if (!fuseKeys.includes(f.key)) {
        fuseKeys.push(f.key);
      }
    }
  });
  indexItems(items, Object.assign({ keys: fuseKeys }, config.fuseConfig));

  return resultAggregation;
}

export default filterApplyMethod;
