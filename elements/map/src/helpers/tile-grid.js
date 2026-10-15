import { createXYZ } from "ol/tilegrid";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { getTopLeft, getWidth, containsExtent } from "ol/extent";
import { equivalent, get as getProjection, transformExtent } from "ol/proj";
import { createFromCapabilitiesMatrixSet } from "ol/tilegrid/WMTS.js";

/**
 * Generates a tile grid for the specified source. If the source type is "WMTS",
 * a `WMTSTileGrid` is generated. Otherwise, an `XYZ` tile grid is generated using the
 * OpenLayers `createXYZ` function. Returns `undefined` if the layer's tile grid is not defined.
 *
 * @param {import("../layers").EoxSource<any>} source - The source configuration object, containing the tile grid information.
 * @returns {import("ol/tilegrid/WMTS").default | import("ol/tilegrid/TileGrid").default | undefined} - The generated tile grid or `undefined` if not applicable.
 */
export function generateTileGrid(source) {
  let tileGrid;

  // Return undefined if no tile grid is defined in the source
  if (!source || !("tileGrid" in source)) {
    return undefined;
  }

  if (source.type === "WMTS") {
    const projection = getProjection("EPSG:3857");
    const projectionExtent = projection.getExtent();

    // Calculate the size of the tiles based on the extent and desired resolution
    const size = getWidth(projectionExtent) / 128;

    // Calculate the size of the tiles based on the extent and desired resolution
    const resolutions = new Array(19);
    const matrixIds = new Array(19);

    for (let z = 0; z < 19; ++z) {
      // generate resolutions and matrixIds arrays for this WMTS
      resolutions[z] = size / Math.pow(2, z);
      matrixIds[z] = z;
    }

    // Create a new WMTSTileGrid using the calculated resolutions and matrix IDs
    tileGrid = new WMTSTileGrid({
      resolutions: resolutions,
      origin: getTopLeft(projectionExtent),
      // @ts-expect-error - 'projection' not specified inside WMTS.d.ts types
      projection: source.tileGrid.projection || "EPSG:3857",
      matrixIds: matrixIds,
      // @ts-expect-error source.tilegrid needs to be defined and spreadable
      ...source.tileGrid,
    });
  } else {
    // For non-WMTS sources, generate an XYZ tile grid
    tileGrid = createXYZ({
      // @ts-expect-error source.tilegrid needs to be defined and spreadable
      ...source.tileGrid,
    });
  }

  // Return the generated tile grid
  return tileGrid;
}

/**
 * Request encoding. One of 'KVP', 'REST'.
 * @typedef {'KVP' | 'REST'} RequestEncoding
 */

/**
 * @typedef {Object} Options
 * @property {import("ol/source/Source").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] Deprecated.  Use the cacheSize option on the layer instead.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {ReferrerPolicy} [referrerPolicy] The `referrerPolicy` property for loaded images.
 * @property {boolean} [interpolate=true] Use interpolated values when resampling.  By default,
 * linear interpolation is used when resampling.  Set to false to use the nearest neighbor instead.
 * @property {import("ol//tilegrid/WMTS").default} tileGrid Tile grid.
 * @property {import("ol//proj.js").ProjectionLike} [projection] Projection. Default is the view projection.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {RequestEncoding} [requestEncoding='KVP'] Request encoding.
 * @property {string} layer Layer name as advertised in the WMTS capabilities.
 * @property {string} style Style name as advertised in the WMTS capabilities.
 * @property {typeof import("ol//ImageTile").default} [tileClass]  Class used to instantiate image tiles. Default is {@link module:ol/ImageTile~ImageTile}.
 * @property {number} [tilePixelRatio=1] The pixel ratio used by the tile service.
 * For example, if the tile service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`.
 * @property {string} [format='image/jpeg'] Image format. Only used when `requestEncoding` is `'KVP'`.
 * @property {string} [version='1.0.0'] WMTS version.
 * @property {string} matrixSet Matrix set.
 * @property {!Object} [dimensions] Additional "dimensions" for tile requests.
 * This is an object with properties named like the advertised WMTS dimensions.
 * @property {string} [url]  A URL for the service.
 * For the RESTful request encoding, this is a URL
 * template.  For KVP encoding, it is normal URL. A `{?-?}` template pattern,
 * for example `subdomain{a-f}.domain.com`, may be used instead of defining
 * each one separately in the `urls` option.
 * @property {import("ol//Tile").LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {Array<string>} [urls] An array of URLs.
 * Requests will be distributed among the URLs in this array.
 * @property {boolean} [wrapX=false] Whether to wrap the world horizontally.
 * @property {number} [transition] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 * @property {number|import("ol/array").NearestDirectionFunction} [zDirection=0]
 * Choose whether to use tiles with a higher or lower zoom level when between integer
 * zoom levels. See {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution}.
 */

/**
 * Generate source options from a capabilities object.
 * @param {Object} wmtsCap An object representing the capabilities document.
 * @param {!Object} config Configuration properties for the layer.  Defaults for
 *                  the layer will apply if not provided.
 *
 * Required config properties:
 *  - layer - {string} The layer identifier.
 *
 * Optional config properties:
 *  - matrixSet - {string} The matrix set identifier, required if there is
 *       more than one matrix set in the layer capabilities.
 *  - projection - {string} The desired CRS when no matrixSet is specified.
 *       eg: "EPSG:3857". If the desired projection is not available,
 *       an error is thrown.
 *  - requestEncoding - {string} url encoding format for the layer. Default is
 *       the first tile url format found in the GetCapabilities response.
 *  - style - {string} The name of the style
 *  - format - {string} Image format for the layer. Default is the first
 *       format returned in the GetCapabilities response.
 *  - crossOrigin - {string|null|undefined} Cross origin. Default is `undefined`.
 * @return {Options|null} WMTS source options object or `null` if the layer was not found.
 * @api
 */
export function optionsFromCapabilities(wmtsCap, config) {
  const layers = wmtsCap["Contents"]["Layer"];
  const l = layers?.find(function (elt) {
    return elt["Identifier"] == config["layer"];
  });
  if (!l) {
    return null;
  }
  const tileMatrixSets = wmtsCap["Contents"]["TileMatrixSet"];
  let idx;
  if (l["TileMatrixSetLink"].length > 1) {
    if ("matrixSet" in config) {
      idx = l["TileMatrixSetLink"].findIndex(function (elt) {
        return elt["TileMatrixSet"] == config["matrixSet"];
      });
    } else if ("projection" in config) {
      idx = l["TileMatrixSetLink"].findIndex(function (elt) {
        const tileMatrixSet = tileMatrixSets.find(function (el) {
          return el["Identifier"] == elt["TileMatrixSet"];
        });
        const supportedCRS = tileMatrixSet["SupportedCRS"];
        const proj1 = getProjection(supportedCRS);
        const proj2 = getProjection(config["projection"]);
        if (proj1 && proj2) {
          return equivalent(proj1, proj2);
        }
        return supportedCRS == config["projection"];
      });
    } else {
      idx = 0;
    }
  } else {
    idx = 0;
  }
  if (idx < 0) {
    idx = 0;
  }
  const matrixSet =
    /** @type {string} */
    (l["TileMatrixSetLink"][idx]["TileMatrixSet"]);
  const matrixLimits =
    /** @type {Array<Object>} */
    (l["TileMatrixSetLink"][idx]["TileMatrixSetLimits"]);

  let format = /** @type {string} */ (l["Format"][0]);
  if ("format" in config) {
    format = config["format"];
  }
  idx = l["Style"].findIndex(function (elt) {
    if ("style" in config) {
      return elt["Title"] == config["style"];
    }
    return elt["isDefault"];
  });
  if (idx < 0) {
    idx = 0;
  }
  const style = /** @type {string} */ (l["Style"][idx]["Identifier"]);

  const dimensions = {};
  if ("Dimension" in l) {
    l["Dimension"].forEach(function (elt, _index, _array) {
      const key = elt["Identifier"];
      let value = elt["Default"];
      if (value === undefined) {
        value = elt["Value"][0];
      }
      dimensions[key] = value;
    });
  }

  const matrixSets = wmtsCap["Contents"]["TileMatrixSet"];
  const matrixSetObj = matrixSets.find(function (elt) {
    return elt["Identifier"] == matrixSet;
  });

  let projection;
  const code = matrixSetObj["SupportedCRS"];
  if (code) {
    projection = getProjection(code);
  }
  if ("projection" in config) {
    const projConfig = getProjection(config["projection"]);
    if (projConfig) {
      if (!projection || equivalent(projConfig, projection)) {
        projection = projConfig;
      }
    }
  }

  let wrapX = false;
  const switchXY = projection.getAxisOrientation().startsWith("ne");

  let matrix = matrixSetObj.TileMatrix[0];

  // create default matrixLimit
  let selectedMatrixLimit = {
    MinTileCol: 0,
    MinTileRow: 0,
    // subtract one to end up at tile top left
    MaxTileCol: matrix.MatrixWidth - 1,
    MaxTileRow: matrix.MatrixHeight - 1,
  };

  //in case of matrix limits, use matrix limits to calculate extent
  if (matrixLimits) {
    selectedMatrixLimit = matrixLimits[matrixLimits.length - 1];
    const m = matrixSetObj.TileMatrix.find(
      (tileMatrixValue) =>
        tileMatrixValue.Identifier === selectedMatrixLimit.TileMatrix ||
        matrixSetObj.Identifier + ":" + tileMatrixValue.Identifier ===
          selectedMatrixLimit.TileMatrix,
    );
    if (m) {
      matrix = m;
    }
  }

  const layerExtent = l["BoundingBox"]?.find(
    (bbox) =>
      getProjection(bbox.crs) &&
      equivalent(getProjection(bbox.crs), projection),
  );

  const resolution =
    (matrix.ScaleDenominator * 0.00028) / projection.getMetersPerUnit(); // WMTS 1.0.0: standardized rendering pixel size
  const origin = switchXY
    ? [matrix.TopLeftCorner[1], matrix.TopLeftCorner[0]]
    : matrix.TopLeftCorner;
  const tileSpanX = matrix.TileWidth * resolution;
  const tileSpanY = matrix.TileHeight * resolution;
  let matrixSetExtent = layerExtent?.extent ?? matrixSetObj["BoundingBox"];
  if (matrixSetExtent && switchXY) {
    matrixSetExtent = [
      matrixSetExtent[1],
      matrixSetExtent[0],
      matrixSetExtent[3],
      matrixSetExtent[2],
    ];
  }
  let extent = [
    origin[0] + tileSpanX * selectedMatrixLimit.MinTileCol,
    // add one to get proper bottom/right coordinate
    origin[1] - tileSpanY * (1 + selectedMatrixLimit.MaxTileRow),
    origin[0] + tileSpanX * (1 + selectedMatrixLimit.MaxTileCol),
    origin[1] - tileSpanY * selectedMatrixLimit.MinTileRow,
  ];

  if (
    matrixSetExtent !== undefined &&
    !containsExtent(matrixSetExtent, extent)
  ) {
    const wgs84BoundingBox = l["WGS84BoundingBox"];
    const wgs84ProjectionExtent = getProjection("EPSG:4326").getExtent();
    extent = matrixSetExtent;
    if (wgs84BoundingBox) {
      wrapX =
        wgs84BoundingBox[0] === wgs84ProjectionExtent[0] &&
        wgs84BoundingBox[2] === wgs84ProjectionExtent[2];
    } else {
      const wgs84MatrixSetExtent = transformExtent(
        matrixSetExtent,
        matrixSetObj["SupportedCRS"],
        "EPSG:4326",
      );
      // Ignore slight deviation from the correct x limits
      wrapX =
        wgs84MatrixSetExtent[0] - 1e-10 <= wgs84ProjectionExtent[0] &&
        wgs84MatrixSetExtent[2] + 1e-10 >= wgs84ProjectionExtent[2];
    }
  }

  const tileGrid = createFromCapabilitiesMatrixSet(
    matrixSetObj,
    extent,
    matrixLimits,
  );

  /** @type {!Array<string>} */
  const urls = [];
  let requestEncoding = config["requestEncoding"];
  requestEncoding = requestEncoding !== undefined ? requestEncoding : "";

  if (
    "OperationsMetadata" in wmtsCap &&
    "GetTile" in wmtsCap["OperationsMetadata"]
  ) {
    const gets = wmtsCap["OperationsMetadata"]["GetTile"]["DCP"]["HTTP"]["Get"];

    for (let i = 0, ii = gets.length; i < ii; ++i) {
      if (gets[i]["Constraint"]) {
        const constraint = gets[i]["Constraint"].find(function (element) {
          return element["name"] == "GetEncoding";
        });
        const encodings = constraint["AllowedValues"]["Value"];

        if (requestEncoding === "") {
          // requestEncoding not provided, use the first encoding from the list
          requestEncoding = encodings[0];
        }
        if (requestEncoding === "KVP") {
          if (encodings.includes("KVP")) {
            urls.push(/** @type {string} */ (gets[i]["href"]));
          }
        } else {
          break;
        }
      } else if (gets[i]["href"]) {
        requestEncoding = "KVP";
        urls.push(/** @type {string} */ (gets[i]["href"]));
      }
    }
  }
  if (urls.length === 0) {
    requestEncoding = "REST";
    l["ResourceURL"].forEach(function (element) {
      if (element["resourceType"] === "tile") {
        format = element["format"];
        urls.push(/** @type {string} */ (element["template"]));
      }
    });
  }

  return {
    urls: urls,
    layer: config["layer"],
    matrixSet: matrixSet,
    format: format,
    projection: projection,
    requestEncoding: requestEncoding,
    tileGrid: tileGrid,
    style: style,
    dimensions: dimensions,
    wrapX: wrapX,
    crossOrigin: config["crossOrigin"],
  };
}
