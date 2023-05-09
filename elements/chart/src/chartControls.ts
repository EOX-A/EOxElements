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
    this.sdm.on("chartupdated", () => {
      console.log("Chart has been updated");
    });
    this.sdm.on("failedAttempt", (error, source) => {
      console.log(source);
      console.log(error);
    });
    this.sdm.on("errorRequest", (error, source) => {
      console.log(source);
      console.log(error);
    });
    this.options = options;
    this.sdmOptions = sdmOptions;
    this.generateTimeAggregationOptions();
    this.addNormalizeCheckbox();
    this.addShowMinMax();
    this.addCSVDownload();
    this.generateTimeSelectionOptions();
    const spinner = document.createElement("span");
    spinner.id = "loadingIndicator";
    spinner.className = "loader hidden";
    this.element.appendChild(spinner);
  }

  private createMessagesElements() {
    const messages = document.createElement("div");
    messages.id = "messages";
    this.element.appendChild(messages);
  }

  private removeStartEndInputs() {
    const start = document.getElementById("startInput");
    const end = document.getElementById("endInput");
    const button = document.getElementById("setTime");
    if (start && end && button) {
      start.remove();
      end.remove();
      button.remove();
    }
  }
  private addStartEndInputs() {
    const startEl = document.createElement("input");
    startEl.id = "startInput";
    startEl.size = 8;
    startEl.value = this.sdm.startTime.toISODate();
    const endEl = document.createElement("input");
    endEl.id = "endInput";
    endEl.size = 8;
    endEl.value = this.sdm.endTime.toISODate();
    this.element.appendChild(startEl);
    this.element.appendChild(endEl);
    var button = document.createElement("button");
    button.id = "setTime";
    button.textContent = "ok";

    this.element.appendChild(button);
    button.addEventListener("click", () => {
      const startDate = DateTime.fromISO(startEl.value);
      const endDate = DateTime.fromISO(endEl.value);
      if (startDate.isValid && endDate.isValid) {
        this.sdm.setTimeInterval(startDate, endDate);
        this.removeStartEndInputs();
      } else {
        startEl.className = startDate.isValid ? "" : "parsingError";
        endEl.className = endDate.isValid ? "" : "parsingError";
      }
    });
  }

  private addNormalizeCheckbox() {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "normalize";
    checkbox.value = "normalize";
    checkbox.checked = this.sdmOptions.normalize;

    var label = document.createElement("label");
    label.htmlFor = "normalize";
    label.appendChild(document.createTextNode("normalize"));

    this.element.appendChild(label);
    this.element.appendChild(checkbox);
    checkbox.addEventListener("change", () => {
      this.sdm.setNormalize(checkbox.checked);
    });
  }

  private addShowMinMax() {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "showMinMax";
    checkbox.value = "showMinMax";
    checkbox.checked = this.sdmOptions.showMinMax;

    var label = document.createElement("label");
    label.htmlFor = "showMinMax";
    label.appendChild(document.createTextNode("show min/max"));

    this.element.appendChild(label);
    this.element.appendChild(checkbox);
    checkbox.addEventListener("change", () => {
      this.sdm.setShowMinMax(checkbox.checked);
    });
  }

  private addCSVDownload() {
    var button = document.createElement("button");
    button.id = "csvDownload";
    button.textContent = "download csv";

    this.element.appendChild(button);
    button.addEventListener("click", () => {
      this.sdm.triggerCSVDownload();
    });
  }

  private generateTimeSelectionOptions() {
    const options = [
      { text: "3 months back", value: "month-3" },
      { text: "6 months back", value: "month-6" },
      { text: "1 year back", value: "year-1" },
      { text: "2 years back", value: "year-2" },
      { text: "3 years back", value: "year-3" },
      { text: "custom", value: "custom" },
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
      this.removeStartEndInputs();
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
        case "custom":
          this.addStartEndInputs();
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
