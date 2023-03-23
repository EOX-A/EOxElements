var i = Object.defineProperty;
var p = (s, t, e) => t in s ? i(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var c = (s, t, e) => (p(s, typeof t != "symbol" ? t + "" : t, e), e);
const l = new MessageChannel(), r = l.port1;
class d {
  constructor(t) {
    c(this, "iframe");
    this.iframe = t;
  }
  setLayers(t) {
    r.postMessage({ type: "setLayers", body: { layers: t } });
  }
  getLayers() {
    return new Promise((t) => {
      const e = Date.now();
      r.onmessage = (o) => {
        o.data.ts === e && t(o.data.body);
      }, r.postMessage({ ts: e, type: "getLayers", body: "hello world" });
    });
  }
}
const h = (s) => {
  if (!s) {
    console.error("no div selected");
    return;
  }
  return new Promise((t) => {
    var o, n;
    const e = document.createElement("iframe");
    e.style.cssText = "width: 100%; height: 100%; display: block; margin: 0; border: none;", e.setAttribute(
      "src",
      (n = (o = import.meta) == null ? void 0 : o.url) != null && n.includes("localhost") ? "http://localhost:5173/index.html" : "https://www.unpkg.com/@eox/map/dist/index.html"
    ), e.setAttribute("id", "EOxMap"), s == null || s.appendChild(e), e.onload = () => {
      var a;
      (a = e.contentWindow) == null || a.postMessage("init", "*", [l.port2]), t(new d(e));
    };
  });
};
export {
  h as createMap
};
