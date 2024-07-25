import { EOxMap } from "../main";
import { Overlay } from "ol";
import "./tooltip";
import { EOxMapTooltip } from "./tooltip";
import { EoxLayer, createLayer } from "./generate";
import Feature from "ol/Feature";
import RenderFeature from "ol/render/Feature";
import VectorTileLayer from "ol/layer/VectorTile.js";
import VectorLayer from "ol/layer/Vector.js";
import MapBrowserEvent from "ol/MapBrowserEvent";

export type SelectLayer = VectorTileLayer | VectorLayer;

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
  active?: boolean;
  panIn?: boolean;
};

export class EOxSelectInteraction {
  eoxMap: EOxMap;
  options: SelectOptions;
  active: boolean;
  panIn: boolean;
  tooltip: HTMLElement;
  selectedFids: Array<string | number>;
  selectLayer: SelectLayer;
  selectStyleLayer: SelectLayer;
  changeSourceListener: () => void;

  constructor(
    eoxMap: EOxMap,
    selectLayer: SelectLayer,
    options: SelectOptions
  ) {
    this.eoxMap = eoxMap;
    this.selectLayer = selectLayer;
    this.options = options;
    this.active = options.active || selectLayer.getVisible();
    this.panIn = options.panIn || false;

    const existingTooltip = this.eoxMap.map.getOverlayById("eox-map-tooltip");

    let overlay: Overlay;
    this.selectedFids = [];

    if (existingTooltip) {
      this.tooltip = existingTooltip.getElement();
      overlay = existingTooltip;
    } else {
      this.tooltip =
        this.eoxMap.querySelector("eox-map-tooltip") ||
        options.overlay?.element;

      if (this.tooltip) {
        overlay = new Overlay({
          element: this.tooltip,
          position: undefined,
          offset: [0, 0],
          positioning: "top-left",
          className: "eox-map-tooltip",
          id: "eox-map-tooltip",
          ...options.overlay,
        });
        this.eoxMap.map.addOverlay(overlay);
      }
    }

    const pointerLeaveListener = () => {
      if (overlay && options.condition === "pointermove") {
        overlay.setPosition(undefined);
      }
    };
    eoxMap.map.on("change:target", (e) => {
      e.oldValue?.removeEventListener("pointerleave", pointerLeaveListener);
      e.target
        .getTargetElement()
        ?.addEventListener("pointerleave", pointerLeaveListener);
    });
    eoxMap.map
      .getTargetElement()
      ?.addEventListener("pointerleave", pointerLeaveListener);

    // a layer that only contains the selected features, for displaying purposes only
    // unmanaged by the map
    let layerDefinition;
    if (this.options.layer) {
      layerDefinition = this.options.layer;
    } else {
      // a layer can be defined by only its style property as a shorthand.
      const originalJsonDefinition = this.selectLayer.get("_jsonDefinition");
      layerDefinition = {
        ...originalJsonDefinition,
        style: options.style,
        properties: {
          id: this.selectLayer.get("id") + "_select",
        },
        source: {
          type: originalJsonDefinition.type,
        },
      } as EoxLayer;
    }
    layerDefinition.renderMode = "vector";
    delete layerDefinition.interactions;

    this.selectStyleLayer = createLayer(
      eoxMap,
      layerDefinition as EoxLayer
    ) as SelectLayer;

    //@ts-expect-error VectorSource for VectorLayer, VectorTileSource for VectorTileLayer
    this.selectStyleLayer.setSource(this.selectLayer.getSource());
    this.selectStyleLayer.setMap(this.eoxMap.map);

    const initialStyle = this.selectStyleLayer.getStyleFunction();

    this.selectStyleLayer.setStyle(
      (feature: import("ol/Feature").FeatureLike, resolution: number) => {
        if (
          this.selectedFids.length &&
          this.selectedFids.includes(this.getId(feature))
        ) {
          return initialStyle(feature, resolution);
        }
        return null;
      }
    );

    // Pan into the feature's extend when `panIn` is true
    const panIntoFeature = (feature: Feature | RenderFeature) => {
      if (this.panIn) {
        this.eoxMap.map
          .getView()
          .fit(feature.getGeometry().getExtent(), { duration: 750 });
      }
    };

    const listener = (event: MapBrowserEvent<UIEvent>) => {
      if (!this.active) {
        return;
      }
      const currentZoom = this.eoxMap.map.getView().getZoom();
      if (
        event.dragging ||
        !this.active ||
        currentZoom < this.selectLayer.getMinZoom() ||
        currentZoom > this.selectLayer.getMaxZoom()
      ) {
        return;
      }
      this.selectLayer
        .getFeatures(event.pixel)
        .then((features: Array<Feature | RenderFeature>) => {
          const feature = features.length ? features[0] : null;

          const newSelectFids = feature ? [this.getId(feature)] : [];
          const idChanged = this.selectedFids[0] !== newSelectFids[0];
          this.selectedFids = newSelectFids;
          if (idChanged) {
            this.selectStyleLayer.changed();
            if (feature) panIntoFeature(feature);
          }

          if (overlay) {
            const xPosition =
              event.pixel[0] > this.eoxMap.offsetWidth / 2 ? "right" : "left";
            const yPosition =
              event.pixel[1] > this.eoxMap.offsetHeight / 2 ? "bottom" : "top";
            overlay.setPositioning(`${yPosition}-${xPosition}`);
            overlay.setPosition(feature ? event.coordinate : null);
            if (feature && (<EOxMapTooltip>this.tooltip).renderContent) {
              (<EOxMapTooltip>this.tooltip).renderContent(feature);
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
      this.setActive(visible);
    });

    this.changeSourceListener = () => {
      //@ts-expect-error VectorSource for VectorLayer, VectorTileSource for VectorTileLayer
      this.selectStyleLayer.setSource(this.selectLayer.getSource());
    };

    this.selectLayer.on("change:source", this.changeSourceListener);

    const changeLayerListener = () => {
      if (eoxMap.getLayerById(selectLayer.get("id"))) {
        eoxMap.selectInteractions[options.id]?.setActive(true);
        this.selectStyleLayer?.setMap(this.eoxMap.map);
        overlay?.setMap(this.eoxMap.map);
      } else {
        // remove the baselayer and the interaction if vector layer is removed
        eoxMap.selectInteractions[options.id]?.setActive(false);
        this.selectStyleLayer?.setMap(null);
        overlay?.setMap(null);
      }
    };
    eoxMap.map.getLayerGroup().on("change", changeLayerListener);
  }

  setActive(active: boolean) {
    this.active = active;
  }

  /**
   * highlights one or more features by their IDs. Does not fire select events.
   * @param {Array<string | number>} ids
   */
  highlightById(ids: Array<string | number>) {
    this.selectedFids = ids;
    this.selectStyleLayer.changed(); // force rerender to highlight selected fids
  }

  /**
   * removes this interaction and the connected unmanaged layer from the map
   */
  remove() {
    this.selectStyleLayer.setMap(null);
    delete this.eoxMap.selectInteractions[this.options.id];
    this.selectLayer.un("change:source", this.changeSourceListener);
    //this.eoxMap.map.getLayers().un("remove", this.removeListener);
  }

  /**
   * returns the ID of a feature.
   * @param feature
   * @returns {number | string} ID value of feature
   */
  private getId(feature: Feature | RenderFeature) {
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
}

/**
 * Adds a `select`-interaction to the map.
 * @param {EOxMap} EOxMap
 * @param {SelectLayer} selectLayer
 * @param {SelectOptions} options
 */
export function addSelect(
  EOxMap: EOxMap,
  selectLayer: SelectLayer,
  options: SelectOptions
) {
  if (EOxMap.interactions[options.id]) {
    throw Error(`Interaction with id: ${options.id} already exists.`);
  }
  EOxMap.selectInteractions[options.id] = new EOxSelectInteraction(
    EOxMap,
    selectLayer,
    options
  );

  return EOxMap.selectInteractions[options.id];
}
