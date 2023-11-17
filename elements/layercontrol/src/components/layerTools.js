import { LitElement, html, nothing } from "lit";
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
import "../../../jsonform/src/main";

/**
 * Layer tools
 *
 * @element eox-layercontrol-layer-tools
 */
export class EOxLayerControlLayerTools extends LitElement {
  static properties = {
    layer: { attribute: false },
    tools: { attribute: false },
    layerConfig: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
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
     * @type Array<string>
     */
    this.tools = [];

    /**
     * Layer config for eox-jsonform
     * @type {{ formId: string, schema: object, defaultValues: object, element: string }}
     */
    this.layerConfig = null;

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;

    /**
     * Renders the element without a shadow root
     */
    this.noShadow = true;
  }

  /**
   *
   * @param {Array<string>} tools
   */
  _parseActions = (tools) =>
    tools?.filter((t) =>
      ["remove", "sort"]
        .filter((k) =>
          this.layer?.get("layerControlDisable") ? k !== "sort" : true
        )
        .includes(t)
    );

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
      if (t === "form") {
        pass = Boolean(this.layerConfig);
      }
      if (t === "config") {
        // @ts-ignore
        pass = this.layer.style_?.color;
      }
      return pass;
    });

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
      ${this.unstyled ? "x" : nothing}
    </button>
  `;

  _sortButton = html`
    <button class="sort-icon icon drag-handle">
      ${this.unstyled ? "sort" : nothing}
    </button>
  `;

  _formButton = html`
    <button class="form-icon icon">${this.unstyled ? "form" : nothing}</button>
  `;

  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  render() {
    this.layerConfig = this.layer.get("layerConfig");

    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        this._parseActions(this.tools)?.length +
          this._parseTools(this.tools)?.length >
          0,
        () => html`
          ${when(
            this._parseActions(this.tools)?.length === 1 &&
              this._parseTools(this.tools)?.length === 0,
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
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand") || nothing}
              >
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
                  .noShadow=${false}
                  .actions=${this._parseActions(this.tools)}
                  .tabs=${this._parseTools(this.tools)}
                  .unstyled=${this.unstyled}
                >
                  ${map(
                    this._parseTools(this.tools),
                    (tool) => html`
                      <button slot="${tool}-icon" class="icon">
                        ${this.unstyled ? tool : nothing}
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
                      ) => this.layer.setOpacity(parseFloat(evt.target.value))}
                    />
                  </div>
                  <div slot="form-content">
                    ${this.layerConfig &&
                    html`<eox-jsonform
                      id=${this.layerConfig.formId}
                      .schema=${this.layerConfig.schema}
                      .defaultValues=${this.layerConfig.defaultValues}
                      .options=${{
                        button_state_mode: 2,
                        disable_edit_json: true,
                        disable_collapse: true,
                        disable_properties: true,
                      }}
                    ></eox-jsonform>`}
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
                  <div slot="form-icon">${this._formButton}</div>
                </eox-layercontrol-tabs>
              </details>
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
    summary .form-icon,
    .single-action .form-icon::before,
    [slot=form-icon] button.icon::before {
      border-radius: 0px;
      content: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 256 256' enable-background='new 0 0 256 256' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23004270' d='M167.9,21.5l-29.1,33.7h-95h-1.5L43.7,210h154.8V141l30.7-41.4v144.1H10V21.5H167.9z'/%3E%3Cpath fill='%23004270' d='M151,167.1'/%3E%3Cpath fill='%23004270' d='M244.5,36.8c0,1.5,1.5,3.1,1.5,4.6c0,1.5,0,3.1,0,4.6c0,1.5,0,3.1-1.5,6.1c0,1.5-1.5,3.1-3.1,4.6c-1.5,1.5-3.1,3.1-4.6,4.6c-1.5,1.5-1.5,1.5-3.1,3.1c-1.5,1.5-1.5,1.5-3.1,3.1l-39.9-39.9c1.5-1.5,3.1-3.1,6.1-6.1c3.1-1.5,4.6-4.6,6.1-4.6c1.5-1.5,4.6-3.1,6.1-3.1s4.6-1.5,6.1-1.5s4.6,0,6.1,1.5c1.5,0,3.1,1.5,4.6,1.5c3.1,1.5,6.1,4.6,9.2,7.7C239.9,27.6,242.9,32.2,244.5,36.8L244.5,36.8L244.5,36.8z'/%3E%3Cpath fill='%23004270' d='M94.3,125.7c0,0,3.1-3.1,6.1-6.1c3.1-3.1,7.7-7.7,12.3-12.3L128,92l15.3-15.3l44.4-44.4l39.9,39.9l-44.4,44.4l-16.9,16.9c-6.1,6.1-10.7,10.7-15.3,15.3c-4.6,3.1-7.7,7.7-10.7,10.7c-3.1,1.5-4.6,4.6-6.1,4.6c-1.5,1.5-3.1,3.1-4.6,4.6c-1.5,1.5-3.1,3.1-6.1,3.1c-1.5,1.5-4.6,1.5-9.2,3.1c-3.1,1.5-7.7,3.1-12.3,4.6c-4.6,1.5-7.7,3.1-12.3,3.1c-3.1,1.5-6.1,1.5-7.7,1.5c-3.1,0-6.1,0-7.7-1.5c-1.5-1.5-1.5-4.6-1.5-7.7c0-1.5,1.5-4.6,1.5-9.2c1.5-3.1,1.5-7.7,3.1-12.3c4.6-3.1,4.6-6.1,6.1-9.2c1.5-3.1,1.5-6.1,3.1-7.7c0-1.5,1.5-3.1,3.1-4.6C89.7,130.3,91.2,127.2,94.3,125.7L94.3,125.7L94.3,125.7z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    [slot=info-content],
    [slot=opacity-content] {
      padding: 12px 6px;
    }
  `;
}

customElements.define(
  "eox-layercontrol-layer-tools",
  EOxLayerControlLayerTools
);
