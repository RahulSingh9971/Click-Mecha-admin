import { _ as e } from "../chunks/preload-helper.CJnnZAUh.js";
import "../chunks/disclose-version.NXHwHSTB.js";
import "../chunks/legacy.C3TYhYNA.js";
import {
  o as i,
  v as t,
  p as s,
  a as n,
  d as o,
  g as a,
  c as r,
  s as c,
  r as l,
  m,
} from "../chunks/runtime.9n-HZsgX.js";
import { a as u, t as p } from "../chunks/template.E9YoWobq.js";
import { i as f } from "../chunks/if.BaG-09Ct.js";
import { i as d } from "../chunks/lifecycle.DGYyGzEx.js";
import { o as h } from "../chunks/index-client._4ZjYxeY.js";
var v = p(
    '<section id="loading-screen" class="fixed inset-0 flex justify-center items-center bg-white z-[100]"><img src="/images/logo-new-ver.png" alt="Hotel Indigo Seminyak Logo" class="w-[200px] inline-block animate-fadeIn"></section>'
  ),
  w = p("<main><!> <!></main>");
function g(p, g) {
  s(g, !1);
  let k = m(!0);
  h(() => {
    setTimeout(() => {
      o(k, !1);
    }, 300);
  }),
    h(() => {
      "undefined" != typeof window &&
        e(
          () => {
            return (
              (e = this),
              (i = null),
              (t = function* () {
                const { initFlowbite: e } = yield import("flowbite");
                return { initFlowbite: e };
              }),
              new Promise((s, n) => {
                var o = (e) => {
                    try {
                      r(t.next(e));
                    } catch (i) {
                      n(i);
                    }
                  },
                  a = (e) => {
                    try {
                      r(t.throw(e));
                    } catch (i) {
                      n(i);
                    }
                  },
                  r = (e) =>
                    e.done ? s(e.value) : Promise.resolve(e.value).then(o, a);
                r((t = t.apply(e, i)).next());
              })
            );
            var e, i, t;
          },
          [],
          import.meta.url
        )
          .then(({ initFlowbite: e }) => {
            e();
          })
          .catch((e) => {});
    }),
    d();
  var j = w(),
    y = r(j);
  f(
    y,
    () => a(k),
    (e) => {
      var i = v();
      u(e, i);
    }
  ),
    (function (e, s, n, o) {
      var a;
      i && t();
      var r = null == (a = s.$$slots) ? void 0 : a[n],
        c = !1;
      !0 === r && ((r = s.children), (c = !0)),
        void 0 === r || r(e, c ? () => o : o);
    })(c(y, 2), g, "default", {}),
    l(j),
    u(p, j),
    n();
}
export { g as component };
