var i = Object.defineProperty;
var h = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var l = (o, e, t) => (h(o, typeof e != "symbol" ? e + "" : e, t), t);
const c = new MessageChannel(), n = c.port1;
class d {
  constructor(e) {
    l(this, "iframe");
    this.iframe = e;
  }
  setData(e) {
    n.postMessage({ type: "setData", body: { data: e } });
  }
  getFoo() {
    return new Promise((e) => {
      const t = Date.now();
      n.onmessage = (s) => {
        s.data.ts === t && e(s.data.body);
      }, n.postMessage({ ts: t, type: "getFoo", body: "hello world" });
    });
  }
}
const m = (o) => o ? new Promise((e) => {
  var s, r;
  const t = document.createElement("iframe");
  t.style.cssText = "width: 100%; height: 100%; display: block; margin: 0; border: none;", t.setAttribute(
    "src",
    (r = (s = import.meta) == null ? void 0 : s.url) != null && r.includes("localhost") ? "http://localhost:5173/index.html" : "https://www.unpkg.com/@eox/chart/dist/index.html"
  ), t.setAttribute("id", "EOxChart"), o == null || o.appendChild(t), t.onload = () => {
    var a;
    (a = t.contentWindow) == null || a.postMessage("init", "*", [c.port2]), e(new d(t));
  };
}) : (console.error("no div selected"), null);
export {
  m as createChart
};
