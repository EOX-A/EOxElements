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
    this.for = "";
    this["layer-id"] = "";
    this["multiple-features"] = false;
    this["show-editor"] = false;
    this["show-list"] = false;
    this.projection = "EPSG:4326";
    this.type = "";
  }
}

customElements.define("eox-drawtools", MockedDrawTools);
