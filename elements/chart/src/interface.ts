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
    features: string[][];
    geometry: object;
    timeInterval: object;
    startTime?: string;
    endTime?: string;
    colors?: string[];
  }) {
    port1.postMessage({ type: "setSignalsEndpoint", body: { options } });
  }
  setSignalsGeometry(geometry: object) {
    port1.postMessage({ type: "setSignalsGeometry", body: { geometry } });
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
        : "about:blank"
    );
    iframe.setAttribute("id", "EOxChart");
    div?.appendChild(iframe);
    if (!import.meta?.url?.includes("localhost")) {
      fetch("https://raw.githack.com/EOX-A/elements/chartelement/elements/chart/dist/index.html")
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        const html = text.replace('./assets/', 'https://raw.githack.com/EOX-A/elements/chartelement/elements/chart/dist/assets/');
        iframe.contentDocument?.open();
        iframe.contentDocument?.write(html);
        iframe.contentDocument?.close();
      })
    }
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
