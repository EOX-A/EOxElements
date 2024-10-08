import Chart, { ChartDataset } from "chart.js/auto";
import "chartjs-adapter-luxon";
import SignalsDataManager from "./signalsDataManager";
import ChartControls from "./chartControls";
import { htmlLegendPlugin } from "./htmlLegendPlugin";
import { chartTemplate } from "./template";

const template = document.createElement("template");
template.innerHTML = chartTemplate;
export class EOxChart extends HTMLElement {
  shadowRoot: ShadowRoot;

  /**
   * The native chart.js object.
   * See [https://www.chartjs.org/docs/latest/developers/api.html](https://www.chartjs.org/docs/latest/developers/api.html)
   */
  chart: Chart;

  /**
   * Set chart data, TODO description
   */
  setData: (body: { datasets: ChartDataset[] }) => void;

  setOptions: (body: object) => void;

  setSignalsData: (body: object) => void;

  setSignalsEndpoint: (options: {
    source: string;
    endpoint: string;
    active: string[];
    features: string[][];
    geometry: object;
    timeInterval: object;
    startTime?: string;
    endTime?: string;
  }) => void;

  setSignalsGeometry: (geometry: object) => void;

  setGeoDBEndpoint: (options: {
    source: string;
    endpoint: string;
    active: string[];
    features: string[][];
    geometry: object;
    timeInterval: object;
    startTime?: string;
    endTime?: string;
  }) => void;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.chart = new Chart(this.shadowRoot.querySelector("canvas"), {
      options: {
        maintainAspectRatio: false,
        responsive: true,
      },
      data: {
        labels: [],
        datasets: [],
      },
      plugins: [
        htmlLegendPlugin,
        {
          id: "selectionLineHighlight",
          afterDraw: (chart) => {
            if (chart && chart.tooltip) {
              const active = chart.tooltip.getActiveElements();
              if (active?.length) {
                const x = active[0].element.x;
                const yAxis = chart.scales.y;
                const ctx = chart.ctx;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x, yAxis.top);
                ctx.lineTo(x, yAxis.bottom);
                ctx.lineWidth = 1;
                ctx.strokeStyle = "rgba(0, 0, 255, 0.4)";
                ctx.stroke();
                ctx.restore();
              }
            }
          },
        },
      ],
    });

    this.setData = (body: { datasets: ChartDataset[] }) => {
      this.chart.data = body || { datasets: [] };
      this.chart.update("none");
    };

    this.setOptions = (body: object) => {
      this.chart.options = body;
      this.chart.update("none");
    };

    this.setSignalsData = (body: object) => {
      this.chart.data = {
        datasets: Object.entries(body).map(([key, item]): ChartDataset => {
          return {
            type: "line",
            label: key,
            data: <number[]>item,
          };
        }),
      };
      this.chart.update("none");
    };

    this.setSignalsGeometry = (geometry: object) => {
      if (sdmInstance) {
        sdmInstance.setGeometry(geometry);
      }
    };

    let sdmInstance: SignalsDataManager | null = null;
    this.setSignalsEndpoint = (options: {
      source: string;
      endpoint: string;
      active: string[];
      features: string[][];
      geometry: object;
      timeInterval: object;
      startTime?: string;
      endTime?: string;
    }) => {
      sdmInstance = new SignalsDataManager("signals", this.chart, options);
      new ChartControls(
        document.getElementById("controls"),
        sdmInstance,
        options,
      );
      sdmInstance.setActiveFields(options.active);
    };

    this.setGeoDBEndpoint = (options: {
      source: string;
      endpoint: string;
      active: string[];
      features: string[][];
      geometry: object;
      timeInterval: object;
      startTime?: string;
      endTime?: string;
    }) => {
      sdmInstance = new SignalsDataManager("geodb", this.chart, options);
      new ChartControls(
        document.getElementById("controls"),
        sdmInstance,
        options,
      );
      sdmInstance.setActiveFields(options.active);
    };
  }
}

customElements.define("eox-chart", EOxChart);
