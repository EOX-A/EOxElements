# Geo Search

An autocompleted search input for geographic locations.

The element comes with a configurable button mode which can be enabled with the boolean attributes `button` and, additionally, `small`, to use the button in a map toolbar.

Real-time OpenCage API access is enabled by setting the `endpoint` attribute. Optionally, a `limit` attribute may be set to restrict the number of fetched locations.

## Usage

```
npm install @eox/geosearch
```

```
// for setups with bundlers e.g. Vite
import "@eox/geosearch"

// or, for e.g. single HTML files without bundler
import "@eox/geosearch/dist/eox-geosearch.js"

<eox-geosearch></eox-geosearch>
```

## Configuration

### Geographic Extent

You can limit search results to a specific geographic area using the `extent` attribute. This is particularly useful when your application only supports specific regions. The format is `minLon,minLat,maxLon,maxLat`:

```html
<eox-geosearch extent="-125.0,24.0,-66.0,49.0"></eox-geosearch>
```

This example would limit results to approximately North America.

### Tooltip

Add a BeerCSS tooltip to the search button using the `tooltip` attribute (only works in button mode). You can also control the tooltip direction with `tooltip-direction`:

```html
<eox-geosearch
  tooltip="Search for locations"
  tooltip-direction="bottom"
  button
  small
></eox-geosearch>
```

Supported tooltip directions: `left` (default), `top`, `bottom`, `right`

### Alignment

Furthermore, the alignment of the input and search results can be configured to align straight or in a 90-degree angle in any direction with the `input-direction` and `results-direction` attributes and the following directions:

- `left`
- `up`
- `right`
- `down`

To style the component, the following CSS variables are supported:

- `--button-bg`
- `--button-fg`
- `--input-fg`
- `--input-bg`
- `--results-fg`
- `--results-bg`
- `--results-border-color`

## Screenshots/Videos

![Screen Recording 2024-05-21 at 12 11 02](https://github.com/EOX-A/EOxElements/assets/94269527/5d207fbb-6abf-42d5-b053-74ad4e75f930)

## Development

For a development setup, please check the [root-level readme](../../README.md).

## Changelog

Created automatically [here](./CHANGELOG.md)
