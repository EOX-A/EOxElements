import pkg from "../package.json";

const channel = new MessageChannel();
const port1 = channel.port1;

class EOxMap {
  iframe: HTMLIFrameElement;
  constructor(frame: HTMLIFrameElement) {
    this.iframe = frame;
  }
  setLayers(layers: object) {
    port1.postMessage({ type: "setLayers", body: { layers } });
  }
  getLayers() {
    return new Promise((resolve) => {
      const ts = Date.now();
      port1.onmessage = (event) => {
        if (event.data.ts === ts) {
          resolve(event.data.body.layers);
        }
      };
      port1.postMessage({ ts, type: "getLayers" });
    });
  }
}

const createMap = (div: HTMLElement | null) => {
  if (!div) {
    console.error("no div selected");
    return;
  }
  return new Promise<EOxMap>((resolve) => {
    const iframe = document.createElement("iframe");
    iframe.style.cssText =
      "width: 100%; height: 100%; display: block; margin: 0; border: none;";
    iframe.setAttribute(
      "src",
      import.meta?.url?.includes("localhost")
        ? "http://localhost:5173/index.html"
        : "about:blank"
    );
    iframe.setAttribute("id", "EOxMap");
    div?.appendChild(iframe);
    if (!import.meta?.url?.includes("localhost")) {
      const hostUrl = `https://www.unpkg.com/@eox/map@${pkg.version}/dist`;
      fetch(`${hostUrl}/index.html`)
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          const html = text.replace("./assets/", `${hostUrl}/assets/`);
          iframe.contentDocument?.open();
          iframe.contentDocument?.write(html);
          iframe.contentDocument?.close();
        });
    }
    // store if the iFrame has already loaded, since in Cypress hovering over the test triggers
    // the onload event multiple times, causing an error with the previously neutered port2
    let iframeLoaded = false;
    iframe.onload = () => {
      if (iframeLoaded) {
        return;
      }
      iframe.contentWindow?.postMessage("init", "*", [channel.port2]);
      iframeLoaded = true;
      resolve(new EOxMap(iframe));
    };
  });
};

export { createMap };
