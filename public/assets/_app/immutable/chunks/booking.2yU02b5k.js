import "./disclose-version.NXHwHSTB.js";
import "./legacy.C3TYhYNA.js";
import {
  p as t,
  l as e,
  b as a,
  t as l,
  a as s,
  d as r,
  g as i,
  m as o,
  c as n,
  r as p,
  s as d,
} from "./runtime.9n-HZsgX.js";
import { s as c, e as u, a as m, b as v } from "./store.0Ek3FjD1.js";
import { i as x } from "./if.BaG-09Ct.js";
import {
  b as g,
  e as f,
  i as b,
  r as h,
  s as w,
  t as y,
} from "./swiper.DD5xMI7n.js";
import { a as k, t as D } from "./template.E9YoWobq.js";
import { i as S } from "./lifecycle.DGYyGzEx.js";
import { o as j, a as q } from "./index-client._4ZjYxeY.js";
import { $ as I } from "./runtime.Bxohg_Hc.js";
var $ = D(
    '<li class="p-2 hover:bg-[#f5f5f5] cursor-pointer px-3 text-center border-b-[1px] border-[#eee]"> </li>'
  ),
  B = D(
    '<ul id="dropdown-optionsGuest" class="absolute font-primary w-[122px] bg-white mt-1 text-left font-space shadow-dropdown"></ul>'
  ),
  C = D(
    '<li class="p-2 hover:bg-[#f5f5f5] cursor-pointer px-3 text-center border-b-[1px] border-[#eee]"> </li>'
  ),
  M = D(
    '<ul id="dropdown-optionsRooms" class="absolute font-primary w-[122px] bg-white mt-1 text-left font-space shadow-dropdown"></ul>'
  ),
  R = D(
    '<div class="absolute bottom-0 z-10 left-[30vw] right-[30vw] hidden lg:flex justify-center"><div class="bg-white text-body flex items-center pl-[20px] rounded-l-lg rounded-r-xl border-0"><div id="date-range-picker" date-rangepicker="" class="flex items-center font-primary"><div class="relative"><div id="checkIn" class="p-[10px] cursor-pointer relative z-[2]"><label class="uppercase lg:text-[10px] xl:text-[12px] font-semibold"> </label> <div class="flex gap-[25px] items-center"><p class="lg:text-[1.5em] xl:text-[2em] font-light w-[45px]"> </p> <p class="uppercase flex items-center gap-2 lg:text-[14px] xl:text-[16px]"><span> </span> <svg class="fill-body transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 256 256"><path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path></svg></p></div></div> <input id="datepicker-range-start" name="start" type="text" class="opacity-0 absolute bottom-0 left-0" placeholder="Select date start"></div> <div class="relative"><div id="checkIn" class="p-[10px] cursor-pointer relative z-[2]"><label class="uppercase lg:text-[10px] xl:text-[12px] font-semibold"> </label> <div class="flex gap-[25px] items-center"><p class="lg:text-[1.5em] xl:text-[2em] font-light w-[45px]"> </p> <p class="uppercase flex items-center gap-2 lg:text-[14px] xl:text-[16px]"><span> </span> <svg class="fill-body transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 256 256"><path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path></svg></p></div></div> <input id="datepicker-range-end" name="end" type="text" class="opacity-0 absolute bottom-0 left-0" placeholder="Select date end"></div></div> <div class="flex flex-col w-[115px] h-full justify-end p-[10px]"><label class="font-primary uppercase lg:text-[10px] xl:text-[12px] font-semibold"> </label> <div class="relative inline-block text-center"><div id="dropdown-buttonGuest" class="bg-transparent font-primary lg:text-[1.5em] xl:text-[2em] font-light cursor-pointer flex justify-between items-center"><span id="targetGuest"> </span> <svg class="fill-body iconGuest transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 256 256"><path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path></svg></div> <!> <input type="number" id="selected-valueGuest" class="hidden"></div></div> <div class="flex flex-col w-[115px] h-full justify-end p-[10px]"><label class="font-primary uppercase lg:text-[10px] xl:text-[12px] font-semibold"> </label> <div class="relative inline-block text-center"><div id="dropdown-buttonRooms" class="bg-transparent font-primary lg:text-[1.5em] xl:text-[2em] font-light cursor-pointer flex justify-between items-center"><span id="targetRooms"> </span> <svg class="fill-body iconRooms transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 256 256"><path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path></svg></div> <!> <input type="number" id="selected-valueRooms" class="hidden"></div></div> <button id="booking" class="uppercase h-full bg-primary text-white font-primary whitespace-nowrap px-5 rounded-r-lg transition-all !duration-500 hover:bg-secondary"> </button></div></div>'
  );
function L(D, L) {
  t(L, !1);
  const G = c(),
    N = () => v(I, "$_", G);
  let E = o(""),
    Z = o(""),
    _ = o(""),
    z = o(""),
    F = o(""),
    H = o(!1);
  j(() => {
    const t = new Date();
    r(E, String(t.getDate()).padStart(2, "0")),
      r(Z, t.toLocaleString("default", { month: "short" }));
    const e = t;
    e.setDate(t.getDate() + 1),
      r(_, String(e.getDate()).padStart(2, "0")),
      r(z, e.toLocaleString("default", { month: "short" })),
      r(
        F,
        new Date().toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
      );
  });
  let P,
    A = o(""),
    J = o("");
  function O(t) {
    const [e, a, l] = t.split("/");
    if (e && a && l) {
      return {
        day: a,
        month: new Date(l, e - 1, a).toLocaleString("default", {
          month: "short",
        }),
      };
    }
    return null;
  }
  j(() => {
    (P = setInterval(() => {
      let t = document.getElementById("datepicker-range-start");
      t && r(A, t.value);
    }, 1e3)),
      (P = setInterval(() => {
        let t = document.getElementById("datepicker-range-end");
        t && r(J, t.value);
      }, 1e3));
  }),
    q(() => {
      clearInterval(P);
    });
  let T = o(1),
    U = o(1),
    Y = o(!1),
    K = o(!1);
  e(
    () => (i(A), i(J)),
    () => {
      const t = O(i(A));
      t && (r(E, t.day), r(Z, t.month));
      const e = O(i(J));
      e && (r(_, e.day), r(z, e.month));
    }
  ),
    a(),
    S();
  var Q = R(),
    V = n(Q),
    W = n(V),
    X = n(W),
    tt = n(X),
    et = n(tt),
    at = n(et, !0);
  l(() => m(at, N()("be-arrival"))), p(et);
  var lt = d(et, 2),
    st = n(lt),
    rt = n(st, !0);
  p(st);
  var it = d(st, 2),
    ot = n(it),
    nt = n(ot, !0);
  p(ot);
  var pt = d(ot, 2);
  p(it), p(lt), p(tt);
  var dt = d(tt, 2);
  p(X);
  var ct = d(X, 2),
    ut = n(ct),
    mt = n(ut),
    vt = n(mt, !0);
  l(() => m(vt, N()("be-departure"))), p(mt);
  var xt = d(mt, 2),
    gt = n(xt),
    ft = n(gt, !0);
  p(gt);
  var bt = d(gt, 2),
    ht = n(bt),
    wt = n(ht, !0);
  p(ht);
  var yt = d(ht, 2);
  p(bt), p(xt), p(ut);
  var kt = d(ut, 2);
  p(ct), p(W);
  var Dt = d(W, 2),
    St = n(Dt),
    jt = n(St, !0);
  l(() => m(jt, N()("be-guest"))), p(St);
  var qt = d(St, 2),
    It = n(qt),
    $t = n(It),
    Bt = n($t, !0);
  p($t);
  var Ct = d($t, 2);
  p(It);
  var Mt = d(It, 2);
  x(
    Mt,
    () => i(Y),
    (t) => {
      var e = B();
      f(
        e,
        4,
        () => [1, 2, 3, 4, 5],
        b,
        (t, e) => {
          var a = $(),
            s = n(a, !0);
          p(a),
            l(() => {
              w(a, "data-value", e), m(s, e);
            }),
            u("click", a, () =>
              (function (t) {
                r(T, t), r(Y, !1);
              })(e)
            ),
            k(t, a);
        }
      ),
        p(e),
        k(t, e);
    }
  );
  var Rt = d(Mt, 2);
  h(Rt), p(qt), p(Dt);
  var Lt = d(Dt, 2),
    Gt = n(Lt),
    Nt = n(Gt, !0);
  l(() => m(Nt, N()("be-rooms"))), p(Gt);
  var Et = d(Gt, 2),
    Zt = n(Et),
    _t = n(Zt),
    zt = n(_t, !0);
  p(_t);
  var Ft = d(_t, 2);
  p(Zt);
  var Ht = d(Zt, 2);
  x(
    Ht,
    () => i(K),
    (t) => {
      var e = M();
      f(
        e,
        4,
        () => [1, 2, 3, 4, 5],
        b,
        (t, e) => {
          var a = C(),
            s = n(a, !0);
          p(a),
            l(() => {
              w(a, "data-value", e), m(s, e);
            }),
            u("click", a, () =>
              (function (t) {
                r(U, t), r(K, !1);
              })(e)
            ),
            k(t, a);
        }
      ),
        p(e),
        k(t, e);
    }
  );
  var Pt = d(Ht, 2);
  h(Pt), p(Et), p(Lt);
  var At = d(Lt, 2),
    Jt = n(At, !0);
  l(() => m(Jt, N()("book-now"))),
    p(At),
    p(V),
    p(Q),
    l(() => {
      w(W, "datepicker-min-date", i(F)),
        m(rt, i(E)),
        m(nt, i(Z)),
        y(pt, "rotate-180", i(H)),
        m(ft, i(_)),
        m(wt, i(z)),
        y(yt, "rotate-180", i(H)),
        m(Bt, i(T)),
        y(Ct, "rotate-180", i(Y)),
        m(zt, i(U)),
        y(Ft, "rotate-180", i(K));
    }),
    u("click", tt, () =>
      document.getElementById("datepicker-range-start").focus()
    ),
    u("focus", dt, () => r(H, !0)),
    u("blur", dt, () => r(H, !1)),
    u("click", ut, () =>
      document.getElementById("datepicker-range-end").focus()
    ),
    u("focus", kt, () => r(H, !0)),
    u("blur", kt, () => r(H, !1)),
    u("click", It, function () {
      r(Y, !i(Y)), i(Y) && r(K, !1);
    }),
    g(
      Rt,
      () => i(T),
      (t) => r(T, t)
    ),
    u("click", Zt, function () {
      r(K, !i(K)), i(K) && r(Y, !1);
    }),
    g(
      Pt,
      () => i(U),
      (t) => r(U, t)
    ),
    u("click", At, function () {
      const t = i(T),
        e = i(U);
      let a = new Date(),
        l = new Date();
      function s(t) {
        return `${String(t.getMonth() + 1).padStart(
          2,
          "0"
        )}/${String(t.getDate()).padStart(2, "0")}/${t.getFullYear()}`;
      }
      l.setDate(a.getDate() + 1);
      const r = s(a),
        o = s(l);
      let n = i(A) || r,
        p = i(J) || o,
        [d, c, u] = n.split("/").map(Number);
      d -= 1;
      let m,
        [v, x, g] = p.split("/").map(Number);
      (v -= 1),
        (m = `https://www.ihg.com/hotelindigo/hotels/us/en/find-hotels/select-roomrate?fromRedirect=true&qSrt=sBR&qIta=99502222&icdv=99502222&qSlH=DPSIN&setPMCookies=true&qSHBrC=IN&qDest=Jl.%20Camplung%20Tanduk%20No.%2010,%20Bali,%20ID&srb_u=1&qChAge=&qRmFltr=&qCiD=${c}&qCiMy=${d}${u}&qCoD=${x}&qCoMy=${v}${g}&qAdlt=${t}&qRms=${e}`),
        "function" == typeof ym && ym(98832056, "reachGoal", "booking_button"),
        window.open(m, "_blank");
    }),
    k(D, Q),
    s();
}
export { L as B };
