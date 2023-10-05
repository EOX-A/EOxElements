import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { computePosition, autoUpdate } from "@floating-ui/dom";

@customElement("eox-dropdown")
export class EOxDropdown extends LitElement {
  @property({ type: Boolean })
  open = false;

  @property({ type: Boolean })
  parent = null;

  @property({ type: Boolean })
  unstyled = false;

  _handleKeyboard(key: string) {
    if (this.clientHeight === 0) {
      return;
    }
    if (key === "Escape") {
      //
    }
  }

  /**
   * Stores the autoUpdate cleanup function to be called
   * when disconnected
   */
  _overlayCleanup(): void {}

  _clickEventListener(): void {}
  _keyboardEventListener(): void {}

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.unstyled) {
      setTimeout(() => {
        const trigger =
          this.parent ||
          this.renderRoot.querySelector("[name=trigger]").assignedNodes()[0];
        const dropdown = <HTMLElement>(
          this.renderRoot.querySelector("#dropdown")
        );
        const updatePosition = () => {
          if (dropdown.classList.contains("open")) {
            computePosition(trigger, dropdown, { strategy: "fixed" }).then(
              ({ x, y }) => {
                Object.assign(dropdown.style, {
                  left: `${x}px`,
                  top: `${y}px`,
                  width: `${trigger.getBoundingClientRect().width}px`,
                });
              }
            );
          }
        };
        this._overlayCleanup = autoUpdate(trigger, dropdown, updatePosition);
      });
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._overlayCleanup();
    this.getRootNode().removeEventListener(
      "keydown",
      this._keyboardEventListener
    );
    window.removeEventListener("click", this._clickEventListener);
  }

  render() {
    return html`
      <style>
        #dropdown {
          display: none;
        }
        #dropdown.open {
          display: block;
        }
        ${!this.unstyled
          ? html`
              eox-dropdown { height: 100%;} #dropdown { position: fixed; top:
              0px; left: 0; width: 100%; margin: 0; padding: 0; background:
              white; border-bottom-left-radius: 4px; border-bottom-right-radius:
              4px; box-shadow: 0 4px 4px #0007; cursor: default; max-height:
              200px; overflow-y: auto; z-index: 99;}
            `
          : nothing}
      </style>
      <slot name="trigger"></slot>
      <div id="dropdown">
        <slot name="content"></slot>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has("open")) {
      const dropdown = this.renderRoot.querySelector("#dropdown");
      if (this.open) {
        dropdown.classList.add("open");
      } else {
        dropdown.classList.remove("open");
      }
      this.requestUpdate();
    }
  }

  firstUpdated() {
    this._clickEventListener = window.addEventListener("click", () => {
      this.open = false;
    });
    this._keyboardEventListener = this.getRootNode().addEventListener(
      "keydown",
      (event) => {
        const { code } = <KeyboardEvent>event;
        if (["Escape"].includes(code)) {
          this._handleKeyboard(code);
        }
      }
    );
    const trigger = this.renderRoot
      .querySelector("[name=trigger]")
      .assignedNodes()[0];
    trigger.addEventListener("focus", () => {
      this.open = true;
    });
  }
}
