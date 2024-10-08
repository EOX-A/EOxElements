import { DateTime } from "luxon";
import pRetry, { AbortError } from "p-retry";
import { basicDataPoint } from "./signalsDataManager";

type endpointType = "signals" | "geodb" | "sentinelhub";

class RequestHandler {
  type: endpointType;
  endpoint: string;
  parameters: string[][];
  retries: number;
  source?: string;
  table?: string;
  geometry?: object;
  timeParameter?: string;

  constructor(
    type: endpointType,
    endpoint: string,
    parameters: string[][],
    retries: number,
    source?: string,
    table?: string,
    geometry?: object,
    timeParameter?: string
  ) {
    this.type = type;
    this.endpoint = endpoint;
    this.parameters = parameters;
    this.retries = retries;
    this.source = source;
    this.table = table;
    this.geometry = geometry;
    this.timeParameter = timeParameter;
  }

  fetchData(groupIndex: number, start?: DateTime, end?: DateTime) {
    switch (this.type) {
      case "signals":
        return this.fetchSignals(groupIndex, start, end);
        break;
      case "geodb":
        return this.fetchGeoDBData(groupIndex, start, end);
        break;
      default:
        return null;
    }
  }

  private fetchGeoDBData(groupIndex: number, start?: DateTime, end?: DateTime) {
    const parameters = this.parameters[groupIndex].join(",");
    const timeSelection = `and=(${
      this.timeParameter
    }.gte.${start.toISODate()},${this.timeParameter}.lte.${end.toISODate()})`;
    const request = `${this.endpoint}/${this.source}_${this.table}?${timeSelection}&select=${parameters},${this.timeParameter}`;

    async function fetchSignalsFunction() {
      const response = await fetch(request, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "GET",
        mode: "cors",
      });
      // Abort retrying if the resource doesn't exist
      if (response.status === 404) {
        throw new AbortError(response.statusText);
      }
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      return response;
    }
    return pRetry(fetchSignalsFunction, {
      onFailedAttempt: (error) => {
        console.log(
          `Attempt ${error.attemptNumber} failed. There are ${error.retriesLeft} retries left.`
        );
      },
      retries: this.retries,
    }).then(function (res) {
      return res.json();
    });
  }

  private fetchSignals(groupIndex: number, start?: DateTime, end?: DateTime) {
    const features = this.parameters[groupIndex]
      .map((f) => `feature=${f}`)
      .join("&");
    const times = `${start ? "&start_date=" + start.toISODate() : ""}${
      end ? "&end_date=" + end.toISODate() : ""
    }`;
    const request = `${this.endpoint}?source=${this.source}&${features}${times}`;
    const geom = this.geometry;

    async function fetchSignalsFunction() {
      const response = await fetch(request, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          geometry: geom,
        }),
      });
      // Abort retrying if the resource doesn't exist
      if (response.status === 404) {
        throw new AbortError(response.statusText);
      }
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      return response;
    }
    return pRetry(fetchSignalsFunction, {
      onFailedAttempt: (error) => {
        console.log(
          `Attempt ${error.attemptNumber} failed. There are ${error.retriesLeft} retries left.`
        );
      },
      retries: this.retries,
    })
      .then(function (res) {
        return res.json();
      })
      .catch((error) => {
        console.error(error);
        document
          .querySelector("eox-chart")
          .shadowRoot.querySelector<HTMLElement>("#error").style.display =
          "flex";
        setTimeout(() => {
          document
            .querySelector("eox-chart")
            .shadowRoot.querySelector<HTMLElement>("#error").style.display =
            "none";
        });
      });
  }

  convertData(datapoint: basicDataPoint) {
    switch (this.type) {
      case "signals":
        return this.convertSignals(datapoint);
        break;
      case "geodb":
        return this.convertGeoDBData(datapoint);
        break;
      default:
        return null;
    }
  }

  private convertSignals(datapoint: basicDataPoint) {
    let ds = {};
    const stats = datapoint.basicStats;
    if (datapoint && datapoint.date !== "missing") {
      ds = {
        x: DateTime.fromISO(datapoint.date).setZone("UTC"),
        y: stats.mean,
        yMin: stats.min,
        yMax: stats.max,
      };
    }
    return ds;
  }

  private convertGeoDBData(datapoint: basicDataPoint) {
    let ds = {};
    if (datapoint && datapoint.date !== "missing") {
      ds = {
        x: DateTime.fromISO(datapoint.date).setZone("UTC"),
        y: datapoint.basicStats.mean,
        yMin: null,
        yMax: null,
      };
    }
    return ds;
  }

  setGeometry(geometry: object) {
    this.geometry = geometry;
  }
}

export default RequestHandler;

export { endpointType };
