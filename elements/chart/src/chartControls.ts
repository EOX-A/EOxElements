import { DateTime } from "luxon";
import SignalsDataManager, { SDMOptions } from "./signalsDataManager";

export interface ChartControlOptions {}

class ChartControls {
  element: HTMLElement;
  sdm: SignalsDataManager;
  sdmOptions: SDMOptions;
  options?: ChartControlOptions;

  constructor(
    element: HTMLElement,
    sdm: SignalsDataManager,
    sdmOptions: SDMOptions,
    options?: ChartControlOptions
  ) {
    this.element = element;
    this.sdm = sdm;
    this.options = options;
    this.sdmOptions = sdmOptions;
    this.generateTimeSelectionOptions();
    this.generateTimeAggregationOptions();
    this.addNormalizeCheckbox();
    const spinner = document.createElement("span");
    spinner.id = "loadingIndicator";
    spinner.className = "loader hidden";
    this.element.appendChild(spinner);
  }

  private addNormalizeCheckbox() {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "normalize";
    checkbox.value = "normalize";
    checkbox.checked = this.sdmOptions.normalize;

    var label = document.createElement("label");
    label.htmlFor = "normalize";
    label.appendChild(document.createTextNode("Normalize"));

    this.element.appendChild(label);
    this.element.appendChild(checkbox);
    checkbox.addEventListener("change", () => {
      this.sdm.setNormalize(checkbox.checked);
    });
  }

  private generateTimeSelectionOptions() {
    const options = [
      { text: "3 months back", value: "months-3" },
      { text: "6 months back", value: "months-6" },
      { text: "1 year back", value: "year-1" },
      { text: "2 years back", value: "year-2" },
      { text: "3 years back", value: "year-3" },
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
      const [type, val] = (evt.target as HTMLSelectElement).value.split("-");
      switch (type) {
        case "month":
          this.sdm.setTimeInterval(
            currDate.minus({ month: Number(val) }),
            currDate
          );
          break;
        case "year":
          this.sdm.setTimeInterval(
            currDate.minus({ year: Number(val) }),
            currDate
          );
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
