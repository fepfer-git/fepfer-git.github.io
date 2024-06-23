(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [905],
  {
    2730: function (t, n, e) {
      "use strict";
      var i = e(7294);
      function r(t) {
        return Array.prototype.slice.call(t);
      }
      function a() {
        return Date.now();
      }
      function o(t, n, e) {
        if (((n = "data-keen-slider-" + n), null === e))
          return t.removeAttribute(n);
        t.setAttribute(n, e || "");
      }
      function s(t, n) {
        return (
          (n = n || document),
          "function" == typeof t && (t = t(n)),
          Array.isArray(t)
            ? t
            : "string" == typeof t
            ? r(n.querySelectorAll(t))
            : t instanceof HTMLElement
            ? [t]
            : t instanceof NodeList
            ? r(t)
            : []
        );
      }
      function c(t) {
        t.raw && (t = t.raw),
          t.cancelable && !t.defaultPrevented && t.preventDefault();
      }
      function u(t) {
        t.raw && (t = t.raw), t.stopPropagation && t.stopPropagation();
      }
      function l() {
        var t = [];
        return {
          add: function (n, e, i, r) {
            n.addListener ? n.addListener(i) : n.addEventListener(e, i, r),
              t.push([n, e, i, r]);
          },
          input: function (t, n, e, i) {
            this.add(
              t,
              n,
              (function (t) {
                return function (n) {
                  n.nativeEvent && (n = n.nativeEvent);
                  var e = n.changedTouches || [],
                    i = n.targetTouches || [],
                    r = n.detail && n.detail.x ? n.detail : null;
                  return t({
                    id: r
                      ? r.identifier
                        ? r.identifier
                        : "i"
                      : i[0]
                      ? i[0]
                        ? i[0].identifier
                        : "e"
                      : "d",
                    idChanged: r
                      ? r.identifier
                        ? r.identifier
                        : "i"
                      : e[0]
                      ? e[0]
                        ? e[0].identifier
                        : "e"
                      : "d",
                    raw: n,
                    x: r && r.x ? r.x : i[0] ? i[0].screenX : r ? r.x : n.pageX,
                    y: r && r.y ? r.y : i[0] ? i[0].screenY : r ? r.y : n.pageY,
                  });
                };
              })(e),
              i
            );
          },
          purge: function () {
            t.forEach(function (t) {
              t[0].removeListener
                ? t[0].removeListener(t[2])
                : t[0].removeEventListener(t[1], t[2], t[3]);
            }),
              (t = []);
          },
        };
      }
      function d(t, n, e) {
        return Math.min(Math.max(t, n), e);
      }
      function f(t) {
        return (t > 0 ? 1 : 0) - (t < 0 ? 1 : 0) || +t;
      }
      function p(t) {
        return t.getBoundingClientRect();
      }
      function m(t, n, e, i) {
        var r = t && t[n];
        return null == r ? e : i && "function" == typeof r ? r() : r;
      }
      function v(t) {
        return Math.round(1e6 * t) / 1e6;
      }
      function h(t, n) {
        if (t === n) return !0;
        var e = typeof t;
        if (e !== typeof n) return !1;
        if ("object" !== e || null === t || null === n)
          return "function" === e && t.toString() === n.toString();
        if (
          t.length !== n.length ||
          Object.getOwnPropertyNames(t).length !==
            Object.getOwnPropertyNames(n).length
        )
          return !1;
        for (var i in t) if (!h(t[i], n[i])) return !1;
        return !0;
      }
      function g(t, n) {
        return h(t.current, n) || (t.current = n), t.current;
      }
      var x = function () {
        return (
          (x =
            Object.assign ||
            function (t) {
              for (var n, e = 1, i = arguments.length; e < i; e++)
                for (var r in (n = arguments[e]))
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              return t;
            }),
          x.apply(this, arguments)
        );
      };
      function b(t, n, e) {
        if (e || 2 === arguments.length)
          for (var i, r = 0, a = n.length; r < a; r++)
            (!i && r in n) ||
              (i || (i = Array.prototype.slice.call(n, 0, r)), (i[r] = n[r]));
        return t.concat(i || Array.prototype.slice.call(n));
      }
      function y(t) {
        var n,
          e,
          i,
          r,
          o,
          s,
          c,
          u,
          l,
          p,
          h,
          g,
          x,
          y = 1 / 0,
          w = [],
          k = null,
          j = 0;
        function N(t) {
          E(j + t);
        }
        function C(t) {
          var n = I(j + t).abs;
          return T(n) ? n : null;
        }
        function I(t) {
          var n = Math.floor(Math.abs(t / e)),
            i = ((t % e) + e) % e,
            r = f(t),
            a = c.indexOf(
              b([], c, !0).reduce(function (t, n) {
                return Math.abs(n - i) < Math.abs(t - i) ? n : t;
              })
            ),
            o = a;
          return (
            r < 0 && 0 !== i && n++,
            a === s && ((o = 0), (n += r > 0 ? 1 : -1)),
            { abs: o + n * s * r, origin: a, rel: o }
          );
        }
        function O(t, n, e) {
          var i;
          if (n || !S()) return _(t, e);
          if (!T(t)) return null;
          var r = I(null != e ? e : j),
            a = r.abs,
            o = t - r.rel,
            c = a + o;
          i = _(c);
          var u = _(c - s * Math.sign(o));
          return (
            ((null !== u && Math.abs(u) < Math.abs(i)) || null === i) &&
              (i = u),
            v(i)
          );
        }
        function _(t, n) {
          if ((null == n && (n = v(j)), !T(t) || null === t)) return null;
          t = Math.round(t);
          var i = I(n),
            r = i.abs,
            a = i.rel,
            o = i.origin,
            u = Z(t),
            l = ((n % e) + e) % e,
            d = c[o],
            f = Math.floor((t - (r - a)) / s) * e;
          return v(d - l - d + c[u] + f + (o === s ? e : 0));
        }
        function T(t) {
          return M(t) === t;
        }
        function M(t) {
          return d(t, u, l);
        }
        function S() {
          return r.loop;
        }
        function Z(t) {
          return ((t % s) + s) % s;
        }
        function E(n) {
          var e;
          (e = n - j),
            w.push({ distance: e, timestamp: a() }),
            w.length > 6 && (w = w.slice(-6)),
            (j = Math.round(1e6 * n) / 1e6);
          var i = A().abs;
          if (i !== k) {
            var r = null !== k;
            (k = i), r && t.emit("slideChanged");
          }
        }
        function A(a) {
          var c = a
            ? null
            : (function () {
                if (s) {
                  var t = S(),
                    n = t ? ((j % e) + e) % e : j,
                    a = (t ? j % e : j) - o[0][2],
                    c = 0 - (a < 0 && t ? e - Math.abs(a) : a),
                    d = 0,
                    m = I(j),
                    v = m.abs,
                    b = m.rel,
                    y = o[b][2],
                    w = o.map(function (n, i) {
                      var a = c + d;
                      (a < 0 - n[0] || a > 1) &&
                        (a += (Math.abs(a) > e - 1 && t ? e : 0) * f(-a));
                      var o = i - b,
                        u = Math.sign(o),
                        l = o + v;
                      t &&
                        (-1 === u && a > y && (l += s),
                        1 === u && a < y && (l -= s),
                        null !== p && l < p && (a += e),
                        null !== h && l > h && (a -= e));
                      var m = a + n[0] + n[1],
                        g = Math.max(
                          a >= 0 && m <= 1
                            ? 1
                            : m < 0 || a > 1
                            ? 0
                            : a < 0
                            ? Math.min(1, (n[0] + a) / n[0])
                            : (1 - a) / n[0],
                          0
                        );
                      return (
                        (d += n[0] + n[1]),
                        {
                          abs: l,
                          distance: r.rtl ? -1 * a + 1 - n[0] : a,
                          portion: g,
                          size: n[0],
                        }
                      );
                    });
                  return (
                    (v = M(v)),
                    (b = Z(v)),
                    {
                      abs: M(v),
                      length: i,
                      max: x,
                      maxIdx: l,
                      min: g,
                      minIdx: u,
                      position: j,
                      progress: t ? n / e : j / i,
                      rel: b,
                      slides: w,
                    }
                  );
                }
              })();
          return (n.details = c), t.emit("detailsChanged"), c;
        }
        return (n = {
          absToRel: Z,
          add: N,
          details: null,
          distToIdx: C,
          idxToDist: O,
          init: function (n) {
            if (
              ((function () {
                if (
                  ((r = t.options),
                  (o = (r.trackConfig || []).map(function (t) {
                    return [
                      m(t, "size", 1),
                      m(t, "spacing", 0),
                      m(t, "origin", 0),
                    ];
                  })),
                  (s = o.length))
                ) {
                  e = v(
                    o.reduce(function (t, n) {
                      return t + n[0] + n[1];
                    }, 0)
                  );
                  var n = s - 1;
                  (i = v(e + o[0][2] - o[n][0] - o[n][2] - o[n][1])),
                    (c = o.reduce(function (t, n) {
                      if (!t) return [0];
                      var e = o[t.length - 1],
                        i = t[t.length - 1] + (e[0] + e[2]) + e[1];
                      return (
                        (i -= n[2]),
                        t[t.length - 1] > i && (i = t[t.length - 1]),
                        t.push(i),
                        t
                      );
                    }, null)).push(e);
                }
              })(),
              !s)
            )
              return A(!0);
            var a;
            !(function () {
              var n = t.options.range,
                e = t.options.loop;
              (p = u = e ? m(e, "min", -1 / 0) : 0),
                (h = l = e ? m(e, "max", y) : o.length - 1);
              var i = m(n, "min", null),
                r = m(n, "max", null);
              i && (u = i),
                r && (l = r),
                (g = u === -1 / 0 ? u : t.track.idxToDist(u || 0, !0, 0)),
                (x = l === y ? l : O(l, !0, 0)),
                null === r && (h = l),
                m(n, "align", !1) &&
                  l !== y &&
                  0 === o[Z(l)][2] &&
                  ((x -= 1 - o[Z(l)][0]), (l = C(x))),
                (g = v(g)),
                (x = v(x));
            })(),
              (a = n),
              Number(a) === a ? N(_(M(n))) : A();
          },
          to: E,
          velocity: function () {
            var t = a(),
              n = w.reduce(
                function (n, e) {
                  var i = e.distance,
                    r = e.timestamp;
                  return (
                    t - r > 200 ||
                      (f(i) !== f(n.distance) &&
                        n.distance &&
                        (n = { distance: 0, lastTimestamp: 0, time: 0 }),
                      n.time && (n.distance += i),
                      n.lastTimestamp && (n.time += r - n.lastTimestamp),
                      (n.lastTimestamp = r)),
                    n
                  );
                },
                { distance: 0, lastTimestamp: 0, time: 0 }
              );
            return n.distance / n.time || 0;
          },
        });
      }
      function w(t) {
        var n, e, i, r, a, o, s;
        function c(t) {
          return 2 * t;
        }
        function u(t) {
          return d(t, o, s);
        }
        function l(t) {
          return 1 - Math.pow(1 - t, 3);
        }
        function p() {
          h();
          var n = "free-snap" === t.options.mode,
            e = t.track,
            o = e.velocity();
          i = f(o);
          var s = t.track.details,
            d = [];
          if (o || !n) {
            var p = m(o),
              v = p.dist,
              g = p.dur;
            if (((g = c(g)), (v *= i), n)) {
              var x = e.idxToDist(e.distToIdx(v), !0);
              x && (v = x);
            }
            d.push({ distance: v, duration: g, easing: l });
            var b = s.position,
              y = b + v;
            if (y < r || y > a) {
              var w = y < r ? r - b : a - b,
                k = 0,
                j = o;
              if (f(w) === i) {
                var N = Math.min(Math.abs(w) / Math.abs(v), 1),
                  C =
                    (function (t) {
                      return 1 - Math.pow(1 - t, 1 / 3);
                    })(N) * g;
                (d[0].earlyExit = C), (j = o * (1 - N));
              } else (d[0].earlyExit = 0), (k += w);
              var I = m(j, 100),
                O = I.dist * i;
              t.options.rubberband &&
                (d.push({ distance: O, duration: c(I.dur), easing: l }),
                d.push({ distance: -O + k, duration: 500, easing: l }));
            }
            t.animator.start(d);
          } else
            t.moveToIdx(u(s.abs), !0, {
              duration: 500,
              easing: function (t) {
                return 1 + --t * t * t * t * t;
              },
            });
        }
        function m(t, n) {
          void 0 === n && (n = 1e3);
          var e = 147e-9 + (t = Math.abs(t)) / n;
          return { dist: Math.pow(t, 2) / e, dur: t / e };
        }
        function v() {
          var n = t.track.details;
          n && ((r = n.min), (a = n.max), (o = n.minIdx), (s = n.maxIdx));
        }
        function h() {
          t.animator.stop();
        }
        t.on("updated", v),
          t.on("optionsChanged", v),
          t.on("created", v),
          t.on("dragStarted", function () {
            h(), (n = e = t.track.details.abs);
          }),
          t.on("dragEnded", function () {
            var i = t.options.mode;
            "snap" === i &&
              (function () {
                var i = t.track,
                  o = t.track.details,
                  s = o.position,
                  c = f(i.velocity());
                (s > a || s < r) && (c = 0);
                var l = n + c;
                0 === o.slides[i.absToRel(l)].portion && (l -= c),
                  n !== e && (l = e),
                  f(i.idxToDist(l, !0)) !== c && (l += c),
                  (l = u(l));
                var d = i.idxToDist(l, !0);
                t.animator.start([
                  {
                    distance: d,
                    duration: 500,
                    easing: function (t) {
                      return 1 + --t * t * t * t * t;
                    },
                  },
                ]);
              })(),
              ("free" !== i && "free-snap" !== i) || p();
          }),
          t.on("dragged", function () {
            e = t.track.details.abs;
          });
      }
      function k(t) {
        var n,
          e,
          i,
          r,
          a,
          p,
          m,
          v,
          h,
          g,
          x,
          b,
          y,
          w,
          k,
          j,
          N,
          C,
          I = l();
        function O(s) {
          if (p && v === s.id) {
            var l = S(s);
            if (h) {
              if (!M(s)) return T(s);
              (g = l), (h = !1), t.emit("dragChecked");
            }
            if (j) return (g = l);
            c(s);
            var y = (function (n) {
              if (N === -1 / 0 && C === 1 / 0) return n;
              var i = t.track.details,
                o = i.length,
                s = i.position,
                c = d(n, N - s, C - s);
              if (0 === o) return 0;
              if (!t.options.rubberband) return c;
              if (s <= C && s >= N) return n;
              if ((s < N && e > 0) || (s > C && e < 0)) return n;
              var u = (s < N ? s - N : s - C) / o,
                l = r * o,
                f = Math.abs(u * l),
                p = Math.max(0, 1 - (f / a) * 2);
              return p * p * n;
            })((m(g - l) / r) * i);
            e = f(y);
            var w = t.track.details.position;
            ((w > N && w < C) || (w === N && e > 0) || (w === C && e < 0)) &&
              u(s),
              (x += y),
              !b && Math.abs(x * r) > 5 && ((b = !0), o(n, "moves", "")),
              t.track.add(y),
              (g = l),
              t.emit("dragged");
          }
        }
        function _(n) {
          !p &&
            t.track.details &&
            t.track.details.length &&
            ((b = !1),
            (x = 0),
            (p = !0),
            (h = !0),
            (v = n.id),
            M(n),
            (g = S(n)),
            t.emit("dragStarted"));
        }
        function T(e) {
          p &&
            v === e.idChanged &&
            (o(n, "moves", null), (p = !1), t.emit("dragEnded"));
        }
        function M(t) {
          var n = Z(),
            e = n ? t.y : t.x,
            i = n ? t.x : t.y,
            r =
              void 0 !== y &&
              void 0 !== w &&
              Math.abs(w - i) <= Math.abs(y - e);
          return (y = e), (w = i), r;
        }
        function S(t) {
          return Z() ? t.y : t.x;
        }
        function Z() {
          return t.options.vertical;
        }
        function E() {
          (r = t.size), (a = Z() ? window.innerHeight : window.innerWidth);
          var n = t.track.details;
          n && ((N = n.min), (C = n.max));
        }
        function A() {
          if ((I.purge(), t.options.drag && !t.options.disabled)) {
            var e;
            (e = t.options.dragSpeed || 1),
              (m =
                "function" == typeof e
                  ? e
                  : function (t) {
                      return t * e;
                    }),
              (i = t.options.rtl ? -1 : 1),
              E(),
              (n = t.container),
              (function () {
                var t = "data-keen-slider-clickable";
                s("[".concat(t, "]:not([").concat(t, "=false])"), n).map(
                  function (t) {
                    I.add(t, "mousedown", u), I.add(t, "touchstart", u);
                  }
                );
              })(),
              I.add(n, "dragstart", function (t) {
                c(t);
              }),
              I.input(n, "ksDragStart", _),
              I.input(n, "ksDrag", O),
              I.input(n, "ksDragEnd", T),
              I.input(n, "mousedown", _),
              I.input(n, "mousemove", O),
              I.input(n, "mouseleave", T),
              I.input(n, "mouseup", T),
              I.input(n, "touchstart", _, { passive: !0 }),
              I.input(n, "touchmove", O, { passive: !1 }),
              I.input(n, "touchend", T),
              I.input(n, "touchcancel", T),
              I.add(window, "wheel", function (t) {
                p && c(t);
              });
            var r = "data-keen-slider-scrollable";
            s("[".concat(r, "]:not([").concat(r, "=false])"), t.container).map(
              function (t) {
                return (function (t) {
                  var n;
                  I.input(
                    t,
                    "touchstart",
                    function (t) {
                      (n = S(t)), (j = !0), (k = !0);
                    },
                    { passive: !0 }
                  ),
                    I.input(t, "touchmove", function (e) {
                      var i = Z(),
                        r = i
                          ? t.scrollHeight - t.clientHeight
                          : t.scrollWidth - t.clientWidth,
                        a = n - S(e),
                        o = i ? t.scrollTop : t.scrollLeft,
                        s =
                          (i && "scroll" === t.style.overflowY) ||
                          (!i && "scroll" === t.style.overflowX);
                      if (
                        ((n = S(e)),
                        ((a < 0 && o > 0) || (a > 0 && o < r)) && k && s)
                      )
                        return (j = !0);
                      (k = !1), c(e), (j = !1);
                    }),
                    I.input(t, "touchend", function () {
                      j = !1;
                    });
                })(t);
              }
            );
          }
        }
        t.on("updated", E),
          t.on("optionsChanged", A),
          t.on("created", A),
          t.on("destroyed", I.purge);
      }
      function j(t) {
        var n,
          e,
          i = null;
        function r(n, e, i) {
          t.animator.active
            ? o(n, e, i)
            : requestAnimationFrame(function () {
                return o(n, e, i);
              });
        }
        function a() {
          r(!1, !1, e);
        }
        function o(e, r, a) {
          var o = 0,
            u = t.size,
            l = t.track.details;
          if (l && n) {
            var d = l.slides;
            n.forEach(function (t, n) {
              if (e) !i && r && s(t, null, a), c(t, null, a);
              else {
                if (!d[n]) return;
                var l = d[n].size * u;
                !i && r && s(t, l, a), c(t, d[n].distance * u - o, a), (o += l);
              }
            });
          }
        }
        function s(t, n, e) {
          var i = e ? "height" : "width";
          null !== n && (n += "px"),
            (t.style["min-" + i] = n),
            (t.style["max-" + i] = n);
        }
        function c(n, e, i) {
          if (null !== e) {
            "performance" === t.options.renderMode && (e = Math.round(e));
            var r = i ? e : 0;
            e = "translate3d(".concat(i ? 0 : e, "px, ").concat(r, "px, 0)");
          }
          (n.style.transform = e), (n.style["-webkit-transform"] = e);
        }
        function u() {
          n && r(!0, !0, e), t.on("detailsChanged", a, !0);
        }
        function l() {
          r(!1, !0, e);
        }
        function d() {
          u(),
            (e = t.options.vertical),
            t.options.disabled ||
              "custom" === t.options.renderMode ||
              ((i = "auto" === m(t.options.slides, "perView", null)),
              t.on("detailsChanged", a),
              (n = t.slides).length && l());
        }
        t.on("created", d),
          t.on("optionsChanged", d),
          t.on("updated", l),
          t.on("destroyed", u);
      }
      function N(t, n) {
        return function (e) {
          var i,
            r,
            a,
            c,
            u,
            d = l();
          function f(t) {
            var n;
            o(
              e.container,
              "reverse",
              "rtl" !==
                ((n = e.container),
                window
                  .getComputedStyle(n, null)
                  .getPropertyValue("direction")) || t
                ? null
                : ""
            ),
              o(e.container, "v", e.options.vertical && !t ? "" : null),
              o(e.container, "disabled", e.options.disabled && !t ? "" : null);
          }
          function v() {
            h() && k();
          }
          function h() {
            var t = null;
            if (
              (c.forEach(function (n) {
                n.matches && (t = n.__media);
              }),
              t === i)
            )
              return !1;
            i = t;
            var n = t ? a.breakpoints[t] : a;
            return (e.options = x(x({}, a), n)), f(), O(), _(), N(), !0;
          }
          function g(t) {
            var n = p(t);
            return (e.options.vertical ? n.height : n.width) / e.size || 1;
          }
          function b() {
            return e.options.trackConfig.length;
          }
          function y(t) {
            for (var o in ((i = !1),
            (a = x(x({}, n), t)),
            d.purge(),
            (r = e.size),
            (c = []),
            a.breakpoints || [])) {
              var s = window.matchMedia(o);
              (s.__media = o), c.push(s), d.add(s, "change", v);
            }
            d.add(window, "orientationchange", I),
              d.add(window, "resize", C),
              h();
          }
          function w(t) {
            e.animator.stop();
            var n = e.track.details;
            e.track.init(null != t ? t : n ? n.abs : 0);
          }
          function k(t) {
            w(t), e.emit("optionsChanged");
          }
          function j(t, n) {
            if (t) return y(t), void k(n);
            O(), _();
            var i = b();
            N(), b() !== i ? k(n) : w(n), e.emit("updated");
          }
          function N() {
            var t = e.options.slides;
            if ("function" == typeof t)
              return (e.options.trackConfig = t(e.size, e.slides));
            for (
              var n = e.slides,
                i = n.length,
                r = "number" == typeof t ? t : m(t, "number", i, !0),
                a = [],
                o = m(t, "perView", 1, !0),
                s = m(t, "spacing", 0, !0) / e.size || 0,
                c = "auto" === o ? s : s / o,
                u = m(t, "origin", "auto"),
                l = 0,
                d = 0;
              d < r;
              d++
            ) {
              var f = "auto" === o ? g(n[d]) : 1 / o - s + c,
                p = "center" === u ? 0.5 - f / 2 : "auto" === u ? 0 : u;
              a.push({ origin: p, size: f, spacing: s }), (l += f);
            }
            if (
              ((l += s * (r - 1)), "auto" === u && !e.options.loop && 1 !== o)
            ) {
              var v = 0;
              a.map(function (t) {
                var n = l - v;
                return (
                  (v += t.size + s),
                  n >= 1 || (t.origin = 1 - n - (l > 1 ? 0 : 1 - l)),
                  t
                );
              });
            }
            e.options.trackConfig = a;
          }
          function C() {
            O();
            var t = e.size;
            e.options.disabled || t === r || ((r = t), j());
          }
          function I() {
            C(), setTimeout(C, 500), setTimeout(C, 2e3);
          }
          function O() {
            var t = p(e.container);
            e.size = (e.options.vertical ? t.height : t.width) || 1;
          }
          function _() {
            e.slides = s(e.options.selector, e.container);
          }
          (e.container = (u = s(t, document)).length ? u[0] : null),
            (e.destroy = function () {
              d.purge(), e.emit("destroyed"), f(!0);
            }),
            (e.prev = function () {
              e.moveToIdx(e.track.details.abs - 1, !0);
            }),
            (e.next = function () {
              e.moveToIdx(e.track.details.abs + 1, !0);
            }),
            (e.update = j),
            y(e.options);
        };
      }
      var C = function (t, n, e) {
        try {
          return (function (t, n) {
            var e,
              i = {};
            return (
              (e = {
                emit: function (t) {
                  i[t] &&
                    i[t].forEach(function (t) {
                      t(e);
                    });
                  var n = e.options[t];
                  n && n(e);
                },
                moveToIdx: function (t, n, i) {
                  var r = e.track.idxToDist(t, n);
                  if (r) {
                    var a = e.options.defaultAnimation;
                    e.animator.start([
                      {
                        distance: r,
                        duration: m(i || a, "duration", 500),
                        easing: m(i || a, "easing", function (t) {
                          return 1 + --t * t * t * t * t;
                        }),
                      },
                    ]);
                  }
                },
                on: function (t, n, e) {
                  void 0 === e && (e = !1), i[t] || (i[t] = []);
                  var r = i[t].indexOf(n);
                  r > -1 ? e && delete i[t][r] : e || i[t].push(n);
                },
                options: t,
              }),
              (function () {
                if (
                  ((e.track = y(e)),
                  (e.animator = (function (t) {
                    var n, e, i, r, a, o;
                    function s(n) {
                      o || (o = n), c(!0);
                      var a = n - o;
                      a > i && (a = i);
                      var d = r[e];
                      if (d[3] < a) return e++, s(n);
                      var f = d[2],
                        p = d[4],
                        m = d[0],
                        v = d[1] * (0, d[5])(0 === p ? 1 : (a - f) / p);
                      if ((v && t.track.to(m + v), a < i)) return l();
                      (o = null), c(!1), u(null), t.emit("animationEnded");
                    }
                    function c(t) {
                      n.active = t;
                    }
                    function u(t) {
                      n.targetIdx = t;
                    }
                    function l() {
                      var t;
                      (t = s), (a = window.requestAnimationFrame(t));
                    }
                    function d() {
                      var n;
                      (n = a),
                        window.cancelAnimationFrame(n),
                        c(!1),
                        u(null),
                        o && t.emit("animationStopped"),
                        (o = null);
                    }
                    return (n = {
                      active: !1,
                      start: function (n) {
                        if ((d(), t.track.details)) {
                          var a = 0,
                            o = t.track.details.position;
                          (e = 0),
                            (i = 0),
                            (r = n.map(function (t) {
                              var n,
                                e = o,
                                r =
                                  null !== (n = t.earlyExit) && void 0 !== n
                                    ? n
                                    : t.duration,
                                s = t.easing,
                                c = t.distance * s(r / t.duration) || 0;
                              o += c;
                              var u = i;
                              return (
                                (i += r),
                                (a += c),
                                [e, t.distance, u, i, t.duration, s]
                              );
                            })),
                            u(t.track.distToIdx(a)),
                            l(),
                            t.emit("animationStarted");
                        }
                      },
                      stop: d,
                      targetIdx: null,
                    });
                  })(e)),
                  n)
                )
                  for (var t in n) {
                    var i = n[t];
                    i && i(e);
                  }
                e.track.init(e.options.initial || 0), e.emit("created");
              })(),
              e
            );
          })(
            n,
            b(
              [
                N(t, {
                  drag: !0,
                  mode: "snap",
                  renderMode: "precision",
                  rubberband: !0,
                  selector: ".keen-slider__slide",
                }),
                j,
                k,
                w,
              ],
              e || [],
              !0
            )
          );
        } catch (t) {
          console.error(t);
        }
      };
      n.E = function (t, n) {
        var e = i.useRef(null),
          r = i.useRef(!1),
          a = i.useRef(t),
          o = i.useCallback(function (i) {
            i
              ? ((a.current = t),
                (e.current = new C(i, t, n)),
                (r.current = !1))
              : (e.current && e.current.destroy && e.current.destroy(),
                (e.current = null));
          }, []);
        return (
          i.useEffect(
            function () {
              r.current
                ? e.current && e.current.update(a.current)
                : (r.current = !0);
            },
            [g(a, t)]
          ),
          [o, e]
        );
      };
    },
    5026: function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/[slug]",
        function () {
          return e(1053);
        },
      ]);
    },
    8607: function (t, n, e) {
      "use strict";
      var i = e(1799),
        r = e(6122),
        a = e(5893);
      e(7294);
      n.Z = function (t) {
        return (0, a.jsx)(
          "svg",
          (0, r.Z)((0, i.Z)({}, t), {
            style: { width: "100%", height: "100%" },
            preserveAspectRatio: "none",
            children: (0, a.jsx)("line", {
              x1: "10%",
              y1: "90%",
              x2: "90%",
              y2: "10%",
              strokeWidth: "2",
              stroke: "currentColor",
              className: "lg:stroke-[3]",
            }),
          })
        );
      };
    },
    1053: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          __N_SSG: function () {
            return D;
          },
          default: function () {
            return Q;
          },
        });
      var i = e(1799),
        r = e(5893),
        a = e(7294),
        o = e(1077),
        s = e(1551),
        c = e(9008),
        u = e.n(c),
        l = function (t) {
          var n = t.title,
            e = t.sku,
            i = t.price,
            a = t.image,
            o = t.description,
            s = t.slug,
            c = {
              "@context": "https://schema.org/",
              "@type": "Product",
              name: n,
              image: a,
              description: o,
              sku: e,
              mpn: e,
              brand: { "@type": "Thing", name: "Clam-O-naise" },
              offers: {
                "@type": "Offer",
                url: "".concat("https://www.clams.lol", "/products/").concat(s),
                priceCurrency: "VND",
                price: i,
                itemCondition: "https://schema.org/NewCondition",
                availability: "https://schema.org/InStock",
                seller: { "@type": "Organization", name: "Clam-O-naise" },
              },
            };
          return (0, r.jsx)(u(), {
            children: (0, r.jsx)("script", {
              type: "application/ld+json",
              children: JSON.stringify(c),
            }),
          });
        },
        d = e(5490),
        f = e(828),
        p = e(4184),
        m = e.n(p),
        v = e(4579),
        h = e(8415),
        g = e(2730),
        x =
          (e(9409),
          function (t) {
            var n = t.images,
              e = void 0 === n ? [] : n,
              i = (0, a.useState)(0),
              o = i[0],
              s = i[1],
              c = (0, f.Z)(
                (0, g.E)({
                  loop: !0,
                  drag: e.length > 1,
                  slideChanged: function (t) {
                    s(t.track.details.rel);
                  },
                }),
                2
              ),
              u = c[0],
              l = c[1],
              d =
                e.length > 1 &&
                (0, r.jsx)("ul", {
                  className:
                    "absolute bottom-4 lg:bottom-3 left-0 right-0 flex gap-half lg:gap-1 items-center justify-center",
                  children: e.map(function (t, n) {
                    return (0, r.jsx)(
                      "li",
                      {
                        children: (0, r.jsx)("button", {
                          "aria-label": "Image ".concat(n + 1),
                          className: m()("button block button-dot", {
                            active: n === o,
                          }),
                          onClick: function () {
                            return (function (t) {
                              l.current && l.current.moveToIdx(t);
                            })(n);
                          },
                        }),
                      },
                      t._key
                    );
                  }),
                }),
              p = (0, r.jsx)("ul", {
                ref: u,
                className: "keen-slider",
                children: e.map(function (t, n) {
                  return (0, r.jsx)(
                    "li",
                    {
                      className: "keen-slider__slide min-w-full",
                      children: (0, r.jsx)(v.Z, {
                        className:
                          "w-full aspect-w-4 aspect-h-5 lg:pb-0 lg:min-h-minus-header",
                        alt: t.alt,
                        sources: [
                          { url: t.url, w: 1800, media: "(min-width: 1500px)" },
                          { url: t.url, w: 1500, media: "(min-width: 800px)" },
                          { url: t.url, w: 1400, media: "(min-width: 600px)" },
                        ],
                        src: { url: t.url, w: 1e3, q: 90 },
                        lqip: t.lqip,
                      }),
                    },
                    t._key
                  );
                }),
              }),
              x =
                e.length > 1 &&
                (0, r.jsx)("div", {
                  className:
                    "hidden lg:flex absolute z-2 inset-0 px-3 flex-col justify-center pointer-events-none",
                  children: (0, r.jsxs)("div", {
                    className: "w-full flex justify-between items-center",
                    children: [
                      (0, r.jsx)("button", {
                        onClick: function (t) {
                          l.current && l.current.prev();
                        },
                        "aria-label": "Previous Image",
                        className:
                          "pointer-events-auto block button button-icon",
                        children: (0, r.jsx)(h.Z, {
                          className: "block mx-auto rotate-180",
                        }),
                      }),
                      (0, r.jsx)("button", {
                        onClick: function (t) {
                          l.current && l.current.next();
                        },
                        "aria-label": "Next Image",
                        className:
                          "pointer-events-auto block button button-icon",
                        children: (0, r.jsx)(h.Z, {
                          className: "block mx-auto",
                        }),
                      }),
                    ],
                  }),
                });
            return (0, r.jsxs)("div", {
              className: "relative",
              children: [p, x, d],
            });
          }),
        b = e(7568),
        y = e(655),
        w = e(9031),
        k = e(4061),
        j = e.n(k),
        N = e(1304),
        C = function (t) {
          var n = t.productId,
            e = t.quantity,
            i = t.enableOptions,
            o = t.options,
            s = void 0 === o ? [] : o,
            c = t.activeOptions,
            u = void 0 === c ? [] : c,
            l = t.setOptions,
            d = void 0 === l ? [] : l,
            f = t.maxCartQuantity,
            p = t.shopifyVariant,
            v = t.loadingInventory,
            h = t.setQuantity,
            g = void 0 === h ? function () {} : h,
            x = t.isOptionSoldOut,
            k = void 0 === x ? function () {} : x,
            C = (0, a.useState)(!1),
            I = C[0],
            O = C[1],
            _ = (0, w.ZP)(),
            T = _.addItemsToCart,
            M = _.isUpdatingCart,
            S = _.lineItems,
            Z = void 0 === S ? [] : S,
            E = Boolean(p && !p.available),
            A = 100,
            z = !1;
          if (f > 0) {
            var P = (0, N.c)("Product", n),
              q = j()(
                Z,
                function (t, n) {
                  return n.variant.product.id === P ? t + n.quantity : t;
                },
                0
              );
            (A = f - q) <= 0 && (z = !0);
          }
          (0, a.useEffect)(
            function () {
              f > 0 && e > A && g(A || 1);
            },
            [f, A]
          );
          var D = (function () {
              var t = (0, b.Z)(function () {
                var t, n, i;
                return (0, y.__generator)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        O(!0),
                        (t = []),
                        (n = {}),
                        f > 0 &&
                          t.push(
                            ((n.key = "_max_cart_quantity"),
                            (n.value = "".concat(f)),
                            n)
                          ),
                        [
                          4,
                          T(
                            (((i = {}).variantId = p.id),
                            (i.quantity = e),
                            (i.customAttributes = t),
                            i)
                          ),
                        ]
                      );
                    case 1:
                      return r.sent(), O(!1), [2];
                  }
                });
              });
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            Q =
              i &&
              s.map(function (t, n) {
                return (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("h2", {
                      className: "font-caps text-caps-24 lg:text-caps-30 mb-1",
                      children: t.name,
                    }),
                    (0, r.jsx)("ul", {
                      className:
                        "2xs:px-2 lg:px-0 flex flex-wrap justify-center lg:justify-start items-center gap-1",
                      children: t.values.map(function (t) {
                        return (0, r.jsx)(
                          "li",
                          {
                            children: (0, r.jsx)("button", {
                              disabled: k(n, t.name),
                              onClick: function () {
                                return d[n](t.name);
                              },
                              className: m()("block button button-option", {
                                active: t.name === u[n],
                              }),
                              children: t.name,
                            }),
                          },
                          t._key
                        );
                      }),
                    }),
                  ],
                });
              }),
            V = "Mua Ngay";
          I ? (V = "Adding\u2026") : E && (V = "Bán hết");
          var L = (0, r.jsxs)("div", {
            className: "flex gap-1 max-w-[320px] mx-auto lg:ml-0",
            children: [
              (0, r.jsx)("div", {
                className: "flex-shrink-0",
                children: (0, r.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, r.jsx)("div", {
                      className: "button-quantity-container text-center",
                      children: e,
                    }),
                    (0, r.jsx)("button", {
                      onClick: function () {
                        e <= 1 || g(e - 1);
                      },
                      "aria-label": "Decrement Quantity",
                      className:
                        "absolute w-[50%] top-0 bottom-0 left-0 flex justify-center items-center",
                      children: (0, r.jsx)("img", {
                        className: "block",
                        src: "./product_files/icon-cart-minus.svg",
                      }),
                    }),
                    (0, r.jsx)("button", {
                      onClick: function () {
                        e >= A || g(e + 1);
                      },
                      "aria-label": "Increment Quantity",
                      className:
                        "absolute w-[50%] top-0 bottom-0 right-0 flex justify-center items-center",
                      children: (0, r.jsx)("img", {
                        className: "block",
                        src: "./product_files/icon-cart-plus.svg",
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className: "flex-grow",
                children: (0, r.jsx)("button", {
                  disabled: M || v || E || z,
                  onClick: D,
                  className: "block w-full button button-primary min-w-auto",
                  children: V,
                }),
              }),
            ],
          });
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)("div", {
                className: "flex flex-col gap-2 mb-2",
                children: Q,
              }),
              L,
            ],
          });
        },
        I = e(8863),
        O = e.n(I),
        _ = e(4161),
        T = e(5018),
        M = e(8373),
        S = e(3311),
        Z = e.n(S);
      function E() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return Z()(n, function (n) {
          for (var e = 0; e < 3; e++) {
            var i = t[e],
              r = n["option".concat(e + 1)];
            if (i && i !== r) return !1;
          }
          return !0;
        });
      }
      function A(t) {
        var n = t.variants[0],
          e = (0, a.useState)(1),
          i = e[0],
          r = e[1],
          o = (0, a.useState)(n.option1 || null),
          s = o[0],
          c = o[1],
          u = (0, a.useState)(n.option2 || null),
          l = u[0],
          d = u[1],
          f = (0, a.useState)(n.option3 || null),
          p = f[0],
          m = f[1],
          v = [s, l, p],
          h = [c, d, m],
          g = E(v, t.variants),
          x = !1,
          w = (function (t, n) {
            var e = (0, a.useState)(!1),
              i = e[0],
              r = e[1],
              o = (0, a.useState)(null),
              s = o[0],
              c = o[1],
              u = (0, a.useState)(null),
              l = u[0],
              d = u[1],
              f = (0, a.useState)(!1),
              p = f[0],
              m = f[1],
              v = s
                ? Z()(s.variants, function (t) {
                    return (0, N.J)(t.id).id === n;
                  })
                : null;
            return (
              (0, a.useEffect)(
                (0, b.Z)(function () {
                  var n, e, i, a;
                  return (0, y.__generator)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (!t) return [2];
                        (e = {}),
                          (n = (0, N.c)(
                            "Product",
                            t,
                            ((e.accessToken =
                              "e96be7173775e28407c8cba33f072043"),
                            e)
                          )),
                          r(!0),
                          m(!1),
                          (o.label = 1);
                      case 1:
                        return (
                          o.trys.push([1, 3, , 4]), [4, M.Z.product.fetch(n)]
                        );
                      case 2:
                        return (i = o.sent()), c(i), i || m(!0), [3, 4];
                      case 3:
                        return (
                          (a = o.sent()),
                          console.log("Error fetching product: ".concat(t)),
                          d(a),
                          [3, 4]
                        );
                      case 4:
                        return r(!1), [2];
                    }
                  });
                }),
                [t]
              ),
              {
                shopifyProduct: s,
                shopifyVariant: v,
                error: l,
                loadingInventory: i,
                noProductFound: p,
              }
            );
          })(t._id, g._id),
          k = w.shopifyProduct,
          j = w.shopifyVariant,
          C = w.error,
          I = w.loadingInventory,
          O = w.noProductFound;
        j ? (x = !j.available) : ((j || I || C) && (I || C || !O)) || (x = !0);
        return {
          quantity: i,
          setQuantity: r,
          activeOptions: v,
          setOptions: h,
          activeVariant: g,
          soldOut: x,
          shopifyProduct: k,
          shopifyVariant: j,
          loadingInventory: I,
          isOptionSoldOut: function (n, e) {
            var i = (0, T.Z)(v);
            i[n] = e;
            var r,
              a = E(i, t.variants),
              o = a.inventoryQuantity <= 0;
            return (
              k &&
                (r = Z()(k.variants, function (t) {
                  return (0, N.J)(t.id).id === a._id;
                })) &&
                (o = !r.available),
              o
            );
          },
        };
      }
      var z = e(4657),
        P = e(8607),
        q = function (t) {
          var n = t.title,
            e = t.maxCartQuantity,
            i = t.product,
            a = t.description,
            o = void 0 === a ? [] : a,
            s = t.details,
            c = void 0 === s ? [] : s,
            u = t.images,
            l = void 0 === u ? [] : u,
            d = A(i),
            f = d.quantity,
            p = d.activeVariant,
            m = d.shopifyVariant,
            v = d.activeOptions,
            h = d.setOptions,
            g = d.loadingInventory,
            b = d.setQuantity,
            y = d.isOptionSoldOut,
            w =
              i.variants.length > 1 &&
              "Default Title" !== i.variants[0].option1,
            k = Boolean(p.compareAtCents && p.compareAtCents > p.cents),
            j = (0, r.jsxs)("div", {
              className:
                "col-span-2 lg:col-span-1 relative lg:sticky lg:top-header overflow-hidden",
              children: [
                (0, r.jsx)(x, { images: l }),
                (0, r.jsx)("div", {
                  className:
                    "absolute left-[-10vw] right-[-10vw] bottom-[-1px] h-[50px] lg:hidden",
                  children: (0, r.jsx)("img", {
                    src: "./product_files/icon-wave-cream.png",
                    className: "w-full h-full shadow-wave-divider-top",
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "hidden lg:block absolute w-[100vh] right-0 bottom-full origin-bottom-right -rotate-90 translate-x-[1vw] h-[3vw]",
                  children: (0, r.jsx)("img", {
                    src: "./product_files/icon-wave-cream.png",
                    className: "w-full h-full shadow-wave-divider-top",
                  }),
                }),
              ],
            }),
            N = (0, r.jsx)("div", {
              className: "col-span-2 lg:col-span-1 pb-6 lg:pt-12",
              children: (0, r.jsx)("div", {
                className: "px-3 lg:px-6",
                children: (0, r.jsxs)("div", {
                  className:
                    "mx-auto max-w-[550px] text-center lg:text-left lg:ml-0",
                  children: [
                    (0, r.jsx)("h1", {
                      className: "font-caps text-caps-46 lg:text-caps-60 mb-1",
                      children: n,
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "flex justify-center items-center lg:justify-start gap-1",
                      children: [
                        k &&
                          (0, r.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, r.jsx)("p", {
                                className: "text-sans-22 lg:text-sans-26",
                                children: (0, z.Z)(p.compareAtCents),
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "absolute top-[5%] bottom-[5%] left-[-15%] right-[-20%]",
                                children: (0, r.jsx)(P.Z, {
                                  className: "w-full h-full text-red",
                                }),
                              }),
                            ],
                          }),
                        (0, r.jsx)("p", {
                          className: "text-sans-22 lg:text-sans-26 font-800",
                          children: (0, z.Z)(p.cents),
                        }),
                      ],
                    }),
                    o &&
                      (0, r.jsx)("div", {
                        className:
                          "rich-text line-break text-sans-18 lg:text-22 lg:leading-28 font-800 mt-2",
                        children: (0, r.jsx)(O(), {
                          blocks: o,
                          serializers: _.Z,
                        }),
                      }),
                    c &&
                      c.map(function (t) {
                        return (0,
                        r.jsxs)("div", { className: "mt-2", children: [(0, r.jsx)("h2", { className: "font-caps text-caps-24 lg:text-caps-30 mb-1", children: t.title }), (0, r.jsx)("div", { className: "rich-text line-break text-sans-14 lg:text-sans-18 font-800", style: { fontWeight: "normal" }, children: (0, r.jsx)(O(), { blocks: t.description, serializers: _.Z }) })] }, t._key);
                      }),
                    (0, r.jsx)("div", {
                      className: "mt-2",
                      children: (0, r.jsx)(C, {
                        productId: i._id,
                        maxCartQuantity: e,
                        shopifyVariant: m,
                        quantity: f,
                        enableOptions: w,
                        options: i.options,
                        activeOptions: v,
                        setOptions: h,
                        setQuantity: b,
                        isOptionSoldOut: y,
                        loadingInventory: g,
                      }),
                    }),
                  ],
                }),
              }),
            });
          return (0, r.jsxs)("div", {
            className: "grid grid-cols-2 gap-y-2 items-start",
            children: [j, N],
          });
        },
        D = !0,
        Q = function (t) {
          var n = t.config,
            e = void 0 === n ? {} : n,
            a = t.title,
            c = t.slug,
            u = t.product,
            f = t.maxCartQuantity,
            p = t.description,
            m = void 0 === p ? [] : p,
            v = t.details,
            h = void 0 === v ? [] : v,
            g = t.images,
            x = void 0 === g ? [] : g,
            b = t.components,
            y = void 0 === b ? [] : b,
            w = t.mainImage,
            k = t.seo,
            j = e.seo || {},
            N = {
              metaTitle: "".concat(
                a,
                " - Clam-O-Naise\xae by Cards Against Humanity"
              ),
              openGraphTitle: "".concat(
                a,
                " - Clam-O-Naise\xae by Cards Against Humanity"
              ),
              twitterTitle: "".concat(
                a,
                " - Clam-O-Naise\xae by Cards Against Humanity"
              ),
              openGraphImage: w || j.openGraphImage,
              twitterImage: w || j.twitterImage,
            },
            C = (0, d.Z)([j, N, k]),
            I = {
              title: a,
              sku: u.variants[0].sku,
              price: "".concat((u.variants[0].cents / 100).toFixed(2)),
              image: C.openGraphImage.url,
              description: C.metaDescription,
              slug: c,
            };
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)(o.Z, (0, i.Z)({}, C)),
              (0, r.jsx)(l, (0, i.Z)({}, I)),
              (0, r.jsx)(
                q,
                {
                  title: a,
                  maxCartQuantity: f,
                  product: u,
                  description: m,
                  details: h,
                  images: x,
                },
                "hero-".concat(c)
              ),
              (0, r.jsx)(s.Z, { components: y }, "components-".concat(c)),
            ],
          });
        };
    },
    4161: function (t, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return p;
        },
      });
      var i = e(5893),
        r = (e(7294), e(8863)),
        a = e(6737),
        o = function (t) {
          return "/" === t.mark.href[0]
            ? (0, i.jsx)(a.Z, {
                title: t.mark.title,
                openInNewWindow: t.mark.openInNewWindow,
                url: t.mark.href,
                children: t.children,
              })
            : (0, i.jsx)("a", {
                title: t.mark.title,
                target: t.mark.openInNewWindow ? "_blank" : null,
                href: t.mark.href,
                children: t.children,
              });
        },
        s = e(4184),
        c = e.n(s),
        u = function (t) {
          var n = t.node,
            e = void 0 === n ? {} : n,
            r = e.headers,
            a = void 0 === r ? [] : r,
            o = e.rows,
            s = void 0 === o ? [] : o;
          return (0, i.jsx)("div", {
            className: "overflow-x-auto scroll-touch pt-[1px] pb-[1px]",
            children: (0, i.jsxs)("table", {
              children: [
                (0, i.jsx)("thead", {
                  children: (0, i.jsx)("tr", {
                    children: a.map(function (t, n) {
                      return (0,
                      i.jsx)("th", { colSpan: t.colspan || 1, className: c()("whitespace-nowrap", { "text-left": "left" == t.textalign, "text-center": "center" == t.textalign, "text-right": "right" == t.textalign }), children: t.title }, n);
                    }),
                  }),
                }),
                (0, i.jsx)("tbody", {
                  children: s.map(function (t, n) {
                    return (0, i.jsx)(
                      "tr",
                      {
                        children: t.columns.map(function (t, n) {
                          return (0,
                          i.jsx)("td", { colSpan: t.colspan || 1, className: c()("whitespace-nowrap", { "text-left": "left" == t.textalign, "text-center": "center" == t.textalign, "text-right": "right" == t.textalign }), children: t.text }, n);
                        }),
                      },
                      n
                    );
                  }),
                }),
              ],
            }),
          });
        },
        l = e(9534),
        d = e(4579),
        f = e(5520),
        p = {
          types: {
            block: function (t) {
              var n = t.node.style,
                e = void 0 === n ? "normal" : n;
              return "h1" === e
                ? (0, i.jsx)("h1", { children: t.children })
                : "h2" === e
                ? (0, i.jsx)("h2", { children: t.children })
                : "h3" === e
                ? (0, i.jsx)("h3", { children: t.children })
                : r.defaultSerializers.types.block(t);
            },
            table: u,
            imageAlt: function (t) {
              var n = t.node,
                e = void 0 === n ? { asset: {} } : n,
                r = ((0, l.Z)(t, ["node"]), e.asset),
                a = r.url,
                o = r.metadata,
                s = r.alt,
                c = r.caption;
              return (0, i.jsxs)("figure", {
                className: "py-1",
                children: [
                  (0, i.jsx)(d.Z, {
                    style: (0, f.Z)(o.dimensions.aspectRatio),
                    alt: s,
                    sources: [{ url: a, w: 1e3, media: "(min-width: 600px)" }],
                    src: { url: a, w: 800 },
                    lqip: o.lqip,
                  }),
                  c &&
                    (0, i.jsx)("figcaption", {
                      className: "mt-1 text-sans-12 uppercase",
                      children: c,
                    }),
                ],
              });
            },
          },
          marks: { link: o },
        };
    },
    1304: function (t, n, e) {
      "use strict";
      e.d(n, {
        J: function () {
          return r;
        },
        c: function () {
          return a;
        },
      });
      var i = e(828);
      function r(t) {
        var n = t.split("shopify/")[1],
          e = (0, i.Z)(n.split("/"), 2),
          r = e[0],
          a = e[1],
          o = (a.split("?").slice(1)[0] || "")
            .split("&")
            .reduce(function (t, n) {
              var e = (0, i.Z)(n.split("="), 2),
                r = e[0],
                a = e[1];
              return (t[r] = a), t;
            }, {});
        return { type: r, id: a.split("?")[0], params: o, raw: t };
      }
      function a(t, n) {
        var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = "gid://shopify/".concat(t, "/").concat(n),
          r = [],
          a = Object.keys(e);
        if (a.length > 0) {
          for (var o = 0; o < a.length; o++) r.push(a[o] + "=" + e[a[o]]);
          i += r = "?" + r.join("&");
        }
        return i;
      }
    },
    9409: function () {},
    828: function (t, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = e(3375);
      var r = e(1566);
      function a(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (0, i.Z)(t, n) ||
          (0, r.Z)(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
  },
  function (t) {
    t.O(0, [863, 689, 774, 888, 179], function () {
      return (n = 5026), t((t.s = n));
      var n;
    });
    var n = t.O();
    _N_E = n;
  },
]);
