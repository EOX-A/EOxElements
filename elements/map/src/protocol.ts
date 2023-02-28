type Key = string;
type Value = string;

/**
 * Some info about the tellBody!
 */
interface TellBody {
  key: Key;
  value: Value;
}

class EOxMap {
  iframe: HTMLIFrameElement;
  constructor(frame: HTMLIFrameElement) {
    this.iframe = frame;
  }
  /**
   * Some info about the tell function!
   */
  tell(body: TellBody) {
    this.iframe.contentWindow?.postMessage(body, "*");
  }
  setFoo(key: Key, value: Value): string {
    return `key: ${key} | value: ${value}`;
  }

  getFoo(): HTMLIFrameElement | null {
    return this.iframe;
  }
}

const create = (div: HTMLElement | null) => {
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
    iframe.onload = () => {
      resolve(new EOxMap(iframe));
    };
  });
};

const elements = {
  map: {
    create,
  },
};

export { elements };
