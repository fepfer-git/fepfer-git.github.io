;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [230],
  {
    6623: function (e, a, t) {
      'use strict'
      t.d(a, {
        Z: function () {
          return o
        },
      })
      var l = t(1799),
        s = t(6122),
        r = t(9534),
        n = t(5893),
        c = t(7294)
      function i(e) {
        let {
            speed: a = 0.5,
            direction: t = 'left',
            pauseOnHover: l,
            children: s,
          } = e,
          r = (function (e, a) {
            if (null == e) return {}
            var t,
              l,
              s = {},
              r = Object.keys(e)
            for (l = 0; l < r.length; l++)
              a.indexOf((t = r[l])) >= 0 || (s[t] = e[t])
            return s
          })(e, ['speed', 'direction', 'pauseOnHover', 'children'])
        const [n, i] = (0, c.useState)(1),
          [o, u] = d(),
          [m, p] = d()
        return (
          (0, c.useEffect)(() => {
            u && p && i(Math.ceil(u / p))
          }, [u, p]),
          (0, c.createElement)(
            'div',
            Object.assign(
              {
                ref: o,
                'data-marqy': '',
                'data-direction': t,
                'data-pause-on-hover': l ? '' : null,
              },
              r
            ),
            (0, c.createElement)(
              'div',
              { 'data-marqy-inner': '' },
              new Array(2).fill(0).map((e, t) =>
                (0, c.createElement)(
                  'div',
                  {
                    key: t,
                    'data-marqy-content': '',
                    style: {
                      animationDuration:
                        ((null != p ? p : 0) * n) / (100 * a) + 's',
                    },
                  },
                  new Array(n).fill(0).map((e, a) => {
                    const l = 0 === t && 0 === a
                    return (0, c.createElement)(
                      'div',
                      {
                        key: a,
                        ref: l ? m : null,
                        'aria-hidden': !l || null,
                        'data-marqy-item': '',
                      },
                      s
                    )
                  })
                )
              )
            )
          )
        )
      }
      function d() {
        const [e, a] = (0, c.useState)(0),
          [t, l] = (0, c.useState)(null),
          s = (0, c.useRef)(null),
          r = (0, c.useCallback)(() => {
            var e
            return null == (e = s.current) ? void 0 : e.disconnect()
          }, []),
          n = (0, c.useCallback)(() => {
            ;(s.current = new ResizeObserver(([e]) => a(e.contentRect.width))),
              t && s.current.observe(t)
          }, [t])
        return (0, c.useEffect)(() => (n(), () => r()), [r, n]), [l, e]
      }
      t(164)
      var o = function (e) {
        var a = e.children,
          t = e.speed,
          c = void 0 === t ? 0.2 : t,
          d = (0, r.Z)(e, ['children', 'speed'])
        return (0, n.jsx)(
          i,
          (0, s.Z)((0, l.Z)({}, d), { speed: c, children: a })
        )
      }
    },
    3230: function (e, a, t) {
      'use strict'
      t.r(a)
      var l = t(1799),
        s = t(6122),
        r = t(5893),
        n = (t(7294), t(4184)),
        c = t.n(n),
        i = t(4579),
        d = t(6623),
        o = t(6737),
        u = t(5520)
      a.default = function (e) {
        var a = e.titleImage,
          t = e.titleCta,
          n = e.cta,
          m = e.posts,
          p = void 0 === m ? [] : m,
          x = (0, r.jsx)('div', {
            className:
              'px-container-mobile md:px-container-desktop mb-1 lg:mb-4',
            children: (0, r.jsx)('div', {
              className: 'mx-auto max-w-grid',
              children: (0, r.jsx)('div', {
                className: 'mx-auto max-w-[260px] lg:max-w-[550px]',
                children: (0, r.jsx)(
                  o.Z,
                  (0, s.Z)((0, l.Z)({}, t), {
                    className: 'block w-full',
                    children: (0, r.jsx)(i.Z, {
                      style: (0, u.Z)(a.dimensions.aspectRatio),
                      src: { url: a.url, w: 600 },
                      lazyBlur: !1,
                    }),
                  })
                ),
              }),
            }),
          }),
          f = (0, r.jsx)(d.Z, {
            speed: 0.4,
            className: 'py-2',
            children: (0, r.jsx)('div', {
              className: 'flex items-center',
              children: p.map(function (e, a) {
                return (0,
                r.jsx)('div', { className: 'w-[37vw] md:w-[220px] pr-1 lg:pr-2 relative', children: (0, r.jsxs)('div', { className: c()('shadow-social-post bg-cream p-half lg:p-1', a % 2 === 0 ? 'rotate-[2deg]' : 'rotate-[-2deg]'), children: [(0, r.jsxs)('div', { className: 'border-2 border-solid p-[2px] lg:p-half', children: [!e.cta && (0, r.jsx)(i.Z, { className: 'aspect-w-1 aspect-h-1', alt: e.image.alt, src: { url: e.image.url, w: 300 }, lqip: e.image.lqip }), e.cta && (0, r.jsx)(o.Z, (0, s.Z)((0, l.Z)({}, e.cta), { className: 'block w-full h-full link-cover', children: (0, r.jsx)(i.Z, { className: 'aspect-w-1 aspect-h-1', alt: e.image.alt, src: { url: e.image.url, w: 300 }, lqip: e.image.lqip }) }))] }), (0, r.jsx)('div', { className: 'min-h-[30px] flex justify-end pt-half', children: e.caption && (0, r.jsx)('p', { className: 'text-sans-12', children: e.caption }) })] }) }, e._key)
              }),
            }),
          }),
          h = (0, r.jsx)('div', {
            className:
              'absolute bottom-[-10%] left-0 rotate-[-20deg] lg:bottom-auto lg:left-auto lg:top-[-30%] lg:right-[10%] lg:rotate-[-20deg]',
            children: (0, r.jsxs)('div', {
              className: 'flex flex-col justify-center items-center gap-1',
              children: [
                (0, r.jsx)('img', {
                  className:
                    'block lg:order-2 rotate-[220deg] lg:rotate-[50deg]',
                  src: '/images/icon-arrow-social.svg',
                }),
                (0, r.jsx)('p', {
                  className:
                    'uppercase text-sans-12 lg:text-sans-14 font-800 max-w-[70px] text-center',
                  children: n,
                }),
              ],
            }),
          })
        return (0, r.jsx)('div', {
          className: 'bg-red-light',
          children: (0, r.jsxs)('div', {
            className: 'pt-8 lg:pt-14 pb-4 lg:pb-9',
            children: [
              x,
              (0, r.jsxs)('div', { className: 'relative', children: [f, h] }),
            ],
          }),
        })
      }
    },
    164: function () {},
  },
])
