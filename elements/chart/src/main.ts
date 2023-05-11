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
  setData: Function;

  setOptions: Function;

  setSignalsData: Function;

  setSignalsEndpoint: Function;

  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

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
                let x = active[0].element.x;
                let yAxis = chart.scales.y;
                let ctx = chart.ctx;
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

    this.setData = (body: any) => {
      this.chart.data = body;
      this.chart.update("none");
    };

    this.setOptions = (body: any) => {
      this.chart.options = body;
      this.chart.update("none");
    };

    this.setSignalsData = (body: any) => {
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
        options
      );
      sdmInstance.setActiveFields(options.active);
    };

    // this.map.on("loadend", () => {
    //   const loadEvt = new CustomEvent("loadend", { detail: { foo: "bar" } });
    //   this.dispatchEvent(loadEvt);
    // });
  }
}

customElements.define("eox-chart", EOxChart);
