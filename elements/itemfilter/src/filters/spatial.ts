import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { live } from "lit/directives/live.js";
import { SpatialFilter } from "../spatial";

@customElement("eox-itemfilter-spatial")
export class EOxItemFilterSpatial extends LitElement {
  @property()
  filterObject: SpatialFilterObject;

  public reset() {
    this.filterObject.state.geometry = undefined;
    const spatialFilter: SpatialFilter = this.renderRoot.querySelector(
      "eox-itemfilter-spatial-filter"
    );
    spatialFilter.reset();
  }

  // skip shadow root creation
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <form style="display: inline">
      ${map(
        ["intersects", "within"],
        (mode: string) => html`
          <label>
            <input
              type="radio"
              name="mode"
              .checked="${live(this.filterObject.state.mode === mode)}"
              value="${mode}"
              @click="${() => {
                this.filterObject.state.mode = mode;
                let event = new CustomEvent("filter", {
                  detail: {
                    [this.filterObject.key]: {},
                  },
                });
                this.dispatchEvent(event);
              }}"
            />
            <small>${mode} filter geometry</small>
          </label>
        `
      )}
      </form>
      <eox-itemfilter-spatial-filter
        exportparts="map: spatial-filter-map"
        .geometry=${this.filterObject.state?.geometry}
        @filter="${(e: Event) => {
          this.filterObject.state.geometry = (<CustomEvent>e).detail.geometry;
          this.dispatchEvent(new CustomEvent("filter"));
        }}"
      ></eox-itemfilter-spatial>
    `;
  }
}
