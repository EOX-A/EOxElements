import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

class CustomEditorExample extends JSONEditor.AbstractEditor {
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

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;
const schema = {
  properties: {
    test: {
      type: "boolean",
      format: "custom",
      title: "Custom Editor Field",
    },
  },
};

const loadCustomEditorInterfaceTest = () => {
  cy.mount(
    html`<eox-jsonform
      .customEditorInterfaces=${[
        {
          type: "boolean",
          format: "custom",
          func: CustomEditorExample,
        },
      ]}
      .schema=${schema}
      .value=${{
        test: false,
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get("select").should("exist");
      cy.get("label.form-check-label").should(
        "have.text",
        schema.properties.test.title,
      );
      cy.get("select").should("have.value", "false");
      cy.get("select").select("true");
      cy.get("select").should("have.value", "true");
    });
};

export default loadCustomEditorInterfaceTest;
