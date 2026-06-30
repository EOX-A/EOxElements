[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/map](../README.md) / EoxSource

# Type Alias: EoxSource\<S\>

> **EoxSource**\<`S`\> = `S` *extends* `"WMTS"` ? `OlSourceOption`\<`S`\> : `OlSourceOption`\<`S`\> *extends* `object` ? `Omit`\<`OlSourceOption`\<`S`\>, `"format"`\> & `object` : `OlSourceOption`\<`S`\> *extends* `object` ? `Omit`\<`OlSourceOption`\<`S`\>, `"source"`\> & `object` : `OlSourceOption`\<`S`\> & `object`

Defined in: [elements/map/src/layers.ts:125](https://github.com/EOX-A/EOxElements/blob/0146f7f6f01bcbc1f1a18579dd9a304b37dafdda/elements/map/src/layers.ts#L125)

## Type Declaration

### features?

> `optional` **features?**: `any`

### projection?

> `optional` **projection?**: `ProjectionLike`

### type

> **type**: `S`

## Type Parameters

### S

`S` *extends* keyof [`OLSources`](OLSources.md)
