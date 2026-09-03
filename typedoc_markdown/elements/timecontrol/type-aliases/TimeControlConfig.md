[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / TimeControlConfig

# Type Alias: TimeControlConfig

> **TimeControlConfig** = `object`

Defined in: [elements/timecontrol/src/types.ts:363](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L363)

Main time control component properties and configuration.

## Properties

### externalMapRendering?

> `optional` **externalMapRendering?**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:383](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L383)

Whether external map rendering is enabled.

***

### filters?

> `optional` **filters?**: [`FilterConfig`](FilterConfig.md)[]

Defined in: [elements/timecontrol/src/types.ts:379](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L379)

Array of filter configurations.

***

### for?

> `optional` **for?**: `string` \| [`EOxMapType`](../interfaces/EOxMapType.md)

Defined in: [elements/timecontrol/src/types.ts:367](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L367)

Reference to the eox-map element (can be a selector string or element instance).

***

### layerIdKey?

> `optional` **layerIdKey?**: `string`

Defined in: [elements/timecontrol/src/types.ts:371](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L371)

Property key used to identify layers (default: "id").

***

### titleKey?

> `optional` **titleKey?**: `string`

Defined in: [elements/timecontrol/src/types.ts:375](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L375)

Property key used for layer titles (default: "name").

***

### unstyled?

> `optional` **unstyled?**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:387](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L387)

Whether to disable default styling.
