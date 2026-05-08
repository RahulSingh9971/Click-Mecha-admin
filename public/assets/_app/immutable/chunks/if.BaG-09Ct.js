import {
  i as a,
  j as s,
  k as l,
  n,
  o as u,
  v as t,
  E as i,
  H as r,
  w as o,
  x as e,
  y as f,
  z as m,
} from "./runtime.9n-HZsgX.js";
function c(c, j, p, v = null, x = !1) {
  u && t();
  var E = c,
    d = null,
    k = null,
    w = null;
  a(
    () => {
      if (w === (w = !!j())) return;
      let a = !1;
      if (u) {
        const s = E.data === r;
        w === s && ((E = o()), e(E), f(!1), (a = !0));
      }
      w
        ? (d ? s(d) : (d = l(() => p(E))),
          k &&
            n(k, () => {
              k = null;
            }))
        : (k ? s(k) : v && (k = l(() => v(E))),
          d &&
            n(d, () => {
              d = null;
            })),
        a && f(!0);
    },
    x ? i : 0
  ),
    u && (E = m);
}
export { c as i };
