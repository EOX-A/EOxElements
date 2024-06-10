# EOxGeoSearch

An autocompleted search input for geographic locations.

The element comes with a configurable button mode which can be enabled with the boolean attributes `button` and, additionally, `small`, to use the button in a map toolbar.

Real-time OpenCage API access is enabled by setting both the `endpoint` and `key` attributes. Optionally, a `limit` attribute may be set to restrict the number of fetched locations.

## Configuration

Furthermore, the alignment of the input and search results can be configured to align straight or in a 90-degree angle in any direction with the `input-direction` and `results-direction` attributes and the following directions:

- `left`
- `up`
- `right`
- `down`

To style the component, the following CSS variables are supported:

- `--button-bg`
- `--input-fg`
- `--input-bg`
- `--results-fg`
- `--results-bg`
- `--results-border-color`

## Screenshots/Videos

![Screen Recording 2024-05-21 at 12 11 02](https://github.com/EOX-A/EOxElements/assets/94269527/5d207fbb-6abf-42d5-b053-74ad4e75f930)
