import { html } from "lit";

/**
 * Filters actions based on provided tools and layer properties.
 *
 * @param {Array<string>} tools - Array of tool names.
 * @param {import("ol/layer").Layer} layer - The native OL layer
 * @returns {Array<string>} - Filtered array of action names.
 */
export const _parseActions = (tools, layer) => {
  return tools?.filter((t) =>
    ["remove", "sort"]
      .filter((k) => (layer?.get("layerControlDisable") ? k !== "sort" : true))
      .includes(t),
  );
};

/**
 * Parses tools based on provided tools and layer properties.
 *
 * @param {Array<string>} tools - Array of tool names.
 * @param {import("ol/layer").Layer} layer - The native OL layer
 * @returns {Array<string>} - Parsed array of tool names.
 */
export const _parseTools = (tools, layer) =>
  tools?.filter((t) => {
    let pass = true;
    if (["remove", "sort"].includes(t)) pass = false;
    if (t === "info") pass = layer.get("description");
    if (t === "config") pass = layer.get("layerConfig");
    if (t === "datetime") pass = layer.get("layerDatetime");
    if (t === "legend") pass = layer.get("layerLegend");
    return pass;
  });

/**
 * Generates a button element based on the provided tool and style preference.
 *
 * @param {string} tool - Tool name for the button.
 * @param {boolean} unstyled - Style preference for the button.
 * @returns {import("lit").HTMLTemplateResult} - Button element.
 */
export const Button = (tool, icon, unstyled) => html`
  <button
    slot="${tool}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${unstyled ? tool : html`<i class="small primary-text">${icon}</i>`}
  </button>
`;

/**
 * Generates a remove button element with event handling and layer control logic.
 *
 * @param {import("../components/layer-tools").EOxLayerControlLayerTools | import("../components/layer").EOxLayerControlLayer} Component - Instance of EOxLayerControlLayerTools
 * @returns {import("lit").HTMLTemplateResult} - Remove button element.
 */
export const removeButton = (Component, icon) => html`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${() => {
      const { layer } = Component;
      layer?.set("layerControlOptional", true);
      layer?.setVisible(false);
      Component.dispatchEvent(
        new CustomEvent("changed", {
          detail: layer,
          bubbles: true,
        }),
      );
    }}
  >
    ${Component.unstyled ? "x" : html`<i class="small red-text">${icon}</i>`}
  </button>
`;

/**
 * Generates a sort button element based on the style preference.
 *
 * @param {boolean} unstyled - Style preference for the button.
 * @returns {import("lit").HTMLTemplateResult} - Sort button element.
 */
export const sortButton = (unstyled, icon) => html`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action"
    style="cursor: ns-resize;"
  >
    ${unstyled ? "═" : html`<i class="small primary-text">${icon}</i>`}
  </button>
`;

export function getToolsIcon() {
  return {
    dots: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,
    info: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,
    opacity: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,
    config: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,
    datetime: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,
    legend: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,
    remove: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,
    sort: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`,
  };
}
