import { AbstractEditor } from "@json-editor/json-editor/src/editor.js";
// import "@eox/drawtools";

/**
 * Set multiple attributes to an element
 *
 * @param {Element} element - The DOM element to set attributes on
 * @param {{[key: string]: any}} attributes - The attributes to set on the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

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
    // const properties = this.schema.properties;
    const options = this.options;
    const description = this.schema.description;
    const theme = this.theme;
    // const startVals = this.defaults.startVals[this.key];

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

    const drawtoolsEl = document.createElement("eox-drawtools");

    const isSelection = ["feature", "features"].some((f) =>
      this.schema.format.includes(f),
    );

    const isPolygon = ["polygon", "polygons"].some((p) =>
      this.schema.format.includes(p),
    );

    const isBox = ["bounding-boxes", "bounding-box"].some((p) =>
      this.schema.format.includes(p),
    );

    const isMulti = ["bounding-boxes", "polygons", "features"].some((m) =>
      this.schema.format.includes(m),
    );
    const enableEditor = this.schema.format.includes("editor");

    const drawType = isPolygon ? "Polygon" : "Box";
    const attributes = {
      type: drawType,
    };
    if (isSelection) {
      attributes["layer-id"] = this.schema.options.layerId;
    }
    if (isMulti) {
      attributes["multiple-features"] = true;
    }

    if (enableEditor) {
      attributes["import-features"] = true;
      attributes["show-editor"] = true;
    }

    if (isMulti) {
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
      attributes.for = "eox-map#" + mapId;
    }
    setAttributes(drawtoolsEl, attributes);

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
     * @param {(feature:import("ol/Feature").default)=>any} callback
     */
    const spreadFeatures = (features, callback) => {
      if (features.length) {
        if (features.length === 1) {
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
            case !e.detail || e.detail?.length === 0: {
              this.value = null;
              break;
            }
            case isSelection: {
              /** @param {import("ol/Feature").default} feature */
              const getProperty = (feature) =>
                featureProperty
                  ? (feature.get(featureProperty) ?? feature)
                  : feature;

              this.value = spreadFeatures(e.detail, getProperty);
              break;
            }
            case isBox: {
              /** @param {import("ol/Feature").default} feature */
              const getExtent = (feature) => feature.getGeometry().getExtent();
              this.value = spreadFeatures(e.detail, getExtent);
              break;
            }
            case isPolygon:
              this.value = spreadFeatures(e.detail, (feature) => feature);
              break;
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
