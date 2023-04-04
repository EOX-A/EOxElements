import { DateTime } from "luxon";
import SignalsDataManager from "./signalsDataManager";

export interface ChartControlOptions {}

class ChartControls {
  element: HTMLElement;
  sdm: SignalsDataManager;
  options?: ChartControlOptions;

  constructor(
    element: HTMLElement,
    sdm: SignalsDataManager,
    options?: ChartControlOptions
  ) {
    this.element = element;
    this.sdm = sdm;
    this.options = options;
    this.generateTimeSelectionOptions();
    this.generateTimeAggregationOptions();
    const spinner = document.createElement("span");
    spinner.id = "loadingIndicator";
    spinner.className = "loader hidden";
    this.element.appendChild(spinner);
  }

  private generateTimeSelectionOptions() {
    const options = [
      { text: "3 months back", value: "months3" },
      { text: "6 months back", value: "months6" },
      { text: "1 year back", value: "year1" },
      { text: "2 years back", value: "year2" },
      { text: "3 years back", value: "year3" },
    ];
    const selectEl = document.createElement("select");
    options.forEach((entry) => {
      const option = document.createElement("option");
      option.text = entry.text;
      option.value = entry.value;
      selectEl.appendChild(option);
    });
    this.element.appendChild(selectEl);
    selectEl.addEventListener("change", (evt) => {
      const currDate = DateTime.now();
      switch ((evt.target as HTMLSelectElement).value) {
        case "months3":
          this.sdm.setTimeInterval(currDate.minus({ months: 3 }), currDate);
          break;
        case "months6":
          this.sdm.setTimeInterval(currDate.minus({ months: 6 }), currDate);
          break;
        case "year1":
          this.sdm.setTimeInterval(currDate.minus({ years: 1 }), currDate);
          break;
        case "year2":
          this.sdm.setTimeInterval(currDate.minus({ years: 2 }), currDate);
          break;
        case "year3":
          this.sdm.setTimeInterval(currDate.minus({ years: 3 }), currDate);
          break;
      }
    });
  }

  private generateTimeAggregationOptions() {
    const options = [
      { text: "no aggregation", value: "none" },
      { text: "1 week", value: "week-1" },
      { text: "2 weeks", value: "week-2" },
      { text: "1 month", value: "month-1" },
      { text: "3 months", value: "month-3" },
      { text: "6 months", value: "month-6" },
    ];
    const selectEl = document.createElement("select");
    options.forEach((entry) => {
      const option = document.createElement("option");
      option.text = entry.text;
      option.value = entry.value;
      selectEl.appendChild(option);
    });
    this.element.appendChild(selectEl);
    selectEl.addEventListener("change", (evt) => {
      const [type, val] = (evt.target as HTMLSelectElement).value.split("-");
      switch (type) {
        case "none":
          this.sdm.setTimeAggregation(null);
          break;
        case "week":
          this.sdm.setTimeAggregation({ week: Number(val) });
          break;
        case "month":
          this.sdm.setTimeAggregation({ month: Number(val) });
          break;
        case "year":
          this.sdm.setTimeAggregation({ year: Number(val) });
          break;
      }
    });
    const spinner = document.createElement("span");
    spinner.id = "loadingIndicator";
    spinner.className = "loader hidden";
    this.element.appendChild(spinner);
  }
}

export default ChartControls;
