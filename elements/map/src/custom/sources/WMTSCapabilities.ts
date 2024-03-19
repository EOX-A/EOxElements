import { TileImage } from "ol/source";
import { optionsFromCapabilities } from "ol/source/WMTS";
import WMTSCapabilitiesFormat from "ol/format/WMTSCapabilities.js";
import { createFromTileUrlFunctions } from "ol/tileurlfunction.js";
import { appendParams } from "ol/uri.js";
import { AttributionLike } from "ol/source/Source";
import { Projection, ProjectionLike } from "ol/proj";

type WMTSCapabilitiesOptions = {
  url: string;
  layer: string;
  attributions?: AttributionLike;
  attributionsCollapsible?: boolean;
  cacheSize?: number;
  crossOrigin?: null | string;
  interpolate?: boolean;
  projection?: ProjectionLike;
  transition?: number;
  opaque?: boolean;
  key?: string;
  tilePixelRatio?: number;
  zDirection?: number;
  wrapX?: boolean;
  dimensions: object;
  version: string;
};

class WMTSCapabilities extends TileImage {
  constructor(options: WMTSCapabilitiesOptions) {
    /**
     * @param {WMTSCapabilitiesOptions} options Image tile options.
     */
    super({
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      opaque: options.opaque,
      tilePixelRatio: options.tilePixelRatio,
      transition: options.transition,
      interpolate:
        options.interpolate !== undefined ? options.interpolate : true,
      key: options.key,
      attributionsCollapsible: options.attributionsCollapsible,
      zDirection: options.zDirection,
      wrapX: options.wrapX,
    });

    this.version_ = options.version !== undefined ? options?.version : "1.0.0";
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

  version_: string;
  dimensions_: object;
  format_: string;
  layer_: string;
  matrixSet_: string;
  style_: string;
  requestEncoding_: string;

  /**
   *
   * @param {Document} xml
   */
  handleCapabilitiesResponse(xml: Document, options: WMTSCapabilitiesOptions) {
    const format = new WMTSCapabilitiesFormat();
    const parsedXml = format.read(xml);
    const capabilitiesOptions = optionsFromCapabilities(parsedXml, options);

    this.crossOrigin = capabilitiesOptions.crossOrigin;
    this.projection = capabilitiesOptions.projection as Projection;
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
   * @param {string} template Template.
   * @return {import("../Tile.js").UrlFunction} Tile URL function.
   */
  createFromWMTSTemplate(template: string) {
    const requestEncoding = this.requestEncoding_;

    // context property names are lower case to allow for a case insensitive
    // replacement as some services use different naming conventions
    const context = {
      layer: this.layer_,
      style: this.style_,
      tilematrixset: this.matrixSet_,
    };

    if (requestEncoding == "KVP") {
      Object.assign(context, {
        Service: "WMTS",
        Request: "GetTile",
        Version: this.version_,
        Format: this.format_,
      });
    }

    template =
      requestEncoding == "KVP"
        ? appendParams(template, context)
        : template.replace(/\{(\w+?)\}/g, function (m, p) {
            //@ts-ignore
            return p.toLowerCase() in context ? context[p.toLowerCase()] : m;
          });

    const tileGrid =
      /** @type {import("../tilegrid/WMTS.js").default} */ this.tileGrid;
    const dimensions = this.dimensions_;

    return (
      /**
       * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
       * @return {string|undefined} Tile URL.
       */
      function (tileCoord: Array<number>) {
        if (!tileCoord) {
          return undefined;
        }
        const localContext = {
          //@ts-ignore
          TileMatrix: tileGrid.getMatrixId(tileCoord[0]),
          TileCol: tileCoord[1],
          TileRow: tileCoord[2],
        };
        Object.assign(localContext, dimensions);
        let url = template;
        if (requestEncoding == "KVP") {
          url = appendParams(url, localContext);
        } else {
          url = url.replace(/\{(\w+?)\}/g, function (m, p) {
            //@ts-ignore
            return localContext[p];
          });
        }
        return url;
      }
    );
  }
}

export default WMTSCapabilities;
