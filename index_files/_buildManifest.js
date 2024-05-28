;(self.__BUILD_MANIFEST = (function (s, e) {
  return {
    __rewrites: {
      beforeFiles: [],
      afterFiles: [
        { source: '/sitemap.xml', destination: '/api/sitemap' },
        { source: '/robots.txt', destination: '/api/robots' },
      ],
      fallback: [],
    },
    '/': [s, 'static/chunks/pages/index-3e0cb877dc493219.js'],
    '/404': ['static/chunks/pages/404-88de154300cab004.js'],
    '/500': ['static/chunks/pages/500-57939953e0732412.js'],
    '/_error': ['static/chunks/pages/_error-a4ba2246ff8fb532.js'],
    '/collections/[slug]': [
      s,
      'static/chunks/pages/collections/[slug]-77d7f5790435a850.js',
    ],
    '/p/[slug]': [s, 'static/chunks/pages/p/[slug]-33e15b35fc51e6fb.js'],
    '/products/[slug]': [
      e,
      s,
      'static/css/04b8c2c830f532af.css',
      'static/chunks/pages/products/[slug]-b23aa105e63506ab.js',
    ],
    '/recipes/[slug]': [
      e,
      'static/chunks/pages/recipes/[slug]-278395e895722cbd.js',
    ],
    '/s/[slug]': ['static/chunks/pages/s/[slug]-906a036afe75f761.js'],
    '/[prizeSlug]': [
      e,
      'static/chunks/669-94de1d5aea9f8e05.js',
      'static/chunks/pages/[prizeSlug]-d94ba3715fb982f6.js',
    ],
    sortedPages: [
      '/',
      '/404',
      '/500',
      '/_app',
      '/_error',
      '/collections/[slug]',
      '/p/[slug]',
      '/products/[slug]',
      '/recipes/[slug]',
      '/s/[slug]',
      '/[prizeSlug]',
    ],
  }
})(
  'static/chunks/689-09acba5175aa28a4.js',
  'static/chunks/863-18f7969b020b7249.js'
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
