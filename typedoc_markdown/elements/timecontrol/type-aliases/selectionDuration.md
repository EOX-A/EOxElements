[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / selectionDuration

# Type Alias: selectionDuration

> **selectionDuration** = `string` \| `number` \| `Record`\<`string`, `number`\>

Defined in: [elements/timecontrol/src/types.ts:239](https://github.com/EOX-A/EOxElements/blob/18ce9e6c9f10fe1dc47c6d133150092d99916cf7/elements/timecontrol/src/types.ts#L239)

Defines the possible time ranges for selection in the time control components.
Strictly supports what dayjs.duration() supports:
- ISO 8601 duration string: 'P1M', 'PT0S', etc.
- Milliseconds: 100
- Dayjs duration object: { months: 1, days: 2 }
