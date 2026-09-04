[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / TimeControlPopupItem

# Type Alias: TimeControlPopupItem

> **TimeControlPopupItem** = `object`

Defined in: [elements/timecontrol/src/types.ts:159](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L159)

Timeline item data object passed to the popup card renderer or `propertyTransform` function.

## Indexable

> \[`key`: `string`\]: `any`

Additional custom metadata properties defined on `timeControlValues` entries.

## Properties

### date?

> `optional` **date?**: `string`

Defined in: [elements/timecontrol/src/types.ts:199](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L199)

Formatted date string (YYYY-MM-DD).

***

### dotColor

> **dotColor**: `string`

Defined in: [elements/timecontrol/src/types.ts:175](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L175)

CSS color variable or color string for the indicator dot.

***

### group?

> `optional` **group?**: `string`

Defined in: [elements/timecontrol/src/types.ts:183](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L183)

Layer identifier (from `layer.properties[layerIdKey]`).

***

### id?

> `optional` **id?**: `string`

Defined in: [elements/timecontrol/src/types.ts:191](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L191)

Generated unique UUID for timeline tracking.

***

### itemId?

> `optional` **itemId?**: `string`

Defined in: [elements/timecontrol/src/types.ts:187](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L187)

Unique item identifier (from `timeControlValues[i].id` or generated uuid).

***

### layerName?

> `optional` **layerName?**: `string`

Defined in: [elements/timecontrol/src/types.ts:179](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L179)

Layer display name (from `layer.properties[titleKey]`).

***

### local?

> `optional` **local?**: `string`

Defined in: [elements/timecontrol/src/types.ts:207](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L207)

ISO local timezone string.

***

### originalDate?

> `optional` **originalDate?**: `string`

Defined in: [elements/timecontrol/src/types.ts:195](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L195)

Original date string from layer configuration.

***

### subtitle

> **subtitle**: `string`

Defined in: [elements/timecontrol/src/types.ts:167](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L167)

Subtitle text displayed in the metadata line.

***

### time

> **time**: `string`

Defined in: [elements/timecontrol/src/types.ts:171](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L171)

Formatted time string (if `showTime` is true and item has time).

***

### title

> **title**: `string`

Defined in: [elements/timecontrol/src/types.ts:163](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L163)

Primary title line displayed in bold.

***

### utc?

> `optional` **utc?**: `string`

Defined in: [elements/timecontrol/src/types.ts:203](https://github.com/EOX-A/EOxElements/blob/ffa416ddbc6e2b9202f2c1686718aa2422f08f4f/elements/timecontrol/src/types.ts#L203)

ISO UTC date string.
