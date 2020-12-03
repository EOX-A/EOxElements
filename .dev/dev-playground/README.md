# Development Playground

## Playground file
Create a `Playground.vue` file in `src/` (you can use the provided template.

## Using other internal packages
The best way to use internal packages is to add them to dev-playground directly from project root:
```
lerna add @eox/map-basic --scope dev-playground
```
 If you have added a package directly to dev playground, it's best to remove node_modules folder, then run `yarn install` at the project root to symlink the installed packages.

## Dev server
In the project root folder, run:
```
yarn dev
```
This will launch a dev server on `localhost:8080`.