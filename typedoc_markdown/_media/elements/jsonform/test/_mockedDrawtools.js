class MockedDrawTools extends HTMLElement {
  static observedAttributes = [
    "for",
    "layer-id",
    "multiple-features",
    "show-editor",
    "show-list",
    "type",
    "projection",
  ];

  constructor() {
    super();
    this._for = "";
    this._layerId = "";
    this._multipleFeatures = false;
    this._showEditor = false;
    this._showList = false;
    this._projection = "EPSG:4326";
    this._type = "";
    this._format = "feature";
    this.updateComplete = new Promise((resolve) => resolve(true));
    this.startDrawing = () => {};
    this.handleFeatureChange = (features) => {
      this._features = features;
    };
  }

  // Getters and setters for properties
  get for() {
    return this._for;
  }

  set for(value) {
    this._for = value;
    this.setAttribute("for", value);
  }

  get ["layer-id"]() {
    return this._layerId;
  }
  get layerId() {
    return this._layerId;
  }

  set ["layer-id"](value) {
    this._layerId = value;
    this.setAttribute("layer-id", value);
  }
  set layerId(value) {
    this["layer-id"] = value;
  }

  get ["multiple-features"]() {
    return this._multipleFeatures;
  }
  get multipleFeatures() {
    return this._multipleFeatures;
  }

  set ["multiple-features"](value) {
    this._multipleFeatures = value;
    if (this._multipleFeatures) {
      this.setAttribute("multiple-features", value.toString());
    } else {
      this.removeAttribute("multiple-features");
    }
  }
  set multipleFeatures(value) {
    this["multiple-features"] = value;
  }

  get ["show-editor"]() {
    return this._showEditor;
  }

  set ["show-editor"](value) {
    this._showEditor = value;
    if (this._showEditor) {
      this.setAttribute("show-editor", value.toString());
    } else {
      this.removeAttribute("show-editor");
    }
  }

  get ["show-list"]() {
    return this._showList;
  }

  get showList() {
    return this._showList;
  }

  set ["show-list"](value) {
    this._showList = value;
    if (this._showList) {
      this.setAttribute("show-list", value.toString());
    } else {
      this.removeAttribute("show-list");
    }
  }
  set showList(value) {
    this["show-list"] = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
    this.setAttribute("type", value);
  }

  get projection() {
    return this._projection;
  }

  set projection(value) {
    this._projection = value;
    this.setAttribute("projection", value);
  }

  get format() {
    return this._format;
  }

  set format(value) {
    this._format = value;
    this.setAttribute("format", value);
  }

  // Handle attribute changes to update properties
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    switch (name) {
      case "for":
        this._for = newValue || "";
        break;
      case "layer-id":
        this._layerId = newValue || "";
        break;
      case "multiple-features":
        this._multipleFeatures = newValue !== null;
        break;
      case "show-editor":
        this._showEditor = newValue !== null;
        break;
      case "show-list":
        this._showList = newValue !== null;
        break;
      case "type":
        this._type = newValue || "";
        break;
      case "projection":
        this._projection = newValue || "EPSG:4326";
        break;
    }
  }
}

customElements.define("eox-drawtools", MockedDrawTools);
