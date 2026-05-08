const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "../nodes/0.C5AQhCZ3.js",
      "../chunks/disclose-version.NXHwHSTB.js",
      "../chunks/runtime.9n-HZsgX.js",
      "../chunks/index.CcDDAaAi.js",
      "../chunks/template.E9YoWobq.js",
      "../chunks/runtime.Bxohg_Hc.js",
      "../chunks/control.DcHKCGin.js",
      "../chunks/utils.Vs1icMxB.js",
      "../chunks/index.STpfpIKh.js",
      "../assets/0.DpqgtNQa.css",
      "../nodes/1.KKk1VLAx.js",
      "../chunks/legacy.C3TYhYNA.js",
      "../chunks/store.0Ek3FjD1.js",
      "../chunks/lifecycle.DGYyGzEx.js",
      "../chunks/stores.DJwQpd29.js",
      "../chunks/entry.GQqk5Q4g.js",
      "../nodes/2.PWv9Po_s.js",
      "../chunks/preload-helper.CJnnZAUh.js",
      "../chunks/if.BaG-09Ct.js",
      "../chunks/index-client._4ZjYxeY.js",
      "../nodes/3.CRn7aobs.js",
      "../chunks/index.sxAj5O7r.js",
      "../nodes/4.sZBxRc17.js",
      "../chunks/swiper.DD5xMI7n.js",
      "../assets/swiper.CcTDN23P.css",
      "../chunks/footer.wUNxmTdl.js",
      "../chunks/props.R9YbMufj.js",
      "../chunks/this.DOjuOf3p.js",
      "../chunks/booking.2yU02b5k.js",
      "../nodes/5.B8Pl12Pd.js",
      "../nodes/6.CpWdZ7Wq.js",
      "../nodes/7.CuvUKG0u.js",
      "../chunks/fancybox.FBiYubcn.js",
      "../assets/fancybox.D0VieYOK.css",
      "../nodes/8.DW40uPM3.js",
      "../nodes/9.DcKSI90a.js",
      "../nodes/10.UT4GPYHC.js",
      "../nodes/11.r55e3Pud.js",
      "../nodes/12.Y5hC4HYv.js",
      "../nodes/13.hGYwiVHw.js",
      "../nodes/14.D16uVCX7.js",
      "../nodes/15.BRFQOvP5.js",
      "../nodes/16.DmC6VmiH.js",
      "../nodes/17.DQF2Q8Uz.js",
      "../nodes/18.8ciuuC7Q.js",
      "../nodes/19.782qTvqX.js",
      "../nodes/20.Beq0_EYF.js",
      "../nodes/21.DcvCRBuf.js",
      "../nodes/22.DL2iUtQR.js",
      "../chunks/format.fP3GZ-5B.js",
      "../nodes/23.u9in0zqw.js",
      "../nodes/24.DaR1JIXM.js",
      "../nodes/25.eXXKK3FR.js",
      "../nodes/26.ux43Pn9X.js",
      "../nodes/27.BXeAaLBG.js",
      "../nodes/28.DrSKXDv-.js",
      "../nodes/29.Bi7ns8bn.js",
      "../nodes/30.D8AtAmH3.js",
      "../nodes/31.C_MQO2RA.js",
      "../nodes/32.DVdW3KlS.js",
      "../nodes/33.DDL61pYX.js",
      "../nodes/34.CpWdZ7Wq.js",
    ])
) => i.map((i) => d[i]);
var t,
  e,
  r = Object.defineProperty,
  o = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  i = (t) => {
    throw TypeError(t);
  },
  _ = (t, e, o) =>
    e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o),
  m = (t, e) => {
    for (var r in e || (e = {})) l.call(e, r) && _(t, r, e[r]);
    if (a) for (var r of a(e)) n.call(e, r) && _(t, r, e[r]);
    return t;
  },
  p = (t, e, r) => e.has(t) || i("Cannot " + r),
  c = (t, e, r) => (
    p(t, e, "read from private field"), r ? r.call(t) : e.get(t)
  ),
  u = (t, e, r) =>
    e.has(t)
      ? i("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, r),
  d = (t, e, r, o) => (
    p(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r
  );
import { _ as E } from "../chunks/preload-helper.CJnnZAUh.js";
import {
  o as v,
  v as h,
  i as f,
  E as j,
  k as O,
  z as g,
  n as P,
  g as R,
  a8 as T,
  d as D,
  ah as I,
  ai as A,
  ae as L,
  p as V,
  B as y,
  C as w,
  ag as b,
  f as $,
  a as k,
  aj as x,
  s as C,
  c as M,
  t as W,
  r as z,
  J as S,
} from "../chunks/runtime.9n-HZsgX.js";
import { d as q, m as B, u as F, a as G } from "../chunks/store.0Ek3FjD1.js";
import "../chunks/disclose-version.NXHwHSTB.js";
import { i as J } from "../chunks/if.BaG-09Ct.js";
import { c as Q, a as H, t as K, d as N } from "../chunks/template.E9YoWobq.js";
import { p as U, a as X } from "../chunks/props.R9YbMufj.js";
import { b as Y } from "../chunks/this.DOjuOf3p.js";
import { o as Z } from "../chunks/index-client._4ZjYxeY.js";
function tt(t, e, r) {
  v && h();
  var o,
    s,
    a = t;
  f(() => {
    o !== (o = e()) && (s && (P(s), (s = null)), o && (s = O(() => r(a, o))));
  }, j),
    v && (a = g);
}
class et {
  constructor(r) {
    var a, l;
    u(this, t), u(this, e);
    var n = new Map(),
      i = (t, e) => {
        var r = L(e);
        return n.set(t, r), r;
      };
    const _ = new Proxy(
      ((p = m({}, r.props || {})), o(p, s({ $$events: {} }))),
      {
        get(t, e) {
          var r;
          return R(null != (r = n.get(e)) ? r : i(e, Reflect.get(t, e)));
        },
        has(t, e) {
          var r;
          return (
            e === T ||
            (R(null != (r = n.get(e)) ? r : i(e, Reflect.get(t, e))),
            Reflect.has(t, e))
          );
        },
        set(t, e, r) {
          var o;
          return (
            D(null != (o = n.get(e)) ? o : i(e, r), r), Reflect.set(t, e, r)
          );
        },
      }
    );
    var p;
    d(
      this,
      e,
      (r.hydrate ? q : B)(r.component, {
        target: r.target,
        anchor: r.anchor,
        props: _,
        context: r.context,
        intro: null != (a = r.intro) && a,
        recover: r.recover,
      })
    ),
      ((null == (l = null == r ? void 0 : r.props) ? void 0 : l.$$host) &&
        !1 !== r.sync) ||
        I(),
      d(this, t, _.$$events);
    for (const t of Object.keys(c(this, e)))
      "$set" !== t &&
        "$destroy" !== t &&
        "$on" !== t &&
        A(this, t, {
          get() {
            return c(this, e)[t];
          },
          set(r) {
            c(this, e)[t] = r;
          },
          enumerable: !0,
        });
    (c(this, e).$set = (t) => {
      Object.assign(_, t);
    }),
      (c(this, e).$destroy = () => {
        F(c(this, e));
      });
  }
  $set(t) {
    c(this, e).$set(t);
  }
  $on(e, r) {
    c(this, t)[e] = c(this, t)[e] || [];
    const o = (...t) => r.call(this, ...t);
    return (
      c(this, t)[e].push(o),
      () => {
        c(this, t)[e] = c(this, t)[e].filter((t) => t !== o);
      }
    );
  }
  $destroy() {
    c(this, e).$destroy();
  }
}
(t = new WeakMap()), (e = new WeakMap());
const rt = {};
var ot = K(
    '<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
  ),
  st = K("<!> <!>", 1);
const at =
  ((lt = function (t, e) {
    V(e, !0);
    let r = U(e, "components", 23, () => []),
      o = U(e, "data_0", 3, null),
      s = U(e, "data_1", 3, null),
      a = U(e, "data_2", 3, null);
    y(() => e.stores.page.set(e.page)),
      w(() => {
        e.stores,
          e.page,
          e.constructors,
          r(),
          e.form,
          o(),
          s(),
          a(),
          e.stores.page.notify();
      });
    let l = x(!1),
      n = x(!1),
      i = x(null);
    Z(() => {
      const t = e.stores.page.subscribe(() => {
        R(l) &&
          (D(n, !0),
          b().then(() => {
            D(i, X(document.title || "untitled page"));
          }));
      });
      return D(l, !0), t;
    });
    const _ = S(() => e.constructors[2]);
    var m = st(),
      p = $(m);
    J(
      p,
      () => e.constructors[1],
      (t) => {
        var l = Q();
        const n = S(() => e.constructors[0]);
        tt(
          $(l),
          () => R(n),
          (t, l) => {
            Y(
              l(t, {
                get data() {
                  return o();
                },
                get form() {
                  return e.form;
                },
                children: (t, o) => {
                  var l = Q(),
                    n = $(l);
                  J(
                    n,
                    () => e.constructors[2],
                    (t) => {
                      var o = Q();
                      const l = S(() => e.constructors[1]);
                      tt(
                        $(o),
                        () => R(l),
                        (t, o) => {
                          Y(
                            o(t, {
                              get data() {
                                return s();
                              },
                              get form() {
                                return e.form;
                              },
                              children: (t, o) => {
                                var s = Q();
                                tt(
                                  $(s),
                                  () => R(_),
                                  (t, o) => {
                                    Y(
                                      o(t, {
                                        get data() {
                                          return a();
                                        },
                                        get form() {
                                          return e.form;
                                        },
                                      }),
                                      (t) => (r()[2] = t),
                                      () => {
                                        var t;
                                        return null == (t = r())
                                          ? void 0
                                          : t[2];
                                      }
                                    );
                                  }
                                ),
                                  H(t, s);
                              },
                              $$slots: { default: !0 },
                            }),
                            (t) => (r()[1] = t),
                            () => {
                              var t;
                              return null == (t = r()) ? void 0 : t[1];
                            }
                          );
                        }
                      ),
                        H(t, o);
                    },
                    (t) => {
                      var o = Q();
                      const a = S(() => e.constructors[1]);
                      tt(
                        $(o),
                        () => R(a),
                        (t, o) => {
                          Y(
                            o(t, {
                              get data() {
                                return s();
                              },
                              get form() {
                                return e.form;
                              },
                            }),
                            (t) => (r()[1] = t),
                            () => {
                              var t;
                              return null == (t = r()) ? void 0 : t[1];
                            }
                          );
                        }
                      ),
                        H(t, o);
                    }
                  ),
                    H(t, l);
                },
                $$slots: { default: !0 },
              }),
              (t) => (r()[0] = t),
              () => {
                var t;
                return null == (t = r()) ? void 0 : t[0];
              }
            );
          }
        ),
          H(t, l);
      },
      (t) => {
        var s = Q();
        const a = S(() => e.constructors[0]);
        tt(
          $(s),
          () => R(a),
          (t, s) => {
            Y(
              s(t, {
                get data() {
                  return o();
                },
                get form() {
                  return e.form;
                },
              }),
              (t) => (r()[0] = t),
              () => {
                var t;
                return null == (t = r()) ? void 0 : t[0];
              }
            );
          }
        ),
          H(t, s);
      }
    );
    var c = C(p, 2);
    J(
      c,
      () => R(l),
      (t) => {
        var e = ot(),
          r = M(e);
        J(
          r,
          () => R(n),
          (t) => {
            var e = N();
            W(() => G(e, R(i))), H(t, e);
          }
        ),
          z(e),
          H(t, e);
      }
    ),
      H(t, m),
      k();
  }),
  class extends et {
    constructor(t) {
      super(m({ component: lt }, t));
    }
  });
var lt;
const nt = [
    () =>
      E(
        () => import("../nodes/0.C5AQhCZ3.js"),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/1.KKk1VLAx.js"),
        __vite__mapDeps([10, 1, 11, 3, 2, 12, 4, 7, 13, 14, 15, 6]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/2.PWv9Po_s.js"),
        __vite__mapDeps([16, 17, 1, 11, 3, 2, 4, 18, 13, 19]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/3.CRn7aobs.js"),
        __vite__mapDeps([20, 21, 17, 5, 6, 2, 3, 7, 8, 1, 11]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/4.sZBxRc17.js"),
        __vite__mapDeps([
          22, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 18, 23, 24, 25, 13, 26, 19,
          14, 15, 27, 28,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/5.B8Pl12Pd.js"),
        __vite__mapDeps([
          29, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 25, 13, 26, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/6.CpWdZ7Wq.js"),
        __vite__mapDeps([30, 1, 11, 3]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/7.CuvUKG0u.js"),
        __vite__mapDeps([
          31, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 25, 13, 26, 19, 14,
          15, 32, 33,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/8.DW40uPM3.js"),
        __vite__mapDeps([
          34, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 25, 13, 26, 19, 14,
          15, 32, 33,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/9.DcKSI90a.js"),
        __vite__mapDeps([
          35, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 18, 23, 24, 25, 13, 26, 19,
          14, 15, 27,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/10.UT4GPYHC.js"),
        __vite__mapDeps([
          36, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 18, 23, 24, 25, 13, 26, 19,
          14, 15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/11.r55e3Pud.js"),
        __vite__mapDeps([
          37, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 18, 23, 24, 13, 26, 25, 19,
          14, 15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/12.Y5hC4HYv.js"),
        __vite__mapDeps([
          38, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 13, 26, 25, 23, 24, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/13.hGYwiVHw.js"),
        __vite__mapDeps([
          39, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 18, 23, 24, 27, 13, 26, 19,
          14, 15, 28,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/14.D16uVCX7.js"),
        __vite__mapDeps([
          40, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 18, 23, 24, 25, 13, 26, 19,
          14, 15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/15.BRFQOvP5.js"),
        __vite__mapDeps([
          41, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 18, 23, 24, 25, 13, 26, 19,
          14, 15, 27,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/16.DmC6VmiH.js"),
        __vite__mapDeps([
          42, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 13, 26, 25, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/17.DQF2Q8Uz.js"),
        __vite__mapDeps([
          43, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 13, 26, 19, 25, 14,
          15, 32, 33,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/18.8ciuuC7Q.js"),
        __vite__mapDeps([
          44, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 25, 13, 26, 19, 14,
          15, 32, 33,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/19.782qTvqX.js"),
        __vite__mapDeps([
          45, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 13, 26, 25, 23, 24, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/20.Beq0_EYF.js"),
        __vite__mapDeps([
          46, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 25, 13, 26, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/21.DcvCRBuf.js"),
        __vite__mapDeps([
          47, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 18, 23, 24, 25, 13, 26, 19,
          14, 15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/22.DL2iUtQR.js"),
        __vite__mapDeps([
          48, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 25, 13, 26, 19, 14,
          15, 49,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/23.u9in0zqw.js"),
        __vite__mapDeps([
          50, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 25, 23, 24, 13, 26, 19, 14,
          15, 49,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/24.DaR1JIXM.js"),
        __vite__mapDeps([
          51, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 13, 26, 25, 23, 24, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/25.eXXKK3FR.js"),
        __vite__mapDeps([
          52, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 13, 26, 25, 23, 24, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/26.ux43Pn9X.js"),
        __vite__mapDeps([
          53, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 13, 26, 25, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/27.BXeAaLBG.js"),
        __vite__mapDeps([
          54, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 13, 26, 25, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/28.DrSKXDv-.js"),
        __vite__mapDeps([
          55, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 13, 26, 25, 23, 24, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/29.Bi7ns8bn.js"),
        __vite__mapDeps([
          56, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 18, 23, 24, 27, 13, 26, 25,
          19, 14, 15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/30.D8AtAmH3.js"),
        __vite__mapDeps([
          57, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 13, 26, 25, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/31.C_MQO2RA.js"),
        __vite__mapDeps([
          58, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 25, 13, 26, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/32.DVdW3KlS.js"),
        __vite__mapDeps([
          59, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 25, 13, 26, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/33.DDL61pYX.js"),
        __vite__mapDeps([
          60, 21, 17, 5, 6, 2, 3, 7, 1, 11, 12, 4, 23, 24, 25, 13, 26, 19, 14,
          15,
        ]),
        import.meta.url
      ),
    () =>
      E(
        () => import("../nodes/34.CpWdZ7Wq.js"),
        __vite__mapDeps([61, 1, 11, 3]),
        import.meta.url
      ),
  ],
  it = [],
  _t = {
    "/": [3],
    "/[locale]": [-5, [2]],
    "/[locale]/about-us": [-6, [2]],
    "/[locale]/accommodation": [6, [2]],
    "/[locale]/accommodation/rooms": [-8, [2]],
    "/[locale]/accommodation/suites": [-9, [2]],
    "/[locale]/accommodation/[slug]": [~9, [2]],
    "/[locale]/awards": [-11, [2]],
    "/[locale]/contact": [-12, [2]],
    "/[locale]/cookie-usage": [-13, [2]],
    "/[locale]/dev-mode": [-14, [2]],
    "/[locale]/dining": [-15, [2]],
    "/[locale]/dining/[slug]": [-16, [2]],
    "/[locale]/events-form": [-17, [2]],
    "/[locale]/gallery": [-18, [2]],
    "/[locale]/meeting": [-19, [2]],
    "/[locale]/menu": [-20, [2]],
    "/[locale]/offers": [-21, [2]],
    "/[locale]/offers/[slug]": [-22, [2]],
    "/[locale]/press-release": [-23, [2]],
    "/[locale]/press-release/[slug]": [-24, [2]],
    "/[locale]/privacy-policy": [-25, [2]],
    "/[locale]/privacy-statement": [-26, [2]],
    "/[locale]/sitemap": [-27, [2]],
    "/[locale]/spa-form": [-28, [2]],
    "/[locale]/term-of-use": [-29, [2]],
    "/[locale]/wedding": [-30, [2]],
    "/[locale]/wellness": [-31, [2]],
    "/[locale]/wellness/activities": [-32, [2]],
    "/[locale]/wellness/gym": [-33, [2]],
    "/[locale]/wellness/sava-spa": [-34, [2]],
    "/[locale]/wellness/[slug]": [34, [2]],
  },
  mt = { handleError: ({ error: t }) => {}, reroute: () => {} };
export {
  _t as dictionary,
  mt as hooks,
  rt as matchers,
  nt as nodes,
  at as root,
  it as server_loads,
};
