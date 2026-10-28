import { mercator, utils } from "@openglobus/og";
import Feature from "ol/Feature";
import ImageWMS from "ol/source/ImageWMS.js";
import TileWMS from "ol/source/TileWMS.js";
import { register } from "ol/proj/proj4.js";
import proj4 from "proj4";
import { transform } from "../../helpers/index.js";
import { translateOLStyleExpressions } from "./openglobus.js";

/**
 * @typedef {import("../../main").EOxMap} EOxMap
 * @typedef {import("../../helpers/select").EOxSelectInteraction} EOxSelectInteraction
 * @typedef {import("@openglobus/og").LonLat} LonLat
 */

/**
 * OpenGlobus layers which have globe select listeners attached.
 * Used to decide whether a globe click hit a selectable layer.
 * @type {WeakSet<object>}
 */
const selectableGlobusLayers = new WeakSet();

/**
 * Original styles of globe entities currently highlighted by a select interaction.
 * @type {WeakMap<object, Record<string, any>>}
 */
const highlightedEntities = new WeakMap();

/**
 * Entities highlighted on `click` per map, reset on the next click.
 * @type {WeakMap<EOxMap, Set<any>>}
 */
const clickHighlights = new WeakMap();

/**
 * Maps the OpenGlobus geometry style keys to their setters.
 */
const GEOMETRY_STYLE_SETTERS = Object.freeze({
  fillColor: "setFillColor4v",
  lineColor: "setLineColor4v",
  strokeColor: "setStrokeColor4v",
  lineWidth: "setLineWidth",
  strokeWidth: "setStrokeWidth",
});

/**
 * Applies the `style` of a select interaction to a globe vector entity,
 * mirroring the highlight style of the 2D select interaction.
 *
 * @param {any} entity - The OpenGlobus entity.
 * @param {import("../../types").SelectOptions["style"]} style - The OL flat style of the select interaction.
 */
export function highlightGlobeEntity(entity, style) {
  const geometry = entity?.geometry;
  if (!geometry || !style) return;
  const ogStyle = translateOLStyleExpressions(
    /** @type {any} */ (style),
    entity.properties,
  );
  const original = highlightedEntities.get(entity) || {};
  Object.entries(ogStyle).forEach(([key, value]) => {
    const setter = GEOMETRY_STYLE_SETTERS[key];
    if (!setter || value === undefined) return;
    if (!(key in original)) {
      const current = geometry._style[key];
      original[key] = current?.clone ? current.clone() : current;
    }
    geometry[setter](
      key.endsWith("Color") ? utils.createColorRGBA(value) : value,
    );
  });
  highlightedEntities.set(entity, original);
  geometry.bringToFront();
}

/**
 * Restores the original style of a highlighted globe vector entity.
 *
 * @param {any} entity - The OpenGlobus entity.
 */
export function resetGlobeEntity(entity) {
  const original = highlightedEntities.get(entity);
  if (!original) return;
  Object.entries(original).forEach(([key, value]) =>
    entity.geometry[GEOMETRY_STYLE_SETTERS[key]](value),
  );
  highlightedEntities.delete(entity);
}

/**
 * Restores all entities highlighted on `click` for a map.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 */
function resetClickHighlights(EOxMap) {
  clickHighlights.get(EOxMap)?.forEach(resetGlobeEntity);
  clickHighlights.get(EOxMap)?.clear();
}

/**
 * Returns the active select interactions with a `style` and the given condition
 * registered for a given OL layer.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 * @param {import("ol/layer/Base").default} olLayer - The OL layer the globus layer was created from.
 * @param {"click" | "pointermove"} condition - The interaction condition.
 * @returns {Array<EOxSelectInteraction>}
 */
function getStyledSelectInteractions(EOxMap, olLayer, condition) {
  return Object.values(EOxMap.selectInteractions || {}).filter(
    (interaction) =>
      interaction.active &&
      interaction.options?.style &&
      (interaction.options.condition || "click") === condition &&
      (interaction.selectLayer === olLayer ||
        interaction.selectLayer?.get("id") === olLayer.get("id")),
  );
}

/**
 * Returns the active select interactions (with tooltip) registered for a given OL layer.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 * @param {import("ol/layer/Base").default} olLayer - The OL layer the globus layer was created from.
 * @returns {Array<EOxSelectInteraction>}
 */
export function getGlobeSelectInteractions(EOxMap, olLayer) {
  return Object.values(EOxMap.selectInteractions || {}).filter(
    (interaction) =>
      interaction.tooltip &&
      (interaction.selectLayer === olLayer ||
        interaction.selectLayer?.get("id") === olLayer.get("id")),
  );
}

/**
 * Reads the raw band values of an OpenGlobus `GeoTIFFLayer` at a given LonLat,
 * using the decoded rasters of the currently rendered tile.
 *
 * @param {import("@openglobus/og").Globe} globe - The OpenGlobus globe instance.
 * @param {any} geoTIFFLayer - The OpenGlobus `GeoTIFFLayer`.
 * @param {LonLat} lonLat - The picked location.
 * @returns {Array<number> | null} The band values, or `null` if no data is available.
 */
export function pickGeoTIFFValues(globe, geoTIFFLayer, lonLat) {
  if (!lonLat) return null;

  // Find the rendered quadtree leaf segment containing this LonLat
  const renderedNodes = /** @type {any} */ (globe.planet.quadTreeStrategy)
    ._renderedNodes;
  const segment = renderedNodes
    ?.map((node) => node.segment)
    .find((seg) => seg?._extentLonLat?.isInside(lonLat));
  if (!segment) return null;

  // Retrieve the decoded raster data from the GeoTIFFLayer cache
  const tileData = geoTIFFLayer._rasterCache?.get(
    `${segment.tileZoom}_${segment.tileX}_${segment.tileY}`,
  );
  if (!tileData?.rasters?.length) return null;

  // Compute relative pixel position within the tile
  let u, v;
  if (segment._projection?.code === "EPSG:3857") {
    const merc = mercator.forward(lonLat);
    const ext = segment._extent;
    u =
      (merc.lon - ext.southWest.lon) / (ext.northEast.lon - ext.southWest.lon);
    v =
      (ext.northEast.lat - merc.lat) / (ext.northEast.lat - ext.southWest.lat);
  } else {
    const ext = segment._extentLonLat;
    u =
      (lonLat.lon - ext.southWest.lon) /
      (ext.northEast.lon - ext.southWest.lon);
    v =
      (ext.northEast.lat - lonLat.lat) /
      (ext.northEast.lat - ext.southWest.lat);
  }

  const { width, height = width } = tileData;
  const px = Math.max(0, Math.min(width - 1, Math.floor(u * width)));
  const py = Math.max(0, Math.min(height - 1, Math.floor(v * height)));
  const pixelIndex = py * width + px;

  const values = tileData.rasters.map((raster) => raster[pixelIndex]);
  const nodata = geoTIFFLayer.nodata;
  if (
    values[0] === undefined ||
    Number.isNaN(values[0]) ||
    (nodata !== null && nodata !== undefined && values[0] === nodata)
  ) {
    return null;
  }
  return values;
}

/**
 * Converts band values into tooltip properties (`band1`, `band2`, ...).
 * Returns `null` if all values are zero, mirroring the 2D WebGLTile behaviour.
 *
 * @param {Array<number> | null} values - The band values.
 * @returns {Record<string, number> | null}
 */
export function bandValuesToProperties(values) {
  if (!values?.length || values.every((value) => value === 0)) return null;
  return Object.fromEntries(values.map((value, i) => [`band${i + 1}`, value]));
}

/**
 * Extracts the feature properties from a GetFeatureInfo JSON response.
 *
 * @param {string} responseText - The raw response of the GetFeatureInfo request.
 * @returns {Record<string, any> | null}
 */
export function parseFeatureInfoResponse(responseText) {
  if (!responseText) return null;
  let json;
  try {
    json = JSON.parse(responseText);
  } catch {
    return null;
  }
  if (json.type === "FeatureCollection" && json.features?.length > 0) {
    return json.features[0].properties || {};
  }
  if (json.type === "Feature") {
    return json.properties || {};
  }
  return null;
}

/**
 * Returns the picked coordinates of a LonLat, transformed to the projection
 * configured in the select options (defaults to EPSG:4326).
 *
 * @param {LonLat} lonLat - The picked location.
 * @param {import("../../types").SelectOptions} options - The select options.
 * @returns {{lon: string, lat: string}}
 */
function pickedCoordinate(lonLat, options) {
  if (options?.projection && !proj4.defs(options.projection.name)) {
    proj4.defs(options.projection.name, options.projection.proj4_string);
    register(proj4);
  }
  const coordinates = transform(
    [lonLat.lon, lonLat.lat],
    "EPSG:4326",
    options?.projection?.name || "EPSG:4326",
  );
  return {
    lon: coordinates[0].toFixed(options?.precision || 2),
    lat: coordinates[1].toFixed(options?.precision || 2),
  };
}

/**
 * Returns the globe tooltip wrapper element, if mounted.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 * @returns {HTMLElement | null}
 */
function getTooltipWrapper(EOxMap) {
  return EOxMap.shadowRoot?.querySelector(".eox-map-globe-tooltip") || null;
}

/**
 * Hides the globe tooltip.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 */
export function hideGlobeTooltip(EOxMap) {
  const wrapper = getTooltipWrapper(EOxMap);
  if (wrapper) wrapper.style.display = "none";
}

/**
 * Shows the tooltip of a select interaction at the picked pixel in globe mode,
 * and dispatches the `select` event on the map.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 * @param {EOxSelectInteraction} interaction - The select interaction.
 * @param {Record<string, any> | null} properties - The properties to render; hides the tooltip if `null`.
 * @param {any} event - The OpenGlobus mouse state.
 * @param {LonLat} [lonLat] - The picked location.
 */
export function showGlobeTooltip(
  EOxMap,
  interaction,
  properties,
  event,
  lonLat,
) {
  if (!properties) {
    hideGlobeTooltip(EOxMap);
    return;
  }
  const { options } = interaction;
  const feature = new Feature({
    ...properties,
    ...(options?.coordinates && lonLat
      ? pickedCoordinate(lonLat, options)
      : {}),
  });

  const wrapper = getTooltipWrapper(EOxMap);
  if (wrapper && interaction.tooltipElement) {
    // @ts-expect-error TODO
    interaction.tooltipElement.feature = feature;
    const { x, y } = event.pos;
    const xTranslate = x > EOxMap.offsetWidth / 2 ? "-100%" : "0";
    const yTranslate = y > EOxMap.offsetHeight / 2 ? "-100%" : "0";
    wrapper.style.transform = `translate(${x}px, ${y}px) translate(${xTranslate}, ${yTranslate})`;
    wrapper.style.display = "block";
  }

  const selectdEvt = new CustomEvent("select", {
    detail: {
      id: options.id,
      originalEvent: event,
      feature,
    },
  });
  /**
   * Fired when a feature (or raster pixel) is selected in globe mode.
   */
  EOxMap.dispatchEvent(selectdEvt);
}

/**
 * Picks the properties for a select interaction at the given event and shows the tooltip.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 * @param {EOxSelectInteraction} interaction - The select interaction.
 * @param {import("ol/layer/Base").default} olLayer - The OL layer.
 * @param {any} ogLayer - The OpenGlobus layer.
 * @param {any} event - The OpenGlobus mouse state.
 */
function pickAndShow(EOxMap, interaction, olLayer, ogLayer, event) {
  const globe = EOxMap.globe;
  if (!globe) return;
  const lonLat = globe.planet.getLonLatFromPixelTerrain(event.pos);

  // Vector: properties are stored on the picked entity
  if (event.pickingObject?._layer === ogLayer) {
    showGlobeTooltip(
      EOxMap,
      interaction,
      event.pickingObject.properties || null,
      event,
      lonLat,
    );
    return;
  }

  // WMS: request GetFeatureInfo through the OL source
  const source = /** @type {any} */ (olLayer).getSource?.();
  if (source instanceof ImageWMS || source instanceof TileWMS) {
    if (!lonLat) return;
    const height = globe.planet.camera.getHeight();
    const zoom =
      Math.log2(21050000 / height) + (EOxMap.globeConfig?.useHighLOD ? 1 : 2);
    const resolution = 156543.03392804097 / Math.pow(2, zoom);
    const url = source.getFeatureInfoUrl(
      transform([lonLat.lon, lonLat.lat], "EPSG:4326", "EPSG:3857"),
      resolution,
      "EPSG:3857",
      { INFO_FORMAT: "application/json" },
    );
    if (url) {
      fetch(url)
        .then((response) => response.text())
        .then((text) =>
          showGlobeTooltip(
            EOxMap,
            interaction,
            parseFeatureInfoResponse(text),
            event,
            lonLat,
          ),
        );
    }
    return;
  }

  // GeoTIFF: read raw band values from the decoded tile rasters
  if (ogLayer._rasterCache) {
    showGlobeTooltip(
      EOxMap,
      interaction,
      bandValuesToProperties(pickGeoTIFFValues(globe, ogLayer, lonLat)),
      event,
      lonLat,
    );
  }
}

/**
 * Attaches the select (tooltip) listeners of an OL layer to its OpenGlobus counterpart.
 * Interactions are resolved at event time, so interactions added later are picked up too.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 * @param {import("ol/layer/Base").default} olLayer - The OL layer.
 * @param {any} ogLayer - The OpenGlobus layer (GeoTIFFLayer, WMS or Vector).
 */
export function attachGlobeSelect(EOxMap, olLayer, ogLayer) {
  if (!EOxMap || !ogLayer?.events) return;
  selectableGlobusLayers.add(ogLayer);

  /**
   * @param {"click" | "pointermove"} condition
   * @returns {(event: any) => void}
   */
  const handler = (condition) => (event) => {
    const interactions = getGlobeSelectInteractions(EOxMap, olLayer).filter(
      (interaction) =>
        interaction.active &&
        (interaction.options.condition || "click") === condition,
    );
    const source = /** @type {any} */ (olLayer).getSource?.();
    const isWMS = source instanceof ImageWMS || source instanceof TileWMS;
    interactions
      // WMS GetFeatureInfo is only requested on click, as in 2D
      .filter(() => !(isWMS && condition === "pointermove"))
      .forEach((interaction) =>
        pickAndShow(EOxMap, interaction, olLayer, ogLayer, event),
      );
  };

  ogLayer.events.on("lclick", handler("click"));
  ogLayer.events.on("mousemove", handler("pointermove"));

  // Vector: apply the interaction `style` to the hovered/clicked entity, as in 2D
  ogLayer.events.on("mouseenter", (/** @type {any} */ event) => {
    const entity = event.pickingObject;
    if (entity?._layer !== ogLayer) return;
    getStyledSelectInteractions(EOxMap, olLayer, "pointermove").forEach(
      (interaction) => highlightGlobeEntity(entity, interaction.options.style),
    );
  });
  ogLayer.events.on("mouseleave", (/** @type {any} */ event) => {
    const entity = event.pickingObject;
    if (clickHighlights.get(EOxMap)?.has(entity)) return;
    resetGlobeEntity(entity);
  });
  ogLayer.events.on("lclick", (/** @type {any} */ event) => {
    const entity = event.pickingObject;
    if (entity?._layer !== ogLayer) return;
    const interactions = getStyledSelectInteractions(EOxMap, olLayer, "click");
    if (!interactions.length) return;
    resetClickHighlights(EOxMap);
    if (!clickHighlights.has(EOxMap)) clickHighlights.set(EOxMap, new Set());
    interactions.forEach((interaction) =>
      highlightGlobeEntity(entity, interaction.options.style),
    );
    clickHighlights.get(EOxMap).add(entity);
  });
  ogLayer.events.on("mouseleave", () => {
    if (
      getGlobeSelectInteractions(EOxMap, olLayer).some(
        (interaction) => interaction.options.condition === "pointermove",
      )
    ) {
      hideGlobeTooltip(EOxMap);
    }
  });
}

/**
 * Moves the shared tooltip element from the OL overlay into the globe container,
 * and hides it when clicking outside a selectable layer or leaving the globe.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 * @param {HTMLElement} globeDiv - The globe container element.
 */
export function mountGlobeTooltip(EOxMap, globeDiv) {
  // Reset click highlights when clicking outside a selectable layer
  EOxMap.globe?.renderer.events.on("lclick", (/** @type {any} */ event) => {
    const picked = event.pickingObject?._layer || event.pickingObject;
    if (!picked || !selectableGlobusLayers.has(picked)) {
      resetClickHighlights(EOxMap);
    }
  });

  const overlay = EOxMap.map.getOverlayById("eox-map-tooltip");
  const tooltipElement = overlay?.getElement();
  if (!tooltipElement || getTooltipWrapper(EOxMap)) return;

  const wrapper = document.createElement("div");
  wrapper.className = "eox-map-tooltip eox-map-globe-tooltip";
  Object.assign(wrapper.style, {
    position: "absolute",
    top: "0",
    left: "0",
    display: "none",
    pointerEvents: "none",
    zIndex: "1",
  });
  wrapper.appendChild(tooltipElement);
  globeDiv.appendChild(wrapper);

  EOxMap.globe?.renderer.events.on("lclick", (/** @type {any} */ event) => {
    const picked = event.pickingObject?._layer || event.pickingObject;
    if (!picked || !selectableGlobusLayers.has(picked)) {
      hideGlobeTooltip(EOxMap);
    }
  });
  globeDiv.addEventListener("pointerleave", () => hideGlobeTooltip(EOxMap));
}

/**
 * Hands the tooltip element back to the OL overlay when leaving globe mode.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 */
export function unmountGlobeTooltip(EOxMap) {
  const wrapper = getTooltipWrapper(EOxMap);
  const overlay = EOxMap.map.getOverlayById("eox-map-tooltip");
  if (!wrapper || !overlay) return;
  const tooltipElement = overlay.getElement();
  overlay.setPosition(undefined);
  // Re-setting the element re-appends it into the overlay container
  overlay.setElement(null);
  overlay.setElement(tooltipElement);
  wrapper.remove();
}
