import { AbstractEditor } from "@json-editor/json-editor/src/editor.js";
import "toolcool-range-slider/dist/plugins/tcrs-generated-labels.min.js";
import "toolcool-range-slider";

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
export class MinMaxEditor extends AbstractEditor {
  register() {
    super.register();
  }

  unregister() {
    super.unregister();
  }

  // Build the editor UI
  build() {
    const properties = this.schema.properties;
    const options = this.options;
    const description = this.schema.description;
    const theme = this.theme;
    const startVals = this.defaults.startVals[this.key];

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

    // Create the range slider element
    const range = document.createElement("tc-range-slider");
    // TODO - better logic to find min & max properties?
    const minKey = Object.keys(properties).find((k) => k.includes("min"));
    const maxKey = Object.keys(properties).find((k) => k.includes("max"));

    // Define attributes for the range slider
    const attributes = {
      min: properties[minKey].minimum,
      max: properties[maxKey].maximum,
      value1: startVals?.[minKey] || properties[minKey].default,
      value2: startVals?.[maxKey] || properties[maxKey].default,
      "slider-bg-fill": "#004170",
      "generate-labels": "true",
      "slider-width": "100%",
      "range-dragging": "false",
    };
    setAttributes(range, attributes);

    this.input = range;
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

    // Add event listener for change events on the range slider
    this.input.addEventListener("change", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.value = {
        [minKey]: e.detail.value1,
        [maxKey]: e.detail.value2,
      };
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
