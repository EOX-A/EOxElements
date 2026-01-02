import { AbstractEditor } from "@json-editor/json-editor/src/editor.js";

export class BinaryCheckboxEditor extends AbstractEditor {
  register() {
    super.register();
  }

  unregister() {
    super.unregister();
  }

  build() {
    const options = this.options;
    const description = this.schema.description;
    const theme = this.theme;

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

    this.input = document.createElement("input");
    this.input.setAttribute("type", "checkbox");
    this.input.id = this.formname;

    // Add left margin to checkbox to align with other input fields
    this.input.style.marginLeft = "4px";

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

    this.input.addEventListener("change", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.value = (/** @type {HTMLInputElement} */(e.target)).checked ? 1 : 0;
      this.onChange(true);
    });

    this.container.appendChild(this.control);
  }

  setValue(value) {
    this.value = value;
    this.input.checked = this.value === 1;
    this.onChange(true);
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
