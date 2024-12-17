import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";

export class EOxLayerControlTabs extends LitElement {
  // Define static properties for the component
  static properties = {
    actions: { attribute: false },
    selectedTab: { state: true },
    tabs: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
    toolsAsList: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * List of action ids
     *
     * @type {Array<String>}
     */
    this.actions = [];

    this.selectedTab = 0;

    /**
     * List of tab ids
     *
     * @type {Array<String>}
     */
    this.tabs = [];

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

  /** @param {number} index */
  #labelHighlightClass = (index) =>
    (this.selectedTab === index || this.toolsAsList) && "highlighted";

  /**
   * Renders a tabbed interface that displays tabs and corresponding content areas based on the provided 'tabs' and 'actions'.
   * It sets up navigation for switching between tabs and offers customizable icons for tabs and actions.
   */
  render() {
    const tabs = this.tabs;
    const actions = this.actions;
    const isListAvail = actions.length + tabs.length > 1;

    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      <div class="${this.toolsAsList ? "listed" : "tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${when(
          isListAvail,
          () => html`
            <nav>
              ${when(
                !this.toolsAsList,
                () => html`
                  <div>
                    <!-- Labels for tabs -->
                    ${map(
                      tabs,
                      (tab, index) => html`
                        <label
                          class=${this.#labelHighlightClass(index)}
                          @click=${() => (this.selectedTab = index)}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${tab}-icon`}>${tab}</slot>
                        </label>
                      `,
                    )}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${map(
                      actions,
                      (action) => html`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${action}-icon`}>${action}</slot>
                        </span>
                      `,
                    )}
                  </div>
                `,
              )}
            </nav>
          `,
        )}
        <figure>
          <!-- Content for each tab -->
          ${map(
            tabs,
            (tab, index) => html`
              ${when(
                this.toolsAsList,
                () => html`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${tab}-icon`}>${tab}</slot>
                    <span>${tab}</span>
                  </label>
                `,
              )}
              <div class="tab ${this.#labelHighlightClass(index)}">
                <!-- Content slot for each tab -->
                <slot name=${`${tab}-content`}>${tab}</slot>
              </div>
            `,
          )}
        </figure>
      </div>
    `;
  }

  #styleBasic = `
    .tabbed figure,
    .listed figure {
      margin: 0;
    }
    .tabbed nav,
    .listed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div,
    .listed nav div {
      display: flex;
    }
    .tabbed .tab,
    .listed .tab {
      display: none;
    }
    .tabbed .tab.highlighted,
    .listed .tab.highlighted {
      display: block;
    }
    .tabbed label.highlighted,
    .listed label.highlighted {
      background: lightgrey;
    }
  `;

  #styleEOX = `
    .listed label {
      display: flex;
      justify-content: start;
      align-items: center;
      background: var(--background-color) !important;
    }
    .listed label:not(:first-of-type) {
      margin-top: 10px;
    }
    .listed label span {
      text-transform: capitalize;
      font-weight: 300;
    }
    .tabbed, .listed {
      font-size: small;
    }
    .tabbed label.highlighted {
      background: #00417011;
      pointer-events: none;
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
      background: var(--background-color);
      border-top: 1px solid #0041701a;
      padding: 8px var(--padding);
    }
  `;
}

customElements.define("eox-layercontrol-tools-items", EOxLayerControlTabs);
