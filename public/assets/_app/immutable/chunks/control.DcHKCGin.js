import { A as t, G as s, M as r } from "./runtime.9n-HZsgX.js";
import { s as n } from "./utils.Vs1icMxB.js";
const e = [];
function o(s, n = t) {
  let o = null;
  const i = new Set();
  function c(t) {
    if (r(s, t) && ((s = t), o)) {
      const t = !e.length;
      for (const r of i) r[1](), e.push(r, s);
      if (t) {
        for (let t = 0; t < e.length; t += 2) e[t][0](e[t + 1]);
        e.length = 0;
      }
    }
  }
  function u(t) {
    c(t(s));
  }
  return {
    set: c,
    update: u,
    subscribe: function (r, e = t) {
      const a = [r, e];
      return (
        i.add(a),
        1 === i.size && (o = n(c, u) || t),
        r(s),
        () => {
          i.delete(a), 0 === i.size && o && (o(), (o = null));
        }
      );
    },
  };
}
function i(r, e, i) {
  const c = !Array.isArray(r),
    u = c ? [r] : r;
  if (!u.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return (
    (l = (r, o) => {
      let i = !1;
      const l = [];
      let f = 0,
        h = t;
      const p = () => {
          if (f) return;
          h();
          const s = e(c ? l[0] : l, r, o);
          a ? r(s) : (h = "function" == typeof s ? s : t);
        },
        d = u.map((t, s) =>
          n(
            t,
            (t) => {
              (l[s] = t), (f &= ~(1 << s)), i && p();
            },
            () => {
              f |= 1 << s;
            }
          )
        );
      return (
        (i = !0),
        p(),
        function () {
          s(d), h(), (i = !1);
        }
      );
    }),
    { subscribe: o(i, l).subscribe }
  );
  var l;
}
class c {
  constructor(t, s) {
    (this.status = t),
      (this.body =
        "string" == typeof s
          ? { message: s }
          : s || { message: `Error: ${t}` });
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class u {
  constructor(t, s) {
    (this.status = t), (this.location = s);
  }
}
class a extends Error {
  constructor(t, s, r) {
    super(r), (this.status = t), (this.text = s);
  }
}
export { c as H, u as R, a as S, i as d, o as w };
