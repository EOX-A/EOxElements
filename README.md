# EOxElements

A Web Component collection of geospatial UI elements, crafted by EOX.

Note: The main branch of this project contains the v2 (alpha) version of EOxElements. For the (legacy) v1 EOxElements, please see the [v1 branch](https://github.com/EOX-A/elements/tree/v1).

## Elements

<table>
  <tr>
    <td><a href="./elements/chart/">eox-chart</a></td>
    <td>Dynamic chart with built-in data fetching</td>
        <td><!--<a href="https://eox-a.github.io/EOxElements/elements/chart/examples/index.html">Examples</a>--></td>
  </tr>
  <tr>
    <td><a href="./elements/drawtools/">eox-drawtools</a></td>
    <td>Draw and manage features on a map</td>
        <td><a href="https://eox-a.github.io/EOxElements/elements/drawtools/examples/index.html">Examples</a></td>
  </tr>
  <tr>
    <td><a href="./elements/itemfilter/">eox-itemfilter</a></td>
    <td>Filter/search large sets of items client-side or server-side</td>
        <td><a href="https://eox-a.github.io/EOxElements/elements/itemfilter/examples/index.html">Examples</a></td>
  </tr>
  <tr>
    <td><a href="./elements/layercontrol/">eox-layercontrol</a></td>
    <td>Manage and modify map layers</td>
        <td><a href="https://eox-a.github.io/EOxElements/elements/layercontrol/examples/index.html">Examples</a></td>
  </tr>
  <tr>
    <td><a href="./elements/map/">eox-map</a></td>
    <td>Map with powerful tools & helpers</td>
    <td><a href="https://eox-a.github.io/EOxElements/elements/map/examples/index.html">Examples</a></td>
  </tr>
  <tr>
    <td><a href="./elements/timecontrol/">eox-timecontrol</a></td>
    <td>Time control and playback for map layers</td>
    <td><a href="https://eox-a.github.io/EOxElements/elements/timecontrol/examples/index.html">Examples</a></td>
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

Inspired by [this article](https://betterprogramming.pub/enabling-monorepo-with-a-simple-single-github-repository-39bc6347abba#391d)

```
main
map/main
map/feature/new-feature
map/fix/some-fix
chart/main
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

You can start a dev server for an individual element by running this command:

```
npm start -w <element>
```

Example:
```
npm start -w @eox/map
```

### Test server

You can run individual tests by using the Cypress testing GUI. It offers access to a suite of configurations for each element, and e2e tests combining multiple elements.

In order to be able to run tests for a specific element you need to build that element first, using the `build` or the `watch` (re-building on every change) command:

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

TODO

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
