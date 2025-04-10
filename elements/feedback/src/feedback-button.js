import { style } from "./style";
import { styleEOX } from "./style.eox";

/**
 * @attr {string} [position=top-right] - The position of the button. Can be "top-left", "top-right", "bottom-left", or "bottom-right".
 * @attr {string|null} [unstyled=undefined] - If set, the button will not be styled with EOX styles.
 */
export class EOxFeedbackButton extends HTMLElement {
  static observedAttributes = ["position", "unstyled"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.modal = null;

    this.position = "top-right";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      if (name === "position" && newValue !== this.position) {
        this.position = newValue;
        this.render();
      }
    }
  }

  connectedCallback() {
    this.render();
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", () => this.onButtonClick());
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("button")
      .removeEventListener("click", () => this.onButtonClick());
  }

  onButtonClick() {
    if (!this.modal) {
      this.modal = document.createElement("eox-feedback");
      if (this.getAttribute("unstyled") !== null) {
        this.modal.setAttribute("unstyled", this.getAttribute("unstyled"));
      }
      document.body.appendChild(this.modal);
      this.modal.addEventListener("close", () => (this.modal = null));
    } else {
      this.modal.remove();
      this.modal = null;
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ${style}
        ${this.getAttribute("unstyled") === null && styleEOX}
        :host {
          position: fixed !important;
          margin: 0px 20px !important;
          ${this.position.includes("top") ? "top: 0px;" : ""}
          ${this.position.includes("right") ? "right: 0px;" : ""}
          ${this.position.includes("bottom") ? "bottom: 0px;" : ""}
          ${this.position.includes("left") ? "left: 0px;" : ""}
        }
      </style>
      <button
        class="${this.position.includes("top") ? "bottom" : ""}${this.position.includes("bottom") ? "top" : ""}-round small-round"
      >
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>send-circle-outline</title><path d="M8,7.71L18,12L8,16.29V12.95L15.14,12L8,11.05V7.71M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>
        </i>
        <span>Feedback</span>
      </button>
    `;
  }
}

customElements.define("eox-feedback-button", EOxFeedbackButton);
