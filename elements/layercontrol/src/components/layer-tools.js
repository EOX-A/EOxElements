import { LitElement, html, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { live } from "lit/directives/live.js";
import eoxStyle from "@eox/ui/style.css?inline";
import "./layer-config";
import "./layer-datetime";
import "./layer-legend";
import "./tools-items";
import {
  Button,
  _parseActions,
  _parseTools,
  removeButton,
  sortButton,
  getToolsIcon,
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
    embedded: { state: true },
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

    /**
     * Determine if tools are embedded in layercontrol or stand-alone
     *
     * @type {Boolean}
     */
    setTimeout(() => {
      this.embedded = this.parentElement?.tagName === "EOX-LAYERCONTROL-LAYER";
    });
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  // Initializes '_removeButton' invoking 'removeButton' function with 'this' context.
  _removeButton = (icon) => removeButton(this, icon);

  // Initializes '_sortButton' invoking 'sortButton' function with 'unstyled' property as a parameter.
  _sortButton = (icon) => sortButton(this.unstyled, icon);

  /**
   * Initializes '_button' as a function accepting 'tool' parameter to generate a Button.
   * Uses 'this.unstyled' as a context parameter for Button generation.
   *
   * @param {string} tool - Tool parameter for Button generation.
   * @returns {import("lit").HTMLTemplateResult} - The generated Button element.
   */
  _button = (tool, icon) => Button(tool, icon, this.unstyled);

  _getDefaultTools = (icons) => {
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
      <div slot="remove-icon">${this._removeButton(icons.remove)}</div>
      <div slot="sort-icon">${this._sortButton(icons.sort)}</div>
    `;
  };

  render() {
    // Obtain actions and tools based on this.tools and this.layer
    const actions = _parseActions(this.tools, this.layer);
    const tools = _parseTools(this.tools, this.layer);

    // Determine the single action element if only one action is present
    // const singleActionEle = this[`_${actions?.[0]}Button`]
    //   ? this[`_${actions?.[0]}Button`](getToolsIcon()[actions?.[0]])
    //   : nothing;

    // Determine icon class based on the number of tools
    // const iconClass = this.tools?.length === 1 ? `${this.tools[0]}-icon` : "";

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
            !(actionsLen === 1 && toolsLen === 0),
            () => html`
              <details
                class="tools"
                open=${this.embedded === false
                  ? true
                  : this.layer.get("layerControlToolsExpand") || nothing}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList ? "tools-list" : "tools-tab"}"
                  .noShadow=${false}
                  .actions=${actions}
                  .tabs=${tools}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${map(tools, (tool) =>
                    this._button(tool, getToolsIcon()[tool]),
                  )}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(getToolsIcon())}
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
    ${!this.embedded ? eoxStyle : ""}
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    .single-action {
      position: relative;
    }
    details.tools summary button {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 1.5rem;
      top: -32px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action,
    details.tools summary {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    .single-action:hover,
    details.tools summary:hover {
      opacity: 1;
    }
    [slot=info-content],
    [slot=opacity-content],
    [slot=config-content],
    [slot=datetime-content],
    [slot=legend-content] {
      padding: 6px 0;
    }
    [slot=info-content] * {
      max-width: 100%;
    }
  `;
}

customElements.define(
  "eox-layercontrol-layer-tools",
  EOxLayerControlLayerTools,
);
