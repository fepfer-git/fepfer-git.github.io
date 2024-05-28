'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [630],
  {
    4676: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return u
          },
        })
      var n = i(1799),
        l = i(6122),
        s = i(5893),
        a = i(7294),
        r = i(4184),
        c = i.n(r),
        d = i(8863),
        o = i.n(d),
        h = i(4161),
        x = i(5039),
        p = i(9534),
        m = function (e) {
          var t = e.children,
            i = e.style,
            n = void 0 === i ? 'top' : i,
            l = e.className
          ;(0, p.Z)(e, ['children', 'style', 'className'])
          return (0, s.jsxs)(a.Fragment, {
            children: [
              (0, s.jsxs)('svg', {
                height: '0',
                width: '0',
                children: [
                  (0, s.jsx)('clipPath', {
                    id: 'clip-wave-top',
                    clipPathUnits: 'objectBoundingBox',
                    children: (0, s.jsx)('path', {
                      d: 'M0.109,0.193 C0.063,0.072,0.021,0.055,0,0.102 L0,0.621 L0,1 L1,1 L1,0.513 C0.867,0.102,0.819,0.537,0.698,0.621 C0.597,0.691,0.539,0.575,0.449,0.404 C0.37,0.253,0.336,0.383,0.263,0.404 C0.198,0.423,0.164,0.341,0.109,0.193',
                    }),
                  }),
                  (0, s.jsx)('clipPath', {
                    id: 'clip-wave-bottom',
                    clipPathUnits: 'objectBoundingBox',
                    children: (0, s.jsx)('path', {
                      d: 'M0.891,0.883 C0.937,1,0.979,1,1,0.974 V0.455 V-0.002 L0,-0.002 V0.563 C0.133,0.974,0.181,0.539,0.302,0.455 C0.403,0.385,0.46,0.501,0.55,0.672 C0.63,0.823,0.664,0.693,0.737,0.672 C0.801,0.653,0.836,0.735,0.891,0.883',
                    }),
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className: c()(l, 'will-change-transform', {
                  'divider-wave-top': 'top' === n,
                  'divider-wave-bottom': 'bottom' === n,
                }),
                children: t,
              }),
            ],
          })
        },
        u = function (e) {
          e.title
          var t = e.description,
            i = void 0 === t ? [] : t,
            a = e.products,
            r = void 0 === a ? [] : a,
            d = (0, s.jsx)('div', {
              className:
                'grid grco2 lg:grid-cols-3 gap-gutter-mobile md:gap-gutter-desktop',
              children: r.map(function (e, t) {
                return (0,
                s.jsx)('div', { className: c()('h-full', { 'col-span-2': e.featured }), children: (0, s.jsx)(x.Z, (0, l.Z)((0, n.Z)({}, e.product), { featured: e.featured, className: 'h-full' })) }, t)
              }),
            })
          return (0, s.jsxs)('div', {
            id: 'store',
            className: 'overflow-hidden mb-[-100px] lg:mb-[-300px]',
            children: [
              (0, s.jsx)('div', {
                className:
                  'bg-cork bg-image-cork pt-10 sm:pt-15 lg:pt-[300px] pb-2',
                children: (0, s.jsx)('div', {
                  className: 'px-container-mobile md:px-container-desktop',
                  children: (0, s.jsxs)('div', {
                    className: 'mx-auto max-w-[1000px]',
                    children: [
                      (0, s.jsxs)('h2', {
                        className:
                          'text-center font-caps text-70 leading-62 lg:text-caps-100 mb-1 lg:mb-2 px-4 lg:px-0',
                        children: [
                          (0, s.jsxs)('span', {
                            className: 'md:hidden',
                            children: [
                              'Clam-O',
                              (0, s.jsx)('br', {}),
                              ' Merch',
                            ],
                          }),
                          (0, s.jsx)('span', {
                            className: 'hidden md:inline',
                            children: 'Clam-O-Merch',
                          }),
                        ],
                      }),
                      (0, s.jsx)('div', {
                        className:
                          'text-center mx-auto max-w-[750px] mb-2 lg:mb-4',
                        children: (0, s.jsx)('div', {
                          className: 'px-3 lg:px-0',
                          children: (0, s.jsx)('div', {
                            className:
                              'rich-text line-break text-16 leading-22 lg:text-sans-22 font-800',
                            children: (0, s.jsx)(o(), {
                              blocks: i,
                              serializers: h.Z,
                            }),
                          }),
                        }),
                      }),
                      d,
                    ],
                  }),
                }),
              }),
              (0, s.jsx)('div', {
                className: 'shadow-wave-divider-bottom-large relative z-1',
                children: (0, s.jsx)(m, {
                  style: 'bottom',
                  children: (0, s.jsx)('div', {
                    className:
                      'h-[100px] lg:h-[300px] mb-2 bg-cork bg-image-cork',
                  }),
                }),
              }),
            ],
          })
        }
    },
    4161: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return p
        },
      })
      var n = i(5893),
        l = (i(7294), i(8863)),
        s = i(6737),
        a = function (e) {
          return '/' === e.mark.href[0]
            ? (0, n.jsx)(s.Z, {
                title: e.mark.title,
                openInNewWindow: e.mark.openInNewWindow,
                url: e.mark.href,
                children: e.children,
              })
            : (0, n.jsx)('a', {
                title: e.mark.title,
                target: e.mark.openInNewWindow ? '_blank' : null,
                href: e.mark.href,
                children: e.children,
              })
        },
        r = i(4184),
        c = i.n(r),
        d = function (e) {
          var t = e.node,
            i = void 0 === t ? {} : t,
            l = i.headers,
            s = void 0 === l ? [] : l,
            a = i.rows,
            r = void 0 === a ? [] : a
          return (0, n.jsx)('div', {
            className: 'overflow-x-auto scroll-touch pt-[1px] pb-[1px]',
            children: (0, n.jsxs)('table', {
              children: [
                (0, n.jsx)('thead', {
                  children: (0, n.jsx)('tr', {
                    children: s.map(function (e, t) {
                      return (0,
                      n.jsx)('th', { colSpan: e.colspan || 1, className: c()('whitespace-nowrap', { 'text-left': 'left' == e.textalign, 'text-center': 'center' == e.textalign, 'text-right': 'right' == e.textalign }), children: e.title }, t)
                    }),
                  }),
                }),
                (0, n.jsx)('tbody', {
                  children: r.map(function (e, t) {
                    return (0, n.jsx)(
                      'tr',
                      {
                        children: e.columns.map(function (e, t) {
                          return (0,
                          n.jsx)('td', { colSpan: e.colspan || 1, className: c()('whitespace-nowrap', { 'text-left': 'left' == e.textalign, 'text-center': 'center' == e.textalign, 'text-right': 'right' == e.textalign }), children: e.text }, t)
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
        o = i(9534),
        h = i(4579),
        x = i(5520),
        p = {
          types: {
            block: function (e) {
              var t = e.node.style,
                i = void 0 === t ? 'normal' : t
              return 'h1' === i
                ? (0, n.jsx)('h1', { children: e.children })
                : 'h2' === i
                ? (0, n.jsx)('h2', { children: e.children })
                : 'h3' === i
                ? (0, n.jsx)('h3', { children: e.children })
                : l.defaultSerializers.types.block(e)
            },
            table: d,
            imageAlt: function (e) {
              var t = e.node,
                i = void 0 === t ? { asset: {} } : t,
                l = ((0, o.Z)(e, ['node']), i.asset),
                s = l.url,
                a = l.metadata,
                r = l.alt,
                c = l.caption
              return (0, n.jsxs)('figure', {
                className: 'py-1',
                children: [
                  (0, n.jsx)(h.Z, {
                    style: (0, x.Z)(a.dimensions.aspectRatio),
                    alt: r,
                    sources: [{ url: s, w: 1e3, media: '(min-width: 600px)' }],
                    src: { url: s, w: 800 },
                    lqip: a.lqip,
                  }),
                  c &&
                    (0, n.jsx)('figcaption', {
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
