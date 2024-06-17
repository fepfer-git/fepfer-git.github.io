'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [988],
  {
    7988: function (e, l, s) {
      s.r(l),
        s.d(l, {
          default: function () {
            return u
          },
        })
      var t = s(1799),
        a = s(5893),
        i = s(7294),
        r = s(4184),
        n = s.n(r),
        c = s(6737),
        d = s(4579),
        x = s(8863),
        o = s.n(x),
        p = s(4161),
        m = function (e) {
          if (!e) return null
          switch (e.style._type) {
            case 'color':
              return { background: e.style.hex }
            case 'ombre':
              return { background: e.style.style }
            default:
              return null
          }
        },
        h = function (e) {
          var l = e.title,
            s = e.descriptionTile,
            t = void 0 === s ? [] : s,
            i = e.mainImage,
            r = e.slug,
            n = e.color
          return (0, a.jsx)('div', {
            className: 'bg-cream shadow-recipe-tile relative',
            children: (0, a.jsx)('div', {
              className: 'p-1',
              children: (0, a.jsxs)('div', {
                className: 'border-2 border-solid',
                children: [
                  (0, a.jsx)('div', {
                    className: 'border-b-2 border-solid',
                    children: (0, a.jsxs)('div', {
                      className: 'px-1 py-half flex justify-between gap-1',
                      children: [
                        (0, a.jsx)('p', {
                          className:
                            'font-caps text-caps-24 lg:text-caps-30 pt-half',
                          children: l,
                        }),
                        (0, a.jsx)('img', {
                          className:
                            'block w-[21px] h-[20px] lg:w-[30px] lg:h-[28px] mt-half',
                          src: '/images/icon-clam.svg',
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)('div', {
                    className: 'p-half lg:p-1 pointer-events-none',
                    children: (0, a.jsx)(d.Z, {
                      className:
                        'w-full aspect-w-[320] aspect-h-[175] xl:aspect-w-1 xl:aspect-h-1',
                      alt: i.alt,
                      src: { url: i.url, w: 500 },
                    }),
                  }),
                  (0, a.jsx)('div', {
                    className: 'border-t-2 border-solid',
                    children: (0, a.jsxs)('div', {
                      className: 'flex justify-between gap-1',
                      children: [
                        (0, a.jsx)('div', {
                          className: 'px-1 py-half',
                          children: (0, a.jsx)('div', {
                            className:
                              'rich-text font-800 text-10 leading-14 lg:text-sans-14 xl:text-13 xl:leading-16',
                            children: (0, a.jsx)(o(), {
                              blocks: t,
                              serializers: p.Z,
                            }),
                          }),
                        }),
                        (0, a.jsx)('div', {
                          className: 'border-l-2 border-solid',
                          children: (0, a.jsx)(c.Z, {
                            'aria-label': l,
                            url: '/recipes/'.concat(r),
                            className:
                              'block button button-color-bg h-full w-full link-cover',
                            style: m(n),
                            children: (0, a.jsx)('div', {
                              className:
                                'h-full flex flex-col justify-center items-center',
                              children: (0, a.jsx)('div', {
                                className:
                                  'text-14 lg:text-16 leading-[1.1em] uppercase font-800 p-1 pt-[12px] lg:pt-1 text-center whitespace-nowrap xl:whitespace-normal',
                                children: 'Get Recipe',
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        },
        u = function (e) {
          e.title
          var l = e.description,
            s = void 0 === l ? [] : l,
            r = e.frameTitle,
            c = e.frameDescription,
            x = void 0 === c ? [] : c,
            m = e.recipes,
            u = void 0 === m ? [] : m,
            g = e.backgroundImageMobile,
            f = e.backgroundImageDesktop,
            j = e.footerImage,
            v = e.frameImage,
            b = u.map(function (e, l) {
              return (0, a.jsx)(h, (0, t.Z)({}, e))
            }),
            w = (0, a.jsx)('div', {
              className: 'px-3 lg:px-4',
              children: (0, a.jsx)('div', {
                className: 'mx-auto max-w-[460px] sm:max-w-[1400px]',
                children: (0, a.jsx)('div', {
                  className: 'grid gap-4 sm:grid-cols-2 xl:grid-cols-4',
                  children: b.map(function (e, l) {
                    return (0,
                    a.jsx)('div', { className: n()(l % 2 === 0 ? 'rotate-[1deg]' : 'rotate-[-1deg]'), children: e }, l)
                  }),
                }),
              }),
            }),
            N = (0, a.jsxs)(i.Fragment, {
              children: [
                (0, a.jsx)(d.Z, {
                  className: 'absolute inset-0 image-bottom',
                  sources: [
                    { url: f.url, w: 2800, media: '(min-width: 1400px)' },
                    { url: f.url, w: 2e3, media: '(min-width: 1000px)' },
                    { url: f.url, w: 1200, media: '(min-width: 600px)' },
                  ],
                  src: { url: g.url, h: 1800, q: 90 },
                  lqip: f.lqip,
                }),
                (0, a.jsx)('div', {
                  className:
                    'absolute left-0 right-0 bottom-0 h-[200px] bg-image-recipe-gradient pointer-events-none',
                }),
                (0, a.jsx)('div', {
                  className: 'absolute left-0 right-0 bottom-0',
                  children: (0, a.jsx)(d.Z, {
                    className: 'h-[28vw]',
                    sources: [
                      { url: j.url, w: 2400, media: '(min-width: 1300px)' },
                      { url: j.url, w: 2e3, media: '(min-width: 1000px)' },
                      { url: j.url, w: 1200, media: '(min-width: 600px)' },
                    ],
                    src: { url: j.url, w: 600 },
                    lqip: j.lqip,
                  }),
                }),
              ],
            }),
            k = (0, a.jsxs)('div', {
              id: 'clams-casino',
              className:
                'absolute bottom-0 left-[50%] -rotate-6 translate-x-[-50%] lg:left-[8vw] lg:translate-x-0 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]',
              children: [
                (0, a.jsx)('div', {
                  className: 'py-6 px-5 lg:py-7 absolute inset-0',
                  children: (0, a.jsx)('div', {
                    className: 'h-full w-full bg-yellow rounded-[100%]',
                  }),
                }),
                (0, a.jsx)('div', {
                  className:
                    'h-full w-full flex flex-col justify-center items-center py-10 lg:py-15 text-center relative z-1',
                  children: (0, a.jsxs)('div', {
                    className:
                      'mx-auto max-w-[250px] lg:max-w-[340px] lg:pt-2 -translate-y-1 lg:translate-y-0 lg:mt-1 lg:translate-x-[3px]',
                    children: [
                      (0, a.jsx)('h2', {
                        className: 'px-4 font-caps text-46 leading-40 mb-half',
                        children: r,
                      }),
                      (0, a.jsx)('div', {
                        className:
                          'rich-text font-800 line-break text-sans-14 lg:text-20 lg:leading-24',
                        children: (0, a.jsx)(o(), {
                          blocks: x,
                          serializers: p.Z,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(d.Z, {
                  className: 'absolute inset-0 image-full pointer-events-none',
                  sources: [
                    { url: v.url, w: 1e3, media: '(min-width: 800px)' },
                  ],
                  src: { url: v.url, w: 800 },
                  lqip: v.lqip,
                  lazyBlur: !1,
                }),
              ],
            }),
            y = (0, a.jsx)('div', {
              className:
                'relative z-1 px-container-mobile lg:px-container-desktop mb-2 lg:mb-5',
              children: (0, a.jsxs)('div', {
                className: 'mx-auto max-w-[1000px]',
                children: [
                  (0, a.jsxs)('h2', {
                    className:
                      'text-center font-caps text-70 leading-62 lg:text-caps-100 mb-1 lg:mb-2',
                    children: [
                      'Official ',
                      (0, a.jsx)('br', { className: 'lg:hidden' }),
                      'Recipes',
                    ],
                  }),
                  (0, a.jsx)('div', {
                    className: 'text-center mx-auto max-w-[750px]',
                    children: (0, a.jsx)('div', {
                      className: 'px-3 lg:px-0',
                      children: (0, a.jsx)('div', {
                        className:
                          'rich-text font-800 line-break text-16 leading-22 lg:text-sans-22',
                        children: (0, a.jsx)(o(), {
                          blocks: s,
                          serializers: p.Z,
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            })
          return (0, a.jsxs)('div', {
            id: 'recipes',
            className:
              'overflow-hidden relative pb-[100px] mb-[-70px] lg:mb-[-150px]',
            children: [
              (0, a.jsxs)('div', {
                className:
                  'pt-13 lg:pt-[340px] pb-[400px] lg:pb-[550px] relative',
                children: [N, y, w],
              }),
              k,
            ],
          })
        }
    },
    4161: function (e, l, s) {
      s.d(l, {
        Z: function () {
          return m
        },
      })
      var t = s(5893),
        a = (s(7294), s(8863)),
        i = s(6737),
        r = function (e) {
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
        n = s(4184),
        c = s.n(n),
        d = function (e) {
          var l = e.node,
            s = void 0 === l ? {} : l,
            a = s.headers,
            i = void 0 === a ? [] : a,
            r = s.rows,
            n = void 0 === r ? [] : r
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
                  children: n.map(function (e, l) {
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
        p = s(5520),
        m = {
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
                r = a.metadata,
                n = a.alt,
                c = a.caption
              return (0, t.jsxs)('figure', {
                className: 'py-1',
                children: [
                  (0, t.jsx)(o.Z, {
                    style: (0, p.Z)(r.dimensions.aspectRatio),
                    alt: n,
                    sources: [{ url: i, w: 1e3, media: '(min-width: 600px)' }],
                    src: { url: i, w: 800 },
                    lqip: r.lqip,
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
          marks: { link: r },
        }
    },
  },
])
