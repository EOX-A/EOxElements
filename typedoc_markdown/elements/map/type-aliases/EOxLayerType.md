[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/map](../README.md) / EOxLayerType

# Type Alias: EOxLayerType\<T, S\>

> **EOxLayerType**\<`T`, `S`\> = (`OlLayerOption`\<`T`\> *extends* `object` ? `Omit`\<`OlLayerOption`\<`T`\>, `"sources"`\> & `object` : `OlLayerOption`\<`T`\>) & `object` & (\[`S`\] *extends* \[`never`\] ? `object` : `SourceProperties`\<`S`\>)

Defined in: [elements/map/src/layers.ts:144](https://github.com/EOX-A/EOxElements/blob/9d93754845a3c39b2b777266525507f32e2dc0bf/elements/map/src/layers.ts#L144)

## Type Parameters

### T

`T` *extends* keyof [`OLLayers`](OLLayers.md)

### S

`S` *extends* keyof [`OLSources`](OLSources.md) = `never`

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
