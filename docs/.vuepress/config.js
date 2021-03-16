const fs = require('fs');
const path = require('path')

module.exports = {
  chainWebpack(config, isServer) {
    for (const lang of["sass", "scss"]) {
      for (const name of["modules", "normal"]) {
        const rule = config.module.rule(lang).oneOf(name);
        rule.uses.delete("sass-loader");

        rule.use("sass-loader").loader("sass-loader").options({
          implementation: require("sass"),
          sassOptions: {
            fiber: require("fibers"),
            indentedSyntax: lang === "sass"
          }
        });
      }
    }
  },
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
    docsBranch: 'main',
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
            text: 'Examples',
            link: '/examples/'
          }, {
            text: 'Api',
            link: '/api/'
          },
        ],
        sidebar: {
          '/examples/': [
            {
              title: 'Examples',
              collapsable: false,
              children: [
                'map-basic',
                'map-layer-swipe',
                'map-source-select',
                'map-tooltip',
                'charts'
              ]
            },
          ],
          '/api/': [
            {
              title: 'Api',
              collapsable: false,
              children: fs.readdirSync(path.join(__dirname, '..', 'api')).filter(file => file.match(/.md$/) && file !== 'README.md').map(file => file.substring(0, file.length - 3))
            }
          ]
        }
      }
    }
  }
}
