(function (t, e) {
  typeof exports == "object" && typeof module < "u"
    ? e(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], e)
    : ((t = typeof globalThis < "u" ? globalThis : t || self),
      e((t.Interface = {})));
})(this, function (t) {
  "use strict";
  var u = Object.defineProperty;
  var f = (t, e, n) =>
    e in t
      ? u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  var a = (t, e, n) => (f(t, typeof e != "symbol" ? e + "" : e, n), n);
  const e = new MessageChannel(),
    n = e.port1;
  class d {
    constructor(r) {
      a(this, "iframe");
      this.iframe = r;
    }
    setFoo(r) {
      n.postMessage({ type: "setFoo", body: { text: r } });
    }
    getFoo() {
      return new Promise((r) => {
        const o = Date.now();
        (n.onmessage = (i) => {
          i.data.ts === o && r(i.data.body);
        }),
          n.postMessage({ ts: o, type: "getFoo", body: "hello world" });
      });
    }
  }
  const l = (s) => {
    if (!s) {
      console.error("no div selected");
      return;
    }
    return new Promise((r) => {
      var i;
      const o = document.createElement("iframe");
      (o.style.cssText =
        "width: 100%; height: 100%; display: block; margin: 0; border: none;"),
        o.setAttribute(
          "src",
          (i =
            typeof document > "u" && typeof location > "u"
              ? require("url").pathToFileURL(__filename).href
              : typeof document > "u"
              ? location.href
              : (document.currentScript && document.currentScript.src) ||
                new URL("interface.umd.js", document.baseURI).href) != null &&
            i.includes("localhost")
            ? "http://localhost:5173/index.html"
            : "https://www.unpkg.com/@eox/chart/dist/index.html"
        ),
        o.setAttribute("id", "EOxChart"),
        s == null || s.appendChild(o),
        (o.onload = () => {
          var c;
          (c = o.contentWindow) == null ||
            c.postMessage("init", "*", [e.port2]),
            r(new d(o));
        });
    });
  };
  (t.createChart = l),
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
});
