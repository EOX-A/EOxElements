const channel = new MessageChannel();
const port1 = channel.port1;

class EOxChart {
  iframe: HTMLIFrameElement;
  constructor(frame: HTMLIFrameElement) {
    this.iframe = frame;
  }
  setData(data: object) {
    port1.postMessage({ type: "setData", body: { data } });
  }
  setSignalsData(data: object) {
    port1.postMessage({ type: "setSignalsData", body: { data } });
  }
  setSignalsEndpoint(options: {
    source: string;
    endpoint: string;
    active: string[];
    features: string[];
    geometry: object;
    startTime: string;
    endTime: string;
  }) {
    port1.postMessage({ type: "setSignalsEndpoint", body: { options } });
  }
  setOptions(options: object) {
    port1.postMessage({ type: "setOptions", body: { options } });
  }
  getFoo() {
    return new Promise((resolve) => {
      const ts = Date.now();
      port1.onmessage = (event) => {
        if (event.data.ts === ts) {
          resolve(event.data.body);
        }
      };
      port1.postMessage({ ts, type: "getFoo", body: "hello world" });
    });
  }
}

const createChart = (div: HTMLElement | null) => {
  if (!div) {
    console.error("no div selected");
    return null;
  }
  return new Promise<EOxChart>((resolve) => {
    const iframe = document.createElement("iframe");
    iframe.style.cssText =
      "width: 100%; height: 100%; display: block; margin: 0; border: none;";
    iframe.setAttribute(
      "src",
      import.meta?.url?.includes("localhost")
        ? "http://localhost:5173/index.html"
        : "https://www.unpkg.com/@eox/chart/dist/index.html"
    );
    iframe.setAttribute("id", "EOxChart");
    div?.appendChild(iframe);
    let iframeLoaded = false;
    iframe.onload = () => {
      // store if the iFrame has already loaded, since in Cypress hovering over the test triggers
      // the onload event multiple times, causing an error with the previously neutered port2
      if (iframeLoaded) {
        return;
      }
      iframe.contentWindow?.postMessage("init", "*", [channel.port2]);
      iframeLoaded = true;
      resolve(new EOxChart(iframe));
    };
  });
};

export { createChart };
