// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";
import {
  CatalogStory,
  CollectionStory,
  ExternalStory,
  MarkdownStory,
  PrimaryStory,
  BoundingBoxStory,
  PolygonStory,
  FeatureSelectionStory,
  PointStory,
  UnStyledStory,
  WKTStory,
  GeoJSONStory,
  LineStory,
  CustomEditorInterfacesStory,
  ValidationStory,
  CodeStory,
  OptionalPropertiesStory,
} from "./index.js";

export default {
  title: "Elements/eox-jsonform",
  tags: ["autodocs"],
  component: "eox-jsonform",
  parameters: {
    layout: "padded",
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .value=${args.value}
      .options=${args.options}
      .noShadow=${args.noShadow}
      .unstyled=${args.unstyled}
      @change=${args.onChange}
      @ready=${args.onReady}
      @submit=${args.onSubmit}
    ></eox-jsonform>
    <style>
      .field.small > :is(input, textarea, select) {
        font-size: 0.75rem;
      }
    </style>
    <div class="field border small">
      <input type="text" placeholder="type here" />
    </div>
  `,
};

/**
 * Basic JSON Form example
 */
export const Primary = PrimaryStory;

/**
 * Basic validation example. Includes submit button that is only clickable once validation passes.
 */
export const Validation = ValidationStory;

/**
 * Example showing the usage of Ace editor for code editing
 */
export const Code = CodeStory;

export const OptionalProperties = OptionalPropertiesStory;

/**
 * JSON Form based on STAC Catalog config
 */
export const Catalog = CatalogStory;

/**
 * JSON Form based on STAC collection config
 */
export const Collection = CollectionStory;

/**
 * JSON Form based on External URL
 */
export const External = ExternalStory;

/**
 * JSON Form based on Markdown Editor config
 */
export const Markdown = MarkdownStory;

/**
 * JSON Form based on drawtools - Box
 */
export const BoundigBox = BoundingBoxStory;

/**
 * JSON Form based on drawtools - Polygon
 */
export const Polygons = PolygonStory;

/**
 * JSON Form based on drawtools - Point
 */
export const Points = PointStory;

/**
 * JSON Form based on drawtools - LineString
 *
 */
export const Line = LineStory;
/**
 * JSON Form based on drawtools - Feature Selection
 */
export const FeatureSelection = FeatureSelectionStory;

/**
 * JSON Form based on drawtools - Returns the value as WKT
 */
export const WKT = WKTStory;
/**
 * JSON Form based on drawtools - Returns the value as GeoJSON
 */
export const Geojson = GeoJSONStory;

/**
 * With the `customEditorInterfaces` property it is possible to create
 * one or more custom form inputs for json-editor (based on its `JSONEditor.AbstractEditor`).
 * See [json-editor readme](https://github.com/json-editor/json-editor?tab=readme-ov-file#custom-editor-interfaces) for more details.
 */
export const CustomEditorInterfaces = CustomEditorInterfacesStory;

/**
 * Unstyled JSON Form
 */
export const Unstyled = UnStyledStory;
