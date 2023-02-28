var a = Object.defineProperty;
var i = (o, t, e) => t in o ? a(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var n = (o, t, e) => (i(o, typeof t != "symbol" ? t + "" : t, e), e);
class l {
  constructor(t) {
    n(this, "iframe");
    this.iframe = t;
  }
  /**
   * Some info about the tell function!
   */
  tell(t) {
    var e;
    (e = this.iframe.contentWindow) == null || e.postMessage(t, "*");
  }
  setFoo(t, e) {
    return `key: ${t} | value: ${e}`;
  }
  getFoo() {
    return this.iframe;
  }
}
const c = (o) => {
  if (!o) {
    console.error("no div selected");
    return;
  }
  return new Promise((t) => {
    var r, s;
    const e = document.createElement("iframe");
    e.style.cssText = "width: 100%; height: 100%; display: block; margin: 0; border: none;", e.setAttribute(
      "src",
      (s = (r = import.meta) == null ? void 0 : r.url) != null && s.includes("localhost") ? "http://localhost:5173/index.html" : "https://www.unpkg.com/@eox/map/dist/index.html"
    ), e.setAttribute("id", "EOxMap"), o == null || o.appendChild(e), e.onload = () => {
      t(new l(e));
    };
  });
}, h = {
  map: {
    create: c
  }
};
export {
  h as elements
};
