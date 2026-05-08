var e = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  s = (t, r, a) =>
    r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[r] = a);
import {
  an as l,
  a5 as u,
  ao as i,
  P as c,
  ap as d,
  q as v,
  ai as f,
  a0 as p,
  N as b,
  i as h,
  aq as m,
  o as y,
  ar as _,
  ak as w,
  y as g,
  x as O,
  z as E,
  O as j,
  as as L,
  am as P,
  v as x,
  at as S,
  al as k,
  au as T,
  av as q,
  aw as C,
  ax as D,
  k as M,
  p as N,
  a as W,
  D as B,
  ae as V,
  A as $,
  g as z,
  d as A,
} from "./runtime.9n-HZsgX.js";
import { e as G } from "./template.E9YoWobq.js";
import { s as I } from "./utils.Vs1icMxB.js";
let F = !1;
function H() {
  F ||
    ((F = !0),
    document.addEventListener(
      "reset",
      (e) => {
        Promise.resolve().then(() => {
          var t;
          if (!e.defaultPrevented)
            for (const r of e.target.elements)
              null == (t = r.__on_r) || t.call(r);
        });
      },
      { capture: !0 }
    ));
}
function J(e) {
  var t = i,
    r = c;
  l(null), u(null);
  try {
    return e();
  } finally {
    l(t), u(r);
  }
}
function K(e, t, r, a = r) {
  e.addEventListener(t, () => J(r));
  const n = e.__on_r;
  (e.__on_r = n
    ? () => {
        n(), a();
      }
    : a),
    H();
}
const Q = new Set(),
  R = new Set();
function U(e, t, r, a, n) {
  var o = { capture: a, passive: n },
    s = (function (e, t, r, a) {
      function n(e) {
        if ((a.capture || X.call(t, e), !e.cancelBubble))
          return J(() => r.call(this, e));
      }
      return (
        e.startsWith("pointer") || e.startsWith("touch") || "wheel" === e
          ? v(() => {
              t.addEventListener(e, n, a);
            })
          : t.addEventListener(e, n, a),
        n
      );
    })(e, t, r, o);
  (t !== document.body && t !== window && t !== document) ||
    d(() => {
      t.removeEventListener(e, s, o);
    });
}
function X(e) {
  var t,
    r = this,
    a = r.ownerDocument,
    n = e.type,
    o = (null == (t = e.composedPath) ? void 0 : t.call(e)) || [],
    s = o[0] || e.target,
    d = 0,
    v = e.__root;
  if (v) {
    var b = o.indexOf(v);
    if (-1 !== b && (r === document || r === window))
      return void (e.__root = r);
    var h = o.indexOf(r);
    if (-1 === h) return;
    b <= h && (d = b);
  }
  if ((s = o[d] || e.target) !== r) {
    f(e, "currentTarget", { configurable: !0, get: () => s || a });
    var m = i,
      y = c;
    l(null), u(null);
    try {
      for (var _, w = []; null !== s; ) {
        var g = s.assignedSlot || s.parentNode || s.host || null;
        try {
          var O = s["__" + n];
          if (void 0 !== O && !s.disabled)
            if (p(O)) {
              var [E, ...j] = O;
              E.apply(s, [e, ...j]);
            } else O.call(s, e);
        } catch (L) {
          _ ? w.push(L) : (_ = L);
        }
        if (e.cancelBubble || g === r || null === g) break;
        s = g;
      }
      if (_) {
        for (let e of w)
          queueMicrotask(() => {
            throw e;
          });
        throw _;
      }
    } finally {
      (e.__root = r), delete e.currentTarget, l(m), u(y);
    }
  }
}
let Y;
function Z(e) {
  let t = null,
    r = y;
  var a;
  if (y) {
    for (
      t = E, void 0 === Y && (Y = j(document.head));
      null !== Y && (8 !== Y.nodeType || Y.data !== _);

    )
      Y = w(Y);
    null === Y ? g(!1) : (Y = O(w(Y)));
  }
  y || (a = document.head.appendChild(b()));
  try {
    h(() => e(a), m);
  } finally {
    r && (g(!0), (Y = E), O(t));
  }
}
const ee = ["touchstart", "touchmove"];
function te(e, t) {
  var r,
    a = null == t ? "" : "object" == typeof t ? t + "" : t;
  a !== (null != (r = e.__t) ? r : (e.__t = e.nodeValue)) &&
    ((e.__t = a), (e.nodeValue = null == a ? "" : a + ""));
}
function re(e, t) {
  return oe(e, t);
}
function ae(e, l) {
  var u;
  L(), (l.intro = null != (u = l.intro) && u);
  const i = l.target,
    c = y,
    d = E;
  try {
    for (var v = j(i); v && (8 !== v.nodeType || v.data !== _); ) v = w(v);
    if (!v) throw P;
    g(!0), O(v), x();
    const u = oe(
      e,
      ((f = ((e, t) => {
        for (var r in t || (t = {})) n.call(t, r) && s(e, r, t[r]);
        if (a) for (var r of a(t)) o.call(t, r) && s(e, r, t[r]);
        return e;
      })({}, l)),
      t(f, r({ anchor: v })))
    );
    if (null === E || 8 !== E.nodeType || E.data !== S) throw (k(), P);
    return g(!1), u;
  } catch (p) {
    if (p === P) return !1 === l.recover && T(), L(), q(i), g(!1), re(e, l);
    throw p;
  } finally {
    g(c), O(d), (Y = void 0);
  }
  var f;
}
const ne = new Map();
function oe(
  e,
  { target: t, anchor: r, props: a = {}, events: n, context: o, intro: s = !0 }
) {
  L();
  var l = new Set(),
    u = (e) => {
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (!l.has(a)) {
          l.add(a);
          var n = ((s = a), ee.includes(s));
          t.addEventListener(a, X, { passive: n });
          var o = ne.get(a);
          void 0 === o
            ? (document.addEventListener(a, X, { passive: n }), ne.set(a, 1))
            : ne.set(a, o + 1);
        }
      }
      var s;
    };
  u(C(Q)), R.add(u);
  var i = void 0,
    d = D(() => {
      var s = null != r ? r : t.appendChild(b());
      return (
        M(() => {
          o && (N({}), (B.c = o));
          n && (a.$$events = n),
            y && G(s, null),
            (i = e(s, a) || {}),
            y && (c.nodes_end = E),
            o && W();
        }),
        () => {
          var e;
          for (var a of l) {
            t.removeEventListener(a, X);
            var n = ne.get(a);
            0 == --n
              ? (document.removeEventListener(a, X), ne.delete(a))
              : ne.set(a, n);
          }
          R.delete(u),
            se.delete(i),
            s !== r && (null == (e = s.parentNode) || e.removeChild(s));
        }
      );
    });
  return se.set(i, d), i;
}
let se = new WeakMap();
function le(e) {
  const t = se.get(e);
  t && t();
}
let ue = !1;
function ie(e, t, r) {
  var a;
  const n =
    null != (a = r[t])
      ? a
      : (r[t] = { store: null, source: V(void 0), unsubscribe: $ });
  if (n.store !== e)
    if ((n.unsubscribe(), (n.store = null != e ? e : null), null == e))
      (n.source.v = void 0), (n.unsubscribe = $);
    else {
      var o = !0;
      (n.unsubscribe = I(e, (e) => {
        o ? (n.source.v = e) : A(n.source, e);
      })),
        (o = !1);
    }
  return z(n.source);
}
function ce() {
  const e = {};
  return (
    d(() => {
      for (var t in e) {
        e[t].unsubscribe();
      }
    }),
    e
  );
}
function de(e) {
  var t = ue;
  try {
    return (ue = !1), [e(), ue];
  } finally {
    ue = t;
  }
}
export {
  te as a,
  ie as b,
  de as c,
  ae as d,
  U as e,
  H as f,
  Z as h,
  K as l,
  re as m,
  ce as s,
  le as u,
};
