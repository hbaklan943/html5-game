/**
 * Planck.js v1.0.0-alpha.4
 * @license The MIT license
 * @copyright Copyright (c) 2021 Erin Catto, Ali Shakiba
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).planck =
          {})
      );
})(this, function (t) {
  "use strict";
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var e =
    function (t, i) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        })(t, i);
    };
  function i(t, i) {
    if ("function" != typeof i && null !== i)
      throw new TypeError(
        "Class extends value " + String(i) + " is not a constructor or null"
      );
    function o() {
      this.constructor = t;
    }
    e(t, i),
      (t.prototype =
        null === i ? Object.create(i) : ((o.prototype = i.prototype), new o()));
  }
  var o = function () {
    return (o =
      Object.assign ||
      function (t) {
        for (var e, i = 1, o = arguments.length; i < o; i++)
          for (var s in (e = arguments[i]))
            Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
        return t;
      }).apply(this, arguments);
  };
  function s(t, e) {
    null == t && (t = {});
    var i = o({}, t);
    for (var s in e) e.hasOwnProperty(s) && void 0 === t[s] && (i[s] = e[s]);
    if ("function" == typeof Object.getOwnPropertySymbols)
      for (var n = Object.getOwnPropertySymbols(e), r = 0; r < n.length; r++) {
        var m = n[r];
        e.propertyIsEnumerable(m) && void 0 === t[m] && (i[m] = e[m]);
      }
    return i;
  }
  var n = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    },
    r = Object.create(Math);
  (r.EPSILON = 1e-9),
    (r.isFinite = function (t) {
      return "number" == typeof t && isFinite(t) && !isNaN(t);
    }),
    (r.assert = function (t) {}),
    (r.invSqrt = function (t) {
      return 1 / Math.sqrt(t);
    }),
    (r.nextPowerOfTwo = function (t) {
      return (
        (t |= t >> 1),
        (t |= t >> 2),
        (t |= t >> 4),
        (t |= t >> 8),
        (t |= t >> 16) + 1
      );
    }),
    (r.isPowerOfTwo = function (t) {
      return t > 0 && 0 == (t & (t - 1));
    }),
    (r.mod = function (t, e, i) {
      return (
        void 0 === e ? ((i = 1), (e = 0)) : void 0 === i && ((i = e), (e = 0)),
        i > e
          ? (t = (t - e) % (i - e)) + (t < 0 ? i : e)
          : (t = (t - i) % (e - i)) + (t <= 0 ? e : i)
      );
    }),
    (r.clamp = function (t, e, i) {
      return t < e ? e : t > i ? i : t;
    }),
    (r.random = function (t, e) {
      return (
        void 0 === t ? ((e = 1), (t = 0)) : void 0 === e && ((e = t), (t = 0)),
        t === e ? t : Math.random() * (e - t) + t
      );
    });
  var m,
    a,
    c,
    h = (function () {
      function t(e, i) {
        if (!(this instanceof t)) return new t(e, i);
        void 0 === e
          ? ((this.x = 0), (this.y = 0))
          : "object" == typeof e
          ? ((this.x = e.x), (this.y = e.y))
          : ((this.x = e), (this.y = i));
      }
      return (
        (t.prototype._serialize = function () {
          return { x: this.x, y: this.y };
        }),
        (t._deserialize = function (e) {
          var i = Object.create(t.prototype);
          return (i.x = e.x), (i.y = e.y), i;
        }),
        (t.zero = function () {
          var e = Object.create(t.prototype);
          return (e.x = 0), (e.y = 0), e;
        }),
        (t.neo = function (e, i) {
          var o = Object.create(t.prototype);
          return (o.x = e), (o.y = i), o;
        }),
        (t.clone = function (e) {
          return t.neo(e.x, e.y);
        }),
        (t.prototype.toString = function () {
          return JSON.stringify(this);
        }),
        (t.isValid = function (t) {
          return null != t && r.isFinite(t.x) && r.isFinite(t.y);
        }),
        (t.assert = function (t) {}),
        (t.prototype.clone = function () {
          return t.clone(this);
        }),
        (t.prototype.setZero = function () {
          return (this.x = 0), (this.y = 0), this;
        }),
        (t.prototype.set = function (t, e) {
          return (
            "object" == typeof t
              ? ((this.x = t.x), (this.y = t.y))
              : ((this.x = t), (this.y = e)),
            this
          );
        }),
        (t.prototype.setNum = function (t, e) {
          return (this.x = t), (this.y = e), this;
        }),
        (t.prototype.setVec2 = function (t) {
          return (this.x = t.x), (this.y = t.y), this;
        }),
        (t.prototype.wSet = function (t, e, i, o) {
          return void 0 !== i || void 0 !== o
            ? this.setCombine(t, e, i, o)
            : this.setMul(t, e);
        }),
        (t.prototype.setCombine = function (t, e, i, o) {
          var s = t * e.x + i * o.x,
            n = t * e.y + i * o.y;
          return (this.x = s), (this.y = n), this;
        }),
        (t.prototype.setMul = function (t, e) {
          var i = t * e.x,
            o = t * e.y;
          return (this.x = i), (this.y = o), this;
        }),
        (t.prototype.add = function (t) {
          return (this.x += t.x), (this.y += t.y), this;
        }),
        (t.prototype.wAdd = function (t, e, i, o) {
          return void 0 !== i || void 0 !== o
            ? this.addCombine(t, e, i, o)
            : this.addMul(t, e);
        }),
        (t.prototype.addCombine = function (t, e, i, o) {
          var s = t * e.x + i * o.x,
            n = t * e.y + i * o.y;
          return (this.x += s), (this.y += n), this;
        }),
        (t.prototype.addMul = function (t, e) {
          var i = t * e.x,
            o = t * e.y;
          return (this.x += i), (this.y += o), this;
        }),
        (t.prototype.wSub = function (t, e, i, o) {
          return void 0 !== i || void 0 !== o
            ? this.subCombine(t, e, i, o)
            : this.subMul(t, e);
        }),
        (t.prototype.subCombine = function (t, e, i, o) {
          var s = t * e.x + i * o.x,
            n = t * e.y + i * o.y;
          return (this.x -= s), (this.y -= n), this;
        }),
        (t.prototype.subMul = function (t, e) {
          var i = t * e.x,
            o = t * e.y;
          return (this.x -= i), (this.y -= o), this;
        }),
        (t.prototype.sub = function (t) {
          return (this.x -= t.x), (this.y -= t.y), this;
        }),
        (t.prototype.mul = function (t) {
          return (this.x *= t), (this.y *= t), this;
        }),
        (t.prototype.length = function () {
          return t.lengthOf(this);
        }),
        (t.prototype.lengthSquared = function () {
          return t.lengthSquared(this);
        }),
        (t.prototype.normalize = function () {
          var t = this.length();
          if (t < r.EPSILON) return 0;
          var e = 1 / t;
          return (this.x *= e), (this.y *= e), t;
        }),
        (t.lengthOf = function (t) {
          return r.sqrt(t.x * t.x + t.y * t.y);
        }),
        (t.lengthSquared = function (t) {
          return t.x * t.x + t.y * t.y;
        }),
        (t.distance = function (t, e) {
          var i = t.x - e.x,
            o = t.y - e.y;
          return r.sqrt(i * i + o * o);
        }),
        (t.distanceSquared = function (t, e) {
          var i = t.x - e.x,
            o = t.y - e.y;
          return i * i + o * o;
        }),
        (t.areEqual = function (t, e) {
          return (
            t === e ||
            ("object" == typeof e && null !== e && t.x === e.x && t.y === e.y)
          );
        }),
        (t.skew = function (e) {
          return t.neo(-e.y, e.x);
        }),
        (t.dot = function (t, e) {
          return t.x * e.x + t.y * e.y;
        }),
        (t.cross = function (e, i) {
          return "number" == typeof i
            ? t.neo(i * e.y, -i * e.x)
            : "number" == typeof e
            ? t.neo(-e * i.y, e * i.x)
            : e.x * i.y - e.y * i.x;
        }),
        (t.crossVec2Vec2 = function (t, e) {
          return t.x * e.y - t.y * e.x;
        }),
        (t.crossVec2Num = function (e, i) {
          return t.neo(i * e.y, -i * e.x);
        }),
        (t.crossNumVec2 = function (e, i) {
          return t.neo(-e * i.y, e * i.x);
        }),
        (t.addCross = function (e, i, o) {
          return "number" == typeof o
            ? t.neo(o * i.y + e.x, -o * i.x + e.y)
            : "number" == typeof i
            ? t.neo(-i * o.y + e.x, i * o.x + e.y)
            : void 0;
        }),
        (t.addCrossVec2Num = function (e, i, o) {
          return t.neo(o * i.y + e.x, -o * i.x + e.y);
        }),
        (t.addCrossNumVec2 = function (e, i, o) {
          return t.neo(-i * o.y + e.x, i * o.x + e.y);
        }),
        (t.add = function (e, i) {
          return t.neo(e.x + i.x, e.y + i.y);
        }),
        (t.wAdd = function (e, i, o, s) {
          return void 0 !== o || void 0 !== s
            ? t.combine(e, i, o, s)
            : t.mulNumVec2(e, i);
        }),
        (t.combine = function (e, i, o, s) {
          return t.zero().setCombine(e, i, o, s);
        }),
        (t.sub = function (e, i) {
          return t.neo(e.x - i.x, e.y - i.y);
        }),
        (t.mul = function (e, i) {
          return "object" == typeof e
            ? t.neo(e.x * i, e.y * i)
            : "object" == typeof i
            ? t.neo(e * i.x, e * i.y)
            : void 0;
        }),
        (t.mulVec2Num = function (e, i) {
          return t.neo(e.x * i, e.y * i);
        }),
        (t.mulNumVec2 = function (e, i) {
          return t.neo(e * i.x, e * i.y);
        }),
        (t.prototype.neg = function () {
          return (this.x = -this.x), (this.y = -this.y), this;
        }),
        (t.neg = function (e) {
          return t.neo(-e.x, -e.y);
        }),
        (t.abs = function (e) {
          return t.neo(r.abs(e.x), r.abs(e.y));
        }),
        (t.mid = function (e, i) {
          return t.neo(0.5 * (e.x + i.x), 0.5 * (e.y + i.y));
        }),
        (t.upper = function (e, i) {
          return t.neo(r.max(e.x, i.x), r.max(e.y, i.y));
        }),
        (t.lower = function (e, i) {
          return t.neo(r.min(e.x, i.x), r.min(e.y, i.y));
        }),
        (t.prototype.clamp = function (t) {
          var e = this.x * this.x + this.y * this.y;
          if (e > t * t) {
            var i = r.invSqrt(e);
            (this.x *= i * t), (this.y *= i * t);
          }
          return this;
        }),
        (t.clamp = function (e, i) {
          return (e = t.neo(e.x, e.y)).clamp(i), e;
        }),
        (t.scaleFn = function (e, i) {
          return function (o) {
            return t.neo(o.x * e, o.y * i);
          };
        }),
        (t.translateFn = function (e, i) {
          return function (o) {
            return t.neo(o.x + e, o.y + i);
          };
        }),
        t
      );
    })(),
    _ = (function () {
      function t(e, i) {
        if (!(this instanceof t)) return new t(e, i);
        (this.lowerBound = h.zero()),
          (this.upperBound = h.zero()),
          "object" == typeof e && this.lowerBound.setVec2(e),
          "object" == typeof i
            ? this.upperBound.setVec2(i)
            : "object" == typeof e && this.upperBound.setVec2(e);
      }
      return (
        (t.prototype.isValid = function () {
          return t.isValid(this);
        }),
        (t.isValid = function (t) {
          return (
            null != t &&
            h.isValid(t.lowerBound) &&
            h.isValid(t.upperBound) &&
            h.sub(t.upperBound, t.lowerBound).lengthSquared() >= 0
          );
        }),
        (t.assert = function (t) {}),
        (t.prototype.getCenter = function () {
          return h.neo(
            0.5 * (this.lowerBound.x + this.upperBound.x),
            0.5 * (this.lowerBound.y + this.upperBound.y)
          );
        }),
        (t.prototype.getExtents = function () {
          return h.neo(
            0.5 * (this.upperBound.x - this.lowerBound.x),
            0.5 * (this.upperBound.y - this.lowerBound.y)
          );
        }),
        (t.prototype.getPerimeter = function () {
          return (
            2 *
            (this.upperBound.x -
              this.lowerBound.x +
              this.upperBound.y -
              this.lowerBound.y)
          );
        }),
        (t.prototype.combine = function (t, e) {
          e = e || this;
          var i = t.lowerBound,
            o = t.upperBound,
            s = e.lowerBound,
            n = e.upperBound,
            m = r.min(i.x, s.x),
            a = r.min(i.y, s.y),
            c = r.max(n.x, o.x),
            h = r.max(n.y, o.y);
          this.lowerBound.setNum(m, a), this.upperBound.setNum(c, h);
        }),
        (t.prototype.combinePoints = function (t, e) {
          this.lowerBound.setNum(r.min(t.x, e.x), r.min(t.y, e.y)),
            this.upperBound.setNum(r.max(t.x, e.x), r.max(t.y, e.y));
        }),
        (t.prototype.set = function (t) {
          this.lowerBound.setNum(t.lowerBound.x, t.lowerBound.y),
            this.upperBound.setNum(t.upperBound.x, t.upperBound.y);
        }),
        (t.prototype.contains = function (t) {
          var e = !0;
          return (e =
            (e =
              (e =
                (e = e && this.lowerBound.x <= t.lowerBound.x) &&
                this.lowerBound.y <= t.lowerBound.y) &&
              t.upperBound.x <= this.upperBound.x) &&
            t.upperBound.y <= this.upperBound.y);
        }),
        (t.prototype.extend = function (e) {
          return t.extend(this, e), this;
        }),
        (t.extend = function (t, e) {
          (t.lowerBound.x -= e),
            (t.lowerBound.y -= e),
            (t.upperBound.x += e),
            (t.upperBound.y += e);
        }),
        (t.testOverlap = function (t, e) {
          var i = e.lowerBound.x - t.upperBound.x,
            o = t.lowerBound.x - e.upperBound.x,
            s = e.lowerBound.y - t.upperBound.y,
            n = t.lowerBound.y - e.upperBound.y;
          return !(i > 0 || s > 0 || o > 0 || n > 0);
        }),
        (t.areEqual = function (t, e) {
          return (
            h.areEqual(t.lowerBound, e.lowerBound) &&
            h.areEqual(t.upperBound, e.upperBound)
          );
        }),
        (t.diff = function (t, e) {
          var i = r.max(
              0,
              r.min(t.upperBound.x, e.upperBound.x) -
                r.max(e.lowerBound.x, t.lowerBound.x)
            ),
            o = r.max(
              0,
              r.min(t.upperBound.y, e.upperBound.y) -
                r.max(e.lowerBound.y, t.lowerBound.y)
            );
          return (
            (t.upperBound.x - t.lowerBound.x) *
              (t.upperBound.y - t.lowerBound.y) +
            (e.upperBound.x - e.lowerBound.x) *
              (e.upperBound.y - e.lowerBound.y) -
            i * o
          );
        }),
        (t.prototype.rayCast = function (t, e) {
          for (
            var i = -1 / 0,
              o = 1 / 0,
              s = e.p1,
              n = h.sub(e.p2, e.p1),
              m = h.abs(n),
              a = h.zero(),
              c = "x";
            null !== c;
            c = "x" === c ? "y" : null
          )
            if (m.x < r.EPSILON) {
              if (s[c] < this.lowerBound[c] || this.upperBound[c] < s[c])
                return !1;
            } else {
              var _ = 1 / n[c],
                l = (this.lowerBound[c] - s[c]) * _,
                u = (this.upperBound[c] - s[c]) * _,
                p = -1;
              if (l > u) {
                var y = l;
                (l = u), (u = y), (p = 1);
              }
              if (
                (l > i && (a.setZero(), (a[c] = p), (i = l)),
                i > (o = r.min(o, u)))
              )
                return !1;
            }
          return (
            !(i < 0 || e.maxFraction < i) &&
            ((t.fraction = i), (t.normal = a), !0)
          );
        }),
        (t.prototype.toString = function () {
          return JSON.stringify(this);
        }),
        t
      );
    })(),
    l = (function () {
      function t() {}
      return (
        Object.defineProperty(t, "linearSlopSquared", {
          get: function () {
            return t.linearSlop * t.linearSlop;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, "polygonRadius", {
          get: function () {
            return 2 * t.linearSlop;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, "maxTranslationSquared", {
          get: function () {
            return t.maxTranslation * t.maxTranslation;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, "maxRotationSquared", {
          get: function () {
            return t.maxRotation * t.maxRotation;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, "linearSleepToleranceSqr", {
          get: function () {
            return Math.pow(t.linearSleepTolerance, 2);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t, "angularSleepToleranceSqr", {
          get: function () {
            return Math.pow(t.angularSleepTolerance, 2);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.maxManifoldPoints = 2),
        (t.maxPolygonVertices = 12),
        (t.aabbExtension = 0.1),
        (t.aabbMultiplier = 2),
        (t.linearSlop = 0.005),
        (t.angularSlop = (2 / 180) * Math.PI),
        (t.maxSubSteps = 8),
        (t.maxTOIContacts = 32),
        (t.maxTOIIterations = 20),
        (t.maxDistnceIterations = 20),
        (t.velocityThreshold = 1),
        (t.maxLinearCorrection = 0.2),
        (t.maxAngularCorrection = (8 / 180) * Math.PI),
        (t.maxTranslation = 2),
        (t.maxRotation = 0.5 * Math.PI),
        (t.baumgarte = 0.2),
        (t.toiBaugarte = 0.75),
        (t.timeToSleep = 0.5),
        (t.linearSleepTolerance = 0.01),
        (t.angularSleepTolerance = (2 / 180) * Math.PI),
        t
      );
    })(),
    u = (function () {
      function t(t) {
        (this._list = []),
          (this._max = 1 / 0),
          (this._createCount = 0),
          (this._outCount = 0),
          (this._inCount = 0),
          (this._discardCount = 0),
          (this._list = []),
          (this._max = t.max || this._max),
          (this._createFn = t.create),
          (this._outFn = t.allocate),
          (this._inFn = t.release),
          (this._discardFn = t.discard);
      }
      return (
        (t.prototype.max = function (t) {
          return "number" == typeof t ? ((this._max = t), this) : this._max;
        }),
        (t.prototype.size = function () {
          return this._list.length;
        }),
        (t.prototype.allocate = function () {
          var t;
          return (
            this._list.length > 0
              ? (t = this._list.shift())
              : (this._createCount++,
                (t =
                  "function" == typeof this._createFn ? this._createFn() : {})),
            this._outCount++,
            "function" == typeof this._outFn && this._outFn(t),
            t
          );
        }),
        (t.prototype.release = function (t) {
          this._list.length < this._max
            ? (this._inCount++,
              "function" == typeof this._inFn && this._inFn(t),
              this._list.push(t))
            : (this._discardCount++,
              "function" == typeof this._discardFn && (t = this._discardFn(t)));
        }),
        (t.prototype.toString = function () {
          return (
            " +" +
            this._createCount +
            " >" +
            this._outCount +
            " <" +
            this._inCount +
            " -" +
            this._discardCount +
            " =" +
            this._list.length +
            "/" +
            this._max
          );
        }),
        t
      );
    })(),
    p = (function () {
      function t(t) {
        (this.aabb = new _()),
          (this.userData = null),
          (this.parent = null),
          (this.child1 = null),
          (this.child2 = null),
          (this.height = -1),
          (this.id = t);
      }
      return (
        (t.prototype.toString = function () {
          return this.id + ": " + this.userData;
        }),
        (t.prototype.isLeaf = function () {
          return null == this.child1;
        }),
        t
      );
    })(),
    y = (function () {
      function t() {
        (this.inputPool = new u({
          create: function () {
            return {};
          },
          release: function (t) {},
        })),
          (this.stackPool = new u({
            create: function () {
              return [];
            },
            release: function (t) {
              t.length = 0;
            },
          })),
          (this.iteratorPool = new u({
            create: function () {
              return new d();
            },
            release: function (t) {
              t.close();
            },
          })),
          (this.m_root = null),
          (this.m_nodes = {}),
          (this.m_lastProxyId = 0),
          (this.m_pool = new u({
            create: function () {
              return new p();
            },
          }));
      }
      return (
        (t.prototype.getUserData = function (t) {
          return this.m_nodes[t].userData;
        }),
        (t.prototype.getFatAABB = function (t) {
          return this.m_nodes[t].aabb;
        }),
        (t.prototype.allocateNode = function () {
          var t = this.m_pool.allocate();
          return (
            (t.id = ++this.m_lastProxyId),
            (t.userData = null),
            (t.parent = null),
            (t.child1 = null),
            (t.child2 = null),
            (t.height = -1),
            (this.m_nodes[t.id] = t),
            t
          );
        }),
        (t.prototype.freeNode = function (t) {
          this.m_pool.release(t), (t.height = -1), delete this.m_nodes[t.id];
        }),
        (t.prototype.createProxy = function (t, e) {
          var i = this.allocateNode();
          return (
            i.aabb.set(t),
            _.extend(i.aabb, l.aabbExtension),
            (i.userData = e),
            (i.height = 0),
            this.insertLeaf(i),
            i.id
          );
        }),
        (t.prototype.destroyProxy = function (t) {
          var e = this.m_nodes[t];
          this.removeLeaf(e), this.freeNode(e);
        }),
        (t.prototype.moveProxy = function (t, e, i) {
          var o = this.m_nodes[t];
          return (
            !o.aabb.contains(e) &&
            (this.removeLeaf(o),
            o.aabb.set(e),
            (e = o.aabb),
            _.extend(e, l.aabbExtension),
            i.x < 0
              ? (e.lowerBound.x += i.x * l.aabbMultiplier)
              : (e.upperBound.x += i.x * l.aabbMultiplier),
            i.y < 0
              ? (e.lowerBound.y += i.y * l.aabbMultiplier)
              : (e.upperBound.y += i.y * l.aabbMultiplier),
            this.insertLeaf(o),
            !0)
          );
        }),
        (t.prototype.insertLeaf = function (t) {
          if (null == this.m_root)
            return (this.m_root = t), void (this.m_root.parent = null);
          for (var e = t.aabb, i = this.m_root; !i.isLeaf(); ) {
            var o = i.child1,
              s = i.child2,
              n = i.aabb.getPerimeter(),
              m = new _();
            m.combine(i.aabb, e);
            var a = m.getPerimeter(),
              c = 2 * a,
              h = 2 * (a - n),
              l = void 0;
            if (o.isLeaf()) {
              (y = new _()).combine(e, o.aabb), (l = y.getPerimeter() + h);
            } else {
              (y = new _()).combine(e, o.aabb);
              var u = o.aabb.getPerimeter();
              l = y.getPerimeter() - u + h;
            }
            var p = void 0;
            if (s.isLeaf()) {
              (y = new _()).combine(e, s.aabb), (p = y.getPerimeter() + h);
            } else {
              var y;
              (y = new _()).combine(e, s.aabb);
              u = s.aabb.getPerimeter();
              p = y.getPerimeter() - u + h;
            }
            if (c < l && c < p) break;
            i = l < p ? o : s;
          }
          var d = i,
            f = d.parent,
            v = this.allocateNode();
          for (
            v.parent = f,
              v.userData = null,
              v.aabb.combine(e, d.aabb),
              v.height = d.height + 1,
              null != f
                ? (f.child1 === d ? (f.child1 = v) : (f.child2 = v),
                  (v.child1 = d),
                  (v.child2 = t),
                  (d.parent = v),
                  (t.parent = v))
                : ((v.child1 = d),
                  (v.child2 = t),
                  (d.parent = v),
                  (t.parent = v),
                  (this.m_root = v)),
              i = t.parent;
            null != i;

          ) {
            (o = (i = this.balance(i)).child1), (s = i.child2);
            (i.height = 1 + r.max(o.height, s.height)),
              i.aabb.combine(o.aabb, s.aabb),
              (i = i.parent);
          }
        }),
        (t.prototype.removeLeaf = function (t) {
          if (t !== this.m_root) {
            var e,
              i = t.parent,
              o = i.parent;
            if (((e = i.child1 === t ? i.child2 : i.child1), null != o)) {
              o.child1 === i ? (o.child1 = e) : (o.child2 = e),
                (e.parent = o),
                this.freeNode(i);
              for (var s = o; null != s; ) {
                var n = (s = this.balance(s)).child1,
                  m = s.child2;
                s.aabb.combine(n.aabb, m.aabb),
                  (s.height = 1 + r.max(n.height, m.height)),
                  (s = s.parent);
              }
            } else (this.m_root = e), (e.parent = null), this.freeNode(i);
          } else this.m_root = null;
        }),
        (t.prototype.balance = function (t) {
          var e = t;
          if (e.isLeaf() || e.height < 2) return t;
          var i = e.child1,
            o = e.child2,
            s = o.height - i.height;
          if (s > 1) {
            var n = o.child1,
              m = o.child2;
            return (
              (o.child1 = e),
              (o.parent = e.parent),
              (e.parent = o),
              null != o.parent
                ? o.parent.child1 === t
                  ? (o.parent.child1 = o)
                  : (o.parent.child2 = o)
                : (this.m_root = o),
              n.height > m.height
                ? ((o.child2 = n),
                  (e.child2 = m),
                  (m.parent = e),
                  e.aabb.combine(i.aabb, m.aabb),
                  o.aabb.combine(e.aabb, n.aabb),
                  (e.height = 1 + r.max(i.height, m.height)),
                  (o.height = 1 + r.max(e.height, n.height)))
                : ((o.child2 = m),
                  (e.child2 = n),
                  (n.parent = e),
                  e.aabb.combine(i.aabb, n.aabb),
                  o.aabb.combine(e.aabb, m.aabb),
                  (e.height = 1 + r.max(i.height, n.height)),
                  (o.height = 1 + r.max(e.height, m.height))),
              o
            );
          }
          if (s < -1) {
            var a = i.child1,
              c = i.child2;
            return (
              (i.child1 = e),
              (i.parent = e.parent),
              (e.parent = i),
              null != i.parent
                ? i.parent.child1 === e
                  ? (i.parent.child1 = i)
                  : (i.parent.child2 = i)
                : (this.m_root = i),
              a.height > c.height
                ? ((i.child2 = a),
                  (e.child1 = c),
                  (c.parent = e),
                  e.aabb.combine(o.aabb, c.aabb),
                  i.aabb.combine(e.aabb, a.aabb),
                  (e.height = 1 + r.max(o.height, c.height)),
                  (i.height = 1 + r.max(e.height, a.height)))
                : ((i.child2 = c),
                  (e.child1 = a),
                  (a.parent = e),
                  e.aabb.combine(o.aabb, a.aabb),
                  i.aabb.combine(e.aabb, c.aabb),
                  (e.height = 1 + r.max(o.height, a.height)),
                  (i.height = 1 + r.max(e.height, c.height))),
              i
            );
          }
          return e;
        }),
        (t.prototype.getHeight = function () {
          return null == this.m_root ? 0 : this.m_root.height;
        }),
        (t.prototype.getAreaRatio = function () {
          if (null == this.m_root) return 0;
          for (
            var t,
              e = this.m_root.aabb.getPerimeter(),
              i = 0,
              o = this.iteratorPool.allocate().preorder(this.m_root);
            (t = o.next());

          )
            t.height < 0 || (i += t.aabb.getPerimeter());
          return this.iteratorPool.release(o), i / e;
        }),
        (t.prototype.computeHeight = function (t) {
          var e;
          if ((e = void 0 !== t ? this.m_nodes[t] : this.m_root).isLeaf())
            return 0;
          var i = this.computeHeight(e.child1.id),
            o = this.computeHeight(e.child2.id);
          return 1 + r.max(i, o);
        }),
        (t.prototype.validateStructure = function (t) {
          if (null != t) {
            this.m_root;
            var e = t.child1,
              i = t.child2;
            t.isLeaf() ||
              (this.validateStructure(e), this.validateStructure(i));
          }
        }),
        (t.prototype.validateMetrics = function (t) {
          if (null != t) {
            var e = t.child1,
              i = t.child2;
            if (!t.isLeaf()) {
              var o = e.height,
                s = i.height;
              r.max(o, s),
                new _().combine(e.aabb, i.aabb),
                this.validateMetrics(e),
                this.validateMetrics(i);
            }
          }
        }),
        (t.prototype.validate = function () {
          this.validateStructure(this.m_root),
            this.validateMetrics(this.m_root);
        }),
        (t.prototype.getMaxBalance = function () {
          for (
            var t,
              e = 0,
              i = this.iteratorPool.allocate().preorder(this.m_root);
            (t = i.next());

          )
            if (!(t.height <= 1)) {
              var o = r.abs(t.child2.height - t.child1.height);
              e = r.max(e, o);
            }
          return this.iteratorPool.release(i), e;
        }),
        (t.prototype.rebuildBottomUp = function () {
          for (
            var t,
              e = [],
              i = 0,
              o = this.iteratorPool.allocate().preorder(this.m_root);
            (t = o.next());

          )
            t.height < 0 ||
              (t.isLeaf()
                ? ((t.parent = null), (e[i] = t), ++i)
                : this.freeNode(t));
          for (this.iteratorPool.release(o); i > 1; ) {
            for (var s = 1 / 0, n = -1, m = -1, a = 0; a < i; ++a)
              for (var c = e[a].aabb, h = a + 1; h < i; ++h) {
                var l = e[h].aabb,
                  u = new _();
                u.combine(c, l);
                var p = u.getPerimeter();
                p < s && ((n = a), (m = h), (s = p));
              }
            var y = e[n],
              d = e[m],
              f = this.allocateNode();
            (f.child1 = y),
              (f.child2 = d),
              (f.height = 1 + r.max(y.height, d.height)),
              f.aabb.combine(y.aabb, d.aabb),
              (f.parent = null),
              (y.parent = f),
              (d.parent = f),
              (e[m] = e[i - 1]),
              (e[n] = f),
              --i;
          }
          (this.m_root = e[0]), this.validate();
        }),
        (t.prototype.shiftOrigin = function (t) {
          for (
            var e, i = this.iteratorPool.allocate().preorder(this.m_root);
            (e = i.next());

          ) {
            var o = e.aabb;
            (o.lowerBound.x -= t.x),
              (o.lowerBound.y -= t.y),
              (o.upperBound.x -= t.x),
              (o.upperBound.y -= t.y);
          }
          this.iteratorPool.release(i);
        }),
        (t.prototype.query = function (t, e) {
          var i = this.stackPool.allocate();
          for (i.push(this.m_root); i.length > 0; ) {
            var o = i.pop();
            if (null != o)
              if (_.testOverlap(o.aabb, t))
                if (o.isLeaf()) {
                  if (!1 === e(o.id)) return;
                } else i.push(o.child1), i.push(o.child2);
          }
          this.stackPool.release(i);
        }),
        (t.prototype.rayCast = function (t, e) {
          var i = t.p1,
            o = t.p2,
            s = h.sub(o, i);
          s.normalize();
          var n = h.crossNumVec2(1, s),
            m = h.abs(n),
            a = t.maxFraction,
            c = new _(),
            l = h.combine(1 - a, i, a, o);
          c.combinePoints(i, l);
          var u = this.stackPool.allocate(),
            p = this.inputPool.allocate();
          for (u.push(this.m_root); u.length > 0; ) {
            var y = u.pop();
            if (null != y && !1 !== _.testOverlap(y.aabb, c)) {
              var d = y.aabb.getCenter(),
                f = y.aabb.getExtents();
              if (!(r.abs(h.dot(n, h.sub(i, d))) - h.dot(m, f) > 0))
                if (y.isLeaf()) {
                  (p.p1 = h.clone(t.p1)),
                    (p.p2 = h.clone(t.p2)),
                    (p.maxFraction = a);
                  var v = e(p, y.id);
                  if (0 === v) return;
                  v > 0 &&
                    ((a = v),
                    (l = h.combine(1 - a, i, a, o)),
                    c.combinePoints(i, l));
                } else u.push(y.child1), u.push(y.child2);
            }
          }
          this.stackPool.release(u), this.inputPool.release(p);
        }),
        t
      );
    })(),
    d = (function () {
      function t() {
        (this.parents = []), (this.states = []);
      }
      return (
        (t.prototype.preorder = function (t) {
          return (
            (this.parents.length = 0),
            this.parents.push(t),
            (this.states.length = 0),
            this.states.push(0),
            this
          );
        }),
        (t.prototype.next = function () {
          for (; this.parents.length > 0; ) {
            var t = this.parents.length - 1,
              e = this.parents[t];
            if (0 === this.states[t]) return (this.states[t] = 1), e;
            if (1 === this.states[t] && ((this.states[t] = 2), e.child1))
              return this.parents.push(e.child1), this.states.push(1), e.child1;
            if (2 === this.states[t] && ((this.states[t] = 3), e.child2))
              return this.parents.push(e.child2), this.states.push(1), e.child2;
            this.parents.pop(), this.states.pop();
          }
        }),
        (t.prototype.close = function () {
          this.parents.length = 0;
        }),
        t
      );
    })(),
    f = (function () {
      function t() {
        var t = this;
        (this.m_tree = new y()),
          (this.m_proxyCount = 0),
          (this.m_moveBuffer = []),
          (this.query = function (e, i) {
            t.m_tree.query(e, i);
          }),
          (this.queryCallback = function (e) {
            if (e === t.m_queryProxyId) return !0;
            var i = r.min(e, t.m_queryProxyId),
              o = r.max(e, t.m_queryProxyId),
              s = t.m_tree.getUserData(i),
              n = t.m_tree.getUserData(o);
            return t.m_callback(s, n), !0;
          });
      }
      return (
        (t.prototype.getUserData = function (t) {
          return this.m_tree.getUserData(t);
        }),
        (t.prototype.testOverlap = function (t, e) {
          var i = this.m_tree.getFatAABB(t),
            o = this.m_tree.getFatAABB(e);
          return _.testOverlap(i, o);
        }),
        (t.prototype.getFatAABB = function (t) {
          return this.m_tree.getFatAABB(t);
        }),
        (t.prototype.getProxyCount = function () {
          return this.m_proxyCount;
        }),
        (t.prototype.getTreeHeight = function () {
          return this.m_tree.getHeight();
        }),
        (t.prototype.getTreeBalance = function () {
          return this.m_tree.getMaxBalance();
        }),
        (t.prototype.getTreeQuality = function () {
          return this.m_tree.getAreaRatio();
        }),
        (t.prototype.rayCast = function (t, e) {
          this.m_tree.rayCast(t, e);
        }),
        (t.prototype.shiftOrigin = function (t) {
          this.m_tree.shiftOrigin(t);
        }),
        (t.prototype.createProxy = function (t, e) {
          var i = this.m_tree.createProxy(t, e);
          return this.m_proxyCount++, this.bufferMove(i), i;
        }),
        (t.prototype.destroyProxy = function (t) {
          this.unbufferMove(t),
            this.m_proxyCount--,
            this.m_tree.destroyProxy(t);
        }),
        (t.prototype.moveProxy = function (t, e, i) {
          this.m_tree.moveProxy(t, e, i) && this.bufferMove(t);
        }),
        (t.prototype.touchProxy = function (t) {
          this.bufferMove(t);
        }),
        (t.prototype.bufferMove = function (t) {
          this.m_moveBuffer.push(t);
        }),
        (t.prototype.unbufferMove = function (t) {
          for (var e = 0; e < this.m_moveBuffer.length; ++e)
            this.m_moveBuffer[e] === t && (this.m_moveBuffer[e] = null);
        }),
        (t.prototype.updatePairs = function (t) {
          for (this.m_callback = t; this.m_moveBuffer.length > 0; )
            if (
              ((this.m_queryProxyId = this.m_moveBuffer.pop()),
              null !== this.m_queryProxyId)
            ) {
              var e = this.m_tree.getFatAABB(this.m_queryProxyId);
              this.m_tree.query(e, this.queryCallback);
            }
        }),
        t
      );
    })(),
    v = (function () {
      function t(e) {
        if (!(this instanceof t)) return new t(e);
        "number" == typeof e
          ? this.setAngle(e)
          : "object" == typeof e
          ? this.setRot(e)
          : this.setIdentity();
      }
      return (
        (t.neo = function (e) {
          var i = Object.create(t.prototype);
          return i.setAngle(e), i;
        }),
        (t.clone = function (e) {
          var i = Object.create(t.prototype);
          return (i.s = e.s), (i.c = e.c), i;
        }),
        (t.identity = function () {
          var e = Object.create(t.prototype);
          return (e.s = 0), (e.c = 1), e;
        }),
        (t.isValid = function (t) {
          return null != t && r.isFinite(t.s) && r.isFinite(t.c);
        }),
        (t.assert = function (t) {}),
        (t.prototype.setIdentity = function () {
          (this.s = 0), (this.c = 1);
        }),
        (t.prototype.set = function (t) {
          "object" == typeof t
            ? ((this.s = t.s), (this.c = t.c))
            : ((this.s = r.sin(t)), (this.c = r.cos(t)));
        }),
        (t.prototype.setRot = function (t) {
          (this.s = t.s), (this.c = t.c);
        }),
        (t.prototype.setAngle = function (t) {
          (this.s = r.sin(t)), (this.c = r.cos(t));
        }),
        (t.prototype.getAngle = function () {
          return r.atan2(this.s, this.c);
        }),
        (t.prototype.getXAxis = function () {
          return h.neo(this.c, this.s);
        }),
        (t.prototype.getYAxis = function () {
          return h.neo(-this.s, this.c);
        }),
        (t.mul = function (e, i) {
          if ("c" in i && "s" in i) {
            var o = t.identity();
            return (
              (o.s = e.s * i.c + e.c * i.s), (o.c = e.c * i.c - e.s * i.s), o
            );
          }
          if ("x" in i && "y" in i)
            return h.neo(e.c * i.x - e.s * i.y, e.s * i.x + e.c * i.y);
        }),
        (t.mulRot = function (e, i) {
          var o = t.identity();
          return (
            (o.s = e.s * i.c + e.c * i.s), (o.c = e.c * i.c - e.s * i.s), o
          );
        }),
        (t.mulVec2 = function (t, e) {
          return h.neo(t.c * e.x - t.s * e.y, t.s * e.x + t.c * e.y);
        }),
        (t.mulSub = function (t, e, i) {
          var o = t.c * (e.x - i.x) - t.s * (e.y - i.y),
            s = t.s * (e.x - i.x) + t.c * (e.y - i.y);
          return h.neo(o, s);
        }),
        (t.mulT = function (e, i) {
          if ("c" in i && "s" in i) {
            var o = t.identity();
            return (
              (o.s = e.c * i.s - e.s * i.c), (o.c = e.c * i.c + e.s * i.s), o
            );
          }
          if ("x" in i && "y" in i)
            return h.neo(e.c * i.x + e.s * i.y, -e.s * i.x + e.c * i.y);
        }),
        (t.mulTRot = function (e, i) {
          var o = t.identity();
          return (
            (o.s = e.c * i.s - e.s * i.c), (o.c = e.c * i.c + e.s * i.s), o
          );
        }),
        (t.mulTVec2 = function (t, e) {
          return h.neo(t.c * e.x + t.s * e.y, -t.s * e.x + t.c * e.y);
        }),
        t
      );
    })(),
    x = (function () {
      function t(e, i) {
        if (!(this instanceof t)) return new t(e, i);
        (this.p = h.zero()),
          (this.q = v.identity()),
          void 0 !== e && this.p.setVec2(e),
          void 0 !== i && this.q.setAngle(i);
      }
      return (
        (t.clone = function (e) {
          var i = Object.create(t.prototype);
          return (i.p = h.clone(e.p)), (i.q = v.clone(e.q)), i;
        }),
        (t.neo = function (e, i) {
          var o = Object.create(t.prototype);
          return (o.p = h.clone(e)), (o.q = v.clone(i)), o;
        }),
        (t.identity = function () {
          var e = Object.create(t.prototype);
          return (e.p = h.zero()), (e.q = v.identity()), e;
        }),
        (t.prototype.setIdentity = function () {
          this.p.setZero(), this.q.setIdentity();
        }),
        (t.prototype.set = function (t, e) {
          void 0 === e
            ? (this.p.set(t.p), this.q.set(t.q))
            : (this.p.set(t), this.q.set(e));
        }),
        (t.prototype.setNum = function (t, e) {
          this.p.setVec2(t), this.q.setAngle(e);
        }),
        (t.prototype.setTransform = function (t) {
          this.p.setVec2(t.p), this.q.setRot(t.q);
        }),
        (t.isValid = function (t) {
          return null != t && h.isValid(t.p) && v.isValid(t.q);
        }),
        (t.assert = function (t) {}),
        (t.mul = function (e, i) {
          if (Array.isArray(i)) {
            for (var o = [], s = 0; s < i.length; s++) o[s] = t.mul(e, i[s]);
            return o;
          }
          return "x" in i && "y" in i
            ? t.mulVec2(e, i)
            : "p" in i && "q" in i
            ? t.mulXf(e, i)
            : void 0;
        }),
        (t.mulAll = function (e, i) {
          for (var o = [], s = 0; s < i.length; s++) o[s] = t.mul(e, i[s]);
          return o;
        }),
        (t.mulFn = function (e) {
          return function (i) {
            return t.mul(e, i);
          };
        }),
        (t.mulVec2 = function (t, e) {
          var i = t.q.c * e.x - t.q.s * e.y + t.p.x,
            o = t.q.s * e.x + t.q.c * e.y + t.p.y;
          return h.neo(i, o);
        }),
        (t.mulXf = function (e, i) {
          var o = t.identity();
          return (
            (o.q = v.mulRot(e.q, i.q)),
            (o.p = h.add(v.mulVec2(e.q, i.p), e.p)),
            o
          );
        }),
        (t.mulT = function (e, i) {
          return "x" in i && "y" in i
            ? t.mulTVec2(e, i)
            : "p" in i && "q" in i
            ? t.mulTXf(e, i)
            : void 0;
        }),
        (t.mulTVec2 = function (t, e) {
          var i = e.x - t.p.x,
            o = e.y - t.p.y,
            s = t.q.c * i + t.q.s * o,
            n = -t.q.s * i + t.q.c * o;
          return h.neo(s, n);
        }),
        (t.mulTXf = function (e, i) {
          var o = t.identity();
          return (
            o.q.setRot(v.mulTRot(e.q, i.q)),
            o.p.setVec2(v.mulTVec2(e.q, h.sub(i.p, e.p))),
            o
          );
        }),
        t
      );
    })(),
    A = (function () {
      function t(t, e) {
        (this.localCenter = h.zero()),
          (this.c = h.zero()),
          (this.a = 0),
          (this.alpha0 = 0),
          (this.c0 = h.zero()),
          (this.a0 = 0);
      }
      return (
        (t.prototype.setTransform = function (t) {
          var e = x.mulVec2(t, this.localCenter);
          this.c.setVec2(e),
            this.c0.setVec2(e),
            (this.a = t.q.getAngle()),
            (this.a0 = t.q.getAngle());
        }),
        (t.prototype.setLocalCenter = function (t, e) {
          this.localCenter.setVec2(t);
          var i = x.mulVec2(e, this.localCenter);
          this.c.setVec2(i), this.c0.setVec2(i);
        }),
        (t.prototype.getTransform = function (t, e) {
          void 0 === e && (e = 0),
            t.q.setAngle((1 - e) * this.a0 + e * this.a),
            t.p.setCombine(1 - e, this.c0, e, this.c),
            t.p.sub(v.mulVec2(t.q, this.localCenter));
        }),
        (t.prototype.advance = function (t) {
          var e = (t - this.alpha0) / (1 - this.alpha0);
          this.c0.setCombine(e, this.c, 1 - e, this.c0),
            (this.a0 = e * this.a + (1 - e) * this.a0),
            (this.alpha0 = t);
        }),
        (t.prototype.forward = function () {
          (this.a0 = this.a), this.c0.setVec2(this.c);
        }),
        (t.prototype.normalize = function () {
          var t = r.mod(this.a0, -r.PI, +r.PI);
          (this.a -= this.a0 - t), (this.a0 = t);
        }),
        (t.prototype.clone = function () {
          var e = new t();
          return (
            e.localCenter.setVec2(this.localCenter),
            (e.alpha0 = this.alpha0),
            (e.a0 = this.a0),
            (e.a = this.a),
            e.c0.setVec2(this.c0),
            e.c.setVec2(this.c),
            e
          );
        }),
        (t.prototype.set = function (t) {
          this.localCenter.setVec2(t.localCenter),
            (this.alpha0 = t.alpha0),
            (this.a0 = t.a0),
            (this.a = t.a),
            this.c0.setVec2(t.c0),
            this.c.setVec2(t.c);
        }),
        t
      );
    })(),
    b = function () {
      (this.v = h.zero()), (this.w = 0);
    },
    g = (function () {
      function t() {
        (this.c = h.zero()), (this.a = 0);
      }
      return (
        (t.prototype.getTransform = function (t, e) {
          return (
            t.q.setAngle(this.a),
            t.p.setVec2(h.sub(this.c, v.mulVec2(t.q, e))),
            t
          );
        }),
        t
      );
    })(),
    B = (function () {
      function t() {}
      return (
        (t.prototype._reset = function () {}),
        (t.isValid = function (t) {
          return (
            null != t &&
            "string" == typeof t.m_type &&
            "number" == typeof t.m_radius
          );
        }),
        (t.prototype.getRadius = function () {
          return this.m_radius;
        }),
        (t.prototype.getType = function () {
          return this.m_type;
        }),
        t
      );
    })(),
    V = {
      userData: null,
      friction: 0.2,
      restitution: 0,
      density: 0,
      isSensor: !1,
      filterGroupIndex: 0,
      filterCategoryBits: 1,
      filterMaskBits: 65535,
    },
    w = function (t, e) {
      (this.aabb = new _()),
        (this.fixture = t),
        (this.childIndex = e),
        this.proxyId;
    },
    C = (function () {
      function t(t, e, i) {
        e.shape
          ? ((i = e), (e = e.shape))
          : "number" == typeof i && (i = { density: i }),
          (i = s(i, V)),
          (this.m_body = t),
          (this.m_friction = i.friction),
          (this.m_restitution = i.restitution),
          (this.m_density = i.density),
          (this.m_isSensor = i.isSensor),
          (this.m_filterGroupIndex = i.filterGroupIndex),
          (this.m_filterCategoryBits = i.filterCategoryBits),
          (this.m_filterMaskBits = i.filterMaskBits),
          (this.m_shape = e),
          (this.m_next = null),
          (this.m_proxies = []),
          (this.m_proxyCount = 0);
        for (var o = this.m_shape.getChildCount(), n = 0; n < o; ++n)
          this.m_proxies[n] = new w(this, n);
        this.m_userData = i.userData;
      }
      return (
        (t.prototype._reset = function () {
          var t = this.getBody(),
            e = t.m_world.m_broadPhase;
          this.destroyProxies(e), this.m_shape._reset && this.m_shape._reset();
          for (var i = this.m_shape.getChildCount(), o = 0; o < i; ++o)
            this.m_proxies[o] = new w(this, o);
          this.createProxies(e, t.m_xf), t.resetMassData();
        }),
        (t.prototype._serialize = function () {
          return {
            friction: this.m_friction,
            restitution: this.m_restitution,
            density: this.m_density,
            isSensor: this.m_isSensor,
            filterGroupIndex: this.m_filterGroupIndex,
            filterCategoryBits: this.m_filterCategoryBits,
            filterMaskBits: this.m_filterMaskBits,
            shape: this.m_shape,
          };
        }),
        (t._deserialize = function (e, i, o) {
          var s = o(B, e.shape);
          return s && new t(i, s, e);
        }),
        (t.prototype.getType = function () {
          return this.m_shape.getType();
        }),
        (t.prototype.getShape = function () {
          return this.m_shape;
        }),
        (t.prototype.isSensor = function () {
          return this.m_isSensor;
        }),
        (t.prototype.setSensor = function (t) {
          t != this.m_isSensor &&
            (this.m_body.setAwake(!0), (this.m_isSensor = t));
        }),
        (t.prototype.getUserData = function () {
          return this.m_userData;
        }),
        (t.prototype.setUserData = function (t) {
          this.m_userData = t;
        }),
        (t.prototype.getBody = function () {
          return this.m_body;
        }),
        (t.prototype.getNext = function () {
          return this.m_next;
        }),
        (t.prototype.getDensity = function () {
          return this.m_density;
        }),
        (t.prototype.setDensity = function (t) {
          this.m_density = t;
        }),
        (t.prototype.getFriction = function () {
          return this.m_friction;
        }),
        (t.prototype.setFriction = function (t) {
          this.m_friction = t;
        }),
        (t.prototype.getRestitution = function () {
          return this.m_restitution;
        }),
        (t.prototype.setRestitution = function (t) {
          this.m_restitution = t;
        }),
        (t.prototype.testPoint = function (t) {
          return this.m_shape.testPoint(this.m_body.getTransform(), t);
        }),
        (t.prototype.rayCast = function (t, e, i) {
          return this.m_shape.rayCast(t, e, this.m_body.getTransform(), i);
        }),
        (t.prototype.getMassData = function (t) {
          this.m_shape.computeMass(t, this.m_density);
        }),
        (t.prototype.getAABB = function (t) {
          return this.m_proxies[t].aabb;
        }),
        (t.prototype.createProxies = function (t, e) {
          this.m_proxyCount = this.m_shape.getChildCount();
          for (var i = 0; i < this.m_proxyCount; ++i) {
            var o = this.m_proxies[i];
            this.m_shape.computeAABB(o.aabb, e, i),
              (o.proxyId = t.createProxy(o.aabb, o));
          }
        }),
        (t.prototype.destroyProxies = function (t) {
          for (var e = 0; e < this.m_proxyCount; ++e) {
            var i = this.m_proxies[e];
            t.destroyProxy(i.proxyId), (i.proxyId = null);
          }
          this.m_proxyCount = 0;
        }),
        (t.prototype.synchronize = function (t, e, i) {
          for (var o = 0; o < this.m_proxyCount; ++o) {
            var s = this.m_proxies[o],
              n = new _(),
              r = new _();
            this.m_shape.computeAABB(n, e, s.childIndex),
              this.m_shape.computeAABB(r, i, s.childIndex),
              s.aabb.combine(n, r);
            var m = h.sub(i.p, e.p);
            t.moveProxy(s.proxyId, s.aabb, m);
          }
        }),
        (t.prototype.setFilterData = function (t) {
          (this.m_filterGroupIndex = t.groupIndex),
            (this.m_filterCategoryBits = t.categoryBits),
            (this.m_filterMaskBits = t.maskBits),
            this.refilter();
        }),
        (t.prototype.getFilterGroupIndex = function () {
          return this.m_filterGroupIndex;
        }),
        (t.prototype.setFilterGroupIndex = function (t) {
          this.m_filterGroupIndex = t;
        }),
        (t.prototype.getFilterCategoryBits = function () {
          return this.m_filterCategoryBits;
        }),
        (t.prototype.setFilterCategoryBits = function (t) {
          this.m_filterCategoryBits = t;
        }),
        (t.prototype.getFilterMaskBits = function () {
          return this.m_filterMaskBits;
        }),
        (t.prototype.setFilterMaskBits = function (t) {
          this.m_filterMaskBits = t;
        }),
        (t.prototype.refilter = function () {
          if (null != this.m_body) {
            for (var t = this.m_body.getContactList(); t; ) {
              var e = t.contact,
                i = e.getFixtureA(),
                o = e.getFixtureB();
              (i != this && o != this) || e.flagForFiltering(), (t = t.next);
            }
            var s = this.m_body.getWorld();
            if (null != s)
              for (var n = s.m_broadPhase, r = 0; r < this.m_proxyCount; ++r)
                n.touchProxy(this.m_proxies[r].proxyId);
          }
        }),
        (t.prototype.shouldCollide = function (t) {
          if (
            t.m_filterGroupIndex === this.m_filterGroupIndex &&
            0 !== t.m_filterGroupIndex
          )
            return t.m_filterGroupIndex > 0;
          var e = 0 != (t.m_filterMaskBits & this.m_filterCategoryBits),
            i = 0 != (t.m_filterCategoryBits & this.m_filterMaskBits);
          return e && i;
        }),
        t
      );
    })(),
    M = "static",
    I = "kinematic",
    z = "dynamic",
    P = {
      type: M,
      position: h.zero(),
      angle: 0,
      linearVelocity: h.zero(),
      angularVelocity: 0,
      linearDamping: 0,
      angularDamping: 0,
      fixedRotation: !1,
      bullet: !1,
      gravityScale: 1,
      allowSleep: !0,
      awake: !0,
      active: !0,
      userData: null,
    },
    S = function () {
      (this.mass = 0), (this.center = h.zero()), (this.I = 0);
    },
    T = (function () {
      function t(t, e) {
        (e = s(e, P)),
          (this.m_world = t),
          (this.m_awakeFlag = e.awake),
          (this.m_autoSleepFlag = e.allowSleep),
          (this.m_bulletFlag = e.bullet),
          (this.m_fixedRotationFlag = e.fixedRotation),
          (this.m_activeFlag = e.active),
          (this.m_islandFlag = !1),
          (this.m_toiFlag = !1),
          (this.m_userData = e.userData),
          (this.m_type = e.type),
          this.m_type == z
            ? ((this.m_mass = 1), (this.m_invMass = 1))
            : ((this.m_mass = 0), (this.m_invMass = 0)),
          (this.m_I = 0),
          (this.m_invI = 0),
          (this.m_xf = x.identity()),
          (this.m_xf.p = h.clone(e.position)),
          this.m_xf.q.setAngle(e.angle),
          (this.m_sweep = new A()),
          this.m_sweep.setTransform(this.m_xf),
          (this.c_velocity = new b()),
          (this.c_position = new g()),
          (this.m_force = h.zero()),
          (this.m_torque = 0),
          (this.m_linearVelocity = h.clone(e.linearVelocity)),
          (this.m_angularVelocity = e.angularVelocity),
          (this.m_linearDamping = e.linearDamping),
          (this.m_angularDamping = e.angularDamping),
          (this.m_gravityScale = e.gravityScale),
          (this.m_sleepTime = 0),
          (this.m_jointList = null),
          (this.m_contactList = null),
          (this.m_fixtureList = null),
          (this.m_prev = null),
          (this.m_next = null),
          (this.m_destroyed = !1);
      }
      return (
        (t.prototype._serialize = function () {
          for (var t = [], e = this.m_fixtureList; e; e = e.m_next) t.push(e);
          return {
            type: this.m_type,
            bullet: this.m_bulletFlag,
            position: this.m_xf.p,
            angle: this.m_xf.q.getAngle(),
            linearVelocity: this.m_linearVelocity,
            angularVelocity: this.m_angularVelocity,
            fixtures: t,
          };
        }),
        (t._deserialize = function (e, i, o) {
          var s = new t(i, e);
          if (e.fixtures)
            for (var n = e.fixtures.length - 1; n >= 0; n--) {
              var r = o(C, e.fixtures[n], s);
              s._addFixture(r);
            }
          return s;
        }),
        (t.prototype.isWorldLocked = function () {
          return !(!this.m_world || !this.m_world.isLocked());
        }),
        (t.prototype.getWorld = function () {
          return this.m_world;
        }),
        (t.prototype.getNext = function () {
          return this.m_next;
        }),
        (t.prototype.setUserData = function (t) {
          this.m_userData = t;
        }),
        (t.prototype.getUserData = function () {
          return this.m_userData;
        }),
        (t.prototype.getFixtureList = function () {
          return this.m_fixtureList;
        }),
        (t.prototype.getJointList = function () {
          return this.m_jointList;
        }),
        (t.prototype.getContactList = function () {
          return this.m_contactList;
        }),
        (t.prototype.isStatic = function () {
          return this.m_type == M;
        }),
        (t.prototype.isDynamic = function () {
          return this.m_type == z;
        }),
        (t.prototype.isKinematic = function () {
          return this.m_type == I;
        }),
        (t.prototype.setStatic = function () {
          return this.setType(M), this;
        }),
        (t.prototype.setDynamic = function () {
          return this.setType(z), this;
        }),
        (t.prototype.setKinematic = function () {
          return this.setType(I), this;
        }),
        (t.prototype.getType = function () {
          return this.m_type;
        }),
        (t.prototype.setType = function (t) {
          if (1 != this.isWorldLocked() && this.m_type != t) {
            (this.m_type = t),
              this.resetMassData(),
              this.m_type == M &&
                (this.m_linearVelocity.setZero(),
                (this.m_angularVelocity = 0),
                this.m_sweep.forward(),
                this.synchronizeFixtures()),
              this.setAwake(!0),
              this.m_force.setZero(),
              (this.m_torque = 0);
            for (var e = this.m_contactList; e; ) {
              var i = e;
              (e = e.next), this.m_world.destroyContact(i.contact);
            }
            this.m_contactList = null;
            for (
              var o = this.m_world.m_broadPhase, s = this.m_fixtureList;
              s;
              s = s.m_next
            )
              for (var n = s.m_proxyCount, r = 0; r < n; ++r)
                o.touchProxy(s.m_proxies[r].proxyId);
          }
        }),
        (t.prototype.isBullet = function () {
          return this.m_bulletFlag;
        }),
        (t.prototype.setBullet = function (t) {
          this.m_bulletFlag = !!t;
        }),
        (t.prototype.isSleepingAllowed = function () {
          return this.m_autoSleepFlag;
        }),
        (t.prototype.setSleepingAllowed = function (t) {
          (this.m_autoSleepFlag = !!t),
            0 == this.m_autoSleepFlag && this.setAwake(!0);
        }),
        (t.prototype.isAwake = function () {
          return this.m_awakeFlag;
        }),
        (t.prototype.setAwake = function (t) {
          t
            ? 0 == this.m_awakeFlag &&
              ((this.m_awakeFlag = !0), (this.m_sleepTime = 0))
            : ((this.m_awakeFlag = !1),
              (this.m_sleepTime = 0),
              this.m_linearVelocity.setZero(),
              (this.m_angularVelocity = 0),
              this.m_force.setZero(),
              (this.m_torque = 0));
        }),
        (t.prototype.isActive = function () {
          return this.m_activeFlag;
        }),
        (t.prototype.setActive = function (t) {
          if (t != this.m_activeFlag)
            if (((this.m_activeFlag = !!t), this.m_activeFlag))
              for (
                var e = this.m_world.m_broadPhase, i = this.m_fixtureList;
                i;
                i = i.m_next
              )
                i.createProxies(e, this.m_xf);
            else {
              for (
                e = this.m_world.m_broadPhase, i = this.m_fixtureList;
                i;
                i = i.m_next
              )
                i.destroyProxies(e);
              for (var o = this.m_contactList; o; ) {
                var s = o;
                (o = o.next), this.m_world.destroyContact(s.contact);
              }
              this.m_contactList = null;
            }
        }),
        (t.prototype.isFixedRotation = function () {
          return this.m_fixedRotationFlag;
        }),
        (t.prototype.setFixedRotation = function (t) {
          this.m_fixedRotationFlag != t &&
            ((this.m_fixedRotationFlag = !!t),
            (this.m_angularVelocity = 0),
            this.resetMassData());
        }),
        (t.prototype.getTransform = function () {
          return this.m_xf;
        }),
        (t.prototype.setTransform = function (t, e) {
          if (1 != this.isWorldLocked()) {
            this.m_xf.setNum(t, e), this.m_sweep.setTransform(this.m_xf);
            for (
              var i = this.m_world.m_broadPhase, o = this.m_fixtureList;
              o;
              o = o.m_next
            )
              o.synchronize(i, this.m_xf, this.m_xf);
          }
        }),
        (t.prototype.synchronizeTransform = function () {
          this.m_sweep.getTransform(this.m_xf, 1);
        }),
        (t.prototype.synchronizeFixtures = function () {
          var t = x.identity();
          this.m_sweep.getTransform(t, 0);
          for (
            var e = this.m_world.m_broadPhase, i = this.m_fixtureList;
            i;
            i = i.m_next
          )
            i.synchronize(e, t, this.m_xf);
        }),
        (t.prototype.advance = function (t) {
          this.m_sweep.advance(t),
            this.m_sweep.c.setVec2(this.m_sweep.c0),
            (this.m_sweep.a = this.m_sweep.a0),
            this.m_sweep.getTransform(this.m_xf, 1);
        }),
        (t.prototype.getPosition = function () {
          return this.m_xf.p;
        }),
        (t.prototype.setPosition = function (t) {
          this.setTransform(t, this.m_sweep.a);
        }),
        (t.prototype.getAngle = function () {
          return this.m_sweep.a;
        }),
        (t.prototype.setAngle = function (t) {
          this.setTransform(this.m_xf.p, t);
        }),
        (t.prototype.getWorldCenter = function () {
          return this.m_sweep.c;
        }),
        (t.prototype.getLocalCenter = function () {
          return this.m_sweep.localCenter;
        }),
        (t.prototype.getLinearVelocity = function () {
          return this.m_linearVelocity;
        }),
        (t.prototype.getLinearVelocityFromWorldPoint = function (t) {
          var e = h.sub(t, this.m_sweep.c);
          return h.add(
            this.m_linearVelocity,
            h.crossNumVec2(this.m_angularVelocity, e)
          );
        }),
        (t.prototype.getLinearVelocityFromLocalPoint = function (t) {
          return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(t));
        }),
        (t.prototype.setLinearVelocity = function (t) {
          this.m_type != M &&
            (h.dot(t, t) > 0 && this.setAwake(!0),
            this.m_linearVelocity.setVec2(t));
        }),
        (t.prototype.getAngularVelocity = function () {
          return this.m_angularVelocity;
        }),
        (t.prototype.setAngularVelocity = function (t) {
          this.m_type != M &&
            (t * t > 0 && this.setAwake(!0), (this.m_angularVelocity = t));
        }),
        (t.prototype.getLinearDamping = function () {
          return this.m_linearDamping;
        }),
        (t.prototype.setLinearDamping = function (t) {
          this.m_linearDamping = t;
        }),
        (t.prototype.getAngularDamping = function () {
          return this.m_angularDamping;
        }),
        (t.prototype.setAngularDamping = function (t) {
          this.m_angularDamping = t;
        }),
        (t.prototype.getGravityScale = function () {
          return this.m_gravityScale;
        }),
        (t.prototype.setGravityScale = function (t) {
          this.m_gravityScale = t;
        }),
        (t.prototype.getMass = function () {
          return this.m_mass;
        }),
        (t.prototype.getInertia = function () {
          return (
            this.m_I +
            this.m_mass *
              h.dot(this.m_sweep.localCenter, this.m_sweep.localCenter)
          );
        }),
        (t.prototype.getMassData = function (t) {
          (t.mass = this.m_mass),
            (t.I = this.getInertia()),
            t.center.setVec2(this.m_sweep.localCenter);
        }),
        (t.prototype.resetMassData = function () {
          if (
            ((this.m_mass = 0),
            (this.m_invMass = 0),
            (this.m_I = 0),
            (this.m_invI = 0),
            this.m_sweep.localCenter.setZero(),
            this.isStatic() || this.isKinematic())
          )
            return (
              this.m_sweep.c0.setVec2(this.m_xf.p),
              this.m_sweep.c.setVec2(this.m_xf.p),
              void (this.m_sweep.a0 = this.m_sweep.a)
            );
          for (var t = h.zero(), e = this.m_fixtureList; e; e = e.m_next)
            if (0 != e.m_density) {
              var i = new S();
              e.getMassData(i),
                (this.m_mass += i.mass),
                t.addMul(i.mass, i.center),
                (this.m_I += i.I);
            }
          this.m_mass > 0
            ? ((this.m_invMass = 1 / this.m_mass), t.mul(this.m_invMass))
            : ((this.m_mass = 1), (this.m_invMass = 1)),
            this.m_I > 0 && 0 == this.m_fixedRotationFlag
              ? ((this.m_I -= this.m_mass * h.dot(t, t)),
                (this.m_invI = 1 / this.m_I))
              : ((this.m_I = 0), (this.m_invI = 0));
          var o = h.clone(this.m_sweep.c);
          this.m_sweep.setLocalCenter(t, this.m_xf),
            this.m_linearVelocity.add(
              h.crossNumVec2(this.m_angularVelocity, h.sub(this.m_sweep.c, o))
            );
        }),
        (t.prototype.setMassData = function (t) {
          if (1 != this.isWorldLocked() && this.m_type == z) {
            (this.m_invMass = 0),
              (this.m_I = 0),
              (this.m_invI = 0),
              (this.m_mass = t.mass),
              this.m_mass <= 0 && (this.m_mass = 1),
              (this.m_invMass = 1 / this.m_mass),
              t.I > 0 &&
                0 == this.m_fixedRotationFlag &&
                ((this.m_I = t.I - this.m_mass * h.dot(t.center, t.center)),
                (this.m_invI = 1 / this.m_I));
            var e = h.clone(this.m_sweep.c);
            this.m_sweep.setLocalCenter(t.center, this.m_xf),
              this.m_linearVelocity.add(
                h.crossNumVec2(this.m_angularVelocity, h.sub(this.m_sweep.c, e))
              );
          }
        }),
        (t.prototype.applyForce = function (t, e, i) {
          void 0 === i && (i = !0),
            this.m_type == z &&
              (i && 0 == this.m_awakeFlag && this.setAwake(!0),
              this.m_awakeFlag &&
                (this.m_force.add(t),
                (this.m_torque += h.crossVec2Vec2(
                  h.sub(e, this.m_sweep.c),
                  t
                ))));
        }),
        (t.prototype.applyForceToCenter = function (t, e) {
          void 0 === e && (e = !0),
            this.m_type == z &&
              (e && 0 == this.m_awakeFlag && this.setAwake(!0),
              this.m_awakeFlag && this.m_force.add(t));
        }),
        (t.prototype.applyTorque = function (t, e) {
          void 0 === e && (e = !0),
            this.m_type == z &&
              (e && 0 == this.m_awakeFlag && this.setAwake(!0),
              this.m_awakeFlag && (this.m_torque += t));
        }),
        (t.prototype.applyLinearImpulse = function (t, e, i) {
          void 0 === i && (i = !0),
            this.m_type == z &&
              (i && 0 == this.m_awakeFlag && this.setAwake(!0),
              this.m_awakeFlag &&
                (this.m_linearVelocity.addMul(this.m_invMass, t),
                (this.m_angularVelocity +=
                  this.m_invI * h.crossVec2Vec2(h.sub(e, this.m_sweep.c), t))));
        }),
        (t.prototype.applyAngularImpulse = function (t, e) {
          void 0 === e && (e = !0),
            this.m_type == z &&
              (e && 0 == this.m_awakeFlag && this.setAwake(!0),
              this.m_awakeFlag && (this.m_angularVelocity += this.m_invI * t));
        }),
        (t.prototype.shouldCollide = function (t) {
          if (this.m_type != z && t.m_type != z) return !1;
          for (var e = this.m_jointList; e; e = e.next)
            if (e.other == t && 0 == e.joint.m_collideConnected) return !1;
          return !0;
        }),
        (t.prototype._addFixture = function (t) {
          if (1 == this.isWorldLocked()) return null;
          if (this.m_activeFlag) {
            var e = this.m_world.m_broadPhase;
            t.createProxies(e, this.m_xf);
          }
          return (
            (t.m_next = this.m_fixtureList),
            (this.m_fixtureList = t),
            t.m_density > 0 && this.resetMassData(),
            (this.m_world.m_newFixture = !0),
            t
          );
        }),
        (t.prototype.createFixture = function (t, e) {
          if (1 == this.isWorldLocked()) return null;
          var i = new C(this, t, e);
          return this._addFixture(i), i;
        }),
        (t.prototype.destroyFixture = function (t) {
          if (1 != this.isWorldLocked()) {
            if (this.m_fixtureList === t) this.m_fixtureList = t.m_next;
            else
              for (var e = this.m_fixtureList; null != e; ) {
                if (e.m_next === t) {
                  e.m_next = t.m_next;
                  break;
                }
                e = e.m_next;
              }
            for (var i = this.m_contactList; i; ) {
              var o = i.contact;
              i = i.next;
              var s = o.getFixtureA(),
                n = o.getFixtureB();
              (t != s && t != n) || this.m_world.destroyContact(o);
            }
            if (this.m_activeFlag) {
              var r = this.m_world.m_broadPhase;
              t.destroyProxies(r);
            }
            (t.m_body = null),
              (t.m_next = null),
              this.m_world.publish("remove-fixture", t),
              this.resetMassData();
          }
        }),
        (t.prototype.getWorldPoint = function (t) {
          return x.mulVec2(this.m_xf, t);
        }),
        (t.prototype.getWorldVector = function (t) {
          return v.mulVec2(this.m_xf.q, t);
        }),
        (t.prototype.getLocalPoint = function (t) {
          return x.mulTVec2(this.m_xf, t);
        }),
        (t.prototype.getLocalVector = function (t) {
          return v.mulTVec2(this.m_xf.q, t);
        }),
        (t.STATIC = "static"),
        (t.KINEMATIC = "kinematic"),
        (t.DYNAMIC = "dynamic"),
        t
      );
    })(),
    L = (function () {
      function t(t, e, i, o) {
        "object" == typeof t && null !== t
          ? ((this.ex = h.clone(t)), (this.ey = h.clone(e)))
          : "number" == typeof t
          ? ((this.ex = h.neo(t, i)), (this.ey = h.neo(e, o)))
          : ((this.ex = h.zero()), (this.ey = h.zero()));
      }
      return (
        (t.prototype.toString = function () {
          return JSON.stringify(this);
        }),
        (t.isValid = function (t) {
          return null != t && h.isValid(t.ex) && h.isValid(t.ey);
        }),
        (t.assert = function (t) {}),
        (t.prototype.set = function (t, e, i, o) {
          "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i &&
          "number" == typeof o
            ? (this.ex.setNum(t, i), this.ey.setNum(e, o))
            : "object" == typeof t && "object" == typeof e
            ? (this.ex.setVec2(t), this.ey.setVec2(e))
            : "object" == typeof t &&
              (this.ex.setVec2(t.ex), this.ey.setVec2(t.ey));
        }),
        (t.prototype.setIdentity = function () {
          (this.ex.x = 1), (this.ey.x = 0), (this.ex.y = 0), (this.ey.y = 1);
        }),
        (t.prototype.setZero = function () {
          (this.ex.x = 0), (this.ey.x = 0), (this.ex.y = 0), (this.ey.y = 0);
        }),
        (t.prototype.getInverse = function () {
          var e = this.ex.x,
            i = this.ey.x,
            o = this.ex.y,
            s = this.ey.y,
            n = e * s - i * o;
          0 !== n && (n = 1 / n);
          var r = new t();
          return (
            (r.ex.x = n * s),
            (r.ey.x = -n * i),
            (r.ex.y = -n * o),
            (r.ey.y = n * e),
            r
          );
        }),
        (t.prototype.solve = function (t) {
          var e = this.ex.x,
            i = this.ey.x,
            o = this.ex.y,
            s = this.ey.y,
            n = e * s - i * o;
          0 !== n && (n = 1 / n);
          var r = h.zero();
          return (
            (r.x = n * (s * t.x - i * t.y)), (r.y = n * (e * t.y - o * t.x)), r
          );
        }),
        (t.mul = function (e, i) {
          if (i && "x" in i && "y" in i) {
            var o = e.ex.x * i.x + e.ey.x * i.y,
              s = e.ex.y * i.x + e.ey.y * i.y;
            return h.neo(o, s);
          }
          if (i && "ex" in i && "ey" in i)
            return new t(
              e.ex.x * i.ex.x + e.ey.x * i.ex.y,
              e.ex.x * i.ey.x + e.ey.x * i.ey.y,
              e.ex.y * i.ex.x + e.ey.y * i.ex.y,
              e.ex.y * i.ey.x + e.ey.y * i.ey.y
            );
        }),
        (t.mulVec2 = function (t, e) {
          var i = t.ex.x * e.x + t.ey.x * e.y,
            o = t.ex.y * e.x + t.ey.y * e.y;
          return h.neo(i, o);
        }),
        (t.mulMat22 = function (e, i) {
          return new t(
            e.ex.x * i.ex.x + e.ey.x * i.ex.y,
            e.ex.x * i.ey.x + e.ey.x * i.ey.y,
            e.ex.y * i.ex.x + e.ey.y * i.ex.y,
            e.ex.y * i.ey.x + e.ey.y * i.ey.y
          );
        }),
        (t.mulT = function (e, i) {
          return i && "x" in i && "y" in i
            ? h.neo(h.dot(i, e.ex), h.dot(i, e.ey))
            : i && "ex" in i && "ey" in i
            ? new t(
                h.neo(h.dot(e.ex, i.ex), h.dot(e.ey, i.ex)),
                h.neo(h.dot(e.ex, i.ey), h.dot(e.ey, i.ey))
              )
            : void 0;
        }),
        (t.mulTVec2 = function (t, e) {
          return h.neo(h.dot(e, t.ex), h.dot(e, t.ey));
        }),
        (t.mulTMat22 = function (e, i) {
          return new t(
            h.neo(h.dot(e.ex, i.ex), h.dot(e.ey, i.ex)),
            h.neo(h.dot(e.ex, i.ey), h.dot(e.ey, i.ey))
          );
        }),
        (t.abs = function (e) {
          return new t(h.abs(e.ex), h.abs(e.ey));
        }),
        (t.add = function (e, i) {
          return new t(h.add(e.ex, i.ex), h.add(e.ey, i.ey));
        }),
        t
      );
    })();
  !(function (t) {
    (t[(t.e_circles = 0)] = "e_circles"),
      (t[(t.e_faceA = 1)] = "e_faceA"),
      (t[(t.e_faceB = 2)] = "e_faceB");
  })(m || (m = {})),
    (function (t) {
      (t[(t.e_vertex = 0)] = "e_vertex"), (t[(t.e_face = 1)] = "e_face");
    })(a || (a = {})),
    (function (t) {
      (t[(t.nullState = 0)] = "nullState"),
        (t[(t.addState = 1)] = "addState"),
        (t[(t.persistState = 2)] = "persistState"),
        (t[(t.removeState = 3)] = "removeState");
    })(c || (c = {}));
  var F = (function () {
      function t() {
        (this.v = h.zero()), (this.id = new k());
      }
      return (
        (t.prototype.set = function (t) {
          this.v.setVec2(t.v), this.id.set(t.id);
        }),
        t
      );
    })(),
    q = (function () {
      function t() {
        (this.localNormal = h.zero()),
          (this.localPoint = h.zero()),
          (this.points = [new N(), new N()]),
          (this.pointCount = 0);
      }
      return (
        (t.prototype.getWorldManifold = function (t, e, i, o, s) {
          if (0 != this.pointCount) {
            var n = (t = t || new j()).normal,
              a = t.points,
              c = t.separations;
            switch (this.type) {
              case m.e_circles:
                n = h.neo(1, 0);
                var _ = x.mulVec2(e, this.localPoint),
                  l = x.mulVec2(o, this.points[0].localPoint),
                  u = h.sub(l, _);
                h.lengthSquared(u) > r.EPSILON * r.EPSILON &&
                  (n.setVec2(u), n.normalize());
                var p = _.clone().addMul(i, n),
                  y = l.clone().addMul(-s, n);
                (a[0] = h.mid(p, y)),
                  (c[0] = h.dot(h.sub(y, p), n)),
                  (a.length = 1),
                  (c.length = 1);
                break;
              case m.e_faceA:
                n = v.mulVec2(e.q, this.localNormal);
                for (
                  var d = x.mulVec2(e, this.localPoint), f = 0;
                  f < this.pointCount;
                  ++f
                ) {
                  var A = x.mulVec2(o, this.points[f].localPoint);
                  (p = h.clone(A).addMul(i - h.dot(h.sub(A, d), n), n)),
                    (y = h.clone(A).subMul(s, n));
                  (a[f] = h.mid(p, y)), (c[f] = h.dot(h.sub(y, p), n));
                }
                (a.length = this.pointCount), (c.length = this.pointCount);
                break;
              case m.e_faceB:
                n = v.mulVec2(o.q, this.localNormal);
                for (
                  d = x.mulVec2(o, this.localPoint), f = 0;
                  f < this.pointCount;
                  ++f
                ) {
                  (A = x.mulVec2(e, this.points[f].localPoint)),
                    (y = h.combine(1, A, s - h.dot(h.sub(A, d), n), n)),
                    (p = h.combine(1, A, -i, n));
                  (a[f] = h.mid(p, y)), (c[f] = h.dot(h.sub(p, y), n));
                }
                (a.length = this.pointCount),
                  (c.length = this.pointCount),
                  n.mul(-1);
            }
            return (t.normal = n), (t.points = a), (t.separations = c), t;
          }
        }),
        (t.clipSegmentToLine = E),
        (t.ClipVertex = F),
        (t.getPointStates = R),
        (t.PointState = c),
        t
      );
    })(),
    N = function () {
      (this.localPoint = h.zero()),
        (this.normalImpulse = 0),
        (this.tangentImpulse = 0),
        (this.id = new k());
    },
    k = (function () {
      function t() {
        this.cf = new D();
      }
      return (
        Object.defineProperty(t.prototype, "key", {
          get: function () {
            return (
              this.cf.indexA +
              4 * this.cf.indexB +
              16 * this.cf.typeA +
              64 * this.cf.typeB
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.set = function (t) {
          this.cf.set(t.cf);
        }),
        t
      );
    })(),
    D = (function () {
      function t() {}
      return (
        (t.prototype.set = function (t) {
          (this.indexA = t.indexA),
            (this.indexB = t.indexB),
            (this.typeA = t.typeA),
            (this.typeB = t.typeB);
        }),
        t
      );
    })(),
    j = function () {
      (this.points = []), (this.separations = []);
    };
  function R(t, e, i, o) {
    for (var s = 0; s < i.pointCount; ++s) {
      var n = i.points[s].id;
      t[s] = c.removeState;
      for (var r = 0; r < o.pointCount; ++r)
        if (o.points[r].id.key == n.key) {
          t[s] = c.persistState;
          break;
        }
    }
    for (s = 0; s < o.pointCount; ++s) {
      n = o.points[s].id;
      e[s] = c.addState;
      for (r = 0; r < i.pointCount; ++r)
        if (i.points[r].id.key == n.key) {
          e[s] = c.persistState;
          break;
        }
    }
  }
  function E(t, e, i, o, s) {
    var n = 0,
      r = h.dot(i, e[0].v) - o,
      m = h.dot(i, e[1].v) - o;
    if ((r <= 0 && t[n++].set(e[0]), m <= 0 && t[n++].set(e[1]), r * m < 0)) {
      var c = r / (r - m);
      t[n].v.setCombine(1 - c, e[0].v, c, e[1].v),
        (t[n].id.cf.indexA = s),
        (t[n].id.cf.indexB = e[0].id.cf.indexB),
        (t[n].id.cf.typeA = a.e_vertex),
        (t[n].id.cf.typeB = a.e_face),
        ++n;
    }
    return n;
  }
  var O = {
    gjkCalls: 0,
    gjkIters: 0,
    gjkMaxIters: 0,
    toiTime: 0,
    toiMaxTime: 0,
    toiCalls: 0,
    toiIters: 0,
    toiMaxIters: 0,
    toiRootIters: 0,
    toiMaxRootIters: 0,
    toString: function (t) {
      t = "string" == typeof t ? t : "\n";
      var e = "";
      for (var i in this)
        "function" != typeof this[i] &&
          "object" != typeof this[i] &&
          (e += i + ": " + this[i] + t);
      return e;
    },
  };
  (O.gjkCalls = 0), (O.gjkIters = 0), (O.gjkMaxIters = 0);
  var J = function () {
      (this.proxyA = new Z()),
        (this.proxyB = new Z()),
        (this.transformA = null),
        (this.transformB = null),
        (this.useRadii = !1);
    },
    Y = function () {
      (this.pointA = h.zero()), (this.pointB = h.zero());
    },
    W = function () {
      (this.metric = 0),
        (this.indexA = []),
        (this.indexB = []),
        (this.count = 0);
    };
  function H(t, e, i) {
    ++O.gjkCalls;
    var o = i.proxyA,
      s = i.proxyB,
      n = i.transformA,
      m = i.transformB,
      a = new K();
    a.readCache(e, o, n, s, m);
    for (
      var c = a.m_v, _ = l.maxDistnceIterations, u = [], p = [], y = 0, d = 0;
      d < _;

    ) {
      y = a.m_count;
      for (var f = 0; f < y; ++f) (u[f] = c[f].indexA), (p[f] = c[f].indexB);
      if ((a.solve(), 3 === a.m_count)) break;
      (C = a.getClosestPoint()).lengthSquared();
      var A = a.getSearchDirection();
      if (A.lengthSquared() < r.EPSILON * r.EPSILON) break;
      var b = c[a.m_count];
      (b.indexA = o.getSupport(v.mulTVec2(n.q, h.neg(A)))),
        (b.wA = x.mulVec2(n, o.getVertex(b.indexA))),
        (b.indexB = s.getSupport(v.mulTVec2(m.q, A))),
        (b.wB = x.mulVec2(m, s.getVertex(b.indexB))),
        (b.w = h.sub(b.wB, b.wA)),
        ++d,
        ++O.gjkIters;
      var g = !1;
      for (f = 0; f < y; ++f)
        if (b.indexA === u[f] && b.indexB === p[f]) {
          g = !0;
          break;
        }
      if (g) break;
      ++a.m_count;
    }
    if (
      ((O.gjkMaxIters = r.max(O.gjkMaxIters, d)),
      a.getWitnessPoints(t.pointA, t.pointB),
      (t.distance = h.distance(t.pointA, t.pointB)),
      (t.iterations = d),
      a.writeCache(e),
      i.useRadii)
    ) {
      var B = o.m_radius,
        V = s.m_radius;
      if (t.distance > B + V && t.distance > r.EPSILON) {
        t.distance -= B + V;
        var w = h.sub(t.pointB, t.pointA);
        w.normalize(), t.pointA.addMul(B, w), t.pointB.subMul(V, w);
      } else {
        var C = h.mid(t.pointA, t.pointB);
        t.pointA.setVec2(C), t.pointB.setVec2(C), (t.distance = 0);
      }
    }
  }
  var Z = (function () {
      function t() {
        (this.m_buffer = []),
          (this.m_vertices = []),
          (this.m_count = 0),
          (this.m_radius = 0);
      }
      return (
        (t.prototype.getVertexCount = function () {
          return this.m_count;
        }),
        (t.prototype.getVertex = function (t) {
          return this.m_vertices[t];
        }),
        (t.prototype.getSupport = function (t) {
          for (
            var e = 0, i = h.dot(this.m_vertices[0], t), o = 0;
            o < this.m_count;
            ++o
          ) {
            var s = h.dot(this.m_vertices[o], t);
            s > i && ((e = o), (i = s));
          }
          return e;
        }),
        (t.prototype.getSupportVertex = function (t) {
          return this.m_vertices[this.getSupport(t)];
        }),
        (t.prototype.set = function (t, e) {
          t.computeDistanceProxy(this, e);
        }),
        t
      );
    })(),
    X = (function () {
      function t() {
        (this.wA = h.zero()), (this.wB = h.zero()), (this.w = h.zero());
      }
      return (
        (t.prototype.set = function (t) {
          (this.indexA = t.indexA),
            (this.indexB = t.indexB),
            (this.wA = h.clone(t.wA)),
            (this.wB = h.clone(t.wB)),
            (this.w = h.clone(t.w)),
            (this.a = t.a);
        }),
        t
      );
    })(),
    K = (function () {
      function t() {
        (this.m_v1 = new X()),
          (this.m_v2 = new X()),
          (this.m_v3 = new X()),
          (this.m_v = [this.m_v1, this.m_v2, this.m_v3]),
          this.m_count;
      }
      return (
        (t.prototype.toString = function () {
          return 3 === this.m_count
            ? [
                "+" + this.m_count,
                this.m_v1.a,
                this.m_v1.wA.x,
                this.m_v1.wA.y,
                this.m_v1.wB.x,
                this.m_v1.wB.y,
                this.m_v2.a,
                this.m_v2.wA.x,
                this.m_v2.wA.y,
                this.m_v2.wB.x,
                this.m_v2.wB.y,
                this.m_v3.a,
                this.m_v3.wA.x,
                this.m_v3.wA.y,
                this.m_v3.wB.x,
                this.m_v3.wB.y,
              ].toString()
            : 2 === this.m_count
            ? [
                "+" + this.m_count,
                this.m_v1.a,
                this.m_v1.wA.x,
                this.m_v1.wA.y,
                this.m_v1.wB.x,
                this.m_v1.wB.y,
                this.m_v2.a,
                this.m_v2.wA.x,
                this.m_v2.wA.y,
                this.m_v2.wB.x,
                this.m_v2.wB.y,
              ].toString()
            : 1 === this.m_count
            ? [
                "+" + this.m_count,
                this.m_v1.a,
                this.m_v1.wA.x,
                this.m_v1.wA.y,
                this.m_v1.wB.x,
                this.m_v1.wB.y,
              ].toString()
            : "+" + this.m_count;
        }),
        (t.prototype.readCache = function (t, e, i, o, s) {
          this.m_count = t.count;
          for (var n = 0; n < this.m_count; ++n) {
            ((l = this.m_v[n]).indexA = t.indexA[n]), (l.indexB = t.indexB[n]);
            var m = e.getVertex(l.indexA),
              a = o.getVertex(l.indexB);
            (l.wA = x.mulVec2(i, m)),
              (l.wB = x.mulVec2(s, a)),
              (l.w = h.sub(l.wB, l.wA)),
              (l.a = 0);
          }
          if (this.m_count > 1) {
            var c = t.metric,
              _ = this.getMetric();
            (_ < 0.5 * c || 2 * c < _ || _ < r.EPSILON) && (this.m_count = 0);
          }
          if (0 === this.m_count) {
            var l;
            ((l = this.m_v[0]).indexA = 0), (l.indexB = 0);
            (m = e.getVertex(0)), (a = o.getVertex(0));
            (l.wA = x.mulVec2(i, m)),
              (l.wB = x.mulVec2(s, a)),
              (l.w = h.sub(l.wB, l.wA)),
              (l.a = 1),
              (this.m_count = 1);
          }
        }),
        (t.prototype.writeCache = function (t) {
          (t.metric = this.getMetric()), (t.count = this.m_count);
          for (var e = 0; e < this.m_count; ++e)
            (t.indexA[e] = this.m_v[e].indexA),
              (t.indexB[e] = this.m_v[e].indexB);
        }),
        (t.prototype.getSearchDirection = function () {
          switch (this.m_count) {
            case 1:
              return h.neg(this.m_v1.w);
            case 2:
              var t = h.sub(this.m_v2.w, this.m_v1.w);
              return h.crossVec2Vec2(t, h.neg(this.m_v1.w)) > 0
                ? h.crossNumVec2(1, t)
                : h.crossVec2Num(t, 1);
            default:
              return h.zero();
          }
        }),
        (t.prototype.getClosestPoint = function () {
          switch (this.m_count) {
            case 0:
              return h.zero();
            case 1:
              return h.clone(this.m_v1.w);
            case 2:
              return h.combine(
                this.m_v1.a,
                this.m_v1.w,
                this.m_v2.a,
                this.m_v2.w
              );
            case 3:
            default:
              return h.zero();
          }
        }),
        (t.prototype.getWitnessPoints = function (t, e) {
          switch (this.m_count) {
            case 0:
              break;
            case 1:
              t.setVec2(this.m_v1.wA), e.setVec2(this.m_v1.wB);
              break;
            case 2:
              t.setCombine(
                this.m_v1.a,
                this.m_v1.wA,
                this.m_v2.a,
                this.m_v2.wA
              ),
                e.setCombine(
                  this.m_v1.a,
                  this.m_v1.wB,
                  this.m_v2.a,
                  this.m_v2.wB
                );
              break;
            case 3:
              t.setCombine(
                this.m_v1.a,
                this.m_v1.wA,
                this.m_v2.a,
                this.m_v2.wA
              ),
                t.addMul(this.m_v3.a, this.m_v3.wA),
                e.setVec2(t);
          }
        }),
        (t.prototype.getMetric = function () {
          switch (this.m_count) {
            case 0:
            case 1:
              return 0;
            case 2:
              return h.distance(this.m_v1.w, this.m_v2.w);
            case 3:
              return h.crossVec2Vec2(
                h.sub(this.m_v2.w, this.m_v1.w),
                h.sub(this.m_v3.w, this.m_v1.w)
              );
            default:
              return 0;
          }
        }),
        (t.prototype.solve = function () {
          switch (this.m_count) {
            case 1:
              break;
            case 2:
              this.solve2();
              break;
            case 3:
              this.solve3();
          }
        }),
        (t.prototype.solve2 = function () {
          var t = this.m_v1.w,
            e = this.m_v2.w,
            i = h.sub(e, t),
            o = -h.dot(t, i);
          if (o <= 0) return (this.m_v1.a = 1), void (this.m_count = 1);
          var s = h.dot(e, i);
          if (s <= 0)
            return (
              (this.m_v2.a = 1),
              (this.m_count = 1),
              void this.m_v1.set(this.m_v2)
            );
          var n = 1 / (s + o);
          (this.m_v1.a = s * n), (this.m_v2.a = o * n), (this.m_count = 2);
        }),
        (t.prototype.solve3 = function () {
          var t = this.m_v1.w,
            e = this.m_v2.w,
            i = this.m_v3.w,
            o = h.sub(e, t),
            s = h.dot(t, o),
            n = h.dot(e, o),
            r = -s,
            m = h.sub(i, t),
            a = h.dot(t, m),
            c = h.dot(i, m),
            _ = -a,
            l = h.sub(i, e),
            u = h.dot(e, l),
            p = h.dot(i, l),
            y = -u,
            d = h.crossVec2Vec2(o, m),
            f = d * h.crossVec2Vec2(e, i),
            v = d * h.crossVec2Vec2(i, t),
            x = d * h.crossVec2Vec2(t, e);
          if (r <= 0 && _ <= 0)
            return (this.m_v1.a = 1), void (this.m_count = 1);
          if (n > 0 && r > 0 && x <= 0) {
            var A = 1 / (n + r);
            return (
              (this.m_v1.a = n * A),
              (this.m_v2.a = r * A),
              void (this.m_count = 2)
            );
          }
          if (c > 0 && _ > 0 && v <= 0) {
            var b = 1 / (c + _);
            return (
              (this.m_v1.a = c * b),
              (this.m_v3.a = _ * b),
              (this.m_count = 2),
              void this.m_v2.set(this.m_v3)
            );
          }
          if (n <= 0 && y <= 0)
            return (
              (this.m_v2.a = 1),
              (this.m_count = 1),
              void this.m_v1.set(this.m_v2)
            );
          if (c <= 0 && p <= 0)
            return (
              (this.m_v3.a = 1),
              (this.m_count = 1),
              void this.m_v1.set(this.m_v3)
            );
          if (p > 0 && y > 0 && f <= 0) {
            var g = 1 / (p + y);
            return (
              (this.m_v2.a = p * g),
              (this.m_v3.a = y * g),
              (this.m_count = 2),
              void this.m_v1.set(this.m_v3)
            );
          }
          var B = 1 / (f + v + x);
          (this.m_v1.a = f * B),
            (this.m_v2.a = v * B),
            (this.m_v3.a = x * B),
            (this.m_count = 3);
        }),
        t
      );
    })();
  function G(t, e, i, o, s, n) {
    var m = new J();
    m.proxyA.set(t, e),
      m.proxyB.set(i, o),
      (m.transformA = s),
      (m.transformB = n),
      (m.useRadii = !0);
    var a = new W(),
      c = new Y();
    return H(c, a, m), c.distance < 10 * r.EPSILON;
  }
  var U = function (t) {
    this.contact = t;
  };
  function Q(t, e) {
    return r.sqrt(t * e);
  }
  function $(t, e) {
    return t > e ? t : e;
  }
  var tt,
    et = [],
    it = function () {
      (this.rA = h.zero()),
        (this.rB = h.zero()),
        (this.normalImpulse = 0),
        (this.tangentImpulse = 0),
        (this.normalMass = 0),
        (this.tangentMass = 0),
        (this.velocityBias = 0);
    },
    ot = (function () {
      function t(t, e, i, o, s) {
        (this.m_manifold = new q()),
          (this.m_prev = null),
          (this.m_next = null),
          (this.m_toi = 1),
          (this.m_toiCount = 0),
          (this.m_toiFlag = !1),
          (this.m_tangentSpeed = 0),
          (this.m_enabledFlag = !0),
          (this.m_islandFlag = !1),
          (this.m_touchingFlag = !1),
          (this.m_filterFlag = !1),
          (this.m_bulletHitFlag = !1),
          (this.m_impulse = new yt(this)),
          (this.v_points = []),
          (this.v_normal = h.zero()),
          (this.v_normalMass = new L()),
          (this.v_K = new L()),
          (this.p_localPoints = []),
          (this.p_localNormal = h.zero()),
          (this.p_localPoint = h.zero()),
          (this.p_localCenterA = h.zero()),
          (this.p_localCenterB = h.zero()),
          (this.m_nodeA = new U(this)),
          (this.m_nodeB = new U(this)),
          (this.m_fixtureA = t),
          (this.m_fixtureB = i),
          (this.m_indexA = e),
          (this.m_indexB = o),
          (this.m_evaluateFcn = s),
          (this.m_friction = Q(
            this.m_fixtureA.m_friction,
            this.m_fixtureB.m_friction
          )),
          (this.m_restitution = $(
            this.m_fixtureA.m_restitution,
            this.m_fixtureB.m_restitution
          ));
      }
      return (
        (t.prototype.initConstraint = function (t) {
          var e = this.m_fixtureA,
            i = this.m_fixtureB,
            o = e.getShape(),
            s = i.getShape(),
            n = e.getBody(),
            r = i.getBody(),
            m = this.getManifold(),
            a = m.pointCount;
          (this.v_invMassA = n.m_invMass),
            (this.v_invMassB = r.m_invMass),
            (this.v_invIA = n.m_invI),
            (this.v_invIB = r.m_invI),
            (this.v_friction = this.m_friction),
            (this.v_restitution = this.m_restitution),
            (this.v_tangentSpeed = this.m_tangentSpeed),
            (this.v_pointCount = a),
            this.v_K.setZero(),
            this.v_normalMass.setZero(),
            (this.p_invMassA = n.m_invMass),
            (this.p_invMassB = r.m_invMass),
            (this.p_invIA = n.m_invI),
            (this.p_invIB = r.m_invI),
            (this.p_localCenterA = h.clone(n.m_sweep.localCenter)),
            (this.p_localCenterB = h.clone(r.m_sweep.localCenter)),
            (this.p_radiusA = o.m_radius),
            (this.p_radiusB = s.m_radius),
            (this.p_type = m.type),
            (this.p_localNormal = h.clone(m.localNormal)),
            (this.p_localPoint = h.clone(m.localPoint)),
            (this.p_pointCount = a);
          for (var c = 0; c < a; ++c) {
            var _ = m.points[c],
              l = (this.v_points[c] = new it());
            t.warmStarting
              ? ((l.normalImpulse = t.dtRatio * _.normalImpulse),
                (l.tangentImpulse = t.dtRatio * _.tangentImpulse))
              : ((l.normalImpulse = 0), (l.tangentImpulse = 0)),
              l.rA.setZero(),
              l.rB.setZero(),
              (l.normalMass = 0),
              (l.tangentMass = 0),
              (l.velocityBias = 0),
              (this.p_localPoints[c] = h.clone(_.localPoint));
          }
        }),
        (t.prototype.getManifold = function () {
          return this.m_manifold;
        }),
        (t.prototype.getWorldManifold = function (t) {
          var e = this.m_fixtureA.getBody(),
            i = this.m_fixtureB.getBody(),
            o = this.m_fixtureA.getShape(),
            s = this.m_fixtureB.getShape();
          return this.m_manifold.getWorldManifold(
            t,
            e.getTransform(),
            o.m_radius,
            i.getTransform(),
            s.m_radius
          );
        }),
        (t.prototype.setEnabled = function (t) {
          this.m_enabledFlag = !!t;
        }),
        (t.prototype.isEnabled = function () {
          return this.m_enabledFlag;
        }),
        (t.prototype.isTouching = function () {
          return this.m_touchingFlag;
        }),
        (t.prototype.getNext = function () {
          return this.m_next;
        }),
        (t.prototype.getFixtureA = function () {
          return this.m_fixtureA;
        }),
        (t.prototype.getFixtureB = function () {
          return this.m_fixtureB;
        }),
        (t.prototype.getChildIndexA = function () {
          return this.m_indexA;
        }),
        (t.prototype.getChildIndexB = function () {
          return this.m_indexB;
        }),
        (t.prototype.flagForFiltering = function () {
          this.m_filterFlag = !0;
        }),
        (t.prototype.setFriction = function (t) {
          this.m_friction = t;
        }),
        (t.prototype.getFriction = function () {
          return this.m_friction;
        }),
        (t.prototype.resetFriction = function () {
          this.m_friction = Q(
            this.m_fixtureA.m_friction,
            this.m_fixtureB.m_friction
          );
        }),
        (t.prototype.setRestitution = function (t) {
          this.m_restitution = t;
        }),
        (t.prototype.getRestitution = function () {
          return this.m_restitution;
        }),
        (t.prototype.resetRestitution = function () {
          this.m_restitution = $(
            this.m_fixtureA.m_restitution,
            this.m_fixtureB.m_restitution
          );
        }),
        (t.prototype.setTangentSpeed = function (t) {
          this.m_tangentSpeed = t;
        }),
        (t.prototype.getTangentSpeed = function () {
          return this.m_tangentSpeed;
        }),
        (t.prototype.evaluate = function (t, e, i) {
          this.m_evaluateFcn(
            t,
            e,
            this.m_fixtureA,
            this.m_indexA,
            i,
            this.m_fixtureB,
            this.m_indexB
          );
        }),
        (t.prototype.update = function (t) {
          this.m_enabledFlag = !0;
          var e,
            i = !1,
            o = this.m_touchingFlag,
            s = this.m_fixtureA.isSensor(),
            n = this.m_fixtureB.isSensor(),
            r = s || n,
            m = this.m_fixtureA.getBody(),
            a = this.m_fixtureB.getBody(),
            c = m.getTransform(),
            h = a.getTransform();
          if (r) {
            var _ = this.m_fixtureA.getShape(),
              l = this.m_fixtureB.getShape();
            (i = G(_, this.m_indexA, l, this.m_indexB, c, h)),
              (this.m_manifold.pointCount = 0);
          } else {
            (e = this.m_manifold),
              (this.m_manifold = new q()),
              this.evaluate(this.m_manifold, c, h),
              (i = this.m_manifold.pointCount > 0);
            for (var u = 0; u < this.m_manifold.pointCount; ++u) {
              var p = this.m_manifold.points[u];
              (p.normalImpulse = 0), (p.tangentImpulse = 0);
              for (var y = 0; y < e.pointCount; ++y) {
                var d = e.points[y];
                if (d.id.key == p.id.key) {
                  (p.normalImpulse = d.normalImpulse),
                    (p.tangentImpulse = d.tangentImpulse);
                  break;
                }
              }
            }
            i != o && (m.setAwake(!0), a.setAwake(!0));
          }
          (this.m_touchingFlag = i),
            !o && i && t && t.beginContact(this),
            o && !i && t && t.endContact(this),
            !r && i && t && t.preSolve(this, e);
        }),
        (t.prototype.solvePositionConstraint = function (t) {
          return this._solvePositionConstraint(t);
        }),
        (t.prototype.solvePositionConstraintTOI = function (t, e, i) {
          return this._solvePositionConstraint(t, e, i);
        }),
        (t.prototype._solvePositionConstraint = function (t, e, i) {
          var o = !!e && !!i,
            s = this.m_fixtureA,
            n = this.m_fixtureB,
            a = s.getBody(),
            c = n.getBody();
          a.c_velocity, c.c_velocity;
          var _ = a.c_position,
            u = c.c_position,
            p = h.clone(this.p_localCenterA),
            y = h.clone(this.p_localCenterB),
            d = 0,
            f = 0;
          (o && a != e && a != i) ||
            ((d = this.p_invMassA), (f = this.p_invIA));
          var A = 0,
            b = 0;
          (o && c != e && c != i) ||
            ((A = this.p_invMassB), (b = this.p_invIB));
          for (
            var g = h.clone(_.c),
              B = _.a,
              V = h.clone(u.c),
              w = u.a,
              C = 0,
              M = 0;
            M < this.p_pointCount;
            ++M
          ) {
            var I = x.identity(),
              z = x.identity();
            I.q.setAngle(B),
              z.q.setAngle(w),
              (I.p = h.sub(g, v.mulVec2(I.q, p))),
              (z.p = h.sub(V, v.mulVec2(z.q, y)));
            var P = void 0,
              S = void 0,
              T = void 0;
            switch (this.p_type) {
              case m.e_circles:
                var L = x.mulVec2(I, this.p_localPoint),
                  F = x.mulVec2(z, this.p_localPoints[0]);
                (P = h.sub(F, L)).normalize(),
                  (S = h.combine(0.5, L, 0.5, F)),
                  (T = h.dot(h.sub(F, L), P) - this.p_radiusA - this.p_radiusB);
                break;
              case m.e_faceA:
                P = v.mulVec2(I.q, this.p_localNormal);
                var q = x.mulVec2(I, this.p_localPoint),
                  N = x.mulVec2(z, this.p_localPoints[M]);
                (T = h.dot(h.sub(N, q), P) - this.p_radiusA - this.p_radiusB),
                  (S = N);
                break;
              case m.e_faceB:
                P = v.mulVec2(z.q, this.p_localNormal);
                (q = x.mulVec2(z, this.p_localPoint)),
                  (N = x.mulVec2(I, this.p_localPoints[M]));
                (T = h.dot(h.sub(N, q), P) - this.p_radiusA - this.p_radiusB),
                  (S = N),
                  P.mul(-1);
            }
            var k = h.sub(S, g),
              D = h.sub(S, V);
            C = r.min(C, T);
            var j = o ? l.toiBaugarte : l.baumgarte,
              R = l.linearSlop,
              E = l.maxLinearCorrection,
              O = r.clamp(j * (T + R), -E, 0),
              J = h.crossVec2Vec2(k, P),
              Y = h.crossVec2Vec2(D, P),
              W = d + A + f * J * J + b * Y * Y,
              H = W > 0 ? -O / W : 0,
              Z = h.mulNumVec2(H, P);
            g.subMul(d, Z),
              (B -= f * h.crossVec2Vec2(k, Z)),
              V.addMul(A, Z),
              (w += b * h.crossVec2Vec2(D, Z));
          }
          return _.c.setVec2(g), (_.a = B), u.c.setVec2(V), (u.a = w), C;
        }),
        (t.prototype.initVelocityConstraint = function (t) {
          var e = this.m_fixtureA,
            i = this.m_fixtureB,
            o = e.getBody(),
            s = i.getBody(),
            n = o.c_velocity,
            r = s.c_velocity,
            m = o.c_position,
            a = s.c_position,
            c = this.p_radiusA,
            _ = this.p_radiusB,
            u = this.getManifold(),
            p = this.v_invMassA,
            y = this.v_invMassB,
            d = this.v_invIA,
            f = this.v_invIB,
            A = h.clone(this.p_localCenterA),
            b = h.clone(this.p_localCenterB),
            g = h.clone(m.c),
            B = m.a,
            V = h.clone(n.v),
            w = n.w,
            C = h.clone(a.c),
            M = a.a,
            I = h.clone(r.v),
            z = r.w,
            P = x.identity(),
            S = x.identity();
          P.q.setAngle(B),
            S.q.setAngle(M),
            P.p.setCombine(1, g, -1, v.mulVec2(P.q, A)),
            S.p.setCombine(1, C, -1, v.mulVec2(S.q, b));
          var T = u.getWorldManifold(null, P, c, S, _);
          this.v_normal.setVec2(T.normal);
          for (var L = 0; L < this.v_pointCount; ++L) {
            var F = this.v_points[L];
            F.rA.setVec2(h.sub(T.points[L], g)),
              F.rB.setVec2(h.sub(T.points[L], C));
            var q = h.crossVec2Vec2(F.rA, this.v_normal),
              N = h.crossVec2Vec2(F.rB, this.v_normal),
              k = p + y + d * q * q + f * N * N;
            F.normalMass = k > 0 ? 1 / k : 0;
            var D = h.crossVec2Num(this.v_normal, 1),
              j = h.crossVec2Vec2(F.rA, D),
              R = h.crossVec2Vec2(F.rB, D),
              E = p + y + d * j * j + f * R * R;
            (F.tangentMass = E > 0 ? 1 / E : 0), (F.velocityBias = 0);
            var O =
              h.dot(this.v_normal, I) +
              h.dot(this.v_normal, h.crossNumVec2(z, F.rB)) -
              h.dot(this.v_normal, V) -
              h.dot(this.v_normal, h.crossNumVec2(w, F.rA));
            O < -l.velocityThreshold &&
              (F.velocityBias = -this.v_restitution * O);
          }
          if (2 == this.v_pointCount && t.blockSolve) {
            var J = this.v_points[0],
              Y = this.v_points[1],
              W = h.crossVec2Vec2(J.rA, this.v_normal),
              H = h.crossVec2Vec2(J.rB, this.v_normal),
              Z = h.crossVec2Vec2(Y.rA, this.v_normal),
              X = h.crossVec2Vec2(Y.rB, this.v_normal),
              K = p + y + d * W * W + f * H * H,
              G = p + y + d * Z * Z + f * X * X,
              U = p + y + d * W * Z + f * H * X;
            K * K < 1e3 * (K * G - U * U)
              ? (this.v_K.ex.setNum(K, U),
                this.v_K.ey.setNum(U, G),
                this.v_normalMass.set(this.v_K.getInverse()))
              : (this.v_pointCount = 1);
          }
          m.c.setVec2(g),
            (m.a = B),
            n.v.setVec2(V),
            (n.w = w),
            a.c.setVec2(C),
            (a.a = M),
            r.v.setVec2(I),
            (r.w = z);
        }),
        (t.prototype.warmStartConstraint = function (t) {
          var e = this.m_fixtureA,
            i = this.m_fixtureB,
            o = e.getBody(),
            s = i.getBody(),
            n = o.c_velocity,
            r = s.c_velocity;
          o.c_position, s.c_position;
          for (
            var m = this.v_invMassA,
              a = this.v_invIA,
              c = this.v_invMassB,
              _ = this.v_invIB,
              l = h.clone(n.v),
              u = n.w,
              p = h.clone(r.v),
              y = r.w,
              d = this.v_normal,
              f = h.crossVec2Num(d, 1),
              v = 0;
            v < this.v_pointCount;
            ++v
          ) {
            var x = this.v_points[v],
              A = h.combine(x.normalImpulse, d, x.tangentImpulse, f);
            (u -= a * h.crossVec2Vec2(x.rA, A)),
              l.subMul(m, A),
              (y += _ * h.crossVec2Vec2(x.rB, A)),
              p.addMul(c, A);
          }
          n.v.setVec2(l), (n.w = u), r.v.setVec2(p), (r.w = y);
        }),
        (t.prototype.storeConstraintImpulses = function (t) {
          for (var e = this.m_manifold, i = 0; i < this.v_pointCount; ++i)
            (e.points[i].normalImpulse = this.v_points[i].normalImpulse),
              (e.points[i].tangentImpulse = this.v_points[i].tangentImpulse);
        }),
        (t.prototype.solveVelocityConstraint = function (t) {
          var e = this.m_fixtureA.m_body,
            i = this.m_fixtureB.m_body,
            o = e.c_velocity;
          e.c_position;
          var s = i.c_velocity;
          i.c_position;
          for (
            var n = this.v_invMassA,
              m = this.v_invIA,
              a = this.v_invMassB,
              c = this.v_invIB,
              _ = h.clone(o.v),
              l = o.w,
              u = h.clone(s.v),
              p = s.w,
              y = this.v_normal,
              d = h.crossVec2Num(y, 1),
              f = this.v_friction,
              v = 0;
            v < this.v_pointCount;
            ++v
          ) {
            var x = this.v_points[v];
            (w = h.zero()).addCombine(1, u, 1, h.crossNumVec2(p, x.rB)),
              w.subCombine(1, _, 1, h.crossNumVec2(l, x.rA));
            var A = h.dot(w, d) - this.v_tangentSpeed,
              b = x.tangentMass * -A,
              g = f * x.normalImpulse;
            (b = (C = r.clamp(x.tangentImpulse + b, -g, g)) - x.tangentImpulse),
              (x.tangentImpulse = C);
            var B = h.mulNumVec2(b, d);
            _.subMul(n, B),
              (l -= m * h.crossVec2Vec2(x.rA, B)),
              u.addMul(a, B),
              (p += c * h.crossVec2Vec2(x.rB, B));
          }
          if (1 == this.v_pointCount || 0 == t.blockSolve)
            for (var V = 0; V < this.v_pointCount; ++V) {
              var w;
              x = this.v_points[V];
              (w = h.zero()).addCombine(1, u, 1, h.crossNumVec2(p, x.rB)),
                w.subCombine(1, _, 1, h.crossNumVec2(l, x.rA));
              var C,
                M = h.dot(w, y);
              b = -x.normalMass * (M - x.velocityBias);
              (b = (C = r.max(x.normalImpulse + b, 0)) - x.normalImpulse),
                (x.normalImpulse = C);
              B = h.mulNumVec2(b, y);
              _.subMul(n, B),
                (l -= m * h.crossVec2Vec2(x.rA, B)),
                u.addMul(a, B),
                (p += c * h.crossVec2Vec2(x.rB, B));
            }
          else {
            var I = this.v_points[0],
              z = this.v_points[1],
              P = h.neo(I.normalImpulse, z.normalImpulse),
              S = h
                .zero()
                .add(u)
                .add(h.crossNumVec2(p, I.rB))
                .sub(_)
                .sub(h.crossNumVec2(l, I.rA)),
              T = h
                .zero()
                .add(u)
                .add(h.crossNumVec2(p, z.rB))
                .sub(_)
                .sub(h.crossNumVec2(l, z.rA)),
              F = h.dot(S, y),
              q = h.dot(T, y),
              N = h.neo(F - I.velocityBias, q - z.velocityBias);
            for (N.sub(L.mulVec2(this.v_K, P)); ; ) {
              var k = L.mulVec2(this.v_normalMass, N).neg();
              if (k.x >= 0 && k.y >= 0) {
                var D = h.sub(k, P),
                  j = h.mulNumVec2(D.x, y),
                  R = h.mulNumVec2(D.y, y);
                _.subCombine(n, j, n, R),
                  (l -=
                    m * (h.crossVec2Vec2(I.rA, j) + h.crossVec2Vec2(z.rA, R))),
                  u.addCombine(a, j, a, R),
                  (p +=
                    c * (h.crossVec2Vec2(I.rB, j) + h.crossVec2Vec2(z.rB, R))),
                  (I.normalImpulse = k.x),
                  (z.normalImpulse = k.y);
                break;
              }
              if (
                ((k.x = -I.normalMass * N.x),
                (k.y = 0),
                (F = 0),
                (q = this.v_K.ex.y * k.x + N.y),
                k.x >= 0 && q >= 0)
              ) {
                (D = h.sub(k, P)),
                  (j = h.mulNumVec2(D.x, y)),
                  (R = h.mulNumVec2(D.y, y));
                _.subCombine(n, j, n, R),
                  (l -=
                    m * (h.crossVec2Vec2(I.rA, j) + h.crossVec2Vec2(z.rA, R))),
                  u.addCombine(a, j, a, R),
                  (p +=
                    c * (h.crossVec2Vec2(I.rB, j) + h.crossVec2Vec2(z.rB, R))),
                  (I.normalImpulse = k.x),
                  (z.normalImpulse = k.y);
                break;
              }
              if (
                ((k.x = 0),
                (k.y = -z.normalMass * N.y),
                (F = this.v_K.ey.x * k.y + N.x),
                (q = 0),
                k.y >= 0 && F >= 0)
              ) {
                (D = h.sub(k, P)),
                  (j = h.mulNumVec2(D.x, y)),
                  (R = h.mulNumVec2(D.y, y));
                _.subCombine(n, j, n, R),
                  (l -=
                    m * (h.crossVec2Vec2(I.rA, j) + h.crossVec2Vec2(z.rA, R))),
                  u.addCombine(a, j, a, R),
                  (p +=
                    c * (h.crossVec2Vec2(I.rB, j) + h.crossVec2Vec2(z.rB, R))),
                  (I.normalImpulse = k.x),
                  (z.normalImpulse = k.y);
                break;
              }
              if (
                ((k.x = 0), (k.y = 0), (F = N.x), (q = N.y), F >= 0 && q >= 0)
              ) {
                (D = h.sub(k, P)),
                  (j = h.mulNumVec2(D.x, y)),
                  (R = h.mulNumVec2(D.y, y));
                _.subCombine(n, j, n, R),
                  (l -=
                    m * (h.crossVec2Vec2(I.rA, j) + h.crossVec2Vec2(z.rA, R))),
                  u.addCombine(a, j, a, R),
                  (p +=
                    c * (h.crossVec2Vec2(I.rB, j) + h.crossVec2Vec2(z.rB, R))),
                  (I.normalImpulse = k.x),
                  (z.normalImpulse = k.y);
                break;
              }
              break;
            }
          }
          o.v.setVec2(_), (o.w = l), s.v.setVec2(u), (s.w = p);
        }),
        (t.addType = function (t, e, i) {
          (et[t] = et[t] || {}), (et[t][e] = i);
        }),
        (t.create = function (e, i, o, s) {
          var n,
            r,
            m = e.getType(),
            a = o.getType();
          if ((r = et[m] && et[m][a])) n = new t(e, i, o, s, r);
          else {
            if (!(r = et[a] && et[a][m])) return null;
            n = new t(o, s, e, i, r);
          }
          (e = n.getFixtureA()),
            (o = n.getFixtureB()),
            (i = n.getChildIndexA()),
            (s = n.getChildIndexB());
          var c = e.getBody(),
            h = o.getBody();
          return (
            (n.m_nodeA.contact = n),
            (n.m_nodeA.other = h),
            (n.m_nodeA.prev = null),
            (n.m_nodeA.next = c.m_contactList),
            null != c.m_contactList && (c.m_contactList.prev = n.m_nodeA),
            (c.m_contactList = n.m_nodeA),
            (n.m_nodeB.contact = n),
            (n.m_nodeB.other = c),
            (n.m_nodeB.prev = null),
            (n.m_nodeB.next = h.m_contactList),
            null != h.m_contactList && (h.m_contactList.prev = n.m_nodeB),
            (h.m_contactList = n.m_nodeB),
            0 == e.isSensor() &&
              0 == o.isSensor() &&
              (c.setAwake(!0), h.setAwake(!0)),
            n
          );
        }),
        (t.destroy = function (t, e) {
          var i = t.m_fixtureA,
            o = t.m_fixtureB,
            s = i.getBody(),
            n = o.getBody();
          t.isTouching() && e.endContact(t),
            t.m_nodeA.prev && (t.m_nodeA.prev.next = t.m_nodeA.next),
            t.m_nodeA.next && (t.m_nodeA.next.prev = t.m_nodeA.prev),
            t.m_nodeA == s.m_contactList && (s.m_contactList = t.m_nodeA.next),
            t.m_nodeB.prev && (t.m_nodeB.prev.next = t.m_nodeB.next),
            t.m_nodeB.next && (t.m_nodeB.next.prev = t.m_nodeB.prev),
            t.m_nodeB == n.m_contactList && (n.m_contactList = t.m_nodeB.next),
            t.m_manifold.pointCount > 0 &&
              0 == i.isSensor() &&
              0 == o.isSensor() &&
              (s.setAwake(!0), n.setAwake(!0)),
            i.getType(),
            o.getType();
        }),
        t
      );
    })(),
    st = function () {
      (this.other = null),
        (this.joint = null),
        (this.prev = null),
        (this.next = null);
    },
    nt = (function () {
      function t(t, e, i) {
        (this.m_type = "unknown-joint"),
          (this.m_prev = null),
          (this.m_next = null),
          (this.m_edgeA = new st()),
          (this.m_edgeB = new st()),
          (this.m_islandFlag = !1),
          (e = "bodyA" in t ? t.bodyA : e),
          (i = "bodyB" in t ? t.bodyB : i),
          (this.m_bodyA = e),
          (this.m_bodyB = i),
          (this.m_collideConnected = !!t.collideConnected),
          (this.m_userData = t.userData);
      }
      return (
        (t.prototype.isActive = function () {
          return this.m_bodyA.isActive() && this.m_bodyB.isActive();
        }),
        (t.prototype.getType = function () {
          return this.m_type;
        }),
        (t.prototype.getBodyA = function () {
          return this.m_bodyA;
        }),
        (t.prototype.getBodyB = function () {
          return this.m_bodyB;
        }),
        (t.prototype.getNext = function () {
          return this.m_next;
        }),
        (t.prototype.getUserData = function () {
          return this.m_userData;
        }),
        (t.prototype.setUserData = function (t) {
          this.m_userData = t;
        }),
        (t.prototype.getCollideConnected = function () {
          return this.m_collideConnected;
        }),
        (t.prototype.shiftOrigin = function (t) {}),
        t
      );
    })(),
    rt = function () {
      return Date.now();
    },
    mt = function (t) {
      return Date.now() - t;
    },
    at = function () {
      (this.proxyA = new Z()),
        (this.proxyB = new Z()),
        (this.sweepA = new A()),
        (this.sweepB = new A());
    };
  !(function (t) {
    (t[(t.e_unknown = 0)] = "e_unknown"),
      (t[(t.e_failed = 1)] = "e_failed"),
      (t[(t.e_overlapped = 2)] = "e_overlapped"),
      (t[(t.e_touching = 3)] = "e_touching"),
      (t[(t.e_separated = 4)] = "e_separated");
  })(tt || (tt = {}));
  var ct,
    ht = function () {};
  function _t(t, e) {
    var i = rt();
    ++O.toiCalls, (t.state = tt.e_unknown), (t.t = e.tMax);
    var o = e.proxyA,
      s = e.proxyB,
      n = e.sweepA,
      m = e.sweepB;
    n.normalize(), m.normalize();
    var a = e.tMax,
      c = o.m_radius + s.m_radius,
      h = r.max(l.linearSlop, c - 3 * l.linearSlop),
      _ = 0.25 * l.linearSlop,
      u = 0,
      p = l.maxTOIIterations,
      y = 0,
      d = new W(),
      f = new J();
    for (f.proxyA = e.proxyA, f.proxyB = e.proxyB, f.useRadii = !1; ; ) {
      var v = x.identity(),
        A = x.identity();
      n.getTransform(v, u),
        m.getTransform(A, u),
        (f.transformA = v),
        (f.transformB = A);
      var b = new Y();
      if ((H(b, d, f), b.distance <= 0)) {
        (t.state = tt.e_overlapped), (t.t = 0);
        break;
      }
      if (b.distance < h + _) {
        (t.state = tt.e_touching), (t.t = u);
        break;
      }
      var g = new lt();
      g.initialize(d, o, n, s, m, u);
      for (var B = !1, V = a, w = 0; ; ) {
        var C = g.findMinSeparation(V);
        if (C > h + _) {
          (t.state = tt.e_separated), (t.t = a), (B = !0);
          break;
        }
        if (C > h - _) {
          u = V;
          break;
        }
        var M = g.evaluate(u);
        if (M < h - _) {
          (t.state = tt.e_failed), (t.t = u), (B = !0);
          break;
        }
        if (M <= h + _) {
          (t.state = tt.e_touching), (t.t = u), (B = !0);
          break;
        }
        for (var I = 0, z = u, P = V; ; ) {
          var S = void 0;
          (S = 1 & I ? z + ((h - M) * (P - z)) / (C - M) : 0.5 * (z + P)),
            ++I,
            ++O.toiRootIters;
          var T = g.evaluate(S);
          if ((g.indexA, g.indexB, r.abs(T - h) < _)) {
            V = S;
            break;
          }
          if ((T > h ? ((z = S), (M = T)) : ((P = S), (C = T)), 50 === I))
            break;
        }
        if (
          ((O.toiMaxRootIters = r.max(O.toiMaxRootIters, I)),
          ++w === l.maxPolygonVertices)
        )
          break;
      }
      if ((++y, ++O.toiIters, B)) break;
      if (y === p) {
        (t.state = tt.e_failed), (t.t = u);
        break;
      }
    }
    O.toiMaxIters = r.max(O.toiMaxIters, y);
    var L = mt(i);
    (O.toiMaxTime = r.max(O.toiMaxTime, L)), (O.toiTime += L);
  }
  (O.toiTime = 0),
    (O.toiMaxTime = 0),
    (O.toiCalls = 0),
    (O.toiIters = 0),
    (O.toiMaxIters = 0),
    (O.toiRootIters = 0),
    (O.toiMaxRootIters = 0),
    (function (t) {
      (t[(t.e_points = 1)] = "e_points"),
        (t[(t.e_faceA = 2)] = "e_faceA"),
        (t[(t.e_faceB = 3)] = "e_faceB");
    })(ct || (ct = {}));
  var lt = (function () {
      function t() {
        (this.m_proxyA = new Z()),
          (this.m_proxyB = new Z()),
          (this.m_localPoint = h.zero()),
          (this.m_axis = h.zero());
      }
      return (
        (t.prototype.initialize = function (t, e, i, o, s, n) {
          (this.m_proxyA = e), (this.m_proxyB = o);
          var r = t.count;
          (this.m_sweepA = i), (this.m_sweepB = s);
          var m = x.identity(),
            a = x.identity();
          if (
            (this.m_sweepA.getTransform(m, n),
            this.m_sweepB.getTransform(a, n),
            1 === r)
          ) {
            this.m_type = ct.e_points;
            var c = this.m_proxyA.getVertex(t.indexA[0]),
              _ = this.m_proxyB.getVertex(t.indexB[0]),
              l = x.mulVec2(m, c),
              u = x.mulVec2(a, _);
            return (
              this.m_axis.setCombine(1, u, -1, l), (b = this.m_axis.normalize())
            );
          }
          if (t.indexA[0] === t.indexA[1]) {
            this.m_type = ct.e_faceB;
            var p = o.getVertex(t.indexB[0]),
              y = o.getVertex(t.indexB[1]);
            (this.m_axis = h.crossVec2Num(h.sub(y, p), 1)),
              this.m_axis.normalize();
            var d = v.mulVec2(a.q, this.m_axis);
            this.m_localPoint = h.mid(p, y);
            (u = x.mulVec2(a, this.m_localPoint)),
              (c = e.getVertex(t.indexA[0])),
              (l = x.mulVec2(m, c));
            return (
              (b = h.dot(l, d) - h.dot(u, d)) < 0 &&
                ((this.m_axis = h.neg(this.m_axis)), (b = -b)),
              b
            );
          }
          this.m_type = ct.e_faceA;
          var f = this.m_proxyA.getVertex(t.indexA[0]),
            A = this.m_proxyA.getVertex(t.indexA[1]);
          (this.m_axis = h.crossVec2Num(h.sub(A, f), 1)),
            this.m_axis.normalize();
          d = v.mulVec2(m.q, this.m_axis);
          this.m_localPoint = h.mid(f, A);
          var b;
          (l = x.mulVec2(m, this.m_localPoint)),
            (_ = this.m_proxyB.getVertex(t.indexB[0])),
            (u = x.mulVec2(a, _));
          return (
            (b = h.dot(u, d) - h.dot(l, d)) < 0 &&
              ((this.m_axis = h.neg(this.m_axis)), (b = -b)),
            b
          );
        }),
        (t.prototype.compute = function (t, e) {
          var i = x.identity(),
            o = x.identity();
          switch (
            (this.m_sweepA.getTransform(i, e),
            this.m_sweepB.getTransform(o, e),
            this.m_type)
          ) {
            case ct.e_points:
              if (t) {
                var s = v.mulTVec2(i.q, this.m_axis),
                  n = v.mulTVec2(o.q, h.neg(this.m_axis));
                (this.indexA = this.m_proxyA.getSupport(s)),
                  (this.indexB = this.m_proxyB.getSupport(n));
              }
              var r = this.m_proxyA.getVertex(this.indexA),
                m = this.m_proxyB.getVertex(this.indexB),
                a = x.mulVec2(i, r),
                c = x.mulVec2(o, m);
              return h.dot(c, this.m_axis) - h.dot(a, this.m_axis);
            case ct.e_faceA:
              var _ = v.mulVec2(i.q, this.m_axis);
              a = x.mulVec2(i, this.m_localPoint);
              if (t) {
                n = v.mulTVec2(o.q, h.neg(_));
                (this.indexA = -1), (this.indexB = this.m_proxyB.getSupport(n));
              }
              (m = this.m_proxyB.getVertex(this.indexB)), (c = x.mulVec2(o, m));
              return h.dot(c, _) - h.dot(a, _);
            case ct.e_faceB:
              (_ = v.mulVec2(o.q, this.m_axis)),
                (c = x.mulVec2(o, this.m_localPoint));
              if (t) {
                s = v.mulTVec2(i.q, h.neg(_));
                (this.indexB = -1), (this.indexA = this.m_proxyA.getSupport(s));
              }
              (r = this.m_proxyA.getVertex(this.indexA)), (a = x.mulVec2(i, r));
              return h.dot(a, _) - h.dot(c, _);
            default:
              return t && ((this.indexA = -1), (this.indexB = -1)), 0;
          }
        }),
        (t.prototype.findMinSeparation = function (t) {
          return this.compute(!0, t);
        }),
        (t.prototype.evaluate = function (t) {
          return this.compute(!1, t);
        }),
        t
      );
    })(),
    ut = (function () {
      function t() {
        (this.dt = 0),
          (this.inv_dt = 0),
          (this.velocityIterations = 0),
          (this.positionIterations = 0),
          (this.warmStarting = !1),
          (this.blockSolve = !0),
          (this.inv_dt0 = 0),
          (this.dtRatio = 1);
      }
      return (
        (t.prototype.reset = function (t) {
          this.dt > 0 && (this.inv_dt0 = this.inv_dt),
            (this.dt = t),
            (this.inv_dt = 0 == t ? 0 : 1 / t),
            (this.dtRatio = t * this.inv_dt0);
        }),
        t
      );
    })(),
    pt = new ut(),
    yt = (function () {
      function t(t) {
        (this.contact = t), (this.normals = []), (this.tangents = []);
      }
      return (
        Object.defineProperty(t.prototype, "normalImpulses", {
          get: function () {
            var t = this.contact,
              e = this.normals;
            e.length = 0;
            for (var i = 0; i < t.v_points.length; ++i)
              e.push(t.v_points[i].normalImpulse);
            return e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "tangentImpulses", {
          get: function () {
            var t = this.contact,
              e = this.tangents;
            e.length = 0;
            for (var i = 0; i < t.v_points.length; ++i)
              e.push(t.v_points[i].tangentImpulse);
            return e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(),
    dt = (function () {
      function t(t) {
        (this.m_world = t),
          (this.m_stack = []),
          (this.m_bodies = []),
          (this.m_contacts = []),
          (this.m_joints = []);
      }
      return (
        (t.prototype.clear = function () {
          (this.m_stack.length = 0),
            (this.m_bodies.length = 0),
            (this.m_contacts.length = 0),
            (this.m_joints.length = 0);
        }),
        (t.prototype.addBody = function (t) {
          this.m_bodies.push(t);
        }),
        (t.prototype.addContact = function (t) {
          this.m_contacts.push(t);
        }),
        (t.prototype.addJoint = function (t) {
          this.m_joints.push(t);
        }),
        (t.prototype.solveWorld = function (t) {
          for (var e = this.m_world, i = e.m_bodyList; i; i = i.m_next)
            i.m_islandFlag = !1;
          for (var o = e.m_contactList; o; o = o.m_next) o.m_islandFlag = !1;
          for (var s = e.m_jointList; s; s = s.m_next) s.m_islandFlag = !1;
          for (var n = this.m_stack, r = e.m_bodyList; r; r = r.m_next)
            if (
              !r.m_islandFlag &&
              0 != r.isAwake() &&
              0 != r.isActive() &&
              !r.isStatic()
            ) {
              for (
                this.clear(), n.push(r), r.m_islandFlag = !0;
                n.length > 0;

              ) {
                i = n.pop();
                if ((this.addBody(i), i.setAwake(!0), !i.isStatic())) {
                  for (var m = i.m_contactList; m; m = m.next) {
                    var a = m.contact;
                    if (
                      !a.m_islandFlag &&
                      0 != a.isEnabled() &&
                      0 != a.isTouching()
                    ) {
                      var c = a.m_fixtureA.m_isSensor,
                        h = a.m_fixtureB.m_isSensor;
                      if (!c && !h)
                        this.addContact(a),
                          (a.m_islandFlag = !0),
                          (l = m.other).m_islandFlag ||
                            (n.push(l), (l.m_islandFlag = !0));
                    }
                  }
                  for (var _ = i.m_jointList; _; _ = _.next) {
                    var l;
                    if (1 != _.joint.m_islandFlag)
                      0 != (l = _.other).isActive() &&
                        (this.addJoint(_.joint),
                        (_.joint.m_islandFlag = !0),
                        l.m_islandFlag || (n.push(l), (l.m_islandFlag = !0)));
                  }
                }
              }
              this.solveIsland(t);
              for (var u = 0; u < this.m_bodies.length; ++u) {
                (i = this.m_bodies[u]).isStatic() && (i.m_islandFlag = !1);
              }
            }
        }),
        (t.prototype.solveIsland = function (t) {
          for (
            var e = this.m_world,
              i = e.m_gravity,
              o = e.m_allowSleep,
              s = t.dt,
              n = 0;
            n < this.m_bodies.length;
            ++n
          ) {
            var m = this.m_bodies[n],
              a = h.clone(m.m_sweep.c),
              c = m.m_sweep.a,
              _ = h.clone(m.m_linearVelocity),
              u = m.m_angularVelocity;
            m.m_sweep.c0.setVec2(m.m_sweep.c),
              (m.m_sweep.a0 = m.m_sweep.a),
              m.isDynamic() &&
                (_.addMul(s * m.m_gravityScale, i),
                _.addMul(s * m.m_invMass, m.m_force),
                (u += s * m.m_invI * m.m_torque),
                _.mul(1 / (1 + s * m.m_linearDamping)),
                (u *= 1 / (1 + s * m.m_angularDamping))),
              (m.c_position.c = a),
              (m.c_position.a = c),
              (m.c_velocity.v = _),
              (m.c_velocity.w = u);
          }
          for (n = 0; n < this.m_contacts.length; ++n) {
            this.m_contacts[n].initConstraint(t);
          }
          for (n = 0; n < this.m_contacts.length; ++n) {
            this.m_contacts[n].initVelocityConstraint(t);
          }
          if (t.warmStarting)
            for (n = 0; n < this.m_contacts.length; ++n) {
              this.m_contacts[n].warmStartConstraint(t);
            }
          for (n = 0; n < this.m_joints.length; ++n) {
            this.m_joints[n].initVelocityConstraints(t);
          }
          for (n = 0; n < t.velocityIterations; ++n) {
            for (var p = 0; p < this.m_joints.length; ++p) {
              this.m_joints[p].solveVelocityConstraints(t);
            }
            for (p = 0; p < this.m_contacts.length; ++p) {
              this.m_contacts[p].solveVelocityConstraint(t);
            }
          }
          for (n = 0; n < this.m_contacts.length; ++n) {
            this.m_contacts[n].storeConstraintImpulses(t);
          }
          for (n = 0; n < this.m_bodies.length; ++n) {
            (m = this.m_bodies[n]),
              (a = h.clone(m.c_position.c)),
              (c = m.c_position.a),
              (_ = h.clone(m.c_velocity.v)),
              (u = m.c_velocity.w);
            var y = h.mulNumVec2(s, _);
            if (h.lengthSquared(y) > l.maxTranslationSquared) {
              var d = l.maxTranslation / y.length();
              _.mul(d);
            }
            var f = s * u;
            if (f * f > l.maxRotationSquared) u *= d = l.maxRotation / r.abs(f);
            a.addMul(s, _),
              (c += s * u),
              m.c_position.c.setVec2(a),
              (m.c_position.a = c),
              m.c_velocity.v.setVec2(_),
              (m.c_velocity.w = u);
          }
          var v = !1;
          for (n = 0; n < t.positionIterations; ++n) {
            var x = 0;
            for (p = 0; p < this.m_contacts.length; ++p) {
              var A = this.m_contacts[p].solvePositionConstraint(t);
              x = r.min(x, A);
            }
            var b = x >= -3 * l.linearSlop,
              g = !0;
            for (p = 0; p < this.m_joints.length; ++p) {
              var B = this.m_joints[p].solvePositionConstraints(t);
              g = g && B;
            }
            if (b && g) {
              v = !0;
              break;
            }
          }
          for (n = 0; n < this.m_bodies.length; ++n) {
            (m = this.m_bodies[n]).m_sweep.c.setVec2(m.c_position.c),
              (m.m_sweep.a = m.c_position.a),
              m.m_linearVelocity.setVec2(m.c_velocity.v),
              (m.m_angularVelocity = m.c_velocity.w),
              m.synchronizeTransform();
          }
          if ((this.postSolveIsland(), o)) {
            var V = 1 / 0,
              w = l.linearSleepToleranceSqr,
              C = l.angularSleepToleranceSqr;
            for (n = 0; n < this.m_bodies.length; ++n) {
              (m = this.m_bodies[n]).isStatic() ||
                (0 == m.m_autoSleepFlag ||
                m.m_angularVelocity * m.m_angularVelocity > C ||
                h.lengthSquared(m.m_linearVelocity) > w
                  ? ((m.m_sleepTime = 0), (V = 0))
                  : ((m.m_sleepTime += s), (V = r.min(V, m.m_sleepTime))));
            }
            if (V >= l.timeToSleep && v)
              for (n = 0; n < this.m_bodies.length; ++n) {
                (m = this.m_bodies[n]).setAwake(!1);
              }
          }
        }),
        (t.prototype.printBodies = function (t) {
          for (var e = 0; e < this.m_bodies.length; ++e) {
            var i = this.m_bodies[e];
            n(
              t,
              i.c_position.a,
              i.c_position.c.x,
              i.c_position.c.y,
              i.c_velocity.w,
              i.c_velocity.v.x,
              i.c_velocity.v.y
            );
          }
        }),
        (t.prototype.solveWorldTOI = function (t) {
          var e = this.m_world;
          if (e.m_stepComplete) {
            for (var i = e.m_bodyList; i; i = i.m_next)
              (i.m_islandFlag = !1), (i.m_sweep.alpha0 = 0);
            for (var o = e.m_contactList; o; o = o.m_next)
              (o.m_toiFlag = !1),
                (o.m_islandFlag = !1),
                (o.m_toiCount = 0),
                (o.m_toi = 1);
          }
          for (;;) {
            for (var s = null, n = 1, o = e.m_contactList; o; o = o.m_next)
              if (0 != o.isEnabled() && !(o.m_toiCount > l.maxSubSteps)) {
                var m = 1;
                if (o.m_toiFlag) m = o.m_toi;
                else {
                  var a = o.getFixtureA(),
                    c = o.getFixtureB();
                  if (a.isSensor() || c.isSensor()) continue;
                  var h = a.getBody(),
                    _ = c.getBody(),
                    u = h.isAwake() && !h.isStatic(),
                    p = _.isAwake() && !_.isStatic();
                  if (0 == u && 0 == p) continue;
                  var y = h.isBullet() || !h.isDynamic(),
                    d = _.isBullet() || !_.isDynamic();
                  if (0 == y && 0 == d) continue;
                  var f = h.m_sweep.alpha0;
                  h.m_sweep.alpha0 < _.m_sweep.alpha0
                    ? ((f = _.m_sweep.alpha0), h.m_sweep.advance(f))
                    : _.m_sweep.alpha0 < h.m_sweep.alpha0 &&
                      ((f = h.m_sweep.alpha0), _.m_sweep.advance(f));
                  var v = o.getChildIndexA(),
                    x = o.getChildIndexB();
                  h.m_sweep, _.m_sweep;
                  var A = new at();
                  A.proxyA.set(a.getShape(), v),
                    A.proxyB.set(c.getShape(), x),
                    A.sweepA.set(h.m_sweep),
                    A.sweepB.set(_.m_sweep),
                    (A.tMax = 1);
                  var b = new ht();
                  _t(b, A);
                  var g = b.t;
                  (m =
                    b.state == tt.e_touching ? r.min(f + (1 - f) * g, 1) : 1),
                    (o.m_toi = m),
                    (o.m_toiFlag = !0);
                }
                m < n && ((s = o), (n = m));
              }
            if (null == s || 1 - 10 * r.EPSILON < n) {
              e.m_stepComplete = !0;
              break;
            }
            var B = s.getFixtureA(),
              V = s.getFixtureB(),
              w = B.getBody(),
              C = V.getBody(),
              M = w.m_sweep.clone(),
              I = C.m_sweep.clone();
            if (
              (w.advance(n),
              C.advance(n),
              s.update(e),
              (s.m_toiFlag = !1),
              ++s.m_toiCount,
              0 != s.isEnabled() && 0 != s.isTouching())
            ) {
              w.setAwake(!0),
                C.setAwake(!0),
                this.clear(),
                this.addBody(w),
                this.addBody(C),
                this.addContact(s),
                (w.m_islandFlag = !0),
                (C.m_islandFlag = !0),
                (s.m_islandFlag = !0);
              for (var z = [w, C], P = 0; P < z.length; ++P) {
                if ((k = z[P]).isDynamic())
                  for (var S = k.m_contactList; S; S = S.next) {
                    var T = S.contact;
                    if (!T.m_islandFlag) {
                      var L = S.other;
                      if (!L.isDynamic() || k.isBullet() || L.isBullet()) {
                        var F = T.m_fixtureA.m_isSensor,
                          q = T.m_fixtureB.m_isSensor;
                        if (!F && !q) {
                          var N = L.m_sweep.clone();
                          0 == L.m_islandFlag && L.advance(n),
                            T.update(e),
                            0 != T.isEnabled() && 0 != T.isTouching()
                              ? ((T.m_islandFlag = !0),
                                this.addContact(T),
                                L.m_islandFlag ||
                                  ((L.m_islandFlag = !0),
                                  L.isStatic() || L.setAwake(!0),
                                  this.addBody(L)))
                              : (L.m_sweep.set(N), L.synchronizeTransform());
                        }
                      }
                    }
                  }
              }
              pt.reset((1 - n) * t.dt),
                (pt.dtRatio = 1),
                (pt.positionIterations = 20),
                (pt.velocityIterations = t.velocityIterations),
                (pt.warmStarting = !1),
                this.solveIslandTOI(pt, w, C);
              for (P = 0; P < this.m_bodies.length; ++P) {
                var k;
                if (
                  (((k = this.m_bodies[P]).m_islandFlag = !1), k.isDynamic())
                ) {
                  k.synchronizeFixtures();
                  for (S = k.m_contactList; S; S = S.next)
                    (S.contact.m_toiFlag = !1), (S.contact.m_islandFlag = !1);
                }
              }
              if ((e.findNewContacts(), e.m_subStepping)) {
                e.m_stepComplete = !1;
                break;
              }
            } else
              s.setEnabled(!1),
                w.m_sweep.set(M),
                C.m_sweep.set(I),
                w.synchronizeTransform(),
                C.synchronizeTransform();
          }
        }),
        (t.prototype.solveIslandTOI = function (t, e, i) {
          this.m_world;
          for (var o = 0; o < this.m_bodies.length; ++o) {
            (c = this.m_bodies[o]).c_position.c.setVec2(c.m_sweep.c),
              (c.c_position.a = c.m_sweep.a),
              c.c_velocity.v.setVec2(c.m_linearVelocity),
              (c.c_velocity.w = c.m_angularVelocity);
          }
          for (o = 0; o < this.m_contacts.length; ++o) {
            this.m_contacts[o].initConstraint(t);
          }
          for (o = 0; o < t.positionIterations; ++o) {
            for (var s = 0, n = 0; n < this.m_contacts.length; ++n) {
              var m = this.m_contacts[n].solvePositionConstraintTOI(t, e, i);
              s = r.min(s, m);
            }
            if (s >= -1.5 * l.linearSlop) break;
          }
          e.m_sweep.c0.setVec2(e.c_position.c),
            (e.m_sweep.a0 = e.c_position.a),
            i.m_sweep.c0.setVec2(i.c_position.c),
            (i.m_sweep.a0 = i.c_position.a);
          for (o = 0; o < this.m_contacts.length; ++o) {
            this.m_contacts[o].initVelocityConstraint(t);
          }
          for (o = 0; o < t.velocityIterations; ++o)
            for (n = 0; n < this.m_contacts.length; ++n) {
              this.m_contacts[n].solveVelocityConstraint(t);
            }
          var a = t.dt;
          for (o = 0; o < this.m_bodies.length; ++o) {
            var c = this.m_bodies[o],
              _ = h.clone(c.c_position.c),
              u = c.c_position.a,
              p = h.clone(c.c_velocity.v),
              y = c.c_velocity.w,
              d = h.mulNumVec2(a, p);
            if (h.dot(d, d) > l.maxTranslationSquared) {
              var f = l.maxTranslation / d.length();
              p.mul(f);
            }
            var v = a * y;
            if (v * v > l.maxRotationSquared) y *= f = l.maxRotation / r.abs(v);
            _.addMul(a, p),
              (u += a * y),
              (c.c_position.c = _),
              (c.c_position.a = u),
              (c.c_velocity.v = p),
              (c.c_velocity.w = y),
              (c.m_sweep.c = _),
              (c.m_sweep.a = u),
              (c.m_linearVelocity = p),
              (c.m_angularVelocity = y),
              c.synchronizeTransform();
          }
          this.postSolveIsland();
        }),
        (t.prototype.postSolveIsland = function () {
          for (var t = 0; t < this.m_contacts.length; ++t) {
            var e = this.m_contacts[t];
            this.m_world.postSolve(e, e.m_impulse);
          }
        }),
        t
      );
    })(),
    ft = {
      gravity: h.zero(),
      allowSleep: !0,
      warmStarting: !0,
      continuousPhysics: !0,
      subStepping: !1,
      blockSolve: !0,
      velocityIterations: 8,
      positionIterations: 3,
    },
    vt = (function () {
      function t(e) {
        var i = this;
        if (
          ((this.s_step = new ut()),
          (this.createContact = function (t, e) {
            var o = t.fixture,
              s = e.fixture,
              n = t.childIndex,
              r = e.childIndex,
              m = o.getBody(),
              a = s.getBody();
            if (m != a) {
              for (var c = a.getContactList(); c; ) {
                if (c.other == m) {
                  var h = c.contact.getFixtureA(),
                    _ = c.contact.getFixtureB(),
                    l = c.contact.getChildIndexA(),
                    u = c.contact.getChildIndexB();
                  if (h == o && _ == s && l == n && u == r) return;
                  if (h == s && _ == o && l == r && u == n) return;
                }
                c = c.next;
              }
              if (0 != a.shouldCollide(m) && 0 != s.shouldCollide(o)) {
                var p = ot.create(o, n, s, r);
                null != p &&
                  ((p.m_prev = null),
                  null != i.m_contactList &&
                    ((p.m_next = i.m_contactList),
                    (i.m_contactList.m_prev = p)),
                  (i.m_contactList = p),
                  ++i.m_contactCount);
              }
            }
          }),
          !(this instanceof t))
        )
          return new t(e);
        e && h.isValid(e) && (e = { gravity: e }),
          (e = s(e, ft)),
          (this.m_solver = new dt(this)),
          (this.m_broadPhase = new f()),
          (this.m_contactList = null),
          (this.m_contactCount = 0),
          (this.m_bodyList = null),
          (this.m_bodyCount = 0),
          (this.m_jointList = null),
          (this.m_jointCount = 0),
          (this.m_stepComplete = !0),
          (this.m_allowSleep = e.allowSleep),
          (this.m_gravity = h.clone(e.gravity)),
          (this.m_clearForces = !0),
          (this.m_newFixture = !1),
          (this.m_locked = !1),
          (this.m_warmStarting = e.warmStarting),
          (this.m_continuousPhysics = e.continuousPhysics),
          (this.m_subStepping = e.subStepping),
          (this.m_blockSolve = e.blockSolve),
          (this.m_velocityIterations = e.velocityIterations),
          (this.m_positionIterations = e.positionIterations),
          (this.m_t = 0);
      }
      return (
        (t.prototype._serialize = function () {
          for (var t = [], e = [], i = this.getBodyList(); i; i = i.getNext())
            t.push(i);
          for (var o = this.getJointList(); o; o = o.getNext())
            "function" == typeof o._serialize && e.push(o);
          return { gravity: this.m_gravity, bodies: t, joints: e };
        }),
        (t._deserialize = function (e, i, o) {
          if (!e) return new t();
          var s = new t(e.gravity);
          if (e.bodies)
            for (var n = e.bodies.length - 1; n >= 0; n -= 1)
              s._addBody(o(T, e.bodies[n], s));
          if (e.joints)
            for (n = e.joints.length - 1; n >= 0; n--)
              s.createJoint(o(nt, e.joints[n], s));
          return s;
        }),
        (t.prototype.getBodyList = function () {
          return this.m_bodyList;
        }),
        (t.prototype.getJointList = function () {
          return this.m_jointList;
        }),
        (t.prototype.getContactList = function () {
          return this.m_contactList;
        }),
        (t.prototype.getBodyCount = function () {
          return this.m_bodyCount;
        }),
        (t.prototype.getJointCount = function () {
          return this.m_jointCount;
        }),
        (t.prototype.getContactCount = function () {
          return this.m_contactCount;
        }),
        (t.prototype.setGravity = function (t) {
          this.m_gravity = t;
        }),
        (t.prototype.getGravity = function () {
          return this.m_gravity;
        }),
        (t.prototype.isLocked = function () {
          return this.m_locked;
        }),
        (t.prototype.setAllowSleeping = function (t) {
          if (
            t != this.m_allowSleep &&
            ((this.m_allowSleep = t), 0 == this.m_allowSleep)
          )
            for (var e = this.m_bodyList; e; e = e.m_next) e.setAwake(!0);
        }),
        (t.prototype.getAllowSleeping = function () {
          return this.m_allowSleep;
        }),
        (t.prototype.setWarmStarting = function (t) {
          this.m_warmStarting = t;
        }),
        (t.prototype.getWarmStarting = function () {
          return this.m_warmStarting;
        }),
        (t.prototype.setContinuousPhysics = function (t) {
          this.m_continuousPhysics = t;
        }),
        (t.prototype.getContinuousPhysics = function () {
          return this.m_continuousPhysics;
        }),
        (t.prototype.setSubStepping = function (t) {
          this.m_subStepping = t;
        }),
        (t.prototype.getSubStepping = function () {
          return this.m_subStepping;
        }),
        (t.prototype.setAutoClearForces = function (t) {
          this.m_clearForces = t;
        }),
        (t.prototype.getAutoClearForces = function () {
          return this.m_clearForces;
        }),
        (t.prototype.clearForces = function () {
          for (var t = this.m_bodyList; t; t = t.getNext())
            t.m_force.setZero(), (t.m_torque = 0);
        }),
        (t.prototype.queryAABB = function (t, e) {
          var i = this.m_broadPhase;
          this.m_broadPhase.query(t, function (t) {
            var o = i.getUserData(t);
            return e(o.fixture);
          });
        }),
        (t.prototype.rayCast = function (t, e, i) {
          var o = this.m_broadPhase;
          this.m_broadPhase.rayCast(
            { maxFraction: 1, p1: t, p2: e },
            function (t, e) {
              var s = o.getUserData(e),
                n = s.fixture,
                r = s.childIndex,
                m = {};
              if (n.rayCast(m, t, r)) {
                var a = m.fraction,
                  c = h.add(h.mulNumVec2(1 - a, t.p1), h.mulNumVec2(a, t.p2));
                return i(n, c, m.normal, a);
              }
              return t.maxFraction;
            }
          );
        }),
        (t.prototype.getProxyCount = function () {
          return this.m_broadPhase.getProxyCount();
        }),
        (t.prototype.getTreeHeight = function () {
          return this.m_broadPhase.getTreeHeight();
        }),
        (t.prototype.getTreeBalance = function () {
          return this.m_broadPhase.getTreeBalance();
        }),
        (t.prototype.getTreeQuality = function () {
          return this.m_broadPhase.getTreeQuality();
        }),
        (t.prototype.shiftOrigin = function (t) {
          if (!this.m_locked) {
            for (var e = this.m_bodyList; e; e = e.m_next)
              e.m_xf.p.sub(t), e.m_sweep.c0.sub(t), e.m_sweep.c.sub(t);
            for (var i = this.m_jointList; i; i = i.m_next) i.shiftOrigin(t);
            this.m_broadPhase.shiftOrigin(t);
          }
        }),
        (t.prototype._addBody = function (t) {
          this.isLocked() ||
            ((t.m_prev = null),
            (t.m_next = this.m_bodyList),
            this.m_bodyList && (this.m_bodyList.m_prev = t),
            (this.m_bodyList = t),
            ++this.m_bodyCount);
        }),
        (t.prototype.createBody = function (t, e) {
          if (this.isLocked()) return null;
          var i = {};
          t &&
            (h.isValid(t)
              ? (i = { position: t, angle: e })
              : "object" == typeof t && (i = t));
          var o = new T(this, i);
          return this._addBody(o), o;
        }),
        (t.prototype.createDynamicBody = function (t, e) {
          var i = {};
          return (
            t &&
              (h.isValid(t)
                ? (i = { position: t, angle: e })
                : "object" == typeof t && (i = t)),
            (i.type = "dynamic"),
            this.createBody(i)
          );
        }),
        (t.prototype.createKinematicBody = function (t, e) {
          var i = {};
          return (
            t &&
              (h.isValid(t)
                ? (i = { position: t, angle: e })
                : "object" == typeof t && (i = t)),
            (i.type = "kinematic"),
            this.createBody(i)
          );
        }),
        (t.prototype.destroyBody = function (t) {
          if (!this.isLocked()) {
            if (t.m_destroyed) return !1;
            for (var e = t.m_jointList; e; ) {
              var i = e;
              (e = e.next),
                this.publish("remove-joint", i.joint),
                this.destroyJoint(i.joint),
                (t.m_jointList = e);
            }
            t.m_jointList = null;
            for (var o = t.m_contactList; o; ) {
              var s = o;
              (o = o.next),
                this.destroyContact(s.contact),
                (t.m_contactList = o);
            }
            t.m_contactList = null;
            for (var n = t.m_fixtureList; n; ) {
              var r = n;
              (n = n.m_next),
                this.publish("remove-fixture", r),
                r.destroyProxies(this.m_broadPhase),
                (t.m_fixtureList = n);
            }
            return (
              (t.m_fixtureList = null),
              t.m_prev && (t.m_prev.m_next = t.m_next),
              t.m_next && (t.m_next.m_prev = t.m_prev),
              t == this.m_bodyList && (this.m_bodyList = t.m_next),
              (t.m_destroyed = !0),
              --this.m_bodyCount,
              this.publish("remove-body", t),
              !0
            );
          }
        }),
        (t.prototype.createJoint = function (t) {
          if (this.isLocked()) return null;
          if (
            ((t.m_prev = null),
            (t.m_next = this.m_jointList),
            this.m_jointList && (this.m_jointList.m_prev = t),
            (this.m_jointList = t),
            ++this.m_jointCount,
            (t.m_edgeA.joint = t),
            (t.m_edgeA.other = t.m_bodyB),
            (t.m_edgeA.prev = null),
            (t.m_edgeA.next = t.m_bodyA.m_jointList),
            t.m_bodyA.m_jointList && (t.m_bodyA.m_jointList.prev = t.m_edgeA),
            (t.m_bodyA.m_jointList = t.m_edgeA),
            (t.m_edgeB.joint = t),
            (t.m_edgeB.other = t.m_bodyA),
            (t.m_edgeB.prev = null),
            (t.m_edgeB.next = t.m_bodyB.m_jointList),
            t.m_bodyB.m_jointList && (t.m_bodyB.m_jointList.prev = t.m_edgeB),
            (t.m_bodyB.m_jointList = t.m_edgeB),
            0 == t.m_collideConnected)
          )
            for (var e = t.m_bodyB.getContactList(); e; e = e.next)
              e.other == t.m_bodyA && e.contact.flagForFiltering();
          return t;
        }),
        (t.prototype.destroyJoint = function (t) {
          if (!this.isLocked()) {
            t.m_prev && (t.m_prev.m_next = t.m_next),
              t.m_next && (t.m_next.m_prev = t.m_prev),
              t == this.m_jointList && (this.m_jointList = t.m_next);
            var e = t.m_bodyA,
              i = t.m_bodyB;
            if (
              (e.setAwake(!0),
              i.setAwake(!0),
              t.m_edgeA.prev && (t.m_edgeA.prev.next = t.m_edgeA.next),
              t.m_edgeA.next && (t.m_edgeA.next.prev = t.m_edgeA.prev),
              t.m_edgeA == e.m_jointList && (e.m_jointList = t.m_edgeA.next),
              (t.m_edgeA.prev = null),
              (t.m_edgeA.next = null),
              t.m_edgeB.prev && (t.m_edgeB.prev.next = t.m_edgeB.next),
              t.m_edgeB.next && (t.m_edgeB.next.prev = t.m_edgeB.prev),
              t.m_edgeB == i.m_jointList && (i.m_jointList = t.m_edgeB.next),
              (t.m_edgeB.prev = null),
              (t.m_edgeB.next = null),
              --this.m_jointCount,
              0 == t.m_collideConnected)
            )
              for (var o = i.getContactList(); o; )
                o.other == e && o.contact.flagForFiltering(), (o = o.next);
            this.publish("remove-joint", t);
          }
        }),
        (t.prototype.step = function (t, e, i) {
          if (
            (this.publish("pre-step", t),
            (0 | e) !== e && (e = 0),
            (e = e || this.m_velocityIterations),
            (i = i || this.m_positionIterations),
            this.m_newFixture &&
              (this.findNewContacts(), (this.m_newFixture = !1)),
            (this.m_locked = !0),
            this.s_step.reset(t),
            (this.s_step.velocityIterations = e),
            (this.s_step.positionIterations = i),
            (this.s_step.warmStarting = this.m_warmStarting),
            (this.s_step.blockSolve = this.m_blockSolve),
            this.updateContacts(),
            this.m_stepComplete && t > 0)
          ) {
            this.m_solver.solveWorld(this.s_step);
            for (var o = this.m_bodyList; o; o = o.getNext())
              0 != o.m_islandFlag && (o.isStatic() || o.synchronizeFixtures());
            this.findNewContacts();
          }
          this.m_continuousPhysics &&
            t > 0 &&
            this.m_solver.solveWorldTOI(this.s_step),
            this.m_clearForces && this.clearForces(),
            (this.m_locked = !1),
            this.publish("post-step", t);
        }),
        (t.prototype.findNewContacts = function () {
          this.m_broadPhase.updatePairs(this.createContact);
        }),
        (t.prototype.updateContacts = function () {
          for (var t, e = this.m_contactList; (t = e); ) {
            e = t.getNext();
            var i = t.getFixtureA(),
              o = t.getFixtureB(),
              s = t.getChildIndexA(),
              n = t.getChildIndexB(),
              r = i.getBody(),
              m = o.getBody();
            if (t.m_filterFlag) {
              if (0 == m.shouldCollide(r)) {
                this.destroyContact(t);
                continue;
              }
              if (0 == o.shouldCollide(i)) {
                this.destroyContact(t);
                continue;
              }
              t.m_filterFlag = !1;
            }
            var a = r.isAwake() && !r.isStatic(),
              c = m.isAwake() && !m.isStatic();
            if (0 != a || 0 != c) {
              var h = i.m_proxies[s].proxyId,
                _ = o.m_proxies[n].proxyId;
              0 != this.m_broadPhase.testOverlap(h, _)
                ? t.update(this)
                : this.destroyContact(t);
            }
          }
        }),
        (t.prototype.destroyContact = function (t) {
          ot.destroy(t, this),
            t.m_prev && (t.m_prev.m_next = t.m_next),
            t.m_next && (t.m_next.m_prev = t.m_prev),
            t == this.m_contactList && (this.m_contactList = t.m_next),
            --this.m_contactCount;
        }),
        (t.prototype.on = function (t, e) {
          return (
            "string" != typeof t ||
              "function" != typeof e ||
              (this._listeners || (this._listeners = {}),
              this._listeners[t] || (this._listeners[t] = []),
              this._listeners[t].push(e)),
            this
          );
        }),
        (t.prototype.off = function (t, e) {
          if ("string" != typeof t || "function" != typeof e) return this;
          var i = this._listeners && this._listeners[t];
          if (!i || !i.length) return this;
          var o = i.indexOf(e);
          return o >= 0 && i.splice(o, 1), this;
        }),
        (t.prototype.publish = function (t, e, i, o) {
          var s = this._listeners && this._listeners[t];
          if (!s || !s.length) return 0;
          for (var n = 0; n < s.length; n++) s[n].call(this, e, i, o);
          return s.length;
        }),
        (t.prototype.beginContact = function (t) {
          this.publish("begin-contact", t);
        }),
        (t.prototype.endContact = function (t) {
          this.publish("end-contact", t);
        }),
        (t.prototype.preSolve = function (t, e) {
          this.publish("pre-solve", t, e);
        }),
        (t.prototype.postSolve = function (t, e) {
          this.publish("post-solve", t, e);
        }),
        t
      );
    })(),
    xt = (function () {
      function t(e, i, o) {
        if (!(this instanceof t)) return new t(e, i, o);
        void 0 === e
          ? ((this.x = 0), (this.y = 0), (this.z = 0))
          : "object" == typeof e
          ? ((this.x = e.x), (this.y = e.y), (this.z = e.z))
          : ((this.x = e), (this.y = i), (this.z = o));
      }
      return (
        (t.prototype._serialize = function () {
          return { x: this.x, y: this.y, z: this.z };
        }),
        (t._deserialize = function (e) {
          var i = Object.create(t.prototype);
          return (i.x = e.x), (i.y = e.y), (i.z = e.z), i;
        }),
        (t.neo = function (e, i, o) {
          var s = Object.create(t.prototype);
          return (s.x = e), (s.y = i), (s.z = o), s;
        }),
        (t.zero = function () {
          var e = Object.create(t.prototype);
          return (e.x = 0), (e.y = 0), (e.z = 0), e;
        }),
        (t.clone = function (e) {
          return t.neo(e.x, e.y, e.z);
        }),
        (t.prototype.toString = function () {
          return JSON.stringify(this);
        }),
        (t.isValid = function (t) {
          return (
            null != t && r.isFinite(t.x) && r.isFinite(t.y) && r.isFinite(t.z)
          );
        }),
        (t.assert = function (t) {}),
        (t.prototype.setZero = function () {
          return (this.x = 0), (this.y = 0), (this.z = 0), this;
        }),
        (t.prototype.set = function (t, e, i) {
          return (this.x = t), (this.y = e), (this.z = i), this;
        }),
        (t.prototype.add = function (t) {
          return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
        }),
        (t.prototype.sub = function (t) {
          return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
        }),
        (t.prototype.mul = function (t) {
          return (this.x *= t), (this.y *= t), (this.z *= t), this;
        }),
        (t.areEqual = function (t, e) {
          return (
            t === e ||
            ("object" == typeof t &&
              null !== t &&
              "object" == typeof e &&
              null !== e &&
              t.x === e.x &&
              t.y === e.y &&
              t.z === e.z)
          );
        }),
        (t.dot = function (t, e) {
          return t.x * e.x + t.y * e.y + t.z * e.z;
        }),
        (t.cross = function (e, i) {
          return new t(
            e.y * i.z - e.z * i.y,
            e.z * i.x - e.x * i.z,
            e.x * i.y - e.y * i.x
          );
        }),
        (t.add = function (e, i) {
          return new t(e.x + i.x, e.y + i.y, e.z + i.z);
        }),
        (t.sub = function (e, i) {
          return new t(e.x - i.x, e.y - i.y, e.z - i.z);
        }),
        (t.mul = function (e, i) {
          return new t(i * e.x, i * e.y, i * e.z);
        }),
        (t.prototype.neg = function () {
          return (
            (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this
          );
        }),
        (t.neg = function (e) {
          return new t(-e.x, -e.y, -e.z);
        }),
        t
      );
    })(),
    At = (function (t) {
      function e(i, o) {
        var s = this;
        return s instanceof e
          ? (((s = t.call(this) || this).m_type = e.TYPE),
            (s.m_radius = l.polygonRadius),
            (s.m_vertex1 = i ? h.clone(i) : h.zero()),
            (s.m_vertex2 = o ? h.clone(o) : h.zero()),
            (s.m_vertex0 = h.zero()),
            (s.m_vertex3 = h.zero()),
            (s.m_hasVertex0 = !1),
            (s.m_hasVertex3 = !1),
            s)
          : new e(i, o);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            vertex1: this.m_vertex1,
            vertex2: this.m_vertex2,
            vertex0: this.m_vertex0,
            vertex3: this.m_vertex3,
            hasVertex0: this.m_hasVertex0,
            hasVertex3: this.m_hasVertex3,
          };
        }),
        (e._deserialize = function (t) {
          var i = new e(t.vertex1, t.vertex2);
          return (
            i.m_hasVertex0 && i.setPrevVertex(t.vertex0),
            i.m_hasVertex3 && i.setNextVertex(t.vertex3),
            i
          );
        }),
        (e.prototype.setNext = function (t) {
          return this.setNextVertex(t);
        }),
        (e.prototype.setNextVertex = function (t) {
          return (
            t
              ? (this.m_vertex3.setVec2(t), (this.m_hasVertex3 = !0))
              : (this.m_vertex3.setZero(), (this.m_hasVertex3 = !1)),
            this
          );
        }),
        (e.prototype.getNextVertex = function () {
          return this.m_vertex3;
        }),
        (e.prototype.setPrev = function (t) {
          return this.setPrevVertex(t);
        }),
        (e.prototype.setPrevVertex = function (t) {
          return (
            t
              ? (this.m_vertex0.setVec2(t), (this.m_hasVertex0 = !0))
              : (this.m_vertex0.setZero(), (this.m_hasVertex0 = !1)),
            this
          );
        }),
        (e.prototype.getPrevVertex = function () {
          return this.m_vertex0;
        }),
        (e.prototype._set = function (t, e) {
          return (
            this.m_vertex1.setVec2(t),
            this.m_vertex2.setVec2(e),
            (this.m_hasVertex0 = !1),
            (this.m_hasVertex3 = !1),
            this
          );
        }),
        (e.prototype._clone = function () {
          var t = new e();
          return (
            (t.m_type = this.m_type),
            (t.m_radius = this.m_radius),
            t.m_vertex1.setVec2(this.m_vertex1),
            t.m_vertex2.setVec2(this.m_vertex2),
            t.m_vertex0.setVec2(this.m_vertex0),
            t.m_vertex3.setVec2(this.m_vertex3),
            (t.m_hasVertex0 = this.m_hasVertex0),
            (t.m_hasVertex3 = this.m_hasVertex3),
            t
          );
        }),
        (e.prototype.getChildCount = function () {
          return 1;
        }),
        (e.prototype.testPoint = function (t, e) {
          return !1;
        }),
        (e.prototype.rayCast = function (t, e, i, o) {
          var s = v.mulTVec2(i.q, h.sub(e.p1, i.p)),
            n = v.mulTVec2(i.q, h.sub(e.p2, i.p)),
            r = h.sub(n, s),
            m = this.m_vertex1,
            a = this.m_vertex2,
            c = h.sub(a, m),
            _ = h.neo(c.y, -c.x);
          _.normalize();
          var l = h.dot(_, h.sub(m, s)),
            u = h.dot(_, r);
          if (0 == u) return !1;
          var p = l / u;
          if (p < 0 || e.maxFraction < p) return !1;
          var y = h.add(s, h.mulNumVec2(p, r)),
            d = h.sub(a, m),
            f = h.dot(d, d);
          if (0 == f) return !1;
          var x = h.dot(h.sub(y, m), d) / f;
          return (
            !(x < 0 || 1 < x) &&
            ((t.fraction = p),
            (t.normal = l > 0 ? v.mulVec2(i.q, _).neg() : v.mulVec2(i.q, _)),
            !0)
          );
        }),
        (e.prototype.computeAABB = function (t, e, i) {
          var o = x.mulVec2(e, this.m_vertex1),
            s = x.mulVec2(e, this.m_vertex2);
          t.combinePoints(o, s), t.extend(this.m_radius);
        }),
        (e.prototype.computeMass = function (t, e) {
          (t.mass = 0),
            t.center.setCombine(0.5, this.m_vertex1, 0.5, this.m_vertex2),
            (t.I = 0);
        }),
        (e.prototype.computeDistanceProxy = function (t) {
          t.m_vertices.push(this.m_vertex1),
            t.m_vertices.push(this.m_vertex2),
            (t.m_count = 2),
            (t.m_radius = this.m_radius);
        }),
        (e.TYPE = "edge"),
        e
      );
    })(B),
    bt = (function (t) {
      function e(i, o) {
        var s = this;
        return s instanceof e
          ? (((s = t.call(this) || this).m_type = e.TYPE),
            (s.m_radius = l.polygonRadius),
            (s.m_vertices = []),
            (s.m_count = 0),
            (s.m_prevVertex = null),
            (s.m_nextVertex = null),
            (s.m_hasPrevVertex = !1),
            (s.m_hasNextVertex = !1),
            (s.m_isLoop = !!o),
            i && i.length && (o ? s._createLoop(i) : s._createChain(i)),
            s)
          : new e(i, o);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          var t = {
            type: this.m_type,
            vertices: this.m_vertices,
            isLoop: this.m_isLoop,
            hasPrevVertex: this.m_hasPrevVertex,
            hasNextVertex: this.m_hasNextVertex,
            prevVertex: null,
            nextVertex: null,
          };
          return (
            this.m_prevVertex && (t.prevVertex = this.m_prevVertex),
            this.m_nextVertex && (t.nextVertex = this.m_nextVertex),
            t
          );
        }),
        (e._deserialize = function (t, i, o) {
          var s = [];
          if (t.vertices)
            for (var n = 0; n < t.vertices.length; n++)
              s.push(o(h, t.vertices[n]));
          var r = new e(s, t.isLoop);
          return (
            t.prevVertex && r.setPrevVertex(t.prevVertex),
            t.nextVertex && r.setNextVertex(t.nextVertex),
            r
          );
        }),
        (e.prototype._createLoop = function (t) {
          for (var e = 1; e < t.length; ++e) t[e - 1], t[e];
          (this.m_vertices = []), (this.m_count = t.length + 1);
          for (e = 0; e < t.length; ++e) this.m_vertices[e] = h.clone(t[e]);
          return (
            (this.m_vertices[t.length] = h.clone(t[0])),
            (this.m_prevVertex = this.m_vertices[this.m_count - 2]),
            (this.m_nextVertex = this.m_vertices[1]),
            (this.m_hasPrevVertex = !0),
            (this.m_hasNextVertex = !0),
            this
          );
        }),
        (e.prototype._createChain = function (t) {
          for (var e = 1; e < t.length; ++e) t[e - 1], t[e];
          this.m_count = t.length;
          for (e = 0; e < t.length; ++e) this.m_vertices[e] = h.clone(t[e]);
          return (
            (this.m_hasPrevVertex = !1),
            (this.m_hasNextVertex = !1),
            (this.m_prevVertex = null),
            (this.m_nextVertex = null),
            this
          );
        }),
        (e.prototype._reset = function () {
          this.m_isLoop
            ? this._createLoop(this.m_vertices)
            : this._createChain(this.m_vertices);
        }),
        (e.prototype.setPrevVertex = function (t) {
          (this.m_prevVertex = t), (this.m_hasPrevVertex = !0);
        }),
        (e.prototype.getPrevVertex = function () {
          return this.m_prevVertex;
        }),
        (e.prototype.setNextVertex = function (t) {
          (this.m_nextVertex = t), (this.m_hasNextVertex = !0);
        }),
        (e.prototype.getNextVertex = function () {
          return this.m_nextVertex;
        }),
        (e.prototype._clone = function () {
          var t = new e();
          return (
            t._createChain(this.m_vertices),
            (t.m_type = this.m_type),
            (t.m_radius = this.m_radius),
            (t.m_prevVertex = this.m_prevVertex),
            (t.m_nextVertex = this.m_nextVertex),
            (t.m_hasPrevVertex = this.m_hasPrevVertex),
            (t.m_hasNextVertex = this.m_hasNextVertex),
            t
          );
        }),
        (e.prototype.getChildCount = function () {
          return this.m_count - 1;
        }),
        (e.prototype.getChildEdge = function (t, e) {
          (t.m_type = At.TYPE),
            (t.m_radius = this.m_radius),
            (t.m_vertex1 = this.m_vertices[e]),
            (t.m_vertex2 = this.m_vertices[e + 1]),
            e > 0
              ? ((t.m_vertex0 = this.m_vertices[e - 1]), (t.m_hasVertex0 = !0))
              : ((t.m_vertex0 = this.m_prevVertex),
                (t.m_hasVertex0 = this.m_hasPrevVertex)),
            e < this.m_count - 2
              ? ((t.m_vertex3 = this.m_vertices[e + 2]), (t.m_hasVertex3 = !0))
              : ((t.m_vertex3 = this.m_nextVertex),
                (t.m_hasVertex3 = this.m_hasNextVertex));
        }),
        (e.prototype.getVertex = function (t) {
          return t < this.m_count ? this.m_vertices[t] : this.m_vertices[0];
        }),
        (e.prototype.isLoop = function () {
          return this.m_isLoop;
        }),
        (e.prototype.testPoint = function (t, e) {
          return !1;
        }),
        (e.prototype.rayCast = function (t, e, i, o) {
          return new At(this.getVertex(o), this.getVertex(o + 1)).rayCast(
            t,
            e,
            i,
            0
          );
        }),
        (e.prototype.computeAABB = function (t, e, i) {
          var o = x.mulVec2(e, this.getVertex(i)),
            s = x.mulVec2(e, this.getVertex(i + 1));
          t.combinePoints(o, s);
        }),
        (e.prototype.computeMass = function (t, e) {
          (t.mass = 0), (t.center = h.zero()), (t.I = 0);
        }),
        (e.prototype.computeDistanceProxy = function (t, e) {
          (t.m_buffer[0] = this.getVertex(e)),
            (t.m_buffer[1] = this.getVertex(e + 1)),
            (t.m_vertices = t.m_buffer),
            (t.m_count = 2),
            (t.m_radius = this.m_radius);
        }),
        (e.TYPE = "chain"),
        e
      );
    })(B),
    gt = (function (t) {
      function e(i) {
        var o = this;
        return o instanceof e
          ? (((o = t.call(this) || this).m_type = e.TYPE),
            (o.m_radius = l.polygonRadius),
            (o.m_centroid = h.zero()),
            (o.m_vertices = []),
            (o.m_normals = []),
            (o.m_count = 0),
            i && i.length && o._set(i),
            o)
          : new e(i);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return { type: this.m_type, vertices: this.m_vertices };
        }),
        (e._deserialize = function (t, i, o) {
          var s = [];
          if (t.vertices)
            for (var n = 0; n < t.vertices.length; n++)
              s.push(o(h, t.vertices[n]));
          return new e(s);
        }),
        (e.prototype.getVertex = function (t) {
          return this.m_vertices[t];
        }),
        (e.prototype._clone = function () {
          var t = new e();
          (t.m_type = this.m_type),
            (t.m_radius = this.m_radius),
            (t.m_count = this.m_count),
            t.m_centroid.setVec2(this.m_centroid);
          for (var i = 0; i < this.m_count; i++)
            t.m_vertices.push(this.m_vertices[i].clone());
          for (i = 0; i < this.m_normals.length; i++)
            t.m_normals.push(this.m_normals[i].clone());
          return t;
        }),
        (e.prototype.getChildCount = function () {
          return 1;
        }),
        (e.prototype._reset = function () {
          this._set(this.m_vertices);
        }),
        (e.prototype._set = function (t) {
          if (t.length < 3) this._setAsBox(1, 1);
          else {
            for (
              var e = r.min(t.length, l.maxPolygonVertices), i = [], o = 0;
              o < e;
              ++o
            ) {
              for (var s = t[o], n = !0, m = 0; m < i.length; ++m)
                if (h.distanceSquared(s, i[m]) < 0.25 * l.linearSlopSquared) {
                  n = !1;
                  break;
                }
              n && i.push(s);
            }
            if ((e = i.length) < 3) this._setAsBox(1, 1);
            else {
              var a = 0,
                c = i[0].x;
              for (o = 1; o < e; ++o) {
                var _ = i[o].x;
                (_ > c || (_ === c && i[o].y < i[a].y)) && ((a = o), (c = _));
              }
              for (var u = [], p = 0, y = a; ; ) {
                u[p] = y;
                var d = 0;
                for (m = 1; m < e; ++m)
                  if (d !== y) {
                    var f = h.sub(i[d], i[u[p]]),
                      v = ((s = h.sub(i[m], i[u[p]])), h.crossVec2Vec2(f, s));
                    v < 0 && (d = m),
                      0 === v &&
                        s.lengthSquared() > f.lengthSquared() &&
                        (d = m);
                  } else d = m;
                if ((++p, (y = d), d === a)) break;
              }
              if (p < 3) this._setAsBox(1, 1);
              else {
                (this.m_count = p), (this.m_vertices = []);
                for (o = 0; o < p; ++o) this.m_vertices[o] = i[u[o]];
                for (o = 0; o < p; ++o) {
                  var x = o,
                    A = o + 1 < p ? o + 1 : 0,
                    b = h.sub(this.m_vertices[A], this.m_vertices[x]);
                  (this.m_normals[o] = h.crossVec2Num(b, 1)),
                    this.m_normals[o].normalize();
                }
                this.m_centroid = (function (t, e) {
                  for (
                    var i = h.zero(), o = 0, s = h.zero(), n = 1 / 3, r = 0;
                    r < e;
                    ++r
                  ) {
                    var m = s,
                      a = t[r],
                      c = r + 1 < e ? t[r + 1] : t[0],
                      _ = h.sub(a, m),
                      l = h.sub(c, m),
                      u = 0.5 * h.crossVec2Vec2(_, l);
                    (o += u),
                      i.addMul(u * n, m),
                      i.addMul(u * n, a),
                      i.addMul(u * n, c);
                  }
                  return i.mul(1 / o), i;
                })(this.m_vertices, p);
              }
            }
          }
        }),
        (e.prototype._setAsBox = function (t, e, i, o) {
          if (
            ((this.m_vertices[0] = h.neo(t, -e)),
            (this.m_vertices[1] = h.neo(t, e)),
            (this.m_vertices[2] = h.neo(-t, e)),
            (this.m_vertices[3] = h.neo(-t, -e)),
            (this.m_normals[0] = h.neo(1, 0)),
            (this.m_normals[1] = h.neo(0, 1)),
            (this.m_normals[2] = h.neo(-1, 0)),
            (this.m_normals[3] = h.neo(0, -1)),
            (this.m_count = 4),
            h.isValid(i))
          ) {
            (o = o || 0), this.m_centroid.setVec2(i);
            var s = x.identity();
            s.p.setVec2(i), s.q.setAngle(o);
            for (var n = 0; n < this.m_count; ++n)
              (this.m_vertices[n] = x.mulVec2(s, this.m_vertices[n])),
                (this.m_normals[n] = v.mulVec2(s.q, this.m_normals[n]));
          }
        }),
        (e.prototype.testPoint = function (t, e) {
          for (
            var i = v.mulTVec2(t.q, h.sub(e, t.p)), o = 0;
            o < this.m_count;
            ++o
          ) {
            if (h.dot(this.m_normals[o], h.sub(i, this.m_vertices[o])) > 0)
              return !1;
          }
          return !0;
        }),
        (e.prototype.rayCast = function (t, e, i, o) {
          for (
            var s = v.mulTVec2(i.q, h.sub(e.p1, i.p)),
              n = v.mulTVec2(i.q, h.sub(e.p2, i.p)),
              r = h.sub(n, s),
              m = 0,
              a = e.maxFraction,
              c = -1,
              _ = 0;
            _ < this.m_count;
            ++_
          ) {
            var l = h.dot(this.m_normals[_], h.sub(this.m_vertices[_], s)),
              u = h.dot(this.m_normals[_], r);
            if (0 == u) {
              if (l < 0) return !1;
            } else
              u < 0 && l < m * u
                ? ((m = l / u), (c = _))
                : u > 0 && l < a * u && (a = l / u);
            if (a < m) return !1;
          }
          return (
            c >= 0 &&
            ((t.fraction = m),
            (t.normal = v.mulVec2(i.q, this.m_normals[c])),
            !0)
          );
        }),
        (e.prototype.computeAABB = function (t, e, i) {
          for (
            var o = 1 / 0, s = 1 / 0, n = -1 / 0, m = -1 / 0, a = 0;
            a < this.m_count;
            ++a
          ) {
            var c = x.mulVec2(e, this.m_vertices[a]);
            (o = r.min(o, c.x)),
              (n = r.max(n, c.x)),
              (s = r.min(s, c.y)),
              (m = r.max(m, c.y));
          }
          t.lowerBound.setNum(o, s),
            t.upperBound.setNum(n, m),
            t.extend(this.m_radius);
        }),
        (e.prototype.computeMass = function (t, e) {
          for (
            var i = h.zero(), o = 0, s = 0, n = h.zero(), r = 0;
            r < this.m_count;
            ++r
          )
            n.add(this.m_vertices[r]);
          n.mul(1 / this.m_count);
          var m = 1 / 3;
          for (r = 0; r < this.m_count; ++r) {
            var a = h.sub(this.m_vertices[r], n),
              c =
                r + 1 < this.m_count
                  ? h.sub(this.m_vertices[r + 1], n)
                  : h.sub(this.m_vertices[0], n),
              _ = h.crossVec2Vec2(a, c),
              l = 0.5 * _;
            (o += l), i.addCombine(l * m, a, l * m, c);
            var u = a.x,
              p = a.y,
              y = c.x,
              d = c.y;
            s +=
              0.25 * m * _ * (u * u + y * u + y * y + (p * p + d * p + d * d));
          }
          (t.mass = e * o),
            i.mul(1 / o),
            t.center.setCombine(1, i, 1, n),
            (t.I = e * s),
            (t.I += t.mass * (h.dot(t.center, t.center) - h.dot(i, i)));
        }),
        (e.prototype.validate = function () {
          for (var t = 0; t < this.m_count; ++t)
            for (
              var e = t,
                i = t < this.m_count - 1 ? e + 1 : 0,
                o = this.m_vertices[e],
                s = h.sub(this.m_vertices[i], o),
                n = 0;
              n < this.m_count;
              ++n
            )
              if (n != e && n != i) {
                var r = h.sub(this.m_vertices[n], o);
                if (h.crossVec2Vec2(s, r) < 0) return !1;
              }
          return !0;
        }),
        (e.prototype.computeDistanceProxy = function (t) {
          (t.m_vertices = this.m_vertices),
            (t.m_count = this.m_count),
            (t.m_radius = this.m_radius);
        }),
        (e.TYPE = "polygon"),
        e
      );
    })(B);
  var Bt = (function (t) {
      function e(i, o, s, n) {
        var r = this;
        return r instanceof e
          ? ((r = t.call(this) || this)._setAsBox(i, o, s, n), r)
          : new e(i, o, s, n);
      }
      return i(e, t), (e.TYPE = "polygon"), e;
    })(gt),
    Vt = (function (t) {
      function e(i, o) {
        var s = this;
        return s instanceof e
          ? (((s = t.call(this) || this).m_type = e.TYPE),
            (s.m_p = h.zero()),
            (s.m_radius = 1),
            "object" == typeof i && h.isValid(i)
              ? (s.m_p.setVec2(i), "number" == typeof o && (s.m_radius = o))
              : "number" == typeof i && (s.m_radius = i),
            s)
          : new e(i, o);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return { type: this.m_type, p: this.m_p, radius: this.m_radius };
        }),
        (e._deserialize = function (t) {
          return new e(t.p, t.radius);
        }),
        (e.prototype.getRadius = function () {
          return this.m_radius;
        }),
        (e.prototype.getCenter = function () {
          return this.m_p;
        }),
        (e.prototype.getVertex = function (t) {
          return this.m_p;
        }),
        (e.prototype._clone = function () {
          var t = new e();
          return (
            (t.m_type = this.m_type),
            (t.m_radius = this.m_radius),
            (t.m_p = this.m_p.clone()),
            t
          );
        }),
        (e.prototype.getChildCount = function () {
          return 1;
        }),
        (e.prototype.testPoint = function (t, e) {
          var i = h.add(t.p, v.mulVec2(t.q, this.m_p)),
            o = h.sub(e, i);
          return h.dot(o, o) <= this.m_radius * this.m_radius;
        }),
        (e.prototype.rayCast = function (t, e, i, o) {
          var s = h.add(i.p, v.mulVec2(i.q, this.m_p)),
            n = h.sub(e.p1, s),
            m = h.dot(n, n) - this.m_radius * this.m_radius,
            a = h.sub(e.p2, e.p1),
            c = h.dot(n, a),
            _ = h.dot(a, a),
            l = c * c - _ * m;
          if (l < 0 || _ < r.EPSILON) return !1;
          var u = -(c + r.sqrt(l));
          return (
            0 <= u &&
            u <= e.maxFraction * _ &&
            ((u /= _),
            (t.fraction = u),
            (t.normal = h.add(n, h.mulNumVec2(u, a))),
            t.normal.normalize(),
            !0)
          );
        }),
        (e.prototype.computeAABB = function (t, e, i) {
          var o = h.add(e.p, v.mulVec2(e.q, this.m_p));
          t.lowerBound.setNum(o.x - this.m_radius, o.y - this.m_radius),
            t.upperBound.setNum(o.x + this.m_radius, o.y + this.m_radius);
        }),
        (e.prototype.computeMass = function (t, e) {
          (t.mass = e * r.PI * this.m_radius * this.m_radius),
            (t.center = this.m_p),
            (t.I =
              t.mass *
              (0.5 * this.m_radius * this.m_radius +
                h.dot(this.m_p, this.m_p)));
        }),
        (e.prototype.computeDistanceProxy = function (t) {
          t.m_vertices.push(this.m_p),
            (t.m_count = 1),
            (t.m_radius = this.m_radius);
        }),
        (e.TYPE = "circle"),
        e
      );
    })(B),
    wt = { frequencyHz: 0, dampingRatio: 0 },
    Ct = (function (t) {
      function e(i, o, n, m, a) {
        var c = this;
        if (!(c instanceof e)) return new e(i, o, n, m, a);
        if (n && m && "m_type" in m && "x" in n && "y" in n) {
          var _ = n;
          (n = m), (m = _);
        }
        return (
          (i = s(i, wt)),
          (o = (c = t.call(this, i, o, n) || this).m_bodyA),
          (n = c.m_bodyB),
          (c.m_type = e.TYPE),
          (c.m_localAnchorA = h.clone(
            m ? o.getLocalPoint(m) : i.localAnchorA || h.zero()
          )),
          (c.m_localAnchorB = h.clone(
            a ? n.getLocalPoint(a) : i.localAnchorB || h.zero()
          )),
          (c.m_length = r.isFinite(i.length)
            ? i.length
            : h.distance(
                o.getWorldPoint(c.m_localAnchorA),
                n.getWorldPoint(c.m_localAnchorB)
              )),
          (c.m_frequencyHz = i.frequencyHz),
          (c.m_dampingRatio = i.dampingRatio),
          (c.m_impulse = 0),
          (c.m_gamma = 0),
          (c.m_bias = 0),
          c
        );
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            bodyA: this.m_bodyA,
            bodyB: this.m_bodyB,
            collideConnected: this.m_collideConnected,
            frequencyHz: this.m_frequencyHz,
            dampingRatio: this.m_dampingRatio,
            localAnchorA: this.m_localAnchorA,
            localAnchorB: this.m_localAnchorB,
            length: this.m_length,
            impulse: this.m_impulse,
            gamma: this.m_gamma,
            bias: this.m_bias,
          };
        }),
        (e._deserialize = function (t, i, s) {
          return (
            ((t = o({}, t)).bodyA = s(T, t.bodyA, i)),
            (t.bodyB = s(T, t.bodyB, i)),
            new e(t)
          );
        }),
        (e.prototype._setAnchors = function (t) {
          t.anchorA
            ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA))
            : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA),
            t.anchorB
              ? this.m_localAnchorB.setVec2(
                  this.m_bodyB.getLocalPoint(t.anchorB)
                )
              : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB),
            t.length > 0
              ? (this.m_length = +t.length)
              : t.length < 0 ||
                ((t.anchorA || t.anchorA || t.anchorA || t.anchorA) &&
                  (this.m_length = h.distance(
                    this.m_bodyA.getWorldPoint(this.m_localAnchorA),
                    this.m_bodyB.getWorldPoint(this.m_localAnchorB)
                  )));
        }),
        (e.prototype.getLocalAnchorA = function () {
          return this.m_localAnchorA;
        }),
        (e.prototype.getLocalAnchorB = function () {
          return this.m_localAnchorB;
        }),
        (e.prototype.setLength = function (t) {
          this.m_length = t;
        }),
        (e.prototype.getLength = function () {
          return this.m_length;
        }),
        (e.prototype.setFrequency = function (t) {
          this.m_frequencyHz = t;
        }),
        (e.prototype.getFrequency = function () {
          return this.m_frequencyHz;
        }),
        (e.prototype.setDampingRatio = function (t) {
          this.m_dampingRatio = t;
        }),
        (e.prototype.getDampingRatio = function () {
          return this.m_dampingRatio;
        }),
        (e.prototype.getAnchorA = function () {
          return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
        }),
        (e.prototype.getAnchorB = function () {
          return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
        }),
        (e.prototype.getReactionForce = function (t) {
          return h.mulNumVec2(this.m_impulse, this.m_u).mul(t);
        }),
        (e.prototype.getReactionTorque = function (t) {
          return 0;
        }),
        (e.prototype.initVelocityConstraints = function (t) {
          (this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
            (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
            (this.m_invMassA = this.m_bodyA.m_invMass),
            (this.m_invMassB = this.m_bodyB.m_invMass),
            (this.m_invIA = this.m_bodyA.m_invI),
            (this.m_invIB = this.m_bodyB.m_invI);
          var e = this.m_bodyA.c_position.c,
            i = this.m_bodyA.c_position.a,
            o = this.m_bodyA.c_velocity.v,
            s = this.m_bodyA.c_velocity.w,
            n = this.m_bodyB.c_position.c,
            m = this.m_bodyB.c_position.a,
            a = this.m_bodyB.c_velocity.v,
            c = this.m_bodyB.c_velocity.w,
            _ = v.neo(i),
            u = v.neo(m);
          (this.m_rA = v.mulVec2(
            _,
            h.sub(this.m_localAnchorA, this.m_localCenterA)
          )),
            (this.m_rB = v.mulVec2(
              u,
              h.sub(this.m_localAnchorB, this.m_localCenterB)
            )),
            (this.m_u = h.sub(h.add(n, this.m_rB), h.add(e, this.m_rA)));
          var p = this.m_u.length();
          p > l.linearSlop ? this.m_u.mul(1 / p) : this.m_u.setNum(0, 0);
          var y = h.crossVec2Vec2(this.m_rA, this.m_u),
            d = h.crossVec2Vec2(this.m_rB, this.m_u),
            f =
              this.m_invMassA +
              this.m_invIA * y * y +
              this.m_invMassB +
              this.m_invIB * d * d;
          if (((this.m_mass = 0 != f ? 1 / f : 0), this.m_frequencyHz > 0)) {
            var x = p - this.m_length,
              A = 2 * r.PI * this.m_frequencyHz,
              b = 2 * this.m_mass * this.m_dampingRatio * A,
              g = this.m_mass * A * A,
              B = t.dt;
            (this.m_gamma = B * (b + B * g)),
              (this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0),
              (this.m_bias = x * B * g * this.m_gamma),
              (f += this.m_gamma),
              (this.m_mass = 0 != f ? 1 / f : 0);
          } else (this.m_gamma = 0), (this.m_bias = 0);
          if (t.warmStarting) {
            this.m_impulse *= t.dtRatio;
            var V = h.mulNumVec2(this.m_impulse, this.m_u);
            o.subMul(this.m_invMassA, V),
              (s -= this.m_invIA * h.crossVec2Vec2(this.m_rA, V)),
              a.addMul(this.m_invMassB, V),
              (c += this.m_invIB * h.crossVec2Vec2(this.m_rB, V));
          } else this.m_impulse = 0;
          this.m_bodyA.c_velocity.v.setVec2(o),
            (this.m_bodyA.c_velocity.w = s),
            this.m_bodyB.c_velocity.v.setVec2(a),
            (this.m_bodyB.c_velocity.w = c);
        }),
        (e.prototype.solveVelocityConstraints = function (t) {
          var e = this.m_bodyA.c_velocity.v,
            i = this.m_bodyA.c_velocity.w,
            o = this.m_bodyB.c_velocity.v,
            s = this.m_bodyB.c_velocity.w,
            n = h.add(e, h.crossNumVec2(i, this.m_rA)),
            r = h.add(o, h.crossNumVec2(s, this.m_rB)),
            m = h.dot(this.m_u, r) - h.dot(this.m_u, n),
            a =
              -this.m_mass * (m + this.m_bias + this.m_gamma * this.m_impulse);
          this.m_impulse += a;
          var c = h.mulNumVec2(a, this.m_u);
          e.subMul(this.m_invMassA, c),
            (i -= this.m_invIA * h.crossVec2Vec2(this.m_rA, c)),
            o.addMul(this.m_invMassB, c),
            (s += this.m_invIB * h.crossVec2Vec2(this.m_rB, c)),
            this.m_bodyA.c_velocity.v.setVec2(e),
            (this.m_bodyA.c_velocity.w = i),
            this.m_bodyB.c_velocity.v.setVec2(o),
            (this.m_bodyB.c_velocity.w = s);
        }),
        (e.prototype.solvePositionConstraints = function (t) {
          if (this.m_frequencyHz > 0) return !0;
          var e = this.m_bodyA.c_position.c,
            i = this.m_bodyA.c_position.a,
            o = this.m_bodyB.c_position.c,
            s = this.m_bodyB.c_position.a,
            n = v.neo(i),
            m = v.neo(s),
            a = v.mulSub(n, this.m_localAnchorA, this.m_localCenterA),
            c = v.mulSub(m, this.m_localAnchorB, this.m_localCenterB),
            _ = h.sub(h.add(o, c), h.add(e, a)),
            u = _.normalize() - this.m_length;
          u = r.clamp(u, -l.maxLinearCorrection, l.maxLinearCorrection);
          var p = -this.m_mass * u,
            y = h.mulNumVec2(p, _);
          return (
            e.subMul(this.m_invMassA, y),
            (i -= this.m_invIA * h.crossVec2Vec2(a, y)),
            o.addMul(this.m_invMassB, y),
            (s += this.m_invIB * h.crossVec2Vec2(c, y)),
            this.m_bodyA.c_position.c.setVec2(e),
            (this.m_bodyA.c_position.a = i),
            this.m_bodyB.c_position.c.setVec2(o),
            (this.m_bodyB.c_position.a = s),
            r.abs(u) < l.linearSlop
          );
        }),
        (e.TYPE = "distance-joint"),
        e
      );
    })(nt),
    Mt = { maxForce: 0, maxTorque: 0 },
    It = (function (t) {
      function e(i, o, n, r) {
        var m = this;
        return m instanceof e
          ? ((i = s(i, Mt)),
            (o = (m = t.call(this, i, o, n) || this).m_bodyA),
            (n = m.m_bodyB),
            (m.m_type = e.TYPE),
            (m.m_localAnchorA = h.clone(
              r ? o.getLocalPoint(r) : i.localAnchorA || h.zero()
            )),
            (m.m_localAnchorB = h.clone(
              r ? n.getLocalPoint(r) : i.localAnchorB || h.zero()
            )),
            (m.m_linearImpulse = h.zero()),
            (m.m_angularImpulse = 0),
            (m.m_maxForce = i.maxForce),
            (m.m_maxTorque = i.maxTorque),
            m)
          : new e(i, o, n, r);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            bodyA: this.m_bodyA,
            bodyB: this.m_bodyB,
            collideConnected: this.m_collideConnected,
            maxForce: this.m_maxForce,
            maxTorque: this.m_maxTorque,
            localAnchorA: this.m_localAnchorA,
            localAnchorB: this.m_localAnchorB,
          };
        }),
        (e._deserialize = function (t, i, s) {
          return (
            ((t = o({}, t)).bodyA = s(T, t.bodyA, i)),
            (t.bodyB = s(T, t.bodyB, i)),
            new e(t)
          );
        }),
        (e.prototype._setAnchors = function (t) {
          t.anchorA
            ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA))
            : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA),
            t.anchorB
              ? this.m_localAnchorB.setVec2(
                  this.m_bodyB.getLocalPoint(t.anchorB)
                )
              : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB);
        }),
        (e.prototype.getLocalAnchorA = function () {
          return this.m_localAnchorA;
        }),
        (e.prototype.getLocalAnchorB = function () {
          return this.m_localAnchorB;
        }),
        (e.prototype.setMaxForce = function (t) {
          this.m_maxForce = t;
        }),
        (e.prototype.getMaxForce = function () {
          return this.m_maxForce;
        }),
        (e.prototype.setMaxTorque = function (t) {
          this.m_maxTorque = t;
        }),
        (e.prototype.getMaxTorque = function () {
          return this.m_maxTorque;
        }),
        (e.prototype.getAnchorA = function () {
          return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
        }),
        (e.prototype.getAnchorB = function () {
          return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
        }),
        (e.prototype.getReactionForce = function (t) {
          return h.mulNumVec2(t, this.m_linearImpulse);
        }),
        (e.prototype.getReactionTorque = function (t) {
          return t * this.m_angularImpulse;
        }),
        (e.prototype.initVelocityConstraints = function (t) {
          (this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
            (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
            (this.m_invMassA = this.m_bodyA.m_invMass),
            (this.m_invMassB = this.m_bodyB.m_invMass),
            (this.m_invIA = this.m_bodyA.m_invI),
            (this.m_invIB = this.m_bodyB.m_invI);
          var e = this.m_bodyA.c_position.a,
            i = this.m_bodyA.c_velocity.v,
            o = this.m_bodyA.c_velocity.w,
            s = this.m_bodyB.c_position.a,
            n = this.m_bodyB.c_velocity.v,
            r = this.m_bodyB.c_velocity.w,
            m = v.neo(e),
            a = v.neo(s);
          (this.m_rA = v.mulVec2(
            m,
            h.sub(this.m_localAnchorA, this.m_localCenterA)
          )),
            (this.m_rB = v.mulVec2(
              a,
              h.sub(this.m_localAnchorB, this.m_localCenterB)
            ));
          var c = this.m_invMassA,
            _ = this.m_invMassB,
            l = this.m_invIA,
            u = this.m_invIB,
            p = new L();
          if (
            ((p.ex.x =
              c +
              _ +
              l * this.m_rA.y * this.m_rA.y +
              u * this.m_rB.y * this.m_rB.y),
            (p.ex.y =
              -l * this.m_rA.x * this.m_rA.y - u * this.m_rB.x * this.m_rB.y),
            (p.ey.x = p.ex.y),
            (p.ey.y =
              c +
              _ +
              l * this.m_rA.x * this.m_rA.x +
              u * this.m_rB.x * this.m_rB.x),
            (this.m_linearMass = p.getInverse()),
            (this.m_angularMass = l + u),
            this.m_angularMass > 0 &&
              (this.m_angularMass = 1 / this.m_angularMass),
            t.warmStarting)
          ) {
            this.m_linearImpulse.mul(t.dtRatio),
              (this.m_angularImpulse *= t.dtRatio);
            var y = h.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
            i.subMul(c, y),
              (o -=
                l * (h.crossVec2Vec2(this.m_rA, y) + this.m_angularImpulse)),
              n.addMul(_, y),
              (r +=
                u * (h.crossVec2Vec2(this.m_rB, y) + this.m_angularImpulse));
          } else this.m_linearImpulse.setZero(), (this.m_angularImpulse = 0);
          (this.m_bodyA.c_velocity.v = i),
            (this.m_bodyA.c_velocity.w = o),
            (this.m_bodyB.c_velocity.v = n),
            (this.m_bodyB.c_velocity.w = r);
        }),
        (e.prototype.solveVelocityConstraints = function (t) {
          var e = this.m_bodyA.c_velocity.v,
            i = this.m_bodyA.c_velocity.w,
            o = this.m_bodyB.c_velocity.v,
            s = this.m_bodyB.c_velocity.w,
            n = this.m_invMassA,
            m = this.m_invMassB,
            a = this.m_invIA,
            c = this.m_invIB,
            _ = t.dt,
            l = s - i,
            u = -this.m_angularMass * l,
            p = this.m_angularImpulse,
            y = _ * this.m_maxTorque;
          (this.m_angularImpulse = r.clamp(this.m_angularImpulse + u, -y, y)),
            (i -= a * (u = this.m_angularImpulse - p)),
            (s += c * u);
          (l = h.sub(
            h.add(o, h.crossNumVec2(s, this.m_rB)),
            h.add(e, h.crossNumVec2(i, this.m_rA))
          )),
            (u = h.neg(L.mulVec2(this.m_linearMass, l))),
            (p = this.m_linearImpulse);
          this.m_linearImpulse.add(u);
          y = _ * this.m_maxForce;
          this.m_linearImpulse.lengthSquared() > y * y &&
            (this.m_linearImpulse.normalize(), this.m_linearImpulse.mul(y)),
            (u = h.sub(this.m_linearImpulse, p)),
            e.subMul(n, u),
            (i -= a * h.crossVec2Vec2(this.m_rA, u)),
            o.addMul(m, u),
            (s += c * h.crossVec2Vec2(this.m_rB, u)),
            (this.m_bodyA.c_velocity.v = e),
            (this.m_bodyA.c_velocity.w = i),
            (this.m_bodyB.c_velocity.v = o),
            (this.m_bodyB.c_velocity.w = s);
        }),
        (e.prototype.solvePositionConstraints = function (t) {
          return !0;
        }),
        (e.TYPE = "friction-joint"),
        e
      );
    })(nt),
    zt = (function () {
      function t(t, e, i) {
        "object" == typeof t && null !== t
          ? ((this.ex = xt.clone(t)),
            (this.ey = xt.clone(e)),
            (this.ez = xt.clone(i)))
          : ((this.ex = xt.zero()),
            (this.ey = xt.zero()),
            (this.ez = xt.zero()));
      }
      return (
        (t.prototype.toString = function () {
          return JSON.stringify(this);
        }),
        (t.isValid = function (t) {
          return (
            null != t &&
            xt.isValid(t.ex) &&
            xt.isValid(t.ey) &&
            xt.isValid(t.ez)
          );
        }),
        (t.assert = function (t) {}),
        (t.prototype.setZero = function () {
          return this.ex.setZero(), this.ey.setZero(), this.ez.setZero(), this;
        }),
        (t.prototype.solve33 = function (t) {
          var e = xt.dot(this.ex, xt.cross(this.ey, this.ez));
          0 !== e && (e = 1 / e);
          var i = new xt();
          return (
            (i.x = e * xt.dot(t, xt.cross(this.ey, this.ez))),
            (i.y = e * xt.dot(this.ex, xt.cross(t, this.ez))),
            (i.z = e * xt.dot(this.ex, xt.cross(this.ey, t))),
            i
          );
        }),
        (t.prototype.solve22 = function (t) {
          var e = this.ex.x,
            i = this.ey.x,
            o = this.ex.y,
            s = this.ey.y,
            n = e * s - i * o;
          0 !== n && (n = 1 / n);
          var r = h.zero();
          return (
            (r.x = n * (s * t.x - i * t.y)), (r.y = n * (e * t.y - o * t.x)), r
          );
        }),
        (t.prototype.getInverse22 = function (t) {
          var e = this.ex.x,
            i = this.ey.x,
            o = this.ex.y,
            s = this.ey.y,
            n = e * s - i * o;
          0 !== n && (n = 1 / n),
            (t.ex.x = n * s),
            (t.ey.x = -n * i),
            (t.ex.z = 0),
            (t.ex.y = -n * o),
            (t.ey.y = n * e),
            (t.ey.z = 0),
            (t.ez.x = 0),
            (t.ez.y = 0),
            (t.ez.z = 0);
        }),
        (t.prototype.getSymInverse33 = function (t) {
          var e = xt.dot(this.ex, xt.cross(this.ey, this.ez));
          0 !== e && (e = 1 / e);
          var i = this.ex.x,
            o = this.ey.x,
            s = this.ez.x,
            n = this.ey.y,
            r = this.ez.y,
            m = this.ez.z;
          (t.ex.x = e * (n * m - r * r)),
            (t.ex.y = e * (s * r - o * m)),
            (t.ex.z = e * (o * r - s * n)),
            (t.ey.x = t.ex.y),
            (t.ey.y = e * (i * m - s * s)),
            (t.ey.z = e * (s * o - i * r)),
            (t.ez.x = t.ex.z),
            (t.ez.y = t.ey.z),
            (t.ez.z = e * (i * n - o * o));
        }),
        (t.mul = function (t, e) {
          if (e && "z" in e && "y" in e && "x" in e) {
            var i = t.ex.x * e.x + t.ey.x * e.y + t.ez.x * e.z,
              o = t.ex.y * e.x + t.ey.y * e.y + t.ez.y * e.z,
              s = t.ex.z * e.x + t.ey.z * e.y + t.ez.z * e.z;
            return new xt(i, o, s);
          }
          if (e && "y" in e && "x" in e) {
            (i = t.ex.x * e.x + t.ey.x * e.y),
              (o = t.ex.y * e.x + t.ey.y * e.y);
            return h.neo(i, o);
          }
        }),
        (t.mulVec3 = function (t, e) {
          var i = t.ex.x * e.x + t.ey.x * e.y + t.ez.x * e.z,
            o = t.ex.y * e.x + t.ey.y * e.y + t.ez.y * e.z,
            s = t.ex.z * e.x + t.ey.z * e.y + t.ez.z * e.z;
          return new xt(i, o, s);
        }),
        (t.mulVec2 = function (t, e) {
          var i = t.ex.x * e.x + t.ey.x * e.y,
            o = t.ex.y * e.x + t.ey.y * e.y;
          return h.neo(i, o);
        }),
        (t.add = function (e, i) {
          return new t(
            xt.add(e.ex, i.ex),
            xt.add(e.ey, i.ey),
            xt.add(e.ez, i.ez)
          );
        }),
        t
      );
    })(),
    Pt = {
      lowerAngle: 0,
      upperAngle: 0,
      maxMotorTorque: 0,
      motorSpeed: 0,
      enableLimit: !1,
      enableMotor: !1,
    },
    St = (function (t) {
      function e(i, o, n, m) {
        var a = this;
        return a instanceof e
          ? ((i = s(i, Pt)),
            ((a = t.call(this, i, o, n) || this).m_mass = new zt()),
            (a.m_limitState = 0),
            (o = a.m_bodyA),
            (n = a.m_bodyB),
            (a.m_type = e.TYPE),
            (a.m_localAnchorA = h.clone(
              m ? o.getLocalPoint(m) : i.localAnchorA || h.zero()
            )),
            (a.m_localAnchorB = h.clone(
              m ? n.getLocalPoint(m) : i.localAnchorB || h.zero()
            )),
            (a.m_referenceAngle = r.isFinite(i.referenceAngle)
              ? i.referenceAngle
              : n.getAngle() - o.getAngle()),
            (a.m_impulse = new xt()),
            (a.m_motorImpulse = 0),
            (a.m_lowerAngle = i.lowerAngle),
            (a.m_upperAngle = i.upperAngle),
            (a.m_maxMotorTorque = i.maxMotorTorque),
            (a.m_motorSpeed = i.motorSpeed),
            (a.m_enableLimit = i.enableLimit),
            (a.m_enableMotor = i.enableMotor),
            a)
          : new e(i, o, n, m);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            bodyA: this.m_bodyA,
            bodyB: this.m_bodyB,
            collideConnected: this.m_collideConnected,
            lowerAngle: this.m_lowerAngle,
            upperAngle: this.m_upperAngle,
            maxMotorTorque: this.m_maxMotorTorque,
            motorSpeed: this.m_motorSpeed,
            enableLimit: this.m_enableLimit,
            enableMotor: this.m_enableMotor,
            localAnchorA: this.m_localAnchorA,
            localAnchorB: this.m_localAnchorB,
            referenceAngle: this.m_referenceAngle,
          };
        }),
        (e._deserialize = function (t, i, s) {
          return (
            ((t = o({}, t)).bodyA = s(T, t.bodyA, i)),
            (t.bodyB = s(T, t.bodyB, i)),
            new e(t)
          );
        }),
        (e.prototype._setAnchors = function (t) {
          t.anchorA
            ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA))
            : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA),
            t.anchorB
              ? this.m_localAnchorB.setVec2(
                  this.m_bodyB.getLocalPoint(t.anchorB)
                )
              : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB);
        }),
        (e.prototype.getLocalAnchorA = function () {
          return this.m_localAnchorA;
        }),
        (e.prototype.getLocalAnchorB = function () {
          return this.m_localAnchorB;
        }),
        (e.prototype.getReferenceAngle = function () {
          return this.m_referenceAngle;
        }),
        (e.prototype.getJointAngle = function () {
          var t = this.m_bodyA;
          return this.m_bodyB.m_sweep.a - t.m_sweep.a - this.m_referenceAngle;
        }),
        (e.prototype.getJointSpeed = function () {
          var t = this.m_bodyA;
          return this.m_bodyB.m_angularVelocity - t.m_angularVelocity;
        }),
        (e.prototype.isMotorEnabled = function () {
          return this.m_enableMotor;
        }),
        (e.prototype.enableMotor = function (t) {
          this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_enableMotor = t);
        }),
        (e.prototype.getMotorTorque = function (t) {
          return t * this.m_motorImpulse;
        }),
        (e.prototype.setMotorSpeed = function (t) {
          this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_motorSpeed = t);
        }),
        (e.prototype.getMotorSpeed = function () {
          return this.m_motorSpeed;
        }),
        (e.prototype.setMaxMotorTorque = function (t) {
          this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_maxMotorTorque = t);
        }),
        (e.prototype.getMaxMotorTorque = function () {
          return this.m_maxMotorTorque;
        }),
        (e.prototype.isLimitEnabled = function () {
          return this.m_enableLimit;
        }),
        (e.prototype.enableLimit = function (t) {
          t != this.m_enableLimit &&
            (this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_enableLimit = t),
            (this.m_impulse.z = 0));
        }),
        (e.prototype.getLowerLimit = function () {
          return this.m_lowerAngle;
        }),
        (e.prototype.getUpperLimit = function () {
          return this.m_upperAngle;
        }),
        (e.prototype.setLimits = function (t, e) {
          (t == this.m_lowerAngle && e == this.m_upperAngle) ||
            (this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_impulse.z = 0),
            (this.m_lowerAngle = t),
            (this.m_upperAngle = e));
        }),
        (e.prototype.getAnchorA = function () {
          return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
        }),
        (e.prototype.getAnchorB = function () {
          return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
        }),
        (e.prototype.getReactionForce = function (t) {
          return h.neo(this.m_impulse.x, this.m_impulse.y).mul(t);
        }),
        (e.prototype.getReactionTorque = function (t) {
          return t * this.m_impulse.z;
        }),
        (e.prototype.initVelocityConstraints = function (t) {
          (this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
            (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
            (this.m_invMassA = this.m_bodyA.m_invMass),
            (this.m_invMassB = this.m_bodyB.m_invMass),
            (this.m_invIA = this.m_bodyA.m_invI),
            (this.m_invIB = this.m_bodyB.m_invI);
          var e = this.m_bodyA.c_position.a,
            i = this.m_bodyA.c_velocity.v,
            o = this.m_bodyA.c_velocity.w,
            s = this.m_bodyB.c_position.a,
            n = this.m_bodyB.c_velocity.v,
            m = this.m_bodyB.c_velocity.w,
            a = v.neo(e),
            c = v.neo(s);
          (this.m_rA = v.mulVec2(
            a,
            h.sub(this.m_localAnchorA, this.m_localCenterA)
          )),
            (this.m_rB = v.mulVec2(
              c,
              h.sub(this.m_localAnchorB, this.m_localCenterB)
            ));
          var _ = this.m_invMassA,
            u = this.m_invMassB,
            p = this.m_invIA,
            y = this.m_invIB,
            d = p + y === 0;
          if (
            ((this.m_mass.ex.x =
              _ +
              u +
              this.m_rA.y * this.m_rA.y * p +
              this.m_rB.y * this.m_rB.y * y),
            (this.m_mass.ey.x =
              -this.m_rA.y * this.m_rA.x * p - this.m_rB.y * this.m_rB.x * y),
            (this.m_mass.ez.x = -this.m_rA.y * p - this.m_rB.y * y),
            (this.m_mass.ex.y = this.m_mass.ey.x),
            (this.m_mass.ey.y =
              _ +
              u +
              this.m_rA.x * this.m_rA.x * p +
              this.m_rB.x * this.m_rB.x * y),
            (this.m_mass.ez.y = this.m_rA.x * p + this.m_rB.x * y),
            (this.m_mass.ex.z = this.m_mass.ez.x),
            (this.m_mass.ey.z = this.m_mass.ez.y),
            (this.m_mass.ez.z = p + y),
            (this.m_motorMass = p + y),
            this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass),
            (0 == this.m_enableMotor || d) && (this.m_motorImpulse = 0),
            this.m_enableLimit && 0 == d)
          ) {
            var f = s - e - this.m_referenceAngle;
            r.abs(this.m_upperAngle - this.m_lowerAngle) < 2 * l.angularSlop
              ? (this.m_limitState = 3)
              : f <= this.m_lowerAngle
              ? (1 != this.m_limitState && (this.m_impulse.z = 0),
                (this.m_limitState = 1))
              : f >= this.m_upperAngle
              ? (2 != this.m_limitState && (this.m_impulse.z = 0),
                (this.m_limitState = 2))
              : ((this.m_limitState = 0), (this.m_impulse.z = 0));
          } else this.m_limitState = 0;
          if (t.warmStarting) {
            this.m_impulse.mul(t.dtRatio), (this.m_motorImpulse *= t.dtRatio);
            var x = h.neo(this.m_impulse.x, this.m_impulse.y);
            i.subMul(_, x),
              (o -=
                p *
                (h.crossVec2Vec2(this.m_rA, x) +
                  this.m_motorImpulse +
                  this.m_impulse.z)),
              n.addMul(u, x),
              (m +=
                y *
                (h.crossVec2Vec2(this.m_rB, x) +
                  this.m_motorImpulse +
                  this.m_impulse.z));
          } else this.m_impulse.setZero(), (this.m_motorImpulse = 0);
          (this.m_bodyA.c_velocity.v = i),
            (this.m_bodyA.c_velocity.w = o),
            (this.m_bodyB.c_velocity.v = n),
            (this.m_bodyB.c_velocity.w = m);
        }),
        (e.prototype.solveVelocityConstraints = function (t) {
          var e = this.m_bodyA.c_velocity.v,
            i = this.m_bodyA.c_velocity.w,
            o = this.m_bodyB.c_velocity.v,
            s = this.m_bodyB.c_velocity.w,
            n = this.m_invMassA,
            m = this.m_invMassB,
            a = this.m_invIA,
            c = this.m_invIB,
            _ = a + c === 0;
          if (this.m_enableMotor && 3 != this.m_limitState && 0 == _) {
            var l = s - i - this.m_motorSpeed,
              u = -this.m_motorMass * l,
              p = this.m_motorImpulse,
              y = t.dt * this.m_maxMotorTorque;
            (this.m_motorImpulse = r.clamp(this.m_motorImpulse + u, -y, y)),
              (i -= a * (u = this.m_motorImpulse - p)),
              (s += c * u);
          }
          if (this.m_enableLimit && 0 != this.m_limitState && 0 == _) {
            var d = h.zero();
            d.addCombine(1, o, 1, h.crossNumVec2(s, this.m_rB)),
              d.subCombine(1, e, 1, h.crossNumVec2(i, this.m_rA));
            var f = s - i;
            (l = new xt(d.x, d.y, f)), (u = xt.neg(this.m_mass.solve33(l)));
            if (3 == this.m_limitState) this.m_impulse.add(u);
            else if (1 == this.m_limitState) {
              if (this.m_impulse.z + u.z < 0) {
                var v = h.combine(
                    -1,
                    d,
                    this.m_impulse.z,
                    h.neo(this.m_mass.ez.x, this.m_mass.ez.y)
                  ),
                  x = this.m_mass.solve22(v);
                (u.x = x.x),
                  (u.y = x.y),
                  (u.z = -this.m_impulse.z),
                  (this.m_impulse.x += x.x),
                  (this.m_impulse.y += x.y),
                  (this.m_impulse.z = 0);
              } else this.m_impulse.add(u);
            } else if (2 == this.m_limitState) {
              if (this.m_impulse.z + u.z > 0) {
                (v = h.combine(
                  -1,
                  d,
                  this.m_impulse.z,
                  h.neo(this.m_mass.ez.x, this.m_mass.ez.y)
                )),
                  (x = this.m_mass.solve22(v));
                (u.x = x.x),
                  (u.y = x.y),
                  (u.z = -this.m_impulse.z),
                  (this.m_impulse.x += x.x),
                  (this.m_impulse.y += x.y),
                  (this.m_impulse.z = 0);
              } else this.m_impulse.add(u);
            }
            var A = h.neo(u.x, u.y);
            e.subMul(n, A),
              (i -= a * (h.crossVec2Vec2(this.m_rA, A) + u.z)),
              o.addMul(m, A),
              (s += c * (h.crossVec2Vec2(this.m_rB, A) + u.z));
          } else {
            (l = h.zero()).addCombine(1, o, 1, h.crossNumVec2(s, this.m_rB)),
              l.subCombine(1, e, 1, h.crossNumVec2(i, this.m_rA));
            u = this.m_mass.solve22(h.neg(l));
            (this.m_impulse.x += u.x),
              (this.m_impulse.y += u.y),
              e.subMul(n, u),
              (i -= a * h.crossVec2Vec2(this.m_rA, u)),
              o.addMul(m, u),
              (s += c * h.crossVec2Vec2(this.m_rB, u));
          }
          (this.m_bodyA.c_velocity.v = e),
            (this.m_bodyA.c_velocity.w = i),
            (this.m_bodyB.c_velocity.v = o),
            (this.m_bodyB.c_velocity.w = s);
        }),
        (e.prototype.solvePositionConstraints = function (t) {
          var e,
            i = this.m_bodyA.c_position.c,
            o = this.m_bodyA.c_position.a,
            s = this.m_bodyB.c_position.c,
            n = this.m_bodyB.c_position.a,
            m = v.neo(o),
            a = v.neo(n),
            c = 0,
            _ = this.m_invIA + this.m_invIB == 0;
          if (this.m_enableLimit && 0 != this.m_limitState && 0 == _) {
            var u = n - o - this.m_referenceAngle,
              p = 0;
            if (3 == this.m_limitState) {
              var y = r.clamp(
                u - this.m_lowerAngle,
                -l.maxAngularCorrection,
                l.maxAngularCorrection
              );
              (p = -this.m_motorMass * y), (c = r.abs(y));
            } else if (1 == this.m_limitState) {
              (c = -(y = u - this.m_lowerAngle)),
                (y = r.clamp(y + l.angularSlop, -l.maxAngularCorrection, 0)),
                (p = -this.m_motorMass * y);
            } else if (2 == this.m_limitState) {
              (c = y = u - this.m_upperAngle),
                (y = r.clamp(y - l.angularSlop, 0, l.maxAngularCorrection)),
                (p = -this.m_motorMass * y);
            }
            (o -= this.m_invIA * p), (n += this.m_invIB * p);
          }
          m.setAngle(o), a.setAngle(n);
          var d = v.mulVec2(m, h.sub(this.m_localAnchorA, this.m_localCenterA)),
            f = v.mulVec2(a, h.sub(this.m_localAnchorB, this.m_localCenterB));
          (y = h.zero()).addCombine(1, s, 1, f),
            y.subCombine(1, i, 1, d),
            (e = y.length());
          var x = this.m_invMassA,
            A = this.m_invMassB,
            b = this.m_invIA,
            g = this.m_invIB,
            B = new L();
          (B.ex.x = x + A + b * d.y * d.y + g * f.y * f.y),
            (B.ex.y = -b * d.x * d.y - g * f.x * f.y),
            (B.ey.x = B.ex.y),
            (B.ey.y = x + A + b * d.x * d.x + g * f.x * f.x);
          var V = h.neg(B.solve(y));
          return (
            i.subMul(x, V),
            (o -= b * h.crossVec2Vec2(d, V)),
            s.addMul(A, V),
            (n += g * h.crossVec2Vec2(f, V)),
            this.m_bodyA.c_position.c.setVec2(i),
            (this.m_bodyA.c_position.a = o),
            this.m_bodyB.c_position.c.setVec2(s),
            (this.m_bodyB.c_position.a = n),
            e <= l.linearSlop && c <= l.angularSlop
          );
        }),
        (e.TYPE = "revolute-joint"),
        e
      );
    })(nt),
    Tt = {
      enableLimit: !1,
      lowerTranslation: 0,
      upperTranslation: 0,
      enableMotor: !1,
      maxMotorForce: 0,
      motorSpeed: 0,
    },
    Lt = (function (t) {
      function e(i, o, n, m, a) {
        var c = this;
        return c instanceof e
          ? ((i = s(i, Tt)),
            (o = (c = t.call(this, i, o, n) || this).m_bodyA),
            (n = c.m_bodyB),
            (c.m_type = e.TYPE),
            (c.m_localAnchorA = h.clone(
              m ? o.getLocalPoint(m) : i.localAnchorA || h.zero()
            )),
            (c.m_localAnchorB = h.clone(
              m ? n.getLocalPoint(m) : i.localAnchorB || h.zero()
            )),
            (c.m_localXAxisA = h.clone(
              a ? o.getLocalVector(a) : i.localAxisA || h.neo(1, 0)
            )),
            c.m_localXAxisA.normalize(),
            (c.m_localYAxisA = h.crossNumVec2(1, c.m_localXAxisA)),
            (c.m_referenceAngle = r.isFinite(i.referenceAngle)
              ? i.referenceAngle
              : n.getAngle() - o.getAngle()),
            (c.m_impulse = new xt()),
            (c.m_motorMass = 0),
            (c.m_motorImpulse = 0),
            (c.m_lowerTranslation = i.lowerTranslation),
            (c.m_upperTranslation = i.upperTranslation),
            (c.m_maxMotorForce = i.maxMotorForce),
            (c.m_motorSpeed = i.motorSpeed),
            (c.m_enableLimit = i.enableLimit),
            (c.m_enableMotor = i.enableMotor),
            (c.m_limitState = 0),
            (c.m_axis = h.zero()),
            (c.m_perp = h.zero()),
            (c.m_K = new zt()),
            c)
          : new e(i, o, n, m, a);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            bodyA: this.m_bodyA,
            bodyB: this.m_bodyB,
            collideConnected: this.m_collideConnected,
            lowerTranslation: this.m_lowerTranslation,
            upperTranslation: this.m_upperTranslation,
            maxMotorForce: this.m_maxMotorForce,
            motorSpeed: this.m_motorSpeed,
            enableLimit: this.m_enableLimit,
            enableMotor: this.m_enableMotor,
            localAnchorA: this.m_localAnchorA,
            localAnchorB: this.m_localAnchorB,
            localAxisA: this.m_localXAxisA,
            referenceAngle: this.m_referenceAngle,
          };
        }),
        (e._deserialize = function (t, i, s) {
          return (
            ((t = o({}, t)).bodyA = s(T, t.bodyA, i)),
            (t.bodyB = s(T, t.bodyB, i)),
            (t.localAxisA = h.clone(t.localAxisA)),
            new e(t)
          );
        }),
        (e.prototype._setAnchors = function (t) {
          t.anchorA
            ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA))
            : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA),
            t.anchorB
              ? this.m_localAnchorB.setVec2(
                  this.m_bodyB.getLocalPoint(t.anchorB)
                )
              : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB),
            t.localAxisA &&
              (this.m_localXAxisA.setVec2(t.localAxisA),
              this.m_localYAxisA.setVec2(h.crossNumVec2(1, t.localAxisA)));
        }),
        (e.prototype.getLocalAnchorA = function () {
          return this.m_localAnchorA;
        }),
        (e.prototype.getLocalAnchorB = function () {
          return this.m_localAnchorB;
        }),
        (e.prototype.getLocalAxisA = function () {
          return this.m_localXAxisA;
        }),
        (e.prototype.getReferenceAngle = function () {
          return this.m_referenceAngle;
        }),
        (e.prototype.getJointTranslation = function () {
          var t = this.m_bodyA.getWorldPoint(this.m_localAnchorA),
            e = this.m_bodyB.getWorldPoint(this.m_localAnchorB),
            i = h.sub(e, t),
            o = this.m_bodyA.getWorldVector(this.m_localXAxisA);
          return h.dot(i, o);
        }),
        (e.prototype.getJointSpeed = function () {
          var t = this.m_bodyA,
            e = this.m_bodyB,
            i = v.mulVec2(
              t.m_xf.q,
              h.sub(this.m_localAnchorA, t.m_sweep.localCenter)
            ),
            o = v.mulVec2(
              e.m_xf.q,
              h.sub(this.m_localAnchorB, e.m_sweep.localCenter)
            ),
            s = h.add(t.m_sweep.c, i),
            n = h.add(e.m_sweep.c, o),
            r = h.sub(n, s),
            m = v.mulVec2(t.m_xf.q, this.m_localXAxisA),
            a = t.m_linearVelocity,
            c = e.m_linearVelocity,
            _ = t.m_angularVelocity,
            l = e.m_angularVelocity;
          return (
            h.dot(r, h.crossNumVec2(_, m)) +
            h.dot(
              m,
              h.sub(h.addCrossNumVec2(c, l, o), h.addCrossNumVec2(a, _, i))
            )
          );
        }),
        (e.prototype.isLimitEnabled = function () {
          return this.m_enableLimit;
        }),
        (e.prototype.enableLimit = function (t) {
          t != this.m_enableLimit &&
            (this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_enableLimit = t),
            (this.m_impulse.z = 0));
        }),
        (e.prototype.getLowerLimit = function () {
          return this.m_lowerTranslation;
        }),
        (e.prototype.getUpperLimit = function () {
          return this.m_upperTranslation;
        }),
        (e.prototype.setLimits = function (t, e) {
          (t == this.m_lowerTranslation && e == this.m_upperTranslation) ||
            (this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_lowerTranslation = t),
            (this.m_upperTranslation = e),
            (this.m_impulse.z = 0));
        }),
        (e.prototype.isMotorEnabled = function () {
          return this.m_enableMotor;
        }),
        (e.prototype.enableMotor = function (t) {
          this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_enableMotor = t);
        }),
        (e.prototype.setMotorSpeed = function (t) {
          this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_motorSpeed = t);
        }),
        (e.prototype.setMaxMotorForce = function (t) {
          this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_maxMotorForce = t);
        }),
        (e.prototype.getMaxMotorForce = function () {
          return this.m_maxMotorForce;
        }),
        (e.prototype.getMotorSpeed = function () {
          return this.m_motorSpeed;
        }),
        (e.prototype.getMotorForce = function (t) {
          return t * this.m_motorImpulse;
        }),
        (e.prototype.getAnchorA = function () {
          return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
        }),
        (e.prototype.getAnchorB = function () {
          return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
        }),
        (e.prototype.getReactionForce = function (t) {
          return h
            .combine(
              this.m_impulse.x,
              this.m_perp,
              this.m_motorImpulse + this.m_impulse.z,
              this.m_axis
            )
            .mul(t);
        }),
        (e.prototype.getReactionTorque = function (t) {
          return t * this.m_impulse.y;
        }),
        (e.prototype.initVelocityConstraints = function (t) {
          (this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
            (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
            (this.m_invMassA = this.m_bodyA.m_invMass),
            (this.m_invMassB = this.m_bodyB.m_invMass),
            (this.m_invIA = this.m_bodyA.m_invI),
            (this.m_invIB = this.m_bodyB.m_invI);
          var e = this.m_bodyA.c_position.c,
            i = this.m_bodyA.c_position.a,
            o = this.m_bodyA.c_velocity.v,
            s = this.m_bodyA.c_velocity.w,
            n = this.m_bodyB.c_position.c,
            m = this.m_bodyB.c_position.a,
            a = this.m_bodyB.c_velocity.v,
            c = this.m_bodyB.c_velocity.w,
            _ = v.neo(i),
            u = v.neo(m),
            p = v.mulVec2(_, h.sub(this.m_localAnchorA, this.m_localCenterA)),
            y = v.mulVec2(u, h.sub(this.m_localAnchorB, this.m_localCenterB)),
            d = h.zero();
          d.addCombine(1, n, 1, y), d.subCombine(1, e, 1, p);
          var f = this.m_invMassA,
            x = this.m_invMassB,
            A = this.m_invIA,
            b = this.m_invIB;
          (this.m_axis = v.mulVec2(_, this.m_localXAxisA)),
            (this.m_a1 = h.crossVec2Vec2(h.add(d, p), this.m_axis)),
            (this.m_a2 = h.crossVec2Vec2(y, this.m_axis)),
            (this.m_motorMass =
              f + x + A * this.m_a1 * this.m_a1 + b * this.m_a2 * this.m_a2),
            this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass),
            (this.m_perp = v.mulVec2(_, this.m_localYAxisA)),
            (this.m_s1 = h.crossVec2Vec2(h.add(d, p), this.m_perp)),
            (this.m_s2 = h.crossVec2Vec2(y, this.m_perp)),
            h.crossVec2Vec2(p, this.m_perp);
          var g = f + x + A * this.m_s1 * this.m_s1 + b * this.m_s2 * this.m_s2,
            B = A * this.m_s1 + b * this.m_s2,
            V = A * this.m_s1 * this.m_a1 + b * this.m_s2 * this.m_a2,
            w = A + b;
          0 == w && (w = 1);
          var C = A * this.m_a1 + b * this.m_a2,
            M = f + x + A * this.m_a1 * this.m_a1 + b * this.m_a2 * this.m_a2;
          if (
            (this.m_K.ex.set(g, B, V),
            this.m_K.ey.set(B, w, C),
            this.m_K.ez.set(V, C, M),
            this.m_enableLimit)
          ) {
            var I = h.dot(this.m_axis, d);
            r.abs(this.m_upperTranslation - this.m_lowerTranslation) <
            2 * l.linearSlop
              ? (this.m_limitState = 3)
              : I <= this.m_lowerTranslation
              ? 1 != this.m_limitState &&
                ((this.m_limitState = 1), (this.m_impulse.z = 0))
              : I >= this.m_upperTranslation
              ? 2 != this.m_limitState &&
                ((this.m_limitState = 2), (this.m_impulse.z = 0))
              : ((this.m_limitState = 0), (this.m_impulse.z = 0));
          } else (this.m_limitState = 0), (this.m_impulse.z = 0);
          if (
            (0 == this.m_enableMotor && (this.m_motorImpulse = 0),
            t.warmStarting)
          ) {
            this.m_impulse.mul(t.dtRatio), (this.m_motorImpulse *= t.dtRatio);
            var z = h.combine(
                this.m_impulse.x,
                this.m_perp,
                this.m_motorImpulse + this.m_impulse.z,
                this.m_axis
              ),
              P =
                this.m_impulse.x * this.m_s1 +
                this.m_impulse.y +
                (this.m_motorImpulse + this.m_impulse.z) * this.m_a1,
              S =
                this.m_impulse.x * this.m_s2 +
                this.m_impulse.y +
                (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
            o.subMul(f, z), (s -= A * P), a.addMul(x, z), (c += b * S);
          } else this.m_impulse.setZero(), (this.m_motorImpulse = 0);
          this.m_bodyA.c_velocity.v.setVec2(o),
            (this.m_bodyA.c_velocity.w = s),
            this.m_bodyB.c_velocity.v.setVec2(a),
            (this.m_bodyB.c_velocity.w = c);
        }),
        (e.prototype.solveVelocityConstraints = function (t) {
          var e = this.m_bodyA.c_velocity.v,
            i = this.m_bodyA.c_velocity.w,
            o = this.m_bodyB.c_velocity.v,
            s = this.m_bodyB.c_velocity.w,
            n = this.m_invMassA,
            m = this.m_invMassB,
            a = this.m_invIA,
            c = this.m_invIB;
          if (this.m_enableMotor && 3 != this.m_limitState) {
            var _ =
                h.dot(this.m_axis, h.sub(o, e)) + this.m_a2 * s - this.m_a1 * i,
              l = this.m_motorMass * (this.m_motorSpeed - _),
              u = this.m_motorImpulse,
              p = t.dt * this.m_maxMotorForce;
            (this.m_motorImpulse = r.clamp(this.m_motorImpulse + l, -p, p)),
              (l = this.m_motorImpulse - u);
            var y = h.mulNumVec2(l, this.m_axis),
              d = l * this.m_a1,
              f = l * this.m_a2;
            e.subMul(n, y), (i -= a * d), o.addMul(m, y), (s += c * f);
          }
          var v = h.zero();
          if (
            ((v.x += h.dot(this.m_perp, o) + this.m_s2 * s),
            (v.x -= h.dot(this.m_perp, e) + this.m_s1 * i),
            (v.y = s - i),
            this.m_enableLimit && 0 != this.m_limitState)
          ) {
            var x = 0;
            (x += h.dot(this.m_axis, o) + this.m_a2 * s),
              (x -= h.dot(this.m_axis, e) + this.m_a1 * i);
            _ = new xt(v.x, v.y, x);
            var A = xt.clone(this.m_impulse),
              b = this.m_K.solve33(xt.neg(_));
            this.m_impulse.add(b),
              1 == this.m_limitState
                ? (this.m_impulse.z = r.max(this.m_impulse.z, 0))
                : 2 == this.m_limitState &&
                  (this.m_impulse.z = r.min(this.m_impulse.z, 0));
            var g = h.combine(
                -1,
                v,
                -(this.m_impulse.z - A.z),
                h.neo(this.m_K.ez.x, this.m_K.ez.y)
              ),
              B = h.add(this.m_K.solve22(g), h.neo(A.x, A.y));
            (this.m_impulse.x = B.x),
              (this.m_impulse.y = B.y),
              (b = xt.sub(this.m_impulse, A));
            (y = h.combine(b.x, this.m_perp, b.z, this.m_axis)),
              (d = b.x * this.m_s1 + b.y + b.z * this.m_a1),
              (f = b.x * this.m_s2 + b.y + b.z * this.m_a2);
            e.subMul(n, y), (i -= a * d), o.addMul(m, y), (s += c * f);
          } else {
            b = this.m_K.solve22(h.neg(v));
            (this.m_impulse.x += b.x), (this.m_impulse.y += b.y);
            (y = h.mulNumVec2(b.x, this.m_perp)),
              (d = b.x * this.m_s1 + b.y),
              (f = b.x * this.m_s2 + b.y);
            e.subMul(n, y), (i -= a * d), o.addMul(m, y), (s += c * f);
          }
          (this.m_bodyA.c_velocity.v = e),
            (this.m_bodyA.c_velocity.w = i),
            (this.m_bodyB.c_velocity.v = o),
            (this.m_bodyB.c_velocity.w = s);
        }),
        (e.prototype.solvePositionConstraints = function (t) {
          var e = this.m_bodyA.c_position.c,
            i = this.m_bodyA.c_position.a,
            o = this.m_bodyB.c_position.c,
            s = this.m_bodyB.c_position.a,
            n = v.neo(i),
            m = v.neo(s),
            a = this.m_invMassA,
            c = this.m_invMassB,
            _ = this.m_invIA,
            u = this.m_invIB,
            p = v.mulVec2(n, h.sub(this.m_localAnchorA, this.m_localCenterA)),
            y = v.mulVec2(m, h.sub(this.m_localAnchorB, this.m_localCenterB)),
            d = h.sub(h.add(o, y), h.add(e, p)),
            f = v.mulVec2(n, this.m_localXAxisA),
            x = h.crossVec2Vec2(h.add(d, p), f),
            A = h.crossVec2Vec2(y, f),
            b = v.mulVec2(n, this.m_localYAxisA),
            g = h.crossVec2Vec2(h.add(d, p), b),
            B = h.crossVec2Vec2(y, b),
            V = new xt(),
            w = h.zero();
          (w.x = h.dot(b, d)), (w.y = s - i - this.m_referenceAngle);
          var C = r.abs(w.x),
            M = r.abs(w.y),
            I = l.linearSlop,
            z = l.maxLinearCorrection,
            P = !1,
            S = 0;
          if (this.m_enableLimit) {
            var T = h.dot(f, d);
            r.abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * I
              ? ((S = r.clamp(T, -z, z)), (C = r.max(C, r.abs(T))), (P = !0))
              : T <= this.m_lowerTranslation
              ? ((S = r.clamp(T - this.m_lowerTranslation + I, -z, 0)),
                (C = r.max(C, this.m_lowerTranslation - T)),
                (P = !0))
              : T >= this.m_upperTranslation &&
                ((S = r.clamp(T - this.m_upperTranslation - I, 0, z)),
                (C = r.max(C, T - this.m_upperTranslation)),
                (P = !0));
          }
          if (P) {
            var F = a + c + _ * g * g + u * B * B,
              q = _ * g + u * B,
              N = _ * g * x + u * B * A;
            0 == (R = _ + u) && (R = 1);
            var k = _ * x + u * A,
              D = a + c + _ * x * x + u * A * A;
            (E = new zt()).ex.set(F, q, N),
              E.ey.set(q, R, k),
              E.ez.set(N, k, D);
            var j = new xt();
            (j.x = w.x), (j.y = w.y), (j.z = S), (V = E.solve33(xt.neg(j)));
          } else {
            var R, E;
            (F = a + c + _ * g * g + u * B * B), (q = _ * g + u * B);
            0 == (R = _ + u) && (R = 1),
              (E = new L()).ex.setNum(F, q),
              E.ey.setNum(q, R);
            var O = E.solve(h.neg(w));
            (V.x = O.x), (V.y = O.y), (V.z = 0);
          }
          var J = h.combine(V.x, b, V.z, f),
            Y = V.x * g + V.y + V.z * x,
            W = V.x * B + V.y + V.z * A;
          return (
            e.subMul(a, J),
            (i -= _ * Y),
            o.addMul(c, J),
            (s += u * W),
            (this.m_bodyA.c_position.c = e),
            (this.m_bodyA.c_position.a = i),
            (this.m_bodyB.c_position.c = o),
            (this.m_bodyB.c_position.a = s),
            C <= l.linearSlop && M <= l.angularSlop
          );
        }),
        (e.TYPE = "prismatic-joint"),
        e
      );
    })(nt),
    Ft = { ratio: 1 },
    qt = (function (t) {
      function e(i, o, n, m, a, c) {
        var _,
          l,
          u = this;
        if (!(u instanceof e)) return new e(i, o, n, m, a, c);
        (i = s(i, Ft)),
          (o = (u = t.call(this, i, o, n) || this).m_bodyA),
          (n = u.m_bodyB),
          (u.m_type = e.TYPE),
          (u.m_joint1 = m || i.joint1),
          (u.m_joint2 = a || i.joint2),
          (u.m_ratio = r.isFinite(c) ? c : i.ratio),
          (u.m_type1 = u.m_joint1.getType()),
          (u.m_type2 = u.m_joint2.getType()),
          (u.m_bodyC = u.m_joint1.getBodyA()),
          (u.m_bodyA = u.m_joint1.getBodyB());
        var p = u.m_bodyA.m_xf,
          y = u.m_bodyA.m_sweep.a,
          d = u.m_bodyC.m_xf,
          f = u.m_bodyC.m_sweep.a;
        if (u.m_type1 === St.TYPE) {
          var x = u.m_joint1;
          (u.m_localAnchorC = x.m_localAnchorA),
            (u.m_localAnchorA = x.m_localAnchorB),
            (u.m_referenceAngleA = x.m_referenceAngle),
            (u.m_localAxisC = h.zero()),
            (_ = y - f - u.m_referenceAngleA);
        } else {
          var A = u.m_joint1;
          (u.m_localAnchorC = A.m_localAnchorA),
            (u.m_localAnchorA = A.m_localAnchorB),
            (u.m_referenceAngleA = A.m_referenceAngle),
            (u.m_localAxisC = A.m_localXAxisA);
          var b = u.m_localAnchorC,
            g = v.mulTVec2(
              d.q,
              h.add(v.mulVec2(p.q, u.m_localAnchorA), h.sub(p.p, d.p))
            );
          _ = h.dot(g, u.m_localAxisC) - h.dot(b, u.m_localAxisC);
        }
        (u.m_bodyD = u.m_joint2.getBodyA()),
          (u.m_bodyB = u.m_joint2.getBodyB());
        var B = u.m_bodyB.m_xf,
          V = u.m_bodyB.m_sweep.a,
          w = u.m_bodyD.m_xf,
          C = u.m_bodyD.m_sweep.a;
        if (u.m_type2 === St.TYPE) {
          x = u.m_joint2;
          (u.m_localAnchorD = x.m_localAnchorA),
            (u.m_localAnchorB = x.m_localAnchorB),
            (u.m_referenceAngleB = x.m_referenceAngle),
            (u.m_localAxisD = h.zero()),
            (l = V - C - u.m_referenceAngleB);
        } else {
          A = u.m_joint2;
          (u.m_localAnchorD = A.m_localAnchorA),
            (u.m_localAnchorB = A.m_localAnchorB),
            (u.m_referenceAngleB = A.m_referenceAngle),
            (u.m_localAxisD = A.m_localXAxisA);
          var M = u.m_localAnchorD,
            I = v.mulTVec2(
              w.q,
              h.add(v.mulVec2(B.q, u.m_localAnchorB), h.sub(B.p, w.p))
            );
          l = h.dot(I, u.m_localAxisD) - h.dot(M, u.m_localAxisD);
        }
        return (u.m_constant = _ + u.m_ratio * l), (u.m_impulse = 0), u;
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            bodyA: this.m_bodyA,
            bodyB: this.m_bodyB,
            collideConnected: this.m_collideConnected,
            joint1: this.m_joint1,
            joint2: this.m_joint2,
            ratio: this.m_ratio,
          };
        }),
        (e._deserialize = function (t, i, s) {
          return (
            ((t = o({}, t)).bodyA = s(T, t.bodyA, i)),
            (t.bodyB = s(T, t.bodyB, i)),
            (t.joint1 = s(nt, t.joint1, i)),
            (t.joint2 = s(nt, t.joint2, i)),
            new e(t)
          );
        }),
        (e.prototype.getJoint1 = function () {
          return this.m_joint1;
        }),
        (e.prototype.getJoint2 = function () {
          return this.m_joint2;
        }),
        (e.prototype.setRatio = function (t) {
          this.m_ratio = t;
        }),
        (e.prototype.getRatio = function () {
          return this.m_ratio;
        }),
        (e.prototype.getAnchorA = function () {
          return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
        }),
        (e.prototype.getAnchorB = function () {
          return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
        }),
        (e.prototype.getReactionForce = function (t) {
          return h.mulNumVec2(this.m_impulse, this.m_JvAC).mul(t);
        }),
        (e.prototype.getReactionTorque = function (t) {
          return t * (this.m_impulse * this.m_JwA);
        }),
        (e.prototype.initVelocityConstraints = function (t) {
          (this.m_lcA = this.m_bodyA.m_sweep.localCenter),
            (this.m_lcB = this.m_bodyB.m_sweep.localCenter),
            (this.m_lcC = this.m_bodyC.m_sweep.localCenter),
            (this.m_lcD = this.m_bodyD.m_sweep.localCenter),
            (this.m_mA = this.m_bodyA.m_invMass),
            (this.m_mB = this.m_bodyB.m_invMass),
            (this.m_mC = this.m_bodyC.m_invMass),
            (this.m_mD = this.m_bodyD.m_invMass),
            (this.m_iA = this.m_bodyA.m_invI),
            (this.m_iB = this.m_bodyB.m_invI),
            (this.m_iC = this.m_bodyC.m_invI),
            (this.m_iD = this.m_bodyD.m_invI);
          var e = this.m_bodyA.c_position.a,
            i = this.m_bodyA.c_velocity.v,
            o = this.m_bodyA.c_velocity.w,
            s = this.m_bodyB.c_position.a,
            n = this.m_bodyB.c_velocity.v,
            r = this.m_bodyB.c_velocity.w,
            m = this.m_bodyC.c_position.a,
            a = this.m_bodyC.c_velocity.v,
            c = this.m_bodyC.c_velocity.w,
            _ = this.m_bodyD.c_position.a,
            l = this.m_bodyD.c_velocity.v,
            u = this.m_bodyD.c_velocity.w,
            p = v.neo(e),
            y = v.neo(s),
            d = v.neo(m),
            f = v.neo(_);
          if (((this.m_mass = 0), this.m_type1 == St.TYPE))
            (this.m_JvAC = h.zero()),
              (this.m_JwA = 1),
              (this.m_JwC = 1),
              (this.m_mass += this.m_iA + this.m_iC);
          else {
            var x = v.mulVec2(d, this.m_localAxisC),
              A = v.mulSub(d, this.m_localAnchorC, this.m_lcC),
              b = v.mulSub(p, this.m_localAnchorA, this.m_lcA);
            (this.m_JvAC = x),
              (this.m_JwC = h.crossVec2Vec2(A, x)),
              (this.m_JwA = h.crossVec2Vec2(b, x)),
              (this.m_mass +=
                this.m_mC +
                this.m_mA +
                this.m_iC * this.m_JwC * this.m_JwC +
                this.m_iA * this.m_JwA * this.m_JwA);
          }
          if (this.m_type2 == St.TYPE)
            (this.m_JvBD = h.zero()),
              (this.m_JwB = this.m_ratio),
              (this.m_JwD = this.m_ratio),
              (this.m_mass +=
                this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD));
          else {
            x = v.mulVec2(f, this.m_localAxisD);
            var g = v.mulSub(f, this.m_localAnchorD, this.m_lcD),
              B = v.mulSub(y, this.m_localAnchorB, this.m_lcB);
            (this.m_JvBD = h.mulNumVec2(this.m_ratio, x)),
              (this.m_JwD = this.m_ratio * h.crossVec2Vec2(g, x)),
              (this.m_JwB = this.m_ratio * h.crossVec2Vec2(B, x)),
              (this.m_mass +=
                this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) +
                this.m_iD * this.m_JwD * this.m_JwD +
                this.m_iB * this.m_JwB * this.m_JwB);
          }
          (this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0),
            t.warmStarting
              ? (i.addMul(this.m_mA * this.m_impulse, this.m_JvAC),
                (o += this.m_iA * this.m_impulse * this.m_JwA),
                n.addMul(this.m_mB * this.m_impulse, this.m_JvBD),
                (r += this.m_iB * this.m_impulse * this.m_JwB),
                a.subMul(this.m_mC * this.m_impulse, this.m_JvAC),
                (c -= this.m_iC * this.m_impulse * this.m_JwC),
                l.subMul(this.m_mD * this.m_impulse, this.m_JvBD),
                (u -= this.m_iD * this.m_impulse * this.m_JwD))
              : (this.m_impulse = 0),
            this.m_bodyA.c_velocity.v.setVec2(i),
            (this.m_bodyA.c_velocity.w = o),
            this.m_bodyB.c_velocity.v.setVec2(n),
            (this.m_bodyB.c_velocity.w = r),
            this.m_bodyC.c_velocity.v.setVec2(a),
            (this.m_bodyC.c_velocity.w = c),
            this.m_bodyD.c_velocity.v.setVec2(l),
            (this.m_bodyD.c_velocity.w = u);
        }),
        (e.prototype.solveVelocityConstraints = function (t) {
          var e = this.m_bodyA.c_velocity.v,
            i = this.m_bodyA.c_velocity.w,
            o = this.m_bodyB.c_velocity.v,
            s = this.m_bodyB.c_velocity.w,
            n = this.m_bodyC.c_velocity.v,
            r = this.m_bodyC.c_velocity.w,
            m = this.m_bodyD.c_velocity.v,
            a = this.m_bodyD.c_velocity.w,
            c =
              h.dot(this.m_JvAC, e) -
              h.dot(this.m_JvAC, n) +
              h.dot(this.m_JvBD, o) -
              h.dot(this.m_JvBD, m);
          c +=
            this.m_JwA * i - this.m_JwC * r + (this.m_JwB * s - this.m_JwD * a);
          var _ = -this.m_mass * c;
          (this.m_impulse += _),
            e.addMul(this.m_mA * _, this.m_JvAC),
            (i += this.m_iA * _ * this.m_JwA),
            o.addMul(this.m_mB * _, this.m_JvBD),
            (s += this.m_iB * _ * this.m_JwB),
            n.subMul(this.m_mC * _, this.m_JvAC),
            (r -= this.m_iC * _ * this.m_JwC),
            m.subMul(this.m_mD * _, this.m_JvBD),
            (a -= this.m_iD * _ * this.m_JwD),
            this.m_bodyA.c_velocity.v.setVec2(e),
            (this.m_bodyA.c_velocity.w = i),
            this.m_bodyB.c_velocity.v.setVec2(o),
            (this.m_bodyB.c_velocity.w = s),
            this.m_bodyC.c_velocity.v.setVec2(n),
            (this.m_bodyC.c_velocity.w = r),
            this.m_bodyD.c_velocity.v.setVec2(m),
            (this.m_bodyD.c_velocity.w = a);
        }),
        (e.prototype.solvePositionConstraints = function (t) {
          var e,
            i,
            o,
            s,
            n,
            r,
            m,
            a,
            c = this.m_bodyA.c_position.c,
            _ = this.m_bodyA.c_position.a,
            u = this.m_bodyB.c_position.c,
            p = this.m_bodyB.c_position.a,
            y = this.m_bodyC.c_position.c,
            d = this.m_bodyC.c_position.a,
            f = this.m_bodyD.c_position.c,
            x = this.m_bodyD.c_position.a,
            A = v.neo(_),
            b = v.neo(p),
            g = v.neo(d),
            B = v.neo(x),
            V = 0;
          if (this.m_type1 == St.TYPE)
            (o = h.zero()),
              (n = 1),
              (m = 1),
              (V += this.m_iA + this.m_iC),
              (e = _ - d - this.m_referenceAngleA);
          else {
            var w = v.mulVec2(g, this.m_localAxisC),
              C = v.mulSub(g, this.m_localAnchorC, this.m_lcC),
              M = v.mulSub(A, this.m_localAnchorA, this.m_lcA);
            (o = w),
              (m = h.crossVec2Vec2(C, w)),
              (n = h.crossVec2Vec2(M, w)),
              (V +=
                this.m_mC + this.m_mA + this.m_iC * m * m + this.m_iA * n * n);
            var I = h.sub(this.m_localAnchorC, this.m_lcC),
              z = v.mulTVec2(g, h.add(M, h.sub(c, y)));
            e = h.dot(h.sub(z, I), this.m_localAxisC);
          }
          if (this.m_type2 == St.TYPE)
            (s = h.zero()),
              (r = this.m_ratio),
              (a = this.m_ratio),
              (V += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD)),
              (i = p - x - this.m_referenceAngleB);
          else {
            w = v.mulVec2(B, this.m_localAxisD);
            var P = v.mulSub(B, this.m_localAnchorD, this.m_lcD),
              S = v.mulSub(b, this.m_localAnchorB, this.m_lcB);
            (s = h.mulNumVec2(this.m_ratio, w)),
              (a = this.m_ratio * h.crossVec2Vec2(P, w)),
              (r = this.m_ratio * h.crossVec2Vec2(S, w)),
              (V +=
                this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) +
                this.m_iD * a * a +
                this.m_iB * r * r);
            var T = h.sub(this.m_localAnchorD, this.m_lcD),
              L = v.mulTVec2(B, h.add(S, h.sub(u, f)));
            i = h.dot(L, this.m_localAxisD) - h.dot(T, this.m_localAxisD);
          }
          var F = e + this.m_ratio * i - this.m_constant,
            q = 0;
          return (
            V > 0 && (q = -F / V),
            c.addMul(this.m_mA * q, o),
            (_ += this.m_iA * q * n),
            u.addMul(this.m_mB * q, s),
            (p += this.m_iB * q * r),
            y.subMul(this.m_mC * q, o),
            (d -= this.m_iC * q * m),
            f.subMul(this.m_mD * q, s),
            (x -= this.m_iD * q * a),
            this.m_bodyA.c_position.c.setVec2(c),
            (this.m_bodyA.c_position.a = _),
            this.m_bodyB.c_position.c.setVec2(u),
            (this.m_bodyB.c_position.a = p),
            this.m_bodyC.c_position.c.setVec2(y),
            (this.m_bodyC.c_position.a = d),
            this.m_bodyD.c_position.c.setVec2(f),
            (this.m_bodyD.c_position.a = x),
            0 < l.linearSlop
          );
        }),
        (e.TYPE = "gear-joint"),
        e
      );
    })(nt),
    Nt = { maxForce: 1, maxTorque: 1, correctionFactor: 0.3 },
    kt = (function (t) {
      function e(i, o, n) {
        var m = this;
        return m instanceof e
          ? ((i = s(i, Nt)),
            (o = (m = t.call(this, i, o, n) || this).m_bodyA),
            (n = m.m_bodyB),
            (m.m_type = e.TYPE),
            (m.m_linearOffset = r.isFinite(i.linearOffset)
              ? i.linearOffset
              : o.getLocalPoint(n.getPosition())),
            (m.m_angularOffset = r.isFinite(i.angularOffset)
              ? i.angularOffset
              : n.getAngle() - o.getAngle()),
            (m.m_linearImpulse = h.zero()),
            (m.m_angularImpulse = 0),
            (m.m_maxForce = i.maxForce),
            (m.m_maxTorque = i.maxTorque),
            (m.m_correctionFactor = i.correctionFactor),
            m)
          : new e(i, o, n);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            bodyA: this.m_bodyA,
            bodyB: this.m_bodyB,
            collideConnected: this.m_collideConnected,
            maxForce: this.m_maxForce,
            maxTorque: this.m_maxTorque,
            correctionFactor: this.m_correctionFactor,
            linearOffset: this.m_linearOffset,
            angularOffset: this.m_angularOffset,
          };
        }),
        (e._deserialize = function (t, i, s) {
          return (
            ((t = o({}, t)).bodyA = s(T, t.bodyA, i)),
            (t.bodyB = s(T, t.bodyB, i)),
            new e(t)
          );
        }),
        (e.prototype._setAnchors = function (t) {}),
        (e.prototype.setMaxForce = function (t) {
          this.m_maxForce = t;
        }),
        (e.prototype.getMaxForce = function () {
          return this.m_maxForce;
        }),
        (e.prototype.setMaxTorque = function (t) {
          this.m_maxTorque = t;
        }),
        (e.prototype.getMaxTorque = function () {
          return this.m_maxTorque;
        }),
        (e.prototype.setCorrectionFactor = function (t) {
          this.m_correctionFactor = t;
        }),
        (e.prototype.getCorrectionFactor = function () {
          return this.m_correctionFactor;
        }),
        (e.prototype.setLinearOffset = function (t) {
          (t.x == this.m_linearOffset.x && t.y == this.m_linearOffset.y) ||
            (this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_linearOffset = t));
        }),
        (e.prototype.getLinearOffset = function () {
          return this.m_linearOffset;
        }),
        (e.prototype.setAngularOffset = function (t) {
          t != this.m_angularOffset &&
            (this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_angularOffset = t));
        }),
        (e.prototype.getAngularOffset = function () {
          return this.m_angularOffset;
        }),
        (e.prototype.getAnchorA = function () {
          return this.m_bodyA.getPosition();
        }),
        (e.prototype.getAnchorB = function () {
          return this.m_bodyB.getPosition();
        }),
        (e.prototype.getReactionForce = function (t) {
          return h.mulNumVec2(t, this.m_linearImpulse);
        }),
        (e.prototype.getReactionTorque = function (t) {
          return t * this.m_angularImpulse;
        }),
        (e.prototype.initVelocityConstraints = function (t) {
          (this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
            (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
            (this.m_invMassA = this.m_bodyA.m_invMass),
            (this.m_invMassB = this.m_bodyB.m_invMass),
            (this.m_invIA = this.m_bodyA.m_invI),
            (this.m_invIB = this.m_bodyB.m_invI);
          var e = this.m_bodyA.c_position.c,
            i = this.m_bodyA.c_position.a,
            o = this.m_bodyA.c_velocity.v,
            s = this.m_bodyA.c_velocity.w,
            n = this.m_bodyB.c_position.c,
            r = this.m_bodyB.c_position.a,
            m = this.m_bodyB.c_velocity.v,
            a = this.m_bodyB.c_velocity.w,
            c = v.neo(i),
            _ = v.neo(r);
          (this.m_rA = v.mulVec2(c, h.neg(this.m_localCenterA))),
            (this.m_rB = v.mulVec2(_, h.neg(this.m_localCenterB)));
          var l = this.m_invMassA,
            u = this.m_invMassB,
            p = this.m_invIA,
            y = this.m_invIB,
            d = new L();
          if (
            ((d.ex.x =
              l +
              u +
              p * this.m_rA.y * this.m_rA.y +
              y * this.m_rB.y * this.m_rB.y),
            (d.ex.y =
              -p * this.m_rA.x * this.m_rA.y - y * this.m_rB.x * this.m_rB.y),
            (d.ey.x = d.ex.y),
            (d.ey.y =
              l +
              u +
              p * this.m_rA.x * this.m_rA.x +
              y * this.m_rB.x * this.m_rB.x),
            (this.m_linearMass = d.getInverse()),
            (this.m_angularMass = p + y),
            this.m_angularMass > 0 &&
              (this.m_angularMass = 1 / this.m_angularMass),
            (this.m_linearError = h.zero()),
            this.m_linearError.addCombine(1, n, 1, this.m_rB),
            this.m_linearError.subCombine(1, e, 1, this.m_rA),
            this.m_linearError.sub(v.mulVec2(c, this.m_linearOffset)),
            (this.m_angularError = r - i - this.m_angularOffset),
            t.warmStarting)
          ) {
            this.m_linearImpulse.mul(t.dtRatio),
              (this.m_angularImpulse *= t.dtRatio);
            var f = h.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
            o.subMul(l, f),
              (s -=
                p * (h.crossVec2Vec2(this.m_rA, f) + this.m_angularImpulse)),
              m.addMul(u, f),
              (a +=
                y * (h.crossVec2Vec2(this.m_rB, f) + this.m_angularImpulse));
          } else this.m_linearImpulse.setZero(), (this.m_angularImpulse = 0);
          (this.m_bodyA.c_velocity.v = o),
            (this.m_bodyA.c_velocity.w = s),
            (this.m_bodyB.c_velocity.v = m),
            (this.m_bodyB.c_velocity.w = a);
        }),
        (e.prototype.solveVelocityConstraints = function (t) {
          var e = this.m_bodyA.c_velocity.v,
            i = this.m_bodyA.c_velocity.w,
            o = this.m_bodyB.c_velocity.v,
            s = this.m_bodyB.c_velocity.w,
            n = this.m_invMassA,
            m = this.m_invMassB,
            a = this.m_invIA,
            c = this.m_invIB,
            _ = t.dt,
            l = t.inv_dt,
            u = s - i + l * this.m_correctionFactor * this.m_angularError,
            p = -this.m_angularMass * u,
            y = this.m_angularImpulse,
            d = _ * this.m_maxTorque;
          (this.m_angularImpulse = r.clamp(this.m_angularImpulse + p, -d, d)),
            (i -= a * (p = this.m_angularImpulse - y)),
            (s += c * p),
            (u = h.zero()).addCombine(1, o, 1, h.crossNumVec2(s, this.m_rB)),
            u.subCombine(1, e, 1, h.crossNumVec2(i, this.m_rA)),
            u.addMul(l * this.m_correctionFactor, this.m_linearError);
          (p = h.neg(L.mulVec2(this.m_linearMass, u))),
            (y = h.clone(this.m_linearImpulse));
          this.m_linearImpulse.add(p);
          d = _ * this.m_maxForce;
          this.m_linearImpulse.clamp(d),
            (p = h.sub(this.m_linearImpulse, y)),
            e.subMul(n, p),
            (i -= a * h.crossVec2Vec2(this.m_rA, p)),
            o.addMul(m, p),
            (s += c * h.crossVec2Vec2(this.m_rB, p)),
            (this.m_bodyA.c_velocity.v = e),
            (this.m_bodyA.c_velocity.w = i),
            (this.m_bodyB.c_velocity.v = o),
            (this.m_bodyB.c_velocity.w = s);
        }),
        (e.prototype.solvePositionConstraints = function (t) {
          return !0;
        }),
        (e.TYPE = "motor-joint"),
        e
      );
    })(nt),
    Dt = { maxForce: 0, frequencyHz: 5, dampingRatio: 0.7 },
    jt = (function (t) {
      function e(i, o, n, r) {
        var m = this;
        return m instanceof e
          ? ((i = s(i, Dt)),
            (o = (m = t.call(this, i, o, n) || this).m_bodyA),
            (n = m.m_bodyB),
            (m.m_type = e.TYPE),
            (m.m_targetA = r ? h.clone(r) : i.target || h.zero()),
            (m.m_localAnchorB = x.mulTVec2(n.getTransform(), m.m_targetA)),
            (m.m_maxForce = i.maxForce),
            (m.m_impulse = h.zero()),
            (m.m_frequencyHz = i.frequencyHz),
            (m.m_dampingRatio = i.dampingRatio),
            (m.m_beta = 0),
            (m.m_gamma = 0),
            (m.m_rB = h.zero()),
            (m.m_localCenterB = h.zero()),
            (m.m_invMassB = 0),
            (m.m_invIB = 0),
            (m.m_mass = new L()),
            (m.m_C = h.zero()),
            m)
          : new e(i, o, n, r);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            bodyA: this.m_bodyA,
            bodyB: this.m_bodyB,
            collideConnected: this.m_collideConnected,
            target: this.m_targetA,
            maxForce: this.m_maxForce,
            frequencyHz: this.m_frequencyHz,
            dampingRatio: this.m_dampingRatio,
            _localAnchorB: this.m_localAnchorB,
          };
        }),
        (e._deserialize = function (t, i, s) {
          ((t = o({}, t)).bodyA = s(T, t.bodyA, i)),
            (t.bodyB = s(T, t.bodyB, i)),
            (t.target = h.clone(t.target));
          var n = new e(t);
          return t._localAnchorB && (n.m_localAnchorB = t._localAnchorB), n;
        }),
        (e.prototype.setTarget = function (t) {
          0 == this.m_bodyB.isAwake() && this.m_bodyB.setAwake(!0),
            (this.m_targetA = h.clone(t));
        }),
        (e.prototype.getTarget = function () {
          return this.m_targetA;
        }),
        (e.prototype.setMaxForce = function (t) {
          this.m_maxForce = t;
        }),
        (e.prototype.getMaxForce = function () {
          return this.m_maxForce;
        }),
        (e.prototype.setFrequency = function (t) {
          this.m_frequencyHz = t;
        }),
        (e.prototype.getFrequency = function () {
          return this.m_frequencyHz;
        }),
        (e.prototype.setDampingRatio = function (t) {
          this.m_dampingRatio = t;
        }),
        (e.prototype.getDampingRatio = function () {
          return this.m_dampingRatio;
        }),
        (e.prototype.getAnchorA = function () {
          return h.clone(this.m_targetA);
        }),
        (e.prototype.getAnchorB = function () {
          return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
        }),
        (e.prototype.getReactionForce = function (t) {
          return h.mulNumVec2(t, this.m_impulse);
        }),
        (e.prototype.getReactionTorque = function (t) {
          return 0 * t;
        }),
        (e.prototype.shiftOrigin = function (t) {
          this.m_targetA.sub(t);
        }),
        (e.prototype.initVelocityConstraints = function (t) {
          (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
            (this.m_invMassB = this.m_bodyB.m_invMass),
            (this.m_invIB = this.m_bodyB.m_invI);
          var e = this.m_bodyB.c_position,
            i = this.m_bodyB.c_velocity,
            o = e.c,
            s = e.a,
            n = i.v,
            m = i.w,
            a = v.neo(s),
            c = this.m_bodyB.getMass(),
            _ = 2 * r.PI * this.m_frequencyHz,
            l = 2 * c * this.m_dampingRatio * _,
            u = c * (_ * _),
            p = t.dt;
          (this.m_gamma = p * (l + p * u)),
            0 != this.m_gamma && (this.m_gamma = 1 / this.m_gamma),
            (this.m_beta = p * u * this.m_gamma),
            (this.m_rB = v.mulVec2(
              a,
              h.sub(this.m_localAnchorB, this.m_localCenterB)
            ));
          var y = new L();
          (y.ex.x =
            this.m_invMassB +
            this.m_invIB * this.m_rB.y * this.m_rB.y +
            this.m_gamma),
            (y.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y),
            (y.ey.x = y.ex.y),
            (y.ey.y =
              this.m_invMassB +
              this.m_invIB * this.m_rB.x * this.m_rB.x +
              this.m_gamma),
            (this.m_mass = y.getInverse()),
            this.m_C.setVec2(o),
            this.m_C.addCombine(1, this.m_rB, -1, this.m_targetA),
            this.m_C.mul(this.m_beta),
            (m *= 0.98),
            t.warmStarting
              ? (this.m_impulse.mul(t.dtRatio),
                n.addMul(this.m_invMassB, this.m_impulse),
                (m +=
                  this.m_invIB * h.crossVec2Vec2(this.m_rB, this.m_impulse)))
              : this.m_impulse.setZero(),
            i.v.setVec2(n),
            (i.w = m);
        }),
        (e.prototype.solveVelocityConstraints = function (t) {
          var e = this.m_bodyB.c_velocity,
            i = h.clone(e.v),
            o = e.w,
            s = h.crossNumVec2(o, this.m_rB);
          s.add(i),
            s.addCombine(1, this.m_C, this.m_gamma, this.m_impulse),
            s.neg();
          var n = L.mulVec2(this.m_mass, s),
            r = h.clone(this.m_impulse);
          this.m_impulse.add(n);
          var m = t.dt * this.m_maxForce;
          this.m_impulse.clamp(m),
            (n = h.sub(this.m_impulse, r)),
            i.addMul(this.m_invMassB, n),
            (o += this.m_invIB * h.crossVec2Vec2(this.m_rB, n)),
            e.v.setVec2(i),
            (e.w = o);
        }),
        (e.prototype.solvePositionConstraints = function (t) {
          return !0;
        }),
        (e.TYPE = "mouse-joint"),
        e
      );
    })(nt),
    Rt = { collideConnected: !0 },
    Et = (function (t) {
      function e(i, o, n, m, a, c, _, l) {
        var u = this;
        return u instanceof e
          ? ((i = s(i, Rt)),
            (o = (u = t.call(this, i, o, n) || this).m_bodyA),
            (n = u.m_bodyB),
            (u.m_type = e.TYPE),
            (u.m_groundAnchorA = m || i.groundAnchorA || h.neo(-1, 1)),
            (u.m_groundAnchorB = a || i.groundAnchorB || h.neo(1, 1)),
            (u.m_localAnchorA = c
              ? o.getLocalPoint(c)
              : i.localAnchorA || h.neo(-1, 0)),
            (u.m_localAnchorB = _
              ? n.getLocalPoint(_)
              : i.localAnchorB || h.neo(1, 0)),
            (u.m_lengthA = r.isFinite(i.lengthA)
              ? i.lengthA
              : h.distance(c, m)),
            (u.m_lengthB = r.isFinite(i.lengthB)
              ? i.lengthB
              : h.distance(_, a)),
            (u.m_ratio = r.isFinite(l) ? l : i.ratio),
            (u.m_constant = u.m_lengthA + u.m_ratio * u.m_lengthB),
            (u.m_impulse = 0),
            u)
          : new e(i, o, n, m, a, c, _, l);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            bodyA: this.m_bodyA,
            bodyB: this.m_bodyB,
            collideConnected: this.m_collideConnected,
            groundAnchorA: this.m_groundAnchorA,
            groundAnchorB: this.m_groundAnchorB,
            localAnchorA: this.m_localAnchorA,
            localAnchorB: this.m_localAnchorB,
            lengthA: this.m_lengthA,
            lengthB: this.m_lengthB,
            ratio: this.m_ratio,
          };
        }),
        (e._deserialize = function (t, i, s) {
          return (
            ((t = o({}, t)).bodyA = s(T, t.bodyA, i)),
            (t.bodyB = s(T, t.bodyB, i)),
            new e(t)
          );
        }),
        (e.prototype.getGroundAnchorA = function () {
          return this.m_groundAnchorA;
        }),
        (e.prototype.getGroundAnchorB = function () {
          return this.m_groundAnchorB;
        }),
        (e.prototype.getLengthA = function () {
          return this.m_lengthA;
        }),
        (e.prototype.getLengthB = function () {
          return this.m_lengthB;
        }),
        (e.prototype.getRatio = function () {
          return this.m_ratio;
        }),
        (e.prototype.getCurrentLengthA = function () {
          var t = this.m_bodyA.getWorldPoint(this.m_localAnchorA),
            e = this.m_groundAnchorA;
          return h.distance(t, e);
        }),
        (e.prototype.getCurrentLengthB = function () {
          var t = this.m_bodyB.getWorldPoint(this.m_localAnchorB),
            e = this.m_groundAnchorB;
          return h.distance(t, e);
        }),
        (e.prototype.shiftOrigin = function (t) {
          this.m_groundAnchorA.sub(t), this.m_groundAnchorB.sub(t);
        }),
        (e.prototype.getAnchorA = function () {
          return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
        }),
        (e.prototype.getAnchorB = function () {
          return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
        }),
        (e.prototype.getReactionForce = function (t) {
          return h.mulNumVec2(this.m_impulse, this.m_uB).mul(t);
        }),
        (e.prototype.getReactionTorque = function (t) {
          return 0;
        }),
        (e.prototype.initVelocityConstraints = function (t) {
          (this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
            (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
            (this.m_invMassA = this.m_bodyA.m_invMass),
            (this.m_invMassB = this.m_bodyB.m_invMass),
            (this.m_invIA = this.m_bodyA.m_invI),
            (this.m_invIB = this.m_bodyB.m_invI);
          var e = this.m_bodyA.c_position.c,
            i = this.m_bodyA.c_position.a,
            o = this.m_bodyA.c_velocity.v,
            s = this.m_bodyA.c_velocity.w,
            n = this.m_bodyB.c_position.c,
            r = this.m_bodyB.c_position.a,
            m = this.m_bodyB.c_velocity.v,
            a = this.m_bodyB.c_velocity.w,
            c = v.neo(i),
            _ = v.neo(r);
          (this.m_rA = v.mulVec2(
            c,
            h.sub(this.m_localAnchorA, this.m_localCenterA)
          )),
            (this.m_rB = v.mulVec2(
              _,
              h.sub(this.m_localAnchorB, this.m_localCenterB)
            )),
            (this.m_uA = h.sub(h.add(e, this.m_rA), this.m_groundAnchorA)),
            (this.m_uB = h.sub(h.add(n, this.m_rB), this.m_groundAnchorB));
          var u = this.m_uA.length(),
            p = this.m_uB.length();
          u > 10 * l.linearSlop ? this.m_uA.mul(1 / u) : this.m_uA.setZero(),
            p > 10 * l.linearSlop ? this.m_uB.mul(1 / p) : this.m_uB.setZero();
          var y = h.crossVec2Vec2(this.m_rA, this.m_uA),
            d = h.crossVec2Vec2(this.m_rB, this.m_uB),
            f = this.m_invMassA + this.m_invIA * y * y,
            x = this.m_invMassB + this.m_invIB * d * d;
          if (
            ((this.m_mass = f + this.m_ratio * this.m_ratio * x),
            this.m_mass > 0 && (this.m_mass = 1 / this.m_mass),
            t.warmStarting)
          ) {
            this.m_impulse *= t.dtRatio;
            var A = h.mulNumVec2(-this.m_impulse, this.m_uA),
              b = h.mulNumVec2(-this.m_ratio * this.m_impulse, this.m_uB);
            o.addMul(this.m_invMassA, A),
              (s += this.m_invIA * h.crossVec2Vec2(this.m_rA, A)),
              m.addMul(this.m_invMassB, b),
              (a += this.m_invIB * h.crossVec2Vec2(this.m_rB, b));
          } else this.m_impulse = 0;
          (this.m_bodyA.c_velocity.v = o),
            (this.m_bodyA.c_velocity.w = s),
            (this.m_bodyB.c_velocity.v = m),
            (this.m_bodyB.c_velocity.w = a);
        }),
        (e.prototype.solveVelocityConstraints = function (t) {
          var e = this.m_bodyA.c_velocity.v,
            i = this.m_bodyA.c_velocity.w,
            o = this.m_bodyB.c_velocity.v,
            s = this.m_bodyB.c_velocity.w,
            n = h.add(e, h.crossNumVec2(i, this.m_rA)),
            r = h.add(o, h.crossNumVec2(s, this.m_rB)),
            m = -h.dot(this.m_uA, n) - this.m_ratio * h.dot(this.m_uB, r),
            a = -this.m_mass * m;
          this.m_impulse += a;
          var c = h.mulNumVec2(-a, this.m_uA),
            _ = h.mulNumVec2(-this.m_ratio * a, this.m_uB);
          e.addMul(this.m_invMassA, c),
            (i += this.m_invIA * h.crossVec2Vec2(this.m_rA, c)),
            o.addMul(this.m_invMassB, _),
            (s += this.m_invIB * h.crossVec2Vec2(this.m_rB, _)),
            (this.m_bodyA.c_velocity.v = e),
            (this.m_bodyA.c_velocity.w = i),
            (this.m_bodyB.c_velocity.v = o),
            (this.m_bodyB.c_velocity.w = s);
        }),
        (e.prototype.solvePositionConstraints = function (t) {
          var e = this.m_bodyA.c_position.c,
            i = this.m_bodyA.c_position.a,
            o = this.m_bodyB.c_position.c,
            s = this.m_bodyB.c_position.a,
            n = v.neo(i),
            m = v.neo(s),
            a = v.mulVec2(n, h.sub(this.m_localAnchorA, this.m_localCenterA)),
            c = v.mulVec2(m, h.sub(this.m_localAnchorB, this.m_localCenterB)),
            _ = h.sub(h.add(e, this.m_rA), this.m_groundAnchorA),
            u = h.sub(h.add(o, this.m_rB), this.m_groundAnchorB),
            p = _.length(),
            y = u.length();
          p > 10 * l.linearSlop ? _.mul(1 / p) : _.setZero(),
            y > 10 * l.linearSlop ? u.mul(1 / y) : u.setZero();
          var d = h.crossVec2Vec2(a, _),
            f = h.crossVec2Vec2(c, u),
            x = this.m_invMassA + this.m_invIA * d * d,
            A = this.m_invMassB + this.m_invIB * f * f,
            b = x + this.m_ratio * this.m_ratio * A;
          b > 0 && (b = 1 / b);
          var g = this.m_constant - p - this.m_ratio * y,
            B = r.abs(g),
            V = -b * g,
            w = h.mulNumVec2(-V, _),
            C = h.mulNumVec2(-this.m_ratio * V, u);
          return (
            e.addMul(this.m_invMassA, w),
            (i += this.m_invIA * h.crossVec2Vec2(a, w)),
            o.addMul(this.m_invMassB, C),
            (s += this.m_invIB * h.crossVec2Vec2(c, C)),
            (this.m_bodyA.c_position.c = e),
            (this.m_bodyA.c_position.a = i),
            (this.m_bodyB.c_position.c = o),
            (this.m_bodyB.c_position.a = s),
            B < l.linearSlop
          );
        }),
        (e.TYPE = "pulley-joint"),
        e
      );
    })(nt),
    Ot = { maxLength: 0 },
    Jt = (function (t) {
      function e(i, o, n, r) {
        var m = this;
        return m instanceof e
          ? ((i = s(i, Ot)),
            (o = (m = t.call(this, i, o, n) || this).m_bodyA),
            (n = m.m_bodyB),
            (m.m_type = e.TYPE),
            (m.m_localAnchorA = r
              ? o.getLocalPoint(r)
              : i.localAnchorA || h.neo(-1, 0)),
            (m.m_localAnchorB = r
              ? n.getLocalPoint(r)
              : i.localAnchorB || h.neo(1, 0)),
            (m.m_maxLength = i.maxLength),
            (m.m_mass = 0),
            (m.m_impulse = 0),
            (m.m_length = 0),
            (m.m_state = 0),
            m)
          : new e(i, o, n, r);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            bodyA: this.m_bodyA,
            bodyB: this.m_bodyB,
            collideConnected: this.m_collideConnected,
            localAnchorA: this.m_localAnchorA,
            localAnchorB: this.m_localAnchorB,
            maxLength: this.m_maxLength,
          };
        }),
        (e._deserialize = function (t, i, s) {
          return (
            ((t = o({}, t)).bodyA = s(T, t.bodyA, i)),
            (t.bodyB = s(T, t.bodyB, i)),
            new e(t)
          );
        }),
        (e.prototype.getLocalAnchorA = function () {
          return this.m_localAnchorA;
        }),
        (e.prototype.getLocalAnchorB = function () {
          return this.m_localAnchorB;
        }),
        (e.prototype.setMaxLength = function (t) {
          this.m_maxLength = t;
        }),
        (e.prototype.getMaxLength = function () {
          return this.m_maxLength;
        }),
        (e.prototype.getLimitState = function () {
          return this.m_state;
        }),
        (e.prototype.getAnchorA = function () {
          return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
        }),
        (e.prototype.getAnchorB = function () {
          return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
        }),
        (e.prototype.getReactionForce = function (t) {
          return h.mulNumVec2(this.m_impulse, this.m_u).mul(t);
        }),
        (e.prototype.getReactionTorque = function (t) {
          return 0;
        }),
        (e.prototype.initVelocityConstraints = function (t) {
          (this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
            (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
            (this.m_invMassA = this.m_bodyA.m_invMass),
            (this.m_invMassB = this.m_bodyB.m_invMass),
            (this.m_invIA = this.m_bodyA.m_invI),
            (this.m_invIB = this.m_bodyB.m_invI);
          var e = this.m_bodyA.c_position.c,
            i = this.m_bodyA.c_position.a,
            o = this.m_bodyA.c_velocity.v,
            s = this.m_bodyA.c_velocity.w,
            n = this.m_bodyB.c_position.c,
            r = this.m_bodyB.c_position.a,
            m = this.m_bodyB.c_velocity.v,
            a = this.m_bodyB.c_velocity.w,
            c = v.neo(i),
            _ = v.neo(r);
          (this.m_rA = v.mulSub(c, this.m_localAnchorA, this.m_localCenterA)),
            (this.m_rB = v.mulSub(_, this.m_localAnchorB, this.m_localCenterB)),
            (this.m_u = h.zero()),
            this.m_u.addCombine(1, n, 1, this.m_rB),
            this.m_u.subCombine(1, e, 1, this.m_rA),
            (this.m_length = this.m_u.length());
          var u = this.m_length - this.m_maxLength;
          if (((this.m_state = u > 0 ? 2 : 0), !(this.m_length > l.linearSlop)))
            return (
              this.m_u.setZero(), (this.m_mass = 0), void (this.m_impulse = 0)
            );
          this.m_u.mul(1 / this.m_length);
          var p = h.crossVec2Vec2(this.m_rA, this.m_u),
            y = h.crossVec2Vec2(this.m_rB, this.m_u),
            d =
              this.m_invMassA +
              this.m_invIA * p * p +
              this.m_invMassB +
              this.m_invIB * y * y;
          if (((this.m_mass = 0 != d ? 1 / d : 0), t.warmStarting)) {
            this.m_impulse *= t.dtRatio;
            var f = h.mulNumVec2(this.m_impulse, this.m_u);
            o.subMul(this.m_invMassA, f),
              (s -= this.m_invIA * h.crossVec2Vec2(this.m_rA, f)),
              m.addMul(this.m_invMassB, f),
              (a += this.m_invIB * h.crossVec2Vec2(this.m_rB, f));
          } else this.m_impulse = 0;
          this.m_bodyA.c_velocity.v.setVec2(o),
            (this.m_bodyA.c_velocity.w = s),
            this.m_bodyB.c_velocity.v.setVec2(m),
            (this.m_bodyB.c_velocity.w = a);
        }),
        (e.prototype.solveVelocityConstraints = function (t) {
          var e = this.m_bodyA.c_velocity.v,
            i = this.m_bodyA.c_velocity.w,
            o = this.m_bodyB.c_velocity.v,
            s = this.m_bodyB.c_velocity.w,
            n = h.addCrossNumVec2(e, i, this.m_rA),
            m = h.addCrossNumVec2(o, s, this.m_rB),
            a = this.m_length - this.m_maxLength,
            c = h.dot(this.m_u, h.sub(m, n));
          a < 0 && (c += t.inv_dt * a);
          var _ = -this.m_mass * c,
            l = this.m_impulse;
          (this.m_impulse = r.min(0, this.m_impulse + _)),
            (_ = this.m_impulse - l);
          var u = h.mulNumVec2(_, this.m_u);
          e.subMul(this.m_invMassA, u),
            (i -= this.m_invIA * h.crossVec2Vec2(this.m_rA, u)),
            o.addMul(this.m_invMassB, u),
            (s += this.m_invIB * h.crossVec2Vec2(this.m_rB, u)),
            (this.m_bodyA.c_velocity.v = e),
            (this.m_bodyA.c_velocity.w = i),
            (this.m_bodyB.c_velocity.v = o),
            (this.m_bodyB.c_velocity.w = s);
        }),
        (e.prototype.solvePositionConstraints = function (t) {
          var e = this.m_bodyA.c_position.c,
            i = this.m_bodyA.c_position.a,
            o = this.m_bodyB.c_position.c,
            s = this.m_bodyB.c_position.a,
            n = v.neo(i),
            m = v.neo(s),
            a = v.mulSub(n, this.m_localAnchorA, this.m_localCenterA),
            c = v.mulSub(m, this.m_localAnchorB, this.m_localCenterB),
            _ = h.zero();
          _.addCombine(1, o, 1, c), _.subCombine(1, e, 1, a);
          var u = _.normalize(),
            p = u - this.m_maxLength;
          p = r.clamp(p, 0, l.maxLinearCorrection);
          var y = -this.m_mass * p,
            d = h.mulNumVec2(y, _);
          return (
            e.subMul(this.m_invMassA, d),
            (i -= this.m_invIA * h.crossVec2Vec2(a, d)),
            o.addMul(this.m_invMassB, d),
            (s += this.m_invIB * h.crossVec2Vec2(c, d)),
            this.m_bodyA.c_position.c.setVec2(e),
            (this.m_bodyA.c_position.a = i),
            this.m_bodyB.c_position.c.setVec2(o),
            (this.m_bodyB.c_position.a = s),
            u - this.m_maxLength < l.linearSlop
          );
        }),
        (e.TYPE = "rope-joint"),
        e
      );
    })(nt),
    Yt = { frequencyHz: 0, dampingRatio: 0 },
    Wt = (function (t) {
      function e(i, o, n, m) {
        var a = this;
        return a instanceof e
          ? ((i = s(i, Yt)),
            (o = (a = t.call(this, i, o, n) || this).m_bodyA),
            (n = a.m_bodyB),
            (a.m_type = e.TYPE),
            (a.m_localAnchorA = h.clone(
              m ? o.getLocalPoint(m) : i.localAnchorA || h.zero()
            )),
            (a.m_localAnchorB = h.clone(
              m ? n.getLocalPoint(m) : i.localAnchorB || h.zero()
            )),
            (a.m_referenceAngle = r.isFinite(i.referenceAngle)
              ? i.referenceAngle
              : n.getAngle() - o.getAngle()),
            (a.m_frequencyHz = i.frequencyHz),
            (a.m_dampingRatio = i.dampingRatio),
            (a.m_impulse = new xt()),
            (a.m_bias = 0),
            (a.m_gamma = 0),
            a.m_rA,
            a.m_rB,
            a.m_localCenterA,
            a.m_localCenterB,
            a.m_invMassA,
            a.m_invMassB,
            a.m_invIA,
            a.m_invIB,
            (a.m_mass = new zt()),
            a)
          : new e(i, o, n, m);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            bodyA: this.m_bodyA,
            bodyB: this.m_bodyB,
            collideConnected: this.m_collideConnected,
            frequencyHz: this.m_frequencyHz,
            dampingRatio: this.m_dampingRatio,
            localAnchorA: this.m_localAnchorA,
            localAnchorB: this.m_localAnchorB,
            referenceAngle: this.m_referenceAngle,
          };
        }),
        (e._deserialize = function (t, i, s) {
          return (
            ((t = o({}, t)).bodyA = s(T, t.bodyA, i)),
            (t.bodyB = s(T, t.bodyB, i)),
            new e(t)
          );
        }),
        (e.prototype._setAnchors = function (t) {
          t.anchorA
            ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA))
            : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA),
            t.anchorB
              ? this.m_localAnchorB.setVec2(
                  this.m_bodyB.getLocalPoint(t.anchorB)
                )
              : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB);
        }),
        (e.prototype.getLocalAnchorA = function () {
          return this.m_localAnchorA;
        }),
        (e.prototype.getLocalAnchorB = function () {
          return this.m_localAnchorB;
        }),
        (e.prototype.getReferenceAngle = function () {
          return this.m_referenceAngle;
        }),
        (e.prototype.setFrequency = function (t) {
          this.m_frequencyHz = t;
        }),
        (e.prototype.getFrequency = function () {
          return this.m_frequencyHz;
        }),
        (e.prototype.setDampingRatio = function (t) {
          this.m_dampingRatio = t;
        }),
        (e.prototype.getDampingRatio = function () {
          return this.m_dampingRatio;
        }),
        (e.prototype.getAnchorA = function () {
          return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
        }),
        (e.prototype.getAnchorB = function () {
          return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
        }),
        (e.prototype.getReactionForce = function (t) {
          return h.neo(this.m_impulse.x, this.m_impulse.y).mul(t);
        }),
        (e.prototype.getReactionTorque = function (t) {
          return t * this.m_impulse.z;
        }),
        (e.prototype.initVelocityConstraints = function (t) {
          (this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
            (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
            (this.m_invMassA = this.m_bodyA.m_invMass),
            (this.m_invMassB = this.m_bodyB.m_invMass),
            (this.m_invIA = this.m_bodyA.m_invI),
            (this.m_invIB = this.m_bodyB.m_invI);
          var e = this.m_bodyA.c_position.a,
            i = this.m_bodyA.c_velocity.v,
            o = this.m_bodyA.c_velocity.w,
            s = this.m_bodyB.c_position.a,
            n = this.m_bodyB.c_velocity.v,
            m = this.m_bodyB.c_velocity.w,
            a = v.neo(e),
            c = v.neo(s);
          (this.m_rA = v.mulVec2(
            a,
            h.sub(this.m_localAnchorA, this.m_localCenterA)
          )),
            (this.m_rB = v.mulVec2(
              c,
              h.sub(this.m_localAnchorB, this.m_localCenterB)
            ));
          var _ = this.m_invMassA,
            l = this.m_invMassB,
            u = this.m_invIA,
            p = this.m_invIB,
            y = new zt();
          if (
            ((y.ex.x =
              _ +
              l +
              this.m_rA.y * this.m_rA.y * u +
              this.m_rB.y * this.m_rB.y * p),
            (y.ey.x =
              -this.m_rA.y * this.m_rA.x * u - this.m_rB.y * this.m_rB.x * p),
            (y.ez.x = -this.m_rA.y * u - this.m_rB.y * p),
            (y.ex.y = y.ey.x),
            (y.ey.y =
              _ +
              l +
              this.m_rA.x * this.m_rA.x * u +
              this.m_rB.x * this.m_rB.x * p),
            (y.ez.y = this.m_rA.x * u + this.m_rB.x * p),
            (y.ex.z = y.ez.x),
            (y.ey.z = y.ez.y),
            (y.ez.z = u + p),
            this.m_frequencyHz > 0)
          ) {
            y.getInverse22(this.m_mass);
            var d = u + p,
              f = d > 0 ? 1 / d : 0,
              x = s - e - this.m_referenceAngle,
              A = 2 * r.PI * this.m_frequencyHz,
              b = 2 * f * this.m_dampingRatio * A,
              g = f * A * A,
              B = t.dt;
            (this.m_gamma = B * (b + B * g)),
              (this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0),
              (this.m_bias = x * B * g * this.m_gamma),
              (d += this.m_gamma),
              (this.m_mass.ez.z = 0 != d ? 1 / d : 0);
          } else
            0 == y.ez.z
              ? (y.getInverse22(this.m_mass),
                (this.m_gamma = 0),
                (this.m_bias = 0))
              : (y.getSymInverse33(this.m_mass),
                (this.m_gamma = 0),
                (this.m_bias = 0));
          if (t.warmStarting) {
            this.m_impulse.mul(t.dtRatio);
            var V = h.neo(this.m_impulse.x, this.m_impulse.y);
            i.subMul(_, V),
              (o -= u * (h.crossVec2Vec2(this.m_rA, V) + this.m_impulse.z)),
              n.addMul(l, V),
              (m += p * (h.crossVec2Vec2(this.m_rB, V) + this.m_impulse.z));
          } else this.m_impulse.setZero();
          (this.m_bodyA.c_velocity.v = i),
            (this.m_bodyA.c_velocity.w = o),
            (this.m_bodyB.c_velocity.v = n),
            (this.m_bodyB.c_velocity.w = m);
        }),
        (e.prototype.solveVelocityConstraints = function (t) {
          var e = this.m_bodyA.c_velocity.v,
            i = this.m_bodyA.c_velocity.w,
            o = this.m_bodyB.c_velocity.v,
            s = this.m_bodyB.c_velocity.w,
            n = this.m_invMassA,
            r = this.m_invMassB,
            m = this.m_invIA,
            a = this.m_invIB;
          if (this.m_frequencyHz > 0) {
            var c = s - i,
              _ =
                -this.m_mass.ez.z *
                (c + this.m_bias + this.m_gamma * this.m_impulse.z);
            (this.m_impulse.z += _),
              (i -= m * _),
              (s += a * _),
              (p = h.zero()).addCombine(1, o, 1, h.crossNumVec2(s, this.m_rB)),
              p.subCombine(1, e, 1, h.crossNumVec2(i, this.m_rA));
            var l = h.neg(zt.mulVec2(this.m_mass, p));
            (this.m_impulse.x += l.x), (this.m_impulse.y += l.y);
            var u = h.clone(l);
            e.subMul(n, u),
              (i -= m * h.crossVec2Vec2(this.m_rA, u)),
              o.addMul(r, u),
              (s += a * h.crossVec2Vec2(this.m_rB, u));
          } else {
            var p;
            (p = h.zero()).addCombine(1, o, 1, h.crossNumVec2(s, this.m_rB)),
              p.subCombine(1, e, 1, h.crossNumVec2(i, this.m_rA));
            c = s - i;
            var y = new xt(p.x, p.y, c),
              d = xt.neg(zt.mulVec3(this.m_mass, y));
            this.m_impulse.add(d);
            u = h.neo(d.x, d.y);
            e.subMul(n, u),
              (i -= m * (h.crossVec2Vec2(this.m_rA, u) + d.z)),
              o.addMul(r, u),
              (s += a * (h.crossVec2Vec2(this.m_rB, u) + d.z));
          }
          (this.m_bodyA.c_velocity.v = e),
            (this.m_bodyA.c_velocity.w = i),
            (this.m_bodyB.c_velocity.v = o),
            (this.m_bodyB.c_velocity.w = s);
        }),
        (e.prototype.solvePositionConstraints = function (t) {
          var e,
            i,
            o = this.m_bodyA.c_position.c,
            s = this.m_bodyA.c_position.a,
            n = this.m_bodyB.c_position.c,
            m = this.m_bodyB.c_position.a,
            a = v.neo(s),
            c = v.neo(m),
            _ = this.m_invMassA,
            u = this.m_invMassB,
            p = this.m_invIA,
            y = this.m_invIB,
            d = v.mulVec2(a, h.sub(this.m_localAnchorA, this.m_localCenterA)),
            f = v.mulVec2(c, h.sub(this.m_localAnchorB, this.m_localCenterB)),
            x = new zt();
          if (
            ((x.ex.x = _ + u + d.y * d.y * p + f.y * f.y * y),
            (x.ey.x = -d.y * d.x * p - f.y * f.x * y),
            (x.ez.x = -d.y * p - f.y * y),
            (x.ex.y = x.ey.x),
            (x.ey.y = _ + u + d.x * d.x * p + f.x * f.x * y),
            (x.ez.y = d.x * p + f.x * y),
            (x.ex.z = x.ez.x),
            (x.ey.z = x.ez.y),
            (x.ez.z = p + y),
            this.m_frequencyHz > 0)
          ) {
            (b = h.zero()).addCombine(1, n, 1, f),
              b.subCombine(1, o, 1, d),
              (e = b.length()),
              (i = 0);
            var A = h.neg(x.solve22(b));
            o.subMul(_, A),
              (s -= p * h.crossVec2Vec2(d, A)),
              n.addMul(u, A),
              (m += y * h.crossVec2Vec2(f, A));
          } else {
            var b;
            (b = h.zero()).addCombine(1, n, 1, f), b.subCombine(1, o, 1, d);
            var g = m - s - this.m_referenceAngle;
            (e = b.length()), (i = r.abs(g));
            var B = new xt(b.x, b.y, g),
              V = new xt();
            if (x.ez.z > 0) V = xt.neg(x.solve33(B));
            else {
              var w = h.neg(x.solve22(b));
              V.set(w.x, w.y, 0);
            }
            A = h.neo(V.x, V.y);
            o.subMul(_, A),
              (s -= p * (h.crossVec2Vec2(d, A) + V.z)),
              n.addMul(u, A),
              (m += y * (h.crossVec2Vec2(f, A) + V.z));
          }
          return (
            (this.m_bodyA.c_position.c = o),
            (this.m_bodyA.c_position.a = s),
            (this.m_bodyB.c_position.c = n),
            (this.m_bodyB.c_position.a = m),
            e <= l.linearSlop && i <= l.angularSlop
          );
        }),
        (e.TYPE = "weld-joint"),
        e
      );
    })(nt),
    Ht = {
      enableMotor: !1,
      maxMotorTorque: 0,
      motorSpeed: 0,
      frequencyHz: 2,
      dampingRatio: 0.7,
    },
    Zt = (function (t) {
      function e(i, o, n, r, m) {
        var a = this;
        return a instanceof e
          ? ((i = s(i, Ht)),
            ((a = t.call(this, i, o, n) || this).m_ax = h.zero()),
            (a.m_ay = h.zero()),
            (o = a.m_bodyA),
            (n = a.m_bodyB),
            (a.m_type = e.TYPE),
            (a.m_localAnchorA = h.clone(
              r ? o.getLocalPoint(r) : i.localAnchorA || h.zero()
            )),
            (a.m_localAnchorB = h.clone(
              r ? n.getLocalPoint(r) : i.localAnchorB || h.zero()
            )),
            (a.m_localXAxisA = h.clone(
              m
                ? o.getLocalVector(m)
                : i.localAxisA || i.localAxis || h.neo(1, 0)
            )),
            (a.m_localYAxisA = h.crossNumVec2(1, a.m_localXAxisA)),
            (a.m_mass = 0),
            (a.m_impulse = 0),
            (a.m_motorMass = 0),
            (a.m_motorImpulse = 0),
            (a.m_springMass = 0),
            (a.m_springImpulse = 0),
            (a.m_maxMotorTorque = i.maxMotorTorque),
            (a.m_motorSpeed = i.motorSpeed),
            (a.m_enableMotor = i.enableMotor),
            (a.m_frequencyHz = i.frequencyHz),
            (a.m_dampingRatio = i.dampingRatio),
            (a.m_bias = 0),
            (a.m_gamma = 0),
            a)
          : new e(i, o, n, r, m);
      }
      return (
        i(e, t),
        (e.prototype._serialize = function () {
          return {
            type: this.m_type,
            bodyA: this.m_bodyA,
            bodyB: this.m_bodyB,
            collideConnected: this.m_collideConnected,
            enableMotor: this.m_enableMotor,
            maxMotorTorque: this.m_maxMotorTorque,
            motorSpeed: this.m_motorSpeed,
            frequencyHz: this.m_frequencyHz,
            dampingRatio: this.m_dampingRatio,
            localAnchorA: this.m_localAnchorA,
            localAnchorB: this.m_localAnchorB,
            localAxisA: this.m_localXAxisA,
          };
        }),
        (e._deserialize = function (t, i, s) {
          return (
            ((t = o({}, t)).bodyA = s(T, t.bodyA, i)),
            (t.bodyB = s(T, t.bodyB, i)),
            new e(t)
          );
        }),
        (e.prototype._setAnchors = function (t) {
          t.anchorA
            ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA))
            : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA),
            t.anchorB
              ? this.m_localAnchorB.setVec2(
                  this.m_bodyB.getLocalPoint(t.anchorB)
                )
              : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB),
            t.localAxisA &&
              (this.m_localXAxisA.setVec2(t.localAxisA),
              this.m_localYAxisA.setVec2(h.crossNumVec2(1, t.localAxisA)));
        }),
        (e.prototype.getLocalAnchorA = function () {
          return this.m_localAnchorA;
        }),
        (e.prototype.getLocalAnchorB = function () {
          return this.m_localAnchorB;
        }),
        (e.prototype.getLocalAxisA = function () {
          return this.m_localXAxisA;
        }),
        (e.prototype.getJointTranslation = function () {
          var t = this.m_bodyA,
            e = this.m_bodyB,
            i = t.getWorldPoint(this.m_localAnchorA),
            o = e.getWorldPoint(this.m_localAnchorB),
            s = h.sub(o, i),
            n = t.getWorldVector(this.m_localXAxisA);
          return h.dot(s, n);
        }),
        (e.prototype.getJointSpeed = function () {
          var t = this.m_bodyA.m_angularVelocity;
          return this.m_bodyB.m_angularVelocity - t;
        }),
        (e.prototype.isMotorEnabled = function () {
          return this.m_enableMotor;
        }),
        (e.prototype.enableMotor = function (t) {
          this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_enableMotor = t);
        }),
        (e.prototype.setMotorSpeed = function (t) {
          this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_motorSpeed = t);
        }),
        (e.prototype.getMotorSpeed = function () {
          return this.m_motorSpeed;
        }),
        (e.prototype.setMaxMotorTorque = function (t) {
          this.m_bodyA.setAwake(!0),
            this.m_bodyB.setAwake(!0),
            (this.m_maxMotorTorque = t);
        }),
        (e.prototype.getMaxMotorTorque = function () {
          return this.m_maxMotorTorque;
        }),
        (e.prototype.getMotorTorque = function (t) {
          return t * this.m_motorImpulse;
        }),
        (e.prototype.setSpringFrequencyHz = function (t) {
          this.m_frequencyHz = t;
        }),
        (e.prototype.getSpringFrequencyHz = function () {
          return this.m_frequencyHz;
        }),
        (e.prototype.setSpringDampingRatio = function (t) {
          this.m_dampingRatio = t;
        }),
        (e.prototype.getSpringDampingRatio = function () {
          return this.m_dampingRatio;
        }),
        (e.prototype.getAnchorA = function () {
          return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
        }),
        (e.prototype.getAnchorB = function () {
          return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
        }),
        (e.prototype.getReactionForce = function (t) {
          return h
            .combine(this.m_impulse, this.m_ay, this.m_springImpulse, this.m_ax)
            .mul(t);
        }),
        (e.prototype.getReactionTorque = function (t) {
          return t * this.m_motorImpulse;
        }),
        (e.prototype.initVelocityConstraints = function (t) {
          (this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
            (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
            (this.m_invMassA = this.m_bodyA.m_invMass),
            (this.m_invMassB = this.m_bodyB.m_invMass),
            (this.m_invIA = this.m_bodyA.m_invI),
            (this.m_invIB = this.m_bodyB.m_invI);
          var e = this.m_invMassA,
            i = this.m_invMassB,
            o = this.m_invIA,
            s = this.m_invIB,
            n = this.m_bodyA.c_position.c,
            m = this.m_bodyA.c_position.a,
            a = this.m_bodyA.c_velocity.v,
            c = this.m_bodyA.c_velocity.w,
            _ = this.m_bodyB.c_position.c,
            l = this.m_bodyB.c_position.a,
            u = this.m_bodyB.c_velocity.v,
            p = this.m_bodyB.c_velocity.w,
            y = v.neo(m),
            d = v.neo(l),
            f = v.mulVec2(y, h.sub(this.m_localAnchorA, this.m_localCenterA)),
            x = v.mulVec2(d, h.sub(this.m_localAnchorB, this.m_localCenterB)),
            A = h.zero();
          if (
            (A.addCombine(1, _, 1, x),
            A.subCombine(1, n, 1, f),
            (this.m_ay = v.mulVec2(y, this.m_localYAxisA)),
            (this.m_sAy = h.crossVec2Vec2(h.add(A, f), this.m_ay)),
            (this.m_sBy = h.crossVec2Vec2(x, this.m_ay)),
            (this.m_mass =
              e +
              i +
              o * this.m_sAy * this.m_sAy +
              s * this.m_sBy * this.m_sBy),
            this.m_mass > 0 && (this.m_mass = 1 / this.m_mass),
            (this.m_springMass = 0),
            (this.m_bias = 0),
            (this.m_gamma = 0),
            this.m_frequencyHz > 0)
          ) {
            (this.m_ax = v.mulVec2(y, this.m_localXAxisA)),
              (this.m_sAx = h.crossVec2Vec2(h.add(A, f), this.m_ax)),
              (this.m_sBx = h.crossVec2Vec2(x, this.m_ax));
            var b =
              e + i + o * this.m_sAx * this.m_sAx + s * this.m_sBx * this.m_sBx;
            if (b > 0) {
              this.m_springMass = 1 / b;
              var g = h.dot(A, this.m_ax),
                B = 2 * r.PI * this.m_frequencyHz,
                V = 2 * this.m_springMass * this.m_dampingRatio * B,
                w = this.m_springMass * B * B,
                C = t.dt;
              (this.m_gamma = C * (V + C * w)),
                this.m_gamma > 0 && (this.m_gamma = 1 / this.m_gamma),
                (this.m_bias = g * C * w * this.m_gamma),
                (this.m_springMass = b + this.m_gamma),
                this.m_springMass > 0 &&
                  (this.m_springMass = 1 / this.m_springMass);
            }
          } else this.m_springImpulse = 0;
          if (
            (this.m_enableMotor
              ? ((this.m_motorMass = o + s),
                this.m_motorMass > 0 &&
                  (this.m_motorMass = 1 / this.m_motorMass))
              : ((this.m_motorMass = 0), (this.m_motorImpulse = 0)),
            t.warmStarting)
          ) {
            (this.m_impulse *= t.dtRatio),
              (this.m_springImpulse *= t.dtRatio),
              (this.m_motorImpulse *= t.dtRatio);
            var M = h.combine(
                this.m_impulse,
                this.m_ay,
                this.m_springImpulse,
                this.m_ax
              ),
              I =
                this.m_impulse * this.m_sAy +
                this.m_springImpulse * this.m_sAx +
                this.m_motorImpulse,
              z =
                this.m_impulse * this.m_sBy +
                this.m_springImpulse * this.m_sBx +
                this.m_motorImpulse;
            a.subMul(this.m_invMassA, M),
              (c -= this.m_invIA * I),
              u.addMul(this.m_invMassB, M),
              (p += this.m_invIB * z);
          } else
            (this.m_impulse = 0),
              (this.m_springImpulse = 0),
              (this.m_motorImpulse = 0);
          this.m_bodyA.c_velocity.v.setVec2(a),
            (this.m_bodyA.c_velocity.w = c),
            this.m_bodyB.c_velocity.v.setVec2(u),
            (this.m_bodyB.c_velocity.w = p);
        }),
        (e.prototype.solveVelocityConstraints = function (t) {
          var e = this.m_invMassA,
            i = this.m_invMassB,
            o = this.m_invIA,
            s = this.m_invIB,
            n = this.m_bodyA.c_velocity.v,
            m = this.m_bodyA.c_velocity.w,
            a = this.m_bodyB.c_velocity.v,
            c = this.m_bodyB.c_velocity.w,
            _ =
              h.dot(this.m_ax, a) -
              h.dot(this.m_ax, n) +
              this.m_sBx * c -
              this.m_sAx * m,
            l =
              -this.m_springMass *
              (_ + this.m_bias + this.m_gamma * this.m_springImpulse);
          this.m_springImpulse += l;
          var u = h.mulNumVec2(l, this.m_ax),
            p = l * this.m_sAx,
            y = l * this.m_sBx;
          n.subMul(e, u), (m -= o * p), a.addMul(i, u);
          (_ = (c += s * y) - m - this.m_motorSpeed),
            (l = -this.m_motorMass * _);
          var d = this.m_motorImpulse,
            f = t.dt * this.m_maxMotorTorque;
          (this.m_motorImpulse = r.clamp(this.m_motorImpulse + l, -f, f)),
            (m -= o * (l = this.m_motorImpulse - d)),
            (c += s * l);
          (_ =
            h.dot(this.m_ay, a) -
            h.dot(this.m_ay, n) +
            this.m_sBy * c -
            this.m_sAy * m),
            (l = -this.m_mass * _);
          this.m_impulse += l;
          (u = h.mulNumVec2(l, this.m_ay)),
            (p = l * this.m_sAy),
            (y = l * this.m_sBy);
          n.subMul(e, u),
            (m -= o * p),
            a.addMul(i, u),
            (c += s * y),
            this.m_bodyA.c_velocity.v.setVec2(n),
            (this.m_bodyA.c_velocity.w = m),
            this.m_bodyB.c_velocity.v.setVec2(a),
            (this.m_bodyB.c_velocity.w = c);
        }),
        (e.prototype.solvePositionConstraints = function (t) {
          var e = this.m_bodyA.c_position.c,
            i = this.m_bodyA.c_position.a,
            o = this.m_bodyB.c_position.c,
            s = this.m_bodyB.c_position.a,
            n = v.neo(i),
            m = v.neo(s),
            a = v.mulVec2(n, h.sub(this.m_localAnchorA, this.m_localCenterA)),
            c = v.mulVec2(m, h.sub(this.m_localAnchorB, this.m_localCenterB)),
            _ = h.zero();
          _.addCombine(1, o, 1, c), _.subCombine(1, e, 1, a);
          var u,
            p = v.mulVec2(n, this.m_localYAxisA),
            y = h.crossVec2Vec2(h.add(_, a), p),
            d = h.crossVec2Vec2(c, p),
            f = h.dot(_, p),
            x =
              this.m_invMassA +
              this.m_invMassB +
              this.m_invIA * this.m_sAy * this.m_sAy +
              this.m_invIB * this.m_sBy * this.m_sBy;
          u = 0 != x ? -f / x : 0;
          var A = h.mulNumVec2(u, p),
            b = u * y,
            g = u * d;
          return (
            e.subMul(this.m_invMassA, A),
            (i -= this.m_invIA * b),
            o.addMul(this.m_invMassB, A),
            (s += this.m_invIB * g),
            this.m_bodyA.c_position.c.setVec2(e),
            (this.m_bodyA.c_position.a = i),
            this.m_bodyB.c_position.c.setVec2(o),
            (this.m_bodyB.c_position.a = s),
            r.abs(f) <= l.linearSlop
          );
        }),
        (e.TYPE = "wheel-joint"),
        e
      );
    })(nt),
    Xt = 0;
  function Kt(t) {
    var e,
      i = (t = t || {}).rootClass || vt,
      s =
        t.preSerialize ||
        function (t) {
          return t;
        },
      n =
        t.postSerialize ||
        function (t, e) {
          return t;
        },
      r =
        t.preDeserialize ||
        function (t) {
          return t;
        },
      m =
        t.postDeserialize ||
        function (t, e) {
          return t;
        },
      a = { World: vt, Body: T, Joint: nt, Fixture: C, Shape: B },
      c = o({ Vec2: h, Vec3: xt }, a),
      _ =
        (((e = {})[T.STATIC] = T),
        (e[T.DYNAMIC] = T),
        (e[T.KINEMATIC] = T),
        (e[bt.TYPE] = bt),
        (e[Bt.TYPE] = Bt),
        (e[At.TYPE] = At),
        (e[gt.TYPE] = gt),
        (e[Vt.TYPE] = Vt),
        (e[Ct.TYPE] = Ct),
        (e[It.TYPE] = It),
        (e[qt.TYPE] = qt),
        (e[kt.TYPE] = kt),
        (e[jt.TYPE] = jt),
        (e[Lt.TYPE] = Lt),
        (e[Et.TYPE] = Et),
        (e[St.TYPE] = St),
        (e[Jt.TYPE] = Jt),
        (e[Wt.TYPE] = Wt),
        (e[Zt.TYPE] = Zt),
        e);
    (this.toJson = function (t) {
      var e = [],
        i = [t],
        o = {};
      function r(t, s) {
        if (((t.__sid = t.__sid || ++Xt), !o[t.__sid])) {
          i.push(t);
          var n = { refIndex: e.length + i.length, refType: s };
          o[t.__sid] = n;
        }
        return o[t.__sid];
      }
      function m(t, e) {
        if ("object" != typeof t || null === t) return t;
        if ("function" == typeof t._serialize) {
          if (t !== e) for (var i in a) if (t instanceof a[i]) return r(t, i);
          t = (function (t) {
            var e = (t = s(t))._serialize();
            return n(e, t);
          })(t);
        }
        if (Array.isArray(t)) {
          for (var o = [], c = 0; c < t.length; c++) o[c] = m(t[c]);
          t = o;
        } else {
          o = {};
          for (var c in t) t.hasOwnProperty(c) && (o[c] = m(t[c]));
          t = o;
        }
        return t;
      }
      for (; i.length; ) {
        var c = i.shift(),
          h = m(c, c);
        e.push(h);
      }
      return e;
    }),
      (this.fromJson = function (t) {
        var e = {};
        function o(t, e, i) {
          var o = (function (t, e) {
            return (
              (e && e._deserialize) || (e = _[t.type]), e && e._deserialize
            );
          })(e, t);
          if (o) {
            var n = o((e = r(e)), i, s);
            return (n = m(n, e));
          }
        }
        function s(i, s, n) {
          if (!s.refIndex) return i && i._deserialize && o(i, s, n);
          i = c[s.refType] || i;
          var r = s.refIndex;
          if (!e[r]) {
            var m = o(i, t[r], n);
            e[r] = m;
          }
          return e[r];
        }
        return i._deserialize(t[0], null, s);
      });
  }
  var Gt = new Kt();
  function Ut(t, e, i, o, s) {
    t.pointCount = 0;
    var n = x.mulVec2(i, e.m_p),
      r = x.mulVec2(s, o.m_p),
      c = h.distanceSquared(r, n),
      _ = e.m_radius + o.m_radius;
    c > _ * _ ||
      ((t.type = m.e_circles),
      t.localPoint.setVec2(e.m_p),
      t.localNormal.setZero(),
      (t.pointCount = 1),
      t.points[0].localPoint.setVec2(o.m_p),
      (t.points[0].id.cf.indexA = 0),
      (t.points[0].id.cf.typeA = a.e_vertex),
      (t.points[0].id.cf.indexB = 0),
      (t.points[0].id.cf.typeB = a.e_vertex));
  }
  function Qt(t, e, i, o, s) {
    t.pointCount = 0;
    var n = x.mulTVec2(i, x.mulVec2(s, o.m_p)),
      r = e.m_vertex1,
      c = e.m_vertex2,
      _ = h.sub(c, r),
      l = h.dot(_, h.sub(c, n)),
      u = h.dot(_, h.sub(n, r)),
      p = e.m_radius + o.m_radius;
    if (u <= 0) {
      var y = h.clone(r),
        d = h.sub(n, y);
      if (h.dot(d, d) > p * p) return;
      if (e.m_hasVertex0) {
        var f = e.m_vertex0,
          v = r,
          A = h.sub(v, f);
        if (h.dot(A, h.sub(v, n)) > 0) return;
      }
      return (
        (t.type = m.e_circles),
        t.localNormal.setZero(),
        t.localPoint.setVec2(y),
        (t.pointCount = 1),
        t.points[0].localPoint.setVec2(o.m_p),
        (t.points[0].id.cf.indexA = 0),
        (t.points[0].id.cf.typeA = a.e_vertex),
        (t.points[0].id.cf.indexB = 0),
        void (t.points[0].id.cf.typeB = a.e_vertex)
      );
    }
    if (l <= 0) {
      var b = h.clone(c),
        g = h.sub(n, b);
      if (h.dot(g, g) > p * p) return;
      if (e.m_hasVertex3) {
        var B = e.m_vertex3,
          V = c,
          w = h.sub(B, V);
        if (h.dot(w, h.sub(n, V)) > 0) return;
      }
      return (
        (t.type = m.e_circles),
        t.localNormal.setZero(),
        t.localPoint.setVec2(b),
        (t.pointCount = 1),
        t.points[0].localPoint.setVec2(o.m_p),
        (t.points[0].id.cf.indexA = 1),
        (t.points[0].id.cf.typeA = a.e_vertex),
        (t.points[0].id.cf.indexB = 0),
        void (t.points[0].id.cf.typeB = a.e_vertex)
      );
    }
    var C = h.dot(_, _),
      M = h.combine(l / C, r, u / C, c),
      I = h.sub(n, M);
    if (!(h.dot(I, I) > p * p)) {
      var z = h.neo(-_.y, _.x);
      h.dot(z, h.sub(n, r)) < 0 && z.setNum(-z.x, -z.y),
        z.normalize(),
        (t.type = m.e_faceA),
        (t.localNormal = z),
        t.localPoint.setVec2(r),
        (t.pointCount = 1),
        t.points[0].localPoint.setVec2(o.m_p),
        (t.points[0].id.cf.indexA = 0),
        (t.points[0].id.cf.typeA = a.e_face),
        (t.points[0].id.cf.indexB = 0),
        (t.points[0].id.cf.typeB = a.e_vertex);
    }
  }
  function $t(t, e, i, o, s) {
    for (
      var n = t.m_count,
        r = i.m_count,
        m = t.m_normals,
        a = t.m_vertices,
        c = i.m_vertices,
        _ = x.mulTXf(o, e),
        l = 0,
        u = -1 / 0,
        p = 0;
      p < n;
      ++p
    ) {
      for (
        var y = v.mulVec2(_.q, m[p]), d = x.mulVec2(_, a[p]), f = 1 / 0, A = 0;
        A < r;
        ++A
      ) {
        var b = h.dot(y, c[A]) - h.dot(y, d);
        b < f && (f = b);
      }
      f > u && ((u = f), (l = p));
    }
    (s.maxSeparation = u), (s.bestIndex = l);
  }
  (Kt.toJson = Gt.toJson),
    (Kt.fromJson = Gt.fromJson),
    ot.addType(Vt.TYPE, Vt.TYPE, function (t, e, i, o, s, n, r) {
      Ut(t, i.getShape(), e, n.getShape(), s);
    }),
    ot.addType(At.TYPE, Vt.TYPE, function (t, e, i, o, s, n, r) {
      var m = i.getShape(),
        a = n.getShape();
      Qt(t, m, e, a, s);
    }),
    ot.addType(bt.TYPE, Vt.TYPE, function (t, e, i, o, s, n, r) {
      var m = i.getShape(),
        a = new At();
      m.getChildEdge(a, o);
      var c = a,
        h = n.getShape();
      Qt(t, c, e, h, s);
    }),
    ot.addType(gt.TYPE, gt.TYPE, function (t, e, i, o, s, n, r) {
      oe(t, i.getShape(), e, n.getShape(), s);
    });
  var te,
    ee,
    ie = { maxSeparation: 0, bestIndex: 0 };
  function oe(t, e, i, o, s) {
    t.pointCount = 0;
    var n = e.m_radius + o.m_radius;
    $t(e, i, o, s, ie);
    var r = ie.bestIndex,
      c = ie.maxSeparation;
    if (!(c > n)) {
      $t(o, s, e, i, ie);
      var _ = ie.bestIndex,
        u = ie.maxSeparation;
      if (!(u > n)) {
        var p, y, d, f, A, b;
        u > c + 0.1 * l.linearSlop
          ? ((p = o),
            (y = e),
            (d = s),
            (f = i),
            (A = _),
            (t.type = m.e_faceB),
            (b = 1))
          : ((p = e),
            (y = o),
            (d = i),
            (f = s),
            (A = r),
            (t.type = m.e_faceA),
            (b = 0));
        var g = [new F(), new F()];
        !(function (t, e, i, o, s, n) {
          for (
            var r = e.m_normals,
              m = s.m_count,
              c = s.m_vertices,
              _ = s.m_normals,
              l = v.mulTVec2(n.q, v.mulVec2(i.q, r[o])),
              u = 0,
              p = 1 / 0,
              y = 0;
            y < m;
            ++y
          ) {
            var d = h.dot(l, _[y]);
            d < p && ((p = d), (u = y));
          }
          var f = u,
            A = f + 1 < m ? f + 1 : 0;
          (t[0].v = x.mulVec2(n, c[f])),
            (t[0].id.cf.indexA = o),
            (t[0].id.cf.indexB = f),
            (t[0].id.cf.typeA = a.e_face),
            (t[0].id.cf.typeB = a.e_vertex),
            (t[1].v = x.mulVec2(n, c[A])),
            (t[1].id.cf.indexA = o),
            (t[1].id.cf.indexB = A),
            (t[1].id.cf.typeA = a.e_face),
            (t[1].id.cf.typeB = a.e_vertex);
        })(g, p, d, A, y, f);
        var B = p.m_count,
          V = p.m_vertices,
          w = A,
          C = A + 1 < B ? A + 1 : 0,
          M = V[w],
          I = V[C],
          z = h.sub(I, M);
        z.normalize();
        var P = h.crossVec2Num(z, 1),
          S = h.combine(0.5, M, 0.5, I),
          T = v.mulVec2(d.q, z),
          L = h.crossVec2Num(T, 1);
        (M = x.mulVec2(d, M)), (I = x.mulVec2(d, I));
        var q = h.dot(L, M),
          N = -h.dot(T, M) + n,
          k = h.dot(T, I) + n,
          D = [new F(), new F()],
          j = [new F(), new F()];
        if (!(E(D, g, h.neg(T), N, w) < 2 || E(j, D, T, k, C) < 2)) {
          (t.localNormal = P), (t.localPoint = S);
          for (var R = 0, O = 0; O < j.length; ++O) {
            if (h.dot(L, j[O].v) - q <= n) {
              var J = t.points[R];
              if (
                (J.localPoint.setVec2(x.mulTVec2(f, j[O].v)),
                (J.id = j[O].id),
                b)
              ) {
                var Y = J.id.cf,
                  W = Y.indexA,
                  H = Y.indexB,
                  Z = Y.typeA,
                  X = Y.typeB;
                (Y.indexA = H), (Y.indexB = W), (Y.typeA = X), (Y.typeB = Z);
              }
              ++R;
            }
          }
          t.pointCount = R;
        }
      }
    }
  }
  function se(t, e, i, o, s) {
    t.pointCount = 0;
    for (
      var n = x.mulVec2(s, o.m_p),
        c = x.mulTVec2(i, n),
        _ = 0,
        l = -1 / 0,
        u = e.m_radius + o.m_radius,
        p = e.m_count,
        y = e.m_vertices,
        d = e.m_normals,
        f = 0;
      f < p;
      ++f
    ) {
      var v = h.dot(d[f], h.sub(c, y[f]));
      if (v > u) return;
      v > l && ((l = v), (_ = f));
    }
    var A = _,
      b = A + 1 < p ? A + 1 : 0,
      g = y[A],
      B = y[b];
    if (l < r.EPSILON)
      return (
        (t.pointCount = 1),
        (t.type = m.e_faceA),
        t.localNormal.setVec2(d[_]),
        t.localPoint.setCombine(0.5, g, 0.5, B),
        (t.points[0].localPoint = o.m_p),
        (t.points[0].id.cf.indexA = 0),
        (t.points[0].id.cf.typeA = a.e_vertex),
        (t.points[0].id.cf.indexB = 0),
        void (t.points[0].id.cf.typeB = a.e_vertex)
      );
    var V = h.dot(h.sub(c, g), h.sub(B, g)),
      w = h.dot(h.sub(c, B), h.sub(g, B));
    if (V <= 0) {
      if (h.distanceSquared(c, g) > u * u) return;
      (t.pointCount = 1),
        (t.type = m.e_faceA),
        t.localNormal.setCombine(1, c, -1, g),
        t.localNormal.normalize(),
        (t.localPoint = g),
        t.points[0].localPoint.setVec2(o.m_p),
        (t.points[0].id.cf.indexA = 0),
        (t.points[0].id.cf.typeA = a.e_vertex),
        (t.points[0].id.cf.indexB = 0),
        (t.points[0].id.cf.typeB = a.e_vertex);
    } else if (w <= 0) {
      if (h.distanceSquared(c, B) > u * u) return;
      (t.pointCount = 1),
        (t.type = m.e_faceA),
        t.localNormal.setCombine(1, c, -1, B),
        t.localNormal.normalize(),
        t.localPoint.setVec2(B),
        t.points[0].localPoint.setVec2(o.m_p),
        (t.points[0].id.cf.indexA = 0),
        (t.points[0].id.cf.typeA = a.e_vertex),
        (t.points[0].id.cf.indexB = 0),
        (t.points[0].id.cf.typeB = a.e_vertex);
    } else {
      var C = h.mid(g, B);
      if (h.dot(c, d[A]) - h.dot(C, d[A]) > u) return;
      (t.pointCount = 1),
        (t.type = m.e_faceA),
        t.localNormal.setVec2(d[A]),
        t.localPoint.setVec2(C),
        t.points[0].localPoint.setVec2(o.m_p),
        (t.points[0].id.cf.indexA = 0),
        (t.points[0].id.cf.typeA = a.e_vertex),
        (t.points[0].id.cf.indexB = 0),
        (t.points[0].id.cf.typeB = a.e_vertex);
    }
  }
  ot.addType(gt.TYPE, Vt.TYPE, function (t, e, i, o, s, n, r) {
    se(t, i.getShape(), e, n.getShape(), s);
  }),
    ot.addType(At.TYPE, gt.TYPE, function (t, e, i, o, s, n, r) {
      le(t, i.getShape(), e, n.getShape(), s);
    }),
    ot.addType(bt.TYPE, gt.TYPE, function (t, e, i, o, s, n, r) {
      var m = i.getShape(),
        a = new At();
      m.getChildEdge(a, o), le(t, a, e, n.getShape(), s);
    }),
    (function (t) {
      (t[(t.e_unknown = -1)] = "e_unknown"),
        (t[(t.e_edgeA = 1)] = "e_edgeA"),
        (t[(t.e_edgeB = 2)] = "e_edgeB");
    })(te || (te = {})),
    (function (t) {
      (t[(t.e_isolated = 0)] = "e_isolated"),
        (t[(t.e_concave = 1)] = "e_concave"),
        (t[(t.e_convex = 2)] = "e_convex");
    })(ee || (ee = {}));
  var ne = function () {},
    re = function () {
      (this.vertices = []), (this.normals = []), (this.count = 0);
    },
    me = function () {
      (this.normal = h.zero()),
        (this.sideNormal1 = h.zero()),
        (this.sideNormal2 = h.zero());
    },
    ae = new ne(),
    ce = new ne(),
    he = new re(),
    _e = new me();
  function le(t, e, i, o, s) {
    var n = x.mulTXf(i, s),
      c = x.mulVec2(n, o.m_centroid),
      _ = e.m_vertex0,
      u = e.m_vertex1,
      p = e.m_vertex2,
      y = e.m_vertex3,
      d = e.m_hasVertex0,
      f = e.m_hasVertex3,
      A = h.sub(p, u);
    A.normalize();
    var b,
      g,
      B,
      V = h.neo(A.y, -A.x),
      w = h.dot(V, h.sub(c, u)),
      C = 0,
      M = 0,
      I = !1,
      z = !1;
    if (d) {
      var P = h.sub(u, _);
      P.normalize(),
        (b = h.neo(P.y, -P.x)),
        (I = h.crossVec2Vec2(P, A) >= 0),
        (C = h.dot(b, c) - h.dot(b, _));
    }
    if (f) {
      var S = h.sub(y, p);
      S.normalize(),
        (g = h.neo(S.y, -S.x)),
        (z = h.crossVec2Vec2(A, S) > 0),
        (M = h.dot(g, c) - h.dot(g, p));
    }
    var T = h.zero(),
      L = h.zero(),
      q = h.zero();
    d && f
      ? I && z
        ? (B = C >= 0 || w >= 0 || M >= 0)
          ? (T.setVec2(V), L.setVec2(b), q.setVec2(g))
          : (T.setMul(-1, V), L.setMul(-1, V), q.setMul(-1, V))
        : I
        ? (B = C >= 0 || (w >= 0 && M >= 0))
          ? (T.setVec2(V), L.setVec2(b), q.setVec2(V))
          : (T.setMul(-1, V), L.setMul(-1, g), q.setMul(-1, V))
        : z
        ? (B = M >= 0 || (C >= 0 && w >= 0))
          ? (T.setVec2(V), L.setVec2(V), q.setVec2(g))
          : (T.setMul(-1, V), L.setMul(-1, V), q.setMul(-1, b))
        : (B = C >= 0 && w >= 0 && M >= 0)
        ? (T.setVec2(V), L.setVec2(V), q.setVec2(V))
        : (T.setMul(-1, V), L.setMul(-1, g), q.setMul(-1, b))
      : d
      ? I
        ? (B = C >= 0 || w >= 0)
          ? (T.setVec2(V), L.setVec2(b), q.setMul(-1, V))
          : (T.setMul(-1, V), L.setVec2(V), q.setMul(-1, V))
        : (B = C >= 0 && w >= 0)
        ? (T.setVec2(V), L.setVec2(V), q.setMul(-1, V))
        : (T.setMul(-1, V), L.setVec2(V), q.setMul(-1, b))
      : f
      ? z
        ? (B = w >= 0 || M >= 0)
          ? (T.setVec2(V), L.setMul(-1, V), q.setVec2(g))
          : (T.setMul(-1, V), L.setMul(-1, V), q.setVec2(V))
        : (B = w >= 0 && M >= 0)
        ? (T.setVec2(V), L.setMul(-1, V), q.setVec2(V))
        : (T.setMul(-1, V), L.setMul(-1, g), q.setVec2(V))
      : (B = w >= 0)
      ? (T.setVec2(V), L.setMul(-1, V), q.setMul(-1, V))
      : (T.setMul(-1, V), L.setVec2(V), q.setVec2(V)),
      (he.count = o.m_count);
    for (var N = 0; N < o.m_count; ++N)
      (he.vertices[N] = x.mulVec2(n, o.m_vertices[N])),
        (he.normals[N] = v.mulVec2(n.q, o.m_normals[N]));
    var k = 2 * l.polygonRadius;
    (t.pointCount = 0),
      (ae.type = te.e_edgeA),
      (ae.index = B ? 0 : 1),
      (ae.separation = 1 / 0);
    for (N = 0; N < he.count; ++N) {
      (j = h.dot(T, h.sub(he.vertices[N], u))) < ae.separation &&
        (ae.separation = j);
    }
    if (ae.type != te.e_unknown && !(ae.separation > k)) {
      (ce.type = te.e_unknown), (ce.index = -1), (ce.separation = -1 / 0);
      var D = h.neo(-T.y, T.x);
      for (N = 0; N < he.count; ++N) {
        var j,
          R = h.neg(he.normals[N]),
          O = h.dot(R, h.sub(he.vertices[N], u)),
          J = h.dot(R, h.sub(he.vertices[N], p));
        if ((j = r.min(O, J)) > k) {
          (ce.type = te.e_edgeB), (ce.index = N), (ce.separation = j);
          break;
        }
        if (h.dot(R, D) >= 0) {
          if (h.dot(h.sub(R, q), T) < -l.angularSlop) continue;
        } else if (h.dot(h.sub(R, L), T) < -l.angularSlop) continue;
        j > ce.separation &&
          ((ce.type = te.e_edgeB), (ce.index = N), (ce.separation = j));
      }
      if (!(ce.type != te.e_unknown && ce.separation > k)) {
        var Y;
        Y =
          ce.type == te.e_unknown
            ? ae
            : ce.separation > 0.98 * ae.separation + 0.001
            ? ce
            : ae;
        var W = [new F(), new F()];
        if (Y.type == te.e_edgeA) {
          t.type = m.e_faceA;
          var H = 0,
            Z = h.dot(T, he.normals[0]);
          for (N = 1; N < he.count; ++N) {
            var X = h.dot(T, he.normals[N]);
            X < Z && ((Z = X), (H = N));
          }
          var K = H,
            G = K + 1 < he.count ? K + 1 : 0;
          (W[0].v = he.vertices[K]),
            (W[0].id.cf.indexA = 0),
            (W[0].id.cf.indexB = K),
            (W[0].id.cf.typeA = a.e_face),
            (W[0].id.cf.typeB = a.e_vertex),
            (W[1].v = he.vertices[G]),
            (W[1].id.cf.indexA = 0),
            (W[1].id.cf.indexB = G),
            (W[1].id.cf.typeA = a.e_face),
            (W[1].id.cf.typeB = a.e_vertex),
            B
              ? ((_e.i1 = 0),
                (_e.i2 = 1),
                (_e.v1 = u),
                (_e.v2 = p),
                _e.normal.setVec2(V))
              : ((_e.i1 = 1),
                (_e.i2 = 0),
                (_e.v1 = p),
                (_e.v2 = u),
                _e.normal.setMul(-1, V));
        } else
          (t.type = m.e_faceB),
            (W[0].v = u),
            (W[0].id.cf.indexA = 0),
            (W[0].id.cf.indexB = Y.index),
            (W[0].id.cf.typeA = a.e_vertex),
            (W[0].id.cf.typeB = a.e_face),
            (W[1].v = p),
            (W[1].id.cf.indexA = 0),
            (W[1].id.cf.indexB = Y.index),
            (W[1].id.cf.typeA = a.e_vertex),
            (W[1].id.cf.typeB = a.e_face),
            (_e.i1 = Y.index),
            (_e.i2 = _e.i1 + 1 < he.count ? _e.i1 + 1 : 0),
            (_e.v1 = he.vertices[_e.i1]),
            (_e.v2 = he.vertices[_e.i2]),
            _e.normal.setVec2(he.normals[_e.i1]);
        _e.sideNormal1.setNum(_e.normal.y, -_e.normal.x),
          _e.sideNormal2.setMul(-1, _e.sideNormal1),
          (_e.sideOffset1 = h.dot(_e.sideNormal1, _e.v1)),
          (_e.sideOffset2 = h.dot(_e.sideNormal2, _e.v2));
        var U = [new F(), new F()],
          Q = [new F(), new F()];
        if (
          !(
            E(U, W, _e.sideNormal1, _e.sideOffset1, _e.i1) <
              l.maxManifoldPoints ||
            E(Q, U, _e.sideNormal2, _e.sideOffset2, _e.i2) < l.maxManifoldPoints
          )
        ) {
          Y.type == te.e_edgeA
            ? ((t.localNormal = h.clone(_e.normal)),
              (t.localPoint = h.clone(_e.v1)))
            : ((t.localNormal = h.clone(o.m_normals[_e.i1])),
              (t.localPoint = h.clone(o.m_vertices[_e.i1])));
          var $ = 0;
          for (N = 0; N < l.maxManifoldPoints; ++N) {
            if (h.dot(_e.normal, h.sub(Q[N].v, _e.v1)) <= k) {
              var tt = t.points[$];
              Y.type == te.e_edgeA
                ? ((tt.localPoint = x.mulTVec2(n, Q[N].v)), (tt.id = Q[N].id))
                : ((tt.localPoint = Q[N].v),
                  (tt.id.cf.typeA = Q[N].id.cf.typeB),
                  (tt.id.cf.typeB = Q[N].id.cf.typeA),
                  (tt.id.cf.indexA = Q[N].id.cf.indexB),
                  (tt.id.cf.indexB = Q[N].id.cf.indexA)),
                ++$;
            }
          }
          t.pointCount = $;
        }
      }
    }
  }
  var ue = {};
  (ue.CollidePolygons = oe),
    (ue.Settings = l),
    (ue.Sweep = A),
    (ue.Manifold = q),
    (ue.Distance = H),
    (ue.TimeOfImpact = _t),
    (ue.DynamicTree = y),
    (ue.stats = O),
    (dt.TimeStep = ut),
    (H.testOverlap = G),
    (H.Input = J),
    (H.Output = Y),
    (H.Proxy = Z),
    (H.Cache = W),
    (_t.Input = at),
    (_t.Output = ht),
    (t.AABB = _),
    (t.Body = T),
    (t.Box = Bt),
    (t.Chain = bt),
    (t.Circle = Vt),
    (t.CollideCircles = Ut),
    (t.CollideEdgeCircle = Qt),
    (t.CollideEdgePolygon = le),
    (t.CollidePolygonCircle = se),
    (t.CollidePolygons = oe),
    (t.Contact = ot),
    (t.Distance = H),
    (t.DistanceJoint = Ct),
    (t.DynamicTree = y),
    (t.Edge = At),
    (t.Fixture = C),
    (t.FrictionJoint = It),
    (t.GearJoint = qt),
    (t.Joint = nt),
    (t.Manifold = q),
    (t.Mat22 = L),
    (t.Mat33 = zt),
    (t.Math = r),
    (t.MotorJoint = kt),
    (t.MouseJoint = jt),
    (t.Polygon = gt),
    (t.PrismaticJoint = Lt),
    (t.PulleyJoint = Et),
    (t.RevoluteJoint = St),
    (t.RopeJoint = Jt),
    (t.Rot = v),
    (t.Serializer = Kt),
    (t.Settings = l),
    (t.Shape = B),
    (t.Sweep = A),
    (t.TimeOfImpact = _t),
    (t.Transform = x),
    (t.Vec2 = h),
    (t.Vec3 = xt),
    (t.WeldJoint = Wt),
    (t.WheelJoint = Zt),
    (t.World = vt),
    (t.internal = ue),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=planck.min.js.map
