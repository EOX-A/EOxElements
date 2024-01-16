import { html, nothing } from "lit";

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
      .includes(t)
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

    return pass;
  });

/**
 * Generates a button element based on the provided tool and style preference.
 *
 * @param {string} tool - Tool name for the button.
 * @param {boolean} unstyled - Style preference for the button.
 * @returns {import("lit").HTMLTemplateResult} - Button element.
 */
export const Button = (tool, unstyled) => html`
  <button slot="${tool}-icon" class="icon">${unstyled ? tool : nothing}</button>
`;

/**
 * Generates a remove button element with event handling and layer control logic.
 *
 * @param {import("../components/layer-tools").EOxLayerControlLayerTools} EOxLayerControlLayerTools - Instance of EOxLayerControlLayerTools
 * @returns {import("lit").HTMLTemplateResult} - Remove button element.
 */
export const removeButton = (EOxLayerControlLayerTools) => html`
  <button
    class="remove-icon icon"
    @click=${() => {
      const { layer } = EOxLayerControlLayerTools;
      layer?.set("layerControlOptional", true);
      layer?.setVisible(false);
      EOxLayerControlLayerTools.dispatchEvent(
        new CustomEvent("changed", {
          detail: layer,
          bubbles: true,
        })
      );
    }}
  >
    ${EOxLayerControlLayerTools.unstyled ? "x" : nothing}
  </button>
`;

/**
 * Generates a sort button element based on the style preference.
 *
 * @param {boolean} unstyled - Style preference for the button.
 * @returns {import("lit").HTMLTemplateResult} - Sort button element.
 */
export const sortButton = (unstyled) => html`
  <span class="button sort-icon icon drag-handle">
    ${unstyled ? "═" : nothing}
  </span>
`;
