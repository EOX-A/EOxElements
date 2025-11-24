import { AbstractEditor } from "@json-editor/json-editor/src/editor.js";

export class ButtonsEditor extends AbstractEditor {
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

    if (!options.compact) {
      this.header = this.label = theme.getFormInputLabel(
        this.getTitle(),
        this.isRequired(),
      );
    }

    if (description) {
      this.description = theme.getFormInputDescription(
        this.translateProperty(description),
      );
    }

    if (options.infoText) {
      this.infoButton = theme.getInfoButton(
        this.translateProperty(options.infoText),
      );
    }

    this.input = document.createElement("input");
    this.input.type = "hidden";
    this.input.name = this.formname;

    this.buttonContainer = document.createElement("nav");
    this.buttonContainer.classList.add("btn-group", "group", "scroll");

    this.buttons = [];
    const enumValues = this.schema.enum || [];
    const enumTitles = options.enum_titles || [];

    enumValues.forEach((value, i) => {
      const title = enumTitles[i] || value;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = this.translateProperty(title);
      btn.setAttribute("data-value", value);

      btn.classList.add("btn", "small", "no-round");

      if (i === 0) {
        btn.classList.add("left-round");
      }

      if (i === enumValues.length - 1) {
        btn.classList.add("right-round");
      }

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setValue(value);
        this.onChange(true);
      });

      this.buttons.push(btn);
      this.buttonContainer.appendChild(btn);
    });

    this.control = theme.getFormControl(
      this.label,
      this.buttonContainer,
      this.description,
      this.infoButton,
    );

    this.container.appendChild(this.input);
    this.container.appendChild(this.control);

    if (this.schema.readOnly || this.schema.readonly) {
      this.disable(true);
    }
  }

  setValue(value) {
    if (this.schema.type === "integer" || this.schema.type === "number") {
      value = Number(value);
    }

    this.value = value;
    this.input.value = value;

    this.buttons.forEach((btn) => {
      const btnVal = btn.getAttribute("data-value");

      if (btnVal == value) {
        btn.classList.add("active", "btn-primary");
        btn.classList.remove("btn-default", "btn-secondary");
      } else {
        btn.classList.remove("active", "btn-primary");
        btn.classList.add("btn-default", "btn-secondary");
      }
    });

    this.onChange();
  }

  enable() {
    if (!this.always_disabled) {
      this.buttons.forEach((btn) => (btn.disabled = false));
      super.enable();
    }
  }

  disable(always_disabled) {
    if (always_disabled) this.always_disabled = true;
    this.buttons.forEach((btn) => (btn.disabled = true));
    super.disable();
  }

  destroy() {
    if (this.buttonContainer && this.buttonContainer.parentNode) {
      this.buttonContainer.parentNode.removeChild(this.buttonContainer);
    }
    this.buttons = null;
    super.destroy();
  }
}
