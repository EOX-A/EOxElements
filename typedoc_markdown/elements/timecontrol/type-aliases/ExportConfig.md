[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / ExportConfig

# Type Alias: ExportConfig

> **ExportConfig** = `object`

Defined in: [elements/timecontrol/src/types.ts:282](https://github.com/EOX-A/EOxElements/blob/f47703d9f111e4bda1e9a85a1de085d657b44365/elements/timecontrol/src/types.ts#L282)

Configuration for export functionality in timelapse component.

## Properties

### mapLayers

> **mapLayers**: `object`[]

Defined in: [elements/timecontrol/src/types.ts:286](https://github.com/EOX-A/EOxElements/blob/f47703d9f111e4bda1e9a85a1de085d657b44365/elements/timecontrol/src/types.ts#L286)

Array of map layer configurations for export.

#### center?

> `optional` **center?**: `number`[]

Map center coordinates [x, y].

#### date?

> `optional` **date?**: `string`

Date string for this layer (optional).

#### img?

> `optional` **img?**: `string`

Preview image URL (optional).

#### layers

> **layers**: `any`[]

Array of layer configurations.

#### zoom?

> `optional` **zoom?**: `number`

Map zoom level.

***

### play?

> `optional` **play?**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:315](https://github.com/EOX-A/EOxElements/blob/f47703d9f111e4bda1e9a85a1de085d657b44365/elements/timecontrol/src/types.ts#L315)

Whether the animation is currently playing.

***

### selectedPreview?

> `optional` **selectedPreview?**: `number`

Defined in: [elements/timecontrol/src/types.ts:311](https://github.com/EOX-A/EOxElements/blob/f47703d9f111e4bda1e9a85a1de085d657b44365/elements/timecontrol/src/types.ts#L311)

Index of the selected preview.
