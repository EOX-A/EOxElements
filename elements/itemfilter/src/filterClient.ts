import Fuse from "fuse.js";
import dayjs from "dayjs";
import { intersects, within } from "./spatial";
import { highlight } from "./itemHighlighting";
import { ElementConfig } from "./main";

let _fuse: Fuse<any>;

export const indexItems = (items: Array<object>, fuseConfig: object) => {
  _fuse = new Fuse(items, {
    // minMatchCharLength: 3,
    // location: 0,
    threshold: 0.4,
    distance: 50,
    includeMatches: true,
    useExtendedSearch: true,
    ...fuseConfig,
  });
};

export const filter = async (
  items: Array<object>,
  filters: object,
  config: ElementConfig
) => {
  const parsedFilters = Object.entries(filters)
    .filter(
      ([_, filter]) =>
        filter.type === "text" ||
        filter.type === "select" ||
        filter.type === "multiselect"
    )
    .reduce((store, [key, filter]) => {
      const operator = "$or";
      const holding: Array<any> = [];
      // @ts-ignore
      const createProperty = (pKey, pVal) => {
        const property = {};
        if (filter.type === "text") {
          // convert strings to (fuzzy) inputs
          // @ts-ignore
          property[pKey] = `${pVal}`;
        } else {
          // convert boolean values to exact inputs
          // using "="
          // @ts-ignore
          property[key] = `="${pKey}"`;
        }
        holding.push(property);
      };
      Object.entries(filter.state)
        .filter(([_, v]) => v)
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
    const parameters: Object = {
      $and: [...parsedFilters],
    };
    const response = _fuse.search(parameters);
    results = config.enableHighlighting
      ? highlight(response, "highlight", config.titleProperty)
      : response.map((i) => i.item);
  }
  const rangeFilters = Object.entries(filters)
    .filter(([_, value]) => value.type === "range")
    .reduce((acc, [key, value]) => {
      // @ts-ignore
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
      for (let [key, value] of Object.entries(rangeFilters)) {
        const parseValue = (input: string) => {
          // @ts-ignore
          return value.format === "date" ? dayjs(input).unix() : input;
        };
        if (results[i].hasOwnProperty(key)) {
          if (Array.isArray(results[i][key])) {
            const mode = "overlap";
            // @ts-ignore
            if (mode === "contain") {
              // must contain complete range to pass
              // @ts-ignore
              pass[key] =
                // @ts-ignore
                parseValue(results[i][key][0]) >= rangeFilters[key].min &&
                // @ts-ignore
                parseValue(results[i][key][1]) <= rangeFilters[key].max;
            } else if (mode === "overlap") {
              // must have an overlap with the range to pass
              // @ts-ignore
              pass[key] =
                // @ts-ignore
                rangeFilters[key].min <= parseValue(results[i][key][1]) &&
                // @ts-ignore
                parseValue(results[i][key][0]) <= rangeFilters[key].max;
            }
          } else if (
            // @ts-ignore
            parseValue(results[i][key]) >= rangeFilters[key].min &&
            // @ts-ignore
            parseValue(results[i][key]) <= rangeFilters[key].max
          ) {
            // @ts-ignore
            pass[key] = true;
          } else {
            // @ts-ignore
            pass[key] = false;
          }
        } else {
          // @ts-ignore
          pass[key] = true;
        }
      }
      if (Object.values(pass).every((v) => !!v)) {
        filteredResults.push(results[i]);
      }
    }
    results = [...filteredResults];
  }
  const spatialFilters: { geometry?: any } = Object.entries(filters)
    .filter(([_, value]) => value.type === "spatial")
    .reduce((acc, [key, value]) => {
      // @ts-ignore
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
      for (let key of Object.keys(spatialFilters)) {
        // @ts-ignore
        const mode = spatialFilters[key].mode || "within";
        if (results[i].hasOwnProperty(key)) {
          const test =
            mode === "within"
              ? within(
                  results[i][key],
                  // @ts-ignore
                  spatialFilters[key].geometry
                )
              : intersects(
                  results[i][key],
                  // @ts-ignore
                  spatialFilters[key].geometry
                );
          if (test) {
            // @ts-ignore
            pass[key] = true;
          } else {
            // @ts-ignore
            pass[key] = false;
          }
        } else {
          // @ts-ignore
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
