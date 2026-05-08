import { A as s, u as r } from "./runtime.9n-HZsgX.js";
function u(u, i, n) {
  if (null == u) return i(void 0), n && n(void 0), s;
  const e = r(() => u.subscribe(i, n));
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
export { u as s };
