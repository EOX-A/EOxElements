import { Overlay } from "ol";
import "../../src/tooltip";
import { EOxMapTooltip } from "../../src/tooltip";
import { createLayer } from "./generate";
import Feature from "ol/Feature";
import RenderFeature from "ol/render/Feature";
import VectorLayer from "ol/layer/Vector";
import { createEmpty, extend, isEmpty } from "ol/extent";

/**
 * @typedef {import('../main').EOxMap} EOxMap
 * @typedef {import("../../types").EoxLayer} EoxLayer
 * @typedef {import("../../types").SelectLayer} SelectLayer
 * @typedef {import("../../types").SelectOptions} SelectOptions
 */

/**
 * Class representing the EOxSelectInteraction.
 */
export class EOxSelectInteraction {
  /**
   * @param {EOxMap} eoxMap - Instance of EOxMap class.
   * @param {SelectLayer} selectLayer - Layer for selection.
   * @param {SelectOptions} options - Options for selection interaction.
   */
  constructor(eoxMap, selectLayer, options) {
    this.eoxMap = eoxMap;
    this.selectLayer = selectLayer;
    this.options = options;
    this.active = options.active || selectLayer.getVisible();
    this.panIn = options.panIn || false;

    const existingTooltip = this.eoxMap.map.getOverlayById("eox-map-tooltip");

    let overlay;
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

    let layerDefinition;
    if (this.options.layer) {
      layerDefinition = this.options.layer;
    } else {
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
      };
    }
    layerDefinition.renderMode = "vector";
    delete layerDefinition.interactions;

    this.selectStyleLayer = createLayer(eoxMap, layerDefinition);

    //@ts-expect-error VectorSource for VectorLayer, VectorTileSource for VectorTileLayer
    this.selectStyleLayer.setSource(this.selectLayer.getSource());
    this.selectStyleLayer.setMap(this.eoxMap.map);

    const initialStyle = this.selectStyleLayer.getStyleFunction();

    this.selectStyleLayer.setStyle((feature, resolution) => {
      if (
        this.selectedFids.length &&
        this.selectedFids.includes(this.getId(feature))
      ) {
        return initialStyle(feature, resolution);
      }
      return null;
    });

    const listener = (event) => {
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
      this.selectLayer.getFeatures(event.pixel).then((features) => {
        const feature = features.length ? features[0] : null;

        const newSelectFids = feature ? [this.getId(feature)] : [];
        const idChanged = this.selectedFids[0] !== newSelectFids[0];
        this.selectedFids = newSelectFids;
        if (idChanged) {
          this.selectStyleLayer.changed();
          if (feature && this.panIn) this.panIntoFeature(feature);
        }

        if (overlay) {
          const xPosition =
            event.pixel[0] > this.eoxMap.offsetWidth / 2 ? "right" : "left";
          const yPosition =
            event.pixel[1] > this.eoxMap.offsetHeight / 2 ? "bottom" : "top";
          overlay.setPositioning(`${yPosition}-${xPosition}`);
          overlay.setPosition(feature ? event.coordinate : null);
          if (feature && this.tooltip.renderContent) {
            this.tooltip.renderContent(feature);
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
        eoxMap.selectInteractions[options.id]?.setActive(false);
        this.selectStyleLayer?.setMap(null);
        overlay?.setMap(null);
      }
    };
    eoxMap.map.getLayerGroup().on("change", changeLayerListener);
  }

  setActive(active) {
    this.active = active;
  }

  panIntoFeature = (featureOrExtent, options) => {
    const extent =
      featureOrExtent instanceof Feature ||
      featureOrExtent instanceof RenderFeature
        ? featureOrExtent.getGeometry().getExtent()
        : featureOrExtent;
    this.eoxMap.map.getView().fit(extent, options || { duration: 750 });
  };

  highlightById(ids, fitOptions) {
    this.selectedFids = ids;
    if (ids.length && fitOptions) {
      const extent = createEmpty();
      if (this.selectLayer instanceof VectorLayer) {
        for (let i = 0; i < this.selectedFids.length; i++) {
          const id = this.selectedFids[i];
          const feature = this.selectLayer.getSource().getFeatureById(id);
          if (feature && feature.getGeometry()) {
            extend(extent, feature.getGeometry().getExtent());
          }
        }
      } else {
        const map = this.eoxMap.map;
        const allRenderedFeatures = this.selectLayer.getFeaturesInExtent(
          map.getView().calculateExtent(map.getSize())
        );
        for (let i = 0; i < allRenderedFeatures.length; i++) {
          const renderFeature = allRenderedFeatures[i];
          if (this.selectedFids.includes(this.getId(renderFeature))) {
            extend(extent, renderFeature.getGeometry().getExtent());
          }
        }
      }
      if (!isEmpty(extent)) {
        this.panIntoFeature(extent, fitOptions);
      }
    }
    this.selectStyleLayer.changed();
  }

  remove() {
    this.selectStyleLayer.setMap(null);
    delete this.eoxMap.selectInteractions[this.options.id];
    this.selectLayer.un("change:source", this.changeSourceListener);
  }

  getId(feature) {
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
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 * @param {SelectLayer} selectLayer - Layer to be selected.
 * @param {SelectOptions} options - Options for the select interaction.
 */
export function addSelect(EOxMap, selectLayer, options) {
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
