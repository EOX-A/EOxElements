import Modify from "ol/interaction/Modify";
import Draw, { createBox } from "ol/interaction/Draw";
import { EOxMap } from "../main";
import { Vector as VectorLayer } from "ol/layer";
import { addNewFeature } from "../helpers";
import { getArea, getLength } from "ol/sphere";
import Overlay from "ol/Overlay";
import { LineString, Polygon } from "ol/geom";
import {unByKey} from 'ol/Observable';

export type DrawOptions = Omit<
  import("ol/interaction/Draw").Options,
  "type"
> & {
  id: string | number;
  type: "Point" | "LineString" | "Polygon" | "Circle" | "Box";
  modify?: boolean;
  // TODO
  active?: boolean;
};

/**
 * Adds a `draw`-interaction to the map.
 * Additionally, if {options.modify} is set, it also adds a `modify` interaction. The name `modify`-interaction
 * follows the naming convention `${DrawOptions.id}_modify`
 * @param {EOxMap} EOxMap
 * @param {VectorLayer<import("ol/Feature").default>} drawLayer
 * @param {DrawOptions} options
 */
export function addDraw(
  EOxMap: EOxMap,
  drawLayer: VectorLayer,
  options: DrawOptions
): void {
  const options_ = Object.assign({}, options);
  if (EOxMap.interactions[options_.id]) {
    throw Error(`Interaction with id: ${options_.id} already exists.`);
  }
  options_.modify =
    typeof options_.modify === "boolean" ? options_.modify : true;

  const source = drawLayer.getSource();

  if (options_.type === "Box") {
    options_.geometryFunction = createBox();
    options_.type = "Circle";
  }

  //@ts-expect-error box
  const drawInteraction = new Draw({
    ...options_,
    source,
  });

  // TODO cleaner way of initializing as inactive?
  if (options_.active === false) {
    drawInteraction.setActive(false);
  }

  // Create measure tooltip
  let measureTooltipElement = document.createElement('div');
  measureTooltipElement.className = "ol-tooltip ol-tooltip-measure";
    measureTooltipElement.style.padding = "4px 2px";
    measureTooltipElement.style.backdropFilter = "blur(20px)";
    measureTooltipElement.style.background = "#00418033";
    const measureTooltip = new Overlay({
      element: measureTooltipElement,
      offset: [0, 0],
      positioning: 'bottom-center',
      stopEvent: false,
      insertFirst: false,
    });
  let sketch = null;
  let listener;

  drawInteraction.on("drawstart", (evt) => {
    sketch = evt.feature;
    let tooltipCoord = evt.coordinate;

    EOxMap.map.addOverlay(measureTooltip);

    listener = sketch.getGeometry().on('change', function (evt) {
      const geometry = evt.target;
      console.log(geometry);

      if (geometry instanceof Polygon) {
        measureTooltipElement.innerHTML = formatArea(geometry);
      } else if (geometry instanceof LineString) {
        measureTooltipElement.innerHTML = formatLength(geometry);
      }

      tooltipCoord = geometry.getLastCoordinate();
      measureTooltip.setPosition(tooltipCoord);

    });
  });

  drawInteraction.on("drawend", (e) => {
    if (!drawLayer.get("isDrawingEnabled")) return;
    addNewFeature(e, drawLayer, EOxMap, true);

    measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
    measureTooltip.setOffset([0, -7]);
    // unset sketch
    sketch = null;
    // unset tooltip so that a new one can be created
    //measureTooltipElement.remove();
    //createMeasureTooltip(measureTooltipElement, measureTooltip, EOxMap.map);
    unByKey(listener);
  });

  // identifier to retrieve the interaction
  EOxMap.map.addInteraction(drawInteraction);
  EOxMap.interactions[options_.id] = drawInteraction;
  const modifyInteraction = new Modify({
    source,
  });
  modifyInteraction.setActive(options_.modify);
  EOxMap.map.addInteraction(modifyInteraction);
  EOxMap.interactions[`${options_.id}_modify`] = modifyInteraction;

  const removeLayerListener = () => {
    if (!EOxMap.getLayerById(drawLayer.get("id"))) {
      EOxMap.removeInteraction(options_.id);
      EOxMap.removeInteraction(`${options_.id}_modify`);
      EOxMap.map.getLayerGroup().un("change", removeLayerListener);
    }
  };
  EOxMap.map.getLayerGroup().on("change", removeLayerListener);
}

/**
 * Creates a new measure tooltip
 */
function createMeasureTooltip(
  measureTooltipElement: HTMLElement,
  measureTooltip: Overlay,
  map: import("ol/Map").default,
) {
  if (measureTooltipElement) {
    measureTooltipElement.remove();
  }
  measureTooltipElement = document.createElement('div');
  measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
  measureTooltip = new Overlay({
    element: measureTooltipElement,
    offset: [0, -15],
    positioning: 'bottom-center',
    stopEvent: false,
    insertFirst: false,
  });
  map.addOverlay(measureTooltip);
}


/**
 * Calculate real distance on the map and format the output.
 * @param {Polygon} line The line string to calculate the distance for.
 * @return {string} Formatted length.
 */
const formatLength = function (line) {
  const length = getLength(line);
  let output;
  if (length > 100) {
    output = Math.round((length / 1000) * 100) / 100 + ' ' + 'km';
  } else {
    output = Math.round(length * 100) / 100 + ' ' + 'm';
  }
  return output;
};


/**
 * Format area output.
 * @param {Polygon} polygon The polygon.
 * @return {string} Formatted area.
 */
const formatArea = function (polygon) {
  const area = getArea(polygon);
  let output;
  if (area > 10000) {
    output = Math.round((area / 1000000) * 100) / 100 + ' ' + 'km<sup>2</sup>';
  } else {
    output = Math.round(area * 100) / 100 + ' ' + 'm<sup>2</sup>';
  }
  return output;
};
