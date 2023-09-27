import { EOxMap } from "../main";
import { Overlay } from "ol";
import "./tooltip";
import { EOxMapTooltip } from "./tooltip";
import { EoxLayer, createLayer } from "./generate";
import Feature from "ol/Feature";
import RenderFeature from "ol/render/Feature";
import VectorTileLayer from "ol/layer/VectorTile.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import MapBrowserEvent from "ol/MapBrowserEvent";

export type SelectOptions = Omit<
  import("ol/interaction/Select").Options,
  "condition"
> & {
  id: string | number;
  idProperty?: string;
  condition: "click" | "pointermove";
  layer?: EoxLayer;
  style?: import("ol/style/flat.js").FlatStyleLike;
  overlay?: import("ol/Overlay").Options;
  active: boolean;
};

export const EoxSelectInteraction = class {
  eoxMap: EOxMap;
  layerId: string;
  options: SelectOptions;
  active: boolean;
  tooltip: HTMLElement;
  selectedFid: string | number;
  selectLayer: VectorTileLayer | VectorLayer<VectorSource>;
  selectStyleLayer: VectorTileLayer | VectorLayer<VectorSource>;
  layerDefinition: any;

  constructor(eoxMap: EOxMap, layerId: string, options: SelectOptions) {
    this.eoxMap = eoxMap;
    this.layerId = layerId;
    this.options = options;
    this.active = options.active;

    this.tooltip =
      this.eoxMap.querySelector("eox-map-tooltip") || options.overlay?.element;
    let overlay: Overlay;
    this.selectedFid = null;
    this.selectLayer = this.eoxMap.getLayerById(layerId) as
      | VectorTileLayer
      | VectorLayer<VectorSource>;

    if (this.tooltip) {
      overlay = new Overlay({
        element: this.tooltip,
        position: undefined,
        offset: [0, 0],
        positioning: "top-left",
        className: "eox-map-tooltip",
        ...options.overlay,
      });
      this.eoxMap.map.addOverlay(overlay);
    }

    // a layer that only contains the selected features, for displaying purposes only
    // unmanaged by the map
    let layerDefinition;
    if (this.options.layer) {
      layerDefinition = this.options.layer;
    } else {
      const type =
        this.selectLayer instanceof VectorLayer ? "Vector" : "VectorTile";
      // a layer can be defined by only its style property as a shorthand.
      layerDefinition = {
        style: options.style,
        type,
        properties: {
          id: layerId + "_select",
        },
        source: {
          type,
        },
      } as EoxLayer;
    }
    //@ts-ignore
    layerDefinition.renderMode = "vector";

    this.selectStyleLayer = createLayer(layerDefinition as EoxLayer) as
      | VectorTileLayer
      | VectorLayer<VectorSource>;
    //@ts-ignore
    this.selectStyleLayer.setSource(this.selectLayer.getSource());
    this.selectStyleLayer.setMap(this.eoxMap.map);

    const initialStyle = this.selectStyleLayer.getStyleFunction();

    this.selectStyleLayer.setStyle((feature, resolution) => {
      if (this.selectedFid && this.getId(feature) === this.selectedFid) {
        return initialStyle(feature, resolution);
      }
      return null;
    });

    const listener = (event: MapBrowserEvent<any>) => {
      if (event.dragging) {
        return;
      }
      this.selectLayer
        .getFeatures(event.pixel)
        .then((features: Array<Feature | RenderFeature>) => {
          const feature = features.length ? features[0] : null;
          this.selectedFid = feature ? this.getId(feature) : null;
          this.selectStyleLayer.changed();

          if (overlay) {
            const xPosition =
              event.pixel[0] > this.eoxMap.offsetWidth / 2 ? "right" : "left";
            const yPosition =
              event.pixel[1] > this.eoxMap.offsetHeight / 2 ? "bottom" : "top";
            overlay.setPositioning(`${yPosition}-${xPosition}`);
            overlay.setPosition(feature ? event.coordinate : null);
            if (feature && (<EOxMapTooltip>this.tooltip).renderContent) {
              (<EOxMapTooltip>this.tooltip).renderContent(
                feature.getProperties()
              );
            }
          }

          const selectdEvt = new CustomEvent("select", {
            detail: {
              id: options.id,
              originalEvent: event,
              feature: feature,
            },
          });
          this.eoxMap.dispatchEvent(selectdEvt);
        });
    };
    this.eoxMap.map.on(options.condition || "click", listener);

    // if the parent layer changes, also change the selection layer.
    this.selectLayer.on("change:opacity", () => {
      this.selectStyleLayer.setOpacity(this.selectLayer.getOpacity());
    });

    this.selectLayer.on("change:visible", () => {
      const visible = this.selectLayer.getVisible();
      this.selectStyleLayer.setVisible(visible);
      if (overlay) {
        if (visible) {
          this.eoxMap.map.addOverlay(overlay);
        } else {
          this.eoxMap.map.removeOverlay(overlay);
        }
      }
    });

    this.selectLayer.on("change:source", () => {
      //@ts-ignore
      selectStyleLayer.setSource(selectLayer.getSource());
    });

    this.eoxMap.map.getLayers().on("remove", () => {
      if (!this.eoxMap.getLayerById(layerId)) {
        this.selectStyleLayer.setMap(null);
        if (overlay) {
          this.eoxMap.map.removeOverlay(overlay);
        }
      }
    });
  }

  setActive(active: boolean) {
    this.active = active;
  }

  selectById(id: string | number) {
    console.log("selecting by id");
    this.selectedFid = id;
  }

  /**
   * returns the ID of a feature.
   * @param feature
   * @returns {number | string} ID value of feature
   */
  getId(feature: Feature | RenderFeature) {
    if (this.options.idProperty) {
      return feature.get(this.options.idProperty);
    }
    if (feature.getId() !== undefined) {
      return feature.getId();
    }
    if (feature.get("id") !== undefined) {
      return feature.get("id");
    }
    throw Error(
      "No feature id found. Please provide which feature property should be taken instead using idProperty."
    );
  }
};

export function addSelect(
  EOxMap: EOxMap,
  layerId: string,
  options: SelectOptions
) {
  if (EOxMap.interactions[options.id]) {
    throw Error(`Interaction with id: ${options.id} already exists.`);
  }
  const selectInteraction = new EoxSelectInteraction(EOxMap, layerId, options);
}
