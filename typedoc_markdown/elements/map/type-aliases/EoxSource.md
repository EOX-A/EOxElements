[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/map](../README.md) / EoxSource

# Type Alias: EoxSource\<S\>

> **EoxSource**\<`S`\> = (`S` *extends* `"WMTS"` ? `OlSourceOption`\<`S`\> : `OlSourceOption`\<`S`\> *extends* `object` ? `Omit`\<`OlSourceOption`\<`S`\>, `"format"`\> & `object` : `OlSourceOption`\<`S`\> *extends* `object` ? `Omit`\<`OlSourceOption`\<`S`\>, `"source"`\> & `object` : `OlSourceOption`\<`S`\>) & `object`

Defined in: [elements/map/src/layers.ts:125](https://github.com/EOX-A/EOxElements/blob/0e95c5667614c4e14115b3ee066d630daa06e9d1/elements/map/src/layers.ts#L125)

## Type Parameters

### S

`S` *extends* keyof [`OLSources`](OLSources.md)

## Type Declaration

### features?

> `optional` **features?**: `any`

### projection?

> `optional` **projection?**: `ProjectionLike`

### type

> **type**: `S`
