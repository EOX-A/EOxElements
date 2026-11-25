[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/map](../README.md) / GlobeConfig

# Type Alias: GlobeConfig

> **GlobeConfig** = `object`

Defined in: [elements/map/src/types.ts:261](https://github.com/EOX-A/EOxElements/blob/39ae440a2ef4deb9fd4f88fd0f2aaf313e7a93dd/elements/map/src/types.ts#L261)

Configuration for the globe projection.

## Properties

### atmosphere?

> `optional` **atmosphere?**: `boolean`

Defined in: [elements/map/src/types.ts:276](https://github.com/EOX-A/EOxElements/blob/39ae440a2ef4deb9fd4f88fd0f2aaf313e7a93dd/elements/map/src/types.ts#L276)

Whether to draw an atmosphere around the globe.
Defaults to false.

***

### stars?

> `optional` **stars?**: `boolean` \| [`GlobeStarFaces`](GlobeStarFaces.md)

Defined in: [elements/map/src/types.ts:284](https://github.com/EOX-A/EOxElements/blob/39ae440a2ef4deb9fd4f88fd0f2aaf313e7a93dd/elements/map/src/types.ts#L284)

Stars around the globe: `true` for the default star map, or the image
URLs of six cube faces. Applies when the globe is created.
Default star map: Solar System Scope, CC BY 4.0.
Defaults to false.

#### See

https://www.solarsystemscope.com/textures/

***

### terrain?

> `optional` **terrain?**: `boolean`

Defined in: [elements/map/src/types.ts:266](https://github.com/EOX-A/EOxElements/blob/39ae440a2ef4deb9fd4f88fd0f2aaf313e7a93dd/elements/map/src/types.ts#L266)

Option for whether or not there will be terrain on the globe projection.
Defaults to false.

***

### useHighLOD?

> `optional` **useHighLOD?**: `boolean`

Defined in: [elements/map/src/types.ts:271](https://github.com/EOX-A/EOxElements/blob/39ae440a2ef4deb9fd4f88fd0f2aaf313e7a93dd/elements/map/src/types.ts#L271)

Whether use high level of details or not.
Defaults to false.
