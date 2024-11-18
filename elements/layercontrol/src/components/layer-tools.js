import { LitElement, html, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { live } from "lit/directives/live.js";
import "./layer-config";
import "./layer-datetime";
import "./layer-legend";
import "./tools-items";
import { button } from "@eox/elements-utils/styles/button";
import { radio } from "@eox/elements-utils/styles/radio";
import { checkbox } from "@eox/elements-utils/styles/checkbox";
import { slider } from "@eox/elements-utils/styles/slider";
import {
  Button,
  _parseActions,
  _parseTools,
  removeButton,
  sortButton,
} from "../helpers";

/**
 * EOxLayerControlLayerTools - Custom element to display tools and actions for a given OpenLayers layer.
 * Manages rendering tools and actions such as remove, sort, information display, layer configuration, and opacity adjustment.
 *
 * @element eox-layercontrol-layer-tools
 * @extends LitElement
 */
export class EOxLayerControlLayerTools extends LitElement {
  // Define static properties for the component
  static properties = {
    layer: { attribute: false },
    tools: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
    toolsAsList: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * The native OL layer
     *
     * @type {import("ol/layer").Layer}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html}
     */
    this.layer = null;

    /**
     * Represents an array of tools.
     *
     * @type {Array<string>}
     */
    this.tools = [];

    /**
     * Render the element without additional styles
     *
     * @type {Boolean}
     */
    this.unstyled = false;

    /**
     * Renders the element without a shadow root
     *
     * @type {Boolean}
     */
    this.noShadow = false;

    /**
     * If enabled, the tools section will be rendered as list.
     *
     * @type {Boolean}
     */
    this.toolsAsList = false;
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  // Initializes '_removeButton' invoking 'removeButton' function with 'this' context.
  _removeButton = () => removeButton(this);

  // Initializes '_sortButton' invoking 'sortButton' function with 'unstyled' property as a parameter.
  _sortButton = () => sortButton(this.unstyled);

  /**
   * Initializes '_button' as a function accepting 'tool' parameter to generate a Button.
   * Uses 'this.unstyled' as a context parameter for Button generation.
   *
   * @param {string} tool - Tool parameter for Button generation.
   * @returns {import("lit").HTMLTemplateResult} - The generated Button element.
   */
  _button = (tool) => Button(tool, this.unstyled);

  _getDefaultTools = () => {
    return html`
      <div slot="info-content">
        ${unsafeHTML(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <!-- Input for opacity -->
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value=${live(this.layer?.getOpacity())}
          @input=${(/** @type {{ target: { value: string; }; }} */ evt) =>
            this.layer.setOpacity(parseFloat(evt.target.value))}
        />
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${when(
          this.layer.get("layerConfig"),
          () => html`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${true}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              @changed=${() => this.requestUpdate()}
            ></eox-layercontrol-layerconfig>
          `,
        )}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${when(
          this.layer.get("layerDatetime"),
          () => html`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${true}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${() => this.requestUpdate()}
            ></eox-layercontrol-layer-datetime>
          `,
        )}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${when(
          this.layer.get("layerLegend"),
          () => html`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${true}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${() => this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `,
        )}
      </div>
      <div slot="remove-icon">${this._removeButton()}</div>
      <div slot="sort-icon">${this._sortButton()}</div>
    `;
  };

  render() {
    // Obtain actions and tools based on this.tools and this.layer
    const actions = _parseActions(this.tools, this.layer);
    const tools = _parseTools(this.tools, this.layer);

    // Determine the single action element if only one action is present
    // @ts-expect-error TODO
    const singleActionEle = this[`_${actions?.[0]}Button`]
      ? // @ts-expect-error TODO
        this[`_${actions?.[0]}Button`]()
      : nothing;

    // Determine icon class based on the number of tools
    const iconClass = this.tools?.length === 1 ? `${this.tools[0]}-icon` : "";

    // Determine the number of actions and tools for conditional rendering
    const actionsLen = actions?.length;
    const toolsLen = tools?.length;
    // Render the HTML template based on the conditions
    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        actionsLen + toolsLen > 0,
        () => html`
          ${when(
            actionsLen === 1 && toolsLen === 0,
            () => html`
              <div class="single-action-container">
                <div class="single-action">${singleActionEle}</div>
              </div>
            `,
            () => html`
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand") || nothing}
              >
                <summary>
                  <button class="icon ${iconClass}">Tools</button>
                </summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList ? "tools-list" : "tools-tab"}"
                  .noShadow=${false}
                  .actions=${actions}
                  .tabs=${tools}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${map(tools, (tool) => this._button(tool))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools()}
                </eox-layercontrol-tools-items>
              </details>
            `,
          )}
        `,
      )}
    `;
  }

  #styleBasic = ``;

  #styleEOX = `
    ${button}  
    ${radio}
    ${checkbox}
    ${slider}
    .drag-handle {
      cursor: n-resize;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    eox-layercontrol-layer details summary::before {
      content: "";
    }
    details.tools[open] {
      /*border-top: 1px solid #0041703a;*/
    }
    .single-action {
      position: relative;
    }
    details.tools summary .icon {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 0;
      top: -24px;
      display: flex;
      border-radius: 4px;
      cursor: pointer;
      display: var(--layer-visibility);
    }
    .single-action .icon::before,
    details.tools summary .icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edots-vertical%3C/title%3E%3Cpath d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' /%3E%3C/svg%3E");
    }
    .single-action,
    details.tools summary,
    eox-layercontrol-tools-items button.icon {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    eox-layercontrol-tools-items button.icon {
      opacity: .7;
    }
    eox-layercontrol-tools-items.tools-list button.icon {
      cursor: auto;
    }
    .single-action:hover,
    details.tools summary:hover,
    eox-layercontrol-tools-items button.icon:hover {
      opacity: 1;
    }
    eox-layercontrol-tools-items.tools-list button.icon:hover {
      opacity: .7;
    }
    .tools-placeholder,
    .single-action .icon,
    .single-action .icon::before,
    details.tools summary .icon,
    details.tools summary .icon::before {
      height: 16px;
      width: 16px;
      margin-right: var(--padding);
    }
    eox-layercontrol-tools-items button.icon,
    eox-layercontrol-tools-items .button.icon {
      display: flex;
      justify-content: center;
    }
    eox-layercontrol-tools-items button.icon::before,
    eox-layercontrol-tools-items .button.icon::before {
      width: 16px;
      height: 16px;
    }
    details.tools summary .info-icon,
    button.icon[slot=info-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Einformation-outline%3C/title%3E%3Cpath d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z' /%3E%3C/svg%3E");
    }
    details.tools summary .opacity-icon,
    button.icon[slot=opacity-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eopacity%3C/title%3E%3Cpath d='M17.66,8L12,2.35L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8M6,14C6,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 18,12 18,14H6Z' /%3E%3C/svg%3E");
    }
    details.tools summary .config-icon,
    button.icon[slot=config-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Etune%3C/title%3E%3Cpath d='M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z' /%3E%3C/svg%3E");
    }
    details.tools summary .datetime-icon,
    button.icon[slot=datetime-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eclock-outline%3C/title%3E%3Cpath d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /%3E%3C/svg%3E");
    }
    details.tools summary .legend-icon,
    button.icon[slot=legend-icon]::before {
      content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Emap-legend%3C%2Ftitle%3E%3Cpath%20d%3D%22M9%2C3L3.36%2C4.9C3.15%2C4.97%203%2C5.15%203%2C5.38V20.5A0.5%2C0.5%200%200%2C0%203.5%2C21L3.66%2C20.97L9%2C18.9L15%2C21L20.64%2C19.1C20.85%2C19.03%2021%2C18.85%2021%2C18.62V3.5A0.5%2C0.5%200%200%2C0%2020.5%2C3L20.34%2C3.03L15%2C5.1L9%2C3M8%2C5.45V17.15L5%2C18.31V6.46L8%2C5.45M10%2C5.47L14%2C6.87V18.53L10%2C17.13V5.47M19%2C5.7V17.54L16%2C18.55V6.86L19%2C5.7M7.46%2C6.3L5.57%2C6.97V9.12L7.46%2C8.45V6.3M7.46%2C9.05L5.57%2C9.72V11.87L7.46%2C11.2V9.05M7.46%2C11.8L5.57%2C12.47V14.62L7.46%2C13.95V11.8M7.46%2C14.55L5.57%2C15.22V17.37L7.46%2C16.7V14.55Z%22%20%2F%3E%3C%2Fsvg%3E");
    }
    .single-action .remove-icon::before,
    [slot=remove-icon] button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 24 24'%3E%3Ctitle%3Edelete-outline%3C/title%3E%3Cpath d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /%3E%3C/svg%3E");
    }
    .single-action .sort-icon::before,
    [slot=sort-icon] .button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edrag-horizontal-variant%3C/title%3E%3Cpath d='M21 11H3V9H21V11M21 13H3V15H21V13Z' /%3E%3C/svg%3E");
    }
    [slot=info-content],
    [slot=opacity-content] {
      padding: 12px 6px;
    }
  `;
}

customElements.define(
  "eox-layercontrol-layer-tools",
  EOxLayerControlLayerTools,
);
