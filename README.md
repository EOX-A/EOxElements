# EOxElements
Geospatial UI Elements

## Live Demo
See the elements in action [here](https://eox-a.github.io/elements/collection/).

## Development Setup
This monorepo uses Yarn [workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://github.com/lerna/lerna).

All the following commands should be executed from the project root.

To get started, bootstrap the whole project (installs dependencies of all packages and symlinks them):
```
yarn install
```

Then, build all packages (or a specific one, targeted with `--scope`):
```
yarn build (--scope @eox/map-basic)
```
Finally, launch the development server of the [dev-playground](./.dev/dev-playground), where you can create and edit `src/components/Playground.vue` to test packages:
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