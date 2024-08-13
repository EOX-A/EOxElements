import { LitElement, html } from "lit";
import _debounce from "lodash.debounce";
import { when } from "lit/directives/when.js";
import { resetNumberMethod, numberInputHandlerMethod } from "../../methods/filters";

/**
 * EOxItemFilterNumber is a custom web component that provides a number type input field for filtering items.
 *
 * @module EOxItemFilterNumber
 * @extends LitElement
 * @property {Object} filterObject - The filter object containing the state and placeholder.
 * @property {Number} tabIndex - The tab index for the input element.
 * @property {Boolean} unstyled - Flag to determine if default styles should be applied.
 */
export class EOxItemFilterNumber extends LitElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      filterObject: { attribute: false, type: Object },
      tabIndex: { attribute: false, type: Number },
      unstyled: { type: Boolean },
    };
  }

  constructor() {
    super();

    /**
     * @type Object
     */
    this.filterObject = {};

    /**
     * @type Boolean
     */
    this.unstyled = false;

    /**
     * @type Number
     */
    this.tabIndex = 0;
  }

  /**
   * Handles the input event by calling the textInputHandlerMethod with the current context.
   *
   * @private
   */
  #inputHandler = () => {
    numberInputHandlerMethod(this);
  };

  /**
   * Resets the text input by calling the resetTextMethod with the current context.
   */
  reset() {
    resetNumberMethod(this);
  }

  /**
   * Debounced version of the input handler to improve performance by limiting the rate at which the input handler is called.
   */
  debouncedInputHandler = _debounce(this.#inputHandler, 500, {
    leading: true,
  });

  /**
   * Overrides the default createRenderRoot method to render in the light DOM.
   *
   * @returns {this} - The current instance to render in the light DOM.
   */
  createRenderRoot() {
    return this;
  }

  // Render method for UI display
  render() {
    return when(
      this.filterObject,
      () => html`
        <style></style>
        <div class="text-container">
          <div class="text-container-wrapper">
            <input
              type="number"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              @input="${this.debouncedInputHandler}"
              @click=${(evt) => evt.stopPropagation()}
            />
          </div>
        </div>
      `
    );
  }
}

customElements.define("eox-itemfilter-number", EOxItemFilterNumber);
