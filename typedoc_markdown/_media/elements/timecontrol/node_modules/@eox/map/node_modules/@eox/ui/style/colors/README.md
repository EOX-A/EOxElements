# Colors

Based on Material design 3

## Workflow

- go to https://studio.vuetifyjs.com/ and create a theme
- get the CSS vars from `.v-theme--custom` class
- remove all vars that don't start with `--v-theme`
- remove all vars that include `-multiplier`
- sort all vars alphabetically
- rename `--v-theme-` to `--eox-theme-light-` (or `--eox-theme-dark-`)
- for light theme, copy vars into [light.css](./light.css), for dark into [dark.css](./dark.css)
