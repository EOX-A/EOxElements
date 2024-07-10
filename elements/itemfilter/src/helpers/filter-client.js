import Fuse from "fuse.js";
import dayjs from "dayjs";
import { intersects, within, highlight } from "./";

let _fuse;

/**
 * Indexes the given items using Fuse.js with the provided configuration.
 *
 * @param {Array<Object>} items - The items to be indexed.
 * @param {Object} fuseConfig - Configuration object for Fuse.js.
 */
export const indexItems = (items, fuseConfig) => {
  _fuse = new Fuse(items, {
    threshold: 0.4,
    distance: 50,
    includeMatches: true,
    useExtendedSearch: true,
    ...fuseConfig,
  });
};

/**
 * Filters the given items based on the provided filters and configuration.
 *
 * @param {Array<Object>} items - The items to be filtered.
 * @param {Object} filters - The filters to be applied.
 * @param {Object} config - Configuration for filtering behavior.
 * @returns {Promise<Array<Object>>} The filtered items.
 */
export const filter = async (items, filters, config) => {
  // Parse text, select, and multiselect filters
  const parsedFilters = Object.entries(filters)
    .filter(
      ([, filter]) =>
        filter.type === "text" ||
        filter.type === "select" ||
        filter.type === "multiselect"
    )
    .reduce((store, [key, filter]) => {
      const operator = "$or"; // Logical OR operator for filtering
      const holding = [];

      // Function to create a filter property
      const createProperty = (pKey, pVal) => {
        const property = {};
        if (filter.type === "text") {
          property[pKey] = `${pVal}`;
        } else {
          property[key] = `="${pKey}"`;
        }
        holding.push(property); // Add the property to the holding array
      };

      // Add filter properties to holding array
      Object.entries(filter.state)
        .filter(([, v]) => v)
        .forEach(([k, v]) => createProperty(k, v));

      // If there are any properties, add them to the store
      if (holding.length > 0) {
        store.push({
          [operator]: holding,
        });
      }
      return store;
    }, []);
  let results;

  // Check if no parsed filters and matchAllWhenEmpty is not false
  if (!(parsedFilters.length > 0) && config.matchAllWhenEmpty !== false) {
    results = items;
  } else {
    const parameters = {
      $and: [...parsedFilters], // Combine filters using logical AND
    };
    const response = _fuse.search(parameters);
    results = config.enableHighlighting
      ? highlight(response, "highlight", config.titleProperty)
      : response.map((i) => i.item);
  }

  // Handle range filters
  const rangeFilters = Object.entries(filters)
    .filter(([, value]) => value.type === "range")
    .reduce((acc, [key, value]) => {
      acc[key] = {
        min: value.state.min,
        max: value.state.max,
        format: value.format,
      };
      return acc; // Return the accumulated range filters
    }, {});

  if (Object.keys(rangeFilters).length > 0) {
    const filteredResults = [];
    for (let i = 0; i < results.length; i++) {
      const pass = {}; // Object to hold filter pass status for each key
      for (const [key, value] of Object.entries(rangeFilters)) {
        // Function to parse value based on format
        const parseValue = (input) => {
          return value.format === "date" ? dayjs(input).unix() : input;
        };
        if (Object.prototype.hasOwnProperty.call(results[i], key)) {
          if (Array.isArray(results[i][key])) {
            const mode = "overlap"; // Mode for handling array values
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
    results = [...filteredResults]; // Update results with filtered range results
  }

  // Handle spatial filters
  const spatialFilters = Object.entries(filters)
    .filter(([, value]) => value.type === "spatial")
    .reduce((acc, [key, value]) => {
      acc[key] = {
        geometry: value.state.geometry,
        mode: value.state.mode,
      };
      return acc; // Return accumulated spatial filters
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
        filteredResults.push(results[i]); // Add to results if all conditions pass
      }
    }
    results = [...filteredResults]; // Update results with filtered spatial results
  }
  return results;
};
