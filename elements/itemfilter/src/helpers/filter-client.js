import Fuse from "fuse.js";
import dayjs from "dayjs";
import { intersects, within, highlight } from "./";

let _fuse;

export const indexItems = (items, fuseConfig) => {
  _fuse = new Fuse(items, {
    threshold: 0.4,
    distance: 50,
    includeMatches: true,
    useExtendedSearch: true,
    ...fuseConfig,
  });
};

export const filter = async (items, filters, config) => {
  const parsedFilters = Object.entries(filters)
    .filter(
      ([, filter]) =>
        filter.type === "text" ||
        filter.type === "select" ||
        filter.type === "multiselect"
    )
    .reduce((store, [key, filter]) => {
      const operator = "$or";
      const holding = [];
      const createProperty = (pKey, pVal) => {
        const property = {};
        if (filter.type === "text") {
          property[pKey] = `${pVal}`;
        } else {
          property[key] = `="${pKey}"`;
        }
        holding.push(property);
      };
      Object.entries(filter.state)
        .filter(([, v]) => v)
        .forEach(([k, v]) => createProperty(k, v));
      if (holding.length > 0) {
        store.push({
          [operator]: holding,
        });
      }
      return store;
    }, []);
  let results;
  if (!(parsedFilters.length > 0) && config.matchAllWhenEmpty !== false) {
    results = items;
  } else {
    const parameters = {
      $and: [...parsedFilters],
    };
    const response = _fuse.search(parameters);
    results = config.enableHighlighting
      ? highlight(response, "highlight", config.titleProperty)
      : response.map((i) => i.item);
  }

  const rangeFilters = Object.entries(filters)
    .filter(([, value]) => value.type === "range")
    .reduce((acc, [key, value]) => {
      acc[key] = {
        min: value.state.min,
        max: value.state.max,
        format: value.format,
      };
      return acc;
    }, {});
  if (Object.keys(rangeFilters).length > 0) {
    const filteredResults = [];
    for (let i = 0; i < results.length; i++) {
      const pass = {};
      for (const [key, value] of Object.entries(rangeFilters)) {
        const parseValue = (input) => {
          return value.format === "date" ? dayjs(input).unix() : input;
        };
        if (Object.prototype.hasOwnProperty.call(results[i], key)) {
          if (Array.isArray(results[i][key])) {
            const mode = "overlap";
            if (mode === "overlap") {
              pass[key] =
                rangeFilters[key].min <= parseValue(results[i][key][1]) &&
                parseValue(results[i][key][0]) <= rangeFilters[key].max;
            } else if (mode === "contain") {
              pass[key] =
                parseValue(results[i][key][0]) >= rangeFilters[key].min &&
                parseValue(results[i][key][1]) <= rangeFilters[key].max;
            }
          } else if (
            parseValue(results[i][key]) >= rangeFilters[key].min &&
            parseValue(results[i][key]) <= rangeFilters[key].max
          ) {
            pass[key] = true;
          } else {
            pass[key] = false;
          }
        } else {
          pass[key] = true;
        }
      }
      if (Object.values(pass).every((v) => !!v)) {
        filteredResults.push(results[i]);
      }
    }
    results = [...filteredResults];
  }

  const spatialFilters = Object.entries(filters)
    .filter(([, value]) => value.type === "spatial")
    .reduce((acc, [key, value]) => {
      acc[key] = {
        geometry: value.state.geometry,
        mode: value.state.mode,
      };
      return acc;
    }, {});
  if (
    Object.values(spatialFilters)
      .map((f) => f.geometry)
      .filter((f) => !!f).length > 0
  ) {
    const filteredResults = [];
    for (let i = 0; i < results.length; i++) {
      const pass = {};
      for (const key of Object.keys(spatialFilters)) {
        const mode = spatialFilters[key].mode || "within";
        if (Object.prototype.hasOwnProperty.call(results[i], key)) {
          const test =
            mode === "within"
              ? within(results[i][key], spatialFilters[key].geometry)
              : intersects(results[i][key], spatialFilters[key].geometry);
          if (test) {
            pass[key] = true;
          } else {
            pass[key] = false;
          }
        } else {
          pass[key] = false;
        }
      }
      if (Object.values(pass).every((v) => !!v)) {
        filteredResults.push(results[i]);
      }
    }
    results = [...filteredResults];
  }
  return results;
};
