;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [39],
  {
    8994: function (e, t, n) {
      var r = n(3448)
      e.exports = function (e, t, n) {
        for (var a = -1, s = e.length; ++a < s; ) {
          var i = e[a],
            l = t(i)
          if (null != l && (void 0 === c ? l === l && !r(l) : n(l, c)))
            var c = l,
              o = i
        }
        return o
      }
    },
    3325: function (e) {
      e.exports = function (e, t) {
        return e > t
      }
    },
    433: function (e) {
      e.exports = function (e, t) {
        return e < t
      }
    },
    6162: function (e, t, n) {
      var r = n(8994),
        a = n(3325),
        s = n(6557)
      e.exports = function (e) {
        return e && e.length ? r(e, s, a) : void 0
      }
    },
    3632: function (e, t, n) {
      var r = n(8994),
        a = n(433),
        s = n(6557)
      e.exports = function (e) {
        return e && e.length ? r(e, s, a) : void 0
      }
    },
    8607: function (e, t, n) {
      'use strict'
      var r = n(1799),
        a = n(6122),
        s = n(5893)
      n(7294)
      t.Z = function (e) {
        return (0, s.jsx)(
          'svg',
          (0, a.Z)((0, r.Z)({}, e), {
            style: { width: '100%', height: '100%' },
            preserveAspectRatio: 'none',
            children: (0, s.jsx)('line', {
              x1: '10%',
              y1: '90%',
              x2: '90%',
              y2: '10%',
              strokeWidth: '2',
              stroke: 'currentColor',
              className: 'lg:stroke-[3]',
            }),
          })
        )
      }
    },
    6623: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return u
        },
      })
      var r = n(1799),
        a = n(6122),
        s = n(9534),
        i = n(5893),
        l = n(7294)
      function c(e) {
        let {
            speed: t = 0.5,
            direction: n = 'left',
            pauseOnHover: r,
            children: a,
          } = e,
          s = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              a = {},
              s = Object.keys(e)
            for (r = 0; r < s.length; r++)
              t.indexOf((n = s[r])) >= 0 || (a[n] = e[n])
            return a
          })(e, ['speed', 'direction', 'pauseOnHover', 'children'])
        const [i, c] = (0, l.useState)(1),
          [u, d] = o(),
          [p, f] = o()
        return (
          (0, l.useEffect)(() => {
            d && f && c(Math.ceil(d / f))
          }, [d, f]),
          (0, l.createElement)(
            'div',
            Object.assign(
              {
                ref: u,
                'data-marqy': '',
                'data-direction': n,
                'data-pause-on-hover': r ? '' : null,
              },
              s
            ),
            (0, l.createElement)(
              'div',
              { 'data-marqy-inner': '' },
              new Array(2).fill(0).map((e, n) =>
                (0, l.createElement)(
                  'div',
                  {
                    key: n,
                    'data-marqy-content': '',
                    style: {
                      animationDuration:
                        ((null != f ? f : 0) * i) / (100 * t) + 's',
                    },
                  },
                  new Array(i).fill(0).map((e, t) => {
                    const r = 0 === n && 0 === t
                    return (0, l.createElement)(
                      'div',
                      {
                        key: t,
                        ref: r ? p : null,
                        'aria-hidden': !r || null,
                        'data-marqy-item': '',
                      },
                      a
                    )
                  })
                )
              )
            )
          )
        )
      }
      function o() {
        const [e, t] = (0, l.useState)(0),
          [n, r] = (0, l.useState)(null),
          a = (0, l.useRef)(null),
          s = (0, l.useCallback)(() => {
            var e
            return null == (e = a.current) ? void 0 : e.disconnect()
          }, []),
          i = (0, l.useCallback)(() => {
            ;(a.current = new ResizeObserver(([e]) => t(e.contentRect.width))),
              n && a.current.observe(n)
          }, [n])
        return (0, l.useEffect)(() => (i(), () => s()), [s, i]), [r, e]
      }
      n(164)
      var u = function (e) {
        var t = e.children,
          n = e.speed,
          l = void 0 === n ? 0.2 : n,
          o = (0, s.Z)(e, ['children', 'speed'])
        return (0, i.jsx)(
          c,
          (0, a.Z)((0, r.Z)({}, o), { speed: l, children: t })
        )
      }
    },
    5039: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return _
        },
      })
      var r = n(1799),
        a = n(6122),
        s = n(9534),
        i = n(828),
        l = n(5893),
        c = n(7294),
        o = n(4184),
        u = n.n(o),
        d = n(6737),
        p = n(4579),
        f = n(4657),
        h = n(5520)
      var x = function () {
          var e =
              'ontouchstart' in n.g ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0,
            t = (0, c.useState)(!1),
            r = t[0],
            a = t[1]
          return [
            r,
            e
              ? {}
              : {
                  onMouseEnter: function () {
                    a(!0)
                  },
                  onMouseLeave: function () {
                    a(!1)
                  },
                },
          ]
        },
        m = n(6473),
        v = n(8786),
        g = n(8145),
        j = n(7568),
        y = n(655)
      var w = n(1304),
        b = n(9669),
        Z = n.n(b)
      var N = n(6623),
        k = n(3632),
        S = n.n(k),
        E = n(6162),
        q = n.n(E),
        I = function (e) {
          var t = e.current,
            n = void 0 === t ? 10 : t,
            r = e.total,
            a = void 0 === r ? 10 : r,
            s = n <= 0,
            i = (((a - n) / a) * 100).toFixed(),
            c = q()([S()([i, 100]), 0]) > 70
          return s
            ? (0, l.jsx)('div', {
                className:
                  'h-[18px] rounded-[18px] bg-red flex flex-col justify-center relative overflow-hidden translate-x-0',
                children: (0, l.jsx)(N.Z, {
                  speed: 0.2,
                  children: (0, l.jsx)('div', {
                    className:
                      'text-sans-10 lg:text-sans-12 uppercase font-800 text-right whitespace-nowrap pr-half',
                    children: 'Sold Out!',
                  }),
                }),
              })
            : c
            ? (0, l.jsxs)('div', {
                className: 'flex justify-center items-center gap-half',
                children: [
                  (0, l.jsx)(v.m.div, {
                    animate: { rotate: [0, -360] },
                    transition: { repeat: 1 / 0, duration: 4, ease: 'linear' },
                    children: (0, l.jsx)(p.Z, {
                      alt: 'Star',
                      src: '/images/icon-gone-star.svg',
                      className: 'w-[8px] h-[8px] lg:w-[12px] lg:h-[12px]',
                      lazyBlur: !1,
                    }),
                  }),
                  (0, l.jsx)('p', {
                    className:
                      'text-red text-10 lg:text-15 leading-10 lg:leading-15 uppercase font-800',
                    children: 'Almost Gone',
                  }),
                  (0, l.jsx)(v.m.div, {
                    animate: { rotate: [0, 360] },
                    transition: { repeat: 1 / 0, duration: 4, ease: 'linear' },
                    children: (0, l.jsx)(p.Z, {
                      alt: 'Star',
                      src: '/images/icon-gone-star.svg',
                      className: 'w-[8px] h-[8px] lg:w-[12px] lg:h-[12px]',
                      lazyBlur: !1,
                    }),
                  }),
                ],
              })
            : null
        },
        A = n(8607),
        C = { ease: g.Z.inOutCubic, duration: 0.4 },
        O = { ease: g.Z.inOutQuint, duration: 0.4 },
        B = { ease: g.Z.outQuint, duration: 0.6 },
        T = { x: O, y: O, scale: O, opacity: C },
        _ = function (e) {
          var t = e.title,
            n = e.mainImage,
            o = e.tileBackgroundImage,
            g = e.featuredTileImage,
            b = e.cents,
            N = e.slug,
            k = e.product,
            S = e.startingQuantity,
            E = e.featured,
            q = e.className,
            C = (0, s.Z)(e, [
              'title',
              'mainImage',
              'tileBackgroundImage',
              'featuredTileImage',
              'cents',
              'slug',
              'product',
              'startingQuantity',
              'featured',
              'className',
            ]),
            O = (0, i.Z)(x(), 2),
            _ = O[0],
            z = O[1],
            M = (function (e) {
              var t = (0, c.useState)(!1),
                n = t[0],
                r = t[1],
                a = (0, c.useState)(null),
                s = a[0],
                i = a[1],
                l = (0, c.useState)(null),
                o = l[0],
                u = l[1]
              return (
                (0, c.useEffect)(
                  (0, j.Z)(function () {
                    var t, n, a, s, l
                    return (0, y.__generator)(this, function (c) {
                      switch (c.label) {
                        case 0:
                          r(!0), (c.label = 1)
                        case 1:
                          return (
                            c.trys.push([1, 3, , 4]),
                            (t = (function (e) {
                              return {
                                query: e,
                                variables:
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                              }
                            })(
                              'query($id: ID!) {\n\tnode(id: $id) {\n\t\t...on Product {\n\t\t\ttotalInventory,\n\t\t}\n\t}\n}',
                              (((n = {}).id = (0, w.c)('Product', e)), n)
                            )),
                            (s = {}),
                            [
                              4,
                              Z().post(
                                'https://store.clams.lol/api/2022-07/graphql.json',
                                t,
                                ((s.headers = {
                                  'Content-Type': 'application/json',
                                  'X-Shopify-Storefront-Access-Token':
                                    'e96be7173775e28407c8cba33f072043',
                                }),
                                s)
                              ),
                            ]
                          )
                        case 2:
                          return (a = c.sent().data), i(a.data.node), [3, 4]
                        case 3:
                          return (
                            (l = c.sent()),
                            console.log('Error fetching product: '.concat(e)),
                            u(l),
                            [3, 4]
                          )
                        case 4:
                          return r(!1), [2]
                      }
                    })
                  }),
                  [e]
                ),
                { product: s, error: o, loadingProduct: n }
              )
            })(k._id),
            P = M.product,
            R = k.variants[0],
            Q = Boolean(R.compareAtCents && R.compareAtCents > R.cents),
            D =
              !E &&
              (0, l.jsx)(m.M, {
                children:
                  _ &&
                  (0, l.jsx)('div', {
                    className: 'absolute inset-0 overflow-hidden',
                    children: (0, l.jsx)(v.m.div, {
                      initial: { opacity: 0, scale: 1.1 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0 },
                      transition: T,
                      className: 'absolute inset-0',
                      children: (0, l.jsx)(p.Z, {
                        className: 'h-full',
                        sources: [
                          { url: o.url, w: 600, media: '(min-width: 1000px)' },
                        ],
                        alt: o.alt,
                        src: { url: o.url, w: 300 },
                        lqip: o.lqip,
                      }),
                    }),
                  }),
              }),
            H =
              !E &&
              (0, l.jsx)('div', {
                className: 'w-full',
                children: (0, l.jsx)(p.Z, {
                  style: (0, h.Z)(n.dimensions.aspectRatio),
                  alt: n.alt,
                  sources: [
                    { url: n.url, w: 1e3, media: '(min-width: 600px)' },
                  ],
                  src: { url: n.url, w: 800 },
                  lazyBlur: !1,
                }),
              }),
            $ =
              E &&
              (0, l.jsx)('div', {
                className: 'absolute inset-0 overflow-hidden',
                children: (0, l.jsx)(v.m.div, {
                  animate: { scale: _ ? 1.05 : 1 },
                  transition: B,
                  className: 'absolute inset-0',
                  children: (0, l.jsx)(p.Z, {
                    className: 'h-full',
                    sources: [
                      { url: g.url, w: 1200, media: '(min-width: 1000px)' },
                    ],
                    alt: g.alt,
                    src: { url: g.url, w: 600 },
                    lqip: g.lqip,
                    lazyBlur: !1,
                  }),
                }),
              }),
            F = (0, l.jsx)(m.M, {
              children:
                P &&
                (0, l.jsx)(v.m.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  children: (0, l.jsx)(I, {
                    current: P.totalInventory,
                    total: S,
                  }),
                }),
            })
          return (0, l.jsxs)(
            'div',
            (0, a.Z)((0, r.Z)({}, C, z), {
              className: u()(
                'relative overflow-hidden translate-x-0 rounded-[9px] lg:rounded-[16px] bg-cream shadow-product-tile',
                q,
                {
                  'aspect-w-[320] aspect-h-[520] lg:aspect-h-[480]': !E,
                  'aspect-w-[670] aspect-h-[520] lg:aspect-h-[480]': E,
                  hover: _,
                }
              ),
              children: [
                D,
                $,
                (0, l.jsxs)('div', {
                  className:
                    'absolute inset-0 p-[12px] lg:p-2 h-full flex flex-col justify-between gap-1',
                  children: [
                    (0, l.jsxs)('div', {
                      className: 'text-center z-1',
                      children: [
                        (0, l.jsx)('p', {
                          className:
                            'font-caps text-20 leading-20 lg:text-caps-30 mb-[4px] lg:mb-0',
                          children: (0, l.jsx)(d.Z, {
                            url: '/products/'.concat(N),
                            className: 'link-cover',
                            children: t,
                          }),
                        }),
                        (0, l.jsxs)('div', {
                          className:
                            'flex justify-center items-center gap-[8px]',
                          children: [
                            Q &&
                              (0, l.jsxs)('div', {
                                className: 'relative',
                                children: [
                                  (0, l.jsx)('p', {
                                    className:
                                      'text-14 leading-14 lg:text-sans-22',
                                    children: (0, f.Z)(R.compareAtCents),
                                  }),
                                  (0, l.jsx)('div', {
                                    className:
                                      'absolute top-[5%] bottom-[5%] left-[-15%] right-[-20%]',
                                    children: (0, l.jsx)(A.Z, {
                                      className: 'w-full h-full text-red',
                                    }),
                                  }),
                                ],
                              }),
                            (0, l.jsx)('p', {
                              className:
                                'text-14 leading-14 lg:text-sans-22 font-800',
                              children: (0, f.Z)(b),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)('div', {
                      className: 'flex-grow flex justify-center items-center',
                      children: H,
                    }),
                    (0, l.jsx)('div', {
                      className: 'flex flex-col justify-end min-h-[20px]',
                      children: F,
                    }),
                  ],
                }),
              ],
            })
          )
        }
    },
    1304: function (e, t, n) {
      'use strict'
      n.d(t, {
        J: function () {
          return a
        },
        c: function () {
          return s
        },
      })
      var r = n(828)
      function a(e) {
        var t = e.split('shopify/')[1],
          n = (0, r.Z)(t.split('/'), 2),
          a = n[0],
          s = n[1],
          i = (s.split('?').slice(1)[0] || '')
            .split('&')
            .reduce(function (e, t) {
              var n = (0, r.Z)(t.split('='), 2),
                a = n[0],
                s = n[1]
              return (e[a] = s), e
            }, {})
        return { type: a, id: s.split('?')[0], params: i, raw: e }
      }
      function s(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = 'gid://shopify/'.concat(e, '/').concat(t),
          a = [],
          s = Object.keys(n)
        if (s.length > 0) {
          for (var i = 0; i < s.length; i++) a.push(s[i] + '=' + n[s[i]])
          r += a = '?' + a.join('&')
        }
        return r
      }
    },
    164: function () {},
    828: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return s
        },
      })
      var r = n(3375)
      var a = n(1566)
      function s(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (0, r.Z)(e, t) ||
          (0, a.Z)(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
    },
  },
])
