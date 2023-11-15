# EOxElements

A Web Component collection of geospatial UI elements, crafted by EOX.

Note: The main branch of this project contains the v2 version of EOxElements. For the (legacy) v1 EOxElements, please see the [v1 branch](https://github.com/EOX-A/elements/tree/v1).

## Documentation, Examples

Please find [descriptions, API docs and interactive examples here](https://eox-a.github.io/EOxElements) (currently WIP).

## Elements

- ⭕️ **Alpha** elements are in-development and may have many frequent breaking
  changes.
- 🟡 **Beta** elements are mostly polished and ready for use, but may still have
  breaking changes.
- ✅ **Stable** elements are reviewed, documented, and API complete.

<table>
  <tr>
    <th>Element</th>
    <th>Description</th>
    <th>Docs & Examples</th>
    <th>State</th>
  </tr>
  <tr>
    <td><a href="./elements/chart/">eox-chart</a></td>
    <td>Dynamic chart with built-in data fetching</td>
    <td><a href="https://eox-a.github.io/EOxElements/index.html?path=/docs/elements-eox-chart--docs">Docs & Examples</a></td>
    <td>⭕️</td>
  </tr>
  <tr>
    <td><a href="./elements/drawtools/">eox-drawtools</a></td>
    <td>Draw and manage features on a map</td>
    <td><a href="https://eox-a.github.io/EOxElements/index.html?path=/docs/elements-eox-drawtools--docs">Docs & Examples</a></td>
    <td>⭕️</td>
  </tr>
  <tr>
    <td><a href="./elements/itemfilter/">eox-itemfilter</a></td>
    <td>Filter/search large sets of items client-side or server-side</td>
    <td><a href="https://eox-a.github.io/EOxElements/index.html?path=/docs/elements-eox-itemfilter--docs">Docs & Examples</a></td>
    <td>🟡</td>
  </tr>
  <tr>
    <td><a href="./elements/layercontrol/">eox-layercontrol</a></td>
    <td>Manage and modify map layers</td>
    <td><a href="https://eox-a.github.io/EOxElements/index.html?path=/docs/elements-eox-layercontrol--docs">Docs & Examples</a></td>
    <td>🟡</td>
  </tr>
  <tr>
    <td><a href="./elements/map/">eox-map</a></td>
    <td>Map with powerful tools & helpers</td>
    <td><a href="https://eox-a.github.io/EOxElements/index.html?path=/docs/elements-eox-map--docs">Docs & Examples</a></td>
    <td>🟡</td>
  </tr>
  <tr>
    <td><a href="./elements/stacinfo/">eox-stacinfo</a></td>
    <td>Display properties of STAC files</td>
    <td><a href="https://eox-a.github.io/EOxElements/index.html?path=/docs/elements-eox-stacinfo--docs">Docs & Examples</a></td>
    <td>⭕️</td>
  </tr>
  <tr>
    <td><a href="./elements/timecontrol/">eox-timecontrol</a></td>
    <td>Time control and playback for map layers</td>
    <td><a href="https://eox-a.github.io/EOxElements/index.html?path=/docs/elements-eox-timecontrol--docs">Docs & Examples</a></td>
    <td>⭕️</td>
  </tr>
</table>

## Usage

For detailed descriptions and documentation on the individual elements, please check out the READMEs in the element subfolders.

### Bundlers (Vite, Webpack, etc.)

```
npm install @eox/<element>
```

```
import "@eox/<element>"
<eox-element></eox-element>
```

### Script tag

```
<eox-element></eox-element>

<script type="module">
import "@eox/<element>" from "https://cdn.skypack.dev/@eox/<element>"
</script>
```

## Development

### Branch naming convention

Inspired by [this article](https://betterprogramming.pub/enabling-monorepo-with-a-simple-single-github-repository-39bc6347abba#391d).

Please name your branches `<element>/<changetype>/<name>`:

```
main
map/feature/new-feature
map/fix/some-fix
chart/feature/new-feature
chart/fix/some-fix
[...]
```

### Initial Setup

In order to use npm workspaces and all the elements properly, please use **Node.js >= 18.16.0 LTS**.

Install all root and all element dependencies:

```
npm install
```

### Dev server

To start the storybook dev server, use:

```
npm start
```

This opens the storybook server on localhost (port 6006), where multiple element states can be used for development. Edit the corresponding element `stories.js` files to create and work on multiple states of an element.

### Test server

You can run individual tests by using the Cypress testing GUI. It offers access to a suite of configurations for each element via component tests, and E2E tests combining multiple elements.

#### Component Tests

```
npm run cypress
--> select Component Testing
--> select a browser
--> select a spec
```

#### E2E Tests

End-to-end (E2E) Tests use the bundleded versions of the elements. In order to be able to run E2E tests for a specific element you need to build that element first, using the `build` or the `watch` (re-building on every change) command:

```
npm run watch -w <element>
```

To build/watch all elements, you can use:

```
npm run watch:all
```

Once the selected element(s) are built, you can run the corresponding tests in the Cypress GUI:

```
npm run cypress
--> select E2E Testing
--> select a browser
--> select a spec
```

### Run automated tests

Automated tests (component & E2E tests) are performed by the GitHub action triggered on each PR to main. You can trigger them locally by running:

```
npm run test:all // component & E2E
npm run test:component // only component tests
npm run test:e2e // only E2E test
```

Temember to build/watch all components before running E2E tests as specified above.

### Useful commands

Format all elements:

```
npm run format:all
```

Lint/fix all elements:

```
npm run lint:all
npm run lint:fix:all
```

If something does not work properly, sometimes it helps to clean the entire setup and delete all node modules to start fresh:

```
npm run clean
--> deletes all node_module folders
npm install
```
