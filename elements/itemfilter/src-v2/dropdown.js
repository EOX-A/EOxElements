import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

export class DropdownForm extends LitElement {
  static get properties() {
    return {
      showDropdown: { state: true, type: Boolean },
    };
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
    }
    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #ccc;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 1em;
      z-index: 10;
    }
    .hidden {
      display: none;
    }
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 5;
    }
  `;

  constructor() {
    super();
    this.showDropdown = false;
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("focusout", this.handleClickOutside);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  disconnectedCallback() {
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("focusout", this.handleClickOutside);
    document.removeEventListener("keydown", this.handleKeyDown);
    super.disconnectedCallback();
  }

  handleClickOutside(event) {
    if (event.target.tagName !== "DROPDOWN-FORM" && this.showDropdown) {
      this.showDropdown = false;
    }
  }

  handleKeyDown(event) {
    if (event.key === "Escape") {
      this.showDropdown = false;
    }
  }

  toggleDropdown(event) {
    event.stopPropagation();
    this.showDropdown = true;
  }

  showDropdownOnFocus(event) {
    this.showDropdown = true;
  }

  handleFormClick(event) {
    event.stopPropagation();
  }

  render() {
    return html`
      <input
        type="text"
        @click="${this.toggleDropdown}"
        @keydown="${this.toggleDropdown}"
        @focus="${this.showDropdownOnFocus}"
        placeholder="Click to open form"
        aria-haspopup="true"
        aria-expanded="${this.showDropdown}"
      />
      <div
        class="dropdown ${this.showDropdown ? "" : "hidden"}"
        @keydown="${this.handleKeyDown}"
        @click="${this.handleFormClick}"
        @focus="${this.handleFormClick}"
      >
        <form>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    `;
  }
}

customElements.define("dropdown-form", DropdownForm);
