[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/storytelling](../README.md) / CustomMarkdownItState

# Interface: CustomMarkdownItState

Defined in: [elements/storytelling/src/types.ts:9](https://github.com/EOX-A/EOxElements/blob/e7925417b0f0e6a9fa3e9d8ab83117a09eeea450/elements/storytelling/src/types.ts#L9)

## Extends

- `StateBlock`

## Properties

### blkIndent

> **blkIndent**: `number`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:431

required block content indent (for example, if we are
inside a list, it would be positioned after list marker)

#### Inherited from

`MarkdownIt.StateBlock.blkIndent`

***

### bMarks

> **bMarks**: `number`[]

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:398

line begin offsets for fast jumps

#### Inherited from

`MarkdownIt.StateBlock.bMarks`

***

### bsCount

> **bsCount**: `number`[]

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:423

An amount of virtual spaces (tabs expanded) between beginning
of each line (bMarks) and real beginning of that line.

It exists only as a hack because blockquotes override bMarks
losing information in the process.

It's used only when expanding tabs, you can think about it as
an initial tab length, e.g. bsCount=21 applied to string `\t123`
means first tab should be expanded to 4-21%4 === 3 spaces.

#### Inherited from

`MarkdownIt.StateBlock.bsCount`

***

### ddIndent

> **ddIndent**: `number`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:447

indent of the current dd block (-1 if there isn't any)

#### Inherited from

`MarkdownIt.StateBlock.ddIndent`

***

### eMarks

> **eMarks**: `number`[]

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:402

line end offsets for fast jumps

#### Inherited from

`MarkdownIt.StateBlock.eMarks`

***

### env

> **env**: `any`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:387

#### Inherited from

`MarkdownIt.StateBlock.env`

***

### level

> **level**: `number`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:458

#### Inherited from

`MarkdownIt.StateBlock.level`

***

### line

> **line**: `number`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:435

line index in src

#### Inherited from

`MarkdownIt.StateBlock.line`

***

### lineMax

> **lineMax**: `number`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:439

lines count

#### Inherited from

`MarkdownIt.StateBlock.lineMax`

***

### listIndent

> **listIndent**: `number`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:451

indent of the current list block (-1 if there isn't any)

#### Inherited from

`MarkdownIt.StateBlock.listIndent`

***

### md

> **md**: [`CustomMarkdownIt`](CustomMarkdownIt.md)

Defined in: [elements/storytelling/src/types.ts:10](https://github.com/EOX-A/EOxElements/blob/e7925417b0f0e6a9fa3e9d8ab83117a09eeea450/elements/storytelling/src/types.ts#L10)

link to parser instance

#### Overrides

`MarkdownIt.StateBlock.md`

***

### parentType

> **parentType**: `ParentType`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:456

used in lists to determine if they interrupt a paragraph

#### Inherited from

`MarkdownIt.StateBlock.parentType`

***

### sCount

> **sCount**: `number`[]

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:410

indents for each line (tabs expanded)

#### Inherited from

`MarkdownIt.StateBlock.sCount`

***

### src

> **src**: `string`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:380

#### Inherited from

`MarkdownIt.StateBlock.src`

***

### tight

> **tight**: `boolean`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:443

loose/tight mode for lists

#### Inherited from

`MarkdownIt.StateBlock.tight`

***

### Token

> **Token**: *typeof* `Token`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:494

#### Inherited from

`MarkdownIt.StateBlock.Token`

***

### tokens

> **tokens**: `Token`[]

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:393

#### Inherited from

`MarkdownIt.StateBlock.tokens`

***

### tShift

> **tShift**: `number`[]

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:406

offsets of the first non-space characters (tabs not expanded)

#### Inherited from

`MarkdownIt.StateBlock.tShift`

## Methods

### getLines()

> **getLines**(`begin`, `end`, `indent`, `keepLastLF`): `string`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:492

cut lines range from source.

#### Parameters

##### begin

`number`

##### end

`number`

##### indent

`number`

##### keepLastLF

`boolean`

#### Returns

`string`

#### Inherited from

`MarkdownIt.StateBlock.getLines`

***

### isEmpty()

> **isEmpty**(`line`): `boolean`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:465

#### Parameters

##### line

`number`

#### Returns

`boolean`

#### Inherited from

`MarkdownIt.StateBlock.isEmpty`

***

### push()

> **push**(`type`, `tag`, `nesting`): `Token`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:463

Push new token to "stream".

#### Parameters

##### type

`string`

##### tag

`string`

##### nesting

`Nesting`

#### Returns

`Token`

#### Inherited from

`MarkdownIt.StateBlock.push`

***

### skipChars()

> **skipChars**(`pos`, `code`): `number`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:482

Skip char codes from given position

#### Parameters

##### pos

`number`

##### code

`number`

#### Returns

`number`

#### Inherited from

`MarkdownIt.StateBlock.skipChars`

***

### skipCharsBack()

> **skipCharsBack**(`pos`, `code`, `min`): `number`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:487

Skip char codes reverse from given position - 1

#### Parameters

##### pos

`number`

##### code

`number`

##### min

`number`

#### Returns

`number`

#### Inherited from

`MarkdownIt.StateBlock.skipCharsBack`

***

### skipEmptyLines()

> **skipEmptyLines**(`from`): `number`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:467

#### Parameters

##### from

`number`

#### Returns

`number`

#### Inherited from

`MarkdownIt.StateBlock.skipEmptyLines`

***

### skipSpaces()

> **skipSpaces**(`pos`): `number`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:472

Skip spaces from given position.

#### Parameters

##### pos

`number`

#### Returns

`number`

#### Inherited from

`MarkdownIt.StateBlock.skipSpaces`

***

### skipSpacesBack()

> **skipSpacesBack**(`pos`, `min`): `number`

Defined in: node\_modules/@types/markdown-it/dist/index.cjs.d.ts:477

Skip spaces from given position in reverse.

#### Parameters

##### pos

`number`

##### min

`number`

#### Returns

`number`

#### Inherited from

`MarkdownIt.StateBlock.skipSpacesBack`
