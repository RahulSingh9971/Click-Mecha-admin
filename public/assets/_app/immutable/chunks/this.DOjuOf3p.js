import { e as n, h as r, u, q as t, S as a } from "./runtime.9n-HZsgX.js";
function s(n, r) {
  return n === r || (null == n ? void 0 : n[a]) === r;
}
function e(a = {}, e, l, o) {
  return (
    n(() => {
      var n, o;
      return (
        r(() => {
          (n = o),
            (o = []),
            u(() => {
              a !== l(...o) &&
                (e(a, ...o), n && s(l(...n), a) && e(null, ...n));
            });
        }),
        () => {
          t(() => {
            o && s(l(...o), a) && e(null, ...o);
          });
        }
      );
    }),
    a
  );
}
export { e as b };
