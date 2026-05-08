import { d as e, w as t } from "./control.DcHKCGin.js";
function r(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var n, i;
const o = r(
  (function () {
    if (i) return n;
    i = 1;
    var e = function (e) {
        return (
          (function (e) {
            return !!e && "object" == typeof e;
          })(e) &&
          !(function (e) {
            var r = Object.prototype.toString.call(e);
            return (
              "[object RegExp]" === r ||
              "[object Date]" === r ||
              (function (e) {
                return e.$$typeof === t;
              })(e)
            );
          })(e)
        );
      },
      t =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
    function r(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e)
        ? u(((r = e), Array.isArray(r) ? [] : {}), e, t)
        : e;
      var r;
    }
    function o(e, t, n) {
      return e.concat(t).map(function (e) {
        return r(e, n);
      });
    }
    function s(e) {
      return Object.keys(e).concat(
        (function (e) {
          return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(e).filter(function (t) {
                return Object.propertyIsEnumerable.call(e, t);
              })
            : [];
        })(e)
      );
    }
    function a(e, t) {
      try {
        return t in e;
      } catch (r) {
        return !1;
      }
    }
    function h(e, t, n) {
      var i = {};
      return (
        n.isMergeableObject(e) &&
          s(e).forEach(function (t) {
            i[t] = r(e[t], n);
          }),
        s(t).forEach(function (o) {
          (function (e, t) {
            return (
              a(e, t) &&
              !(
                Object.hasOwnProperty.call(e, t) &&
                Object.propertyIsEnumerable.call(e, t)
              )
            );
          })(e, o) ||
            (a(e, o) && n.isMergeableObject(t[o])
              ? (i[o] = (function (e, t) {
                  if (!t.customMerge) return u;
                  var r = t.customMerge(e);
                  return "function" == typeof r ? r : u;
                })(o, n)(e[o], t[o], n))
              : (i[o] = r(t[o], n)));
        }),
        i
      );
    }
    function u(t, n, i) {
      ((i = i || {}).arrayMerge = i.arrayMerge || o),
        (i.isMergeableObject = i.isMergeableObject || e),
        (i.cloneUnlessOtherwiseSpecified = r);
      var s = Array.isArray(n);
      return s === Array.isArray(t)
        ? s
          ? i.arrayMerge(t, n, i)
          : h(t, n, i)
        : r(n, i);
    }
    return (
      (u.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, r) {
          return u(e, r, t);
        }, {});
      }),
      (n = u)
    );
  })()
);
var s = function (e, t) {
  return (s =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    })(e, t);
};
function a(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  function r() {
    this.constructor = e;
  }
  s(e, t),
    (e.prototype =
      null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
}
var h = function () {
  return (
    (h =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var i in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }),
    h.apply(this, arguments)
  );
};
function u(e, t, r) {
  if (r || 2 === arguments.length)
    for (var n, i = 0, o = t.length; i < o; i++)
      (!n && i in t) ||
        (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
  return e.concat(n || Array.prototype.slice.call(t));
}
function l(e, t) {
  var r = t && t.cache ? t.cache : B,
    n = t && t.serializer ? t.serializer : H;
  return (t && t.strategy ? t.strategy : m)(e, { cache: r, serializer: n });
}
function c(e, t, r, n) {
  var i,
    o =
      null == (i = n) || "number" == typeof i || "boolean" == typeof i
        ? n
        : r(n),
    s = t.get(o);
  return void 0 === s && ((s = e.call(this, n)), t.set(o, s)), s;
}
function f(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3),
    i = r(n),
    o = t.get(i);
  return void 0 === o && ((o = e.apply(this, n)), t.set(i, o)), o;
}
function p(e, t, r, n, i) {
  return r.bind(t, e, n, i);
}
function m(e, t) {
  return p(e, this, 1 === e.length ? c : f, t.cache.create(), t.serializer);
}
"function" == typeof SuppressedError && SuppressedError;
var E,
  b,
  g,
  y,
  d,
  v,
  H = function () {
    return JSON.stringify(arguments);
  },
  T = (function () {
    function e() {
      this.cache = Object.create(null);
    }
    return (
      (e.prototype.get = function (e) {
        return this.cache[e];
      }),
      (e.prototype.set = function (e, t) {
        this.cache[e] = t;
      }),
      e
    );
  })(),
  B = {
    create: function () {
      return new T();
    },
  },
  _ = {
    variadic: function (e, t) {
      return p(e, this, f, t.cache.create(), t.serializer);
    },
    monadic: function (e, t) {
      return p(e, this, c, t.cache.create(), t.serializer);
    },
  };
function A(e) {
  return e.type === g.literal;
}
function P(e) {
  return e.type === g.argument;
}
function L(e) {
  return e.type === g.number;
}
function S(e) {
  return e.type === g.date;
}
function O(e) {
  return e.type === g.time;
}
function N(e) {
  return e.type === g.select;
}
function I(e) {
  return e.type === g.plural;
}
function M(e) {
  return e.type === g.pound;
}
function C(e) {
  return e.type === g.tag;
}
function R(e) {
  return !(!e || "object" != typeof e || e.type !== d.number);
}
function w(e) {
  return !(!e || "object" != typeof e || e.type !== d.dateTime);
}
((b = E || (E = {}))[(b.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
  "EXPECT_ARGUMENT_CLOSING_BRACE"),
  (b[(b.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
  (b[(b.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
  (b[(b.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
  (b[(b.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
  (b[(b.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
  (b[(b.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
  (b[(b.INVALID_DATE_TIME_SKELETON = 8)] = "INVALID_DATE_TIME_SKELETON"),
  (b[(b.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
  (b[(b.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
  (b[(b.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
    "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
  (b[(b.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
    "EXPECT_SELECT_ARGUMENT_OPTIONS"),
  (b[(b.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
    "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
  (b[(b.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
    "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
  (b[(b.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
    "EXPECT_SELECT_ARGUMENT_SELECTOR"),
  (b[(b.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
    "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
  (b[(b.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
    "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
  (b[(b.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
    "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
  (b[(b.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
    "INVALID_PLURAL_ARGUMENT_SELECTOR"),
  (b[(b.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
    "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
  (b[(b.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
    "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
  (b[(b.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
  (b[(b.INVALID_TAG = 23)] = "INVALID_TAG"),
  (b[(b.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
  (b[(b.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
  (b[(b.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG"),
  ((y = g || (g = {}))[(y.literal = 0)] = "literal"),
  (y[(y.argument = 1)] = "argument"),
  (y[(y.number = 2)] = "number"),
  (y[(y.date = 3)] = "date"),
  (y[(y.time = 4)] = "time"),
  (y[(y.select = 5)] = "select"),
  (y[(y.plural = 6)] = "plural"),
  (y[(y.pound = 7)] = "pound"),
  (y[(y.tag = 8)] = "tag"),
  ((v = d || (d = {}))[(v.number = 0)] = "number"),
  (v[(v.dateTime = 1)] = "dateTime");
var U = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
  G =
    /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function D(e) {
  var t = {};
  return (
    e.replace(G, function (e) {
      var r = e.length;
      switch (e[0]) {
        case "G":
          t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
          break;
        case "y":
          t.year = 2 === r ? "2-digit" : "numeric";
          break;
        case "Y":
        case "u":
        case "U":
        case "r":
          throw new RangeError(
            "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
          );
        case "q":
        case "Q":
          throw new RangeError("`q/Q` (quarter) patterns are not supported");
        case "M":
        case "L":
          t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
          break;
        case "w":
        case "W":
          throw new RangeError("`w/W` (week) patterns are not supported");
        case "d":
          t.day = ["numeric", "2-digit"][r - 1];
          break;
        case "D":
        case "F":
        case "g":
          throw new RangeError(
            "`D/F/g` (day) patterns are not supported, use `d` instead"
          );
        case "E":
          t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
          break;
        case "e":
          if (r < 4)
            throw new RangeError(
              "`e..eee` (weekday) patterns are not supported"
            );
          t.weekday = ["short", "long", "narrow", "short"][r - 4];
          break;
        case "c":
          if (r < 4)
            throw new RangeError(
              "`c..ccc` (weekday) patterns are not supported"
            );
          t.weekday = ["short", "long", "narrow", "short"][r - 4];
          break;
        case "a":
          t.hour12 = !0;
          break;
        case "b":
        case "B":
          throw new RangeError(
            "`b/B` (period) patterns are not supported, use `a` instead"
          );
        case "h":
          (t.hourCycle = "h12"), (t.hour = ["numeric", "2-digit"][r - 1]);
          break;
        case "H":
          (t.hourCycle = "h23"), (t.hour = ["numeric", "2-digit"][r - 1]);
          break;
        case "K":
          (t.hourCycle = "h11"), (t.hour = ["numeric", "2-digit"][r - 1]);
          break;
        case "k":
          (t.hourCycle = "h24"), (t.hour = ["numeric", "2-digit"][r - 1]);
          break;
        case "j":
        case "J":
        case "C":
          throw new RangeError(
            "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
          );
        case "m":
          t.minute = ["numeric", "2-digit"][r - 1];
          break;
        case "s":
          t.second = ["numeric", "2-digit"][r - 1];
          break;
        case "S":
        case "A":
          throw new RangeError(
            "`S/A` (second) patterns are not supported, use `s` instead"
          );
        case "z":
          t.timeZoneName = r < 4 ? "short" : "long";
          break;
        case "Z":
        case "O":
        case "v":
        case "V":
        case "X":
        case "x":
          throw new RangeError(
            "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead"
          );
      }
      return "";
    }),
    t
  );
}
var F = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
var k = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
  j = /^(@+)?(\+|#+)?[rs]?$/g,
  V = /(\*)(0+)|(#+)(0+)|(0+)/g,
  X = /^(0+)$/;
function x(e) {
  var t = {};
  return (
    "r" === e[e.length - 1]
      ? (t.roundingPriority = "morePrecision")
      : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
    e.replace(j, function (e, r, n) {
      return (
        "string" != typeof n
          ? ((t.minimumSignificantDigits = r.length),
            (t.maximumSignificantDigits = r.length))
          : "+" === n
          ? (t.minimumSignificantDigits = r.length)
          : "#" === r[0]
          ? (t.maximumSignificantDigits = r.length)
          : ((t.minimumSignificantDigits = r.length),
            (t.maximumSignificantDigits =
              r.length + ("string" == typeof n ? n.length : 0))),
        ""
      );
    }),
    t
  );
}
function K(e) {
  switch (e) {
    case "sign-auto":
      return { signDisplay: "auto" };
    case "sign-accounting":
    case "()":
      return { currencySign: "accounting" };
    case "sign-always":
    case "+!":
      return { signDisplay: "always" };
    case "sign-accounting-always":
    case "()!":
      return { signDisplay: "always", currencySign: "accounting" };
    case "sign-except-zero":
    case "+?":
      return { signDisplay: "exceptZero" };
    case "sign-accounting-except-zero":
    case "()?":
      return { signDisplay: "exceptZero", currencySign: "accounting" };
    case "sign-never":
    case "+_":
      return { signDisplay: "never" };
  }
}
function Y(e) {
  var t;
  if (
    ("E" === e[0] && "E" === e[1]
      ? ((t = { notation: "engineering" }), (e = e.slice(2)))
      : "E" === e[0] && ((t = { notation: "scientific" }), (e = e.slice(1))),
    t)
  ) {
    var r = e.slice(0, 2);
    if (
      ("+!" === r
        ? ((t.signDisplay = "always"), (e = e.slice(2)))
        : "+?" === r && ((t.signDisplay = "exceptZero"), (e = e.slice(2))),
      !X.test(e))
    )
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Z(e) {
  var t = K(e);
  return t || {};
}
function W(e) {
  for (var t = {}, r = 0, n = e; r < n.length; r++) {
    var i = n[r];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        (t.style = "percent"), (t.scale = 100);
        continue;
      case "currency":
        (t.style = "currency"), (t.currency = i.options[0]);
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        (t.style = "unit"), (t.unit = i.options[0].replace(/^(.*?)-/, ""));
        continue;
      case "compact-short":
      case "K":
        (t.notation = "compact"), (t.compactDisplay = "short");
        continue;
      case "compact-long":
      case "KK":
        (t.notation = "compact"), (t.compactDisplay = "long");
        continue;
      case "scientific":
        t = h(
          h(h({}, t), { notation: "scientific" }),
          i.options.reduce(function (e, t) {
            return h(h({}, e), Z(t));
          }, {})
        );
        continue;
      case "engineering":
        t = h(
          h(h({}, t), { notation: "engineering" }),
          i.options.reduce(function (e, t) {
            return h(h({}, e), Z(t));
          }, {})
        );
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        (t.currencyDisplay = "narrowSymbol"), (t.unitDisplay = "narrow");
        continue;
      case "unit-width-short":
        (t.currencyDisplay = "code"), (t.unitDisplay = "short");
        continue;
      case "unit-width-full-name":
        (t.currencyDisplay = "name"), (t.unitDisplay = "long");
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(i.options[0]);
        continue;
      case "rounding-mode-floor":
        t.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        t.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        t.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        t.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        t.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        t.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        t.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError(
            "integer-width stems only accept a single optional option"
          );
        i.options[0].replace(V, function (e, r, n, i, o, s) {
          if (r) t.minimumIntegerDigits = n.length;
          else {
            if (i && o)
              throw new Error(
                "We currently do not support maximum integer digits"
              );
            if (s)
              throw new Error(
                "We currently do not support exact integer digits"
              );
          }
          return "";
        });
        continue;
    }
    if (X.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
    else if (k.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError(
          "Fraction-precision stems only accept a single optional option"
        );
      i.stem.replace(k, function (e, r, n, i, o, s) {
        return (
          "*" === n
            ? (t.minimumFractionDigits = r.length)
            : i && "#" === i[0]
            ? (t.maximumFractionDigits = i.length)
            : o && s
            ? ((t.minimumFractionDigits = o.length),
              (t.maximumFractionDigits = o.length + s.length))
            : ((t.minimumFractionDigits = r.length),
              (t.maximumFractionDigits = r.length)),
          ""
        );
      });
      var o = i.options[0];
      "w" === o
        ? (t = h(h({}, t), { trailingZeroDisplay: "stripIfInteger" }))
        : o && (t = h(h({}, t), x(o)));
    } else if (j.test(i.stem)) t = h(h({}, t), x(i.stem));
    else {
      var s = K(i.stem);
      s && (t = h(h({}, t), s));
      var a = Y(i.stem);
      a && (t = h(h({}, t), a));
    }
  }
  return t;
}
var z,
  J = {
    "001": ["H", "h"],
    419: ["h", "H", "hB", "hb"],
    AC: ["H", "h", "hb", "hB"],
    AD: ["H", "hB"],
    AE: ["h", "hB", "hb", "H"],
    AF: ["H", "hb", "hB", "h"],
    AG: ["h", "hb", "H", "hB"],
    AI: ["H", "h", "hb", "hB"],
    AL: ["h", "H", "hB"],
    AM: ["H", "hB"],
    AO: ["H", "hB"],
    AR: ["h", "H", "hB", "hb"],
    AS: ["h", "H"],
    AT: ["H", "hB"],
    AU: ["h", "hb", "H", "hB"],
    AW: ["H", "hB"],
    AX: ["H"],
    AZ: ["H", "hB", "h"],
    BA: ["H", "hB", "h"],
    BB: ["h", "hb", "H", "hB"],
    BD: ["h", "hB", "H"],
    BE: ["H", "hB"],
    BF: ["H", "hB"],
    BG: ["H", "hB", "h"],
    BH: ["h", "hB", "hb", "H"],
    BI: ["H", "h"],
    BJ: ["H", "hB"],
    BL: ["H", "hB"],
    BM: ["h", "hb", "H", "hB"],
    BN: ["hb", "hB", "h", "H"],
    BO: ["h", "H", "hB", "hb"],
    BQ: ["H"],
    BR: ["H", "hB"],
    BS: ["h", "hb", "H", "hB"],
    BT: ["h", "H"],
    BW: ["H", "h", "hb", "hB"],
    BY: ["H", "h"],
    BZ: ["H", "h", "hb", "hB"],
    CA: ["h", "hb", "H", "hB"],
    CC: ["H", "h", "hb", "hB"],
    CD: ["hB", "H"],
    CF: ["H", "h", "hB"],
    CG: ["H", "hB"],
    CH: ["H", "hB", "h"],
    CI: ["H", "hB"],
    CK: ["H", "h", "hb", "hB"],
    CL: ["h", "H", "hB", "hb"],
    CM: ["H", "h", "hB"],
    CN: ["H", "hB", "hb", "h"],
    CO: ["h", "H", "hB", "hb"],
    CP: ["H"],
    CR: ["h", "H", "hB", "hb"],
    CU: ["h", "H", "hB", "hb"],
    CV: ["H", "hB"],
    CW: ["H", "hB"],
    CX: ["H", "h", "hb", "hB"],
    CY: ["h", "H", "hb", "hB"],
    CZ: ["H"],
    DE: ["H", "hB"],
    DG: ["H", "h", "hb", "hB"],
    DJ: ["h", "H"],
    DK: ["H"],
    DM: ["h", "hb", "H", "hB"],
    DO: ["h", "H", "hB", "hb"],
    DZ: ["h", "hB", "hb", "H"],
    EA: ["H", "h", "hB", "hb"],
    EC: ["h", "H", "hB", "hb"],
    EE: ["H", "hB"],
    EG: ["h", "hB", "hb", "H"],
    EH: ["h", "hB", "hb", "H"],
    ER: ["h", "H"],
    ES: ["H", "hB", "h", "hb"],
    ET: ["hB", "hb", "h", "H"],
    FI: ["H"],
    FJ: ["h", "hb", "H", "hB"],
    FK: ["H", "h", "hb", "hB"],
    FM: ["h", "hb", "H", "hB"],
    FO: ["H", "h"],
    FR: ["H", "hB"],
    GA: ["H", "hB"],
    GB: ["H", "h", "hb", "hB"],
    GD: ["h", "hb", "H", "hB"],
    GE: ["H", "hB", "h"],
    GF: ["H", "hB"],
    GG: ["H", "h", "hb", "hB"],
    GH: ["h", "H"],
    GI: ["H", "h", "hb", "hB"],
    GL: ["H", "h"],
    GM: ["h", "hb", "H", "hB"],
    GN: ["H", "hB"],
    GP: ["H", "hB"],
    GQ: ["H", "hB", "h", "hb"],
    GR: ["h", "H", "hb", "hB"],
    GT: ["h", "H", "hB", "hb"],
    GU: ["h", "hb", "H", "hB"],
    GW: ["H", "hB"],
    GY: ["h", "hb", "H", "hB"],
    HK: ["h", "hB", "hb", "H"],
    HN: ["h", "H", "hB", "hb"],
    HR: ["H", "hB"],
    HU: ["H", "h"],
    IC: ["H", "h", "hB", "hb"],
    ID: ["H"],
    IE: ["H", "h", "hb", "hB"],
    IL: ["H", "hB"],
    IM: ["H", "h", "hb", "hB"],
    IN: ["h", "H"],
    IO: ["H", "h", "hb", "hB"],
    IQ: ["h", "hB", "hb", "H"],
    IR: ["hB", "H"],
    IS: ["H"],
    IT: ["H", "hB"],
    JE: ["H", "h", "hb", "hB"],
    JM: ["h", "hb", "H", "hB"],
    JO: ["h", "hB", "hb", "H"],
    JP: ["H", "K", "h"],
    KE: ["hB", "hb", "H", "h"],
    KG: ["H", "h", "hB", "hb"],
    KH: ["hB", "h", "H", "hb"],
    KI: ["h", "hb", "H", "hB"],
    KM: ["H", "h", "hB", "hb"],
    KN: ["h", "hb", "H", "hB"],
    KP: ["h", "H", "hB", "hb"],
    KR: ["h", "H", "hB", "hb"],
    KW: ["h", "hB", "hb", "H"],
    KY: ["h", "hb", "H", "hB"],
    KZ: ["H", "hB"],
    LA: ["H", "hb", "hB", "h"],
    LB: ["h", "hB", "hb", "H"],
    LC: ["h", "hb", "H", "hB"],
    LI: ["H", "hB", "h"],
    LK: ["H", "h", "hB", "hb"],
    LR: ["h", "hb", "H", "hB"],
    LS: ["h", "H"],
    LT: ["H", "h", "hb", "hB"],
    LU: ["H", "h", "hB"],
    LV: ["H", "hB", "hb", "h"],
    LY: ["h", "hB", "hb", "H"],
    MA: ["H", "h", "hB", "hb"],
    MC: ["H", "hB"],
    MD: ["H", "hB"],
    ME: ["H", "hB", "h"],
    MF: ["H", "hB"],
    MG: ["H", "h"],
    MH: ["h", "hb", "H", "hB"],
    MK: ["H", "h", "hb", "hB"],
    ML: ["H"],
    MM: ["hB", "hb", "H", "h"],
    MN: ["H", "h", "hb", "hB"],
    MO: ["h", "hB", "hb", "H"],
    MP: ["h", "hb", "H", "hB"],
    MQ: ["H", "hB"],
    MR: ["h", "hB", "hb", "H"],
    MS: ["H", "h", "hb", "hB"],
    MT: ["H", "h"],
    MU: ["H", "h"],
    MV: ["H", "h"],
    MW: ["h", "hb", "H", "hB"],
    MX: ["h", "H", "hB", "hb"],
    MY: ["hb", "hB", "h", "H"],
    MZ: ["H", "hB"],
    NA: ["h", "H", "hB", "hb"],
    NC: ["H", "hB"],
    NE: ["H"],
    NF: ["H", "h", "hb", "hB"],
    NG: ["H", "h", "hb", "hB"],
    NI: ["h", "H", "hB", "hb"],
    NL: ["H", "hB"],
    NO: ["H", "h"],
    NP: ["H", "h", "hB"],
    NR: ["H", "h", "hb", "hB"],
    NU: ["H", "h", "hb", "hB"],
    NZ: ["h", "hb", "H", "hB"],
    OM: ["h", "hB", "hb", "H"],
    PA: ["h", "H", "hB", "hb"],
    PE: ["h", "H", "hB", "hb"],
    PF: ["H", "h", "hB"],
    PG: ["h", "H"],
    PH: ["h", "hB", "hb", "H"],
    PK: ["h", "hB", "H"],
    PL: ["H", "h"],
    PM: ["H", "hB"],
    PN: ["H", "h", "hb", "hB"],
    PR: ["h", "H", "hB", "hb"],
    PS: ["h", "hB", "hb", "H"],
    PT: ["H", "hB"],
    PW: ["h", "H"],
    PY: ["h", "H", "hB", "hb"],
    QA: ["h", "hB", "hb", "H"],
    RE: ["H", "hB"],
    RO: ["H", "hB"],
    RS: ["H", "hB", "h"],
    RU: ["H"],
    RW: ["H", "h"],
    SA: ["h", "hB", "hb", "H"],
    SB: ["h", "hb", "H", "hB"],
    SC: ["H", "h", "hB"],
    SD: ["h", "hB", "hb", "H"],
    SE: ["H"],
    SG: ["h", "hb", "H", "hB"],
    SH: ["H", "h", "hb", "hB"],
    SI: ["H", "hB"],
    SJ: ["H"],
    SK: ["H"],
    SL: ["h", "hb", "H", "hB"],
    SM: ["H", "h", "hB"],
    SN: ["H", "h", "hB"],
    SO: ["h", "H"],
    SR: ["H", "hB"],
    SS: ["h", "hb", "H", "hB"],
    ST: ["H", "hB"],
    SV: ["h", "H", "hB", "hb"],
    SX: ["H", "h", "hb", "hB"],
    SY: ["h", "hB", "hb", "H"],
    SZ: ["h", "hb", "H", "hB"],
    TA: ["H", "h", "hb", "hB"],
    TC: ["h", "hb", "H", "hB"],
    TD: ["h", "H", "hB"],
    TF: ["H", "h", "hB"],
    TG: ["H", "hB"],
    TH: ["H", "h"],
    TJ: ["H", "h"],
    TL: ["H", "hB", "hb", "h"],
    TM: ["H", "h"],
    TN: ["h", "hB", "hb", "H"],
    TO: ["h", "H"],
    TR: ["H", "hB"],
    TT: ["h", "hb", "H", "hB"],
    TW: ["hB", "hb", "h", "H"],
    TZ: ["hB", "hb", "H", "h"],
    UA: ["H", "hB", "h"],
    UG: ["hB", "hb", "H", "h"],
    UM: ["h", "hb", "H", "hB"],
    US: ["h", "hb", "H", "hB"],
    UY: ["h", "H", "hB", "hb"],
    UZ: ["H", "hB", "h"],
    VA: ["H", "h", "hB"],
    VC: ["h", "hb", "H", "hB"],
    VE: ["h", "H", "hB", "hb"],
    VG: ["h", "hb", "H", "hB"],
    VI: ["h", "hb", "H", "hB"],
    VN: ["H", "h"],
    VU: ["h", "H"],
    WF: ["H", "hB"],
    WS: ["h", "H"],
    XK: ["H", "hB", "h"],
    YE: ["h", "hB", "hb", "H"],
    YT: ["H", "hB"],
    ZA: ["H", "h", "hb", "hB"],
    ZM: ["h", "hb", "H", "hB"],
    ZW: ["H", "h"],
    "af-ZA": ["H", "h", "hB", "hb"],
    "ar-001": ["h", "hB", "hb", "H"],
    "ca-ES": ["H", "h", "hB"],
    "en-001": ["h", "hb", "H", "hB"],
    "en-HK": ["h", "hb", "H", "hB"],
    "en-IL": ["H", "h", "hb", "hB"],
    "en-MY": ["h", "hb", "H", "hB"],
    "es-BR": ["H", "h", "hB", "hb"],
    "es-ES": ["H", "h", "hB", "hb"],
    "es-GQ": ["H", "h", "hB", "hb"],
    "fr-CA": ["H", "h", "hB"],
    "gl-ES": ["H", "h", "hB"],
    "gu-IN": ["hB", "hb", "h", "H"],
    "hi-IN": ["hB", "h", "H"],
    "it-CH": ["H", "h", "hB"],
    "it-IT": ["H", "h", "hB"],
    "kn-IN": ["hB", "h", "H"],
    "ml-IN": ["hB", "h", "H"],
    "mr-IN": ["hB", "hb", "h", "H"],
    "pa-IN": ["hB", "hb", "h", "H"],
    "ta-IN": ["hB", "h", "hb", "H"],
    "te-IN": ["hB", "h", "H"],
    "zu-ZA": ["H", "hB", "hb", "h"],
  };
function Q(e) {
  var t = e.hourCycle;
  if (
    (void 0 === t &&
      e.hourCycles &&
      e.hourCycles.length &&
      (t = e.hourCycles[0]),
    t)
  )
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var r,
    n = e.language;
  return (
    "root" !== n && (r = e.maximize().region),
    (J[r || ""] || J[n || ""] || J["".concat(n, "-001")] || J["001"])[0]
  );
}
var q = new RegExp("^".concat(U.source, "*")),
  $ = new RegExp("".concat(U.source, "*$"));
function ee(e, t) {
  return { start: e, end: t };
}
var te = !!String.prototype.startsWith && "_a".startsWith("a", 1),
  re = !!String.fromCodePoint,
  ne = !!Object.fromEntries,
  ie = !!String.prototype.codePointAt,
  oe = !!String.prototype.trimStart,
  se = !!String.prototype.trimEnd,
  ae = !!Number.isSafeInteger
    ? Number.isSafeInteger
    : function (e) {
        return (
          "number" == typeof e &&
          isFinite(e) &&
          Math.floor(e) === e &&
          Math.abs(e) <= 9007199254740991
        );
      },
  he = !0;
try {
  he =
    "a" ===
    (null ===
      (z = be("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) ||
    void 0 === z
      ? void 0
      : z[0]);
} catch (Ft) {
  he = !1;
}
var ue,
  le = te
    ? function (e, t, r) {
        return e.startsWith(t, r);
      }
    : function (e, t, r) {
        return e.slice(r, r + t.length) === t;
      },
  ce = re
    ? String.fromCodePoint
    : function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var r, n = "", i = e.length, o = 0; i > o; ) {
          if ((r = e[o++]) > 1114111)
            throw RangeError(r + " is not a valid code point");
          n +=
            r < 65536
              ? String.fromCharCode(r)
              : String.fromCharCode(
                  55296 + ((r -= 65536) >> 10),
                  (r % 1024) + 56320
                );
        }
        return n;
      },
  fe = ne
    ? Object.fromEntries
    : function (e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
          var i = n[r],
            o = i[0],
            s = i[1];
          t[o] = s;
        }
        return t;
      },
  pe = ie
    ? function (e, t) {
        return e.codePointAt(t);
      }
    : function (e, t) {
        var r = e.length;
        if (!(t < 0 || t >= r)) {
          var n,
            i = e.charCodeAt(t);
          return i < 55296 ||
            i > 56319 ||
            t + 1 === r ||
            (n = e.charCodeAt(t + 1)) < 56320 ||
            n > 57343
            ? i
            : n - 56320 + ((i - 55296) << 10) + 65536;
        }
      },
  me = oe
    ? function (e) {
        return e.trimStart();
      }
    : function (e) {
        return e.replace(q, "");
      },
  Ee = se
    ? function (e) {
        return e.trimEnd();
      }
    : function (e) {
        return e.replace($, "");
      };
function be(e, t) {
  return new RegExp(e, t);
}
if (he) {
  var ge = be("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ue = function (e, t) {
    var r;
    return (
      (ge.lastIndex = t), null !== (r = ge.exec(e)[1]) && void 0 !== r ? r : ""
    );
  };
} else
  ue = function (e, t) {
    for (var r = []; ; ) {
      var n = pe(e, t);
      if (void 0 === n || Te(n) || Be(n)) break;
      r.push(n), (t += n >= 65536 ? 2 : 1);
    }
    return ce.apply(void 0, r);
  };
var ye,
  de,
  ve = (function () {
    function e(e, t) {
      void 0 === t && (t = {}),
        (this.message = e),
        (this.position = { offset: 0, line: 1, column: 1 }),
        (this.ignoreTag = !!t.ignoreTag),
        (this.locale = t.locale),
        (this.requiresOtherClause = !!t.requiresOtherClause),
        (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
    }
    return (
      (e.prototype.parse = function () {
        if (0 !== this.offset()) throw Error("parser can only be used once");
        return this.parseMessage(0, "", !1);
      }),
      (e.prototype.parseMessage = function (e, t, r) {
        for (var n = []; !this.isEOF(); ) {
          var i = this.char();
          if (123 === i) {
            if ((o = this.parseArgument(e, r)).err) return o;
            n.push(o.val);
          } else {
            if (125 === i && e > 0) break;
            if (35 !== i || ("plural" !== t && "selectordinal" !== t)) {
              if (60 === i && !this.ignoreTag && 47 === this.peek()) {
                if (r) break;
                return this.error(
                  E.UNMATCHED_CLOSING_TAG,
                  ee(this.clonePosition(), this.clonePosition())
                );
              }
              if (60 === i && !this.ignoreTag && He(this.peek() || 0)) {
                if ((o = this.parseTag(e, t)).err) return o;
                n.push(o.val);
              } else {
                var o;
                if ((o = this.parseLiteral(e, t)).err) return o;
                n.push(o.val);
              }
            } else {
              var s = this.clonePosition();
              this.bump(),
                n.push({
                  type: g.pound,
                  location: ee(s, this.clonePosition()),
                });
            }
          }
        }
        return { val: n, err: null };
      }),
      (e.prototype.parseTag = function (e, t) {
        var r = this.clonePosition();
        this.bump();
        var n = this.parseTagName();
        if ((this.bumpSpace(), this.bumpIf("/>")))
          return {
            val: {
              type: g.literal,
              value: "<".concat(n, "/>"),
              location: ee(r, this.clonePosition()),
            },
            err: null,
          };
        if (this.bumpIf(">")) {
          var i = this.parseMessage(e + 1, t, !0);
          if (i.err) return i;
          var o = i.val,
            s = this.clonePosition();
          if (this.bumpIf("</")) {
            if (this.isEOF() || !He(this.char()))
              return this.error(E.INVALID_TAG, ee(s, this.clonePosition()));
            var a = this.clonePosition();
            return n !== this.parseTagName()
              ? this.error(E.UNMATCHED_CLOSING_TAG, ee(a, this.clonePosition()))
              : (this.bumpSpace(),
                this.bumpIf(">")
                  ? {
                      val: {
                        type: g.tag,
                        value: n,
                        children: o,
                        location: ee(r, this.clonePosition()),
                      },
                      err: null,
                    }
                  : this.error(E.INVALID_TAG, ee(s, this.clonePosition())));
          }
          return this.error(E.UNCLOSED_TAG, ee(r, this.clonePosition()));
        }
        return this.error(E.INVALID_TAG, ee(r, this.clonePosition()));
      }),
      (e.prototype.parseTagName = function () {
        var e,
          t = this.offset();
        for (
          this.bump();
          !this.isEOF() &&
          (45 === (e = this.char()) ||
            46 === e ||
            (e >= 48 && e <= 57) ||
            95 === e ||
            (e >= 97 && e <= 122) ||
            (e >= 65 && e <= 90) ||
            183 == e ||
            (e >= 192 && e <= 214) ||
            (e >= 216 && e <= 246) ||
            (e >= 248 && e <= 893) ||
            (e >= 895 && e <= 8191) ||
            (e >= 8204 && e <= 8205) ||
            (e >= 8255 && e <= 8256) ||
            (e >= 8304 && e <= 8591) ||
            (e >= 11264 && e <= 12271) ||
            (e >= 12289 && e <= 55295) ||
            (e >= 63744 && e <= 64975) ||
            (e >= 65008 && e <= 65533) ||
            (e >= 65536 && e <= 983039));

        )
          this.bump();
        return this.message.slice(t, this.offset());
      }),
      (e.prototype.parseLiteral = function (e, t) {
        for (var r = this.clonePosition(), n = ""; ; ) {
          var i = this.tryParseQuote(t);
          if (i) n += i;
          else {
            var o = this.tryParseUnquoted(e, t);
            if (o) n += o;
            else {
              var s = this.tryParseLeftAngleBracket();
              if (!s) break;
              n += s;
            }
          }
        }
        var a = ee(r, this.clonePosition());
        return { val: { type: g.literal, value: n, location: a }, err: null };
      }),
      (e.prototype.tryParseLeftAngleBracket = function () {
        return this.isEOF() ||
          60 !== this.char() ||
          (!this.ignoreTag && (He((e = this.peek() || 0)) || 47 === e))
          ? null
          : (this.bump(), "<");
        var e;
      }),
      (e.prototype.tryParseQuote = function (e) {
        if (this.isEOF() || 39 !== this.char()) return null;
        switch (this.peek()) {
          case 39:
            return this.bump(), this.bump(), "'";
          case 123:
          case 60:
          case 62:
          case 125:
            break;
          case 35:
            if ("plural" === e || "selectordinal" === e) break;
            return null;
          default:
            return null;
        }
        this.bump();
        var t = [this.char()];
        for (this.bump(); !this.isEOF(); ) {
          var r = this.char();
          if (39 === r) {
            if (39 !== this.peek()) {
              this.bump();
              break;
            }
            t.push(39), this.bump();
          } else t.push(r);
          this.bump();
        }
        return ce.apply(void 0, t);
      }),
      (e.prototype.tryParseUnquoted = function (e, t) {
        if (this.isEOF()) return null;
        var r = this.char();
        return 60 === r ||
          123 === r ||
          (35 === r && ("plural" === t || "selectordinal" === t)) ||
          (125 === r && e > 0)
          ? null
          : (this.bump(), ce(r));
      }),
      (e.prototype.parseArgument = function (e, t) {
        var r = this.clonePosition();
        if ((this.bump(), this.bumpSpace(), this.isEOF()))
          return this.error(
            E.EXPECT_ARGUMENT_CLOSING_BRACE,
            ee(r, this.clonePosition())
          );
        if (125 === this.char())
          return (
            this.bump(),
            this.error(E.EMPTY_ARGUMENT, ee(r, this.clonePosition()))
          );
        var n = this.parseIdentifierIfPossible().value;
        if (!n)
          return this.error(E.MALFORMED_ARGUMENT, ee(r, this.clonePosition()));
        if ((this.bumpSpace(), this.isEOF()))
          return this.error(
            E.EXPECT_ARGUMENT_CLOSING_BRACE,
            ee(r, this.clonePosition())
          );
        switch (this.char()) {
          case 125:
            return (
              this.bump(),
              {
                val: {
                  type: g.argument,
                  value: n,
                  location: ee(r, this.clonePosition()),
                },
                err: null,
              }
            );
          case 44:
            return (
              this.bump(),
              this.bumpSpace(),
              this.isEOF()
                ? this.error(
                    E.EXPECT_ARGUMENT_CLOSING_BRACE,
                    ee(r, this.clonePosition())
                  )
                : this.parseArgumentOptions(e, t, n, r)
            );
          default:
            return this.error(
              E.MALFORMED_ARGUMENT,
              ee(r, this.clonePosition())
            );
        }
      }),
      (e.prototype.parseIdentifierIfPossible = function () {
        var e = this.clonePosition(),
          t = this.offset(),
          r = ue(this.message, t),
          n = t + r.length;
        return (
          this.bumpTo(n), { value: r, location: ee(e, this.clonePosition()) }
        );
      }),
      (e.prototype.parseArgumentOptions = function (e, t, r, n) {
        var i,
          o = this.clonePosition(),
          s = this.parseIdentifierIfPossible().value,
          a = this.clonePosition();
        switch (s) {
          case "":
            return this.error(E.EXPECT_ARGUMENT_TYPE, ee(o, a));
          case "number":
          case "date":
          case "time":
            this.bumpSpace();
            var u = null;
            if (this.bumpIf(",")) {
              this.bumpSpace();
              var l = this.clonePosition();
              if ((H = this.parseSimpleArgStyleIfPossible()).err) return H;
              if (0 === (m = Ee(H.val)).length)
                return this.error(
                  E.EXPECT_ARGUMENT_STYLE,
                  ee(this.clonePosition(), this.clonePosition())
                );
              u = { style: m, styleLocation: ee(l, this.clonePosition()) };
            }
            if ((T = this.tryParseArgumentClose(n)).err) return T;
            var c = ee(n, this.clonePosition());
            if (u && le(null == u ? void 0 : u.style, "::", 0)) {
              var f = me(u.style.slice(2));
              if ("number" === s)
                return (H = this.parseNumberSkeletonFromString(
                  f,
                  u.styleLocation
                )).err
                  ? H
                  : {
                      val: {
                        type: g.number,
                        value: r,
                        location: c,
                        style: H.val,
                      },
                      err: null,
                    };
              if (0 === f.length)
                return this.error(E.EXPECT_DATE_TIME_SKELETON, c);
              var p = f;
              this.locale &&
                (p = (function (e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var i = e.charAt(n);
                    if ("j" === i) {
                      for (
                        var o = 0;
                        n + 1 < e.length && e.charAt(n + 1) === i;

                      )
                        o++, n++;
                      var s = 1 + (1 & o),
                        a = o < 2 ? 1 : 3 + (o >> 1),
                        h = Q(t);
                      for (("H" != h && "k" != h) || (a = 0); a-- > 0; )
                        r += "a";
                      for (; s-- > 0; ) r = h + r;
                    } else r += "J" === i ? "H" : i;
                  }
                  return r;
                })(f, this.locale));
              var m = {
                type: d.dateTime,
                pattern: p,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? D(p) : {},
              };
              return {
                val: {
                  type: "date" === s ? g.date : g.time,
                  value: r,
                  location: c,
                  style: m,
                },
                err: null,
              };
            }
            return {
              val: {
                type:
                  "number" === s ? g.number : "date" === s ? g.date : g.time,
                value: r,
                location: c,
                style:
                  null !== (i = null == u ? void 0 : u.style) && void 0 !== i
                    ? i
                    : null,
              },
              err: null,
            };
          case "plural":
          case "selectordinal":
          case "select":
            var b = this.clonePosition();
            if ((this.bumpSpace(), !this.bumpIf(",")))
              return this.error(
                E.EXPECT_SELECT_ARGUMENT_OPTIONS,
                ee(b, h({}, b))
              );
            this.bumpSpace();
            var y = this.parseIdentifierIfPossible(),
              v = 0;
            if ("select" !== s && "offset" === y.value) {
              if (!this.bumpIf(":"))
                return this.error(
                  E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                  ee(this.clonePosition(), this.clonePosition())
                );
              var H;
              if (
                (this.bumpSpace(),
                (H = this.tryParseDecimalInteger(
                  E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                  E.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
                )).err)
              )
                return H;
              this.bumpSpace(),
                (y = this.parseIdentifierIfPossible()),
                (v = H.val);
            }
            var T,
              B = this.tryParsePluralOrSelectOptions(e, s, t, y);
            if (B.err) return B;
            if ((T = this.tryParseArgumentClose(n)).err) return T;
            var _ = ee(n, this.clonePosition());
            return "select" === s
              ? {
                  val: {
                    type: g.select,
                    value: r,
                    options: fe(B.val),
                    location: _,
                  },
                  err: null,
                }
              : {
                  val: {
                    type: g.plural,
                    value: r,
                    options: fe(B.val),
                    offset: v,
                    pluralType: "plural" === s ? "cardinal" : "ordinal",
                    location: _,
                  },
                  err: null,
                };
          default:
            return this.error(E.INVALID_ARGUMENT_TYPE, ee(o, a));
        }
      }),
      (e.prototype.tryParseArgumentClose = function (e) {
        return this.isEOF() || 125 !== this.char()
          ? this.error(
              E.EXPECT_ARGUMENT_CLOSING_BRACE,
              ee(e, this.clonePosition())
            )
          : (this.bump(), { val: !0, err: null });
      }),
      (e.prototype.parseSimpleArgStyleIfPossible = function () {
        for (var e = 0, t = this.clonePosition(); !this.isEOF(); ) {
          switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'"))
                return this.error(
                  E.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                  ee(r, this.clonePosition())
                );
              this.bump();
              break;
            case 123:
              (e += 1), this.bump();
              break;
            case 125:
              if (!(e > 0))
                return {
                  val: this.message.slice(t.offset, this.offset()),
                  err: null,
                };
              e -= 1;
              break;
            default:
              this.bump();
          }
        }
        return { val: this.message.slice(t.offset, this.offset()), err: null };
      }),
      (e.prototype.parseNumberSkeletonFromString = function (e, t) {
        var r = [];
        try {
          r = (function (e) {
            if (0 === e.length)
              throw new Error("Number skeleton cannot be empty");
            for (
              var t = [],
                r = 0,
                n = e.split(F).filter(function (e) {
                  return e.length > 0;
                });
              r < n.length;
              r++
            ) {
              var i = n[r].split("/");
              if (0 === i.length) throw new Error("Invalid number skeleton");
              for (
                var o = i[0], s = i.slice(1), a = 0, h = s;
                a < h.length;
                a++
              )
                if (0 === h[a].length)
                  throw new Error("Invalid number skeleton");
              t.push({ stem: o, options: s });
            }
            return t;
          })(e);
        } catch (n) {
          return this.error(E.INVALID_NUMBER_SKELETON, t);
        }
        return {
          val: {
            type: d.number,
            tokens: r,
            location: t,
            parsedOptions: this.shouldParseSkeletons ? W(r) : {},
          },
          err: null,
        };
      }),
      (e.prototype.tryParsePluralOrSelectOptions = function (e, t, r, n) {
        for (
          var i, o = !1, s = [], a = new Set(), h = n.value, u = n.location;
          ;

        ) {
          if (0 === h.length) {
            var l = this.clonePosition();
            if ("select" === t || !this.bumpIf("=")) break;
            var c = this.tryParseDecimalInteger(
              E.EXPECT_PLURAL_ARGUMENT_SELECTOR,
              E.INVALID_PLURAL_ARGUMENT_SELECTOR
            );
            if (c.err) return c;
            (u = ee(l, this.clonePosition())),
              (h = this.message.slice(l.offset, this.offset()));
          }
          if (a.has(h))
            return this.error(
              "select" === t
                ? E.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                : E.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
              u
            );
          "other" === h && (o = !0), this.bumpSpace();
          var f = this.clonePosition();
          if (!this.bumpIf("{"))
            return this.error(
              "select" === t
                ? E.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                : E.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
              ee(this.clonePosition(), this.clonePosition())
            );
          var p = this.parseMessage(e + 1, t, r);
          if (p.err) return p;
          var m = this.tryParseArgumentClose(f);
          if (m.err) return m;
          s.push([h, { value: p.val, location: ee(f, this.clonePosition()) }]),
            a.add(h),
            this.bumpSpace(),
            (h = (i = this.parseIdentifierIfPossible()).value),
            (u = i.location);
        }
        return 0 === s.length
          ? this.error(
              "select" === t
                ? E.EXPECT_SELECT_ARGUMENT_SELECTOR
                : E.EXPECT_PLURAL_ARGUMENT_SELECTOR,
              ee(this.clonePosition(), this.clonePosition())
            )
          : this.requiresOtherClause && !o
          ? this.error(
              E.MISSING_OTHER_CLAUSE,
              ee(this.clonePosition(), this.clonePosition())
            )
          : { val: s, err: null };
      }),
      (e.prototype.tryParseDecimalInteger = function (e, t) {
        var r = 1,
          n = this.clonePosition();
        this.bumpIf("+") || (this.bumpIf("-") && (r = -1));
        for (var i = !1, o = 0; !this.isEOF(); ) {
          var s = this.char();
          if (!(s >= 48 && s <= 57)) break;
          (i = !0), (o = 10 * o + (s - 48)), this.bump();
        }
        var a = ee(n, this.clonePosition());
        return i
          ? ae((o *= r))
            ? { val: o, err: null }
            : this.error(t, a)
          : this.error(e, a);
      }),
      (e.prototype.offset = function () {
        return this.position.offset;
      }),
      (e.prototype.isEOF = function () {
        return this.offset() === this.message.length;
      }),
      (e.prototype.clonePosition = function () {
        return {
          offset: this.position.offset,
          line: this.position.line,
          column: this.position.column,
        };
      }),
      (e.prototype.char = function () {
        var e = this.position.offset;
        if (e >= this.message.length) throw Error("out of bound");
        var t = pe(this.message, e);
        if (void 0 === t)
          throw Error(
            "Offset ".concat(e, " is at invalid UTF-16 code unit boundary")
          );
        return t;
      }),
      (e.prototype.error = function (e, t) {
        return {
          val: null,
          err: { kind: e, message: this.message, location: t },
        };
      }),
      (e.prototype.bump = function () {
        if (!this.isEOF()) {
          var e = this.char();
          10 === e
            ? ((this.position.line += 1),
              (this.position.column = 1),
              (this.position.offset += 1))
            : ((this.position.column += 1),
              (this.position.offset += e < 65536 ? 1 : 2));
        }
      }),
      (e.prototype.bumpIf = function (e) {
        if (le(this.message, e, this.offset())) {
          for (var t = 0; t < e.length; t++) this.bump();
          return !0;
        }
        return !1;
      }),
      (e.prototype.bumpUntil = function (e) {
        var t = this.offset(),
          r = this.message.indexOf(e, t);
        return r >= 0
          ? (this.bumpTo(r), !0)
          : (this.bumpTo(this.message.length), !1);
      }),
      (e.prototype.bumpTo = function (e) {
        if (this.offset() > e)
          throw Error(
            "targetOffset "
              .concat(
                e,
                " must be greater than or equal to the current offset "
              )
              .concat(this.offset())
          );
        for (e = Math.min(e, this.message.length); ; ) {
          var t = this.offset();
          if (t === e) break;
          if (t > e)
            throw Error(
              "targetOffset ".concat(
                e,
                " is at invalid UTF-16 code unit boundary"
              )
            );
          if ((this.bump(), this.isEOF())) break;
        }
      }),
      (e.prototype.bumpSpace = function () {
        for (; !this.isEOF() && Te(this.char()); ) this.bump();
      }),
      (e.prototype.peek = function () {
        if (this.isEOF()) return null;
        var e = this.char(),
          t = this.offset(),
          r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
        return null != r ? r : null;
      }),
      e
    );
  })();
function He(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function Te(e) {
  return (
    (e >= 9 && e <= 13) ||
    32 === e ||
    133 === e ||
    (e >= 8206 && e <= 8207) ||
    8232 === e ||
    8233 === e
  );
}
function Be(e) {
  return (
    (e >= 33 && e <= 35) ||
    36 === e ||
    (e >= 37 && e <= 39) ||
    40 === e ||
    41 === e ||
    42 === e ||
    43 === e ||
    44 === e ||
    45 === e ||
    (e >= 46 && e <= 47) ||
    (e >= 58 && e <= 59) ||
    (e >= 60 && e <= 62) ||
    (e >= 63 && e <= 64) ||
    91 === e ||
    92 === e ||
    93 === e ||
    94 === e ||
    96 === e ||
    123 === e ||
    124 === e ||
    125 === e ||
    126 === e ||
    161 === e ||
    (e >= 162 && e <= 165) ||
    166 === e ||
    167 === e ||
    169 === e ||
    171 === e ||
    172 === e ||
    174 === e ||
    176 === e ||
    177 === e ||
    182 === e ||
    187 === e ||
    191 === e ||
    215 === e ||
    247 === e ||
    (e >= 8208 && e <= 8213) ||
    (e >= 8214 && e <= 8215) ||
    8216 === e ||
    8217 === e ||
    8218 === e ||
    (e >= 8219 && e <= 8220) ||
    8221 === e ||
    8222 === e ||
    8223 === e ||
    (e >= 8224 && e <= 8231) ||
    (e >= 8240 && e <= 8248) ||
    8249 === e ||
    8250 === e ||
    (e >= 8251 && e <= 8254) ||
    (e >= 8257 && e <= 8259) ||
    8260 === e ||
    8261 === e ||
    8262 === e ||
    (e >= 8263 && e <= 8273) ||
    8274 === e ||
    8275 === e ||
    (e >= 8277 && e <= 8286) ||
    (e >= 8592 && e <= 8596) ||
    (e >= 8597 && e <= 8601) ||
    (e >= 8602 && e <= 8603) ||
    (e >= 8604 && e <= 8607) ||
    8608 === e ||
    (e >= 8609 && e <= 8610) ||
    8611 === e ||
    (e >= 8612 && e <= 8613) ||
    8614 === e ||
    (e >= 8615 && e <= 8621) ||
    8622 === e ||
    (e >= 8623 && e <= 8653) ||
    (e >= 8654 && e <= 8655) ||
    (e >= 8656 && e <= 8657) ||
    8658 === e ||
    8659 === e ||
    8660 === e ||
    (e >= 8661 && e <= 8691) ||
    (e >= 8692 && e <= 8959) ||
    (e >= 8960 && e <= 8967) ||
    8968 === e ||
    8969 === e ||
    8970 === e ||
    8971 === e ||
    (e >= 8972 && e <= 8991) ||
    (e >= 8992 && e <= 8993) ||
    (e >= 8994 && e <= 9e3) ||
    9001 === e ||
    9002 === e ||
    (e >= 9003 && e <= 9083) ||
    9084 === e ||
    (e >= 9085 && e <= 9114) ||
    (e >= 9115 && e <= 9139) ||
    (e >= 9140 && e <= 9179) ||
    (e >= 9180 && e <= 9185) ||
    (e >= 9186 && e <= 9254) ||
    (e >= 9255 && e <= 9279) ||
    (e >= 9280 && e <= 9290) ||
    (e >= 9291 && e <= 9311) ||
    (e >= 9472 && e <= 9654) ||
    9655 === e ||
    (e >= 9656 && e <= 9664) ||
    9665 === e ||
    (e >= 9666 && e <= 9719) ||
    (e >= 9720 && e <= 9727) ||
    (e >= 9728 && e <= 9838) ||
    9839 === e ||
    (e >= 9840 && e <= 10087) ||
    10088 === e ||
    10089 === e ||
    10090 === e ||
    10091 === e ||
    10092 === e ||
    10093 === e ||
    10094 === e ||
    10095 === e ||
    10096 === e ||
    10097 === e ||
    10098 === e ||
    10099 === e ||
    10100 === e ||
    10101 === e ||
    (e >= 10132 && e <= 10175) ||
    (e >= 10176 && e <= 10180) ||
    10181 === e ||
    10182 === e ||
    (e >= 10183 && e <= 10213) ||
    10214 === e ||
    10215 === e ||
    10216 === e ||
    10217 === e ||
    10218 === e ||
    10219 === e ||
    10220 === e ||
    10221 === e ||
    10222 === e ||
    10223 === e ||
    (e >= 10224 && e <= 10239) ||
    (e >= 10240 && e <= 10495) ||
    (e >= 10496 && e <= 10626) ||
    10627 === e ||
    10628 === e ||
    10629 === e ||
    10630 === e ||
    10631 === e ||
    10632 === e ||
    10633 === e ||
    10634 === e ||
    10635 === e ||
    10636 === e ||
    10637 === e ||
    10638 === e ||
    10639 === e ||
    10640 === e ||
    10641 === e ||
    10642 === e ||
    10643 === e ||
    10644 === e ||
    10645 === e ||
    10646 === e ||
    10647 === e ||
    10648 === e ||
    (e >= 10649 && e <= 10711) ||
    10712 === e ||
    10713 === e ||
    10714 === e ||
    10715 === e ||
    (e >= 10716 && e <= 10747) ||
    10748 === e ||
    10749 === e ||
    (e >= 10750 && e <= 11007) ||
    (e >= 11008 && e <= 11055) ||
    (e >= 11056 && e <= 11076) ||
    (e >= 11077 && e <= 11078) ||
    (e >= 11079 && e <= 11084) ||
    (e >= 11085 && e <= 11123) ||
    (e >= 11124 && e <= 11125) ||
    (e >= 11126 && e <= 11157) ||
    11158 === e ||
    (e >= 11159 && e <= 11263) ||
    (e >= 11776 && e <= 11777) ||
    11778 === e ||
    11779 === e ||
    11780 === e ||
    11781 === e ||
    (e >= 11782 && e <= 11784) ||
    11785 === e ||
    11786 === e ||
    11787 === e ||
    11788 === e ||
    11789 === e ||
    (e >= 11790 && e <= 11798) ||
    11799 === e ||
    (e >= 11800 && e <= 11801) ||
    11802 === e ||
    11803 === e ||
    11804 === e ||
    11805 === e ||
    (e >= 11806 && e <= 11807) ||
    11808 === e ||
    11809 === e ||
    11810 === e ||
    11811 === e ||
    11812 === e ||
    11813 === e ||
    11814 === e ||
    11815 === e ||
    11816 === e ||
    11817 === e ||
    (e >= 11818 && e <= 11822) ||
    11823 === e ||
    (e >= 11824 && e <= 11833) ||
    (e >= 11834 && e <= 11835) ||
    (e >= 11836 && e <= 11839) ||
    11840 === e ||
    11841 === e ||
    11842 === e ||
    (e >= 11843 && e <= 11855) ||
    (e >= 11856 && e <= 11857) ||
    11858 === e ||
    (e >= 11859 && e <= 11903) ||
    (e >= 12289 && e <= 12291) ||
    12296 === e ||
    12297 === e ||
    12298 === e ||
    12299 === e ||
    12300 === e ||
    12301 === e ||
    12302 === e ||
    12303 === e ||
    12304 === e ||
    12305 === e ||
    (e >= 12306 && e <= 12307) ||
    12308 === e ||
    12309 === e ||
    12310 === e ||
    12311 === e ||
    12312 === e ||
    12313 === e ||
    12314 === e ||
    12315 === e ||
    12316 === e ||
    12317 === e ||
    (e >= 12318 && e <= 12319) ||
    12320 === e ||
    12336 === e ||
    64830 === e ||
    64831 === e ||
    (e >= 65093 && e <= 65094)
  );
}
function _e(e) {
  e.forEach(function (e) {
    if ((delete e.location, N(e) || I(e)))
      for (var t in e.options)
        delete e.options[t].location, _e(e.options[t].value);
    else
      (L(e) && R(e.style)) || ((S(e) || O(e)) && w(e.style))
        ? delete e.style.location
        : C(e) && _e(e.children);
  });
}
function Ae(e, t) {
  void 0 === t && (t = {}),
    (t = h({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t));
  var r = new ve(e, t).parse();
  if (r.err) {
    var n = SyntaxError(E[r.err.kind]);
    throw (
      ((n.location = r.err.location), (n.originalMessage = r.err.message), n)
    );
  }
  return (null == t ? void 0 : t.captureLocation) || _e(r.val), r.val;
}
((de = ye || (ye = {})).MISSING_VALUE = "MISSING_VALUE"),
  (de.INVALID_VALUE = "INVALID_VALUE"),
  (de.MISSING_INTL_API = "MISSING_INTL_API");
var Pe,
  Le,
  Se = (function (e) {
    function t(t, r, n) {
      var i = e.call(this, t) || this;
      return (i.code = r), (i.originalMessage = n), i;
    }
    return (
      a(t, e),
      (t.prototype.toString = function () {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
      }),
      t
    );
  })(Error),
  Oe = (function (e) {
    function t(t, r, n, i) {
      return (
        e.call(
          this,
          'Invalid values for "'
            .concat(t, '": "')
            .concat(r, '". Options are "')
            .concat(Object.keys(n).join('", "'), '"'),
          ye.INVALID_VALUE,
          i
        ) || this
      );
    }
    return a(t, e), t;
  })(Se),
  Ne = (function (e) {
    function t(t, r, n) {
      return (
        e.call(
          this,
          'Value for "'.concat(t, '" must be of type ').concat(r),
          ye.INVALID_VALUE,
          n
        ) || this
      );
    }
    return a(t, e), t;
  })(Se),
  Ie = (function (e) {
    function t(t, r) {
      return (
        e.call(
          this,
          'The intl string context variable "'
            .concat(t, '" was not provided to the string "')
            .concat(r, '"'),
          ye.MISSING_VALUE,
          r
        ) || this
      );
    }
    return a(t, e), t;
  })(Se);
function Me(e) {
  return "function" == typeof e;
}
function Ce(e, t, r, n, i, o, s) {
  if (1 === e.length && A(e[0]))
    return [{ type: Pe.literal, value: e[0].value }];
  for (var a = [], h = 0, u = e; h < u.length; h++) {
    var l = u[h];
    if (A(l)) a.push({ type: Pe.literal, value: l.value });
    else if (M(l))
      "number" == typeof o &&
        a.push({ type: Pe.literal, value: r.getNumberFormat(t).format(o) });
    else {
      var c = l.value;
      if (!i || !(c in i)) throw new Ie(c, s);
      var f = i[c];
      if (P(l))
        (f && "string" != typeof f && "number" != typeof f) ||
          (f = "string" == typeof f || "number" == typeof f ? String(f) : ""),
          a.push({
            type: "string" == typeof f ? Pe.literal : Pe.object,
            value: f,
          });
      else if (S(l)) {
        var p =
          "string" == typeof l.style
            ? n.date[l.style]
            : w(l.style)
            ? l.style.parsedOptions
            : void 0;
        a.push({
          type: Pe.literal,
          value: r.getDateTimeFormat(t, p).format(f),
        });
      } else if (O(l)) {
        p =
          "string" == typeof l.style
            ? n.time[l.style]
            : w(l.style)
            ? l.style.parsedOptions
            : n.time.medium;
        a.push({
          type: Pe.literal,
          value: r.getDateTimeFormat(t, p).format(f),
        });
      } else if (L(l)) {
        (p =
          "string" == typeof l.style
            ? n.number[l.style]
            : R(l.style)
            ? l.style.parsedOptions
            : void 0) &&
          p.scale &&
          (f *= p.scale || 1),
          a.push({
            type: Pe.literal,
            value: r.getNumberFormat(t, p).format(f),
          });
      } else {
        if (C(l)) {
          var m = l.children,
            E = l.value,
            b = i[E];
          if (!Me(b)) throw new Ne(E, "function", s);
          var g = b(
            Ce(m, t, r, n, i, o).map(function (e) {
              return e.value;
            })
          );
          Array.isArray(g) || (g = [g]),
            a.push.apply(
              a,
              g.map(function (e) {
                return {
                  type: "string" == typeof e ? Pe.literal : Pe.object,
                  value: e,
                };
              })
            );
        }
        if (N(l)) {
          if (!(y = l.options[f] || l.options.other))
            throw new Oe(l.value, f, Object.keys(l.options), s);
          a.push.apply(a, Ce(y.value, t, r, n, i));
        } else if (I(l)) {
          var y;
          if (!(y = l.options["=".concat(f)])) {
            if (!Intl.PluralRules)
              throw new Se(
                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                ye.MISSING_INTL_API,
                s
              );
            var d = r
              .getPluralRules(t, { type: l.pluralType })
              .select(f - (l.offset || 0));
            y = l.options[d] || l.options.other;
          }
          if (!y) throw new Oe(l.value, f, Object.keys(l.options), s);
          a.push.apply(a, Ce(y.value, t, r, n, i, f - (l.offset || 0)));
        } else;
      }
    }
  }
  return (function (e) {
    return e.length < 2
      ? e
      : e.reduce(function (e, t) {
          var r = e[e.length - 1];
          return (
            r && r.type === Pe.literal && t.type === Pe.literal
              ? (r.value += t.value)
              : e.push(t),
            e
          );
        }, []);
  })(a);
}
function Re(e, t) {
  return t
    ? Object.keys(e).reduce(function (r, n) {
        var i, o;
        return (
          (r[n] =
            ((i = e[n]),
            (o = t[n])
              ? h(
                  h(h({}, i || {}), o || {}),
                  Object.keys(i).reduce(function (e, t) {
                    return (e[t] = h(h({}, i[t]), o[t] || {})), e;
                  }, {})
                )
              : i)),
          r
        );
      }, h({}, e))
    : e;
}
function we(e) {
  return {
    create: function () {
      return {
        get: function (t) {
          return e[t];
        },
        set: function (t, r) {
          e[t] = r;
        },
      };
    },
  };
}
((Le = Pe || (Pe = {}))[(Le.literal = 0)] = "literal"),
  (Le[(Le.object = 1)] = "object");
var Ue = (function () {
  function e(t, r, n, i) {
    void 0 === r && (r = e.defaultLocale);
    var o,
      s = this;
    if (
      ((this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
      (this.format = function (e) {
        var t = s.formatToParts(e);
        if (1 === t.length) return t[0].value;
        var r = t.reduce(function (e, t) {
          return (
            e.length &&
            t.type === Pe.literal &&
            "string" == typeof e[e.length - 1]
              ? (e[e.length - 1] += t.value)
              : e.push(t.value),
            e
          );
        }, []);
        return r.length <= 1 ? r[0] || "" : r;
      }),
      (this.formatToParts = function (e) {
        return Ce(
          s.ast,
          s.locales,
          s.formatters,
          s.formats,
          e,
          void 0,
          s.message
        );
      }),
      (this.resolvedOptions = function () {
        var e;
        return {
          locale:
            (null === (e = s.resolvedLocale) || void 0 === e
              ? void 0
              : e.toString()) ||
            Intl.NumberFormat.supportedLocalesOf(s.locales)[0],
        };
      }),
      (this.getAst = function () {
        return s.ast;
      }),
      (this.locales = r),
      (this.resolvedLocale = e.resolveLocale(r)),
      "string" == typeof t)
    ) {
      if (((this.message = t), !e.__parse))
        throw new TypeError(
          "IntlMessageFormat.__parse must be set to process `message` of type `string`"
        );
      var a = i || {};
      a.formatters;
      var c = (function (e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      })(a, ["formatters"]);
      this.ast = e.__parse(t, h(h({}, c), { locale: this.resolvedLocale }));
    } else this.ast = t;
    if (!Array.isArray(this.ast))
      throw new TypeError("A message must be provided as a String or AST.");
    (this.formats = Re(e.formats, n)),
      (this.formatters =
        (i && i.formatters) ||
        (void 0 === (o = this.formatterCache) &&
          (o = { number: {}, dateTime: {}, pluralRules: {} }),
        {
          getNumberFormat: l(
            function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return new ((e = Intl.NumberFormat).bind.apply(
                e,
                u([void 0], t, !1)
              ))();
            },
            { cache: we(o.number), strategy: _.variadic }
          ),
          getDateTimeFormat: l(
            function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return new ((e = Intl.DateTimeFormat).bind.apply(
                e,
                u([void 0], t, !1)
              ))();
            },
            { cache: we(o.dateTime), strategy: _.variadic }
          ),
          getPluralRules: l(
            function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return new ((e = Intl.PluralRules).bind.apply(
                e,
                u([void 0], t, !1)
              ))();
            },
            { cache: we(o.pluralRules), strategy: _.variadic }
          ),
        }));
  }
  return (
    Object.defineProperty(e, "defaultLocale", {
      get: function () {
        return (
          e.memoizedDefaultLocale ||
            (e.memoizedDefaultLocale =
              new Intl.NumberFormat().resolvedOptions().locale),
          e.memoizedDefaultLocale
        );
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.memoizedDefaultLocale = null),
    (e.resolveLocale = function (e) {
      if (void 0 !== Intl.Locale) {
        var t = Intl.NumberFormat.supportedLocalesOf(e);
        return t.length > 0
          ? new Intl.Locale(t[0])
          : new Intl.Locale("string" == typeof e ? e : e[0]);
      }
    }),
    (e.__parse = Ae),
    (e.formats = {
      number: {
        integer: { maximumFractionDigits: 0 },
        currency: { style: "currency" },
        percent: { style: "percent" },
      },
      date: {
        short: { month: "numeric", day: "numeric", year: "2-digit" },
        medium: { month: "short", day: "numeric", year: "numeric" },
        long: { month: "long", day: "numeric", year: "numeric" },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        },
      },
      time: {
        short: { hour: "numeric", minute: "numeric" },
        medium: { hour: "numeric", minute: "numeric", second: "numeric" },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short",
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short",
        },
      },
    }),
    e
  );
})();
const Ge = {},
  De = (e, t, r) =>
    r ? (t in Ge || (Ge[t] = {}), e in Ge[t] || (Ge[t][e] = r), r) : r,
  Fe = (e, t) => {
    if (null == t) return;
    if (t in Ge && e in Ge[t]) return Ge[t][e];
    const r = Et(t);
    for (let n = 0; n < r.length; n++) {
      const i = Xe(r[n], e);
      if (i) return De(e, t, i);
    }
  };
let ke;
const je = t({});
function Ve(e) {
  return e in ke;
}
function Xe(e, t) {
  if (!Ve(e)) return null;
  const r = (function (e) {
    return ke[e] || null;
  })(e);
  return (function (e, t) {
    if (null == t) return;
    if (t in e) return e[t];
    const r = t.split(".");
    let n = e;
    for (let i = 0; i < r.length; i++)
      if ("object" == typeof n) {
        if (i > 0) {
          const e = r.slice(i, r.length).join(".");
          if (e in n) {
            n = n[e];
            break;
          }
        }
        n = n[r[i]];
      } else n = void 0;
    return n;
  })(r, t);
}
e([je], ([e]) => Object.keys(e)), je.subscribe((e) => (ke = e));
const xe = {};
function Ke(e) {
  return xe[e];
}
function Ye(e) {
  return (
    null != e &&
    Et(e).some((e) => {
      var t;
      return null == (t = Ke(e)) ? void 0 : t.size;
    })
  );
}
function Ze(e, t) {
  const r = Promise.all(
    t.map(
      (t) => (
        (function (e, t) {
          xe[e].delete(t), 0 === xe[e].size && delete xe[e];
        })(e, t),
        t().then((e) => e.default || e)
      )
    )
  );
  return r.then((t) =>
    (function (e, ...t) {
      delete Ge[e], je.update((r) => ((r[e] = o.all([r[e] || {}, ...t])), r));
    })(e, ...t)
  );
}
const We = {};
function ze(e) {
  if (!Ye(e)) return e in We ? We[e] : Promise.resolve();
  const t = (function (e) {
    return Et(e)
      .map((e) => {
        const t = Ke(e);
        return [e, t ? [...t] : []];
      })
      .filter(([, e]) => e.length > 0);
  })(e);
  return (
    (We[e] = Promise.all(t.map(([e, t]) => Ze(e, t))).then(() => {
      if (Ye(e)) return ze(e);
      delete We[e];
    })),
    We[e]
  );
}
function Je(e, t) {
  Ke(e) ||
    (function (e) {
      xe[e] = new Set();
    })(e);
  const r = Ke(e);
  Ke(e).has(t) || (Ve(e) || je.update((t) => ((t[e] = {}), t)), r.add(t));
}
var Qe = Object.getOwnPropertySymbols,
  qe = Object.prototype.hasOwnProperty,
  $e = Object.prototype.propertyIsEnumerable;
function et({ locale: e, id: t }) {}
const tt = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: {
    number: {
      scientific: { notation: "scientific" },
      engineering: { notation: "engineering" },
      compactLong: { notation: "compact", compactDisplay: "long" },
      compactShort: { notation: "compact", compactDisplay: "short" },
    },
    date: {
      short: { month: "numeric", day: "numeric", year: "2-digit" },
      medium: { month: "short", day: "numeric", year: "numeric" },
      long: { month: "long", day: "numeric", year: "numeric" },
      full: { weekday: "long", month: "long", day: "numeric", year: "numeric" },
    },
    time: {
      short: { hour: "numeric", minute: "numeric" },
      medium: { hour: "numeric", minute: "numeric", second: "numeric" },
      long: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      },
      full: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      },
    },
  },
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0,
};
function rt() {
  return tt;
}
function nt(e) {
  const t = e,
    { formats: r } = t,
    n = ((e, t) => {
      var r = {};
      for (var n in e) qe.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
      if (null != e && Qe)
        for (var n of Qe(e)) t.indexOf(n) < 0 && $e.call(e, n) && (r[n] = e[n]);
      return r;
    })(t, ["formats"]);
  let i = e.fallbackLocale;
  if (e.initialLocale)
    try {
      Ue.resolveLocale(e.initialLocale) && (i = e.initialLocale);
    } catch (o) {}
  return (
    n.warnOnMissingMessages &&
      (delete n.warnOnMissingMessages,
      null == n.handleMissingMessage && (n.handleMissingMessage = et)),
    Object.assign(tt, n, { initialLocale: i }),
    r &&
      ("number" in r && Object.assign(tt.formats.number, r.number),
      "date" in r && Object.assign(tt.formats.date, r.date),
      "time" in r && Object.assign(tt.formats.time, r.time)),
    gt.set(i)
  );
}
const it = t(!1);
var ot = Object.defineProperty,
  st = Object.defineProperties,
  at = Object.getOwnPropertyDescriptors,
  ht = Object.getOwnPropertySymbols,
  ut = Object.prototype.hasOwnProperty,
  lt = Object.prototype.propertyIsEnumerable,
  ct = (e, t, r) =>
    t in e
      ? ot(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
let ft;
const pt = t(null);
function mt(e) {
  return e
    .split("-")
    .map((e, t, r) => r.slice(0, t + 1).join("-"))
    .reverse();
}
function Et(e, t = rt().fallbackLocale) {
  const r = mt(e);
  return t ? [...new Set([...r, ...mt(t)])] : r;
}
function bt() {
  return null != ft ? ft : void 0;
}
pt.subscribe((e) => {
  (ft = null != e ? e : void 0),
    "undefined" != typeof window &&
      null != e &&
      document.documentElement.setAttribute("lang", e);
});
const gt =
  ((yt = ((e, t) => {
    for (var r in t || (t = {})) ut.call(t, r) && ct(e, r, t[r]);
    if (ht) for (var r of ht(t)) lt.call(t, r) && ct(e, r, t[r]);
    return e;
  })({}, pt)),
  st(
    yt,
    at({
      set: (e) => {
        if (
          e &&
          (function (e) {
            if (null == e) return;
            const t = Et(e);
            for (let r = 0; r < t.length; r++) {
              const e = t[r];
              if (Ve(e)) return e;
            }
          })(e) &&
          Ye(e)
        ) {
          const { loadingDelay: t } = rt();
          let r;
          return (
            "undefined" != typeof window && null != bt() && t
              ? (r = window.setTimeout(() => it.set(!0), t))
              : it.set(!0),
            ze(e)
              .then(() => {
                pt.set(e);
              })
              .finally(() => {
                clearTimeout(r), it.set(!1);
              })
          );
        }
        return pt.set(e);
      },
    })
  ));
var yt;
const dt = (e) => {
  const t = Object.create(null);
  return (r) => {
    const n = JSON.stringify(r);
    return n in t ? t[n] : (t[n] = e(r));
  };
};
var vt = Object.defineProperty,
  Ht = Object.getOwnPropertySymbols,
  Tt = Object.prototype.hasOwnProperty,
  Bt = Object.prototype.propertyIsEnumerable,
  _t = (e, t, r) =>
    t in e
      ? vt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  At = (e, t) => {
    for (var r in t || (t = {})) Tt.call(t, r) && _t(e, r, t[r]);
    if (Ht) for (var r of Ht(t)) Bt.call(t, r) && _t(e, r, t[r]);
    return e;
  },
  Pt = (e, t) => {
    var r = {};
    for (var n in e) Tt.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (null != e && Ht)
      for (var n of Ht(e)) t.indexOf(n) < 0 && Bt.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Lt = (e, t) => {
    const { formats: r } = rt();
    if (e in r && t in r[e]) return r[e][t];
    throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
  },
  St = dt((e) => {
    var t = e,
      { locale: r, format: n } = t,
      i = Pt(t, ["locale", "format"]);
    if (null == r)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return n && (i = Lt("number", n)), new Intl.NumberFormat(r, i);
  }),
  Ot = dt((e) => {
    var t = e,
      { locale: r, format: n } = t,
      i = Pt(t, ["locale", "format"]);
    if (null == r)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return (
      n
        ? (i = Lt("date", n))
        : 0 === Object.keys(i).length && (i = Lt("date", "short")),
      new Intl.DateTimeFormat(r, i)
    );
  }),
  Nt = dt((e) => {
    var t = e,
      { locale: r, format: n } = t,
      i = Pt(t, ["locale", "format"]);
    if (null == r)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return (
      n
        ? (i = Lt("time", n))
        : 0 === Object.keys(i).length && (i = Lt("time", "short")),
      new Intl.DateTimeFormat(r, i)
    );
  }),
  It = dt(
    (e, t = bt()) => new Ue(e, t, rt().formats, { ignoreTag: rt().ignoreTag })
  ),
  Mt = (e, t = {}) => {
    var r, n, i, o;
    let s = t;
    "object" == typeof e && ((s = e), (e = s.id));
    const { values: a, locale: h = bt(), default: u } = s;
    if (null == h)
      throw new Error(
        "[svelte-i18n] Cannot format a message without first setting the initial locale."
      );
    let l = Fe(e, h);
    if (l) {
      if ("string" != typeof l) return l;
    } else
      l =
        null !=
        (o =
          null !=
          (i =
            null == (n = (r = rt()).handleMissingMessage)
              ? void 0
              : n.call(r, { locale: h, id: e, defaultValue: u }))
            ? i
            : u)
          ? o
          : e;
    if (!a) return l;
    let c = l;
    try {
      c = It(l, h).format(a);
    } catch (f) {
      Error;
    }
    return c;
  },
  Ct = (e, t) =>
    ((e = {}) => {
      var t = e,
        { locale: r = bt() } = t,
        n = Pt(t, ["locale"]);
      return Nt(At({ locale: r }, n));
    })(t).format(e),
  Rt = (e, t) =>
    ((e = {}) => {
      var t = e,
        { locale: r = bt() } = t,
        n = Pt(t, ["locale"]);
      return Ot(At({ locale: r }, n));
    })(t).format(e),
  wt = (e, t) =>
    ((e = {}) => {
      var t = e,
        { locale: r = bt() } = t,
        n = Pt(t, ["locale"]);
      return St(At({ locale: r }, n));
    })(t).format(e),
  Ut = (e, t = bt()) => Fe(e, t),
  Gt = e([gt, je], () => Mt);
function Dt(e) {
  return ze(bt() || rt().initialLocale);
}
e([gt], () => Ct), e([gt], () => Rt), e([gt], () => wt), e([gt, je], () => Ut);
export { Gt as $, gt as a, nt as i, Je as r, Dt as w };
