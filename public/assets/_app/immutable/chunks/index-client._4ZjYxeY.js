import { D as n, C as o, u } from "./runtime.9n-HZsgX.js";
import { l as t } from "./index.CcDDAaAi.js";
function l(n) {
  throw new Error("lifecycle_outside_component");
}
function r(r) {
  var i, s, e;
  null === n && l(),
    t && null !== n.l
      ? ((i = n),
        (e = i.l),
        null != (s = e.u) ? s : (e.u = { a: [], b: [], m: [] })).m.push(r)
      : o(() => {
          const n = u(r);
          if ("function" == typeof n) return n;
        });
}
function i(o) {
  null === n && l(), r(() => () => u(o));
}
export { i as a, r as o };
