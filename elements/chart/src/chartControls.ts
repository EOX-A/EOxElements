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
    this.generateSelectionOptions();
  }

  private generateSelectionOptions() {
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
    const spinner = document.createElement("span");
    spinner.className = "loader hidden";
    this.element.appendChild(spinner);
  }
}

export default ChartControls;
