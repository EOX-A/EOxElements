[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / TimeControlConfig

# Type Alias: TimeControlConfig

> **TimeControlConfig** = `object`

Defined in: [elements/timecontrol/src/types.ts:263](https://github.com/EOX-A/EOxElements/blob/8b510756058772a01820f7f14ba1780f76070f24/elements/timecontrol/src/types.ts#L263)

Main time control component properties and configuration.

## Properties

### externalMapRendering?

> `optional` **externalMapRendering**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:283](https://github.com/EOX-A/EOxElements/blob/8b510756058772a01820f7f14ba1780f76070f24/elements/timecontrol/src/types.ts#L283)

Whether external map rendering is enabled.

***

### filters?

> `optional` **filters**: [`FilterConfig`](FilterConfig.md)[]

Defined in: [elements/timecontrol/src/types.ts:279](https://github.com/EOX-A/EOxElements/blob/8b510756058772a01820f7f14ba1780f76070f24/elements/timecontrol/src/types.ts#L279)

Array of filter configurations.

***

### for?

> `optional` **for**: `string` \| [`EOxMapType`](../interfaces/EOxMapType.md)

Defined in: [elements/timecontrol/src/types.ts:267](https://github.com/EOX-A/EOxElements/blob/8b510756058772a01820f7f14ba1780f76070f24/elements/timecontrol/src/types.ts#L267)

Reference to the eox-map element (can be a selector string or element instance).

***

### layerIdKey?

> `optional` **layerIdKey**: `string`

Defined in: [elements/timecontrol/src/types.ts:271](https://github.com/EOX-A/EOxElements/blob/8b510756058772a01820f7f14ba1780f76070f24/elements/timecontrol/src/types.ts#L271)

Property key used to identify layers (default: "id").

***

### titleKey?

> `optional` **titleKey**: `string`

Defined in: [elements/timecontrol/src/types.ts:275](https://github.com/EOX-A/EOxElements/blob/8b510756058772a01820f7f14ba1780f76070f24/elements/timecontrol/src/types.ts#L275)

Property key used for layer titles (default: "name").

***

### unstyled?

> `optional` **unstyled**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:287](https://github.com/EOX-A/EOxElements/blob/8b510756058772a01820f7f14ba1780f76070f24/elements/timecontrol/src/types.ts#L287)

Whether to disable default styling.
