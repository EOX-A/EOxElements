[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / ExportHandlerDetail

# Type Alias: ExportHandlerDetail

> **ExportHandlerDetail** = `object`

Defined in: [elements/timecontrol/src/types.ts:463](https://github.com/EOX-A/EOxElements/blob/a8653c17352fb78dfec64d38681db15b25cfec4f/elements/timecontrol/src/types.ts#L463)

Export handler detail structure.

## Properties

### eoxMapConfig

> **eoxMapConfig**: `object`

Defined in: [elements/timecontrol/src/types.ts:487](https://github.com/EOX-A/EOxElements/blob/a8653c17352fb78dfec64d38681db15b25cfec4f/elements/timecontrol/src/types.ts#L487)

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

Defined in: [elements/timecontrol/src/types.ts:467](https://github.com/EOX-A/EOxElements/blob/a8653c17352fb78dfec64d38681db15b25cfec4f/elements/timecontrol/src/types.ts#L467)

Array of filter configurations.

***

### instances

> **instances**: `Record`\<`string`, \{ `layer`: `any`; `source`: `any`; \}\>

Defined in: [elements/timecontrol/src/types.ts:483](https://github.com/EOX-A/EOxElements/blob/a8653c17352fb78dfec64d38681db15b25cfec4f/elements/timecontrol/src/types.ts#L483)

Array of instances.

***

### selectedRangeItems

> **selectedRangeItems**: `object`

Defined in: [elements/timecontrol/src/types.ts:471](https://github.com/EOX-A/EOxElements/blob/a8653c17352fb78dfec64d38681db15b25cfec4f/elements/timecontrol/src/types.ts#L471)

Selected range items organized by date.

#### Index Signature

\[`dateKey`: `string`\]: `object`
