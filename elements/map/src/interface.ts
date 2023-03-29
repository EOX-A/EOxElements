import Layer from "ol/layer/Layer";

const channel = new MessageChannel();
const port1 = channel.port1;

class EOxMap {
  iframe: HTMLIFrameElement;
  constructor(frame: HTMLIFrameElement) {
    this.iframe = frame;
  }
  setLayers(layers:Array<Layer>) {
    port1.postMessage({ type: 'setLayers', body: { layers }})
  }
  getLayers() {
    return new Promise((resolve) => {
      const ts = Date.now()
      port1.onmessage = (event) => {
        if (event.data.ts === ts) {
          resolve(event.data.body)
        }
      }
      port1.postMessage({ts, type: 'getLayers', body: 'hello world'})
    })
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
        : "https://www.unpkg.com/@eox/map/dist/index.html"
    );
    iframe.setAttribute("id", "EOxMap");
    div?.appendChild(iframe);

    // store if the iFrame has already loaded, since in Cypress hovering over the test triggers
    // the onload event multiple times, causing an error with the previously neutered port2
    let iframeLoaded = false;
    iframe.onload = () => {
      if (iframeLoaded) {
        return;
      }
      iframe.contentWindow?.postMessage('init','*',[channel.port2])
      iframeLoaded = true;
      resolve(new EOxMap(iframe));
    };
  });
};

export { createMap };
