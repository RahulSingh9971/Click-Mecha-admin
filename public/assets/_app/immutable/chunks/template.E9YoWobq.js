import {
  N as t,
  O as e,
  P as n,
  T as r,
  Q as o,
  o as a,
  z as s,
  x as u,
  v as i,
} from "./runtime.9n-HZsgX.js";
function c(t) {
  var e = document.createElement("template");
  return (e.innerHTML = t), e.content;
}
function d(t, e) {
  var r = n;
  null === r.nodes_start && ((r.nodes_start = t), (r.nodes_end = e));
}
function f(t, n) {
  var u,
    i = !!(n & r),
    f = !!(n & o),
    l = !t.startsWith("<!>");
  return () => {
    if (a) return d(s, null), s;
    void 0 === u && ((u = c(l ? t : "<!>" + t)), i || (u = e(u)));
    var n = f ? document.importNode(u, !0) : u.cloneNode(!0);
    i ? d(e(n), n.lastChild) : d(n, n);
    return n;
  };
}
function l(t, e) {
  var r = f(t, e);
  return () =>
    (function (t) {
      if (a) return t;
      const e = 11 === t.nodeType,
        r = "SCRIPT" === t.tagName ? [t] : t.querySelectorAll("script"),
        o = n;
      for (const n of r) {
        const r = document.createElement("script");
        for (var s of n.attributes) r.setAttribute(s.name, s.value);
        (r.textContent = n.textContent),
          (e ? t.firstChild === n : t === n) && (o.nodes_start = r),
          (e ? t.lastChild === n : t === n) && (o.nodes_end = r),
          n.replaceWith(r);
      }
      return t;
    })(r());
}
function m(e = "") {
  if (!a) {
    var n = t(e + "");
    return d(n, n), n;
  }
  var r = s;
  return 3 !== r.nodeType && (r.before((r = t())), u(r)), d(r, r), r;
}
function v() {
  if (a) return d(s, null), s;
  var e = document.createDocumentFragment(),
    n = document.createComment(""),
    r = t();
  return e.append(n, r), d(n, r), e;
}
function p(t, e) {
  if (a) return (n.nodes_end = s), void i();
  null !== t && t.before(e);
}
export { p as a, l as b, v as c, m as d, d as e, c as f, f as t };
