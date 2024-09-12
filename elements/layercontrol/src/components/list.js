import { LitElement, html } from "lit";
import { map } from "lit/directives/map.js";

export class EOxLayerControlList extends LitElement {
  // Define static properties for the component
  static properties = {
    listitems: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * List of tab ids
     *
     * @type {Array<String>}
     */
    this.listitems = [];

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
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Renders a list interface that displays list of content areas based on the provided 'listitems' and 'actions'.
   */
  render() {
    const listitems = this.listitems;

    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      <div class="toollist">
        <figure>
          <!-- Content of tool -->
          ${map(
            listitems,
            (item) => html`
              <div class="toolrow">
                <div style="height: 22px;">
                  <div class="icon ${item}-icon"></div>
                </div>
                <!-- Content slot for each tab -->
                <div class="containerpanel">
                  <slot name=${`${item}-content`}>${item}</slot>
                </div>
              </div>
            `
          )}
        </figure>
      </div>
    `;
  }

  #styleBasic = `
    .toollist figure {
      margin: 0;
    }
    .toolrow {
      margin-top: 2px;
      margin-bottom: 2px;
    }
  `;

  #styleEOX = `
    .containerpanel {
      border-radius: 3px 3px 3px 3px;
      -webkit-border-radius: 3px 3px 3px 3px;
      -moz-border-radius: 3px 3px 3px 3px;
      border: 1px solid #eee;
    }
    .toollist {
      font-size: small;
    }
    .toollist label.highlighted {
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
      border-top: 1px solid #0041701a;
    }
    .icon {
      height: 18px;
      float: right;
      filter: grayscale(1.0);
      opacity: 0.8;
    }
    .info-icon,
    button.icon[slot=info-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Einformation-outline%3C/title%3E%3Cpath d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z' /%3E%3C/svg%3E");
    }
    .opacity-icon,
    button.icon[slot=opacity-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eopacity%3C/title%3E%3Cpath d='M17.66,8L12,2.35L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8M6,14C6,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 18,12 18,14H6Z' /%3E%3C/svg%3E");
    }
    .config-icon,
    button.icon[slot=config-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Etune%3C/title%3E%3Cpath d='M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z' /%3E%3C/svg%3E");
    }
    .single-action .remove-icon::before,
    [slot=remove-icon] button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 24 24'%3E%3Ctitle%3Edelete-outline%3C/title%3E%3Cpath d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /%3E%3C/svg%3E");
    }
  `;
}

customElements.define("eox-layercontrol-list", EOxLayerControlList);
