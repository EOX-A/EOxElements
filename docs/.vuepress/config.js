module.exports = {
  base: '/elements/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'EOxElements',
      description: 'EOxElements'
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
            text: 'Elements',
            link: '/elements/'
          },
        ],
        sidebar: {
          '/elements/': [
            {
              title: 'Elements',
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
