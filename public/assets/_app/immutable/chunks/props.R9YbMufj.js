import {
  S as e,
  R as r,
  U as t,
  V as a,
  W as n,
  d as i,
  X as v,
  Y as s,
  g as o,
  P as l,
  Z as u,
  _ as f,
  a0 as d,
  a1 as g,
  a2 as c,
  a3 as p,
  a4 as b,
  a5 as y,
  a6 as m,
  a7 as w,
  a8 as h,
  u as P,
  J as R,
  a9 as j,
  aa as N,
  ab as O,
  ac as x,
  ad as D,
  ae as q,
} from "./runtime.9n-HZsgX.js";
import { c as I } from "./store.0Ek3FjD1.js";
import { l as K } from "./index.CcDDAaAi.js";
function $(g, c = null, p) {
  if ("object" != typeof g || null === g || e in g) return g;
  const b = f(g);
  if (b !== r && b !== t) return g;
  var y,
    m = new Map(),
    w = d(g),
    h = a(0);
  return (
    w && m.set("length", a(g.length)),
    new Proxy(g, {
      defineProperty(e, r, t) {
        ("value" in t &&
          !1 !== t.configurable &&
          !1 !== t.enumerable &&
          !1 !== t.writable) ||
          n();
        var v = m.get(r);
        return (
          void 0 === v ? ((v = a(t.value)), m.set(r, v)) : i(v, $(t.value, y)),
          !0
        );
      },
      deleteProperty(e, r) {
        var t = m.get(r);
        if (void 0 === t) r in e && m.set(r, a(v));
        else {
          if (w && "string" == typeof r) {
            var n = m.get("length"),
              s = Number(r);
            Number.isInteger(s) && s < n.v && i(n, s);
          }
          i(t, v), E(h);
        }
        return !0;
      },
      get(r, t, n) {
        var i;
        if (t === e) return g;
        var l = m.get(t),
          u = t in r;
        if (
          (void 0 !== l ||
            (u && !(null == (i = s(r, t)) ? void 0 : i.writable)) ||
            ((l = a($(u ? r[t] : v, y))), m.set(t, l)),
          void 0 !== l)
        ) {
          var f = o(l);
          return f === v ? void 0 : f;
        }
        return Reflect.get(r, t, n);
      },
      getOwnPropertyDescriptor(e, r) {
        var t = Reflect.getOwnPropertyDescriptor(e, r);
        if (t && "value" in t) {
          var a = m.get(r);
          a && (t.value = o(a));
        } else if (void 0 === t) {
          var n = m.get(r),
            i = null == n ? void 0 : n.v;
          if (void 0 !== n && i !== v)
            return { enumerable: !0, configurable: !0, value: i, writable: !0 };
        }
        return t;
      },
      has(r, t) {
        var n;
        if (t === e) return !0;
        var i = m.get(t),
          u = (void 0 !== i && i.v !== v) || Reflect.has(r, t);
        if (
          (void 0 !== i ||
            (null !== l &&
              (!u || (null == (n = s(r, t)) ? void 0 : n.writable)))) &&
          (void 0 === i && ((i = a(u ? $(r[t], y) : v)), m.set(t, i)),
          o(i) === v)
        )
          return !1;
        return u;
      },
      set(e, r, t, n) {
        var o,
          l = m.get(r),
          u = r in e;
        if (w && "length" === r)
          for (var f = t; f < l.v; f += 1) {
            var d = m.get(f + "");
            void 0 !== d ? i(d, v) : f in e && ((d = a(v)), m.set(f + "", d));
          }
        void 0 === l
          ? (u && !(null == (o = s(e, r)) ? void 0 : o.writable)) ||
            ((l = a(void 0)), i(l, $(t, y)), m.set(r, l))
          : ((u = l.v !== v), i(l, $(t, y)));
        var g = Reflect.getOwnPropertyDescriptor(e, r);
        if (((null == g ? void 0 : g.set) && g.set.call(n, t), !u)) {
          if (w && "string" == typeof r) {
            var c = m.get("length"),
              p = Number(r);
            Number.isInteger(p) && p >= c.v && i(c, p + 1);
          }
          E(h);
        }
        return !0;
      },
      ownKeys(e) {
        o(h);
        var r = Reflect.ownKeys(e).filter((e) => {
          var r = m.get(e);
          return void 0 === r || r.v !== v;
        });
        for (var [t, a] of m) a.v === v || t in e || r.push(t);
        return r;
      },
      setPrototypeOf() {
        u();
      },
    })
  );
}
function E(e, r = 1) {
  i(e, e.v + r);
}
function F(e) {
  for (var r = l, t = l; null !== r && !(r.f & (p | b)); ) r = r.parent;
  try {
    return y(r), e();
  } finally {
    y(t);
  }
}
function J(r, t, a, n) {
  var v,
    l,
    u,
    f = !!(a & x),
    d = !K || !!(a & m),
    p = !!(a & w),
    b = !!(a & D),
    y = !1;
  p ? ([u, y] = I(() => r[t])) : (u = r[t]);
  var E,
    J = e in r || h in r,
    M =
      null != (l = null == (v = s(r, t)) ? void 0 : v.set)
        ? l
        : J && p && t in r
        ? (e) => (r[t] = e)
        : void 0,
    S = n,
    U = !0,
    V = !1,
    W = () => ((V = !0), U && ((U = !1), (S = b ? P(n) : n)), S);
  if (
    (void 0 === u && void 0 !== n && (M && d && g(), (u = W()), M && M(u)), d)
  )
    E = () => {
      var e = r[t];
      return void 0 === e ? W() : ((U = !0), (V = !1), e);
    };
  else {
    var X = F(() => (f ? R : j)(() => r[t]));
    (X.f |= c),
      (E = () => {
        var e = o(X);
        return void 0 !== e && (S = void 0), void 0 === e ? S : e;
      });
  }
  if (!(a & N)) return E;
  if (M) {
    var Y = r.$$legacy;
    return function (e, r) {
      return arguments.length > 0
        ? ((d && r && !Y && !y) || M(r ? E() : e), e)
        : E();
    };
  }
  var Z = !1,
    _ = q(u),
    k = F(() =>
      R(() => {
        var e = E(),
          r = o(_);
        return Z ? ((Z = !1), r) : (_.v = e);
      })
    );
  return (
    f || (k.equals = O),
    function (e, r) {
      if (arguments.length > 0) {
        const t = r ? o(k) : d && p ? $(e) : e;
        return (
          k.equals(t) ||
            ((Z = !0), i(_, t), V && void 0 !== S && (S = t), P(() => o(k))),
          e
        );
      }
      return o(k);
    }
  );
}
export { $ as a, J as p };
