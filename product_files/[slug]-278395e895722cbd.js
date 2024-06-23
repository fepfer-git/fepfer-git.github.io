(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [408],
  {
    8732: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/recipes/[slug]",
        function () {
          return i(3849);
        },
      ]);
    },
    1077: function (e, t, i) {
      "use strict";
      var n = i(5893),
        a = (i(7294), i(9008)),
        s = i.n(a),
        r = i(1163);
      t.Z = function (e) {
        var t = e.metaTitle,
          i = void 0 === t ? "Clam-O-Naise\xae by Cards Against Humanity" : t,
          a = e.metaDescription,
          l = e.metaKeywords,
          c = e.openGraphTitle,
          o = void 0 === c ? "Clam-O-Naise\xae by Cards Against Humanity" : c,
          d = e.openGraphDescription,
          m = e.openGraphImage,
          p = e.twitterUser,
          u = void 0 === p ? "@CAH" : p,
          x = e.twitterTitle,
          h = void 0 === x ? "Clam-O-Naise\xae by Cards Against Humanity" : x,
          g = e.twitterDescription,
          f = e.twitterImage,
          v = e.siteName,
          w = void 0 === v ? "Clam-O-Naise\xae by Cards Against Humanity" : v,
          j = e.siteUrl,
          N = void 0 === j ? "https://www.clams.lol" : j,
          b = e.disallowRobots,
          y = (0, r.useRouter)().asPath;
        return (0, n.jsxs)(s(), {
          children: [
            i && (0, n.jsx)("title", { children: i }),
            a && (0, n.jsx)("meta", { name: "description", content: a }),
            (0, n.jsx)("meta", { name: "keywords", content: l }),
            (0, n.jsx)("meta", {
              property: "og:url",
              content: "".concat(N).concat(y),
            }),
            (0, n.jsx)("meta", { property: "og:title", content: o }),
            (0, n.jsx)("meta", { property: "og:site_name", content: w }),
            (0, n.jsx)("meta", { property: "og:description", content: d }),
            m && (0, n.jsx)("meta", { property: "og:image", content: m.url }),
            (0, n.jsx)("meta", { name: "twitter:site", content: u }),
            (0, n.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, n.jsx)("meta", { name: "twitter:title", content: h }),
            (0, n.jsx)("meta", { name: "twitter:description", content: g }),
            (0, n.jsx)("meta", {
              name: "twitter:url",
              content: "".concat(N).concat(y),
            }),
            f &&
              (0, n.jsx)("meta", { name: "twitter:image:src", content: f.url }),
            b &&
              (0, n.jsx)("meta", {
                name: "robots",
                content: "noindex, nofollow",
              }),
          ],
        });
      };
    },
    3849: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSG: function () {
            return u;
          },
          default: function () {
            return x;
          },
        });
      var n = i(1799),
        a = i(5893),
        s = (i(7294), i(1077)),
        r = i(5490),
        l = i(4579),
        c = i(8863),
        o = i.n(c),
        d = i(4161),
        m = i(6737),
        p = function (e) {
          var t = e.title,
            i = e.mainImage,
            s = e.description,
            r = void 0 === s ? [] : s,
            c = e.details,
            p = void 0 === c ? [] : c,
            u = e.fullRecipe,
            x = void 0 === u ? [] : u,
            h = e.allRecipesLink,
            g = (0, a.jsxs)("div", {
              className:
                "col-span-2 lg:col-span-1 relative lg:sticky lg:top-header overflow-hidden",
              children: [
                (0, a.jsx)(l.Z, {
                  className:
                    "w-full aspect-w-1 aspect-h-1 lg:pb-0 lg:min-h-minus-header",
                  alt: i.alt,
                  sources: [
                    { url: i.url, w: 1e3, media: "(min-width: 600px)" },
                  ],
                  src: { url: i.url, w: 800 },
                  lqip: i.lqip,
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute left-[-10vw] right-[-10vw] bottom-[-1px] h-[100px] lg:hidden",
                  children: (0, a.jsx)("img", {
                    src: "./product_files/icon-wave-cream.png",
                    className: "w-full h-full shadow-wave-divider-top",
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "hidden lg:block absolute w-[100vh] right-0 bottom-full origin-bottom-right -rotate-90 translate-x-[1vw] h-[5vw]",
                  children: (0, a.jsx)("img", {
                    src: "./product_files/icon-wave-cream.png",
                    className: "w-full h-full shadow-wave-divider-top",
                  }),
                }),
              ],
            }),
            f =
              p &&
              (0, a.jsx)("div", {
                className: "border-2 border-solid bg-yellow my-2",
                children: (0, a.jsx)("div", {
                  className: "py-1 px-2",
                  children: (0, a.jsx)("ul", {
                    className: "flex justify-between text-center",
                    children: p.map(function (e) {
                      return (0,
                      a.jsxs)("li", { children: [(0, a.jsx)("h3", { className: "text-sans-10 lg:text-sans-12 uppercase mb-half", children: e.title }), (0, a.jsx)("p", { className: "font-caps text-caps-22 2xs:text-caps-24 lg:text-caps-26", children: e.description })] }, e._key);
                    }),
                  }),
                }),
              }),
            v = (0, a.jsx)("div", {
              className: "col-span-2 lg:col-span-1 pb-6 lg:pt-12",
              children: (0, a.jsx)("div", {
                className: "px-3 lg:px-6",
                children: (0, a.jsxs)("div", {
                  className: "max-w-[420px] mx-auto lg:ml-0",
                  children: [
                    (0, a.jsx)("h1", {
                      className:
                        "font-caps text-caps-46 text-center lg:text-left mb-2 lg:mb-1",
                      children: t,
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "rich-text font-800 text-sans-16 text-center lg:text-left",
                      children: (0, a.jsx)(o(), {
                        blocks: r,
                        serializers: d.Z,
                      }),
                    }),
                    f,
                    (0, a.jsx)("div", {
                      className: "mt-3 rich-text rich-text-recipe text-sans-16",
                      children: (0, a.jsx)(o(), {
                        blocks: x,
                        serializers: d.Z,
                      }),
                    }),
                    h &&
                      (0, a.jsx)("p", {
                        className: "mt-2 flex justify-center lg:justify-start",
                        children: (0, a.jsx)(
                          m.Z,
                          (0, n.Z)(
                            { className: "block button button-primary" },
                            h
                          )
                        ),
                      }),
                  ],
                }),
              }),
            });
          return (0, a.jsxs)("div", {
            className: "grid grid-cols-2 gap-y-2 items-start",
            children: [g, v],
          });
        },
        u = !0,
        x = function (e) {
          var t = e.config,
            i = void 0 === t ? {} : t,
            l = e.seo,
            c = void 0 === l ? {} : l,
            o = e.title,
            d = e.mainImage,
            m = e.description,
            u = void 0 === m ? [] : m,
            x = e.details,
            h = void 0 === x ? [] : x,
            g = e.fullRecipe,
            f = void 0 === g ? [] : g,
            v = e.allRecipesLink,
            w = i.seo || {},
            j = {
              metaTitle: "".concat(
                o,
                " - Clam-O-Naise\xae by Cards Against Humanity"
              ),
              openGraphTitle: "".concat(
                o,
                " - Clam-O-Naise\xae by Cards Against Humanity"
              ),
              twitterTitle: "".concat(
                o,
                " - Clam-O-Naise\xae by Cards Against Humanity"
              ),
              openGraphImage: d || w.openGraphImage,
              twitterImage: d || w.twitterImage,
            },
            N = (0, r.Z)([w, j, c]);
          return (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)(s.Z, (0, n.Z)({}, N)),
              (0, a.jsx)(p, {
                title: o,
                description: u,
                details: h,
                mainImage: d,
                fullRecipe: f,
                allRecipesLink: v,
              }),
            ],
          });
        };
    },
    4161: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = i(5893),
        a = (i(7294), i(8863)),
        s = i(6737),
        r = function (e) {
          return "/" === e.mark.href[0]
            ? (0, n.jsx)(s.Z, {
                title: e.mark.title,
                openInNewWindow: e.mark.openInNewWindow,
                url: e.mark.href,
                children: e.children,
              })
            : (0, n.jsx)("a", {
                title: e.mark.title,
                target: e.mark.openInNewWindow ? "_blank" : null,
                href: e.mark.href,
                children: e.children,
              });
        },
        l = i(4184),
        c = i.n(l),
        o = function (e) {
          var t = e.node,
            i = void 0 === t ? {} : t,
            a = i.headers,
            s = void 0 === a ? [] : a,
            r = i.rows,
            l = void 0 === r ? [] : r;
          return (0, n.jsx)("div", {
            className: "overflow-x-auto scroll-touch pt-[1px] pb-[1px]",
            children: (0, n.jsxs)("table", {
              children: [
                (0, n.jsx)("thead", {
                  children: (0, n.jsx)("tr", {
                    children: s.map(function (e, t) {
                      return (0,
                      n.jsx)("th", { colSpan: e.colspan || 1, className: c()("whitespace-nowrap", { "text-left": "left" == e.textalign, "text-center": "center" == e.textalign, "text-right": "right" == e.textalign }), children: e.title }, t);
                    }),
                  }),
                }),
                (0, n.jsx)("tbody", {
                  children: l.map(function (e, t) {
                    return (0, n.jsx)(
                      "tr",
                      {
                        children: e.columns.map(function (e, t) {
                          return (0,
                          n.jsx)("td", { colSpan: e.colspan || 1, className: c()("whitespace-nowrap", { "text-left": "left" == e.textalign, "text-center": "center" == e.textalign, "text-right": "right" == e.textalign }), children: e.text }, t);
                        }),
                      },
                      t
                    );
                  }),
                }),
              ],
            }),
          });
        },
        d = i(9534),
        m = i(4579),
        p = i(5520),
        u = {
          types: {
            block: function (e) {
              var t = e.node.style,
                i = void 0 === t ? "normal" : t;
              return "h1" === i
                ? (0, n.jsx)("h1", { children: e.children })
                : "h2" === i
                ? (0, n.jsx)("h2", { children: e.children })
                : "h3" === i
                ? (0, n.jsx)("h3", { children: e.children })
                : a.defaultSerializers.types.block(e);
            },
            table: o,
            imageAlt: function (e) {
              var t = e.node,
                i = void 0 === t ? { asset: {} } : t,
                a = ((0, d.Z)(e, ["node"]), i.asset),
                s = a.url,
                r = a.metadata,
                l = a.alt,
                c = a.caption;
              return (0, n.jsxs)("figure", {
                className: "py-1",
                children: [
                  (0, n.jsx)(m.Z, {
                    style: (0, p.Z)(r.dimensions.aspectRatio),
                    alt: l,
                    sources: [{ url: s, w: 1e3, media: "(min-width: 600px)" }],
                    src: { url: s, w: 800 },
                    lqip: r.lqip,
                  }),
                  c &&
                    (0, n.jsx)("figcaption", {
                      className: "mt-1 text-sans-12 uppercase",
                      children: c,
                    }),
                ],
              });
            },
          },
          marks: { link: r },
        };
    },
    5490: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = i(1799),
        a = i(4061),
        s = i.n(a);
      function r() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return s()(
          e,
          function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = (0, n.Z)({}, e),
              a = Object.keys(t || {});
            return (
              a.forEach(function (e) {
                t[e] && (i[e] = t[e]);
              }),
              i
            );
          },
          {}
        );
      }
    },
    9008: function (e, t, i) {
      e.exports = i(5443);
    },
    1163: function (e, t, i) {
      e.exports = i(387);
    },
  },
  function (e) {
    e.O(0, [863, 774, 888, 179], function () {
      return (t = 8732), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
