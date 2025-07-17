import Overlay from "ol/Overlay.js";
import "../components/tooltip";
import { createLayer } from "./generate";
import Feature from "ol/Feature";
import RenderFeature from "ol/render/Feature";
import VectorLayer from "ol/layer/Vector";
import { createEmpty, extend, isEmpty } from "ol/extent";
import { getUid } from "ol/util";
import VectorTile from "ol/layer/VectorTile";
import ImageWMS from "ol/source/ImageWMS.js";
import TileWMS from "ol/source/TileWMS.js";
import { register } from "ol/proj/proj4.js";
import { get as getProjection, transform } from "ol/proj.js";
import proj4 from "proj4";

/**
 * @typedef {import('../main').EOxMap} EOxMap
 * @typedef {import("../layers").EoxLayer} EoxLayer
 * @typedef {import("../types").SelectLayer} SelectLayer
 * @typedef {import("../types").AnyLayer} AnyLayer
 * @typedef {import("../types").SelectLayerWithFeatures} SelectLayerWithFeatures
 * @typedef {import("../types").SelectOptions} SelectOptions
 * @typedef {import("../types").DrawOptions} DrawOptions
 */

/**
 * Class representing the EOxSelectInteraction.
 * Handles the selection interaction for a specified layer, including highlighting features,
 * displaying tooltips, and panning into selected features.
 */
export class EOxSelectInteraction {
  /**
   * @param {EOxMap} eoxMap - Instance of the EOxMap class.
   * @param {import("../types").SelectLayer} anyLayer - Layer for selection.
   * @param {SelectOptions} options - Options for the selection interaction.
   */
  constructor(eoxMap, anyLayer, options) {
    this.eoxMap = eoxMap;
    this.selectLayer = anyLayer;
    this.options = options;
    this.active = options.active || anyLayer.getVisible();
    this.panIn = options.panIn || false;
    this.tooltip = options.tooltip === false ? false : true;

    // Retrieve or create the tooltip overlay for displaying feature information
    const existingTooltip = this.eoxMap.map.getOverlayById("eox-map-tooltip");

    /** @type {import("ol").Overlay} **/
    let overlay;

    if (this.tooltip) {
      if (existingTooltip) {
        this.tooltipElement = existingTooltip.getElement();
        overlay = existingTooltip;
      } else {
        this.tooltipElement =
          this.eoxMap.querySelector("eox-map-tooltip") ||
          this.eoxMap.querySelector("[is=eox-map-tooltip]") ||
          options.overlay?.element;

        if (this.tooltipElement) {
          overlay = new Overlay({
            // @ts-expect-error - Type 'Element' is missing the following properties from type 'HTMLElement'
            element: this.tooltipElement,
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
    }
    // Set up event listeners to handle pointer leave events
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

    const pickedCoordinate = (
      /** @type {import("ol/MapBrowserEvent").default} */ event,
    ) => {
      // If a projection is specified, use it to transform the coordinates
      // Otherwise, default to EPSG:4326
      if (options?.projection) {
        // Register the projection if it is not already registered
        if (!proj4.defs(options.projection?.name)) {
          proj4.defs(
            options.projection?.name,
            options?.projection?.proj4_string,
          );
          register(proj4);
        }
      }
      const outProjection = getProjection(
        options?.projection?.name || "EPSG:4326",
      );
      const mapProjection = eoxMap.map.getView().getProjection().getCode();
      const coordinates = transform(
        event.coordinate,
        mapProjection,
        outProjection,
      );

      return {
        lon: coordinates[0].toFixed(options?.precision || 2),
        lat: coordinates[1].toFixed(options?.precision || 2),
      };
    };

    const hasNoZeros = (obj) => {
      // Check if the object has no zero values
      return Object.values(obj).every((value) => value !== 0);
    };

    // If the selectLayer is a VectorLayer or VectorTile, set up the selection styling layer
    if (
      this.selectLayer instanceof VectorLayer ||
      this.selectLayer instanceof VectorTile
    ) {
      /** @type {Array<string|number>} **/
      this.selectedFids = [];

      // Set up the layer for the selection styling
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

      // Create a new layer for the selection styling
      this.selectStyleLayer =
        /** @type {VectorLayer<import("ol/source").Vector>|VectorTile<import("ol/source").VectorTile>} */ (
          createLayer(eoxMap, layerDefinition)
        );
      //@ts-expect-error - TODO
      this.selectStyleLayer.setSource(this.selectLayer.getSource());
      this.selectStyleLayer.setMap(this.eoxMap.map);

      // Set up the initial style for the selection layer
      const initialStyle = this.selectStyleLayer.getStyleFunction();
      this.selectStyleLayer.setStyle(
        /**
         * @param {import("ol/Feature").FeatureLike} feature
         * @param {number} resolution
         * **/
        (feature, resolution) => {
          if (
            this.selectedFids.length &&
            this.selectedFids.includes(this.getId(feature))
          ) {
            return initialStyle(feature, resolution); // Apply style only if the feature is selected
          }
          return null;
        },
      );

      /**
       * Listener to handle selection events
       * @param {import("ol/MapBrowserEvent").default} event
       * **/
      this.listener = (event) => {
        if (!this.active || event.dragging) {
          return;
        }
        const currentZoom = this.eoxMap.map.getView().getZoom();
        if (
          currentZoom < this.selectLayer.getMinZoom() ||
          currentZoom > this.selectLayer.getMaxZoom()
        ) {
          return;
        }

        // Fetch features at the clicked pixel
        this.selectLayer.getFeatures(event.pixel).then((features) => {
          const feature = features.length ? features[0] : null;

          const newSelectFids = feature ? [this.getId(feature)] : [];
          const idChanged = this.selectedFids[0] !== newSelectFids[0];
          this.selectedFids = newSelectFids;
          if (idChanged) {
            this.selectStyleLayer.changed();
            if (feature && this.panIn) this.panIntoFeature(feature);
          }

          // Fetch features at the clicked pixel
          if (overlay) {
            const xPosition =
              event.pixel[0] > this.eoxMap.offsetWidth / 2 ? "right" : "left";
            const yPosition =
              event.pixel[1] > this.eoxMap.offsetHeight / 2 ? "bottom" : "top";
            overlay.setPositioning(`${yPosition}-${xPosition}`);
            overlay.setPosition(feature ? event.coordinate : null);
            if (feature && this.tooltipElement) {
              // @ts-expect-error TODO
              this.tooltipElement.feature = feature;
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

      // Set up the map event listener for the specified condition (e.g., click, pointermove)
      this.eoxMap.map.on(options.condition || "click", this.listener);

      // Set up the map event listener for the specified condition (e.g., click, pointermove)
      this.selectLayer.on("change:opacity", () => {
        this.selectStyleLayer.setOpacity(this.selectLayer.getOpacity());
      });

      this.selectLayer.on("change:visible", () => {
        const visible = this.selectLayer.getVisible();
        this.selectStyleLayer.setVisible(visible);
        this.setActive(visible);
      });

      // Set up the map event listener for the specified condition (e.g., click, pointermove)
      this.changeSourceListener = () => {
        //@ts-expect-error - TODO
        this.selectStyleLayer.setSource(this.selectLayer.getSource());
      };

      this.selectLayer.on("change:source", this.changeSourceListener);

      // Set up the map event listener for the specified condition (e.g., click, pointermove)
      const changeLayerListener = () => {
        if (eoxMap.getLayerById(anyLayer.get("id"))) {
          // If a select layer exists, keep it in current activation state
          // (active/inactive) and assign it (and the overlay) to the map
          this.selectStyleLayer?.setMap(this.eoxMap.map);
          overlay?.setMap(this.eoxMap.map);
        } else {
          // If the selection layer does not exist any more,
          // remove layer association and remove the overlay from the map
          this.selectStyleLayer?.setMap(null);
          overlay?.setMap(null);
        }
      };
      eoxMap.map.getLayerGroup().on("change", changeLayerListener);

      /**
       * Adds a listener on pointermove
       * the listener is more complex than `l === selectLayer` to
       * prevent multiple select-interactions from overriding eachother
       */
      this.pointerMoveListener = (e) => {
        if (e.dragging) return;
        eoxMap.map.getTargetElement().style.cursor =
          eoxMap.map.hasFeatureAtPixel(e.pixel, {
            layerFilter: (l) =>
              l
                .get("_jsonDefinition")
                ?.interactions?.find(
                  (i) => i.type == "select" && i.options?.condition === "click",
                ),
            ...options.atPixelOptions,
          })
            ? options.cursor || "pointer"
            : this.eoxMap.interactions.drawInteraction?.getActive()
              ? "crosshair"
              : "auto";
      };
      eoxMap.map.on("pointermove", this.pointerMoveListener);
    }
    if (
      this.selectLayer.getSource() instanceof ImageWMS ||
      this.selectLayer.getSource() instanceof TileWMS
    ) {
      // If the selectLayer is an ImageWMS or TileWMS, set up the selection if there is a tooltip
      /**
       * Listener to handle selection events
       * @param {import("ol/MapBrowserEvent").default} event
       * **/
      this.listener = (event) => {
        if (!this.active || event.dragging) {
          return;
        }

        const viewResolution = eoxMap.map.getView().getResolution();
        const url = /** @type {ImageWMS | TileWMS} */ (
          this.selectLayer.getSource()
        ).getFeatureInfoUrl(
          event.coordinate,
          viewResolution,
          eoxMap.map.getView().getProjection(),
          { INFO_FORMAT: "application/json" },
        );
        if (url) {
          fetch(url)
            .then((response) => response.text())
            .then((responseFeature) => {
              // Fetch features at the clicked pixel
              if (overlay) {
                const xPosition =
                  event.pixel[0] > this.eoxMap.offsetWidth / 2
                    ? "right"
                    : "left";
                const yPosition =
                  event.pixel[1] > this.eoxMap.offsetHeight / 2
                    ? "bottom"
                    : "top";
                overlay.setPositioning(`${yPosition}-${xPosition}`);

                if (responseFeature && this.tooltipElement) {
                  const responseJson = JSON.parse(responseFeature);
                  let html;
                  if (
                    responseJson.type === "FeatureCollection" &&
                    responseJson.features.length > 0
                  ) {
                    html = responseJson.features[0];
                  } else if (responseJson.type === "Feature") {
                    html = responseJson;

                    this.tooltipElement.innerHTML = `<pre>${JSON.stringify(html.properties, null, 2)}</pre>`;
                  } else {
                    this.tooltipElement.innerHTML = `<pre>${responseFeature}</pre>`;
                  }
                  // add the picked coordinates to the html
                  if (options?.coordinates) {
                    Object.assign(html?.properties, pickedCoordinate(event));
                  }

                  // create a new ol feature from the response
                  const featureData = new Feature({
                    ...html?.properties,
                  });
                  // @ts-expect-error TODO
                  this.tooltipElement.feature = featureData;
                  overlay.setPosition(html ? event.coordinate : null);
                }
              }
            });
        }
      };
      // Set up the map event to click when the layer is wms or wms-tile
      if (options.condition == "click") {
        this.eoxMap.map.on(options.condition, this.listener);
      }
    }
    if (this.selectLayer.getProperties()?.type === "WebGLTile") {
      // If the selectLayer is a WebGLTile, set up the selection if there is a tooltip
      /**
       * Listener to handle selection events
       * @param {import("ol/MapBrowserEvent").default}
       event
       * **/

      this.listener = (event) => {
        if (!this.active || event.dragging) {
          return;
        }

        const data = this.selectLayer.getData(event.pixel);
        if (data) {
          if (overlay) {
            const xPosition =
              event.pixel[0] > this.eoxMap.offsetWidth / 2 ? "right" : "left";
            const yPosition =
              event.pixel[1] > this.eoxMap.offsetHeight / 2 ? "bottom" : "top";
            overlay.setPositioning(`${yPosition}-${xPosition}`);
            overlay.setPosition(event.coordinate);
            let html = {};
            //@ts-expect-error we do not expect type DataView
            for (const [i, value] of data.entries()) {
              const key = (i + 1).toString();
              html[`band${key}`] = value; // Log each key-value pair in the data object
            }
            if (!hasNoZeros(html)) {
              // If the html object has zero values, do not render the tooltip
              overlay.setPosition(null); // Hide the tooltip if there are zero values
            }
            // If the html object has no zero values, add the picked coordinates
            else if (this.tooltipElement) {
              // add the picked coordinates to the html
              if (options?.coordinates) {
                Object.assign(html, pickedCoordinate(event));
              }

              // create a new ol feature from the response
              const featureData = new Feature({
                ...html,
              });
              // @ts-expect-error TODO
              this.tooltipElement.feature = featureData;
              overlay.setPosition(
                Object.keys(html).length > 0 ? event.coordinate : null,
              );
            }
          }
        }
      };
      // Set up the map event listener for the specified condition (e.g., click, pointermove)
      this.eoxMap.map.on(options.condition || "click", this.listener);
    }
  }

  /**
   * Sets the active state of the interaction.
   * @param {boolean} active - Whether the interaction should be active.
   */
  setActive(active) {
    this.active = active;
  }

  /**
   * Pans the map to the specified feature or extent.
   * @param {Feature | RenderFeature | import("ol/extent").Extent} featureOrExtent - The feature or extent to pan to.
   * @param {Object} [options] - Additional options for the panning animation.
   */
  panIntoFeature = (featureOrExtent, options) => {
    const extent =
      featureOrExtent instanceof Feature ||
      featureOrExtent instanceof RenderFeature
        ? featureOrExtent.getGeometry().getExtent()
        : featureOrExtent;
    this.eoxMap.map.getView().fit(extent, options || { duration: 750 });
  };

  /**
   * Highlights features by their IDs and optionally pans into their extent.
   * @param {Array<string | number>} ids - Array of feature IDs to highlight.
   * @param {Object} [fitOptions] - Options for panning into the highlighted features.
   */
  highlightById(ids, fitOptions) {
    this.selectedFids = ids;
    if (ids.length && fitOptions) {
      const extent = createEmpty();
      if (this.selectLayer instanceof VectorLayer) {
        for (let i = 0; i < this.selectedFids.length; i++) {
          const id = this.selectedFids[i];
          const feature = /** @type {Feature} */ (
            this.selectLayer.getSource().getFeatureById(id)
          );
          if (feature && feature.getGeometry()) {
            extend(extent, feature.getGeometry().getExtent());
          }
        }
      } else if (this.selectLayer instanceof VectorTile) {
        const map = this.eoxMap.map;
        const allRenderedFeatures = this.selectLayer.getFeaturesInExtent(
          map.getView().calculateExtent(map.getSize()),
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

  /**
   * Removes the selection interaction and associated layers from the map.
   */
  remove() {
    this.eoxMap.map.un(this.options.condition || "click", this.listener);
    if (
      this.selectLayer instanceof VectorLayer ||
      this.selectLayer instanceof VectorTile
    ) {
      this.selectStyleLayer.setMap(null);
      delete this.eoxMap.selectInteractions[this.options.id];
      this.selectLayer.un("change:source", this.changeSourceListener);
      this.eoxMap.map.un("pointermove", this.pointerMoveListener);
    }
  }

  /**
   * Retrieves the ID of the given feature.
   * @param {Feature | RenderFeature} feature - The feature whose ID is to be retrieved.
   * @returns {string | number} - The ID of the feature.
   * @throws Will throw an error if no valid ID is found.
   */
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
    // if no id can be found, try to get the ol uid from openlayers
    if (getUid(feature) !== undefined) {
      return getUid(feature);
    }
    throw Error(
      "No feature id found. Please provide which feature property should be taken instead using idProperty.",
    );
  }
}

/**
 * Adds a `select` interaction to the map.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class.
 * @param {SelectLayer} selectLayer - Layer to be selected.
 * @param {SelectOptions | DrawOptions} options - Options for the select interaction.
 * @returns {EOxSelectInteraction} - The created selection interaction instance.
 *
 * @throws Will throw an error if an interaction with the specified ID already exists.
 */
export function addSelect(EOxMap, selectLayer, options) {
  if (EOxMap.interactions[options.id]) {
    throw Error(`Interaction with id: ${options.id} already exists.`);
  }
  EOxMap.selectInteractions[options.id] = new EOxSelectInteraction(
    EOxMap,
    selectLayer,
    // @ts-expect-error - Argument of type 'DrawOptions | SelectOptions' is not assignable to parameter of type 'SelectOptions'
    options,
  );

  return EOxMap.selectInteractions[options.id];
}
