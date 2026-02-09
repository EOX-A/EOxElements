// Global import of eox-elements in .storybook/preview.js!

import {
  AutoSpreadStory,
  CardDisplayStory,
  CSSVariablesStory,
  ExternalStory,
  ExternalFetchFnStory,
  InlineModeStory,
  NestedPropertyStory,
  PreSetFilterStory,
  PrimaryStory,
  ResultActionStory,
} from "./index.js";

export default {
  title: "Elements/eox-itemfilter",
  tags: ["autodocs"],
  component: "eox-itemfilter",
};

/**
 * A basic example for an item filter configuration, demonstrating all major filter types (`text`, `select`, `multiselect`, `range`, `spatial`) and result aggregation by property.
 */
export const Primary = PrimaryStory();

/**
 * Using `inlineMode`, the itemfilter is rendered in a single input field, ideal for compact UIs or toolbars. Results are hidden until a filter is applied.
 */
export const InlineMode = InlineModeStory();

/**
 * By using `state` inside the `filterProperties', it is possible to start the itemfilter.
 * with a pre-defined state. Useful for initializing with default selections.
 */
export const PreSetFilter = PreSetFilterStory();

/**
 * A nested property can be used as key using a dot notation in the filter key (e.g. `status.code`). This enables advanced filtering for deeply structured data.
 */
export const NestedProperty = NestedPropertyStory();

/**
 * Example of using an external API endpoint for filtering, with a custom `externalFilter` function. Allows integration with remote data sources and custom search logic.
 */
export const External = ExternalStory();

/**
 * Advanced usage of `externalFilter` where the function returns an object containing both a `url` and a `fetchFn`. This allows for complex custom fetching logic, such as response transformation or additional side effects.
 */
export const ExternalFetchFn = ExternalFetchFnStory();

/**
 * Use `autoSpreadSingle` to automatically spread single-item aggregations to the root level, simplifying the result view when only one item matches a filter.
 */
export const AutoSpread = AutoSpreadStory();

/**
 * Render results in a responsive card grid using the `result-type` property set to `cards`. Ideal for visual browsing and highlighting item images and details.
 * Requires to also import `@eox/layout` for card styling.
 */
export const CardDisplay = CardDisplayStory();

/**
 * CSS variables can be used to modify the styling and layout of itemfilter: e.g. the `--form-flex-direction`
 * variable set to `row` instead of `column` (default) for a horizontal layout.
 */
export const CSSVariables = CSSVariablesStory();

/**
 * The `click:result-action` event is triggered when a result action is clicked. You can enable  the secondary button and this event with `enableResultAction`.
 * The icon can be configered with the `resultActionIcon` property. Useful for additional actions on results, such as opening details or triggering workflows.
 */
export const ResultAction = ResultActionStory();
