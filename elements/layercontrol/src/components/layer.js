import { LitElement, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { live } from "lit/directives/live.js";
import "./layerConfig";
import "./tabs";
import { button } from "../../../../utils/styles/button";
import { radio } from "../../../../utils/styles/radio";
import { checkbox } from "../../../../utils/styles/checkbox";
import { slider } from "../../../../utils/styles/slider";

/**
 * A single layer display
 *
 * @element eox-layercontrol-layer
 */
export class EOxLayerControlLayer extends LitElement {
  static properties = {
    layer: { attribute: false },
    titleProperty: { attribute: "title-property", type: String },
    tools: { attribute: false },
    unstyled: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * The native OL layer
     * @type {import("ol/layer").Layer}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html}
     */
    this.layer = null;

    /**
     * The layer title property
     */
    this.titleProperty = "title";

    /**
     * @type Array<string>
     */
    this.tools = [];

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;
  }

  /**
   *
   * @param {Array<string>} tools
   */
  _parseActions = (tools) =>
    tools?.filter((t) => ["remove", "sort"].includes(t));

  /**
   *
   * @param {Array<string>} tools
   */
  _parseTools = (tools) =>
    tools?.filter((t) => {
      let pass = true;
      if (["remove", "sort"].includes(t)) {
        pass = false;
      }
      if (t === "info") {
        pass = this.layer.get("description");
      }
      if (t === "config") {
        // @ts-ignore
        pass = this.layer.style_?.color;
      }
      return pass;
    });

  createRenderRoot() {
    return this;
  }

  _removeButton = html`
    <button
      class="remove-icon icon"
      @click=${() => {
        this.layer?.set("layerControlOptional", true);
        this.layer?.setVisible(false);
        this.dispatchEvent(
          new CustomEvent("changed", {
            detail: this.layer,
            bubbles: true,
          })
        );
      }}
    >
      x
    </button>
  `;

  _sortButton = html`
    <button class="sort-icon icon drag-handle">sort</button>
  `;
  render() {
    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        this.layer,
        () => html`
          <div class="layer ${this.layer.getVisible() ? "visible" : ""}">
            <label
              class="${this.layer.get("layerControlDisable") ? "disabled" : ""}"
            >
              <input
                type=${this.layer.get("layerControlExclusive")
                  ? "radio"
                  : "checkbox"}
                .checked=${live(this.layer.getVisible())}
                @click=${(
                  /** @type {{ target: { checked: boolean; }; }} */ evt
                ) => {
                  this.layer.setVisible(evt.target.checked);
                  if (
                    evt.target.checked &&
                    this.layer.get("layerControlExclusive")
                  ) {
                    /**
                     * @type NodeListOf<Element & {layer: any, requestUpdate: function}>
                     */
                    const siblings =
                      this.parentNode.parentNode.querySelectorAll(
                        "li > eox-layercontrol-layer"
                      );
                    siblings.forEach((sibling) => {
                      if (
                        sibling.layer !== this.layer &&
                        sibling.layer?.get("layerControlExclusive")
                      ) {
                        sibling.layer.setVisible(false);
                        sibling.requestUpdate();
                      }
                    });
                  }
                  this.dispatchEvent(
                    new CustomEvent("changed", { bubbles: true })
                  );
                  this.requestUpdate();
                }}
              />
              <span class="title">${this.layer.get(this.titleProperty)}</span>
              ${when(
                this._parseActions(this.tools)?.length +
                  this._parseTools(this.tools)?.length >
                  0,
                () => html`<span class="tools-placeholder"></span>`
              )}
            </label>
          </div>
          ${when(
            this._parseActions(this.tools)?.length +
              this._parseTools(this.tools)?.length >
              0,
            () => html`
              ${when(
                this._parseActions(this.tools)?.length === 1,
                () => html`
                  <div class="single-action-container">
                    <div class="single-action">
                      ${
                        // @ts-ignore
                        this[`_${this._parseActions(this.tools)[0]}Button`]
                      }
                    </div>
                  </div>
                `,
                () => html`
                  <details class="tools">
                    <summary>
                      <button
                        class="icon ${this.tools.length === 1
                          ? `${this.tools[0]}-icon`
                          : ""}"
                      >
                        Tools
                      </button>
                    </summary>
                    <eox-layercontrol-tabs
                      .actions=${this._parseActions(this.tools)}
                      .tabs=${this._parseTools(this.tools)}
                      .unstyled=${this.unstyled}
                    >
                      ${map(
                        this._parseTools(this.tools),
                        (tool) => html`
                          <button slot="${tool}-icon" class="icon">
                            ${tool}
                          </button>
                        `
                      )}

                      <div slot="info-content">
                        ${unsafeHTML(this.layer.get("description"))}
                      </div>
                      <div slot="opacity-content">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value=${live(this.layer?.getOpacity())}
                          @input=${(
                            /** @type {{ target: { value: string; }; }} */ evt
                          ) =>
                            this.layer.setOpacity(parseFloat(evt.target.value))}
                        />
                      </div>
                      <div slot="config-content"></div>
                      <!--<eox-layercontrol-layerconfig
                          slot="config-content"
                          .layer=${this.layer}
                          .unstyled=${this.unstyled}
                          @changed=${() => this.requestUpdate()}
                        ></eox-layercontrol-layerconfig>-->
                      <div slot="remove-icon">${this._removeButton}</div>
                      <div slot="sort-icon">${this._sortButton}</div>
                    </eox-layercontrol-tabs>
                  </details>
                `
              )}
            `
          )}
        `
      )}
    `;
  }

  #styleBasic = ``;

  #styleEOX = `
    ${button}  
    ${radio}
    ${checkbox}
    ${slider}
    eox-layercontrol-layer {
      width: 100%;
    }
    .layer {
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 4px 0;
    }
    button.icon.drag-handle {
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
    }
    .single-action .icon::before,
    details.tools summary .icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edots-vertical%3C/title%3E%3Cpath d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' /%3E%3C/svg%3E");
    }
    .single-action,
    details.tools summary,
    eox-layercontrol-tabs button.icon {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    eox-layercontrol-tabs button.icon {
      opacity: .7;
    }
    .single-action:hover,
    details.tools summary:hover,
    eox-layercontrol-tabs button.icon:hover {
      opacity: 1;
    }
    .tools-placeholder,
    .single-action .icon,
    .single-action .icon::before,
    details.tools summary .icon,
    details.tools summary .icon::before {
      height: 16px;
      width: 16px;
    }

    label, span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    [data-type] .title::before {
      width: 20px;
      min-width: 20px;
      height: 20px;
      margin-right: 6px;
    }
    [data-type=group] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-outline%3C/title%3E%3Cpath d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E");
    }
    [data-type=group] > eox-layercontrol-layer-group > details[open] > summary > eox-layercontrol-layer > .layer > label > .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-open-outline%3C/title%3E%3Cpath d='M6.1,10L4,18V8H21A2,2 0 0,0 19,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H19C19.9,20 20.7,19.4 20.9,18.5L23.2,10H6.1M19,18H6L7.6,12H20.6L19,18Z' /%3E%3C/svg%3E");
    }
    [data-type=raster] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckerboard%3C/title%3E%3Cpath d='M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z' /%3E%3C/svg%3E");
    }
    [data-type=vector] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-outline%3C/title%3E%3Cpath d='M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z' /%3E%3C/svg%3E");
    }
    [data-type=draw] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Evector-square-edit%3C/title%3E%3Cpath d='M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z' /%3E%3C/svg%3E");
    }

    eox-layercontrol-tabs button.icon {
      display: flex;
      justify-content: center;
    }
    eox-layercontrol-tabs .icon::before {
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
    .single-action .remove-icon::before,
    [slot=remove-icon] button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 24 24'%3E%3Ctitle%3Edelete-outline%3C/title%3E%3Cpath d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /%3E%3C/svg%3E");
    }
    .single-action .sort-icon::before,
    [slot=sort-icon] button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edrag-horizontal-variant%3C/title%3E%3Cpath d='M21 11H3V9H21V11M21 13H3V15H21V13Z' /%3E%3C/svg%3E");
    }

    [slot=info-content],
    [slot=opacity-content] {
      padding: 12px 6px;
    }
  `;
}

customElements.define("eox-layercontrol-layer", EOxLayerControlLayer);
