[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / ExportConfig

# Type Alias: ExportConfig

> **ExportConfig** = `object`

Defined in: [elements/timecontrol/src/types.ts:182](https://github.com/EOX-A/EOxElements/blob/de7073884d9abd4e384e3ba8df3412f7b7cd82c9/elements/timecontrol/src/types.ts#L182)

Configuration for export functionality in timelapse component.

## Properties

### mapLayers

> **mapLayers**: `object`[]

Defined in: [elements/timecontrol/src/types.ts:186](https://github.com/EOX-A/EOxElements/blob/de7073884d9abd4e384e3ba8df3412f7b7cd82c9/elements/timecontrol/src/types.ts#L186)

Array of map layer configurations for export.

#### center?

> `optional` **center**: `number`[]

Map center coordinates [x, y].

#### date?

> `optional` **date**: `string`

Date string for this layer (optional).

#### img?

> `optional` **img**: `string`

Preview image URL (optional).

#### layers

> **layers**: `any`[]

Array of layer configurations.

#### zoom?

> `optional` **zoom**: `number`

Map zoom level.

***

### play?

> `optional` **play**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:215](https://github.com/EOX-A/EOxElements/blob/de7073884d9abd4e384e3ba8df3412f7b7cd82c9/elements/timecontrol/src/types.ts#L215)

Whether the animation is currently playing.

***

### selectedPreview?

> `optional` **selectedPreview**: `number`

Defined in: [elements/timecontrol/src/types.ts:211](https://github.com/EOX-A/EOxElements/blob/de7073884d9abd4e384e3ba8df3412f7b7cd82c9/elements/timecontrol/src/types.ts#L211)

Index of the selected preview.
