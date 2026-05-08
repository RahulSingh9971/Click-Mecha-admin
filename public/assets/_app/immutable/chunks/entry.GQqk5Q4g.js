var e,
  t,
  n,
  r,
  o,
  l,
  a = Object.defineProperty,
  i = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable,
  f = (e, t, n) =>
    t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  p = (e, t) => {
    for (var n in t || (t = {})) c.call(t, n) && f(e, n, t[n]);
    if (u) for (var n of u(t)) d.call(t, n) && f(e, n, t[n]);
    return e;
  },
  h = (e, t) => i(e, s(t)),
  m = (e, t, n) =>
    new Promise((r, o) => {
      var l = (e) => {
          try {
            i(n.next(e));
          } catch (t) {
            o(t);
          }
        },
        a = (e) => {
          try {
            i(n.throw(e));
          } catch (t) {
            o(t);
          }
        },
        i = (e) => (e.done ? r(e.value) : Promise.resolve(e.value).then(l, a));
      i((n = n.apply(e, t)).next());
    });
import { ag as v } from "./runtime.9n-HZsgX.js";
import { w as y, H as g, S as w, R as b } from "./control.DcHKCGin.js";
function k(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e;
}
function A({ href: e }) {
  return e.split("#")[0];
}
new URL("sveltekit-internal://");
const S = ["href", "pathname", "search", "toString", "toJSON"];
function E(e, t, n) {
  const r = new URL(e);
  Object.defineProperty(r, "searchParams", {
    value: new Proxy(r.searchParams, {
      get(e, r) {
        if ("get" === r || "getAll" === r || "has" === r)
          return (t) => (n(t), e[r](t));
        t();
        const o = Reflect.get(e, r);
        return "function" == typeof o ? o.bind(e) : o;
      },
    }),
    enumerable: !0,
    configurable: !0,
  });
  for (const o of S)
    Object.defineProperty(r, o, {
      get: () => (t(), e[o]),
      enumerable: !0,
      configurable: !0,
    });
  return r;
}
const _ = window.fetch;
window.fetch = (e, t) => (
  "GET" !==
    (e instanceof Request
      ? e.method
      : (null == t ? void 0 : t.method) || "GET") && R.delete(P(e)),
  _(e, t)
);
const R = new Map();
function x(e, t) {
  const n = P(e, t),
    r = document.querySelector(n);
  if (null == r ? void 0 : r.textContent) {
    let e = JSON.parse(r.textContent),
      { body: t } = e,
      o = ((e, t) => {
        var n = {};
        for (var r in e) c.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && u)
          for (var r of u(e)) t.indexOf(r) < 0 && d.call(e, r) && (n[r] = e[r]);
        return n;
      })(e, ["body"]);
    const l = r.getAttribute("data-ttl");
    l && R.set(n, { body: t, init: o, ttl: 1e3 * Number(l) });
    return (
      null !== r.getAttribute("data-b64") &&
        (t = (function (e) {
          const t = atob(e),
            n = new Uint8Array(t.length);
          for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
          return n.buffer;
        })(t)),
      Promise.resolve(new Response(t, o))
    );
  }
  return window.fetch(e, t);
}
function P(e, t) {
  let n = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
    e instanceof Request ? e.url : e
  )}]`;
  if ((null == t ? void 0 : t.headers) || (null == t ? void 0 : t.body)) {
    const e = [];
    t.headers && e.push([...new Headers(t.headers)].join(",")),
      t.body &&
        ("string" == typeof t.body || ArrayBuffer.isView(t.body)) &&
        e.push(t.body),
      (n += `[data-hash="${(function (...e) {
        let t = 5381;
        for (const n of e)
          if ("string" == typeof n) {
            let e = n.length;
            for (; e; ) t = (33 * t) ^ n.charCodeAt(--e);
          } else {
            if (!ArrayBuffer.isView(n))
              throw new TypeError("value must be a string or TypedArray");
            {
              const e = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
              let r = e.length;
              for (; r; ) t = (33 * t) ^ e[--r];
            }
          }
        return (t >>> 0).toString(36);
      })(...e)}"]`);
  }
  return n;
}
const U = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function j(e) {
  const t = [];
  var n;
  return {
    pattern:
      "/" === e
        ? /^\/$/
        : new RegExp(
            `^${((n = e), n.slice(1).split("/").filter(C))
              .map((e) => {
                const n = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(e);
                if (n)
                  return (
                    t.push({
                      name: n[1],
                      matcher: n[2],
                      optional: !1,
                      rest: !0,
                      chained: !0,
                    }),
                    "(?:/(.*))?"
                  );
                const r = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(e);
                if (r)
                  return (
                    t.push({
                      name: r[1],
                      matcher: r[2],
                      optional: !0,
                      rest: !1,
                      chained: !0,
                    }),
                    "(?:/([^/]+))?"
                  );
                if (!e) return;
                const o = e.split(/\[(.+?)\](?!\])/);
                return (
                  "/" +
                  o
                    .map((e, n) => {
                      if (n % 2) {
                        if (e.startsWith("x+"))
                          return O(
                            String.fromCharCode(parseInt(e.slice(2), 16))
                          );
                        if (e.startsWith("u+"))
                          return O(
                            String.fromCharCode(
                              ...e
                                .slice(2)
                                .split("-")
                                .map((e) => parseInt(e, 16))
                            )
                          );
                        const r = U.exec(e),
                          [, l, a, i, s] = r;
                        return (
                          t.push({
                            name: i,
                            matcher: s,
                            optional: !!l,
                            rest: !!a,
                            chained: !!a && 1 === n && "" === o[0],
                          }),
                          a ? "(.*?)" : l ? "([^/]*)?" : "([^/]+?)"
                        );
                      }
                      return O(e);
                    })
                    .join("")
                );
              })
              .join("")}/?$`
          ),
    params: t,
  };
}
function C(e) {
  return !/^\([^)]+\)$/.test(e);
}
function O(e) {
  return e
    .normalize()
    .replace(/[[\]]/g, "\\$&")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2[Ff]")
    .replace(/\?/g, "%3[Ff]")
    .replace(/#/g, "%23")
    .replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function L({ nodes: e, server_loads: t, dictionary: n, matchers: r }) {
  const o = new Set(t);
  return Object.entries(n).map(([t, [n, o, i]]) => {
    const { pattern: s, params: u } = j(t),
      c = {
        id: t,
        exec: (e) => {
          const t = s.exec(e);
          if (t)
            return (function (e, t, n) {
              const r = {},
                o = e.slice(1),
                l = o.filter((e) => void 0 !== e);
              let a = 0;
              for (let i = 0; i < t.length; i += 1) {
                const e = t[i];
                let s = o[i - a];
                if (
                  (e.chained &&
                    e.rest &&
                    a &&
                    ((s = o
                      .slice(i - a, i + 1)
                      .filter((e) => e)
                      .join("/")),
                    (a = 0)),
                  void 0 !== s)
                )
                  if (e.matcher && !n[e.matcher](s)) {
                    if (!e.optional || !e.chained) return;
                    a++;
                  } else {
                    r[e.name] = s;
                    const n = t[i + 1],
                      u = o[i + 1];
                    n && !n.rest && n.optional && u && e.chained && (a = 0),
                      n || u || Object.keys(r).length !== l.length || (a = 0);
                  }
                else e.rest && (r[e.name] = "");
              }
              if (!a) return r;
            })(t, u, r);
        },
        errors: [1, ...(i || [])].map((t) => e[t]),
        layouts: [0, ...(o || [])].map(a),
        leaf: l(n),
      };
    return (
      (c.errors.length = c.layouts.length =
        Math.max(c.errors.length, c.layouts.length)),
      c
    );
  });
  function l(t) {
    const n = t < 0;
    return n && (t = ~t), [n, e[t]];
  }
  function a(t) {
    return void 0 === t ? t : [o.has(t), e[t]];
  }
}
function I(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e]);
  } catch (n) {}
}
function T(e, t, n = JSON.stringify) {
  const r = n(t);
  try {
    sessionStorage[e] = r;
  } catch (o) {}
}
const $ =
    null != (t = null == (e = globalThis.__sveltekit_10kzno5) ? void 0 : e.base)
      ? t
      : "",
  N =
    null !=
    (r = null == (n = globalThis.__sveltekit_10kzno5) ? void 0 : n.assets)
      ? r
      : $,
  D = "sveltekit:snapshot",
  B = "sveltekit:scroll",
  V = "sveltekit:states",
  F = "sveltekit:pageurl",
  q = "sveltekit:history",
  W = "sveltekit:navigation",
  M = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
  G = location.origin;
function J(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const e = document.getElementsByTagName("base");
    t = e.length ? e[0].href : document.URL;
  }
  return new URL(e, t);
}
function H() {
  return { x: pageXOffset, y: pageYOffset };
}
function K(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const z = h(p({}, M), { "": M.hover });
function X(e) {
  var t;
  let n = null != (t = e.assignedSlot) ? t : e.parentNode;
  return 11 === (null == n ? void 0 : n.nodeType) && (n = n.host), n;
}
function Y(e, t) {
  for (; e && e !== t; ) {
    if ("A" === e.nodeName.toUpperCase() && e.hasAttribute("href")) return e;
    e = X(e);
  }
}
function Q(e, t) {
  let n;
  try {
    n = new URL(
      e instanceof SVGAElement ? e.href.baseVal : e.href,
      document.baseURI
    );
  } catch (o) {}
  const r = e instanceof SVGAElement ? e.target.baseVal : e.target;
  return {
    url: n,
    external:
      !n ||
      !!r ||
      ne(n, t) ||
      (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
    target: r,
    download:
      (null == n ? void 0 : n.origin) === G && e.hasAttribute("download"),
  };
}
function Z(e) {
  let t = null,
    n = null,
    r = null,
    o = null,
    l = null,
    a = null,
    i = e;
  for (; i && i !== document.documentElement; )
    null === r && (r = K(i, "preload-code")),
      null === o && (o = K(i, "preload-data")),
      null === t && (t = K(i, "keepfocus")),
      null === n && (n = K(i, "noscroll")),
      null === l && (l = K(i, "reload")),
      null === a && (a = K(i, "replacestate")),
      (i = X(i));
  function s(e) {
    switch (e) {
      case "":
      case "true":
        return !0;
      case "off":
      case "false":
        return !1;
      default:
        return;
    }
  }
  return {
    preload_code: z[null != r ? r : "off"],
    preload_data: z[null != o ? o : "off"],
    keepfocus: s(t),
    noscroll: s(n),
    reload: s(l),
    replace_state: s(a),
  };
}
function ee(e) {
  const t = y(e);
  let n = !0;
  return {
    notify: function () {
      (n = !0), t.update((e) => e);
    },
    set: function (e) {
      (n = !1), t.set(e);
    },
    subscribe: function (e) {
      let r;
      return t.subscribe((t) => {
        (void 0 === r || (n && t !== r)) && e((r = t));
      });
    },
  };
}
function te() {
  const { set: e, subscribe: t } = y(!1);
  let n;
  return {
    subscribe: t,
    check: function () {
      return m(this, null, function* () {
        clearTimeout(n);
        try {
          const t = yield fetch(`${N}/_app/version.json`, {
            headers: { pragma: "no-cache", "cache-control": "no-cache" },
          });
          if (!t.ok) return !1;
          const r = "1758684979017" !== (yield t.json()).version;
          return r && (e(!0), clearTimeout(n)), r;
        } catch (t) {
          return !1;
        }
      });
    },
  };
}
function ne(e, t) {
  return e.origin !== G || !e.pathname.startsWith(t);
}
function re(e) {
  const t = (function (e) {
      e.length % 4 == 0 && (e = e.replace(/==?$/, ""));
      let t = "",
        n = 0,
        r = 0;
      for (let o = 0; o < e.length; o++)
        (n <<= 6),
          (n |= oe.indexOf(e[o])),
          (r += 6),
          24 === r &&
            ((t += String.fromCharCode((16711680 & n) >> 16)),
            (t += String.fromCharCode((65280 & n) >> 8)),
            (t += String.fromCharCode(255 & n)),
            (n = r = 0));
      12 === r
        ? ((n >>= 4), (t += String.fromCharCode(n)))
        : 18 === r &&
          ((n >>= 2),
          (t += String.fromCharCode((65280 & n) >> 8)),
          (t += String.fromCharCode(255 & n)));
      return t;
    })(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n);
  for (let o = 0; o < n.byteLength; o++) r.setUint8(o, t.charCodeAt(o));
  return n;
}
const oe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const le = new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config",
]);
function ae(e) {
  return e instanceof g || e instanceof w ? e.status : 500;
}
const ie = new Set(["icon", "shortcut icon", "apple-touch-icon"]),
  se = null != (o = I(B)) ? o : {},
  ue = null != (l = I(D)) ? l : {},
  ce = { url: ee({}), page: ee({}), navigating: y(null), updated: te() };
function de(e) {
  se[e] = H();
}
function fe(e) {
  return (location.href = e.href), new Promise(() => {});
}
function pe() {
  return m(this, null, function* () {
    if ("serviceWorker" in navigator) {
      const e = yield navigator.serviceWorker.getRegistration($ || "/");
      e && (yield e.update());
    }
  });
}
function he() {}
let me, ve, ye, ge, we, be;
const ke = [],
  Ae = [];
let Se = null;
const Ee = [],
  _e = [];
let Re,
  xe,
  Pe,
  Ue,
  je,
  Ce = [],
  Oe = { branch: [], error: null, url: null },
  Le = !1,
  Ie = !1,
  Te = !0,
  $e = !1,
  Ne = !1,
  De = !1,
  Be = !1;
const Ve = new Set();
function Fe(e, t, n) {
  return m(this, null, function* () {
    var r, o;
    document.URL !== location.href && (location.href = location.href),
      (be = e),
      (me = L(e)),
      (ge = document.documentElement),
      (we = t),
      (ve = e.nodes[0]),
      (ye = e.nodes[1]),
      ve(),
      ye(),
      (xe = null == (r = history.state) ? void 0 : r[q]),
      (Pe = null == (o = history.state) ? void 0 : o[W]),
      xe ||
        ((xe = Pe = Date.now()),
        history.replaceState(
          h(p({}, history.state), { [q]: xe, [W]: Pe }),
          ""
        ));
    const l = se[xe];
    l && ((history.scrollRestoration = "manual"), scrollTo(l.x, l.y)),
      n
        ? yield (function (e, t) {
            return m(
              this,
              arguments,
              function* (
                e,
                {
                  status: t = 200,
                  error: n,
                  node_ids: r,
                  params: o,
                  route: l,
                  data: a,
                  form: i,
                }
              ) {
                Le = !0;
                const s = new URL(location.href);
                let u;
                ({ params: o = {}, route: l = { id: null } } = nt(s, !1) || {});
                let c = !0;
                try {
                  const e = r.map((t, n) =>
                      m(this, null, function* () {
                        const r = a[n];
                        return (
                          (null == r ? void 0 : r.uses) &&
                            (r.uses = ut(r.uses)),
                          ze({
                            loader: be.nodes[t],
                            url: s,
                            params: o,
                            route: l,
                            parent: () =>
                              m(this, null, function* () {
                                const t = {};
                                for (let r = 0; r < n; r += 1)
                                  Object.assign(t, (yield e[r]).data);
                                return t;
                              }),
                            server_data_node: Ye(r),
                          })
                        );
                      })
                    ),
                    c = yield Promise.all(e),
                    d = me.find(({ id: e }) => e === l.id);
                  if (d) {
                    const e = d.layouts;
                    for (let t = 0; t < e.length; t++)
                      e[t] || c.splice(t, 0, void 0);
                  }
                  u = Ke({
                    url: s,
                    params: o,
                    branch: c,
                    status: t,
                    error: n,
                    form: i,
                    route: null != d ? d : null,
                  });
                } catch (d) {
                  if (d instanceof b)
                    return void (yield fe(new URL(d.location, location.href)));
                  (u = yield tt({
                    status: ae(d),
                    error: yield it(d, { url: s, params: o, route: l }),
                    url: s,
                    route: l,
                  })),
                    (e.textContent = ""),
                    (c = !1);
                }
                u.props.page && (u.props.page.state = {}), He(u, e, c);
              }
            );
          })(we, n)
        : (function (e, t = {}) {
            if ((e = J(e)).origin !== G)
              return Promise.reject(new Error("goto: invalid URL"));
            Ge(e, t, 0);
          })(location.href, { replaceState: !0 }),
      (function () {
        var e;
        (history.scrollRestoration = "manual"),
          addEventListener("beforeunload", (e) => {
            let t = !1;
            if ((Me(), !$e)) {
              const e = ct(Oe, void 0, null, "leave"),
                n = h(p({}, e.navigation), {
                  cancel: () => {
                    (t = !0), e.reject(new Error("navigation cancelled"));
                  },
                });
              Ee.forEach((e) => e(n));
            }
            t
              ? (e.preventDefault(), (e.returnValue = ""))
              : (history.scrollRestoration = "auto");
          }),
          addEventListener("visibilitychange", () => {
            "hidden" === document.visibilityState && Me();
          }),
          (null == (e = navigator.connection) ? void 0 : e.saveData) ||
            (function () {
              let e;
              function t(e) {
                e.defaultPrevented || r(e.composedPath()[0], 1);
              }
              ge.addEventListener("mousemove", (t) => {
                const n = t.target;
                clearTimeout(e),
                  (e = setTimeout(() => {
                    r(n, 2);
                  }, 20));
              }),
                ge.addEventListener("mousedown", t),
                ge.addEventListener("touchstart", t, { passive: !0 });
              const n = new IntersectionObserver(
                (e) => {
                  for (const t of e)
                    t.isIntersecting &&
                      (Je(t.target.href), n.unobserve(t.target));
                },
                { threshold: 0 }
              );
              function r(e, t) {
                const n = Y(e, ge);
                if (!n) return;
                const { url: r, external: o, download: l } = Q(n, $);
                if (o || l) return;
                const a = Z(n),
                  i =
                    r &&
                    Oe.url.pathname + Oe.url.search === r.pathname + r.search;
                if (!a.reload && !i)
                  if (t <= a.preload_data) {
                    const e = nt(r, !1);
                    e &&
                      (function (e) {
                        m(this, null, function* () {
                          if (e.id !== (null == Se ? void 0 : Se.id)) {
                            const t = {};
                            Ve.add(t),
                              (Se = {
                                id: e.id,
                                token: t,
                                promise: Ze(h(p({}, e), { preload: t })).then(
                                  (e) => (
                                    Ve.delete(t),
                                    "loaded" === e.type &&
                                      e.state.error &&
                                      (Se = null),
                                    e
                                  )
                                ),
                              });
                          }
                          return Se.promise;
                        });
                      })(e);
                  } else t <= a.preload_code && Je(r.pathname);
              }
              function o() {
                n.disconnect();
                for (const e of ge.querySelectorAll("a")) {
                  const { url: t, external: r, download: o } = Q(e, $);
                  if (r || o) continue;
                  const l = Z(e);
                  l.reload ||
                    (l.preload_code === M.viewport && n.observe(e),
                    l.preload_code === M.eager && Je(t.pathname));
                }
              }
              Ce.push(o), o();
            })();
        ge.addEventListener("click", (e) =>
          m(this, null, function* () {
            var n;
            if (e.button || 1 !== e.which) return;
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            if (e.defaultPrevented) return;
            const r = Y(e.composedPath()[0], ge);
            if (!r) return;
            const { url: o, external: l, target: a, download: i } = Q(r, $);
            if (!o) return;
            if ("_parent" === a || "_top" === a) {
              if (window.parent !== window) return;
            } else if (a && "_self" !== a) return;
            const s = Z(r);
            if (
              !(r instanceof SVGAElement) &&
              o.protocol !== location.protocol &&
              "https:" !== o.protocol &&
              "http:" !== o.protocol
            )
              return;
            if (i) return;
            const [u, c] = o.href.split("#"),
              d = u === A(location);
            if (!l && (!s.reload || (d && c))) {
              if (void 0 !== c && d) {
                const [, n] = Oe.url.href.split("#");
                if (n === c) {
                  if (
                    (e.preventDefault(),
                    "" === c ||
                      ("top" === c &&
                        null === r.ownerDocument.getElementById("top")))
                  )
                    window.scrollTo({ top: 0 });
                  else {
                    const e = r.ownerDocument.getElementById(
                      decodeURIComponent(c)
                    );
                    e && (e.scrollIntoView(), e.focus());
                  }
                  return;
                }
                if (((Ne = !0), de(xe), t(o), !s.replace_state)) return;
                Ne = !1;
              }
              e.preventDefault(),
                yield new Promise((e) => {
                  requestAnimationFrame(() => {
                    setTimeout(e, 0);
                  }),
                    setTimeout(e, 100);
                }),
                lt({
                  type: "link",
                  url: o,
                  keepfocus: s.keepfocus,
                  noscroll: s.noscroll,
                  replace_state:
                    null != (n = s.replace_state)
                      ? n
                      : o.href === location.href,
                });
            } else ot({ url: o, type: "link" }) ? ($e = !0) : e.preventDefault();
          })
        ),
          ge.addEventListener("submit", (e) => {
            var t, n;
            if (e.defaultPrevented) return;
            const r = HTMLFormElement.prototype.cloneNode.call(e.target),
              o = e.submitter;
            if ("_blank" === ((null == o ? void 0 : o.formTarget) || r.target))
              return;
            if ("get" !== ((null == o ? void 0 : o.formMethod) || r.method))
              return;
            const l = new URL(
              ((null == o ? void 0 : o.hasAttribute("formaction")) &&
                (null == o ? void 0 : o.formAction)) ||
                r.action
            );
            if (ne(l, $)) return;
            const a = e.target,
              i = Z(a);
            if (i.reload) return;
            e.preventDefault(), e.stopPropagation();
            const s = new FormData(a),
              u = null == o ? void 0 : o.getAttribute("name");
            u &&
              s.append(
                u,
                null != (t = null == o ? void 0 : o.getAttribute("value"))
                  ? t
                  : ""
              ),
              (l.search = new URLSearchParams(s).toString()),
              lt({
                type: "form",
                url: l,
                keepfocus: i.keepfocus,
                noscroll: i.noscroll,
                replace_state:
                  null != (n = i.replace_state) ? n : l.href === location.href,
              });
          }),
          addEventListener("popstate", (e) =>
            m(this, null, function* () {
              var n, r, o;
              if (null == (n = e.state) ? void 0 : n[q]) {
                const n = e.state[q];
                if (((je = {}), n === xe)) return;
                const l = se[n],
                  a = null != (r = e.state[V]) ? r : {},
                  i = new URL(null != (o = e.state[F]) ? o : location.href),
                  s = e.state[W],
                  u = A(location) === A(Oe.url);
                if (s === Pe && (De || u))
                  return (
                    t(i),
                    (se[xe] = H()),
                    l && scrollTo(l.x, l.y),
                    a !== Ue.state &&
                      ((Ue = h(p({}, Ue), { state: a })),
                      Re.$set({ page: Ue })),
                    void (xe = n)
                  );
                const c = n - xe;
                yield lt({
                  type: "popstate",
                  url: i,
                  popped: { state: a, scroll: l, delta: c },
                  accept: () => {
                    (xe = n), (Pe = s);
                  },
                  block: () => {
                    history.go(-c);
                  },
                  nav_token: je,
                });
              } else if (!Ne) {
                t(new URL(location.href));
              }
            })
          ),
          addEventListener("hashchange", () => {
            Ne &&
              ((Ne = !1),
              history.replaceState(
                h(p({}, history.state), { [q]: ++xe, [W]: Pe }),
                "",
                location.href
              ));
          });
        for (const n of document.querySelectorAll("link"))
          ie.has(n.rel) && (n.href = n.href);
        function t(e) {
          (Oe.url = e), ce.page.set(h(p({}, Ue), { url: e })), ce.page.notify();
        }
        addEventListener("pageshow", (e) => {
          e.persisted && ce.navigating.set(null);
        });
      })();
  });
}
function qe(e) {
  Ae.some((e) => (null == e ? void 0 : e.snapshot)) &&
    (ue[e] = Ae.map((e) => {
      var t;
      return null == (t = null == e ? void 0 : e.snapshot)
        ? void 0
        : t.capture();
    }));
}
function We(e) {
  var t;
  null == (t = ue[e]) ||
    t.forEach((e, t) => {
      var n, r;
      null == (r = null == (n = Ae[t]) ? void 0 : n.snapshot) || r.restore(e);
    });
}
function Me() {
  de(xe), T(B, se), qe(Pe), T(D, ue);
}
function Ge(e, t, n, r) {
  return m(this, null, function* () {
    return lt({
      type: "goto",
      url: J(e),
      keepfocus: t.keepFocus,
      noscroll: t.noScroll,
      replace_state: t.replaceState,
      state: t.state,
      redirect_count: n,
      nav_token: r,
      accept: () => {
        t.invalidateAll && (Be = !0);
      },
    });
  });
}
function Je(e) {
  return m(this, null, function* () {
    const t = me.find((t) => t.exec(rt(e)));
    t &&
      (yield Promise.all(
        [...t.layouts, t.leaf].map((e) => (null == e ? void 0 : e[1]()))
      ));
  });
}
function He(e, t, n) {
  var r, o;
  Oe = e.state;
  const l = document.querySelector("style[data-sveltekit]");
  l && l.remove(),
    (Ue = e.props.page),
    (Re = new be.root({
      target: t,
      props: h(p({}, e.props), { stores: ce, components: Ae }),
      hydrate: n,
      sync: !1,
    })),
    We(Pe);
  const a = {
    from: null,
    to: {
      params: Oe.params,
      route: {
        id: null != (o = null == (r = Oe.route) ? void 0 : r.id) ? o : null,
      },
      url: new URL(location.href),
    },
    willUnload: !1,
    type: "enter",
    complete: Promise.resolve(),
  };
  Ce.forEach((e) => e(a)), (Ie = !0);
}
function Ke({
  url: e,
  params: t,
  branch: n,
  status: r,
  error: o,
  route: l,
  form: a,
}) {
  var i;
  let s = "never";
  if (!$ || (e.pathname !== $ && e.pathname !== $ + "/"))
    for (const p of n)
      void 0 !== (null == p ? void 0 : p.slash) && (s = p.slash);
  else s = "always";
  var u, c;
  (e.pathname =
    ((u = e.pathname),
    (c = s),
    "/" === u || "ignore" === c
      ? u
      : "never" === c
      ? u.endsWith("/")
        ? u.slice(0, -1)
        : u
      : "always" !== c || u.endsWith("/")
      ? u
      : u + "/")),
    (e.search = e.search);
  const d = {
    type: "loaded",
    state: { url: e, params: t, branch: n, error: o, route: l },
    props: {
      constructors: ((f = n), f.filter((e) => null != e)).map(
        (e) => e.node.component
      ),
      page: Ue,
    },
  };
  var f;
  void 0 !== a && (d.props.form = a);
  let h = {},
    m = !Ue,
    v = 0;
  for (let y = 0; y < Math.max(n.length, Oe.branch.length); y += 1) {
    const e = n[y],
      t = Oe.branch[y];
    (null == e ? void 0 : e.data) !== (null == t ? void 0 : t.data) && (m = !0),
      e &&
        ((h = p(p({}, h), e.data)), m && (d.props[`data_${v}`] = h), (v += 1));
  }
  return (
    (!Oe.url ||
      e.href !== Oe.url.href ||
      Oe.error !== o ||
      (void 0 !== a && a !== Ue.form) ||
      m) &&
      (d.props.page = {
        error: o,
        params: t,
        route: { id: null != (i = null == l ? void 0 : l.id) ? i : null },
        state: {},
        status: r,
        url: new URL(e),
        form: null != a ? a : null,
        data: m ? h : Ue.data,
      }),
    d
  );
}
function ze(e) {
  return m(
    this,
    arguments,
    function* ({
      loader: e,
      parent: t,
      url: n,
      params: r,
      route: o,
      server_data_node: l,
    }) {
      var a, i, s, u, c, d, f;
      let h = null,
        v = !0;
      const y = {
          dependencies: new Set(),
          params: new Set(),
          parent: !1,
          route: !1,
          url: !1,
          search_params: new Set(),
        },
        g = yield e();
      if (null == (a = g.universal) ? void 0 : a.load) {
        let e = function (...e) {
          for (const t of e) {
            const { href: e } = new URL(t, n);
            y.dependencies.add(e);
          }
        };
        const a = {
          route: new Proxy(o, { get: (e, t) => (v && (y.route = !0), e[t]) }),
          params: new Proxy(r, { get: (e, t) => (v && y.params.add(t), e[t]) }),
          data: null != (i = null == l ? void 0 : l.data) ? i : null,
          url: E(
            n,
            () => {
              v && (y.url = !0);
            },
            (e) => {
              v && y.search_params.add(e);
            }
          ),
          fetch(t, r) {
            return m(this, null, function* () {
              let o;
              t instanceof Request
                ? ((o = t.url),
                  (r = p(
                    {
                      body:
                        "GET" === t.method || "HEAD" === t.method
                          ? void 0
                          : yield t.blob(),
                      cache: t.cache,
                      credentials: t.credentials,
                      headers: [...t.headers].length ? t.headers : void 0,
                      integrity: t.integrity,
                      keepalive: t.keepalive,
                      method: t.method,
                      mode: t.mode,
                      redirect: t.redirect,
                      referrer: t.referrer,
                      referrerPolicy: t.referrerPolicy,
                      signal: t.signal,
                    },
                    r
                  )))
                : (o = t);
              const l = new URL(o, n);
              return (
                v && e(l.href),
                l.origin === n.origin && (o = l.href.slice(n.origin.length)),
                Ie
                  ? (function (e, t, n) {
                      if (R.size > 0) {
                        const t = P(e, n),
                          r = R.get(t);
                        if (r) {
                          if (
                            performance.now() < r.ttl &&
                            [
                              "default",
                              "force-cache",
                              "only-if-cached",
                              void 0,
                            ].includes(null == n ? void 0 : n.cache)
                          )
                            return new Response(r.body, r.init);
                          R.delete(t);
                        }
                      }
                      return window.fetch(t, n);
                    })(o, l.href, r)
                  : x(o, r)
              );
            });
          },
          setHeaders: () => {},
          depends: e,
          parent: () => (v && (y.parent = !0), t()),
          untrack(e) {
            v = !1;
            try {
              return e();
            } finally {
              v = !0;
            }
          },
        };
        h = null != (s = yield g.universal.load.call(null, a)) ? s : null;
      }
      return {
        node: g,
        loader: e,
        server: l,
        universal: (null == (u = g.universal) ? void 0 : u.load)
          ? { type: "data", data: h, uses: y }
          : null,
        data:
          null != (c = null != h ? h : null == l ? void 0 : l.data) ? c : null,
        slash:
          null != (f = null == (d = g.universal) ? void 0 : d.trailingSlash)
            ? f
            : null == l
            ? void 0
            : l.slash,
      };
    }
  );
}
function Xe(e, t, n, r, o, l) {
  if (Be) return !0;
  if (!o) return !1;
  if (o.parent && e) return !0;
  if (o.route && t) return !0;
  if (o.url && n) return !0;
  for (const a of o.search_params) if (r.has(a)) return !0;
  for (const a of o.params) if (l[a] !== Oe.params[a]) return !0;
  for (const a of o.dependencies) if (ke.some((e) => e(new URL(a)))) return !0;
  return !1;
}
function Ye(e, t) {
  return "data" === (null == e ? void 0 : e.type)
    ? e
    : "skip" === (null == e ? void 0 : e.type) && null != t
    ? t
    : null;
}
function Qe({ error: e, url: t, route: n, params: r }) {
  return {
    type: "loaded",
    state: { error: e, url: t, route: n, params: r, branch: [] },
    props: { page: Ue, constructors: [] },
  };
}
function Ze(e) {
  return m(
    this,
    arguments,
    function* ({
      id: e,
      invalidating: t,
      url: n,
      params: r,
      route: o,
      preload: l,
    }) {
      var a;
      if ((null == Se ? void 0 : Se.id) === e)
        return Ve.delete(Se.token), Se.promise;
      const { errors: i, layouts: s, leaf: u } = o,
        c = [...s, u];
      i.forEach((e) => (null == e ? void 0 : e().catch(() => {}))),
        c.forEach((e) => (null == e ? void 0 : e[1]().catch(() => {})));
      let d = null;
      const f = !!Oe.url && e !== Oe.url.pathname + Oe.url.search,
        p = !!Oe.route && o.id !== Oe.route.id,
        h = (function (e, t) {
          if (!e) return new Set(t.searchParams.keys());
          const n = new Set([
            ...e.searchParams.keys(),
            ...t.searchParams.keys(),
          ]);
          for (const r of n) {
            const o = e.searchParams.getAll(r),
              l = t.searchParams.getAll(r);
            o.every((e) => l.includes(e)) &&
              l.every((e) => o.includes(e)) &&
              n.delete(r);
          }
          return n;
        })(Oe.url, n);
      let v = !1;
      const y = c.map((e, t) => {
        var n;
        const o = Oe.branch[t],
          l =
            !!(null == e ? void 0 : e[0]) &&
            ((null == o ? void 0 : o.loader) !== e[1] ||
              Xe(v, p, f, h, null == (n = o.server) ? void 0 : n.uses, r));
        return l && (v = !0), l;
      });
      if (y.some(Boolean)) {
        try {
          d = yield st(n, y);
        } catch (E) {
          const t = yield it(E, { url: n, params: r, route: { id: e } });
          return Ve.has(l)
            ? Qe({ error: t, url: n, params: r, route: o })
            : tt({ status: ae(E), error: t, url: n, route: o });
        }
        if ("redirect" === d.type) return d;
      }
      const w = null == d ? void 0 : d.nodes;
      let k = !1;
      const A = c.map((e, t) =>
        m(this, null, function* () {
          var l;
          if (!e) return;
          const a = Oe.branch[t],
            i = null == w ? void 0 : w[t];
          if (
            !(
              (i && "skip" !== i.type) ||
              e[1] !== (null == a ? void 0 : a.loader) ||
              Xe(k, p, f, h, null == (l = a.universal) ? void 0 : l.uses, r)
            )
          )
            return a;
          if (((k = !0), "error" === (null == i ? void 0 : i.type))) throw i;
          return ze({
            loader: e[1],
            url: n,
            params: r,
            route: o,
            parent: () =>
              m(this, null, function* () {
                var e;
                const n = {};
                for (let r = 0; r < t; r += 1)
                  Object.assign(n, null == (e = yield A[r]) ? void 0 : e.data);
                return n;
              }),
            server_data_node: Ye(
              void 0 === i && e[0] ? { type: "skip" } : null != i ? i : null,
              e[0] ? (null == a ? void 0 : a.server) : void 0
            ),
          });
        })
      );
      for (const m of A) m.catch(() => {});
      const S = [];
      for (let m = 0; m < c.length; m += 1)
        if (c[m])
          try {
            S.push(yield A[m]);
          } catch (_) {
            if (_ instanceof b)
              return { type: "redirect", location: _.location };
            if (Ve.has(l))
              return Qe({
                error: yield it(_, { params: r, url: n, route: { id: o.id } }),
                url: n,
                params: r,
                route: o,
              });
            let e,
              t = ae(_);
            if (null == w ? void 0 : w.includes(_))
              (t = null != (a = _.status) ? a : t), (e = _.error);
            else if (_ instanceof g) e = _.body;
            else {
              if (yield ce.updated.check()) return yield pe(), yield fe(n);
              e = yield it(_, { params: r, url: n, route: { id: o.id } });
            }
            const s = yield et(m, S, i);
            return s
              ? Ke({
                  url: n,
                  params: r,
                  branch: S.slice(0, s.idx).concat(s.node),
                  status: t,
                  error: e,
                  route: o,
                })
              : yield at(n, { id: o.id }, e, t);
          }
        else S.push(void 0);
      return Ke({
        url: n,
        params: r,
        branch: S,
        status: 200,
        error: null,
        route: o,
        form: t ? void 0 : null,
      });
    }
  );
}
function et(e, t, n) {
  return m(this, null, function* () {
    for (; e--; )
      if (n[e]) {
        let o = e;
        for (; !t[o]; ) o -= 1;
        try {
          return {
            idx: o + 1,
            node: {
              node: yield n[e](),
              loader: n[e],
              data: {},
              server: null,
              universal: null,
            },
          };
        } catch (r) {
          continue;
        }
      }
  });
}
function tt(e) {
  return m(
    this,
    arguments,
    function* ({ status: e, error: t, url: n, route: r }) {
      var o;
      const l = {};
      let a = null;
      if (0 === be.server_loads[0])
        try {
          const e = yield st(n, [!0]);
          if ("data" !== e.type || (e.nodes[0] && "data" !== e.nodes[0].type))
            throw 0;
          a = null != (o = e.nodes[0]) ? o : null;
        } catch (i) {
          (n.origin !== G || n.pathname !== location.pathname || Le) &&
            (yield fe(n));
        }
      return Ke({
        url: n,
        params: l,
        branch: [
          yield ze({
            loader: ve,
            url: n,
            params: l,
            route: r,
            parent: () => Promise.resolve({}),
            server_data_node: Ye(a),
          }),
          {
            node: yield ye(),
            loader: ye,
            universal: null,
            server: null,
            data: null,
          },
        ],
        status: e,
        error: t,
        route: null,
      });
    }
  );
}
function nt(e, t) {
  var n;
  if (!e) return;
  if (ne(e, $)) return;
  let r;
  try {
    r = null != (n = be.hooks.reroute({ url: new URL(e) })) ? n : e.pathname;
  } catch (l) {
    return;
  }
  const o = rt(r);
  for (const a of me) {
    const n = a.exec(o);
    if (n) {
      return {
        id: e.pathname + e.search,
        invalidating: t,
        route: a,
        params: k(n),
        url: e,
      };
    }
  }
}
function rt(e) {
  return (function (e) {
    return e.split("%25").map(decodeURI).join("%25");
  })(e.slice($.length) || "/");
}
function ot({ url: e, type: t, intent: n, delta: r }) {
  let o = !1;
  const l = ct(Oe, n, e, t);
  void 0 !== r && (l.navigation.delta = r);
  const a = h(p({}, l.navigation), {
    cancel: () => {
      (o = !0), l.reject(new Error("navigation cancelled"));
    },
  });
  return $e || Ee.forEach((e) => e(a)), o ? null : l;
}
function lt(e) {
  return m(
    this,
    arguments,
    function* ({
      type: e,
      url: t,
      popped: n,
      keepfocus: r,
      noscroll: o,
      replace_state: l,
      state: a = {},
      redirect_count: i = 0,
      nav_token: s = {},
      accept: u = he,
      block: c = he,
    }) {
      const d = nt(t, !1),
        f = ot({
          url: t,
          type: e,
          delta: null == n ? void 0 : n.delta,
          intent: d,
        });
      if (!f) return void c();
      const p = xe,
        h = Pe;
      u(), ($e = !0), Ie && ce.navigating.set(f.navigation), (je = s);
      let m = d && (yield Ze(d));
      if (!m) {
        if (ne(t, $)) return yield fe(t);
        m = yield at(
          t,
          { id: null },
          yield it(new w(404, "Not Found", `Not found: ${t.pathname}`), {
            url: t,
            params: {},
            route: { id: null },
          }),
          404
        );
      }
      if (((t = (null == d ? void 0 : d.url) || t), je !== s))
        return f.reject(new Error("navigation aborted")), !1;
      if ("redirect" === m.type) {
        if (!(i >= 20))
          return Ge(new URL(m.location, t).href, {}, i + 1, s), !1;
        m = yield tt({
          status: 500,
          error: yield it(new Error("Redirect loop"), {
            url: t,
            params: {},
            route: { id: null },
          }),
          url: t,
          route: { id: null },
        });
      } else if (m.props.page.status >= 400) {
        (yield ce.updated.check()) && (yield pe(), yield fe(t));
      }
      if (
        ((ke.length = 0),
        (Be = !1),
        de(p),
        qe(h),
        m.props.page.url.pathname !== t.pathname &&
          (t.pathname = m.props.page.url.pathname),
        (a = n ? n.state : a),
        !n)
      ) {
        const e = l ? 0 : 1,
          n = { [q]: (xe += e), [W]: (Pe += e), [V]: a };
        (l ? history.replaceState : history.pushState).call(history, n, "", t),
          l ||
            (function (e, t) {
              let n = e + 1;
              for (; se[n]; ) delete se[n], (n += 1);
              for (n = t + 1; ue[n]; ) delete ue[n], (n += 1);
            })(xe, Pe);
      }
      if (((Se = null), (m.props.page.state = a), Ie)) {
        (Oe = m.state), m.props.page && (m.props.page.url = t);
        const e = (yield Promise.all(_e.map((e) => e(f.navigation)))).filter(
          (e) => "function" == typeof e
        );
        if (e.length > 0) {
          let t = function () {
            Ce = Ce.filter((t) => !e.includes(t));
          };
          e.push(t), Ce.push(...e);
        }
        Re.$set(m.props), (De = !0);
      } else He(m, we, !1);
      const { activeElement: y } = document;
      yield v();
      const g = n ? n.scroll : o ? H() : null;
      if (Te) {
        const e =
          t.hash &&
          document.getElementById(decodeURIComponent(t.hash.slice(1)));
        g ? scrollTo(g.x, g.y) : e ? e.scrollIntoView() : scrollTo(0, 0);
      }
      const b =
        document.activeElement !== y &&
        document.activeElement !== document.body;
      r ||
        b ||
        (function () {
          const e = document.querySelector("[autofocus]");
          if (e) e.focus();
          else {
            const e = document.body,
              t = e.getAttribute("tabindex");
            (e.tabIndex = -1),
              e.focus({ preventScroll: !0, focusVisible: !1 }),
              null !== t
                ? e.setAttribute("tabindex", t)
                : e.removeAttribute("tabindex");
            const n = getSelection();
            if (n && "None" !== n.type) {
              const e = [];
              for (let t = 0; t < n.rangeCount; t += 1) e.push(n.getRangeAt(t));
              setTimeout(() => {
                if (n.rangeCount === e.length) {
                  for (let t = 0; t < n.rangeCount; t += 1) {
                    const r = e[t],
                      o = n.getRangeAt(t);
                    if (
                      r.commonAncestorContainer !== o.commonAncestorContainer ||
                      r.startContainer !== o.startContainer ||
                      r.endContainer !== o.endContainer ||
                      r.startOffset !== o.startOffset ||
                      r.endOffset !== o.endOffset
                    )
                      return;
                  }
                  n.removeAllRanges();
                }
              });
            }
          }
        })(),
        (Te = !0),
        m.props.page && (Ue = m.props.page),
        ($e = !1),
        "popstate" === e && We(Pe),
        f.fulfil(void 0),
        Ce.forEach((e) => e(f.navigation)),
        ce.navigating.set(null);
    }
  );
}
function at(e, t, n, r) {
  return m(this, null, function* () {
    return e.origin !== G || e.pathname !== location.pathname || Le
      ? yield fe(e)
      : yield tt({ status: r, error: n, url: e, route: t });
  });
}
function it(e, t) {
  var n;
  if (e instanceof g) return e.body;
  const r = ae(e),
    o = (function (e) {
      return e instanceof w ? e.text : "Internal Error";
    })(e);
  return null !=
    (n = be.hooks.handleError({ error: e, event: t, status: r, message: o }))
    ? n
    : { message: o };
}
function st(e, t) {
  return m(this, null, function* () {
    var n;
    const r = new URL(e);
    var o;
    (r.pathname = (o = e.pathname).endsWith(".html")
      ? o.replace(/\.html$/, ".html__data.json")
      : o.replace(/\/$/, "") + "/__data.json"),
      e.pathname.endsWith("/") &&
        r.searchParams.append("x-sveltekit-trailing-slash", "1"),
      r.searchParams.append(
        "x-sveltekit-invalidated",
        t.map((e) => (e ? "1" : "0")).join("")
      );
    const l = yield _(r.href);
    if (!l.ok) {
      let e;
      throw (
        ((
          null == (n = l.headers.get("content-type"))
            ? void 0
            : n.includes("application/json")
        )
          ? (e = yield l.json())
          : 404 === l.status
          ? (e = "Not Found")
          : 500 === l.status && (e = "Internal Error"),
        new g(l.status, e))
      );
    }
    return new Promise((e) =>
      m(this, null, function* () {
        var t;
        const n = new Map(),
          r = l.body.getReader(),
          o = new TextDecoder();
        function a(e) {
          return (function (e, t) {
            if ("number" == typeof e) return o(e, !0);
            if (!Array.isArray(e) || 0 === e.length)
              throw new Error("Invalid input");
            const n = e,
              r = Array(n.length);
            function o(e, l = !1) {
              if (-1 === e) return;
              if (-3 === e) return NaN;
              if (-4 === e) return 1 / 0;
              if (-5 === e) return -1 / 0;
              if (-6 === e) return -0;
              if (l) throw new Error("Invalid input");
              if (e in r) return r[e];
              const a = n[e];
              if (a && "object" == typeof a)
                if (Array.isArray(a))
                  if ("string" == typeof a[0]) {
                    const n = a[0],
                      l = null == t ? void 0 : t[n];
                    if (l) return (r[e] = l(o(a[1])));
                    switch (n) {
                      case "Date":
                        r[e] = new Date(a[1]);
                        break;
                      case "Set":
                        const t = new Set();
                        r[e] = t;
                        for (let e = 1; e < a.length; e += 1) t.add(o(a[e]));
                        break;
                      case "Map":
                        const l = new Map();
                        r[e] = l;
                        for (let e = 1; e < a.length; e += 2)
                          l.set(o(a[e]), o(a[e + 1]));
                        break;
                      case "RegExp":
                        r[e] = new RegExp(a[1], a[2]);
                        break;
                      case "Object":
                        r[e] = Object(a[1]);
                        break;
                      case "BigInt":
                        r[e] = BigInt(a[1]);
                        break;
                      case "null":
                        const i = Object.create(null);
                        r[e] = i;
                        for (let e = 1; e < a.length; e += 2)
                          i[a[e]] = o(a[e + 1]);
                        break;
                      case "Int8Array":
                      case "Uint8Array":
                      case "Uint8ClampedArray":
                      case "Int16Array":
                      case "Uint16Array":
                      case "Int32Array":
                      case "Uint32Array":
                      case "Float32Array":
                      case "Float64Array":
                      case "BigInt64Array":
                      case "BigUint64Array": {
                        const t = new (0, globalThis[n])(re(a[1]));
                        r[e] = t;
                        break;
                      }
                      case "ArrayBuffer": {
                        const t = re(a[1]);
                        r[e] = t;
                        break;
                      }
                      default:
                        throw new Error(`Unknown type ${n}`);
                    }
                  } else {
                    const t = new Array(a.length);
                    r[e] = t;
                    for (let e = 0; e < a.length; e += 1) {
                      const n = a[e];
                      -2 !== n && (t[e] = o(n));
                    }
                  }
                else {
                  const t = {};
                  r[e] = t;
                  for (const e in a) {
                    const n = a[e];
                    t[e] = o(n);
                  }
                }
              else r[e] = a;
              return r[e];
            }
            return o(0);
          })(e, {
            Promise: (e) =>
              new Promise((t, r) => {
                n.set(e, { fulfil: t, reject: r });
              }),
          });
        }
        let i = "";
        for (;;) {
          const { done: l, value: s } = yield r.read();
          if (l && !i) break;
          for (i += !s && i ? "\n" : o.decode(s, { stream: !0 }); ; ) {
            const r = i.indexOf("\n");
            if (-1 === r) break;
            const o = JSON.parse(i.slice(0, r));
            if (((i = i.slice(r + 1)), "redirect" === o.type)) return e(o);
            if ("data" === o.type)
              null == (t = o.nodes) ||
                t.forEach((e) => {
                  "data" === (null == e ? void 0 : e.type) &&
                    ((e.uses = ut(e.uses)), (e.data = a(e.data)));
                }),
                e(o);
            else if ("chunk" === o.type) {
              const { id: e, data: t, error: r } = o,
                l = n.get(e);
              n.delete(e), r ? l.reject(a(r)) : l.fulfil(a(t));
            }
          }
        }
      })
    );
  });
}
function ut(e) {
  var t, n, r;
  return {
    dependencies: new Set(
      null != (t = null == e ? void 0 : e.dependencies) ? t : []
    ),
    params: new Set(null != (n = null == e ? void 0 : e.params) ? n : []),
    parent: !!(null == e ? void 0 : e.parent),
    route: !!(null == e ? void 0 : e.route),
    url: !!(null == e ? void 0 : e.url),
    search_params: new Set(
      null != (r = null == e ? void 0 : e.search_params) ? r : []
    ),
  };
}
function ct(e, t, n, r) {
  var o, l, a, i, s;
  let u, c;
  const d = new Promise((e, t) => {
    (u = e), (c = t);
  });
  d.catch(() => {});
  return {
    navigation: {
      from: {
        params: e.params,
        route: {
          id: null != (l = null == (o = e.route) ? void 0 : o.id) ? l : null,
        },
        url: e.url,
      },
      to: n && {
        params: null != (a = null == t ? void 0 : t.params) ? a : null,
        route: {
          id:
            null !=
            (s = null == (i = null == t ? void 0 : t.route) ? void 0 : i.id)
              ? s
              : null,
        },
        url: n,
      },
      willUnload: !t,
      type: r,
      complete: d,
    },
    fulfil: u,
    reject: c,
  };
}
export { Fe as a, ce as s };
