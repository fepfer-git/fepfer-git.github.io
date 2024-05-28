'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [816],
  {
    6816: function (e, l, s) {
      s.r(l)
      var t = s(5893),
        a = (s(7294), s(4579)),
        i = s(8863),
        n = s.n(i),
        r = s(4161),
        c = s(5520)
      l.default = function (e) {
        var l = e.title,
          s = e.borderImage,
          i = e.questions,
          d = void 0 === i ? [] : i,
          x = (0, t.jsx)('div', {
            className: 'px-3 md:px-container-desktop',
            children: (0, t.jsxs)('div', {
              className: 'mx-auto max-w-[400px] lg:max-w-[760px] text-center',
              children: [
                (0, t.jsx)('h2', {
                  className:
                    'font-caps text-90 leading-90 lg:text-150 lg:leading-150 mb-3 lg:mb-6',
                  children: l,
                }),
                (0, t.jsx)('div', {
                  className: 'flex flex-col gap-3 lg:gap-5',
                  children: d.map(function (e) {
                    return (0,
                    t.jsxs)('div', { children: [(0, t.jsx)('h3', { className: 'font-caps text-26 leading-28 lg:text-caps-36 mb-half lg:mb-1 px-2 md:px-4 lg:px-6', children: e.question }), (0, t.jsx)('div', { className: 'rich-text line-break text-16 leading-22 lg:text-sans-22', children: (0, t.jsx)(n(), { blocks: e.answer, serializers: r.Z }) })] }, e._key)
                  }),
                }),
              ],
            }),
          }),
          o = (0, t.jsx)('div', {
            className:
              'shadow-shell-border sticky z-1 bottom-[-15vw] xs:bottom-[-10vw] md:bottom-[-5vw] mb-[-17vw] xs:mb-[-10vw] md:mb-[-5vw] mt-8 lg:mt-20',
            children: (0, t.jsx)('div', {
              className: 'overflow-hidden',
              children: (0, t.jsx)('div', {
                className: 'mx-[-18vw] md:mx-[-4vw]',
                children: (0, t.jsxs)('div', {
                  className: 'grid xs:grid-cols-2 md:grid-cols-3',
                  children: [
                    (0, t.jsx)('div', {
                      className: 'hidden xs:block',
                      children: (0, t.jsx)('div', {
                        className: 'mx-[-5vw] md:mx-[-3vw]',
                        children: (0, t.jsx)(a.Z, {
                          style: (0, c.Z)(s.dimensions.aspectRatio),
                          className: 'block w-full',
                          src: { url: s.url, h: 210 },
                          lazyBlur: !1,
                        }),
                      }),
                    }),
                    (0, t.jsx)('div', {
                      children: (0, t.jsx)('div', {
                        className: 'mx-[-5vw] md:mx-[-3vw]',
                        children: (0, t.jsx)(a.Z, {
                          style: (0, c.Z)(s.dimensions.aspectRatio),
                          className: 'block w-full',
                          src: { url: s.url, h: 210 },
                          lazyBlur: !1,
                        }),
                      }),
                    }),
                    (0, t.jsx)('div', {
                      className: 'hidden md:block',
                      children: (0, t.jsx)('div', {
                        className: 'mx-[-5vw] md:mx-[-3vw]',
                        children: (0, t.jsx)(a.Z, {
                          style: (0, c.Z)(s.dimensions.aspectRatio),
                          className: 'block w-full',
                          src: { url: s.url, h: 210 },
                          lazyBlur: !1,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          })
        return (0, t.jsxs)('div', {
          id: 'faq',
          className: 'relative pt-10 lg:pt-18',
          children: [x, o],
        })
      }
    },
    4161: function (e, l, s) {
      s.d(l, {
        Z: function () {
          return h
        },
      })
      var t = s(5893),
        a = (s(7294), s(8863)),
        i = s(6737),
        n = function (e) {
          return '/' === e.mark.href[0]
            ? (0, t.jsx)(i.Z, {
                title: e.mark.title,
                openInNewWindow: e.mark.openInNewWindow,
                url: e.mark.href,
                children: e.children,
              })
            : (0, t.jsx)('a', {
                title: e.mark.title,
                target: e.mark.openInNewWindow ? '_blank' : null,
                href: e.mark.href,
                children: e.children,
              })
        },
        r = s(4184),
        c = s.n(r),
        d = function (e) {
          var l = e.node,
            s = void 0 === l ? {} : l,
            a = s.headers,
            i = void 0 === a ? [] : a,
            n = s.rows,
            r = void 0 === n ? [] : n
          return (0, t.jsx)('div', {
            className: 'overflow-x-auto scroll-touch pt-[1px] pb-[1px]',
            children: (0, t.jsxs)('table', {
              children: [
                (0, t.jsx)('thead', {
                  children: (0, t.jsx)('tr', {
                    children: i.map(function (e, l) {
                      return (0,
                      t.jsx)('th', { colSpan: e.colspan || 1, className: c()('whitespace-nowrap', { 'text-left': 'left' == e.textalign, 'text-center': 'center' == e.textalign, 'text-right': 'right' == e.textalign }), children: e.title }, l)
                    }),
                  }),
                }),
                (0, t.jsx)('tbody', {
                  children: r.map(function (e, l) {
                    return (0, t.jsx)(
                      'tr',
                      {
                        children: e.columns.map(function (e, l) {
                          return (0,
                          t.jsx)('td', { colSpan: e.colspan || 1, className: c()('whitespace-nowrap', { 'text-left': 'left' == e.textalign, 'text-center': 'center' == e.textalign, 'text-right': 'right' == e.textalign }), children: e.text }, l)
                        }),
                      },
                      l
                    )
                  }),
                }),
              ],
            }),
          })
        },
        x = s(9534),
        o = s(4579),
        m = s(5520),
        h = {
          types: {
            block: function (e) {
              var l = e.node.style,
                s = void 0 === l ? 'normal' : l
              return 'h1' === s
                ? (0, t.jsx)('h1', { children: e.children })
                : 'h2' === s
                ? (0, t.jsx)('h2', { children: e.children })
                : 'h3' === s
                ? (0, t.jsx)('h3', { children: e.children })
                : a.defaultSerializers.types.block(e)
            },
            table: d,
            imageAlt: function (e) {
              var l = e.node,
                s = void 0 === l ? { asset: {} } : l,
                a = ((0, x.Z)(e, ['node']), s.asset),
                i = a.url,
                n = a.metadata,
                r = a.alt,
                c = a.caption
              return (0, t.jsxs)('figure', {
                className: 'py-1',
                children: [
                  (0, t.jsx)(o.Z, {
                    style: (0, m.Z)(n.dimensions.aspectRatio),
                    alt: r,
                    sources: [{ url: i, w: 1e3, media: '(min-width: 600px)' }],
                    src: { url: i, w: 800 },
                    lqip: n.lqip,
                  }),
                  c &&
                    (0, t.jsx)('figcaption', {
                      className: 'mt-1 text-sans-12 uppercase',
                      children: c,
                    }),
                ],
              })
            },
          },
          marks: { link: n },
        }
    },
  },
])
