var o2 = Object.defineProperty;
var a2 = (r, e, t) => e in r ? o2(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var v0 = (r, e, t) => a2(r, typeof e != "symbol" ? e + "" : e, t);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r0 = globalThis, f0 = r0.ShadowRoot && (r0.ShadyCSS === void 0 || r0.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, I0 = Symbol(), w0 = /* @__PURE__ */ new WeakMap();
let n2 = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== I0) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (f0 && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = w0.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && w0.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const l2 = (r) => new n2(typeof r == "string" ? r : r + "", void 0, I0), s2 = (r, e) => {
  if (f0) r.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const i = document.createElement("style"), o = r0.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, r.appendChild(i);
  }
}, x0 = f0 ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return l2(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: c2, defineProperty: d2, getOwnPropertyDescriptor: m2, getOwnPropertyNames: p2, getOwnPropertySymbols: u2, getPrototypeOf: g2 } = Object, L = globalThis, k0 = L.trustedTypes, h2 = k0 ? k0.emptyScript : "", l0 = L.reactiveElementPolyfillSupport, V = (r, e) => r, u0 = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? h2 : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, R0 = (r, e) => !c2(r, e), y0 = { attribute: !0, type: String, converter: u0, reflect: !1, useDefault: !1, hasChanged: R0 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let T = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = y0) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && d2(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: a } = m2(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: o, set(l) {
      const s = o == null ? void 0 : o.call(this);
      a == null || a.call(this, l), this.requestUpdate(e, s, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? y0;
  }
  static _$Ei() {
    if (this.hasOwnProperty(V("elementProperties"))) return;
    const e = g2(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(V("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(V("properties"))) {
      const t = this.properties, i = [...p2(t), ...u2(t)];
      for (const o of i) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, o] of t) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const o = this._$Eu(t, i);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) t.unshift(x0(o));
    } else e !== void 0 && t.push(x0(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise(((t) => this.enableUpdating = t)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach(((t) => t(this)));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return s2(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach(((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    }));
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach(((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    }));
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    var a;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const l = (((a = i.converter) == null ? void 0 : a.toAttribute) !== void 0 ? i.converter : u0).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var a, l;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const s = i.getPropertyOptions(o), n = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((a = s.converter) == null ? void 0 : a.fromAttribute) !== void 0 ? s.converter : u0;
      this._$Em = o;
      const d = n.fromAttribute(t, s.type);
      this[o] = d ?? ((l = this._$Ej) == null ? void 0 : l.get(o)) ?? d, this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    var o;
    if (e !== void 0) {
      const a = this.constructor, l = this[e];
      if (i ?? (i = a.getPropertyOptions(e)), !((i.hasChanged ?? R0)(l, t) || i.useDefault && i.reflect && l === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(a._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: o, wrapped: a }, l) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, l ?? t ?? this[e]), a !== !0 || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [a, l] of this._$Ep) this[a] = l;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [a, l] of o) {
        const { wrapped: s } = l, n = this[a];
        s !== !0 || this._$AL.has(a) || n === void 0 || this.C(a, void 0, l, n);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach(((o) => {
        var a;
        return (a = o.hostUpdate) == null ? void 0 : a.call(o);
      })), this.update(t)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach(((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
    })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach(((t) => this._$ET(t, this[t])))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
T.elementStyles = [], T.shadowRootOptions = { mode: "open" }, T[V("elementProperties")] = /* @__PURE__ */ new Map(), T[V("finalized")] = /* @__PURE__ */ new Map(), l0 == null || l0({ ReactiveElement: T }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, i0 = Y.trustedTypes, z0 = i0 ? i0.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, N0 = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, U0 = "?" + B, f2 = `<${U0}>`, R = document, X = () => R.createComment(""), J = (r) => r === null || typeof r != "object" && typeof r != "function", b0 = Array.isArray, b2 = (r) => b0(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", s0 = `[ 	
\f\r]`, O = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _0 = /-->/g, C0 = />/g, E = RegExp(`>|${s0}(?:([^\\s"'>=/]+)(${s0}*=${s0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), A0 = /'/g, $0 = /"/g, T0 = /^(?:script|style|textarea|title)$/i, v2 = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), w2 = v2(1), D = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), S0 = /* @__PURE__ */ new WeakMap(), P = R.createTreeWalker(R, 129);
function D0(r, e) {
  if (!b0(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return z0 !== void 0 ? z0.createHTML(e) : e;
}
const x2 = (r, e) => {
  const t = r.length - 1, i = [];
  let o, a = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = O;
  for (let s = 0; s < t; s++) {
    const n = r[s];
    let d, m, b = -1, c = 0;
    for (; c < n.length && (l.lastIndex = c, m = l.exec(n), m !== null); ) c = l.lastIndex, l === O ? m[1] === "!--" ? l = _0 : m[1] !== void 0 ? l = C0 : m[2] !== void 0 ? (T0.test(m[2]) && (o = RegExp("</" + m[2], "g")), l = E) : m[3] !== void 0 && (l = E) : l === E ? m[0] === ">" ? (l = o ?? O, b = -1) : m[1] === void 0 ? b = -2 : (b = l.lastIndex - m[2].length, d = m[1], l = m[3] === void 0 ? E : m[3] === '"' ? $0 : A0) : l === $0 || l === A0 ? l = E : l === _0 || l === C0 ? l = O : (l = E, o = void 0);
    const p = l === E && r[s + 1].startsWith("/>") ? " " : "";
    a += l === O ? n + f2 : b >= 0 ? (i.push(d), n.slice(0, b) + N0 + n.slice(b) + B + p) : n + B + (b === -2 ? s : p);
  }
  return [D0(r, a + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
let g0 = class j0 {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let a = 0, l = 0;
    const s = e.length - 1, n = this.parts, [d, m] = x2(e, t);
    if (this.el = j0.createElement(d, i), P.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = P.nextNode()) !== null && n.length < s; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(N0)) {
          const c = m[l++], p = o.getAttribute(b).split(B), h = /([.?@])?(.*)/.exec(c);
          n.push({ type: 1, index: a, name: h[2], strings: p, ctor: h[1] === "." ? y2 : h[1] === "?" ? z2 : h[1] === "@" ? _2 : n0 }), o.removeAttribute(b);
        } else b.startsWith(B) && (n.push({ type: 6, index: a }), o.removeAttribute(b));
        if (T0.test(o.tagName)) {
          const b = o.textContent.split(B), c = b.length - 1;
          if (c > 0) {
            o.textContent = i0 ? i0.emptyScript : "";
            for (let p = 0; p < c; p++) o.append(b[p], X()), P.nextNode(), n.push({ type: 2, index: ++a });
            o.append(b[c], X());
          }
        }
      } else if (o.nodeType === 8) if (o.data === U0) n.push({ type: 2, index: a });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(B, b + 1)) !== -1; ) n.push({ type: 7, index: a }), b += B.length - 1;
      }
      a++;
    }
  }
  static createElement(e, t) {
    const i = R.createElement("template");
    return i.innerHTML = e, i;
  }
};
function j(r, e, t = r, i) {
  var l, s;
  if (e === D) return e;
  let o = i !== void 0 ? (l = t._$Co) == null ? void 0 : l[i] : t._$Cl;
  const a = J(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== a && ((s = o == null ? void 0 : o._$AO) == null || s.call(o, !1), a === void 0 ? o = void 0 : (o = new a(r), o._$AT(r, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = o : t._$Cl = o), o !== void 0 && (e = j(r, o._$AS(r, e.values), o, i)), e;
}
let k2 = class {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? R).importNode(t, !0);
    P.currentNode = o;
    let a = P.nextNode(), l = 0, s = 0, n = i[0];
    for (; n !== void 0; ) {
      if (l === n.index) {
        let d;
        n.type === 2 ? d = new Z(a, a.nextSibling, this, e) : n.type === 1 ? d = new n.ctor(a, n.name, n.strings, this, e) : n.type === 6 && (d = new C2(a, this, e)), this._$AV.push(d), n = i[++s];
      }
      l !== (n == null ? void 0 : n.index) && (a = P.nextNode(), l++);
    }
    return P.currentNode = R, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
};
class Z {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = j(this, e, t), J(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== D && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : b2(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && J(this._$AH) ? this._$AA.nextSibling.data = e : this.T(R.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var a;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = g0.createElement(D0(i.h, i.h[0]), this.options)), i);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === o) this._$AH.p(t);
    else {
      const l = new k2(o, this), s = l.u(this.options);
      l.p(t), this.T(s), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = S0.get(e.strings);
    return t === void 0 && S0.set(e.strings, t = new g0(e)), t;
  }
  k(e) {
    b0(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const a of e) o === t.length ? t.push(i = new Z(this.O(X()), this.O(X()), this, this.options)) : i = t[o], i._$AI(a), o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
let n0 = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, o, a) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = a, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = C;
  }
  _$AI(e, t = this, i, o) {
    const a = this.strings;
    let l = !1;
    if (a === void 0) e = j(this, e, t, 0), l = !J(e) || e !== this._$AH && e !== D, l && (this._$AH = e);
    else {
      const s = e;
      let n, d;
      for (e = a[0], n = 0; n < a.length - 1; n++) d = j(this, s[i + n], t, n), d === D && (d = this._$AH[n]), l || (l = !J(d) || d !== this._$AH[n]), d === C ? e = C : e !== C && (e += (d ?? "") + a[n + 1]), this._$AH[n] = d;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
};
class y2 extends n0 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
let z2 = class extends n0 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}, _2 = class extends n0 {
  constructor(e, t, i, o, a) {
    super(e, t, i, o, a), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = j(this, e, t, 0) ?? C) === D) return;
    const i = this._$AH, o = e === C && i !== C || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, a = e !== C && (i === C || o);
    o && this.element.removeEventListener(this.name, this, i), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, C2 = class {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    j(this, e);
  }
};
const c0 = Y.litHtmlPolyfillSupport;
c0 == null || c0(g0, Z), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.3.1");
const A2 = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const a = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new Z(e.insertBefore(X(), a), a, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis;
class F extends T {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = A2(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return D;
  }
}
var H0;
F._$litElement$ = !0, F.finalized = !0, (H0 = H.litElementHydrateSupport) == null || H0.call(H, { LitElement: F });
const d0 = H.litElementPolyfillSupport;
d0 == null || d0({ LitElement: F });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.1");
const $2 = `
/* Minimal subset of driver.js CSS */
.driver-popover {
  all: unset;
  box-sizing: border-box;
  color: #2d2d2d;
  margin: 0;
  padding: 15px;
  border-radius: 5px;
  min-width: 250px;
  max-width: 300px;
  box-shadow: 0 1px 10px #0006;
  z-index: 1000000000;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
}
.driver-fade .driver-popover {
  animation: animate-fade-in 0.2s;
}
.driver-fade .driver-overlay {
  animation: animate-fade-in 0.2s ease-in-out;
}
.driver-overlay path {
  shape-rendering: crispEdges;
}
.driver-active .driver-overlay,
.driver-active * {
  pointer-events: none;
}
.driver-popover-arrow-side-top.driver-popover-arrow-align-start,
.driver-popover-arrow-side-bottom.driver-popover-arrow-align-start {
  left: 15px;
}
.driver-active .driver-active-element,
.driver-active .driver-active-element *,
.driver-popover,
.driver-popover * {
  pointer-events: auto;
}
.driver-popover-arrow {
  content: "";
  position: absolute;
  border: 5px solid #fff;
}
.driver-popover-arrow-side-bottom {
  bottom: 100%;
  border-left-color: transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  transform: translateY(1px);
}
.driver-popover-arrow-side-top {
  top: 100%;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-right-color: transparent;
  transform: translateY(-1px);
}

/* Custom */
.driver-popover-close-btn {
  z-index: 1;
  outline: none !important;
}
.driver-popover-description {
  margin-top: 1rem;
  font-size: .75rem;
  line-height: 1.5rem;
  letter-spacing: .0313rem;
}
.driver-popover footer {
  background: unset;
  min-block-size: unset;
  padding: unset;
  flex-direction: row;
}
.driver-popover footer > .driver-popover-progress-text {
  white-space: nowrap;
  align-items: center;
  margin-top: 0px !important;
  margin-right: 0px !important;
  font-size: .75rem;
}
.driver-popover nav {
  margin-block-start: 0px !important;
}
.driver-popover footer {
  margin-top: 16px;
  gap: 4px;
}
.driver-popover footer > nav {
  gap: 4px;
}
`, W0 = `@import"https://eox.at/fonts/inter/inter.css";@import"https://eox.at/fonts/materialdesignicons/materialdesignicons.min.css";:root{--size: 1rem;--font: Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", "Noto Sans", Arial, sans-serif;--font-icon: "Material Symbols Outlined";--speed1: .1s;--speed2: .2s;--speed3: .3s;--speed4: .4s;--active: rgb(128 128 128 / .192);--overlay: rgb(0 0 0 / .5);--elevate1: 0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2: 0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3: 0 .375rem .75rem 0 rgb(0 0 0 / .48);--top: env(safe-area-inset-top);--bottom: env(safe-area-inset-bottom);--left: env(safe-area-inset-left);--right: env(safe-area-inset-right)}html{font-size:var(--size)}body{color:var(--on-surface);background-color:var(--surface);overflow-x:hidden;font-family:var(--font);font-size:.875rem;line-height:1.5rem;letter-spacing:.0313rem}@media(pointer:fine){body ::-webkit-scrollbar,body ::-webkit-scrollbar-thumb,body ::-webkit-scrollbar-button{background:none;inline-size:.4rem;block-size:.4rem}body :is(:focus,:hover)::-webkit-scrollbar-thumb,body :has(:focus,:hover)::-webkit-scrollbar-thumb{background:var(--outline);border-radius:1rem}}@media(pointer:coarse){body:has(dialog[open],dialog.active),body:has(input[type=range]:focus){overflow:hidden}}:root,body.light{--primary: #6750a4;--on-primary: #ffffff;--primary-container: #e9ddff;--on-primary-container: #22005d;--secondary: #625b71;--on-secondary: #ffffff;--secondary-container: #e8def8;--on-secondary-container: #1e192b;--tertiary: #7e5260;--on-tertiary: #ffffff;--tertiary-container: #ffd9e3;--on-tertiary-container: #31101d;--error: #ba1a1a;--on-error: #ffffff;--error-container: #ffdad6;--on-error-container: #410002;--background: #fffbff;--on-background: #1c1b1e;--surface: #fdf8fd;--on-surface: #1c1b1e;--surface-variant: #e7e0eb;--on-surface-variant: #49454e;--outline: #7a757f;--outline-variant: #cac4cf;--shadow: #000000;--scrim: #000000;--inverse-surface: #313033;--inverse-on-surface: #f4eff4;--inverse-primary: #cfbcff;--surface-dim: #ddd8dd;--surface-bright: #fdf8fd;--surface-container-lowest: #ffffff;--surface-container-low: #f7f2f7;--surface-container: #f2ecf1;--surface-container-high: #ece7eb;--surface-container-highest: #e6e1e6}body.dark{--primary: #cfbcff;--on-primary: #381e72;--primary-container: #4f378a;--on-primary-container: #e9ddff;--secondary: #cbc2db;--on-secondary: #332d41;--secondary-container: #4a4458;--on-secondary-container: #e8def8;--tertiary: #efb8c8;--on-tertiary: #4a2532;--tertiary-container: #633b48;--on-tertiary-container: #ffd9e3;--error: #ffb4ab;--on-error: #690005;--error-container: #93000a;--on-error-container: #ffb4ab;--background: #1c1b1e;--on-background: #e6e1e6;--surface: #141316;--on-surface: #e6e1e6;--surface-variant: #49454e;--on-surface-variant: #cac4cf;--outline: #948f99;--outline-variant: #49454e;--shadow: #000000;--scrim: #000000;--inverse-surface: #e6e1e6;--inverse-on-surface: #313033;--inverse-primary: #6750a4;--surface-dim: #141316;--surface-bright: #3a383c;--surface-container-lowest: #0f0e11;--surface-container-low: #1c1b1e;--surface-container: #201f22;--surface-container-high: #2b292d;--surface-container-highest: #363438}@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;font-display:swap;src:url(/material-symbols-outlined.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@4.0.16/dist/cdn/material-symbols-outlined.woff2) format("woff2")}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:400;font-display:swap;src:url(/material-symbols-rounded.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@4.0.16/dist/cdn/material-symbols-rounded.woff2) format("woff2")}@font-face{font-family:Material Symbols Sharp;font-style:normal;font-weight:400;font-display:swap;src:url(/material-symbols-sharp.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@4.0.16/dist/cdn/material-symbols-sharp.woff2) format("woff2")}@font-face{font-family:Material Symbols Subset;font-style:normal;font-weight:400;font-display:swap;src:url(/material-symbols-subset.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@4.0.16/dist/cdn/material-symbols-subset.woff2) format("woff2")}*{-webkit-tap-highlight-color:transparent;position:relative;vertical-align:middle;color:inherit;margin:0;padding:0;border-radius:inherit;box-sizing:border-box}*:after,*:before{all:unset}label{font-size:.75rem;vertical-align:baseline}a,b,i,span,strong,em,code{vertical-align:baseline}a,button,.button{cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;border:none;font-family:inherit;outline:inherit;justify-content:center}:is(nav,.tabs,.field)>a,button,.button,.chip,i,label{-webkit-user-select:none;user-select:none}:not(.grid,nav,.row)>:not(progress.max)+:is(address,article,blockquote,code,.field,fieldset,form,.grid,h1,h2,h3,h4,h5,h6,nav,ol,p,pre,.row,section,aside,table,.tabs,ul):not([class*=margin],.right,.left,.top,.bottom){margin-block-start:1rem}:has(>[class*=margin]){padding:.1px}:is(a,button,.button,.chip,summary):focus-visible{outline:.125rem solid var(--primary);outline-offset:.25rem}:is(nav,.row,li).group>:focus-visible{z-index:1}:is(button,.button,.chip)>:is(span,i,img,svg){pointer-events:none}div:is(:not([class]),[class=active]):has(>:not(.responsive)~:is(menu,.tooltip,input)){display:inline-flex}.middle-align{display:flex;align-items:center!important}.bottom-align{display:flex;align-items:flex-end!important}.top-align{display:flex;align-items:flex-start!important}.left-align{text-align:start;justify-content:flex-start!important}.right-align{text-align:end;justify-content:flex-end!important}.center-align{text-align:center;justify-content:center!important}[class*=blur],[class*=blur].light{--_blur: 1rem;-webkit-backdrop-filter:blur(var(--_blur));backdrop-filter:blur(var(--_blur));color:var(--on-surface);background-color:#ffffff80!important}.dark [class*=blur],[class*=blur].dark{background-color:#00000080!important}.small-blur{--_blur: .5rem}.large-blur{--_blur: 1.5rem}.horizontal{display:inline-flex;flex-direction:row!important;gap:1rem;inline-size:auto!important;max-inline-size:none!important}.horizontal>*{margin-block:0!important}.vertical{display:flex;flex-direction:column!important}:is(a,button,.button,.chip).vertical{display:inline-flex;gap:.25rem;block-size:auto!important;max-block-size:none!important;padding-block:.5rem}.vertical>*{margin-inline:0!important}.no-elevate{box-shadow:none!important}.small-elevate,.elevate{box-shadow:var(--elevate1)!important}.medium-elevate{box-shadow:var(--elevate2)!important}.large-elevate{box-shadow:var(--elevate3)!important}.round,[class*=-round]{--_round: 2rem;border-radius:var(--_round)!important}.small-round{--_round: .5rem}.large-round{--_round: 3.5rem}.no-round,.square,.top-round,.bottom-round,.left-round,.right-round{border-radius:.5rem!important}.top-round{border-start-start-radius:var(--_round)!important;border-start-end-radius:var(--_round)!important}.bottom-round{border-end-end-radius:var(--_round)!important;border-end-start-radius:var(--_round)!important}.left-round{border-start-start-radius:var(--_round)!important;border-end-start-radius:var(--_round)!important}.right-round{border-start-end-radius:var(--_round)!important;border-end-end-radius:var(--_round)!important}.circle:not(.extend){border-radius:50%}:is(.circle,.square):is(button,.button,.chip){padding:0;block-size:var(--_size);inline-size:var(--_size)}:is(.circle,.square)>span:not([class]){display:none}:is(.circle,.square).round{border-radius:1rem!important}.border:not(table,.field,.list,menu,article){box-sizing:border-box;border:.0625rem solid var(--outline);background-color:transparent;box-shadow:none}.no-border{border-color:transparent!important}.margin,[class*=-margin]:not(.left-margin,.right-margin,.top-margin,.bottom-margin,.horizontal-margin,.vertical-margin){margin:var(--_margin)!important}.margin,[class*=-margin]{--_margin: 1rem}.no-margin{--_margin: 0}.auto-margin{--_margin: auto}.tiny-margin{--_margin: .25rem}.small-margin{--_margin: .5rem}.large-margin{--_margin: 1.5rem}.left-margin,.horizontal-margin{margin-inline-start:var(--_margin)!important}.right-margin,.horizontal-margin{margin-inline-end:var(--_margin)!important}.top-margin,.vertical-margin{margin-block-start:var(--_margin)!important}.bottom-margin,.vertical-margin{margin-block-end:var(--_margin)!important}.no-opacity{opacity:1!important}.opacity{opacity:0!important}.small-opacity{opacity:.75!important}.medium-opacity{opacity:.5!important}.large-opacity{opacity:.25!important}.padding,[class*=-padding]:not(.left-padding,.right-padding,.top-padding,.bottom-padding,.horizontal-padding,.vertical-padding){padding:var(--_padding)!important}.padding,[class*=-padding]{--_padding: 1rem}.no-padding{--_padding: 0 !important}.tiny-padding{--_padding: .25rem !important}.small-padding{--_padding: .5rem !important}.large-padding{--_padding: 1.5rem !important}.left-padding,.horizontal-padding{padding-inline-start:var(--_padding)!important}.right-padding,.horizontal-padding{padding-inline-end:var(--_padding)!important}.top-padding,.vertical-padding{padding-block-start:var(--_padding)!important}.bottom-padding,.vertical-padding{padding-block-end:var(--_padding)!important}.front{z-index:10!important}.back{z-index:-10!important}.left{inset-inline-start:0}.right{inset-inline-end:0}.top{inset-block-start:0}.bottom{inset-block-end:0}.center{inset-inline-start:50%;transform:translate(-50%)}[dir=rtl] .center{transform:translate(50%)}.middle{inset-block-start:50%;transform:translateY(-50%)}.middle.center{transform:translate(-50%,-50%)}[dir=rtl] .middle.center{transform:translate(50%,-50%)}.ripple{--_duration: .6s}.fast-ripple{--_duration: .2s}.slow-ripple{--_duration: 1.8s}.ripple-js{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;overflow:hidden}.ripple-js>div{position:absolute;border-radius:50%;background:currentColor;opacity:.3;transform:scale(0);animation:to-ripple var(--_duration) linear}@keyframes to-ripple{to{transform:scale(4);opacity:0}}.scroll{overflow:auto}.no-scroll{overflow:hidden}.shadow{background-color:#00000050}:is(.left-shadow,.right-shadow,.top-shadow,.bottom-shadow){background-color:transparent!important}.left-shadow{background-image:linear-gradient(to right,black,transparent)!important}.right-shadow{background-image:linear-gradient(to left,black,transparent)!important}.bottom-shadow{background-image:linear-gradient(to top,black,transparent)!important}.top-shadow{background-image:linear-gradient(to bottom,black,transparent)!important}[class*=-width]{max-inline-size:100%}.auto-width{inline-size:auto}.small-width{inline-size:12rem!important}.medium-width{inline-size:24rem!important}.large-width{inline-size:36rem!important}.auto-height{block-size:auto}.small-height{block-size:12rem!important}.medium-height{block-size:24rem!important}.large-height{block-size:36rem!important}.wrap{display:block;white-space:normal}.no-wrap:not(menu){display:flex;white-space:nowrap}.tiny-space:not(nav,.row,.grid,table,.tooltip,.list,menu,.shape){block-size:.5rem}:is(.space,.small-space):not(nav,.row,.grid,table,.tooltip,.list,menu,.shape){block-size:1rem}.medium-space:not(nav,.row,.grid,table,.tooltip,.list,menu,.shape){block-size:2rem}.large-space:not(nav,.row,.grid,table,.tooltip,.list,menu,.shape){block-size:3rem}.extra-space:not(nav,.row,.grid,table,.tooltip,.list,menu,.shape){block-size:4rem}.responsive{inline-size:-webkit-fill-available;inline-size:-moz-available}@media only screen and (max-width:600px){:is(.m,.l):not(.s){display:none!important}}@media only screen and (min-width:601px)and (max-width:992px){:is(.s,.l):not(.m){display:none!important}}@media only screen and (min-width:993px){:is(.m,.s):not(.l){display:none!important}}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{font-weight:400;display:block;align-items:center;line-height:normal}h1,.h1{font-size:3.5625rem}h2,.h2{font-size:2.8125rem}h3,.h3{font-size:2.25rem}h4,.h4{font-size:2rem}h5,.h5{font-size:1.75rem}h6,.h6{font-size:1.5rem}:is(h1,.h1).small{font-size:3.0625rem}:is(h2,.h2).small{font-size:2.3125rem}:is(h3,.h3).small{font-size:1.75rem}:is(h4,.h4).small{font-size:1.5rem}:is(h5,.h5).small{font-size:1.25rem}:is(h6,.h6).small{font-size:1rem}:is(h1,.h1).large{font-size:4.0625rem}:is(h2,.h2).large{font-size:3.3125rem}:is(h3,.h3).large{font-size:2.75rem}:is(h4,.h4).large{font-size:2.5rem}:is(h5,.h5).large{font-size:2.25rem}:is(h6,.h6).large{font-size:2rem}.link{color:var(--primary)!important}.inverse-link{color:var(--inverse-primary)!important}.truncate{overflow:hidden;white-space:nowrap!important;text-overflow:ellipsis;flex:inherit}.truncate>*{white-space:nowrap!important}.small-text{font-size:.75rem}.medium-text{font-size:.875rem}.large-text{font-size:1rem}.upper{text-transform:uppercase}.lower{text-transform:lowercase}.capitalize{text-transform:capitalize}.bold{font-weight:700}.overline{text-decoration:line-through}.underline{text-decoration:underline}.italic{font-style:italic}p{margin:.5rem 0}.no-line{line-height:normal}.tiny-line{line-height:1.25rem}.small-line{line-height:1.5rem}.medium-line{line-height:1.75rem}.large-line{line-height:2rem}.extra-line{line-height:2.25rem}pre{border-radius:0;background-color:var(--surface-container);white-space:pre-wrap;padding:1rem;border-inline-start:.25rem solid var(--primary);font-family:inherit}blockquote{border-radius:0;padding:1rem;border-inline-start:.25rem solid var(--primary);font-family:inherit}code{border-radius:0;background-color:var(--surface-container);white-space:pre-wrap;padding:.25rem}pre>code,blockquote>code{padding:0}.scroll>code{white-space:pre}pre:has(>code){direction:ltr;text-align:start}sub{vertical-align:sub}sup{vertical-align:super}:is(.wave,.chip,.button,button,nav.tabbed>a,.tabs>a,nav.toolbar>a):not(.slow-ripple,.ripple,.fast-ripple):after,nav:is(.left,.right,.bottom,.top).max>a:after,nav:is(.left,.right,.bottom,.top).max>:is(ol,ul)>li>a:after,nav:is(.left,.right,.bottom,.top):not(.max)>a>i:after,nav:is(.left,.right,.bottom,.top):not(.max)>:is(ol,ul)>li>a>i:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;inline-size:100%;block-size:100%;background-position:center;background-image:radial-gradient(circle,currentColor 1%,transparent 1%);opacity:0;transition:none;pointer-events:none}:is(.wave,.chip,.button,button,nav.tabbed>a,.tabs>a,nav.toolbar>a):not(.slow-ripple,.ripple,.fast-ripple):is(:focus-visible,:hover):after,nav:is(.left,.right,.bottom,.top).max>a:not(.button,.chip):is(:focus-visible,:hover):after,nav:is(.left,.right,.bottom,.top).max>:is(ol,ul)>li>a:not(.button,.chip):is(:focus-visible,:hover):after,nav:is(.left,.right,.bottom,.top):not(.max)>a:not(.button,.chip):is(:focus-visible,:hover)>i:after,nav:is(.left,.right,.bottom,.top):not(.max)>:is(ol,ul)>li>a:not(.button,.chip):is(:focus-visible,:hover)>i:after{background-size:22500%;opacity:.1;transition:background-size var(--speed2) linear}:is(.wave,.chip,.button,button,nav.tabbed>a,.tabs>a,nav.toolbar>a,nav.max>a):not(.slow-ripple,.ripple,.fast-ripple):active:after,nav:is(.left,.right,.bottom,.top).max>a:active:after,nav:is(.left,.right,.bottom,.top).max>:is(ol,ul)>li>a:active:after,nav:is(.left,.right,.bottom,.top):not(.max)>a:active>i:after,nav:is(.left,.right,.bottom,.top):not(.max)>:is(ol,ul)>li>a:active>i:after{background-size:0%;opacity:0;transition:none}.no-wave:after,.no-wave:is(:hover,:active):after{display:none}.zoom,.tiny-zoom{zoom:2}.small-zoom{zoom:3}.medium-zoom{zoom:4}.large-zoom{zoom:5}.extra-zoom{zoom:6}.badge{--_x: 0;--_y: -100%;display:inline-flex;align-items:center;justify-content:center;position:absolute;font-size:.6875rem;text-transform:none;z-index:2;padding:0 .25rem;min-block-size:1rem;min-inline-size:1rem;background-color:var(--error);color:var(--on-error);line-height:normal;border-radius:1rem;inset:50% auto auto 50%;transform:translate(var(--_x, 50%),var(--_y, -50%));font-family:var(--font)}.badge.top{--_y: -100%}.badge.bottom{--_y: 0}.badge.left{--_x: -100%}.badge.right{--_x: 0}.badge.border{border-color:var(--error);color:var(--error);background-color:var(--surface)}.badge:is(.circle,.square){text-align:center;inline-size:auto;block-size:auto;padding:0 .25rem;border-radius:1rem}.badge.square{border-radius:0}.badge.min>*{display:none}.badge.min{clip-path:circle(18.75% at 50% 50%)}nav:is(.left,.right,.top,.bottom)>a>.badge,nav:is(.left,.right,.top,.bottom)>:is(ol,ul)>li>a>.badge{inset:1rem auto auto 50%}.badge.none{inset:auto!important;transform:none;position:relative;margin:0 .125rem}header,footer{display:grid;align-content:center;border-radius:0;padding:0 1rem}:is(dialog,article)>:is(header,footer){padding-inline:0;top:0;right:0;bottom:0;left:0}header{min-block-size:4rem}footer{min-block-size:5rem}:is(header,footer,menu>*).fixed{position:sticky;top:0;right:0;bottom:0;left:0;z-index:11;background-color:inherit}header.fixed{inset:calc(-1 * var(--_padding, 0)) 0 0 0;margin-block-start:calc(-1 * var(--_padding, 0))}footer.fixed{inset:0 0 calc(-1 * var(--_padding, 0)) 0;margin-block-end:calc(-1 * var(--_padding, 0))}:is(header,footer).fixed.min{margin-inline:auto}dialog>:is(header,footer){background:none}dialog>:is(header,footer).fixed{background-color:inherit}:is(main,header,footer,section).responsive{max-inline-size:min(100vw,75rem);margin:0 auto}:is(main,header,footer,section).responsive.max{max-inline-size:none}:has(>main)>:is(header,footer).fixed{transform:none;box-sizing:content-box;position:sticky;top:0;right:0;bottom:0;left:0;z-index:12}:has(>main)>header{padding-block-start:var(--top, 0)}:has(>main)>footer{padding-block-end:var(--bottom, 0)}nav.top~header,nav.bottom~footer{padding-block:0}nav.top~header.fixed{inset-block:calc(var(--top, 0) + 4.5rem) 0}nav.bottom~footer.fixed{inset-block:0 calc(var(--bottom, 0) + 4.5rem)}:is(nav,.row)>header{background-color:inherit}.button,button{--_padding: 1rem;--_size: 2.5rem;box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:var(--_size);font-size:.875rem;font-weight:500;color:var(--on-primary);padding:0 var(--_padding);background-color:var(--primary);border-radius:var(--_size);transition:transform var(--speed3),border-radius var(--speed2),padding var(--speed3);-webkit-user-select:none;user-select:none;gap:.5rem;line-height:normal}:is(button,.button).small{--_size: 2rem;--_padding: .75rem}:is(button,.button).large{--_size: 3rem;--_padding: 1.25rem}:is(.button,button):is(.extra,.extend){--_size: 3.5rem;font-size:1rem;--_padding: 1.5rem}:is(button,.button):is(.square,.circle){--_padding: 0}:is(button,.button).border{border-color:var(--outline-variant);color:var(--primary)}.extend>span:not([class]){display:none}.extend:is(:hover,.active){inline-size:auto;--_padding: 1.5rem;padding:0 var(--_padding)}.extend:is(:hover,.active)>i+span{display:inherit;margin-inline-start:var(--_padding)}.extend:is(:hover,.active)>:is(img,svg)+span{display:inherit;margin-inline-start:calc(1rem + var(--_padding, 0))}:is(.button,button)[disabled]{opacity:.5;cursor:not-allowed}.button[disabled]{pointer-events:none}:is(.button,button)[disabled]:before,:is(.button,button)[disabled]:after{display:none}:is(.button,button):not(.chip,.extend).fill{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}:is(.button,button):not(.chip,.extend).active{background-color:var(--primary-container);color:var(--on-primary-container)}:is(.button,button):not(.chip,.extend).fill.active{background-color:var(--secondary)!important;color:var(--on-secondary)!important}:is(.button,button):not(.chip,.extend).border.active{background-color:var(--inverse-surface)!important;color:var(--inverse-on-surface)!important;border-color:var(--inverse-surface)!important}:is(.button,button):not(.chip):active,:is(.button,button):not(.chip).active{border-radius:.5rem!important}article{--_padding: 1rem;box-shadow:var(--elevate1);background-color:var(--surface-container-low);color:var(--on-surface);padding:var(--_padding);border-radius:.75rem;display:block;transition:transform var(--speed3),border-radius var(--speed3),padding var(--speed3)}article.small{block-size:12rem}article.medium{block-size:20rem}article.large{block-size:32rem}article.border{box-shadow:none;border:.0625rem solid var(--outline-variant)}.chip{--_padding: .75rem;--_size: 2rem;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;block-size:var(--_size);min-inline-size:var(--_size);font-size:.875rem;font-weight:500;background-color:transparent;border:.0625rem solid var(--outline-variant);color:var(--on-surface-variant);padding:0 var(--_padding);text-transform:none;border-radius:.5rem;transition:transform var(--speed3),border-radius var(--speed3),padding var(--speed3);-webkit-user-select:none;user-select:none;gap:.5rem;line-height:normal;letter-spacing:normal}.chip.medium{--_size: 2.5rem;--_padding: 1rem}.chip.large{--_padding: 1.25rem;--_size: 3rem}.chip.fill{border:none}dialog{--_padding: 1.5rem;--_top: calc(var(--_padding, 0) + var(--top, 0));--_bottom: calc(var(--_padding, 0) + var(--bottom, 0));display:block;visibility:hidden;border:none;opacity:0;position:fixed;box-shadow:var(--elevate2);color:var(--on-surface);background-color:var(--surface-container-high);padding:var(--_padding);z-index:100;inset:10% auto auto 50%;min-inline-size:20rem;max-inline-size:100%;max-block-size:80%;overflow-x:hidden;overflow-y:auto;transition:all var(--speed3),0s background-color;border-radius:1.75rem;transform:translate(-50%,-4rem);outline:none}dialog.small{inline-size:25%;block-size:25%}dialog.medium{inline-size:50%;block-size:50%}dialog.large{inline-size:75%;block-size:75%}dialog:is(.active,[open]){visibility:visible;opacity:1;transform:translate(-50%)}dialog:popover-open{visibility:visible;opacity:1;transform:translate(-50%)}dialog:is(.top,.right,.bottom,.left,.max){--_padding: 1rem}dialog:is(.top,.bottom){opacity:1;block-size:auto;inline-size:100%;min-inline-size:auto;max-block-size:100%}dialog.top{inset:0 auto auto 0;transform:translateY(-100%);border-radius:0 0 1rem 1rem;padding-block-start:var(--_top)}dialog.bottom{inset:auto auto 0 0;transform:translateY(100%);border-radius:1rem 1rem 0 0;padding-block-end:var(--_bottom)}dialog:is(.left,.right){opacity:1;inset:0 auto auto 0;inline-size:auto;block-size:100%;max-block-size:100%;background-color:var(--surface);padding-block:var(--_top) var(--_bottom)}[dir=rtl] dialog.right,dialog.left{inset:0 auto auto 0;border-radius:0 1rem 1rem 0;transform:translate(-100%)}[dir=rtl] dialog.left,dialog.right{inset:0 0 auto auto;border-radius:1rem 0 0 1rem;transform:translate(100%)}dialog.max{inset:0 auto auto 0;inline-size:100%;block-size:100%;max-inline-size:100%;max-block-size:100%;transform:translateY(4rem);background-color:var(--surface);border-radius:0;padding-block:var(--_top) var(--_bottom)}dialog:is(.active,[open]):is(.left,.right,.top,.bottom,.max){transform:translate(0)}dialog:popover-open:is(.left,.right,.top,.bottom,.max){transform:translate(0)}dialog.small:is(.left,.right){inline-size:20rem}dialog.medium:is(.left,.right){inline-size:32rem}dialog.large:is(.left,.right){inline-size:44rem}dialog.small:is(.top,.bottom){block-size:16rem}dialog.medium:is(.top,.bottom){block-size:24rem}dialog.large:is(.top,.bottom){block-size:32rem}hr,[class*=divider]{all:unset;inline-size:-webkit-fill-available;min-block-size:auto;block-size:.0625rem;background-color:var(--outline-variant);display:block}hr+*,[class*=divider]+*{margin:0!important}hr.medium,.medium-divider{margin:1rem 0!important}hr.large,.large-divider{margin:1.5rem 0!important}hr.small,.small-divider{margin:.5rem 0!important}li:has(>:is(hr,.divider)){padding:0!important;align-self:normal!important;min-inline-size:auto!important;min-block-size:auto!important;inline-size:-webkit-fill-available;background:none!important}:is(hr,.divider).vertical,li:has(>:is(hr,.divider).vertical){padding:0!important;align-self:center!important;min-inline-size:auto;min-block-size:1.5rem;inline-size:.0625rem}summary{list-style-type:none;cursor:pointer}summary::-webkit-details-marker{display:none}summary>*{pointer-events:none;margin:0}li>details>summary+.list{margin:0!important}.field{--_input: 3rem;--_start: 1.2rem;--_middle: calc(var(--_input, 0) / 2);border-radius:.25rem .25rem 0 0;min-block-size:var(--_input);display:flex;flex-direction:column}.field.fill{--_background: var(--surface-variant);background-color:unset!important;color:unset!important}.field.fill>:is(input,select,textarea){background-color:var(--_background);z-index:0}.field.small{--_input: 2.5rem;--_start: 1rem}.field.large{--_input: 3.5rem;--_start: 1.4rem}.field.extra{--_input: 4rem;--_start: 1.6rem}.field.border{border-radius:.25rem}.field[class*=round].small{border-radius:1.25rem}.field[class*=round]{border-radius:1.5rem}.field[class*=round].large{border-radius:1.75rem}.field[class*=round].extra{border-radius:2rem}.field>:is(i,img,svg,progress.circle,a){position:absolute;inset:calc((var(--_input, 0) / 2) - .75rem) auto auto auto;cursor:pointer;z-index:10;inline-size:1.5rem;block-size:1.5rem;margin:auto 0;pointer-events:none}.field>:is(a,.front){pointer-events:all!important}.field>a>:is(i,img,svg,progress.circle,a){inline-size:1.5rem;block-size:1.5rem}.field>:is(i,img,svg,progress.circle,a),[dir=rtl] .field>:is(i,img,svg,progress.circle,a):first-child{inset:calc(var(--_middle, 0) - .75rem) 1rem auto auto}.field>:is(i,img,svg,progress.circle,a):first-child,[dir=rtl] .field>:is(i,img,svg,progress.circle,a){inset:calc(var(--_middle, 0) - .75rem) auto auto 1rem}.field.invalid>i{color:var(--error)}.field>progress.circle{border-width:.1875rem}.field>:is(input,textarea,select){all:unset;position:relative;display:flex;align-items:center;box-sizing:border-box;border-radius:inherit;border:.0625rem solid transparent;padding:0 .9375rem;font-family:inherit;font-size:1rem;min-block-size:var(--_input);outline:none;z-index:1;background:none;resize:none;text-align:start;cursor:text}input::-webkit-date-and-time-value{text-align:start}:is(input,select,textarea):is(:-webkit-autofill,:autofill){-webkit-background-clip:text;-webkit-text-fill-color:var(--on-surface)}.field>:is(input,textarea,select):focus{border:.125rem solid transparent;padding-inline:.875rem}.field>textarea:not([rows]){field-sizing:content;max-block-size:12rem}input[type=file],input[type=color],:not(.field)>input:is([type^=date],[type^=time],[type=month],[type=week]),input::-webkit-calendar-picker-indicator{opacity:0;position:absolute;top:0;right:0;bottom:0;left:0;inline-size:100%;block-size:100%;margin:0;padding:0;border:0;outline:0;z-index:2!important}@media(pointer:fine){.field>input::-webkit-calendar-picker-indicator{z-index:-1!important}}input::-webkit-search-decoration,input::-webkit-search-cancel-button,input::-webkit-search-results-button,input::-webkit-search-results-decoration,input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{display:none}input[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.field.border>:is(input,textarea,select){border-color:var(--outline)}.field.border>:is(input,textarea,select):focus{border-color:var(--primary)}.field[class*=round]>:is(input,textarea,select){padding-inline:1.4376rem}.field[class*=round]>:is(input,textarea,select):focus{padding-inline:1.375rem}.field.prefix>:is(input,textarea,select){padding-inline-start:2.9375rem}.field.prefix>.slider{margin-inline-start:3.5rem}.field.prefix>:is(input,textarea,select):focus{padding-inline-start:2.875rem}.field.suffix>:is(input,textarea,select){padding-inline-end:2.9375rem}.field.suffix>.slider{margin-inline-end:3.5rem}.field.suffix>:is(input,textarea,select):focus{padding-inline-end:2.875rem}.field:not(.border,[class*=round])>:is(input,textarea,select){border-block-end-color:var(--outline)}.field:not(.border,[class*=round])>:is(input,textarea,select):focus{border-block-end-color:var(--primary)}.field[class*=round]:not(.border,.fill)>:is(input,textarea,select),.field[class*=round]:not(.border)>:is(input,textarea,select):focus{box-shadow:var(--elevate1)}.field[class*=round]:not(.border,.fill)>:is(input,textarea,select):focus{box-shadow:var(--elevate2)}.field.invalid:not(.border,[class*=round])>:is(input,textarea,select),.field.invalid:not(.border,[class*=round])>:is(input,textarea,select):focus{border-block-end-color:var(--error)}.field.invalid.border>:is(input,textarea,select),.field.invalid.border>:is(input,textarea,select):focus{border-color:var(--error)}.field:has(>:disabled){opacity:.5;cursor:not-allowed}.field>:disabled{cursor:not-allowed}.field>select{-webkit-user-select:none;user-select:none}@-moz-document url-prefix(){.field>select:focus{background-color:var(--surface)}.field.fill>select:focus{background-color:var(--surface-variant)}.field>select:focus+label{z-index:1}}.field>select>option{background-color:var(--surface)}.field>:is(input,select){padding-block-start:1rem}.field:not(.label)>:is(input,select),.field.border:not(.fill)>:is(input,select){padding-block-start:0}.field>textarea{padding-block-start:var(--_start)!important}.field>textarea:focus{padding-block-start:calc(var(--_start, 0) - .01rem)!important}.field:not(.label)>textarea,.field.border:not(.fill)>textarea{padding-block-start:calc(var(--_start, 0) - .5rem)!important}.field:not(.label)>textarea:focus,.field.border:not(.fill)>textarea:focus{padding-block-start:calc(var(--_start, 0) - .51rem)!important}.field.label>label{--_start: 1rem;position:absolute;inset:-.5rem 1rem 0 var(--_start);display:flex;block-size:calc(var(--_input, 0) + 1rem);line-height:calc(var(--_input, 0) + 1rem);font-size:1rem;transition:all .2s;gap:.25rem;white-space:nowrap;pointer-events:none}[dir=rtl] .field.label>label{inset:-.5rem var(--_start) 0 1rem}.field.label[class*=round]>label{inset:-.5rem 1.75rem 0 var(--_start)}[dir=rtl] .field.labell[class*=round]>label{inset:-.5rem 1.75rem 0 var(--_start)}.field.label.border.prefix:not(.fill)>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){--_start: 1rem}.field.label[class*=round]>label,.field.label.border.prefix[class*=round]:not(.fill)>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){--_start: 1.5rem}.field.label.prefix>label{--_start: 3rem}.field.label>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){block-size:2.5rem;line-height:2.5rem;font-size:.75rem}.field.label.border:not(.fill)>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){block-size:1rem;line-height:1rem}.field.label.border:not(.fill)>label:after{content:"";display:block;margin:.5rem 0 0;border-block-start:.0625rem solid var(--outline);block-size:1rem;transition:none;flex:auto}.field.label.border:not(.fill)>:focus+label:after{border-block-start:.125rem solid var(--primary)}.field.label.border:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),.field.label.border:not(.fill)>select{clip-path:polygon(-2% -2%,.75rem -2%,.75rem .5rem,calc(100% - 1rem) .5rem,calc(100% - 1rem) -2%,102% -2%,102% 102%,-2% 102%)}[dir=rtl] .field.label.border:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),[dir=rtl] .field.label.border:not(.fill)>select{clip-path:polygon(-2% -2%,1rem -2%,1rem .5rem,calc(100% - .75rem) .5rem,calc(100% - .75rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.border[class*=round]:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),.field.label.border[class*=round]:not(.fill)>select{clip-path:polygon(-2% -2%,1.25rem -2%,1.25rem .5rem,calc(100% - 1.75rem) .5rem,calc(100% - 1.75rem) -2%,102% -2%,102% 102%,-2% 102%)}[dir=rtl] .field.label.border[class*=round]:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),[dir=rtl] .field.label.border[class*=round]:not(.fill)>select{clip-path:polygon(-2% -2%,1.75rem -2%,1.75rem .5rem,calc(100% - 1.25rem) .5rem,calc(100% - 1.25rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label>:focus+label{color:var(--primary)}.field.label.invalid>label,.field.label.invalid>label:after{color:var(--error)!important;border-color:var(--error)!important}.field.label>label>a{block-size:inherit;line-height:inherit;inline-size:1rem}.field.label>label>a>:is(i,img,svg){block-size:1rem;line-height:1rem;inline-size:1rem;font-size:1rem}.field>output{display:inline-block;font-size:.75rem;background:none!important;padding:.25rem 1rem;line-height:1.25rem;align-self:start}.field>output.invalid{color:var(--error)!important}.field[class*=round]>output{padding:.25rem 1.5rem}.field.invalid>output:not(.invalid),.field:not(.invalid)>output.invalid{display:none}.field.invalid>output.invalid~menu,.field:not(.invalid)>output:not(.invalid)~menu{inset:auto auto 1.75rem 0}table td>.field{margin:0}fieldset{border-radius:.25rem;padding:1rem;border:.0625rem solid var(--outline-variant)}fieldset>legend{margin:0 -.25rem;padding:0 .25rem}fieldset>legend+*{margin-block-start:0!important}.grid{--_gap: 1rem;display:grid;grid-template-columns:repeat(12,1fr);gap:var(--_gap);block-size:auto}.grid.no-space{--_gap: 0rem}.grid.medium-space{--_gap: 1.5rem}.grid.large-space{--_gap: 2rem}.grid>*{margin:0}.s1{grid-area:auto/span 1}.s2{grid-area:auto/span 2}.s3{grid-area:auto/span 3}.s4{grid-area:auto/span 4}.s5{grid-area:auto/span 5}.s6{grid-area:auto/span 6}.s7{grid-area:auto/span 7}.s8{grid-area:auto/span 8}.s9{grid-area:auto/span 9}.s10{grid-area:auto/span 10}.s11{grid-area:auto/span 11}.s12{grid-area:auto/span 12}@media only screen and (min-width:601px){.m1{grid-area:auto/span 1}.m2{grid-area:auto/span 2}.m3{grid-area:auto/span 3}.m4{grid-area:auto/span 4}.m5{grid-area:auto/span 5}.m6{grid-area:auto/span 6}.m7{grid-area:auto/span 7}.m8{grid-area:auto/span 8}.m9{grid-area:auto/span 9}.m10{grid-area:auto/span 10}.m11{grid-area:auto/span 11}.m12{grid-area:auto/span 12}}@media only screen and (min-width:993px){.l1{grid-area:auto/span 1}.l2{grid-area:auto/span 2}.l3{grid-area:auto/span 3}.l4{grid-area:auto/span 4}.l5{grid-area:auto/span 5}.l6{grid-area:auto/span 6}.l7{grid-area:auto/span 7}.l8{grid-area:auto/span 8}.l9{grid-area:auto/span 9}.l10{grid-area:auto/span 10}.l11{grid-area:auto/span 11}.l12{grid-area:auto/span 12}}i,:is(.checkbox,.radio,.switch)>span:before,:is(.checkbox,.radio,.switch)>span>i{--_size: 1.5rem;font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:var(--_size);letter-spacing:normal;text-transform:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:var(--_size);min-inline-size:var(--_size);block-size:var(--_size);min-block-size:var(--_size);box-sizing:content-box;line-height:normal;border-radius:0}i:has(.badge){overflow:unset}i.tiny{--_size: 1rem}.chip>i,i.small{--_size: 1.25rem}i.medium{--_size: 1.5rem}i.large{--_size: 1.75rem}i.extra{--_size: 2rem}i.fill,a.active>i,button.active>i{font-variation-settings:"FILL" 1}i>:is(img,svg){inline-size:100%;block-size:100%;background-size:100%;border-radius:inherit;position:absolute;inset:0 auto auto 0;padding:inherit}i[class*=fa-]{font-size:calc(var(--_size, 0) * .85);line-height:normal;block-size:auto;min-block-size:auto}.absolute{position:absolute}.fixed{position:fixed}:is(.absolute,.fixed).left.right{inline-size:auto}:is(.absolute,.fixed).left.right.small{block-size:20rem}:is(.absolute,.fixed).left.right.medium{block-size:28rem}:is(.absolute,.fixed).left.right.large{block-size:44rem}:is(.absolute,.fixed).top.bottom.small{inline-size:20rem}:is(.absolute,.fixed).top.bottom.medium{inline-size:28rem}:is(.absolute,.fixed).top.bottom.large{inline-size:44rem}.list{display:flex;flex-direction:column;padding:0;margin:0;flex:1}.list>li,.list>li>details>summary,.list>li>a:only-child{all:unset;box-sizing:border-box;position:relative;display:flex;align-items:center;align-self:normal;text-align:start;justify-content:flex-start;white-space:nowrap;gap:1rem;min-block-size:3.5rem;padding:.5rem 1rem;cursor:pointer;flex:1}.list>li:has(ul,ol,details[open],a:only-child){padding:0}.list>li>.list{padding:0 0 0 1rem}.list>li>*,.list>li>a:only-child>*{margin:0}.list>li>:is(details,.max),.list>li>a:only-child>.max,.list>li>details>summary>.max{flex:1}.list.border>li:not(:last-child):before,.list.border>li>details[open]>summary:before{content:"";position:absolute;background-color:var(--outline-variant);inset:auto 0 0 0;block-size:.0625rem;inline-size:auto}.list.no-space>li,.list.no-space>li>details>summary{min-block-size:2.5rem}.list.medium-space>li,.list.medium-space>li>details>summary{min-block-size:4.5rem}.list.large-space>li,.list.large-space>li>details>summary{min-block-size:5.5rem}.list>li:focus-visible,.list>li>a:only-child:focus-visible{outline:.125rem solid var(--primary);outline-offset:-.25rem}:has(>main){display:grid;grid-template-columns:auto minmax(0,1fr) auto;grid-template-rows:auto auto minmax(0,1fr) auto auto;grid-template-areas:"left top right" "left header right" "left main right" "left footer right" "left bottom right";min-block-size:100dvh;box-sizing:border-box;background-color:var(--surface)}nav.left{grid-area:left}nav.right{grid-area:right}nav.top{grid-area:top}nav.bottom{grid-area:bottom}header{grid-area:header}footer{grid-area:footer}main{--_padding: .5rem;grid-area:main;padding:var(--_padding);overflow:hidden}aside{z-index:1}aside:not(.fixed,.absolute).right{float:right}aside:not(.fixed,.absolute).left{float:left}svg{fill:currentcolor}:is(img,svg,video):is(.small,.medium,.large,.tiny,.extra,.round,.circle,.square,.responsive){--_size: 3rem;object-fit:cover;object-position:center;transition:transform var(--speed3),border-radius var(--speed3),padding var(--speed3);block-size:var(--_size);inline-size:var(--_size)}:is(img,svg,video).round{--_round: .5rem}:is(img,svg,video).tiny{--_size: 2rem}:is(img,svg,video).small{--_size: 2.5rem}:is(img,svg,video).large{--_size: 3.5rem}:is(img,svg,video).extra{--_size: 4rem}:is(img,svg,video).responsive{--_size: 100%;margin:0 auto}:is(img,svg,video).responsive.tiny{inline-size:100%;block-size:4rem}:is(img,svg,video).responsive.small{inline-size:100%;block-size:8rem}:is(img,svg,video).responsive.medium{inline-size:100%;block-size:12rem}:is(img,svg,video).responsive.large{inline-size:100%;block-size:16rem}:is(img,svg,video).responsive.extra{inline-size:100%;block-size:20rem}:is(img,svg,video).responsive.round{--_round: 2rem}:is(img,svg,video).empty-state{max-inline-size:100%;inline-size:24rem}:is(button,.button,.chip):not(.transparent)>.responsive{border:.25rem solid transparent}:is(button,.button,.chip,.field)>:is(img,svg):not(.responsive),.tabs :is(img,svg):not(.responsive){min-inline-size:1.5rem;max-inline-size:1.5rem;min-block-size:1.5rem;max-block-size:1.5rem}:is(button,.button,.chip):not(.extend)>.responsive:first-child{margin-inline-start:calc(-1 * var(--_padding, 0))}:is(button,.button,.chip):not(.extend)>.responsive:not(:first-child){margin-inline-end:calc(-1 * var(--_padding, 0))}:is(button,.button,.chip,.circle,.square,.extend)>.responsive{--_size: inherit;margin:0 auto}.extend>:is(.responsive,i){margin:0;position:absolute;inset-inline:1rem;z-index:1}.extend>.responsive{inset-inline:0;inline-size:3.5rem}.extend.border>.responsive{inline-size:3.375rem}menu{opacity:0;visibility:hidden;position:absolute;box-shadow:var(--elevate2);background-color:var(--surface-container);z-index:11;inset:auto auto 0 0;inline-size:100%;max-block-size:50vh;max-inline-size:none!important;overflow-x:hidden;overflow-y:auto;font-size:.875rem;font-weight:400;text-transform:none;color:var(--on-surface);line-height:normal;text-align:start;border-radius:1rem;transform:scale(.8) translateY(120%);transition:all var(--speed2) var(--speed2);justify-content:flex-start;padding:.25rem;display:flex;flex-direction:column;gap:.125rem}menu.no-space{gap:0}menu.small-space{gap:.25rem}menu.medium-space{gap:.375rem}menu.large-space{gap:.5rem}menu.extra-space{gap:.625rem}[dir=rtl] menu{inset:auto 0 0 auto}menu.no-wrap{inline-size:max-content!important;white-space:nowrap!important}menu.active,:not([data-ui]):focus-within>menu,menu>li:hover>menu,menu>li>menu:hover{opacity:1;visibility:visible;transform:scale(1) translateY(100%);transition:all var(--speed2),background-color 0s}menu.top.active,:not([data-ui]):focus-within>menu.top,menu>li:hover>menu.top,menu>li>menu.top:hover{transform:scale(1) translateY(-100%)}menu:is(.min,.max).active,:not([data-ui]):focus-within>menu:is(.min,.max){transform:scale(1)}menu *{white-space:inherit!important}menu>li,menu>li>a:only-child{all:unset;box-sizing:border-box;position:relative;display:flex;align-items:center;align-self:normal;text-align:start;justify-content:inherit;white-space:nowrap;gap:1rem;padding:.5rem 1rem;min-block-size:2.75rem;flex:1;margin:0!important;cursor:pointer;border-radius:.25rem;transition:border-radius var(--speed2)}menu>li:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}menu>li:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}menu>li:hover{background-color:color-mix(in srgb,currentColor 10%,transparent)}menu>li.active{background-color:var(--tertiary-container);color:var(--on-tertiary-container)}menu>li:is(.active,:active){border-radius:.75rem}menu>li>:is(.max,.field),menu>li>a:only-child>.max,menu>li:has(.field,a:only-child){flex:1;padding:0;margin:0}menu.min{inset:0 0 auto 0;transform:scale(.8)}[dir=rtl] menu.min.right,menu.min.left,menu.top.left{inset:0 0 auto auto}[dir=rtl] menu.min.left,menu.min.right,menu.top,menu.top.right{inset:0 auto auto 0}menu.max{position:fixed;top:0;right:0;bottom:0;left:0;block-size:100%;max-block-size:none;min-block-size:auto;z-index:100;transform:scale(.8);border-radius:0}menu.max>li{flex:none!important}menu.no-wrap:is(.min,.max){min-inline-size:16rem}[dir=rtl] menu.right,[dir=rtl] menu.top.min.right,menu.left,menu.top.min.left{inset:auto 0 0 auto}[dir=rtl] menu.left,[dir=rtl] menu.top.min.left,menu.right,menu.top.min{inset:auto auto 0 0}menu.top{transform:scale(.8) translateY(-120%)}menu:has(menu){--_child: 1;--_type: 0;overflow:unset;white-space:nowrap;inline-size:auto;min-inline-size:12rem;max-block-size:none}menu>li>:is(menu,menu.right),[dir=rtl] menu>li>menu.left{inset:auto auto calc(3rem * (var(--_child, 0) - var(--_type, 0))) 100%}[dir=rtl] menu>li>:is(menu,menu.right),menu>li>menu.left{inset:auto 100% calc(3rem * (var(--_child, 0) - var(--_type, 0))) auto}menu>li>:is(menu.top,menu.top.right),[dir=rtl] menu>li>menu.top.left{inset:calc(3rem * (var(--_child, 0) - var(--_type, 0))) auto auto 100%}[dir=rtl] menu>li>:is(menu.top,menu.top.right),menu>li>menu.top.left{inset:calc(3rem * (var(--_child, 0) - var(--_type, 0))) 100% auto auto}menu.group{padding:.5rem 0;inline-size:100%;min-inline-size:auto;max-block-size:none;overflow:unset;background:none;box-shadow:none}menu.group>li{box-shadow:none;padding:0;min-block-size:auto}menu.group>li:hover{background:none}menu.group>li>menu,menu.group>li>menu:hover{opacity:1;visibility:visible;position:relative;top:0;right:0;bottom:0;left:0;max-block-size:none;transform:none;transition:none;border-radius:1rem 1rem .5rem .5rem;z-index:auto;flex:1}menu.group>li:last-child>menu{border-radius:.5rem .5rem 1rem 1rem}menu>li:nth-last-child(2){--_child: 2}menu>li:nth-last-child(3){--_child: 3}menu>li:nth-last-child(4){--_child: 4}menu>li:nth-last-child(5){--_child: 5}menu>li:nth-last-child(6){--_child: 6}menu>li:nth-last-child(7){--_child: 7}menu>li:nth-last-child(8){--_child: 8}menu>li:nth-last-child(9){--_child: 9}menu>li:nth-last-child(10){--_child: 10}menu>li:nth-last-child(11){--_child: 11}menu>li:nth-last-of-type(2){--_type: 1}menu>li:nth-last-of-type(3){--_type: 2}menu>li:nth-last-of-type(4){--_type: 3}menu>li:nth-last-of-type(5){--_type: 4}menu>li:nth-last-of-type(6){--_type: 5}menu>li:nth-last-of-type(7){--_type: 6}menu>li:nth-last-of-type(8){--_type: 7}menu>li:nth-last-of-type(9){--_type: 8}menu>li:nth-last-of-type(10){--_type: 9}menu>li:nth-last-of-type(11){--_type: 10}@media(pointer:coarse){:not(menu,[data-ui]):hover>menu{opacity:1;visibility:visible;transform:scale(1) translateY(100%)}:not(menu,[data-ui]):hover>menu.top{transform:scale(1) translateY(-100%)}}nav>:is(ol,ul),nav>:is(ol,ul)>li{all:unset}nav,.row,a.row{display:flex;align-items:center;align-self:normal;text-align:start;justify-content:flex-start;white-space:nowrap;gap:1rem;border-radius:0}a.row,nav.row{min-block-size:3rem;margin:0}:is(nav,.row,.max)>:only-child,:is(nav,.row,.max)>span>*,nav>:is(ol,ul)>li>:only-child,nav>:is(ol,ul)>li>span>*{margin:0}:is(nav,.row)>:not(ul,ol,header,footer){margin:0;white-space:normal;flex:none}:is(nav,.row).min{display:inline-flex}:is(nav,.row,li).no-space{gap:0}:is(nav,.row,li).tiny-space{gap:.5rem}:is(nav,.row,li).medium-space{gap:1.5rem}:is(nav,.row,li).large-space{gap:2rem}:is(nav,.row)>.max,:is(nav,.row)>:is(ol,ul)>.max{flex:1}:is(nav,.row).wrap{display:flex;flex-wrap:wrap}:is(header,footer)>:is(nav,.row){min-block-size:inherit}nav:is(.left,.right,.top,.bottom){--_padding: .5rem;--_top: calc(var(--_padding, 0) + var(--top, 0));--_bottom: calc(var(--_padding, 0) + var(--bottom, 0));position:sticky;top:0;right:0;bottom:0;left:0;border:0;color:var(--on-surface);transform:none;z-index:100;text-align:center;padding:var(--_padding);margin:0}nav:is(.left,.right){justify-content:flex-start;flex-direction:column;background-color:var(--surface);block-size:100dvh;min-inline-size:6rem;padding-block:var(--_top) var(--_bottom)}nav:is(.top,.bottom){position:sticky;top:0;right:0;bottom:0;left:0;padding:.5rem;justify-content:center;flex-direction:row;background-color:var(--surface-container);block-size:auto;min-block-size:4.5rem}nav.top{block-size:calc(var(--top, 0) + 4.5rem);padding-block-start:var(--_top)}nav.bottom{block-size:calc(var(--bottom, 0) + 4.5rem);padding-block-end:var(--_bottom)}nav>header{min-block-size:auto;padding:0;margin:0 0 1rem;align-items:flex-start;gap:1rem;background:none!important}nav:is(.top,.bottom)>header{flex-direction:row;align-items:center;margin:0 1rem 0 0}nav>header>*{margin:0;transition:none}nav.max>header>*{transition:all var(--speed1)}nav>header>.extend:hover{--_padding: 0;inline-size:var(--_size)}nav>header>.extend:hover>span:not([class]){display:none}nav>:is(ol,ul){all:inherit;min-inline-size:auto;margin:0;padding:0;flex:auto}nav.max:is(.left,.right,.top,.bottom){gap:0;inline-size:auto;align-items:flex-start;min-inline-size:12.75rem;padding:var(--_top) 1.25rem var(--_bottom) 1.25rem}nav.max>:is(ol,ul){padding:0}nav.max>header{margin:0 0 1.25rem}nav.max:is(.top,.bottom)>header{margin:0 1.25rem 0 0}nav.max>header>.extend{--_padding: 1.5rem;inline-size:auto;padding:0 var(--_padding)}nav.max>header>.extend>span:not([class]){display:block;margin-inline-start:var(--_padding)}nav.max>header>.extend>:is(img,svg)+span{margin-inline-start:calc(1rem + var(--_padding, 0))}nav.max:is(.top,.bottom){padding:0 .5rem;align-items:center;min-inline-size:auto;max-inline-size:none}nav:is(.left,.right,.top,.bottom)>a:not(.button,.chip),nav:is(.left,.right,.top,.bottom)>:is(ol,ul)>li>a:not(.button,.chip){display:flex;flex-direction:column;gap:.25rem;line-height:normal;inline-size:3.5rem;font-size:.8rem}nav:not(.max):is(.left,.right,.top,.bottom)>a:not(.button,.chip)>i,nav:not(.max):is(.left,.right,.top,.bottom)>:is(ol,ul)>li>a:not(.button,.chip)>i{padding:.25rem 1rem;border-radius:2rem;margin:0 auto}nav.max:is(.left,.right,.top,.bottom)>a:not(.button,.chip),nav.max:is(.left,.right,.top,.bottom)>:is(ol,ul)>li>a:not(.button,.chip){flex-direction:row;gap:.5rem;inline-size:auto;block-size:3.5rem;padding:0 1rem;border-radius:2rem;font-size:inherit}nav:is(.left,.right,.top,.bottom)>a.active:not(.button,.chip),nav:is(.left,.right,.top,.bottom)>:is(ol,ul)>li>a.active:not(.button,.chip){transition:padding var(--speed1) linear}nav.max:is(.top,.bottom)>a:not(.button,.chip),nav.max:is(.top,.bottom)>:is(ol,ul)>li>a:not(.button,.chip){gap:.25rem;block-size:2.5rem;font-size:.8rem}nav.max:is(.left,.right,.top,.bottom)>a.active:not(.button,.chip),nav.max:is(.left,.right,.top,.bottom)>:is(ol,ul)>li>a.active:not(.button,.chip),nav:is(.left,.right,.top,.bottom):not(.max)>a.active:not(.button,.chip)>i,nav:is(.left,.right,.top,.bottom):not(.max)>:is(ol,ul)>li>a.active:not(.button,.chip)>i{background-color:var(--secondary-container);color:var(--on-secondary-container)}nav.vertical>:is(ol,ul){align-items:normal}:is(nav,.row):is(.left-align,.top-align,.vertical){justify-content:flex-start}:is(nav,.row):is(.right-align,.bottom-align){justify-content:flex-end}:is(nav,.row):is(.center-align,.middle-align){justify-content:center}:is(nav,.row):is(.left-align,.top-align,.vertical).vertical{align-items:flex-start}:is(nav,.row):is(.right-align,.bottom-align).vertical{align-items:flex-end}:is(nav,.row):is(.center-align,.middle-align).vertical{align-items:center}nav:not(.left,.right)>.space{inline-size:.5rem}nav:not(.left,.right)>.medium-space{inline-size:1rem}nav:not(.left,.right)>.large-space{inline-size:1.5rem}nav.tabbed{background-color:var(--surface-container);border-radius:4rem!important;gap:0rem;block-size:4rem}nav.tabbed.small{block-size:3rem}nav.tabbed.large{block-size:5rem}nav.tabbed>a{border-radius:inherit;block-size:inherit;display:inline-flex;align-items:center;padding-inline:1rem;gap:.5rem;font-size:1rem;flex:1}nav.tabbed>a.active{background-color:var(--primary-container)}nav.toolbar{display:inline-flex;justify-content:space-around;border-radius:2rem;background-color:var(--surface-container);color:var(--on-surface);padding:0 1rem;gap:.5rem;min-block-size:4rem;min-inline-size:4rem}nav.toolbar>a{display:inline-flex;gap:.5rem;min-inline-size:2.5rem;min-block-size:2.5rem;border-radius:1.75rem}nav.toolbar>a:has(>:not(i)){padding:0 1rem}nav.toolbar>a.active{background-color:var(--secondary-container);color:var(--on-secondary-container)}nav.toolbar.fill{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}nav.toolbar.fill>a.active{background-color:var(--surface-container)!important;color:var(--on-surface)!important}nav.toolbar.vertical{flex-direction:column!important;min-inline-size:4rem;padding:1rem 0;align-self:center;align-items:center!important}nav.toolbar.vertical>a{inline-size:2.5rem;block-size:2.5rem}nav.toolbar.vertical>a>:is(div,span):not(.badge,.tooltip){display:none}nav.toolbar.max{border-radius:0;display:flex}nav.group{background:none!important}nav.group:is(.connected,.split){gap:.125rem}nav.group:not(.split)>:is(.button,button):not(.border){background-color:var(--surface-container);color:var(--on-surface-container)}nav.group:not(.split)>:is(.button,button).active{background-color:var(--primary);color:var(--on-primary)}nav.group.connected>:is(.button,button):not(.border){background-color:var(--surface-container);color:var(--on-surface-container)}nav.group.connected>:is(.button,button).active{background-color:var(--secondary-container);color:var(--on-secondary-container)}nav.group:is(.connected,.split)>:is(.button,button).active,nav.split>:is(.button,button):active{border-radius:2rem!important}:not(nav)>:is(ul,ol){all:revert}:is(.scroll,.no-scroll,.no-space,.tabs,.tabbed)>:focus-visible{outline:.125rem solid var(--primary);outline-offset:-.125rem}nav.split>:is(.button,button):not(.chip,.fill,.border){background-color:var(--primary);color:var(--on-primary)}@media only screen and (max-width:600px){nav.top,nav.bottom{justify-content:space-around}}.overlay,dialog::backdrop{display:block!important;opacity:0;visibility:hidden;position:fixed;top:0;right:0;bottom:0;left:0;color:var(--on-surface);background-color:var(--overlay);z-index:100;transition:all var(--speed3),0s background-color;border-radius:0}.overlay.active{opacity:1;visibility:visible}dialog:popover-open::backdrop{opacity:1;visibility:visible}.overlay+dialog::backdrop,.snackbar::backdrop{display:none}[popover]{border:0}.page{--_transform: translate(0, 0);opacity:0;position:absolute;display:none}.page.active{opacity:1;position:inherit;display:inherit;animation:var(--speed4) to-page ease}.page.active.top{--_transform: translate(0, -4rem)}.page.active.bottom{--_transform: translate(0, 4rem)}.page.active.left{--_transform: translate(-4rem, 0)}.page.active.right{--_transform: translate(4rem, 0)}@keyframes to-page{0%{opacity:0;transform:var(--_transform)}to{opacity:1;transform:translate(0)}}progress{--_light: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4AWJiYGAQBgAAAP//ZyYa+wAAAAZJREFUAwAAIgAWeX9MsQAAAABJRU5ErkJggg==);--_dark: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4AWL6//+/FAAAAP//qSv5QwAAAAZJREFUAwAJIAMaJWjIvQAAAABJRU5ErkJggg==);--_size: .25rem;position:relative;inline-size:100%;block-size:var(--_size);color:var(--primary);background:var(--_light);border-radius:1rem;flex:none;border:none;overflow:hidden;writing-mode:horizontal-tb;direction:ltr;-webkit-appearance:none;-moz-appearance:none;appearance:none}.dark progress{background:var(--_dark)}progress.small{--_size: .25rem}progress.medium{--_size: .35rem}progress.large{--_size: .45rem}progress.indeterminate{--_value: 100;animation:3.2s to-indeterminate ease infinite}progress:not(.circle,[value]):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;inline-size:100%;block-size:100%;clip-path:none;background:currentcolor;animation:3.2s to-linear ease infinite}progress:not(.circle,[value])::-moz-progress-bar{animation:3.2s to-linear ease infinite}progress:not(.circle,[value])::-webkit-progress-value{animation:3.2s to-linear ease infinite}progress::-webkit-progress-bar{background:none}progress::-webkit-progress-value{background:currentColor}progress::-moz-progress-bar{background:currentColor}progress.wavy{block-size:calc(var(--_size, 0) * 2);background:none;background-image:var(--_light);background-repeat:repeat-x;background-position:0 50%;background-size:auto calc(var(--_size, 0) / 2)}.dark progress.wavy{background-image:var(--_dark)}progress.wavy::-webkit-progress-value,progress.wavy:not(.circle,[value]):after{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1220'%20height='75'%20viewBox='610%201101%201220%2075'%3e%3cpath%20fill='%23d0bcff'%20d='M1870.425%201173.746c-29.448%200-58.665-7.477-84.493-21.622l-.09-.049c-43.555-23.82-95.546-23.809-139.091.039l-.113.062c-25.803%2014.109-54.984%2021.567-84.394%2021.568-29.449%200-58.667-7.478-84.495-21.623-43.554-23.852-95.539-23.865-139.089-.052l-.092.051c-25.83%2014.146-55.048%2021.623-84.497%2021.623-29.423%200-58.613-7.463-84.425-21.584l-.077-.042c-43.572-23.863-95.596-23.862-139.164-.001l-.085.046c-25.809%2014.117-55.001%2021.581-84.418%2021.581h-.001c-29.45-.001-58.669-7.479-84.498-21.625-43.534-23.845-95.513-23.863-139.063-.058l-.108.06c-25.829%2014.146-55.047%2021.623-84.496%2021.623-29.398%200-58.566-7.451-84.362-21.551l-.142-.075c-43.568-23.863-95.593-23.863-139.163%200l-.081.043c-25.811%2014.12-55.001%2021.583-84.421%2021.583-29.45%200-58.668-7.478-84.497-21.624-7.521-4.118-10.278-13.554-6.159-21.074s13.554-10.277%2021.074-6.158c43.57%2023.862%2095.593%2023.864%20139.163%200l.098-.053c25.807-14.114%2054.991-21.573%2084.406-21.573%2029.398%200%2058.567%207.451%2084.364%2021.55l.14.076c43.534%2023.843%2095.508%2023.864%20139.056.059l.113-.063c25.828-14.145%2055.049-21.622%2084.496-21.622h.002c29.449%200%2058.668%207.478%2084.497%2021.625%2043.57%2023.863%2095.595%2023.862%20139.165.001q.032-.019.065-.036c25.813-14.124%2055.011-21.591%2084.438-21.591%2029.42%200%2058.61%207.463%2084.421%2021.582l.082.045c43.539%2023.847%2095.521%2023.862%20139.074.049l.096-.053c25.829-14.146%2055.047-21.623%2084.496-21.623s58.667%207.477%2084.496%2021.623c43.58%2023.867%2095.604%2023.866%20139.172.005l.118-.064c25.803-14.108%2054.98-21.564%2084.389-21.564%2029.448-.001%2058.666%207.476%2084.494%2021.62l.114.063c43.549%2023.807%2095.528%2023.791%20139.063-.051%207.52-4.121%2016.955-1.361%2021.073%206.159%204.119%207.521%201.361%2016.955-6.159%2021.073-25.828%2014.146-55.045%2021.622-84.492%2021.622'%3e%3canimateTransform%20attributeName='transform'%20calcMode='linear'%20dur='1s'%20from='0%200'%20repeatCount='indefinite'%20to='312.5%200'%20type='translate'/%3e%3c/path%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1220'%20height='75'%20viewBox='610%201101%201220%2075'%3e%3cpath%20fill='%23d0bcff'%20d='M1870.425%201173.746c-29.448%200-58.665-7.477-84.493-21.622l-.09-.049c-43.555-23.82-95.546-23.809-139.091.039l-.113.062c-25.803%2014.109-54.984%2021.567-84.394%2021.568-29.449%200-58.667-7.478-84.495-21.623-43.554-23.852-95.539-23.865-139.089-.052l-.092.051c-25.83%2014.146-55.048%2021.623-84.497%2021.623-29.423%200-58.613-7.463-84.425-21.584l-.077-.042c-43.572-23.863-95.596-23.862-139.164-.001l-.085.046c-25.809%2014.117-55.001%2021.581-84.418%2021.581h-.001c-29.45-.001-58.669-7.479-84.498-21.625-43.534-23.845-95.513-23.863-139.063-.058l-.108.06c-25.829%2014.146-55.047%2021.623-84.496%2021.623-29.398%200-58.566-7.451-84.362-21.551l-.142-.075c-43.568-23.863-95.593-23.863-139.163%200l-.081.043c-25.811%2014.12-55.001%2021.583-84.421%2021.583-29.45%200-58.668-7.478-84.497-21.624-7.521-4.118-10.278-13.554-6.159-21.074s13.554-10.277%2021.074-6.158c43.57%2023.862%2095.593%2023.864%20139.163%200l.098-.053c25.807-14.114%2054.991-21.573%2084.406-21.573%2029.398%200%2058.567%207.451%2084.364%2021.55l.14.076c43.534%2023.843%2095.508%2023.864%20139.056.059l.113-.063c25.828-14.145%2055.049-21.622%2084.496-21.622h.002c29.449%200%2058.668%207.478%2084.497%2021.625%2043.57%2023.863%2095.595%2023.862%20139.165.001q.032-.019.065-.036c25.813-14.124%2055.011-21.591%2084.438-21.591%2029.42%200%2058.61%207.463%2084.421%2021.582l.082.045c43.539%2023.847%2095.521%2023.862%20139.074.049l.096-.053c25.829-14.146%2055.047-21.623%2084.496-21.623s58.667%207.477%2084.496%2021.623c43.58%2023.867%2095.604%2023.866%20139.172.005l.118-.064c25.803-14.108%2054.98-21.564%2084.389-21.564%2029.448-.001%2058.666%207.476%2084.494%2021.62l.114.063c43.549%2023.807%2095.528%2023.791%20139.063-.051%207.52-4.121%2016.955-1.361%2021.073%206.159%204.119%207.521%201.361%2016.955-6.159%2021.073-25.828%2014.146-55.045%2021.622-84.492%2021.622'%3e%3canimateTransform%20attributeName='transform'%20calcMode='linear'%20dur='1s'%20from='0%200'%20repeatCount='indefinite'%20to='312.5%200'%20type='translate'/%3e%3c/path%3e%3c/svg%3e");-webkit-mask-position:0 50%;mask-position:0 50%;-webkit-mask-repeat:repeat-x;mask-repeat:repeat-x;-webkit-mask-size:auto 100%;mask-size:auto 100%}progress.wavy::-moz-progress-bar{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1220'%20height='75'%20viewBox='610%201101%201220%2075'%3e%3cpath%20fill='%23d0bcff'%20d='M1870.425%201173.746c-29.448%200-58.665-7.477-84.493-21.622l-.09-.049c-43.555-23.82-95.546-23.809-139.091.039l-.113.062c-25.803%2014.109-54.984%2021.567-84.394%2021.568-29.449%200-58.667-7.478-84.495-21.623-43.554-23.852-95.539-23.865-139.089-.052l-.092.051c-25.83%2014.146-55.048%2021.623-84.497%2021.623-29.423%200-58.613-7.463-84.425-21.584l-.077-.042c-43.572-23.863-95.596-23.862-139.164-.001l-.085.046c-25.809%2014.117-55.001%2021.581-84.418%2021.581h-.001c-29.45-.001-58.669-7.479-84.498-21.625-43.534-23.845-95.513-23.863-139.063-.058l-.108.06c-25.829%2014.146-55.047%2021.623-84.496%2021.623-29.398%200-58.566-7.451-84.362-21.551l-.142-.075c-43.568-23.863-95.593-23.863-139.163%200l-.081.043c-25.811%2014.12-55.001%2021.583-84.421%2021.583-29.45%200-58.668-7.478-84.497-21.624-7.521-4.118-10.278-13.554-6.159-21.074s13.554-10.277%2021.074-6.158c43.57%2023.862%2095.593%2023.864%20139.163%200l.098-.053c25.807-14.114%2054.991-21.573%2084.406-21.573%2029.398%200%2058.567%207.451%2084.364%2021.55l.14.076c43.534%2023.843%2095.508%2023.864%20139.056.059l.113-.063c25.828-14.145%2055.049-21.622%2084.496-21.622h.002c29.449%200%2058.668%207.478%2084.497%2021.625%2043.57%2023.863%2095.595%2023.862%20139.165.001q.032-.019.065-.036c25.813-14.124%2055.011-21.591%2084.438-21.591%2029.42%200%2058.61%207.463%2084.421%2021.582l.082.045c43.539%2023.847%2095.521%2023.862%20139.074.049l.096-.053c25.829-14.146%2055.047-21.623%2084.496-21.623s58.667%207.477%2084.496%2021.623c43.58%2023.867%2095.604%2023.866%20139.172.005l.118-.064c25.803-14.108%2054.98-21.564%2084.389-21.564%2029.448-.001%2058.666%207.476%2084.494%2021.62l.114.063c43.549%2023.807%2095.528%2023.791%20139.063-.051%207.52-4.121%2016.955-1.361%2021.073%206.159%204.119%207.521%201.361%2016.955-6.159%2021.073-25.828%2014.146-55.045%2021.622-84.492%2021.622'%3e%3canimateTransform%20attributeName='transform'%20calcMode='linear'%20dur='1s'%20from='0%200'%20repeatCount='indefinite'%20to='312.5%200'%20type='translate'/%3e%3c/path%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1220'%20height='75'%20viewBox='610%201101%201220%2075'%3e%3cpath%20fill='%23d0bcff'%20d='M1870.425%201173.746c-29.448%200-58.665-7.477-84.493-21.622l-.09-.049c-43.555-23.82-95.546-23.809-139.091.039l-.113.062c-25.803%2014.109-54.984%2021.567-84.394%2021.568-29.449%200-58.667-7.478-84.495-21.623-43.554-23.852-95.539-23.865-139.089-.052l-.092.051c-25.83%2014.146-55.048%2021.623-84.497%2021.623-29.423%200-58.613-7.463-84.425-21.584l-.077-.042c-43.572-23.863-95.596-23.862-139.164-.001l-.085.046c-25.809%2014.117-55.001%2021.581-84.418%2021.581h-.001c-29.45-.001-58.669-7.479-84.498-21.625-43.534-23.845-95.513-23.863-139.063-.058l-.108.06c-25.829%2014.146-55.047%2021.623-84.496%2021.623-29.398%200-58.566-7.451-84.362-21.551l-.142-.075c-43.568-23.863-95.593-23.863-139.163%200l-.081.043c-25.811%2014.12-55.001%2021.583-84.421%2021.583-29.45%200-58.668-7.478-84.497-21.624-7.521-4.118-10.278-13.554-6.159-21.074s13.554-10.277%2021.074-6.158c43.57%2023.862%2095.593%2023.864%20139.163%200l.098-.053c25.807-14.114%2054.991-21.573%2084.406-21.573%2029.398%200%2058.567%207.451%2084.364%2021.55l.14.076c43.534%2023.843%2095.508%2023.864%20139.056.059l.113-.063c25.828-14.145%2055.049-21.622%2084.496-21.622h.002c29.449%200%2058.668%207.478%2084.497%2021.625%2043.57%2023.863%2095.595%2023.862%20139.165.001q.032-.019.065-.036c25.813-14.124%2055.011-21.591%2084.438-21.591%2029.42%200%2058.61%207.463%2084.421%2021.582l.082.045c43.539%2023.847%2095.521%2023.862%20139.074.049l.096-.053c25.829-14.146%2055.047-21.623%2084.496-21.623s58.667%207.477%2084.496%2021.623c43.58%2023.867%2095.604%2023.866%20139.172.005l.118-.064c25.803-14.108%2054.98-21.564%2084.389-21.564%2029.448-.001%2058.666%207.476%2084.494%2021.62l.114.063c43.549%2023.807%2095.528%2023.791%20139.063-.051%207.52-4.121%2016.955-1.361%2021.073%206.159%204.119%207.521%201.361%2016.955-6.159%2021.073-25.828%2014.146-55.045%2021.622-84.492%2021.622'%3e%3canimateTransform%20attributeName='transform'%20calcMode='linear'%20dur='1s'%20from='0%200'%20repeatCount='indefinite'%20to='312.5%200'%20type='translate'/%3e%3c/path%3e%3c/svg%3e");-webkit-mask-position:0 50%;mask-position:0 50%;-webkit-mask-repeat:repeat-x;mask-repeat:repeat-x;-webkit-mask-size:auto 100%;mask-size:auto 100%}progress.circle{--_value: attr(value type(<number>), 50);inline-size:2.5rem;block-size:2.5rem;background:conic-gradient(currentColor calc(var(--_value, 0) * 1%),var(--active) 0%);border-radius:50%;-webkit-mask-image:radial-gradient(circle at center,transparent 57%,currentColor 60%);mask-image:radial-gradient(circle at center,transparent 57%,currentColor 60%)}progress.circle::-webkit-progress-value{background:none}progress.circle::-moz-progress-bar{background:none}progress.circle.wavy{background:conic-gradient(currentColor calc(var(--_value, 0) * 1%),var(--active) 0);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='480'%20height='480'%20fill='none'%3e%3cpath%20fill='%23d0bcff'%20d='M295.84%2018.168c4.163%203.594%207.898%207.636%2011.723%2011.582%208.982%209.199%2015.965%2013.623%2029.054%2014.21%203.442.04%206.879.016%2010.32-.023%2024.023-.106%2046.223%208.762%2063.445%2025.426%2015.466%2015.648%2025.276%2037.002%2025.662%2059.176-.023%203.55-.086%207.096-.171%2010.645-.133%2010.66%201.763%2019.84%209.074%2027.985%202.227%202.22%204.504%204.374%206.803%206.518%207.48%207.24%2013.335%2014.117%2018.25%2023.313l1.723%203.156c9.935%2019.724%2011.982%2044.682%205.664%2065.89-5.617%2016.737-14.542%2029.311-27.137%2041.517-8.844%208.627-13.592%2015.6-14.21%2028.21-.044%203.536-.014%207.067.022%2010.602.1%2024.28-8.555%2046.572-25.425%2064.007-15.648%2015.466-37.002%2025.276-59.176%2025.662-3.55-.023-7.096-.086-10.645-.171-10.66-.133-19.84%201.763-27.985%209.074-2.22%202.227-4.374%204.504-6.519%206.803-7.238%207.48-14.116%2013.335-23.312%2018.25l-3.156%201.723c-19.724%209.935-44.682%2011.982-65.89%205.664-16.738-5.617-29.31-14.543-41.517-27.137-8.982-9.199-15.965-13.623-29.054-14.21-3.442-.04-6.879-.016-10.32.022-24.023.107-46.223-8.761-63.445-25.425-15.466-15.648-25.276-37.002-25.662-59.176.023-3.55.086-7.096.171-10.645.133-10.66-1.763-19.84-9.074-27.985-2.227-2.22-4.504-4.374-6.803-6.519C20.77%20299.075%2014.915%20292.197%2010%20283l-1.723-3.156c-9.935-19.724-11.982-44.682-5.664-65.89%205.617-16.737%2014.542-29.311%2027.137-41.517%208.844-8.627%2013.592-15.6%2014.21-28.21.044-3.536.014-7.067-.023-10.602-.098-24.28%208.556-46.572%2025.426-64.007%2015.648-15.466%2037.002-25.276%2059.176-25.662%203.55.023%207.096.086%2010.645.171%2010.66.133%2019.84-1.763%2027.985-9.074%202.22-2.227%204.374-4.504%206.518-6.803C180.928%2020.77%20187.804%2014.915%20197%2010l3.156-1.723c30.418-15.321%2069.005-11.063%2095.684%209.891M196%2050a154%20154%200%200%200-2.875%203.5c-9.82%2011.895-25.259%2019.027-40.367%2020.902a164%20164%200%200%201-16.782.508c-16.253-.278-30.131%204.27-42.66%2014.828-10.325%2010.081-17.964%2024.122-18.388%2038.735-.002%202.78.027%205.56.072%208.34.309%2019.165-3.59%2037.379-17.352%2051.62a813%20813%200%200%201-5.515%205.294c-11.667%2011.161-20.677%2023.997-21.371%2040.68-.409%2018.723%203.98%2033.495%2017.015%2047.402a71%2071%200%200%200%205.723%205.066c11.895%209.82%2019.027%2025.259%2020.902%2040.367.465%205.61.617%2011.153.508%2016.782-.278%2016.253%204.27%2030.131%2014.828%2042.66%2010.081%2010.325%2024.122%2017.964%2038.735%2018.388%202.78.002%205.56-.027%208.34-.072%2019.165-.309%2037.379%203.59%2051.62%2017.352a810%20810%200%200%201%205.294%205.515c11.161%2011.667%2023.997%2020.677%2040.68%2021.371%2018.723.409%2033.495-3.98%2047.402-17.015a71%2071%200%200%200%205.066-5.723c9.82-11.895%2025.259-19.027%2040.367-20.902a164%20164%200%200%201%2016.782-.508c16.253.278%2030.131-4.27%2042.66-14.828%2010.325-10.081%2017.964-24.122%2018.388-38.735a487%20487%200%200%200-.072-8.34c-.309-19.165%203.59-37.379%2017.352-51.62a810%20810%200%200%201%205.515-5.294c11.667-11.161%2020.677-23.997%2021.371-40.68.409-18.723-3.98-33.495-17.015-47.402a71%2071%200%200%200-5.723-5.066c-11.895-9.82-19.027-25.259-20.902-40.367a164%20164%200%200%201-.508-16.782c.278-16.253-4.27-30.131-14.828-42.66-10.081-10.325-24.122-17.964-38.735-18.388a487%20487%200%200%200-8.34.072c-19.165.309-37.379-3.59-51.62-17.352a813%20813%200%200%201-5.294-5.515c-11.161-11.667-23.997-20.677-40.68-21.371C225.65%2030.327%20210.23%2035.567%20196%2050'/%3e%3canimateTransform%20attributeName='transform'%20calcMode='linear'%20dur='8s'%20from='360'%20repeatCount='indefinite'%20to='0'%20type='rotate'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='480'%20height='480'%20fill='none'%3e%3cpath%20fill='%23d0bcff'%20d='M295.84%2018.168c4.163%203.594%207.898%207.636%2011.723%2011.582%208.982%209.199%2015.965%2013.623%2029.054%2014.21%203.442.04%206.879.016%2010.32-.023%2024.023-.106%2046.223%208.762%2063.445%2025.426%2015.466%2015.648%2025.276%2037.002%2025.662%2059.176-.023%203.55-.086%207.096-.171%2010.645-.133%2010.66%201.763%2019.84%209.074%2027.985%202.227%202.22%204.504%204.374%206.803%206.518%207.48%207.24%2013.335%2014.117%2018.25%2023.313l1.723%203.156c9.935%2019.724%2011.982%2044.682%205.664%2065.89-5.617%2016.737-14.542%2029.311-27.137%2041.517-8.844%208.627-13.592%2015.6-14.21%2028.21-.044%203.536-.014%207.067.022%2010.602.1%2024.28-8.555%2046.572-25.425%2064.007-15.648%2015.466-37.002%2025.276-59.176%2025.662-3.55-.023-7.096-.086-10.645-.171-10.66-.133-19.84%201.763-27.985%209.074-2.22%202.227-4.374%204.504-6.519%206.803-7.238%207.48-14.116%2013.335-23.312%2018.25l-3.156%201.723c-19.724%209.935-44.682%2011.982-65.89%205.664-16.738-5.617-29.31-14.543-41.517-27.137-8.982-9.199-15.965-13.623-29.054-14.21-3.442-.04-6.879-.016-10.32.022-24.023.107-46.223-8.761-63.445-25.425-15.466-15.648-25.276-37.002-25.662-59.176.023-3.55.086-7.096.171-10.645.133-10.66-1.763-19.84-9.074-27.985-2.227-2.22-4.504-4.374-6.803-6.519C20.77%20299.075%2014.915%20292.197%2010%20283l-1.723-3.156c-9.935-19.724-11.982-44.682-5.664-65.89%205.617-16.737%2014.542-29.311%2027.137-41.517%208.844-8.627%2013.592-15.6%2014.21-28.21.044-3.536.014-7.067-.023-10.602-.098-24.28%208.556-46.572%2025.426-64.007%2015.648-15.466%2037.002-25.276%2059.176-25.662%203.55.023%207.096.086%2010.645.171%2010.66.133%2019.84-1.763%2027.985-9.074%202.22-2.227%204.374-4.504%206.518-6.803C180.928%2020.77%20187.804%2014.915%20197%2010l3.156-1.723c30.418-15.321%2069.005-11.063%2095.684%209.891M196%2050a154%20154%200%200%200-2.875%203.5c-9.82%2011.895-25.259%2019.027-40.367%2020.902a164%20164%200%200%201-16.782.508c-16.253-.278-30.131%204.27-42.66%2014.828-10.325%2010.081-17.964%2024.122-18.388%2038.735-.002%202.78.027%205.56.072%208.34.309%2019.165-3.59%2037.379-17.352%2051.62a813%20813%200%200%201-5.515%205.294c-11.667%2011.161-20.677%2023.997-21.371%2040.68-.409%2018.723%203.98%2033.495%2017.015%2047.402a71%2071%200%200%200%205.723%205.066c11.895%209.82%2019.027%2025.259%2020.902%2040.367.465%205.61.617%2011.153.508%2016.782-.278%2016.253%204.27%2030.131%2014.828%2042.66%2010.081%2010.325%2024.122%2017.964%2038.735%2018.388%202.78.002%205.56-.027%208.34-.072%2019.165-.309%2037.379%203.59%2051.62%2017.352a810%20810%200%200%201%205.294%205.515c11.161%2011.667%2023.997%2020.677%2040.68%2021.371%2018.723.409%2033.495-3.98%2047.402-17.015a71%2071%200%200%200%205.066-5.723c9.82-11.895%2025.259-19.027%2040.367-20.902a164%20164%200%200%201%2016.782-.508c16.253.278%2030.131-4.27%2042.66-14.828%2010.325-10.081%2017.964-24.122%2018.388-38.735a487%20487%200%200%200-.072-8.34c-.309-19.165%203.59-37.379%2017.352-51.62a810%20810%200%200%201%205.515-5.294c11.667-11.161%2020.677-23.997%2021.371-40.68.409-18.723-3.98-33.495-17.015-47.402a71%2071%200%200%200-5.723-5.066c-11.895-9.82-19.027-25.259-20.902-40.367a164%20164%200%200%201-.508-16.782c.278-16.253-4.27-30.131-14.828-42.66-10.081-10.325-24.122-17.964-38.735-18.388a487%20487%200%200%200-8.34.072c-19.165.309-37.379-3.59-51.62-17.352a813%20813%200%200%201-5.294-5.515c-11.161-11.667-23.997-20.677-40.68-21.371C225.65%2030.327%20210.23%2035.567%20196%2050'/%3e%3canimateTransform%20attributeName='transform'%20calcMode='linear'%20dur='8s'%20from='360'%20repeatCount='indefinite'%20to='0'%20type='rotate'/%3e%3c/svg%3e")}progress.circle.small{inline-size:1.5rem;block-size:1.5rem}progress.circle.large{inline-size:3.5rem;block-size:3.5rem}progress.circle:not([value]),progress.circle.indeterminate{--_value: 50;animation:to-rotate 1s infinite linear}:is(nav,.row,.field)>progress:not(.circle,.small,.medium,.large){flex:auto}progress.max{display:unset;position:absolute;inline-size:100%!important;block-size:100%!important;color:currentColor;background:none;top:0;right:0;bottom:0;left:0;border-radius:inherit;animation:none;writing-mode:horizontal-tb;opacity:.33}progress.max[class*=-text]{opacity:1}progress.max+*{margin-block-start:0}:is(.button,button,.chip)>progress.circle{color:inherit}@keyframes to-linear{0%{margin:0 0 0 -100%}50%{margin:0}to{margin:0 0 0 100%}}@keyframes to-indeterminate{0%{padding:0 100% 0 0}50%{padding:0}to{padding:0 0 0 100%}}@keyframes to-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.shape{display:flex;align-items:center;justify-content:center;color:var(--on-primary);background-color:var(--primary);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;border-radius:0;block-size:3.5rem;inline-size:3.5rem;margin:0!important;padding:0!important;border:0!important}.transparent>.shape>i{filter:invert(1)}.shape.tiny-space{-webkit-mask-size:90%;mask-size:90%}.shape.space,.shape.small-space{-webkit-mask-size:80%;mask-size:80%}.shape.medium-space{-webkit-mask-size:70%;mask-size:70%}.shape.large-space{-webkit-mask-size:60%;mask-size:60%}.shape.extra-space{-webkit-mask-size:50%;mask-size:50%}.shape.tiny{block-size:2.5rem;inline-size:2.5rem}.shape.medium{block-size:4.5rem;inline-size:4.5rem}.shape.large{block-size:5.5rem;inline-size:5.5rem}.shape.extra{block-size:6.5rem;inline-size:6.5rem}.shape.max,.shape>.responsive,.shape>.responsive>.responsive{position:absolute;top:0;right:0;bottom:0;left:0;block-size:100%;inline-size:100%;margin:0!important;padding:0!important;border:0!important}.shape>.responsive{background:inherit;color:inherit}.shape.rotate{animation:linear to-shape-rotate infinite 12s}.shape.rotate>*{animation:linear to-shape-rotate infinite 12s reverse}.shape.fast-rotate{animation:linear to-shape-rotate infinite 6s}.shape.fast-rotate>*{animation:linear to-shape-rotate infinite 6s reverse}.shape.slow-rotate{animation:linear to-shape-rotate infinite 24s}.shape.slow-rotate>*{animation:linear to-shape-rotate infinite 24s reverse}:is(button,.button,.chip):has(>.shape)>.responsive{border:none}.shape.arch{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='304'%20height='304'%20fill='none'%20viewBox='0%200%20304%20304'%3e%3cpath%20fill='%23d0bcff'%20d='M304%20253.72c0%206.11%200%209.17-.31%2011.74-2.38%2020.05-18.18%2035.85-38.23%2038.23-2.57.31-5.63.31-11.74.31H50.281c-6.112%200-9.168%200-11.737-.31-20.049-2.38-35.856-18.18-38.239-38.23C0%20262.89%200%20259.83%200%20253.72V152C0%2068.05%2068.053%200%20152%200c83.95%200%20152%2068.05%20152%20152z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='304'%20height='304'%20fill='none'%20viewBox='0%200%20304%20304'%3e%3cpath%20fill='%23d0bcff'%20d='M304%20253.72c0%206.11%200%209.17-.31%2011.74-2.38%2020.05-18.18%2035.85-38.23%2038.23-2.57.31-5.63.31-11.74.31H50.281c-6.112%200-9.168%200-11.737-.31-20.049-2.38-35.856-18.18-38.239-38.23C0%20262.89%200%20259.83%200%20253.72V152C0%2068.05%2068.053%200%20152%200c83.95%200%20152%2068.05%20152%20152z'/%3e%3c/svg%3e")}.shape.arrow{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='316'%20height='278'%20fill='none'%20viewBox='0%200%20316%20278'%3e%3cpath%20fill='%23d0bcff'%20d='M271.57%20122.2c-14.018-21.58-28.035-43.19-42.053-64.77-9.094-14.01-18.35-28.21-30.645-39.34-12.296-11.15-28.224-19.03-44.556-18-14.34.92-27.632%208.63-38.125%2018.7S97.546%2041.26%2089.528%2053.54C67.842%2086.72%2046.13%20119.9%2024.444%20153.1%2014.139%20168.86%203.565%20185.31.713%20204.09c-3.444%2022.69%205.839%2045.8%2022.305%2060.89%2017.219%2015.78%2045.12%2014.5%2066.08%2010.18%2022.977-4.75%2045.443-13.68%2068.877-13.65%2020.072%200%2039.471%206.6%2059.004%2011.4%2019.506%204.77%2040.466%207.71%2059.3.61%2023.38-8.79%2040.169-33.79%2039.712-59.45-.431-23.41-13.534-44.32-26.152-63.8-6.081-9.35-12.161-18.72-18.242-28.07z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='316'%20height='278'%20fill='none'%20viewBox='0%200%20316%20278'%3e%3cpath%20fill='%23d0bcff'%20d='M271.57%20122.2c-14.018-21.58-28.035-43.19-42.053-64.77-9.094-14.01-18.35-28.21-30.645-39.34-12.296-11.15-28.224-19.03-44.556-18-14.34.92-27.632%208.63-38.125%2018.7S97.546%2041.26%2089.528%2053.54C67.842%2086.72%2046.13%20119.9%2024.444%20153.1%2014.139%20168.86%203.565%20185.31.713%20204.09c-3.444%2022.69%205.839%2045.8%2022.305%2060.89%2017.219%2015.78%2045.12%2014.5%2066.08%2010.18%2022.977-4.75%2045.443-13.68%2068.877-13.65%2020.072%200%2039.471%206.6%2059.004%2011.4%2019.506%204.77%2040.466%207.71%2059.3.61%2023.38-8.79%2040.169-33.79%2039.712-59.45-.431-23.41-13.534-44.32-26.152-63.8-6.081-9.35-12.161-18.72-18.242-28.07z'/%3e%3c/svg%3e")}.shape.boom{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M156.818%2010.16c.753-6.02%201.13-9.03%201.702-9.57a2.145%202.145%200%200%201%202.96%200c.572.54.949%203.55%201.702%209.57l9.578%2076.58c.304%202.43.456%203.64.892%204.15.633.72%201.668.95%202.541.54.601-.28%201.232-1.33%202.493-3.43l39.729-66.04c3.124-5.19%204.686-7.79%205.427-8.05%201.078-.37%202.26.16%202.704%201.22.305.72-.569%203.63-2.317%209.44l-22.23%2073.87c-.706%202.35-1.058%203.52-.863%204.15a2.17%202.17%200%200%200%202.102%201.54c.663-.01%201.663-.71%203.663-2.11l63.01-44.08c4.956-3.47%207.433-5.2%208.214-5.14a2.177%202.177%200%200%201%201.98%202.21c-.014.79-1.988%203.09-5.935%207.68l-50.194%2058.4c-1.593%201.85-2.389%202.78-2.468%203.44-.115.96.414%201.88%201.299%202.26.609.27%201.806.03%204.199-.43l75.397-14.5c5.929-1.14%208.894-1.71%209.58-1.33.998.55%201.398%201.79.915%202.83-.332.71-3.064%202-8.528%204.58l-69.478%2032.83c-2.206%201.04-3.308%201.56-3.648%202.13-.493.83-.382%201.89.272%202.6.45.49%201.636.77%204.009%201.32l74.747%2017.59c5.878%201.38%208.818%202.07%209.29%202.7.687.91.552%202.21-.309%202.96-.593.51-3.61.58-9.646.7l-76.75%201.57c-2.436.05-3.654.08-4.195.46a2.19%202.19%200%200%200-.803%202.49c.214.63%201.184%201.37%203.126%202.85l61.173%2046.62c4.81%203.67%207.216%205.51%207.393%206.27a2.18%202.18%200%200%201-1.48%202.58c-.749.23-3.531-.95-9.096-3.3l-70.749-29.95c-2.246-.95-3.369-1.43-4.019-1.3a2.18%202.18%200%200%200-1.739%201.94c-.059.66.528%201.74%201.703%203.88l37.021%2067.62c2.911%205.31%204.367%207.97%204.219%208.75a2.175%202.175%200%200%201-2.395%201.75c-.778-.1-2.843-2.31-6.973-6.74l-52.517-56.3c-1.667-1.78-2.501-2.68-3.146-2.82a2.15%202.15%200%200%200-2.374%201.06c-.323.58-.22%201.8-.015%204.24l6.467%2076.91c.509%206.05.763%209.07.315%209.72a2.16%202.16%200%200%201-2.895.62c-.672-.41-1.663-3.28-3.645-9.01l-25.204-72.9c-.8-2.32-1.2-3.47-1.73-3.87a2.16%202.16%200%200%200-2.598%200c-.53.4-.93%201.55-1.73%203.87l-25.204%2072.9c-1.982%205.73-2.973%208.6-3.645%209.01-.976.59-2.242.32-2.895-.62-.448-.65-.194-3.67.315-9.72l6.467-76.91c.205-2.44.308-3.66-.015-4.24a2.146%202.146%200%200%200-2.373-1.06c-.646.14-1.48%201.04-3.147%202.82l-52.517%2056.3c-4.13%204.43-6.195%206.64-6.973%206.74a2.175%202.175%200%200%201-2.395-1.75c-.148-.78%201.308-3.44%204.219-8.75l37.021-67.62c1.175-2.14%201.762-3.22%201.703-3.88a2.18%202.18%200%200%200-1.739-1.94c-.65-.13-1.773.35-4.019%201.3l-70.75%2029.95c-5.564%202.35-8.346%203.53-9.095%203.3a2.18%202.18%200%200%201-1.48-2.58c.177-.76%202.583-2.6%207.393-6.27l61.173-46.62c1.942-1.48%202.912-2.22%203.126-2.85a2.19%202.19%200%200%200-.803-2.49c-.541-.38-1.76-.41-4.195-.46l-76.75-1.57c-6.036-.12-9.054-.19-9.646-.7a2.19%202.19%200%200%201-.309-2.96c.472-.63%203.412-1.32%209.29-2.7l74.747-17.59c2.373-.55%203.559-.83%204.01-1.32.653-.71.764-1.77.271-2.6-.34-.57-1.442-1.09-3.648-2.13L15.63%20117.94c-5.464-2.58-8.196-3.87-8.528-4.58a2.18%202.18%200%200%201%20.915-2.83c.686-.38%203.65.19%209.58%201.33l75.397%2014.5c2.393.46%203.59.7%204.199.43a2.18%202.18%200%200%200%201.299-2.26c-.078-.66-.875-1.59-2.468-3.44L45.83%2062.69c-3.947-4.59-5.92-6.89-5.935-7.68a2.18%202.18%200%200%201%201.98-2.21c.78-.06%203.258%201.67%208.214%205.14l63.01%2044.08c2%201.4%203%202.1%203.663%202.11a2.17%202.17%200%200%200%202.102-1.54c.195-.63-.157-1.8-.863-4.15l-22.23-73.87c-1.748-5.81-2.622-8.72-2.317-9.44a2.17%202.17%200%200%201%202.704-1.22c.741.26%202.303%202.86%205.427%208.05L141.314%2088c1.261%202.1%201.892%203.15%202.493%203.43.873.41%201.908.18%202.541-.54.436-.51.588-1.72.892-4.15z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M156.818%2010.16c.753-6.02%201.13-9.03%201.702-9.57a2.145%202.145%200%200%201%202.96%200c.572.54.949%203.55%201.702%209.57l9.578%2076.58c.304%202.43.456%203.64.892%204.15.633.72%201.668.95%202.541.54.601-.28%201.232-1.33%202.493-3.43l39.729-66.04c3.124-5.19%204.686-7.79%205.427-8.05%201.078-.37%202.26.16%202.704%201.22.305.72-.569%203.63-2.317%209.44l-22.23%2073.87c-.706%202.35-1.058%203.52-.863%204.15a2.17%202.17%200%200%200%202.102%201.54c.663-.01%201.663-.71%203.663-2.11l63.01-44.08c4.956-3.47%207.433-5.2%208.214-5.14a2.177%202.177%200%200%201%201.98%202.21c-.014.79-1.988%203.09-5.935%207.68l-50.194%2058.4c-1.593%201.85-2.389%202.78-2.468%203.44-.115.96.414%201.88%201.299%202.26.609.27%201.806.03%204.199-.43l75.397-14.5c5.929-1.14%208.894-1.71%209.58-1.33.998.55%201.398%201.79.915%202.83-.332.71-3.064%202-8.528%204.58l-69.478%2032.83c-2.206%201.04-3.308%201.56-3.648%202.13-.493.83-.382%201.89.272%202.6.45.49%201.636.77%204.009%201.32l74.747%2017.59c5.878%201.38%208.818%202.07%209.29%202.7.687.91.552%202.21-.309%202.96-.593.51-3.61.58-9.646.7l-76.75%201.57c-2.436.05-3.654.08-4.195.46a2.19%202.19%200%200%200-.803%202.49c.214.63%201.184%201.37%203.126%202.85l61.173%2046.62c4.81%203.67%207.216%205.51%207.393%206.27a2.18%202.18%200%200%201-1.48%202.58c-.749.23-3.531-.95-9.096-3.3l-70.749-29.95c-2.246-.95-3.369-1.43-4.019-1.3a2.18%202.18%200%200%200-1.739%201.94c-.059.66.528%201.74%201.703%203.88l37.021%2067.62c2.911%205.31%204.367%207.97%204.219%208.75a2.175%202.175%200%200%201-2.395%201.75c-.778-.1-2.843-2.31-6.973-6.74l-52.517-56.3c-1.667-1.78-2.501-2.68-3.146-2.82a2.15%202.15%200%200%200-2.374%201.06c-.323.58-.22%201.8-.015%204.24l6.467%2076.91c.509%206.05.763%209.07.315%209.72a2.16%202.16%200%200%201-2.895.62c-.672-.41-1.663-3.28-3.645-9.01l-25.204-72.9c-.8-2.32-1.2-3.47-1.73-3.87a2.16%202.16%200%200%200-2.598%200c-.53.4-.93%201.55-1.73%203.87l-25.204%2072.9c-1.982%205.73-2.973%208.6-3.645%209.01-.976.59-2.242.32-2.895-.62-.448-.65-.194-3.67.315-9.72l6.467-76.91c.205-2.44.308-3.66-.015-4.24a2.146%202.146%200%200%200-2.373-1.06c-.646.14-1.48%201.04-3.147%202.82l-52.517%2056.3c-4.13%204.43-6.195%206.64-6.973%206.74a2.175%202.175%200%200%201-2.395-1.75c-.148-.78%201.308-3.44%204.219-8.75l37.021-67.62c1.175-2.14%201.762-3.22%201.703-3.88a2.18%202.18%200%200%200-1.739-1.94c-.65-.13-1.773.35-4.019%201.3l-70.75%2029.95c-5.564%202.35-8.346%203.53-9.095%203.3a2.18%202.18%200%200%201-1.48-2.58c.177-.76%202.583-2.6%207.393-6.27l61.173-46.62c1.942-1.48%202.912-2.22%203.126-2.85a2.19%202.19%200%200%200-.803-2.49c-.541-.38-1.76-.41-4.195-.46l-76.75-1.57c-6.036-.12-9.054-.19-9.646-.7a2.19%202.19%200%200%201-.309-2.96c.472-.63%203.412-1.32%209.29-2.7l74.747-17.59c2.373-.55%203.559-.83%204.01-1.32.653-.71.764-1.77.271-2.6-.34-.57-1.442-1.09-3.648-2.13L15.63%20117.94c-5.464-2.58-8.196-3.87-8.528-4.58a2.18%202.18%200%200%201%20.915-2.83c.686-.38%203.65.19%209.58%201.33l75.397%2014.5c2.393.46%203.59.7%204.199.43a2.18%202.18%200%200%200%201.299-2.26c-.078-.66-.875-1.59-2.468-3.44L45.83%2062.69c-3.947-4.59-5.92-6.89-5.935-7.68a2.18%202.18%200%200%201%201.98-2.21c.78-.06%203.258%201.67%208.214%205.14l63.01%2044.08c2%201.4%203%202.1%203.663%202.11a2.17%202.17%200%200%200%202.102-1.54c.195-.63-.157-1.8-.863-4.15l-22.23-73.87c-1.748-5.81-2.622-8.72-2.317-9.44a2.17%202.17%200%200%201%202.704-1.22c.741.26%202.303%202.86%205.427%208.05L141.314%2088c1.261%202.1%201.892%203.15%202.493%203.43.873.41%201.908.18%202.541-.54.436-.51.588-1.72.892-4.15z'/%3e%3c/svg%3e")}.shape.bun{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='310'%20height='320'%20fill='none'%20viewBox='0%200%20310%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M0%2081.36A81.35%2081.35%200%200%201%2081.36%200h147.28a81.35%2081.35%200%200%201%2022.7%20159.5.5.5%200%200%200-.37.5c0%20.23.15.43.37.5a81.38%2081.38%200%200%201-22.7%20159.5H81.36A81.35%2081.35%200%200%201%200%20238.64a81.4%2081.4%200%200%201%2058-77.95.72.72%200%200%200%200-1.38A81.4%2081.4%200%200%201%200%2081.36'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='310'%20height='320'%20fill='none'%20viewBox='0%200%20310%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M0%2081.36A81.35%2081.35%200%200%201%2081.36%200h147.28a81.35%2081.35%200%200%201%2022.7%20159.5.5.5%200%200%200-.37.5c0%20.23.15.43.37.5a81.38%2081.38%200%200%201-22.7%20159.5H81.36A81.35%2081.35%200%200%201%200%20238.64a81.4%2081.4%200%200%201%2058-77.95.72.72%200%200%200%200-1.38A81.4%2081.4%200%200%201%200%2081.36'/%3e%3c/svg%3e")}.shape.burst{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M157.39%202.55c.74-1.32%201.1-1.97%201.55-2.25.65-.4%201.47-.4%202.12%200%20.45.28.81.93%201.55%202.25l25.26%2045.15c.45.81.68%201.22.99%201.46.44.36%201.01.51%201.57.42.39-.06.79-.29%201.58-.77l44.46-26.47c1.29-.77%201.94-1.16%202.46-1.17.77-.03%201.47.38%201.84%201.05.25.47.24%201.22.22%202.73l-.7%2051.73c-.02.93-.02%201.39.12%201.76.2.53.62.95%201.15%201.15.37.14.83.14%201.76.12l51.73-.7c1.51-.02%202.26-.03%202.73.22.67.37%201.08%201.07%201.05%201.84-.01.52-.4%201.17-1.17%202.46l-26.47%2044.46c-.48.79-.71%201.19-.77%201.58-.09.56.06%201.13.42%201.57.24.31.65.54%201.46.99l45.15%2025.26c1.32.74%201.97%201.1%202.25%201.55.4.65.4%201.47%200%202.12-.28.45-.93.81-2.25%201.55l-45.15%2025.26c-.81.45-1.22.68-1.46.99-.36.44-.51%201.01-.42%201.57.06.39.29.79.77%201.58l26.47%2044.46c.77%201.29%201.16%201.94%201.17%202.46.03.77-.38%201.47-1.05%201.84-.47.25-1.22.24-2.73.22l-51.73-.7c-.93-.02-1.39-.02-1.76.12-.53.2-.95.62-1.15%201.15-.14.37-.14.83-.12%201.76l.7%2051.73c.02%201.51.03%202.26-.22%202.73-.37.67-1.07%201.08-1.84%201.05-.52-.01-1.17-.4-2.46-1.17l-44.46-26.47c-.79-.48-1.19-.71-1.58-.77-.56-.09-1.13.06-1.57.42-.31.24-.54.65-.99%201.46l-25.26%2045.15c-.74%201.32-1.1%201.97-1.55%202.25-.65.4-1.47.4-2.12%200-.45-.28-.81-.93-1.55-2.25l-25.26-45.15c-.45-.81-.68-1.22-.99-1.46-.44-.36-1.01-.51-1.57-.42-.39.06-.79.29-1.58.77l-44.46%2026.47c-1.29.77-1.94%201.16-2.46%201.17-.77.03-1.47-.38-1.84-1.05-.25-.47-.24-1.22-.22-2.73l.7-51.73c.02-.93.02-1.39-.12-1.76-.2-.53-.62-.95-1.15-1.15-.37-.14-.83-.14-1.76-.12l-51.73.7c-1.51.02-2.26.03-2.73-.22a2.01%202.01%200%200%201-1.05-1.84c.01-.52.4-1.17%201.17-2.46l26.47-44.46c.48-.79.71-1.19.77-1.58.09-.56-.06-1.13-.42-1.57-.24-.31-.65-.54-1.46-.99L2.55%20162.61c-1.32-.74-1.97-1.1-2.25-1.55-.4-.65-.4-1.47%200-2.12.28-.45.93-.81%202.25-1.55l45.15-25.26c.81-.45%201.22-.68%201.46-.99.36-.44.51-1.01.42-1.57-.06-.39-.29-.79-.77-1.58L22.34%2083.53c-.77-1.29-1.16-1.94-1.17-2.46-.03-.77.38-1.47%201.05-1.84.47-.25%201.22-.24%202.73-.22l51.73.7c.93.02%201.39.02%201.76-.12.53-.2.95-.62%201.15-1.15.14-.37.14-.83.12-1.76l-.7-51.73c-.02-1.51-.03-2.26.22-2.73.37-.67%201.07-1.08%201.84-1.05.52.01%201.17.4%202.46%201.17l44.46%2026.47c.79.48%201.19.71%201.58.77.56.09%201.13-.06%201.57-.42.31-.24.54-.65.99-1.46z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M157.39%202.55c.74-1.32%201.1-1.97%201.55-2.25.65-.4%201.47-.4%202.12%200%20.45.28.81.93%201.55%202.25l25.26%2045.15c.45.81.68%201.22.99%201.46.44.36%201.01.51%201.57.42.39-.06.79-.29%201.58-.77l44.46-26.47c1.29-.77%201.94-1.16%202.46-1.17.77-.03%201.47.38%201.84%201.05.25.47.24%201.22.22%202.73l-.7%2051.73c-.02.93-.02%201.39.12%201.76.2.53.62.95%201.15%201.15.37.14.83.14%201.76.12l51.73-.7c1.51-.02%202.26-.03%202.73.22.67.37%201.08%201.07%201.05%201.84-.01.52-.4%201.17-1.17%202.46l-26.47%2044.46c-.48.79-.71%201.19-.77%201.58-.09.56.06%201.13.42%201.57.24.31.65.54%201.46.99l45.15%2025.26c1.32.74%201.97%201.1%202.25%201.55.4.65.4%201.47%200%202.12-.28.45-.93.81-2.25%201.55l-45.15%2025.26c-.81.45-1.22.68-1.46.99-.36.44-.51%201.01-.42%201.57.06.39.29.79.77%201.58l26.47%2044.46c.77%201.29%201.16%201.94%201.17%202.46.03.77-.38%201.47-1.05%201.84-.47.25-1.22.24-2.73.22l-51.73-.7c-.93-.02-1.39-.02-1.76.12-.53.2-.95.62-1.15%201.15-.14.37-.14.83-.12%201.76l.7%2051.73c.02%201.51.03%202.26-.22%202.73-.37.67-1.07%201.08-1.84%201.05-.52-.01-1.17-.4-2.46-1.17l-44.46-26.47c-.79-.48-1.19-.71-1.58-.77-.56-.09-1.13.06-1.57.42-.31.24-.54.65-.99%201.46l-25.26%2045.15c-.74%201.32-1.1%201.97-1.55%202.25-.65.4-1.47.4-2.12%200-.45-.28-.81-.93-1.55-2.25l-25.26-45.15c-.45-.81-.68-1.22-.99-1.46-.44-.36-1.01-.51-1.57-.42-.39.06-.79.29-1.58.77l-44.46%2026.47c-1.29.77-1.94%201.16-2.46%201.17-.77.03-1.47-.38-1.84-1.05-.25-.47-.24-1.22-.22-2.73l.7-51.73c.02-.93.02-1.39-.12-1.76-.2-.53-.62-.95-1.15-1.15-.37-.14-.83-.14-1.76-.12l-51.73.7c-1.51.02-2.26.03-2.73-.22a2.01%202.01%200%200%201-1.05-1.84c.01-.52.4-1.17%201.17-2.46l26.47-44.46c.48-.79.71-1.19.77-1.58.09-.56-.06-1.13-.42-1.57-.24-.31-.65-.54-1.46-.99L2.55%20162.61c-1.32-.74-1.97-1.1-2.25-1.55-.4-.65-.4-1.47%200-2.12.28-.45.93-.81%202.25-1.55l45.15-25.26c.81-.45%201.22-.68%201.46-.99.36-.44.51-1.01.42-1.57-.06-.39-.29-.79-.77-1.58L22.34%2083.53c-.77-1.29-1.16-1.94-1.17-2.46-.03-.77.38-1.47%201.05-1.84.47-.25%201.22-.24%202.73-.22l51.73.7c.93.02%201.39.02%201.76-.12.53-.2.95-.62%201.15-1.15.14-.37.14-.83.12-1.76l-.7-51.73c-.02-1.51-.03-2.26.22-2.73.37-.67%201.07-1.08%201.84-1.05.52.01%201.17.4%202.46%201.17l44.46%2026.47c.79.48%201.19.71%201.58.77.56.09%201.13-.06%201.57-.42.31-.24.54-.65.99-1.46z'/%3e%3c/svg%3e")}.shape.circle{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M320%20160c0%2088.366-71.634%20160-160%20160S0%20248.366%200%20160%2071.635%200%20160%200c88.366%200%20160%2071.635%20160%20160'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M320%20160c0%2088.366-71.634%20160-160%20160S0%20248.366%200%20160%2071.635%200%20160%200c88.366%200%20160%2071.635%20160%20160'/%3e%3c/svg%3e")}.shape.clamshell{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='254'%20fill='none'%20viewBox='0%200%20320%20254'%3e%3cpath%20fill='%23d0bcff'%20d='M306.405%2084.081c6.709%2013.51%2010.063%2020.265%2011.757%2027.322a67.1%2067.1%200%200%201%200%2031.194c-1.694%207.057-5.048%2013.812-11.757%2027.322l-20.438%2041.16c-6.709%2013.51-10.063%2020.265-14.472%2025.501-6.375%207.568-14.411%2012.963-23.236%2015.597C242.155%20254%20235.446%20254%20222.028%20254H97.972c-13.418%200-20.127%200-26.231-1.822-8.825-2.635-16.861-8.029-23.236-15.598-4.409-5.235-7.763-11.991-14.472-25.501l-20.438-41.16c-6.709-13.51-10.063-20.265-11.757-27.322a67.1%2067.1%200%200%201%200-31.194c1.694-7.057%205.048-13.812%2011.757-27.322l20.438-41.16c6.709-13.51%2010.063-20.266%2014.472-25.501C54.88%209.851%2062.916%204.457%2071.741%201.822%2077.845%200%2084.554%200%2097.972%200h124.056c13.418%200%2020.127%200%2026.231%201.822%208.825%202.635%2016.861%208.029%2023.236%2015.598%204.409%205.235%207.763%2011.99%2014.472%2025.501z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='254'%20fill='none'%20viewBox='0%200%20320%20254'%3e%3cpath%20fill='%23d0bcff'%20d='M306.405%2084.081c6.709%2013.51%2010.063%2020.265%2011.757%2027.322a67.1%2067.1%200%200%201%200%2031.194c-1.694%207.057-5.048%2013.812-11.757%2027.322l-20.438%2041.16c-6.709%2013.51-10.063%2020.265-14.472%2025.501-6.375%207.568-14.411%2012.963-23.236%2015.597C242.155%20254%20235.446%20254%20222.028%20254H97.972c-13.418%200-20.127%200-26.231-1.822-8.825-2.635-16.861-8.029-23.236-15.598-4.409-5.235-7.763-11.991-14.472-25.501l-20.438-41.16c-6.709-13.51-10.063-20.265-11.757-27.322a67.1%2067.1%200%200%201%200-31.194c1.694-7.057%205.048-13.812%2011.757-27.322l20.438-41.16c6.709-13.51%2010.063-20.266%2014.472-25.501C54.88%209.851%2062.916%204.457%2071.741%201.822%2077.845%200%2084.554%200%2097.972%200h124.056c13.418%200%2020.127%200%2026.231%201.822%208.825%202.635%2016.861%208.029%2023.236%2015.598%204.409%205.235%207.763%2011.99%2014.472%2025.501z'/%3e%3c/svg%3e")}.shape.diamond{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='268'%20height='320'%20fill='none'%20viewBox='0%200%20268%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M191.442%20276.481c-16.836%2022.033-25.254%2033.049-34.976%2038.067a49.02%2049.02%200%200%201-44.932%200c-9.722-5.018-18.14-16.034-34.976-38.067l-55.912-73.173c-10.24-13.402-15.36-20.102-17.895-27.276a48.1%2048.1%200%200%201%200-32.064c2.535-7.174%207.655-13.874%2017.895-27.276l55.912-73.173c16.836-22.033%2025.254-33.05%2034.976-38.067a49.02%2049.02%200%200%201%2044.932%200c9.722%205.018%2018.14%2016.034%2034.976%2038.068l55.912%2073.172c10.24%2013.402%2015.36%2020.102%2017.895%2027.276a48.1%2048.1%200%200%201%200%2032.064c-2.535%207.174-7.655%2013.874-17.895%2027.276z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='268'%20height='320'%20fill='none'%20viewBox='0%200%20268%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M191.442%20276.481c-16.836%2022.033-25.254%2033.049-34.976%2038.067a49.02%2049.02%200%200%201-44.932%200c-9.722-5.018-18.14-16.034-34.976-38.067l-55.912-73.173c-10.24-13.402-15.36-20.102-17.895-27.276a48.1%2048.1%200%200%201%200-32.064c2.535-7.174%207.655-13.874%2017.895-27.276l55.912-73.173c16.836-22.033%2025.254-33.05%2034.976-38.067a49.02%2049.02%200%200%201%2044.932%200c9.722%205.018%2018.14%2016.034%2034.976%2038.068l55.912%2073.172c10.24%2013.402%2015.36%2020.102%2017.895%2027.276a48.1%2048.1%200%200%201%200%2032.064c-2.535%207.174-7.655%2013.874-17.895%2027.276z'/%3e%3c/svg%3e")}.shape.fan{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='280'%20height='280'%20fill='none'%20viewBox='0%200%20280%20280'%3e%3cpath%20fill='%23d0bcff'%20d='M0%2044.21c0-1.56%200-2.34.02-2.999C.717%2018.757%2018.757.717%2041.211.021c.66-.021%201.44-.021%203-.021C52.53%200%2056.69%200%2060.208.11%20179.96%203.825%20276.17%20100.037%20279.89%20219.791c.11%203.518.11%207.678.11%2015.997%200%201.56%200%202.34-.02%203-.7%2022.454-18.74%2040.494-41.19%2041.191-.66.02-1.44.02-3%20.02H62.945c-19.018%200-28.528%200-36.071-2.987a42.53%2042.53%200%200%201-23.887-23.887C0%20245.583%200%20236.073%200%20217.055z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='280'%20height='280'%20fill='none'%20viewBox='0%200%20280%20280'%3e%3cpath%20fill='%23d0bcff'%20d='M0%2044.21c0-1.56%200-2.34.02-2.999C.717%2018.757%2018.757.717%2041.211.021c.66-.021%201.44-.021%203-.021C52.53%200%2056.69%200%2060.208.11%20179.96%203.825%20276.17%20100.037%20279.89%20219.791c.11%203.518.11%207.678.11%2015.997%200%201.56%200%202.34-.02%203-.7%2022.454-18.74%2040.494-41.19%2041.191-.66.02-1.44.02-3%20.02H62.945c-19.018%200-28.528%200-36.071-2.987a42.53%2042.53%200%200%201-23.887-23.887C0%20245.583%200%20236.073%200%20217.055z'/%3e%3c/svg%3e")}.shape.flower{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20fill-rule='evenodd'%20d='M273.13%2046.863c-11.88-11.875-38.94-6.003-71.58%2012.818C191.77%2023.286%20176.79%200%20160%200c-16.8%200-31.78%2023.284-41.55%2059.678-32.65-18.82-59.7-24.69-71.58-12.817-11.87%2011.876-6%2038.935%2012.82%2071.585C23.29%20128.222%200%20143.204%200%20160c0%2016.793%2023.28%2031.773%2059.68%2041.549-18.83%2032.651-24.7%2059.712-12.83%2071.588%2011.88%2011.876%2038.94%206.001%2071.59-12.827C128.22%20296.711%20143.2%20320%20160%20320c16.79%200%2031.77-23.291%2041.55-59.693%2032.66%2018.829%2059.72%2024.705%2071.6%2012.829%2011.87-11.876%206-38.936-12.83-71.587C296.72%20191.773%20320%20176.793%20320%20160c0-16.796-23.29-31.778-59.7-41.554%2018.83-32.65%2024.7-59.708%2012.83-71.583'%20clip-rule='evenodd'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20fill-rule='evenodd'%20d='M273.13%2046.863c-11.88-11.875-38.94-6.003-71.58%2012.818C191.77%2023.286%20176.79%200%20160%200c-16.8%200-31.78%2023.284-41.55%2059.678-32.65-18.82-59.7-24.69-71.58-12.817-11.87%2011.876-6%2038.935%2012.82%2071.585C23.29%20128.222%200%20143.204%200%20160c0%2016.793%2023.28%2031.773%2059.68%2041.549-18.83%2032.651-24.7%2059.712-12.83%2071.588%2011.88%2011.876%2038.94%206.001%2071.59-12.827C128.22%20296.711%20143.2%20320%20160%20320c16.79%200%2031.77-23.291%2041.55-59.693%2032.66%2018.829%2059.72%2024.705%2071.6%2012.829%2011.87-11.876%206-38.936-12.83-71.587C296.72%20191.773%20320%20176.793%20320%20160c0-16.796-23.29-31.778-59.7-41.554%2018.83-32.65%2024.7-59.708%2012.83-71.583'%20clip-rule='evenodd'/%3e%3c/svg%3e")}.shape.gem{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='302'%20height='312'%20fill='none'%20viewBox='0%200%20302%20312'%3e%3cpath%20fill='%23d0bcff'%20d='M92.48%2026.632c18.16-13.196%2027.25-19.794%2036.93-23.074a67.3%2067.3%200%200%201%2043.18%200c9.68%203.28%2018.77%209.878%2036.93%2023.074l40.85%2029.673c10.79%207.836%2016.19%2011.754%2020.58%2016.458a67.2%2067.2%200%200%201%2014.32%2023.618c2.14%206.073%203.11%2012.667%205.07%2025.855l7.56%2051.001c3.43%2023.136%205.15%2034.704%203.42%2045.13a67.3%2067.3%200%200%201-21.46%2039.064c-7.87%207.055-18.56%2011.814-39.93%2021.332l-48.41%2021.563c-12.9%205.744-19.35%208.615-25.97%2010.083a67.3%2067.3%200%200%201-29.1%200c-6.62-1.468-13.07-4.339-25.97-10.083l-48.41-21.563c-21.37-9.518-32.06-14.277-39.93-21.332A67.3%2067.3%200%200%201%20.68%20218.367c-1.73-10.426-.01-21.994%203.42-45.13l7.56-51.001c1.96-13.188%202.93-19.782%205.07-25.855a67.2%2067.2%200%200%201%2014.32-23.618c4.39-4.704%209.79-8.622%2020.58-16.458z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='302'%20height='312'%20fill='none'%20viewBox='0%200%20302%20312'%3e%3cpath%20fill='%23d0bcff'%20d='M92.48%2026.632c18.16-13.196%2027.25-19.794%2036.93-23.074a67.3%2067.3%200%200%201%2043.18%200c9.68%203.28%2018.77%209.878%2036.93%2023.074l40.85%2029.673c10.79%207.836%2016.19%2011.754%2020.58%2016.458a67.2%2067.2%200%200%201%2014.32%2023.618c2.14%206.073%203.11%2012.667%205.07%2025.855l7.56%2051.001c3.43%2023.136%205.15%2034.704%203.42%2045.13a67.3%2067.3%200%200%201-21.46%2039.064c-7.87%207.055-18.56%2011.814-39.93%2021.332l-48.41%2021.563c-12.9%205.744-19.35%208.615-25.97%2010.083a67.3%2067.3%200%200%201-29.1%200c-6.62-1.468-13.07-4.339-25.97-10.083l-48.41-21.563c-21.37-9.518-32.06-14.277-39.93-21.332A67.3%2067.3%200%200%201%20.68%20218.367c-1.73-10.426-.01-21.994%203.42-45.13l7.56-51.001c1.96-13.188%202.93-19.782%205.07-25.855a67.2%2067.2%200%200%201%2014.32-23.618c4.39-4.704%209.79-8.622%2020.58-16.458z'/%3e%3c/svg%3e")}.shape.ghost-ish{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='304'%20height='304'%20fill='none'%20viewBox='0%200%20304%20304'%3e%3cpath%20fill='%23d0bcff'%20d='M0%20144.762C0%2064.812%2068.053%200%20152%200s152%2064.812%20152%20144.762v101.333c0%2031.98-27.221%2057.905-60.8%2057.905-9.953%200-19.347-2.278-27.64-6.315-4.225-2.058-8.441-4.313-12.675-6.578-14.899-7.971-30.019-16.059-46.558-16.059h-8.654c-16.539%200-31.659%208.088-46.558%2016.059-4.234%202.265-8.45%204.52-12.675%206.578C80.147%20301.722%2070.753%20304%2060.8%20304%2027.221%20304%200%20278.075%200%20246.095z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='304'%20height='304'%20fill='none'%20viewBox='0%200%20304%20304'%3e%3cpath%20fill='%23d0bcff'%20d='M0%20144.762C0%2064.812%2068.053%200%20152%200s152%2064.812%20152%20144.762v101.333c0%2031.98-27.221%2057.905-60.8%2057.905-9.953%200-19.347-2.278-27.64-6.315-4.225-2.058-8.441-4.313-12.675-6.578-14.899-7.971-30.019-16.059-46.558-16.059h-8.654c-16.539%200-31.659%208.088-46.558%2016.059-4.234%202.265-8.45%204.52-12.675%206.578C80.147%20301.722%2070.753%20304%2060.8%20304%2027.221%20304%200%20278.075%200%20246.095z'/%3e%3c/svg%3e")}.shape.heart{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='286'%20fill='none'%20viewBox='0%200%20320%20286'%3e%3cpath%20fill='%23d0bcff'%20d='M251.1.13c-21.661%200-40.987%2010.17-53.619%2026.07L160%2067.51v-.13l-37.481-41.32C109.887%2010.17%2090.561%200%2068.9%200%2030.848%200%200%2031.37%200%2070.06c0%2034%2028.375%2059.41%2048.919%2083.82%2020.47%2024.33%2040.937%2048.64%2061.404%2072.96l45.949%2054.6c1.244%201.47%202.484%202.95%203.728%204.43v.13c1.244-1.48%202.484-2.95%203.728-4.43%2015.315-18.2%2030.63-36.39%2045.949-54.59l61.404-72.96C291.625%20129.61%20320%20104.2%20320%2070.19%20320%2031.5%20289.152.13%20251.1.13'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='286'%20fill='none'%20viewBox='0%200%20320%20286'%3e%3cpath%20fill='%23d0bcff'%20d='M251.1.13c-21.661%200-40.987%2010.17-53.619%2026.07L160%2067.51v-.13l-37.481-41.32C109.887%2010.17%2090.561%200%2068.9%200%2030.848%200%200%2031.37%200%2070.06c0%2034%2028.375%2059.41%2048.919%2083.82%2020.47%2024.33%2040.937%2048.64%2061.404%2072.96l45.949%2054.6c1.244%201.47%202.484%202.95%203.728%204.43v.13c1.244-1.48%202.484-2.95%203.728-4.43%2015.315-18.2%2030.63-36.39%2045.949-54.59l61.404-72.96C291.625%20129.61%20320%20104.2%20320%2070.19%20320%2031.5%20289.152.13%20251.1.13'/%3e%3c/svg%3e")}.shape.leaf-clover4{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='296'%20height='296'%20fill='none'%20viewBox='0%200%20296%20296'%3e%3cpath%20fill='%23d0bcff'%20d='M21%20148C7.9%20132.34%200%20112.13%200%2090.06%200%2040.32%2040.11%200%2089.6%200c22.39%200%2042.87%208.26%2058.57%2021.91C163.84%208.26%20184.27%200%20206.61%200%20255.98%200%20296%2040.32%20296%2090.06c0%2022.07-7.88%2042.28-20.95%2057.94%2013.07%2015.66%2020.95%2035.87%2020.95%2057.94%200%2049.74-40.02%2090.06-89.39%2090.06-22.34%200-42.77-8.26-58.44-21.91C132.47%20287.74%20111.99%20296%2089.6%20296%2040.11%20296%200%20255.68%200%20205.94c0-22.07%207.9-42.28%2021-57.94'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='296'%20height='296'%20fill='none'%20viewBox='0%200%20296%20296'%3e%3cpath%20fill='%23d0bcff'%20d='M21%20148C7.9%20132.34%200%20112.13%200%2090.06%200%2040.32%2040.11%200%2089.6%200c22.39%200%2042.87%208.26%2058.57%2021.91C163.84%208.26%20184.27%200%20206.61%200%20255.98%200%20296%2040.32%20296%2090.06c0%2022.07-7.88%2042.28-20.95%2057.94%2013.07%2015.66%2020.95%2035.87%2020.95%2057.94%200%2049.74-40.02%2090.06-89.39%2090.06-22.34%200-42.77-8.26-58.44-21.91C132.47%20287.74%20111.99%20296%2089.6%20296%2040.11%20296%200%20255.68%200%20205.94c0-22.07%207.9-42.28%2021-57.94'/%3e%3c/svg%3e")}.shape.leaft-clover8{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M308.58%20160c25.85%2048.16%206.32%2091.77-43.51%20105.06-13.3%2049.84-56.91%2069.36-105.07%2043.52-48.17%2025.85-91.78%206.32-105.07-43.51C5.1%20251.77-14.43%20208.16%2011.42%20160-14.43%20111.83%205.1%2068.22%2054.93%2054.93%2068.22%205.1%20111.83-14.43%20160%2011.42c48.16-25.85%2091.77-6.32%20105.06%2043.51%2049.84%2013.29%2069.36%2056.9%2043.52%20105.07'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M308.58%20160c25.85%2048.16%206.32%2091.77-43.51%20105.06-13.3%2049.84-56.91%2069.36-105.07%2043.52-48.17%2025.85-91.78%206.32-105.07-43.51C5.1%20251.77-14.43%20208.16%2011.42%20160-14.43%20111.83%205.1%2068.22%2054.93%2054.93%2068.22%205.1%20111.83-14.43%20160%2011.42c48.16-25.85%2091.77-6.32%20105.06%2043.51%2049.84%2013.29%2069.36%2056.9%2043.52%20105.07'/%3e%3c/svg%3e")}.shape.loading-indicator{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='4%204%2040%2040'%20width='40'%20height='40'%3e%3cpath%20fill='%23d0bcff'%3e%3canimate%20attributeName='d'%20calcMode='spline'%20dur='5s'%20keySplines='0.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8'%20keyTimes='0;%200.14;%200.29;%200.43;%200.57;%200.71;%200.86;%201'%20repeatCount='indefinite'%20values='m37.4%2024.7%200.5%200.7%200.8%200.9%200.8%201.0%200.6%201.0%20-0.1%200.8%20-0.0%200.1%20-0.6%200.7%20-1.1%200.5%20-1.3%200.3%20-1.0%200.2%20-0.9%200.4%20-0.7%201.1%200.1%201.0%200.1%201.1%200.0%201.2%20-0.2%201.1%20-0.4%200.5%20-0.3%200.2%20-0.8%200.2%20-1.2%20-0.4%20-1.2%20-0.4%20-1.0%20-0.5%20-0.8%20-0.1%20-1.3%200.5%20-0.5%200.8%20-0.6%200.9%20-0.6%201.0%20-0.8%200.8%20-0.8%200.2%20-0.1%20-0.0%20-0.9%20-0.3%20-0.8%20-1.0%20-0.6%20-1.0%20-0.6%20-0.9%20-0.5%20-0.7%20-1.3%20-0.3%20-0.9%200.2%20-0.9%200.4%20-1.2%200.5%20-1.2%200.3%20-0.8%20-0.3%20-0.0%20-0.1%20-0.6%20-0.6%20-0.1%20-1.2%200.1%20-1.2%200.0%20-1.1%200.0%20-0.9%20-0.7%20-1.1%20-0.9%20-0.3%20-1.1%20-0.3%20-1.2%20-0.3%20-1.1%20-0.4%20-0.5%20-0.8%20-0.0%200.0%20-0.1%20-0.9%200.6%20-1.0%200.8%20-0.9%200.8%20-0.9%200.5%20-0.7%20-0.0%20-1.4%20-0.5%20-0.7%20-0.8%20-0.9%20-0.8%20-0.9%20-0.6%20-1.0%200.1%20-0.9%200.0%20-0.0%200.5%20-0.8%201.1%20-0.4%201.2%20-0.3%201.1%20-0.3%200.9%20-0.3%200.7%20-1.1%200.0%20-0.9%20-0.0%20-1.1%20-0.1%20-1.2%200.1%20-1.2%200.6%20-0.6%200.0%20-0.1%200.8%20-0.3%201.2%200.3%201.2%200.5%200.9%200.4%200.9%200.2%201.3%20-0.3%200.5%20-0.7%200.6%20-0.9%200.6%20-1.0%200.8%20-1.0%200.9%20-0.3%200.1%200.0%200.8%200.2%200.8%200.8%200.6%201.0%200.6%200.9%200.5%200.8%201.3%200.5%200.8%20-0.1%201.0%20-0.5%201.2%20-0.4%201.2%20-0.4%200.8%200.2%200.3%200.2%200.4%200.5%200.2%201.1%20-0.0%201.2%20-0.1%201.1%20-0.1%201.0%200.7%201.1%200.9%200.4%201.0%200.2%201.3%200.3%201.1%200.5%200.6%200.7%200.0%200.1%200.1%200.8%20-0.5%201.0%20-0.9%201.0%20-0.8%200.9%20-0.5%200.7%20z;m39.9%2024.0%20-0.3%200.8%20-0.4%200.8%20-0.3%200.8%20-0.2%201.5%200.1%200.9%200.1%200.9%20-0.1%200.9%20-0.2%200.8%20-0.3%200.8%20-0.2%200.4%20-0.3%200.4%20-0.5%200.7%20-0.7%200.5%20-0.8%200.4%20-0.8%200.4%20-0.8%200.4%20-1.2%201.0%20-0.5%200.7%20-0.5%200.8%20-0.6%200.6%20-0.6%200.6%20-0.8%200.4%20-0.4%200.2%20-0.5%200.1%20-0.9%200.2%20-0.8%20-0.0%20-0.9%20-0.2%20-0.9%20-0.3%20-0.8%20-0.1%20-1.6%20-0.1%20-0.8%200.2%20-0.9%200.3%20-0.9%200.2%20-0.8%20-0.0%20-0.9%20-0.2%20-0.5%20-0.1%20-0.4%20-0.2%20-0.8%20-0.4%20-0.6%20-0.5%20-0.6%20-0.7%20-0.5%20-0.8%20-0.5%20-0.7%20-1.2%20-1.0%20-0.7%20-0.4%20-0.9%20-0.4%20-0.8%20-0.4%20-0.6%20-0.5%20-0.6%20-0.7%20-0.3%20-0.4%20-0.2%20-0.4%20-0.3%20-0.8%20-0.2%20-0.8%20-0.1%20-0.9%200.1%20-0.9%200.1%20-0.9%20-0.2%20-1.5%20-0.3%20-0.8%20-0.4%20-0.8%20-0.3%20-0.8%20-0.2%20-0.8%20-0.1%20-0.9%200.1%20-0.7%20-0.0%20-0.2%200.2%20-0.8%200.4%20-0.8%200.5%20-0.7%200.6%20-0.6%200.7%20-0.7%200.5%20-0.6%200.6%20-1.3%200.3%20-0.9%200.2%20-0.8%200.3%20-0.8%200.5%20-0.7%200.5%20-0.6%200.2%20-0.2%200.5%20-0.4%200.8%20-0.4%200.8%20-0.3%200.8%20-0.2%200.9%20-0.0%200.8%20-0.1%201.4%20-0.5%200.7%20-0.4%200.7%20-0.5%200.7%20-0.5%200.8%20-0.3%200.8%20-0.2%200.9%20-0.1%200.0%20-0.0%200.8%200.1%200.9%200.2%200.8%200.3%200.7%200.5%200.7%200.5%200.7%200.4%201.4%200.5%200.8%200.1%200.9%200.0%200.9%200.2%200.8%200.3%200.7%200.4%200.5%200.4%200.2%200.1%200.5%200.7%200.5%200.7%200.3%200.8%200.2%200.8%200.3%200.9%200.6%201.3%200.5%200.6%200.7%200.7%200.6%200.6%200.5%200.7%200.4%200.8%200.2%200.8%200.0%200.2%200.1%200.7%20-0.1%200.9%20z;m38.9%2024.2%20-0.2%200.8%20-0.2%200.7%20-0.3%200.8%20-0.2%200.8%20-0.3%200.7%20-0.2%200.8%20-0.3%200.8%20-0.2%200.7%20-0.3%200.8%20-0.2%200.8%20-0.3%200.7%20-0.2%200.8%20-0.4%201.0%20-0.4%200.8%20-0.4%200.8%20-0.6%200.6%20-0.7%200.5%200.0%200.1%20-0.7%200.4%20-0.8%200.3%20-0.8%200.3%20-0.9%200.1%20-1.1%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-1.1%20-0.0%20-0.9%20-0.1%20-0.8%20-0.3%20-0.8%20-0.3%20-0.7%20-0.5%20-0.1%200.0%20-0.6%20-0.5%20-0.6%20-0.7%20-0.4%20-0.7%20-0.4%20-0.8%20-0.4%20-1.0%20-0.2%20-0.8%20-0.3%20-0.7%20-0.2%20-0.8%20-0.3%20-0.8%20-0.2%20-0.7%20-0.3%20-0.8%20-0.2%20-0.8%20-0.3%20-0.7%20-0.2%20-0.8%20-0.3%20-0.7%20-0.2%20-0.8%20-0.3%20-0.8%20-0.2%20-0.7%20-0.3%20-1.1%20-0.2%20-0.9%20-0.0%20-0.8%200.0%20-0.9%200.2%20-0.8%200.1%20-0.1%200.3%20-0.7%200.4%20-0.8%200.6%20-0.6%200.6%20-0.6%200.9%20-0.7%200.6%20-0.5%200.7%20-0.4%200.6%20-0.5%200.7%20-0.5%200.6%20-0.4%200.7%20-0.5%200.6%20-0.5%200.7%20-0.5%200.6%20-0.4%200.7%20-0.5%200.6%20-0.5%200.7%20-0.4%200.6%20-0.5%200.9%20-0.7%200.8%20-0.4%200.8%20-0.3%200.8%20-0.2%200.8%20-0.0%200.1%20-0.0%200.9%200.0%200.8%200.2%200.8%200.3%200.8%200.4%200.9%200.7%200.6%200.5%200.7%200.4%200.6%200.5%200.7%200.5%200.6%200.4%200.7%200.5%200.6%200.5%200.7%200.5%200.6%200.4%200.7%200.5%200.6%200.5%200.7%200.4%200.6%200.5%200.9%200.7%200.6%200.6%200.6%200.7%200.4%200.7%200.3%200.7%200.0%200.1%200.2%200.8%200.1%200.9%20-0.0%200.9%20-0.2%200.8%20-0.3%201.1%20z;m39.6%2024.0%20-0.1%200.8%20-0.3%200.8%20-0.2%200.8%20-0.3%200.7%20-0.3%200.8%20-0.4%200.7%20-0.4%200.7%20-0.5%200.6%20-0.4%200.6%20-0.6%200.6%20-0.6%200.6%20-0.4%200.4%20-0.6%200.6%20-0.4%200.5%20-0.9%200.8%20-0.5%200.5%20-0.6%200.6%20-0.4%200.4%20-0.7%200.7%20-0.5%200.5%20-0.6%200.4%20-0.7%200.5%20-0.6%200.4%20-0.7%200.4%20-0.7%200.3%20-0.8%200.3%20-0.8%200.3%20-0.8%200.2%20-0.8%200.1%20-0.8%200.1%20-0.8%200.1%20-0.9%200.0%20-0.8%20-0.0%20-0.9%20-0.1%20-0.8%20-0.2%20-0.8%20-0.2%20-0.9%20-0.2%20-0.8%20-0.3%20-0.8%20-0.4%20-0.8%20-0.4%20-0.7%20-0.5%20-0.7%20-0.5%20-0.7%20-0.5%20-0.6%20-0.6%20-0.1%20-0.1%20-0.5%20-0.6%20-0.6%20-0.7%20-0.5%20-0.7%20-0.5%20-0.8%20-0.4%20-0.7%20-0.4%20-0.8%20-0.3%20-0.8%20-0.2%20-0.8%20-0.2%20-0.9%20-0.2%20-0.8%20-0.1%20-0.9%200.0%20-0.8%200.0%20-0.9%200.1%20-0.8%200.1%20-0.8%200.1%20-0.8%200.3%20-0.8%200.2%20-0.8%200.3%20-0.7%200.4%20-0.8%200.3%20-0.7%200.5%20-0.6%200.4%20-0.7%200.4%20-0.5%200.6%20-0.6%200.6%20-0.7%200.4%20-0.4%200.6%20-0.6%200.5%20-0.4%200.8%20-0.9%200.5%20-0.5%200.6%20-0.6%200.4%20-0.4%200.7%20-0.7%200.5%20-0.5%200.6%20-0.4%200.7%20-0.5%200.6%20-0.4%200.7%20-0.4%200.7%20-0.3%200.8%20-0.3%200.8%20-0.3%200.8%20-0.2%200.8%20-0.1%200.8%20-0.1%200.8%20-0.1%200.9%20-0.0%200.8%200.0%200.9%200.1%200.8%200.2%200.8%200.2%200.9%200.2%200.8%200.4%200.8%200.3%200.8%200.4%200.7%200.5%200.7%200.5%200.7%200.5%200.6%200.7%200.1%20-0.0%200.5%200.6%200.6%200.7%200.5%200.7%200.5%200.8%200.4%200.7%200.3%200.8%200.4%200.8%200.2%200.8%200.2%200.9%200.2%200.8%200.1%200.9%200.0%200.8%20-0.0%200.8%20-0.1%200.9%20z;m40.0%2024.0%20-0.1%200.8%20-0.5%200.8%20-0.6%200.8%20-0.6%200.6%20-0.6%200.7%20-0.5%200.6%20-0.7%201.2%20-0.1%200.7%20-0.1%200.8%20-0.0%200.9%20-0.1%200.9%20-0.1%200.9%20-0.2%200.9%20-0.5%200.7%20-0.0%200.0%20-0.7%200.5%20-0.9%200.2%20-0.9%200.1%20-0.9%200.1%20-0.8%200.0%20-0.8%200.1%20-0.8%200.1%20-1.2%200.7%20-0.6%200.5%20-0.7%200.6%20-0.6%200.6%20-0.8%200.6%20-0.8%200.5%20-0.8%200.1%20-0.0%200.0%20-0.8%20-0.1%20-0.8%20-0.5%20-0.8%20-0.6%20-0.6%20-0.6%20-0.7%20-0.6%20-0.6%20-0.5%20-1.2%20-0.7%20-0.7%20-0.1%20-0.8%20-0.1%20-0.9%20-0.0%20-0.9%20-0.1%20-0.9%20-0.1%20-0.9%20-0.2%20-0.7%20-0.5%20-0.0%200.0%20-0.5%20-0.7%20-0.2%20-0.9%20-0.1%20-0.9%20-0.1%20-0.9%20-0.0%20-0.8%20-0.1%20-0.8%20-0.1%20-0.8%20-0.7%20-1.2%20-0.5%20-0.6%20-0.6%20-0.7%20-0.6%20-0.6%20-0.6%20-0.8%20-0.5%20-0.8%20-0.1%20-0.8%20-0.0%20-0.0%200.1%20-0.8%200.5%20-0.8%200.6%20-0.8%200.6%20-0.6%200.6%20-0.7%200.5%20-0.6%200.7%20-1.2%200.1%20-0.7%200.1%20-0.8%200.0%20-0.9%200.1%20-0.9%200.1%20-0.9%200.2%20-0.9%200.5%20-0.7%20-0.0%20-0.0%200.7%20-0.5%200.9%20-0.2%200.9%20-0.1%200.9%20-0.1%200.8%20-0.0%200.8%20-0.1%200.8%20-0.1%201.2%20-0.7%200.6%20-0.5%200.7%20-0.6%200.6%20-0.6%200.8%20-0.6%200.8%20-0.5%200.8%20-0.1%200.0%20-0.0%200.8%200.1%200.8%200.5%200.8%200.6%200.6%200.6%200.7%200.6%200.6%200.5%201.2%200.7%200.7%200.1%200.8%200.1%200.9%200.0%200.9%200.1%200.9%200.1%200.9%200.2%200.7%200.5%200.0%20-0.0%200.5%200.7%200.2%200.9%200.1%200.9%200.1%200.9%200.0%200.8%200.1%200.8%200.1%200.8%200.7%201.2%200.5%200.6%200.6%200.7%200.6%200.6%200.6%200.8%200.5%200.8%200.1%200.8%20z;m36.9%2024.6%200.1%200.7%200.2%200.8%200.2%200.7%200.4%200.9%200.4%200.9%200.2%200.9%200.1%201.0%200.1%200.9%20-0.1%200.9%20-0.3%200.9%20-0.3%200.9%20-0.4%200.8%20-0.5%200.8%20-0.6%200.6%20-0.1%200.1%20-0.6%200.6%20-0.8%200.5%20-0.8%200.4%20-0.9%200.3%20-0.9%200.3%20-0.9%200.1%20-0.9%20-0.1%20-1.0%20-0.1%20-0.9%20-0.2%20-0.9%20-0.4%20-0.9%20-0.4%20-0.7%20-0.2%20-0.8%20-0.2%20-0.7%20-0.1%20-1.2%200.0%20-0.7%200.1%20-0.8%200.2%20-0.7%200.2%20-0.9%200.4%20-0.9%200.4%20-0.9%200.2%20-1.0%200.1%20-0.9%200.1%20-0.9%20-0.1%20-0.9%20-0.3%20-0.9%20-0.3%20-0.8%20-0.4%20-0.8%20-0.5%20-0.6%20-0.6%20-0.1%20-0.1%20-0.6%20-0.6%20-0.5%20-0.8%20-0.4%20-0.8%20-0.3%20-0.9%20-0.3%20-0.9%20-0.1%20-0.9%200.1%20-0.9%200.1%20-1.0%200.2%20-0.9%200.4%20-0.9%200.4%20-0.9%200.2%20-0.7%200.2%20-0.8%200.1%20-0.7%20-0.0%20-1.2%20-0.1%20-0.7%20-0.2%20-0.8%20-0.2%20-0.7%20-0.4%20-0.9%20-0.4%20-0.9%20-0.2%20-0.9%20-0.1%20-1.0%20-0.1%20-0.9%200.1%20-0.9%200.3%20-0.9%200.3%20-0.9%200.4%20-0.8%200.5%20-0.8%200.6%20-0.6%200.1%20-0.1%200.6%20-0.6%200.8%20-0.5%200.8%20-0.4%200.9%20-0.3%200.9%20-0.3%200.9%20-0.1%200.9%200.1%201.0%200.1%200.9%200.2%200.9%200.4%200.9%200.4%200.7%200.2%200.8%200.2%200.7%200.1%201.2%20-0.0%200.7%20-0.1%200.8%20-0.2%200.7%20-0.2%200.9%20-0.4%200.9%20-0.4%200.9%20-0.2%201.0%20-0.1%200.9%20-0.1%200.9%200.1%200.9%200.3%200.9%200.3%200.8%200.4%200.8%200.5%200.6%200.6%200.1%200.1%200.6%200.6%200.5%200.8%200.4%200.8%200.3%200.9%200.3%200.9%200.1%200.9%20-0.1%200.9%20-0.1%201.0%20-0.2%200.9%20-0.4%200.9%20-0.4%200.9%20-0.2%200.7%20-0.2%200.8%20-0.1%200.7%20z;m37.7%2024.0%20-0.3%200.7%20-0.4%200.7%20-0.3%200.6%20-0.3%200.7%20-0.4%200.6%20-0.3%200.5%20-0.4%200.6%20-0.4%200.5%20-0.4%200.5%20-0.4%200.5%20-0.4%200.5%20-0.4%200.5%20-0.3%200.4%20-0.5%200.4%20-0.8%200.8%20-0.4%200.5%20-0.4%200.3%20-0.5%200.4%20-0.5%200.4%20-0.5%200.4%20-0.5%200.4%20-0.5%200.4%20-0.6%200.4%20-0.5%200.3%20-0.6%200.4%20-0.7%200.3%20-0.6%200.3%20-0.7%200.4%20-0.7%200.3%20-0.7%200.2%20-0.7%200.3%20-0.9%200.3%20-0.8%200.2%20-0.8%200.1%20-0.9%200.1%20-1.0%200.1%20-0.9%20-0.0%20-0.9%20-0.1%20-0.9%20-0.1%20-0.9%20-0.3%20-0.9%20-0.3%20-0.8%20-0.4%20-0.8%20-0.6%20-0.7%20-0.6%20-0.0%200.0%20-0.6%20-0.7%20-0.6%20-0.8%20-0.4%20-0.8%20-0.3%20-0.9%20-0.3%20-0.9%20-0.1%20-0.9%20-0.1%20-0.9%200.0%20-0.9%200.1%20-1.0%200.1%20-0.9%200.1%20-0.8%200.2%20-0.8%200.3%20-0.9%200.3%20-0.7%200.2%20-0.7%200.3%20-0.7%200.4%20-0.7%200.3%20-0.6%200.3%20-0.7%200.4%20-0.6%200.3%20-0.5%200.4%20-0.6%200.4%20-0.5%200.4%20-0.5%200.4%20-0.5%200.4%20-0.5%200.4%20-0.5%200.3%20-0.4%200.5%20-0.4%200.8%20-0.8%200.4%20-0.5%200.4%20-0.3%200.5%20-0.4%200.5%20-0.4%200.5%20-0.4%200.5%20-0.4%200.5%20-0.4%200.6%20-0.4%200.5%20-0.3%200.6%20-0.4%200.7%20-0.3%200.6%20-0.3%200.7%20-0.4%200.7%20-0.3%200.7%20-0.2%200.7%20-0.3%200.9%20-0.3%200.8%20-0.2%200.8%20-0.1%200.9%20-0.1%201.0%20-0.1%200.9%200.0%200.9%200.1%200.9%200.1%200.9%200.3%200.9%200.3%200.8%200.4%200.8%200.6%200.7%200.6%20-0.0%200.0%200.6%200.7%200.6%200.8%200.4%200.8%200.3%200.9%200.3%200.9%200.1%200.9%200.1%200.9%20-0.0%200.9%20-0.1%201.0%20-0.1%200.9%20-0.1%200.8%20-0.2%200.8%20-0.3%200.9%20-0.3%200.7%20z;m37.4%2024.7%200.5%200.7%200.8%200.9%200.8%201.0%200.6%201.0%20-0.1%200.8%20-0.0%200.1%20-0.6%200.7%20-1.1%200.5%20-1.3%200.3%20-1.0%200.2%20-0.9%200.4%20-0.7%201.1%200.1%201.0%200.1%201.1%200.0%201.2%20-0.2%201.1%20-0.4%200.5%20-0.3%200.2%20-0.8%200.2%20-1.2%20-0.4%20-1.2%20-0.4%20-1.0%20-0.5%20-0.8%20-0.1%20-1.3%200.5%20-0.5%200.8%20-0.6%200.9%20-0.6%201.0%20-0.8%200.8%20-0.8%200.2%20-0.1%20-0.0%20-0.9%20-0.3%20-0.8%20-1.0%20-0.6%20-1.0%20-0.6%20-0.9%20-0.5%20-0.7%20-1.3%20-0.3%20-0.9%200.2%20-0.9%200.4%20-1.2%200.5%20-1.2%200.3%20-0.8%20-0.3%20-0.0%20-0.1%20-0.6%20-0.6%20-0.1%20-1.2%200.1%20-1.2%200.0%20-1.1%200.0%20-0.9%20-0.7%20-1.1%20-0.9%20-0.3%20-1.1%20-0.3%20-1.2%20-0.3%20-1.1%20-0.4%20-0.5%20-0.8%20-0.0%200.0%20-0.1%20-0.9%200.6%20-1.0%200.8%20-0.9%200.8%20-0.9%200.5%20-0.7%20-0.0%20-1.4%20-0.5%20-0.7%20-0.8%20-0.9%20-0.8%20-0.9%20-0.6%20-1.0%200.1%20-0.9%200.0%20-0.0%200.5%20-0.8%201.1%20-0.4%201.2%20-0.3%201.1%20-0.3%200.9%20-0.3%200.7%20-1.1%200.0%20-0.9%20-0.0%20-1.1%20-0.1%20-1.2%200.1%20-1.2%200.6%20-0.6%200.0%20-0.1%200.8%20-0.3%201.2%200.3%201.2%200.5%200.9%200.4%200.9%200.2%201.3%20-0.3%200.5%20-0.7%200.6%20-0.9%200.6%20-1.0%200.8%20-1.0%200.9%20-0.3%200.1%200.0%200.8%200.2%200.8%200.8%200.6%201.0%200.6%200.9%200.5%200.8%201.3%200.5%200.8%20-0.1%201.0%20-0.5%201.2%20-0.4%201.2%20-0.4%200.8%200.2%200.3%200.2%200.4%200.5%200.2%201.1%20-0.0%201.2%20-0.1%201.1%20-0.1%201.0%200.7%201.1%200.9%200.4%201.0%200.2%201.3%200.3%201.1%200.5%200.6%200.7%200.0%200.1%200.1%200.8%20-0.5%201.0%20-0.9%201.0%20-0.8%200.9%20-0.5%200.7%20z'/%3e%3canimateTransform%20attributeName='transform'%20attributeType='XML'%20calcMode='spline'%20dur='5s'%20keySplines='0.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8'%20keyTimes='0;%200.14;%200.29;%200.43;%200.57;%200.71;%200.86;%201'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2024;%20154%2024%2024;%20309%2024%2024;%20463%2024%2024;%20617%2024%2024;%20771%2024%2024;%20926%2024%2024;%201080%2024%2024'/%3e%3c/path%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='4%204%2040%2040'%20width='40'%20height='40'%3e%3cpath%20fill='%23d0bcff'%3e%3canimate%20attributeName='d'%20calcMode='spline'%20dur='5s'%20keySplines='0.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8'%20keyTimes='0;%200.14;%200.29;%200.43;%200.57;%200.71;%200.86;%201'%20repeatCount='indefinite'%20values='m37.4%2024.7%200.5%200.7%200.8%200.9%200.8%201.0%200.6%201.0%20-0.1%200.8%20-0.0%200.1%20-0.6%200.7%20-1.1%200.5%20-1.3%200.3%20-1.0%200.2%20-0.9%200.4%20-0.7%201.1%200.1%201.0%200.1%201.1%200.0%201.2%20-0.2%201.1%20-0.4%200.5%20-0.3%200.2%20-0.8%200.2%20-1.2%20-0.4%20-1.2%20-0.4%20-1.0%20-0.5%20-0.8%20-0.1%20-1.3%200.5%20-0.5%200.8%20-0.6%200.9%20-0.6%201.0%20-0.8%200.8%20-0.8%200.2%20-0.1%20-0.0%20-0.9%20-0.3%20-0.8%20-1.0%20-0.6%20-1.0%20-0.6%20-0.9%20-0.5%20-0.7%20-1.3%20-0.3%20-0.9%200.2%20-0.9%200.4%20-1.2%200.5%20-1.2%200.3%20-0.8%20-0.3%20-0.0%20-0.1%20-0.6%20-0.6%20-0.1%20-1.2%200.1%20-1.2%200.0%20-1.1%200.0%20-0.9%20-0.7%20-1.1%20-0.9%20-0.3%20-1.1%20-0.3%20-1.2%20-0.3%20-1.1%20-0.4%20-0.5%20-0.8%20-0.0%200.0%20-0.1%20-0.9%200.6%20-1.0%200.8%20-0.9%200.8%20-0.9%200.5%20-0.7%20-0.0%20-1.4%20-0.5%20-0.7%20-0.8%20-0.9%20-0.8%20-0.9%20-0.6%20-1.0%200.1%20-0.9%200.0%20-0.0%200.5%20-0.8%201.1%20-0.4%201.2%20-0.3%201.1%20-0.3%200.9%20-0.3%200.7%20-1.1%200.0%20-0.9%20-0.0%20-1.1%20-0.1%20-1.2%200.1%20-1.2%200.6%20-0.6%200.0%20-0.1%200.8%20-0.3%201.2%200.3%201.2%200.5%200.9%200.4%200.9%200.2%201.3%20-0.3%200.5%20-0.7%200.6%20-0.9%200.6%20-1.0%200.8%20-1.0%200.9%20-0.3%200.1%200.0%200.8%200.2%200.8%200.8%200.6%201.0%200.6%200.9%200.5%200.8%201.3%200.5%200.8%20-0.1%201.0%20-0.5%201.2%20-0.4%201.2%20-0.4%200.8%200.2%200.3%200.2%200.4%200.5%200.2%201.1%20-0.0%201.2%20-0.1%201.1%20-0.1%201.0%200.7%201.1%200.9%200.4%201.0%200.2%201.3%200.3%201.1%200.5%200.6%200.7%200.0%200.1%200.1%200.8%20-0.5%201.0%20-0.9%201.0%20-0.8%200.9%20-0.5%200.7%20z;m39.9%2024.0%20-0.3%200.8%20-0.4%200.8%20-0.3%200.8%20-0.2%201.5%200.1%200.9%200.1%200.9%20-0.1%200.9%20-0.2%200.8%20-0.3%200.8%20-0.2%200.4%20-0.3%200.4%20-0.5%200.7%20-0.7%200.5%20-0.8%200.4%20-0.8%200.4%20-0.8%200.4%20-1.2%201.0%20-0.5%200.7%20-0.5%200.8%20-0.6%200.6%20-0.6%200.6%20-0.8%200.4%20-0.4%200.2%20-0.5%200.1%20-0.9%200.2%20-0.8%20-0.0%20-0.9%20-0.2%20-0.9%20-0.3%20-0.8%20-0.1%20-1.6%20-0.1%20-0.8%200.2%20-0.9%200.3%20-0.9%200.2%20-0.8%20-0.0%20-0.9%20-0.2%20-0.5%20-0.1%20-0.4%20-0.2%20-0.8%20-0.4%20-0.6%20-0.5%20-0.6%20-0.7%20-0.5%20-0.8%20-0.5%20-0.7%20-1.2%20-1.0%20-0.7%20-0.4%20-0.9%20-0.4%20-0.8%20-0.4%20-0.6%20-0.5%20-0.6%20-0.7%20-0.3%20-0.4%20-0.2%20-0.4%20-0.3%20-0.8%20-0.2%20-0.8%20-0.1%20-0.9%200.1%20-0.9%200.1%20-0.9%20-0.2%20-1.5%20-0.3%20-0.8%20-0.4%20-0.8%20-0.3%20-0.8%20-0.2%20-0.8%20-0.1%20-0.9%200.1%20-0.7%20-0.0%20-0.2%200.2%20-0.8%200.4%20-0.8%200.5%20-0.7%200.6%20-0.6%200.7%20-0.7%200.5%20-0.6%200.6%20-1.3%200.3%20-0.9%200.2%20-0.8%200.3%20-0.8%200.5%20-0.7%200.5%20-0.6%200.2%20-0.2%200.5%20-0.4%200.8%20-0.4%200.8%20-0.3%200.8%20-0.2%200.9%20-0.0%200.8%20-0.1%201.4%20-0.5%200.7%20-0.4%200.7%20-0.5%200.7%20-0.5%200.8%20-0.3%200.8%20-0.2%200.9%20-0.1%200.0%20-0.0%200.8%200.1%200.9%200.2%200.8%200.3%200.7%200.5%200.7%200.5%200.7%200.4%201.4%200.5%200.8%200.1%200.9%200.0%200.9%200.2%200.8%200.3%200.7%200.4%200.5%200.4%200.2%200.1%200.5%200.7%200.5%200.7%200.3%200.8%200.2%200.8%200.3%200.9%200.6%201.3%200.5%200.6%200.7%200.7%200.6%200.6%200.5%200.7%200.4%200.8%200.2%200.8%200.0%200.2%200.1%200.7%20-0.1%200.9%20z;m38.9%2024.2%20-0.2%200.8%20-0.2%200.7%20-0.3%200.8%20-0.2%200.8%20-0.3%200.7%20-0.2%200.8%20-0.3%200.8%20-0.2%200.7%20-0.3%200.8%20-0.2%200.8%20-0.3%200.7%20-0.2%200.8%20-0.4%201.0%20-0.4%200.8%20-0.4%200.8%20-0.6%200.6%20-0.7%200.5%200.0%200.1%20-0.7%200.4%20-0.8%200.3%20-0.8%200.3%20-0.9%200.1%20-1.1%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-0.8%20-0.0%20-1.1%20-0.0%20-0.9%20-0.1%20-0.8%20-0.3%20-0.8%20-0.3%20-0.7%20-0.5%20-0.1%200.0%20-0.6%20-0.5%20-0.6%20-0.7%20-0.4%20-0.7%20-0.4%20-0.8%20-0.4%20-1.0%20-0.2%20-0.8%20-0.3%20-0.7%20-0.2%20-0.8%20-0.3%20-0.8%20-0.2%20-0.7%20-0.3%20-0.8%20-0.2%20-0.8%20-0.3%20-0.7%20-0.2%20-0.8%20-0.3%20-0.7%20-0.2%20-0.8%20-0.3%20-0.8%20-0.2%20-0.7%20-0.3%20-1.1%20-0.2%20-0.9%20-0.0%20-0.8%200.0%20-0.9%200.2%20-0.8%200.1%20-0.1%200.3%20-0.7%200.4%20-0.8%200.6%20-0.6%200.6%20-0.6%200.9%20-0.7%200.6%20-0.5%200.7%20-0.4%200.6%20-0.5%200.7%20-0.5%200.6%20-0.4%200.7%20-0.5%200.6%20-0.5%200.7%20-0.5%200.6%20-0.4%200.7%20-0.5%200.6%20-0.5%200.7%20-0.4%200.6%20-0.5%200.9%20-0.7%200.8%20-0.4%200.8%20-0.3%200.8%20-0.2%200.8%20-0.0%200.1%20-0.0%200.9%200.0%200.8%200.2%200.8%200.3%200.8%200.4%200.9%200.7%200.6%200.5%200.7%200.4%200.6%200.5%200.7%200.5%200.6%200.4%200.7%200.5%200.6%200.5%200.7%200.5%200.6%200.4%200.7%200.5%200.6%200.5%200.7%200.4%200.6%200.5%200.9%200.7%200.6%200.6%200.6%200.7%200.4%200.7%200.3%200.7%200.0%200.1%200.2%200.8%200.1%200.9%20-0.0%200.9%20-0.2%200.8%20-0.3%201.1%20z;m39.6%2024.0%20-0.1%200.8%20-0.3%200.8%20-0.2%200.8%20-0.3%200.7%20-0.3%200.8%20-0.4%200.7%20-0.4%200.7%20-0.5%200.6%20-0.4%200.6%20-0.6%200.6%20-0.6%200.6%20-0.4%200.4%20-0.6%200.6%20-0.4%200.5%20-0.9%200.8%20-0.5%200.5%20-0.6%200.6%20-0.4%200.4%20-0.7%200.7%20-0.5%200.5%20-0.6%200.4%20-0.7%200.5%20-0.6%200.4%20-0.7%200.4%20-0.7%200.3%20-0.8%200.3%20-0.8%200.3%20-0.8%200.2%20-0.8%200.1%20-0.8%200.1%20-0.8%200.1%20-0.9%200.0%20-0.8%20-0.0%20-0.9%20-0.1%20-0.8%20-0.2%20-0.8%20-0.2%20-0.9%20-0.2%20-0.8%20-0.3%20-0.8%20-0.4%20-0.8%20-0.4%20-0.7%20-0.5%20-0.7%20-0.5%20-0.7%20-0.5%20-0.6%20-0.6%20-0.1%20-0.1%20-0.5%20-0.6%20-0.6%20-0.7%20-0.5%20-0.7%20-0.5%20-0.8%20-0.4%20-0.7%20-0.4%20-0.8%20-0.3%20-0.8%20-0.2%20-0.8%20-0.2%20-0.9%20-0.2%20-0.8%20-0.1%20-0.9%200.0%20-0.8%200.0%20-0.9%200.1%20-0.8%200.1%20-0.8%200.1%20-0.8%200.3%20-0.8%200.2%20-0.8%200.3%20-0.7%200.4%20-0.8%200.3%20-0.7%200.5%20-0.6%200.4%20-0.7%200.4%20-0.5%200.6%20-0.6%200.6%20-0.7%200.4%20-0.4%200.6%20-0.6%200.5%20-0.4%200.8%20-0.9%200.5%20-0.5%200.6%20-0.6%200.4%20-0.4%200.7%20-0.7%200.5%20-0.5%200.6%20-0.4%200.7%20-0.5%200.6%20-0.4%200.7%20-0.4%200.7%20-0.3%200.8%20-0.3%200.8%20-0.3%200.8%20-0.2%200.8%20-0.1%200.8%20-0.1%200.8%20-0.1%200.9%20-0.0%200.8%200.0%200.9%200.1%200.8%200.2%200.8%200.2%200.9%200.2%200.8%200.4%200.8%200.3%200.8%200.4%200.7%200.5%200.7%200.5%200.7%200.5%200.6%200.7%200.1%20-0.0%200.5%200.6%200.6%200.7%200.5%200.7%200.5%200.8%200.4%200.7%200.3%200.8%200.4%200.8%200.2%200.8%200.2%200.9%200.2%200.8%200.1%200.9%200.0%200.8%20-0.0%200.8%20-0.1%200.9%20z;m40.0%2024.0%20-0.1%200.8%20-0.5%200.8%20-0.6%200.8%20-0.6%200.6%20-0.6%200.7%20-0.5%200.6%20-0.7%201.2%20-0.1%200.7%20-0.1%200.8%20-0.0%200.9%20-0.1%200.9%20-0.1%200.9%20-0.2%200.9%20-0.5%200.7%20-0.0%200.0%20-0.7%200.5%20-0.9%200.2%20-0.9%200.1%20-0.9%200.1%20-0.8%200.0%20-0.8%200.1%20-0.8%200.1%20-1.2%200.7%20-0.6%200.5%20-0.7%200.6%20-0.6%200.6%20-0.8%200.6%20-0.8%200.5%20-0.8%200.1%20-0.0%200.0%20-0.8%20-0.1%20-0.8%20-0.5%20-0.8%20-0.6%20-0.6%20-0.6%20-0.7%20-0.6%20-0.6%20-0.5%20-1.2%20-0.7%20-0.7%20-0.1%20-0.8%20-0.1%20-0.9%20-0.0%20-0.9%20-0.1%20-0.9%20-0.1%20-0.9%20-0.2%20-0.7%20-0.5%20-0.0%200.0%20-0.5%20-0.7%20-0.2%20-0.9%20-0.1%20-0.9%20-0.1%20-0.9%20-0.0%20-0.8%20-0.1%20-0.8%20-0.1%20-0.8%20-0.7%20-1.2%20-0.5%20-0.6%20-0.6%20-0.7%20-0.6%20-0.6%20-0.6%20-0.8%20-0.5%20-0.8%20-0.1%20-0.8%20-0.0%20-0.0%200.1%20-0.8%200.5%20-0.8%200.6%20-0.8%200.6%20-0.6%200.6%20-0.7%200.5%20-0.6%200.7%20-1.2%200.1%20-0.7%200.1%20-0.8%200.0%20-0.9%200.1%20-0.9%200.1%20-0.9%200.2%20-0.9%200.5%20-0.7%20-0.0%20-0.0%200.7%20-0.5%200.9%20-0.2%200.9%20-0.1%200.9%20-0.1%200.8%20-0.0%200.8%20-0.1%200.8%20-0.1%201.2%20-0.7%200.6%20-0.5%200.7%20-0.6%200.6%20-0.6%200.8%20-0.6%200.8%20-0.5%200.8%20-0.1%200.0%20-0.0%200.8%200.1%200.8%200.5%200.8%200.6%200.6%200.6%200.7%200.6%200.6%200.5%201.2%200.7%200.7%200.1%200.8%200.1%200.9%200.0%200.9%200.1%200.9%200.1%200.9%200.2%200.7%200.5%200.0%20-0.0%200.5%200.7%200.2%200.9%200.1%200.9%200.1%200.9%200.0%200.8%200.1%200.8%200.1%200.8%200.7%201.2%200.5%200.6%200.6%200.7%200.6%200.6%200.6%200.8%200.5%200.8%200.1%200.8%20z;m36.9%2024.6%200.1%200.7%200.2%200.8%200.2%200.7%200.4%200.9%200.4%200.9%200.2%200.9%200.1%201.0%200.1%200.9%20-0.1%200.9%20-0.3%200.9%20-0.3%200.9%20-0.4%200.8%20-0.5%200.8%20-0.6%200.6%20-0.1%200.1%20-0.6%200.6%20-0.8%200.5%20-0.8%200.4%20-0.9%200.3%20-0.9%200.3%20-0.9%200.1%20-0.9%20-0.1%20-1.0%20-0.1%20-0.9%20-0.2%20-0.9%20-0.4%20-0.9%20-0.4%20-0.7%20-0.2%20-0.8%20-0.2%20-0.7%20-0.1%20-1.2%200.0%20-0.7%200.1%20-0.8%200.2%20-0.7%200.2%20-0.9%200.4%20-0.9%200.4%20-0.9%200.2%20-1.0%200.1%20-0.9%200.1%20-0.9%20-0.1%20-0.9%20-0.3%20-0.9%20-0.3%20-0.8%20-0.4%20-0.8%20-0.5%20-0.6%20-0.6%20-0.1%20-0.1%20-0.6%20-0.6%20-0.5%20-0.8%20-0.4%20-0.8%20-0.3%20-0.9%20-0.3%20-0.9%20-0.1%20-0.9%200.1%20-0.9%200.1%20-1.0%200.2%20-0.9%200.4%20-0.9%200.4%20-0.9%200.2%20-0.7%200.2%20-0.8%200.1%20-0.7%20-0.0%20-1.2%20-0.1%20-0.7%20-0.2%20-0.8%20-0.2%20-0.7%20-0.4%20-0.9%20-0.4%20-0.9%20-0.2%20-0.9%20-0.1%20-1.0%20-0.1%20-0.9%200.1%20-0.9%200.3%20-0.9%200.3%20-0.9%200.4%20-0.8%200.5%20-0.8%200.6%20-0.6%200.1%20-0.1%200.6%20-0.6%200.8%20-0.5%200.8%20-0.4%200.9%20-0.3%200.9%20-0.3%200.9%20-0.1%200.9%200.1%201.0%200.1%200.9%200.2%200.9%200.4%200.9%200.4%200.7%200.2%200.8%200.2%200.7%200.1%201.2%20-0.0%200.7%20-0.1%200.8%20-0.2%200.7%20-0.2%200.9%20-0.4%200.9%20-0.4%200.9%20-0.2%201.0%20-0.1%200.9%20-0.1%200.9%200.1%200.9%200.3%200.9%200.3%200.8%200.4%200.8%200.5%200.6%200.6%200.1%200.1%200.6%200.6%200.5%200.8%200.4%200.8%200.3%200.9%200.3%200.9%200.1%200.9%20-0.1%200.9%20-0.1%201.0%20-0.2%200.9%20-0.4%200.9%20-0.4%200.9%20-0.2%200.7%20-0.2%200.8%20-0.1%200.7%20z;m37.7%2024.0%20-0.3%200.7%20-0.4%200.7%20-0.3%200.6%20-0.3%200.7%20-0.4%200.6%20-0.3%200.5%20-0.4%200.6%20-0.4%200.5%20-0.4%200.5%20-0.4%200.5%20-0.4%200.5%20-0.4%200.5%20-0.3%200.4%20-0.5%200.4%20-0.8%200.8%20-0.4%200.5%20-0.4%200.3%20-0.5%200.4%20-0.5%200.4%20-0.5%200.4%20-0.5%200.4%20-0.5%200.4%20-0.6%200.4%20-0.5%200.3%20-0.6%200.4%20-0.7%200.3%20-0.6%200.3%20-0.7%200.4%20-0.7%200.3%20-0.7%200.2%20-0.7%200.3%20-0.9%200.3%20-0.8%200.2%20-0.8%200.1%20-0.9%200.1%20-1.0%200.1%20-0.9%20-0.0%20-0.9%20-0.1%20-0.9%20-0.1%20-0.9%20-0.3%20-0.9%20-0.3%20-0.8%20-0.4%20-0.8%20-0.6%20-0.7%20-0.6%20-0.0%200.0%20-0.6%20-0.7%20-0.6%20-0.8%20-0.4%20-0.8%20-0.3%20-0.9%20-0.3%20-0.9%20-0.1%20-0.9%20-0.1%20-0.9%200.0%20-0.9%200.1%20-1.0%200.1%20-0.9%200.1%20-0.8%200.2%20-0.8%200.3%20-0.9%200.3%20-0.7%200.2%20-0.7%200.3%20-0.7%200.4%20-0.7%200.3%20-0.6%200.3%20-0.7%200.4%20-0.6%200.3%20-0.5%200.4%20-0.6%200.4%20-0.5%200.4%20-0.5%200.4%20-0.5%200.4%20-0.5%200.4%20-0.5%200.3%20-0.4%200.5%20-0.4%200.8%20-0.8%200.4%20-0.5%200.4%20-0.3%200.5%20-0.4%200.5%20-0.4%200.5%20-0.4%200.5%20-0.4%200.5%20-0.4%200.6%20-0.4%200.5%20-0.3%200.6%20-0.4%200.7%20-0.3%200.6%20-0.3%200.7%20-0.4%200.7%20-0.3%200.7%20-0.2%200.7%20-0.3%200.9%20-0.3%200.8%20-0.2%200.8%20-0.1%200.9%20-0.1%201.0%20-0.1%200.9%200.0%200.9%200.1%200.9%200.1%200.9%200.3%200.9%200.3%200.8%200.4%200.8%200.6%200.7%200.6%20-0.0%200.0%200.6%200.7%200.6%200.8%200.4%200.8%200.3%200.9%200.3%200.9%200.1%200.9%200.1%200.9%20-0.0%200.9%20-0.1%201.0%20-0.1%200.9%20-0.1%200.8%20-0.2%200.8%20-0.3%200.9%20-0.3%200.7%20z;m37.4%2024.7%200.5%200.7%200.8%200.9%200.8%201.0%200.6%201.0%20-0.1%200.8%20-0.0%200.1%20-0.6%200.7%20-1.1%200.5%20-1.3%200.3%20-1.0%200.2%20-0.9%200.4%20-0.7%201.1%200.1%201.0%200.1%201.1%200.0%201.2%20-0.2%201.1%20-0.4%200.5%20-0.3%200.2%20-0.8%200.2%20-1.2%20-0.4%20-1.2%20-0.4%20-1.0%20-0.5%20-0.8%20-0.1%20-1.3%200.5%20-0.5%200.8%20-0.6%200.9%20-0.6%201.0%20-0.8%200.8%20-0.8%200.2%20-0.1%20-0.0%20-0.9%20-0.3%20-0.8%20-1.0%20-0.6%20-1.0%20-0.6%20-0.9%20-0.5%20-0.7%20-1.3%20-0.3%20-0.9%200.2%20-0.9%200.4%20-1.2%200.5%20-1.2%200.3%20-0.8%20-0.3%20-0.0%20-0.1%20-0.6%20-0.6%20-0.1%20-1.2%200.1%20-1.2%200.0%20-1.1%200.0%20-0.9%20-0.7%20-1.1%20-0.9%20-0.3%20-1.1%20-0.3%20-1.2%20-0.3%20-1.1%20-0.4%20-0.5%20-0.8%20-0.0%200.0%20-0.1%20-0.9%200.6%20-1.0%200.8%20-0.9%200.8%20-0.9%200.5%20-0.7%20-0.0%20-1.4%20-0.5%20-0.7%20-0.8%20-0.9%20-0.8%20-0.9%20-0.6%20-1.0%200.1%20-0.9%200.0%20-0.0%200.5%20-0.8%201.1%20-0.4%201.2%20-0.3%201.1%20-0.3%200.9%20-0.3%200.7%20-1.1%200.0%20-0.9%20-0.0%20-1.1%20-0.1%20-1.2%200.1%20-1.2%200.6%20-0.6%200.0%20-0.1%200.8%20-0.3%201.2%200.3%201.2%200.5%200.9%200.4%200.9%200.2%201.3%20-0.3%200.5%20-0.7%200.6%20-0.9%200.6%20-1.0%200.8%20-1.0%200.9%20-0.3%200.1%200.0%200.8%200.2%200.8%200.8%200.6%201.0%200.6%200.9%200.5%200.8%201.3%200.5%200.8%20-0.1%201.0%20-0.5%201.2%20-0.4%201.2%20-0.4%200.8%200.2%200.3%200.2%200.4%200.5%200.2%201.1%20-0.0%201.2%20-0.1%201.1%20-0.1%201.0%200.7%201.1%200.9%200.4%201.0%200.2%201.3%200.3%201.1%200.5%200.6%200.7%200.0%200.1%200.1%200.8%20-0.5%201.0%20-0.9%201.0%20-0.8%200.9%20-0.5%200.7%20z'/%3e%3canimateTransform%20attributeName='transform'%20attributeType='XML'%20calcMode='spline'%20dur='5s'%20keySplines='0.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8;%200.5%200.2%200%200.8'%20keyTimes='0;%200.14;%200.29;%200.43;%200.57;%200.71;%200.86;%201'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2024;%20154%2024%2024;%20309%2024%2024;%20463%2024%2024;%20617%2024%2024;%20771%2024%2024;%20926%2024%2024;%201080%2024%2024'/%3e%3c/path%3e%3c/svg%3e")}.shape.oval{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='300'%20height='300'%20fill='none'%20viewBox='0%200%20300%20300'%3e%3cpath%20fill='%23d0bcff'%20d='M231.309%20231.31c-69.604%2069.6-162.432%2089.63-207.338%2044.72S-.913%20138.29%2068.69%2068.69s162.432-89.63%20207.338-44.72%2024.884%20137.74-44.72%20207.34'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='300'%20height='300'%20fill='none'%20viewBox='0%200%20300%20300'%3e%3cpath%20fill='%23d0bcff'%20d='M231.309%20231.31c-69.604%2069.6-162.432%2089.63-207.338%2044.72S-.913%20138.29%2068.69%2068.69s162.432-89.63%20207.338-44.72%2024.884%20137.74-44.72%20207.34'/%3e%3c/svg%3e")}.shape.pentagon{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M109.63%2024.37c15.61-12.08%2023.41-18.12%2031.75-21.12a55%2055%200%200%201%2037.24%200c8.34%203%2016.14%209.04%2031.75%2021.12l34.14%2026.43%2034.12%2024.76c16.19%2011.75%2024.29%2017.63%2029.7%2025.01%207.82%2010.69%2011.94%2023.82%2011.66%2037.25-.2%209.29-3.41%2019-9.85%2038.41l-13.4%2040.43-12.36%2041.42c-5.81%2019.44-8.71%2029.16-13.78%2036.72-7.34%2010.94-18.01%2018.98-30.28%2022.83-8.48%202.67-18.26%202.51-37.82%202.2l-42.5-.67-42.5.67c-19.56.31-29.34.47-37.82-2.2-12.27-3.85-22.94-11.89-30.28-22.83-5.07-7.56-7.97-17.28-13.78-36.72l-12.36-41.42-13.4-40.43C3.42%20156.82.21%20147.11.01%20137.82c-.28-13.43%203.84-26.56%2011.66-37.25%205.41-7.38%2013.51-13.26%2029.7-25.01L75.49%2050.8z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M109.63%2024.37c15.61-12.08%2023.41-18.12%2031.75-21.12a55%2055%200%200%201%2037.24%200c8.34%203%2016.14%209.04%2031.75%2021.12l34.14%2026.43%2034.12%2024.76c16.19%2011.75%2024.29%2017.63%2029.7%2025.01%207.82%2010.69%2011.94%2023.82%2011.66%2037.25-.2%209.29-3.41%2019-9.85%2038.41l-13.4%2040.43-12.36%2041.42c-5.81%2019.44-8.71%2029.16-13.78%2036.72-7.34%2010.94-18.01%2018.98-30.28%2022.83-8.48%202.67-18.26%202.51-37.82%202.2l-42.5-.67-42.5.67c-19.56.31-29.34.47-37.82-2.2-12.27-3.85-22.94-11.89-30.28-22.83-5.07-7.56-7.97-17.28-13.78-36.72l-12.36-41.42-13.4-40.43C3.42%20156.82.21%20147.11.01%20137.82c-.28-13.43%203.84-26.56%2011.66-37.25%205.41-7.38%2013.51-13.26%2029.7-25.01L75.49%2050.8z'/%3e%3c/svg%3e")}.shape.pill{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='300'%20height='300'%20fill='none'%20viewBox='0%200%20300%20300'%3e%3cpath%20fill='%23d0bcff'%20d='M79.86%2037.77c50.36-50.36%20132.01-50.36%20182.37%200s50.36%20132.01%200%20182.37l-42.09%2042.09c-50.36%2050.36-132.01%2050.36-182.37%200s-50.36-132.01%200-182.37z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='300'%20height='300'%20fill='none'%20viewBox='0%200%20300%20300'%3e%3cpath%20fill='%23d0bcff'%20d='M79.86%2037.77c50.36-50.36%20132.01-50.36%20182.37%200s50.36%20132.01%200%20182.37l-42.09%2042.09c-50.36%2050.36-132.01%2050.36-182.37%200s-50.36-132.01%200-182.37z'/%3e%3c/svg%3e")}.shape.pixel-circle{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M225.19%200H94.81v20.74H50.37v26.67H23.704v47.4H0v130.38h23.704v47.4H50.37v26.67h44.44V320h130.38v-20.74h44.44v-26.67h26.67v-47.4H320V94.81h-23.7v-47.4h-26.67V20.74h-44.44z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M225.19%200H94.81v20.74H50.37v26.67H23.704v47.4H0v130.38h23.704v47.4H50.37v26.67h44.44V320h130.38v-20.74h44.44v-26.67h26.67v-47.4H320V94.81h-23.7v-47.4h-26.67V20.74h-44.44z'/%3e%3c/svg%3e")}.shape.pixel-triangle{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='248'%20height='320'%20fill='none'%20viewBox='0%200%20248%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M55.64%200H0v320h55.64v-27.826h42.92v-26.435h44.52V235.13h36.56v-25.044h36.57v-30.608H248v-38.956h-31.79v-30.61h-36.57V84.869h-36.56V54.261H98.56V27.826H55.64z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='248'%20height='320'%20fill='none'%20viewBox='0%200%20248%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M55.64%200H0v320h55.64v-27.826h42.92v-26.435h44.52V235.13h36.56v-25.044h36.57v-30.608H248v-38.956h-31.79v-30.61h-36.57V84.869h-36.56V54.261H98.56V27.826H55.64z'/%3e%3c/svg%3e")}.shape.puffy{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='280'%20fill='none'%20viewBox='0%200%20320%20280'%3e%3cpath%20fill='%23d0bcff'%20d='M319.98%20138.106c-.26-21.532-16.25-38.773-35.74-38.485-1.07%200-2.13.09-3.18.217.82-.74%201.62-1.497%202.38-2.327%2013.96-15.022%2014.25-39.729.67-55.167-.8-.901-1.59-1.803-2.41-2.669-13.96-15.022-36.28-14.698-49.88.74-.75.847-1.43%201.731-2.1%202.633.11-1.154.18-2.327.2-3.517C230.19%2017.998%20214.61.307%20195.14%200h-2.87C177.84%200%20165.46%209.594%20160%2023.318%20154.54%209.594%20142.15%200%20127.73%200h-2.87c-19.47.289-35.05%2017.98-34.79%2039.531%200%201.19.08%202.363.19%203.517a36%2036%200%200%200-2.1-2.633c-13.58-15.438-35.92-15.762-49.88-.74-.81.884-1.63%201.768-2.41%202.669-13.58%2015.438-13.29%2040.127.67%2055.167.77.83%201.56%201.587%202.38%202.327a30%2030%200%200%200-3.18-.217C16.27%2099.333.28%20116.574%200%20138.106v3.788c.26%2021.533%2016.26%2038.773%2035.74%2038.485%201.08%200%202.14-.09%203.18-.217-.82.74-1.61%201.497-2.38%202.327-13.96%2015.022-14.25%2039.729-.67%2055.167.8.901%201.6%201.803%202.41%202.669%2013.96%2015.022%2036.28%2014.698%2049.88-.74.75-.847%201.44-1.731%202.1-2.633a41%2041%200%200%200-.19%203.517c-.26%2021.533%2015.31%2039.242%2034.79%2039.531h2.87c14.43%200%2026.81-9.594%2032.27-23.318C165.46%20270.406%20177.85%20280%20192.27%20280h2.87c19.47-.289%2035.05-17.98%2034.79-39.531%200-1.19-.08-2.363-.19-3.517.66.902%201.35%201.786%202.1%202.633%2013.58%2015.438%2035.92%2015.762%2049.88.74.81-.884%201.63-1.768%202.41-2.669%2013.58-15.438%2013.29-40.127-.67-55.167-.77-.83-1.56-1.587-2.38-2.327a30%2030%200%200%200%203.18.217c19.47.288%2035.48-16.934%2035.74-38.485v-3.788z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='280'%20fill='none'%20viewBox='0%200%20320%20280'%3e%3cpath%20fill='%23d0bcff'%20d='M319.98%20138.106c-.26-21.532-16.25-38.773-35.74-38.485-1.07%200-2.13.09-3.18.217.82-.74%201.62-1.497%202.38-2.327%2013.96-15.022%2014.25-39.729.67-55.167-.8-.901-1.59-1.803-2.41-2.669-13.96-15.022-36.28-14.698-49.88.74-.75.847-1.43%201.731-2.1%202.633.11-1.154.18-2.327.2-3.517C230.19%2017.998%20214.61.307%20195.14%200h-2.87C177.84%200%20165.46%209.594%20160%2023.318%20154.54%209.594%20142.15%200%20127.73%200h-2.87c-19.47.289-35.05%2017.98-34.79%2039.531%200%201.19.08%202.363.19%203.517a36%2036%200%200%200-2.1-2.633c-13.58-15.438-35.92-15.762-49.88-.74-.81.884-1.63%201.768-2.41%202.669-13.58%2015.438-13.29%2040.127.67%2055.167.77.83%201.56%201.587%202.38%202.327a30%2030%200%200%200-3.18-.217C16.27%2099.333.28%20116.574%200%20138.106v3.788c.26%2021.533%2016.26%2038.773%2035.74%2038.485%201.08%200%202.14-.09%203.18-.217-.82.74-1.61%201.497-2.38%202.327-13.96%2015.022-14.25%2039.729-.67%2055.167.8.901%201.6%201.803%202.41%202.669%2013.96%2015.022%2036.28%2014.698%2049.88-.74.75-.847%201.44-1.731%202.1-2.633a41%2041%200%200%200-.19%203.517c-.26%2021.533%2015.31%2039.242%2034.79%2039.531h2.87c14.43%200%2026.81-9.594%2032.27-23.318C165.46%20270.406%20177.85%20280%20192.27%20280h2.87c19.47-.289%2035.05-17.98%2034.79-39.531%200-1.19-.08-2.363-.19-3.517.66.902%201.35%201.786%202.1%202.633%2013.58%2015.438%2035.92%2015.762%2049.88.74.81-.884%201.63-1.768%202.41-2.669%2013.58-15.438%2013.29-40.127-.67-55.167-.77-.83-1.56-1.587-2.38-2.327a30%2030%200%200%200%203.18.217c19.47.288%2035.48-16.934%2035.74-38.485v-3.788z'/%3e%3c/svg%3e")}.shape.puffy-diamond{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M249.4%20249.754c12.08-12.088%2016.17-29.146%2012.26-44.597%2015.46%203.929%2032.54-.156%2044.64-12.255%2018.27-18.266%2018.27-47.882%200-66.148-12.03-12.027-28.98-16.135-44.36-12.324%203.43-15.144-.75-31.664-12.54-43.455-12.12-12.115-29.23-16.195-44.7-12.239%204.1-15.565.05-32.833-12.16-45.036-18.26-18.267-47.88-18.267-66.14%200-12.13%2012.13-16.21%2029.265-12.23%2044.758-15.17-3.472-31.74.7-43.55%2012.517-11.79%2011.792-15.97%2028.314-12.54%2043.459-15.39-3.818-32.35.289-44.38%2012.32-18.27%2018.266-18.27%2047.882%200%2066.148%2012.1%2012.103%2029.19%2016.187%2044.65%2012.251-3.91%2015.452.18%2032.512%2012.27%2044.601%2011.76%2011.767%2028.24%2015.954%2043.36%2012.56-3.65%2015.288.49%2032.057%2012.42%2043.986%2018.26%2018.267%2047.88%2018.267%2066.14%200%2012-11.999%2016.12-28.897%2012.35-44.257%2015.43%203.871%2032.44-.226%2044.51-12.289'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M249.4%20249.754c12.08-12.088%2016.17-29.146%2012.26-44.597%2015.46%203.929%2032.54-.156%2044.64-12.255%2018.27-18.266%2018.27-47.882%200-66.148-12.03-12.027-28.98-16.135-44.36-12.324%203.43-15.144-.75-31.664-12.54-43.455-12.12-12.115-29.23-16.195-44.7-12.239%204.1-15.565.05-32.833-12.16-45.036-18.26-18.267-47.88-18.267-66.14%200-12.13%2012.13-16.21%2029.265-12.23%2044.758-15.17-3.472-31.74.7-43.55%2012.517-11.79%2011.792-15.97%2028.314-12.54%2043.459-15.39-3.818-32.35.289-44.38%2012.32-18.27%2018.266-18.27%2047.882%200%2066.148%2012.1%2012.103%2029.19%2016.187%2044.65%2012.251-3.91%2015.452.18%2032.512%2012.27%2044.601%2011.76%2011.767%2028.24%2015.954%2043.36%2012.56-3.65%2015.288.49%2032.057%2012.42%2043.986%2018.26%2018.267%2047.88%2018.267%2066.14%200%2012-11.999%2016.12-28.897%2012.35-44.257%2015.43%203.871%2032.44-.226%2044.51-12.289'/%3e%3c/svg%3e")}.shape.semicircle{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='200'%20fill='none'%20viewBox='0%200%20320%20200'%3e%3cpath%20fill='%23d0bcff'%20d='M320%20166.92c0%2018.27-14.81%2033.08-33.079%2033.08H33.079C14.81%20200%200%20185.19%200%20166.92V160C0%2071.63%2071.634%200%20160%200s160%2071.63%20160%20160z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='200'%20fill='none'%20viewBox='0%200%20320%20200'%3e%3cpath%20fill='%23d0bcff'%20d='M320%20166.92c0%2018.27-14.81%2033.08-33.079%2033.08H33.079C14.81%20200%200%20185.19%200%20166.92V160C0%2071.63%2071.634%200%20160%200s160%2071.63%20160%20160z'/%3e%3c/svg%3e")}.shape.sided-cookie4{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='280'%20height='280'%20fill='none'%20viewBox='0%200%20280%20280'%3e%3cpath%20fill='%23d0bcff'%20d='M178.73%206.21c60.14-26.12%20121.18%2034.92%2095.06%2095.06l-4.32%209.94a72.32%2072.32%200%200%200%200%2057.58l4.32%209.94c26.12%2060.14-34.92%20121.18-95.06%2095.06l-9.94-4.32a72.32%2072.32%200%200%200-57.58%200l-9.94%204.32c-60.142%2026.12-121.184-34.92-95.063-95.06l4.319-9.94a72.28%2072.28%200%200%200%200-57.58l-4.32-9.94C-19.913%2041.13%2041.129-19.91%20101.27%206.21l9.94%204.32a72.32%2072.32%200%200%200%2057.58%200z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='280'%20height='280'%20fill='none'%20viewBox='0%200%20280%20280'%3e%3cpath%20fill='%23d0bcff'%20d='M178.73%206.21c60.14-26.12%20121.18%2034.92%2095.06%2095.06l-4.32%209.94a72.32%2072.32%200%200%200%200%2057.58l4.32%209.94c26.12%2060.14-34.92%20121.18-95.06%2095.06l-9.94-4.32a72.32%2072.32%200%200%200-57.58%200l-9.94%204.32c-60.142%2026.12-121.184-34.92-95.063-95.06l4.319-9.94a72.28%2072.28%200%200%200%200-57.58l-4.32-9.94C-19.913%2041.13%2041.129-19.91%20101.27%206.21l9.94%204.32a72.32%2072.32%200%200%200%2057.58%200z'/%3e%3c/svg%3e")}.shape.sided-cookie6{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='296'%20height='316'%20fill='none'%20viewBox='0%200%20296%20316'%3e%3cpath%20fill='%23d0bcff'%20d='M92.186%2022.57c31.09-30.09%2080.538-30.09%20111.628%200a80.24%2080.24%200%200%200%2033.924%2019.52c41.681%2011.8%2066.404%2054.5%2055.814%2096.38a79.7%2079.7%200%200%200%200%2039.06c10.59%2041.88-14.133%2084.58-55.814%2096.38a80.24%2080.24%200%200%200-33.924%2019.52c-31.09%2030.09-80.538%2030.09-111.628%200a80.24%2080.24%200%200%200-33.924-19.52c-41.681-11.8-66.404-54.5-55.814-96.38a79.7%2079.7%200%200%200%200-39.06C-8.142%2096.59%2016.58%2053.89%2058.262%2042.09a80.24%2080.24%200%200%200%2033.924-19.52'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='296'%20height='316'%20fill='none'%20viewBox='0%200%20296%20316'%3e%3cpath%20fill='%23d0bcff'%20d='M92.186%2022.57c31.09-30.09%2080.538-30.09%20111.628%200a80.24%2080.24%200%200%200%2033.924%2019.52c41.681%2011.8%2066.404%2054.5%2055.814%2096.38a79.7%2079.7%200%200%200%200%2039.06c10.59%2041.88-14.133%2084.58-55.814%2096.38a80.24%2080.24%200%200%200-33.924%2019.52c-31.09%2030.09-80.538%2030.09-111.628%200a80.24%2080.24%200%200%200-33.924-19.52c-41.681-11.8-66.404-54.5-55.814-96.38a79.7%2079.7%200%200%200%200-39.06C-8.142%2096.59%2016.58%2053.89%2058.262%2042.09a80.24%2080.24%200%200%200%2033.924-19.52'/%3e%3c/svg%3e")}.shape.sided-cookie7{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='316'%20fill='none'%20viewBox='0%200%20320%20316'%3e%3cpath%20fill='%23d0bcff'%20d='M112.67%2019.78c3.573-3.14%205.359-4.71%207.001-5.98%2023.754-18.4%2056.904-18.4%2080.658%200%201.642%201.27%203.428%202.84%207.001%205.98%201.196%201.06%201.794%201.58%202.394%202.09a66%2066%200%200%200%2029.196%2014.09c.768.16%201.551.3%203.118.58%204.681.84%207.021%201.25%209.037%201.75%2029.159%207.14%2049.827%2033.12%2050.289%2063.2.032%202.08-.081%204.46-.307%209.22-.075%201.6-.113%202.39-.132%203.18a66.24%2066.24%200%200%200%207.211%2031.66c.357.7.736%201.4%201.494%202.81%202.264%204.19%203.396%206.28%204.267%208.17%2012.606%2027.3%205.23%2059.7-17.948%2078.81-1.602%201.33-3.529%202.72-7.383%205.51-1.29.94-1.936%201.4-2.559%201.88a66.1%2066.1%200%200%200-20.204%2025.39c-.323.72-.634%201.45-1.256%202.92-1.857%204.39-2.786%206.58-3.715%208.44-13.439%2026.9-43.306%2041.32-72.67%2035.08-2.03-.44-4.32-1.08-8.9-2.36-1.534-.42-2.3-.64-3.059-.83a65.84%2065.84%200%200%200-32.406%200c-.759.19-1.525.41-3.059.83-4.58%201.28-6.87%201.92-8.9%202.36-29.364%206.24-59.23-8.18-72.67-35.08-.93-1.86-1.858-4.05-3.715-8.44-.622-1.47-.933-2.2-1.256-2.92a66.14%2066.14%200%200%200-20.204-25.39c-.623-.48-1.269-.94-2.559-1.88-3.854-2.79-5.78-4.18-7.383-5.51C.873%20216.23-6.503%20183.83%206.103%20156.53c.871-1.89%202.003-3.98%204.267-8.17.758-1.41%201.137-2.11%201.494-2.81a66.2%2066.2%200%200%200%207.21-31.66c-.018-.79-.056-1.58-.131-3.18-.226-4.76-.34-7.14-.307-9.22.462-30.08%2021.13-56.06%2050.29-63.2%202.015-.5%204.355-.91%209.036-1.75%201.567-.28%202.35-.42%203.117-.58a66%2066%200%200%200%2029.197-14.09c.6-.51%201.198-1.03%202.394-2.09'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='316'%20fill='none'%20viewBox='0%200%20320%20316'%3e%3cpath%20fill='%23d0bcff'%20d='M112.67%2019.78c3.573-3.14%205.359-4.71%207.001-5.98%2023.754-18.4%2056.904-18.4%2080.658%200%201.642%201.27%203.428%202.84%207.001%205.98%201.196%201.06%201.794%201.58%202.394%202.09a66%2066%200%200%200%2029.196%2014.09c.768.16%201.551.3%203.118.58%204.681.84%207.021%201.25%209.037%201.75%2029.159%207.14%2049.827%2033.12%2050.289%2063.2.032%202.08-.081%204.46-.307%209.22-.075%201.6-.113%202.39-.132%203.18a66.24%2066.24%200%200%200%207.211%2031.66c.357.7.736%201.4%201.494%202.81%202.264%204.19%203.396%206.28%204.267%208.17%2012.606%2027.3%205.23%2059.7-17.948%2078.81-1.602%201.33-3.529%202.72-7.383%205.51-1.29.94-1.936%201.4-2.559%201.88a66.1%2066.1%200%200%200-20.204%2025.39c-.323.72-.634%201.45-1.256%202.92-1.857%204.39-2.786%206.58-3.715%208.44-13.439%2026.9-43.306%2041.32-72.67%2035.08-2.03-.44-4.32-1.08-8.9-2.36-1.534-.42-2.3-.64-3.059-.83a65.84%2065.84%200%200%200-32.406%200c-.759.19-1.525.41-3.059.83-4.58%201.28-6.87%201.92-8.9%202.36-29.364%206.24-59.23-8.18-72.67-35.08-.93-1.86-1.858-4.05-3.715-8.44-.622-1.47-.933-2.2-1.256-2.92a66.14%2066.14%200%200%200-20.204-25.39c-.623-.48-1.269-.94-2.559-1.88-3.854-2.79-5.78-4.18-7.383-5.51C.873%20216.23-6.503%20183.83%206.103%20156.53c.871-1.89%202.003-3.98%204.267-8.17.758-1.41%201.137-2.11%201.494-2.81a66.2%2066.2%200%200%200%207.21-31.66c-.018-.79-.056-1.58-.131-3.18-.226-4.76-.34-7.14-.307-9.22.462-30.08%2021.13-56.06%2050.29-63.2%202.015-.5%204.355-.91%209.036-1.75%201.567-.28%202.35-.42%203.117-.58a66%2066%200%200%200%2029.197-14.09c.6-.51%201.198-1.03%202.394-2.09'/%3e%3c/svg%3e")}.shape.sided-cookie9{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M125.26%2013.38c1.73-1.43%202.59-2.14%203.38-2.74a51.525%2051.525%200%200%201%2062.72%200c.79.6%201.65%201.31%203.38%202.74.77.63%201.15.95%201.53%201.26a51.7%2051.7%200%200%200%2030.55%2011.23c.48.01.98.02%201.97.03%202.23.03%203.35.04%204.33.09%2023.24%201.19%2042.86%2017.83%2048.05%2040.74.22.97.43%202.08.85%204.29.18.99.27%201.48.37%201.96%202.27%2011%207.97%2020.96%2016.25%2028.44.37.33.74.66%201.5%201.31%201.69%201.47%202.53%202.21%203.25%202.89%2017.05%2015.99%2021.5%2041.49%2010.9%2062.41-.45.89-1%201.87-2.09%203.83-.49.88-.73%201.32-.96%201.75a53%2053%200%200%200-5.64%2032.34c.07.49.15.98.31%201.97.36%202.23.54%203.34.66%204.33%202.88%2023.32-9.93%2045.74-31.36%2054.88-.91.39-1.96.79-4.04%201.59-.93.35-1.4.53-1.85.71-10.32%204.17-19.04%2011.57-24.9%2021.11-.25.42-.5.85-1.01%201.71-1.14%201.94-1.71%202.91-2.25%203.75-12.63%2019.73-36.7%2028.59-58.94%2021.67-.94-.29-2-.66-4.1-1.41-.94-.33-1.41-.5-1.87-.65a51.47%2051.47%200%200%200-32.5%200c-.46.15-.93.32-1.87.65-2.1.75-3.16%201.12-4.1%201.41-22.24%206.92-46.31-1.94-58.94-21.67-.54-.84-1.11-1.81-2.25-3.75-.51-.86-.76-1.29-1.01-1.71C69.72%20281%2061%20273.6%2050.68%20269.43c-.45-.18-.92-.36-1.85-.71-2.08-.8-3.13-1.2-4.04-1.59-21.43-9.14-34.24-31.56-31.36-54.88.12-.99.3-2.1.66-4.33.16-.99.24-1.48.31-1.97a53%2053%200%200%200-5.64-32.34c-.23-.43-.47-.87-.96-1.75-1.09-1.96-1.64-2.94-2.09-3.83-10.6-20.92-6.15-46.42%2010.9-62.41.72-.68%201.56-1.42%203.25-2.89.76-.65%201.13-.98%201.5-1.31a52.66%2052.66%200%200%200%2016.25-28.44c.1-.48.19-.97.37-1.96.42-2.21.63-3.32.85-4.29%205.19-22.91%2024.81-39.55%2048.05-40.74.98-.05%202.1-.06%204.33-.09.99-.01%201.49-.02%201.97-.03a51.7%2051.7%200%200%200%2030.55-11.23c.38-.31.76-.63%201.53-1.26'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M125.26%2013.38c1.73-1.43%202.59-2.14%203.38-2.74a51.525%2051.525%200%200%201%2062.72%200c.79.6%201.65%201.31%203.38%202.74.77.63%201.15.95%201.53%201.26a51.7%2051.7%200%200%200%2030.55%2011.23c.48.01.98.02%201.97.03%202.23.03%203.35.04%204.33.09%2023.24%201.19%2042.86%2017.83%2048.05%2040.74.22.97.43%202.08.85%204.29.18.99.27%201.48.37%201.96%202.27%2011%207.97%2020.96%2016.25%2028.44.37.33.74.66%201.5%201.31%201.69%201.47%202.53%202.21%203.25%202.89%2017.05%2015.99%2021.5%2041.49%2010.9%2062.41-.45.89-1%201.87-2.09%203.83-.49.88-.73%201.32-.96%201.75a53%2053%200%200%200-5.64%2032.34c.07.49.15.98.31%201.97.36%202.23.54%203.34.66%204.33%202.88%2023.32-9.93%2045.74-31.36%2054.88-.91.39-1.96.79-4.04%201.59-.93.35-1.4.53-1.85.71-10.32%204.17-19.04%2011.57-24.9%2021.11-.25.42-.5.85-1.01%201.71-1.14%201.94-1.71%202.91-2.25%203.75-12.63%2019.73-36.7%2028.59-58.94%2021.67-.94-.29-2-.66-4.1-1.41-.94-.33-1.41-.5-1.87-.65a51.47%2051.47%200%200%200-32.5%200c-.46.15-.93.32-1.87.65-2.1.75-3.16%201.12-4.1%201.41-22.24%206.92-46.31-1.94-58.94-21.67-.54-.84-1.11-1.81-2.25-3.75-.51-.86-.76-1.29-1.01-1.71C69.72%20281%2061%20273.6%2050.68%20269.43c-.45-.18-.92-.36-1.85-.71-2.08-.8-3.13-1.2-4.04-1.59-21.43-9.14-34.24-31.56-31.36-54.88.12-.99.3-2.1.66-4.33.16-.99.24-1.48.31-1.97a53%2053%200%200%200-5.64-32.34c-.23-.43-.47-.87-.96-1.75-1.09-1.96-1.64-2.94-2.09-3.83-10.6-20.92-6.15-46.42%2010.9-62.41.72-.68%201.56-1.42%203.25-2.89.76-.65%201.13-.98%201.5-1.31a52.66%2052.66%200%200%200%2016.25-28.44c.1-.48.19-.97.37-1.96.42-2.21.63-3.32.85-4.29%205.19-22.91%2024.81-39.55%2048.05-40.74.98-.05%202.1-.06%204.33-.09.99-.01%201.49-.02%201.97-.03a51.7%2051.7%200%200%200%2030.55-11.23c.38-.31.76-.63%201.53-1.26'/%3e%3c/svg%3e")}.shape.sided-cookie12{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M136.7%209.85c.54-.53.81-.8%201.04-1.02%2012.51-11.77%2032.01-11.77%2044.52%200%20.23.22.5.49%201.04%201.02.33.31.49.47.64.62a32.48%2032.48%200%200%200%2030.09%208.06c.21-.05.43-.11.87-.22.73-.19%201.1-.28%201.41-.36%2016.71-3.94%2033.61%205.81%2038.55%2022.26.09.31.19.67.4%201.4.12.44.18.66.24.87a32.47%2032.47%200%200%200%2022.02%2022.02c.21.06.43.12.87.24.73.21%201.09.31%201.4.4%2016.45%204.94%2026.2%2021.84%2022.26%2038.55-.08.31-.17.68-.36%201.41-.11.44-.17.66-.22.87a32.48%2032.48%200%200%200%208.06%2030.09c.15.15.31.31.62.64.53.54.8.81%201.02%201.04%2011.77%2012.51%2011.77%2032.01%200%2044.52-.22.23-.49.5-1.02%201.04-.31.33-.47.49-.62.64a32.48%2032.48%200%200%200-8.06%2030.09c.05.21.11.43.22.87.19.73.28%201.1.36%201.41%203.94%2016.71-5.81%2033.61-22.26%2038.55-.31.09-.67.19-1.4.4-.44.12-.66.18-.87.24a32.47%2032.47%200%200%200-22.02%2022.02c-.06.21-.12.43-.24.87-.21.73-.31%201.09-.4%201.4-4.94%2016.45-21.84%2026.2-38.55%2022.26-.31-.08-.68-.17-1.41-.36-.44-.11-.66-.17-.87-.22a32.48%2032.48%200%200%200-30.09%208.06c-.15.15-.31.31-.64.62-.54.53-.81.8-1.04%201.02-12.51%2011.77-32.01%2011.77-44.52%200-.23-.22-.5-.49-1.04-1.02-.33-.31-.49-.47-.64-.62a32.48%2032.48%200%200%200-30.09-8.06c-.21.05-.43.11-.87.22-.73.19-1.1.28-1.41.36-16.71%203.94-33.61-5.81-38.55-22.26-.09-.31-.19-.67-.4-1.4-.12-.44-.18-.66-.24-.87a32.47%2032.47%200%200%200-22.02-22.02c-.21-.06-.43-.12-.87-.24-.73-.21-1.09-.31-1.4-.4-16.45-4.94-26.2-21.84-22.26-38.55.08-.31.17-.68.36-1.41.11-.44.17-.66.22-.87a32.48%2032.48%200%200%200-8.06-30.09c-.15-.15-.31-.31-.62-.64-.53-.54-.8-.81-1.02-1.04-11.77-12.51-11.77-32.01%200-44.52.22-.23.49-.5%201.02-1.04.31-.33.47-.49.62-.64a32.48%2032.48%200%200%200%208.06-30.09c-.05-.21-.11-.43-.22-.87-.19-.73-.28-1.1-.36-1.41-3.94-16.71%205.81-33.61%2022.26-38.55.31-.09.67-.19%201.4-.4.44-.12.66-.18.87-.24A32.47%2032.47%200%200%200%2064.5%2042.48c.06-.21.12-.43.24-.87.21-.73.31-1.09.4-1.4%204.94-16.45%2021.84-26.2%2038.55-22.26.31.08.68.17%201.41.36.44.11.66.17.87.22a32.48%2032.48%200%200%200%2030.09-8.06c.15-.15.31-.31.64-.62'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M136.7%209.85c.54-.53.81-.8%201.04-1.02%2012.51-11.77%2032.01-11.77%2044.52%200%20.23.22.5.49%201.04%201.02.33.31.49.47.64.62a32.48%2032.48%200%200%200%2030.09%208.06c.21-.05.43-.11.87-.22.73-.19%201.1-.28%201.41-.36%2016.71-3.94%2033.61%205.81%2038.55%2022.26.09.31.19.67.4%201.4.12.44.18.66.24.87a32.47%2032.47%200%200%200%2022.02%2022.02c.21.06.43.12.87.24.73.21%201.09.31%201.4.4%2016.45%204.94%2026.2%2021.84%2022.26%2038.55-.08.31-.17.68-.36%201.41-.11.44-.17.66-.22.87a32.48%2032.48%200%200%200%208.06%2030.09c.15.15.31.31.62.64.53.54.8.81%201.02%201.04%2011.77%2012.51%2011.77%2032.01%200%2044.52-.22.23-.49.5-1.02%201.04-.31.33-.47.49-.62.64a32.48%2032.48%200%200%200-8.06%2030.09c.05.21.11.43.22.87.19.73.28%201.1.36%201.41%203.94%2016.71-5.81%2033.61-22.26%2038.55-.31.09-.67.19-1.4.4-.44.12-.66.18-.87.24a32.47%2032.47%200%200%200-22.02%2022.02c-.06.21-.12.43-.24.87-.21.73-.31%201.09-.4%201.4-4.94%2016.45-21.84%2026.2-38.55%2022.26-.31-.08-.68-.17-1.41-.36-.44-.11-.66-.17-.87-.22a32.48%2032.48%200%200%200-30.09%208.06c-.15.15-.31.31-.64.62-.54.53-.81.8-1.04%201.02-12.51%2011.77-32.01%2011.77-44.52%200-.23-.22-.5-.49-1.04-1.02-.33-.31-.49-.47-.64-.62a32.48%2032.48%200%200%200-30.09-8.06c-.21.05-.43.11-.87.22-.73.19-1.1.28-1.41.36-16.71%203.94-33.61-5.81-38.55-22.26-.09-.31-.19-.67-.4-1.4-.12-.44-.18-.66-.24-.87a32.47%2032.47%200%200%200-22.02-22.02c-.21-.06-.43-.12-.87-.24-.73-.21-1.09-.31-1.4-.4-16.45-4.94-26.2-21.84-22.26-38.55.08-.31.17-.68.36-1.41.11-.44.17-.66.22-.87a32.48%2032.48%200%200%200-8.06-30.09c-.15-.15-.31-.31-.62-.64-.53-.54-.8-.81-1.02-1.04-11.77-12.51-11.77-32.01%200-44.52.22-.23.49-.5%201.02-1.04.31-.33.47-.49.62-.64a32.48%2032.48%200%200%200%208.06-30.09c-.05-.21-.11-.43-.22-.87-.19-.73-.28-1.1-.36-1.41-3.94-16.71%205.81-33.61%2022.26-38.55.31-.09.67-.19%201.4-.4.44-.12.66-.18.87-.24A32.47%2032.47%200%200%200%2064.5%2042.48c.06-.21.12-.43.24-.87.21-.73.31-1.09.4-1.4%204.94-16.45%2021.84-26.2%2038.55-22.26.31.08.68.17%201.41.36.44.11.66.17.87.22a32.48%2032.48%200%200%200%2030.09-8.06c.15-.15.31-.31.64-.62'/%3e%3c/svg%3e")}.shape.slanted{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='300'%20fill='none'%20viewBox='0%200%20320%20300'%3e%3cpath%20fill='%23d0bcff'%20d='M15.715%2080.54c2.574-24.58%203.861-36.87%208.588-46.562C31.142%2019.945%2043.077%209.11%2057.628%203.723%2067.683%200%2079.933%200%20104.432%200h123.705c29.627%200%2044.441%200%2055.75%204.854%2016.374%207.028%2028.833%2020.995%2034.04%2038.166%203.596%2011.85%202.04%2026.71-1.073%2056.44l-12.569%20120c-2.574%2024.58-3.861%2036.87-8.588%2046.56-6.839%2014.03-18.774%2024.87-33.325%2030.26-10.055%203.72-22.305%203.72-46.804%203.72H91.863c-29.627%200-44.441%200-55.75-4.85-16.374-7.03-28.833-21-34.04-38.17-3.597-11.85-2.04-26.71%201.073-56.44z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='300'%20fill='none'%20viewBox='0%200%20320%20300'%3e%3cpath%20fill='%23d0bcff'%20d='M15.715%2080.54c2.574-24.58%203.861-36.87%208.588-46.562C31.142%2019.945%2043.077%209.11%2057.628%203.723%2067.683%200%2079.933%200%20104.432%200h123.705c29.627%200%2044.441%200%2055.75%204.854%2016.374%207.028%2028.833%2020.995%2034.04%2038.166%203.596%2011.85%202.04%2026.71-1.073%2056.44l-12.569%20120c-2.574%2024.58-3.861%2036.87-8.588%2046.56-6.839%2014.03-18.774%2024.87-33.325%2030.26-10.055%203.72-22.305%203.72-46.804%203.72H91.863c-29.627%200-44.441%200-55.75-4.85-16.374-7.03-28.833-21-34.04-38.17-3.597-11.85-2.04-26.71%201.073-56.44z'/%3e%3c/svg%3e")}.shape.soft-boom{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M174.94%2084.95c22.54-113.265-52.39-113.265-29.86%200C122.55-28.315%2053.327.352%20117.49%2096.38%2053.327.352.352%2053.33%2096.38%20117.49.352%2053.33-28.315%20122.55%2084.95%20145.07c-113.265-22.53-113.265%2052.39%200%2029.86-113.265%2022.53-84.584%2091.74%2011.43%2027.58-96.014%2064.16-43.04%20117.14%2021.11%2021.11-64.163%2096.01%205.06%20124.68%2027.58%2011.43-22.53%20113.27%2052.39%20113.27%2029.86%200%2022.53%20113.27%2091.74%2084.58%2027.58-11.43%2064.16%2096.01%20117.14%2043.04%2021.11-21.11%2096.01%2064.16%20124.68-5.06%2011.43-27.58%20113.27%2022.53%20113.27-52.39%200-29.86%20113.27-22.53%2084.58-91.74-11.43-27.58C319.63%2053.33%20266.66.352%20202.51%2096.38c64.16-96.014-5.06-124.682-27.58-11.43z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M174.94%2084.95c22.54-113.265-52.39-113.265-29.86%200C122.55-28.315%2053.327.352%20117.49%2096.38%2053.327.352.352%2053.33%2096.38%20117.49.352%2053.33-28.315%20122.55%2084.95%20145.07c-113.265-22.53-113.265%2052.39%200%2029.86-113.265%2022.53-84.584%2091.74%2011.43%2027.58-96.014%2064.16-43.04%20117.14%2021.11%2021.11-64.163%2096.01%205.06%20124.68%2027.58%2011.43-22.53%20113.27%2052.39%20113.27%2029.86%200%2022.53%20113.27%2091.74%2084.58%2027.58-11.43%2064.16%2096.01%20117.14%2043.04%2021.11-21.11%2096.01%2064.16%20124.68-5.06%2011.43-27.58%20113.27%2022.53%20113.27-52.39%200-29.86%20113.27-22.53%2084.58-91.74-11.43-27.58C319.63%2053.33%20266.66.352%20202.51%2096.38c64.16-96.014-5.06-124.682-27.58-11.43z'/%3e%3c/svg%3e")}.shape.soft-burst{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M145.15%207.904c6.83-10.539%2022.87-10.539%2029.7%200l16.39%2025.261c4.49%206.928%2013.56%209.745%2021.45%206.665l28.78-11.227c12.01-4.683%2024.98%204.329%2024.04%2016.697l-2.27%2029.65c-.63%208.13%204.97%2015.5%2013.25%2017.45l30.19%207.09c12.59%202.96%2017.55%2017.54%209.18%2027.02l-20.06%2022.7c-5.5%206.23-5.5%2015.35%200%2021.58l20.06%2022.7c8.37%209.48%203.41%2024.06-9.18%2027.02l-30.19%207.09c-8.28%201.95-13.88%209.32-13.25%2017.45l2.27%2029.65c.94%2012.37-12.03%2021.38-24.04%2016.7l-28.78-11.23c-7.89-3.08-16.96-.26-21.45%206.67l-16.39%2025.26c-6.83%2010.53-22.87%2010.53-29.7%200l-16.39-25.26c-4.49-6.93-13.56-9.75-21.45-6.67L78.53%20291.4c-12.01%204.68-24.98-4.33-24.04-16.7l2.27-29.65c.63-8.13-4.97-15.5-13.25-17.45l-30.19-7.09c-12.59-2.96-17.55-17.54-9.18-27.02l20.06-22.7c5.5-6.23%205.5-15.35%200-21.58l-20.06-22.7c-8.37-9.48-3.41-24.06%209.18-27.02l30.19-7.09c8.28-1.95%2013.88-9.32%2013.25-17.45L54.49%2045.3c-.94-12.368%2012.03-21.38%2024.04-16.697l28.78%2011.227c7.89%203.08%2016.96.263%2021.45-6.665z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M145.15%207.904c6.83-10.539%2022.87-10.539%2029.7%200l16.39%2025.261c4.49%206.928%2013.56%209.745%2021.45%206.665l28.78-11.227c12.01-4.683%2024.98%204.329%2024.04%2016.697l-2.27%2029.65c-.63%208.13%204.97%2015.5%2013.25%2017.45l30.19%207.09c12.59%202.96%2017.55%2017.54%209.18%2027.02l-20.06%2022.7c-5.5%206.23-5.5%2015.35%200%2021.58l20.06%2022.7c8.37%209.48%203.41%2024.06-9.18%2027.02l-30.19%207.09c-8.28%201.95-13.88%209.32-13.25%2017.45l2.27%2029.65c.94%2012.37-12.03%2021.38-24.04%2016.7l-28.78-11.23c-7.89-3.08-16.96-.26-21.45%206.67l-16.39%2025.26c-6.83%2010.53-22.87%2010.53-29.7%200l-16.39-25.26c-4.49-6.93-13.56-9.75-21.45-6.67L78.53%20291.4c-12.01%204.68-24.98-4.33-24.04-16.7l2.27-29.65c.63-8.13-4.97-15.5-13.25-17.45l-30.19-7.09c-12.59-2.96-17.55-17.54-9.18-27.02l20.06-22.7c5.5-6.23%205.5-15.35%200-21.58l-20.06-22.7c-8.37-9.48-3.41-24.06%209.18-27.02l30.19-7.09c8.28-1.95%2013.88-9.32%2013.25-17.45L54.49%2045.3c-.94-12.368%2012.03-21.38%2024.04-16.697l28.78%2011.227c7.89%203.08%2016.96.263%2021.45-6.665z'/%3e%3c/svg%3e")}.shape.square{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M320%20172c0%2044.72%200%2067.08-7.02%2084.81-10.17%2025.68-30.49%2046-56.17%2056.17C239.08%20320%20216.72%20320%20172%20320h-24c-44.72%200-67.08%200-84.81-7.02-25.68-10.17-46-30.49-56.17-56.17C0%20239.08%200%20216.72%200%20172v-24c0-44.72%200-67.08%207.02-84.81A100%20100%200%200%201%2063.19%207.022C80.92%200%20103.28%200%20148%200h24c44.72%200%2067.08%200%2084.81%207.022a100%20100%200%200%201%2056.17%2056.168C320%2080.92%20320%20103.28%20320%20148z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M320%20172c0%2044.72%200%2067.08-7.02%2084.81-10.17%2025.68-30.49%2046-56.17%2056.17C239.08%20320%20216.72%20320%20172%20320h-24c-44.72%200-67.08%200-84.81-7.02-25.68-10.17-46-30.49-56.17-56.17C0%20239.08%200%20216.72%200%20172v-24c0-44.72%200-67.08%207.02-84.81A100%20100%200%200%201%2063.19%207.022C80.92%200%20103.28%200%20148%200h24c44.72%200%2067.08%200%2084.81%207.022a100%20100%200%200%201%2056.17%2056.168C320%2080.92%20320%20103.28%20320%20148z'/%3e%3c/svg%3e")}.shape.sunny{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='340'%20height='340'%20fill='none'%20viewBox='0%200%20340%20340'%3e%3cpath%20fill='%23d0bcff'%20d='M261.856%2041.24c10.575.72%2015.862%201.08%2020.135%202.94a26.86%2026.86%200%200%201%2013.825%2013.83c1.869%204.27%202.228%209.56%202.946%2020.13l1.64%2024.13c.291%204.28.436%206.42.901%208.46a26.8%2026.8%200%200%200%203.451%208.33c1.115%201.78%202.525%203.39%205.343%206.62l15.904%2018.22c6.969%207.99%2010.454%2011.98%2012.154%2016.32a26.84%2026.84%200%200%201%200%2019.56c-1.7%204.34-5.185%208.33-12.154%2016.32l-15.904%2018.22c-2.818%203.23-4.228%204.84-5.343%206.62a26.8%2026.8%200%200%200-3.451%208.33c-.465%202.04-.61%204.18-.901%208.46l-1.64%2024.13c-.718%2010.57-1.077%2015.86-2.946%2020.13a26.86%2026.86%200%200%201-13.825%2013.83c-4.273%201.86-9.56%202.22-20.135%202.94l-24.131%201.64c-4.277.29-6.415.44-8.458.9a26.8%2026.8%200%200%200-8.33%203.45c-1.773%201.12-3.388%202.53-6.618%205.35L196.097%20326c-7.986%206.97-11.978%2010.45-16.322%2012.15a26.72%2026.72%200%200%201-19.55%200c-4.344-1.7-8.336-5.18-16.322-12.15l-18.222-15.9c-3.23-2.82-4.845-4.23-6.618-5.35a26.8%2026.8%200%200%200-8.33-3.45c-2.043-.46-4.181-.61-8.458-.9l-24.131-1.64c-10.575-.72-15.862-1.08-20.135-2.94a26.86%2026.86%200%200%201-13.825-13.83c-1.869-4.27-2.228-9.56-2.947-20.13l-1.64-24.13c-.29-4.28-.435-6.42-.9-8.46a26.8%2026.8%200%200%200-3.45-8.33c-1.116-1.78-2.526-3.39-5.344-6.62L13.999%20196.1c-6.969-7.99-10.454-11.98-12.154-16.32a26.84%2026.84%200%200%201%200-19.56c1.7-4.34%205.185-8.33%2012.154-16.32l15.904-18.22c2.818-3.23%204.228-4.84%205.343-6.62a26.8%2026.8%200%200%200%203.45-8.33c.466-2.04.611-4.18.902-8.46l1.64-24.13c.718-10.57%201.077-15.86%202.946-20.13A26.86%2026.86%200%200%201%2058.01%2044.18c4.273-1.86%209.56-2.22%2020.135-2.94l24.131-1.64c4.277-.29%206.415-.44%208.458-.9a26.8%2026.8%200%200%200%208.33-3.45c1.773-1.12%203.388-2.53%206.618-5.35L143.903%2014c7.986-6.97%2011.978-10.45%2016.322-12.15a26.72%2026.72%200%200%201%2019.55%200c4.344%201.7%208.336%205.18%2016.322%2012.15l18.222%2015.9c3.23%202.82%204.845%204.23%206.618%205.35a26.8%2026.8%200%200%200%208.33%203.45c2.043.46%204.181.61%208.458.9z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='340'%20height='340'%20fill='none'%20viewBox='0%200%20340%20340'%3e%3cpath%20fill='%23d0bcff'%20d='M261.856%2041.24c10.575.72%2015.862%201.08%2020.135%202.94a26.86%2026.86%200%200%201%2013.825%2013.83c1.869%204.27%202.228%209.56%202.946%2020.13l1.64%2024.13c.291%204.28.436%206.42.901%208.46a26.8%2026.8%200%200%200%203.451%208.33c1.115%201.78%202.525%203.39%205.343%206.62l15.904%2018.22c6.969%207.99%2010.454%2011.98%2012.154%2016.32a26.84%2026.84%200%200%201%200%2019.56c-1.7%204.34-5.185%208.33-12.154%2016.32l-15.904%2018.22c-2.818%203.23-4.228%204.84-5.343%206.62a26.8%2026.8%200%200%200-3.451%208.33c-.465%202.04-.61%204.18-.901%208.46l-1.64%2024.13c-.718%2010.57-1.077%2015.86-2.946%2020.13a26.86%2026.86%200%200%201-13.825%2013.83c-4.273%201.86-9.56%202.22-20.135%202.94l-24.131%201.64c-4.277.29-6.415.44-8.458.9a26.8%2026.8%200%200%200-8.33%203.45c-1.773%201.12-3.388%202.53-6.618%205.35L196.097%20326c-7.986%206.97-11.978%2010.45-16.322%2012.15a26.72%2026.72%200%200%201-19.55%200c-4.344-1.7-8.336-5.18-16.322-12.15l-18.222-15.9c-3.23-2.82-4.845-4.23-6.618-5.35a26.8%2026.8%200%200%200-8.33-3.45c-2.043-.46-4.181-.61-8.458-.9l-24.131-1.64c-10.575-.72-15.862-1.08-20.135-2.94a26.86%2026.86%200%200%201-13.825-13.83c-1.869-4.27-2.228-9.56-2.947-20.13l-1.64-24.13c-.29-4.28-.435-6.42-.9-8.46a26.8%2026.8%200%200%200-3.45-8.33c-1.116-1.78-2.526-3.39-5.344-6.62L13.999%20196.1c-6.969-7.99-10.454-11.98-12.154-16.32a26.84%2026.84%200%200%201%200-19.56c1.7-4.34%205.185-8.33%2012.154-16.32l15.904-18.22c2.818-3.23%204.228-4.84%205.343-6.62a26.8%2026.8%200%200%200%203.45-8.33c.466-2.04.611-4.18.902-8.46l1.64-24.13c.718-10.57%201.077-15.86%202.946-20.13A26.86%2026.86%200%200%201%2058.01%2044.18c4.273-1.86%209.56-2.22%2020.135-2.94l24.131-1.64c4.277-.29%206.415-.44%208.458-.9a26.8%2026.8%200%200%200%208.33-3.45c1.773-1.12%203.388-2.53%206.618-5.35L143.903%2014c7.986-6.97%2011.978-10.45%2016.322-12.15a26.72%2026.72%200%200%201%2019.55%200c4.344%201.7%208.336%205.18%2016.322%2012.15l18.222%2015.9c3.23%202.82%204.845%204.23%206.618%205.35a26.8%2026.8%200%200%200%208.33%203.45c2.043.46%204.181.61%208.458.9z'/%3e%3c/svg%3e")}.shape.triangle{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='316'%20height='286'%20fill='none'%20viewBox='0%200%20316%20286'%3e%3cpath%20fill='%23d0bcff'%20d='M104.461%2051.2c15.136-26.38%2022.704-39.57%2031.881-45.14a41.73%2041.73%200%200%201%2043.316%200c9.177%205.57%2016.745%2018.76%2031.881%2045.14l81.77%20142.52c14.991%2026.13%2022.486%2039.19%2022.684%2049.86a41.63%2041.63%200%200%201-21.629%2037.28c-9.37%205.14-24.445%205.14-54.594%205.14H76.23c-30.15%200-45.224%200-54.594-5.14a41.62%2041.62%200%200%201-21.63-37.28c.199-10.67%207.694-23.73%2022.685-49.86z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='316'%20height='286'%20fill='none'%20viewBox='0%200%20316%20286'%3e%3cpath%20fill='%23d0bcff'%20d='M104.461%2051.2c15.136-26.38%2022.704-39.57%2031.881-45.14a41.73%2041.73%200%200%201%2043.316%200c9.177%205.57%2016.745%2018.76%2031.881%2045.14l81.77%20142.52c14.991%2026.13%2022.486%2039.19%2022.684%2049.86a41.63%2041.63%200%200%201-21.629%2037.28c-9.37%205.14-24.445%205.14-54.594%205.14H76.23c-30.15%200-45.224%200-54.594-5.14a41.62%2041.62%200%200%201-21.63-37.28c.199-10.67%207.694-23.73%2022.685-49.86z'/%3e%3c/svg%3e")}.shape.very-sunny{-webkit-mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M136.72%2013.19c10.54-17.59%2036.02-17.59%2046.56%200l11.84%2019.77c6.15%2010.25%2018.28%2015.28%2029.87%2012.37l22.36-5.6c19.89-4.98%2037.9%2013.03%2032.92%2032.92l-5.6%2022.36c-2.91%2011.59%202.12%2023.72%2012.37%2029.87l19.77%2011.84c17.59%2010.54%2017.59%2036.02%200%2046.56l-19.77%2011.84c-10.25%206.15-15.28%2018.28-12.37%2029.87l5.6%2022.36c4.98%2019.89-13.03%2037.9-32.92%2032.92l-22.36-5.6c-11.59-2.91-23.72%202.12-29.87%2012.37l-11.84%2019.77c-10.54%2017.59-36.02%2017.59-46.56%200l-11.84-19.77c-6.15-10.25-18.28-15.28-29.87-12.37l-22.364%205.6c-19.883%204.98-37.899-13.03-32.917-32.92l5.604-22.36c2.905-11.59-2.119-23.72-12.373-29.87l-19.773-11.84c-17.583-10.54-17.583-36.02%200-46.56l19.773-11.84c10.254-6.15%2015.278-18.28%2012.373-29.87l-5.604-22.36c-4.982-19.89%2013.034-37.9%2032.916-32.92l22.365%205.6c11.59%202.91%2023.72-2.12%2029.87-12.37z'/%3e%3c/svg%3e");mask-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20fill='none'%20viewBox='0%200%20320%20320'%3e%3cpath%20fill='%23d0bcff'%20d='M136.72%2013.19c10.54-17.59%2036.02-17.59%2046.56%200l11.84%2019.77c6.15%2010.25%2018.28%2015.28%2029.87%2012.37l22.36-5.6c19.89-4.98%2037.9%2013.03%2032.92%2032.92l-5.6%2022.36c-2.91%2011.59%202.12%2023.72%2012.37%2029.87l19.77%2011.84c17.59%2010.54%2017.59%2036.02%200%2046.56l-19.77%2011.84c-10.25%206.15-15.28%2018.28-12.37%2029.87l5.6%2022.36c4.98%2019.89-13.03%2037.9-32.92%2032.92l-22.36-5.6c-11.59-2.91-23.72%202.12-29.87%2012.37l-11.84%2019.77c-10.54%2017.59-36.02%2017.59-46.56%200l-11.84-19.77c-6.15-10.25-18.28-15.28-29.87-12.37l-22.364%205.6c-19.883%204.98-37.899-13.03-32.917-32.92l5.604-22.36c2.905-11.59-2.119-23.72-12.373-29.87l-19.773-11.84c-17.583-10.54-17.583-36.02%200-46.56l19.773-11.84c10.254-6.15%2015.278-18.28%2012.373-29.87l-5.604-22.36c-4.982-19.89%2013.034-37.9%2032.916-32.92l22.365%205.6c11.59%202.91%2023.72-2.12%2029.87-12.37z'/%3e%3c/svg%3e")}@keyframes to-shape-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.checkbox,.radio,.switch{--_size: 1.5rem;inline-size:auto;block-size:auto;line-height:normal;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}.switch{direction:ltr}:is(.checkbox,.radio,.switch).small{--_size: 1rem}:is(.checkbox,.radio,.switch).large{--_size: 2rem}:is(.checkbox,.radio,.switch).extra{--_size: 2.5rem}:is(.checkbox,.radio)>input{inline-size:var(--_size);block-size:var(--_size);opacity:0}.switch>input{inline-size:3.25rem;block-size:2rem;opacity:0}:is(.checkbox,.radio,.switch)>span{display:inline-flex;align-items:center;color:var(--on-surface);font-size:.875rem}:is(.checkbox,.radio)>span:not(:empty){padding-inline-start:.25rem}:is(.checkbox,.radio,.switch)>span:before,:is(.checkbox,.radio,.switch)>span>i,:is(.checkbox,.radio)>span:after{--_size: inherit;content:"";inline-size:var(--_size);block-size:var(--_size);box-sizing:border-box;margin:0 auto;outline:none;color:var(--primary);position:absolute;inset:auto auto auto calc(var(--_size, 0) * -1);border-radius:50%;-webkit-user-select:none;user-select:none;z-index:1}[dir=rtl] :is(.checkbox,.radio)>span:before,[dir=rtl] :is(.checkbox,.radio)>span>i,[dir=rtl] :is(.checkbox,.radio)>span:after{--_size: inherit;inset:auto calc(var(--_size, 0) * -1) auto auto}.switch>span:before,.switch.icon>span>i{position:absolute;inset:50% auto auto 0;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;transition:all var(--speed2);font-size:calc(var(--_size, 0) - .5rem);-webkit-user-select:none;user-select:none;min-inline-size:var(--_size);min-block-size:var(--_size);content:"";color:var(--surface-variant);background-color:var(--outline)}.switch>span:before,.switch.icon>span>i{transform:translate(-3rem,-50%) scale(.6)}.switch.icon>span>i{transform:translate(-3rem,-50%) scale(1)}.checkbox>span:before{content:"check_box_outline_blank"}.checkbox>input:checked+span:before{content:"check_box";font-variation-settings:"FILL" 1}.checkbox>input:indeterminate+span:before{content:"indeterminate_check_box"}.radio>span:before{content:"radio_button_unchecked"}.radio>input:checked+span:before{content:"radio_button_checked"}:is(.radio,.checkbox,.switch).icon>span:before{content:""!important;font-variation-settings:unset!important}:is(.checkbox,.radio)>span:after{transition:all var(--speed1);background-color:currentColor;box-shadow:0 0 0 0 currentColor;opacity:0}:is(.checkbox,.radio):is(:hover)>input:not(:disabled)+span:after,:is(.checkbox,.radio)>input:not(:disabled):is(:focus)+span:after{box-shadow:0 0 0 .5rem currentColor;opacity:.1}.switch>input:not(:disabled):is(:focus,:hover)+span:before,.switch.icon>input:not(:disabled):is(:focus,:hover)+span>i{box-shadow:0 0 0 .5rem var(--active)}:is(.checkbox,.radio)>input:checked+span:before,:is(.checkbox,.radio).icon>input:checked+span>i{color:var(--primary)}.icon>input:checked+span>i:first-child,.icon>span>i:last-child{opacity:0}.icon>input:checked+span>i:last-child,.icon>span>i:first-child{opacity:1}.switch>input:checked+span:after{border:none;background-color:var(--primary)}.switch>input:checked+span:before,.switch.icon>input:checked+span>i{content:"check";color:var(--primary);background-color:var(--on-primary);transform:translate(-1.75rem,-50%) scale(1)}.switch>input:active:not(:disabled)+span:before,.switch.icon>input:active:not(:disabled)+span>i{transform:translate(-3rem,-50%) scale(1.2)}[dir=rtl] .switch>input:active:not(:disabled)+span:before,[dir=rtl] .switch.icon>input:active:not(:disabled)+span>i{transform:translate(-3rem,-50%) scale(-1.2)}.switch>input:active:checked:not(:disabled)+span:before,.switch.icon>input:active:checked:not(:disabled)+span>i{transform:translate(-1.75rem,-50%) scale(1.2)}[dir=rtl] .switch>input:active:checked:not(:disabled)+span:before,[dir=rtl] .switch.icon>input:active:checked:not(:disabled)+span>i{transform:translate(-1.75rem,-50%) scale(-1.2)}:is(.checkbox,.radio,.switch)>input:disabled+span{opacity:.5;cursor:not-allowed}.switch>span:after{content:"";position:absolute;inset:50% auto auto 0;background-color:var(--active);border:.125rem solid var(--outline);box-sizing:border-box;inline-size:3.25rem;block-size:2rem;border-radius:2rem;transform:translate(-3.25rem,-50%)}.field>:is(nav,.row){flex-grow:1;padding:0 1rem}.field.round>:is(nav,.row){flex-grow:1;padding:0 1.5rem}[dir=rtl] .switch{transform:scale(-1)}[dir=rtl] .switch>span:before,[dir=rtl] .switch.icon>span>i{transform:translate(-3rem,-50%) scale(-.6)}[dir=rtl] .switch.icon>span>i{transform:translate(-3rem,-50%) scale(-1)}[dir=rtl] .switch>input:checked+span:before,[dir=rtl] .switch.icon>input:checked+span>i{transform:translate(-1.75rem,-50%) scale(-1)}.switch>:focus-visible+span:after{outline:.125rem solid var(--primary);outline-offset:.25rem}:is(.checkbox,.radio)>:focus-visible+span:before{outline:.125rem solid var(--primary);outline-offset:.375rem}.slider{--_start: 0%;--_end: 0%;--_value1: "";--_value2: "";--_track: 1rem;--_thumb: max(2.5rem, calc(var(--_track, 0) + .5rem));display:flex;align-items:center!important;inline-size:auto;block-size:var(--_thumb);flex:none;direction:ltr;margin:0 1.25rem;color:var(--primary)}[dir=rtl] .slider{transform:scaleX(-1)}.slider.vertical{flex-direction:row!important;margin:.5rem auto!important;padding:50% 0;transform:rotate(-90deg);inline-size:100%}.slider.tiny{--_track: 1rem}.slider.small{--_track: 1.5rem}.slider.medium{--_track: 2.5rem}.slider.large{--_track: 3.5rem}.slider.extra{--_track: 6rem}.slider>input{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:none;outline:none;pointer-events:none;inline-size:100%;block-size:var(--_track);background:none;z-index:1;padding:0;margin:0;transform:rotate(0)}.slider>input:only-of-type{pointer-events:all}.slider>input~input{position:absolute}.slider>input::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:var(--_thumb);inline-size:.25rem;border-radius:.25rem;background:currentColor;cursor:grab;margin:0;z-index:1}.slider>input::-webkit-slider-thumb:active{cursor:grabbing}.slider>input::-moz-range-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:2.75rem;inline-size:.25rem;border-radius:.25rem;background:var(--primary);cursor:grab;margin:0}.slider>input::-moz-range-thumb:active{cursor:grabbing}.slider>input:not(:disabled):is(:focus)::-webkit-slider-thumb{transform:scaleX(.6)}.slider>input:not(:disabled):is(:focus)::-moz-range-thumb{transform:scaleX(.6)}.slider>input:disabled{cursor:not-allowed;opacity:1}.slider>input:disabled::-webkit-slider-thumb{background:var(--outline);cursor:not-allowed}.slider>input:disabled::-moz-range-thumb{background:var(--outline);cursor:not-allowed}.slider>input:disabled~span:not([class]){background:var(--outline)}.slider>span:not([class]){position:absolute;block-size:var(--_track);border-radius:1rem 0 0 1rem;background:currentColor;color:currentColor;z-index:0;inset:calc(50% - (var(--_track, 0) / 2)) calc(var(--_end) + .5rem) auto var(--_start)}.slider>input[type=range]+input[type=range]~span:not([class]){border-radius:0;inset:calc(50% - (var(--_track, 0) / 2)) calc(var(--_end) + .5rem) auto calc(var(--_start) + .5rem)}.field>.slider{inline-size:100%}.slider:before{content:"";position:absolute;inline-size:100%;block-size:var(--_track);border-radius:1rem;background:var(--active);clip-path:polygon(calc(var(--_start, 0) - .5rem) 0,0 0,0 100%,calc(var(--_start, 0) - .5rem) 100%,calc(var(--_start, 0) - .5rem) 0,calc(100% - var(--_end, 0) + .5rem) 0,100% 0,100% 100%,calc(100% - var(--_end, 0) + .5rem) 100%,calc(100% - var(--_end, 0) + .5rem) 0)}.slider:has(>[disabled]):before{background:var(--active)}.slider:has([disabled]){opacity:.62}.slider>span>i{position:absolute;block-size:auto;inset:0 auto 0 .5rem;color:currentColor;z-index:1}.slider:not(.medium,.large,.extra)>span>i{display:none}.slider.vertical>i{transform:rotate(90deg)}.slider>.tooltip{visibility:hidden!important;opacity:0!important;inset:0 auto auto calc(100% - var(--_end, 0));border-radius:2rem;transition:top var(--speed2) ease,opacity var(--speed2) ease;transform:translate(-50%,-25%)!important;padding:.75rem 1rem}.slider>.tooltip.bottom{inset:auto auto 0 calc(100% - var(--_end, 0));transition:bottom var(--speed2) ease,opacity var(--speed2) ease;transform:translate(-50%,25%)!important}[dir=rtl] .slider>.tooltip{transform:translate(-50%,-25%) scaleX(-1)!important}[dir=rtl] .slider>.tooltip.bottom{transform:translate(-50%,25%) scaleX(-1)!important}.slider>.tooltip+.tooltip{inset:.25rem calc(100% - var(--_start, 0)) auto auto;transform:translate(50%,-25%)!important}.slider>.tooltip+.tooltip.bottom{inset:auto calc(100% - var(--_start, 0)) -.25rem auto;transform:translate(50%,25%)!important}[dir=rtl] .slider>.tooltip+.tooltip{transform:translate(50%,-25%) scaleX(-1)!important}[dir=rtl] .slider>.tooltip+.tooltip.bottom{transform:translate(50%,25%) scaleX(-1)!important}.slider>.tooltip:before{content:var(--_value1)}.slider>.tooltip+.tooltip:before{content:var(--_value2)}.slider>:focus~.tooltip{inset-block:-1rem auto;opacity:1!important;visibility:visible!important}.slider>:focus~.tooltip.bottom{inset-block:auto -1rem}.slider.vertical>.tooltip{inset-block:auto;block-size:2.5rem;inline-size:2.5rem;margin-block:calc(-1 * var(--_thumb, 0)) 0!important;transform:rotate(90deg) translate(-75%,50%)!important}.slider.vertical>.tooltip.bottom{inset-block:auto;margin-block:0 calc(-1 * var(--_thumb, 0))!important;transform:rotate(90deg) translate(75%,50%)!important}.slider.vertical>.tooltip+.tooltip{transform:rotate(90deg) translate(-75%,-50%)!important}.slider.vertical>.tooltip+.tooltip.bottom{transform:rotate(90deg) translate(75%,-50%)!important}:is(nav,.row,.field)>.slider:not(.circle,.small,.medium,.large){flex:auto}.slider.max,.slider.max.vertical,.slider.max>input,.slider.max.vertical>input{all:unset;margin:0!important;position:absolute;color:var(--primary);top:0;right:0;bottom:0;left:0;border-radius:inherit;overflow:hidden;z-index:2;cursor:grab;inline-size:100%;block-size:100%}.slider.max:before{display:none}.slider.max.vertical>input{writing-mode:vertical-lr;transform:rotate(-180deg)}.slider.max>input::-webkit-slider-thumb{opacity:0;inline-size:1rem;block-size:100vh;transform:none!important}.slider.max>input::-moz-range-thumb{opacity:0;inline-size:1rem;block-size:100vh;transform:none!important}.slider.max>span:not([class]){block-size:auto!important;inset:0 var(--_end) 0 var(--_start);background:currentcolor;color:inherit;border-radius:0}.slider.max.vertical>span:not([class]){inset:var(--_end) 0 var(--_start) 0}.slider>input:focus-visible::-webkit-slider-thumb{outline:.1875rem solid var(--primary);outline-offset:.25rem}.slider>input:focus-visible::-moz-range-thumb{outline:.1875rem solid var(--primary);outline-offset:.25rem}.slider.max>input:focus-visible{outline:.1875rem solid var(--primary);outline-offset:-.125rem}@media(pointer:coarse){.slider>:hover~.tooltip{inset-block:-1rem auto!important;opacity:1!important;visibility:visible!important}.slider>:hover~.tooltip.bottom{inset-block:auto -1rem!important}}.snackbar{position:fixed;inset:auto auto 6rem 50%;inline-size:80%;block-size:auto;z-index:200;visibility:hidden;display:flex;box-shadow:var(--elevate2);color:var(--inverse-on-surface);background-color:var(--inverse-surface);padding:1rem;cursor:pointer;text-align:start;align-items:center;border-radius:.25rem;gap:.5rem;transition:all var(--speed2);transform:translate(-50%,1rem);opacity:0}.snackbar.top{inset:6rem auto auto 50%}.snackbar:is(.active){visibility:visible;transform:translate(-50%);opacity:1}.snackbar:popover-open{visibility:visible;transform:translate(-50%);opacity:1}.snackbar>.max{flex:auto}@media only screen and (min-width:993px){.snackbar{inline-size:40%}}table{inline-size:100%;border-spacing:0;font-size:.875rem;text-align:start}.scroll>table,table :is(thead,tbody,tfoot,tr,th,td){background-color:inherit;color:inherit}:is(th,td){inline-size:auto;text-align:inherit;padding:.5rem;border-radius:0}:is(th,td)>*{vertical-align:middle}table.border>tbody>tr:not(:last-child)>td,thead>tr>th{border-block-end:.0625rem solid var(--outline)}tfoot>tr>th{border-block-start:.0625rem solid var(--outline)}table.stripes>tbody>tr:nth-child(odd){background-color:var(--active)}table.no-space :is(th,td){padding:0}table.medium-space :is(th,td){padding:.75rem}table.large-space :is(th,td){padding:1rem}table>.fixed,th.fixed{position:sticky;z-index:1;inset-block-start:0}tfoot.fixed,tfoot th.fixed{inset-block-end:0}:is(td,th).min{inline-size:.1%;white-space:nowrap}.tabs{display:flex;white-space:nowrap;border-block-end:.0625rem solid var(--surface-variant);border-radius:0}.tabs:not(.left-align,.right-align,.center-align){justify-content:space-around}.tabs>a{display:flex;font-size:.875rem;font-weight:500;color:var(--on-surface-variant);padding:.5rem 1rem;text-align:center;min-block-size:3rem;inline-size:100%;gap:.25rem}.tabs.small>a{min-block-size:2rem}.tabs.large>a{min-block-size:4rem}.tabs>a.active,.tabs>a.active>i{color:var(--primary)}.tabs>a.active:before{content:"";position:absolute;inset:auto 0 0 0;block-size:.125rem;background-color:var(--primary)}.tabs.min>a.active:before{margin:0 auto;max-inline-size:min(100%,4rem)}.tabs:is(.left-align,.center-align,.right-align)>a{inline-size:auto}.tooltip{--_space: -.5rem;visibility:hidden;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--inverse-surface);color:var(--inverse-on-surface);font-size:.75rem;text-align:center;border-radius:.25rem;padding:.5rem;position:absolute;z-index:200;inset:0 auto auto 50%;inline-size:auto;white-space:nowrap;font-weight:500;opacity:0;transition:all var(--speed2);line-height:normal;transform:translate(-50%,-100%) scale(.9)}.tooltip:not(.max):hover{visibility:hidden;opacity:0}.tooltip.left{inset:50% auto auto 0;transform:translate(-100%,-50%) scale(.9)}.tooltip.right{inset:50% 0 auto auto;transform:translate(100%,-50%) scale(.9)}.tooltip.bottom{inset:auto auto 0 50%;transform:translate(-50%,100%) scale(.9)}.tooltip.small{inline-size:8rem;white-space:normal}.tooltip.medium{inline-size:12rem;white-space:normal}.tooltip.large{inline-size:16rem;white-space:normal}:hover>.tooltip{visibility:visible;opacity:1;transform:translate(-50%,-100%) scale(1)}:hover>.tooltip.left{transform:translate(-100%,-50%) scale(1)}:hover>.tooltip.right{transform:translate(100%,-50%) scale(1)}:hover>.tooltip.bottom{transform:translate(-50%,100%) scale(1)}.tooltip.no-space{--_space: 0}.tooltip.medium-space{--_space: -1rem}.tooltip.large-space{--_space: -1.5rem}.tooltip:not(.left,.right,.bottom){margin-block-start:var(--_space)!important}.tooltip.left,.tooltip.right{margin-inline:var(--_space)!important}.tooltip.bottom{margin-block-end:var(--_space)!important}menu:active~.tooltip,:is(button,.button):focus>menu~.tooltip,.field>:focus~menu~.tooltip{visibility:hidden}.slider>.tooltip{--_space: -1.25rem}.slider.vertical>.tooltip{--_space: -.75rem}.slider.vertical>.tooltip:is(.left,.right){--_space: -.5rem}.tooltip.max{display:block;font-size:inherit;white-space:normal;text-align:start;inline-size:20rem;border-radius:.5rem;padding:1rem;box-shadow:var(--elevate2)}.transparent{background-color:transparent!important;box-shadow:none!important;color:inherit!important}.primary{background-color:var(--primary)!important;color:var(--on-primary)!important}.primary-text{color:var(--primary)!important}.primary-border{border-color:var(--primary)!important}.primary-container{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}.secondary{background-color:var(--secondary)!important;color:var(--on-secondary)!important}.secondary-text{color:var(--secondary)!important}.secondary-border{border-color:var(--secondary)!important}.secondary-container{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}.tertiary{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}.tertiary-text{color:var(--tertiary)!important}.tertiary-border{border-color:var(--tertiary)!important}.tertiary-container{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}.error{background-color:var(--error)!important;color:var(--on-error)!important}.error-text{color:var(--error)!important}.error-border{border-color:var(--error)!important}.error-container{background-color:var(--error-container)!important;color:var(--on-error-container)!important}.background{background-color:var(--background)!important;color:var(--on-background)!important}.surface,.surface-dim,.surface-bright,.surface-container-lowest,.surface-container-low,.surface-container,.surface-container-high,.surface-container-highest{background-color:var(--surface)!important;color:var(--on-surface)!important}.surface-variant{background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.inverse-surface{background-color:var(--inverse-surface);color:var(--inverse-on-surface)}.inverse-primary{background-color:var(--inverse-primary);color:var(--primary)}.inverse-primary-text{color:var(--inverse-primary)!important}.inverse-primary-border{border-color:var(--inverse-primary)!important}.surface-dim{background-color:var(--surface-dim)!important}.surface-bright{background-color:var(--surface-bright)!important}.surface-container-lowest{background-color:var(--surface-container-lowest)!important}.surface-container{background-color:var(--surface-container)!important}.surface-container-high{background-color:var(--surface-container-high)!important}.surface-container-highest{background-color:var(--surface-container-highest)!important}.surface-container-low{background-color:var(--surface-container-low)!important}.black{background-color:#000!important}.black-border{border-color:#000!important}.black-text{color:#000!important}.white{background-color:#fff!important}.white-border{border-color:#fff!important}.white-text{color:#fff!important}.transparent-border{border-color:transparent!important}.transparent-text{color:transparent!important}.fill:not(i){background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}nav.primary-container>button,:is(nav,menu).primary>:is(button,a,li).active{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}nav.primary>button,:is(nav,menu).primary-container>:is(button,a,li).active{background-color:var(--primary)!important;color:var(--on-primary)!important}nav.secondary-container>button,:is(nav,menu).secondary>:is(button,a,li).active{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}nav.secondary>button,:is(nav,menu).secondary-container>:is(button,a,li).active{background-color:var(--secondary)!important;color:var(--on-secondary)!important}nav.tertiary-container>button,:is(nav,menu).tertiary>:is(button,a,li).active{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}nav.tertiary>button,:is(nav,menu).tertiary-container>:is(button,a,li).active{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}.red,.red6{background-color:#f44336!important}.red-border{border-color:#f44336!important}.red-text{color:#f44336!important}.red1{background-color:#ffebee!important}.red2{background-color:#ffcdd2!important}.red3{background-color:#ef9a9a!important}.red4{background-color:#e57373!important}.red5{background-color:#ef5350!important}.red7{background-color:#e53935!important}.red8{background-color:#d32f2f!important}.red9{background-color:#c62828!important}.red10{background-color:#b71c1c!important}.pink,.pink6{background-color:#e91e63!important}.pink-border{border-color:#e91e63!important}.pink-text{color:#e91e63!important}.pink1{background-color:#fce4ec!important}.pink2{background-color:#f8bbd0!important}.pink3{background-color:#f48fb1!important}.pink4{background-color:#f06292!important}.pink5{background-color:#ec407a!important}.pink7{background-color:#d81b60!important}.pink8{background-color:#c2185b!important}.pink9{background-color:#ad1457!important}.pink10{background-color:#880e4f!important}.purple,.purple6{background-color:#9c27b0!important}.purple-border{border-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.purple1{background-color:#f3e5f5!important}.purple2{background-color:#e1bee7!important}.purple3{background-color:#ce93d8!important}.purple4{background-color:#ba68c8!important}.purple5{background-color:#ab47bc!important}.purple7{background-color:#8e24aa!important}.purple8{background-color:#7b1fa2!important}.purple9{background-color:#6a1b9a!important}.purple10{background-color:#4a148c!important}.deep-purple,.deep-purple6{background-color:#673ab7!important}.deep-purple-border{border-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.deep-purple1{background-color:#ede7f6!important}.deep-purple2{background-color:#d1c4e9!important}.deep-purple3{background-color:#b39ddb!important}.deep-purple4{background-color:#9575cd!important}.deep-purple5{background-color:#7e57c2!important}.deep-purple7{background-color:#5e35b1!important}.deep-purple8{background-color:#512da8!important}.deep-purple9{background-color:#4527a0!important}.deep-purple10{background-color:#311b92!important}.indigo,.indigo6{background-color:#3f51b5!important}.indigo-border{border-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.indigo1{background-color:#e8eaf6!important}.indigo2{background-color:#c5cae9!important}.indigo3{background-color:#9fa8da!important}.indigo4{background-color:#7986cb!important}.indigo5{background-color:#5c6bc0!important}.indigo7{background-color:#3949ab!important}.indigo8{background-color:#303f9f!important}.indigo9{background-color:#283593!important}.indigo10{background-color:#1a237e!important}.blue,.blue6{background-color:#2196f3!important}.blue-border{border-color:#2196f3!important}.blue-text{color:#2196f3!important}.blue1{background-color:#e3f2fd!important}.blue2{background-color:#bbdefb!important}.blue3{background-color:#90caf9!important}.blue4{background-color:#64b5f6!important}.blue5{background-color:#42a5f5!important}.blue7{background-color:#1e88e5!important}.blue8{background-color:#1976d2!important}.blue9{background-color:#1565c0!important}.blue10{background-color:#0d47a1!important}.light-blue,.light-blue6{background-color:#03a9f4!important}.light-blue-border{border-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.light-blue1{background-color:#e1f5fe!important}.light-blue2{background-color:#b3e5fc!important}.light-blue3{background-color:#81d4fa!important}.light-blue4{background-color:#4fc3f7!important}.light-blue5{background-color:#29b6f6!important}.light-blue7{background-color:#039be5!important}.light-blue8{background-color:#0288d1!important}.light-blue9{background-color:#0277bd!important}.light-blue10{background-color:#01579b!important}.cyan,.cyan6{background-color:#00bcd4!important}.cyan-border{border-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.cyan1{background-color:#e0f7fa!important}.cyan2{background-color:#b2ebf2!important}.cyan3{background-color:#80deea!important}.cyan4{background-color:#4dd0e1!important}.cyan5{background-color:#26c6da!important}.cyan7{background-color:#00acc1!important}.cyan8{background-color:#0097a7!important}.cyan9{background-color:#00838f!important}.cyan10{background-color:#006064!important}.teal,.teal6{background-color:#009688!important}.teal-border{border-color:#009688!important}.teal-text{color:#009688!important}.teal1{background-color:#e0f2f1!important}.teal2{background-color:#b2dfdb!important}.teal3{background-color:#80cbc4!important}.teal4{background-color:#4db6ac!important}.teal5{background-color:#26a69a!important}.teal7{background-color:#00897b!important}.teal8{background-color:#00796b!important}.teal9{background-color:#00695c!important}.teal10{background-color:#004d40!important}.green,.green6{background-color:#4caf50!important}.green-border{border-color:#4caf50!important}.green-text{color:#4caf50!important}.green1{background-color:#e8f5e9!important}.green2{background-color:#c8e6c9!important}.green3{background-color:#a5d6a7!important}.green4{background-color:#81c784!important}.green5{background-color:#66bb6a!important}.green7{background-color:#43a047!important}.green8{background-color:#388e3c!important}.green9{background-color:#2e7d32!important}.green10{background-color:#1b5e20!important}.light-green,.light-green6{background-color:#8bc34a!important}.light-green-border{border-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.light-green1{background-color:#f1f8e9!important}.light-green2{background-color:#dcedc8!important}.light-green3{background-color:#c5e1a5!important}.light-green4{background-color:#aed581!important}.light-green5{background-color:#9ccc65!important}.light-green7{background-color:#7cb342!important}.light-green8{background-color:#689f38!important}.light-green9{background-color:#558b2f!important}.light-green10{background-color:#33691e!important}.lime,.lime6{background-color:#cddc39!important}.lime-border{border-color:#cddc39!important}.lime-text{color:#cddc39!important}.lime1{background-color:#f9fbe7!important}.lime2{background-color:#f0f4c3!important}.lime3{background-color:#e6ee9c!important}.lime4{background-color:#dce775!important}.lime5{background-color:#d4e157!important}.lime7{background-color:#c0ca33!important}.lime8{background-color:#afb42b!important}.lime9{background-color:#9e9d24!important}.lime10{background-color:#827717!important}.yellow,.yellow6{background-color:#ffeb3b!important}.yellow-border{border-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.yellow1{background-color:#fffde7!important}.yellow2{background-color:#fff9c4!important}.yellow3{background-color:#fff59d!important}.yellow4{background-color:#fff176!important}.yellow5{background-color:#ffee58!important}.yellow7{background-color:#fdd835!important}.yellow8{background-color:#fbc02d!important}.yellow9{background-color:#f9a825!important}.yellow10{background-color:#f57f17!important}.amber,.amber6{background-color:#ffc107!important}.amber-border{border-color:#ffc107!important}.amber-text{color:#ffc107!important}.amber1{background-color:#fff8e1!important}.amber2{background-color:#ffecb3!important}.amber3{background-color:#ffe082!important}.amber4{background-color:#ffd54f!important}.amber5{background-color:#ffca28!important}.amber7{background-color:#ffb300!important}.amber8{background-color:#ffa000!important}.amber9{background-color:#ff8f00!important}.amber10{background-color:#ff6f00!important}.orange,.orange6{background-color:#ff9800!important}.orange-border{border-color:#ff9800!important}.orange-text{color:#ff9800!important}.orange1{background-color:#fff3e0!important}.orange2{background-color:#ffe0b2!important}.orange3{background-color:#ffcc80!important}.orange4{background-color:#ffb74d!important}.orange5{background-color:#ffa726!important}.orange7{background-color:#fb8c00!important}.orange8{background-color:#f57c00!important}.orange9{background-color:#ef6c00!important}.orange10{background-color:#e65100!important}.deep-orange,.deep-orange6{background-color:#ff5722!important}.deep-orange-border{border-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.deep-orange1{background-color:#fbe9e7!important}.deep-orange2{background-color:#ffccbc!important}.deep-orange3{background-color:#ffab91!important}.deep-orange4{background-color:#ff8a65!important}.deep-orange5{background-color:#ff7043!important}.deep-orange7{background-color:#f4511e!important}.deep-orange8{background-color:#e64a19!important}.deep-orange9{background-color:#d84315!important}.deep-orange10{background-color:#bf360c!important}.brown,.brown6{background-color:#795548!important}.brown-border{border-color:#795548!important}.brown-text{color:#795548!important}.brown1{background-color:#efebe9!important}.brown2{background-color:#d7ccc8!important}.brown3{background-color:#bcaaa4!important}.brown4{background-color:#a1887f!important}.brown5{background-color:#8d6e63!important}.brown7{background-color:#6d4c41!important}.brown8{background-color:#5d4037!important}.brown9{background-color:#4e342e!important}.brown10{background-color:#3e2723!important}.blue-grey,.blue-grey6{background-color:#607d8b!important}.blue-grey-border{border-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.blue-grey1{background-color:#eceff1!important}.blue-grey2{background-color:#cfd8dc!important}.blue-grey3{background-color:#b0bec5!important}.blue-grey4{background-color:#90a4ae!important}.blue-grey5{background-color:#78909c!important}.blue-grey7{background-color:#546e7a!important}.blue-grey8{background-color:#455a64!important}.blue-grey9{background-color:#37474f!important}.blue-grey10{background-color:#263238!important}.grey,.grey6{background-color:#9e9e9e!important}.grey-border{border-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.grey1{background-color:#fafafa!important}.grey2{background-color:#f5f5f5!important}.grey3{background-color:#eee!important}.grey4{background-color:#e0e0e0!important}.grey5{background-color:#bdbdbd!important}.grey7{background-color:#757575!important}.grey8{background-color:#616161!important}.grey9{background-color:#424242!important}.grey10{background-color:#212121!important}:root{--eox-theme-light-background: 253, 252, 255;--eox-theme-light-code: 245, 245, 245;--eox-theme-light-error-container: 255, 218, 214;--eox-theme-light-error: 186, 26, 26;--eox-theme-light-inverse-on-surface: 240, 240, 245;--eox-theme-light-inverse-primary: 158, 202, 255;--eox-theme-light-inverse-surface: 46, 48, 52;--eox-theme-light-kbd: 33, 37, 41;--eox-theme-light-neutral-palette-key-color: 117, 119, 123;--eox-theme-light-neutral-variant-palette-key-color: 114, 119, 128;--eox-theme-light-on-background: 0, 0, 0;--eox-theme-light-on-code: 0, 0, 0;--eox-theme-light-on-error-container: 65, 0, 2;--eox-theme-light-on-error: 255, 255, 255;--eox-theme-light-on-inverse-on-surface: 0, 0, 0;--eox-theme-light-on-inverse-primary: 0, 0, 0;--eox-theme-light-on-inverse-surface: 255, 255, 255;--eox-theme-light-on-kbd: 255, 255, 255;--eox-theme-light-on-neutral-palette-key-color: 255, 255, 255;--eox-theme-light-on-neutral-variant-palette-key-color: 255, 255, 255;--eox-theme-light-on-outline-variant: 0, 0, 0;--eox-theme-light-on-outline: 255, 255, 255;--eox-theme-light-on-primary-container: 0, 29, 54;--eox-theme-light-on-primary-fixed-dim: 0, 0, 0;--eox-theme-light-on-primary-fixed-variant: 16, 73, 120;--eox-theme-light-on-primary-fixed: 0, 29, 54;--eox-theme-light-on-primary-palette-key-color: 255, 255, 255;--eox-theme-light-on-primary: 255, 255, 255;--eox-theme-light-on-scrim: 255, 255, 255;--eox-theme-light-on-secondary-container: 0, 31, 40;--eox-theme-light-on-secondary-fixed-dim: 0, 0, 0;--eox-theme-light-on-secondary-fixed-variant: 15, 77, 95;--eox-theme-light-on-secondary-fixed: 0, 31, 40;--eox-theme-light-on-secondary-palette-key-color: 255, 255, 255;--eox-theme-light-on-secondary: 255, 255, 255;--eox-theme-light-on-shadow: 255, 255, 255;--eox-theme-light-on-surface-bright: 0, 0, 0;--eox-theme-light-on-surface-container-high: 0, 0, 0;--eox-theme-light-on-surface-container-highest: 0, 0, 0;--eox-theme-light-on-surface-container-low: 0, 0, 0;--eox-theme-light-on-surface-container-lowest: 0, 0, 0;--eox-theme-light-on-surface-container: 0, 0, 0;--eox-theme-light-on-surface-dim: 0, 0, 0;--eox-theme-light-on-surface-light: 0, 0, 0;--eox-theme-light-on-surface-tint: 255, 255, 255;--eox-theme-light-on-surface: 26, 28, 31;--eox-theme-light-on-tertiary-container: 17, 19, 79;--eox-theme-light-on-tertiary-fixed-dim: 0, 0, 0;--eox-theme-light-on-tertiary-fixed-variant: 62, 65, 124;--eox-theme-light-on-tertiary-fixed: 17, 19, 79;--eox-theme-light-on-tertiary-palette-key-color: 255, 255, 255;--eox-theme-light-on-tertiary: 255, 255, 255;--eox-theme-light-outline-variant: 194, 199, 208;--eox-theme-light-outline: 114, 119, 128;--eox-theme-light-primary-container: 209, 228, 255;--eox-theme-light-primary-fixed-dim: 158, 202, 255;--eox-theme-light-primary-fixed: 209, 228, 255;--eox-theme-light-primary-palette-key-color: 0, 65, 112;--eox-theme-light-primary: 0, 65, 112;--eox-theme-light-scrim: 0, 0, 0;--eox-theme-light-secondary-container: 184, 234, 255;--eox-theme-light-secondary-fixed-dim: 154, 206, 228;--eox-theme-light-secondary-fixed: 184, 234, 255;--eox-theme-light-secondary-palette-key-color: 0, 69, 87;--eox-theme-light-secondary: 47, 101, 120;--eox-theme-light-shadow: 0, 0, 0;--eox-theme-light-surface-bright: 250, 249, 252;--eox-theme-light-surface-container-high: 231, 232, 236;--eox-theme-light-surface-container-highest: 226, 226, 231;--eox-theme-light-surface-container-low: 243, 243, 248;--eox-theme-light-surface-container-lowest: 255, 255, 255;--eox-theme-light-surface-container: 237, 237, 242;--eox-theme-light-surface-dim: 217, 218, 222;--eox-theme-light-surface-light: 231, 232, 236;--eox-theme-light-surface-tint: 49, 97, 146;--eox-theme-light-surface: 250, 249, 252;--eox-theme-light-tertiary-container: 225, 224, 255;--eox-theme-light-tertiary-fixed-dim: 191, 193, 255;--eox-theme-light-tertiary-fixed: 225, 224, 255;--eox-theme-light-tertiary-palette-key-color: 54, 57, 116;--eox-theme-light-tertiary: 86, 89, 150}:root{--eox-theme-dark-background: 26, 28, 30;--eox-theme-dark-code: 52, 52, 52;--eox-theme-dark-error-container: 147, 0, 10;--eox-theme-dark-error: 255, 180, 171;--eox-theme-dark-inverse-on-surface: 46, 48, 52;--eox-theme-dark-inverse-primary: 49, 97, 146;--eox-theme-dark-inverse-surface: 226, 226, 231;--eox-theme-dark-kbd: 33, 37, 41;--eox-theme-dark-neutral-palette-key-color: 117, 119, 123;--eox-theme-dark-neutral-variant-palette-key-color: 114, 119, 128;--eox-theme-dark-on-background: 255, 255, 255;--eox-theme-dark-on-code: 204, 204, 204;--eox-theme-dark-on-error-container: 255, 180, 171;--eox-theme-dark-on-error: 105, 0, 5;--eox-theme-dark-on-inverse-on-surface: 255, 255, 255;--eox-theme-dark-on-inverse-primary: 158, 202, 255;--eox-theme-dark-on-inverse-surface: 0, 0, 0;--eox-theme-dark-on-kbd: 255, 255, 255;--eox-theme-dark-on-neutral-palette-key-color: 255, 255, 255;--eox-theme-dark-on-neutral-variant-palette-key-color: 255, 255, 255;--eox-theme-dark-on-outline-variant: 255, 255, 255;--eox-theme-dark-on-outline: 255, 255, 255;--eox-theme-dark-on-primary-container: 209, 228, 255;--eox-theme-dark-on-primary-fixed-dim: 0, 0, 0;--eox-theme-dark-on-primary-fixed-variant: 16, 73, 120;--eox-theme-dark-on-primary-fixed: 0, 29, 54;--eox-theme-dark-on-primary-palette-key-color: 255, 255, 255;--eox-theme-dark-on-primary: 0, 50, 88;--eox-theme-dark-on-scrim: 255, 255, 255;--eox-theme-dark-on-secondary-container: 184, 234, 255;--eox-theme-dark-on-secondary-fixed-dim: 0, 0, 0;--eox-theme-dark-on-secondary-fixed-variant: 15, 77, 95;--eox-theme-dark-on-secondary-fixed: 0, 31, 40;--eox-theme-dark-on-secondary-palette-key-color: 255, 255, 255;--eox-theme-dark-on-secondary: 0, 53, 68;--eox-theme-dark-on-shadow: 255, 255, 255;--eox-theme-dark-on-surface-bright: 255, 255, 255;--eox-theme-dark-on-surface-container-high: 255, 255, 255;--eox-theme-dark-on-surface-container-highest: 255, 255, 255;--eox-theme-dark-on-surface-container-low: 255, 255, 255;--eox-theme-dark-on-surface-container-lowest: 255, 255, 255;--eox-theme-dark-on-surface-container: 255, 255, 255;--eox-theme-dark-on-surface-dim: 255, 255, 255;--eox-theme-dark-on-surface-light: 255, 255, 255;--eox-theme-dark-on-surface-tint: 0, 0, 0;--eox-theme-dark-on-surface: 226, 226, 231;--eox-theme-dark-on-tertiary-container: 225, 224, 255;--eox-theme-dark-on-tertiary-fixed-dim: 0, 0, 0;--eox-theme-dark-on-tertiary-fixed-variant: 62, 65, 124;--eox-theme-dark-on-tertiary-fixed: 17, 19, 79;--eox-theme-dark-on-tertiary-palette-key-color: 255, 255, 255;--eox-theme-dark-on-tertiary: 39, 42, 100;--eox-theme-dark-outline-variant: 66, 71, 79;--eox-theme-dark-outline: 140, 145, 154;--eox-theme-dark-primary-container: 16, 73, 120;--eox-theme-dark-primary-fixed-dim: 158, 202, 255;--eox-theme-dark-primary-fixed-variant: 209, 228, 255;--eox-theme-dark-primary-fixed: 209, 228, 255;--eox-theme-dark-primary-palette-key-color: 0, 65, 112;--eox-theme-dark-primary: 158, 202, 255;--eox-theme-dark-scrim: 0, 0, 0;--eox-theme-dark-secondary-container: 15, 77, 95;--eox-theme-dark-secondary-fixed-dim: 154, 206, 228;--eox-theme-dark-secondary-fixed-variant: 184, 234, 255;--eox-theme-dark-secondary-fixed: 184, 234, 255;--eox-theme-dark-secondary-palette-key-color: 0, 69, 87;--eox-theme-dark-secondary: 154, 206, 228;--eox-theme-dark-shadow: 0, 0, 0;--eox-theme-dark-surface-bright: 56, 57, 60;--eox-theme-dark-surface-container-high: 40, 42, 46;--eox-theme-dark-surface-container-highest: 51, 53, 56;--eox-theme-dark-surface-container-low: 26, 28, 31;--eox-theme-dark-surface-container-lowest: 12, 14, 17;--eox-theme-dark-surface-container: 30, 32, 35;--eox-theme-dark-surface-dim: 17, 19, 23;--eox-theme-dark-surface-light: 55, 57, 61;--eox-theme-dark-surface-tint: 158, 202, 255;--eox-theme-dark-surface: 18, 19, 22;--eox-theme-dark-tertiary-container: 62, 65, 124;--eox-theme-dark-tertiary-fixed-dim: 191, 193, 255;--eox-theme-dark-tertiary-fixed-variant: 225, 224, 255;--eox-theme-dark-tertiary-fixed: 225, 224, 255;--eox-theme-dark-tertiary-palette-key-color: 54, 57, 116;--eox-theme-dark-tertiary: 191, 193, 255}:root{--eox-slider-thumb-height: 20px;--eox-slider-thumb-width: 20px;--eox-slider-track-height: 6px;--eox-slider-track-color: var(--outline-variant);--eox-slider-brightness-hover: 100%;--eox-slider-brightness-down: 100%;--eox-slider-clip-edges: 4px;--eox-slider-margin: 1.125rem}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input){font-size:1.5rem;color:var(--primary);width:100%;background:none;overflow:hidden}input[type=range]:not(.slider input[type=range]){margin:var(--eox-slider-margin);width:100%}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):active{cursor:grabbing}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):disabled{filter:grayscale(1);opacity:.3;cursor:not-allowed}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input),input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-webkit-slider-runnable-track,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-webkit-slider-thumb{-webkit-appearance:none;transition:all ease .1s;height:var(--eox-slider-thumb-height)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-webkit-slider-runnable-track,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-webkit-slider-thumb{position:relative}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-webkit-slider-runnable-track{border-radius:var(--eox-slider-track-height)}input[type=range]:not(.slider input)::-webkit-slider-thumb{--thumb-radius: calc((var(--eox-slider-thumb-height) * .5) - 1px);--clip-top: calc( (var(--eox-slider-thumb-height) - var(--eox-slider-track-height)) * .5 - .5px );--clip-bottom: calc(var(--eox-slider-thumb-height) - var(--clip-top));--clip-further: calc(100% + 1px) ;--box-fill: calc( -100vmax - var(--eox-slider-thumb-width, var(--eox-slider-thumb-height)) ) 0 0 100vmax currentColor;width:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height));background:linear-gradient(currentColor 0 0) scroll no-repeat left center / 50% calc(var(--eox-slider-track-height) + 1px);background-color:currentColor;box-shadow:var(--box-fill);border-radius:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height));filter:brightness(100%);clip-path:polygon(100% -1px,var(--eox-slider-clip-edges) -1px,0 var(--clip-top),-100vmax var(--clip-top),-100vmax var(--clip-bottom),0 var(--clip-bottom),var(--eox-slider-clip-edges) 100%,var(--clip-further) var(--clip-further))}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):hover::-webkit-slider-thumb{filter:brightness(var(--eox-slider-brightness-hover));cursor:grab}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):active::-webkit-slider-thumb{filter:brightness(var(--eox-slider-brightness-down));cursor:grabbing}input[type=range]:not(.slider input)::-webkit-slider-runnable-track{background:linear-gradient(var(--eox-slider-track-color) 0 0) scroll no-repeat center / 100% calc(var(--eox-slider-track-height) + 1px)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):disabled::-webkit-slider-thumb{cursor:not-allowed}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input),input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-track,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:all ease .1s;height:var(--eox-slider-thumb-height)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-track,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-thumb,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-progress{background:#fff0}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-thumb{background:currentColor;border:0;width:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height));border-radius:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height));cursor:grab}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):active::-moz-range-thumb{cursor:grabbing}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-track{width:100%;background:var(--eox-slider-track-color)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:currentColor;transition-delay:30ms}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-track,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-progress{height:calc(var(--eox-slider-track-height) + 1px);border-radius:var(--eox-slider-track-height)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-thumb,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-progress{filter:brightness(100%)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):hover::-moz-range-thumb,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):hover::-moz-range-progress{filter:brightness(var(--eox-slider-brightness-hover))}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):active::-moz-range-thumb,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):active::-moz-range-progress{filter:brightness(var(--eox-slider-brightness-down))}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):disabled::-moz-range-thumb{cursor:not-allowed}.slider.tiny{--_track: var(--eox-slider-track-height);--_track-color: var(--eox-slider-track-color) !important;margin:var(--eox-slider-margin)}.slider.tiny:before{background:var(--eox-slider-track-color)}label.slider.tiny:before{height:var(--eox-slider-track-height);background:var(--outline-variant);clip-path:none}label.slider.tiny>span,.slider.tiny>input[type=range]+input[type=range]~span{height:var(--eox-slider-track-height);top:var(--eox-slider-track-height) - 1;clip-path:none}.slider.tiny>input[type=range]::-webkit-slider-thumb{box-shadow:unset;width:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height));border-radius:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height))}.slider.tiny>input[type=range]::-webkit-slider-runnable-track{background:unset}.slider.tiny>input[type=range]:not(:disabled):is(:focus)::-webkit-slider-thumb{transform:scaleX(1)}.slider.tiny>input:not(:disabled):is(:focus)::-moz-range-thumb{transform:scaleX(1)}.slider:before{clip-path:none!important}.slider>span:not([class]){inset:calc(50% - (var(--_track, 0) / 2)) var(--_end) auto var(--_start)!important;z-index:1;pointer-events:none}tc-range-slider{--panel-bg-fill: var(--primary);--pointer-bg: var(--primary);--pointer-bg-focus: var(--primary);--pointer-bg-hover: var(--primary);--pointer-border: 0;--pointer-border-focus: 0;--pointer-border-hover: 0;--pointer-width: var( --eox-slider-thumb-width, var(--eox-slider-thumb-height) );--pointer-height: var( --eox-slider-thumb-width, var(--eox-slider-thumb-height) );--pointer-shadow: 0 3px 4px #00000033;--pointer-shadow-hover: 0 0 0 10px #0000000a;--height: var(--eox-slider-track-height);--width: 100%;--panel-bg-border-radius: var(--eox-slider-track-height);--panel-bg: var(--eox-slider-track-color);--panel-bg-hover: var(--eox-slider-track-color);display:block;margin:calc(var(--eox-slider-margin) + var(--eox-slider-thumb-height)) var(--eox-slider-margin)}.v-slider.v-input--horizontal{margin:var(--eox-slider-margin)}.v-slider.v-input--horizontal .v-slider-track{height:calc(var(--eox-slider-track-height) + 2px)!important;--v-slider-track-size: var(--eox-slider-track-height) !important}.v-slider-track .v-slider-track__background{background-color:var(--eox-slider-track-color)!important}.v-slider-track__fill.bg-primary{background-color:var(--primary)!important;height:calc(var(--eox-slider-track-height))!important}.v-slider-track__background--opacity{opacity:1}.v-slider-thumb__surface{background:var(--primary)}:root{--eox-body-font-family: Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Noto Sans, Arial, sans-serif;--eox-header-font-family: var(--eox-body-font-family);--size: 1rem;--font: var(--eox-body-font-family);--font-icon: "Material Symbols Subset";--speed1: .1s;--speed2: .2s;--speed3: .3s;--speed4: .4s;--active: rgb(128 128 128 / .192);--overlay: rgb(0 0 0 / .5);--elevate1: 0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2: 0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3: 0 .375rem .75rem 0 rgb(0 0 0 / .48);--top: env(safe-area-inset-top);--bottom: env(safe-area-inset-bottom);--left: env(safe-area-inset-left);--right: env(safe-area-inset-right)}*{font-family:var(--eox-body-font-family)}h1,h2,h3,h4,h5,h6{font-family:var(--eox-header-font-family)}:root,body.light{--primary: rgb(var(--eox-theme-light-primary));--on-primary: rgb(var(--eox-theme-light-on-primary));--primary-container: rgb(var(--eox-theme-light-primary-container));--on-primary-container: #001d36;--secondary: rgb(var(--eox-theme-light-secondary));--on-secondary: rgb(var(--eox-theme-light-on-secondary));--secondary-container: #d7e3f7;--on-secondary-container: #101c2b;--tertiary: rgb(var(--eox-theme-light-tertiary));--on-tertiary: rgb(var(--eox-theme-light-on-tertiary));--tertiary-container: #f2daff;--on-tertiary-container: #251431;--error: rgb(var(--eox-theme-light-error));--on-error: rgb(var(--eox-theme-light-on-error));--error-container: #ffdad6;--on-error-container: #410002;--background: rgb(var(--eox-theme-light-background));--on-background: #1a1c1e;--surface: rgb(var(--eox-theme-light-surface));--on-surface: rgb(var(--eox-theme-light-on-surface));--surface-variant: #dfe2eb;--on-surface-variant: #43474e;--outline: rgb(var(--eox-theme-light-outline));--outline-variant: rgb(var(--eox-theme-light-outline-variant));--shadow: #000000;--scrim: #000000;--inverse-surface: #2f3033;--inverse-on-surface: #f1f0f4;--inverse-primary: #9ecaff;--surface-dim: rgb(var(--eox-theme-light-surface-dim));--surface-bright: rgb(var(--eox-theme-light-surface-bright));--surface-container-lowest: #ffffff;--surface-container-low: #f4f3f7;--surface-container: #eeedf1;--surface-container-high: #e8e8eb;--surface-container-highest: #e2e2e6}body.dark{--primary: rgb(var(--eox-theme-dark-primary));--on-primary: rgb(var(--eox-theme-dark-on-primary));--primary-container: rgb(var(--eox-theme-dark-primary-container));--on-primary-container: #d1e4ff;--secondary: rgb(var(--eox-theme-dark-secondary));--secondary-container: #3b4858;--on-secondary-container: #d7e3f7;--on-secondary-container: rgb(var(--eox-theme-dark-on-secondary-container));--tertiary: rgb(var(--eox-theme-dark-tertiary));--on-tertiary: rgb(var(--eox-theme-dark-on-tertiary));--tertiary-container: #523f5f;--on-tertiary-container: #f2daff;--error: rgb(var(--eox-theme-dark-error));--on-error: rgb(var(--eox-theme-dark-on-error));--error-container: #93000a;--on-error-container: #ffb4ab;--background: rgb(var(--eox-theme-dark-background));--on-background: #e2e2e6;--surface: rgb(var(--eox-theme-dark-surface));--on-surface: rgb(var(--eox-theme-dark-on-surface));--surface-variant: #43474e;--on-surface-variant: #c3c7cf;--outline: rgb(var(--eox-theme-dark-outline));--outline-variant: rgb(var(--eox-theme-dark-outline-variant));--shadow: #000000;--scrim: #000000;--inverse-surface: #e2e2e6;--inverse-on-surface: #2f3033;--inverse-primary: #0161a3;--surface-dim: rgb(var(--eox-theme-dark-surface-dim));--surface-bright: rgb(var(--eox-theme-dark-surface-bright));--surface-container-lowest: #0d0e11;--surface-container-low: #1a1c1e;--surface-container: #1e2022;--surface-container-high: #282a2d;--surface-container-highest: #333538}.list.no-space>li,.list.no-space>li>details>summary{min-block-size:0rem;padding:0 1rem}:is(.checkbox,.radio,.switch).small{--_size: 1.2rem}:is(.checkbox,.radio):is(:hover)>input:not(:disabled)+span:after,:is(.checkbox,.radio)>input:not(:disabled):is(:focus)+span:after{box-shadow:0 0 0 .4rem currentColor}:is(.checkbox,.radio,.switch):is(.no-round,.square)>span:before,:is(.checkbox,.radio,.switch):is(.no-round,.square)>span>i,:is(.checkbox,.radio):is(.no-round,.square)>span:after{border-radius:.15rem}.scroll::-webkit-scrollbar,.scroll::-webkit-scrollbar-thumb,.scroll::-webkit-scrollbar-button{background:none;inline-size:.4rem;block-size:.4rem}.scroll:is(:hover,:focus)::-webkit-scrollbar-thumb{background:var(--outline);border-radius:1rem}h1.tiny{font-size:2.6875rem}h2.tiny{font-size:1.9375rem}h3.tiny{font-size:1.375rem}h4.tiny{font-size:1.125rem}h5.tiny{font-size:.875rem}h6.tiny{font-size:.625rem}.link{text-decoration:underline}.link:hover{color:var(--on-primary-container)!important}details summary .rotate{transition:transform .3s ease}details[open]:not(.is-closing) summary .rotate{transform:rotate(180deg)}details.fast-animate summary .rotate{transition:transform .15s ease}details.slow-animate summary .rotate{transition:transform .5s ease}details.no-animate summary .rotate{transition:none}`, S2 = () => {
  const r = "eox-elements";
  if (!document.head.querySelector(`style#${r}`)) {
    const e = new CSSStyleSheet();
    e.replaceSync(W0);
    const t = Array.from(e.cssRules).filter((o) => o.cssText.includes(":root")).map((o) => o.cssText).join(" "), i = document.createElement("style");
    i.setAttribute("id", r), i.innerHTML = `
    @import url("https://eox.at/fonts/inter/inter.css");

    @font-face {
      font-family: "Material Symbols Subset";
      font-style: normal;
      font-weight: 400;
      font-display: block;
      src: url(https://cdn.jsdelivr.net/npm/@eox/ui@0.3.4/dist/material-symbols-subset.woff2) format("woff2");
    }
  
    eox-chart,
    eox-drawtools,
    eox-feedback,
    eox-geosearch,
    eox-itemfilter,
    eox-jsonform,
    eox-layercontrol,
    eox-map,
    eox-stacinfo,
    eox-storytelling,
    eox-timecontrol,
    eox-tour {
      font-family: var(--font);
      font-size: .875rem;
      line-height: 1.5rem;
      letter-spacing: .0313rem;
    }
    ${t}
  `, document.head.appendChild(i);
  }
};
S2();
const M2 = `
  ${W0}

  header {
    min-block-size: unset;
    padding: unset;
    font-size: .875rem;
    font-weight: bold;
  }
`;
async function B2(r, e) {
  var i, o, a;
  const t = r.data;
  if (!(!t || t.tourId !== e.id))
    if (t.type === "EOX_TOUR_HANDOFF") {
      let l = !0;
      ((o = (i = e.config) == null ? void 0 : i.steps) == null ? void 0 : o.length) > 0 && !t.forceConfigOverride && (l = !1), l && t.config && (e.config = t.config, await e.updateComplete);
      let s = t.stepIndex !== void 0 ? t.stepIndex : 0;
      t.childStepIndex !== void 0 && (s = t.childStepIndex), s === -1 && ((a = e.config) != null && a.steps) && (s = e.config.steps.length - 1), e.start(s);
    } else if (t.type === "EOX_TOUR_RESUME") {
      const l = t.parentStepIndex ?? t.stepIndex ?? 0;
      e.start(l);
    } else t.type === "EOX_TOUR_DESTROY" && e.driver && e.driver.destroy();
}
let h0 = {}, q0;
function m0(r = {}) {
  h0 = {
    animate: !0,
    allowClose: !0,
    overlayClickBehavior: "close",
    overlayOpacity: 0.7,
    smoothScroll: !1,
    disableActiveInteraction: !1,
    showProgress: !1,
    stagePadding: 10,
    stageRadius: 5,
    popoverOffset: 10,
    showButtons: ["next", "previous", "close"],
    disableButtons: [],
    overlayColor: "#000",
    ...r
  };
}
function u(r) {
  return r ? h0[r] : h0;
}
function L2(r) {
  q0 = r;
}
function M() {
  return q0;
}
let o0 = {};
function e0(r, e) {
  o0[r] = e;
}
function I(r) {
  var e;
  (e = o0[r]) == null || e.call(o0);
}
function E2() {
  o0 = {};
}
function t0(r, e, t, i) {
  return (r /= i / 2) < 1 ? t / 2 * r * r + e : -t / 2 * (--r * (r - 2) - 1) + e;
}
function O0(r) {
  const e = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
  return r.flatMap((t) => {
    const i = t.matches(e), o = Array.from(t.querySelectorAll(e));
    return [...i ? [t] : [], ...o];
  }).filter((t) => getComputedStyle(t).pointerEvents !== "none" && I2(t));
}
function V0(r) {
  if (!r || H2(r))
    return;
  const e = u("smoothScroll"), t = r.offsetHeight > window.innerHeight;
  r.scrollIntoView({
    // Removing the smooth scrolling for elements which exist inside the scrollable parent
    // This was causing the highlight to not properly render
    behavior: !e || P2(r) ? "auto" : "smooth",
    inline: "center",
    block: t ? "start" : "center"
  });
}
function P2(r) {
  if (!r || !r.parentElement)
    return;
  const e = r.parentElement;
  return e.scrollHeight > e.clientHeight;
}
function H2(r) {
  const e = r.getBoundingClientRect();
  return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function I2(r) {
  return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length);
}
let a0 = {};
function _(r, e) {
  a0[r] = e;
}
function g(r) {
  return r ? a0[r] : a0;
}
function M0() {
  a0 = {};
}
function R2(r, e, t, i) {
  let o = g("__activeStagePosition");
  const a = o || t.getBoundingClientRect(), l = i.getBoundingClientRect(), s = t0(r, a.x, l.x - a.x, e), n = t0(r, a.y, l.y - a.y, e), d = t0(r, a.width, l.width - a.width, e), m = t0(r, a.height, l.height - a.height, e);
  o = {
    x: s,
    y: n,
    width: d,
    height: m
  }, F0(o), _("__activeStagePosition", o);
}
function Y0(r) {
  if (!r)
    return;
  const e = r.getBoundingClientRect(), t = {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  };
  _("__activeStagePosition", t), F0(t);
}
function N2() {
  const r = g("__activeStagePosition"), e = g("__overlaySvg");
  if (!r)
    return;
  if (!e) {
    console.warn("No stage svg found.");
    return;
  }
  const t = window.innerWidth, i = window.innerHeight;
  e.setAttribute("viewBox", `0 0 ${t} ${i}`);
}
function U2(r) {
  const e = T2(r);
  document.body.appendChild(e), K0(e, (t) => {
    t.target.tagName === "path" && I("overlayClick");
  }), _("__overlaySvg", e);
}
function F0(r) {
  const e = g("__overlaySvg");
  if (!e) {
    U2(r);
    return;
  }
  const t = e.firstElementChild;
  if ((t == null ? void 0 : t.tagName) !== "path")
    throw new Error("no path element found in stage svg");
  t.setAttribute("d", X0(r));
}
function T2(r) {
  const e = window.innerWidth, t = window.innerHeight, i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  i.classList.add("driver-overlay", "driver-overlay-animated"), i.setAttribute("viewBox", `0 0 ${e} ${t}`), i.setAttribute("xmlSpace", "preserve"), i.setAttribute("xmlnsXlink", "http://www.w3.org/1999/xlink"), i.setAttribute("version", "1.1"), i.setAttribute("preserveAspectRatio", "xMinYMin slice"), i.style.fillRule = "evenodd", i.style.clipRule = "evenodd", i.style.strokeLinejoin = "round", i.style.strokeMiterlimit = "2", i.style.zIndex = "10000", i.style.position = "fixed", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%";
  const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return o.setAttribute("d", X0(r)), o.style.fill = u("overlayColor") || "rgb(0,0,0)", o.style.opacity = `${u("overlayOpacity")}`, o.style.pointerEvents = "auto", o.style.cursor = "auto", i.appendChild(o), i;
}
function X0(r) {
  const e = window.innerWidth, t = window.innerHeight, i = u("stagePadding") || 0, o = u("stageRadius") || 0, a = r.width + i * 2, l = r.height + i * 2, s = Math.min(o, a / 2, l / 2), n = Math.floor(Math.max(s, 0)), d = r.x - i + n, m = r.y - i, b = a - n * 2, c = l - n * 2;
  return `M${e},0L0,0L0,${t}L${e},${t}L${e},0Z
    M${d},${m} h${b} a${n},${n} 0 0 1 ${n},${n} v${c} a${n},${n} 0 0 1 -${n},${n} h-${b} a${n},${n} 0 0 1 -${n},-${n} v-${c} a${n},${n} 0 0 1 ${n},-${n} z`;
}
function D2() {
  const r = g("__overlaySvg");
  r && r.remove();
}
function j2() {
  const r = document.getElementById("driver-dummy-element");
  if (r)
    return r;
  let e = document.createElement("div");
  return e.id = "driver-dummy-element", e.style.width = "0", e.style.height = "0", e.style.pointerEvents = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.top = "50%", e.style.left = "50%", document.body.appendChild(e), e;
}
function B0(r) {
  const { element: e } = r;
  let t = typeof e == "function" ? e() : typeof e == "string" ? document.querySelector(e) : e;
  t || (t = j2()), q2(t, r);
}
function W2() {
  const r = g("__activeElement"), e = g("__activeStep");
  r && (Y0(r), N2(), Q0(r, e));
}
function q2(r, e) {
  var t;
  const i = Date.now(), o = g("__activeStep"), a = g("__activeElement") || r, l = !a || a === r, s = r.id === "driver-dummy-element", n = a.id === "driver-dummy-element", d = u("animate"), m = e.onHighlightStarted || u("onHighlightStarted"), b = (e == null ? void 0 : e.onHighlighted) || u("onHighlighted"), c = (o == null ? void 0 : o.onDeselected) || u("onDeselected"), p = u(), h = g();
  !l && c && c(n ? void 0 : a, o, {
    config: p,
    state: h,
    driver: M()
  }), m && m(s ? void 0 : r, e, {
    config: p,
    state: h,
    driver: M()
  });
  const v = !l && d;
  let f = !1;
  X2(), _("previousStep", o), _("previousElement", a), _("activeStep", e), _("activeElement", r);
  const w = () => {
    if (g("__transitionCallback") !== w)
      return;
    const k = Date.now() - i, y = 400 - k <= 400 / 2;
    e.popover && y && !f && v && (L0(r, e), f = !0), u("animate") && k < 400 ? R2(k, 400, a, r) : (Y0(r), b && b(s ? void 0 : r, e, {
      config: u(),
      state: g(),
      driver: M()
    }), _("__transitionCallback", void 0), _("__previousStep", o), _("__previousElement", a), _("__activeStep", e), _("__activeElement", r)), window.requestAnimationFrame(w);
  };
  _("__transitionCallback", w), window.requestAnimationFrame(w), V0(r), !v && e.popover && L0(r, e), a.classList.remove("driver-active-element", "driver-no-interaction"), a.removeAttribute("aria-haspopup"), a.removeAttribute("aria-expanded"), a.removeAttribute("aria-controls"), ((t = e.disableActiveInteraction) != null ? t : u("disableActiveInteraction")) && r.classList.add("driver-no-interaction"), r.classList.add("driver-active-element"), r.setAttribute("aria-haspopup", "dialog"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-controls", "driver-popover-content");
}
function O2() {
  var r;
  (r = document.getElementById("driver-dummy-element")) == null || r.remove(), document.querySelectorAll(".driver-active-element").forEach((e) => {
    e.classList.remove("driver-active-element", "driver-no-interaction"), e.removeAttribute("aria-haspopup"), e.removeAttribute("aria-expanded"), e.removeAttribute("aria-controls");
  });
}
function K() {
  const r = g("__resizeTimeout");
  r && window.cancelAnimationFrame(r), _("__resizeTimeout", window.requestAnimationFrame(W2));
}
function V2(r) {
  var e;
  if (!g("isInitialized") || !(r.key === "Tab" || r.keyCode === 9))
    return;
  const t = g("__activeElement"), i = (e = g("popover")) == null ? void 0 : e.wrapper, o = O0([
    ...i ? [i] : [],
    ...t ? [t] : []
  ]), a = o[0], l = o[o.length - 1];
  if (r.preventDefault(), r.shiftKey) {
    const s = o[o.indexOf(document.activeElement) - 1] || l;
    s == null || s.focus();
  } else {
    const s = o[o.indexOf(document.activeElement) + 1] || a;
    s == null || s.focus();
  }
}
function J0(r) {
  var e;
  ((e = u("allowKeyboardControl")) == null || e) && (r.key === "Escape" ? I("escapePress") : r.key === "ArrowRight" ? I("arrowRightPress") : r.key === "ArrowLeft" && I("arrowLeftPress"));
}
function K0(r, e, t) {
  const i = (o, a) => {
    const l = o.target;
    r.contains(l) && ((!t || t(l)) && (o.preventDefault(), o.stopPropagation(), o.stopImmediatePropagation()), a == null || a(o));
  };
  document.addEventListener("pointerdown", i, !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerup", i, !0), document.addEventListener("mouseup", i, !0), document.addEventListener(
    "click",
    (o) => {
      i(o, e);
    },
    !0
  );
}
function Y2() {
  window.addEventListener("keyup", J0, !1), window.addEventListener("keydown", V2, !1), window.addEventListener("resize", K), window.addEventListener("scroll", K);
}
function F2() {
  window.removeEventListener("keyup", J0), window.removeEventListener("resize", K), window.removeEventListener("scroll", K);
}
function X2() {
  const r = g("popover");
  r && (r.wrapper.style.display = "none");
}
function L0(r, e) {
  var t, i;
  let o = g("popover");
  o && document.body.removeChild(o.wrapper), o = K2(), document.body.appendChild(o.wrapper);
  const {
    title: a,
    description: l,
    showButtons: s,
    disableButtons: n,
    showProgress: d,
    nextBtnText: m = u("nextBtnText") || "Next &rarr;",
    prevBtnText: b = u("prevBtnText") || "&larr; Previous",
    progressText: c = u("progressText") || "{current} of {total}"
  } = e.popover || {};
  o.nextButton.innerHTML = m, o.previousButton.innerHTML = b, o.progress.innerHTML = c, a ? (o.title.innerHTML = a, o.title.style.display = "block") : o.title.style.display = "none", l ? (o.description.innerHTML = l, o.description.style.display = "block") : o.description.style.display = "none";
  const p = s || u("showButtons"), h = d || u("showProgress") || !1, v = (p == null ? void 0 : p.includes("next")) || (p == null ? void 0 : p.includes("previous")) || h;
  o.closeButton.style.display = p.includes("close") ? "block" : "none", v ? (o.footer.style.display = "flex", o.progress.style.display = h ? "block" : "none", o.nextButton.style.display = p.includes("next") ? "block" : "none", o.previousButton.style.display = p.includes("previous") ? "block" : "none") : o.footer.style.display = "none";
  const f = n || u("disableButtons") || [];
  f != null && f.includes("next") && (o.nextButton.disabled = !0, o.nextButton.classList.add("driver-popover-btn-disabled")), f != null && f.includes("previous") && (o.previousButton.disabled = !0, o.previousButton.classList.add("driver-popover-btn-disabled")), f != null && f.includes("close") && (o.closeButton.disabled = !0, o.closeButton.classList.add("driver-popover-btn-disabled"));
  const w = o.wrapper;
  w.style.display = "block", w.style.left = "", w.style.top = "", w.style.bottom = "", w.style.right = "", w.id = "driver-popover-content", w.setAttribute("role", "dialog"), w.setAttribute("aria-labelledby", "driver-popover-title"), w.setAttribute("aria-describedby", "driver-popover-description");
  const k = o.arrow;
  k.className = "driver-popover-arrow";
  const y = ((t = e.popover) == null ? void 0 : t.popoverClass) || u("popoverClass") || "";
  w.className = `driver-popover ${y}`.trim(), K0(
    o.wrapper,
    ($) => {
      var S, W, N;
      const q = $.target, Q = ((S = e.popover) == null ? void 0 : S.onNextClick) || u("onNextClick"), U = ((W = e.popover) == null ? void 0 : W.onPrevClick) || u("onPrevClick"), G = ((N = e.popover) == null ? void 0 : N.onCloseClick) || u("onCloseClick");
      if (q.closest(".driver-popover-next-btn"))
        return Q ? Q(r, e, {
          config: u(),
          state: g(),
          driver: M()
        }) : I("nextClick");
      if (q.closest(".driver-popover-prev-btn"))
        return U ? U(r, e, {
          config: u(),
          state: g(),
          driver: M()
        }) : I("prevClick");
      if (q.closest(".driver-popover-close-btn"))
        return G ? G(r, e, {
          config: u(),
          state: g(),
          driver: M()
        }) : I("closeClick");
    },
    ($) => !(o != null && o.description.contains($)) && !(o != null && o.title.contains($)) && typeof $.className == "string" && $.className.includes("driver-popover")
  ), _("popover", o);
  const A = ((i = e.popover) == null ? void 0 : i.onPopoverRender) || u("onPopoverRender");
  A && A(o, {
    config: u(),
    state: g(),
    driver: M()
  }), Q0(r, e), V0(w);
  const z = r.classList.contains("driver-dummy-element"), x = O0([w, ...z ? [] : [r]]);
  x.length > 0 && x[0].focus();
}
function Z0() {
  const r = g("popover");
  if (!(r != null && r.wrapper))
    return;
  const e = r.wrapper.getBoundingClientRect(), t = u("stagePadding") || 0, i = u("popoverOffset") || 0;
  return {
    width: e.width + t + i,
    height: e.height + t + i,
    realWidth: e.width,
    realHeight: e.height
  };
}
function E0(r, e) {
  const { elementDimensions: t, popoverDimensions: i, popoverPadding: o, popoverArrowDimensions: a } = e;
  return r === "start" ? Math.max(
    Math.min(
      t.top - o,
      window.innerHeight - i.realHeight - a.width
    ),
    a.width
  ) : r === "end" ? Math.max(
    Math.min(
      t.top - (i == null ? void 0 : i.realHeight) + t.height + o,
      window.innerHeight - (i == null ? void 0 : i.realHeight) - a.width
    ),
    a.width
  ) : r === "center" ? Math.max(
    Math.min(
      t.top + t.height / 2 - (i == null ? void 0 : i.realHeight) / 2,
      window.innerHeight - (i == null ? void 0 : i.realHeight) - a.width
    ),
    a.width
  ) : 0;
}
function P0(r, e) {
  const { elementDimensions: t, popoverDimensions: i, popoverPadding: o, popoverArrowDimensions: a } = e;
  return r === "start" ? Math.max(
    Math.min(
      t.left - o,
      window.innerWidth - i.realWidth - a.width
    ),
    a.width
  ) : r === "end" ? Math.max(
    Math.min(
      t.left - (i == null ? void 0 : i.realWidth) + t.width + o,
      window.innerWidth - (i == null ? void 0 : i.realWidth) - a.width
    ),
    a.width
  ) : r === "center" ? Math.max(
    Math.min(
      t.left + t.width / 2 - (i == null ? void 0 : i.realWidth) / 2,
      window.innerWidth - (i == null ? void 0 : i.realWidth) - a.width
    ),
    a.width
  ) : 0;
}
function Q0(r, e) {
  const t = g("popover");
  if (!t)
    return;
  const { align: i = "start", side: o = "left" } = (e == null ? void 0 : e.popover) || {}, a = i, l = r.id === "driver-dummy-element" ? "over" : o, s = u("stagePadding") || 0, n = Z0(), d = t.arrow.getBoundingClientRect(), m = r.getBoundingClientRect(), b = m.top - n.height;
  let c = b >= 0;
  const p = window.innerHeight - (m.bottom + n.height);
  let h = p >= 0;
  const v = m.left - n.width;
  let f = v >= 0;
  const w = window.innerWidth - (m.right + n.width);
  let k = w >= 0;
  const y = !c && !h && !f && !k;
  let A = l;
  if (l === "top" && c ? k = f = h = !1 : l === "bottom" && h ? k = f = c = !1 : l === "left" && f ? k = c = h = !1 : l === "right" && k && (f = c = h = !1), l === "over") {
    const z = window.innerWidth / 2 - n.realWidth / 2, x = window.innerHeight / 2 - n.realHeight / 2;
    t.wrapper.style.left = `${z}px`, t.wrapper.style.right = "auto", t.wrapper.style.top = `${x}px`, t.wrapper.style.bottom = "auto";
  } else if (y) {
    const z = window.innerWidth / 2 - (n == null ? void 0 : n.realWidth) / 2, x = 10;
    t.wrapper.style.left = `${z}px`, t.wrapper.style.right = "auto", t.wrapper.style.bottom = `${x}px`, t.wrapper.style.top = "auto";
  } else if (f) {
    const z = Math.min(
      v,
      window.innerWidth - (n == null ? void 0 : n.realWidth) - d.width
    ), x = E0(a, {
      elementDimensions: m,
      popoverDimensions: n,
      popoverPadding: s,
      popoverArrowDimensions: d
    });
    t.wrapper.style.left = `${z}px`, t.wrapper.style.top = `${x}px`, t.wrapper.style.bottom = "auto", t.wrapper.style.right = "auto", A = "left";
  } else if (k) {
    const z = Math.min(
      w,
      window.innerWidth - (n == null ? void 0 : n.realWidth) - d.width
    ), x = E0(a, {
      elementDimensions: m,
      popoverDimensions: n,
      popoverPadding: s,
      popoverArrowDimensions: d
    });
    t.wrapper.style.right = `${z}px`, t.wrapper.style.top = `${x}px`, t.wrapper.style.bottom = "auto", t.wrapper.style.left = "auto", A = "right";
  } else if (c) {
    const z = Math.min(
      b,
      window.innerHeight - n.realHeight - d.width
    );
    let x = P0(a, {
      elementDimensions: m,
      popoverDimensions: n,
      popoverPadding: s,
      popoverArrowDimensions: d
    });
    t.wrapper.style.top = `${z}px`, t.wrapper.style.left = `${x}px`, t.wrapper.style.bottom = "auto", t.wrapper.style.right = "auto", A = "top";
  } else if (h) {
    const z = Math.min(
      p,
      window.innerHeight - (n == null ? void 0 : n.realHeight) - d.width
    );
    let x = P0(a, {
      elementDimensions: m,
      popoverDimensions: n,
      popoverPadding: s,
      popoverArrowDimensions: d
    });
    t.wrapper.style.left = `${x}px`, t.wrapper.style.bottom = `${z}px`, t.wrapper.style.top = "auto", t.wrapper.style.right = "auto", A = "bottom";
  }
  y ? t.arrow.classList.add("driver-popover-arrow-none") : J2(a, A, r);
}
function J2(r, e, t) {
  const i = g("popover");
  if (!i)
    return;
  const o = t.getBoundingClientRect(), a = Z0(), l = i.arrow, s = a.width, n = window.innerWidth, d = o.width, m = o.left, b = a.height, c = window.innerHeight, p = o.top, h = o.height;
  l.className = "driver-popover-arrow";
  let v = e, f = r;
  if (e === "top" ? (m + d <= 0 ? (v = "right", f = "end") : m + d - s <= 0 && (v = "top", f = "start"), m >= n ? (v = "left", f = "end") : m + s >= n && (v = "top", f = "end")) : e === "bottom" ? (m + d <= 0 ? (v = "right", f = "start") : m + d - s <= 0 && (v = "bottom", f = "start"), m >= n ? (v = "left", f = "start") : m + s >= n && (v = "bottom", f = "end")) : e === "left" ? (p + h <= 0 ? (v = "bottom", f = "end") : p + h - b <= 0 && (v = "left", f = "start"), p >= c ? (v = "top", f = "end") : p + b >= c && (v = "left", f = "end")) : e === "right" && (p + h <= 0 ? (v = "bottom", f = "start") : p + h - b <= 0 && (v = "right", f = "start"), p >= c ? (v = "top", f = "start") : p + b >= c && (v = "right", f = "end")), !v)
    l.classList.add("driver-popover-arrow-none");
  else {
    l.classList.add(`driver-popover-arrow-side-${v}`), l.classList.add(`driver-popover-arrow-align-${f}`);
    const w = t.getBoundingClientRect(), k = l.getBoundingClientRect(), y = u("stagePadding") || 0, A = w.left - y < window.innerWidth && w.right + y > 0 && w.top - y < window.innerHeight && w.bottom + y > 0;
    e === "bottom" && A && (k.x > w.x && k.x + k.width < w.x + w.width ? i.wrapper.style.transform = "translateY(0)" : (l.classList.remove(`driver-popover-arrow-align-${f}`), l.classList.add("driver-popover-arrow-none"), i.wrapper.style.transform = `translateY(-${y / 2}px)`));
  }
}
function K2() {
  const r = document.createElement("div");
  r.classList.add("driver-popover");
  const e = document.createElement("div");
  e.classList.add("driver-popover-arrow");
  const t = document.createElement("header");
  t.id = "driver-popover-title", t.classList.add("driver-popover-title"), t.style.display = "none", t.innerText = "Popover Title";
  const i = document.createElement("div");
  i.id = "driver-popover-description", i.classList.add("driver-popover-description"), i.style.display = "none", i.innerText = "Popover description is here";
  const o = document.createElement("button");
  o.type = "button", o.classList.add("driver-popover-close-btn"), o.setAttribute("aria-label", "Close"), o.innerHTML = "&times;";
  const a = document.createElement("footer");
  a.classList.add("driver-popover-footer");
  const l = document.createElement("span");
  l.classList.add("driver-popover-progress-text"), l.innerText = "";
  const s = document.createElement("span");
  s.classList.add("driver-popover-navigation-btns");
  const n = document.createElement("button");
  n.type = "button", n.classList.add("driver-popover-prev-btn"), n.innerHTML = "&larr; Previous";
  const d = document.createElement("button");
  return d.type = "button", d.classList.add("driver-popover-next-btn"), d.innerHTML = "Next &rarr;", s.appendChild(n), s.appendChild(d), a.appendChild(l), a.appendChild(s), r.appendChild(o), r.appendChild(e), r.appendChild(t), r.appendChild(i), r.appendChild(a), {
    wrapper: r,
    arrow: e,
    title: t,
    description: i,
    footer: a,
    previousButton: n,
    nextButton: d,
    closeButton: o,
    footerButtons: s,
    progress: l
  };
}
function Z2() {
  var r;
  const e = g("popover");
  e && ((r = e.wrapper.parentElement) == null || r.removeChild(e.wrapper));
}
function Q2(r = {}) {
  m0(r);
  function e() {
    u("allowClose") && m();
  }
  function t() {
    const c = u("overlayClickBehavior");
    if (u("allowClose") && c === "close") {
      m();
      return;
    }
    if (typeof c == "function") {
      const p = g("__activeStep"), h = g("__activeElement");
      c(h, p, {
        config: u(),
        state: g(),
        driver: M()
      });
      return;
    }
    c === "nextStep" && i();
  }
  function i() {
    const c = g("activeIndex"), p = u("steps") || [];
    if (typeof c > "u")
      return;
    const h = c + 1;
    p[h] ? d(h) : m();
  }
  function o() {
    const c = g("activeIndex"), p = u("steps") || [];
    if (typeof c > "u")
      return;
    const h = c - 1;
    p[h] ? d(h) : m();
  }
  function a(c) {
    (u("steps") || [])[c] ? d(c) : m();
  }
  function l() {
    var c;
    if (g("__transitionCallback"))
      return;
    const p = g("activeIndex"), h = g("__activeStep"), v = g("__activeElement");
    if (typeof p > "u" || typeof h > "u" || typeof g("activeIndex") > "u")
      return;
    const f = ((c = h.popover) == null ? void 0 : c.onPrevClick) || u("onPrevClick");
    if (f)
      return f(v, h, {
        config: u(),
        state: g(),
        driver: M()
      });
    o();
  }
  function s() {
    var c;
    if (g("__transitionCallback"))
      return;
    const p = g("activeIndex"), h = g("__activeStep"), v = g("__activeElement");
    if (typeof p > "u" || typeof h > "u")
      return;
    const f = ((c = h.popover) == null ? void 0 : c.onNextClick) || u("onNextClick");
    if (f)
      return f(v, h, {
        config: u(),
        state: g(),
        driver: M()
      });
    i();
  }
  function n() {
    g("isInitialized") || (_("isInitialized", !0), document.body.classList.add("driver-active", u("animate") ? "driver-fade" : "driver-simple"), Y2(), e0("overlayClick", t), e0("escapePress", e), e0("arrowLeftPress", l), e0("arrowRightPress", s));
  }
  function d(c = 0) {
    var p, h, v, f, w, k, y, A;
    const z = u("steps");
    if (!z) {
      console.error("No steps to drive through"), m();
      return;
    }
    if (!z[c]) {
      m();
      return;
    }
    _("__activeOnDestroyed", document.activeElement), _("activeIndex", c);
    const x = z[c], $ = z[c + 1], S = z[c - 1], W = ((p = x.popover) == null ? void 0 : p.doneBtnText) || u("doneBtnText") || "Done", N = u("allowClose"), q = typeof ((h = x.popover) == null ? void 0 : h.showProgress) < "u" ? (v = x.popover) == null ? void 0 : v.showProgress : u("showProgress"), Q = (((f = x.popover) == null ? void 0 : f.progressText) || u("progressText") || "{{current}} of {{total}}").replace("{{current}}", `${c + 1}`).replace("{{total}}", `${z.length}`), U = ((w = x.popover) == null ? void 0 : w.showButtons) || u("showButtons"), G = [
      "next",
      "previous",
      ...N ? ["close"] : []
    ].filter((i2) => !(U != null && U.length) || U.includes(i2)), e2 = ((k = x.popover) == null ? void 0 : k.onNextClick) || u("onNextClick"), t2 = ((y = x.popover) == null ? void 0 : y.onPrevClick) || u("onPrevClick"), r2 = ((A = x.popover) == null ? void 0 : A.onCloseClick) || u("onCloseClick");
    B0({
      ...x,
      popover: {
        showButtons: G,
        nextBtnText: $ ? void 0 : W,
        disableButtons: [...S ? [] : ["previous"]],
        showProgress: q,
        progressText: Q,
        onNextClick: e2 || (() => {
          $ ? d(c + 1) : m();
        }),
        onPrevClick: t2 || (() => {
          d(c - 1);
        }),
        onCloseClick: r2 || (() => {
          m();
        }),
        ...(x == null ? void 0 : x.popover) || {}
      }
    });
  }
  function m(c = !0) {
    const p = g("__activeElement"), h = g("__activeStep"), v = g("__activeOnDestroyed"), f = u("onDestroyStarted");
    if (c && f) {
      const y = !p || (p == null ? void 0 : p.id) === "driver-dummy-element";
      f(y ? void 0 : p, h, {
        config: u(),
        state: g(),
        driver: M()
      });
      return;
    }
    const w = (h == null ? void 0 : h.onDeselected) || u("onDeselected"), k = u("onDestroyed");
    if (document.body.classList.remove("driver-active", "driver-fade", "driver-simple"), F2(), Z2(), O2(), D2(), E2(), M0(), p && h) {
      const y = p.id === "driver-dummy-element";
      w && w(y ? void 0 : p, h, {
        config: u(),
        state: g(),
        driver: M()
      }), k && k(y ? void 0 : p, h, {
        config: u(),
        state: g(),
        driver: M()
      });
    }
    v && v.focus();
  }
  const b = {
    isActive: () => g("isInitialized") || !1,
    refresh: K,
    drive: (c = 0) => {
      n(), d(c);
    },
    setConfig: m0,
    setSteps: (c) => {
      M0(), m0({
        ...u(),
        steps: c
      });
    },
    getConfig: u,
    getState: g,
    getActiveIndex: () => g("activeIndex"),
    isFirstStep: () => g("activeIndex") === 0,
    isLastStep: () => {
      const c = u("steps") || [], p = g("activeIndex");
      return p !== void 0 && p === c.length - 1;
    },
    getActiveStep: () => g("activeStep"),
    getActiveElement: () => g("activeElement"),
    getPreviousElement: () => g("previousElement"),
    getPreviousStep: () => g("previousStep"),
    moveNext: i,
    movePrevious: o,
    moveTo: a,
    hasNextStep: () => {
      const c = u("steps") || [], p = g("activeIndex");
      return p !== void 0 && !!c[p + 1];
    },
    hasPreviousStep: () => {
      const c = u("steps") || [], p = g("activeIndex");
      return p !== void 0 && !!c[p - 1];
    },
    highlight: (c) => {
      n(), B0({
        ...c,
        popover: c.popover ? {
          showButtons: [],
          showProgress: !1,
          progressText: "",
          ...c.popover
        } : void 0
      });
    },
    destroy: () => {
      m(!1);
    }
  };
  return L2(b), b;
}
const p0 = {
  onPopoverRender: (r, { config: e, state: t }) => {
    var i, o, a, l, s;
    if (r.wrapper.classList.add("padding"), r.previousButton && (r.previousButton.innerHTML = `
        <span style="pointer-events: none">${e.prevBtnText || "Previous"}</span>
      `, r.previousButton.style.display = (i = e.showButtons) != null && i.includes(
      "previous"
    ) ? "flex" : "none", r.previousButton.classList.add(
      "small",
      "small-text",
      "transparent",
      "primary-text"
    )), r.nextButton) {
      const n = e.steps[t.activeIndex], d = t.activeIndex === e.steps.length - 1 && !((o = n.popover) != null && o.targetIframe) && !((a = n.popover) != null && a.returnToParent) && (!e.totalSteps || t.activeIndex + 1 + (e.stepOffset || 0) >= e.totalSteps);
      r.nextButton.innerHTML = `
        <span style="pointer-events: none">${d ? e.doneBtnText || "Done" : e.nextBtnText || "Next"}</span>
        <i style="pointer-events: none" class="icon small">
          ${d ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-right</title><path d="M10,17L15,12L10,7V17Z" /></svg>'}
        </i>
      `, r.nextButton.style.display = (l = e.showButtons) != null && l.includes("next") ? "flex" : "none", r.nextButton.classList.add("small", "small-text");
    }
    if (r.closeButton && (r.closeButton.innerHTML = `
        <i style="pointer-events: none" class="icon small">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
        </i>
      `, r.closeButton.style.display = (s = e.showButtons) != null && s.includes("close") ? "flex" : "none", r.closeButton.classList.add(
      "transparent",
      "circle",
      "small",
      "absolute",
      "top",
      "right",
      "small-margin"
    )), r.progress && (r.progress.style.display = e.showProgress ? "flex" : "none", r.progress.style.alignItems = "center", r.progress.classList.add("small-text")), r.footerButtons && r.footerButtons.parentElement) {
      const n = document.createElement("nav");
      for (n.style.display = "flex", n.style.alignItems = "center", n.style.marginLeft = "auto"; r.footerButtons.firstChild; )
        n.appendChild(r.footerButtons.firstChild);
      r.footerButtons.parentElement.replaceChild(
        n,
        r.footerButtons
      ), r.footerButtons = n;
    }
    if (r.title && r.title.parentElement) {
      const n = document.createElement("h6");
      n.innerHTML = r.title.innerHTML, r.title.parentElement.replaceChild(n, r.title), n.classList.add("small");
    }
  }
};
function G0(r) {
  if (!r.config || r.preventAutoStart) return;
  if (r.showEveryTime) {
    r.driver.drive();
    return;
  }
  const e = localStorage.getItem(r.TOUR_KEY);
  let t = null;
  try {
    t = JSON.parse(e);
  } catch {
  }
  if (t === !0 || t && typeof t == "object" && t[r.id]) {
    if (typeof t == "boolean" && t === !0 && r.id) {
      localStorage.removeItem(r.TOUR_KEY), G0(r);
      return;
    }
    return;
  }
  if (r.driver.drive(), r.id) {
    const o = typeof t == "object" && t !== null ? t : {};
    o[r.id] = !0, localStorage.setItem(r.TOUR_KEY, JSON.stringify(o));
  } else
    localStorage.setItem(r.TOUR_KEY, "true");
}
function G2(r) {
  var o;
  r.driver && r.driver.destroy();
  const e = (a) => {
    var l;
    return (a == null ? void 0 : a.targetIframe) || ((l = a == null ? void 0 : a.popover) == null ? void 0 : l.targetIframe);
  }, t = (a, l, s, n) => {
    var h, v, f, w, k, y, A, z;
    if (!a) {
      const x = n.driver.getActiveIndex() ?? 0, $ = n.config.steps[x] || {}, S = s === "movePrevious";
      if (window.parent !== window && (!S && ((h = $.popover) == null ? void 0 : h.returnToParent) || S && ((v = $.popover) == null ? void 0 : v.returnToParentBackward))) {
        n.driver.destroy();
        let N = S ? (f = $.popover) == null ? void 0 : f.backwardParentStepIndex : (w = $.popover) == null ? void 0 : w.parentStepIndex;
        window.parent.postMessage(
          {
            type: "EOX_TOUR_RESUME",
            tourId: r.id,
            stepIndex: N
          },
          "*"
        );
        return;
      }
      n.driver.destroy();
      return;
    }
    const d = n.driver.getActiveIndex() ?? 0, m = n.config.steps[d] || {}, b = e(m), c = e(a);
    let p = !1;
    if (c) {
      const x = document.querySelector(c);
      x && x.tagName === "IFRAME" && (p = !0);
    }
    if (p)
      if (c && c !== b) {
        const x = document.querySelector(c);
        if (x && x.contentWindow) {
          n.driver[s]();
          const $ = JSON.parse(JSON.stringify(r.config));
          let S = l;
          s === "movePrevious" && ((k = m.popover) == null ? void 0 : k.backwardChildStepIndex) !== void 0 ? S = m.popover.backwardChildStepIndex : ((y = a.popover) == null ? void 0 : y.childStepIndex) !== void 0 ? S = a.popover.childStepIndex : a.childStepIndex !== void 0 && (S = a.childStepIndex), x.contentWindow.postMessage(
            {
              type: "EOX_TOUR_HANDOFF",
              tourId: r.id,
              config: $,
              stepIndex: S
            },
            "*"
          );
        } else
          console.warn(
            `[eox-tour] Parent cannot navigate over iframe handoff: Iframe ${c} not found.`
          ), n.driver[s]();
      } else
        n.driver[s]();
    else if (c === b)
      n.driver[s]();
    else {
      n.driver.destroy();
      let x = l;
      s === "movePrevious" && ((A = m.popover) == null ? void 0 : A.backwardParentStepIndex) !== void 0 ? x = m.popover.backwardParentStepIndex : ((z = m.popover) == null ? void 0 : z.parentStepIndex) !== void 0 && (x = m.popover.parentStepIndex), window.parent.postMessage(
        {
          type: "EOX_TOUR_RESUME",
          tourId: r.id,
          stepIndex: x
        },
        "*"
      );
    }
  }, i = {
    showProgress: !1,
    showButtons: [],
    ...p0,
    ...r.config,
    steps: ((o = r.config.steps) == null ? void 0 : o.map((a) => {
      const l = e(a);
      return l ? {
        ...a,
        get element() {
          const s = document.querySelector(l);
          return s && s.tagName.toLowerCase() === "iframe" ? l : a.element;
        }
      } : a;
    })) || [],
    onNextClick: (a, l, s) => {
      r.config.onNextClick && r.config.onNextClick(a, l, s);
      const n = s.driver.getActiveIndex() ?? 0;
      t(
        s.config.steps[n + 1],
        n + 1,
        "moveNext",
        s
      );
    },
    onPrevClick: (a, l, s) => {
      r.config.onPrevClick && r.config.onPrevClick(a, l, s);
      const n = s.driver.getActiveIndex() ?? 0;
      t(
        s.config.steps[n - 1],
        n - 1,
        "movePrevious",
        s
      );
    },
    onCloseClick: (a, l, s) => {
      r.config.onCloseClick && r.config.onCloseClick(a, l, s), s.driver.destroy(), window.parent !== window && window.parent.postMessage(
        { type: "EOX_TOUR_DESTROY", tourId: r.id },
        "*"
      );
    },
    onHighlightStarted: (a, l, s) => {
      const n = e(l);
      let d = !1;
      if (n) {
        const m = document.querySelector(n);
        m && m.tagName === "IFRAME" && (d = !0);
      }
      d ? s.driver.setConfig({
        ...s.config,
        stagePadding: 0,
        stageRadius: 0
      }) : s.driver.setConfig({
        ...s.config,
        stagePadding: r.config.stagePadding ?? 10,
        stageRadius: r.config.stageRadius ?? 5
      }), r.dispatchEvent(
        new CustomEvent("tour-highlight-started", {
          detail: { element: a, step: l, options: s },
          bubbles: !0,
          composed: !0
        })
      ), r.config.onHighlightStarted && r.config.onHighlightStarted(a, l, s);
    },
    onHighlighted: (a, l, s) => {
      r.dispatchEvent(
        new CustomEvent("tour-highlighted", {
          detail: { element: a, step: l, options: s },
          bubbles: !0,
          composed: !0
        })
      ), r.config.onHighlighted && r.config.onHighlighted(a, l, s);
    },
    onDeselected: (a, l, s) => {
      r.dispatchEvent(
        new CustomEvent("tour-deselected", {
          detail: { element: a, step: l, options: s },
          bubbles: !0,
          composed: !0
        })
      ), r.config.onDeselected && r.config.onDeselected(a, l, s);
    },
    onDestroyStarted: (a, l, s) => {
      r.dispatchEvent(
        new CustomEvent("tour-destroy-started", {
          detail: { element: a, step: l, options: s },
          bubbles: !0,
          composed: !0
        })
      ), r.config.onDestroyStarted && r.config.onDestroyStarted(a, l, s);
    },
    onPopoverRender: (a, l) => {
      var b, c, p, h;
      p0.onPopoverRender && p0.onPopoverRender(a, l);
      const s = l.state.activeIndex ?? 0, n = l.config.steps[s], d = e(n);
      let m = !1;
      if (d) {
        const v = document.querySelector(d);
        v && v.tagName === "IFRAME" && (m = !0);
      }
      if (m && a.wrapper && (a.wrapper.style.display = "none"), a.previousButton && (s === 0 && ((b = n == null ? void 0 : n.popover) != null && b.returnToParentBackward || window.parent !== window && ((c = n == null ? void 0 : n.popover) == null ? void 0 : c.backwardParentStepIndex) !== void 0 ? (a.previousButton.disabled = !1, a.previousButton.classList.remove(
        "driver-popover-btn-disabled"
      )) : a.previousButton.style.display = "none"), (a.previousButton.disabled || a.previousButton.classList.contains(
        "driver-popover-btn-disabled"
      )) && (a.previousButton.style.display = "none")), a.progress && (r.config.stepOffset !== void 0 || r.config.totalSteps !== void 0 || ((p = n == null ? void 0 : n.popover) == null ? void 0 : p.stepOffset) !== void 0)) {
        const v = ((h = n == null ? void 0 : n.popover) == null ? void 0 : h.stepOffset) ?? r.config.stepOffset ?? 0, f = r.config.totalSteps || l.config.steps.length, w = s + 1 + v;
        a.progress.innerText = `${w} of ${f}`;
      }
      r.config.onPopoverRender && r.config.onPopoverRender(a, l);
    }
  };
  r.driver = Q2(i), G0(r);
}
class ee extends F {
  constructor() {
    super();
    /**
     * Handles incoming `postMessage` events for cross-iframe synchronization.
     * Supported message types: EOX_TOUR_HANDOFF, EOX_TOUR_RESUME, EOX_TOUR_DESTROY.
     *
     * @param {MessageEvent} event
     * @ignore
     */
    v0(this, "_handleMessage", (t) => {
      B2(t, this);
    });
    this.config = {}, this.showEveryTime = !1, this.preventAutoStart = !1, this.unstyled = !1, this.driver = null, this.TOUR_KEY = "eox-tour-shown";
  }
  static get properties() {
    return {
      /**
       * The driver.js configuration object. See the [driver.js docs](https://driverjs.com/docs/configuration) for available options.
       */
      config: { attribute: !1, type: Object },
      /**
       * Whether to show the tour every time the component is mounted,
       * bypassing the `localStorage` check.
       */
      showEveryTime: { attribute: "show-every-time", type: Boolean },
      /**
       * Whether to prevent the tour from starting automatically on mount.
       * If true, the tour must be started manually via the `start()` method.
       */
      preventAutoStart: { attribute: "prevent-auto-start", type: Boolean },
      /**
       * Whether to disable the default EOx branded styling.
       */
      unstyled: { attribute: "unstyled", type: Boolean }
    };
  }
  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("message", this._handleMessage);
  }
  /**
   * @override
   */
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("message", this._handleMessage), this.driver && this.driver.destroy();
  }
  /**
   * @override
   */
  updated(t) {
    t.has("config") && this.config && G2(this);
  }
  /**
   * Starts the tour at a specific step index.
   *
   * @param {number} [stepIndex=0] The index of the step to start at.
   */
  start(t = 0) {
    var l, s, n;
    const i = (s = (l = this.config) == null ? void 0 : l.steps) == null ? void 0 : s[t], o = (i == null ? void 0 : i.targetIframe) || ((n = i == null ? void 0 : i.popover) == null ? void 0 : n.targetIframe);
    let a = !1;
    if (o) {
      const d = document.querySelector(o);
      d && d.tagName.toLowerCase() === "iframe" && (a = !0);
    }
    if (a) {
      const d = document.querySelector(o);
      if (d && d.contentWindow) {
        const m = JSON.parse(JSON.stringify(this.config));
        d.contentWindow.postMessage(
          {
            type: "EOX_TOUR_HANDOFF",
            tourId: this.id,
            config: m,
            stepIndex: t
          },
          "*"
        );
      }
    } else
      this.driver && (this.driver.isActive() ? this.driver.moveTo(t) : this.driver.drive(t));
  }
  /**
   * @override
   */
  createRenderRoot() {
    return this;
  }
  /**
   * @override
   */
  render() {
    return w2`
      <style>
        ${$2}
        @scope (.driver-popover) {
          ${this.unstyled ? "" : M2}
        }
      </style>
    `;
  }
}
customElements.define("eox-tour", ee);
export {
  ee as EOxTour
};
