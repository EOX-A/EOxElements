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

/**
 * @typedef {import('ol/control/Control').Options} ControlOptions
 */

/**
 * @typedef {Object} GeolocationOptions
 * @extends ControlOptions
 *
 * @property {import('ol/style/flat.js').FlatStyleLike} [style] - Style definition of the position feature.
 * @property {boolean} [centerWhenReady] - Will pan the view to the user location on the first position update.
 * @property {boolean} [highAccuracy] - Enables high accuracy of geolocator. Required for tracking the heading.
 * @property {boolean} [trackAccuracy] - Tracks accuracy and displays it as a circle underneath the position feature.
 * @property {boolean} [trackHeading] - Tracks heading and sets it as a 'heading' property on the position feature. "highAccuracy" must be set in order to track heading.
 * @property {string} [buttonIcon] - Image source of the control element icon.
 */

/**
 * @typedef {"small" | "fullscreen"} LoadingIndicatorType
 */

/**
 * @typedef {import('ol/control/Control').Options} ControlOptions
 */

/**
 * @typedef {Object} LoadingIndicatorOptions
 * @extends ControlOptions
 *
 * @property {string} [spinnerSvg] - SVG to be used as the spinner icon.
 * @property {number} [opacity] - Opacity, defaults to 1.
 * @property {LoadingIndicatorType} [type] - Type of appearance: "small" or "fullscreen". Defaults to "button" style.
 */

/**
 * @typedef {"Attribution" | "FullScreen" | "MousePosition" | "OverviewMap" | "Rotate" | "ScaleLine" | "ZoomSlider" | "ZoomToExtent" | "Zoom" | "Geolocation" | "LoadingIndicator"} ControlType
 */

/**
 * @typedef {Object} ControlDictionary
 * @property {Object} [Attribution] - Options for the Attribution control.
 * @property {Object} [FullScreen] - Options for the FullScreen control.
 * @property {Object} [MousePosition] - Options for the MousePosition control.
 * @property {Object} [OverviewMap] - Options for the OverviewMap control.
 * @property {Object} [Rotate] - Options for the Rotate control.
 * @property {Object} [ScaleLine] - Options for the ScaleLine control.
 * @property {Object} [ZoomSlider] - Options for the ZoomSlider control.
 * @property {Object} [ZoomToExtent] - Options for the ZoomToExtent control.
 * @property {Object} [Zoom] - Options for the Zoom control.
 * @property {Object} [Geolocation] - Options for the Geolocation control.
 * @property {Object} [LoadingIndicator] - Options for the LoadingIndicator control.
 */

/**
 * @typedef {import('ol/Attribution').default | string | Array<string>} AttributionLike
 * @typedef {import('ol/proj').ProjectionLike} ProjectionLike
 */

/**
 * @typedef {Object} WMTSCapabilitiesOptions
 * @property {string} url - The URL for the WMTS service.
 * @property {string} layer - The layer name.
 * @property {AttributionLike} [attributions] - Attributions for the layer.
 * @property {boolean} [attributionsCollapsible] - Whether the attributions are collapsible.
 * @property {number} [cacheSize] - The cache size.
 * @property {null | string} [crossOrigin] - The cross-origin attribute.
 * @property {boolean} [interpolate] - Whether to interpolate pixel values.
 * @property {ProjectionLike} [projection] - The map projection.
 * @property {number} [transition] - The duration of the transition.
 * @property {string} [key] - Optional key for the layer.
 * @property {number} [tilePixelRatio] - Pixel ratio for the tiles.
 * @property {number} [zDirection] - Z-direction for tile rendering.
 * @property {boolean} [wrapX] - Whether to wrap the X-axis.
 * @property {Object} dimensions - Dimensions for the WMTS request.
 * @property {string} version - The WMTS version.
 */
