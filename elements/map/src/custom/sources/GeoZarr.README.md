# Experimental GeoZarr source

`GeoZarr.js` vendors the source from [OpenLayers PR #17740](https://github.com/openlayers/openlayers/pull/17740), pinned to commit `bcb8e0d82ed4687ff6f27fae3548161a9fd93699`. It supports south-up rasters declared through a positive row step in `spatial:transform`, derives missing extents from transform and shape metadata, and respects the explicit `flipY` fallback when orientation metadata is absent.

The advanced-layers-and-sources plugin registers this implementation under the existing `GeoZarr` name. No layer configuration changes are required. Importing `ol/source/GeoZarr` directly still returns the stable upstream implementation, not this experimental source.

The existing GeoZarr Storybook example uses this source. Applications enable it with:

```javascript
import "@eox/map";
import "@eox/map/src/plugins/advancedLayersAndSources/index.js";

const map = document.querySelector("eox-map");
map.layers = [
  {
    type: "WebGLTile",
    source: {
      type: "GeoZarr",
      url: "https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2C_MSIL2A_20260716T100601_N0512_R022_T32TQR_20260716T154011.zarr/measurements/reflectance",
      bands: ["b04", "b03", "b02"],
    },
  },
];
```

Local adaptations are limited to package-qualified OpenLayers imports (including JSDoc imports), explicit property initialization compatible with repository lint/type checks, an underscore-prefixed unused loader parameter, JSDoc lint normalization, and Prettier formatting. The snapshot also includes upstream changes preceding this PR; it is not a patch applied to the 10.11.0 source.

OpenLayers is pinned to `10.11.0` because the vendored implementation uses its internal source and tile-grid modules. `zarrita` is a direct map dependency because the vendored module imports it directly. The source and adjacent BSD-2-Clause license are included by the package's existing `src` files entry, so downstream installations need no patches or install scripts.

## Removal

Once a supported OpenLayers release contains the fix, restore the plugin and layer type imports to `ol/source/GeoZarr`, restore the six regression-test spy imports, remove this source and its adjacent documentation/license, remove the direct `zarrita` dependency if no longer used, and update the OpenLayers dependency and lockfile. Keep the dedicated south-up regression tests and update their source import to the released implementation.
