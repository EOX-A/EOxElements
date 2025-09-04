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
    };
  }

  #visTimeline = null;
  #layerSources = null;
  #eoxMap = null;

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
  }

  initVisTimeline() {
    if (this.sliderValues.length === 0) return;

    const groups = new DataSet([]);
    const items = new DataSet([]);

    for (const slider of this.sliderValues) {
      groups.add({
        id: slider.layer,
        content: slider.name,
      });
      for (const value of slider.values) {
        items.add({
          group: slider.layer,
          className: "milestone",
          start: value.date,
          type: "point",
          property: slider.property,
        });
      }
    }

    const dates = items.map((item) => dayjs(item.start));
    const min = dayjs.min(dates).subtract(30, "day").format("YYYY-MM-DD");
    const max = dayjs.max(dates).add(30, "day").format("YYYY-MM-DD");
    const container = this.renderRoot.querySelector("#timeslider");

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
          day: "D",
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
      this.#visTimeline = new Timeline(container, items, groups, options);

      function formatDate(d) {
        return d.toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "2-digit",
        });
      }

      function setSelected(
        date,
        layerSources,
        visTimeline,
        eoxMap,
        EOxTimeSlide,
      ) {
        const d = new Date(date);
        if (Number.isNaN(d.getTime())) return;
        try {
          visTimeline.addCustomTime(d, "selected");
        } catch (_) {
          /* exists */
        }

        visTimeline.setCustomTime(d, "selected");
        visTimeline.setCustomTimeTitle(formatDate(d), "selected");
        const el = container.querySelector(
          '.vis-custom-time[data-id="selected"]',
        );
        if (el) el.classList.add("vis-custom-time-selected");

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

        const selectedItems = items.get({
          filter: function (item) {
            return item.start == dayjs(date).format("YYYY-MM-DD");
          },
        });

        selectedItems.forEach((item) => {
          if (item.group && eoxMap) {
            const layer = flatLayers.find((l) => l.get("id") === item.group);
            const source = layer.getSource();
            source.updateParams({
              [item.property]: item.start,
            });
          }
        });
        EOxTimeSlide.requestUpdate();
      }

      this.#visTimeline.on("rangechange", (props) => {
        const range = this.#visTimeline.getWindow();
        const rangeWidth = range.end - range.start; // milliseconds
        const containerWidth = container.offsetWidth;

        // Calculate width per millisecond
        const msPerPixel = rangeWidth / containerWidth;

        // Set milestone width based on visible date range
        // Adjust the multiplier as needed for desired milestone size
        const milestoneWidth = Math.max(
          2,
          Math.min(
            20,
            containerWidth / (rangeWidth / (1000 * 60 * 60 * 24 * 7)),
          ),
        ); // 1 week base

        const milestoneElements = container.querySelectorAll(
          ".vis-item.milestone",
        );
        milestoneElements.forEach((milestone) => {
          milestone.style.width = `${milestoneWidth}px`;
        });
      });

      this.#visTimeline.on("click", (props) => {
        if (props && props.time)
          setSelected(
            props.time,
            this.#layerSources,
            this.#visTimeline,
            this.#eoxMap,
            this,
          );
      });

      this.#visTimeline.addCustomTime(new Date(), "selected");
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
            <input type="date" placeholder=" " />
          </div>
        </div>
        <div id="timeslider"></div>
      </div>
    `;
  }
}

customElements.define("eox-timeslider", EOxTimeSlider);
