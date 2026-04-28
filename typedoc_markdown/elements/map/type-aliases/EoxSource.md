[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/map](../README.md) / EoxSource

# Type Alias: EoxSource\<S\>

> **EoxSource**\<`S`\> = `S` *extends* `"WMTS"` ? `OlSourceOption`\<`S`\> : `OlSourceOption`\<`S`\> *extends* `object` ? `Omit`\<`OlSourceOption`\<`S`\>, `"format"`\> & `object` : `OlSourceOption`\<`S`\> *extends* `object` ? `Omit`\<`OlSourceOption`\<`S`\>, `"source"`\> & `object` : `OlSourceOption`\<`S`\> & `object`

Defined in: [elements/map/src/layers.ts:125](https://github.com/EOX-A/EOxElements/blob/f50a27a1e7e6e8476a772c12ed8950e1cdf5f4c2/elements/map/src/layers.ts#L125)

## Type Declaration

### projection?

> `optional` **projection?**: `ProjectionLike`

### type

> **type**: `S`

## Type Parameters

### S

`S` *extends* keyof [`OLSources`](OLSources.md)
