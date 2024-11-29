import { AbstractEditor } from "@json-editor/json-editor/src/editor.js";
import {
  isBox,
  isMulti,
  isPoint,
  isPolygon,
  isSelection,
  isWKT,
  isGeoJSON,
  setAttributes,
} from "./utils";
// import "@eox/drawtools";

// Define a custom editor class extending AbstractEditor
export class SpatialEditor extends AbstractEditor {
  register() {
    super.register();
  }

  unregister() {
    super.unregister();
  }

  // Build the editor UI
  build() {
    const options = this.options;
    const description = this.schema.description;
    const theme = this.theme;

    // Create label and description elements if not in compact mode
    if (!options.compact)
      this.header = this.label = theme.getFormInputLabel(
        this.getTitle(),
        this.isRequired(),
      );
    if (description)
      this.description = theme.getFormInputDescription(
        this.translateProperty(description),
      );
    if (options.infoText)
      this.infoButton = theme.getInfoButton(
        this.translateProperty(options.infoText),
      );

    const drawtoolsEl = /** @type {import("@eox/drawtools").EOxDrawTools} */ (
      document.createElement("eox-drawtools")
    );

    let drawType;
    switch (true) {
      case isPolygon(this.schema):
        drawType = "Polygon";
        break;
      case isBox(this.schema):
        drawType = "Box";
        break;
      case isPoint(this.schema):
        drawType = "Point";
        break;
      default:
        drawType = "Box";
        break;
    }

    let format;
    switch (true) {
      case isWKT(this.schema):
        format = "wkt";
        break;
      case isGeoJSON(this.schema):
        format = "geojson";
        break;
      default:
        format = "feature";
        break;
    }

    const attributes = {
      type: drawType,
      format,
    };

    if (this.schema?.options?.projection) {
      attributes.projection = this.schema.options.projection;
    }

    if (isSelection(this.schema)) {
      attributes["layer-id"] = this.schema.options.layerId;
    }
    if (isMulti(this.schema)) {
      attributes["multiple-features"] = true;
      attributes["show-list"] = true;
    }

    if ("for" in (this.schema.options ?? {})) {
      attributes.for = this.options.for;
    } else {
      // We need to create a map
      const eoxmapEl = document.createElement("eox-map");
      eoxmapEl.projection = "EPSG:4326";
      const mapId = "map-" + this.formname.replace(/[^\w\s]/gi, "");
      eoxmapEl.layers = [{ type: "Tile", source: { type: "OSM" } }];

      setAttributes(eoxmapEl, {
        id: mapId,
        style: "width: 100%; height: 300px;",
      });
      this.container.appendChild(eoxmapEl);
      drawtoolsEl.for = eoxmapEl;
    }
    setAttributes(drawtoolsEl, attributes);
    const autoDraw = !(options.autoStartSelection === false);
    if (autoDraw) {
      drawtoolsEl.updateComplete.then(() => {
        drawtoolsEl.startDrawing();
      });
    }

    this.input = drawtoolsEl;
    this.input.id = this.formname;
    this.control = theme.getFormControl(
      this.label,
      this.input,
      this.description,
      this.infoButton,
    );

    if (this.schema.readOnly || this.schema.readonly) {
      this.disable(true);
      this.input.disabled = true;
    }

    const featureProperty = this.schema?.options?.featureProperty;

    /**
     * Ensures that features of length 1 are not returned as an array
     *
     * @param {import("ol/Feature").default|import("ol/Feature").default[]} features
     * @param {(feature:import("ol/Feature").default) => any} callback
     */
    const spreadFeatures = (features, callback) => {
      if (features.length) {
        if (!isMulti(this.schema) && features.length === 1) {
          return callback(features[0]);
        }
        return features.map(callback);
      } else {
        return callback(features);
      }
    };

    // Add event listener for change events on the draw tools
    this.input.addEventListener(
      "drawupdate",
      /** @type {EventListener} */ (
        /**
         * @param {CustomEvent<import("ol/Feature").default|import("ol/Feature").default[]>} e
         */
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          switch (true) {
            case !e.detail: {
              this.value = null;
              break;
            }
            case isWKT(this.schema): {
              // returns the wkt string
              this.value = e.detail;
              break;
            }
            case isGeoJSON(this.schema): {
              const featureCollection = e.detail;
              if (isMulti(this.schema)) {
                this.value = featureCollection;
                break;
              }
              this.value = featureCollection.features?.[0] ?? null;
              break;
            }
            case isSelection(this.schema): {
              if (!e.detail.length) {
                this.value = null;
                break;
              }
              /** @param {import("ol/Feature").default} feature */
              const getProperty = (feature) =>
                featureProperty
                  ? (feature.get(featureProperty) ?? feature)
                  : feature;

              this.value = spreadFeatures(e.detail, getProperty);
              break;
            }
            case isBox(this.schema): {
              if (!e.detail.length) {
                this.value = null;
                break;
              }
              /** @param {import("ol/Feature").default} feature */
              const getExtent = (feature) => feature.getGeometry().getExtent();
              this.value = spreadFeatures(e.detail, getExtent);
              break;
            }
            case isPolygon(this.schema): {
              if (!e.detail.length) {
                this.value = null;
                break;
              }
              this.value = spreadFeatures(e.detail, (feature) => feature);
              break;
            }
            case isPoint(this.schema): {
              if (!e.detail.length) {
                this.value = null;
                break;
              }
              this.value = spreadFeatures(e.detail, (feature) =>
                //@ts-expect-error  getCoordinates does not exist on Geometry
                feature.getGeometry()?.getCoordinates(),
              );
              break;
            }
            default:
              break;
          }

          this.onChange(true);
        }
      ),
    );
    this.container.appendChild(this.control);
  }

  // Destroy the editor and remove all associated elements
  destroy() {
    if (this.label && this.label.parentNode)
      this.label.parentNode.removeChild(this.label);
    if (this.description && this.description.parentNode)
      this.description.parentNode.removeChild(this.description);
    if (this.input && this.input.parentNode) {
      this.input.parentNode.removeChild(this.input);
      this.input.remove();
    }
    super.destroy();
  }
}
