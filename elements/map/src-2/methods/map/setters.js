import { getCenterFromProperty } from "../../../src/center";
import {
  cancelAnimation,
  addScrollInteractions,
  coordinatesRoughlyEquals,
  removeDefaultScrollInteractions,
} from "../../helpers";
import { addOrUpdateControl } from "../../../src/controls/controls";
import { getLayerById } from "../../../src/layer";
import {
  get as getProjection,
  getPointResolution,
  transform as olTransform,
} from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import View from "ol/View";
import { getElement } from "../../../../../utils";

export function setCenterMethod(center, EOxMap) {
  let newCenter = undefined;

  const centerIsSame =
    center?.length &&
    coordinatesRoughlyEquals(center, EOxMap.map.getView().getCenter());

  if (center && !centerIsSame) {
    if (!EOxMap.projection || EOxMap.projection === "EPSG:3857") {
      newCenter = getCenterFromProperty(center);
    } else newCenter = center;
  }

  return newCenter;
}

export function setZoomExtentMethod(extent, EOxMap) {
  if (!extent || !extent.length) return undefined;

  const view = EOxMap.map.getView();
  cancelAnimation(view);
  setTimeout(() => view.fit(extent, EOxMap.animationOptions), 0);

  return extent;
}

export function setControlsMethod(controls, oldControls, EOxMap) {
  const newControls = controls;

  if (oldControls) {
    const oldControlTypes = Object.keys(oldControls);
    const newControlTypes = Object.keys(newControls);
    for (let i = 0, ii = oldControlTypes.length; i < ii; i++) {
      const oldControlType = oldControlTypes[i];
      if (!newControlTypes.includes(oldControlType)) {
        EOxMap.removeControl(oldControlType);
      }
    }
  }
  if (newControls) {
    const keys = Object.keys(controls);
    for (let i = 0, ii = keys.length; i < ii; i++) {
      const key = keys[i];
      addOrUpdateControl(EOxMap, oldControls, key, controls[key]);
    }
  }

  return newControls;
}

export function setLayersMethod(layers, oldLayers, EOxMap) {
  const newLayers = JSON.parse(JSON.stringify(layers)).reverse();

  if (oldLayers) {
    oldLayers.forEach((l) => {
      if (
        !l.properties?.id ||
        !newLayers.find(
          (newLayer) => newLayer.properties.id === l.properties.id
        )
      ) {
        const layerToBeRemoved = getLayerById(EOxMap, l.properties?.id);
        const jsonDefinition = layerToBeRemoved.get("_jsonDefinition");

        jsonDefinition.interactions?.forEach((interaction) => {
          if (interaction.type === "select") {
            EOxMap.removeSelect(interaction.options.id);
          } else {
            EOxMap.removeInteraction(interaction.options.id);
          }
        });
        EOxMap.map.removeLayer(layerToBeRemoved);
      }
    });
  }

  newLayers.forEach((l) => {
    EOxMap.addOrUpdateLayer(l);
  });

  const sortedIds = newLayers.map((l) => l.properties?.id);
  EOxMap.map
    .getLayers()
    .getArray()
    .sort((layerA, layerB) => {
      return (
        sortedIds.indexOf(layerA.get("id")) -
        sortedIds.indexOf(layerB.get("id"))
      );
    });

  return newLayers;
}

export function setPreventScrollMethod(preventScroll, EOxMap) {
  if (preventScroll) {
    removeDefaultScrollInteractions(EOxMap.map);
    addScrollInteractions(EOxMap.map, true);
  } else addScrollInteractions(EOxMap.map);

  return preventScroll;
}

export function setConfigMethod(config, EOxMap) {
  if (config?.animationOptions !== undefined)
    EOxMap.animationOptions = config.animationOptions;

  EOxMap.projection = config?.view?.projection || "EPSG:3857";
  EOxMap.layers = config?.layers || [];
  EOxMap.controls = config?.controls || {};

  if (EOxMap.preventScroll === undefined)
    EOxMap.preventScroll = config?.preventScroll;

  EOxMap.zoom = config?.view?.zoom || 0;
  EOxMap.center = config?.view?.center || [0, 0];
  EOxMap.zoomExtent = config?.view?.zoomExtent;

  return config;
}

export function setProjectionMethod(projection, oldProjection, EOxMap) {
  let newProj = oldProjection;

  const oldView = EOxMap.map.getView();
  if (
    projection &&
    getProjection(projection) &&
    projection !== oldView.getProjection().getCode()
  ) {
    const newCenter = olTransform(
      oldView.getCenter(),
      oldView.getProjection().getCode(),
      projection
    );

    const newProjection = getProjection(projection);
    const oldResolution = oldView.getResolution();
    const oldMPU = oldView.getProjection().getMetersPerUnit();
    const newMPU = newProjection.getMetersPerUnit();
    const oldPointResolution =
      getPointResolution(
        oldView.getProjection(),
        1 / oldMPU,
        oldView.getCenter(),
        "m"
      ) * oldMPU;
    const newPointResolution =
      getPointResolution(newProjection, 1 / newMPU, newCenter, "m") * newMPU;

    const newResolution =
      (oldResolution * oldPointResolution) / newPointResolution;

    const newView = new View({
      zoom: oldView.getZoom(),
      center: newCenter,
      resolution: newResolution,
      rotation: oldView.getRotation(),
      projection,
    });
    const eventTypes = [
      "change:center",
      "change:resolution",
      "change:rotation",
      "propertychange",
    ];
    eventTypes.forEach((eventType) => {
      const existingListeners = oldView.getListeners(eventType);
      if (existingListeners?.length) {
        for (let i = existingListeners.length - 1; i >= 0; i--) {
          const listener = existingListeners[i];
          oldView.un(eventType, listener);
          newView.on(eventType, listener);
        }
      }
    });
    EOxMap.map.setView(newView);
    EOxMap.getFlatLayersArray(EOxMap.map.getLayers().getArray())
      .filter((l) => l instanceof VectorLayer)
      .forEach((l) => l.getSource().refresh());
    newProj = projection;
    EOxMap.center = newCenter;
  }

  return newProj;
}

export function setSyncMethod(sync, EOxMap) {
  if (sync) {
    setTimeout(() => {
      const originMap = getElement(sync);
      if (originMap) {
        EOxMap.map.setView(originMap.map.getView());
      }
    });
  }

  return sync;
}
