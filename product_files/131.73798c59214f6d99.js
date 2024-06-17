'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [131],
  {
    4875: function (e, t, s) {
      s.d(t, {
        M: function () {
          return x
        },
      })
      var l = s(9585)
      function r(e, t, s) {
        s.set(e && t ? e / t : 0)
      }
      var n,
        a = s(1050),
        i = s(2628)
      function c() {
        return {
          xOffset: window.pageXOffset,
          yOffset: window.pageYOffset,
          xMaxOffset: document.body.clientWidth - window.innerWidth,
          yMaxOffset: document.body.clientHeight - window.innerHeight,
        }
      }
      var o = !1
      function d() {
        if (((o = !0), 'undefined' !== typeof window)) {
          var e = (function (e, t) {
            var s = function () {
              var s = t(),
                l = s.xOffset,
                n = s.yOffset,
                a = s.xMaxOffset,
                i = s.yMaxOffset
              e.scrollX.set(l),
                e.scrollY.set(n),
                r(l, a, e.scrollXProgress),
                r(n, i, e.scrollYProgress)
            }
            return s(), s
          })(n, c)
          ;(0, a.E)(window, 'scroll', e, { passive: !0 }),
            (0, a.E)(window, 'resize', e)
        }
      }
      function x() {
        return (
          n ||
            (n = {
              scrollX: (0, l.B)(0),
              scrollY: (0, l.B)(0),
              scrollXProgress: (0, l.B)(0),
              scrollYProgress: (0, l.B)(0),
            }),
          (0, i.L)(function () {
            !o && d()
          }, []),
          n
        )
      }
    },
    8003: function (e, t, s) {
      s.d(t, {
        H: function () {
          return u
        },
      })
      var l = s(655),
        r = s(4842),
        n = function (e) {
          return (function (e) {
            return 'object' === typeof e && e.mix
          })(e)
            ? e.mix
            : void 0
        }
      var a = s(7294),
        i = s(9585),
        c = s(7974),
        o = s(5930)
      var d = s(1706)
      function x(e, t) {
        var s = (function (e) {
            var t = (0, o.h)(function () {
              return (0, i.B)(e)
            })
            if ((0, a.useContext)(c._).isStatic) {
              var s = (0, l.__read)((0, a.useState)(e), 2)[1]
              ;(0, a.useEffect)(function () {
                return t.onChange(s)
              }, [])
            }
            return t
          })(t()),
          r = function () {
            return s.set(t())
          }
        return (
          r(),
          (function (e, t) {
            ;(0, a.useEffect)(function () {
              var s = e.map(function (e) {
                return e.onChange(t)
              })
              return function () {
                return s.forEach(function (e) {
                  return e()
                })
              }
            })
          })(e, function () {
            return d.ZP.update(r, !1, !0)
          }),
          s
        )
      }
      function u(e, t, s, a) {
        var i =
          'function' === typeof t
            ? t
            : (function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t]
                var s = !Array.isArray(e[0]),
                  a = s ? 0 : -1,
                  i = e[0 + a],
                  c = e[1 + a],
                  o = e[2 + a],
                  d = e[3 + a],
                  x = (0, r.s)(c, o, (0, l.__assign)({ mixer: n(o[0]) }, d))
                return s ? x(i) : x
              })(t, s, a)
        return Array.isArray(e)
          ? p(e, i)
          : p([e], function (e) {
              var t = (0, l.__read)(e, 1)[0]
              return i(t)
            })
      }
      function p(e, t) {
        var s = (0, o.h)(function () {
          return []
        })
        return x(e, function () {
          s.length = 0
          for (var l = e.length, r = 0; r < l; r++) s[r] = e[r].get()
          return t(s)
        })
      }
    },
    5131: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return g
          },
        })
      var l = s(1799),
        r = s(6122),
        n = s(5893),
        a = s(7294),
        i = s(8863),
        c = s.n(i),
        o = s(4161),
        d = s(4579),
        x = s(5520),
        u = s(6737),
        p = s(6463)
      var m = s(4875),
        h = s(8003),
        f = s(8786),
        v = s(8145),
        w = s(4439),
        g = function (e) {
          var t = e.titleImage,
            s = e.description,
            i = void 0 === s ? [] : s,
            g = e.cta,
            j = e.ctaDescription,
            N = void 0 === j ? [] : j,
            b = e.packTitle,
            y = e.packDescription,
            Z = e.packImage,
            k = e.prizeTitle,
            z = e.prizeDescription,
            B = e.prizeImage,
            O = e.recipeTitle,
            _ = e.recipeDescription,
            C = e.recipeImage,
            I = e.mayoImage,
            R = e.spoonImageMobile,
            E = e.spoonImageDesktop,
            H = e.merchCornerImage,
            M = e.merchCta,
            P = (function () {
              var e = (0, a.useRef)(null),
                t = (0, a.useState)(null),
                s = t[0],
                l = t[1]
              return (
                (0, a.useEffect)(function () {
                  var t = function () {
                    e.current && l(e.current.getBoundingClientRect())
                  }
                  return (
                    p.Z.listen(t),
                    t(),
                    function () {
                      return p.Z.unlisten(t)
                    }
                  )
                }, []),
                { position: s, itemProps: { ref: e } }
              )
            })(),
            S = P.position,
            Y = P.itemProps,
            A = !1
          w.Z &&
            S &&
            (A =
              S.top <= 0.4 * window.innerHeight &&
              S.bottom >= 0.4 * window.innerHeight)
          var D = (0, m.M)().scrollY,
            W = (0, h.H)(D, [0, 2e3], [-200, 0]),
            X = (0, h.H)(D, [0, 2e3], [-100, 100]),
            T = (0, h.H)(D, [0, 2e3], [100, 0]),
            q = (0, n.jsx)('div', {
              className: 'mx-auto max-w-[200px] lg:max-w-[280px]',
              children: (0, n.jsx)(d.Z, {
                style: (0, x.Z)(t.dimensions.aspectRatio),
                src: { url: t.url, w: 600 },
                lazyBlur: !1,
              }),
            }),
            L = (0, n.jsx)('div', {
              className:
                'mx-auto max-w-[630px] lg:max-w-[50vw] xl:max-w-[35vw] 1300:max-w-[40vw] my-3 lg:my-4',
              children: (0, n.jsx)('div', {
                className: 'text-center ',
                children: (0, n.jsx)('div', {
                  className:
                    'rich-text font-800 line-break text-sans-18 lg:text-sans-22',
                  children: (0, n.jsx)(c(), { blocks: i, serializers: o.Z }),
                }),
              }),
            }),
            Q = (0, n.jsxs)('div', {
              className:
                'flex flex-col justify-center items-center text-center gap-[14px] lg:gap-2',
              children: [
                (0, n.jsx)(
                  u.Z,
                  (0, l.Z)({ className: 'block button button-yellow-large' }, g)
                ),
                N &&
                  (0, n.jsx)('div', {
                    className:
                      'rich-text font-800 uppercase text-sans-12 lg:text-sans-18',
                    children: (0, n.jsx)(c(), { blocks: N, serializers: o.Z }),
                  }),
              ],
            }),
            F = (0, n.jsx)('div', {
              className:
                'absolute z-1 top-[-10vw] left-[-30vw] w-[50vw] lg:w-[33vw] lg:left-[-8vw]',
              children: (0, n.jsx)(f.m.div, {
                className: 'w-full',
                style: { x: W },
                children: (0, n.jsx)(d.Z, {
                  className: 'w-full rotate-[40deg]',
                  style: (0, x.Z)(I.dimensions.aspectRatio),
                  sources: [
                    { url: I.url, w: 800, media: '(min-width: 800px)' },
                  ],
                  src: { url: I.url, w: 600 },
                  lazyBlur: !1,
                }),
              }),
            }),
            G = (0, n.jsxs)('div', {
              className:
                'absolute z-1 left-[-10px] lg:left-[-30px] 3xl:left-[40px] top-[30vw] lg:top-[40vw] xl:top-[34vw] 3xl:top-[32vw] rotate-[-5deg] w-[180px] lg:w-[260px]',
              children: [
                (0, n.jsx)('img', {
                  src: '/images/icon-star-blue.svg',
                  className: 'block w-full h-full absolute inset-0 shadow-star',
                }),
                (0, n.jsx)('div', {
                  className:
                    'relative z-[1] px-[25px] py-4 lg:px-[45px] lg:py-6',
                  children: (0, n.jsxs)('div', {
                    className: 'text-center',
                    children: [
                      (0, n.jsx)('h3', {
                        className:
                          'font-caps text-caps-26 lg:text-caps-40 px-2 lg:mb-1',
                        children: b,
                      }),
                      (0, n.jsx)('div', {
                        className:
                          'rich-text font-800 line-break text-sans-14 lg:text-sans-16',
                        children: (0, n.jsx)(c(), {
                          blocks: y,
                          serializers: o.Z,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)('div', {
                  className:
                    'w-[125px] hidden lg:block absolute top-[50%] lg:top-[90%] xl:top-[60%] 3xl:top-[10%] right-[25%] xl:right-[-28%] 3xl:right-[-30%] rotate-[18deg] pointer-events-none',
                  children: (0, n.jsx)(f.m.div, {
                    animate: { rotate: [0, 15, 0] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 3,
                      ease: v.Z.inOutCubic,
                    },
                    className: 'w-full',
                    children: (0, n.jsx)(d.Z, {
                      className: 'w-full',
                      style: (0, x.Z)(Z.dimensions.aspectRatio),
                      src: { url: Z.url, w: 300 },
                      lazyBlur: !1,
                    }),
                  }),
                }),
              ],
            }),
            J = (0, n.jsx)('div', {
              className: 'absolute inset-0 overflow-hidden',
              children: (0, n.jsxs)('div', {
                className:
                  'absolute z-1 right-[-30px] xl:right-[5vw] top-[55vw] lg:top-[20vh] xl:top-[26vh] rotate-[10deg] w-[230px] lg:w-[245px]',
                children: [
                  (0, n.jsx)('img', {
                    src: '/images/icon-star-yellow.svg',
                    className:
                      'block w-full h-full absolute inset-0 shadow-star',
                  }),
                  (0, n.jsx)('div', {
                    className:
                      'relative z-[1] px-[35px] py-4 lg:px-[45px] lg:py-5',
                    children: (0, n.jsxs)('div', {
                      className: 'text-center',
                      children: [
                        (0, n.jsx)('h3', {
                          className:
                            'font-caps text-caps-26 lg:text-caps-40 px-2 lg:mb-1',
                          children: k,
                        }),
                        (0, n.jsx)('div', {
                          className:
                            'rich-text font-800 line-break text-sans-14 lg:text-sans-16',
                          children: (0, n.jsx)(c(), {
                            blocks: z,
                            serializers: o.Z,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)('div', {
                    className:
                      'w-[60px] lg:w-[80px] absolute top-[65%] lg:top-[15%] left-[-10%] pointer-events-none',
                    children: (0, n.jsx)(f.m.div, {
                      animate: { y: [0, 10, 0] },
                      transition: {
                        repeat: 1 / 0,
                        duration: 2,
                        delay: 1.5,
                        ease: v.Z.inOutCubic,
                      },
                      className: 'w-full',
                      children: (0, n.jsx)(d.Z, {
                        className: 'w-full rotate-[220deg]',
                        style: (0, x.Z)(B.dimensions.aspectRatio),
                        src: { url: B.url, w: 300 },
                        lazyBlur: !1,
                      }),
                    }),
                  }),
                ],
              }),
            }),
            K = (0, n.jsx)('div', {
              className: 'absolute inset-0 overflow-hidden',
              children: (0, n.jsxs)('div', {
                className:
                  'absolute z-1 top-[115vw] sm:top-[80vw] lg:top-auto lg:bottom-[35vw] left-[-3vw] lg:left-auto lg:right-[-25px] w-[240px] lg:w-[340px] rotate-[-8deg]',
                children: [
                  (0, n.jsxs)('div', {
                    className:
                      'border-2 lg:border-[3px] border-solid bg-cream rounded-[16px] lg:rounded-[20px] text-center p-[15px] lg:px-2 lg:py-3 shadow-star',
                    children: [
                      (0, n.jsx)('h3', {
                        className:
                          'font-caps text-caps-26 lg:text-caps-40 mb-half',
                        children: O,
                      }),
                      (0, n.jsx)('div', {
                        className:
                          'rich-text line-break-half font-800 text-sans-14 lg:text-sans-16',
                        children: (0, n.jsx)(c(), {
                          blocks: _,
                          serializers: o.Z,
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)('div', {
                    className:
                      'w-[256px] lg:w-[280px] absolute top-[50%] lg:top-[120px] left-[90%] lg:left-[-80px] pointer-events-none',
                    children: (0, n.jsx)(f.m.div, {
                      animate: { rotate: [0, -5, 0] },
                      transition: {
                        repeat: 1 / 0,
                        duration: 3,
                        delay: 2,
                        ease: v.Z.inOutCubic,
                      },
                      className: 'w-full',
                      children: (0, n.jsx)(d.Z, {
                        className: 'w-full',
                        style: (0, x.Z)(C.dimensions.aspectRatio),
                        src: { url: C.url, w: 500 },
                        lazyBlur: !1,
                      }),
                    }),
                  }),
                ],
              }),
            }),
            U = (0, n.jsx)('div', {
              className:
                'absolute z-1 top-[-10vw] right-[-35vw] w-[105vw] rotate-[-11deg] lg:hidden',
              children: (0, n.jsx)(f.m.div, {
                className: 'w-full',
                style: { x: T },
                children: (0, n.jsx)(d.Z, {
                  className: 'w-full',
                  style: (0, x.Z)(R.dimensions.aspectRatio),
                  src: { url: R.url, w: 780 },
                  lazyBlur: !1,
                }),
              }),
            }),
            V = (0, n.jsx)('div', {
              className:
                'absolute z-1 hidden xl:block top-[20vw] xl:top-[46vw] left-[-20vw] w-[52vw] max-w-[800px] rotate-[5deg]',
              children: (0, n.jsx)(f.m.div, {
                className: 'w-full',
                style: { x: X },
                children: (0, n.jsx)(d.Z, {
                  className: 'w-full',
                  style: (0, x.Z)(E.dimensions.aspectRatio),
                  src: { url: E.url, w: 1500 },
                  lazyBlur: !1,
                }),
              }),
            }),
            $ = (0, n.jsx)('div', {
              className: 'fixed bottom-0 right-0 z-2',
              children: (0, n.jsx)(f.m.div, {
                initial: !1,
                animate: { x: A ? 0 : '100%', y: A ? 0 : '100%' },
                transition: { ease: v.Z.outQuint, duration: 0.6 },
                children: (0, n.jsx)('div', {
                  className: 'w-[160px] h-[160px] lg:w-[175px] lg:h-[175px]',
                  children: (0, n.jsx)(
                    u.Z,
                    (0, r.Z)((0, l.Z)({}, M), {
                      className: 'block w-full',
                      children: (0, n.jsx)(d.Z, {
                        src: { url: H.url, w: 360 },
                        lazyBlur: !1,
                        className: 'aspect-w-1 aspect-h-1',
                      }),
                    })
                  ),
                }),
              }),
            })
          return (0, n.jsxs)('div', {
            id: 'pack',
            className: 'relative',
            children: [
              (0, n.jsx)('div', {
                className:
                  'overflow-hidden relative z-[1] mt-[-26vw] lg:mt-[-14vw]',
                children: (0, n.jsx)('div', {
                  className: 'mx-[-20vw] lg:mx-[-3vw]',
                  children: (0, n.jsx)('img', {
                    className: 'block w-full h-[26vw] lg:h-[14vw]',
                    src: '/images/icon-wave-hero.svg',
                  }),
                }),
              }),
              (0, n.jsxs)(
                'div',
                (0, r.Z)((0, l.Z)({}, Y), {
                  className: 'bg-image-pack-gradient overflow-hidden',
                  children: [
                    (0, n.jsx)('div', {
                      className: 'py-4 overflow-hidden relative z-[1]',
                      children: (0, n.jsxs)('div', {
                        className: 'px-4',
                        children: [q, L, Q],
                      }),
                    }),
                    (0, n.jsxs)('div', {
                      className:
                        'h-[170vw] sm:h-[120vw] relative lg:h-[0] lg:static',
                      children: [G, U, V, J, K],
                    }),
                  ],
                })
              ),
              (0, n.jsx)('div', {
                className:
                  'overflow-hidden relative z-[1] mb-[-45vw] lg:mb-[-30vw]',
                children: (0, n.jsx)('div', {
                  className: 'mx-[-3vw] mt-[-1px] pointer-events-none',
                  children: (0, n.jsx)('img', {
                    className: 'block w-full h-[45vw] lg:h-[30vw]',
                    src: '/images/icon-drip.svg',
                  }),
                }),
              }),
              F,
              $,
            ],
          })
        }
    },
    4161: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return p
        },
      })
      var l = s(5893),
        r = (s(7294), s(8863)),
        n = s(6737),
        a = function (e) {
          return '/' === e.mark.href[0]
            ? (0, l.jsx)(n.Z, {
                title: e.mark.title,
                openInNewWindow: e.mark.openInNewWindow,
                url: e.mark.href,
                children: e.children,
              })
            : (0, l.jsx)('a', {
                title: e.mark.title,
                target: e.mark.openInNewWindow ? '_blank' : null,
                href: e.mark.href,
                children: e.children,
              })
        },
        i = s(4184),
        c = s.n(i),
        o = function (e) {
          var t = e.node,
            s = void 0 === t ? {} : t,
            r = s.headers,
            n = void 0 === r ? [] : r,
            a = s.rows,
            i = void 0 === a ? [] : a
          return (0, l.jsx)('div', {
            className: 'overflow-x-auto scroll-touch pt-[1px] pb-[1px]',
            children: (0, l.jsxs)('table', {
              children: [
                (0, l.jsx)('thead', {
                  children: (0, l.jsx)('tr', {
                    children: n.map(function (e, t) {
                      return (0,
                      l.jsx)('th', { colSpan: e.colspan || 1, className: c()('whitespace-nowrap', { 'text-left': 'left' == e.textalign, 'text-center': 'center' == e.textalign, 'text-right': 'right' == e.textalign }), children: e.title }, t)
                    }),
                  }),
                }),
                (0, l.jsx)('tbody', {
                  children: i.map(function (e, t) {
                    return (0, l.jsx)(
                      'tr',
                      {
                        children: e.columns.map(function (e, t) {
                          return (0,
                          l.jsx)('td', { colSpan: e.colspan || 1, className: c()('whitespace-nowrap', { 'text-left': 'left' == e.textalign, 'text-center': 'center' == e.textalign, 'text-right': 'right' == e.textalign }), children: e.text }, t)
                        }),
                      },
                      t
                    )
                  }),
                }),
              ],
            }),
          })
        },
        d = s(9534),
        x = s(4579),
        u = s(5520),
        p = {
          types: {
            block: function (e) {
              var t = e.node.style,
                s = void 0 === t ? 'normal' : t
              return 'h1' === s
                ? (0, l.jsx)('h1', { children: e.children })
                : 'h2' === s
                ? (0, l.jsx)('h2', { children: e.children })
                : 'h3' === s
                ? (0, l.jsx)('h3', { children: e.children })
                : r.defaultSerializers.types.block(e)
            },
            table: o,
            imageAlt: function (e) {
              var t = e.node,
                s = void 0 === t ? { asset: {} } : t,
                r = ((0, d.Z)(e, ['node']), s.asset),
                n = r.url,
                a = r.metadata,
                i = r.alt,
                c = r.caption
              return (0, l.jsxs)('figure', {
                className: 'py-1',
                children: [
                  (0, l.jsx)(x.Z, {
                    style: (0, u.Z)(a.dimensions.aspectRatio),
                    alt: i,
                    sources: [{ url: n, w: 1e3, media: '(min-width: 600px)' }],
                    src: { url: n, w: 800 },
                    lqip: a.lqip,
                  }),
                  c &&
                    (0, l.jsx)('figcaption', {
                      className: 'mt-1 text-sans-12 uppercase',
                      children: c,
                    }),
                ],
              })
            },
          },
          marks: { link: a },
        }
    },
  },
])
