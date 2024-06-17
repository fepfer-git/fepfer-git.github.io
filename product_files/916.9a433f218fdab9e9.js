;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [916],
  {
    4875: function (e, n, t) {
      'use strict'
      t.d(n, {
        M: function () {
          return f
        },
      })
      var i = t(9585)
      function r(e, n, t) {
        t.set(e && n ? e / n : 0)
      }
      var s,
        a = t(1050),
        l = t(2628)
      function o() {
        return {
          xOffset: window.pageXOffset,
          yOffset: window.pageYOffset,
          xMaxOffset: document.body.clientWidth - window.innerWidth,
          yMaxOffset: document.body.clientHeight - window.innerHeight,
        }
      }
      var c = !1
      function u() {
        if (((c = !0), 'undefined' !== typeof window)) {
          var e = (function (e, n) {
            var t = function () {
              var t = n(),
                i = t.xOffset,
                s = t.yOffset,
                a = t.xMaxOffset,
                l = t.yMaxOffset
              e.scrollX.set(i),
                e.scrollY.set(s),
                r(i, a, e.scrollXProgress),
                r(s, l, e.scrollYProgress)
            }
            return t(), t
          })(s, o)
          ;(0, a.E)(window, 'scroll', e, { passive: !0 }),
            (0, a.E)(window, 'resize', e)
        }
      }
      function f() {
        return (
          s ||
            (s = {
              scrollX: (0, i.B)(0),
              scrollY: (0, i.B)(0),
              scrollXProgress: (0, i.B)(0),
              scrollYProgress: (0, i.B)(0),
            }),
          (0, l.L)(function () {
            !c && u()
          }, []),
          s
        )
      }
    },
    8003: function (e, n, t) {
      'use strict'
      t.d(n, {
        H: function () {
          return d
        },
      })
      var i = t(655),
        r = t(4842),
        s = function (e) {
          return (function (e) {
            return 'object' === typeof e && e.mix
          })(e)
            ? e.mix
            : void 0
        }
      var a = t(7294),
        l = t(9585),
        o = t(7974),
        c = t(5930)
      var u = t(1706)
      function f(e, n) {
        var t = (function (e) {
            var n = (0, c.h)(function () {
              return (0, l.B)(e)
            })
            if ((0, a.useContext)(o._).isStatic) {
              var t = (0, i.__read)((0, a.useState)(e), 2)[1]
              ;(0, a.useEffect)(function () {
                return n.onChange(t)
              }, [])
            }
            return n
          })(n()),
          r = function () {
            return t.set(n())
          }
        return (
          r(),
          (function (e, n) {
            ;(0, a.useEffect)(function () {
              var t = e.map(function (e) {
                return e.onChange(n)
              })
              return function () {
                return t.forEach(function (e) {
                  return e()
                })
              }
            })
          })(e, function () {
            return u.ZP.update(r, !1, !0)
          }),
          t
        )
      }
      function d(e, n, t, a) {
        var l =
          'function' === typeof n
            ? n
            : (function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n]
                var t = !Array.isArray(e[0]),
                  a = t ? 0 : -1,
                  l = e[0 + a],
                  o = e[1 + a],
                  c = e[2 + a],
                  u = e[3 + a],
                  f = (0, r.s)(o, c, (0, i.__assign)({ mixer: s(c[0]) }, u))
                return t ? f(l) : f
              })(n, t, a)
        return Array.isArray(e)
          ? v(e, l)
          : v([e], function (e) {
              var n = (0, i.__read)(e, 1)[0]
              return l(n)
            })
      }
      function v(e, n) {
        var t = (0, c.h)(function () {
          return []
        })
        return f(e, function () {
          t.length = 0
          for (var i = e.length, r = 0; r < i; r++) t[r] = e[r].get()
          return n(t)
        })
      }
    },
    8994: function (e, n, t) {
      var i = t(3448)
      e.exports = function (e, n, t) {
        for (var r = -1, s = e.length; ++r < s; ) {
          var a = e[r],
            l = n(a)
          if (null != l && (void 0 === o ? l === l && !i(l) : t(l, o)))
            var o = l,
              c = a
        }
        return c
      }
    },
    3325: function (e) {
      e.exports = function (e, n) {
        return e > n
      }
    },
    433: function (e) {
      e.exports = function (e, n) {
        return e < n
      }
    },
    6162: function (e, n, t) {
      var i = t(8994),
        r = t(3325),
        s = t(6557)
      e.exports = function (e) {
        return e && e.length ? i(e, s, r) : void 0
      }
    },
    3632: function (e, n, t) {
      var i = t(8994),
        r = t(433),
        s = t(6557)
      e.exports = function (e) {
        return e && e.length ? i(e, s, r) : void 0
      }
    },
    2916: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, {
          default: function () {
            return j
          },
        })
      var i = t(5893),
        r = t(7294),
        s = t(4579),
        a = t(5520),
        l = t(872),
        o = t(1799),
        c = t(6122)
      var u = t(4439),
        f = t(5812),
        d = t(6162),
        v = t.n(d),
        h = t(3632),
        m = t.n(h),
        w = function (e) {
          var n = (0, l.Z)({}, e),
            t = (0, r.useState)([0, 0]),
            s = t[0],
            a = t[1],
            d = (0, r.useState)(1),
            h = d[0],
            w = d[1],
            x = s[0] || 0,
            g = s[1] || 0,
            p = x >= 1e3 ? 10 : 6,
            y = x >= 1e3 ? 40 : 20,
            j = v()([x - 2 * p, 0]),
            N = v()([g - 2 * p, 0])
          return (
            (0, r.useEffect)(function () {
              var e = function () {
                  var e = window.innerWidth,
                    n = window.innerHeight
                  ;(s[0] === e && s[1] === n) || a([e, n])
                },
                n = function () {
                  var e,
                    n,
                    t,
                    i,
                    r = (0, f.Z)(),
                    s =
                      ((e = r),
                      (n = 0),
                      (t = window.innerHeight / 4),
                      (i = 1) + ((e - n) / (t - n)) * (1.1 - i)),
                    a = v()([1, m()([1.1, s])])
                  w(a)
                }
              return (
                u.Z &&
                  (window.addEventListener('resize', e),
                  window.addEventListener('scroll', n),
                  e(),
                  n()),
                function () {
                  window.removeEventListener('resize', e),
                    window.removeEventListener('scroll', n)
                }
              )
            }, []),
            (0, i.jsxs)(
              'svg',
              (0, c.Z)((0, o.Z)({}, n), {
                width: x,
                height: g,
                children: [
                  (0, i.jsx)('defs', {
                    children: (0, i.jsxs)('mask', {
                      id: 'hero-frame-hole',
                      children: [
                        (0, i.jsx)('rect', {
                          width: x,
                          height: g,
                          fill: 'white',
                        }),
                        (0, i.jsx)('rect', {
                          x: p,
                          y: p,
                          width: j,
                          height: N,
                          rx: y,
                          fill: 'black',
                          className: 'origin-center will-change-transform',
                          style: { transform: 'scale('.concat(h, ')') },
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)('rect', {
                    fill: '#FF6444',
                    width: '100%',
                    height: '100%',
                    mask: 'url(#hero-frame-hole)',
                  }),
                ],
              })
            )
          )
        },
        x = t(4875),
        g = t(8003),
        p = t(8786),
        y = t(8145),
        j = function (e) {
          var n = e.subtitleImage,
            t = e.jarImage,
            r = e.backgroundImageMobile,
            l = e.backgroundImageDesktop,
            o = e.scrollCta,
            c = (0, x.M)().scrollY,
            u = (0, g.H)(c, [0, 2e3], [0, 500]),
            f = (0, i.jsx)(p.m.div, {
              className: 'absolute inset-0 overflow-hidden',
              style: { y: u },
              children: (0, i.jsx)(p.m.div, {
                className: 'absolute inset-0',
                initial: { scale: 1.05 },
                animate: { scale: 1 },
                transition: { duration: 1.2, delay: 0.2, ease: y.Z.outQuint },
                children: (0, i.jsx)(s.Z, {
                  className: 'absolute inset-0',
                  sources: [
                    { url: l.url, w: 2400, media: '(min-width: 1400px)' },
                    { url: l.url, w: 2e3, media: '(min-width: 1000px)' },
                    { url: l.url, w: 1200, media: '(min-width: 600px)' },
                  ],
                  src: { url: r.url, h: 1200, q: 90 },
                  lqip: l.lqip,
                }),
              }),
            }),
            d = (0, i.jsx)('div', {
              className: 'w-full',
              children: (0, i.jsx)('div', {
                className:
                  'mx-auto w-[66vw] md:w-[46vh] lg:w-[46vh] mb-1 lg:mb-0',
                children: (0, i.jsx)(p.m.div, {
                  className: 'w-full',
                  initial: { y: '-20%' },
                  animate: { y: 0 },
                  transition: { duration: 0.8, delay: 0.6, ease: y.Z.outQuint },
                  children: (0, i.jsx)(s.Z, {
                    style: (0, a.Z)(n.dimensions.aspectRatio),
                    src: { url: n.url, w: 600 },
                    lazyBlur: !1,
                  }),
                }),
              }),
            }),
            v = (0, i.jsx)('div', {
              className: 'w-full lg:pt-[2vh] pb-[4vh]',
              children: (0, i.jsx)('div', {
                className: 'mx-auto w-[25vh] lg:w-[30vh]',
                children: (0, i.jsx)(p.m.div, {
                  className: 'w-full',
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { duration: 0.8, delay: 0.3, ease: y.Z.outQuint },
                  children: (0, i.jsx)(s.Z, {
                    className: 'w-full',
                    style: (0, a.Z)(t.dimensions.aspectRatio),
                    src: { url: t.url, w: 600 },
                    lazyBlur: !1,
                  }),
                }),
              }),
            }),
            h = (0, i.jsx)(p.m.div, {
              className: 'w-full',
              initial: { y: '50%' },
              animate: { y: 0 },
              transition: { duration: 0.8, delay: 0.6, ease: y.Z.outQuint },
              children: (0, i.jsxs)('div', {
                className:
                  'flex flex-col gap-[12px] lg:gap-[16px] justify-center items-center',
                children: [
                  (0, i.jsx)(p.m.div, {
                    animate: { y: [0, 5, 0] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 2,
                      ease: y.Z.inOutCubic,
                    },
                    children: (0, i.jsx)('img', {
                      className: 'block w-[27px] h-[36px]',
                      src: '/images/icon-arrow-scroll.svg',
                    }),
                  }),
                  (0, i.jsx)('p', {
                    className:
                      'uppercase text-12 leading-12 lg:text-14 lg:leading-14 font-800',
                    children: o,
                  }),
                ],
              }),
            })
          return (0, i.jsx)('div', {
            children: (0, i.jsxs)('div', {
              className: 'relative z-0',
              children: [
                f,
                (0, i.jsx)(w, {
                  className: 'pointer-events-none fixed inset-0 z-[1]',
                }),
                (0, i.jsx)('div', {
                  className:
                    'relative z-[1] w-full min-h-screen pt-12 pb-[4vh] flex flex-col lg:justify-center items-center',
                  children: (0, i.jsxs)(p.m.div, {
                    className: 'wipe-circle reveal',
                    animate: {
                      maskSize: '200vh 200vh',
                      WebkitMaskSize: '200vh 200vh',
                    },
                    transition: { duration: 4, delay: 0.3, ease: y.Z.outQuint },
                    children: [d, v, h],
                  }),
                }),
                (0, i.jsx)('div', { className: 'h-[30vw] lg:h-[20vw]' }),
              ],
            }),
          })
        }
    },
  },
])
