[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/timecontrol](../README.md) / selectionDuration

# Type Alias: selectionDuration

> **selectionDuration** = `string` \| `number` \| `Record`\<`string`, `number`\>

Defined in: [elements/timecontrol/src/types.ts:243](https://github.com/EOX-A/EOxElements/blob/9e5e3b46f9061645b899665bc3a8f938d29e2501/elements/timecontrol/src/types.ts#L243)

Defines the possible time ranges for selection in the time control components.
Strictly supports what dayjs.duration() supports:
- ISO 8601 duration string: 'P1M', 'PT0S', etc.
- Milliseconds: 100
- Dayjs duration object: { months: 1, days: 2 }
