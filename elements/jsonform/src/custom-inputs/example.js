import { JSONEditor } from "@json-editor/json-editor/src/core.js";

export default class CustomEditorExample extends JSONEditor.AbstractEditor {
  build() {
    super.build();

    // control
    this.control = document.createElement("div");

    // Create a select element
    this.input = document.createElement("select");
    this.input.setAttribute("id", this.path + "test");
    this.input.classList.add("form-select");

    const options = [
      {
        value: "true",
        label: "True",
        data: true,
      },
      {
        value: "false",
        label: "False",
        data: false,
      },
    ];

    // build options
    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.setAttribute("value", option.value);
      optionElement.textContent = option.label;
      if (this.defaults.startVals[this.key] === option.data) {
        optionElement.selected = true;
      }
      this.input.appendChild(optionElement);
    });

    // label
    this.label = document.createElement("label");
    this.label.setAttribute("for", this.path + "test");
    this.label.classList.add("form-check-label");
    this.label.textContent = this.schema.title;

    // appends
    this.container.appendChild(this.control);
    this.control.appendChild(this.label);
    this.control.appendChild(this.input);
  }

  postBuild() {
    super.postBuild();

    this.input.addEventListener("change", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.value = e.currentTarget.checked;
      this.onChange(true);
    });
  }
}
