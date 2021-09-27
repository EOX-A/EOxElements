
![CI](https://github.com/EOX-A/elements/actions/workflows/main.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/EOX-A/elements/blob/main/LICENSE)

# EOxElements
Geospatial UI Elements

## Live Demo
See the elements in action [here](https://eox-a.github.io/elements/examples/).

## Based on
- [Vuetify](https://github.com/vuetifyjs/vuetify) (UI)
- [OpenLayers](https://github.com/openlayers/openlayers), [VueLayers](https://github.com/ghettovoice/vuelayers) (maps)
- [Chart.js](https://github.com/chartjs/Chart.js), [vue-chartjs](https://github.com/apertureless/vue-chartjs) (charts)

## Packages
<table>
  <thead>
    <tr>
      <th>Package</th>
      <th>Version</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/EOX-A/elements/tree/main/packages/map-basic">@eox/map-basic</a>
      </td>
      <td>
        <a href="https://www.npmjs.com/package/@eox/map-basic">
          <img src="https://img.shields.io/npm/v/@eox/map-basic" alt="Version">
        </a>
      </td>
      <td>
        Basic map component to visualize raster and vector data
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/EOX-A/elements/tree/main/packages/map-layer-swipe">@eox/map-layer-swipe</a>
      </td>
      <td>
        <a href="https://www.npmjs.com/package/@eox/map-layer-swipe">
          <img src="https://img.shields.io/npm/v/@eox/map-layer-swipe" alt="Version">
        </a>
      </td>
      <td>
        Extension to A/B compare two map layers
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/EOX-A/elements/tree/main/packages/map-source-select">@eox/map-source-select</a>
      </td>
      <td>
        <a href="https://www.npmjs.com/package/@eox/map-source-select">
          <img src="https://img.shields.io/npm/v/@eox/map-source-select" alt="Version">
        </a>
      </td>
      <td>
        Ḿap extension to dynamically change layers
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/EOX-A/elements/tree/main/packages/charts">@eox/charts</a>
      </td>
      <td>
        <a href="https://www.npmjs.com/package/@eox/charts">
          <img src="https://img.shields.io/npm/v/@eox/charts" alt="Version">
        </a>
      </td>
      <td>
        Dynamic and interactive charts
      </td>
    </tr>
  </tbody>
</table>

## Development Setup
This monorepo uses Yarn [workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://github.com/lerna/lerna).

All the following commands should be executed from the project root.
Or, if you want to work inside a container, run:
```
docker run -it --rm -v ${PWD}:/build -w /build -p 127.0.0.1:8080:8080 node:15-buster bash
```
To get started, bootstrap the whole project (installs dependencies of all packages and symlinks them):
```
yarn
```

Then, build all packages (or a specific one, targeted with `--scope`):
```
yarn build (--scope @eox/map-basic)
```
Finally, launch the development server of the [docs](./docs), where you can create components and test packages:
```
yarn dev
```
When actively working on packages, it is handy to watch them instead of building them (maximum 4 parallel, target a specific one with `--scope`):
```
yarn watch (--scope @eox/map-basic)
```
[WIP] Linting:
```
yarn lint
```

## Publishing packages to npm
To publish one or multiple packages, first commit the changes, then log into npm:
```
npm login
```
*Note*: Pushing to the @eox scope requires 2FA enabled.

Finally, run
```
(npx) lerna publish
```
You can select which packages should update in which way (patch, minor or major release), Lerna will push an update to the version number in `package.json`. Lerna looks for changes to the current release, except for markdown files (prevents unnecessary releases).

## Handy commands
In project root, clean all node_module folders from all packages and the root node_module folder:
```
lerna clean && rm -rf node_modules
```
