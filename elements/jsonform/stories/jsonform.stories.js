// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";
import {
  CatalogStory,
  CollectionStory,
  ExternalStory,
  MarkdownStory,
  PrimaryStory,
  ButtonsEditorStory,
  MinMaxEditorStory,
  BoundingBoxStory,
  PolygonStory,
  FeatureSelectionStory,
  PointStory,
  UnStyledStory,
  WKTStory,
  GeoJSONStory,
  LineStory,
  CustomEditorInterfacesStory,
  ShowOptInPropertiesStory,
  ValidationStory,
  CodeStory,
  OptionalPropertiesStory,
  FlexLayoutStory,
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
      .propertiesToggle=${args.propertiesToggle}
      .noShadow=${args.noShadow}
      .unstyled=${args.unstyled}
      @change=${args.change}
      @ready=${args.ready}
      @submit=${args.submit}
    ></eox-jsonform>
  `,
};

/**
 * Basic JSON Form example. Renders a form based on a provided JSON schema.
 */
export const Primary = PrimaryStory;

/**
 * Validation example. Includes a submit button that is only enabled when validation passes.
 * Shows how to handle form validation and submit events.
 */
export const Validation = ValidationStory;

/**
 * Ace editor example. Shows how to use a code editor as a form input.
 * Demonstrates integration of external editors via schema configuration.
 */
export const Code = CodeStory;

/**
 * Opt-in properties example. Shows how to display and interact with opt-in properties in the form.
 * Demonstrates dynamic property visibility and value updates.
 * Required values are always displayed, whereas optional properties are only shown
 * when they have a value or have been opted-in by the user.
 */
export const ShowOptInProperties = ShowOptInPropertiesStory;

/**
 * Optional properties example. Shows how to handle optional properties in the form schema.
 * Demonstrates hiding and showing optional fields based on schema and value. Also shows
 * the "edit properties" button to toggle inclusion or addition of optional properties.
 */
export const OptionalProperties = OptionalPropertiesStory;

/**
 * STAC Catalog example. Renders a form based on a STAC Catalog schema and value.
 * Demonstrates complex schema usage and initial value population.
 */
export const Catalog = CatalogStory;

/**
 * STAC Collection example. Renders a form based on a STAC Collection schema and value.
 * Demonstrates advanced schema features and toggling properties.
 */
export const Collection = CollectionStory;

/**
 * External URL example. Loads schema and value from external URLs.
 * Demonstrates async loading and ready event handling. Once the `eox-jsonform` has loaded,
 * it logs to the console that it is ready ("Schema loading finished, editor ready!").
 */
export const External = ExternalStory;

/**
 * Markdown Editor example. Renders a markdown editor input based on schema configuration.
 * Demonstrates integration of markdown editing in forms.
 */
export const Markdown = MarkdownStory;

/**
 * Buttons Editor example. Renders a custom button group input based on enum values.
 * Demonstrates custom input integration and enum handling.
 */
export const ButtonsEditor = ButtonsEditorStory;

/**
 * MinMax Editor example. Renders a custom min-max range input.
 * Demonstrates custom input integration for range selection.
 */
export const MinMaxEditor = MinMaxEditorStory;

/**
 * Bounding Box example. Allows users to select a bounding box as a form input.
 * Demonstrates spatial input integration with drawtools.
 */
export const BoundingBox = BoundingBoxStory;

/**
 * Polygon example. Allows users to draw polygons as a form input.
 * Demonstrates spatial input integration with drawtools.
 */
export const Polygons = PolygonStory;

/**
 * Point example. Allows users to select points as a form input.
 * Demonstrates spatial input integration with drawtools.
 */
export const Points = PointStory;

/**
 * LineString example. Allows users to draw lines as a form input.
 * Demonstrates spatial input integration with drawtools.
 */
export const Line = LineStory;

/**
 * Feature Selection example. Allows users to select features from a map as a form input.
 * Demonstrates integration with eox-map and spatial feature selection.
 * Using the format `features` in the schema allows multiple features to be selected and returns values
 * in an array if features, whereas the format `feature` allows a single feature to be selected and returned.
 */
export const FeatureSelection = FeatureSelectionStory;

/**
 * WKT example. Returns drawn features as WKT strings.
 * Demonstrates output format customization for spatial inputs.
 */
export const WKT = WKTStory;

/**
 * GeoJSON example. Returns drawn features as GeoJSON.
 * Demonstrates output format customization for spatial inputs.
 */
export const Geojson = GeoJSONStory;

/**
 * Flex Layout example. Demonstrates how to use flex layout for arranging form elements side-by-side.
 * Shows how to configure the layout of the form using schema options.
 */
export const FlexLayout = FlexLayoutStory;

/**
 * Custom Editor Interfaces example. Shows how to create custom form inputs for json-editor.
 * Demonstrates extensibility via custom editor interfaces based on the JSONEditor.AbstractEditor.
 */
export const CustomEditorInterfaces = CustomEditorInterfacesStory;

/**
 * Unstyled example. Renders the form without default styles.
 * Demonstrates style customization and unstyled rendering.
 */
export const Unstyled = UnStyledStory;
