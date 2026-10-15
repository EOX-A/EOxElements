[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / ExportConfig

# Type Alias: ExportConfig

> **ExportConfig** = `object`

Defined in: [elements/timecontrol/src/types.ts:286](https://github.com/EOX-A/EOxElements/blob/d1827cade2102d1cd8fe937d8d3990e6ea755e47/elements/timecontrol/src/types.ts#L286)

Configuration for export functionality in timelapse component.

## Properties

### mapLayers

> **mapLayers**: `object`[]

Defined in: [elements/timecontrol/src/types.ts:290](https://github.com/EOX-A/EOxElements/blob/d1827cade2102d1cd8fe937d8d3990e6ea755e47/elements/timecontrol/src/types.ts#L290)

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

Defined in: [elements/timecontrol/src/types.ts:319](https://github.com/EOX-A/EOxElements/blob/d1827cade2102d1cd8fe937d8d3990e6ea755e47/elements/timecontrol/src/types.ts#L319)

Whether the animation is currently playing.

***

### selectedPreview?

> `optional` **selectedPreview?**: `number`

Defined in: [elements/timecontrol/src/types.ts:315](https://github.com/EOX-A/EOxElements/blob/d1827cade2102d1cd8fe937d8d3990e6ea755e47/elements/timecontrol/src/types.ts#L315)

Index of the selected preview.
