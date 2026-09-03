[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / TimeControlPickerOptions

# Type Alias: TimeControlPickerOptions

> **TimeControlPickerOptions** = `object`

Defined in: [elements/timecontrol/src/types.ts:114](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L114)

Configuration options for the time control picker component.

## Properties

### itemTitleKey?

> `optional` **itemTitleKey?**: `string`

Defined in: [elements/timecontrol/src/types.ts:139](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L139)

Property key on the timeline item used to select the primary line in the popup items card
(e.g., `layerName`, `group`, `itemId`, `originalDate`, or custom properties on `timeControlValues`).

***

### popup?

> `optional` **popup?**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:118](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L118)

Whether to display the calendar in a popup mode.

***

### propertyTransform?

> `optional` **propertyTransform?**: (`item`) => [`TimeControlPopupItem`](TimeControlPopupItem.md) \| `string` \| `null` \| `false`

Defined in: [elements/timecontrol/src/types.ts:151](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L151)

Custom transformation function for popup items.

#### Parameters

##### item

[`TimeControlPopupItem`](TimeControlPopupItem.md)

#### Returns

[`TimeControlPopupItem`](TimeControlPopupItem.md) \| `string` \| `null` \| `false`

***

### range?

> `optional` **range?**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:126](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L126)

Whether to enable date range selection.

***

### showDots?

> `optional` **showDots?**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:130](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L130)

Whether to show dots indicating available data on calendar dates.

***

### showItems?

> `optional` **showItems?**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:134](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L134)

Whether to show items in the calendar popup.

***

### showTime?

> `optional` **showTime?**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:143](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L143)

Whether to show time in the popup items card.

***

### timeFormat?

> `optional` **timeFormat?**: `string`

Defined in: [elements/timecontrol/src/types.ts:147](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L147)

Format string for time display in the popup items card.

***

### unstyled?

> `optional` **unstyled?**: `boolean`

Defined in: [elements/timecontrol/src/types.ts:122](https://github.com/EOX-A/EOxElements/blob/26427c9805802a623b4006d7f985e93916964177/elements/timecontrol/src/types.ts#L122)

Whether to disable default styling.
