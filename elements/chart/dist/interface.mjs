var p = Object.defineProperty;
var c = (s, t, e) =>
  t in s
    ? p(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (s[t] = e);
var i = (s, t, e) => (c(s, typeof t != "symbol" ? t + "" : t, e), e);
const l = new MessageChannel(),
  o = l.port1;
class d {
  constructor(t) {
    i(this, "iframe");
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
      (o.onmessage = (n) => {
        n.data.ts === e && t(n.data.body);
      }),
        o.postMessage({ ts: e, type: "getFoo", body: "hello world" });
    });
  }
}
const g = (s) =>
  s
    ? new Promise((t) => {
        var n, a;
        const e = document.createElement("iframe");
        (e.style.cssText =
          "width: 100%; height: 100%; display: block; margin: 0; border: none;"),
          e.setAttribute(
            "src",
            (a = (n = import.meta) == null ? void 0 : n.url) != null &&
              a.includes("localhost")
              ? "http://localhost:5173/index.html"
              : "https://www.unpkg.com/@eox/chart/dist/index.html"
          ),
          e.setAttribute("id", "EOxChart"),
          s == null || s.appendChild(e),
          (e.onload = () => {
            var r;
            (r = e.contentWindow) == null ||
              r.postMessage("init", "*", [l.port2]),
              t(new d(e));
          });
      })
    : (console.error("no div selected"), null);
export { g as createChart };
