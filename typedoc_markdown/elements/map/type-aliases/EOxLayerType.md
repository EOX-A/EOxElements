[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/map](../README.md) / EOxLayerType

# Type Alias: EOxLayerType\<T, S\>

> **EOxLayerType**\<`T`, `S`\> = `OlLayerOption`\<`T`\> *extends* `object` ? `Omit`\<`OlLayerOption`\<`T`\>, `"sources"`\> & `object` : `OlLayerOption`\<`T`\> & `object` & \[`S`\] *extends* \[`never`\] ? `object` : `SourceProperties`\<`S`\>

Defined in: [elements/map/src/layers.ts:144](https://github.com/EOX-A/EOxElements/blob/ead9a05062c2bb3062cc655199c5548cfeec205e/elements/map/src/layers.ts#L144)

## Type Declaration

### interactions?

> `optional` **interactions?**: `T` *extends* `"Vector"` \| `"VectorTile"` ? [`EOxInteraction`](EOxInteraction.md)[] : `never`

### opacity?

> `optional` **opacity?**: `number`

### properties?

> `optional` **properties?**: `object`

#### Index Signature

\[`key`: `string`\]: `any`

#### properties.id

> **id**: `string`

### type

> **type**: `T`

### visible?

> `optional` **visible?**: `boolean`

### zIndex?

> `optional` **zIndex?**: `number`

## Type Parameters

### T

`T` *extends* keyof [`OLLayers`](OLLayers.md)

### S

`S` *extends* keyof [`OLSources`](OLSources.md) = `never`
