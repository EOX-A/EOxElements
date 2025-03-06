import { AbstractEditor } from "@json-editor/json-editor/src/editor.js";

class UploadEditor extends AbstractEditor {
  register() {
    super.register();
  }

  unregister() {
    super.unregister();
  }

  // Build the editor UI
  build() {
    const options = this.options;
    const description = this.schema.description;
    const theme = this.theme;
    const startVals = this.defaults;
    const schema = this.schema;

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

    const uploadEle = document.createElement("div");
    uploadEle.style.cssText =
      "display: flex; gap: 10px; justify-content: center; align-items: center;";

    const input = document.createElement("input");
    input.type = "text";
    input.value = schema.default;

    const verticleDivider = document.createElement("div");
    verticleDivider.style.cssText =
      "width: 2px; height: 24px; background: rgba(0, 0, 0, 0.25);";

    const button = document.createElement("button");
    button.classList.add("upload-button");
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white"><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>`;
    button.style.padding = "10px";
    button.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default button behavior

      const fileInput = document.createElement("input");
      fileInput.id = "upload-file-input";
      fileInput.type = "file";
      fileInput.accept = schema.accept || "image/*,video/*";
      fileInput.style.display = "none";

      fileInput.addEventListener("change", (e) => {
        // @ts-ignore
        const file = e.target.files[0];
        if (file) {
          const loader = document.createElement("div");
          loader.innerText = "Uploading...";
          loader.classList.add("loader-element");
          loader.style.cssText =
            "display: flex; justify-content: center; align-items: center; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 39, 66, 0.6); z-index: 99999999;font-weight: 500; color: white;";
          document.body.appendChild(loader);

          const update = (url, error) => {
            if (error) {
              alert(error.message);
              loader.remove();
              return;
            }
            input.value = url;
            input.focus();
            this.value = url;
            this.onChange(true);
            loader.remove();
          };
          const event = new CustomEvent("upload:file", {
            detail: { file, update },
            bubbles: true,
            composed: true,
          });
          this.input.dispatchEvent(event);
        }
        fileInput.remove();
      });
      uploadEle.appendChild(fileInput);

      fileInput.click();
      return false; // Prevent form submission
    });

    uploadEle.appendChild(input);
    uploadEle.appendChild(verticleDivider);
    uploadEle.appendChild(button);

    this.input = uploadEle;
    this.input.id = this.formname;
    this.input.setAttribute("name", this.formname);
    this.input.setAttribute("value", startVals);

    this.control = theme.getFormControl(
      this.label,
      this.input,
      this.description,
      this.infoButton,
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

export default [
  {
    type: "string",
    format: "upload",
    func: UploadEditor,
    loaderElement: document.querySelector(".loader-element"),
  },
];
