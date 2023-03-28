(function (t, e) {
  typeof exports == "object" && typeof module < "u"
    ? e(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], e)
    : ((t = typeof globalThis < "u" ? globalThis : t || self),
      e((t.Interface = {})));
})(this, function (t) {
  "use strict";
  var p = Object.defineProperty;
  var u = (t, e, o) =>
    e in t
      ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o);
  var c = (t, e, o) => (u(t, typeof e != "symbol" ? e + "" : e, o), o);
  const e = new MessageChannel(),
    o = e.port1;
  class d {
    constructor(n) {
      c(this, "iframe");
      this.iframe = n;
    }
    setData(n) {
      o.postMessage({ type: "setData", body: { data: n } });
    }
    setSignalsData(n) {
      o.postMessage({ type: "setSignalsData", body: { data: n } });
    }
    setOptions(n) {
      o.postMessage({ type: "setOptions", body: { options: n } });
    }
    getFoo() {
      return new Promise((n) => {
        const s = Date.now();
        (o.onmessage = (a) => {
          a.data.ts === s && n(a.data.body);
        }),
          o.postMessage({ ts: s, type: "getFoo", body: "hello world" });
      });
    }
  }
  const l = (r) =>
    r
      ? new Promise((n) => {
          var a;
          const s = document.createElement("iframe");
          (s.style.cssText =
            "width: 100%; height: 100%; display: block; margin: 0; border: none;"),
            s.setAttribute(
              "src",
              (a =
                typeof document > "u" && typeof location > "u"
                  ? require("url").pathToFileURL(__filename).href
                  : typeof document > "u"
                  ? location.href
                  : (document.currentScript && document.currentScript.src) ||
                    new URL("interface.umd.js", document.baseURI).href) !=
                null && a.includes("localhost")
                ? "http://localhost:5173/index.html"
                : "https://www.unpkg.com/@eox/chart/dist/index.html"
            ),
            s.setAttribute("id", "EOxChart"),
            r == null || r.appendChild(s),
            (s.onload = () => {
              var i;
              (i = s.contentWindow) == null ||
                i.postMessage("init", "*", [e.port2]),
                n(new d(s));
            });
        })
      : (console.error("no div selected"), null);
  (t.createChart = l),
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
});
