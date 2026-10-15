[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / ExportHandlerDetail

# Type Alias: ExportHandlerDetail

> **ExportHandlerDetail** = `object`

Defined in: [elements/timecontrol/src/types.ts:467](https://github.com/EOX-A/EOxElements/blob/109c7a77ff1dca4c3bb2fb53a7c3e2a6ae96d911/elements/timecontrol/src/types.ts#L467)

Export handler detail structure.

## Properties

### eoxMapConfig

> **eoxMapConfig**: `object`

Defined in: [elements/timecontrol/src/types.ts:491](https://github.com/EOX-A/EOxElements/blob/109c7a77ff1dca4c3bb2fb53a7c3e2a6ae96d911/elements/timecontrol/src/types.ts#L491)

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

Defined in: [elements/timecontrol/src/types.ts:471](https://github.com/EOX-A/EOxElements/blob/109c7a77ff1dca4c3bb2fb53a7c3e2a6ae96d911/elements/timecontrol/src/types.ts#L471)

Array of filter configurations.

***

### instances

> **instances**: `Record`\<`string`, \{ `layer`: `any`; `source`: `any`; \}\>

Defined in: [elements/timecontrol/src/types.ts:487](https://github.com/EOX-A/EOxElements/blob/109c7a77ff1dca4c3bb2fb53a7c3e2a6ae96d911/elements/timecontrol/src/types.ts#L487)

Array of instances.

***

### selectedRangeItems

> **selectedRangeItems**: `object`

Defined in: [elements/timecontrol/src/types.ts:475](https://github.com/EOX-A/EOxElements/blob/109c7a77ff1dca4c3bb2fb53a7c3e2a6ae96d911/elements/timecontrol/src/types.ts#L475)

Selected range items organized by date.

#### Index Signature

\[`dateKey`: `string`\]: `object`
