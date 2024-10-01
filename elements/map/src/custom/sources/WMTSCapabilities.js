import { TileImage } from "ol/source";
import { optionsFromCapabilities } from "ol/source/WMTS";
import WMTSCapabilitiesFormat from "ol/format/WMTSCapabilities";
import { createFromTileUrlFunctions } from "ol/tileurlfunction";
import { appendParams } from "ol/uri";

/**
 * @typedef {import("../../../types").WMTSCapabilitiesOptions} WMTSCapabilitiesOptions
 */

class WMTSCapabilities extends TileImage {
  /**
   * Constructs a WMTS capabilities instance and fetches the WMTS capabilities XML from the provided URL.
   *
   * @param {WMTSCapabilitiesOptions} options - Image tile options including URL, layer, and other properties.
   */
  constructor(options) {
    super({
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      tilePixelRatio: options.tilePixelRatio,
      transition: options.transition,
      interpolate:
        options.interpolate !== undefined ? options.interpolate : true,
      key: options.key,
      attributionsCollapsible: options.attributionsCollapsible,
      zDirection: options.zDirection,
      wrapX: options.wrapX,
    });

    // Store WMTS-specific properties
    this.version_ = options.version !== undefined ? options.version : "1.0.0";
    this.dimensions_ =
      options.dimensions !== undefined ? options.dimensions : {};
    this.layer_ = options.layer;

    // Fetch WMTS capabilities XML from the provided URL
    fetch(options.url)
      .then((response) => response.text())
      .then((xml) =>
        new window.DOMParser().parseFromString(xml, "application/xml")
      )
      .then((xml) => {
        this.handleCapabilitiesResponse(xml, options);
      });
  }

  /**
   * Handles the WMTS capabilities XML response by parsing it and setting up the necessary properties.
   *
   * @param {Document} xml - The XML document containing WMTS capabilities.
   * @param {WMTSCapabilitiesOptions} options - Options for WMTS capabilities.
   */
  handleCapabilitiesResponse(xml, options) {
    const format = new WMTSCapabilitiesFormat();

    // Parse the WMTS capabilities XML document
    const parsedXml = format.read(xml);

    // Generate WMTS options from the parsed capabilities and input options
    const capabilitiesOptions = optionsFromCapabilities(parsedXml, options);

    // Set various properties from the parsed capabilities
    this.crossOrigin = capabilitiesOptions.crossOrigin;
    this.projection = /** @type {import("ol/proj").Projection} */ (
      capabilitiesOptions.projection
    );
    this.tileGrid = capabilitiesOptions.tileGrid;
    this.requestEncoding_ = capabilitiesOptions.requestEncoding;
    this.matrixSet_ = capabilitiesOptions.matrixSet;
    this.style_ = capabilitiesOptions.style;
    this.format_ = capabilitiesOptions.format;
    this.dimensions_ = capabilitiesOptions.dimensions;

    // Set URLs for the tile source
    this.setUrls(capabilitiesOptions.urls);

    if (this.urls && this.urls.length > 0) {
      // Create the tile URL function from the provided URLs and the WMTS template
      this.tileUrlFunction = createFromTileUrlFunctions(
        this.urls.map(this.createFromWMTSTemplate.bind(this))
      );
    }
    this.setState("ready");
  }

  /**
   * Creates a URL function for WMTS tiles based on a template.
   *
   * @param {String} template - The WMTS URL template.
   */
  createFromWMTSTemplate(template) {
    const requestEncoding = this.requestEncoding_;

    // Context for the URL, including layer, style, and tile matrix set
    const context = {
      layer: this.layer_,
      style: this.style_,
      tilematrixset: this.matrixSet_,
    };

    if (requestEncoding === "KVP") {
      Object.assign(context, {
        Service: "WMTS",
        Request: "GetTile",
        Version: this.version_,
        Format: this.format_,
      });
    }

    // Prepare the URL template based on the request encoding type (KVP or RESTful)
    template =
      requestEncoding === "KVP"
        ? appendParams(template, context)
        : template.replace(/\{(\w+?)\}/g, (m, p) =>
            // @ts-expect-error - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type
            p.toLowerCase() in context ? context[p.toLowerCase()] : m
          );

    const tileGrid =
      /** @type {import("ol/tilegrid/WMTS").default} **/ this.tileGrid;
    const dimensions = this.dimensions_;

    return (
      /**
       * Returns the tile URL based on the tile coordinates.
       *
       * @param {Array<number>} tileCoord - The tile coordinate.
       * @return {string|undefined} - The tile URL, or `undefined` if tileCoord is invalid.
       */
      function (tileCoord) {
        if (!tileCoord) {
          return undefined;
        }

        // Create the local context for the tile URL, including matrix, row, and column
        const localContext = {
          // @ts-expect-error - Property 'getMatrixId' does not exist on type 'TileGrid'
          TileMatrix: tileGrid.getMatrixId(tileCoord[0]),
          TileCol: tileCoord[1],
          TileRow: tileCoord[2],
        };
        Object.assign(localContext, dimensions);

        let url = template;

        // Generate the URL based on the request encoding type (KVP or RESTful)
        if (requestEncoding === "KVP") {
          url = appendParams(url, localContext);
        } else {
          // @ts-expect-error - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type
          url = url.replace(/\{(\w+?)\}/g, (_, p) => localContext[p]);
        }
        return url;
      }
    );
  }
}

export default WMTSCapabilities;
