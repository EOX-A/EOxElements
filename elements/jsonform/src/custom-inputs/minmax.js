import { AbstractEditor } from "@json-editor/json-editor/src/editor.js";
import "toolcool-range-slider/dist/plugins/tcrs-generated-labels.min.js";
import "toolcool-range-slider";

export class MinMaxEditor extends AbstractEditor {
  register() {
    super.register();
  }

  unregister() {
    super.unregister();
  }

  build() {
    if (!this.options.compact)
      this.header = this.label = this.theme.getFormInputLabel(
        this.getTitle(),
        this.isRequired()
      );
    if (this.schema.description)
      this.description = this.theme.getFormInputDescription(
        this.translateProperty(this.schema.description)
      );
    if (this.options.infoText)
      this.infoButton = this.theme.getInfoButton(
        this.translateProperty(this.options.infoText)
      );

    const range = document.createElement("tc-range-slider");
    // TODO - better logic to find min & max properties?
    const minKey = Object.keys(this.schema.properties).find((k) =>
      k.includes("min")
    );
    const maxKey = Object.keys(this.schema.properties).find((k) =>
      k.includes("max")
    );
    range.setAttribute("min", this.schema.properties[minKey].minimum);
    range.setAttribute("max", this.schema.properties[maxKey].maximum);
    range.setAttribute("value1", this.schema.properties[minKey].default);
    range.setAttribute("value2", this.schema.properties[maxKey].default);
    range.setAttribute("slider-bg-fill", "#004170");
    range.setAttribute("generate-labels", "true");
    range.setAttribute("slider-width", "100%");

    this.input = range;
    this.input.id = this.formname;
    this.control = this.theme.getFormControl(
      this.label,
      this.input,
      this.description,
      this.infoButton
    );

    if (this.schema.readOnly || this.schema.readonly) {
      this.disable(true);
      this.input.disabled = true;
    }

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
