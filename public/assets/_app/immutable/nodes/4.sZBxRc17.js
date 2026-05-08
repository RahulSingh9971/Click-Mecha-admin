var e = Object.defineProperty,
  t = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  l = (t, s, a) =>
    s in t
      ? e(t, s, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[s] = a),
  o = (e, t, s) =>
    new Promise((a, r) => {
      var i = (e) => {
          try {
            o(s.next(e));
          } catch (t) {
            r(t);
          }
        },
        l = (e) => {
          try {
            o(s.throw(e));
          } catch (t) {
            r(t);
          }
        },
        o = (e) => (e.done ? a(e.value) : Promise.resolve(e.value).then(i, l));
      o((s = s.apply(e, t)).next());
    });
import "../chunks/index.sxAj5O7r.js";
import { a as p, w as n, $ as m } from "../chunks/runtime.Bxohg_Hc.js";
import "../chunks/disclose-version.NXHwHSTB.js";
import "../chunks/legacy.C3TYhYNA.js";
import {
  p as d,
  f as c,
  a as x,
  d as h,
  ag as w,
  g as v,
  c as u,
  s as g,
  r as f,
  K as b,
  t as y,
  m as L,
  $ as _,
  L as k,
} from "../chunks/runtime.9n-HZsgX.js";
import {
  e as R,
  a as U,
  s as j,
  b as B,
  h as z,
} from "../chunks/store.0Ek3FjD1.js";
import { i as C } from "../chunks/if.BaG-09Ct.js";
import {
  j as S,
  e as A,
  r as I,
  b as D,
  h as V,
  i as H,
  s as Z,
  d as M,
  t as T,
  a as O,
} from "../chunks/swiper.DD5xMI7n.js";
import { h as $, H as P, F as W } from "../chunks/footer.wUNxmTdl.js";
import { c as q, a as E, t as X, b as G } from "../chunks/template.E9YoWobq.js";
import { b as F } from "../chunks/this.DOjuOf3p.js";
import { i as Q } from "../chunks/lifecycle.DGYyGzEx.js";
import { p as Y } from "../chunks/props.R9YbMufj.js";
import { o as N } from "../chunks/index-client._4ZjYxeY.js";
import { _ as J } from "../chunks/preload-helper.CJnnZAUh.js";
import { p as K } from "../chunks/stores.DJwQpd29.js";
import { B as ee } from "../chunks/booking.2yU02b5k.js";
const te = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      load: (e) =>
        o(void 0, [e], function* ({ url: e, data: o }) {
          const m = e.pathname.split("/")[1] || "en";
          return (
            p.set(m),
            yield n(),
            (d = ((e, t) => {
              for (var s in t || (t = {})) r.call(t, s) && l(e, s, t[s]);
              if (a) for (var s of a(t)) i.call(t, s) && l(e, s, t[s]);
              return e;
            })({}, o)),
            t(d, s({ locale: m }))
          );
          var d;
        }),
      prerender: !1,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var se = X(
    '<form class="flex flex-col w-full gap-[10px] mt-[20px]"><input type="email" id="email" placeholder="Your Email" class="text-[.7rem] rounded-full" required> <button class="uppercase text-[.7rem] bg-primary text-white rounded-full py-[10px] transition-all duration-300 hover:bg-secondary">Subscribe</button></form>'
  ),
  ae = X(
    '<a class="bg-primary text-white text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1">Vote Now</a>'
  ),
  re = X(
    '<a class="bg-primary text-white text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1">Read More</a>'
  ),
  ie = X(
    '<div class="mt-[10px] flex md:flex justify-start lg:inline-block"><!></div>'
  ),
  le = X(
    '<div class="swiper-slide bg-white"><div class="flex flex-col sm:flex-row h-full w-full"><div class="sm:w-[50%] aspect-square sm:aspect-[unset] overflow-hidden h-full"><img class="h-full w-full object-cover object-center aspect-square" height="600" width="600" alt="Hotel Indigo Offer" loading="lazy" importance="high"></div> <div class="sm:w-[50%] flex justify-center items-center"><div class="p-[40px]"><p class="text-[1.5rem] leading-[110%] text-primary"> </p> <span class="h-[3px] w-[100px] block bg-secondary my-[20px]"></span> <div class="text-[.9rem]"><!></div> <!> <!></div></div></div></div>'
  ),
  oe = X(
    '<div id="popupPromo" class="fixed top-0 bottom-0 w-full z-50 bg-black bg-opacity-60 items-center justify-center flex"><div class="w-[90vw] sm:w-[600px] aspect-[.6] sm:aspect-[16/11] bg-white relative transition-all duration-300"><button id="closePopupD" class="absolute top-0 right-0 z-[5] p-3 bg-[#f4f4f1] rounded-bl-[20px] fill-primary transition-all duration-300 hover:fill-secondary hover:shadow-header"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path></svg></button> <div class="swiper mySwiperPopup !h-full font-primary font-light"><div class="swiper-wrapper"></div> <div class="swiper-button-next swiper-button-next-popup !h-[35px] !w-[35px] after:!content-[unset] fill-white sm:fill-[#333333] bg-primary rounded-full sm:bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path></svg></div> <div class="swiper-button-prev swiper-button-prev-popup !h-[35px] !w-[35px] after:!content-[unset] fill-white sm:fill-[#ffffff] bg-primary rounded-full sm:bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"></path></svg></div></div></div></div>'
  );
var pe = X(
    '<a data-sveltekit-reload="" class="w-[calc(100%/4)] image-box group"><div class="w-full h-[400px] md:h-[300px] lg:h-[400px] xl:h-[560px] overflow-hidden relative"><img loading="lazy" width="100%" height="100%" alt="Accommodation - Hotel Indigo Seminyak Beach"> <div class="absolute bottom-0 w-full h-[70%] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,212,255,0)] via-transparent flex items-end justify-center"><p> </p></div></div></a>'
  ),
  ne = X(
    '<div class="container mx-auto mt-[50px] relative z-[2] hidden sm:block"><div id="imageContainer" class="flex md:gap-[20px] lg:gap-[40px] hover:gap-[5px] transition-all duration-300"></div></div>'
  );
function me(e, t) {
  d(t, !1);
  const s = j();
  let a = [
      {
        id: 1,
        href: "/accommodation/rooms",
        image: "/images/accommodation/rooms.webp",
        text: "Rooms",
        position: "object-[0%]",
      },
      {
        id: 2,
        href: "/accommodation/suites",
        image: "/images/accommodation/suite.webp",
        text: "Suites",
        position: "object-[32%]",
      },
      {
        id: 3,
        href: "/accommodation/one-bedroom-villa",
        image: "/images/accommodation/one-bedroom.webp",
        text: "Dining",
        position: "object-[64%]",
      },
      {
        id: 4,
        href: "/accommodation/two-bedroom-villa",
        image: "/images/accommodation/two-bedroom.webp",
        text: "Outside",
        position: "object-[96%]",
      },
    ],
    r = L(null);
  function i() {
    h(r, null);
  }
  Q();
  var l = ne(),
    o = u(l);
  A(
    o,
    5,
    () => a,
    H,
    (e, t, l) => {
      var o = pe(),
        p = u(o),
        n = u(p),
        m = g(n, 2),
        d = u(m),
        c = u(d, !0);
      f(d),
        f(m),
        f(p),
        f(o),
        y(() => {
          var e, i, p, m;
          Z(
            o,
            "href",
            `/${null != (e = B(K, "$page", s).params.locale) ? e : ""}${
              null != (i = v(t).href) ? i : ""
            }`
          ),
            Z(n, "src", null !== v(r) ? a[v(r)].image : v(t).image),
            M(
              n,
              `original md:h-[400px] lg:h-[460px] xl:h-full 2xl:h-full object-cover transition-all !duration-500 ${
                null != (p = null !== v(r) ? a[l].position : "object-center")
                  ? p
                  : ""
              }`
            ),
            M(
              d,
              `desc uppercase font-primary text-center text-white md:text-base lg:text-lg after:transition-all after:!duration-500 after:content-[''] after:h-0 after:block group-hover:after:h-[50px] after:w-[2px] after:bg-white after:mx-auto md:after:mt-2 lg:after:mt-10 group-hover:after:mt-2 ${
                null != (m = null !== v(r) && v(r) !== l ? "opacity-50" : "")
                  ? m
                  : ""
              }`
            ),
            U(c, v(t).text);
        }),
        V(n),
        R("mouseenter", o, () =>
          (function (e) {
            h(r, e);
          })(l)
        ),
        R("mouseleave", o, i),
        E(e, o);
    }
  ),
    f(o),
    f(l),
    E(e, l),
    x();
}
var de = X(
    '<meta name="title"> <meta name="description"> <meta name="keywords"> <meta property="og:type" content="website"> <meta property="og:url" content="https://seminyak.hotelindigo.com/"> <meta property="og:title"> <meta property="og:description"> <meta property="og:image"> <meta property="og:image:width" content="1200"> <meta property="og:image:height" content="630"> <meta property="twitter:card" content="summary_large_image"> <meta property="twitter:url" content="https://seminyak.hotelindigo.com/"> <meta property="twitter:title"> <meta property="twitter:description"> <meta property="twitter:image">',
    1
  ),
  ce = X(
    '<p class="uppercase text-[1.3rem] sm:text-[1.5rem] lg:text-[2.8rem] xl:text-[3rem] mb-5"> </p>'
  ),
  xe = X(
    '<p class="uppercase text-[.9rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] font-light leading-[100%]"> </p> <p class="uppercase text-[1.3rem] sm:text-[1.5rem] lg:text-[2.8rem] xl:text-[3rem] "> </p>',
    1
  ),
  he = X(
    '<div class="swiper-slide w-full !h-[70vh] sm:!h-screen"><div class="relative h-full w-full overflow-hidden"><img alt="Hotel Indigo - Bali Seminyak Beach" class="slide-image absolute bottom-0 left-0 max-w-none !w-[120%] h-full object-cover animate-slideLeftRight" height="100" width="100" loading="lazy" fetchpriority="low"> <div class="absolute h-full w-full left-0 font-primary text-white flex items-end justify-center \n\t\t\t\t\t\t\tafter:content-[\'\'] after:absolute after:bottom-0 after:block after:bg-gradient-bottom after:w-full after:h-[40%]\n\t\t\t\t\t\t\tbefore:content-[\'\'] before:absolute before:top-0 before:block before:w-full before:h-[30%] before:bg-gradient-top"><div class="text-content text-center mb-[100px] relative z-10"><p class="uppercase text-[.9rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] font-light leading-[100%]"> </p> <p class="uppercase text-[1.3rem] sm:text-[1.5rem] lg:text-[2.8rem] xl:text-[3rem]"> </p></div></div></div></div>'
  ),
  we = X(
    '<svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256"><path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path></svg>'
  ),
  ve = X(
    '<svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg>'
  ),
  ue = X(
    '<svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256"><path d="M64,84v88a4,4,0,0,1-4,4H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H60A4,4,0,0,1,64,84Zm93.15-58.15a8,8,0,0,0-10-.16l-65.57,51A4,4,0,0,0,80,79.84v96.32a4,4,0,0,0,1.55,3.15l65.57,51a8,8,0,0,0,9,.56,8.29,8.29,0,0,0,3.91-7.18V32.25A8.27,8.27,0,0,0,157.12,25.85Z"></path></svg>'
  ),
  ge = X(
    '<svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256"><path d="M160,32.25V223.69a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56l-65.57-51A4,4,0,0,1,80,176.16V79.84a4,4,0,0,1,1.55-3.15l65.57-51a8,8,0,0,1,10,.16A8.27,8.27,0,0,1,160,32.25ZM60,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H60a4,4,0,0,0,4-4V84A4,4,0,0,0,60,80Zm126.77,20.84a8,8,0,0,0-.72,11.3,24,24,0,0,1,0,31.72,8,8,0,1,0,12,10.58,40,40,0,0,0,0-52.88A8,8,0,0,0,186.74,100.84Zm40.89-26.17a8,8,0,1,0-11.92,10.66,64,64,0,0,1,0,85.34,8,8,0,1,0,11.92,10.66,80,80,0,0,0,0-106.66Z"></path></svg>'
  ),
  fe = X(
    '<section id="homeAccommodation" class="py-[1rem] sm:py-[1rem] md:py-0 lg:py-[6rem] relative hidden sm:block"><div class="accoBox1 absolute left-0 sm:top-[30%] bottom-0 h-[100px] sm:h-[unset] sm:w-[15vw] hidden sm:block bg-primary z-[1]"></div> <div class="container mx-auto"><p class="uppercase text-primary text-[1.4rem] md:text-[2rem] lg:text-[2.2rem] font-primary font-light text-center lg:text-left"> </p></div> <!> <div class="container mx-auto mt-[3rem] sm:mt-[7rem] pb-[40px] sm:pb-0 relative hidden sm:block"><div class="flex flex-col sm:grid grid-cols-2 items-center relative z-[2]"><div class="md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden rounded-bl-[100px] lg:rounded-bl-[150px]"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img loading="lazy" class="h-full w-full object-cover object-center" alt="Dining - Hotel Indigo Seminyak" width="1280" height="720"></picture></div> <div class="font-primary font-light sm:px-[50px] mt-[20px] sm:mt-0"><h2 class="text-primary text-[1.4rem] md:text-[2rem] lg:text-[2.2rem] uppercase pb-5 text-center sm:text-left"> </h2> <p class="text-body text-[.9rem] text-center sm:text-left"> </p> <div class="mt-[5px] sm:mt-[20px] flex justify-center sm:block"><a data-sveltekit-reload="" class="bg-primary text-white text-[.6rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] md:mt-0 lg:mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div></div></section>'
  ),
  be = X(
    '<section class="relative hidden sm:block"><div class="container mx-auto relative z-[2]"><div class="flex gap-[15px]"><div class="lg:w-[30%] block sm:block md:flex lg:block gap-[20px] md:mt-[50px] lg:mt-0"><div><div class="w-full obeject-[16/9] overflow-hidden block md:block lg:hidden rounded-bl-[100px] md:rounded-bl-none lg:rounded-bl-none"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img loading="lazy" alt="" class="h-full w-full object-cover object-center" width="1280" height="720"></picture></div> <div class="font-primary font-light mt-[20px]"><h2 class="text-primary text-[1.4rem] sm:text-[1.5rem] lg:text-[1.7rem] xl:text-[2.2rem] uppercase pb-5 text-center lg:text-left"> </h2> <p class="text-body text-[.9rem] sm:text-[.8] lg:text-[.8rem] xl:text-[.9rem] text-center lg:text-left"> </p> <div class="mt-[5px] sm:mt-[20px] flex justify-center md:flex lg:block"><a data-sveltekit-reload="" class="bg-primary text-white text-[.6rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div> <div class="mt-[50px] md:mt-0"><div class="w-full obeject-[16/9] overflow-hidden block md:block lg:hidden rounded-bl-[100px] md:rounded-bl-none lg:rounded-bl-none"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img loading="lazy" alt="" class="h-full w-full object-cover object-center" width="1280" height="720"></picture></div> <div class="font-primary font-light mt-[20px] md:mt-[20px] lg:mt-[40px]"><h2 class="text-primary text-[1.4rem] sm:text-[1.5rem] lg:text-[1.7rem] xl:text-[2.2rem] uppercase pb-5 text-center lg:text-left"> </h2> <p class="text-body text-[.9rem] sm:text-[.8] lg:text-[.8rem] xl:text-[.9rem] text-center lg:text-left"> </p> <div class="mt-[5px] sm:mt-[20px] flex justify-center md:flex lg:block"><a data-sveltekit-reload="" class="bg-primary text-white text-[.6rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div></div> <div class="w-[70%] hidden sm:hidden md:hidden lg:flex gap-[30px]"><div class="h-[500px] overflow-hidden"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img loading="lazy" alt="" class="h-full w-full object-cover object-center" width="1280" height="720"></picture></div> <div class="h-[500px] overflow-hidden rounded-br-[150px]"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img loading="lazy" alt="" class="h-full w-full object-cover object-center" width="1280" height="720"></picture></div></div></div></div> <div class="accoBox2 absolute right-0 top-[40%] lg:h-[750px] xl:h-[900px] w-[15vw] block bg-primary z-[1]"></div></section>'
  ),
  ye = X(
    '<section class="pt-[80px] relative hidden sm:block"><div class="container mx-auto "><p class="uppercase text-primary text-[1.4rem] sm:text-[2.2rem] font-primary font-light text-center md:text-center lg:text-left mb-[30px] sm:mb-[70px]"> </p></div> <div class="swiper mySwiperHomeActivities"><div class="swiper-wrapper"><div class="swiper-slide md:aspect-[16/11] lg:aspect-[16/9] overflow-hidden relative"><img alt="" class="aspect-square md:aspect-[unset] w-full sm:h-full object-cover object-center"> <div class="relative sm:absolute bottom-0 left-0 w-full py-[30px] sm:px-[50px] font-primary font-light sm:bg-gradient-bottom md:h-[90%] lg:h-[50%] sm:flex flex-col justify-end"><p class="uppercase text-body sm:text-white text-[1.2rem] sm:text-3xl pb-5"> </p> <p class="text-body sm:text-white text-[.9rem]"> </p> <div class="mt-[15px]"><a data-sveltekit-reload="" class="bg-primary text-white text-[.7rem] sm:text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div> <div class="swiper-slide md:aspect-[16/11] lg:aspect-[16/9] overflow-hidden relative"><img alt="" class="aspect-square md:aspect-[unset] w-full sm:h-full object-cover object-center"> <div class="relative sm:absolute bottom-0 left-0 w-full py-[30px] sm:px-[50px] font-primary font-light sm:bg-gradient-bottom md:h-[90%] lg:h-[50%] sm:flex flex-col justify-end"><p class="uppercase text-body sm:text-white text-[1.2rem] sm:text-3xl pb-5"> </p> <p class="text-body sm:text-white text-[.9rem]"> </p> <div class="mt-[15px]"><a data-sveltekit-reload="" class="bg-primary text-white text-[.7rem] sm:text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div> <div class="swiper-slide md:aspect-[16/11] lg:aspect-[16/9] overflow-hidden relative"><img alt="" class="aspect-square md:aspect-[unset] w-full sm:h-full object-cover object-center"> <div class="relative sm:absolute bottom-0 left-0 w-full py-[30px] sm:px-[50px] font-primary font-light sm:bg-gradient-bottom md:h-[90%] lg:h-[50%] sm:flex flex-col justify-end"><p class="uppercase text-body sm:text-white text-[1.2rem] sm:text-3xl pb-5"> </p> <p class="text-body sm:text-white text-[.9rem]"> </p> <div class="mt-[15px]"><a data-sveltekit-reload="" class="bg-primary text-white text-[.7rem] sm:text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div> <div class="swiper-slide md:aspect-[16/11] lg:aspect-[16/9] overflow-hidden relative"><img alt="" class="aspect-square md:aspect-[unset] w-full sm:h-full object-cover object-center"> <div class="relative sm:absolute bottom-0 left-0 w-full py-[30px] sm:px-[50px] font-primary font-light sm:bg-gradient-bottom md:h-[90%] lg:h-[50%] sm:flex flex-col justify-end"><p class="uppercase text-body sm:text-white text-[1.2rem] sm:text-3xl pb-5"> </p> <p class="text-body sm:text-white text-[.9rem]"> </p> <div class="mt-[15px]"><a data-sveltekit-reload="" class="bg-primary text-white text-[.7rem] sm:text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div> <div class="swiper-slide md:aspect-[16/11] lg:aspect-[16/9] overflow-hidden relative"><img alt="" class="aspect-square md:aspect-[unset] w-full sm:h-full object-cover object-center"> <div class="relative sm:absolute bottom-0 left-0 w-full py-[30px] sm:px-[50px] font-primary font-light sm:bg-gradient-bottom md:h-[90%] lg:h-[50%] sm:flex flex-col justify-end"><p class="uppercase text-body sm:text-white text-[1.2rem] sm:text-3xl pb-5"> </p> <p class="text-body sm:text-white text-[.9rem]"> </p> <div class="mt-[15px]"><a data-sveltekit-reload="" class="bg-primary text-white text-[.7rem] sm:text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div> <div class="swiper-slide md:aspect-[16/11] lg:aspect-[16/9] overflow-hidden relative"><img alt="" class="aspect-square md:aspect-[unset] w-full sm:h-full object-cover object-center"> <div class="relative sm:absolute bottom-0 left-0 w-full py-[30px] sm:px-[50px] font-primary font-light sm:bg-gradient-bottom md:h-[90%] lg:h-[50%] sm:flex flex-col justify-end"><p class="uppercase text-body sm:text-white text-[1.2rem] sm:text-3xl pb-5"> </p> <p class="text-body sm:text-white text-[.9rem]"> </p> <div class="mt-[15px]"><a data-sveltekit-reload="" class="bg-primary text-white text-[.7rem] sm:text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div></div> <span class="swiper-button-prev prev-facility !h-[30px] !w-[30px] sm:!h-[50px] sm:!w-[50px] bg-[#6b6b6bab] after:!content-[unset] !left-[18vw] sm:!left-[16vw] !top-[25%] sm:!top-[50%]"><svg xmlns="http://www.w3.org/2000/svg" class="fill-white" width="100%" height="100%" fill="none" viewBox="0 0 256 256"><path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"></path></svg></span> <span class="swiper-button-next next-facility !h-[30px] !w-[30px] sm:!h-[50px] sm:!w-[50px] bg-[#6b6b6bab] after:!content-[unset] !right-[18vw] sm:!right-[16vw] !top-[25%] sm:!top-[50%]"><svg xmlns="http://www.w3.org/2000/svg" class="fill-white" width="100%" height="100%" fill="none" viewBox="0 0 256 256"><path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path></svg></span></div></section>'
  ),
  Le = X(
    '<section class="sm:hidden block"><div class="container"><div class="grid grid-cols-2 gap-[12px]"><div class="flex flex-col gap-[12px]"><a data-sveltekit-reload="" class="aspect-square w-full rounded-[5px] overflow-hidden relative"><img src="/images/main-dining.webp" class="w-full h-full object-center object-cover" alt="Wedding - Hotel Indigo Bali Seminyak Beach"> <div class="absolute top-0 h-full w-full bg-[#252525]/[60%] font-primary flex justify-center items-center"><p class="text-white uppercase text-[1rem]"> </p></div></a> <a data-sveltekit-reload="" class="aspect-[1/1.3] w-full rounded-[5px] overflow-hidden relative"><img src="/images/wedding/wedding-5.webp" class="w-full h-full object-center object-cover" alt="Wedding - Hotel Indigo Bali Seminyak Beach"> <div class="absolute top-0 h-full w-full bg-[#252525]/[60%] font-primary flex justify-center items-center"><p class="text-white uppercase text-[1rem]"> </p></div></a></div> <div class="flex flex-col gap-[12px]"><a data-sveltekit-reload="" class="aspect-[1/1.3] w-full rounded-[5px] overflow-hidden relative"><img src="/images/main-events.webp" class="w-full h-full object-center object-cover" alt="Wedding - Hotel Indigo Bali Seminyak Beach"> <div class="absolute top-0 h-full w-full bg-[#252525]/[60%] font-primary flex justify-center items-center"><p class="text-white uppercase text-[1rem]"> </p></div></a> <a data-sveltekit-reload="" class="aspect-square w-full rounded-[5px] overflow-hidden relative"><img src="/images/facilities/sava-spa.webp" class="w-full h-full object-center object-cover" alt="Wedding - Hotel Indigo Bali Seminyak Beach"> <div class="absolute top-0 h-full w-full bg-[#252525]/[60%] font-primary flex justify-center items-center"><p class="text-white uppercase text-[1rem]"> </p></div></a></div></div> <a data-sveltekit-reload="" class="w-full aspect-video rounded-[5px] overflow-hidden relative mt-[12px] block"><img src="/images/photo2.webp" class="w-full h-full object-center object-cover" alt="Wedding - Hotel Indigo Bali Seminyak Beach"> <div class="absolute top-0 h-full w-full bg-[#252525]/[60%] font-primary flex justify-center items-center"><p class="text-white uppercase text-[1rem]"> </p></div></a></div></section>'
  ),
  _e = X(
    '<div class="swiper-slide"><div class="flex flex-col md:flex-col lg:flex-row items-center gap-[20px] sm:gap-[50px]"><div class="lg:w-[60%]"><img width="300" height="150" class="aspect-[16/10] w-full sm:rounded-tr-[150px] object-cover object-center" alt=""></div> <div class="lg:w-[40%] font-primary font-light lg:pr-[80px]"><span class="uppercase text-secondary text-center md:text-center lg:text-left block"> </span> <h2 class="uppercase text-[1.2rem] md:text-[1.7rem] lg:text-[1.7rem] xl:text-[2.2rem] leading-[130%] text-primary text-center md:text-center lg:text-left"> </h2> <div class="text-body mt-[20px] lg:text-[.8rem] xl:text-[.9rem] text-center md:text-center lg:text-left"><!></div> <div class="mt-[15px] flex justify-center md:flex lg:block"><a data-sveltekit-reload="" class="bg-primary text-white text-[.7rem] sm:text-[.9rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div></div>'
  ),
  ke = X(
    '<section id="homeOffers" class="relative hidden sm:block pt-[30px] sm:pt-[8rem]"><div class="container mx-auto relative sm:pb-[5rem] z-[2]"><div class="swiper mySwiperHomeOffers"><div class="swiper-wrapper"></div> <span class="swiper-button-prev prev-homeoffer !h-[50px] !w-[50px] bg-[#8282827d] sm:bg-[#2525258c] after:!content-[unset] !top-[25%] sm:!top-[50%]"><svg xmlns="http://www.w3.org/2000/svg" class="fill-[#ffffff]" width="100%" height="100%" fill="none" viewBox="0 0 256 256"><path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"></path></svg></span> <span class="swiper-button-next next-homeoffer !h-[50px] !w-[50px] bg-[#8282827d] sm:bg-[#2525258c] after:!content-[unset] !top-[25%] sm:!top-[50%]"><svg xmlns="http://www.w3.org/2000/svg" class="fill-[#ffffff]" width="100%" height="100%" fill="none" viewBox="0 0 256 256"><path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path></svg></span></div> <div class="swiper-pagination bottom-0 hidden sm:block"></div></div> <div class="accoBox3 absolute left-0 bottom-0 lg:h-[250px] xl:h-[400px] w-[15vw] block bg-primary z-[1]"></div></section>'
  ),
  Re = X(
    '<div class="swiper-slide border border-[#d8d8d8] relative"><div class="aspect-[.7] w-full overflow-hidden"><img class="h-full w-full object-cover object-center" alt="Rooms - Hotel Indigo Bali Seminyak Beach"></div> <div class="py-[20px] px-[15px] h-full flex flex-col justify-end absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black"><p class="font-primary uppercase text-white leading-[120%] mb-2"> </p> <p class="font-primary text-[.8rem] text-white leading-[120%]"><!></p> <div><a data-sveltekit-reload="" class="bg-primary text-white text-[.7rem] sm:text-[.9rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[10px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div>'
  ),
  Ue = X(
    '<section class="container mx-auto hidden sm:flex items-center mt-[40px] sm:mt-[8rem]"><div class="w-[50%] sm:w-[25%] h-[40vh] sm:h-[73vh] md:h-[50vh] lg:h-[73vh] overflow-hidden hidden sm:block"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img loading="lazy" alt="" class="w-full h-full object-cover object-center" width="1280" height="720"></picture></div> <div class="parallaxContainer w-[60%] sm:w-[25%] h-[40vh] sm:h-[73vh] overflow-hidden block sm:hidden"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img loading="lazy" alt="" class="parallaxImage h-[80vh] object-cover object-center" width="1280" height="720"></picture></div> <div class="w-[40%] sm:w-[25%] flex flex-col items-center"><p class="font-primary text-primary font-light md:text-[2.5rem] lg:text-[1.7rem] xl:text-[2.2rem] px-[70px] text-center uppercase hidden sm:block"> </p> <div class="mt-[15px]"><a href="https://www.ihg.com/hotelindigo/redirect?path=hd-hotel-reviews&amp;brandCode=in&amp;hotelCode=dpsin&amp;regionCode=1&amp;localeCode=en&amp;cm_mmc=iws_widget_DPSIN&amp;icdv=99502222&amp;dp=true" target="_blank" class="bg-primary text-white text-[.7rem] sm:text-[.7rem] lg:text-[.8rem] xl:text-[.9rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div> <div class="w-[50%] md:h-[50vh] lg:h-[73vh] overflow-hidden hidden sm:block"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img loading="lazy" alt="" class="w-full h-full object-cover object-center" width="1280" height="720"></picture></div></section>'
  ),
  je = G(
    '<!> <!> <section id="homeHero" class="relative h-[70vh] sm:h-screen w-full bg-slate-900"><div id="heroVideo" class=" w-full h-[70vh] sm:h-screen relative"><video id="video" src="/videos/intro-video-hd.webm" class="absolute top-0 h-[70vh] sm:h-screen w-full object-cover" height="600" width="600" poster="/images/thumbnail-vid.webp" preload="none" playsinline="" loop></video> <div class="absolute h-full w-full left-0 font-primary text-white flex items-end justify-center\n\t\t\t\t\tafter:content-[\'\'] after:absolute after:bottom-0 after:block after:bg-gradient-bottom after:w-full after:h-[40%]\n\t\t\t\t\tbefore:content-[\'\'] before:absolute before:top-0 before:block before:w-full before:h-[30%] before:bg-gradient-top"><div class="text-content text-center mb-[100px] relative z-20"><!></div></div></div> <div id="heroSlide" class="swiper mySwiperHomeHero"><div class="swiper-wrapper"></div></div> <div class="functionButton absolute left-[50px] bottom-[30px] sm:bottom-[57px] flex justify-between items-center z-10"><div class="buttonLeft flex items-center gap-3"><button aria-label="View Video" class="playVideo font-primary flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-50"><svg class="filter brightness-0 invert w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]" width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"></polygon><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle></svg> <p class="text-white uppercase text-[.7rem] hidden sm:block"> </p></button> <div class="vid flex items-center gap-3"><button aria-label="View Slider" class="playSlide transition-all duration-300 hover:opacity-50"><svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256"><path d="M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM128,90a42,42,0,1,0,42,42A42,42,0,0,0,128,90Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,128,162Z"></path></svg></button> <button aria-label="Pause &amp; Play Video" class="isPause transition-all duration-300 hover:opacity-50"><!></button> <button aria-label="Mute Video" class="isMuted transition-all duration-300 hover:opacity-50"><!></button></div></div></div> <div class="button-right absolute right-[50px]  bottom-[30px] sm:bottom-[57px] z-10"><a href="https://indigo.view360.se/tour.html" target="_blank" class="transition-all duration-300 hover:opacity-50"><img src="/images/360.svg" class="w-[40px] sm:w-[50px]" height="50px" width="50px" alt="360 View"></a></div> <!></section> <div class="fixed right-[10px] sm:right-[20px] z-30 transition-[bottom] duration-500 ease-in-out"><a data-sveltekit-reload=""></a></div> <section id="home-intro" class=" py-[3rem] sm:py-[6rem]"><div class="container mx-auto flex flex-col md:flex lg:grid lg:grid-cols-3"><div class="flex flex-col md:flex lg:grid lg:grid-cols-2 items-center col-span-2"><div><h1 class="hidden sm:hidden md:hidden lg:block text-[1.3rem] sm:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.8rem] leading-[1.3em] md:text-center lg:text-left font-primary font-light text-primary uppercase md:pb-[30px] lg:pb-0 lg:pr-2"><!></h1> <h1 class="block sm:block md:block lg:hidden text-[1.4rem] mb-[30px] leading-[1.3em] text-center font-primary font-light text-primary uppercase sm:pr-2"><!></h1></div> <div class="relative"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img height="300" width="300" alt="Hotel Indigo - Bali Seminyak Beach" loading="lazy" class="introImg h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] w-[60%] sm:w-full rounded-tl-[100px] sm:rounded-tl-[150px] lg:rounded-tl-[150px] xl:rounded-tl-[200px] object-cover relative z-[2] ml-[25px] sm:ml-[unset]"></picture> <div class="boxIntro absolute z-[1] w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[400px] bg-primary block right-0 sm:-right-[50px] top-[55%] sm:top-[45%] mr-[25px] sm:mr-[unset]"></div></div></div> <div class="font-primary mt-[100px] sm:mt-0 sm:pl-[100px] md:pl-[0px] lg:pl-[100px] pt-0 md:pt-[80px] lg:pt-0"><h2 class="text-primary text-[1.4rem] sm:text-[2rem] lg:text-[2rem] xl:text-[2.2rem] leading-[1.3] uppercase font-light text-center md:text-center  lg:text-left"><!></h2> <p class="mt-[20px] font-light text-[.9rem] text-body  text-center lg:text-left"> </p> <div class="mt-[20px] flex md:flex justify-center lg:inline-block"><a data-sveltekit-reload="" class="bg-primary text-white text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></div></div></section> <!> <section class="pb-[3rem] block sm:hidden"><div class="container"><p class="font-primary uppercase text-[1.4rem] text-center pb-5"> </p></div> <div class="container relative"><div class="swiper mySwiperHomeRoomMobile"><div class="swiper-wrapper"><a data-sveltekit-reload="" class="swiper-slide border border-[#d8d8d8]"><div class="aspect-[.8] w-full overflow-hidden"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img height="300" width="150" class="h-full w-full object-cover object-center" alt="Rooms - Hotel Indigo Bali Seminyak Beach"></picture></div> <div class="p-4"><p class="font-primary uppercase text-center"> </p></div></a> <a data-sveltekit-reload="" class="swiper-slide border border-[#d8d8d8]"><div class="aspect-[.8] w-full overflow-hidden"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img height="300" width="150" class="h-full w-full object-cover object-center" alt="Suites - Hotel Indigo Bali Seminyak Beach"></picture></div> <div class="p-4"><p class="font-primary uppercase text-center"> </p></div></a> <a data-sveltekit-reload="" class="swiper-slide border border-[#d8d8d8]"><div class="aspect-[.8] w-full overflow-hidden"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img height="300" width="150" class="h-full w-full object-cover object-center" alt="One Bedroom Villa - Hotel Indigo Bali Seminyak Beach"></picture></div> <div class="p-4"><p class="font-primary uppercase text-center"> </p></div></a> <a data-sveltekit-reload="" class="swiper-slide border border-[#d8d8d8]"><div class="aspect-[.8] w-full overflow-hidden"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img height="300" width="150" class="h-full w-full object-cover object-center" alt="two Bedroom Villa - Hotel Indigo Bali Seminyak Beach"></picture></div> <div class="p-4"><p class="font-primary uppercase text-center"> </p></div></a></div></div> <div class="relativ flex justify-center items-center gap-3 mt-[10px]"><div class="swiper-button-prev swiper-button-prev-roommobile after:!content-[unset] !static !inline-block !mt-[unset]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"></path></svg></div> <div class="swiper-pagination swiper-pagination-roommobile !relative !w-[unset] !inline-block !font-primary !bottom-[unset]"></div> <div class="swiper-button-next swiper-button-next-roommobile after:!content-[unset] !static !inline-block !mt-[unset]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path></svg></div></div></div></section> <!> <!>  <!> <!> <section class="py-[3rem] block sm:hidden"><div class="container"><p class="font-primary uppercase text-[1.4rem] text-center pb-5"> </p></div> <div class="container relative"><div class="swiper mySwiperHomeOffersMobile"><div class="swiper-wrapper"></div></div> <div class="relativ flex justify-center items-center gap-3 mt-[10px]"><div class="swiper-button-prev swiper-button-prev-offersmobile after:!content-[unset] !static !inline-block !mt-[unset]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"></path></svg></div> <div class="swiper-pagination swiper-pagination-offersmobile !relative !w-[unset] !inline-block !font-primary !bottom-[unset]"></div> <div class="swiper-button-next swiper-button-next-offersmobile after:!content-[unset] !static !inline-block !mt-[unset]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path></svg></div></div></div></section> <!> <section class="sm:pt-[100px] pb-0 sm:pb-[20px]"><div class="container flex flex-col items-center"><p class="font-primary text-primary font-light text-[1.4rem] sm:text-[3rem] text-center uppercase lg:text-[1.7rem] xl:text-[2.2rem] pb-0 sm:pb-0"> </p> <div class="mt-[5px] mb-[20px] sm:mb-[20px] block"><a href="https://www.instagram.com/hotelindigobali/" target="_blank" class="bg-primary text-white text-[.9rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block sm:mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div> <div class="w-full relative overflow-hidden z-[1] mb-[30px]"><script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script> <iframe title="Instagram feed from our official account" src="https://cdn.lightwidget.com/widgets/1d28e1aebc5c5c53945abe4385a9e4a2.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe></div></div></section> <section class="bg-primary py-[50px] sm:py-[100px]"><div class="container mx-auto"><div class="flex flex-col sm:flex-row gap-[40px] sm:gap-[80px] max-w-[1024px] mx-auto"><div class="sm:w-[50%]"><picture><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/avif"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/webp"><source sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" type="image/png"><img loading="lazy" alt="" class="aspect-square w-full object-cover object-center sm:rounded-bl-[150px]" width="1280" height="1220"></picture></div> <div class="sm:w-[50%]"><div class="font-primary font-light text-center sm:text-left"><h3 class="uppercase text-white lg:text-[1.6rem] xl:text-[1.8rem] leading-[1.4]">Panchayath, Plot No.129, Esteem Misty Hills Dasarahalli Village, Kasaba Hobli, Devanahalli Taluk, Karahalli, Bengaluru, Karnataka 562110<br></h3> <ul class="my-[20px]"><li><a href="tel:7026266622" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"> </a></li> <li><a href="mailto:hotelindigobali.reservations@ihg.com" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"> </a></li></ul> <p class="text-white text-[.9rem] sm:text-[.9rem] lg:text-[.8rem] xl:text-[.9rem]"><!></p> <p class="mt-[20px] text-white text-[.9rem] sm:text-[.9rem] lg:text-[1rem] xl:text-[1.2rem]"> </p> <p class="mt-[5px] text-white text-[.9rem] sm:text-[.9rem] lg:text-[.8rem] xl:text-[.9rem]"><!></p> <ul class="mt-[20px] mb-[40px]"><li><a href="/pdf/transportation-price-2025-22-apr.pdf" target="_blank" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"> </a></li> <li><a href="/images/arrival-flow.webp" target="_blank" class="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"> </a></li></ul> <a href="/pdf/resort-map-2025.pdf" target="_blank" class="mt-[10px] font-primary text-primary text-[.7rem] sm:text-[.7rem] lg:text-[.8rem] xl:text-[.9rem] bg-white border-[1px] border-[#eee] px-[25px] py-[15px] uppercase rounded-full hover:text-secondary hover:border-secondary"> </a></div></div></div></div></section> <section class="bg-[#f4f4f1] py-[5rem] relative"><picture><source type="image/avif"><source type="image/webp"><img loading="lazy" alt="" class="absolute bottom-8 right-8" width="150" height="146"></picture> <div class="container relative"><p class="text-primary font-primary font-[400] sm:font-light text-[1.5rem] sm:text-[2.2rem] lg:text-[2.2rem] xl:text-[2.8rem] w-full sm:w-[600px]" loading="lazy"> </p> <div class="my-[20px] sm:my-[40px] flex items-center gap-[10px]"><ul class="flex items-center gap-[5px]"><li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#d23d49" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg></li> <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#d23d49" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg></li> <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#d23d49" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg></li> <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#d23d49" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg></li> <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#d23d49" viewBox="0 0 256 256"><path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.4,16.4,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65A8,8,0,0,0,128,181.1V32c.24,0,.27.08.35.26L153,91.86a8,8,0,0,0,6.75,4.92l63.91,5.16c.16,0,.25,0,.34.29S224,102.63,223.84,102.73Z"></path></svg></li></ul> <p class="text-body font-primary lg:text-[.8rem] xl:text-[.9rem]">4.8/5(1147 Reviews)</p></div> <a href="https://www.ihg.com/hotelindigo/redirect?path=hd-hotel-reviews&amp;brandCode=in&amp;hotelCode=dpsin&amp;regionCode=1&amp;localeCode=en&amp;cm_mmc=iws_widget_DPSIN&amp;icdv=99502222&amp;dp=true" target="_blank" class="bg-primary text-white lg:text-[.8rem] xl:text-[.9rem] px-[35px] py-[15px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"> </a></div></section> <!>',
    3
  );
function Be(e, t) {
  var s, a, r, i, l, p, n, M;
  d(t, !1);
  const X = j(),
    G = () => B(K, "$page", X),
    te = () => B(m, "$_", X);
  G().params.locale, G().url.pathname.replace(`/${G().params.locale}`, "");
  let pe = Y(t, "data", 8),
    ne = null == (s = pe()) ? void 0 : s.dining,
    Be = null == (a = pe()) ? void 0 : a.info,
    ze = null == (r = pe()) ? void 0 : r.offers,
    Ce = null == (i = pe()) ? void 0 : i.popup,
    Se = null == (l = pe()) ? void 0 : l.spa,
    Ae = null == (p = pe()) ? void 0 : p.gym,
    Ie = null == (n = pe()) ? void 0 : n.wellness,
    De = null == (M = pe()) ? void 0 : M.seo;
  N(() => {
    setTimeout(() => {
      O(),
        (function () {
          "undefined" != typeof window &&
            J(
              () =>
                o(this, null, function* () {
                  const { gsap: e } = yield import(
                    "../chunks/index.7QBU8eAB.js"
                  );
                  return { gsap: e };
                }),
              [],
              import.meta.url
            ).then(({ gsap: e }) => {
              J(
                () =>
                  o(this, null, function* () {
                    const { ScrollTrigger: e } = yield import(
                      "../chunks/ScrollTrigger.CCJ3DTbU.js"
                    );
                    return { ScrollTrigger: e };
                  }),
                [],
                import.meta.url
              ).then(({ ScrollTrigger: t }) => {
                e.registerPlugin(t),
                  t.matchMedia({
                    "(min-width: 1024px)": function () {
                      e.to(".boxIntro", {
                        y: -250,
                        scrollTrigger: {
                          trigger: ".boxIntro",
                          start: "top 80%",
                          end: "bottom top",
                          scrub: !0,
                        },
                      }),
                        e.to(".introImg", {
                          y: 80,
                          scrollTrigger: {
                            trigger: ".introImg",
                            start: "top 30%",
                            end: "bottom top",
                            scrub: !0,
                          },
                        });
                    },
                    "(max-width: 1023px)": function () {
                      e.to(".boxIntro", {
                        y: -100,
                        scrollTrigger: {
                          trigger: ".boxIntro",
                          start: "top bottom",
                          end: "bottom top",
                          scrub: 0.5,
                        },
                      }),
                        e.to(".introImg", {
                          y: 40,
                          scrollTrigger: {
                            trigger: ".introImg",
                            start: "top 30%",
                            end: "bottom top",
                            scrub: 0.5,
                          },
                        });
                    },
                  }),
                  e.to(".accoBox1", {
                    width: "30vw",
                    ease: "power4.out",
                    scrollTrigger: {
                      trigger: ".accoBox1",
                      start: "top 20%",
                      end: "bottom top",
                      scrub: !0,
                    },
                  }),
                  e.to(".accoBox2", {
                    width: "30vw",
                    ease: "power4.out",
                    scrollTrigger: {
                      trigger: ".accoBox2",
                      start: "top 50%",
                      end: "bottom top",
                      scrub: !0,
                    },
                  }),
                  e.to(".accoBox3", {
                    width: "30vw",
                    ease: "power4.out",
                    scrollTrigger: {
                      trigger: ".accoBox3",
                      start: "top 50%",
                      end: "bottom top",
                      scrub: !0,
                    },
                  }),
                  e.to(".parallaxImage", {
                    y: "-30%",
                    scrollTrigger: {
                      trigger: ".parallaxContainer",
                      start: "top bottom",
                      end: "bottom top",
                      scrub: !0,
                    },
                  });
              });
            });
        })();
    }, 3e3);
  });
  const Ve = "zh_tw" === G().params.locale;
  let He = L(!1);
  N(() => {
    const e = () => {
      h(He, window.innerWidth <= 768);
    };
    return (
      e(),
      window.addEventListener("resize", e),
      () => {
        window.removeEventListener("resize", e);
      }
    );
  });
  let Ze = L();
  N(() => {
    v(Ze) &&
      v(Ze)
        .play()
        .catch(() => {}),
      O();
  });
  let Me = L(!0);
  let Te = L(!0),
    Oe = L(!0);
  N(() => {
    setTimeout(() => {
      const e = document.querySelector("iframe.lightwidget-widget");
      e && e.dataset.src && (e.src = e.dataset.src);
    }, 3e3);
  });
  let $e = L(!1);
  N(() => {
    const e = () => {
      h($e, window.scrollY > 50);
    };
    return (
      window.addEventListener("scroll", e),
      () => window.removeEventListener("scroll", e)
    );
  }),
    Q();
  var Pe = je();
  z((e) => {
    var t = de(),
      s = c(t),
      a = g(s, 2),
      r = g(a, 2),
      i = g(r, 6),
      l = g(i, 2),
      o = g(l, 2),
      p = g(o, 10),
      n = g(p, 2),
      m = g(n, 2);
    y(() => {
      (_.title = De[0].name),
        Z(s, "content", De[0].meta_title),
        Z(a, "content", De[0].meta_description),
        Z(r, "content", De[0].keyword),
        Z(i, "content", De[0].og_title),
        Z(l, "content", De[0].og_description),
        Z(o, "content", De[0].image[0].path),
        Z(p, "content", De[0].twitter_title),
        Z(n, "content", De[0].twitter_description),
        Z(m, "content", De[0].image[0].path);
    }),
      E(e, t);
  });
  var We = c(Pe);
  P(We, { dining: ne, info: Be });
  var qe = g(We, 2);
  !(function (e, t) {
    d(t, !1);
    let s = Y(t, "popup", 8),
      a = L(!1);
    function r() {
      h(a, !1);
    }
    N(() =>
      o(this, null, function* () {
        sessionStorage.getItem("popupShown") ||
          setTimeout(
            () =>
              o(this, null, function* () {
                h(a, !0),
                  sessionStorage.setItem("popupShown", "true"),
                  yield w(),
                  S();
              }),
            8e3
          );
      })
    );
    let i = L("");
    function l(e) {
      e.preventDefault();
      const t = `mailto:ria.ayu@ihg.com?subject=Newsletter%20Form&body=New%20Newsletter%20Submission%0AEmail%20%3A%20${encodeURIComponent(
        v(i)
      )}%0A%0AMindimedia%20-%20Hotel%20Indigo%20Bali%20Seminyak%20Beach`;
      window.location.href = t;
    }
    Q();
    var p = q(),
      n = c(p);
    C(
      n,
      () => v(a),
      (e) => {
        var t = oe(),
          a = u(t),
          o = u(a),
          p = g(o, 2),
          n = u(p);
        A(n, 5, s, H, (e, t) => {
          var s = le(),
            a = u(s),
            r = u(a),
            o = u(r);
          f(r);
          var p = g(r, 2),
            n = u(p),
            m = u(n),
            d = u(m, !0);
          f(m);
          var c = g(m, 4),
            x = u(c);
          $(x, () => v(t).description), f(c);
          var w = g(c, 2);
          C(
            w,
            () => 1 == v(t).form_sub,
            (e) => {
              var t = se(),
                s = u(t);
              I(s),
                b(2),
                f(t),
                D(
                  s,
                  () => v(i),
                  (e) => h(i, e)
                ),
                R("submit", t, l),
                E(e, t);
            }
          );
          var L = g(w, 2);
          C(
            L,
            () => {
              var e;
              return null == (e = v(t)) ? void 0 : e.book_url;
            },
            (e) => {
              var s = ie(),
                a = u(s);
              C(
                a,
                () => "destinasian-vote" == v(t).slug,
                (e) => {
                  var s = ae();
                  y(() => Z(s, "href", v(t).book_url)), E(e, s);
                },
                (e) => {
                  var s = re();
                  y(() => Z(s, "href", v(t).book_url)), E(e, s);
                }
              ),
                f(s),
                E(e, s);
            }
          ),
            f(n),
            f(p),
            f(a),
            f(s),
            y(() => {
              Z(o, "src", v(t).featured_images[0].path), U(d, v(t).name);
            }),
            V(o),
            E(e, s);
        }),
          f(n),
          b(4),
          f(p),
          f(a),
          f(t),
          R("click", o, r),
          E(e, t);
      }
    ),
      E(e, p),
      x();
  })(qe, { popup: Ce });
  var Ee = g(qe, 2),
    Xe = u(Ee),
    Ge = u(Xe);
  (Ge.muted = !0),
    F(
      Ge,
      (e) => h(Ze, e),
      () => v(Ze)
    );
  var Fe = g(Ge, 2),
    Qe = u(Fe),
    Ye = u(Qe);
  C(
    Ye,
    () => Ve,
    (e) => {
      var t = ce(),
        s = u(t, !0);
      y(() => U(s, te()("homepage-hero-heading1"))), f(t), E(e, t);
    },
    (e) => {
      var t = xe(),
        s = c(t),
        a = u(s, !0);
      y(() => U(a, te()("homepage-hero-heading1"))), f(s);
      var r = g(s, 2),
        i = u(r, !0);
      y(() => U(i, te()("homepage-hero-heading2"))), f(r), E(e, t);
    }
  ),
    f(Qe),
    f(Fe),
    f(Xe);
  var Ne = g(Xe, 2),
    Je = u(Ne);
  A(
    Je,
    5,
    () => {
      var e;
      return null == (e = Be[0]) ? void 0 : e.hero_images;
    },
    H,
    (e, t) => {
      var s = he(),
        a = u(s),
        r = u(a),
        i = g(r, 2),
        l = u(i),
        o = u(l),
        p = u(o, !0);
      y(() => U(p, te()("homepage-hero-heading1"))), f(o);
      var n = g(o, 2),
        m = u(n, !0);
      y(() => U(m, te()("homepage-hero-heading2"))),
        f(n),
        f(l),
        f(i),
        f(a),
        f(s),
        y(() => {
          var e;
          return Z(r, "src", null == (e = v(t)) ? void 0 : e.path);
        }),
        V(r),
        E(e, s);
    }
  ),
    f(Je),
    f(Ne);
  var Ke = g(Ne, 2),
    et = u(Ke),
    tt = u(et),
    st = g(u(tt), 2),
    at = u(st, !0);
  y(() => U(at, te()("view-film"))), f(st), f(tt);
  var rt = g(tt, 2),
    it = u(rt),
    lt = g(it, 2),
    ot = u(lt);
  C(
    ot,
    () => v(Te),
    (e) => {
      var t = we();
      E(e, t);
    },
    (e) => {
      var t = ve();
      E(e, t);
    }
  ),
    f(lt);
  var pt = g(lt, 2),
    nt = u(pt);
  C(
    nt,
    () => v(Oe),
    (e) => {
      var t = ue();
      E(e, t);
    },
    (e) => {
      var t = ge();
      E(e, t);
    }
  ),
    f(pt),
    f(rt),
    f(et),
    f(Ke);
  var mt = g(Ke, 4);
  ee(mt, {}), f(Ee);
  var dt = g(Ee, 2);
  T(dt, "bottom-[80px]", !0);
  var ct = u(dt);
  f(dt);
  var xt = g(dt, 2),
    ht = u(xt),
    wt = u(ht),
    vt = u(wt),
    ut = u(vt),
    gt = u(ut);
  $(gt, () => te()("homepage-headline-m-1")), f(ut);
  var ft = g(ut, 2),
    bt = u(ft);
  $(bt, () => te()("homepage-headline-d-1")), f(ft), f(vt);
  var yt = g(vt, 2),
    Lt = u(yt),
    _t = u(Lt);
  Z(
    _t,
    "srcset",
    new URL("../assets/slideshow-2.BDvNC4ig.avif", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/slideshow-2.Bdn4FSJj.avif", import.meta.url).href +
      " 640w, " +
      new URL("../assets/slideshow-2.D4K_AajW.avif", import.meta.url).href +
      " 400w"
  );
  var kt = g(_t);
  Z(
    kt,
    "srcset",
    new URL("../assets/slideshow-2.GRq84JnV.webp", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/slideshow-2.DOI5bQHe.webp", import.meta.url).href +
      " 640w, " +
      new URL("../assets/slideshow-2.FZMjpmxf.webp", import.meta.url).href +
      " 400w"
  );
  var Rt = g(kt);
  Z(
    Rt,
    "srcset",
    new URL("../assets/slideshow-2.BCv-Awm_.png", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/slideshow-2.CwwNlYyg.png", import.meta.url).href +
      " 640w, " +
      new URL("../assets/slideshow-2.C-m42D1v.png", import.meta.url).href +
      " 400w"
  );
  var Ut = g(Rt);
  Z(
    Ut,
    "src",
    "" + new URL("../assets/slideshow-2.BCv-Awm_.png", import.meta.url).href
  ),
    f(Lt),
    b(2),
    f(yt),
    f(wt);
  var jt = g(wt, 2),
    Bt = u(jt),
    zt = u(Bt);
  $(zt, () => te()("homepage-intro-title")), f(Bt);
  var Ct = g(Bt, 2),
    St = u(Ct, !0);
  y(() => U(St, te()("homepage-intro-text"))), f(Ct);
  var At = g(Ct, 2),
    It = u(At),
    Dt = u(It, !0);
  y(() => U(Dt, te()("explore"))), f(It), f(At), f(jt), f(ht), f(xt);
  var Vt = g(xt, 2);
  C(
    Vt,
    () => !v(He),
    (e) => {
      var t = fe(),
        s = g(u(t), 2),
        a = u(s),
        r = u(a, !0);
      y(() => U(r, te()("homepage-accommodation-title"))), f(a), f(s);
      var i = g(s, 2);
      me(i, {});
      var l = g(i, 2),
        o = u(l),
        p = u(o),
        n = u(p),
        m = u(n);
      Z(
        m,
        "srcset",
        new URL("../assets/main-dining.BAnSYLR_.avif", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-dining.DdOHfGPv.avif", import.meta.url).href +
          " 640w, " +
          new URL("../assets/main-dining.B4CWxJfz.avif", import.meta.url).href +
          " 400w"
      );
      var d = g(m);
      Z(
        d,
        "srcset",
        new URL("../assets/main-dining.M_5EUiWo.webp", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-dining.0juboGru.webp", import.meta.url).href +
          " 640w, " +
          new URL("../assets/main-dining.Cyh-f_Iw.webp", import.meta.url).href +
          " 400w"
      );
      var c = g(d);
      Z(
        c,
        "srcset",
        new URL("../assets/main-dining.Bq-1WGnP.png", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-dining.qegOeq70.png", import.meta.url).href +
          " 640w, " +
          new URL("../assets/main-dining.CIfyHmo2.png", import.meta.url).href +
          " 400w"
      );
      var x = g(c);
      Z(
        x,
        "src",
        "" + new URL("../assets/main-dining.Bq-1WGnP.png", import.meta.url).href
      ),
        f(n),
        f(p);
      var h = g(p, 2),
        w = u(h),
        v = u(w, !0);
      y(() => U(v, te()("homepage-dining"))), f(w);
      var b = g(w, 2),
        L = u(b, !0);
      y(() => U(L, te()("homepage-dining-desc"))), f(b);
      var _ = g(b, 2),
        k = u(_),
        R = u(k, !0);
      y(() => U(R, te()("explore"))),
        f(k),
        f(_),
        f(h),
        f(o),
        f(l),
        f(t),
        y(() => {
          var e;
          return Z(
            k,
            "href",
            `/${null != (e = G().params.locale) ? e : ""}/dining`
          );
        }),
        V(x),
        E(e, t);
    }
  );
  var Ht = g(Vt, 2),
    Zt = u(Ht),
    Mt = u(Zt),
    Tt = u(Mt, !0);
  y(() => U(Tt, te()("homepage-accommodation-title"))), f(Mt), f(Zt);
  var Ot = g(Zt, 2),
    $t = u(Ot),
    Pt = u($t),
    Wt = u(Pt),
    qt = u(Wt),
    Et = u(qt),
    Xt = u(Et);
  Z(
    Xt,
    "srcset",
    new URL("../assets/rooms.B7CmT13i.avif", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/rooms.Ds6QjXgL.avif", import.meta.url).href +
      " 640w, " +
      new URL("../assets/rooms.CVdakWOS.avif", import.meta.url).href +
      " 400w"
  );
  var Gt = g(Xt);
  Z(
    Gt,
    "srcset",
    new URL("../assets/rooms.CvwymPb0.webp", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/rooms.BVoxvG4X.webp", import.meta.url).href +
      " 640w, " +
      new URL("../assets/rooms.nBgpad7i.webp", import.meta.url).href +
      " 400w"
  );
  var Ft = g(Gt);
  Z(
    Ft,
    "srcset",
    new URL("../assets/rooms.DwbflSk_.png", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/rooms.CjcbHfWY.png", import.meta.url).href +
      " 640w, " +
      new URL("../assets/rooms.Bamk-dR8.png", import.meta.url).href +
      " 400w"
  );
  var Qt = g(Ft);
  Z(
    Qt,
    "src",
    "" + new URL("../assets/rooms.DwbflSk_.png", import.meta.url).href
  ),
    f(Et),
    f(qt);
  var Yt = g(qt, 2),
    Nt = u(Yt),
    Jt = u(Nt, !0);
  y(() => U(Jt, te()("homepage-accommodation-rooms"))), f(Nt), f(Yt), f(Wt);
  var Kt = g(Wt, 2),
    es = u(Kt),
    ts = u(es),
    ss = u(ts);
  Z(
    ss,
    "srcset",
    new URL("../assets/suite.CJBxlO-W.avif", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/suite.TTdiKP_h.avif", import.meta.url).href +
      " 640w, " +
      new URL("../assets/suite.Feac-vcm.avif", import.meta.url).href +
      " 400w"
  );
  var as = g(ss);
  Z(
    as,
    "srcset",
    new URL("../assets/suite.UOYmQh7w.webp", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/suite.Db56XCyd.webp", import.meta.url).href +
      " 640w, " +
      new URL("../assets/suite.DvFv8Xcw.webp", import.meta.url).href +
      " 400w"
  );
  var rs = g(as);
  Z(
    rs,
    "srcset",
    new URL("../assets/suite.rfo0TVuT.png", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/suite.Dj5mgeQD.png", import.meta.url).href +
      " 640w, " +
      new URL("../assets/suite.CRbY20oQ.png", import.meta.url).href +
      " 400w"
  );
  var is = g(rs);
  Z(
    is,
    "src",
    "" + new URL("../assets/suite.rfo0TVuT.png", import.meta.url).href
  ),
    f(ts),
    f(es);
  var ls = g(es, 2),
    os = u(ls),
    ps = u(os, !0);
  y(() => U(ps, te()("homepage-accommodation-suites"))), f(os), f(ls), f(Kt);
  var ns = g(Kt, 2),
    ms = u(ns),
    ds = u(ms),
    cs = u(ds);
  Z(
    cs,
    "srcset",
    new URL("../assets/one-bedroom.DPZ8tQmF.avif", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/one-bedroom.NhQGR5dx.avif", import.meta.url).href +
      " 640w, " +
      new URL("../assets/one-bedroom.DxKFQikI.avif", import.meta.url).href +
      " 400w"
  );
  var xs = g(cs);
  Z(
    xs,
    "srcset",
    new URL("../assets/one-bedroom.kkV_Ljrf.webp", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/one-bedroom.DsAaNj0F.webp", import.meta.url).href +
      " 640w, " +
      new URL("../assets/one-bedroom.DAXVbEXt.webp", import.meta.url).href +
      " 400w"
  );
  var hs = g(xs);
  Z(
    hs,
    "srcset",
    new URL("../assets/one-bedroom.DoSZ1QpX.png", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/one-bedroom.CK8ex3eD.png", import.meta.url).href +
      " 640w, " +
      new URL("../assets/one-bedroom.B5gMUehG.png", import.meta.url).href +
      " 400w"
  );
  var ws = g(hs);
  Z(
    ws,
    "src",
    "" + new URL("../assets/one-bedroom.DoSZ1QpX.png", import.meta.url).href
  ),
    f(ds),
    f(ms);
  var vs = g(ms, 2),
    us = u(vs),
    gs = u(us, !0);
  y(() => U(gs, te()("homepage-accommodation-onevilla"))), f(us), f(vs), f(ns);
  var fs = g(ns, 2),
    bs = u(fs),
    ys = u(bs),
    Ls = u(ys);
  Z(
    Ls,
    "srcset",
    new URL("../assets/two-bedroom.C6-OUiMW.avif", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/two-bedroom.BhhUpHZC.avif", import.meta.url).href +
      " 640w, " +
      new URL("../assets/two-bedroom.BDGJjOgC.avif", import.meta.url).href +
      " 400w"
  );
  var _s = g(Ls);
  Z(
    _s,
    "srcset",
    new URL("../assets/two-bedroom.Bqc6kJww.webp", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/two-bedroom.DhMVIzo0.webp", import.meta.url).href +
      " 640w, " +
      new URL("../assets/two-bedroom.T8IXP2Dc.webp", import.meta.url).href +
      " 400w"
  );
  var ks = g(_s);
  Z(
    ks,
    "srcset",
    new URL("../assets/two-bedroom.C8CG0bE5.png", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/two-bedroom.Bo8OEg1S.png", import.meta.url).href +
      " 640w, " +
      new URL("../assets/two-bedroom.C2chC78a.png", import.meta.url).href +
      " 400w"
  );
  var Rs = g(ks);
  Z(
    Rs,
    "src",
    "" + new URL("../assets/two-bedroom.C8CG0bE5.png", import.meta.url).href
  ),
    f(ys),
    f(bs);
  var Us = g(bs, 2),
    js = u(Us),
    Bs = u(js, !0);
  y(() => U(Bs, te()("homepage-accommodation-twovilla"))),
    f(js),
    f(Us),
    f(fs),
    f(Pt),
    f($t),
    b(2),
    f(Ot),
    f(Ht);
  var zs = g(Ht, 2);
  C(
    zs,
    () => !v(He),
    (e) => {
      var t = be(),
        s = u(t),
        a = u(s),
        r = u(a),
        i = u(r),
        l = u(i),
        o = u(l),
        p = u(o);
      Z(
        p,
        "srcset",
        new URL("../assets/main-wedding.BRS0R5CI.avif", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-wedding.CGMc7v55.avif", import.meta.url)
            .href +
          " 640w, " +
          new URL("../assets/main-wedding.CHTFp_ER.avif", import.meta.url)
            .href +
          " 400w"
      );
      var n = g(p);
      Z(
        n,
        "srcset",
        new URL("../assets/main-wedding.DUWILBnz.webp", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-wedding.2LGMfDQT.webp", import.meta.url)
            .href +
          " 640w, " +
          new URL("../assets/main-wedding.BwZBSOxt.webp", import.meta.url)
            .href +
          " 400w"
      );
      var m = g(n);
      Z(
        m,
        "srcset",
        new URL("../assets/main-wedding.Bzni59le.png", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-wedding.BxxqFdTm.png", import.meta.url).href +
          " 640w, " +
          new URL("../assets/main-wedding.iyeHrBAF.png", import.meta.url).href +
          " 400w"
      );
      var d = g(m);
      Z(
        d,
        "src",
        "" +
          new URL("../assets/main-wedding.Bzni59le.png", import.meta.url).href
      ),
        f(o),
        f(l);
      var c = g(l, 2),
        x = u(c),
        h = u(x, !0);
      y(() => U(h, te()("homepage-wedding"))), f(x);
      var w = g(x, 2),
        v = u(w, !0);
      y(() => U(v, te()("homepage-wedding-desc"))), f(w);
      var L = g(w, 2),
        _ = u(L),
        k = u(_, !0);
      y(() => U(k, te()("explore"))), f(_), f(L), f(c), f(i);
      var R = g(i, 2),
        j = u(R),
        B = u(j),
        z = u(B);
      Z(
        z,
        "srcset",
        new URL("../assets/main-events.zTRjjupa.avif", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-events.CxgXnh68.avif", import.meta.url).href +
          " 640w, " +
          new URL("../assets/main-events.AsKlPTeO.avif", import.meta.url).href +
          " 400w"
      );
      var C = g(z);
      Z(
        C,
        "srcset",
        new URL("../assets/main-events.DsIGUIcM.webp", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-events.7byTZIE9.webp", import.meta.url).href +
          " 640w, " +
          new URL("../assets/main-events.DkQ2DkVX.webp", import.meta.url).href +
          " 400w"
      );
      var S = g(C);
      Z(
        S,
        "srcset",
        new URL("../assets/main-events.BWqmO2Bf.png", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-events.BsJXEX_h.png", import.meta.url).href +
          " 640w, " +
          new URL("../assets/main-events.gR8ws7L4.png", import.meta.url).href +
          " 400w"
      );
      var A = g(S);
      Z(
        A,
        "src",
        "" + new URL("../assets/main-events.BWqmO2Bf.png", import.meta.url).href
      ),
        f(B),
        f(j);
      var I = g(j, 2),
        D = u(I),
        H = u(D, !0);
      y(() => U(H, te()("homepage-events"))), f(D);
      var M = g(D, 2),
        T = u(M, !0);
      y(() => U(T, te()("homepage-events-desc"))), f(M);
      var O = g(M, 2),
        $ = u(O),
        P = u($, !0);
      y(() => U(P, te()("explore"))), f($), f(O), f(I), f(R), f(r);
      var W = g(r, 2),
        q = u(W),
        X = u(q),
        F = u(X);
      Z(
        F,
        "srcset",
        new URL("../assets/main-wedding.BRS0R5CI.avif", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-wedding.CGMc7v55.avif", import.meta.url)
            .href +
          " 640w, " +
          new URL("../assets/main-wedding.CHTFp_ER.avif", import.meta.url)
            .href +
          " 400w"
      );
      var Q = g(F);
      Z(
        Q,
        "srcset",
        new URL("../assets/main-wedding.DUWILBnz.webp", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-wedding.2LGMfDQT.webp", import.meta.url)
            .href +
          " 640w, " +
          new URL("../assets/main-wedding.BwZBSOxt.webp", import.meta.url)
            .href +
          " 400w"
      );
      var Y = g(Q);
      Z(
        Y,
        "srcset",
        new URL("../assets/main-wedding.Bzni59le.png", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-wedding.BxxqFdTm.png", import.meta.url).href +
          " 640w, " +
          new URL("../assets/main-wedding.iyeHrBAF.png", import.meta.url).href +
          " 400w"
      );
      var N = g(Y);
      Z(
        N,
        "src",
        "" +
          new URL("../assets/main-wedding.Bzni59le.png", import.meta.url).href
      ),
        f(X),
        f(q);
      var J = g(q, 2),
        K = u(J),
        ee = u(K);
      Z(
        ee,
        "srcset",
        new URL("../assets/main-events.zTRjjupa.avif", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-events.CxgXnh68.avif", import.meta.url).href +
          " 640w, " +
          new URL("../assets/main-events.AsKlPTeO.avif", import.meta.url).href +
          " 400w"
      );
      var se = g(ee);
      Z(
        se,
        "srcset",
        new URL("../assets/main-events.DsIGUIcM.webp", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-events.7byTZIE9.webp", import.meta.url).href +
          " 640w, " +
          new URL("../assets/main-events.DkQ2DkVX.webp", import.meta.url).href +
          " 400w"
      );
      var ae = g(se);
      Z(
        ae,
        "srcset",
        new URL("../assets/main-events.BWqmO2Bf.png", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/main-events.BsJXEX_h.png", import.meta.url).href +
          " 640w, " +
          new URL("../assets/main-events.gR8ws7L4.png", import.meta.url).href +
          " 400w"
      );
      var re = g(ae);
      Z(
        re,
        "src",
        "" + new URL("../assets/main-events.BWqmO2Bf.png", import.meta.url).href
      ),
        f(K),
        f(J),
        f(W),
        f(a),
        f(s),
        b(2),
        f(t),
        y(() => {
          var e, t;
          Z(_, "href", `/${null != (e = G().params.locale) ? e : ""}/wedding`),
            Z(
              $,
              "href",
              `/${null != (t = G().params.locale) ? t : ""}/meeting`
            );
        }),
        V(d),
        V(A),
        V(N),
        V(re),
        E(e, t);
    }
  );
  var Cs = g(zs, 2);
  C(
    Cs,
    () => !v(He),
    (e) => {
      var t = ye(),
        s = u(t),
        a = u(s),
        r = u(a, !0);
      y(() => U(r, te()("homepage-facilities"))), f(a), f(s);
      var i = g(s, 2),
        l = u(i),
        o = u(l),
        p = u(o),
        n = g(p, 2),
        m = u(n),
        d = u(m, !0);
      f(m);
      var c = g(m, 2),
        x = u(c, !0);
      f(c);
      var h = g(c, 2),
        w = u(h),
        v = u(w, !0);
      y(() => U(v, te()("explore"))), f(w), f(h), f(n), f(o);
      var L = g(o, 2),
        _ = u(L),
        k = g(_, 2),
        R = u(k),
        j = u(R, !0);
      f(R);
      var B = g(R, 2),
        z = u(B, !0);
      f(B);
      var C = g(B, 2),
        S = u(C),
        A = u(S, !0);
      y(() => U(A, te()("explore"))), f(S), f(C), f(k), f(L);
      var I = g(L, 2),
        D = u(I),
        V = g(D, 2),
        H = u(V),
        M = u(H, !0);
      f(H);
      var T = g(H, 2),
        O = u(T, !0);
      f(T);
      var $ = g(T, 2),
        P = u($),
        W = u(P, !0);
      y(() => U(W, te()("explore"))), f(P), f($), f(V), f(I);
      var q = g(I, 2),
        X = u(q),
        F = g(X, 2),
        Q = u(F),
        Y = u(Q, !0);
      f(Q);
      var N = g(Q, 2),
        J = u(N, !0);
      f(N);
      var K = g(N, 2),
        ee = u(K),
        se = u(ee, !0);
      y(() => U(se, te()("explore"))), f(ee), f(K), f(F), f(q);
      var ae = g(q, 2),
        re = u(ae),
        ie = g(re, 2),
        le = u(ie),
        oe = u(le, !0);
      f(le);
      var pe = g(le, 2),
        ne = u(pe, !0);
      f(pe);
      var me = g(pe, 2),
        de = u(me),
        ce = u(de, !0);
      y(() => U(ce, te()("explore"))), f(de), f(me), f(ie), f(ae);
      var xe = g(ae, 2),
        he = u(xe),
        we = g(he, 2),
        ve = u(we),
        ue = u(ve, !0);
      f(ve);
      var ge = g(ve, 2),
        fe = u(ge, !0);
      f(ge);
      var be = g(ge, 2),
        Le = u(be),
        _e = u(Le, !0);
      y(() => U(_e, te()("explore"))),
        f(Le),
        f(be),
        f(we),
        f(xe),
        f(l),
        b(4),
        f(i),
        f(t),
        y(() => {
          var e, t, s, a, r, i;
          Z(p, "src", Se[0].hero_images[0].path),
            U(d, Se[0].name),
            U(x, Se[0].excerpt),
            Z(
              w,
              "href",
              `/${null != (e = G().params.locale) ? e : ""}/wellness/sava-spa`
            ),
            Z(_, "src", Ae[0].hero_images[0].path),
            U(j, Ae[0].name),
            U(z, Ae[0].excerpt),
            Z(
              S,
              "href",
              `/${null != (t = G().params.locale) ? t : ""}/wellness/gym`
            ),
            Z(D, "src", Ie[0].hero_images[0].path),
            U(M, Ie[0].name),
            U(O, Ie[0].excerpt),
            Z(
              P,
              "href",
              `/${null != (s = G().params.locale) ? s : ""}/wellness/activities`
            ),
            Z(X, "src", Se[0].hero_images[0].path),
            U(Y, Se[0].name),
            U(J, Se[0].excerpt),
            Z(
              ee,
              "href",
              `/${null != (a = G().params.locale) ? a : ""}/wellness/sava-spa`
            ),
            Z(re, "src", Ae[0].hero_images[0].path),
            U(oe, Ae[0].name),
            U(ne, Ae[0].excerpt),
            Z(
              de,
              "href",
              `/${null != (r = G().params.locale) ? r : ""}/wellness/gym`
            ),
            Z(he, "src", Ie[0].hero_images[0].path),
            U(ue, Ie[0].name),
            U(fe, Ie[0].excerpt),
            Z(
              Le,
              "href",
              `/${null != (i = G().params.locale) ? i : ""}/wellness/activities`
            );
        }),
        E(e, t);
    }
  );
  var Ss = g(Cs, 2);
  C(
    Ss,
    () => v(He),
    (e) => {
      var t = Le(),
        s = u(t),
        a = u(s),
        r = u(a),
        i = u(r),
        l = g(u(i), 2),
        o = u(l),
        p = u(o, !0);
      y(() => U(p, te()("header-dining"))), f(o), f(l), f(i);
      var n = g(i, 2),
        m = g(u(n), 2),
        d = u(m),
        c = u(d, !0);
      y(() => U(c, te()("header-wedding"))), f(d), f(m), f(n), f(r);
      var x = g(r, 2),
        h = u(x),
        w = g(u(h), 2),
        v = u(w),
        b = u(v, !0);
      y(() => U(b, te()("header-meeting"))), f(v), f(w), f(h);
      var L = g(h, 2),
        _ = g(u(L), 2),
        k = u(_),
        R = u(k, !0);
      y(() => U(R, te()("header-facilities"))), f(k), f(_), f(L), f(x), f(a);
      var j = g(a, 2),
        B = g(u(j), 2),
        z = u(B),
        C = u(z, !0);
      y(() => U(C, te()("header-gallery"))),
        f(z),
        f(B),
        f(j),
        f(s),
        f(t),
        y(() => {
          var e, t, s, a, r;
          Z(i, "href", `/${null != (e = G().params.locale) ? e : ""}/dining`),
            Z(
              n,
              "href",
              `/${null != (t = G().params.locale) ? t : ""}/wedding`
            ),
            Z(
              h,
              "href",
              `/${null != (s = G().params.locale) ? s : ""}/meeting`
            ),
            Z(
              L,
              "href",
              `/${null != (a = G().params.locale) ? a : ""}/wellness`
            ),
            Z(
              j,
              "href",
              `/${null != (r = G().params.locale) ? r : ""}/gallery`
            );
        }),
        E(e, t);
    }
  );
  var As = g(Ss, 2);
  C(
    As,
    () => !v(He),
    (e) => {
      var t = ke(),
        s = u(t),
        a = u(s),
        r = u(a);
      A(
        r,
        5,
        () => ze,
        H,
        (e, t) => {
          var s = _e(),
            a = u(s),
            r = u(a),
            i = u(r);
          f(r);
          var l = g(r, 2),
            o = u(l),
            p = u(o, !0);
          y(() => U(p, te()("homepage-exclusive-offer"))), f(o);
          var n = g(o, 2),
            m = u(n, !0);
          f(n);
          var d = g(n, 2),
            c = u(d);
          $(c, () => v(t).highlight), f(d);
          var x = g(d, 2),
            h = u(x),
            w = u(h, !0);
          y(() => U(w, te()("view-all"))),
            f(h),
            f(x),
            f(l),
            f(a),
            f(s),
            y(() => {
              var e, s, a;
              Z(
                i,
                "src",
                null == (e = v(t).featured_images[0]) ? void 0 : e.path
              ),
                U(m, v(t).name),
                Z(
                  h,
                  "href",
                  `/${null != (s = G().params.locale) ? s : ""}/offers/${
                    null != (a = v(t).slug) ? a : ""
                  }`
                );
            }),
            E(e, s);
        }
      ),
        f(r),
        b(4),
        f(a),
        b(2),
        f(s),
        b(2),
        f(t),
        E(e, t);
    }
  );
  var Is = g(As, 2),
    Ds = u(Is),
    Vs = u(Ds),
    Hs = u(Vs, !0);
  y(() => U(Hs, te()("homepage-exclusive-offer"))), f(Vs), f(Ds);
  var Zs = g(Ds, 2),
    Ms = u(Zs),
    Ts = u(Ms);
  A(
    Ts,
    5,
    () => ze,
    H,
    (e, t) => {
      var s = Re(),
        a = u(s),
        r = u(a);
      f(a);
      var i = g(a, 2),
        l = u(i),
        o = u(l, !0);
      f(l);
      var p = g(l, 2),
        n = u(p);
      $(n, () => v(t).highlight), f(p);
      var m = g(p, 2),
        d = u(m),
        c = u(d, !0);
      y(() => U(c, te()("explore"))),
        f(d),
        f(m),
        f(i),
        f(s),
        y(() => {
          var e, s, a;
          Z(r, "src", null == (e = v(t).featured_images[0]) ? void 0 : e.path),
            U(o, v(t).name),
            Z(
              d,
              "href",
              `/${null != (s = G().params.locale) ? s : ""}/offers/${
                null != (a = v(t).slug) ? a : ""
              }`
            );
        }),
        E(e, s);
    }
  ),
    f(Ts),
    f(Ms),
    b(2),
    f(Zs),
    f(Is);
  var Os = g(Is, 2);
  C(
    Os,
    () => !v(He),
    (e) => {
      var t = Ue(),
        s = u(t),
        a = u(s),
        r = u(a);
      Z(
        r,
        "srcset",
        new URL("../assets/photo1.DKoIjgt5.avif", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/photo1.Wum2BVk5.avif", import.meta.url).href +
          " 640w, " +
          new URL("../assets/photo1.CZyzZ5dY.avif", import.meta.url).href +
          " 400w"
      );
      var i = g(r);
      Z(
        i,
        "srcset",
        new URL("../assets/photo1.D-XeCFaC.webp", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/photo1.DeCZSCew.webp", import.meta.url).href +
          " 640w, " +
          new URL("../assets/photo1.XFWV_X9S.webp", import.meta.url).href +
          " 400w"
      );
      var l = g(i);
      Z(
        l,
        "srcset",
        new URL("../assets/photo1.CvygVCoG.png", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/photo1.DS-s2tZR.png", import.meta.url).href +
          " 640w, " +
          new URL("../assets/photo1.DY_CVIi7.png", import.meta.url).href +
          " 400w"
      );
      var o = g(l);
      Z(
        o,
        "src",
        "" + new URL("../assets/photo1.CvygVCoG.png", import.meta.url).href
      ),
        f(a),
        f(s);
      var p = g(s, 2),
        n = u(p),
        m = u(n);
      Z(
        m,
        "srcset",
        new URL("../assets/photo1.DKoIjgt5.avif", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/photo1.Wum2BVk5.avif", import.meta.url).href +
          " 640w, " +
          new URL("../assets/photo1.CZyzZ5dY.avif", import.meta.url).href +
          " 400w"
      );
      var d = g(m);
      Z(
        d,
        "srcset",
        new URL("../assets/photo1.D-XeCFaC.webp", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/photo1.DeCZSCew.webp", import.meta.url).href +
          " 640w, " +
          new URL("../assets/photo1.XFWV_X9S.webp", import.meta.url).href +
          " 400w"
      );
      var c = g(d);
      Z(
        c,
        "srcset",
        new URL("../assets/photo1.CvygVCoG.png", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/photo1.DS-s2tZR.png", import.meta.url).href +
          " 640w, " +
          new URL("../assets/photo1.DY_CVIi7.png", import.meta.url).href +
          " 400w"
      );
      var x = g(c);
      Z(
        x,
        "src",
        "" + new URL("../assets/photo1.CvygVCoG.png", import.meta.url).href
      ),
        f(n),
        f(p);
      var h = g(p, 2),
        w = u(h),
        v = u(w, !0);
      y(() => U(v, te()("take-a-look-inside"))), f(w);
      var b = g(w, 2),
        L = u(b),
        _ = u(L, !0);
      y(() => U(_, te()("view-all"))), f(L), f(b), f(h);
      var k = g(h, 2),
        R = u(k),
        j = u(R);
      Z(
        j,
        "srcset",
        new URL("../assets/photo2.BMXHBh3V.avif", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/photo2.D6Bi8d8Z.avif", import.meta.url).href +
          " 640w, " +
          new URL("../assets/photo2.BKA-gSWY.avif", import.meta.url).href +
          " 400w"
      );
      var B = g(j);
      Z(
        B,
        "srcset",
        new URL("../assets/photo2.j-Pe5lbI.webp", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/photo2.Br5aitz0.webp", import.meta.url).href +
          " 640w, " +
          new URL("../assets/photo2.B00UQTiH.webp", import.meta.url).href +
          " 400w"
      );
      var z = g(B);
      Z(
        z,
        "srcset",
        new URL("../assets/photo2.CYyw3Co4.png", import.meta.url).href +
          " 1280w, " +
          new URL("../assets/photo2.DwRgSiPJ.png", import.meta.url).href +
          " 640w, " +
          new URL("../assets/photo2.dLFIb45p.png", import.meta.url).href +
          " 400w"
      );
      var C = g(z);
      Z(
        C,
        "src",
        "" + new URL("../assets/photo2.CYyw3Co4.png", import.meta.url).href
      ),
        f(R),
        f(k),
        f(t),
        V(o),
        V(x),
        V(C),
        E(e, t);
    }
  );
  var $s = g(Os, 2),
    Ps = u($s),
    Ws = u(Ps),
    qs = u(Ws, !0);
  y(() => U(qs, te()("hit-the-gram"))), f(Ws);
  var Es = g(Ws, 2),
    Xs = u(Es),
    Gs = u(Xs, !0);
  y(() => U(Gs, te()("go-social"))), f(Xs), f(Es), b(2), f(Ps), f($s);
  var Fs = g($s, 2),
    Qs = u(Fs),
    Ys = u(Qs),
    Ns = u(Ys),
    Js = u(Ns),
    Ks = u(Js);
  Z(
    Ks,
    "srcset",
    new URL("../assets/map.BUCVuAXu.avif", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/map.CEPH4Xom.avif", import.meta.url).href +
      " 640w, " +
      new URL("../assets/map.C3trn7C3.avif", import.meta.url).href +
      " 400w"
  );
  var ea = g(Ks);
  Z(
    ea,
    "srcset",
    new URL("../assets/map.BuZGuqbi.webp", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/map.Ca6lbKSY.webp", import.meta.url).href +
      " 640w, " +
      new URL("../assets/map.DALNV_W-.webp", import.meta.url).href +
      " 400w"
  );
  var ta = g(ea);
  Z(
    ta,
    "srcset",
    new URL("../assets/map.DEkNhJdb.png", import.meta.url).href +
      " 1280w, " +
      new URL("../assets/map.xnFk1Bsm.png", import.meta.url).href +
      " 640w, " +
      new URL("../assets/map.DS9Bnebl.png", import.meta.url).href +
      " 400w"
  );
  var sa = g(ta);
  Z(
    sa,
    "src",
    "" + new URL("../assets/map.DEkNhJdb.png", import.meta.url).href
  ),
    f(Js),
    f(Ns);
  var aa = g(Ns, 2),
    ra = u(aa),
    ia = g(u(ra), 2),
    la = u(ia),
    oa = u(la),
    pa = u(oa);
  y(() => {
    var e;
    return U(pa, `${null != (e = te()("tel")) ? e : ""}: +91 7026266622`);
  }),
    f(oa),
    f(la);
  var na = g(la, 2),
    ma = u(na),
    da = u(ma);
  y(() => {
    var e;
    return U(
      da,
      `${null != (e = te()("email")) ? e : ""}: reservations@navaresorts.in`
    );
  }),
    f(ma),
    f(na),
    f(ia);
  var ca = g(ia, 2),
    xa = u(ca);
  $(xa, () => te()(" ")), f(ca);
  var ha = g(ca, 2),
    wa = u(ha, !0);
  y(() => U(wa, te()(" "))), f(ha);
  var va = g(ha, 2),
    ua = u(va);
  $(ua, () => te()(" ")), f(va);
  var ga = g(va, 2),
    fa = u(ga),
    ba = u(fa),
    ya = u(ba, !0);
  y(() => U(ya, te()(" "))), f(ba), f(fa);
  var La = g(fa, 2),
    _a = u(La),
    ka = u(_a, !0);
  y(() => U(ka, te()(" "))), f(_a), f(La), f(ga);
  var Ra = g(ga, 2),
    Ua = u(Ra, !0);
  y(() => U(Ua, te()("resort-map"))), f(Ra), f(ra), f(aa), f(Ys), f(Qs), f(Fs);
  var ja = g(Fs, 2),
    Ba = u(ja),
    za = u(Ba);
  Z(
    za,
    "srcset",
    new URL("../assets/guest.C7eWY_jY.avif", import.meta.url).href + " 150w"
  );
  var Ca = g(za);
  Z(
    Ca,
    "srcset",
    new URL("../assets/guest.BV7HtJ7g.webp", import.meta.url).href + " 150w"
  );
  var Sa = g(Ca);
  Z(
    Sa,
    "src",
    "" + new URL("../assets/guest.-S1OzQQb.png", import.meta.url).href
  ),
    f(Ba);
  var Aa = g(Ba, 2),
    Ia = u(Aa),
    Da = u(Ia, !0);
  y(() => U(Da, te()("review"))), f(Ia);
  var Va = g(Ia, 4),
    Ha = u(Va, !0);
  y(() => U(Ha, te()("explore"))), f(Va), f(Aa), f(ja);
  var Za = g(ja, 2);
  W(Za, { info: Be }),
    y(() => {
      var e, t, s, a, r, i;
      T(Xe, "!hidden", !v(Me)),
        T(Ne, "!hidden", v(Me)),
        T(tt, "hidden", v(Me)),
        T(rt, "hidden", !v(Me)),
        T(dt, "sm:bottom-[115px]", !v($e)),
        T(dt, "sm:bottom-[35px]", v($e)),
        Z(
          ct,
          "href",
          `/${null != (e = G().params.locale) ? e : ""}/offers/summer-bali`
        ),
        T(ct, "bottom-[80px]", !0),
        T(ct, "sm:bottom-[115px]", !v($e)),
        T(ct, "sm:bottom-[35px]", v($e)),
        Z(It, "href", `/${null != (t = G().params.locale) ? t : ""}/about-us`),
        Z(
          Wt,
          "href",
          `/${null != (s = G().params.locale) ? s : ""}/accommodation/rooms`
        ),
        Z(
          Kt,
          "href",
          `/${null != (a = G().params.locale) ? a : ""}/accommodation/suites`
        ),
        Z(
          ns,
          "href",
          `/${
            null != (r = G().params.locale) ? r : ""
          }/accommodation/one-bedroom-villa`
        ),
        Z(
          fs,
          "href",
          `/${
            null != (i = G().params.locale) ? i : ""
          }/accommodation/two-bedroom-villa`
        );
    }),
    R("canplay", Ge, () => setTimeout(() => v(Ze).play(), 4e3)),
    R("click", tt, function () {
      h(Me, !0);
    }),
    R("click", it, function () {
      h(Me, !1);
    }),
    R("click", lt, function () {
      v(Ze).paused ? (v(Ze).play(), h(Te, !0)) : (v(Ze).pause(), h(Te, !1));
    }),
    R("click", pt, function () {
      k(Ze, (v(Ze).muted = !v(Ze).muted)), h(Oe, v(Ze).muted);
    }),
    V(Ut),
    V(sa),
    V(Sa),
    E(e, Pe),
    x();
}
export { Be as component, te as universal };
