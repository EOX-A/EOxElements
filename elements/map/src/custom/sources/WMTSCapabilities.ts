import { TileImage } from "ol/source";
import { RequestEncoding, optionsFromCapabilities } from "ol/source/WMTS";
import WMTSCapabilitiesFormat from "ol/format/WMTSCapabilities.js";
import { createFromTileUrlFunctions } from "ol/tileurlfunction.js";
import { appendParams } from "ol/uri.js";

type optionalWmtsConfig = {
  matrixSet: string; // The matrix set identifier, required if there is more than one matrix set in the layer capabilities.
  projection: string; // The desired CRS when no matrixSet is specified. eg: "EPSG:3857". If the desired projection is not available, an error is thrown.
  requestEncoding: RequestEncoding; // url encoding format for the layer. Default is the first tile url format found in the GetCapabilities response.
  style: string; // The name of the style
  format: string; // Image format for the layer. Default is the first format returned in the GetCapabilities response.
  crossOrigin: string | null | undefined; // Cross origin. Default is `undefined`.
  dimensions: string; // TO DO
  version: string; // TO DO
};

type WMTSCapabilitiesOptions = {
  url: string;
  layer: string;
  config: optionalWmtsConfig;
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
      projection: options.projection,
      state: options.state,
      tileGrid: options.tileGrid,
      tilePixelRatio: options.tilePixelRatio,
      transition: options.transition,
      interpolate: options.interpolate,
      //key: options.key,
      attributionsCollapsible: options.attributionsCollapsible,
      zDirection: options.zDirection,
      /*tileLoadFunction: function (imageTile, src) {
        console.log("tileLoad");
        console.log(src);
        imageTile.getImage().src = src;
      },*/
    });

    /**
     * @private
     * @type {string}
     */
    this.version_ = options.config?.version !== undefined ? options.config?.version : "1.0.0";

    /**
     * @private
     * @type {string}
     */
    this.format_ = options.config?.format !== undefined ? options.config?.format : "image/jpeg";

    /**
     * @private
     * @type {!Object}
     */
    this.dimensions_ =
      options.config?.dimensions !== undefined ? options.config?.dimensions : {};

    /**
     * @private
     * @type {string}
     */
    this.layer_ = options.layer;

    /**
     * @private
     * @type {string}
     */
    this.matrixSet_ = options.config?.matrixSet;

    /**
     * @private
     * @type {string}
     */
    this.style_ = options.config?.style || 'default';

    fetch(options.url)
      .then((response) => response.text())
      .then((xml) =>
        new window.DOMParser().parseFromString(xml, "application/xml")
      )
      .then((xml) => {
        this.handleCapabilitiesResponse(xml, options);
      });
  }

  version_: string = "1.0.0";
  format_: string = "image/jpeg";
  dimensions_: object = {};
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
    const capabilitiesOptions = optionsFromCapabilities(
      parsedXml,
      options
    );

    this.projection = capabilitiesOptions.projection;
    this.tileGrid = capabilitiesOptions.tileGrid;
    this.requestEncoding_ = capabilitiesOptions.requestEncoding;
    this.matrixSet_ = capabilitiesOptions.matrixSet;
    this.style_ = capabilitiesOptions.style;
    this.format_ = capabilitiesOptions.format;
    this.dimensions_ = capabilitiesOptions.dimensions;
    console.log(this.tileGrid);
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
        console.log("tileUrlFunction");
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
