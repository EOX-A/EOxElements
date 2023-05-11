// @ts-nocheck
import Chart, {
  ChartDataset,
  LinearScale,
  CategoryScale,
  ChartOptions,
} from "chart.js/auto";
import { DateTime } from "luxon";

import {
  LineWithErrorBarsController,
  LineWithErrorBarsChart,
  ScatterWithErrorBarsChart,
  ScatterWithErrorBarsController,
  PointWithErrorBar,
} from "chartjs-chart-error-bars";

import RequestHandler from "./requestHandler";
import { endpointType } from "./requestHandler";

Chart.register(
  LineWithErrorBarsController,
  LineWithErrorBarsChart,
  PointWithErrorBar,
  ScatterWithErrorBarsChart,
  ScatterWithErrorBarsController,
  LinearScale,
  CategoryScale
);

type status = "ready" | "loading" | "error";
interface DSDict {
  [key: number]: {
    [key: string]: {
      status: string;
      data?: {
        [key: string]: {
          date: string;
          basicStats: { mean: number; min: number; max: number };
        }[];
      };
      request: Promise<void>;
    };
  };
}

interface yAxisObject {
  id: "string";
  containedSignals: string[];
}

export interface SDMOptions {
  source: string;
  endpoint: string;
  features: string[][];
  geometry: object;
  timeInterval: object;
  startTime?: string;
  endTime?: string;
  timeAggregation?: object;
  retries?: number;
  normalize?: boolean;
  showMinMax?: boolean;
  colors?: string[];
  additionalYAxis?: yAxisObject[];
  timeParameter?: string;
  table?: string;
}

class SignalsDataManager {
  type: endpointType;
  chart: Chart;
  startTime: DateTime;
  endTime: DateTime;
  timeAggregation: object;
  options: SDMOptions;
  chartOptions: ChartOptions;
  dataStorage: DSDict;
  status: status;
  activeFields: string[];
  requestHandler: RequestHandler;
  additionalYAxis: yAxisObject[] | null;

  constructor(type: endpointType, chart: Chart, options: SDMOptions) {
    this.type = type;
    this.chart = chart;
    this.options = options;
    this.startTime = DateTime.now().minus(options.timeInterval);
    this.endTime = DateTime.now();
    if (options.startTime && options.endTime) {
      // Overwrite values if provided
      this.startTime = DateTime.fromISO(options.startTime).setZone("UTC");
      this.endTime = DateTime.fromISO(options.endTime).setZone("UTC");
    }
    if (this.options.timeAggregation) {
      this.timeAggregation = this.options.timeAggregation;
    }
    this.options.retries = this.options.retries ? this.options.retries : 5;
    this.options.normalize = this.options.normalize
      ? this.options.normalize
      : false;
    this.options.showMinMax = this.options.showMinMax
      ? this.options.showMinMax
      : false;
    this.additionalYAxis = this.options.additionalYAxis
      ? this.options.additionalYAxis
      : null;
    this.dataStorage = {};
    // Initialize data storage
    this.options.features.forEach((_, idx) => (this.dataStorage[idx] = {}));
    // Initialize request builder
    this.requestHandler = new RequestHandler(
      type,
      this.options.endpoint,
      this.options.features,
      this.options.retries,
      this.options.source,
      this.options.table,
      this.options.geometry,
      this.options.timeParameter
    );
    this.status = "ready";
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 30,
        },
      },
      scales: {
        x: {
          type: "time",
          min: this.startTime.toISODate(),
          max: this.endTime.toISODate(),
          ticks: {
            minRotation: 0,
            maxRotation: 0,
          },
        },
      },
      interaction: {
        axis: "x",
        mode: "nearest",
        intersect: false,
      },
      plugins: {
        // @ts-ignore
        htmlLegend: {
          containerID: "legend-container",
          // @ts-ignore
          onClick: (_, legendItem) => {
            if (!legendItem.hidden) {
              const idx = this.activeFields.indexOf(legendItem.text);
              const keys = this.activeFields;
              keys.splice(idx, 1);
              this.setActiveFields(keys);
            } else {
              this.setActiveFields([...this.activeFields, legendItem.text]);
            }
          },
        },
        legend: {
          display: false,
          // labels: {
          //   usePointStyle: true,
          //   pointStyle: "rect",
          //   padding: 0,
          //   sort: (a, b) => a.text.localeCompare(b.text),
          // },
          // position: "right",
          // onClick: (_, legendItem) => {
          //   if (!legendItem.hidden) {
          //     const idx = this.activeFields.indexOf(legendItem.text);
          //     const keys = this.activeFields;
          //     keys.splice(idx, 1);
          //     this.setActiveFields(keys);
          //   } else {
          //     this.setActiveFields([...this.activeFields, legendItem.text]);
          //   }
          // },
        },
        tooltip: {
          callbacks: {
            title: (tooltipItem) => {
              const raw: any = tooltipItem[0]?.raw;
              return raw.x.toISODate();
            },
            label: (tooltipItem) => {
              const raw: any = tooltipItem.raw;
              const minString =
                raw.yMin !== null ? `; ↓ ${raw.yMin.toPrecision(3)}` : "";
              const maxString =
                raw.yMax !== null ? `, ↑ ${raw.yMax.toPrecision(3)}` : "";
              return `${tooltipItem.dataset.label}: ↔ ${raw.y.toPrecision(
                3
              )}${minString}${maxString}`;
            },
          },
        },
      },
    };
    // Adding possible additional y axis scales
    if (this.additionalYAxis !== null) {
      for (let index = 0; index < this.additionalYAxis.length; index++) {
        const scale = this.additionalYAxis[index];
        this.chartOptions.scales[scale.id] = {
          type: "linear",
          position: "right",
        };
      }
    }
  }

  private checkLoadingStatus() {
    const spinner = document
      .querySelector("eox-chart")
      .shadowRoot.querySelector("#loadingIndicator");
    let loading = false;
    // TODO: Showing when error state happened
    Object.keys(this.dataStorage).forEach((_, groupIdx) => {
      Object.keys(this.dataStorage[groupIdx]).forEach((timeKey) => {
        if (this.dataStorage[groupIdx][timeKey].status === "fetching") {
          loading = true;
        }
      });
    });
    spinner.className = loading ? "loader" : "loader hidden";
  }

  private updateChart() {
    this.checkLoadingStatus();
    this.chart.options = this.chartOptions;
    const datasets: ChartDataset[] = [];
    this.options.features.flat().forEach((key, dsIndex) => {
      // Find group
      let groupIndex: number = -1;
      this.options.features.forEach((group, idx) => {
        if (group.includes(key)) {
          groupIndex = idx;
        }
      });
      if (groupIndex !== -1) {
        let data: {
          date: string;
          basicStats?: { mean: number; min: number; max: number };
        }[] = [];
        let totalMin = Number.MAX_VALUE;
        let totalMax = Number.MIN_VALUE;
        Object.keys(this.dataStorage[groupIndex]).forEach((timekey) => {
          const dsEntry = this.dataStorage[groupIndex][timekey];
          if (dsEntry.status === "finished") {
            // TODO: We should handle data extraction through an interface
            if (this.type === "signals") {
              if (
                Object.keys(dsEntry.data).length !== 0 &&
                Object.keys(dsEntry.data).includes(key)
              ) {
                dsEntry.data[key].forEach((dp) => {
                  const bstats = dp.basicStats;
                  if (this.options.showMinMax) {
                    totalMin = bstats.min < totalMin ? bstats.min : totalMin;
                    totalMax = bstats.max > totalMax ? bstats.max : totalMax;
                  } else {
                    totalMin = bstats.mean < totalMin ? bstats.mean : totalMin;
                    totalMax = bstats.mean > totalMax ? bstats.mean : totalMax;
                  }
                });
                data.push(...dsEntry.data[key]);
              }
            }
            if (this.type === "geodb") {
              if (Object.keys(dsEntry.data).length !== 0) {
                const dataForKey = dsEntry.data.map((dp) => {
                  if (dp[key] !== null) {
                    totalMin = dp[key] < totalMin ? dp[key] : totalMin;
                    totalMax = dp[key] > totalMax ? dp[key] : totalMax;
                  }
                  return {
                    date: dp[this.options.timeParameter],
                    basicStats: {
                      mean: dp[key],
                    },
                  };
                });
                data.push(...dataForKey);
              }
            }
          } else {
            data.push({ date: "missing" });
          }
        });

        let actualDataAdded = false;
        let signalData = <any>(
          data.map((datapoint) => this.requestHandler.convertData(datapoint))
        );
        // Probably best to always sort by time
        signalData.sort((a, b) => a.x - b.x);
        if (signalData.length > 0) {
          actualDataAdded = true;
        }
        if (actualDataAdded && this.timeAggregation) {
          // If we aggregate data we recalculate min max so we reset it
          let max = Number.MIN_VALUE;
          let min = Number.MAX_VALUE;
          // Reset total as we want to re-evaluate it
          totalMin = Number.MAX_VALUE;
          totalMax = Number.MIN_VALUE;
          const aggrData = [];
          let currDataIdx = 0;
          let currDate = DateTime.fromObject({
            year: this.startTime.year,
            month: this.startTime.month,
            day: this.startTime.day,
          });
          while (currDate < this.endTime) {
            let dataSum = 0;
            let dataAdded = false;
            while (
              currDataIdx < signalData.length &&
              (Object.keys(signalData[currDataIdx]).length === 0 ||
                signalData[currDataIdx].x < currDate)
            ) {
              currDataIdx++;
            }
            const x1 = currDataIdx;
            while (
              currDataIdx < signalData.length &&
              (Object.keys(signalData[currDataIdx]).length === 0 ||
                signalData[currDataIdx].x < currDate.plus(this.timeAggregation))
            ) {
              const sd = signalData[currDataIdx];
              dataSum += sd.y;
              // We take the maximum of either the data value or the max value
              max = sd.y !== null && sd.y > max ? sd.y : max;
              max = sd.yMax !== null && sd.yMax > max ? sd.yMax : max;
              // Same for min
              min = sd.y !== null && sd.y < min ? sd.y : min;
              min = sd.yMin !== null && sd.yMin < min ? sd.yMin : min;
              currDataIdx++;
              dataAdded = true;
            }
            const x2 = currDataIdx;
            const count = x2 - x1;
            // If datapoints are within the interval we push the aggregation to the aggregated data
            if (count > 0 && dataAdded) {
              const yMean = dataSum / count;
              // Save total min/max considering if min max is being shown or not
              if (this.options.showMinMax) {
                totalMin = min < totalMin ? min : totalMin;
                totalMax = max > totalMax ? max : totalMax;
              } else {
                totalMin = yMean < totalMin ? yMean : totalMin;
                totalMax = yMean > totalMax ? yMean : totalMax;
              }
              // TODO: can we save a time interval here?
              aggrData.push({
                x: currDate,
                y: yMean,
                yMin: min,
                yMax: max,
              });
              max = Number.MIN_VALUE;
              min = Number.MAX_VALUE;
            }
            currDate = currDate.plus(this.timeAggregation);
          }
          signalData = aggrData;
        }

        if (actualDataAdded && this.options.normalize) {
          const extent = totalMax - totalMin;
          signalData = signalData.map(
            (dp: { x: DateTime; y: number; yMin: number; yMax: number }) => {
              if (dp.y !== null) {
                dp.y = (dp.y - totalMin) / extent;
              } else {
                dp.y = null;
              }
              dp.yMin = (dp.yMin - totalMin) / extent;
              dp.yMax = (dp.yMax - totalMin) / extent;
              return dp;
            }
          );
        }

        let ds: ChartDataset = {
          type: "line",
          label: key,
          data: signalData,
          hidden: !this.activeFields.includes(key),
        };
        if (this.options.showMinMax) {
          ds = {
            type: "lineWithErrorBars",
            label: key,
            data: signalData,
            hidden: !this.activeFields.includes(key),
            errorBarWhiskerLineWidth: 2,
            errorBarColor: "#00000000",
          };
        }
        if (this.options.colors && this.options.colors.length >= dsIndex) {
          const color = this.options.colors[dsIndex];
          ds.backgroundColor = color;
          ds.borderColor = color;

          if (this.options.showMinMax) {
            ds = {
              type: "lineWithErrorBars",
              label: key,
              data: signalData,
              hidden: !this.activeFields.includes(key),
              errorBarWhiskerLineWidth: 2,
              errorBarColor: "#00000000",
              errorBarWhiskerColor: color,
              errorBarWhiskerSize: 10,
              backgroundColor: color,
              borderColor: color,
            };
          }
        }
        // Check if additional y axis should be used
        if (this.additionalYAxis !== null) {
          for (let index = 0; index < this.additionalYAxis.length; index++) {
            const axis = this.additionalYAxis[index];
            if (axis.containedSignals.includes(key)) {
              ds.yAxisID = axis.id;
            }
          }
        }
        datasets.push(ds);
      }
    });

    this.chart.data = {
      datasets,
    };
    this.chart.update("none");
  }

  private retrieveMissingData() {
    // Review current time span and see if data needs to be fetched

    // First identify signal groups
    const signalGroupIndices: number[] = [];
    this.activeFields.forEach((af) => {
      this.options.features.forEach((group, index) => {
        if (group.includes(af) && !signalGroupIndices.includes(index)) {
          signalGroupIndices.push(index);
        }
      });
    });

    // Check if dataStorage has relevant data
    // We use monthly steps for data retrieval
    let currDate = DateTime.fromObject({
      year: this.endTime.year,
      month: this.endTime.month,
    })
      .plus({ month: 1 })
      .minus({ second: 1 });
    const start = DateTime.fromObject({
      year: this.startTime.year,
      month: this.startTime.month,
    })
      .plus({ month: 1 })
      .minus({ second: 1 });
    while (currDate > start) {
      const timeslot = currDate.toFormat("yyyyMM");
      signalGroupIndices.forEach((index) => {
        if (!(timeslot in this.dataStorage[index])) {
          // request data
          const request = this.requestHandler
            .fetchData(
              index,
              DateTime.fromObject({
                year: currDate.year,
                month: currDate.month,
              }),
              DateTime.fromObject({
                year: currDate.year,
                month: currDate.month,
              })
                .plus({ month: 1 })
                .minus({ second: 1 })
            )
            .then((data) => {
              this.dataStorage[index][timeslot].data = data;
              this.dataStorage[index][timeslot].status = "finished";
              this.updateChart();
            })
            .catch(() => {
              this.dataStorage[index][timeslot].status = "failed";
              this.updateChart();
            });
          this.dataStorage[index][timeslot] = {
            request,
            status: "fetching",
          };
        }
      });
      currDate = currDate.minus({ months: 1 });
    }
  }

  triggerCSVDownload() {
    const completeData: {
      date: string;
      basicStats?: { mean: number; min: number; max: number };
    }[][] = [];
    const headers: string[] = [];
    const allSignals = this.activeFields;
    allSignals.forEach((key, signalIdx) => {
      // Find group
      let groupIndex: number = -1;
      this.options.features.forEach((group, idx) => {
        if (group.includes(key)) {
          groupIndex = idx;
        }
      });
      if (groupIndex !== -1) {
        let data: {
          date: string;
          basicStats?: { mean: number; min: number; max: number };
        }[] = [];
        Object.keys(this.dataStorage[groupIndex]).forEach((timekey) => {
          const dsEntry = this.dataStorage[groupIndex][timekey];
          if (dsEntry.status === "finished") {
            if (
              Object.keys(dsEntry.data).length !== 0 &&
              Object.keys(dsEntry.data).includes(key)
            ) {
              data.push(...dsEntry.data[key]);
            }
          }
        });
        if (data.length > 0) {
          headers.push(allSignals[signalIdx]);
          completeData.push(data);
        }
      }
    });
    // We need to try and bring the different timed datasets into "same timegrid" lets do some binning
    const binnedData: {
      [key: string]: {
        [key: string]: {
          mean: number;
          max: number;
          min: number;
        };
      };
    } = {};
    headers.forEach((datakey, idx) => {
      completeData[idx].forEach((dp) => {
        if (binnedData[dp.date]) {
          binnedData[dp.date][datakey] = dp.basicStats;
        } else {
          binnedData[dp.date] = {};
          binnedData[dp.date][datakey] = dp.basicStats;
        }
      });
    });

    // Now we try to construct the csv adding empty values when timestamp not available for a dataset
    let csv = "time,";
    const allHeaders = headers.map((val) => [val, `${val}_max`, `${val}_min`]);
    csv += allHeaders.flat().join(",");
    csv += "\n";
    Object.keys(binnedData).forEach((dateKey) => {
      const row: (string | number)[] = [dateKey];
      headers.forEach((signalKey) => {
        const stats = binnedData[dateKey][signalKey]
          ? binnedData[dateKey][signalKey]
          : null;
        if (stats != null) {
          row.push(...[stats.mean, stats.max, stats.min]);
        } else {
          row.push(...["", "", ""]);
        }
      });
      csv += row.join(",");
      csv += "\n";
    });
    const hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";
    hiddenElement.download = "chart_data.csv";
    hiddenElement.click();
  }

  setGeometry(geometry: object) {
    // Clear all currently saved data
    this.dataStorage = {};
    // Initialize data storage
    this.options.features.forEach((_, idx) => (this.dataStorage[idx] = {}));
    this.options.geometry = geometry;
    // Set new geometry to requestHandler
    this.requestHandler.setGeometry(geometry);
    this.retrieveMissingData();
    this.updateChart();
  }

  setActiveFields(activeFields: string[]) {
    this.activeFields = activeFields;
    this.retrieveMissingData();
    this.updateChart();
  }

  setTimeInterval(start: DateTime, end: DateTime) {
    this.startTime = start;
    this.endTime = end;
    this.chartOptions.scales.x.min = start.toISODate();
    this.chartOptions.scales.x.max = end.toISODate();
    this.retrieveMissingData();
    this.updateChart();
  }

  setNormalize(normalize: boolean) {
    this.options.normalize = normalize;
    this.updateChart();
  }

  setShowMinMax(showMinMax: boolean) {
    this.options.showMinMax = showMinMax;
    this.updateChart();
  }

  setTimeAggregation(
    aggregation: {
      day?: number;
      week?: number;
      month?: number;
      year?: number;
    } | null
  ) {
    this.timeAggregation = aggregation;
    this.updateChart();
  }
  /*
  setAggregation(aggregation: string) {}
  */
}

export default SignalsDataManager;
