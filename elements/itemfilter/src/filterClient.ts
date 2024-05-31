import Fuse from "fuse.js";
import dayjs from "dayjs";
import { intersects, within } from "./filters/spatial";
import { highlight } from "./itemHighlighting";
import { ElementConfig } from "./main";

let _fuse: Fuse<unknown>;

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
  config: ElementConfig,
) => {
  const parsedFilters = Object.entries(filters)
    .filter(
      ([, filter]) =>
        filter.type === "text" ||
        filter.type === "select" ||
        filter.type === "multiselect",
    )
    .reduce((store, [key, filter]) => {
      const operator = "$or";
      const holding: Array<unknown> = [];
      const createProperty = (pKey: string, pVal: unknown) => {
        const property: { [key: string]: unknown } = {};
        if (filter.type === "text") {
          // convert strings to (fuzzy) inputs
          property[pKey] = `${pVal}`;
        } else {
          // convert boolean values to exact inputs
          // using "="
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
    const parameters: object = {
      $and: [...parsedFilters],
    };
    const response = _fuse.search(parameters);
    results = config.enableHighlighting
      ? highlight(response, "highlight", config.titleProperty)
      : response.map((i) => i.item);
  }
  interface RangeFilter {
    min: number;
    max: number;
    format: string;
  }

  const rangeFilters = Object.entries(filters)
    .filter(([, value]) => value.type === "range")
    .reduce((acc: { [key: string]: RangeFilter }, [key, value]) => {
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
      const pass: { [key: string]: boolean } = {};
      for (const [key, value] of Object.entries(rangeFilters)) {
        const parseValue = (input: string) => {
          return value.format === "date" ? dayjs(input).unix() : input;
        };
        if (Object.prototype.hasOwnProperty.call(results[i], key)) {
          // @ts-ignore
          if (Array.isArray(results[i][key])) {
            // TODO - make configurable?
            const mode = "overlap";
            if (mode === "overlap") {
              // must have an overlap with the range to pass
              pass[key] =
                // @ts-ignore
                rangeFilters[key].min <= parseValue(results[i][key][1]) &&
                // @ts-ignore
                parseValue(results[i][key][0]) <= rangeFilters[key].max;
            } else if (mode === "contain") {
              // must contain complete range to pass
              pass[key] =
                // @ts-ignore
                parseValue(results[i][key][0]) >= rangeFilters[key].min &&
                // @ts-ignore
                parseValue(results[i][key][1]) <= rangeFilters[key].max;
            }
          } else if (
            // @ts-ignore
            parseValue(results[i][key]) >= rangeFilters[key].min &&
            // @ts-ignore
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
  const spatialFilters: {
    [key: string]: { geometry?: unknown; mode?: string };
  } = Object.entries(filters)
    .filter(([, value]) => value.type === "spatial")
    .reduce((acc: { [key: string]: unknown }, [key, value]) => {
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
      const pass: { [key: string]: boolean } = {};
      for (const key of Object.keys(spatialFilters)) {
        const mode = spatialFilters[key].mode || "within";
        if (Object.prototype.hasOwnProperty.call(results[i], key)) {
          const test =
            mode === "within"
              ? // @ts-ignore
                within(results[i][key], spatialFilters[key].geometry)
              : // @ts-ignore
                intersects(results[i][key], spatialFilters[key].geometry);
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
