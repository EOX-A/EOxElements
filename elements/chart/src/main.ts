import Chart from "chart.js/auto";

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

new Chart("#chart", {
  type: "bar",
  data: {
    labels: data.map((row) => row.year),
    datasets: [
      {
        label: "Acquisitions by year",
        data: data.map((row) => row.count),
      },
    ],
  },
});

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
      case "setFoo":
        console.log(event.data.body);
        break;
    }
  }
};
