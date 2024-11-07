class MockedDrawTools extends HTMLElement {
  static observedAttributes = [
    "for",
    "layer-id",
    "multiple-features",
    "show-editor",
    "show-list",
    "type",
  ];
  constructor() {
    super();
    this.for = "";
    this["layer-id"] = "";
    this["multiple-features"] = false;
    this["show-editor"] = false;
    this["show-list"] = false;
    this.type = "";
  }
}

customElements.define("eox-drawtools", MockedDrawTools);
