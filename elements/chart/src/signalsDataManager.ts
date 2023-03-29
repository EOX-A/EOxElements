import Chart from "chart.js/auto";

type status = "ready" | "loading" | "error";

export interface SDMOptions {
  source: string;
  endpoint: string;
  active: string[];
  features: string[];
  geometry: object;
}

class SignalsDataManager {
  chart: Chart;
  options: SDMOptions;
  dataObject: object;
  status: status;
  activeFields: string[];

  constructor(chart: Chart, options: SDMOptions) {
    this.chart = chart;
    this.options = options;
    this.dataObject = {};
    this.status = "ready";
  }

  private fetchSignals() {
    const features = this.options.active.map((f) => `feature=${f}`).join("&");
    const request = `${this.options.endpoint}?source=${this.options.source}&${features}`;
    return fetch(request, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        geometry: this.options.geometry,
      }),
    }).then(function (res) {
      return res.json();
    });
  }

  setActiveFields(activeFields: string[]) {
    this.activeFields = activeFields;
    this.fetchSignals().then((data) => {
      this.chart.data = {
        datasets: this.options.features.map((key) => {
          return {
            type: "line",
            label: key,
            data: data[key] ? data[key] : [],
            hidden: data[key] ? false : true,
          };
        }),
      };
      this.chart.update("none");
    });
  }
  /*
  setTimeInterval(start: string, end: string) {
    // go through all active datasets and review if data covering interval
    // available. Update chart whenever data is loaded
  }

  setAggregation(aggregation: string) {}
  */
}

export default SignalsDataManager;
