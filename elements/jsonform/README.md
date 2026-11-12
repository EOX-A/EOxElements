# Jsonform

Based on [JSON Editor](https://github.com/json-editor/json-editor).

## Usage

```
npm install @eox/jsonform
```

```
// for setups with bundlers e.g. Vite
import "@eox/jsonform"

// or, for e.g. single HTML files without bundler
import "@eox/jsonform/dist/eox-jsonform.js"

<eox-jsonform></eox-jsonform>
```

### Programmatic Value & Spatial Inputs

`eox-jsonform` integrates with `eox-drawtools` for spatial formats (`bounding-box`, `polygon`, `point`, `linestring`).
You can restore or update spatial form inputs programmatically via the underlying `editor.setValue()` method or by setting `.value`:

```javascript
const form = document.querySelector("eox-jsonform");

// Programmatic update seeds features to connected eox-drawtools
form.editor.setValue({
  area: [12.0, 41.5, 13.5, 42.5], // bounding box [minX, minY, maxX, maxY]
});
```

Supported spatial formats in JSON schema:

- `"format": "bounding-box"`: accepts single BBOX array `[minX, minY, maxX, maxY]` or array of BBOX arrays `[[...]]`.
- `"format": "polygon"`: accepts GeoJSON polygon coordinate ring `[[[x, y], ...]]`.
- `"format": "point"`: accepts coordinate pair `[x, y]`.
- `"format": "linestring"`: accepts coordinate path `[[x, y], ...]`.

Spatial editors can link to an external `eox-map` via schema options:

```json
{
  "type": "array",
  "format": "bounding-box",
  "options": {
    "drawtools": {
      "for": "eox-map#main"
    }
  }
}
```

## Contribute

```
npm watch
(on root) npm run cypress
(on root) npm run format

npm version <new version>
npm run build
npm publish (requires OTP)
```

## Changelog

Created automatically [here](./CHANGELOG.md)
