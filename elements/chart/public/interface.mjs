var c = Object.defineProperty;
var d = (s, t, e) => t in s ? c(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var l = (s, t, e) => (d(s, typeof t != "symbol" ? t + "" : t, e), e);
const p = new MessageChannel(), o = p.port1;
class h {
  constructor(t) {
    l(this, "iframe");
    this.iframe = t;
  }
  setData(t) {
    o.postMessage({ type: "setData", body: { data: t } });
  }
  setSignalsData(t) {
    o.postMessage({ type: "setSignalsData", body: { data: t } });
  }
  setSignalsEndpoint(t) {
    o.postMessage({ type: "setSignalsEndpoint", body: { options: t } });
  }
  setOptions(t) {
    o.postMessage({ type: "setOptions", body: { options: t } });
  }
  getFoo() {
    return new Promise((t) => {
      const e = Date.now();
      o.onmessage = (a) => {
        a.data.ts === e && t(a.data.body);
      }, o.postMessage({ ts: e, type: "getFoo", body: "hello world" });
    });
  }
}
const m = (s) => s ? new Promise((t) => {
  var n, r;
  const e = document.createElement("iframe");
  e.style.cssText = "width: 100%; height: 100%; display: block; margin: 0; border: none;", e.setAttribute(
    "src",
    (r = (n = import.meta) == null ? void 0 : n.url) != null && r.includes("localhost") ? "http://localhost:5173/index.html" : "https://www.unpkg.com/@eox/chart/dist/index.html"
  ), e.setAttribute("id", "EOxChart"), s == null || s.appendChild(e);
  let a = !1;
  e.onload = () => {
    var i;
    a || ((i = e.contentWindow) == null || i.postMessage("init", "*", [p.port2]), a = !0, t(new h(e)));
  };
}) : (console.error("no div selected"), null);
export {
  m as createChart
};
