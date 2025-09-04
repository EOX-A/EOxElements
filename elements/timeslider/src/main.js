import { LitElement, html } from "lit";
import { style } from "./style.js";
import { styleEOX } from "./style.eox.js";
import Group from "ol/layer/Group";
import { getElement } from "@eox/elements-utils";
import { Timeline, DataSet } from "vis-timeline/standalone";
import visTimelineCSS from "vis-timeline/styles/vis-timeline-graph2d.css?inline";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import minMax from "dayjs/plugin/minMax";
import { v4 as uuidv4 } from "uuid";
import { when } from "lit/directives/when.js";

dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);
dayjs.extend(minMax);

/**
 * @element eox-timeslider
 */
export class EOxTimeSlider extends LitElement {
  static get properties() {
    return {
      for: { type: String },
      unstyled: { type: Boolean },
      sliderValues: { type: Array, attribute: "slider-values" },
      filters: { type: Array, attribute: "filter" },
      selectedDate: { type: String, attribute: "selected-date" },
    };
  }

  #visTimeline = null;
  #eoxMap = null;
  #groups = new DataSet([]);
  #items = new DataSet([]);

  constructor() {
    super();
    /** @type {boolean} */
    this.unstyled = false;

    /**
     * Query selector of an `eox-map` (`String`, passed as an attribute or property)
     * or an `eox-map` DOM element (`HTMLElement`, passed as property)
     *
     * @type {String|HTMLElement}
     */
    this.for = "eox-map";

    this.sliderValues = [];

    this.filters = [];

    this.selectedDate = null;
  }

  getContainer() {
    return this.renderRoot.querySelector("#timeslider");
  }

  setSelectedDate(date, visTimeline, eoxMap, EOxTimeSlide) {
    this.selectedDate = dayjs(date);
    if (Number.isNaN(this.selectedDate.unix())) return;
    try {
      visTimeline.addCustomTime(this.selectedDate.toDate(), "selected");
    } catch (_) {
      /* exists */
    }

    const container = this.getContainer();

    visTimeline.setCustomTime(this.selectedDate.toDate(), "selected");
    visTimeline.setCustomTimeTitle(
      this.selectedDate.format("MMM DD' YYYY"),
      "selected",
    );
    const el = container.querySelector('.vis-custom-time[data-id="selected"]');
    if (el) el.classList.add("vis-custom-time-selected");

    const prevSelectionCell = container.querySelectorAll(
      ".vis-item.milestone.vis-point.vis-selected-item",
    );
    prevSelectionCell.forEach((cell) => {
      cell.classList.remove("vis-selected-item");
    });

    const selectedEle = container.querySelector(".vis-custom-time");
    if (selectedEle) {
      const labelEle = selectedEle.children[0];
      labelEle.classList.add("vis-custom-time-selected-label");
      labelEle.innerText = dayjs(date).format("MMM DD' YYYY");
    }

    const flatLayers = EOxTimeSlide.getFlatLayersArray(
      /** @type {import('ol/layer/Base').default[]} */ (
        eoxMap.map.getLayers().getArray()
      ),
    );

    const selectedItems = this.#visTimeline.itemsData
      .get()
      .filter(
        (item) =>
          dayjs(item.start).format("YYYY-MM-DD") ==
          dayjs(date).format("YYYY-MM-DD"),
      );

    selectedItems.forEach((item) => {
      if (item.group && eoxMap) {
        const layer = flatLayers.find((l) => l.get("id") === item.group);
        const source = layer.getSource();

        const newSelectionCell = container.querySelector(
          `.vis-item.milestone.vis-point.item-${item.id}`,
        );
        newSelectionCell.classList.add("vis-selected-item");
        source.updateParams({
          [item.property]: item.start,
        });
      }
    });
    EOxTimeSlide.requestUpdate();
  }

  initVisTimeline() {
    if (this.sliderValues.length === 0) return;

    this.#groups = new DataSet([]);
    this.#items = new DataSet([]);

    for (const slider of this.sliderValues) {
      this.#groups.add({
        id: slider.layer,
        content: slider.name,
      });
      for (const value of slider.values) {
        const id = uuidv4(slider.layer + value.date);
        this.#items.add({
          ...value,
          id: id,
          group: slider.layer,
          className: `milestone item-${id}`,
          start: value.date,
          type: "point",
          property: slider.property,
        });
      }
    }

    const dates = this.#items.map((item) => dayjs(item.start));
    const min = dayjs.min(dates).subtract(30, "day").format("YYYY-MM-DD");
    const max = dayjs.max(dates).add(30, "day").format("YYYY-MM-DD");
    const container = this.getContainer();

    const options = {
      // groupOrder: (a, b) => a.id - b.id,
      stack: false,
      selectable: true,
      zoomable: true,
      moveable: true,
      margin: { item: 40, axis: 20 },
      start: min,
      end: max,
      min: min,
      max: max,
      showCurrentTime: true,
      timeAxis: {
        scale: "day",
        step: 5,
      },
      orientation: { axis: "top" },
      format: {
        minorLabels: {
          millisecond: "SSS",
          second: "s",
          minute: "HH:mm",
          hour: "HH:mm",
          weekday: "ddd D",
          day: "DD",
          week: "w",
          month: "MMM",
          year: "YYYY",
        },
        majorLabels: {
          millisecond: "HH:mm:ss",
          second: "D MMMM HH:mm",
          minute: "ddd D MMMM",
          hour: "ddd D MMMM",
          weekday: "MMM YYYY",
          day: "MMM YYYY",
          week: "MMM YYYY",
          month: "YYYY",
          year: "",
        },
      },
    };

    if (!this.#visTimeline) {
      this.#visTimeline = new Timeline(
        container,
        this.#items,
        this.#groups,
        options,
      );

      this.#visTimeline.on("changed", () => {
        const width = container
          .querySelector(".vis-text.vis-minor.vis-even")
          .style.width.replace("px", "");
        const cellWidth = width / options.timeAxis.step + 0.1;

        const milestoneElements = container.querySelectorAll(
          ".vis-item.milestone",
        );
        milestoneElements.forEach((milestone) => {
          milestone.style.width = `${cellWidth}px`;
        });
      });

      this.#visTimeline.on("click", (props) => {
        if (props && props.time)
          this.setSelectedDate(
            props.time,
            this.#visTimeline,
            this.#eoxMap,
            this,
          );
      });

      this.requestUpdate();
    }
  }

  firstUpdated() {
    this.initVisTimeline();
    this.updateMap();
  }

  /**
   * TEMP / TO-DO, this is a copy of the function defined in the eox-map:
   * https://github.com/EOX-A/EOxElements/blob/main/elements/map/src/layer.ts#L25
   * Consider a way to properly export that function and use it here
   * See also:
   * https://github.com/EOX-A/EOxElements/issues/974
   * @param {import('ol/layer/Base').default[]} layers
   * @returns {import('ol/layer/Base').default[]}
   */
  getFlatLayersArray(layers) {
    const flatLayers = [];
    flatLayers.push(...layers);

    /** @type {Array<Group>} */
    let groupLayers =
      /** @type {Array<Group>} */
      (flatLayers.filter((l) => l instanceof Group));
    while (groupLayers.length) {
      /** @type {Array<Group>} */
      const newGroupLayers = [];
      for (let i = 0, ii = groupLayers.length; i < ii; i++) {
        const layersInsideGroup = groupLayers[i].getLayers().getArray();
        flatLayers.push(...layersInsideGroup);
        /** @type {Array<Group>} */
        const filteredGroups = /** @type {Array<Group>} */ (
          layersInsideGroup.filter((l) => l instanceof Group)
        );
        newGroupLayers.push(...filteredGroups);
      }
      groupLayers = newGroupLayers;
    }
    return flatLayers;
  }

  updateMap() {
    const foundElement = getElement(this.for);

    if (foundElement) {
      const EoxMap = /** @type {import("@eox/map").EOxMap} */ (foundElement);
      this.#eoxMap = EoxMap;
    }
  }

  filterHandler(e) {
    const filterItems = this.renderRoot.querySelectorAll(
      ".vis-item.milestone.vis-point",
    );
    filterItems.forEach((item) => {
      item.classList.remove("vis-filtered");
      item.classList.remove("vis-not-filtered");
    });
    if (this.#visTimeline.itemsData.get().length != e.detail.results.length) {
      for (const result of e.detail.results) {
        const item = this.renderRoot.querySelector(
          `.vis-item.milestone.vis-point.item-${result.id}`,
        );
        if (item) {
          item.classList.add("vis-filtered");
        }
      }
      const notFilteredItem = this.renderRoot.querySelectorAll(
        `.vis-item.milestone.vis-point:not(.vis-filtered)`,
      );
      notFilteredItem.forEach((item) => {
        item.classList.add("vis-not-filtered");
      });
    }
  }

  dateChangeHandler(e) {
    this.setSelectedDate(e.target.value, this.#visTimeline, this.#eoxMap, this);
  }

  render() {
    return html`
      <style>
        ${visTimelineCSS}
        ${!this.unstyled && styleEOX}
        ${style}
      </style>
      <div class="timeslider-container">
        <div class="timeslider-header">
          <div class="field fill border small">
            <input
              type="date"
              @change=${this.dateChangeHandler}
              value=${this.selectedDate?.format("YYYY-MM-DD") || ""}
            />
          </div>
          ${when(
            this.filters && this.#visTimeline,
            () =>
              html` <eox-itemfilter
                .items=${this.#items}
                .inlineMode=${true}
                .titleProperty=${"id"}
                .showResults=${false}
                @filter=${this.filterHandler}
                .filterProperties=${this.filters}
              ></eox-itemfilter>`,
          )}
        </div>
        <div id="timeslider"></div>
      </div>
    `;
  }
}

customElements.define("eox-timeslider", EOxTimeSlider);
