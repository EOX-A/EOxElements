import { html, nothing } from "lit";

/**
 *
 * @param {Array<string>} tools
 * @return {Array<string>}
 */
export const _parseActions = (tools, layer) => {
  return tools?.filter((t) =>
    ["remove", "sort"]
      .filter((k) => (layer?.get("layerControlDisable") ? k !== "sort" : true))
      .includes(t)
  );
};

/**
 *
 * @param {Array<string>} tools
 */
export const _parseTools = (tools, layer) =>
  tools?.filter((t) => {
    let pass = true;
    if (["remove", "sort"].includes(t)) {
      pass = false;
    }
    if (t === "info") {
      pass = layer.get("description");
    }
    if (t === "config") {
      pass = layer.get("layerConfig");
    }
    return pass;
  });

export const Button = (tool, unstyled) => html`
  <button slot="${tool}-icon" class="icon">${unstyled ? tool : nothing}</button>
`;

export const removeButton = (layer, unstyled, dispatchEvent) => html`
  <button
    class="remove-icon icon"
    @click=${() => {
      layer?.set("layerControlOptional", true);
      layer?.setVisible(false);
      dispatchEvent(
        new CustomEvent("changed", {
          detail: layer,
          bubbles: true,
        })
      );
    }}
  >
    ${unstyled ? "x" : nothing}
  </button>
`;

export const sortButton = (unstyled) => html`
  <button class="sort-icon icon drag-handle">
    ${unstyled ? "sort" : nothing}
  </button>
`;
