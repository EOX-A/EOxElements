import type { DataSet } from "vis-data/standalone";
import type { Timeline } from "vis-timeline/standalone";
import type { Calendar, DateAny } from "vanilla-calendar-pro";
import type { EOxMap } from "@eox/map";
import type { EOxItemFilter as EOxItemFilterType } from "@eox/itemfilter";

/**
 * Represents a single time control value entry with date and optional metadata.
 */
export type TimeControlValue = {
  /**
   * The date string in ISO format (YYYY-MM-DD).
   */
  date: string;
  /**
   * Optional metadata associated with this time value (e.g., cloudCoverage).
   */
  [key: string]: any;
};

/**
 * Represents the configuration for a slider layer with time control values.
 */
export type SliderValue = {
  /**
   * The layer identifier.
   */
  layer: string | number;
  /**
   * The display name of the layer.
   */
  name: string;
  /**
   * The property name used for time control (e.g., "TIME").
   */
  property: string;
  /**
   * Array of time control values with dates and metadata.
   */
  values: Array<{
    /**
     * Date string in YYYY-MM-DD format.
     */
    date: string;
    /**
     * UTC formatted date string.
     */
    utc: string;
    /**
     * Local formatted date string.
     */
    local: string;
    /**
     * Original date value before formatting.
     */
    originalDate: string;
    /**
     * Additional metadata properties.
     */
    [key: string]: any;
  }>;
  /**
   * Reference to the OpenLayers layer instance.
   */
  layerInstance: import("ol/layer/Base").default;
};

/**
 * Represents a date range as an array of two ISO date strings.
 */
export type DateRange = [string, string];

/**
 * Represents the selected date range, which can be null or a DateRange.
 */
export type SelectedDateRange = DateRange | null;

/**
 * Configuration options for the time control date component.
 */
export type TimeControlDateOptions = {
  /**
   * Date format string using dayjs tokens (default: "YYYY-MM-DD").
   */
  format?: string;
  /**
   * Whether to show navigation buttons (previous/next).
   */
  navigation?: boolean;
  /**
   * Whether to disable default styling.
   */
  unstyled?: boolean;
};

/**
 * Configuration options for the time control picker component.
 */
export type TimeControlPickerOptions = {
  /**
   * Whether to display the calendar in a popup mode.
   */
  popup?: boolean;
  /**
   * Whether to disable default styling.
   */
  unstyled?: boolean;
  /**
   * Whether to enable date range selection.
   */
  range?: boolean;
  /**
   * Whether to show dots indicating available data on calendar dates.
   */
  showDots?: boolean;
};

/**
 * Configuration options for the time control slider component.
 */
export type TimeControlSliderOptions = {
  /**
   * Whether to disable default styling.
   */
  unstyled?: boolean;
  /**
   * Array of data items for the slider.
   */
  data?: Array<any>;
  /**
   * The selected date range.
   */
  selectedDateRange?: DateRange;
};

/**
 * Configuration options for the time control timeline component.
 */
export type TimeControlTimelineOptions = {
  /**
   * Whether to disable default styling.
   */
  unstyled?: boolean;
};

/**
 * Configuration options for the time control timelapse component.
 */
export type TimeControlTimelapseOptions = {
  /**
   * Whether to disable default styling.
   */
  unstyled?: boolean;
  /**
   * Animation speed in frames per second (default: 1).
   */
  speed?: number;
  /**
   * Export format: "gif" or "mp4" (default: "gif").
   */
  format?: "gif" | "mp4";
};

/**
 * Configuration for export functionality in timelapse component.
 */
export type ExportConfig = {
  /**
   * Array of map layer configurations for export.
   */
  mapLayers: Array<{
    /**
     * Array of layer configurations.
     */
    layers: Array<any>;
    /**
     * Map center coordinates [x, y].
     */
    center?: Array<number>;
    /**
     * Map zoom level.
     */
    zoom?: number;
    /**
     * Preview image URL (optional).
     */
    img?: string;
    /**
     * Date string for this layer (optional).
     */
    date?: string;
  }>;
  /**
   * Index of the selected preview.
   */
  selectedPreview?: number;
  /**
   * Whether the animation is currently playing.
   */
  play?: boolean;
};

/**
 * Configuration for filter options in time control.
 */
export type FilterConfig = {
  /**
   * Filter key/property name.
   */
  key: string;
  /**
   * Display title for the filter.
   */
  title: string;
  /**
   * Filter type (e.g., "range").
   */
  type: string;
  /**
   * Whether the filter is expanded by default.
   */
  expanded?: boolean;
  /**
   * Minimum value for range filters.
   */
  min?: number;
  /**
   * Maximum value for range filters.
   */
  max?: number;
  /**
   * Step value for range filters.
   */
  step?: number;
  /**
   * Current filter state.
   */
  state?: {
    min?: number;
    max?: number;
    [key: string]: any;
  };
};

/**
 * Main time control component properties and configuration.
 */
export type TimeControlConfig = {
  /**
   * Reference to the eox-map element (can be a selector string or element instance).
   */
  for?: string | EOxMap;
  /**
   * Property key used to identify layers (default: "id").
   */
  layerIdKey?: string;
  /**
   * Property key used for layer titles (default: "name").
   */
  titleKey?: string;
  /**
   * Array of filter configurations.
   */
  filters?: Array<FilterConfig>;
  /**
   * Whether external map rendering is enabled.
   */
  externalMapRendering?: boolean;
  /**
   * Whether to disable default styling.
   */
  unstyled?: boolean;
};

/**
 * Timeline item structure for vis-timeline.
 */
export type TimelineItem = {
  /**
   * Unique identifier for the item.
   */
  id: string;
  /**
   * Group identifier this item belongs to.
   */
  group: string | number;
  /**
   * CSS class name for styling.
   */
  className: string;
  /**
   * Start date/time string.
   */
  start: string;
  /**
   * Original date value before formatting.
   */
  originalDate: string;
  /**
   * Item type (e.g., "point").
   */
  type: string;
  /**
   * Property name used for time control.
   */
  property: string;
  /**
   * Additional properties.
   */
  [key: string]: any;
};

/**
 * Timeline group structure for vis-timeline.
 */
export type TimelineGroup = {
  /**
   * Unique identifier for the group.
   */
  id: string | number;
  /**
   * Display content/label for the group.
   */
  content: string;
};

/**
 * Selected dates structure for calendar picker.
 */
export type SelectedDates = {
  /**
   * Array of selected date strings.
   */
  dates: Array<string>;
  /**
   * Selected year.
   */
  year: number;
  /**
   * Selected month (0-11).
   */
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
};

/**
 * Export handler detail structure.
 */
export type ExportHandlerDetail = {
  /**
   * Array of filter configurations.
   */
  filters: Array<FilterConfig>;
  /**
   * Selected range items organized by date.
   */
  selectedRangeItems: {
    [dateKey: string]: {
      [itemKey: string]: {
        group: string | number;
        property: string;
        date: string;
      };
    };
  };
  /**
   * Array of instances.
   */
  instances: Record<string, { layer: any; source: any }>;
  /**
   * EOxMap configuration object.
   */
  eoxMapConfig: {
    layers: Array<any>;
    center: Array<number>;
    zoom: number;
  };
};

declare global {
  /**
   * Custom element type for EOxTimeControl.
   */
  interface EOxTimeControl extends HTMLElement {
    /**
     * Reference to the associated eox-map instance.
     */
    eoxMap: EOxMap | null;
    /**
     * Loading state indicator.
     */
    setLoading(value: boolean): void;
    /**
     * Array of slider values.
     */
    sliderValues: Array<SliderValue>;
    /**
     * DataSet containing timeline groups.
     */
    groups: DataSet<TimelineGroup>;
    /**
     * DataSet containing timeline items.
     */
    items: DataSet<TimelineItem>;
    /**
     * Currently selected date range.
     */
    selectedDateRange: SelectedDateRange;
    /**
     * Currently selected range array.
     */
    selectedRange: Array<any>;
    /**
     * Property key for layer titles.
     */
    titleKey: string;
    /**
     * Property key for layer IDs.
     */
    layerIdKey: string;
    /**
     * Whether external map rendering is enabled.
     */
    externalMapRendering: boolean;
    /**
     * Handler for date changes.
     */
    dateChange: (dateRange: DateRange, instance: EOxTimeControl) => void;
    /**
     * Handler for filter events.
     */
    filter: (event: CustomEvent | undefined, instance: EOxTimeControl) => void;
  }

  /**
   * Custom element type for EOxTimeControlDate.
   */
  interface EOxTimeControlDate extends HTMLElement {
    /**
     * Date format string.
     */
    format: string;
    /**
     * Whether navigation buttons are shown.
     */
    navigation: boolean;
    /**
     * Whether default styling is disabled.
     */
    unstyled: boolean;
    /**
     * Sets the date range.
     */
    setDateRange(dateRange: DateRange): void;
  }

  /**
   * Custom element type for EOxTimeControlPicker.
   */
  interface EOxTimeControlPicker extends HTMLElement {
    /**
     * Calendar instance.
     */
    cal: Calendar | null;
    /**
     * Whether popup mode is enabled.
     */
    popup: boolean;
    /**
     * Whether default styling is disabled.
     */
    unstyled: boolean;
    /**
     * Whether range selection is enabled.
     */
    range: boolean;
    /**
     * Whether to show dots on calendar.
     */
    showDots: boolean;
    /**
     * Sets the date range.
     */
    setDateRange(dateRange: DateRange): void;
    /**
     * Initializes the calendar.
     */
    initCalendar(options?: {
      selectedDateRange?: DateRange;
      min?: DateAny;
      max?: DateAny;
    }): void;
  }

  /**
   * Custom element type for EOxTimeControlSlider.
   */
  interface EOxTimeControlSlider extends HTMLElement {
    /**
     * Whether default styling is disabled.
     */
    unstyled: boolean;
    /**
     * Data array for the slider.
     */
    data: Array<any>;
    /**
     * Selected date range.
     */
    selectedDateRange: DateRange;
    /**
     * Sets the date range and data.
     */
    setDateRange(dateRange: DateRange, data?: Array<any>): void;
  }

  /**
   * Custom element type for EOxTimeControlTimeline.
   */
  interface EOxTimeControlTimeline extends HTMLElement {
    /**
     * Whether default styling is disabled.
     */
    unstyled: boolean;
    /**
     * Vis-timeline instance.
     */
    visTimeline: Timeline | null;
    /**
     * Gets the container element.
     */
    getContainer(): HTMLElement;
    /**
     * Sets the date range.
     */
    setDateRange(dateRange: DateRange): void;
    /**
     * Initializes the timeline.
     */
    initTimeline(): void;
  }

  /**
   * Custom element type for EOxTimeControlTimelapse.
   */
  interface EOxTimeControlTimelapse extends HTMLElement {
    /**
     * Whether default styling is disabled.
     */
    unstyled: boolean;
    /**
     * Animation speed in frames per second.
     */
    speed: number;
    /**
     * Export format.
     */
    format: "gif" | "mp4";
    /**
     * Export configuration.
     */
    exportConfig: ExportConfig | null;
    /**
     * Sets the date range.
     */
    setDateRange(dateRange: DateRange): void;
    /**
     * Generates export with the given configuration.
     */
    generateExport(config: ExportConfig): Promise<void>;
  }

  /**
   * Custom element type for EOxItemFilter.
   */
  interface EOxItemFilter extends EOxItemFilterType {
    /**
     * Array of items to filter.
     */
    items: Array<FilterConfig>;
    /**
     * Filtered results.
     */
    results: Array<any>;
  }
}
