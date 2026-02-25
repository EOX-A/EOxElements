[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / SliderValue

# Type Alias: SliderValue

> **SliderValue** = `object`

Defined in: [elements/timecontrol/src/types.ts:39](https://github.com/EOX-A/EOxElements/blob/f8081b6889171818971f4edabf3ea2a9960a0ae6/elements/timecontrol/src/types.ts#L39)

Represents the configuration for a slider layer with time control values.

## Properties

### layer

> **layer**: `string` \| `number`

Defined in: [elements/timecontrol/src/types.ts:43](https://github.com/EOX-A/EOxElements/blob/f8081b6889171818971f4edabf3ea2a9960a0ae6/elements/timecontrol/src/types.ts#L43)

The layer identifier.

***

### layerInstance

> **layerInstance**: `default`

Defined in: [elements/timecontrol/src/types.ts:80](https://github.com/EOX-A/EOxElements/blob/f8081b6889171818971f4edabf3ea2a9960a0ae6/elements/timecontrol/src/types.ts#L80)

Reference to the OpenLayers layer instance.

***

### name

> **name**: `string`

Defined in: [elements/timecontrol/src/types.ts:47](https://github.com/EOX-A/EOxElements/blob/f8081b6889171818971f4edabf3ea2a9960a0ae6/elements/timecontrol/src/types.ts#L47)

The display name of the layer.

***

### property

> **property**: `string`

Defined in: [elements/timecontrol/src/types.ts:51](https://github.com/EOX-A/EOxElements/blob/f8081b6889171818971f4edabf3ea2a9960a0ae6/elements/timecontrol/src/types.ts#L51)

The property name used for time control (e.g., "TIME").

***

### values

> **values**: `object`[]

Defined in: [elements/timecontrol/src/types.ts:55](https://github.com/EOX-A/EOxElements/blob/f8081b6889171818971f4edabf3ea2a9960a0ae6/elements/timecontrol/src/types.ts#L55)

Array of time control values with dates and metadata.

#### Index Signature

\[`key`: `string`\]: `any`

Additional metadata properties.

#### date

> **date**: `string`

Date string in YYYY-MM-DD format.

#### local

> **local**: `string`

Local formatted date string.

#### originalDate

> **originalDate**: `string`

Original date value before formatting.

#### utc

> **utc**: `string`

UTC formatted date string.
