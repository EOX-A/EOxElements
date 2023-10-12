import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";

export class EOxLayerControlTabs extends LitElement {
  static properties = {
    actions: { attribute: false },
    selectedTab: { state: true },
    tabs: { attribute: false },
    unstyled: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * List of action ids
     * @type Array<string>
     */
    this.actions = [];

    this.selectedTab = 0;

    /**
     * List of tab ids
     * @type Array<string>
     */
    this.tabs = [];

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;
  }

  render() {
    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      <div class="tabbed">
        ${when(
          this.actions.length + this.tabs.length > 1,
          () => html`
            <nav>
              <div>
                ${map(
                  this.tabs,
                  (tab, index) => html`
                    <label
                      class=${this.selectedTab === index && "highlighted"}
                      @click=${() => (this.selectedTab = index)}
                    >
                      <slot name=${tab + "-icon"}>${tab}</slot>
                    </label>
                  `
                )}
              </div>
              <div>
                ${map(
                  this.actions,
                  (action) => html`
                    <span>
                      <slot name=${action + "-icon"}>${action}</slot>
                    </span>
                  `
                )}
              </div>
            </nav>
          `
        )}
        <figure>
          ${map(
            this.tabs,
            (tab, index) => html`
              <div class="tab ${this.selectedTab === index && "highlighted"}">
                <slot name=${tab + "-content"}>${tab}</slot>
              </div>
            `
          )}
        </figure>
      </div>
    `;
  }

  #styleBasic = `
    .tabbed figure {
      margin: 0;
    }
    .tabbed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div {
      display: flex;
    }
    .tabbed .tab {
      display: none;
    }
    .tabbed .tab.highlighted {
      display: block;
    }
    .tabbed label.highlighted {
      background: lightgrey;
    }
  `;

  #styleEOX = `
    .tabbed {
      font-size: small;
    }
    .tabbed label.highlighted {
      background: #00417011;
    }
    nav div label,
    nav div span {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    figure {
      background: #00417011;
      border-top: 1px solid #0041701a;
    }
  `;
}

customElements.define("eox-layercontrol-tabs", EOxLayerControlTabs);
