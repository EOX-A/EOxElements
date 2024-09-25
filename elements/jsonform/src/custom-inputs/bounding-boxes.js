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
export class BoundingBoxesEditor extends AbstractEditor {
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
        this.isRequired()
      );
    if (description)
      this.description = theme.getFormInputDescription(
        this.translateProperty(description)
      );
    if (options.infoText)
      this.infoButton = theme.getInfoButton(
        this.translateProperty(options.infoText)
      );

    const drawtoolsEl = document.createElement("eox-drawtools");

    const attributes = {
      type: "Box",
    };
    if (this.schema.format === "bounding-boxes") {
      attributes["multiple-features"] = true;
    }

    if ("for" in this.options) {
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
      drawtoolsEl.for = "eox-map#" + mapId;
    }
    setAttributes(drawtoolsEl, attributes);

    this.input = drawtoolsEl;
    this.input.id = this.formname;
    this.control = theme.getFormControl(
      this.label,
      this.input,
      this.description,
      this.infoButton
    );

    if (this.schema.readOnly || this.schema.readonly) {
      this.disable(true);
      this.input.disabled = true;
    }

    // Add event listener for change events on the draw tools
    this.input.addEventListener("drawupdate", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.schema.format === "bounding-boxes") {
        this.value = e.detail.map((val) => {
          return val.getGeometry().getExtent();
        });
      } else if (e.detail.length > 0) {
        this.value = e.detail[0].getGeometry().getExtent();
      }
      this.onChange(true);
    });

    this.container.appendChild(this.control);
  }

  // Destroy the editor and remove all associated elements
  destroy() {
    if (this.label && this.label.parentNode)
      this.label.parentNode.removeChild(this.label);
    if (this.description && this.description.parentNode)
      this.description.parentNode.removeChild(this.description);
    if (this.input && this.input.parentNode)
      this.input.parentNode.removeChild(this.input);
    super.destroy();
  }
}
