[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / selectionDuration

# Type Alias: selectionDuration

> **selectionDuration** = `string` \| `number` \| `Record`\<`string`, `number`\>

Defined in: [elements/timecontrol/src/types.ts:243](https://github.com/EOX-A/EOxElements/blob/19241aa8d6a6e739bb4409c7adb4d44843e6f20f/elements/timecontrol/src/types.ts#L243)

Defines the possible time ranges for selection in the time control components.
Strictly supports what dayjs.duration() supports:
- ISO 8601 duration string: 'P1M', 'PT0S', etc.
- Milliseconds: 100
- Dayjs duration object: { months: 1, days: 2 }
