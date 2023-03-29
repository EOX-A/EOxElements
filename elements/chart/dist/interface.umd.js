(function (n, e) {
  typeof exports == "object" && typeof module < "u"
    ? e(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], e)
    : ((n = typeof globalThis < "u" ? globalThis : n || self),
      e((n.Interface = {})));
})(this, function (n) {
  "use strict";
  var p = Object.defineProperty;
  var u = (n, e, o) =>
    e in n
      ? p(n, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (n[e] = o);
  var d = (n, e, o) => (u(n, typeof e != "symbol" ? e + "" : e, o), o);
  const e = new MessageChannel(),
    o = e.port1;
  class c {
    constructor(t) {
      d(this, "iframe");
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
        const s = Date.now();
        (o.onmessage = (r) => {
          r.data.ts === s && t(r.data.body);
        }),
          o.postMessage({ ts: s, type: "getFoo", body: "hello world" });
      });
    }
  }
  const l = (a) =>
    a
      ? new Promise((t) => {
          var r;
          const s = document.createElement("iframe");
          (s.style.cssText =
            "width: 100%; height: 100%; display: block; margin: 0; border: none;"),
            s.setAttribute(
              "src",
              (r =
                typeof document > "u" && typeof location > "u"
                  ? require("url").pathToFileURL(__filename).href
                  : typeof document > "u"
                  ? location.href
                  : (document.currentScript && document.currentScript.src) ||
                    new URL("interface.umd.js", document.baseURI).href) !=
                null && r.includes("localhost")
                ? "http://localhost:5173/index.html"
                : "https://www.unpkg.com/@eox/chart/dist/index.html"
            ),
            s.setAttribute("id", "EOxChart"),
            a == null || a.appendChild(s),
            (s.onload = () => {
              var i;
              (i = s.contentWindow) == null ||
                i.postMessage("init", "*", [e.port2]),
                t(new c(s));
            });
        })
      : (console.error("no div selected"), null);
  (n.createChart = l),
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" });
});
