module.exports = {
  base: '/elements/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'EOxElements',
      description: 'Geospatial UI Elements, written in Vue.js'
    }
  },
  serviceWorker: true,
  themeConfig: {
    repo: 'EOX-A/elements',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: true,
    sidebarDepth: 1,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Collection',
            link: '/collection/'
          },
        ],
        sidebar: {
          '/collection/': [
            {
              title: 'Collection',
              collapsable: false,
              children: [
                'map-basic',
                'map-layer-swipe',
                'map-source-select'
              ]
            }
          ]
        }
      }
    }
  },
}
