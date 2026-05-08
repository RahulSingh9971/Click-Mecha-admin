import {
  B as s,
  C as t,
  D as n,
  u as o,
  F as a,
  G as f,
  g as r,
  I as e,
  J as c,
} from "./runtime.9n-HZsgX.js";
function i(i = !1) {
  const l = n,
    m = l.l.u;
  if (!m) return;
  let p = () => e(l.s);
  if (i) {
    let s = 0,
      t = {};
    const n = c(() => {
      let n = !1;
      const o = l.s;
      for (const s in o) o[s] !== t[s] && ((t[s] = o[s]), (n = !0));
      return n && s++, s;
    });
    p = () => r(n);
  }
  m.b.length &&
    s(() => {
      u(l, p), f(m.b);
    }),
    t(() => {
      const s = o(() => m.m.map(a));
      return () => {
        for (const t of s) "function" == typeof t && t();
      };
    }),
    m.a.length &&
      t(() => {
        u(l, p), f(m.a);
      });
}
function u(s, t) {
  if (s.l.s) for (const n of s.l.s) r(n);
  t();
}
export { i };
