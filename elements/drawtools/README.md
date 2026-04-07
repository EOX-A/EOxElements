# Draw tools

## Usage

```
npm install @eox/drawtools
```

```
// for setups with bundlers e.g. Vite
import "@eox/drawtools"

// or, for e.g. single HTML files without bundler
import "@eox/drawtools/dist/eox-drawtools.js"

<eox-drawtools></eox-drawtools>
```

## API

### Methods

| Method | Description |
|--------|-------------|
| `startDrawing()` | Activates the draw interaction on the map |
| `stopDrawing()` | Deactivates the draw interaction without discarding existing features |
| `discardDrawing()` | Stops drawing and clears all drawn features |
| `removeFeatureByIndex(index)` | Removes a feature at the given index. Returns `true` if removed, `false` if out of bounds |
| `emitDrawnFeatures()` | Manually triggers feature emission and `drawupdate` event |

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | `String` | `"Polygon"` | Draw type: `Polygon`, `Box`, `Point`, `Circle`, `LineString` |
| `multiple-features` | `Boolean` | `false` | Allow drawing more than one feature |
| `allow-modify` | `Boolean` | `false` | Allow modifying features after drawing |
| `continuous` | `Boolean` | `false` | Auto-start next drawing after completing one |
| `show-list` | `Boolean` | `false` | Display a list of drawn features |
| `show-editor` | `Boolean` | `false` | Show GeoJSON editor |
| `import-features` | `Boolean` | `false` | Allow drag-drop and file upload import |
| `format` | `String` | `"feature"` | Output format: `feature`, `geojson`, `wkt` |
| `projection` | `String` | `"EPSG:4326"` | Projection of emitted features |
| `suppressEvents` | `Boolean` | `false` | When `true`, suppresses `drawupdate` event emission. Set before programmatic feature changes to avoid feedback loops |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `drawupdate` | `Feature[] \| GeoJSON \| WKT` | Fires when features are added, modified, or discarded (unless `suppressEvents` is `true`) |

### Programmatic Control Example

```javascript
const drawtools = document.querySelector("eox-drawtools");

// Start and stop drawing (features preserved)
drawtools.startDrawing();
drawtools.stopDrawing();

// Remove a specific feature
drawtools.removeFeatureByIndex(0);

// Suppress events during bulk operations
drawtools.suppressEvents = true;
drawtools.removeFeatureByIndex(0);
drawtools.removeFeatureByIndex(0);
drawtools.suppressEvents = false;
drawtools.emitDrawnFeatures(); // manually emit once
```

Please refer to the [drawtools docs](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-drawtools--docs) for more details and interactive examples.

## Development

For a development setup, please check the [root-level readme](../../README.md).

## Changelog

Created automatically [here](./CHANGELOG.md)
