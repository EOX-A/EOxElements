var s = Object.defineProperty;
var n = (r, t, e) => t in r ? s(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var o = (r, t, e) => (n(r, typeof t != "symbol" ? t + "" : t, e), e);
class a {
  constructor(t) {
    o(this, "iframe");
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
const i = (r) => {
  if (!r) {
    console.error("no div selected");
    return;
  }
  return new Promise((t) => {
    const e = document.createElement("iframe");
    e.style.cssText = "width: 100%; height: 100%; display: block; margin: 0; border: none;", e.setAttribute("src", "http://localhost:5173/index.html"), e.setAttribute("id", "EOxMap"), r == null || r.appendChild(e), e.onload = () => {
      t(new a(e));
    };
  });
}, l = {
  map: {
    create: i
  }
};
export {
  l as elements
};
