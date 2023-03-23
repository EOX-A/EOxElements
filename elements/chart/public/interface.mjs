var i = Object.defineProperty;
var h = (o, e, t) =>
  e in o
    ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (o[e] = t);
var c = (o, e, t) => (h(o, typeof e != "symbol" ? e + "" : e, t), t);
const l = new MessageChannel(),
  r = l.port1;
class d {
  constructor(e) {
    c(this, "iframe");
    this.iframe = e;
  }
  setFoo(e) {
    r.postMessage({ type: "setFoo", body: { text: e } });
  }
  getFoo() {
    return new Promise((e) => {
      const t = Date.now();
      (r.onmessage = (s) => {
        s.data.ts === t && e(s.data.body);
      }),
        r.postMessage({ ts: t, type: "getFoo", body: "hello world" });
    });
  }
}
const m = (o) => {
  if (!o) {
    console.error("no div selected");
    return;
  }
  return new Promise((e) => {
    var s, n;
    const t = document.createElement("iframe");
    (t.style.cssText =
      "width: 100%; height: 100%; display: block; margin: 0; border: none;"),
      t.setAttribute(
        "src",
        (n = (s = import.meta) == null ? void 0 : s.url) != null &&
          n.includes("localhost")
          ? "http://localhost:5173/index.html"
          : "https://www.unpkg.com/@eox/chart/dist/index.html"
      ),
      t.setAttribute("id", "EOxChart"),
      o == null || o.appendChild(t),
      (t.onload = () => {
        var a;
        (a = t.contentWindow) == null || a.postMessage("init", "*", [l.port2]),
          e(new d(t));
      });
  });
};
export { m as createChart };
