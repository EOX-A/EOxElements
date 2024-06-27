import { html, nothing } from "lit";
import { when } from "lit/directives/when.js";

function createResetMethod(filterObject, tabIndex, EOxItemFilter) {
  return html`
    ${when(
      filterObject.dirty,
      () => html`
        <button
          tabindex=${tabIndex}
          slot="reset-button"
          class="reset-icon icon"
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
          ${EOxItemFilter.unstyled ? "Reset" : nothing}
        </button>
      `
    )}
  `;
}

export default createResetMethod;
