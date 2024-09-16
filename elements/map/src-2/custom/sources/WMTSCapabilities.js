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
   * @param {WMTSCapabilitiesOptions} options - Image tile options.
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

    this.version_ = options.version !== undefined ? options.version : "1.0.0";
    this.dimensions_ =
      options.dimensions !== undefined ? options.dimensions : {};
    this.layer_ = options.layer;

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
   * @param {Document} xml - The XML document containing WMTS capabilities.
   * @param {WMTSCapabilitiesOptions} options - Options for WMTS capabilities.
   */
  handleCapabilitiesResponse(xml, options) {
    const format = new WMTSCapabilitiesFormat();
    const parsedXml = format.read(xml);
    const capabilitiesOptions = optionsFromCapabilities(parsedXml, options);

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
    this.setUrls(capabilitiesOptions.urls);

    if (this.urls && this.urls.length > 0) {
      this.tileUrlFunction = createFromTileUrlFunctions(
        this.urls.map(this.createFromWMTSTemplate.bind(this))
      );
    }
    this.setState("ready");
  }

  /**
   * @param {string} template - The WMTS URL template.
   * @return {import("../Tile.js").UrlFunction} - The tile URL function.
   */
  createFromWMTSTemplate(template) {
    const requestEncoding = this.requestEncoding_;

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

    template =
      requestEncoding === "KVP"
        ? appendParams(template, context)
        : template.replace(/\{(\w+?)\}/g, (m, p) =>
            p.toLowerCase() in context ? context[p.toLowerCase()] : m
          );

    const tileGrid = /** @type {import("../tilegrid/WMTS.js").default} */ (
      this.tileGrid
    );
    const dimensions = this.dimensions_;

    return (
      /**
       * @param {import("../tilecoord.js").TileCoord} tileCoord - The tile coordinate.
       * @return {string|undefined} - The tile URL.
       */
      function (tileCoord) {
        if (!tileCoord) {
          return undefined;
        }
        const localContext = {
          TileMatrix: tileGrid.getMatrixId(tileCoord[0]),
          TileCol: tileCoord[1],
          TileRow: tileCoord[2],
        };
        Object.assign(localContext, dimensions);

        let url = template;
        if (requestEncoding === "KVP") {
          url = appendParams(url, localContext);
        } else {
          url = url.replace(/\{(\w+?)\}/g, (_, p) => localContext[p]);
        }
        return url;
      }
    );
  }
}

export default WMTSCapabilities;
