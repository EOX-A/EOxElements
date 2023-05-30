# EOxElements

Geospatial UI Elements.

The main branch of this project contains the v2 version of EOxElements.

For the (legacy v1) EOxElements, please see the [v1 branch](https://github.com/EOX-A/elements/tree/v1).

## Setup

```
npm install
npm run build --ws // initially build all elements
npm run cypress // open interactive cypress test utility
npm run format // format all elements
npm run lint // lint all elements
npm run lint:fix // lint:fix all elements
npm run clean // delete all node_module folders
```

## Branch naming convention

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
