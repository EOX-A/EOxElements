import { LitElement } from "lit";

/**
 * Base class providing handling of properties used in
 * multiple components
 */
export class EOxLayerControlBase extends LitElement {
  static properties = {
    idProperty: { attribute: "id-property" },
    map: { attribute: false, state: true },
    titleProperty: { attribute: "title-property", type: String },
    unstyled: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * The layer id property
     */
    this.idProperty = "id";

    /**
     * The native OL map
     * @type {import("ol").Map}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html}
     */
    this.map = null;

    /**
     * The layer title property
     */
    this.titleProperty = "title";

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;
  }
}
