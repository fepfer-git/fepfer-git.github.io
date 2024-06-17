'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [736],
  {
    4736: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return g
          },
        })
      var r = t(7568),
        i = t(655),
        a = t(5893),
        s = t(7294),
        o = function () {}
      function u(e, n, t, r) {
        void 0 === n && (n = 0),
          void 0 === t && (t = !0),
          void 0 === r && (r = !1)
        var i = (0, s.useRef)()
        function a() {
          i.current && i.current()
        }
        ;(0, s.useEffect)(function () {
          i.current = e
        }),
          (0, s.useEffect)(
            function () {
              if ('undefined' !== typeof window) {
                if (t) {
                  r && a()
                  var e = window.setInterval(a, n)
                  return function () {
                    window.clearInterval(e)
                  }
                }
              } else console.warn('useIntervalWhen: window is undefined.')
              return o
            },
            [t, n]
          )
      }
      var c = t(4394),
        l = t(9815),
        f = t(7962)
      function d() {
        var e = !1,
          n = [],
          t = new Set(),
          r = {
            subscribe: function (e) {
              return (
                t.add(e),
                function () {
                  t.delete(e)
                }
              )
            },
            start: function (r, i) {
              if (e) {
                var a = []
                return (
                  t.forEach(function (e) {
                    a.push((0, l.d5)(e, r, { transitionOverride: i }))
                  }),
                  Promise.all(a)
                )
              }
              return new Promise(function (e) {
                n.push({ animation: [r, i], resolve: e })
              })
            },
            set: function (n) {
              return (
                (0, c.k)(
                  e,
                  'controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.'
                ),
                t.forEach(function (e) {
                  ;(0, f.gg)(e, n)
                })
              )
            },
            stop: function () {
              t.forEach(function (e) {
                ;(0, l.p_)(e)
              })
            },
            mount: function () {
              return (
                (e = !0),
                n.forEach(function (e) {
                  var n = e.animation,
                    t = e.resolve
                  r.start
                    .apply(r, (0, i.__spreadArray)([], (0, i.__read)(n)))
                    .then(t)
                }),
                function () {
                  ;(e = !1), r.stop()
                }
              )
            },
          }
        return r
      }
      var v = t(5930)
      function m() {
        var e = (0, v.h)(d)
        return (0, s.useEffect)(e.mount, []), e
      }
      var h = t(8786),
        w = t(4579),
        b = t(5520),
        p = t(8145),
        y = { x: '100%', y: '30vh', rotate: 30 },
        x = {
          x: '-100vw',
          y: ['40vh', '20vh', '30vh'],
          rotate: -60,
          transition: {
            x: { ease: 'linear', duration: 4 },
            y: { ease: p.Z.inOutCubic, duration: 4 },
            rotate: { ease: 'linear', duration: 4 },
          },
        },
        _ = { x: '-100%', y: '60vh', rotate: -20 },
        E = {
          x: '100vw',
          y: '20vh',
          rotate: -20,
          transition: {
            x: { ease: 'linear', duration: 4 },
            y: { ease: 'linear', duration: 4 },
          },
        },
        g = function (e) {
          var n = e.swimmerDelay,
            t = e.swimmerInterval,
            o = e.swimmerFrameInterval,
            c = e.swimmerFrames,
            l = void 0 === c ? [] : c,
            f = e.bubbleDelay,
            d = e.bubbleInterval,
            v = e.bubbleFrame,
            p = m(),
            g = m(),
            k = (0, s.useState)(!1),
            N = k[0],
            j = k[1],
            Z = (0, s.useState)(!1),
            I = Z[0],
            z = Z[1],
            C = (0, s.useState)(0),
            F = C[0],
            S = C[1]
          ;(0, s.useEffect)(function () {
            setTimeout(function () {
              j(!0)
            }, f),
              setTimeout(function () {
                z(!0)
              }, n)
          }),
            u(
              function () {
                F < l.length - 1 ? S(F + 1) : S(0)
              },
              o,
              I
            ),
            u(
              (0, r.Z)(function () {
                return (0, i.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, p.start(x)]
                    case 1:
                      return e.sent(), p.set(y), [2]
                  }
                })
              }),
              d,
              N,
              !0
            ),
            u(
              (0, r.Z)(function () {
                return (0, i.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, g.start(E)]
                    case 1:
                      return e.sent(), g.set(_), [2]
                  }
                })
              }),
              t,
              I,
              !0
            )
          var R = (0, a.jsx)(h.m.div, {
              className: 'fixed top-0 right-0 z-2 pointer-events-none',
              initial: y,
              animate: p,
              children: (0, a.jsx)('div', {
                className: 'w-[70vw] md:w-[30vw]',
                children: (0, a.jsx)(w.Z, {
                  style: (0, b.Z)(v.dimensions.aspectRatio),
                  className: 'block w-full',
                  src: { url: v.url, h: 800 },
                  lazyBlur: !1,
                }),
              }),
            }),
            B = (0, a.jsx)(h.m.div, {
              className: 'fixed top-0 left-0 z-2 pointer-events-none',
              initial: _,
              animate: g,
              children: (0, a.jsx)('div', {
                className: 'w-[100vw] md:w-[50vw]',
                children: (0, a.jsx)(w.Z, {
                  style: (0, b.Z)(l[F].dimensions.aspectRatio),
                  className: 'block w-full',
                  src: { url: l[F].url, h: 800 },
                  lazyBlur: !1,
                }),
              }),
            })
          return (0, a.jsxs)(s.Fragment, { children: [R, B] })
        }
    },
  },
])
