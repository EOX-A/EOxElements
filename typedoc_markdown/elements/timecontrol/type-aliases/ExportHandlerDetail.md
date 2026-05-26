[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / ExportHandlerDetail

# Type Alias: ExportHandlerDetail

> **ExportHandlerDetail** = `object`

Defined in: [elements/timecontrol/src/types.ts:382](https://github.com/EOX-A/EOxElements/blob/ed7a7f4c65527ca66af3cd3a3701c649285dbdf4/elements/timecontrol/src/types.ts#L382)

Export handler detail structure.

## Properties

### eoxMapConfig

> **eoxMapConfig**: `object`

Defined in: [elements/timecontrol/src/types.ts:406](https://github.com/EOX-A/EOxElements/blob/ed7a7f4c65527ca66af3cd3a3701c649285dbdf4/elements/timecontrol/src/types.ts#L406)

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

Defined in: [elements/timecontrol/src/types.ts:386](https://github.com/EOX-A/EOxElements/blob/ed7a7f4c65527ca66af3cd3a3701c649285dbdf4/elements/timecontrol/src/types.ts#L386)

Array of filter configurations.

***

### instances

> **instances**: `Record`\<`string`, \{ `layer`: `any`; `source`: `any`; \}\>

Defined in: [elements/timecontrol/src/types.ts:402](https://github.com/EOX-A/EOxElements/blob/ed7a7f4c65527ca66af3cd3a3701c649285dbdf4/elements/timecontrol/src/types.ts#L402)

Array of instances.

***

### selectedRangeItems

> **selectedRangeItems**: `object`

Defined in: [elements/timecontrol/src/types.ts:390](https://github.com/EOX-A/EOxElements/blob/ed7a7f4c65527ca66af3cd3a3701c649285dbdf4/elements/timecontrol/src/types.ts#L390)

Selected range items organized by date.

#### Index Signature

\[`dateKey`: `string`\]: `object`
