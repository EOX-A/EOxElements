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

    // Resolve initial values from the form's starting state
    // This is required in build() so the slider can initialize its visual state (SVG/labels) correctly.
    let startVals = this.jsoneditor.options.startval;
    this.path.split(".").forEach((p) => {
      if (p !== "root" && startVals) startVals = startVals[p];
    });

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

    // Create the range slider element
    const range =
      /** @type {HTMLInputElement & {value1: number, value2: number}}*/ (
        document.createElement("tc-range-slider")
      );
    // TODO - better logic to find min & max properties?
    this.minKey = Object.keys(properties).find((k) => k.includes("min"));
    this.maxKey = Object.keys(properties).find((k) => k.includes("max"));

    // Define attributes for the range slider
    const attributes = {
      min: properties[this.minKey].minimum,
      max: properties[this.maxKey].maximum,
      // only positive integer supported
      step: properties[this.minKey].step || properties[this.maxKey].step,
      value1: startVals?.[this.minKey] ?? properties[this.minKey].default,
      value2: startVals?.[this.maxKey] ?? properties[this.maxKey].default,
      "generate-labels": "true",
      "generate-labels-text-color": "currentColor",
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
      this.infoButton,
    );

    if (this.schema.readOnly || this.schema.readonly) {
      this.disable(true);
      this.input.disabled = true;
    }

    // Add event listener for change events on the range slider
    this.input.addEventListener(
      "change",
      /** @type {EventListener} */ (
        /**
         * @param {CustomEvent} e
         */
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.value = {
            [this.minKey]: e.detail.value1,
            [this.maxKey]: e.detail.value2,
          };
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
    if (this.input && this.input.parentNode)
      this.input.parentNode.removeChild(this.input);
    super.destroy();
  }
}
