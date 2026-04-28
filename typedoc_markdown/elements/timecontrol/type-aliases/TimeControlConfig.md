[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / TimeControlConfig

# Type Alias: TimeControlConfig

> **TimeControlConfig** = `object`

Defined in: [elements/timecontrol/src/types.ts:282](https://github.com/EOX-A/EOxElements/blob/f50a27a1e7e6e8476a772c12ed8950e1cdf5f4c2/elements/timecontrol/src/types.ts#L282)

Main time control component properties and configuration.

## Properties

### externalMapRendering?

> `optional` **externalMapRendering?**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:302](https://github.com/EOX-A/EOxElements/blob/f50a27a1e7e6e8476a772c12ed8950e1cdf5f4c2/elements/timecontrol/src/types.ts#L302)

Whether external map rendering is enabled.

***

### filters?

> `optional` **filters?**: [`FilterConfig`](FilterConfig.md)[]

Defined in: [elements/timecontrol/src/types.ts:298](https://github.com/EOX-A/EOxElements/blob/f50a27a1e7e6e8476a772c12ed8950e1cdf5f4c2/elements/timecontrol/src/types.ts#L298)

Array of filter configurations.

***

### for?

> `optional` **for?**: `string` \| [`EOxMapType`](../interfaces/EOxMapType.md)

Defined in: [elements/timecontrol/src/types.ts:286](https://github.com/EOX-A/EOxElements/blob/f50a27a1e7e6e8476a772c12ed8950e1cdf5f4c2/elements/timecontrol/src/types.ts#L286)

Reference to the eox-map element (can be a selector string or element instance).

***

### layerIdKey?

> `optional` **layerIdKey?**: `string`

Defined in: [elements/timecontrol/src/types.ts:290](https://github.com/EOX-A/EOxElements/blob/f50a27a1e7e6e8476a772c12ed8950e1cdf5f4c2/elements/timecontrol/src/types.ts#L290)

Property key used to identify layers (default: "id").

***

### titleKey?

> `optional` **titleKey?**: `string`

Defined in: [elements/timecontrol/src/types.ts:294](https://github.com/EOX-A/EOxElements/blob/f50a27a1e7e6e8476a772c12ed8950e1cdf5f4c2/elements/timecontrol/src/types.ts#L294)

Property key used for layer titles (default: "name").

***

### unstyled?

> `optional` **unstyled?**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:306](https://github.com/EOX-A/EOxElements/blob/f50a27a1e7e6e8476a772c12ed8950e1cdf5f4c2/elements/timecontrol/src/types.ts#L306)

Whether to disable default styling.
