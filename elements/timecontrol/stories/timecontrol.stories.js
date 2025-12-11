// Global import of eox-elements in .storybook/preview.js!
import {
  OnlyDateStory,
  DateWithNavigationStory,
  DatePickerPopupStory,
  DatePickerStandaloneStory,
  TimelineStory,
  ExternalMapRenderingStory,
  DateFilterStory,
  ExpertStory,
  SliderStory,
  UpdateViewStory,
  DatePickerPopupItemsStory,
  NoMapStory,
} from "./index";

export default {
  title: "Elements/eox-timecontrol",
  tags: ["autodocs"],
  component: "eox-timecontrol",
};

/**
 * Basic timecontrol rendered using only the date display component.
 *
 * This renders a timecontrol element with just the `<eox-timecontrol-date>` component, which displays
 * the currently selected date(s) from the associated map layers. The date is automatically extracted
 * from layers that have `timeControlValues` and `timeControlProperty` properties.
 *
 * The component links to an `<eox-map>` instance using the `for` attribute, which can be either a
 * selector string (e.g., `"eox-map#primary"`) or a direct reference to the map element.
 */
export const OnlyDate = OnlyDateStory;

/**
 * Date display component with navigation buttons for stepping through available dates.
 *
 * This example shows the `<eox-timecontrol-date>` component with the `navigation` attribute enabled,
 * which adds previous/next buttons to step through available dates. Clicking these buttons will
 * automatically update the selected date range and apply it to the map layers.
 */
export const DateWithNavigation = DateWithNavigationStory;

/**
 * Calendar date picker displayed in popup mode, triggered by clicking the date input field.
 *
 * This example demonstrates the `<eox-timecontrol-picker>` component with `popup` enabled.
 * The calendar appears as a popup overlay when clicking on the date input field (provided by
 * `<eox-timecontrol-date>`). The picker supports both single date and range selection modes.
 */
export const DatePickerPopup = DatePickerPopupStory;

/**
 * Calendar date picker displayed in popup mode and shows items in the popup.
 *
 * This example demonstrates the `<eox-timecontrol-picker>` component with `showItems` enabled.
 * The calendar appears as a popup overlay when clicking on the date input field (provided by
 * `<eox-timecontrol-date>`). The picker supports both single date and range selection modes.
 * The picker shows items in the popup.
 */
export const DatePickerPopupItems = DatePickerPopupItemsStory;

/**
 * Calendar date picker displayed inline (not in popup mode).
 *
 * This example shows the `<eox-timecontrol-picker>` component without the `popup` attribute,
 * displaying the calendar inline within the component. Useful for always-visible date selection
 * interfaces.
 */
export const DatePickerStandalone = DatePickerStandaloneStory;

/**
 * Range slider for selecting date ranges with visual indicators for years and months.
 *
 * This example demonstrates the `<eox-timecontrol-slider>` component, which provides a visual
 * range slider for selecting start and end dates. The slider displays tick marks for years and
 * months, and tooltips show the formatted dates when hovering over or dragging the handles.
 *
 * The slider automatically extracts available dates from timeline items and allows users to
 * select a date range by dragging the handles. The selected range is immediately applied to
 * the map layers.
 */
export const Slider = SliderStory;

/**
 * Timeline visualization using vis-timeline with date picker and calendar integration.
 *
 * This example shows the full power of the timecontrol component with the `<eox-timecontrol-timeline>`
 * component. The timeline displays timeline items as milestones grouped by layer, allowing users
 * to visualize time-based data across multiple layers.
 *
 * Features demonstrated:
 * - Timeline visualization with groups and items
 * - Date picker with dots indicating available data (`showDots` attribute)
 * - Date display with navigation buttons
 * - Range selection via custom time markers on the timeline
 * - Click events on timeline items to select specific dates
 *
 * The timeline automatically syncs with the date picker and other components, providing a
 * comprehensive time navigation interface.
 */
export const Timeline = TimelineStory;

/**
 * External map rendering mode for timelapse export with custom map rendering logic.
 *
 * This example demonstrates the `externalMapRendering` feature, which allows custom handling
 * of map layer updates for timelapse export. When enabled, the timecontrol dispatches an
 * `export` event with detailed information about selected items, allowing external code to
 * handle the map rendering and snapshot generation.
 *
 * This is useful when you need custom control over how map layers are rendered for each
 * time step, or when using map rendering services that require special handling.
 */
export const ExternalMapRendering = ExternalMapRenderingStory;

/**
 * Date filtering using eox-itemfilter for filtering timeline items by metadata properties.
 *
 * This example shows how to use the `<eox-itemfilter>` component in conjunction with timecontrol
 * to filter timeline items based on metadata properties (e.g., cloud coverage). The filter
 * component allows users to set filter criteria, and the timeline automatically updates to
 * show only matching items.
 *
 * The calendar picker also respects the filter, showing dots only for dates that have data
 * matching the current filter criteria. Filtered-out dates are displayed with reduced opacity.
 */
export const DateFilter = DateFilterStory;

/**
 * Update view event story.
 *
 * This example demonstrates the `update:view` event, which is dispatched when the view range of the timeline changes.
 * The event is dispatched with the start and end dates of the view range.
 */
export const UpdateView = UpdateViewStory;

/**
 * No map story.
 *
 * This example demonstrates the timecontrol component without a map.
 */
export const NoMap = NoMapStory;

/**
 * Expert example showcasing all timecontrol features together.
 *
 * This comprehensive example demonstrates all available timecontrol components and features:
 * - Date display with navigation
 * - Calendar picker in popup mode with dots
 * - Range slider for date selection
 * - Timeline visualization
 * - Timelapse export functionality
 * - Date filtering
 *
 * This example serves as a reference for building complex time navigation interfaces with
 * multiple interaction methods and visualization options.
 */
export const Expert = ExpertStory;
