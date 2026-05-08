import "../chunks/disclose-version.NXHwHSTB.js";
import "../chunks/legacy.C3TYhYNA.js";
import {
  p as s,
  f as a,
  t as r,
  a as o,
  c as t,
  r as e,
  s as m,
} from "../chunks/runtime.9n-HZsgX.js";
import { s as c, a as n, b as p } from "../chunks/store.0Ek3FjD1.js";
import { a as i, t as u } from "../chunks/template.E9YoWobq.js";
import { i as h } from "../chunks/lifecycle.DGYyGzEx.js";
import { p as f } from "../chunks/stores.DJwQpd29.js";
var j = u("<h1> </h1> <p> </p>", 1);
function k(u, k) {
  s(k, !1);
  const l = c(),
    v = () => p(f, "$page", l);
  h();
  var g = j(),
    d = a(g),
    y = t(d, !0);
  e(d);
  var b = m(d, 2),
    x = t(b, !0);
  e(b),
    r(() => {
      var s;
      n(y, v().status), n(x, null == (s = v().error) ? void 0 : s.message);
    }),
    i(u, g),
    o();
}
export { k as component };
