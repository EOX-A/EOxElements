/**
 * Custom editor interface for eox-jsonform
 */
import { html } from "lit";
import { JSONEditor } from "@json-editor/json-editor/src/core.js";

class CustomEditorExample extends JSONEditor.AbstractEditor {
  build() {
    super.build();

    // control
    this.control = document.createElement("div");
    this.control.classList.add("form-control");

    // Create a select element
    this.input = document.createElement("select");
    this.input.setAttribute("id", this.path + "test");
    this.input.classList.add("form-select");

    const options = [
      {
        value: "true",
        label: "True",
        data: true,
        color: "green",
      },
      {
        value: "false",
        label: "False",
        data: false,
        color: "red",
      },
    ];

    // build options
    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.setAttribute("value", option.value);
      optionElement.textContent = option.label;
      optionElement.style.background = option.color;
      optionElement.style.color = "white";
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
    this.label.style.fontStyle = "italic";

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

const customEditorInterfaces = {
  args: {
    schema: {
      properties: {
        test: {
          type: "boolean",
          title: "Normal Boolean Editor Field",
        },
        test2: {
          type: "boolean",
          format: "custom",
          title: "Custom Boolean Editor Field",
        },
      },
    },
    value: {
      test: true,
      test2: true,
    },
    customEditorInterfaces: [
      {
        type: "boolean",
        format: "custom",
        func: CustomEditorExample,
      },
    ],
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .value=${args.value}
      .noShadow=${false}
      .unstyled=${args.unstyled}
      .customEditorInterfaces=${args.customEditorInterfaces}
      @change=${args.onChange}
    ></eox-jsonform>
  `,
};

export default customEditorInterfaces;
