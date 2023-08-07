# Layer control

## Usage

```
npm install @eox/layercontrol
```

```
import "@eox/layercontrol"

<eox-layercontrol for="eox-map"></eox-layercontrol>
```

## Attributes

### `for: string = "eox-map"` (when used with `eox-map`)

The query selector of the `eox-map` you wish to attch the layer control to. When used with a vanilla OpenLayer map, see the [`attachTo` method](#attachtomapobject-map-when-used-with-a-vanilla-openlayer-map) instead.

### `layerIdentifier: string = "id"`

The layer identifier property of the layers. Fallback is set automatically based on `ol_uid` if not provided.

### `layerTitle: string = "title"`

The layer title property of the layers. "title" by default, fallback is set automatically based on "layer" + `ol_uid` if not provided.

### `layerConfig: Array<string> = ["opacity"]`

// TODO

### `externalLayerConfig: Boolean = undefined`

// TODO

### `unstyled: Boolean`

Display the unstyled version of the layer control.

## Methods

### `attachTo(mapObject: Map)` (when used with a vanilla OpenLayer map)

Attach the layer control to an OpenLayer map instance. When used with an `eox-map`, see the [`for` attribute](#for-when-used-with-eox-map) instead.

## Layer properties

In order to be displayed correctly, the OpenLayers map layers need some custom properties (using e.g. `layer.set(property, value)`).

### `id?: string`

The layer id. Not required but recommended (see [automatic fallback](#layeridentifier-string--id)).

### `title?: string`

The title of the layer displayed in the layer control. Not required (see [automatic fallback](#layertitle-string--title)), but recommended in order to display human-readable layer titles.

### `layerControlHide?: Boolean`

Completely hide a layer from the layer control.

### `layerControlOptional?: Boolean`

Initially hide a layer from the layer control, but make it available as an optional layer. If the layer is selected and added, it will be set to visible and pushed to the top of the layer list or (if originally configured within a layer group) to the top of the layer group.

### `layerControlExclusive?: Boolean`

Make layers mutually exclusive. If two or more layers (on the same level, i.e. at root or inside a layer group) have this property, then only one of them can be visualized at a time.

## Contribute

### Setup

```
npm install
npm start
npm run format

npm version <new version>
npm run build
npm publish (requires OTP)
```

### Testing

// TODO
