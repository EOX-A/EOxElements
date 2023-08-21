import { EOxMap } from "../main";
import { Overlay } from "ol";
import "./tooltip";
import { EOxMapTooltip } from "./tooltip";
import { createLayer } from "./generate";
import Feature from "ol/Feature";
import RenderFeature from "ol/render/Feature";
import VectorTileLayer from "ol/layer/VectorTile.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import MapBrowserEvent from "ol/MapBrowserEvent";

export async function addSelect(
  EOxMap: EOxMap,
  layerId: string,
  options: any
): Promise<void> {
  if (EOxMap.interactions[options.id]) {
    throw Error(`Interaction with id: ${options.id} already exists.`);
  }

  const tooltip: EOxMapTooltip = EOxMap.querySelector(options.tooltip);

  let overlay: Overlay;
  let selectedFid: string | number = null;

  const map = EOxMap.map;

  if (tooltip) {
    overlay = new Overlay({
      element: tooltip,
      position: undefined,
      offset: [0, -30],
      positioning: "top-center",
      className: "eox-map-tooltip",
    });
    map.addOverlay(overlay);
  }

  /**
   * returns the ID of a feature.
   * @param feature
   * @returns {number | string} ID value of feature
   */
  function getId(feature: Feature | RenderFeature) {
    if (options.idProperty) {
      return feature.get(options.idProperty);
    }
    return feature.getId();
  }

  const selectLayer = EOxMap.getLayerById(layerId);
  await selectLayer.get("sourcePromise");

  // a layer that only contains the selected features, for displaying purposes only
  // unmanaged by the map
  let layerDefinition;
  if (options.layer) {
    layerDefinition = options.layer;
  } else {
    const type = selectLayer instanceof VectorLayer ? "Vector" : "VectorTile";
    // a layer can be defined by only its style property as a shorthand.
    layerDefinition = {
      style: options.style,
      type,
      source: {
        type,
      },
    };
  }
  layerDefinition.renderMode = "vector";

  const selectStyleLayer = createLayer(layerDefinition) as
    | VectorTileLayer
    | VectorLayer<VectorSource>;
  await selectStyleLayer.get("sourcePromise");
  selectStyleLayer.setSource(selectLayer.getSource());
  selectStyleLayer.setMap(map);

  const initialStyle = selectStyleLayer.getStyleFunction();

  selectStyleLayer.setStyle((feature, resolution) => {
    if (selectedFid && getId(feature) === selectedFid) {
      return initialStyle(feature, resolution);
    }
    return null;
  });

  const listener = (event: MapBrowserEvent<any>) => {
    if (event.dragging) {
      return;
    }
    selectLayer
      .getFeatures(event.pixel)
      .then(function (features: Array<Feature | RenderFeature>) {
        const feature = features.length ? features[0] : null;
        selectedFid = feature ? getId(feature) : null;
        selectStyleLayer.changed();

        if (overlay) {
          overlay.setPosition(feature ? event.coordinate : null);
          tooltip.renderContent(feature.getProperties());
        }

        const selectdEvt = new CustomEvent("select", {
          detail: {
            originalEvent: event,
            feature: feature,
          },
        });
        EOxMap.dispatchEvent(selectdEvt);
      });
  };
  map.on(options.condition || "click", listener);

  // if the parent layer changes, also change the selection layer.

  selectLayer.on("change:opacity", () => {
    selectStyleLayer.setOpacity(selectLayer.getOpacity());
  });

  selectLayer.on("change:visible", () => {
    const visible = selectLayer.getVisible();
    selectStyleLayer.setVisible(visible);
    if (overlay) {
      if (visible) {
        map.addOverlay(overlay);
      } else {
        map.removeOverlay(overlay);
      }
    }
  });

  selectLayer.on("change:source", () => {
    selectStyleLayer.setSource(selectLayer.getSource());
  });

  map.getLayers().on("remove", () => {
    if (!EOxMap.getLayerById(layerId)) {
      selectStyleLayer.setMap(null);
      if (overlay) {
        map.removeOverlay(overlay);
      }
    }
  });
}
