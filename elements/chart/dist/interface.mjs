var c = Object.defineProperty;
var p = (s, t, e) =>
  t in s
    ? c(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (s[t] = e);
var l = (s, t, e) => (p(s, typeof t != "symbol" ? t + "" : t, e), e);
const i = new MessageChannel(),
  a = i.port1;
class d {
  constructor(t) {
    l(this, "iframe");
    this.iframe = t;
  }
  setData(t) {
    a.postMessage({ type: "setData", body: { data: t } });
  }
  setSignalsData(t) {
    a.postMessage({ type: "setSignalsData", body: { data: t } });
  }
  setOptions(t) {
    a.postMessage({ type: "setOptions", body: { options: t } });
  }
  getFoo() {
    return new Promise((t) => {
      const e = Date.now();
      (a.onmessage = (o) => {
        o.data.ts === e && t(o.data.body);
      }),
        a.postMessage({ ts: e, type: "getFoo", body: "hello world" });
    });
  }
}
const m = (s) =>
  s
    ? new Promise((t) => {
        var o, n;
        const e = document.createElement("iframe");
        (e.style.cssText =
          "width: 100%; height: 100%; display: block; margin: 0; border: none;"),
          e.setAttribute(
            "src",
            (n = (o = import.meta) == null ? void 0 : o.url) != null &&
              n.includes("localhost")
              ? "http://localhost:5173/index.html"
              : "https://www.unpkg.com/@eox/chart/dist/index.html"
          ),
          e.setAttribute("id", "EOxChart"),
          s == null || s.appendChild(e),
          (e.onload = () => {
            var r;
            (r = e.contentWindow) == null ||
              r.postMessage("init", "*", [i.port2]),
              t(new d(e));
          });
      })
    : (console.error("no div selected"), null);
export { m as createChart };
