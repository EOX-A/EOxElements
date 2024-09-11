/**
 * @typedef {Object} DrawOptions
 * @property {string | number} id - The ID of the interaction.
 * @property {"Point" | "LineString" | "Polygon" | "Circle" | "Box"} type - The type of geometry to draw.
 * @property {boolean} [modify] - Whether to add a modify interaction.
 * @property {boolean} [active] - Whether draw tool active or not
 */

/**
 * @typedef {"Group" | "Heatmap" | "Image" | "Layer" | "Tile" | "Vector" | "VectorImage" | "VectorTile"} layerType
 */

/**
 * @typedef {"BingMaps" | "Cluster" | "GeoTIFF" | "IIIF" | "Image" | "ImageCanvas" | "ImageStatic" | "ImageWMS" | "OSM" | "Raster" | "StadiaMaps" | "Tile" | "TileArcGISRest" | "TileDebug" | "TileImage" | "TileJSON" | "TileWMS" | "UrlTile" | "Vector" | "VectorTile" | "WMTS" | "XYZ" | "WMTSCapabilities"} sourceType
 */

/**
 * @typedef {import("ol/layer/Vector").default | import("ol/layer/VectorTile").default} VectorOrVectorTileLayer
 */

/**
 * @typedef {import("ol/layer/BaseImage").default<import("ol/source/Image").default, import("ol/renderer/canvas/ImageLayer").default> | import("ol/layer/Tile").default<import("ol/source/Tile").default> | VectorOrVectorTileLayer} AnyLayerWithSource
 */

/**
 * @typedef {AnyLayerWithSource | import("ol/layer/Group").default} AnyLayer
 */

/**
 * @typedef {Object} formatWithOptions
 * @property {string} type
 * @property {string} [dataProjection]
 * @property {string} [featureProjection]
 */

/**
 * @typedef {Object} EOxInteraction
 * @property {"draw" | "select"} type
 * @property {DrawOptions | SelectOptions} options
 */

/**
 * @typedef {Object} EoxLayer
 * @property {layerType} type
 * @property {Object} [properties]
 * @property {string} properties.id
 * @property {number} [minZoom]
 * @property {number} [maxZoom]
 * @property {number} [minResolution]
 * @property {number} [maxResolution]
 * @property {number} [opacity]
 * @property {boolean} [visible]
 * @property {Object} [source]
 * @property {sourceType} source.type
 * @property {string | formatWithOptions} [source.format]
 * @property {Object} [source.tileGrid]
 * @property {import("ol/proj").ProjectionLike} [source.projection]
 * @property {Array<EoxLayer>} [layers]
 * @property {import("ol/style/flat").FlatStyleLike} [style]
 * @property {Array<EOxInteraction>} [interactions]
 * @property {number} [zIndex]
 * @property {"vector" | "vectorImage"} [renderMode]
 */

/**
 * @typedef {import('ol/layer/VectorTile').default | import('ol/layer/Vector').default} SelectLayer
 */

/**
 * @typedef {Object} SelectOptions
 * @property {string | number} id - The ID of the interaction.
 * @property {string} [idProperty] - Optional property used as ID.
 * @property {"click" | "pointermove"} condition - Condition for the interaction (click or pointermove).
 * @property {EoxLayer} [layer] - Optional layer configuration.
 * @property {import('ol/style/flat.js').FlatStyleLike} [style] - Style options for the interaction.
 * @property {import('ol/Overlay').Options} [overlay] - Overlay options for the interaction.
 * @property {boolean} [active] - Whether the interaction is active.
 * @property {boolean} [panIn] - Whether to pan into the selected feature.
 */
