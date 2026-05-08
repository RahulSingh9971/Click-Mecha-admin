var e = (e, t, a) =>
  new Promise((r, l) => {
    var o = (e) => {
        try {
          i(a.next(e));
        } catch (t) {
          l(t);
        }
      },
      s = (e) => {
        try {
          i(a.throw(e));
        } catch (t) {
          l(t);
        }
      },
      i = (e) => (e.done ? r(e.value) : Promise.resolve(e.value).then(o, s));
    i((a = a.apply(e, t)).next());
  });
import "./disclose-version.NXHwHSTB.js";
import "./legacy.C3TYhYNA.js";
import {
  i as t,
  o as a,
  v as r,
  k as l,
  z as o,
  ak as s,
  al as i,
  am as n,
  x as d,
  O as c,
  af as f,
  p,
  t as h,
  a as x,
  d as v,
  c as u,
  s as m,
  r as w,
  g as b,
  m as g,
  f as y,
  K as k,
} from "./runtime.9n-HZsgX.js";
import { s as L, e as $, b as C, a as _ } from "./store.0Ek3FjD1.js";
import {
  s as B,
  t as M,
  e as j,
  i as H,
  b as z,
  k as R,
  a as U,
  h as A,
  r as Z,
} from "./swiper.DD5xMI7n.js";
import { e as E, f as V, a as D, t as S } from "./template.E9YoWobq.js";
import { i as I } from "./lifecycle.DGYyGzEx.js";
import { p as F } from "./props.R9YbMufj.js";
import { o as T } from "./index-client._4ZjYxeY.js";
import { p as G } from "./stores.DJwQpd29.js";
import { $ as Y } from "./runtime.Bxohg_Hc.js";
function q(e, p, h, x, v) {
  var u,
    m = e,
    w = "";
  t(() => {
    var e;
    w !== (w = null != (e = p()) ? e : "")
      ? (void 0 !== u && (f(u), (u = void 0)),
        "" !== w &&
          (u = l(() => {
            if (a) {
              o.data;
              for (
                var e = r(), t = e;
                null !== e && (8 !== e.nodeType || "" !== e.data);

              )
                (t = e), (e = s(e));
              if (null === e) throw (i(), n);
              return E(o, t), void (m = d(e));
            }
            var l = V(w + "");
            E(c(l), l.lastChild), m.before(l);
          })))
      : a && r();
  });
}
var K = S(
  '<header class="relative hidden sm:flex md:flex lg:flex xl:hidden 2xl:hidden items-center left-0 w-full justify-between h-[8vh] md:h-[8vh] lg:h-[10vh] pl-[20px] pr-[20px] sm:pl-[20px] py-[20px] transition-all !duration-300"><div><a data-sveltekit-reload=""><picture><source type="image/avif"><source type="image/webp"><img alt="Hotel Indigo Seminyak Logo" class="brandM w-[80px] brand filter" width="80" height="52"></picture></a></div> <div class="font-primary font-light flex items-center h-full"><ul class="mr-3"><li class="text-[.8rem]"><button id="dropdownHoverButton" data-dropdown-toggle="dropdownMedlLang" data-dropdown-trigger="hover" class="relative uppercase after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] flex items-center group rotate-0" type="button"> <svg class="w-2.5 h-2.5 ms-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button>  <div id="dropdownMedlLang" class="z-10 !top-[25px] hidden group-hover:flex bg-white divide-y divide-gray-100 rounded-none shadow dark:bg-gray-700 py-2 px-5"><ul class="py-2 text-sm text-body flex flex-col" aria-labelledby="dropdownHoverButton"><li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">English</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Indonesia</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Russia</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Korea</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Simplified Chinese</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Traditional Chinese</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Arabic</a></li></ul></div></li></ul> <button class="focus:ring-0 uppercase flex justify-center flex-col items-end gap-[2px] text-[.8rem] h-[35px] group transition-all duration-300" type="button" data-drawer-target="drawer-mobile" data-drawer-show="drawer-mobile" aria-controls="drawer-mobile"> <span class="line !block h-[1px] w-full bg-white mb-[3px] group-hover:w-[70%] transition-all duration-300"></span> <span class="line !block h-[1px] w-full bg-white mb-[3px]"></span> <span class="line !block h-[1px] w-[50%] bg-white"></span></button> <a target="_blank" class="uppercase  text-white ml-[10px] text-[.7rem] h-full px-5 md:flex items-center justify-center border-[1px] transition-all !duration-300 hover:bg-secondary hover:border-secondary"> </a></div></header>'
);
function P(e, t) {
  p(t, !1);
  const a = L(),
    r = () => C(G, "$page", a),
    l = () => C(Y, "$_", a);
  let o = F(t, "info", 8);
  r().params.locale;
  const s = r().url.pathname.replace(`/${r().params.locale}`, "");
  let i = g(!1);
  T(() => {
    const e = () => {
      window.scrollY > 50 ? v(i, !0) : v(i, !1);
    };
    return (
      window.addEventListener("scroll", e),
      () => {
        window.removeEventListener("scroll", e);
      }
    );
  });
  let n = g(!1);
  I();
  var d = K(),
    c = u(d),
    f = u(c),
    y = u(f),
    k = u(y);
  B(
    k,
    "srcset",
    new URL("../assets/logo-new-ver.6ZgLEZMR.avif", import.meta.url).href +
      " 80w"
  );
  var j = m(k);
  B(
    j,
    "srcset",
    new URL("../assets/logo-new-ver.CU0P8SkN.webp", import.meta.url).href +
      " 80w"
  );
  var H = m(j);
  B(
    H,
    "src",
    "" + new URL("../assets/logo-new-ver.CHDTsYS9.png", import.meta.url).href
  ),
    w(y),
    w(f),
    w(c);
  var z = m(c, 2),
    R = u(z),
    U = u(R),
    A = u(U),
    Z = u(A),
    E = m(Z);
  w(A);
  var V = m(A, 2),
    S = u(V),
    q = u(S),
    P = u(q);
  B(P, "href", `/en${s}`), w(q);
  var X = m(q, 2),
    O = u(X);
  B(O, "href", `/id${s}`), w(X);
  var W = m(X, 2),
    N = u(W);
  B(N, "href", `/ru${s}`), w(W);
  var J = m(W, 2),
    Q = u(J);
  B(Q, "href", `/kr${s}`), w(J);
  var ee = m(J, 2),
    te = u(ee);
  B(te, "href", `/zh_cn${s}`), w(ee);
  var ae = m(ee, 2),
    re = u(ae);
  B(re, "href", `/zh_tw${s}`), w(ae);
  var le = m(ae, 2),
    oe = u(le);
  B(oe, "href", `/ar${s}`), w(le), w(S), w(V), w(U), w(R);
  var se = m(R, 2),
    ie = u(se);
  h(() => {
    var e;
    return _(ie, `${null != (e = l()("menu")) ? e : ""} `);
  });
  var ne = m(ie),
    de = m(ne, 2),
    ce = m(de, 2);
  w(se);
  var fe = m(se, 2),
    pe = u(fe, !0);
  h(() => _(pe, l()("book-now"))),
    w(fe),
    w(z),
    w(d),
    h(() => {
      var e, t, a;
      M(d, "bg-transparent", !b(i)),
        M(d, "sm:pr-[20px]", !b(i)),
        M(d, "sm:py-[20px]t", !b(i)),
        M(d, "bg-white", b(i)),
        M(d, "sm:pr-0", b(i)),
        M(d, "shadow-header", b(i)),
        M(d, "sm:py-0", b(i)),
        B(f, "href", `/${null != (e = r().params.locale) ? e : ""}`),
        M(H, "invert", !b(i)),
        M(H, "brightness-0", !b(i)),
        M(z, "text-primary", b(i)),
        M(z, "text-white", !b(i)),
        M(A, "after:bg-white", !b(i)),
        M(A, "after:bg-secondary", b(i)),
        _(Z, `${null != (t = r().params.locale) ? t : ""} `),
        M(E, "rotate-180", b(n)),
        M(se, "text-primary", b(i)),
        M(se, "text-white", !b(i)),
        M(ne, "bg-primary", b(i)),
        M(ne, "bg-white", !b(i)),
        M(de, "bg-primary", b(i)),
        M(de, "bg-white", !b(i)),
        M(ce, "bg-primary", b(i)),
        M(ce, "bg-white", !b(i)),
        B(fe, "href", null == (a = o()[0]) ? void 0 : a.book_url),
        M(fe, "bg-primary", b(i)),
        M(fe, "border-primary", b(i)),
        M(fe, "bg-transparent", !b(i)),
        M(fe, "border-white", !b(i));
    }),
    $("mouseenter", A, () => v(n, !0)),
    $("mouseleave", A, () => v(n, !1)),
    $("mouseenter", V, () => v(n, !0)),
    $("mouseleave", V, () => v(n, !1)),
    $("click", fe, function () {
      !(function () {
        throw new Error("Function not implemented.");
      })();
    }),
    D(e, d),
    x();
}
var X = S(
    '<li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li>'
  ),
  O = S(
    '<header id="heaber-2xl" class="relative hidden sm:hidden md:hidden lg:hidden xl:!flex 2xl:!flex w-full justify-between transition-all duration-300"><div><a data-sveltekit-reload=""><img alt="Hotel Indigo Seminyak Logo" class="filter transition-all duration-300"></a></div> <div class="h-full"><ul class="uppercase items-center gap-[15px] py-[40px] text-white lg:text-[.5rem] xl:text-[.8rem] hidden sm:flex"><li><a data-sveltekit-reload="" class="relative after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li> <li><a data-sveltekit-reload="" id="dropdownHoverButton" data-dropdown-toggle="dropdownXxlRoom" data-dropdown-trigger="hover" class="relative after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] flex items-center group rotate-0" type="button"> <svg class="w-2.5 h-2.5 ms-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></a> <div id="dropdownXxlRoom" class="z-10 !top-[25px] hidden group-hover:flex bg-white divide-y divide-gray-100 rounded-none shadow dark:bg-gray-700 py-2 px-5"><ul class="py-2 text-sm text-body flex flex-col" aria-labelledby="dropdownHoverButton"><li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li></ul></div></li> <li><a data-sveltekit-reload="" id="dropdownHoverButton" data-dropdown-toggle="dropdownXxlFacilities" data-dropdown-trigger="hover" class="relative after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] flex items-center group rotate-0" type="button"> <svg class="w-2.5 h-2.5 ms-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></a>  <div id="dropdownXxlFacilities" class="z-10 !top-[25px] hidden group-hover:flex bg-white divide-y divide-gray-100 rounded-none shadow dark:bg-gray-700 py-2 px-5"><ul class="py-2 text-sm text-body flex flex-col" aria-labelledby="dropdownHoverButton"><li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li></ul></div></li> <li><a data-sveltekit-reload="" id="dropdownHoverButton" data-dropdown-toggle="dropdownXxlDining" data-dropdown-trigger="hover" class="relative after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] flex items-center group rotate-0" type="button"> <svg class="w-2.5 h-2.5 ms-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></a>  <div id="dropdownXxlDining" class="z-10 !top-[25px] hidden group-hover:flex bg-white divide-y divide-gray-100 rounded-none shadow dark:bg-gray-700 py-2 px-5"><ul class="py-2 text-sm text-body flex flex-col" aria-labelledby="dropdownHoverButton"></ul></div></li> <li><button id="dropdownHoverButton" data-dropdown-toggle="dropdownEvent" data-dropdown-trigger="hover" class="uppercase relative after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] flex items-center group rotate-0" type="button"> <svg class="w-2.5 h-2.5 ms-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button>  <div id="dropdownEvent" class="z-10 !top-[25px] hidden group-hover:flex bg-white divide-y divide-gray-100 rounded-none shadow dark:bg-gray-700 py-2 px-5"><ul class="py-2 text-sm text-body flex flex-col" aria-labelledby="dropdownHoverButton"><li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li></ul></div></li> <li><a data-sveltekit-reload="" class="relative after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li> <li><a data-sveltekit-reload="" class="relative after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li>  <li><a data-sveltekit-reload="" class="relative after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li> <li><a data-sveltekit-reload="" class="relative after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li> <li><a data-sveltekit-reload="" class="relative after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"> </a></li> <li><button id="dropdownHoverButton" data-dropdown-toggle="dropdownXxlLang" data-dropdown-trigger="hover" class="uppercase relative after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] flex items-center group rotate-0" type="button"> <svg class="w-2.5 h-2.5 ms-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button>  <div id="dropdownXxlLang" class="z-10 !top-[25px] hidden group-hover:flex bg-white divide-y divide-gray-100 rounded-none shadow dark:bg-gray-700 py-2 px-5"><ul class="py-2 text-sm text-body flex flex-col" aria-labelledby="dropdownHoverButton"><li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">English</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Indonesia</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Russia</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Korea</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Simplified Chinese</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Traditional Chinese</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Arabic</a></li></ul></div></li></ul> <a data-sveltekit-reload="" target="_blank" class=" items-center bg-primary text-white font-primary uppercase text-[.8rem] h-full px-[20px] ml-[15px] transition-all duration-300 hover:bg-secondary"> </a></div></header>'
  );
function W(e, t) {
  p(t, !1);
  const a = L(),
    r = () => C(G, "$page", a),
    l = () => C(Y, "$_", a);
  let o = F(t, "dining", 8),
    s = F(t, "info", 8);
  r().params.locale;
  const i = r().url.pathname.replace(`/${r().params.locale}`, "");
  let n = g(!1);
  T(() => {
    const e = () => {
      window.scrollY > 50 ? v(n, !0) : v(n, !1);
    };
    return (
      window.addEventListener("scroll", e),
      () => {
        window.removeEventListener("scroll", e);
      }
    );
  });
  let d = g(!1),
    c = g(!1),
    f = g(!1),
    y = g(!1),
    k = g(!1);
  I();
  var z = O(),
    R = u(z),
    U = u(R),
    A = u(U);
  w(U), w(R);
  var Z = m(R, 2),
    E = u(Z),
    V = u(E),
    S = u(V),
    q = u(S, !0);
  h(() => _(q, l()("header-about"))), w(S), w(V);
  var K = m(V, 2),
    P = u(K),
    W = u(P);
  h(() => {
    var e;
    return _(W, `${null != (e = l()("header-accommodation")) ? e : ""} `);
  });
  var N = m(W);
  w(P);
  var J = m(P, 2),
    Q = u(J),
    ee = u(Q),
    te = u(ee),
    ae = u(te, !0);
  h(() => _(ae, l()("header-accommodation-room"))), w(te), w(ee);
  var re = m(ee, 2),
    le = u(re),
    oe = u(le, !0);
  h(() => _(oe, l()("header-accommodation-suite"))), w(le), w(re);
  var se = m(re, 2),
    ie = u(se),
    ne = u(ie, !0);
  h(() => _(ne, l()("header-accommodation-onebed"))), w(ie), w(se);
  var de = m(se, 2),
    ce = u(de),
    fe = u(ce, !0);
  h(() => _(fe, l()("header-accommodation-twobed"))),
    w(ce),
    w(de),
    w(Q),
    w(J),
    w(K);
  var pe = m(K, 2),
    he = u(pe),
    xe = u(he);
  h(() => {
    var e;
    return _(xe, `${null != (e = l()("header-facilities")) ? e : ""} `);
  });
  var ve = m(xe);
  w(he);
  var ue = m(he, 2),
    me = u(ue),
    we = u(me),
    be = u(we),
    ge = u(be, !0);
  h(() => _(ge, l()("header-facilities-spa"))), w(be), w(we);
  var ye = m(we, 2),
    ke = u(ye),
    Le = u(ke, !0);
  h(() => _(Le, l()("header-facilities-healthclub"))), w(ke), w(ye);
  var $e = m(ye, 2),
    Ce = u($e),
    _e = u(Ce, !0);
  h(() => _(_e, l()("header-facilities-wellness"))),
    w(Ce),
    w($e),
    w(me),
    w(ue),
    w(pe);
  var Be = m(pe, 2),
    Me = u(Be),
    je = u(Me);
  h(() => {
    var e;
    return _(je, `${null != (e = l()("header-dining")) ? e : ""} `);
  });
  var He = m(je);
  w(Me);
  var ze = m(Me, 2),
    Re = u(ze);
  j(Re, 5, o, H, (e, t) => {
    var a = X(),
      l = u(a),
      o = u(l, !0);
    w(l),
      w(a),
      h(() => {
        var e, a;
        B(
          l,
          "href",
          `/${null != (e = r().params.locale) ? e : ""}/dining/${
            null != (a = b(t).slug) ? a : ""
          }`
        ),
          _(o, b(t).name);
      }),
      D(e, a);
  }),
    w(Re),
    w(ze),
    w(Be);
  var Ue = m(Be, 2),
    Ae = u(Ue),
    Ze = u(Ae);
  h(() => {
    var e;
    return _(Ze, `${null != (e = l()("header-event")) ? e : ""} `);
  });
  var Ee = m(Ze);
  w(Ae);
  var Ve = m(Ae, 2),
    De = u(Ve),
    Se = u(De),
    Ie = u(Se),
    Fe = u(Ie, !0);
  h(() => _(Fe, l()("header-meeting"))), w(Ie), w(Se);
  var Te = m(Se, 2),
    Ge = u(Te),
    Ye = u(Ge, !0);
  h(() => _(Ye, l()("header-wedding"))), w(Ge), w(Te), w(De), w(Ve), w(Ue);
  var qe = m(Ue, 2),
    Ke = u(qe),
    Pe = u(Ke, !0);
  h(() => _(Pe, l()("header-offers"))), w(Ke), w(qe);
  var Xe = m(qe, 2),
    Oe = u(Xe),
    We = u(Oe, !0);
  h(() => _(We, l()("header-press"))), w(Oe), w(Xe);
  var Ne = m(Xe, 2),
    Je = u(Ne),
    Qe = u(Je, !0);
  h(() => _(Qe, l()("header-gallery"))), w(Je), w(Ne);
  var et = m(Ne, 2),
    tt = u(et),
    at = u(tt, !0);
  h(() => _(at, l()("header-awards"))), w(tt), w(et);
  var rt = m(et, 2),
    lt = u(rt),
    ot = u(lt, !0);
  h(() => _(ot, l()("header-contact"))), w(lt), w(rt);
  var st = m(rt, 2),
    it = u(st),
    nt = u(it),
    dt = m(nt);
  w(it);
  var ct = m(it, 2),
    ft = u(ct),
    pt = u(ft),
    ht = u(pt);
  B(ht, "href", `/en${i}`), w(pt);
  var xt = m(pt, 2),
    vt = u(xt);
  B(vt, "href", `/id${i}`), w(xt);
  var ut = m(xt, 2),
    mt = u(ut);
  B(mt, "href", `/ru${i}`), w(ut);
  var wt = m(ut, 2),
    bt = u(wt);
  B(bt, "href", `/kr${i}`), w(wt);
  var gt = m(wt, 2),
    yt = u(gt);
  B(yt, "href", `/zh_cn${i}`), w(gt);
  var kt = m(gt, 2),
    Lt = u(kt);
  B(Lt, "href", `/zh_tw${i}`), w(kt);
  var $t = m(kt, 2),
    Ct = u($t);
  B(Ct, "href", `/ar${i}`), w($t), w(ft), w(ct), w(st), w(E);
  var _t = m(E, 2),
    Bt = u(_t, !0);
  h(() => _(Bt, l()("book-now"))),
    w(_t),
    w(Z),
    w(z),
    h(() => {
      var e, t, a, l, o, i, p, h, x, v, u, m, w, g, L, $, C, j, H, R, V;
      M(z, "bg-white", b(n)),
        M(z, "h-[80px]", b(n)),
        M(z, "pl-[50px]", b(n)),
        M(z, "items-center", b(n)),
        M(z, "shadow-header", b(n)),
        M(z, "h-[155px]", !b(n)),
        M(z, "px-[50px]", !b(n)),
        M(z, "items-top", !b(n)),
        B(U, "href", `/${null != (e = r().params.locale) ? e : ""}`),
        B(
          A,
          "src",
          b(n) ? "/images/logo-new-hor.png" : "/images/logo-new-ver.png"
        ),
        M(A, "w-[150px]", b(n)),
        M(A, "w-[160px]", !b(n)),
        M(A, "pt-[40px]", !b(n)),
        M(A, "invert", !b(n)),
        M(A, "brightness-0", !b(n)),
        M(Z, "flex", b(n)),
        M(Z, "item-center", b(n)),
        M(E, "text-white", !b(n)),
        M(E, "font-primary", b(n)),
        M(E, "py-[40px]", !b(n)),
        B(S, "href", `/${null != (t = r().params.locale) ? t : ""}/about-us`),
        M(S, "after:bg-white", !b(n)),
        M(S, "after:bg-secondary", b(n)),
        B(
          P,
          "href",
          `/${null != (a = r().params.locale) ? a : ""}/accommodation/rooms`
        ),
        M(P, "after:bg-white", !b(n)),
        M(P, "after:bg-secondary", b(n)),
        M(N, "rotate-180", b(d)),
        B(
          te,
          "href",
          `/${null != (l = r().params.locale) ? l : ""}/accommodation/rooms`
        ),
        B(
          le,
          "href",
          `/${null != (o = r().params.locale) ? o : ""}/accommodation/suites`
        ),
        B(
          ie,
          "href",
          `/${
            null != (i = r().params.locale) ? i : ""
          }/accommodation/one-bedroom-villa`
        ),
        B(
          ce,
          "href",
          `/${
            null != (p = r().params.locale) ? p : ""
          }/accommodation/two-bedroom-villa`
        ),
        B(he, "href", `/${null != (h = r().params.locale) ? h : ""}/wellness`),
        M(he, "after:bg-white", !b(n)),
        M(he, "after:bg-secondary", b(n)),
        M(ve, "rotate-180", b(c)),
        B(
          be,
          "href",
          `/${null != (x = r().params.locale) ? x : ""}/wellness/sava-spa`
        ),
        B(
          ke,
          "href",
          `/${null != (v = r().params.locale) ? v : ""}/wellness/gym`
        ),
        B(
          Ce,
          "href",
          `/${null != (u = r().params.locale) ? u : ""}/wellness/activities`
        ),
        B(Me, "href", `/${null != (m = r().params.locale) ? m : ""}/dining`),
        M(Me, "after:bg-white", !b(n)),
        M(Me, "after:bg-secondary", b(n)),
        M(He, "rotate-180", b(f)),
        M(Ae, "after:bg-white", !b(n)),
        M(Ae, "after:bg-secondary", b(n)),
        M(Ee, "rotate-180", b(k)),
        B(Ie, "href", `/${null != (w = r().params.locale) ? w : ""}/meeting`),
        B(Ge, "href", `/${null != (g = r().params.locale) ? g : ""}/wedding`),
        B(Ke, "href", `/${null != (L = r().params.locale) ? L : ""}/offers`),
        M(Ke, "after:bg-white", !b(n)),
        M(Ke, "after:bg-secondary", b(n)),
        B(
          Oe,
          "href",
          `/${null != ($ = r().params.locale) ? $ : ""}/press-release`
        ),
        M(Oe, "after:bg-white", !b(n)),
        M(Oe, "after:bg-secondary", b(n)),
        B(Je, "href", `/${null != (C = r().params.locale) ? C : ""}/gallery`),
        M(Je, "after:bg-white", !b(n)),
        M(Je, "after:bg-secondary", b(n)),
        B(tt, "href", `/${null != (j = r().params.locale) ? j : ""}/awards`),
        M(tt, "after:bg-white", !b(n)),
        M(tt, "after:bg-secondary", b(n)),
        B(lt, "href", `/${null != (H = r().params.locale) ? H : ""}/contact`),
        M(lt, "after:bg-white", !b(n)),
        M(lt, "after:bg-secondary", b(n)),
        M(it, "after:bg-white", !b(n)),
        M(it, "after:bg-secondary", b(n)),
        _(nt, `${null != (R = r().params.locale) ? R : ""} `),
        M(dt, "rotate-180", b(y)),
        B(_t, "href", null == (V = s()[0]) ? void 0 : V.book_url),
        M(_t, "flex", b(n)),
        M(_t, "hidden", !b(n));
    }),
    $("mouseenter", P, () => v(d, !0)),
    $("mouseleave", P, () => v(d, !1)),
    $("mouseenter", J, () => v(d, !0)),
    $("mouseleave", J, () => v(d, !1)),
    $("mouseenter", he, () => v(c, !0)),
    $("mouseleave", he, () => v(c, !1)),
    $("mouseenter", ue, () => v(c, !0)),
    $("mouseleave", ue, () => v(c, !1)),
    $("mouseenter", Me, () => v(f, !0)),
    $("mouseleave", Me, () => v(f, !1)),
    $("mouseenter", ze, () => v(f, !0)),
    $("mouseleave", ze, () => v(f, !1)),
    $("mouseenter", Ae, () => v(k, !0)),
    $("mouseleave", Ae, () => v(k, !1)),
    $("mouseenter", Ve, () => v(k, !0)),
    $("mouseleave", Ve, () => v(k, !1)),
    $("mouseenter", it, () => v(y, !0)),
    $("mouseleave", it, () => v(y, !1)),
    $("mouseenter", ct, () => v(y, !0)),
    $("mouseleave", ct, () => v(y, !1)),
    $("click", _t, function () {
      !(function () {
        throw new Error("Function not implemented.");
      })();
    }),
    D(e, z),
    x();
}
var N = S(
  '<header class="relative flex sm:hidden items-center left-0 w-full h-[8vh] md:h-[8vh] lg:h-[10vh] pl-[20px] pr-[20px] sm:pl-[20px] sm:pr-[20px] py-[20px] sm:py-[20px] bg-transparent transition-all !duration-300 justify-center"><a data-sveltekit-reload=""><picture><source type="image/avif"><source type="image/webp"><img alt="Hotel Indigo Seminyak Logo" class="brandMobile w-[95px] brand filter mb-1" width="130" height="85"></picture></a> <ul class="mr-3 absolute right-0 top-0 bottom-0 flex items-center"><li class="text-[.8rem]"><a id="dropdownHoverButton" data-dropdown-toggle="dropdownSmallLang" class="relative uppercase after:content-[\'\'] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] flex items-center group rotate-0" type="button"> <svg class="w-2.5 h-2.5 ms-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></a> <div id="dropdownSmallLang" class="z-10 !top-[30px] hidden group-hover:flex bg-white divide-y divide-gray-100 rounded-none shadow dark:bg-gray-700 py-2 px-5 w-[180px] !-m-[10px]"><ul class="py-2 text-sm text-body flex flex-col" aria-labelledby="dropdownHoverButton"><li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">English</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Indonesia</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Russia</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Korea</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Simplified Chinese</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Traditional Chinese</a></li> <li class="border-b-[1px] border-[#f5f5f5]"><a data-sveltekit-reload="" class="py-3 block relative after:content-[\'\'] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]">Arabic</a></li></ul></div></li></ul></header>'
);
var J = S(
    '<li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li>'
  ),
  Q = S(
    '<div class="fixed top-0 z-30 w-full"><!> <!> <!></div> <div id="menu-mobile-bottom" class="fixed bottom-0 left-0 w-full z-30 h-[70px] pl-3 bg-[#f3f4f1] sm:hidden block shadow-header transition-all !duration-300"><ul class="flex justify-between items-center"><li class="w-[calc(50%/4)] flex justify-center"><button class="text-primary focus:ring-0 uppercase flex justify-center flex-col items-start gap-[2px] text-[.8rem] h-[35px] group transition-all duration-300" type="button" data-drawer-target="drawer-mobile" data-drawer-show="drawer-mobile" aria-controls="drawer-mobile"> <span class="!block h-[1px] w-full bg-primary mb-[3px] group-hover:w-[70%] transition-all duration-300"></span> <span class="!block h-[1px] w-full bg-primary mb-[3px]"></span> <span class="!block h-[1px] w-[50%] bg-primary"></span></button></li> <li class="flex items-center justify-center w-[calc(50%/4)]"><a href="tel:623612099999" class="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z"></path></svg></a></li> <li class="flex items-center justify-center w-[calc(50%/4)]"><a href="mailto:hotelindigobali.reservations@ihg.com" target="_blank" class="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"></path></svg></a></li> <li class="w-[50%]"><a target="_blank" class="flex flex-col items-center"><span class="text-[5vw] text-[#F5F6F1] bg-primary w-full h-[70px] flex items-center justify-center"><p class="text-[.9rem] font-primary uppercase text-white"> </p></span></a></li></ul></div> <div id="popupOfferMobile" class="fixed bottom-[110px] left-[5px] z-30 shadow-header transition-all duration-500 font-primary font-[400] bg-white max-w-[60vw] p-[20px] hidden"><button class="closeButton absolute top-[5px] right-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path></svg></button> <p class="text-primary text-[.9rem] mb-[10px] uppercase"> </p> <div class="text-[.6rem] mb-[10px]"><!></div> <div class="mt-[5px] flex justify-center sm:inline-block"><a data-sveltekit-reload="" class="bg-primary text-white text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div> <div id="popupRoomMobile" class="fixed bottom-[110px] right-[5px] z-30 shadow-header transition-all duration-500 font-primary font-[400] bg-white max-w-[60vw] p-[30px] hidden"><button class="closeButtonRoom absolute top-[5px] right-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path></svg></button> <div><ul class="flex flex-col gap-4 uppercase"><li><a data-sveltekit-reload="" href="/accommodation/rooms">Rooms</a></li> <li><a data-sveltekit-reload="" href="/accommodation/suites">Suite</a></li> <li><a data-sveltekit-reload="" href="/accommodation/one-bedroom-villa">One Bedroom Villa</a></li> <li><a data-sveltekit-reload="" href="/accommodation/two-bedroom-villa">Two Bedroom Villa</a></li></ul></div></div> <div id="drawer-mobile" class="fixed top-0 left-0 z-40 p-4 overflow-y-auto duration-300 transition-transform -translate-x-full bg-white w-[350px] h-[100dvh] font-primary" tabindex="-1" aria-labelledby="drawer-label"><h5 id="drawer-label" class="block mb-4 text-base font-normal text-primary uppercase leading-[130%] border-b-[1px] border-[#3333334d] pb-[10px]">Hotel Indigo Bali<br>Seminyak Beach</h5> <button type="button" data-drawer-hide="drawer-mobile" aria-controls="drawer-example" class="text-gray-400 bg-transparent transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg> <span class="sr-only">Close menu</span></button> <ul class="font-light flex flex-col gap-[10px] uppercase text-[.7rem]"><li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><div class="collapse rounded-none duration-300 transition-all"><input type="checkbox" class="peer w-full h-full" id="collapse-toggle-1"> <label for="collapse-toggle-1" class="collapse-title p-0 flex justify-between items-center peer-checked:bg-primary peer-checked:text-white peer-checked:p-3"> <svg class="w-5 h-5 transform transition-transform duration-300 collapse-icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg></label> <div class="collapse-content pb-0 hidden duration-300 transition-all peer-checked:block"><ul class="pt-[10px] flex flex-col gap-[8px] duration-300 transition-all"><li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li></ul></div></div></li> <li><div class="collapse rounded-none"><input type="checkbox" class="peer w-full h-full"> <div class="collapse-title p-0 flex justify-between items-center  peer-checked:bg-primary peer-checked:text-white peer-checked:p-3"> <svg class="w-5 h-5 transition-transform duration-300 collapse-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg></div> <div class="collapse-content pb-0 peer-checked:block"><ul class="pt-[10px] flex flex-col gap-[8px]"><li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li></ul></div></div></li> <li><div class="collapse rounded-none"><input type="checkbox" class="peer w-full h-full"> <div class="collapse-title p-0 flex justify-between items-center  peer-checked:bg-primary peer-checked:text-white peer-checked:p-3"> <svg class="w-5 h-5 transition-transform duration-300 collapse-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg></div> <div class="collapse-content pb-0 peer-checked:block"><ul class="pt-[10px] flex flex-col gap-[8px]"></ul></div></div></li> <li><div class="collapse rounded-none"><input type="checkbox" class="peer w-full h-full"> <div class="collapse-title p-0 flex justify-between items-center  peer-checked:bg-primary peer-checked:text-white peer-checked:p-3"> <svg class="w-5 h-5 transition-transform duration-300 collapse-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg></div> <div class="collapse-content pb-0 peer-checked:block"><ul class="pt-[10px] flex flex-col gap-[8px]"><li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li></ul></div></div></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li> <li><a data-sveltekit-reload="" class="text-body transition-all duration-300 hover:text-secondary"> </a></li></ul> <div class="absolute bottom-0 left-0 w-full p-4 bg-white"><p class="font-primary text-body font-light text-[1.2rem] mb-[20px]"> </p> <ul class="flex items-center justify-between w-full"><li><a href="https://www.facebook.com/HotelIndigoBali/" target="_blank"><svg class="fill-[#424242] hover:fill-secondary w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path></svg></a></li> <li><a href="https://www.instagram.com/hotelindigobali/" target="_blank"><svg class="fill-primary hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path><circle cx="14.87" cy="5.26" r="1.09"></circle><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path></svg></a></li> <li><a href="https://twitter.com/hotelindigobali" target="_blank"><svg class="fill-primary hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="m15.08,2.1h2.68l-5.89,6.71,6.88,9.1h-5.4l-4.23-5.53-4.84,5.53H1.59l6.24-7.18L1.24,2.1h5.54l3.82,5.05,4.48-5.05Zm-.94,14.23h1.48L6,3.61h-1.6l9.73,12.71h0Z"></path></svg></a></li> <li><a href="https://www.tripadvisor.com/Hotel_Review-g469404-d9595791-Reviews-Hotel_Indigo_Bali_Seminyak_Beach-Seminyak_Kuta_District_Bali.html" target="_blank"><svg class="fill-primary hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"></path></svg></a></li> <li><a href="https://www.youtube.com/channel/UCO7rAw9av92AWsTFyZSjbaQ" target="_blank"><svg class="fill-primary hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path></svg></a></li> <li><a href="https://www.tiktok.com/@hotelindigobaliseminyak" target="_blank"><svg class="fill-primary hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z"></path></svg></a></li> <li><a href="https://www.linkedin.com/company/hotel-indigo-bali-seminyak-beach/" target="_blank"><svg class="fill-primary hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path></svg></a></li></ul></div></div>',
    1
  );
function ee(e, t) {
  p(t, !1);
  const a = L(),
    r = () => C(G, "$page", a),
    l = () => C(Y, "$_", a);
  let o = F(t, "dining", 8),
    s = F(t, "info", 8);
  r().params.locale,
    r().url.pathname.replace(`/${r().params.locale}`, ""),
    T(() => {
      [{ src: "/js/header.js", async: !1 }].forEach(({ src: e, async: t }) => {
        const a = document.createElement("script");
        (a.src = e),
          (a.async = t),
          (a.onload = () => {}),
          (a.onerror = () => {}),
          document.head.appendChild(a);
      });
    }),
    T(() => {
      const e = () => {};
      return (
        window.addEventListener("scroll", e),
        () => {
          window.removeEventListener("scroll", e);
        }
      );
    }),
    I();
  var i = Q(),
    n = y(i),
    d = u(n);
  W(d, {
    get dining() {
      return o();
    },
    get info() {
      return s();
    },
  });
  var c = m(d, 2);
  P(c, {
    get info() {
      return s();
    },
  }),
    (function (e, t) {
      p(t, !1);
      const a = L(),
        r = () => C(G, "$page", a);
      r().params.locale;
      const l = r().url.pathname.replace(`/${r().params.locale}`, "");
      let o = g(!1);
      T(() => {
        const e = () => {
          window.scrollY > 50 ? v(o, !0) : v(o, !1);
        };
        return (
          window.addEventListener("scroll", e),
          () => {
            window.removeEventListener("scroll", e);
          }
        );
      });
      let s = g(!1);
      I();
      var i = N(),
        n = u(i),
        d = u(n),
        c = u(d);
      B(
        c,
        "srcset",
        new URL("../assets/logo-new-ver.MG4QhvYI.avif", import.meta.url).href +
          " 130w"
      );
      var f = m(c);
      B(
        f,
        "srcset",
        new URL("../assets/logo-new-ver.DyRA-hc9.webp", import.meta.url).href +
          " 130w"
      );
      var y = m(f);
      B(
        y,
        "src",
        "" +
          new URL("../assets/logo-new-ver.BxASHqTw.png", import.meta.url).href
      ),
        w(d),
        w(n);
      var k = m(n, 2),
        j = u(k),
        H = u(j),
        z = u(H),
        R = m(z);
      w(H);
      var U = m(H, 2),
        A = u(U),
        Z = u(A),
        E = u(Z);
      B(E, "href", `/en${l}`), w(Z);
      var V = m(Z, 2),
        S = u(V);
      B(S, "href", `/id${l}`), w(V);
      var F = m(V, 2),
        Y = u(F);
      B(Y, "href", `/ru${l}`), w(F);
      var q = m(F, 2),
        K = u(q);
      B(K, "href", `/kr${l}`), w(q);
      var P = m(q, 2),
        X = u(P);
      B(X, "href", `/zh_cn${l}`), w(P);
      var O = m(P, 2),
        W = u(O);
      B(W, "href", `/zh_tw${l}`), w(O);
      var J = m(O, 2),
        Q = u(J);
      B(Q, "href", `/ar${l}`),
        w(J),
        w(A),
        w(U),
        w(j),
        w(k),
        w(i),
        h(() => {
          var e, t;
          M(i, "bg-transparent", !b(o)),
            M(i, "bg-white", b(o)),
            M(i, "shadow-header", b(o)),
            B(n, "href", `/${null != (e = r().params.locale) ? e : ""}`),
            M(y, "invert", !b(o)),
            M(y, "brightness-0", !b(o)),
            M(H, "after:bg-white", !b(o)),
            M(H, "after:bg-secondary", b(o)),
            M(H, "text-primary", b(o)),
            M(H, "text-white", !b(o)),
            _(z, `${null != (t = r().params.locale) ? t : ""} `),
            M(R, "rotate-180", b(s));
        }),
        $("mouseenter", H, () => v(s, !0)),
        $("mouseleave", H, () => v(s, !1)),
        D(e, i),
        x();
    })(m(c, 2), {}),
    w(n);
  var f = m(n, 2),
    z = u(f),
    R = u(z),
    U = u(R),
    A = u(U);
  h(() => {
    var e;
    return _(A, `${null != (e = l()("menu")) ? e : ""} `);
  }),
    k(5),
    w(U),
    w(R);
  var Z = m(R, 6),
    E = u(Z),
    V = u(E),
    S = u(V),
    K = u(S, !0);
  h(() => _(K, l()("check-availability"))), w(S), w(V), w(E), w(Z), w(z), w(f);
  var X = m(f, 2),
    O = m(u(X), 2),
    ee = u(O, !0);
  h(() => _(ee, l()("side-promo-title"))), w(O);
  var te = m(O, 2);
  q(u(te), () => l()("side-promo-desc")), w(te);
  var ae = m(te, 2),
    re = u(ae),
    le = u(re, !0);
  h(() => _(le, l()("book-now"))), w(re), w(ae), w(X);
  var oe = m(X, 4),
    se = m(u(oe), 4),
    ie = u(se),
    ne = u(ie),
    de = u(ne, !0);
  h(() => _(de, l()("header-home"))), w(ne), w(ie);
  var ce = m(ie, 2),
    fe = u(ce),
    pe = u(fe, !0);
  h(() => _(pe, l()("header-about"))), w(fe), w(ce);
  var he = m(ce, 2),
    xe = u(he),
    ve = m(u(xe), 2),
    ue = u(ve);
  h(() => {
    var e;
    return _(ue, `${null != (e = l()("header-accommodation")) ? e : ""} `);
  }),
    k(),
    w(ve);
  var me = m(ve, 2),
    we = u(me),
    be = u(we),
    ge = u(be),
    ye = u(ge, !0);
  h(() => _(ye, l()("header-accommodation-room"))), w(ge), w(be);
  var ke = m(be, 2),
    Le = u(ke),
    $e = u(Le, !0);
  h(() => _($e, l()("header-accommodation-suite"))), w(Le), w(ke);
  var Ce = m(ke, 2),
    _e = u(Ce),
    Be = u(_e, !0);
  h(() => _(Be, l()("header-accommodation-onebed"))), w(_e), w(Ce);
  var Me = m(Ce, 2),
    je = u(Me),
    He = u(je, !0);
  h(() => _(He, l()("header-accommodation-twobed"))),
    w(je),
    w(Me),
    w(we),
    w(me),
    w(xe),
    w(he);
  var ze = m(he, 2),
    Re = u(ze),
    Ue = m(u(Re), 2),
    Ae = u(Ue);
  h(() => {
    var e;
    return _(Ae, `${null != (e = l()("header-facilities")) ? e : ""} `);
  }),
    k(),
    w(Ue);
  var Ze = m(Ue, 2),
    Ee = u(Ze),
    Ve = u(Ee),
    De = u(Ve),
    Se = u(De, !0);
  h(() => _(Se, l()("header-facilities-spa"))), w(De), w(Ve);
  var Ie = m(Ve, 2),
    Fe = u(Ie),
    Te = u(Fe, !0);
  h(() => _(Te, l()("header-facilities-healthclub"))), w(Fe), w(Ie);
  var Ge = m(Ie, 2),
    Ye = u(Ge),
    qe = u(Ye, !0);
  h(() => _(qe, l()("header-facilities-wellness"))),
    w(Ye),
    w(Ge),
    w(Ee),
    w(Ze),
    w(Re),
    w(ze);
  var Ke = m(ze, 2),
    Pe = u(Ke),
    Xe = m(u(Pe), 2),
    Oe = u(Xe);
  h(() => {
    var e;
    return _(Oe, `${null != (e = l()("header-dining")) ? e : ""} `);
  }),
    k(),
    w(Xe);
  var We = m(Xe, 2),
    Ne = u(We);
  j(Ne, 5, o, H, (e, t) => {
    var a = J(),
      l = u(a),
      o = u(l, !0);
    w(l),
      w(a),
      h(() => {
        var e, a;
        B(
          l,
          "href",
          `/${null != (e = r().params.locale) ? e : ""}/dining/${
            null != (a = b(t).slug) ? a : ""
          }`
        ),
          _(o, b(t).name);
      }),
      D(e, a);
  }),
    w(Ne),
    w(We),
    w(Pe),
    w(Ke);
  var Je = m(Ke, 2),
    Qe = u(Je),
    et = m(u(Qe), 2),
    tt = u(et);
  h(() => {
    var e;
    return _(tt, `${null != (e = l()("header-event")) ? e : ""} `);
  }),
    k(),
    w(et);
  var at = m(et, 2),
    rt = u(at),
    lt = u(rt),
    ot = u(lt),
    st = u(ot, !0);
  h(() => _(st, l()("header-meeting"))), w(ot), w(lt);
  var it = m(lt, 2),
    nt = u(it),
    dt = u(nt, !0);
  h(() => _(dt, l()("header-wedding"))),
    w(nt),
    w(it),
    w(rt),
    w(at),
    w(Qe),
    w(Je);
  var ct = m(Je, 2),
    ft = u(ct),
    pt = u(ft, !0);
  h(() => _(pt, l()("header-offers"))), w(ft), w(ct);
  var ht = m(ct, 2),
    xt = u(ht),
    vt = u(xt, !0);
  h(() => _(vt, l()("header-press"))), w(xt), w(ht);
  var ut = m(ht, 2),
    mt = u(ut),
    wt = u(mt, !0);
  h(() => _(wt, l()("header-gallery"))), w(mt), w(ut);
  var bt = m(ut, 2),
    gt = u(bt),
    yt = u(gt, !0);
  h(() => _(yt, l()("header-awards"))), w(gt), w(bt);
  var kt = m(bt, 2),
    Lt = u(kt),
    $t = u(Lt, !0);
  h(() => _($t, l()("header-contact"))), w(Lt), w(kt), w(se);
  var Ct = m(se, 2),
    _t = u(Ct),
    Bt = u(_t, !0);
  h(() => _(Bt, l()("footer-followus"))),
    w(_t),
    k(2),
    w(Ct),
    w(oe),
    h(() => {
      var e, t, a, l, o, i, n, d, c, f, p, h, x, v, u, m, w, b;
      B(E, "href", null == (e = s()[0]) ? void 0 : e.book_url),
        B(
          re,
          "href",
          `/${
            null != (t = r().params.locale) ? t : ""
          }/offers/elevate-your-stay`
        ),
        B(ne, "href", `/${null != (a = r().params.locale) ? a : ""}`),
        B(fe, "href", `/${null != (l = r().params.locale) ? l : ""}/about-us`),
        B(
          ge,
          "href",
          `/${null != (o = r().params.locale) ? o : ""}/accommodation/rooms`
        ),
        B(
          Le,
          "href",
          `/${null != (i = r().params.locale) ? i : ""}/accommodation/suites`
        ),
        B(
          _e,
          "href",
          `/${
            null != (n = r().params.locale) ? n : ""
          }/accommodation/one-bedroom-villa`
        ),
        B(
          je,
          "href",
          `/${
            null != (d = r().params.locale) ? d : ""
          }/accommodation/two-bedroom-villa`
        ),
        B(
          De,
          "href",
          `/${null != (c = r().params.locale) ? c : ""}/wellness/sava-spa`
        ),
        B(
          Fe,
          "href",
          `/${null != (f = r().params.locale) ? f : ""}/wellness/gym`
        ),
        B(
          Ye,
          "href",
          `/${null != (p = r().params.locale) ? p : ""}/wellness/activities`
        ),
        B(ot, "href", `/${null != (h = r().params.locale) ? h : ""}/meeting`),
        B(nt, "href", `/${null != (x = r().params.locale) ? x : ""}/wedding`),
        B(ft, "href", `/${null != (v = r().params.locale) ? v : ""}/offers`),
        B(
          xt,
          "href",
          `/${null != (u = r().params.locale) ? u : ""}/press-release`
        ),
        B(mt, "href", `/${null != (m = r().params.locale) ? m : ""}/gallery`),
        B(gt, "href", `/${null != (w = r().params.locale) ? w : ""}/awards`),
        B(Lt, "href", `/${null != (b = r().params.locale) ? b : ""}/contact`);
    }),
    $("click", E, function () {
      !(function () {
        throw new Error("Function not implemented.");
      })();
    }),
    D(e, i),
    x();
}
var te = S(
    '<a target="_blank" class="swiper-slide"><div class="flex justify-center"><img loading="lazy" alt="Awards - Hotel Indigo Bali Seminyak Beach" class="aspect-square w-[150px] object-contain"></div></a>'
  ),
  ae = S(
    '<a target="_blank"><img alt="Hotel Partner" height="100%" width="100%" class="w-[100px] sm:w-[100px] lg:w-[85px] xl:w-[110px] object-scale-down aspect-square"></a>'
  ),
  re = S(
    '<footer class="mb-[45px] sm:mb-[unset]"><div class="bg-primary pb-[3rem] sm:pb-[6rem]"><section id="awards" class="py-[30px] sm:py-[80px] mx-[30px] lg:mx-[0rem]"><p class="text-center uppercase text-white font-primary lg:text-[1.6rem] xl:text-[1.8rem] mb-[30px]"> </p> <div class="container mx-auto relative"><div class="swiper-button-prev prev-awards !h-[35px] !w-[35px] after:!content-[unset] !-left-[20px]"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#fff" viewBox="0 0 256 256"><path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"></path></svg></div> <div class="swiper mySwiperAwards"><div class="swiper-wrapper"></div></div> <div class="swiper-button-next next-awards !h-[35px] !w-[35px] after:!content-[unset] !-right-[20px]"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#fff" viewBox="0 0 256 256"><path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path></svg></div></div></section> <div class="container mx-auto "><p class="text-center uppercase text-white font-primary lg:text-[1.6rem] xl:text-[1.8rem]"> </p> <form id="submit-form" method="POST" class="mt-10 mb-20 flex sm:flex-row flex-col justify-between flex-wrap px-[30px] sm:px-0"><input type="text" id="website" name="website" aria-label="website" style="opacity: 0; position: absolute; height: 0; width: 0; padding: 0; margin: 0; border: 0;" tabindex="-1" autocomplete="off">  <div class="sm:w-[30%]"><input type="text" name="firstname" id="firstname" aria-label="first name" required class="font-primary text-white focus:ring-0 w-full text-[.9rem] lg:text-[.9rem] xl:text-[.9rem] 2xl:text-[1rem] bg-transparent !border-b-[1px] !border-l-0 !border-t-0 !border-r-0 border-white placeholder:text-white px-0 py-4"></div> <div class="sm:w-[30%]"><input type="text" name="lastname" id="lastname" aria-label="last name" required class="font-primary text-white focus:ring-0 w-full text-[.9rem] lg:text-[.9rem] xl:text-[.9rem] 2xl:text-[1rem] bg-transparent !border-b-[1px] !border-l-0 !border-t-0 !border-r-0 border-white placeholder:text-white px-0 py-4"></div> <div class="sm:w-[30%]"><input type="email" name="email" id="email" aria-label="email" required class="font-primary text-white focus:ring-0 w-full text-[.9rem] lg:text-[.9rem] xl:text-[.9rem] 2xl:text-[1rem] bg-transparent !border-b-[1px] !border-l-0 !border-t-0 !border-r-0 border-white placeholder:text-white px-0 py-4"></div> <div class="sm:w-[30%]"><div class="flex items-center mt-5 gap-3"><input id="checked-checkbox" type="checkbox" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"> <label for="checked-checkbox" class="ms-2 font-medium text-white font-primary text-[.7rem] lg:text-[.5rem] xl:text-[.7rem]"> </label></div></div> <div class="sm:w-[30%]"><div class="flex items-center mt-5 gap-3"><input id="checked-checkbox" type="checkbox" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"> <label for="checked-checkbox" class="ms-2 font-medium text-white font-primary text-[.7rem] lg:text-[.5rem] xl:text-[.7rem]"> </label></div></div> <div class="sm:w-[30%] order-7 sm:order-6"><div class="mt-5 sm:mt-0 flex sm:blog justify-center sm:justify-start"><button class="mt-[10px] font-primary text-primary text-[.8rem] lg:text-[.9rem] xl:text-[1rem] bg-white border-[1px] border-[#eee] px-[35px] py-[15px] uppercase rounded-full hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-300"> </button></div></div> <div class="sm:w-[30%] order-6 sm:order-7 mt-5 sm:mt-[unset]"><div class="g-recaptcha"></div></div></form> <div class="flex sm:flex-row flex-col gap-10 sm:gap-16 justify-between"><div class="sm:w-[240px]"><picture><source type="image/avif"><source type="image/webp"><img alt="" class="w-[200px] mx-auto block sm:w-full filter brightness-0 invert" width="200" height="130"></picture></div> <div class="sm:w-[25%]"><p class="font-primary text-white font-light text-[1.5rem] mb-[20px] text-center sm:text-left"> </p> <ul class="flex items-center flex-wrap gap-5 lg:gap-3 xl:gap-3 justify-center sm:justify-start"><li><a target="_blank" aria-label="Facebook"><svg class="fill-white hover:fill-secondary w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path></svg></a></li> <li><a target="_blank" aria-label="Instagram"><svg class="fill-white hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path><circle cx="14.87" cy="5.26" r="1.09"></circle><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path></svg></a></li> <li><a target="_blank" aria-label="Twitter"><svg class="fill-white hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="m15.08,2.1h2.68l-5.89,6.71,6.88,9.1h-5.4l-4.23-5.53-4.84,5.53H1.59l6.24-7.18L1.24,2.1h5.54l3.82,5.05,4.48-5.05Zm-.94,14.23h1.48L6,3.61h-1.6l9.73,12.71h0Z"></path></svg></a></li> <li><a target="_blank" aria-label="Tripadvisor"><svg class="fill-white hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"></path></svg></a></li> <li><a target="_blank" aria-label="Youtube"><svg class="fill-white hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path></svg></a></li> <li><a target="_blank" aria-label="Tiktok"><svg class="fill-white hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z"></path></svg></a></li> <li><a target="_blank" aria-label="Linkedin"><svg class="fill-white hover:fill-secondary  w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path></svg></a></li></ul></div> <div class="sm:w-[25%] flex flex-col sm:flex-row sm:gap-[30px]"><div class="flex flex-col justify-between"><ul class="font-primary font-light"><li class="mb-2 text-center sm:text-left"><a href="https://www.ihg.com/content/gb/en/about/brands" target="_blank" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary"> </a></li> <li class="mb-2 text-center sm:text-left"><a href="https://www.ihg.com/content/us/en/about/brands" target="_blank" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary"> </a></li> <li class="mb-2 text-center sm:text-left"><a href="https://www.ihg.com/hotelindigo/destinations/us/en/explore" target="_blank" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary"> </a></li> <li class="mb-2 text-center sm:text-left"><a data-sveltekit-reload="" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary"> </a></li></ul> <picture><source type="image/avif"><source type="image/webp"><img alt="" class="w-full mt-8 hidden sm:block" width="200" height="40"></picture></div> <div class="flex flex-col justify-between"><ul class="font-primary font-light"><li class="mb-2 text-center sm:text-left"><a data-sveltekit-reload="" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary"> </a></li> <li class="mb-2 text-center sm:text-left"><a data-sveltekit-reload="" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary"> </a></li> <li class="mb-2 text-center sm:text-left"><a data-sveltekit-reload="" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary"> </a></li> <li class="mb-2 text-center sm:text-left"><a data-sveltekit-reload="" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary"> </a></li></ul> <picture><source type="image/avif"><source type="image/webp"><img alt="" class="w-full mt-8 hidden sm:block" width="200" height="40"></picture></div></div> <div class="flex justify-center sm:hidden gap-[30px]"><div class="w-[calc(50%-30px)] relative"><picture><source type="image/avif"><source type="image/webp"><img alt="" width="200" height="40"></picture></div> <div class="w-[calc(50%-30px)]"><picture><source type="image/avif"><source type="image/webp"><img alt="" width="200" height="40"></picture></div></div> <div><a href="https://www.ihg.com/content/us/en/customer-care/bwc-lp?cm_mmc=IMMerch-_-6C2_US_en-_-bestprice-_-vanity_6Cbpg?cm_mmc=IMMerch-_-6C2_US_en-_-bestprice-_-vanity_6Cbpg" class="uppercase text-white font-primary text-light lg:text-[1.6rem] xl:text-[1.6rem] leading-[130%] text-center sm:text-left block" target="_blank">Best Price<br>Guarantee</a> <p class="font-primary font-light text-white lg:text-[.8rem] xl:text-[.9rem] text-center sm:text-left">When you book with us</p> <div class="mt-8 sm:mt-10"><p class="font-primary text-white lg:text-[.8rem] xl:text-[.9rem] uppercase text-center sm:text-left">Book Online / Call</p> <a href="tel:0018030160061" class="text-secondary font-primary font-light text-[1.6rem] lg:text-[1rem] xl:text-[1.2rem] text-center sm:text-left block">001 803 016 0061</a></div></div></div></div></div> <div class="bg-white py-[3rem] sm:py-[6rem] px-[20px] sm:px-0"><div class="relative container sm:mx-auto border-[1px] py-[4rem] sm:py-[6rem] px-[3rem] border-body flex flex-wrap justify-around sm:justify-center items-center gap-5 lg:gap-7 xl:gap-[25px]"><a href="https://www.ihg.com/hotels/gb/en/reservation" target="_blank" class="bg-white absolute -top-[15px] left-[30px] sm:left-[70px] px-[10px]"><picture><source type="image/avif"><source type="image/webp"><img alt="" class="w-[150px] sm:w-[180px]" width="200" height="33"></picture></a> <a href="https://www.ihg.com/onerewards/content/gb/en/home" target="_blank" class="bg-white absolute -bottom-[15px] right-[30px] sm:right-[70px] px-[10px]"><picture><source type="image/avif"><source type="image/webp"><img alt="" class="w-[170px] sm:w-[200px]" width="200" height="40"></picture></a> <!></div></div> <div class="bg-[#fafafa] py-[2rem]"><div class="container"><p class="font-primary text-center text-[.7rem] lg:text-[.8rem] xl:text-[.9rem] font-light"> <a href="https://www.ihg.com/" target="_blank" class="text-primary transition-all duration-300 hover:text-secondary">InterContinental Hotels Group.</a></p></div></div></footer>'
  );
function le(t, a) {
  var r, l;
  p(a, !1);
  const o = L(),
    s = () => C(G, "$page", o),
    i = () => C(Y, "$_", o);
  s().params.locale, s().url.pathname.replace(`/${s().params.locale}`, "");
  let n = F(a, "data", 8),
    d = F(a, "info", 8);
  const c = new Date().getFullYear();
  null == (l = null == (r = n()) ? void 0 : r.info[0]) || l.awards,
    T(() => {
      setTimeout(() => {
        U();
      }, 3e3);
    });
  let f = g(!1),
    y = g(!1),
    $ = "6Ld657UqAAAAAAauzOsJ2q5FDNcec3erBzXuZLSc",
    M = "",
    E = Date.now(),
    V = 0,
    S = 0,
    q = 0,
    K = g("");
  T(() => {
    const t = document.createElement("script");
    (t.src = "https://www.google.com/recaptcha/api.js"),
      (t.async = !0),
      (t.defer = !0),
      document.head.appendChild(t),
      document.addEventListener("mousemove", () => V++),
      document.addEventListener("keydown", () => S++),
      document.addEventListener("click", () => q++);
    const a = document.getElementById("submit-form");
    null == a ||
      a.addEventListener("submit", function (t) {
        return e(this, null, function* () {
          const a = Date.now() - E;
          return a < 5e3 || a > 3e5
            ? (t.preventDefault(), void alert("Check all inputs correctly !"))
            : V < 5 || S < 3 || q < 1
            ? (t.preventDefault(), void alert("Suspicious activity detected"))
            : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b(K))
            ? ((M = yield (function () {
                return e(this, null, function* () {
                  return new Promise((e) => {
                    grecaptcha.ready(() => {
                      grecaptcha.execute($, { action: "submit" }).then((t) => {
                        e(t);
                      });
                    });
                  });
                });
              })()),
              M
                ? void 0
                : (t.preventDefault(),
                  void alert("Security verification failed")))
            : (t.preventDefault(), void alert("The data entered is invalid"));
        });
      });
  }),
    T(() =>
      e(this, null, function* () {
        var e;
        (null == (e = s().form) ? void 0 : e.form) &&
          (s().form.form.error && alert(s().form.form.error),
          s().form.form.success && alert(s().form.form.message || "Success!"));
      })
    ),
    I();
  var P = re(),
    X = u(P),
    O = u(X),
    W = u(O),
    N = u(W, !0);
  h(() => _(N, i()("header-awards"))), w(W);
  var J = m(W, 2),
    Q = m(u(J), 2),
    ee = u(Q);
  j(
    ee,
    5,
    () => {
      var e;
      return null == (e = d()[0]) ? void 0 : e.awards;
    },
    H,
    (e, t) => {
      var a = te(),
        r = u(a),
        l = u(r);
      w(r),
        w(a),
        h(() => {
          var e, r;
          B(a, "href", null == (e = b(t)) ? void 0 : e.description),
            B(l, "src", null == (r = b(t)) ? void 0 : r.path);
        }),
        A(l),
        D(e, a);
    }
  ),
    w(ee),
    w(Q),
    k(2),
    w(J),
    w(O);
  var le = m(O, 2),
    oe = u(le),
    se = u(oe, !0);
  h(() => _(se, i()("footer-title"))), w(oe);
  var ie = m(oe, 2),
    ne = m(u(ie), 2),
    de = u(ne);
  h(() => B(de, "placeholder", i()("footer-first-name"))), w(ne);
  var ce = m(ne, 2),
    fe = u(ce);
  h(() => B(fe, "placeholder", i()("footer-last-name"))), w(ce);
  var pe = m(ce, 2),
    he = u(pe);
  Z(he), h(() => B(he, "placeholder", i()("footer-email"))), w(pe);
  var xe = m(pe, 2),
    ve = u(xe),
    ue = u(ve);
  Z(ue);
  var me = m(ue, 2),
    we = u(me, !0);
  h(() => _(we, i()("footer-agree1"))), w(me), w(ve), w(xe);
  var be = m(xe, 2),
    ge = u(be),
    ye = u(ge);
  Z(ye);
  var ke = m(ye, 2),
    Le = u(ke, !0);
  h(() => _(Le, i()("footer-agree2"))), w(ke), w(ge), w(be);
  var $e = m(be, 2),
    Ce = u($e),
    _e = u(Ce),
    Be = u(_e, !0);
  h(() => _(Be, i()("footer-submit"))), w(_e), w(Ce), w($e);
  var Me = m($e, 2),
    je = u(Me);
  B(je, "data-sitekey", $), w(Me), w(ie);
  var He = m(ie, 2),
    ze = u(He),
    Re = u(ze),
    Ue = u(Re);
  B(
    Ue,
    "srcset",
    new URL("../assets/logo-new-ver.C75erPCV.avif", import.meta.url).href +
      " 200w"
  );
  var Ae = m(Ue);
  B(
    Ae,
    "srcset",
    new URL("../assets/logo-new-ver.CU0P8SkN.webp", import.meta.url).href +
      " 200w"
  );
  var Ze = m(Ae);
  B(
    Ze,
    "src",
    "" + new URL("../../../images/logo-new-ver.png", import.meta.url).href
  ),
    w(Re),
    w(ze);
  var Ee = m(ze, 2),
    Ve = u(Ee),
    De = u(Ve, !0);
  h(() => _(De, i()("footer-followus"))), w(Ve);
  var Se = m(Ve, 2),
    Ie = u(Se),
    Fe = u(Ie);
  w(Ie);
  var Te = m(Ie, 2),
    Ge = u(Te);
  w(Te);
  var Ye = m(Te, 2),
    qe = u(Ye);
  w(Ye);
  var Ke = m(Ye, 2),
    Pe = u(Ke);
  w(Ke);
  var Xe = m(Ke, 2),
    Oe = u(Xe);
  w(Xe);
  var We = m(Xe, 2),
    Ne = u(We);
  w(We);
  var Je = m(We, 2),
    Qe = u(Je);
  w(Je), w(Se), w(Ee);
  var et = m(Ee, 2),
    tt = u(et),
    at = u(tt),
    rt = u(at),
    lt = u(rt),
    ot = u(lt, !0);
  h(() => _(ot, i()("footer-aboutIHG"))), w(lt), w(rt);
  var st = m(rt, 2),
    it = u(st),
    nt = u(it, !0);
  h(() => _(nt, i()("footer-IHG-global"))), w(it), w(st);
  var dt = m(st, 2),
    ct = u(dt),
    ft = u(ct, !0);
  h(() => _(ft, i()("footer-explore-hotel"))), w(ct), w(dt);
  var pt = m(dt, 2),
    ht = u(pt),
    xt = u(ht, !0);
  h(() => _(xt, i()("footer-sitemap"))), w(ht), w(pt), w(at);
  var vt = m(at, 2),
    ut = u(vt);
  B(
    ut,
    "srcset",
    new URL("../assets/ihg-rewards.DK3b5H_U.avif", import.meta.url).href +
      " 200w"
  );
  var mt = m(ut);
  B(
    mt,
    "srcset",
    new URL("../assets/ihg-rewards.ashxwMZi.webp", import.meta.url).href +
      " 200w"
  );
  var wt = m(mt);
  B(
    wt,
    "src",
    "" + new URL("../assets/ihg-rewards.Bx1zIjND.png", import.meta.url).href
  ),
    w(vt),
    w(tt);
  var bt = m(tt, 2),
    gt = u(bt),
    yt = u(gt),
    kt = u(yt),
    Lt = u(kt, !0);
  h(() => _(Lt, i()("footer-term-use"))), w(kt), w(yt);
  var $t = m(yt, 2),
    Ct = u($t),
    _t = u(Ct, !0);
  h(() => _(_t, i()("footer-pirvacy-statement"))), w(Ct), w($t);
  var Bt = m($t, 2),
    Mt = u(Bt),
    jt = u(Mt, !0);
  h(() => _(jt, i()("footer-privacy-policy"))), w(Mt), w(Bt);
  var Ht = m(Bt, 2),
    zt = u(Ht),
    Rt = u(zt, !0);
  h(() => _(Rt, i()("footer-cookie"))), w(zt), w(Ht), w(gt);
  var Ut = m(gt, 2),
    At = u(Ut);
  B(
    At,
    "srcset",
    new URL("../assets/ihg-business-rewards.GCCUgpuq.avif", import.meta.url)
      .href + " 200w"
  );
  var Zt = m(At);
  B(
    Zt,
    "srcset",
    new URL("../assets/ihg-business-rewards.DYYvda1M.webp", import.meta.url)
      .href + " 200w"
  );
  var Et = m(Zt);
  B(
    Et,
    "src",
    "" +
      new URL("../assets/ihg-business-rewards.BjR0WZW9.png", import.meta.url)
        .href
  ),
    w(Ut),
    w(bt),
    w(et);
  var Vt = m(et, 2),
    Dt = u(Vt),
    St = u(Dt),
    It = u(St);
  B(
    It,
    "srcset",
    new URL("../assets/ihg-rewards.DK3b5H_U.avif", import.meta.url).href +
      " 200w"
  );
  var Ft = m(It);
  B(
    Ft,
    "srcset",
    new URL("../assets/ihg-rewards.ashxwMZi.webp", import.meta.url).href +
      " 200w"
  );
  var Tt = m(Ft);
  B(
    Tt,
    "src",
    "" + new URL("../assets/ihg-rewards.Bx1zIjND.png", import.meta.url).href
  ),
    w(St),
    w(Dt);
  var Gt = m(Dt, 2),
    Yt = u(Gt),
    qt = u(Yt);
  B(
    qt,
    "srcset",
    new URL("../assets/ihg-business-rewards.GCCUgpuq.avif", import.meta.url)
      .href + " 200w"
  );
  var Kt = m(qt);
  B(
    Kt,
    "srcset",
    new URL("../assets/ihg-business-rewards.DYYvda1M.webp", import.meta.url)
      .href + " 200w"
  );
  var Pt = m(Kt);
  B(
    Pt,
    "src",
    "" +
      new URL("../assets/ihg-business-rewards.BjR0WZW9.png", import.meta.url)
        .href
  ),
    w(Yt),
    w(Gt),
    w(Vt),
    k(2),
    w(He),
    w(le),
    w(X);
  var Xt = m(X, 2),
    Ot = u(Xt),
    Wt = u(Ot),
    Nt = u(Wt),
    Jt = u(Nt);
  B(
    Jt,
    "srcset",
    new URL("../assets/ihg-logo.D346hVkA.avif", import.meta.url).href + " 200w"
  );
  var Qt = m(Jt);
  B(
    Qt,
    "srcset",
    new URL("../assets/ihg-logo.DEKGy2yl.webp", import.meta.url).href + " 200w"
  );
  var ea = m(Qt);
  B(
    ea,
    "src",
    "" + new URL("../assets/ihg-logo.BUGE7650.png", import.meta.url).href
  ),
    w(Nt),
    w(Wt);
  var ta = m(Wt, 2),
    aa = u(ta),
    ra = u(aa);
  B(
    ra,
    "srcset",
    new URL("../assets/ihg-rewards-black.DPXO8-Ke.avif", import.meta.url).href +
      " 200w"
  );
  var la = m(ra);
  B(
    la,
    "srcset",
    new URL("../assets/ihg-rewards-black.C-fz9VpG.webp", import.meta.url).href +
      " 200w"
  );
  var oa = m(la);
  B(
    oa,
    "src",
    "" +
      new URL("../assets/ihg-rewards-black.D35mebJ-.png", import.meta.url).href
  ),
    w(aa),
    w(ta);
  var sa = m(ta, 2);
  j(
    sa,
    1,
    () => {
      var e;
      return null == (e = d()[0]) ? void 0 : e.partner_logo;
    },
    H,
    (e, t) => {
      var a = ae(),
        r = u(a);
      w(a),
        h(() => {
          B(a, "href", b(t).description), B(r, "src", b(t).path);
        }),
        D(e, a);
    }
  ),
    w(Ot),
    w(Xt);
  var ia = m(Xt, 2),
    na = u(ia),
    da = u(na),
    ca = u(da);
  h(() => {
    var e;
    return _(
      ca,
      `© ${null != c ? c : ""} ${
        null != (e = i()("footer-copyright")) ? e : ""
      } `
    );
  }),
    k(),
    w(da),
    w(na),
    w(ia),
    w(P),
    h(() => {
      var e, t, a, r, l, o, i, n, c, p, h, x;
      (_e.disabled = !b(f) || !b(y)),
        B(Fe, "href", null == (e = d()[0]) ? void 0 : e.socials.facebook),
        B(Ge, "href", null == (t = d()[0]) ? void 0 : t.socials.instagram),
        B(qe, "href", null == (a = d()[0]) ? void 0 : a.socials.twitter),
        B(Pe, "href", null == (r = d()[0]) ? void 0 : r.socials.tripadvisor),
        B(Oe, "href", null == (l = d()[0]) ? void 0 : l.socials.youtube),
        B(Ne, "href", null == (o = d()[0]) ? void 0 : o.socials.tiktok),
        B(Qe, "href", null == (i = d()[0]) ? void 0 : i.socials.linkedin),
        B(ht, "href", `/${null != (n = s().params.locale) ? n : ""}/sitemap`),
        B(
          kt,
          "href",
          `/${null != (c = s().params.locale) ? c : ""}/term-of-use`
        ),
        B(
          Ct,
          "href",
          `/${null != (p = s().params.locale) ? p : ""}/privacy-statement`
        ),
        B(
          Mt,
          "href",
          `/${null != (h = s().params.locale) ? h : ""}/privacy-policy`
        ),
        B(
          zt,
          "href",
          `/${null != (x = s().params.locale) ? x : ""}/cookie-usage`
        );
    }),
    z(
      he,
      () => b(K),
      (e) => v(K, e)
    ),
    R(
      ue,
      () => b(f),
      (e) => v(f, e)
    ),
    R(
      ye,
      () => b(y),
      (e) => v(y, e)
    ),
    D(t, P),
    x();
}
export { le as F, ee as H, q as h };
