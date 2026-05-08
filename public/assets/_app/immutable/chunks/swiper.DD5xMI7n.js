var e = Object.defineProperty,
  t = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  n = Math.pow,
  l = (t, s, i) =>
    s in t
      ? e(t, s, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[s] = i),
  o = (e, t) => {
    for (var s in t || (t = {})) a.call(t, s) && l(e, s, t[s]);
    if (i) for (var s of i(t)) r.call(t, s) && l(e, s, t[s]);
    return e;
  },
  d = (e, i) => t(e, s(i));
import {
  N as c,
  i as p,
  ay as u,
  o as m,
  x as f,
  v as h,
  a0 as v,
  aw as g,
  H as w,
  w as b,
  y,
  z as S,
  az as T,
  j as E,
  k as x,
  n as C,
  q as P,
  P as M,
  aA as L,
  aB as k,
  aC as I,
  aD as O,
  av as A,
  aE as z,
  af as B,
  O as V,
  at as _,
  ao as D,
  aF as G,
  ae as $,
  V as N,
  aG as F,
  ak as H,
  aH as j,
  _ as R,
  aI as q,
  aJ as W,
  aK as X,
  h as Y,
} from "./runtime.9n-HZsgX.js";
import { f as U, l as K } from "./store.0Ek3FjD1.js";
function J(e, t) {
  return t;
}
function Q(e, t, s, i, a, r = null) {
  var n = e,
    l = { flags: t, items: new Map(), first: null };
  if (!!(t & u)) {
    var o = e;
    n = m ? f(V(o)) : o.appendChild(c());
  }
  m && h();
  var d = null,
    k = !1;
  p(() => {
    var e = s(),
      o = v(e) ? e : null == e ? [] : g(e),
      c = o.length;
    if (k && 0 === c) return;
    k = 0 === c;
    let p = !1;
    m && (n.data === w) !== (0 === c) && ((n = b()), f(n), y(!1), (p = !0));
    if (m) {
      for (var h, V = null, $ = 0; $ < c; $++) {
        if (8 === S.nodeType && S.data === _) {
          (n = S), (p = !0), y(!1);
          break;
        }
        var N = o[$],
          F = i(N, $);
        (h = ee(S, l, V, null, N, F, $, a, t)), l.items.set(F, h), (V = h);
      }
      c > 0 && f(b());
    }
    m ||
      (function (e, t, s, i, a, r, n) {
        var l,
          o,
          d,
          c,
          p,
          m,
          f,
          h,
          v,
          w,
          b = !!(a & G),
          y = !!(a & (L | I)),
          S = e.length,
          x = t.items,
          C = t.first,
          k = C,
          V = null,
          _ = [],
          D = [];
        if (b)
          for (w = 0; w < S; w += 1)
            (h = n((f = e[w]), w)),
              void 0 !== (v = x.get(h)) &&
                (null == (l = v.a) || l.measure(),
                (null != m ? m : (m = new Set())).add(v));
        for (w = 0; w < S; w += 1)
          if (((h = n((f = e[w]), w)), void 0 !== (v = x.get(h)))) {
            if (
              (y && Z(v, f, w, a),
              v.e.f & T &&
                (E(v.e),
                b &&
                  (null == (o = v.a) || o.unfix(),
                  (null != m ? m : (m = new Set())).delete(v))),
              v !== k)
            ) {
              if (void 0 !== p && p.has(v)) {
                if (_.length < D.length) {
                  var $,
                    N = D[0];
                  V = N.prev;
                  var F = _[0],
                    H = _[_.length - 1];
                  for ($ = 0; $ < _.length; $ += 1) te(_[$], N, s);
                  for ($ = 0; $ < D.length; $ += 1) p.delete(D[$]);
                  se(t, F.prev, H.next),
                    se(t, V, F),
                    se(t, H, N),
                    (k = N),
                    (V = H),
                    (w -= 1),
                    (_ = []),
                    (D = []);
                } else
                  p.delete(v),
                    te(v, k, s),
                    se(t, v.prev, v.next),
                    se(t, v, null === V ? t.first : V.next),
                    se(t, V, v),
                    (V = v);
                continue;
              }
              for (_ = [], D = []; null !== k && k.k !== h; )
                (!r && k.e.f & T) || (null != p ? p : (p = new Set())).add(k),
                  D.push(k),
                  (k = k.next);
              if (null === k) continue;
              v = k;
            }
            _.push(v), (V = v), (k = v.next);
          } else {
            (V = ee(
              k ? k.e.nodes_start : s,
              t,
              V,
              null === V ? t.first : V.next,
              f,
              h,
              w,
              i,
              a
            )),
              x.set(h, V),
              (_ = []),
              (D = []),
              (k = V.next);
          }
        if (null !== k || void 0 !== p) {
          for (var j = void 0 === p ? [] : g(p); null !== k; )
            (!r && k.e.f & T) || j.push(k), (k = k.next);
          var R = j.length;
          if (R > 0) {
            var q = a & u && 0 === S ? s : null;
            if (b) {
              for (w = 0; w < R; w += 1) null == (d = j[w].a) || d.measure();
              for (w = 0; w < R; w += 1) null == (c = j[w].a) || c.fix();
            }
            !(function (e, t, s, i) {
              for (var a = [], r = t.length, n = 0; n < r; n++)
                O(t[n].e, a, !0);
              var l = r > 0 && 0 === a.length && null !== s;
              if (l) {
                var o = s.parentNode;
                A(o), o.append(s), i.clear(), se(e, t[0].prev, t[r - 1].next);
              }
              z(a, () => {
                for (var s = 0; s < r; s++) {
                  var a = t[s];
                  l || (i.delete(a.k), se(e, a.prev, a.next)), B(a.e, !l);
                }
              });
            })(t, j, q, x);
          }
        }
        b &&
          P(() => {
            var e;
            if (void 0 !== m) for (v of m) null == (e = v.a) || e.apply();
          });
        (M.first = t.first && t.first.e), (M.last = V && V.e);
      })(o, l, n, a, t, !!(D.f & T), i);
    null !== r &&
      (0 === c
        ? d
          ? E(d)
          : (d = x(() => r(n)))
        : null !== d &&
          C(d, () => {
            d = null;
          })),
      p && y(!0),
      s();
  }),
    m && (n = S);
}
function Z(e, t, s, i) {
  i & L && k(e.v, t), i & I ? k(e.i, s) : (e.i = s);
}
function ee(e, t, s, i, a, r, n, l, o) {
  var d = !!(o & L) ? (!(o & F) ? $(a) : N(a)) : a,
    c = o & I ? N(n) : n,
    p = { i: c, v: d, k: r, a: null, e: null, prev: s, next: i };
  try {
    return (
      (p.e = x(() => l(e, d, c), m)),
      (p.e.prev = s && s.e),
      (p.e.next = i && i.e),
      null === s ? (t.first = p) : ((s.next = p), (s.e.next = p.e)),
      null !== i && ((i.prev = p), (i.e.prev = p.e)),
      p
    );
  } finally {
  }
}
function te(e, t, s) {
  for (
    var i = e.next ? e.next.e.nodes_start : s,
      a = t ? t.e.nodes_start : s,
      r = e.e.nodes_start;
    r !== i;

  ) {
    var n = H(r);
    a.before(r), (r = n);
  }
}
function se(e, t, s) {
  null === t ? (e.first = s) : ((t.next = s), (t.e.next = s && s.e)),
    null !== s && ((s.prev = t), (s.e.prev = t && t.e));
}
function ie(e) {
  if (m) {
    var t = !1,
      s = () => {
        if (!t) {
          if (((t = !0), e.hasAttribute("value"))) {
            var s = e.value;
            re(e, "value", null), (e.value = s);
          }
          if (e.hasAttribute("checked")) {
            var i = e.checked;
            re(e, "checked", null), (e.checked = i);
          }
        }
      };
    (e.__on_r = s), W(s), U();
  }
}
function ae(e, t) {
  var s,
    i = null != (s = e.__attributes) ? s : (e.__attributes = {});
  i.checked !== (i.checked = t) && (e.checked = t);
}
function re(e, t, s, i) {
  var a,
    r = null != (a = e.__attributes) ? a : (e.__attributes = {});
  (m &&
    ((r[t] = e.getAttribute(t)),
    "src" === t ||
      "srcset" === t ||
      ("href" === t && "LINK" === e.nodeName))) ||
    (r[t] !== (r[t] = s) &&
      ("style" === t && "__styles" in e && (e.__styles = {}),
      "loading" === t && (e[j] = s),
      null == s
        ? e.removeAttribute(t)
        : "string" != typeof s &&
          (function (e) {
            var t,
              s = ne.get(e.nodeName);
            if (s) return s;
            ne.set(e.nodeName, (s = []));
            var i = R(e),
              a = Element.prototype;
            for (; a !== i; ) {
              for (var r in (t = q(i))) t[r].set && s.push(r);
              i = R(i);
            }
            return s;
          })(e).includes(t)
        ? (e[t] = s)
        : e.setAttribute(t, s)));
}
var ne = new Map();
function le(e) {
  if (!m && "lazy" === e.loading) {
    var t = e.src;
    (e[j] = null),
      (e.loading = "eager"),
      e.removeAttribute("src"),
      requestAnimationFrame(() => {
        "eager" !== e[j] && (e.loading = "lazy"), (e.src = t);
      });
  }
}
function oe(e, t) {
  var s = e.__className,
    i = (function (e) {
      return null == e ? "" : e;
    })(t);
  m && e.className === i
    ? (e.__className = i)
    : (s !== i || (m && e.className !== i)) &&
      (null == t ? e.removeAttribute("class") : (e.className = i),
      (e.__className = i));
}
function de(e, t, s) {
  if (s) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function ce(e, t, s = t) {
  var i = X();
  K(e, "input", () => {
    var a = ue(e) ? me(e.value) : e.value;
    s(a), i && a !== (a = t()) && (e.value = null != a ? a : "");
  }),
    Y(() => {
      var i = t();
      m && e.defaultValue !== e.value
        ? s(ue(e) ? me(e.value) : e.value)
        : (ue(e) && i === me(e.value)) ||
          (("date" !== e.type || i || e.value) &&
            i !== e.value &&
            (e.value = null != i ? i : ""));
    });
}
function pe(e, t, s = t) {
  K(e, "change", () => {
    var t = e.checked;
    s(t);
  }),
    null == t() && s(!1),
    Y(() => {
      var s = t();
      e.checked = Boolean(s);
    });
}
function ue(e) {
  var t = e.type;
  return "number" === t || "range" === t;
}
function me(e) {
  return "" === e ? null : +e;
}
function fe(e) {
  return (
    null !== e &&
    "object" == typeof e &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function he(e, t) {
  void 0 === e && (e = {}),
    void 0 === t && (t = {}),
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : fe(t[s]) &&
          fe(e[s]) &&
          Object.keys(t[s]).length > 0 &&
          he(e[s], t[s]);
    });
}
const ve = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementById: () => null,
  createEvent: () => ({ initEvent() {} }),
  createElement: () => ({
    children: [],
    childNodes: [],
    style: {},
    setAttribute() {},
    getElementsByTagName: () => [],
  }),
  createElementNS: () => ({}),
  importNode: () => null,
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function ge() {
  const e = "undefined" != typeof document ? document : {};
  return he(e, ve), e;
}
const we = {
  document: ve,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle: () => ({ getPropertyValue: () => "" }),
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia: () => ({}),
  requestAnimationFrame: (e) =>
    "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
  cancelAnimationFrame(e) {
    "undefined" != typeof setTimeout && clearTimeout(e);
  },
};
function be() {
  const e = "undefined" != typeof window ? window : {};
  return he(e, we), e;
}
function ye(e, t) {
  return void 0 === t && (t = 0), setTimeout(e, t);
}
function Se() {
  return Date.now();
}
function Te(e, t) {
  void 0 === t && (t = "x");
  const s = be();
  let i, a, r;
  const n = (function (e) {
    const t = be();
    let s;
    return (
      t.getComputedStyle && (s = t.getComputedStyle(e, null)),
      !s && e.currentStyle && (s = e.currentStyle),
      s || (s = e.style),
      s
    );
  })(e);
  return (
    s.WebKitCSSMatrix
      ? ((a = n.transform || n.webkitTransform),
        a.split(",").length > 6 &&
          (a = a
            .split(", ")
            .map((e) => e.replace(",", "."))
            .join(", ")),
        (r = new s.WebKitCSSMatrix("none" === a ? "" : a)))
      : ((r =
          n.MozTransform ||
          n.OTransform ||
          n.MsTransform ||
          n.msTransform ||
          n.transform ||
          n
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = r.toString().split(","))),
    "x" === t &&
      (a = s.WebKitCSSMatrix
        ? r.m41
        : 16 === i.length
        ? parseFloat(i[12])
        : parseFloat(i[4])),
    "y" === t &&
      (a = s.WebKitCSSMatrix
        ? r.m42
        : 16 === i.length
        ? parseFloat(i[13])
        : parseFloat(i[5])),
    a || 0
  );
}
function Ee(e) {
  return (
    "object" == typeof e &&
    null !== e &&
    e.constructor &&
    "Object" === Object.prototype.toString.call(e).slice(8, -1)
  );
}
function xe() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const a = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (
      null != a &&
      ((s = a),
      !("undefined" != typeof window && void 0 !== window.HTMLElement
        ? s instanceof HTMLElement
        : s && (1 === s.nodeType || 11 === s.nodeType)))
    ) {
      const s = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
      for (let t = 0, i = s.length; t < i; t += 1) {
        const i = s[t],
          r = Object.getOwnPropertyDescriptor(a, i);
        void 0 !== r &&
          r.enumerable &&
          (Ee(e[i]) && Ee(a[i])
            ? a[i].__swiper__
              ? (e[i] = a[i])
              : xe(e[i], a[i])
            : !Ee(e[i]) && Ee(a[i])
            ? ((e[i] = {}), a[i].__swiper__ ? (e[i] = a[i]) : xe(e[i], a[i]))
            : (e[i] = a[i]));
      }
    }
  }
  var s;
  return e;
}
function Ce(e, t, s) {
  e.style.setProperty(t, s);
}
function Pe(e) {
  let { swiper: t, targetPosition: s, side: i } = e;
  const a = be(),
    r = -t.translate;
  let n,
    l = null;
  const o = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    a.cancelAnimationFrame(t.cssModeFrameID);
  const d = s > r ? "next" : "prev",
    c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
    p = () => {
      (n = new Date().getTime()), null === l && (l = n);
      const e = Math.max(Math.min((n - l) / o, 1), 0),
        d = 0.5 - Math.cos(e * Math.PI) / 2;
      let u = r + d * (s - r);
      if ((c(u, s) && (u = s), t.wrapperEl.scrollTo({ [i]: u }), c(u, s)))
        return (
          (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [i]: u });
          }),
          void a.cancelAnimationFrame(t.cssModeFrameID)
        );
      t.cssModeFrameID = a.requestAnimationFrame(p);
    };
  p();
}
function Me(e) {
  return (
    e.querySelector(".swiper-slide-transform") ||
    (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
    e
  );
}
function Le(e, t) {
  void 0 === t && (t = "");
  const s = [...e.children];
  return (
    e instanceof HTMLSlotElement && s.push(...e.assignedElements()),
    t ? s.filter((e) => e.matches(t)) : s
  );
}
function ke(e) {
  try {
    return;
  } catch (t) {}
}
function Ie(e, t) {
  void 0 === t && (t = []);
  const s = document.createElement(e);
  return (
    s.classList.add(
      ...(Array.isArray(t)
        ? t
        : (function (e) {
            return (
              void 0 === e && (e = ""),
              e
                .trim()
                .split(" ")
                .filter((e) => !!e.trim())
            );
          })(t))
    ),
    s
  );
}
function Oe(e, t) {
  return be().getComputedStyle(e, null).getPropertyValue(t);
}
function Ae(e) {
  let t,
    s = e;
  if (s) {
    for (t = 0; null !== (s = s.previousSibling); )
      1 === s.nodeType && (t += 1);
    return t;
  }
}
function ze(e, t) {
  const s = [];
  let i = e.parentElement;
  for (; i; ) t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
  return s;
}
function Be(e, t, s) {
  const i = be();
  return (
    e["width" === t ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      i
        .getComputedStyle(e, null)
        .getPropertyValue("width" === t ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      i
        .getComputedStyle(e, null)
        .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
    )
  );
}
function Ve(e) {
  return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
}
let _e, De, Ge;
function $e() {
  return (
    _e ||
      (_e = (function () {
        const e = be(),
          t = ge();
        return {
          smoothScroll:
            t.documentElement &&
            t.documentElement.style &&
            "scrollBehavior" in t.documentElement.style,
          touch: !!(
            "ontouchstart" in e ||
            (e.DocumentTouch && t instanceof e.DocumentTouch)
          ),
        };
      })()),
    _e
  );
}
function Ne(e) {
  return (
    void 0 === e && (e = {}),
    De ||
      (De = (function (e) {
        let { userAgent: t } = void 0 === e ? {} : e;
        const s = $e(),
          i = be(),
          a = i.navigator.platform,
          r = t || i.navigator.userAgent,
          n = { ios: !1, android: !1 },
          l = i.screen.width,
          o = i.screen.height,
          d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
        let c = r.match(/(iPad).*OS\s([\d_]+)/);
        const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
          u = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          m = "Win32" === a;
        let f = "MacIntel" === a;
        return (
          !c &&
            f &&
            s.touch &&
            [
              "1024x1366",
              "1366x1024",
              "834x1194",
              "1194x834",
              "834x1112",
              "1112x834",
              "768x1024",
              "1024x768",
              "820x1180",
              "1180x820",
              "810x1080",
              "1080x810",
            ].indexOf(`${l}x${o}`) >= 0 &&
            ((c = r.match(/(Version)\/([\d.]+)/)),
            c || (c = [0, 1, "13_0_0"]),
            (f = !1)),
          d && !m && ((n.os = "android"), (n.android = !0)),
          (c || u || p) && ((n.os = "ios"), (n.ios = !0)),
          n
        );
      })(e)),
    De
  );
}
function Fe() {
  return (
    Ge ||
      (Ge = (function () {
        const e = be(),
          t = Ne();
        let s = !1;
        function i() {
          const t = e.navigator.userAgent.toLowerCase();
          return (
            t.indexOf("safari") >= 0 &&
            t.indexOf("chrome") < 0 &&
            t.indexOf("android") < 0
          );
        }
        if (i()) {
          const t = String(e.navigator.userAgent);
          if (t.includes("Version/")) {
            const [e, i] = t
              .split("Version/")[1]
              .split(" ")[0]
              .split(".")
              .map((e) => Number(e));
            s = e < 16 || (16 === e && i < 2);
          }
        }
        const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            e.navigator.userAgent
          ),
          r = i();
        return {
          isSafari: s || r,
          needPerspectiveFix: s,
          need3dFix: r || (a && t.ios),
          isWebView: a,
        };
      })()),
    Ge
  );
}
const He = (e, t, s) => {
  t && !e.classList.contains(s)
    ? e.classList.add(s)
    : !t && e.classList.contains(s) && e.classList.remove(s);
};
const je = (e, t, s) => {
  t && !e.classList.contains(s)
    ? e.classList.add(s)
    : !t && e.classList.contains(s) && e.classList.remove(s);
};
const Re = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const s = t.closest(
      e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
    );
    if (s) {
      let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
      !t &&
        e.isElement &&
        (s.shadowRoot
          ? (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((t = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                t && t.remove());
            })),
        t && t.remove();
    }
  },
  qe = (e, t) => {
    if (!e.slides[t]) return;
    const s = e.slides[t].querySelector('[loading="lazy"]');
    s && s.removeAttribute("loading");
  },
  We = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const s = e.slides.length;
    if (!s || !t || t < 0) return;
    t = Math.min(t, s);
    const i =
        "auto" === e.params.slidesPerView
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      a = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const s = a,
        r = [s - t];
      return (
        r.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
        void e.slides.forEach((t, s) => {
          r.includes(t.column) && qe(e, s);
        })
      );
    }
    const r = a + i - 1;
    if (e.params.rewind || e.params.loop)
      for (let n = a - t; n <= r + t; n += 1) {
        const t = ((n % s) + s) % s;
        (t < a || t > r) && qe(e, t);
      }
    else
      for (let n = Math.max(a - t, 0); n <= Math.min(r + t, s - 1); n += 1)
        n !== a && (n > r || n < a) && qe(e, n);
  };
function Xe(e) {
  let { swiper: t, runCallbacks: s, direction: i, step: a } = e;
  const { activeIndex: r, previousIndex: n } = t;
  let l = i;
  if (
    (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
    t.emit(`transition${a}`),
    s && r !== n)
  ) {
    if ("reset" === l) return void t.emit(`slideResetTransition${a}`);
    t.emit(`slideChangeTransition${a}`),
      "next" === l
        ? t.emit(`slideNextTransition${a}`)
        : t.emit(`slidePrevTransition${a}`);
  }
}
function Ye(e, t, s) {
  const i = be(),
    { params: a } = e,
    r = a.edgeSwipeDetection,
    n = a.edgeSwipeThreshold;
  return (
    !r ||
    !(s <= n || s >= i.innerWidth - n) ||
    ("prevent" === r && (t.preventDefault(), !0))
  );
}
function Ue(e) {
  const t = this,
    s = ge();
  let i = e;
  i.originalEvent && (i = i.originalEvent);
  const a = t.touchEventsData;
  if ("pointerdown" === i.type) {
    if (null !== a.pointerId && a.pointerId !== i.pointerId) return;
    a.pointerId = i.pointerId;
  } else
    "touchstart" === i.type &&
      1 === i.targetTouches.length &&
      (a.touchId = i.targetTouches[0].identifier);
  if ("touchstart" === i.type) return void Ye(t, i, i.targetTouches[0].pageX);
  const { params: r, touches: n, enabled: l } = t;
  if (!l) return;
  if (!r.simulateTouch && "mouse" === i.pointerType) return;
  if (t.animating && r.preventInteractionOnTransition) return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let o = i.target;
  if (
    "wrapper" === r.touchEventsTarget &&
    !(function (e, t) {
      const s = t.contains(e);
      if (!s && t instanceof HTMLSlotElement)
        return [...t.assignedElements()].includes(e);
      return s;
    })(o, t.wrapperEl)
  )
    return;
  if ("which" in i && 3 === i.which) return;
  if ("button" in i && i.button > 0) return;
  if (a.isTouched && a.isMoved) return;
  const d = !!r.noSwipingClass && "" !== r.noSwipingClass,
    c = i.composedPath ? i.composedPath() : i.path;
  d && i.target && i.target.shadowRoot && c && (o = c[0]);
  const p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    u = !(!i.target || !i.target.shadowRoot);
  if (
    r.noSwiping &&
    (u
      ? (function (e, t) {
          return (
            void 0 === t && (t = this),
            (function t(s) {
              if (!s || s === ge() || s === be()) return null;
              s.assignedSlot && (s = s.assignedSlot);
              const i = s.closest(e);
              return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
            })(t)
          );
        })(p, o)
      : o.closest(p))
  )
    return void (t.allowClick = !0);
  if (r.swipeHandler && !o.closest(r.swipeHandler)) return;
  (n.currentX = i.pageX), (n.currentY = i.pageY);
  const m = n.currentX,
    f = n.currentY;
  if (!Ye(t, i, m)) return;
  Object.assign(a, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (n.startX = m),
    (n.startY = f),
    (a.touchStartTime = Se()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (a.allowThresholdMove = !1);
  let h = !0;
  o.matches(a.focusableElements) &&
    ((h = !1), "SELECT" === o.nodeName && (a.isTouched = !1)),
    s.activeElement &&
      s.activeElement.matches(a.focusableElements) &&
      s.activeElement !== o &&
      ("mouse" === i.pointerType ||
        ("mouse" !== i.pointerType && !o.matches(a.focusableElements))) &&
      s.activeElement.blur();
  const v = h && t.allowTouchMove && r.touchStartPreventDefault;
  (!r.touchStartForcePreventDefault && !v) ||
    o.isContentEditable ||
    i.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", i);
}
function Ke(e) {
  const t = ge(),
    s = this,
    i = s.touchEventsData,
    { params: a, touches: r, rtlTranslate: l, enabled: o } = s;
  if (!o) return;
  if (!a.simulateTouch && "mouse" === e.pointerType) return;
  let d,
    c = e;
  if ((c.originalEvent && (c = c.originalEvent), "pointermove" === c.type)) {
    if (null !== i.touchId) return;
    if (c.pointerId !== i.pointerId) return;
  }
  if ("touchmove" === c.type) {
    if (
      ((d = [...c.changedTouches].filter((e) => e.identifier === i.touchId)[0]),
      !d || d.identifier !== i.touchId)
    )
      return;
  } else d = c;
  if (!i.isTouched)
    return void (
      i.startMoving &&
      i.isScrolling &&
      s.emit("touchMoveOpposite", c)
    );
  const p = d.pageX,
    u = d.pageY;
  if (c.preventedByNestedSwiper) return (r.startX = p), void (r.startY = u);
  if (!s.allowTouchMove)
    return (
      c.target.matches(i.focusableElements) || (s.allowClick = !1),
      void (
        i.isTouched &&
        (Object.assign(r, { startX: p, startY: u, currentX: p, currentY: u }),
        (i.touchStartTime = Se()))
      )
    );
  if (a.touchReleaseOnEdges && !a.loop)
    if (s.isVertical()) {
      if (
        (u < r.startY && s.translate <= s.maxTranslate()) ||
        (u > r.startY && s.translate >= s.minTranslate())
      )
        return (i.isTouched = !1), void (i.isMoved = !1);
    } else if (
      (p < r.startX && s.translate <= s.maxTranslate()) ||
      (p > r.startX && s.translate >= s.minTranslate())
    )
      return;
  if (
    (t.activeElement &&
      t.activeElement.matches(i.focusableElements) &&
      t.activeElement !== c.target &&
      "mouse" !== c.pointerType &&
      t.activeElement.blur(),
    t.activeElement &&
      c.target === t.activeElement &&
      c.target.matches(i.focusableElements))
  )
    return (i.isMoved = !0), void (s.allowClick = !1);
  i.allowTouchCallbacks && s.emit("touchMove", c),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = p),
    (r.currentY = u);
  const m = r.currentX - r.startX,
    f = r.currentY - r.startY;
  if (s.params.threshold && Math.sqrt(n(m, 2) + n(f, 2)) < s.params.threshold)
    return;
  if (void 0 === i.isScrolling) {
    let e;
    (s.isHorizontal() && r.currentY === r.startY) ||
    (s.isVertical() && r.currentX === r.startX)
      ? (i.isScrolling = !1)
      : m * m + f * f >= 25 &&
        ((e = (180 * Math.atan2(Math.abs(f), Math.abs(m))) / Math.PI),
        (i.isScrolling = s.isHorizontal()
          ? e > a.touchAngle
          : 90 - e > a.touchAngle));
  }
  if (
    (i.isScrolling && s.emit("touchMoveOpposite", c),
    void 0 === i.startMoving &&
      ((r.currentX === r.startX && r.currentY === r.startY) ||
        (i.startMoving = !0)),
    i.isScrolling ||
      ("touchmove" === c.type && i.preventTouchMoveFromPointerMove))
  )
    return void (i.isTouched = !1);
  if (!i.startMoving) return;
  (s.allowClick = !1),
    !a.cssMode && c.cancelable && c.preventDefault(),
    a.touchMoveStopPropagation && !a.nested && c.stopPropagation();
  let h = s.isHorizontal() ? m : f,
    v = s.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  a.oneWayMovement &&
    ((h = Math.abs(h) * (l ? 1 : -1)), (v = Math.abs(v) * (l ? 1 : -1))),
    (r.diff = h),
    (h *= a.touchRatio),
    l && ((h = -h), (v = -v));
  const g = s.touchesDirection;
  (s.swipeDirection = h > 0 ? "prev" : "next"),
    (s.touchesDirection = v > 0 ? "prev" : "next");
  const w = s.params.loop && !a.cssMode,
    b =
      ("next" === s.touchesDirection && s.allowSlideNext) ||
      ("prev" === s.touchesDirection && s.allowSlidePrev);
  if (!i.isMoved) {
    if (
      (w && b && s.loopFix({ direction: s.swipeDirection }),
      (i.startTranslate = s.getTranslate()),
      s.setTransition(0),
      s.animating)
    ) {
      const e = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      s.wrapperEl.dispatchEvent(e);
    }
    (i.allowMomentumBounce = !1),
      !a.grabCursor ||
        (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
        s.setGrabCursor(!0),
      s.emit("sliderFirstMove", c);
  }
  if (
    (new Date().getTime(),
    i.isMoved &&
      i.allowThresholdMove &&
      g !== s.touchesDirection &&
      w &&
      b &&
      Math.abs(h) >= 1)
  )
    return (
      Object.assign(r, {
        startX: p,
        startY: u,
        currentX: p,
        currentY: u,
        startTranslate: i.currentTranslate,
      }),
      (i.loopSwapReset = !0),
      void (i.startTranslate = i.currentTranslate)
    );
  s.emit("sliderMove", c),
    (i.isMoved = !0),
    (i.currentTranslate = h + i.startTranslate);
  let y = !0,
    S = a.resistanceRatio;
  if (
    (a.touchReleaseOnEdges && (S = 0),
    h > 0
      ? (w &&
          b &&
          i.allowThresholdMove &&
          i.currentTranslate >
            (a.centeredSlides
              ? s.minTranslate() -
                s.slidesSizesGrid[s.activeIndex + 1] -
                ("auto" !== a.slidesPerView &&
                s.slides.length - a.slidesPerView >= 2
                  ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween
                  : 0) -
                s.params.spaceBetween
              : s.minTranslate()) &&
          s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        i.currentTranslate > s.minTranslate() &&
          ((y = !1),
          a.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              n(-s.minTranslate() + i.startTranslate + h, S))))
      : h < 0 &&
        (w &&
          b &&
          i.allowThresholdMove &&
          i.currentTranslate <
            (a.centeredSlides
              ? s.maxTranslate() +
                s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
                s.params.spaceBetween +
                ("auto" !== a.slidesPerView &&
                s.slides.length - a.slidesPerView >= 2
                  ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
                    s.params.spaceBetween
                  : 0)
              : s.maxTranslate()) &&
          s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              s.slides.length -
              ("auto" === a.slidesPerView
                ? s.slidesPerViewDynamic()
                : Math.ceil(parseFloat(a.slidesPerView, 10))),
          }),
        i.currentTranslate < s.maxTranslate() &&
          ((y = !1),
          a.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              n(s.maxTranslate() - i.startTranslate - h, S)))),
    y && (c.preventedByNestedSwiper = !0),
    !s.allowSlideNext &&
      "next" === s.swipeDirection &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !s.allowSlidePrev &&
      "prev" === s.swipeDirection &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    s.allowSlidePrev ||
      s.allowSlideNext ||
      (i.currentTranslate = i.startTranslate),
    a.threshold > 0)
  ) {
    if (!(Math.abs(h) > a.threshold || i.allowThresholdMove))
      return void (i.currentTranslate = i.startTranslate);
    if (!i.allowThresholdMove)
      return (
        (i.allowThresholdMove = !0),
        (r.startX = r.currentX),
        (r.startY = r.currentY),
        (i.currentTranslate = i.startTranslate),
        void (r.diff = s.isHorizontal()
          ? r.currentX - r.startX
          : r.currentY - r.startY)
      );
  }
  a.followFinger &&
    !a.cssMode &&
    (((a.freeMode && a.freeMode.enabled && s.freeMode) ||
      a.watchSlidesProgress) &&
      (s.updateActiveIndex(), s.updateSlidesClasses()),
    a.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
    s.updateProgress(i.currentTranslate),
    s.setTranslate(i.currentTranslate));
}
function Je(e) {
  const t = this,
    s = t.touchEventsData;
  let i,
    a = e;
  a.originalEvent && (a = a.originalEvent);
  if ("touchend" === a.type || "touchcancel" === a.type) {
    if (
      ((i = [...a.changedTouches].filter((e) => e.identifier === s.touchId)[0]),
      !i || i.identifier !== s.touchId)
    )
      return;
  } else {
    if (null !== s.touchId) return;
    if (a.pointerId !== s.pointerId) return;
    i = a;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      a.type
    )
  ) {
    if (
      !(
        ["pointercancel", "contextmenu"].includes(a.type) &&
        (t.browser.isSafari || t.browser.isWebView)
      )
    )
      return;
  }
  (s.pointerId = null), (s.touchId = null);
  const {
    params: r,
    touches: n,
    rtlTranslate: l,
    slidesGrid: o,
    enabled: d,
  } = t;
  if (!d) return;
  if (!r.simulateTouch && "mouse" === a.pointerType) return;
  if (
    (s.allowTouchCallbacks && t.emit("touchEnd", a),
    (s.allowTouchCallbacks = !1),
    !s.isTouched)
  )
    return (
      s.isMoved && r.grabCursor && t.setGrabCursor(!1),
      (s.isMoved = !1),
      void (s.startMoving = !1)
    );
  r.grabCursor &&
    s.isMoved &&
    s.isTouched &&
    (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
    t.setGrabCursor(!1);
  const c = Se(),
    p = c - s.touchStartTime;
  if (t.allowClick) {
    const e = a.path || (a.composedPath && a.composedPath());
    t.updateClickedSlide((e && e[0]) || a.target, e),
      t.emit("tap click", a),
      p < 300 &&
        c - s.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", a);
  }
  if (
    ((s.lastClickTime = Se()),
    ye(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !s.isTouched ||
      !s.isMoved ||
      !t.swipeDirection ||
      (0 === n.diff && !s.loopSwapReset) ||
      (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
  )
    return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
  let u;
  if (
    ((s.isTouched = !1),
    (s.isMoved = !1),
    (s.startMoving = !1),
    (u = r.followFinger
      ? l
        ? t.translate
        : -t.translate
      : -s.currentTranslate),
    r.cssMode)
  )
    return;
  if (r.freeMode && r.freeMode.enabled)
    return void t.freeMode.onTouchEnd({ currentPos: u });
  const m = u >= -t.maxTranslate() && !t.params.loop;
  let f = 0,
    h = t.slidesSizesGrid[0];
  for (
    let y = 0;
    y < o.length;
    y += y < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
  ) {
    const e = y < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    void 0 !== o[y + e]
      ? (m || (u >= o[y] && u < o[y + e])) && ((f = y), (h = o[y + e] - o[y]))
      : (m || u >= o[y]) && ((f = y), (h = o[o.length - 1] - o[o.length - 2]));
  }
  let v = null,
    g = null;
  r.rewind &&
    (t.isBeginning
      ? (g =
          r.virtual && r.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (v = 0));
  const w = (u - o[f]) / h,
    b = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (p > r.longSwipesMs) {
    if (!r.longSwipes) return void t.slideTo(t.activeIndex);
    "next" === t.swipeDirection &&
      (w >= r.longSwipesRatio
        ? t.slideTo(r.rewind && t.isEnd ? v : f + b)
        : t.slideTo(f)),
      "prev" === t.swipeDirection &&
        (w > 1 - r.longSwipesRatio
          ? t.slideTo(f + b)
          : null !== g && w < 0 && Math.abs(w) > r.longSwipesRatio
          ? t.slideTo(g)
          : t.slideTo(f));
  } else {
    if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
    t.navigation &&
    (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl)
      ? a.target === t.navigation.nextEl
        ? t.slideTo(f + b)
        : t.slideTo(f)
      : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + b),
        "prev" === t.swipeDirection && t.slideTo(null !== g ? g : f));
  }
}
function Qe() {
  const e = this,
    { params: t, el: s } = e;
  if (s && 0 === s.offsetWidth) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: a, snapGrid: r } = e,
    n = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const l = n && t.loop;
  !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
  !e.isEnd ||
  e.isBeginning ||
  e.params.centeredSlides ||
  l
    ? e.params.loop && !n
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0)
    : e.slideTo(e.slides.length - 1, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = a),
    (e.allowSlideNext = i),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
}
function Ze(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function et() {
  const e = this,
    { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
  if (!i) return;
  let a;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    0 === e.translate && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  const r = e.maxTranslate() - e.minTranslate();
  (a = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
    a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function tt(e) {
  const t = this;
  Re(t, e.target),
    t.params.cssMode ||
      ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
      t.update();
}
function st() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const it = (e, t) => {
  const s = ge(),
    { params: i, el: a, wrapperEl: r, device: n } = e,
    l = !!i.nested,
    o = "on" === t ? "addEventListener" : "removeEventListener",
    d = t;
  a &&
    "string" != typeof a &&
    (s[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
    a[o]("touchstart", e.onTouchStart, { passive: !1 }),
    a[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    s[o]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
    s[o]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    s[o]("touchend", e.onTouchEnd, { passive: !0 }),
    s[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    s[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    s[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    s[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    s[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    s[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      a[o]("click", e.onClick, !0),
    i.cssMode && r[o]("scroll", e.onScroll),
    i.updateOnWindowResize
      ? e[d](
          n.ios || n.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Qe,
          !0
        )
      : e[d]("observerUpdate", Qe, !0),
    a[o]("load", e.onLoad, { capture: !0 }));
};
const at = (e, t) => e.grid && t.grid && t.grid.rows > 1;
var rt = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  width: null,
  height: null,
  preventInteractionOnTransition: !1,
  userAgent: null,
  url: null,
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  autoHeight: !1,
  setWrapperSize: !1,
  virtualTranslate: !1,
  effect: "slide",
  breakpoints: void 0,
  breakpointsBase: "window",
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  watchOverflow: !0,
  roundLengths: !1,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  uniqueNavElements: !0,
  resistance: !0,
  resistanceRatio: 0.85,
  watchSlidesProgress: !1,
  grabCursor: !1,
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  rewind: !1,
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  containerModifierClass: "swiper-",
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  runCallbacksOnInit: !0,
  _emitClasses: !1,
};
function nt(e, t) {
  return function (s) {
    void 0 === s && (s = {});
    const i = Object.keys(s)[0],
      a = s[i];
    "object" == typeof a && null !== a
      ? (!0 === e[i] && (e[i] = { enabled: !0 }),
        "navigation" === i &&
          e[i] &&
          e[i].enabled &&
          !e[i].prevEl &&
          !e[i].nextEl &&
          (e[i].auto = !0),
        ["pagination", "scrollbar"].indexOf(i) >= 0 &&
          e[i] &&
          e[i].enabled &&
          !e[i].el &&
          (e[i].auto = !0),
        i in e && "enabled" in a
          ? ("object" != typeof e[i] ||
              "enabled" in e[i] ||
              (e[i].enabled = !0),
            e[i] || (e[i] = { enabled: !1 }),
            xe(t, s))
          : xe(t, s))
      : xe(t, s);
  };
}
const lt = {
    eventsEmitter: {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const a = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][a](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function a() {
          i.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
          for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
            r[n] = arguments[n];
          t.apply(i, r);
        }
        return (a.__emitterProxy = t), i.on(e, a, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, a) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(a, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
          r[n] = arguments[n];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (s = r.slice(1, r.length)), (i = e))
          : ((t = r[0].events), (s = r[0].data), (i = r[0].context || e)),
          s.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, s);
                });
          }),
          e
        );
      },
    },
    update: {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(Oe(i, "padding-left") || 0, 10) -
              parseInt(Oe(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(Oe(i, "padding-top") || 0, 10) -
              parseInt(Oe(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t, s) {
          return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
        }
        const s = e.params,
          {
            wrapperEl: i,
            slidesEl: a,
            size: r,
            rtlTranslate: n,
            wrongRTL: l,
          } = e,
          o = e.virtual && s.virtual.enabled,
          d = o ? e.virtual.slides.length : e.slides.length,
          c = Le(a, `.${e.params.slideClass}, swiper-slide`),
          p = o ? e.virtual.slides.length : c.length;
        let u = [];
        const m = [],
          f = [];
        let h = s.slidesOffsetBefore;
        "function" == typeof h && (h = s.slidesOffsetBefore.call(e));
        let v = s.slidesOffsetAfter;
        "function" == typeof v && (v = s.slidesOffsetAfter.call(e));
        const g = e.snapGrid.length,
          w = e.slidesGrid.length;
        let b = s.spaceBetween,
          y = -h,
          S = 0,
          T = 0;
        if (void 0 === r) return;
        "string" == typeof b && b.indexOf("%") >= 0
          ? (b = (parseFloat(b.replace("%", "")) / 100) * r)
          : "string" == typeof b && (b = parseFloat(b)),
          (e.virtualSize = -b),
          c.forEach((e) => {
            n ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          s.centeredSlides &&
            s.cssMode &&
            (Ce(i, "--swiper-centered-offset-before", ""),
            Ce(i, "--swiper-centered-offset-after", ""));
        const E = s.grid && s.grid.rows > 1 && e.grid;
        let x;
        E ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
        const C =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView
          ).length > 0;
        for (let P = 0; P < p; P += 1) {
          let i;
          if (
            ((x = 0),
            c[P] && (i = c[P]),
            E && e.grid.updateSlide(P, i, c),
            !c[P] || "none" !== Oe(i, "display"))
          ) {
            if ("auto" === s.slidesPerView) {
              C && (c[P].style[e.getDirectionLabel("width")] = "");
              const a = getComputedStyle(i),
                r = i.style.transform,
                n = i.style.webkitTransform;
              if (
                (r && (i.style.transform = "none"),
                n && (i.style.webkitTransform = "none"),
                s.roundLengths)
              )
                x = e.isHorizontal() ? Be(i, "width") : Be(i, "height");
              else {
                const e = t(a, "width"),
                  s = t(a, "padding-left"),
                  r = t(a, "padding-right"),
                  n = t(a, "margin-left"),
                  l = t(a, "margin-right"),
                  o = a.getPropertyValue("box-sizing");
                if (o && "border-box" === o) x = e + n + l;
                else {
                  const { clientWidth: t, offsetWidth: a } = i;
                  x = e + s + r + n + l + (a - t);
                }
              }
              r && (i.style.transform = r),
                n && (i.style.webkitTransform = n),
                s.roundLengths && (x = Math.floor(x));
            } else
              (x = (r - (s.slidesPerView - 1) * b) / s.slidesPerView),
                s.roundLengths && (x = Math.floor(x)),
                c[P] && (c[P].style[e.getDirectionLabel("width")] = `${x}px`);
            c[P] && (c[P].swiperSlideSize = x),
              f.push(x),
              s.centeredSlides
                ? ((y = y + x / 2 + S / 2 + b),
                  0 === S && 0 !== P && (y = y - r / 2 - b),
                  0 === P && (y = y - r / 2 - b),
                  Math.abs(y) < 0.001 && (y = 0),
                  s.roundLengths && (y = Math.floor(y)),
                  T % s.slidesPerGroup == 0 && u.push(y),
                  m.push(y))
                : (s.roundLengths && (y = Math.floor(y)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(y),
                  m.push(y),
                  (y = y + x + b)),
              (e.virtualSize += x + b),
              (S = x),
              (T += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + v),
          n &&
            l &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            (i.style.width = `${e.virtualSize + b}px`),
          s.setWrapperSize &&
            (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + b}px`),
          E && e.grid.updateWrapperSize(x, u),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < u.length; i += 1) {
            let a = u[i];
            s.roundLengths && (a = Math.floor(a)),
              u[i] <= e.virtualSize - r && t.push(a);
          }
          (u = t),
            Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - r);
        }
        if (o && s.loop) {
          const t = f[0] + b;
          if (s.slidesPerGroup > 1) {
            const i = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  s.slidesPerGroup
              ),
              a = t * s.slidesPerGroup;
            for (let e = 0; e < i; e += 1) u.push(u[u.length - 1] + a);
          }
          for (
            let i = 0;
            i < e.virtual.slidesBefore + e.virtual.slidesAfter;
            i += 1
          )
            1 === s.slidesPerGroup && u.push(u[u.length - 1] + t),
              m.push(m[m.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === u.length && (u = [0]), 0 !== b)) {
          const t =
            e.isHorizontal() && n
              ? "marginLeft"
              : e.getDirectionLabel("marginRight");
          c.filter(
            (e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1
          ).forEach((e) => {
            e.style[t] = `${b}px`;
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (b || 0);
          }),
            (e -= b);
          const t = e > r ? e - r : 0;
          u = u.map((e) => (e <= 0 ? -h : e > t ? t + v : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          f.forEach((t) => {
            e += t + (b || 0);
          }),
            (e -= b);
          const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
          if (e + t < r) {
            const s = (r - e - t) / 2;
            u.forEach((e, t) => {
              u[t] = e - s;
            }),
              m.forEach((e, t) => {
                m[t] = e + s;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: u,
            slidesGrid: m,
            slidesSizesGrid: f,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          Ce(i, "--swiper-centered-offset-before", -u[0] + "px"),
            Ce(
              i,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (p !== d && e.emit("slidesLengthChange"),
          u.length !== g &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          m.length !== w && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          e.emit("slidesUpdated"),
          !(o || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            i = e.el.classList.contains(t);
          p <= s.maxBackfaceHiddenSlides
            ? i || e.el.classList.add(t)
            : i && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let a,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const n = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
              const e = t.activeIndex + a;
              if (e > t.slides.length && !i) break;
              s.push(n(e));
            }
        else s.push(n(t.activeIndex));
        for (a = 0; a < s.length; a += 1)
          if (void 0 !== s[a]) {
            const e = s[a].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
            s -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: a, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let n = -e;
        a && (n = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
        let l = s.spaceBetween;
        "string" == typeof l && l.indexOf("%") >= 0
          ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
          : "string" == typeof l && (l = parseFloat(l));
        for (let o = 0; o < i.length; o += 1) {
          const e = i[o];
          let d = e.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
          const c =
              (n + (s.centeredSlides ? t.minTranslate() : 0) - d) /
              (e.swiperSlideSize + l),
            p =
              (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
              (e.swiperSlideSize + l),
            u = -(n - d),
            m = u + t.slidesSizesGrid[o],
            f = u >= 0 && u <= t.size - t.slidesSizesGrid[o],
            h =
              (u >= 0 && u < t.size - 1) ||
              (m > 1 && m <= t.size) ||
              (u <= 0 && m >= t.size);
          h && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(o)),
            He(e, h, s.slideVisibleClass),
            He(e, f, s.slideFullyVisibleClass),
            (e.progress = a ? -c : c),
            (e.originalProgress = a ? -p : p);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: a, isBeginning: r, isEnd: n, progressLoop: l } = t;
        const o = r,
          d = n;
        if (0 === i) (a = 0), (r = !0), (n = !0);
        else {
          a = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            l = Math.abs(e - t.maxTranslate()) < 1;
          (r = s || a <= 0), (n = l || a >= 1), s && (a = 0), l && (a = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0),
            i = t.getSlideIndexByData(t.slides.length - 1),
            a = t.slidesGrid[s],
            r = t.slidesGrid[i],
            n = t.slidesGrid[t.slidesGrid.length - 1],
            o = Math.abs(e);
          (l = o >= a ? (o - a) / n : (o + n - r) / n), l > 1 && (l -= 1);
        }
        Object.assign(t, {
          progress: a,
          progressLoop: l,
          isBeginning: r,
          isEnd: n,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !o && t.emit("reachBeginning toEdge"),
          n && !d && t.emit("reachEnd toEdge"),
          ((o && !r) || (d && !n)) && t.emit("fromEdge"),
          t.emit("progress", a);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: a } = e,
          r = e.virtual && s.virtual.enabled,
          n = e.grid && s.grid && s.grid.rows > 1,
          l = (e) => Le(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let o, d, c;
        if (r)
          if (s.loop) {
            let t = a - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (o = l(`[data-swiper-slide-index="${t}"]`));
          } else o = l(`[data-swiper-slide-index="${a}"]`);
        else
          n
            ? ((o = t.filter((e) => e.column === a)[0]),
              (c = t.filter((e) => e.column === a + 1)[0]),
              (d = t.filter((e) => e.column === a - 1)[0]))
            : (o = t[a]);
        o &&
          (n ||
            ((c = (function (e, t) {
              const s = [];
              for (; e.nextElementSibling; ) {
                const i = e.nextElementSibling;
                t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
              }
              return s;
            })(o, `.${s.slideClass}, swiper-slide`)[0]),
            s.loop && !c && (c = t[0]),
            (d = (function (e, t) {
              const s = [];
              for (; e.previousElementSibling; ) {
                const i = e.previousElementSibling;
                t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
              }
              return s;
            })(o, `.${s.slideClass}, swiper-slide`)[0]),
            s.loop && 0 === !d && (d = t[t.length - 1]))),
          t.forEach((e) => {
            je(e, e === o, s.slideActiveClass),
              je(e, e === c, s.slideNextClass),
              je(e, e === d, s.slidePrevClass);
          }),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: a,
            activeIndex: r,
            realIndex: n,
            snapIndex: l,
          } = t;
        let o,
          d = e;
        const c = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === d &&
            (d = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let a;
              for (let r = 0; r < t.length; r += 1)
                void 0 !== t[r + 1]
                  ? i >= t[r] && i < t[r + 1] - (t[r + 1] - t[r]) / 2
                    ? (a = r)
                    : i >= t[r] && i < t[r + 1] && (a = r + 1)
                  : i >= t[r] && (a = r);
              return (
                s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          o = i.indexOf(s);
        else {
          const e = Math.min(a.slidesPerGroupSkip, d);
          o = e + Math.floor((d - e) / a.slidesPerGroup);
        }
        if ((o >= i.length && (o = i.length - 1), d === r && !t.params.loop))
          return void (
            o !== l && ((t.snapIndex = o), t.emit("snapIndexChange"))
          );
        if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled)
          return void (t.realIndex = c(d));
        const p = t.grid && a.grid && a.grid.rows > 1;
        let u;
        if (t.virtual && a.virtual.enabled && a.loop) u = c(d);
        else if (p) {
          const e = t.slides.filter((e) => e.column === d)[0];
          let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
          Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
            (u = Math.floor(s / a.grid.rows));
        } else if (t.slides[d]) {
          const e = t.slides[d].getAttribute("data-swiper-slide-index");
          u = e ? parseInt(e, 10) : d;
        } else u = d;
        Object.assign(t, {
          previousSnapIndex: l,
          snapIndex: o,
          previousRealIndex: n,
          realIndex: u,
          previousIndex: r,
          activeIndex: d,
        }),
          t.initialized && We(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            (n !== u && t.emit("realIndexChange"), t.emit("slideChange"));
      },
      updateClickedSlide: function (e, t) {
        const s = this,
          i = s.params;
        let a = e.closest(`.${i.slideClass}, swiper-slide`);
        !a &&
          s.isElement &&
          t &&
          t.length > 1 &&
          t.includes(e) &&
          [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
            !a &&
              e.matches &&
              e.matches(`.${i.slideClass}, swiper-slide`) &&
              (a = e);
          });
        let r,
          n = !1;
        if (a)
          for (let l = 0; l < s.slides.length; l += 1)
            if (s.slides[l] === a) {
              (n = !0), (r = l);
              break;
            }
        if (!a || !n)
          return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
        (s.clickedSlide = a),
          s.virtual && s.params.virtual.enabled
            ? (s.clickedIndex = parseInt(
                a.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (s.clickedIndex = r),
          i.slideToClickedSlide &&
            void 0 !== s.clickedIndex &&
            s.clickedIndex !== s.activeIndex &&
            s.slideToClickedSlide();
      },
    },
    translate: {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: a } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let r = Te(a, e);
        return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: a, wrapperEl: r, progress: n } = s;
        let l,
          o = 0,
          d = 0;
        s.isHorizontal() ? (o = i ? -e : e) : (d = e),
          a.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? o : d),
          a.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -o : -d)
            : a.virtualTranslate ||
              (s.isHorizontal()
                ? (o -= s.cssOverflowAdjustment())
                : (d -= s.cssOverflowAdjustment()),
              (r.style.transform = `translate3d(${o}px, ${d}px, 0px)`));
        const c = s.maxTranslate() - s.minTranslate();
        (l = 0 === c ? 0 : (e - s.minTranslate()) / c),
          l !== n && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, i, a) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === i && (i = !0);
        const r = this,
          { params: n, wrapperEl: l } = r;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        const o = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = i && e > o ? o : i && e < d ? d : e),
          r.updateProgress(c),
          n.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                Pe({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, a),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, a),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.wrapperEl.removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      (r.animating = !1),
                      s && r.emit("transitionEnd"));
                  }),
                r.wrapperEl.addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    },
    transition: {
      setTransition: function (e, t) {
        const s = this;
        s.params.cssMode ||
          ((s.wrapperEl.style.transitionDuration = `${e}ms`),
          (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
          s.emit("setTransition", e, t);
      },
      transitionStart: function (e, t) {
        void 0 === e && (e = !0);
        const s = this,
          { params: i } = s;
        i.cssMode ||
          (i.autoHeight && s.updateAutoHeight(),
          Xe({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
      },
      transitionEnd: function (e, t) {
        void 0 === e && (e = !0);
        const s = this,
          { params: i } = s;
        (s.animating = !1),
          i.cssMode ||
            (s.setTransition(0),
            Xe({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
      },
    },
    slide: {
      slideTo: function (e, t, s, i, a) {
        void 0 === e && (e = 0),
          void 0 === s && (s = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const r = this;
        let n = e;
        n < 0 && (n = 0);
        const {
          params: l,
          snapGrid: o,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: m,
          enabled: f,
        } = r;
        if (
          (!f && !i && !a) ||
          r.destroyed ||
          (r.animating && l.preventInteractionOnTransition)
        )
          return !1;
        void 0 === t && (t = r.params.speed);
        const h = Math.min(r.params.slidesPerGroupSkip, n);
        let v = h + Math.floor((n - h) / r.params.slidesPerGroup);
        v >= o.length && (v = o.length - 1);
        const g = -o[v];
        if (l.normalizeSlideIndex)
          for (let y = 0; y < d.length; y += 1) {
            const e = -Math.floor(100 * g),
              t = Math.floor(100 * d[y]),
              s = Math.floor(100 * d[y + 1]);
            void 0 !== d[y + 1]
              ? e >= t && e < s - (s - t) / 2
                ? (n = y)
                : e >= t && e < s && (n = y + 1)
              : e >= t && (n = y);
          }
        if (r.initialized && n !== p) {
          if (
            !r.allowSlideNext &&
            (u
              ? g > r.translate && g > r.minTranslate()
              : g < r.translate && g < r.minTranslate())
          )
            return !1;
          if (
            !r.allowSlidePrev &&
            g > r.translate &&
            g > r.maxTranslate() &&
            (p || 0) !== n
          )
            return !1;
        }
        let w;
        n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
          r.updateProgress(g),
          (w = n > p ? "next" : n < p ? "prev" : "reset");
        const b = r.virtual && r.params.virtual.enabled;
        if (
          !(b && a) &&
          ((u && -g === r.translate) || (!u && g === r.translate))
        )
          return (
            r.updateActiveIndex(n),
            l.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== l.effect && r.setTranslate(g),
            "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)),
            !1
          );
        if (l.cssMode) {
          const e = r.isHorizontal(),
            s = u ? g : -g;
          if (0 === t)
            b &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              b && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                ? ((r._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    m[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (m[e ? "scrollLeft" : "scrollTop"] = s),
              b &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._immediateVirtual = !1);
                });
          else {
            if (!r.support.smoothScroll)
              return (
                Pe({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            m.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(g),
          r.updateActiveIndex(n),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(s, w),
          0 === t
            ? r.transitionEnd(s, w)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, w));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === s && (s = !0),
          "string" == typeof e)
        ) {
          e = parseInt(e, 10);
        }
        const a = this;
        if (a.destroyed) return;
        void 0 === t && (t = a.params.speed);
        const r = a.grid && a.params.grid && a.params.grid.rows > 1;
        let n = e;
        if (a.params.loop)
          if (a.virtual && a.params.virtual.enabled)
            n += a.virtual.slidesBefore;
          else {
            let e;
            if (r) {
              const t = n * a.params.grid.rows;
              e = a.slides.filter(
                (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
              )[0].column;
            } else e = a.getSlideIndexByData(n);
            const t = r
                ? Math.ceil(a.slides.length / a.params.grid.rows)
                : a.slides.length,
              { centeredSlides: s } = a.params;
            let l = a.params.slidesPerView;
            "auto" === l
              ? (l = a.slidesPerViewDynamic())
              : ((l = Math.ceil(parseFloat(a.params.slidesPerView, 10))),
                s && l % 2 == 0 && (l += 1));
            let o = t - e < l;
            if (
              (s && (o = o || e < Math.ceil(l / 2)),
              i && s && "auto" !== a.params.slidesPerView && !r && (o = !1),
              o)
            ) {
              const i = s
                ? e < a.activeIndex
                  ? "prev"
                  : "next"
                : e - a.activeIndex - 1 < a.params.slidesPerView
                ? "next"
                : "prev";
              a.loopFix({
                direction: i,
                slideTo: !0,
                activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                slideRealIndex: "next" === i ? a.realIndex : void 0,
              });
            }
            if (r) {
              const e = n * a.params.grid.rows;
              n = a.slides.filter(
                (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
              )[0].column;
            } else n = a.getSlideIndexByData(n);
          }
        return (
          requestAnimationFrame(() => {
            a.slideTo(n, t, s, i);
          }),
          a
        );
      },
      slideNext: function (e, t, s) {
        void 0 === t && (t = !0);
        const i = this,
          { enabled: a, params: r, animating: n } = i;
        if (!a || i.destroyed) return i;
        void 0 === e && (e = i.params.speed);
        let l = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l,
          d = i.virtual && r.virtual.enabled;
        if (r.loop) {
          if (n && !d && r.loopPreventsSliding) return !1;
          if (
            (i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft),
            i.activeIndex === i.slides.length - 1 && r.cssMode)
          )
            return (
              requestAnimationFrame(() => {
                i.slideTo(i.activeIndex + o, e, t, s);
              }),
              !0
            );
        }
        return r.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + o, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === t && (t = !0);
        const i = this,
          {
            params: a,
            snapGrid: r,
            slidesGrid: n,
            rtlTranslate: l,
            enabled: o,
            animating: d,
          } = i;
        if (!o || i.destroyed) return i;
        void 0 === e && (e = i.params.speed);
        const c = i.virtual && a.virtual.enabled;
        if (a.loop) {
          if (d && !c && a.loopPreventsSliding) return !1;
          i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function p(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = p(l ? i.translate : -i.translate),
          m = r.map((e) => p(e));
        let f = r[m.indexOf(u) - 1];
        if (void 0 === f && a.cssMode) {
          let e;
          r.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (f = r[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== f &&
            ((h = n.indexOf(f)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === a.slidesPerView &&
              1 === a.slidesPerGroup &&
              a.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          a.rewind && i.isBeginning)
        ) {
          const a =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(a, e, t, s);
        }
        return a.loop && 0 === i.activeIndex && a.cssMode
          ? (requestAnimationFrame(() => {
              i.slideTo(h, e, t, s);
            }),
            !0)
          : i.slideTo(h, e, t, s);
      },
      slideReset: function (e, t, s) {
        void 0 === t && (t = !0);
        const i = this;
        if (!i.destroyed)
          return (
            void 0 === e && (e = i.params.speed),
            i.slideTo(i.activeIndex, e, t, s)
          );
      },
      slideToClosest: function (e, t, s, i) {
        void 0 === t && (t = !0), void 0 === i && (i = 0.5);
        const a = this;
        if (a.destroyed) return;
        void 0 === e && (e = a.params.speed);
        let r = a.activeIndex;
        const n = Math.min(a.params.slidesPerGroupSkip, r),
          l = n + Math.floor((r - n) / a.params.slidesPerGroup),
          o = a.rtlTranslate ? a.translate : -a.translate;
        if (o >= a.snapGrid[l]) {
          const e = a.snapGrid[l];
          o - e > (a.snapGrid[l + 1] - e) * i && (r += a.params.slidesPerGroup);
        } else {
          const e = a.snapGrid[l - 1];
          o - e <= (a.snapGrid[l] - e) * i && (r -= a.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, a.slidesGrid.length - 1)),
          a.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this;
        if (e.destroyed) return;
        const { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let a,
          r = e.clickedIndex;
        const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (a = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = e.getSlideIndex(
                    Le(s, `${n}[data-swiper-slide-index="${a}"]`)[0]
                  )),
                  ye(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  Le(s, `${n}[data-swiper-slide-index="${a}"]`)[0]
                )),
                ye(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    },
    loop: {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        const a = () => {
            Le(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t);
            });
          },
          r = t.grid && s.grid && s.grid.rows > 1,
          n = s.slidesPerGroup * (r ? s.grid.rows : 1),
          l = t.slides.length % n != 0,
          o = r && t.slides.length % s.grid.rows != 0,
          d = (e) => {
            for (let i = 0; i < e; i += 1) {
              const e = t.isElement
                ? Ie("swiper-slide", [s.slideBlankClass])
                : Ie("div", [s.slideClass, s.slideBlankClass]);
              t.slidesEl.append(e);
            }
          };
        if (l) {
          if (s.loopAddBlankSlides) {
            d(n - (t.slides.length % n)), t.recalcSlides(), t.updateSlides();
          } else ke();
          a();
        } else if (o) {
          if (s.loopAddBlankSlides) {
            d(s.grid.rows - (t.slides.length % s.grid.rows)),
              t.recalcSlides(),
              t.updateSlides();
          } else ke();
          a();
        } else a();
        t.loopFix({
          slideRealIndex: e,
          direction: s.centeredSlides ? void 0 : "next",
        });
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: s = !0,
          direction: i,
          setTranslate: a,
          activeSlideIndex: r,
          byController: n,
          byMousewheel: l,
        } = void 0 === e ? {} : e;
        const c = this;
        if (!c.params.loop) return;
        c.emit("beforeLoopFix");
        const {
            slides: p,
            allowSlidePrev: u,
            allowSlideNext: m,
            slidesEl: f,
            params: h,
          } = c,
          { centeredSlides: v } = h;
        if (
          ((c.allowSlidePrev = !0),
          (c.allowSlideNext = !0),
          c.virtual && h.virtual.enabled)
        )
          return (
            s &&
              (h.centeredSlides || 0 !== c.snapIndex
                ? h.centeredSlides && c.snapIndex < h.slidesPerView
                  ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
                  : c.snapIndex === c.snapGrid.length - 1 &&
                    c.slideTo(c.virtual.slidesBefore, 0, !1, !0)
                : c.slideTo(c.virtual.slides.length, 0, !1, !0)),
            (c.allowSlidePrev = u),
            (c.allowSlideNext = m),
            void c.emit("loopFix")
          );
        let g = h.slidesPerView;
        "auto" === g
          ? (g = c.slidesPerViewDynamic())
          : ((g = Math.ceil(parseFloat(h.slidesPerView, 10))),
            v && g % 2 == 0 && (g += 1));
        const w = h.slidesPerGroupAuto ? g : h.slidesPerGroup;
        let b = w;
        b % w != 0 && (b += w - (b % w)),
          (b += h.loopAdditionalSlides),
          (c.loopedSlides = b);
        const y = c.grid && h.grid && h.grid.rows > 1;
        (p.length < g + b || (y && "row" === h.grid.fill)) && ke();
        const S = [],
          T = [];
        let E = c.activeIndex;
        void 0 === r
          ? (r = c.getSlideIndex(
              p.filter((e) => e.classList.contains(h.slideActiveClass))[0]
            ))
          : (E = r);
        const x = "next" === i || !i,
          C = "prev" === i || !i;
        let P = 0,
          M = 0;
        const L = y ? Math.ceil(p.length / h.grid.rows) : p.length,
          k = (y ? p[r].column : r) + (v && void 0 === a ? -g / 2 + 0.5 : 0);
        if (k < b) {
          P = Math.max(b - k, w);
          for (let e = 0; e < b - k; e += 1) {
            const t = e - Math.floor(e / L) * L;
            if (y) {
              const e = L - t - 1;
              for (let t = p.length - 1; t >= 0; t -= 1)
                p[t].column === e && S.push(t);
            } else S.push(L - t - 1);
          }
        } else if (k + g > L - b) {
          M = Math.max(k - (L - 2 * b), w);
          for (let e = 0; e < M; e += 1) {
            const t = e - Math.floor(e / L) * L;
            y
              ? p.forEach((e, s) => {
                  e.column === t && T.push(s);
                })
              : T.push(t);
          }
        }
        if (
          ((c.__preventObserver__ = !0),
          requestAnimationFrame(() => {
            c.__preventObserver__ = !1;
          }),
          C &&
            S.forEach((e) => {
              (p[e].swiperLoopMoveDOM = !0),
                f.prepend(p[e]),
                (p[e].swiperLoopMoveDOM = !1);
            }),
          x &&
            T.forEach((e) => {
              (p[e].swiperLoopMoveDOM = !0),
                f.append(p[e]),
                (p[e].swiperLoopMoveDOM = !1);
            }),
          c.recalcSlides(),
          "auto" === h.slidesPerView
            ? c.updateSlides()
            : y &&
              ((S.length > 0 && C) || (T.length > 0 && x)) &&
              c.slides.forEach((e, t) => {
                c.grid.updateSlide(t, e, c.slides);
              }),
          h.watchSlidesProgress && c.updateSlidesOffset(),
          s)
        )
          if (S.length > 0 && C) {
            if (void 0 === t) {
              const e = c.slidesGrid[E],
                t = c.slidesGrid[E + P] - e;
              l
                ? c.setTranslate(c.translate - t)
                : (c.slideTo(E + Math.ceil(P), 0, !1, !0),
                  a &&
                    ((c.touchEventsData.startTranslate =
                      c.touchEventsData.startTranslate - t),
                    (c.touchEventsData.currentTranslate =
                      c.touchEventsData.currentTranslate - t)));
            } else if (a) {
              const e = y ? S.length / h.grid.rows : S.length;
              c.slideTo(c.activeIndex + e, 0, !1, !0),
                (c.touchEventsData.currentTranslate = c.translate);
            }
          } else if (T.length > 0 && x)
            if (void 0 === t) {
              const e = c.slidesGrid[E],
                t = c.slidesGrid[E - M] - e;
              l
                ? c.setTranslate(c.translate - t)
                : (c.slideTo(E - M, 0, !1, !0),
                  a &&
                    ((c.touchEventsData.startTranslate =
                      c.touchEventsData.startTranslate - t),
                    (c.touchEventsData.currentTranslate =
                      c.touchEventsData.currentTranslate - t)));
            } else {
              const e = y ? T.length / h.grid.rows : T.length;
              c.slideTo(c.activeIndex - e, 0, !1, !0);
            }
        if (
          ((c.allowSlidePrev = u),
          (c.allowSlideNext = m),
          c.controller && c.controller.control && !n)
        ) {
          const e = {
            slideRealIndex: t,
            direction: i,
            setTranslate: a,
            activeSlideIndex: r,
            byController: !0,
          };
          Array.isArray(c.controller.control)
            ? c.controller.control.forEach((t) => {
                !t.destroyed &&
                  t.params.loop &&
                  t.loopFix(
                    d(o({}, e), {
                      slideTo: t.params.slidesPerView === h.slidesPerView && s,
                    })
                  );
              })
            : c.controller.control instanceof c.constructor &&
              c.controller.control.params.loop &&
              c.controller.control.loopFix(
                d(o({}, e), {
                  slideTo:
                    c.controller.control.params.slidesPerView ===
                      h.slidesPerView && s,
                })
              );
        }
        c.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          i[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          i.forEach((e) => {
            s.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    },
    grabCursor: {
      setGrabCursor: function (e) {
        const t = this;
        if (
          !t.params.simulateTouch ||
          (t.params.watchOverflow && t.isLocked) ||
          t.params.cssMode
        )
          return;
        const s =
          "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        t.isElement && (t.__preventObserver__ = !0),
          (s.style.cursor = "move"),
          (s.style.cursor = e ? "grabbing" : "grab"),
          t.isElement &&
            requestAnimationFrame(() => {
              t.__preventObserver__ = !1;
            });
      },
      unsetGrabCursor: function () {
        const e = this;
        (e.params.watchOverflow && e.isLocked) ||
          e.params.cssMode ||
          (e.isElement && (e.__preventObserver__ = !0),
          (e[
            "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
          ].style.cursor = ""),
          e.isElement &&
            requestAnimationFrame(() => {
              e.__preventObserver__ = !1;
            }));
      },
    },
    events: {
      attachEvents: function () {
        const e = this,
          { params: t } = e;
        (e.onTouchStart = Ue.bind(e)),
          (e.onTouchMove = Ke.bind(e)),
          (e.onTouchEnd = Je.bind(e)),
          (e.onDocumentTouchStart = st.bind(e)),
          t.cssMode && (e.onScroll = et.bind(e)),
          (e.onClick = Ze.bind(e)),
          (e.onLoad = tt.bind(e)),
          it(e, "on");
      },
      detachEvents: function () {
        it(this, "off");
      },
    },
    breakpoints: {
      setBreakpoint: function () {
        const e = this,
          { realIndex: t, initialized: s, params: i, el: a } = e,
          r = i.breakpoints;
        if (!r || (r && 0 === Object.keys(r).length)) return;
        const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
        if (!n || e.currentBreakpoint === n) return;
        const l = (n in r ? r[n] : void 0) || e.originalParams,
          o = at(e, i),
          d = at(e, l),
          c = e.params.grabCursor,
          p = l.grabCursor,
          u = i.enabled;
        o && !d
          ? (a.classList.remove(
              `${i.containerModifierClass}grid`,
              `${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !o &&
            d &&
            (a.classList.add(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
              a.classList.add(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          c && !p ? e.unsetGrabCursor() : !c && p && e.setGrabCursor(),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            if (void 0 === l[t]) return;
            const s = i[t] && i[t].enabled,
              a = l[t] && l[t].enabled;
            s && !a && e[t].disable(), !s && a && e[t].enable();
          });
        const m = l.direction && l.direction !== i.direction,
          f = i.loop && (l.slidesPerView !== i.slidesPerView || m),
          h = i.loop;
        m && s && e.changeDirection(), xe(e.params, l);
        const v = e.params.enabled,
          g = e.params.loop;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !v ? e.disable() : !u && v && e.enable(),
          (e.currentBreakpoint = n),
          e.emit("_beforeBreakpoint", l),
          s &&
            (f
              ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
              : !h && g
              ? (e.loopCreate(t), e.updateSlides())
              : h && !g && e.loopDestroy()),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, s) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
          return;
        let i = !1;
        const a = be(),
          r = "window" === t ? a.innerHeight : s.clientHeight,
          n = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let l = 0; l < n.length; l += 1) {
          const { point: e, value: r } = n[l];
          "window" === t
            ? a.matchMedia(`(min-width: ${r}px)`).matches && (i = e)
            : r <= s.clientWidth && (i = e);
        }
        return i || "max";
      },
    },
    checkOverflow: {
      checkOverflow: function () {
        const e = this,
          { isLocked: t, params: s } = e,
          { slidesOffsetBefore: i } = s;
        if (i) {
          const t = e.slides.length - 1,
            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
          e.isLocked = e.size > s;
        } else e.isLocked = 1 === e.snapGrid.length;
        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
          !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
          t && t !== e.isLocked && (e.isEnd = !1),
          t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      },
    },
    classes: {
      addClasses: function () {
        const e = this,
          { classNames: t, params: s, rtl: i, el: a, device: r } = e,
          n = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && s.push(t + i);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: i },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
              { "watch-progress": s.watchSlidesProgress },
            ],
            s.containerModifierClass
          );
        t.push(...n), a.classList.add(...t), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { el: e, classNames: t } = this;
        e &&
          "string" != typeof e &&
          (e.classList.remove(...t), this.emitContainerClasses());
      },
    },
  },
  ot = {};
class dt {
  constructor() {
    let e, t;
    for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++)
      i[a] = arguments[a];
    1 === i.length &&
    i[0].constructor &&
    "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
      ? (t = i[0])
      : ([e, t] = i),
      t || (t = {}),
      (t = xe({}, t)),
      e && !t.el && (t.el = e);
    const r = ge();
    if (
      t.el &&
      "string" == typeof t.el &&
      r.querySelectorAll(t.el).length > 1
    ) {
      const e = [];
      return (
        r.querySelectorAll(t.el).forEach((s) => {
          const i = xe({}, t, { el: s });
          e.push(new dt(i));
        }),
        e
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = $e()),
      (l.device = Ne({ userAgent: t.userAgent })),
      (l.browser = Fe()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
    const o = {};
    l.modules.forEach((e) => {
      e({
        params: t,
        swiper: l,
        extendParams: nt(t, o),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const d = xe({}, rt, o);
    return (
      (l.params = xe({}, d, ot, t)),
      (l.originalParams = xe({}, l.params)),
      (l.passedParams = xe({}, t)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((e) => {
          l.on(e, l.params.on[e]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: () => "horizontal" === l.params.direction,
        isVertical: () => "vertical" === l.params.direction,
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / n(2, 23)) * n(2, 23);
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: t, params: s } = this,
      i = Ae(Le(t, `.${s.slideClass}, swiper-slide`)[0]);
    return Ae(e) - i;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
      )[0]
    );
  }
  recalcSlides() {
    const { slidesEl: e, params: t } = this;
    this.slides = Le(e, `.${t.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, t) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const i = s.minTranslate(),
      a = (s.maxTranslate() - i) * e + i;
    s.translateTo(a, void 0 === t ? 0 : t),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className
      .split(" ")
      .filter(
        (t) =>
          0 === t.indexOf("swiper") ||
          0 === t.indexOf(e.params.containerModifierClass)
      );
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach((s) => {
      const i = e.getSlideClasses(s);
      t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
    }),
      e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e, t) {
    void 0 === e && (e = "current"), void 0 === t && (t = !1);
    const {
      params: s,
      slides: i,
      slidesGrid: a,
      slidesSizesGrid: r,
      size: n,
      activeIndex: l,
    } = this;
    let o = 1;
    if ("number" == typeof s.slidesPerView) return s.slidesPerView;
    if (s.centeredSlides) {
      let e,
        t = i[l] ? Math.ceil(i[l].swiperSlideSize) : 0;
      for (let s = l + 1; s < i.length; s += 1)
        i[s] &&
          !e &&
          ((t += Math.ceil(i[s].swiperSlideSize)), (o += 1), t > n && (e = !0));
      for (let s = l - 1; s >= 0; s -= 1)
        i[s] &&
          !e &&
          ((t += i[s].swiperSlideSize), (o += 1), t > n && (e = !0));
    } else if ("current" === e)
      for (let d = l + 1; d < i.length; d += 1) {
        (t ? a[d] + r[d] - a[l] < n : a[d] - a[l] < n) && (o += 1);
      }
    else
      for (let d = l - 1; d >= 0; d -= 1) {
        a[l] - a[d] < n && (o += 1);
      }
    return o;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: t, params: s } = e;
    function i() {
      const t = e.rtlTranslate ? -1 * e.translate : e.translate,
        s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
      e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let a;
    if (
      (s.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
        t.complete && Re(e, t);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses(),
      s.freeMode && s.freeMode.enabled && !s.cssMode)
    )
      i(), s.autoHeight && e.updateAutoHeight();
    else {
      if (
        ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
        e.isEnd &&
        !s.centeredSlides
      ) {
        const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        a = e.slideTo(t.length - 1, 0, !1, !0);
      } else a = e.slideTo(e.activeIndex, 0, !1, !0);
      a || i();
    }
    s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t) {
    void 0 === t && (t = !0);
    const s = this,
      i = s.params.direction;
    return (
      e || (e = "horizontal" === i ? "vertical" : "horizontal"),
      e === i ||
        ("horizontal" !== e && "vertical" !== e) ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        (s.params.direction = e),
        s.slides.forEach((t) => {
          "vertical" === e ? (t.style.width = "") : (t.style.height = "");
        }),
        s.emit("changeDirection"),
        t && s.update()),
      s
    );
  }
  changeLanguageDirection(e) {
    const t = this;
    (t.rtl && "rtl" === e) ||
      (!t.rtl && "ltr" === e) ||
      ((t.rtl = "rtl" === e),
      (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
      t.rtl
        ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "rtl"))
        : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "ltr")),
      t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let s = e || t.params.el;
    if (("string" == typeof s && (s = document.querySelector(s)), !s))
      return !1;
    (s.swiper = t),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName ===
          t.params.swiperElementNodeName.toUpperCase() &&
        (t.isElement = !0);
    const i = () =>
      `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a = (() => {
      if (s && s.shadowRoot && s.shadowRoot.querySelector) {
        return s.shadowRoot.querySelector(i());
      }
      return Le(s, i())[0];
    })();
    return (
      !a &&
        t.params.createElements &&
        ((a = Ie("div", t.params.wrapperClass)),
        s.append(a),
        Le(s, `.${t.params.slideClass}`).forEach((e) => {
          a.append(e);
        })),
      Object.assign(t, {
        el: s,
        wrapperEl: a,
        slidesEl:
          t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : a,
        hostEl: t.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: "rtl" === s.dir.toLowerCase() || "rtl" === Oe(s, "direction"),
        rtlTranslate:
          "horizontal" === t.params.direction &&
          ("rtl" === s.dir.toLowerCase() || "rtl" === Oe(s, "direction")),
        wrongRTL: "-webkit-box" === Oe(a, "display"),
      }),
      !0
    );
  }
  init(e) {
    const t = this;
    if (t.initialized) return t;
    if (!1 === t.mount(e)) return t;
    t.emit("beforeInit"),
      t.params.breakpoints && t.setBreakpoint(),
      t.addClasses(),
      t.updateSize(),
      t.updateSlides(),
      t.params.watchOverflow && t.checkOverflow(),
      t.params.grabCursor && t.enabled && t.setGrabCursor(),
      t.params.loop && t.virtual && t.params.virtual.enabled
        ? t.slideTo(
            t.params.initialSlide + t.virtual.slidesBefore,
            0,
            t.params.runCallbacksOnInit,
            !1,
            !0
          )
        : t.slideTo(
            t.params.initialSlide,
            0,
            t.params.runCallbacksOnInit,
            !1,
            !0
          ),
      t.params.loop && t.loopCreate(),
      t.attachEvents();
    const s = [...t.el.querySelectorAll('[loading="lazy"]')];
    return (
      t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
      s.forEach((e) => {
        e.complete
          ? Re(t, e)
          : e.addEventListener("load", (e) => {
              Re(t, e.target);
            });
      }),
      We(t),
      (t.initialized = !0),
      We(t),
      t.emit("init"),
      t.emit("afterInit"),
      t
    );
  }
  destroy(e, t) {
    void 0 === e && (e = !0), void 0 === t && (t = !0);
    const s = this,
      { params: i, el: a, wrapperEl: r, slides: n } = s;
    return (
      void 0 === s.params ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        i.loop && s.loopDestroy(),
        t &&
          (s.removeClasses(),
          a && "string" != typeof a && a.removeAttribute("style"),
          r && r.removeAttribute("style"),
          n &&
            n.length &&
            n.forEach((e) => {
              e.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                e.removeAttribute("style"),
                e.removeAttribute("data-swiper-slide-index");
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((e) => {
          s.off(e);
        }),
        !1 !== e &&
          (s.el && "string" != typeof s.el && (s.el.swiper = null),
          (function (e) {
            const t = e;
            Object.keys(t).forEach((e) => {
              try {
                t[e] = null;
              } catch (s) {}
              try {
                delete t[e];
              } catch (s) {}
            });
          })(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    xe(ot, e);
  }
  static get extendedDefaults() {
    return ot;
  }
  static get defaults() {
    return rt;
  }
  static installModule(e) {
    dt.prototype.__modules__ || (dt.prototype.__modules__ = []);
    const t = dt.prototype.__modules__;
    "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((e) => dt.installModule(e)), dt)
      : (dt.installModule(e), dt);
  }
}
function ct(e, t, s, i) {
  return (
    e.params.createElements &&
      Object.keys(i).forEach((a) => {
        if (!s[a] && !0 === s.auto) {
          let r = Le(e.el, `.${i[a]}`)[0];
          r || ((r = Ie("div", i[a])), (r.className = i[a]), e.el.append(r)),
            (s[a] = r),
            (t[a] = r);
        }
      }),
    s
  );
}
function pt(e) {
  return (
    void 0 === e && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function ut(e, t) {
  const s = Me(t);
  return (
    s !== t &&
      ((s.style.backfaceVisibility = "hidden"),
      (s.style["-webkit-backface-visibility"] = "hidden")),
    s
  );
}
function mt(e) {
  let { swiper: t, duration: s, transformElements: i, allSlides: a } = e;
  const { activeIndex: r } = t;
  if (t.params.virtualTranslate && 0 !== s) {
    let e,
      s = !1;
    (e = a
      ? i
      : i.filter((e) => {
          const s = e.classList.contains("swiper-slide-transform")
            ? ((e) => {
                if (!e.parentElement)
                  return t.slides.filter(
                    (t) => t.shadowRoot && t.shadowRoot === e.parentNode
                  )[0];
                return e.parentElement;
              })(e)
            : e;
          return t.getSlideIndex(s) === r;
        })),
      e.forEach((e) => {
        !(function (e, t) {
          t &&
            e.addEventListener("transitionend", function s(i) {
              i.target === e &&
                (t.call(e, i), e.removeEventListener("transitionend", s));
            });
        })(e, () => {
          if (s) return;
          if (!t || t.destroyed) return;
          (s = !0), (t.animating = !1);
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          t.wrapperEl.dispatchEvent(e);
        });
      });
  }
}
function ft() {
  const e = new dt(".mySwiperHomeHero", {
    effect: "fade",
    autoplay: { delay: 2500, disableOnInteraction: !1 },
    loop: !0,
    navigation: {
      nextEl: ".swiper-button-next-hero",
      prevEl: ".swiper-button-prev-hero",
    },
    pagination: { el: ".swiper-pagination-hero", clickable: !0 },
  });
  e.on("slideChange", () => {
    const t = e.slides[e.activeIndex];
    if (t) {
      const e = t.querySelector(".slide-image");
      e &&
        (e.classList.remove("animate-slideLeftRight"),
        setTimeout(() => {
          e.classList.add("animate-slideLeftRight");
        }, 10));
    }
    document.querySelectorAll(".text-content").forEach((e) => {
      e.classList.remove("animate-textSlides");
    });
    const s = t.querySelector(".text-content");
    s && s.classList.add("animate-textSlides");
  }),
    new dt(".mySwiperHomeActivities", {
      centeredSlides: !0,
      slidesPerView: 1,
      loop: !0,
      mousewheel: !1,
      keyboard: { enabled: !0 },
      navigation: { nextEl: ".next-facility", prevEl: ".prev-facility" },
      breakpoints: {
        430: { slidesPerView: 1.45, spaceBetween: 20 },
        640: { slidesPerView: 1.45, spaceBetween: 40 },
        1024: { slidesPerView: 1.45, spaceBetween: 40 },
      },
    }),
    new dt(".mySwiperAwards", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: { nextEl: ".next-awards", prevEl: ".prev-awards" },
      speed: 1e3,
      breakpoints: {
        430: { slidesPerView: 3, spaceBetween: 20 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 6, spaceBetween: 0 },
      },
    }),
    new dt(".mySwiperHomeOffers", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: { el: ".swiper-pagination", clickable: !0 },
      slidesPerView: 1,
      spaceBetween: 10,
    }),
    new dt(".mySwipers", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: { el: ".pagin", clickable: !0 },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
      },
    }),
    new dt(".mySwiperHomeRoomMobile", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: { el: ".swiper-pagination-roommobile", type: "fraction" },
      navigation: {
        nextEl: ".swiper-button-next-roommobile",
        prevEl: ".swiper-button-prev-roommobile",
      },
      breakpoints: {
        430: { slidesPerView: 1.3, spaceBetween: 20 },
        640: { slidesPerView: 1.25, spaceBetween: 40 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 5, spaceBetween: 50 },
      },
    }),
    new dt(".mySwiperHomeOffersMobile", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: { el: ".swiper-pagination-offersmobile", type: "fraction" },
      navigation: {
        nextEl: ".swiper-button-next-offersmobile",
        prevEl: ".swiper-button-prev-offersmobile",
      },
      breakpoints: {
        430: { slidesPerView: 1.3, spaceBetween: 20 },
        640: { slidesPerView: 1.25, spaceBetween: 40 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 5, spaceBetween: 50 },
      },
    });
}
function ht() {
  new dt(".mySwiperAccommodationThub", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
    new dt(".mySwiperAllOffers", {
      centeredSlides: !0,
      slidesPerView: 1,
      loop: !0,
      mousewheel: !1,
      keyboard: { enabled: !0 },
      navigation: { nextEl: ".next-facility", prevEl: ".prev-facility" },
      breakpoints: {
        640: { slidesPerView: 1.25, spaceBetween: 40 },
        1024: { slidesPerView: 2, spaceBetween: 40 },
      },
    }),
    new dt(".mySwiperRoomImg", {
      centeredSlides: !0,
      slidesPerView: 1,
      loop: !0,
      speed: 1e3,
      mousewheel: !1,
      keyboard: { enabled: !0 },
      navigation: { nextEl: ".next-facility", prevEl: ".prev-facility" },
      breakpoints: {
        430: { slidesPerView: 1.3, spaceBetween: 20 },
        640: { slidesPerView: 1.25, spaceBetween: 40 },
        1024: { slidesPerView: 1.3, spaceBetween: 40 },
      },
    }),
    new dt(".mySwiperFacilitiesImg", {
      slidesPerView: 1,
      mousewheel: !1,
      keyboard: { enabled: !0 },
      navigation: { nextEl: ".next-facilityImg", prevEl: ".prev-facilityImg" },
      breakpoints: {
        430: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 2.5, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      },
    }),
    new dt(".mySwiperAllRooms", {
      slidesPerView: 1,
      mousewheel: !1,
      keyboard: { enabled: !0 },
      navigation: { nextEl: ".next-facility", prevEl: ".prev-facility" },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 40 },
        1024: { slidesPerView: 4, spaceBetween: 40 },
      },
    });
}
function vt() {
  document.querySelectorAll(".mySwiperOfferList").forEach((e) => {
    new dt(e, {
      navigation: {
        nextEl: e.getAttribute("data-next"),
        prevEl: e.getAttribute("data-prev"),
      },
    });
  }),
    new dt(".mySwiperOfferThub", {
      navigation: { nextEl: ".next-offerImg", prevEl: ".prev-offerImg" },
    });
}
function gt() {
  new dt(".mySwiperPopup", {
    navigation: {
      nextEl: ".swiper-button-next-popup",
      prevEl: ".swiper-button-prev-popup",
    },
    autoplay: { delay: 2500, disableOnInteraction: !1 },
    loop: !0,
    speed: 1e3,
  }),
    new dt(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}
Object.keys(lt).forEach((e) => {
  Object.keys(lt[e]).forEach((t) => {
    dt.prototype[t] = lt[e][t];
  });
}),
  dt.use([
    function (e) {
      let { swiper: t, on: s, emit: i } = e;
      const a = be();
      let r = null,
        n = null;
      const l = () => {
          t &&
            !t.destroyed &&
            t.initialized &&
            (i("beforeResize"), i("resize"));
        },
        o = () => {
          t && !t.destroyed && t.initialized && i("orientationchange");
        };
      s("init", () => {
        t.params.resizeObserver && void 0 !== a.ResizeObserver
          ? t &&
            !t.destroyed &&
            t.initialized &&
            ((r = new ResizeObserver((e) => {
              n = a.requestAnimationFrame(() => {
                const { width: s, height: i } = t;
                let a = s,
                  r = i;
                e.forEach((e) => {
                  let { contentBoxSize: s, contentRect: i, target: n } = e;
                  (n && n !== t.el) ||
                    ((a = i ? i.width : (s[0] || s).inlineSize),
                    (r = i ? i.height : (s[0] || s).blockSize));
                }),
                  (a === s && r === i) || l();
              });
            })),
            r.observe(t.el))
          : (a.addEventListener("resize", l),
            a.addEventListener("orientationchange", o));
      }),
        s("destroy", () => {
          n && a.cancelAnimationFrame(n),
            r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
            a.removeEventListener("resize", l),
            a.removeEventListener("orientationchange", o);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: a } = e;
      const r = [],
        n = be(),
        l = function (e, s) {
          void 0 === s && (s = {});
          const i = new (n.MutationObserver || n.WebkitMutationObserver)(
            (e) => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void a("observerUpdate", e[0]);
              const s = function () {
                a("observerUpdate", e[0]);
              };
              n.requestAnimationFrame
                ? n.requestAnimationFrame(s)
                : n.setTimeout(s, 0);
            }
          );
          i.observe(e, {
            attributes: void 0 === s.attributes || s.attributes,
            childList: t.isElement || (void 0 === s.childList || s).childList,
            characterData: void 0 === s.characterData || s.characterData,
          }),
            r.push(i);
        };
      s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
        i("init", () => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = ze(t.hostEl);
              for (let t = 0; t < e.length; t += 1) l(e[t]);
            }
            l(t.hostEl, { childList: t.params.observeSlideChildren }),
              l(t.wrapperEl, { attributes: !1 });
          }
        }),
        i("destroy", () => {
          r.forEach((e) => {
            e.disconnect();
          }),
            r.splice(0, r.length);
        });
    },
  ]),
  dt.use([
    function (e) {
      let t,
        s,
        { swiper: i, extendParams: a, on: r, emit: n, params: l } = e;
      (i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        a({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let o,
        d,
        c,
        p,
        u,
        m,
        f,
        h,
        v = l && l.autoplay ? l.autoplay.delay : 3e3,
        g = l && l.autoplay ? l.autoplay.delay : 3e3,
        w = new Date().getTime();
      function b(e) {
        i &&
          !i.destroyed &&
          i.wrapperEl &&
          e.target === i.wrapperEl &&
          (i.wrapperEl.removeEventListener("transitionend", b),
          h || (e.detail && e.detail.bySwiperTouchMove) || C());
      }
      const y = () => {
          if (i.destroyed || !i.autoplay.running) return;
          i.autoplay.paused ? (d = !0) : d && ((g = o), (d = !1));
          const e = i.autoplay.paused ? o : w + g - new Date().getTime();
          (i.autoplay.timeLeft = e),
            n("autoplayTimeLeft", e, e / v),
            (s = requestAnimationFrame(() => {
              y();
            }));
        },
        S = (e) => {
          if (i.destroyed || !i.autoplay.running) return;
          cancelAnimationFrame(s), y();
          let a = void 0 === e ? i.params.autoplay.delay : e;
          (v = i.params.autoplay.delay), (g = i.params.autoplay.delay);
          const r = (() => {
            let e;
            if (
              ((e =
                i.virtual && i.params.virtual.enabled
                  ? i.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  : i.slides[i.activeIndex]),
              !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(r) &&
            r > 0 &&
            void 0 === e &&
            ((a = r), (v = r), (g = r)),
            (o = a);
          const l = i.params.speed,
            d = () => {
              i &&
                !i.destroyed &&
                (i.params.autoplay.reverseDirection
                  ? !i.isBeginning || i.params.loop || i.params.rewind
                    ? (i.slidePrev(l, !0, !0), n("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                      (i.slideTo(i.slides.length - 1, l, !0, !0), n("autoplay"))
                  : !i.isEnd || i.params.loop || i.params.rewind
                  ? (i.slideNext(l, !0, !0), n("autoplay"))
                  : i.params.autoplay.stopOnLastSlide ||
                    (i.slideTo(0, l, !0, !0), n("autoplay")),
                i.params.cssMode &&
                  ((w = new Date().getTime()),
                  requestAnimationFrame(() => {
                    S();
                  })));
            };
          return (
            a > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  d();
                }, a)))
              : requestAnimationFrame(() => {
                  d();
                }),
            a
          );
        },
        T = () => {
          (w = new Date().getTime()),
            (i.autoplay.running = !0),
            S(),
            n("autoplayStart");
        },
        E = () => {
          (i.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(s),
            n("autoplayStop");
        },
        x = (e, s) => {
          if (i.destroyed || !i.autoplay.running) return;
          clearTimeout(t), e || (f = !0);
          const a = () => {
            n("autoplayPause"),
              i.params.autoplay.waitForTransition
                ? i.wrapperEl.addEventListener("transitionend", b)
                : C();
          };
          if (((i.autoplay.paused = !0), s))
            return m && (o = i.params.autoplay.delay), (m = !1), void a();
          const r = o || i.params.autoplay.delay;
          (o = r - (new Date().getTime() - w)),
            (i.isEnd && o < 0 && !i.params.loop) || (o < 0 && (o = 0), a());
        },
        C = () => {
          (i.isEnd && o < 0 && !i.params.loop) ||
            i.destroyed ||
            !i.autoplay.running ||
            ((w = new Date().getTime()),
            f ? ((f = !1), S(o)) : S(),
            (i.autoplay.paused = !1),
            n("autoplayResume"));
        },
        P = () => {
          if (i.destroyed || !i.autoplay.running) return;
          const e = ge();
          "hidden" === e.visibilityState && ((f = !0), x(!0)),
            "visible" === e.visibilityState && C();
        },
        M = (e) => {
          "mouse" === e.pointerType &&
            ((f = !0), (h = !0), i.animating || i.autoplay.paused || x(!0));
        },
        L = (e) => {
          "mouse" === e.pointerType && ((h = !1), i.autoplay.paused && C());
        };
      r("init", () => {
        i.params.autoplay.enabled &&
          (i.params.autoplay.pauseOnMouseEnter &&
            (i.el.addEventListener("pointerenter", M),
            i.el.addEventListener("pointerleave", L)),
          ge().addEventListener("visibilitychange", P),
          T());
      }),
        r("destroy", () => {
          i.el &&
            "string" != typeof i.el &&
            (i.el.removeEventListener("pointerenter", M),
            i.el.removeEventListener("pointerleave", L)),
            ge().removeEventListener("visibilitychange", P),
            i.autoplay.running && E();
        }),
        r("_freeModeStaticRelease", () => {
          (p || f) && C();
        }),
        r("_freeModeNoMomentumRelease", () => {
          i.params.autoplay.disableOnInteraction ? E() : x(!0, !0);
        }),
        r("beforeTransitionStart", (e, t, s) => {
          !i.destroyed &&
            i.autoplay.running &&
            (s || !i.params.autoplay.disableOnInteraction ? x(!0, !0) : E());
        }),
        r("sliderFirstMove", () => {
          !i.destroyed &&
            i.autoplay.running &&
            (i.params.autoplay.disableOnInteraction
              ? E()
              : ((c = !0),
                (p = !1),
                (f = !1),
                (u = setTimeout(() => {
                  (f = !0), (p = !0), x(!0);
                }, 200))));
        }),
        r("touchEnd", () => {
          if (!i.destroyed && i.autoplay.running && c) {
            if (
              (clearTimeout(u),
              clearTimeout(t),
              i.params.autoplay.disableOnInteraction)
            )
              return (p = !1), void (c = !1);
            p && i.params.cssMode && C(), (p = !1), (c = !1);
          }
        }),
        r("slideChange", () => {
          !i.destroyed && i.autoplay.running && (m = !0);
        }),
        Object.assign(i.autoplay, { start: T, stop: E, pause: x, resume: C });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: a } = e;
      function r(e) {
        let s;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((s = t.el.querySelector(e) || t.hostEl.querySelector(e)), s)
          ? s
          : (e &&
              ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
              "string" == typeof e &&
              s &&
              s.length > 1 &&
              1 === t.el.querySelectorAll(e).length
                ? (s = t.el.querySelector(e))
                : s && 1 === s.length && (s = s[0])),
            e && !s ? e : s);
      }
      function n(e, s) {
        const i = t.params.navigation;
        (e = Ve(e)).forEach((e) => {
          e &&
            (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = s),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
        });
      }
      function l() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return n(s, !1), void n(e, !1);
        n(s, t.isBeginning && !t.params.rewind),
          n(e, t.isEnd && !t.params.rewind);
      }
      function o(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), a("navigationPrev"));
      }
      function d(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), a("navigationNext"));
      }
      function c() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = ct(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        let s = r(e.nextEl),
          i = r(e.prevEl);
        Object.assign(t.navigation, { nextEl: s, prevEl: i }),
          (s = Ve(s)),
          (i = Ve(i));
        const a = (s, i) => {
          s && s.addEventListener("click", "next" === i ? d : o),
            !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
        };
        s.forEach((e) => a(e, "next")), i.forEach((e) => a(e, "prev"));
      }
      function p() {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = Ve(e)), (s = Ve(s));
        const i = (e, s) => {
          e.removeEventListener("click", "next" === s ? d : o),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null }),
        i("init", () => {
          !1 === t.params.navigation.enabled ? u() : (c(), l());
        }),
        i("toEdge fromEdge lock unlock", () => {
          l();
        }),
        i("destroy", () => {
          p();
        }),
        i("enable disable", () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = Ve(e)),
            (s = Ve(s)),
            t.enabled
              ? l()
              : [...e, ...s]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.add(t.params.navigation.lockClass)
                  );
        }),
        i("click", (e, s) => {
          let { nextEl: i, prevEl: r } = t.navigation;
          (i = Ve(i)), (r = Ve(r));
          const n = s.target;
          let l = r.includes(n) || i.includes(n);
          if (t.isElement && !l) {
            const e = s.path || (s.composedPath && s.composedPath());
            e && (l = e.find((e) => i.includes(e) || r.includes(e)));
          }
          if (t.params.navigation.hideOnClick && !l) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === n || t.pagination.el.contains(n))
            )
              return;
            let e;
            i.length
              ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
              : r.length &&
                (e = r[0].classList.contains(t.params.navigation.hiddenClass)),
              a(!0 === e ? "navigationShow" : "navigationHide"),
              [...i, ...r]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass)
                );
          }
        });
      const u = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" ")
        ),
          p();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            c(),
            l();
        },
        disable: u,
        update: l,
        init: c,
        destroy: p,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({ fadeEffect: { crossFade: !1 } }),
        (function (e) {
          const {
            effect: t,
            swiper: s,
            on: i,
            setTranslate: a,
            setTransition: r,
            overwriteParams: n,
            perspective: l,
            recreateShadows: o,
            getEffectParams: d,
          } = e;
          let c;
          i("beforeInit", () => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`),
              l &&
                l() &&
                s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
          }),
            i("setTranslate", () => {
              s.params.effect === t && a();
            }),
            i("setTransition", (e, i) => {
              s.params.effect === t && r(i);
            }),
            i("transitionEnd", () => {
              if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.forEach((e) => {
                  e.querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  ).forEach((e) => e.remove());
                }),
                  o();
              }
            }),
            i("virtualUpdate", () => {
              s.params.effect === t &&
                (s.slides.length || (c = !0),
                requestAnimationFrame(() => {
                  c && s.slides && s.slides.length && (a(), (c = !1));
                }));
            });
        })({
          effect: "fade",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { slides: e } = t;
            t.params.fadeEffect;
            for (let s = 0; s < e.length; s += 1) {
              const e = t.slides[s];
              let i = -e.swiperSlideOffset;
              t.params.virtualTranslate || (i -= t.translate);
              let a = 0;
              t.isHorizontal() || ((a = i), (i = 0));
              const r = t.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(e.progress), 0)
                  : 1 + Math.min(Math.max(e.progress, -1), 0),
                n = ut(0, e);
              (n.style.opacity = r),
                (n.style.transform = `translate3d(${i}px, ${a}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => Me(e));
            s.forEach((t) => {
              t.style.transitionDuration = `${e}ms`;
            }),
              mt({
                swiper: t,
                duration: e,
                transformElements: s,
                allSlides: !0,
              });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: a } = e;
      const r = "swiper-pagination";
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let l = 0;
      function o() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function d(e, s) {
        const { bulletActiveClass: i } = t.params.pagination;
        e &&
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${i}-${s}`),
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${i}-${s}-${s}`));
      }
      function c(e) {
        const s = e.target.closest(pt(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const i = Ae(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === i) return;
          const e =
            ((a = t.realIndex),
            (r = i),
            (n = t.slides.length),
            (r %= n) == 1 + (a %= n)
              ? "next"
              : r === a - 1
              ? "previous"
              : void 0);
          "next" === e
            ? t.slideNext()
            : "previous" === e
            ? t.slidePrev()
            : t.slideToLoop(i);
        } else t.slideTo(i);
        var a, r, n;
      }
      function p() {
        const e = t.rtl,
          s = t.params.pagination;
        if (o()) return;
        let i,
          r,
          c = t.pagination.el;
        c = Ve(c);
        const p =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          u = t.params.loop
            ? Math.ceil(p / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((r = t.previousRealIndex || 0),
              (i =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
            ? ((i = t.snapIndex), (r = t.previousSnapIndex))
            : ((r = t.previousIndex || 0), (i = t.activeIndex || 0)),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const a = t.pagination.bullets;
          let o, p, u;
          if (
            (s.dynamicBullets &&
              ((n = Be(a[0], t.isHorizontal() ? "width" : "height")),
              c.forEach((e) => {
                e.style[t.isHorizontal() ? "width" : "height"] =
                  n * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== r &&
                ((l += i - (r || 0)),
                l > s.dynamicMainBullets - 1
                  ? (l = s.dynamicMainBullets - 1)
                  : l < 0 && (l = 0)),
              (o = Math.max(i - l, 0)),
              (p = o + (Math.min(a.length, s.dynamicMainBullets) - 1)),
              (u = (p + o) / 2)),
            a.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                )
                .flat();
              e.classList.remove(...t);
            }),
            c.length > 1)
          )
            a.forEach((e) => {
              const a = Ae(e);
              a === i
                ? e.classList.add(...s.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                s.dynamicBullets &&
                  (a >= o &&
                    a <= p &&
                    e.classList.add(
                      ...`${s.bulletActiveClass}-main`.split(" ")
                    ),
                  a === o && d(e, "prev"),
                  a === p && d(e, "next"));
            });
          else {
            const e = a[i];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
              t.isElement &&
                a.forEach((e, t) => {
                  e.setAttribute("part", t === i ? "bullet-active" : "bullet");
                }),
              s.dynamicBullets)
            ) {
              const e = a[o],
                t = a[p];
              for (let i = o; i <= p; i += 1)
                a[i] &&
                  a[i].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" ")
                  );
              d(e, "prev"), d(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(a.length, s.dynamicMainBullets + 4),
              r = (n * i - n) / 2 - u * n,
              l = e ? "right" : "left";
            a.forEach((e) => {
              e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
            });
          }
        }
        c.forEach((e, r) => {
          if (
            ("fraction" === s.type &&
              (e.querySelectorAll(pt(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(i + 1);
              }),
              e.querySelectorAll(pt(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(u);
              })),
            "progressbar" === s.type)
          ) {
            let a;
            a = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (i + 1) / u;
            let n = 1,
              l = 1;
            "horizontal" === a ? (n = r) : (l = r),
              e.querySelectorAll(pt(s.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((e.innerHTML = s.renderCustom(t, i + 1, u)),
              0 === r && a("paginationRender", e))
            : (0 === r && a("paginationRender", e), a("paginationUpdate", e)),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function u() {
        const e = t.params.pagination;
        if (o()) return;
        const s =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.grid && t.params.grid.rows > 1
            ? t.slides.length / Math.ceil(t.params.grid.rows)
            : t.slides.length;
        let i = t.pagination.el;
        i = Ve(i);
        let r = "";
        if ("bullets" === e.type) {
          let i = t.params.loop
            ? Math.ceil(s / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} ${
                  t.isElement ? 'part="bullet"' : ""
                } class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
            (r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          i.forEach((s) => {
            "custom" !== e.type && (s.innerHTML = r || ""),
              "bullets" === e.type &&
                t.pagination.bullets.push(
                  ...s.querySelectorAll(pt(e.bulletClass))
                );
          }),
          "custom" !== e.type && a("paginationRender", i[0]);
      }
      function m() {
        t.params.pagination = ct(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el &&
          t.isElement &&
          (s = t.el.querySelector(e.el)),
          s ||
            "string" != typeof e.el ||
            (s = [...document.querySelectorAll(e.el)]),
          s || (s = e.el),
          s &&
            0 !== s.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...t.el.querySelectorAll(e.el)]),
              s.length > 1 &&
                (s = s.filter((e) => ze(e, ".swiper")[0] === t.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, { el: s }),
            (s = Ve(s)),
            s.forEach((s) => {
              "bullets" === e.type &&
                e.clickable &&
                s.classList.add(...(e.clickableClass || "").split(" ")),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                "bullets" === e.type &&
                  e.dynamicBullets &&
                  (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (l = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                  e.progressbarOpposite &&
                  s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", c),
                t.enabled || s.classList.add(e.lockClass);
            }));
      }
      function f() {
        const e = t.params.pagination;
        if (o()) return;
        let s = t.pagination.el;
        s &&
          ((s = Ve(s)),
          s.forEach((s) => {
            s.classList.remove(e.hiddenClass),
              s.classList.remove(e.modifierClass + e.type),
              s.classList.remove(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              e.clickable &&
                (s.classList.remove(...(e.clickableClass || "").split(" ")),
                s.removeEventListener("click", c));
          })),
          t.pagination.bullets &&
            t.pagination.bullets.forEach((t) =>
              t.classList.remove(...e.bulletActiveClass.split(" "))
            );
      }
      i("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: s } = t.pagination;
        (s = Ve(s)),
          s.forEach((s) => {
            s.classList.remove(e.horizontalClass, e.verticalClass),
              s.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
      }),
        i("init", () => {
          !1 === t.params.pagination.enabled ? h() : (m(), u(), p());
        }),
        i("activeIndexChange", () => {
          void 0 === t.snapIndex && p();
        }),
        i("snapIndexChange", () => {
          p();
        }),
        i("snapGridLengthChange", () => {
          u(), p();
        }),
        i("destroy", () => {
          f();
        }),
        i("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = Ve(e)),
            e.forEach((e) =>
              e.classList[t.enabled ? "remove" : "add"](
                t.params.pagination.lockClass
              )
            ));
        }),
        i("lock unlock", () => {
          p();
        }),
        i("click", (e, s) => {
          const i = s.target,
            r = Ve(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !i.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = r[0].classList.contains(t.params.pagination.hiddenClass);
            a(!0 === e ? "paginationShow" : "paginationHide"),
              r.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass)
              );
          }
        });
      const h = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = Ve(e)),
          e.forEach((e) =>
            e.classList.add(t.params.pagination.paginationDisabledClass)
          )),
          f();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = Ve(e)),
            e.forEach((e) =>
              e.classList.remove(t.params.pagination.paginationDisabledClass)
            )),
            m(),
            u(),
            p();
        },
        disable: h,
        render: u,
        update: p,
        init: m,
        destroy: f,
      });
    },
  ]);
export {
  ft as a,
  ce as b,
  ht as c,
  oe as d,
  Q as e,
  ae as f,
  vt as g,
  le as h,
  J as i,
  gt as j,
  pe as k,
  ie as r,
  re as s,
  de as t,
};
