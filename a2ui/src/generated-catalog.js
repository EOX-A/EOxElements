/* eslint-disable */
// Generated automatically from custom-elements.json. Do not edit.
import { z } from "zod";

export const version = "1.2.0";

/**
 * Chart component based on [Vega-Lite](https://vega.github.io/vega-lite/)/[Vega-Embed](https://github.com/vega/vega-embed).
 * Pass a valid Vega spec as `spec` property or attribute in order to render a chart.
 * Optionally for transfer of chart definitions with both single and double quote as attribute, use the `spec` as base64 encoded string.
 *
 * The `eox-chart` provides some default `spec` settings (merged with the provided `spec` property/attribute) and helper functionalities on top of Vega-Lite.
 *
 * Default `spec` settings (see the file `src/enums/default-spec.js`):
 * - `width`: "container" (make the chart width responsive to the parent)
 * - `height`: "container" (make the chart height responsive to the parent)
 * - `autosize`: "fit" (automatically adjust the layout in an attempt to force the total visualization size to fit within the given width, height and padding values)
 * - `resize`: true (autosize layout is re-calculated on every view update)
 * - `padding`: 16 (the padding in pixels to add around the visualization)
 *
 * These default `spec` settings can be overwritten by setting them to a differnt value in the `spec` property/attribute passed to `eox-chart`. Also, there are default
 * Vega-Embed options (see the file `src/enums/default-opt.js`), which can also be overwritten in the passed `opt` property/attribute.
 *
 * Helper functionalities:
 *
 * The `eox-chart` automatically emits mouse/pointer events from the Vega-Lite chart. See below for the emitted events.
 * For working with base64 encoded `spec` or `dataValues` attributes, `eox-chart` exports two helper methods: `base64EncodeSpec` (encoding), `parseSpec` (decoding).
 */
export const EOxChart = {
  name: "EOxChart",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-chart",
  events: ["pointermove:item", "click:item"],
  schema: z.object({
    /** Data values passed on runtime. Requires a [named data source](https://vega.github.io/vega-lite/docs/data.html#named) in the provided `spec`. Either passed as a base64 encoded string or as an object. */
    dataValues: z.any().optional(),
    /** [Vega-Lite spec](https://vega.github.io/vega-lite/docs/spec.html) either as an object or base64 encoded string. */
    spec: z.any().optional(),
    /** [Vega-Embed options](https://github.com/vega/vega-embed?tab=readme-ov-file#options) */
    opt: z.any().optional(),
    /** Renders the element without a shadow root */
    noShadow: z.boolean().optional(),
    /** Render the element without additional styles */
    unstyled: z.boolean().optional(),
  }),
};

/**
 * The `eox-feedback` element provides a modal dialog for collecting user feedback.
 * It supports screenshot capture, customizable endpoint, and flexible styling.
 * The feedback modal (`<eox-feedback></eox-feedback>`) can be included in the DOM
 * directly or via a floating button (`<eox-feedback-button></eox-feedback-button>`),
 * which can be positioned in any corner of the viewport.
 *
 * On submit, the element sends a `POST` request with `FormData` to the configured
 * `endpoint`. The payload includes the feedback message (or custom form fields when
 * using a `schema`), the current page URL, the browser's user agent, screen resolution and optionally
 * a screenshot file. This makes it straightforward to connect to any backend — for
 * example a service that creates issues in a Git platform (GitLab, GitHub, …), sends
 * notifications, or stores feedback in a database.
 *
 * The backend only needs to accept a `multipart/form-data` POST request, extract the
 * fields and the optional file attachment, and then forward them to whatever system
 * you use for tracking or processing feedback. Because all authentication and API
 * tokens live on the server side, the browser never sees sensitive credentials.
 * Typical backend responsibilities include input sanitization, CORS configuration to
 * restrict which origins may submit feedback, and mapping the received fields into the
 * format expected by the target system (e.g. composing an issue title and body, or
 * building an email).
 */
export const EOxFeedback = {
  name: "EOxFeedback",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-feedback",
  events: ["submit", "close"],
  schema: z.object({
    /** The endpoint to send the feedback to as POST message. */
    endpoint: z.string().optional(),
    /** If provided, the element will not be styled with EOX styles. */
    unstyled: z.string().optional(),
    /** The JSON schema for the feedback form (option). Requires `eox-jsonform` to be imported. */
    schema: z.any().optional(),
  }),
};

/**
 * The `eox-drawtools` element provides a comprehensive set of drawing, editing, selection, and import tools for vector features on an `eox-map`. It supports drawing multiple feature types (Polygon, Box, Point, Circle, LineString), continuous drawing, feature modification, selection from existing layers, and import/export in various formats (GeoJSON, WKT, native OL feature).
 *
 * Key features:
 * - Draw polygons, boxes, points, circles, and lines on the map
 * - Draw multiple features at once (set `multiple-features`)
 * - Continuous drawing mode (set `continuous`)
 * - Modify drawn features (set `allow-modify`)
 * - Select features from a specified layer (`layer-id`)
 * - Display a list of drawn/selected features (`show-list`)
 * - Edit features as GeoJSON in a text editor (`show-editor`)
 * - Import features via drag-and-drop or file upload (`import-features`)
 * - Emit drawn features in different formats (`format`: `feature`, `geojson`, `wkt`)
 * - Emit features in a specified projection (`projection`)
 * - Customizable feature styles (`featureStyles`)
 * - Unstyled and no-shadow variants for easy integration
 *
 * Usage examples and visual demos are available in Storybook stories, including scenarios for multi-feature drawing, feature modification, selection, import/export, continuous drawing, format and projection control, and style customization.
 *
 * ## Methods
 *
 * - `startDrawing`: Triggers starting the drawing interaction on the map.
 * - `stopDrawing`: Triggers stopping the drawing interaction on the map (same as pressing the Escape key).
 * - `discardDrawing`: Triggers discarding/stopping the drawing interaction and deleting the drawn shapes.
 * - `removeFeature`: Removes a feature from the drawn features.
 * - `removeFeatureByIndex`: Removes a feature from the drawn features by its index.
 *
 * Usage: `document.querySelector("eox-drawtools").startDrawing();`
 */
export const EOxDrawtools = {
  name: "EOxDrawtools",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-drawtools",
  events: ["drawupdate"],
  schema: z.object({
    /** Allow modifying the drawn feature(s) */
    allowModify: z.boolean().optional(),
    /** Query selector of an `eox-map` (`String`, passed as an attribute or property) or an `eox-map` DOM element (`HTMLElement`, passed as property) */
    for: z.any().optional(),
    /** Enables the user to draw continuously one feature after another without having to discard previous ones manually */
    continuous: z.boolean().optional(),
    /** The display name of drawn features, shown e.g. in the feature list. */
    featureName: z.string().optional(),
    /** The key of the property to display in the feature list. */
    featureNameKey: z.any().optional(),
    /** The ID of the Vector/Vector Tile Layer that contains features to be selected */
    layerId: z.string().optional(),
    /** Flat styles for the drawn/selected features */
    featureStyles: z.any().optional(),
    /** Allow adding more than one feature at a time */
    multipleFeatures: z.boolean().optional(),
    /** Display area/line measurement for the drawn features. When enabled, a "measure" property is added to each drawn feature\'s properties, containing the calculated area (for Polygons and Circles) or length (for LineStrings). This measurement is also displayed as a text label on the map using OpenLayers flat styles. */
    measure: z.boolean().optional(),
    /** Allow import features using drag-drop and upload button */
    importFeatures: z.boolean().optional(),
    /** Show geo-json editor for draw tool */
    showEditor: z.boolean().optional(),
    /** Show list of features */
    showList: z.boolean().optional(),
    /** Projection of the emitted drawn features */
    projection: z.string().optional(),
    /** Renders the element without a shadow root */
    noShadow: z.boolean().optional(),
    /** The format in which the drawn features should be emitted */
    format: z.any().optional(),
    /** Type of the drawn feature */
    type: z.any().optional(),
    /** Render the element without additional styles */
    unstyled: z.boolean().optional(),
    /** The array of drawn native OpenLayers features. Normally includes only one feature, until multiple feature drawing is enabled. Pass features to be drawn on the map by setting this property. The features should be in the same projection as the map, or a projection should be specified via the `projection` property for proper transformation. */
    drawnFeatures: z.array(z.any()).optional(),
    /** The eox-map instance associated with the draw tools */
    eoxMap: z.any().optional(),
    /** Whether the user is currently in the process of drawing or not */
    currentlyDrawing: z.boolean().optional(),
    /** The current native OpenLayers `draw` interaction */
    draw: z.any().optional(),
    /** The current native OpenLayers draw `layer` (initialized with a `zIndex` of 100) */
    drawLayer: z.any().optional(),
    /** The current native OpenLayers `modify` interaction */
    modify: z.any().optional(),
    /**  */
    selectionEvents: z.any().optional(),
  }),
};

/**
 * `eox-geosearch` provides a flexible geocoding and location search interface using the OpenCage API.
 * It can be used standalone or integrated with `eox-map` for interactive map zooming and result visualization.
 *
 * Main features:
 * - Search for locations using OpenCage API
 * - Integrate with `eox-map` for zooming to results
 * - Customizable loader SVG
 * - Geographic extent limiting
 * - Tooltip support
 * - Additional OpenCage API parameters via args
 * - Button mode for compact UI
 * - Flexible alignment and direction options
 */
export const EOxGeosearch = {
  name: "EOxGeosearch",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-geosearch",
  events: ["geosearchSelect"],
  schema: z.object({
    /** The OpenCage API endpoint to use for the search, including the key but without the query parameter. */
    endpoint: z.string().optional(),
    /** Query selector of an `eox-map` (`String`, passed as an attribute or property) or an `eox-map` DOM element (`HTMLElement`, passed as property) */
    for: z.any().optional(),
    /** The name of the query parameter to use for the search query in the endpoint URI. */
    queryParameter: z.string().optional(),
    /** Whether or not to enable button mode, which hides and shows the input field similar to how a modal works. */
    button: z.boolean().optional(),
    /** Set a custom interval for the debounce function. */
    interval: z.number().optional(),
    /** Enables a smaller version of the button for use in map controls. */
    small: z.boolean().optional(),
    /** Which text to use for the button if it is enabled. */
    label: z.string().optional(),
    /** The direction of the search input relative to the button, with the following options:  - `left` - `top` - `right` - `bottom` */
    direction: z.string().optional(),
    /** The direction of the results box relative to the input, with the following options:  - `left` - `top` - `right` - `bottom` */
    resultsDirection: z.string().optional(),
    /** Render the element without additional styles */
    unstyled: z.boolean().optional(),
    /** Svg used as loading indicator */
    loaderSvg: z.string().optional(),
    /** Geographic extent to limit search results in the format "minLon,minLat,maxLon,maxLat". This corresponds to OpenCage API\'s bounds parameter. Example: "-0.563160,51.280430,0.278970,51.683979" */
    extent: z.string().optional(),
    /** Tooltip text to display on the search button/input (uses BeerCSS tooltip). */
    tooltip: z.string().optional(),
    /** Direction of the tooltip relative to the button. Options: "top", "bottom", "left", "right" Default: "left" */
    tooltipDirection: z.string().optional(),
    /** Additional parameters to add to the query string as key-value pairs. Example: { language: "en", limit: 10, countrycode: "us" } */
    params: z.any().optional(),
    /**  */
    eoxMap: z.any().optional(),
  }),
};

/**
 * The `eox-itemfilter` element provides a comprehensive item filtering system for lists of items with flexible filter types, result aggregation, and customizable display modes.
 *
 * Features:
 * - Supports `text`, `select`, `multiselect`, `range` (including date), and `spatial` filters
 * - Aggregates results by a property key (e.g. themes)
 * - Inline mode for compact UI
 * - Pre-set filter state via `state` in `filterProperties` property/attribute
 * - Nested property filtering using dot notation
 * - External search API endpoint support via `externalFilter` property
 * - Auto-spreading of single-item aggregations to root level
 * - Card display mode for results (`result-type="cards"`)
 * - Secondary result action button with custom icon and event handler (`click:result-action`)
 * - Custom result sorting via `resultSorting` property/attribute
 * - Customizable layout and styling via CSS variables
 *
 * Usage examples and visual demos are available in Storybook stories, including scenarios for inline mode, external filtering, nested properties, card display, CSS variable customization, and result actions.
 */
export const EOxItemfilter = {
  name: "EOxItemfilter",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-itemfilter",
  events: [
    "filter",
    "select",
    "mouseenter:result",
    "mouseleave:result",
    "click:result-action",
  ],
  schema: z.object({
    /** The items to be filtered. Can be passed as a property or stringified JSON attribute. */
    items: z.array(z.any()).optional(),
    /** The currently selected result */
    selectedResult: z.any().optional(),
    /** Aggregate results by a property key */
    aggregateResults: z.string().optional(),
    /** Automatically spread single item summaries removing the summary header */
    autoSpreadSingle: z.boolean().optional(),
    /** Highlighting of search result character matches */
    enableHighlighting: z.boolean().optional(),
    /** The filter properties. Can be passed as a property or stringified JSON attribute. */
    filterProperties: z.array(z.any()).optional(),
    /** Native fuse.js config override */
    fuseConfig: z.any().optional(),
    /** Inline mode, for rendering the itemfilter in a very condensed space. Expects showResults to be false */
    inlineMode: z.boolean().optional(),
    /** Show all result items if nothing is input by the user */
    matchAllWhenEmpty: z.boolean().optional(),
    /** Display results list */
    showResults: z.boolean().optional(),
    /** Unique id property of items */
    idProperty: z.string().optional(),
    /** The property of the result items used for display Supports passing a function which recieves the current item as parameter and is expected to return a string */
    titleProperty: z.any().optional(),
    /** The property of the result items used for a subtitle Supports passing a function which recieves the current item as parameter and is expected to return a string */
    subTitleProperty: z.any().optional(),
    /** The property of the result items used for an image Supports passing a function which recieves the current item as parameter and is expected to return a string */
    imageProperty: z.any().optional(),
    /** Sorting behavior for the results. Can be: - undefined (default): smart alphabetical sorting (skips if externalFilter or fuseConfig.shouldSort is truthy) - false: no sorting - string: property key to sort by (ascending) - function: custom comparator function (a, b) => number - object: { key: string, order?: \'asc\' | \'desc\' } */
    resultSorting: z.any().optional(),
    /** Allow opening multiple filter accordions in parallel */
    expandMultipleFilters: z.boolean().optional(),
    /** Initialize result accordions expanded */
    expandResults: z.boolean().optional(),
    /** Allow opening multiple result accordions in parallel */
    expandMultipleResults: z.boolean().optional(),
    /** Rendering type for results. Can be `list`or `cards` (`cards` requires also importing the `eox-layout` element) */
    resultType: z.string().optional(),
    /** Enable result action button (a secondary action besides the normal result selection) */
    enableResultAction: z.boolean().optional(),
    /** Icon for result action. Supports html */
    resultActionIcon: z.string().optional(),
    /** Overrides elements current CSS. */
    styleOverride: z.string().optional(),
    /** Render the element without additional styles */
    unstyled: z.boolean().optional(),
    /** The state object containing the applied filters. */
    filters: z.any().optional(),
    /** The state object containing the filtered results. */
    results: z.array(z.any()).optional(),
    /** Use an external search endpoint instead of fuse search. Passed properties: input string, filters object. The function can return a URL string, or an object containing a `url, an optional `fetchFn` to handle the request, or/and an optional `key` to return a specific property from the fetched data. This is a property-only field as it expects a function. */
    externalFilter: z.any().optional(),
  }),
};

/**
 * The `eox-layercontrol` element provides a user interface for managing and configuring layers of an `eox-map`. It connects to the underlying OpenLayers map instance and displays a list of layers, supporting advanced features such as optional layers, exclusive layers, layer tools, dynamic legends, time controls, and external layer addition.
 *
 * ## Usage
 * Place `<eox-layercontrol></eox-layercontrol>` next to an `<eox-map></eox-map>` element. If there is only one `eox-map` present, `eox-layercontrol` will automatically connect to it. This can be configured
 * via the `for` attribute/property in order to support connecting to a specific map.
 *
 * ## Layer Properties
 * To be displayed and managed correctly, the map layers should have custom properties set (e.g. using `properties.<property>` inside the `eox-map` layer json, or by doing `layer.set(property, value)` on the native OpenLayers layers).
 *
 * - `id?: string` — Unique identifier for the layer. Recommended for referencing and managing layers; also used for `eox-map` smart layer updating.
 * - `title?: string` — Human-readable title for the layer, displayed in the control. Recommended for usability.
 * - `layerControlHide?: boolean` — If true, hides the layer from the control UI.
 * - `layerControlOptional?: boolean` — If true, the layer is initially hidden and can be added from the optional list.
 * - `layerControlExclusive?: boolean` — If true, only one exclusive layer can be visualized at a time (taking into account all other layers on the same level with this property).
 * - `layerControlExpand?: boolean` — If true, the layer is "expanded" by default, showing description, tools etc. (if available).
 * - `layerControlToolsExpand?: boolean` — If true, the layer tools section is expanded by default.
 * - `layerConfig?: object` — Configuration for the "config" tool, consisting of a JSON schema (rendered by `eox-jsonform`) for editable settings.
 * - `layerDatetime?: object` — Configuration for the "datetime" tool, supporting time-based controls and playback.
 * - `layerLegend?: object` — Configuration for the "legend" tool, supporting dynamic color legends.
 *
 * For `eox-map` attributes/properties and emitted events, see below.
 *
 * ## Additional Helper Methods
 *
 * - `updateVectorLayerStyle`: Resolves a vector layer flat style object  by substituting any `["var", "<key>"]` placeholders with values from its `variables` property; imitating OL WebGL flat style variable substitution `webglLayer.updateStyleVariables`.
 *
 * Usage: `import { updateVectorLayerStyle } from "@eox/layercontrol";`
 */
export const EOxLayercontrol = {
  name: "EOxLayercontrol",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-layercontrol",
  events: ["layerchange", "layerConfig:change"],
  schema: z.object({
    /** Query selector of an `eox-map` (`String`, passed as an attribute or property) or an `eox-map` DOM element (`HTMLElement`, passed as property) */
    for: z.any().optional(),
    /** Layer id property */
    idProperty: z.string().optional(),
    /** Layer title property */
    titleProperty: z.string().optional(),
    /** Show layer state based on zoom level or not */
    showLayerZoomState: z.boolean().optional(),
    /** Layer tools */
    tools: z.array(z.any()).optional(),
    /** Enable-disable external layer */
    addExternalLayers: z.boolean().optional(),
    /** Render the element without additional styles */
    unstyled: z.boolean().optional(),
    /** Overrides elements current CSS. */
    styleOverride: z.string().optional(),
    /** If enabled, the tools section will be rendered as list. */
    toolsAsList: z.boolean().optional(),
    /** If enabled, exclusive layers (marked with the property `layerControlExclusive`) will be globally exclusive (default: exclusive within their layer group). */
    globallyExclusiveLayers: z.boolean().optional(),
    /** If enabled, toggling the layer visibility will also open/close the layer tools. */
    toolsAutoExpand: z.boolean().optional(),
    /** List of custom editor interfaces for layer config eox-jsonforms Read more about the implementation of custom editor interfaces here: https://github.com/json-editor/json-editor/blob/master/docs/custom-editor.html */
    customEditorInterfaces: z.array(z.any()).optional(),
    /**  */
    eoxMap: z.any().optional(),
    /** The native OL map instance */
    map: z.any().optional(),
    /**  */
    colormapRegistry: z.any().optional(),
  }),
};

/**
 * `eox-jsonform` is a flexible and extensible web component for rendering dynamic forms based on JSON schema definitions.
 * It is based on [JSON Editor](https://github.com/json-editor/json-editor) and extends its functionality to support various advanced features.
 * Also check out the [JSON Editor Documentation](https://raw.githubusercontent.com/json-editor/json-editor/refs/heads/master/README.md) for full details on schema syntax, options, and built-in editors.
 *
 * Core JSON-Editor Features & Options Reference:
 * - **Branching (`anyOf` / `oneOf`)**:
 *   - Use `"keep_oneof_values": false` in `options` when variants define different defaults, types (e.g., string vs array), or numeric ranges/steps. By default, JSON-Editor carries over values (`keep_oneof_values: true`), corrupting branch defaults and slider ranges.
 *   - Example: `"options": { "no_additional_properties": true, "keep_oneof_values": false }`
 * - **Dynamic Field Dependencies & Templates**:
 *   - `watch`: Watch other form fields (e.g. `"watch": { "vminmax": "vminmax" }`).
 *   - `template`: Interpolate watched values into string templates (e.g. `"template": "{{vminmax.vmin}},{{vminmax.vmax}}"`).
 * - **Custom & Advanced Inputs**:
 *   - `format: "minmax"`: Dual-handle range slider (via `tc-range-slider`) for selecting min/max bounds with automatic precision detection based on `step`.
 *   - `format: "range"`: Single range slider with `minimum`, `maximum`, and `step`.
 *   - `format: "markdown"` / `format: "ace"`: Markdown and Ace code editor integration. Supports `options.markdownToolbar` with optional file upload (`options.markdownToolbar.upload` / `options.uploadEndpoint`) and custom buttons.
 *   - `format: "spatial"`: Bounding box, polygon, point, and line drawing integrated with `eox-map` / `eox-drawtools`.
 * - **URL Parameter Filtering (`removeProperties`)**:
 *   - Use `options.removeProperties: ["vminmax"]` to drop intermediate form/slider properties from consumers and tile URL updates.
 * - **Configuration Options**:
 *   - `no_additional_properties: true`: Restrict output strictly to defined schema properties.
 *   - `disable_collapse`, `disable_edit_json`, `disable_properties`: Standard JSON-Editor UI toggles.
 *
 * Features:
 * - Renders forms from JSON schema, supporting complex nested structures, branching (`anyOf`/`oneOf`), and custom validation.
 * - All properties and event handlers are passed via args, enabling dynamic configuration and integration. Properties can also be passed as stringified JSON attributes (e.g. `schema`, `value`, `options`).
 * - Supports custom editor interfaces for advanced input types and external editor integration (e.g., Ace, Markdown, spatial drawtools).
 * - Handles spatial inputs (bounding box, polygons, points, lines) and outputs in various formats (GeoJSON, WKT).
 * - Allows toggling and opt-in/optional properties, with dynamic visibility and value updates.
 * - Can load schema and values from external URLs, supporting async loading and ready events.
 * - Integrates with `eox-map` for spatial feature selection when required.
 * - Supports unstyled rendering for custom design integration.
 *
 * See the stories for usage examples covering validation, custom editors, branching variants, spatial inputs, opt-in/optional properties, external loading, and more.
 */
export const EOxJsonform = {
  name: "EOxJsonform",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-jsonform",
  events: ["ready", "change", "submit"],
  schema: z.object({
    /** Schema for the form editor. Supports full JSON Schema draft-04/07 specs plus JSON-Editor extensions (e.g., `options`, `watch`, `template`, `format: "minmax"`). */
    schema: z.any().optional(),
    /** JSON value of the form editor */
    value: z.any().optional(),
    /** Default values for the JSONEditor instance */
    defaults: z.any().optional(),
    /** Configuration options for the JSONEditor instance (e.g., `keep_oneof_values: false`, `no_additional_properties: true`, `removeProperties: [...]`). See JSON-Editor options: https://raw.githubusercontent.com/json-editor/json-editor/refs/heads/master/README.md */
    options: z.any().optional(),
    /** List of custom editor interface Read more about the implementation of custom editor interfaces here: https://github.com/json-editor/json-editor/blob/master/docs/custom-editor.html */
    customEditorInterfaces: z.array(z.any()).optional(),
    /** Renders the element without a shadow root */
    noShadow: z.boolean().optional(),
    /** Shows a toggle for showing/hiding object properties editing buttons To be used in combination with `options.disable_properties = false` */
    propertiesToggle: z.boolean().optional(),
    /** Render the element without additional styles */
    unstyled: z.boolean().optional(),
    /** Getter for the JSONEditor instance */
    editor: z.any().optional(),
  }),
};

/**
 * The `eox-layout` element provides a flexible grid-based layout system for web applications, based on a 12x12 grid. It consists of two elements:
 * - `eox-layout`: the container holding all layout items
 * - `eox-layout-item`: the individual items placed on the grid, with defined x/y coordinates and w(idth)/h(eight) dimensions
 *
 * ## Usage
 * Place `<eox-layout></eox-layout>` in your application and add `<eox-layout-item></eox-layout-item>` children to define grid items.
 *
 * - `x`, `y`: zero-indexed coordinates for grid placement
 * - `w`, `h`: width and height (can be single value or three values for small/medium/large screens, separated by `/`)
 * - `gap`: spacing between items
 * - `row-height`, `column-width`: control grid slot size
 * - `fill-grid`: automatically fills available space
 *
 * ## Responsive Layout
 * By providing three values for `x`, `y`, `w`, or `h`, items can be rendered differently on small, medium, and large screens.
 *
 * ## Story Examples
 * - Basic grid usage with positioned items
 * - Full 12x12 grid visualization
 * - Gap and padding demonstration
 * - Overflow and scroll behavior
 * - Fill-grid for auto layout
 * - Responsive layouts for different screen sizes
 */
export const EOxLayout = {
  name: "EOxLayout",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-layout",
  events: [],
  schema: z.object({
    /** Width of each grid column (e.g., "200px", "1fr"). */
    "column-width": z.string().optional(),
    /** If present, the layout will automatically fill available space. */
    "fill-grid": z.boolean().optional(),
    /** Gap between layout items in pixels. */
    gap: z.string().optional(),
    /** Height of each grid row (e.g., "100px", "1fr"). */
    "row-height": z.string().optional(),
    /** The breakpoints for small/medium/large screens (in pixel). */
    mediaBreakpoints: z.array(z.any()).optional(),
  }),
};

/**
 * A2UI wrapper for eox-layout-item
 */
export const EOxLayoutItem = {
  name: "EOxLayoutItem",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-layout-item",
  events: [],
  schema: z.object({
    /** The x coordinate (zero-indexed) of the layout item. */
    x: z.string().optional(),
    /** The y coordinate (zero-indexed) of the layout item. */
    y: z.string().optional(),
    /** The width (in grid slots) of the layout item. */
    w: z.string().optional(),
    /** The height (in grid slots) of the layout item. */
    h: z.string().optional(),
  }),
};

/**
 * The `eox-map` element is a powerful wrapper around [OpenLayers](https://openlayers.org/) that provides a declarative, highly configurable map element for web applications. It supports a wide range of layer types, sources, controls, and advanced features, making it suitable for interactive mapping, data visualization, and geospatial analysis.
 *
 * ## Basic usage:
 *
 * ```
 * import "@eox/map"
 *
 * <eox-map [...]></eox-map>
 * ```
 *
 * Some basic layers, sources and formats are included in the default bundle, for advanced usage it is
 * required to import the `advancedLayersAndSources` plugin.
 *
 * Included in the base bundle:
 * - Formats: `GeoJSON`, `MVT`
 * - Layers: `Group`, `Image`, `Tile`, `Vector`, `VectorTile`
 * - Sources: `ImageWMS`, `OSM`, `Tile`, `TileWMS`, `Vector`, `VectorTile`, `WMTS`, `XYZ`
 *
 * In order to use the rest of the layers and sources provided by OpenLayers, import the plugin as well:
 *
 * ```
 * import "@eox/map/src/plugins/advancedLayersAndSources"
 * import "@eox/map"
 *
 * <eox-map [...]></eox-map>
 * ```
 * Included in the advanced plugin bundle:
 * - Layers:
 *   - All OpenLayers layer types
 *   - [`STAC`](https://github.com/m-mohr/ol-stac)
 * - Sources:
 *   - All OpenLayers source types
 *   - [`WMTSCapabilities`](https://github.com/EOX-A/EOxElements/tree/main/elements/map/src/custom/sources/WMTSCapabilities.ts)
 * - Reprojection through [proj4](https://github.com/proj4js/proj4js)
 *
 * For usage and story examples, see the Storybook stories in `/elements/map/stories`.
 *
 * ## Features
 *
 * - **Layer Support:** Easily add and configure layers such as Tile, Vector, VectorTile, Image, Group, and advanced types like STAC, GeoTIFF, MapboxStyle, and FlatGeoBuf. Layers are passed via the `layers` property as an array of configuration objects.
 * - **Source Formats:** Supports GeoJSON, MVT, OSM, TileWMS, WMTS, XYZ, ImageWMS, and more. Advanced sources (e.g., WMTSCapabilities) are available via plugin import.
 * - **Controls:** Add built-in or custom controls (Zoom, Geolocation, LoadingIndicator, etc.) using the `controls` property. Controls can be configured with `position`, `target`, and `orientation` for flexible UI layouts. Developers can also inject custom HTML tools via Shadow DOM `<slot>`s mapped to specific regions.
 * - **Responsive Design:** The map emits a `resize` event providing current dimensions and a mobile breakpoint flag (`isSmall`), allowing dynamic adjustment of control layouts and map properties.
 * - **Interactions:** Enable feature selection, hover, click, cluster-explode, and highlight interactions. Interactions are configured per layer and can trigger custom events.
 * - **Tooltips:** Built-in tooltip support via `<eox-map-tooltip></eox-map-tooltip>`, with options for property transformation, custom tooltips, and pixel/band value display for raster layers.
 * - **Layer Groups:** Organize layers into groups for complex compositions and hierarchical management.
 * - **Animations:** Animate view changes (zoom, center, extent) using the `animationOptions` property.
 * - **Projection & Transformation:** Change map projection, register custom projections, and transform coordinates/extents using helper methods.
 * - **Sync & Compare:** Synchronize multiple maps using the `sync` property, and compare maps side-by-side with `<eox-map-compare>`.
 * - **Config Object:** Pass a configuration object for advanced map setup and dynamic updates.
 * - **Scroll Prevention:** Prevent scroll/drag interactions for embedded maps using the `preventScroll` property.
 * - **Globe View:** Interactive 3D globe by using "globe" projection property. Configure via the `globeConfig` object.
 *
 * ## Events
 *
 * - `clusterSelect`: Fired when a cluster is selected.
 * - `loadend`: Fired when the map has finished loading.
 * - `mapmounted`: Fired when the map is successfully mounted.
 * - `select`: Fired when a feature is selected.
 * - `layerschanged`: Fired when the layers have been changed.
 *
 * ## Methods
 *
 * - `registerProjection`, `registerProjectionFromCode`: Register custom or EPSG projections.
 * - `getLayerById`, `getFlatLayersArray`: Retrieve layers by ID or as a flat array.
 * - `addOrUpdateLayer`, `removeInteraction`, `removeSelect`, `removeControl`: Manage layers and interactions programmatically.
 * - `parseFeature`: Parses a feature from the input data.
 * - `parseTextToFeature`: Parses text into a feature.
 *
 * Usage: `document.querySelector("eox-map").registerProjection([...]);`
 *
 * ## Additional Helper Methods
 *
 * - `buffer`: Applies a buffer around an extent
 * - `transform`, `transformExtent`: Transform coordinates and extents between projections.
 *
 * Usage: `import { buffer, transform, transformExtent } from "@eox/map";`
 */
export const EOxMap = {
  name: "EOxMap",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-map",
  events: [
    "resize",
    "clusterSelect",
    "loadend",
    "mapmounted",
    "select",
    "layerschanged",
  ],
  schema: z.object({
    /** Gets the current configuration of the map. */
    config: z.any().optional(),
    /** Gets the current center coordinates of the map. */
    center: z.array(z.any()).optional(),
    /** Gets the current layers of the map */
    layers: z.array(z.any()).optional(),
    /** Gets the current zoom level of the map. */
    zoom: z.number().optional(),
    /** Gets the current animation options. */
    animationOptions: z.any().optional(),
    /** Gets the current map controls. */
    controls: z.any().optional(),
    /** Object to store various map interactions (e.g., drag, zoom). */
    interactions: z.any().optional(),
    /** Gets the current center of the map in longitude and latitude. */
    lonLatCenter: z.array(z.any()).optional(),
    /** Gets the current extent of the map in longitude and latitude. */
    lonLatExtent: z.array(z.any()).optional(),
    /** Gets the current scroll interaction state. */
    preventScroll: z.boolean().optional(),
    /** Gets the current map projection. */
    projection: z.any().optional(),
    /** Gets the current sync state of the map. */
    sync: z.string().optional(),
    /** Gets the current extent of the map. */
    zoomExtent: z.array(z.any()).optional(),
    /** Gets the current globe configuration properties. */
    globeConfig: z.any().optional(),
    /** Stores the last 2D projection to switch back from globe view. */
    last2dProjection: z.any().optional(),
    /** Gets the openlayer map projection. */
    OLprojection: z.any().optional(),
    /** Sets the  Whether the globe is enabled. */
    globeEnabled: z.boolean().optional(),
    /** The OpenLayers map instance. */
    map: z.any().optional(),
    /** Object to store selection interactions for the map. */
    selectInteractions: z.any().optional(),
    /** Object to store map controls (e.g., custom buttons, geolocation). */
    mapControls: z.any().optional(),
    /** The globe instance when using globe projection. todo: define proper type */
    globe: z.any().optional(),
  }),
};

/**
 * The `eox-storytelling` element enables the creation of interactive, multimedia-rich stories using Markdown and custom sections. It supports advanced features such as slot-based content, remote Markdown loading, and custom initialization logic via events.
 *
 * ## Usage
 * Place `<eox-storytelling></eox-storytelling>` in your application and pass Markdown content via the `markdown` property, slot, or a remote URL using the `markdown-url` property. The component automatically renders the story, including custom sections such as maps, images, and videos, using extended Markdown syntax and HTML comments for configuration.
 *
 * ## Features
 * - **Markdown Rendering:** Supports standard and extended Markdown syntax for rich story content.
 * - **Slot Content:** Accepts Markdown via slot for flexible content injection.
 * - **Remote Markdown:** Loads Markdown from external URLs for dynamic stories.
 * - **Custom Sections:** Add maps, images, videos, and more using HTML comment configuration.
 * - **Events:** Emits events such as `init` for custom initialization logic (e.g., map projection setup).
 *
 * ## Custom Markdown Extensions
 * In order to add custom functionality to the Markdown rendering, include HTML comments with a specific syntax: `<!--{ key="value" }-->`. Here are some of the supported extensions:
 * - **Section Configuration:** Define sections with attributes like `as`, `id`, `class`, `style`, and more.
 * - **Hero Section:** Create a full-screen hero section using `#` (Header 1) with additional attributes for images or videos.
 * - **Navigation Control:** Use the `nav` attribute to control the visibility of the navigation menu.
 * - **Custom Attributes:** Use HTML comments to define attributes for sections, such as `as`, `class`, `style`, and more.
 *
 * Read the [Markdown with Tour story](./?path=/story/elements-eox-storytelling--markdown-tour) for a comprehensive guide on using Markdown extensions.
 */
export const EOxStorytelling = {
  name: "EOxStorytelling",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-storytelling",
  events: ["init", "upload:file", "changed"],
  schema: z.object({
    /** Markdown Content */
    markdown: z.string().optional(),
    /** Markdown Content URL */
    markdownURL: z.string().optional(),
    /** Enable or disable navigation */
    showNav: z.boolean().optional(),
    /** Enable or disable editor */
    showEditor: z.any().optional(),
    /** Enable or disable hero scroll indicator */
    showHeroScrollIndicator: z.boolean().optional(),
    /** Enable or disable map loading indicator by default */
    showMapLoadingIndicator: z.boolean().optional(),
    /** Renders the element without a shadow root */
    noShadow: z.boolean().optional(),
    /** Disable auto save */
    disableAutosave: z.boolean().optional(),
    /** Render the element without additional styles */
    unstyled: z.boolean().optional(),
    /** custom section index */
    addCustomSectionIndex: z.number().optional(),
    /** Selected custom element object */
    selectedCustomElement: z.any().optional(),
    /** List of items in navigation */
    nav: z.array(z.any()).optional(),
  }),
};

/**
 * ### Introduction
 * Working with STAC catalogs, collections and items often times requires
 * to fetch a JSON file, parse its contents and display some of its fields
 * in some formatted way. To make these steps reusable, the `eox-stacinfo`
 * element offers a set of functionalities:
 * - **automatically fetch a STAC file** as soon as the element loads
 * - offer a **property whitelist** functionality to choose which properties to display
 * - display the properties in **configurable sections** (header, body, featured, footer)
 * - allow to **override** any property display for application-specific custom needs
 *
 * The use case for this element is alongside a map which displays STAC files
 * or in a catalog browsing scenario where a quick look at the most important properties
 * is needed.
 *
 * #### Technology
 * Under the hood, this element uses [stac-fields](https://github.com/stac-utils/stac-fields) for parsing and pre-formatting properties.
 *
 * #### Usage
 * Place `<eox-stacinfo></eox-stacinfo>` in your application and set the `for` property to a valid STAC resource URL. The element will fetch the file and display its properties in configurable sections.
 *
 * Each section (`header`, `tags`, `body`, `featured`, `footer`) accepts an array of strings (property keys) or `Filter` objects. These can be passed as properties or stringified JSON attributes.
 *
 * A `Filter` object has the following structure:
 * ```javascript
 * {
 *   key: "links",
 *   filter: (link) => {
 *     // Return true/false to include/exclude items from a list (e.g. assets, links)
 *     return link.rel === "example";
 *   }
 * }
 * ```
 *
 * Sections:
 * - `header`: Array of property keys or Filters to display at the top
 * - `tags`: Array of property keys or Filters to display as tags
 * - `body`: Array of property keys or Filters for the main content
 * - `featured`: Array of property keys or Filters for prominent display
 * - `footer`: Array of property keys or Filters for the bottom section
 *
 * #### Customization
 * - **Slots**: You can override the default rendering of any property by providing a slot with the property name. This enables advanced customization and integration with application-specific UI.
 * - **Unstyled mode**: By setting the `unstyled` property, only minimal styles are applied, allowing for full custom styling and integration into different design systems.
 */
export const EOxStacinfo = {
  name: "EOxStacinfo",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-stacinfo",
  events: [],
  schema: z.object({
    /** Whether to allow HTML in the property display */
    allowHtml: z.boolean().optional(),
    /** Whether to use unstyled mode */
    unstyled: z.boolean().optional(),
    /** The identifier for the STAC resource to fetch */
    for: z.string().optional(),
    /** Keys of properties to display in the header */
    header: z.array(z.any()).optional(),
    /** Keys of properties to display to display as tags */
    tags: z.array(z.any()).optional(),
    /** Keys of properties to display to display in the main body */
    body: z.array(z.any()).optional(),
    /** Keys of properties to display in the featured section */
    featured: z.array(z.any()).optional(),
    /** Keys of properties to display in the footer */
    footer: z.array(z.any()).optional(),
    /** The state object containing the fetched STAC information */
    stacInfo: z.array(z.any()).optional(),
    /** The state object containing the parsed STAC properties */
    stacProperties: z.array(z.any()).optional(),
  }),
};

/**
 * The `eox-timecontrol` element provides interactive time navigation for map layers, supporting animation, a simple time slider, timeline visualization, date picker, and custom date formatting.
 *
 * ## Basic usage:
 *
 * ```
 * import "@eox/timecontrol"
 *
 * <eox-timecontrol for="eox-map#my-map">
 *   <eox-timecontrol-date></eox-timecontrol-date>
 *   <eox-timecontrol-slider></eox-timecontrol-slider>
 *   <eox-timecontrol-timeline></eox-timecontrol-timeline>
 *   <eox-timecontrol-timelapse></eox-timecontrol-timelapse>
 *   <eox-timecontrol-picker></eox-timecontrol-picker>
 * </eox-timecontrol>
 * ```
 *
 * ## Features
 *
 * - **Time-based Layer Control:** Link to an `<eox-map>` instance for time-based WMS layer control. Automatically detects layers with `timeControlValues` and `timeControlProperty` properties.
 * - **Multiple UI Components:** Supports date display, date picker (popup or inline), timeline visualization, slider, and timelapse export.
 * - **Navigation Controls:** Previous/next buttons for stepping through time periods.
 * - **Date Formatting:** Customizable display format using dayjs tokens (default: "YYYY-MM-DD").
 * - **Filtering:** Integration with `<eox-itemfilter>` for filtering timeline items by metadata properties.
 * - **Timelapse Export:** Export animated GIFs or MP4s from time series data.
 * - **Standalone Mode:** Can be used without a map for time selection purposes.
 *
 * ## Component Structure
 *
 * The timecontrol element acts as a container for child components:
 * - `<eox-timecontrol-date>`: Displays the current selected date(s) with optional navigation buttons.
 * - `<eox-timecontrol-picker>`: Calendar-based date picker (popup or inline, single or range selection).
 * - `<eox-timecontrol-slider>`: Range slider for selecting date ranges.
 * - `<eox-timecontrol-timeline>`: Timeline visualization using vis-timeline.
 * - `<eox-timecontrol-timelapse>`: Timelapse export functionality.
 *
 * ## Layer Configuration
 *
 * Layers must have the following properties to work with timecontrol:
 * - `properties.timeControlValues`: Array of objects with `date` and optional metadata.
 * - `properties.timeControlProperty`: Property name used in WMS requests (e.g., "TIME").
 * - `properties.id`: Layer identifier (used for grouping in timeline).
 * - `properties.name`: Display name (used in timeline groups).
 *
 * ## Events
 *
 * - `stepchange`: Fired when the current time step changes (not currently implemented).
 */
export const EOxTimecontrol = {
  name: "EOxTimecontrol",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-timecontrol",
  events: [],
  schema: z.object({
    /** Query selector of an `eox-map` (`String`, passed as an attribute or property) or an `eox-map` DOM element (`HTMLElement`, passed as property) */
    for: z.any().optional(),
    /** Whether default styling is disabled. */
    unstyled: z.boolean().optional(),
    /** Property key used to retrieve layer titles (default: "name"). */
    titleKey: z.string().optional(),
    /** Property key used to identify layers (default: "id"). */
    layerIdKey: z.string().optional(),
    /** Whether to show UTC dates in the timecontrol (default: false). */
    showUTC: z.boolean().optional(),
    /** Whether external map rendering is enabled for timelapse export. */
    externalMapRendering: z.boolean().optional(),
    /** The currently selected date range as [startDate, endDate] in ISO format. */
    selectedDateRange: z.any().optional(),
    /** Array of control values. */
    controlValues: z.array(z.any()).optional(),
    /** The initial date range as [startDate, endDate] in ISO/UTC format. */
    initDate: z.any().optional(),
    /** Sets the array of slider values. */
    sliderValues: z.array(z.any()).optional(),
    /** Sets the reference to the associated eox-map element. */
    eoxMap: z.any().optional(),
    /** Sets the DataSet containing timeline groups. */
    groups: z.any().optional(),
    /** Sets the DataSet containing timeline items. */
    items: z.any().optional(),
    /** Handler for date change events. Updates the selected date range and applies it to map layers. */
    dateChange: z.any().optional(),
    /** Handler for filter events from eox-itemfilter. Updates timeline item visibility based on filter results. */
    filter: z.any().optional(),
  }),
};

/**
 * The `eox-tour` element uses [driver.js](https://driverjs.com/) to create interactive product tours.
 * It supports cross-iframe handoffs (start a tour in a "parent" and continue inside an iframe),
 * persistent "seen" state via `localStorage`, and styling based on EOxUI.
 *
 * Features:
 * - Define a series of steps to guide users through an application.
 * - Highlight target elements and display customizable popovers.
 * - Cross-iframe handoff logic seamlessly transitioning between parent window and iframe (supports both a "simple mode" defined entirely in the parent config, and an "advanced mode" with individual configs in both frames).
 * - Persistent state tracking using `localStorage` to avoid repeatedly showing completed tours.
 * - Prevent automatic start on mount for manual control over when the tour begins.
 *
 * The `eox-tour` element does not render any visible content itself; it operates entirely through the driver.js popovers and highlights.
 * Therefore it doesn't matter where in the DOM you place the `<eox-tour>` element, but it must be present in the document for the tour to function.
 *
 * **Note on the `id` attribute:**
 * An `id` attribute is required for identifying instances for `localStorage` persistence, and
 * it is strictly mandated for iframe handoff scenarios to correctly route `postMessage` synchronization.
 */
export const EOxTour = {
  name: "EOxTour",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-tour",
  events: [
    "tour-highlight-started",
    "tour-highlighted",
    "tour-deselected",
    "tour-destroy-started",
  ],
  schema: z.object({
    /** The driver.js configuration object. See the [driver.js docs](https://driverjs.com/docs/configuration) for available options. */
    config: z.any().optional(),
    /** Whether to show the tour every time the component is mounted, bypassing the `localStorage` check. */
    showEveryTime: z.boolean().optional(),
    /** Whether to prevent the tour from starting automatically on mount. If true, the tour must be started manually via the `start()` method. */
    preventAutoStart: z.boolean().optional(),
    /** Whether to disable the default EOx branded styling. */
    unstyled: z.boolean().optional(),
  }),
};

/**
 * A2UI wrapper for eox-a2ui-element
 */
export const EOxA2uiElement = {
  name: "EOxA2uiElement",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-a2ui-element",
  events: ["eventName"],
  schema: z.object({
    /**  */
    _elementRef: z.any().optional(),
    /**  */
    _appliedProps: z.any().optional(),
  }),
};

/**
 * A wrapper custom element that accepts a2ui stream/messages data and renders the elements inside.
 */
export const EOxA2uiWrapper = {
  name: "EOxA2uiWrapper",
  tagName: "eox-a2ui-element",
  targetTagName: "eox-a2ui-wrapper",
  events: ["a2ui-action"],
  schema: z.object({
    /**  */
    stream: z.array(z.any()).optional(),
    /**  */
    messages: z.array(z.any()).optional(),
    /**  */
    catalog: z.any().optional(),
    /**  */
    _stream: z.array(z.any()).optional(),
    /**  */
    _messages: z.array(z.any()).optional(),
  }),
};

export const eoxComponents = [
  EOxChart,
  EOxFeedback,
  EOxDrawtools,
  EOxGeosearch,
  EOxItemfilter,
  EOxLayercontrol,
  EOxJsonform,
  EOxLayout,
  EOxLayoutItem,
  EOxMap,
  EOxStorytelling,
  EOxStacinfo,
  EOxTimecontrol,
  EOxTour,
  EOxA2uiElement,
  EOxA2uiWrapper,
];
