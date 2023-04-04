import Chart, { ChartDataset } from "chart.js/auto";
import "chartjs-adapter-luxon";
import SignalsDataManager from "./signalsDataManager";
import ChartControls from "./chartControls";

const eoxchart = new Chart(
  <HTMLCanvasElement>document.getElementById("chart"),
  {
    data: {
      labels: [],
      datasets: [],
    },
  }
);

let sdmInstance: SignalsDataManager | null = null;

let application: MessagePort;

window.addEventListener("message", (event) => {
  if (event.data === "init") {
    application = event.ports[0];
    application.onmessage = onMessage;
  }
});

const onMessage = (event: MessageEvent) => {
  if (event.data.ts) {
    switch (event.data.type) {
      case "getFoo":
        console.log(event.data.body);
        application.postMessage({ ts: event.data.ts, body: "foo bar" });
        break;
    }
  } else {
    switch (event.data.type) {
      case "setData":
        eoxchart.data = event.data.body.data;
        eoxchart.update("none");
        break;
      case "setSignalsEndpoint":
        setSignalsEndpoint(event.data.body.options);
        break;
      case "setSignalsGeometry":
        setSignalsGeometry(event.data.body.options);
        break;
      case "setSignalsData":
        eoxchart.data = {
          datasets: Object.entries(event.data.body.data).map(
            ([key, item]): ChartDataset => {
              return {
                type: "line",
                label: key,
                data: <number[]>item,
              };
            }
          ),
        };
        eoxchart.update("none");
        break;
      case "setOptions":
        eoxchart.options = event.data.body.options;
        eoxchart.update("none");
        break;
    }
  }
};

const setSignalsEndpoint = (options: {
  source: string;
  endpoint: string;
  active: string[];
  features: string[][];
  geometry: object;
  timeInterval: object;
  startTime?: string;
  endTime?: string;
}) => {
  sdmInstance = new SignalsDataManager(eoxchart, options);
  new ChartControls(document.getElementById("controls"), sdmInstance, options);
  sdmInstance.setActiveFields(options.active);
};

const setSignalsGeometry = (geometry: object) => {
  if (sdmInstance) {
    sdmInstance.setGeometry(geometry);
  }
};
