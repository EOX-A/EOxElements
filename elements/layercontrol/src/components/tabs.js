import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";

export class EOxLayerControlTabs extends LitElement {
  static properties = {
    actions: { attribute: false },
    selectedTab: { state: true },
    tabs: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
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

    /**
     * Renders the element without a shadow root
     */
    this.noShadow = true;
  }

  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /** @param {number} index */
  #labelHighlightClass = (index) => this.selectedTab === index && "highlighted";

  render() {
    const tabs = this.tabs;
    const actions = this.actions;
    const isListAvail = actions.length + tabs.length > 1;

    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      <div class="tabbed">
        ${when(
          isListAvail,
          () => html`
            <nav>
              <div>
                ${map(
                  tabs,
                  (tab, index) =>
                    html`
                      <label
                        class=${this.#labelHighlightClass(index)}
                        @click=${() => (this.selectedTab = index)}
                      >
                        <slot name=${`${tab}-icon`}>${tab}</slot>
                      </label>
                    `
                )}
              </div>
              <div>
                ${map(
                  actions,
                  (action) =>
                    html`
                      <span>
                        <slot name=${`${action}-icon`}>${action}</slot>
                      </span>
                    `
                )}
              </div>
            </nav>
          `
        )}
        <figure>
          ${map(
            tabs,
            (tab, index) => html`
              <div class="tab ${this.#labelHighlightClass(index)}">
                <slot name=${`${tab}-content`}>${tab}</slot>
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
      pointer-events: none;
    }
    nav div label,
    nav div span {
      padding: 0.2rem 0.5rem;
      font-weight: 500;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-transform: capitalize;
    }
    figure {
      background: #00417011;
      border-top: 1px solid #0041701a;
      padding: 0.2rem 0.5rem;
    }
  `;
}

customElements.define("eox-layercontrol-tabs", EOxLayerControlTabs);
