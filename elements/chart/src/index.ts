import { EOxChart } from "./main";

export * from "./main";

declare global {
  interface HTMLElementTagNameMap {
    "eox-chart": EOxChart;
  }
}