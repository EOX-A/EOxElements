import dayjs from "dayjs";
import { indexItems } from "../../helpers";

function filterApplyMethod(config, items, EOxItemFilter) {
  // build filters
  let resultAggregation = [];

  if (config.filterProperties.length) {
    config.filterProperties.forEach((filterProperty) => {
      const filterKeys = {};
      const parseValue = (value) => {
        return filterProperty.format === "date"
          ? dayjs(value).unix()
          : parseInt(value, 10);
      };

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
            filterKeys[item[filterProperty.key]] = undefined;
          }
        }
      });
      const filterKey = filterProperty.key || filterProperty.keys.join("|");
      EOxItemFilter.filters[filterKey] = Object.assign(
        {
          type: filterProperty.type || "multiselect",
          state: Object.assign({}, filterKeys, filterProperty.state),
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
    });
  }

  if (config.matchAllWhenEmpty !== false) {
    // initially render all items
    EOxItemFilter.results = EOxItemFilter.sortResults(items);
    EOxItemFilter.requestUpdate();
  }

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
