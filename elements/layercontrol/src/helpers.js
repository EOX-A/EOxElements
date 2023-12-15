import Sortable from "sortablejs";
import WMSCapabilities from "wms-capabilities";

/**
 *
 * @param {HTMLElement} element
 * @param {import("ol").Collection<import("ol/layer").Layer | import("ol/layer").Group>} collection
 * @param {string} idProperty
 * @param {import("lit").LitElement} that
 */
export const createSortable = (element, collection, idProperty, that) => {
  /**
   * @type {any[]}
   */
  let childNodes = [];
  /**
   * @type {HTMLElement}
   */
  let related = null;
  /** @type HTMLElement & {_sortable: import("sortablejs")}*/ (
    element
  )._sortable = Sortable.create(element, {
    handle: ".drag-handle",
    filter: ".drag-handle.disabled",
    swapThreshold: 0.5,
    animation: 150,
    easing: "cubic-bezier(1, 0, 0, 1)",
    onStart: (e) => {
      // https://github.com/SortableJS/Sortable/issues/546
      const node = e.item;
      // Remember the list of child nodes when drag started.
      childNodes = Array.prototype.slice.call(node.parentNode.childNodes);
      // Filter out the 'sortable-fallback' element used on mobile/old browsers.
      childNodes = childNodes.filter(
        (node) =>
          node.nodeType != Node.ELEMENT_NODE ||
          !node.classList.contains("sortable-fallback")
      );
    },
    onMove(e) {
      related = e.related;
    },
    onEnd: (e) => {
      // Undo DOM changes by re-adding all children in their original order.
      const node = e.item;
      const parentNode = node.parentNode;
      for (const childNode of childNodes) {
        parentNode.appendChild(childNode);
      }
      if (e.oldIndex == e.newIndex) return;
      // Then move the element using your own logic.
      // automatically dispatches "sort" event
      const layers = collection.getArray();
      const layer = layers.find(
        (l) =>
          l.get(idProperty) ===
          /** @type Element & {layer: import("ol/layer").Layer} */ (
            e.item.querySelector("eox-layercontrol-layer")
          ).layer.get(idProperty)
      );
      const relatedLayer = layers.find(
        (layer) => layer.get(idProperty) == related.dataset.layer
      );
      let draggedIndex;
      let dropIndex;
      for (draggedIndex = 0; draggedIndex < layers.length; draggedIndex++) {
        if (layers[draggedIndex] == layer) {
          collection.removeAt(draggedIndex);
          break;
        }
      }
      for (dropIndex = 0; dropIndex < layers.length; dropIndex++) {
        if (layers[dropIndex] === relatedLayer) {
          if (draggedIndex > dropIndex) collection.insertAt(dropIndex, layer);
          else collection.insertAt(dropIndex + 1, layer);
          break;
        }
      }
      that.requestUpdate();
    },
  });
};

/**
 * Initially check if all layers have an id and title,
 * fill in some backup in case they haven't
 *
 * @param {import("ol").Collection<import("ol/layer").Layer | import("ol/layer").Group>} collection
 * @param {string} idProperty
 * @param {string} titleProperty
 */
//
export function checkProperties(collection, idProperty, titleProperty) {
  const layerArray = collection.getArray();
  layerArray.forEach((layer) => {
    if (!layer.get(idProperty)) {
      //@ts-ignore
      layer.set(idProperty, layer.ol_uid);
    }
    if (!layer.get(titleProperty)) {
      //@ts-ignore
      layer.set(titleProperty, `layer ${layer.ol_uid}`);
    }
  });
}
/**
 * Filter all map layers by property
 *
 * @param {Array<import("ol/layer").Layer>} layers
 * @param {string} key
 * @param {any} value
 * @returns {Array<import("ol/layer").Layer>} found layers
 */
export const filterLayers = (layers, key, value) => {
  /**
   * @type {any[]}
   */
  let found = [];
  /**
   *
   * @param {any[]} searchLayers
   * @param {string} key
   * @param {any} value
   */
  const search = (searchLayers, key, value) => {
    found = [...found, ...searchLayers.filter((l) => l.get(key) === value)];
    const groups = searchLayers.filter((l) => l.getLayers);
    if (groups.length > 0) {
      groups.forEach((group) =>
        search(group.getLayers().getArray(), key, value)
      );
    }
    return found;
  };
  search(layers, key, value);
  return found;
};

/**
 * Trying to guess the layer type from certain properties.
 * The proper way would be to use instanceOf, but for this
 * we'd need OL as a dependency, which we're trying to avoid
 * @param {import("ol/layer").Layer | import("ol/layer").Group} layer
 * @param {import("ol").Map} map
 */
export const getLayerType = (layer, map) => {
  if (!layer || !map) {
    return undefined;
  }
  return /** @type {import("ol/layer").Group} */ (layer).getLayers
    ? "group"
    : map
        .getInteractions()
        .getArray()
        // @ts-ignore
        .filter((i) => i.freehand_ !== undefined)
        // @ts-ignore
        .map((i) => i.source_)
        // @ts-ignore
        ?.ol_uid?.includes(
          // @ts-ignore
          layer.getSource ? layer.getSource()?.ol_uid : undefined
        )
    ? "draw"
    : // @ts-ignore
    layer.declutter_ !== undefined
    ? "vector"
    : "raster";
};

/**
 * Returns whether zoom layer state be enabled or not for a particular layer
 * @param {import("ol/layer").Layer | import("ol/layer").Group} layer
 * @param {Boolean} showLayerZoomState
 * @returns {Boolean} state
 */
export const isLayerZoomStateRequired = (layer, showLayerZoomState) => {
  const minZoom = layer.get("minZoom");
  const maxZoom = layer.get("maxZoom");

  if (showLayerZoomState && (minZoom !== -Infinity || maxZoom !== Infinity))
    return true;
  else return false;
};

/**
 * Returns layer visibility state based on minZoom and maxZoon
 * with respective of current zoom level
 * @param {import("ol/layer").Layer | import("ol/layer").Group} layer
 * @param {import("ol").Map} map
 * @param {Boolean} showLayerZoomState
 * @returns {Boolean} state
 */
export const isLayerVisibleBasedOnZoomState = (
  layer,
  map,
  showLayerZoomState
) => {
  if (!layer || !map) return false;

  if (!isLayerZoomStateRequired(layer, showLayerZoomState)) return true;

  const minZoom = layer.get("minZoom");
  const maxZoom = layer.get("maxZoom");
  const zoom = map.getView().getZoom();

  return zoom > minZoom && zoom < maxZoom ? true : false;
};

/**
 * Update layer's URL using input values
 * @param {String} url
 * @param {Object} values
 * @param {import("ol/layer").Layer | false} layer
 */
export function updateUrl(url, values) {
  const searchParams = new URL(url).searchParams;

  Object.entries(values).forEach(([key, value]) => {
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      Object.keys(value).forEach((k) => {
        searchParams.set(k, value[k]);
      });
    } else searchParams.set(key, value);
  });

  const urlWithPath = url.split("?")[0];
  const searchParamsStr = searchParams.toString();
  const newUrl = `${urlWithPath}?${searchParamsStr}`;

  return newUrl;
}

/**
 * Recursive function to retrieve startVal inside schema
 *
 * @param {{[key: string]: any}} schema
 * @param {{[key: string]: any}} queryParams
 */
export function getNestedStartVals(schema, queryParams) {
  let startVals = {};

  for (const key in schema) {
    const type = schema[key].type;
    if (type && type !== "object") {
      startVals[key] =
        type === "number" ? Number(queryParams[key]) : queryParams[key];
    } else if (typeof schema[key] === "object" && schema[key]?.properties) {
      const nestedStartVals = getNestedStartVals(
        schema[key].properties,
        queryParams
      );
      if (Object.keys(nestedStartVals).length > 0) {
        startVals[key] = nestedStartVals;
      }
    }
  }
  return startVals;
}

/**
 * Get startVals from Query Params
 *
 * @param {import("ol/layer").Layer} layer
 * @param {{[key: string]: any}} layerConfig
 */
export function getStartVals(layer, layerConfig) {
  if (!layer.getSource().getTileUrlFunction()) return null;

  const url = new URL(layer.getSource().getTileUrlFunction()([0, 0, 0]));
  const queryParams = Object.fromEntries(url.searchParams.entries());
  const startVals = getNestedStartVals(
    layerConfig.schema?.properties || layerConfig.schema,
    queryParams
  );

  return Object.keys(startVals).length ? startVals : null;
}

/**
 * Checks if the stored 'jsonInput' is a valid JSON string.
 * @param {string} str
 * @returns {boolean} - Returns true if the 'jsonInput' is a valid JSON, otherwise false.
 */
export function isLayerJSONValid(str) {
  try {
    // Parsing the jsonInput to test if it's a valid JSON
    JSON.parse(cleanJSONInput(str));

    // Returning true if 'jsonInput' is not empty
    return !!str;
  } catch (error) {
    // Returning false if there's an error parsing or if 'jsonInput' is empty
    return false;
  }
}

/**
 * Cleans up the input string to ensure valid JSON format and triggers an update.
 *
 * @param {string} json - JSON Input string
 * @return {string}
 */
export function cleanJSONInput(json) {
  // Extracts the value entered in the input field
  // @ts-ignore
  const inputValue = json;

  // Replace single quotes with double quotes, ensuring keys are in double quotes for valid JSON
  const replacedQuotes = inputValue.replace(
    /(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
    '"$2": '
  );

  // Remove trailing commas before closing braces and brackets
  const removedCommas = replacedQuotes
    .replace(/,\s*}/g, "}")
    .replace(/,\s*]/g, "]");

  // Remove extra spaces around braces, brackets, and commas for cleaner JSON
  const cleanedInput = removedCommas
    .replace(/\s*(\{|}|\[|\]|,)\s*/g, "$1")
    .replaceAll(`": //`, `://`);

  return cleanedInput;
}

/**
 * Checks if the given URL is a valid map URL based on specified criteria.
 *
 * @param {string} url - The URL to validate.
 * @returns {boolean} - Indicates whether the URL is a valid map URL.
 */
export function isMapUrlValid(url) {
  // Regular expression pattern to match URLs with localhost, domain, and IP addresses
  const urlRegex =
    /^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/;

  // Check if the URL matches the defined pattern
  const urlMatchesPattern = urlRegex.test(url);

  // Detect the type of map URL using the provided function
  const mapUrlType = detectMapURLType(url);

  // Return true if the URL is not empty and matches the pattern and has a valid map URL type, otherwise false
  return !!(url && urlMatchesPattern && mapUrlType);
}

/**
 * Detects the type of map URL based on WMS and XYZ patterns.
 *
 * @param {string} url - The URL to analyze.
 * @returns {"TileWMS" | false | "XYZ"} - The detected map URL type, or false if not recognized.
 */
export function detectMapURLType(url) {
  // Regular expressions to match WMS and XYZ patterns
  const wmsPattern = /\b(?:wms|ows)\b/i;
  const xyzPattern = /{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;

  // Check if the URL matches the WMS pattern
  if (wmsPattern.test(url)) return "TileWMS";

  // Check if the URL matches the XYZ pattern
  if (xyzPattern.test(url)) return "XYZ";

  // Neither WMS nor XYZ pattern matched
  return false;
}

/**
 * Fetches WMS capabilities data from the provided original URL.
 * It constructs a new URL with additional parameters, makes a fetch request,
 * and returns the WMS capabilities in JSON format.
 *
 * @param {string} originalURL - The original URL to fetch capabilities from.
 * @returns {Promise<import("wms-capabilities").WMSCapabilitiesJSON>} - A Promise resolving to the fetched WMS capabilities in JSON format.
 */
export async function fetchCapabilities(originalURL) {
  // Create a URL object from the original URL string
  let url = new URL(originalURL);
  let params = url.searchParams;

  // Update or add multiple parameters for WMS capabilities
  params.set("SERVICE", "WMS");
  params.set("REQUEST", "GetCapabilities"); // Change or add a new parameter

  // Generate the updated URL string
  let updatedURL = url.toString();

  // Fetch the updated URL to get capabilities data
  const response = await fetch(updatedURL);
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  else {
    const capabilitiesText = await response.text();

    // Convert the WMS capabilities data to JSON format
    return new WMSCapabilities(capabilitiesText).toJSON();
  }
}
