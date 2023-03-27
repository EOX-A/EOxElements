import Chart from "chart.js/auto";

const eoxchart = new Chart(
  <HTMLCanvasElement>document.getElementById('chart'), {
    data: {
      labels: [],
      datasets: [],
    },
  },
);

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
    }
  }
};
