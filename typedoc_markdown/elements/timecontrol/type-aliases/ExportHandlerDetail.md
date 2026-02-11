[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / ExportHandlerDetail

# Type Alias: ExportHandlerDetail

> **ExportHandlerDetail** = `object`

Defined in: [elements/timecontrol/src/types.ts:363](https://github.com/EOX-A/EOxElements/blob/2cf0da609905f55ba8d7e154d5bd23fc2b157429/elements/timecontrol/src/types.ts#L363)

Export handler detail structure.

## Properties

### eoxMapConfig

> **eoxMapConfig**: `object`

Defined in: [elements/timecontrol/src/types.ts:387](https://github.com/EOX-A/EOxElements/blob/2cf0da609905f55ba8d7e154d5bd23fc2b157429/elements/timecontrol/src/types.ts#L387)

EOxMap configuration object.

#### center

> **center**: `number`[]

#### layers

> **layers**: `any`[]

#### zoom

> **zoom**: `number`

***

### filters

> **filters**: [`FilterConfig`](FilterConfig.md)[]

Defined in: [elements/timecontrol/src/types.ts:367](https://github.com/EOX-A/EOxElements/blob/2cf0da609905f55ba8d7e154d5bd23fc2b157429/elements/timecontrol/src/types.ts#L367)

Array of filter configurations.

***

### instances

> **instances**: `Record`\<`string`, \{ `layer`: `any`; `source`: `any`; \}\>

Defined in: [elements/timecontrol/src/types.ts:383](https://github.com/EOX-A/EOxElements/blob/2cf0da609905f55ba8d7e154d5bd23fc2b157429/elements/timecontrol/src/types.ts#L383)

Array of instances.

***

### selectedRangeItems

> **selectedRangeItems**: `object`

Defined in: [elements/timecontrol/src/types.ts:371](https://github.com/EOX-A/EOxElements/blob/2cf0da609905f55ba8d7e154d5bd23fc2b157429/elements/timecontrol/src/types.ts#L371)

Selected range items organized by date.

#### Index Signature

\[`dateKey`: `string`\]: `object`
