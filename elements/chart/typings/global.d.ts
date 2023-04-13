import Chart from "chart.js/auto";

declare global {
  interface Window {
    chart: Chart;
  }
}

export {};
