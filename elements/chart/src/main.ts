import Chart, { ChartDataset } from "chart.js/auto";

const eoxchart = new Chart(
  <HTMLCanvasElement>document.getElementById("chart"),
  {
    data: {
      labels: [],
      datasets: [],
    },
  }
);

const fetchSignals = (options: {
  source: string;
  endpoint: string;
  active: string[];
  features: string[];
  geometry: object;
}) => {
  const features = options.active.map((f) => `feature=${f}`).join("&");
  const request = `${options.endpoint}?source=${options.source}&${features}`;
  return fetch(request, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      geometry: options.geometry,
    }),
  }).then(function (res) {
    return res.json();
  });
};

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
  features: string[];
  geometry: object;
}) => {
  eoxchart.options = {
    parsing: {
      xAxisKey: "date",
      yAxisKey: "basicStats.mean",
    },
    plugins: {
      legend: {
        position: "right",
        onClick: (_, legendItem) => {
          if (legendItem.hidden) {
            if (
              eoxchart.data.datasets[legendItem.datasetIndex].data.length === 0
            ) {
              options.active = [legendItem.text];
              fetchSignals(options).then(function (data) {
                eoxchart.data.datasets[legendItem.datasetIndex].data =
                  data[legendItem.text];
                eoxchart.data.datasets[legendItem.datasetIndex].hidden = false;
                eoxchart.update("none");
              });
            }
          }
        },
      },
    },
  };
  // eoxchart.signals = options;
  fetchSignals(options).then(function (data) {
    eoxchart.data = {
      datasets: options.features.map((key) => {
        return {
          type: "line",
          label: key,
          data: data[key] ? data[key] : [],
          hidden: data[key] ? false : true,
        };
      }),
    };
    eoxchart.update("none");
  });
};
