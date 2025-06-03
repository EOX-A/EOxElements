import { html } from "lit";
import { when } from "lit/directives/when.js";

/**
 * Creates a reset button for the filter object if it is dirty.
 *
 * @param {Object} filterObject - The filter object containing filter details.
 * @param {number} tabIndex - The tab index for the reset button.
 * @param {Object} EOxItemFilter - The EOxItemFilter component instance.
 * @returns {import("lit").HTMLTemplateResult} The HTML template for the reset button.
 */
function createResetMethod(filterObject, tabIndex, EOxItemFilter) {
  return html`
    ${when(
      filterObject.dirty,
      () => html`
        <button
          type="button"
          tabindex=${tabIndex}
          slot="reset-button"
          class="reset-icon icon circle transparent small no-margin"
          @click=${(e) => {
            const filterElement =
              e.target.parentElement.querySelector("[slot=filter]");
            if (filterElement && typeof filterElement.reset === "function") {
              filterElement.reset();
            }
            EOxItemFilter.search();
            EOxItemFilter.requestUpdate();
          }}
        >
          ${EOxItemFilter.unstyled
            ? "Reset"
            : html`
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>close</title>
                    <path
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    />
                  </svg>
                </i>
              `}
        </button>
      `,
    )}
  `;
}

export default createResetMethod;
