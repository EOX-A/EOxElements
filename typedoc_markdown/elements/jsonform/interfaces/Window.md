[**@eox/elements**](../../../README.md)

***

[@eox/elements](../../../modules.md) / [elements/jsonform](../README.md) / Window

# Interface: Window

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36358

The **`Window`** interface represents a window containing a DOM document; the `document` property points to the DOM document loaded in that window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window)

## Extends

- `EventTarget`.`AnimationFrameProvider`.`GlobalEventHandlers`.`WindowEventHandlers`.`WindowLocalStorage`.`WindowOrWorkerGlobalScope`.`WindowSessionStorage`.`MochaGlobals`

## Indexable

\[`index`: `number`\]: `Window`

## Properties

### ace

> **ace**: `__module`

Defined in: [elements/storytelling/src/types.ts:18](https://github.com/EOX-A/EOxElements/blob/905b0b1d2cf7f908a65bc64db9509b4fe0c20e80/elements/storytelling/src/types.ts#L18)

***

### after

> **after**: `HookFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2279

Execute after running tests.

- _Only available when invoked via the mocha CLI._

#### See

https://mochajs.org/api/global.html#after

***

### afterEach

> **afterEach**: `HookFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2297

Execute after each test case.

- _Only available when invoked via the mocha CLI._

#### See

https://mochajs.org/api/global.html#afterEach

***

### before

> **before**: `HookFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2270

Execute before running tests.

- _Only available when invoked via the mocha CLI._

#### See

https://mochajs.org/api/global.html#before

***

### beforeEach

> **beforeEach**: `HookFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2288

Execute before each test case.

- _Only available when invoked via the mocha CLI._

#### See

https://mochajs.org/api/global.html#beforeEach

***

### caches

> `readonly` **caches**: `CacheStorage`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36892

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)

#### Inherited from

`WindowOrWorkerGlobalScope.caches`

***

### ~~clientInformation~~

> `readonly` **clientInformation**: `Navigator`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36364

#### Deprecated

This is a legacy alias of `navigator`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)

***

### closed

> `readonly` **closed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36370

The **`Window.closed`** read-only property indicates whether the referenced window is closed or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/closed)

***

### context

> **context**: `SuiteFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2311

Describe a "suite" containing nested suites and tests.

- _Only available when invoked via the mocha CLI._

***

### cookieStore

> `readonly` **cookieStore**: `CookieStore`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36376

The **`cookieStore`** read-only property of the Window interface returns a reference to the CookieStore object for the current document context.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/cookieStore)

***

### crossOriginIsolated

> `readonly` **crossOriginIsolated**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36894

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated)

#### Inherited from

`WindowOrWorkerGlobalScope.crossOriginIsolated`

***

### crypto

> `readonly` **crypto**: `Crypto`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36896

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto)

#### Inherited from

`WindowOrWorkerGlobalScope.crypto`

***

### customElements

> `readonly` **customElements**: `CustomElementRegistry`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36382

The **`customElements`** read-only property of the Window interface returns a reference to the CustomElementRegistry object, which can be used to register new custom elements and get information about previously registered custom elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/customElements)

***

### describe

> **describe**: `SuiteFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2304

Describe a "suite" containing nested suites and tests.

- _Only available when invoked via the mocha CLI._

***

### devicePixelRatio

> `readonly` **devicePixelRatio**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36388

The **`devicePixelRatio`** of Window interface returns the ratio of the resolution in _physical pixels_ to the resolution in _CSS pixels_ for the current display device.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio)

***

### document

> `readonly` **document**: `Document`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36394

**`window.document`** returns a reference to the document contained in the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/document)

***

### eoxMapAdvancedOlFormats

> **eoxMapAdvancedOlFormats**: [`OLAdvancedFormats`](../../map/type-aliases/OLAdvancedFormats.md)

Defined in: [elements/map/src/types.ts:242](https://github.com/EOX-A/EOxElements/blob/905b0b1d2cf7f908a65bc64db9509b4fe0c20e80/elements/map/src/types.ts#L242)

***

### eoxMapAdvancedOlLayers

> **eoxMapAdvancedOlLayers**: [`OLAdvancedLayers`](../../map/type-aliases/OLAdvancedLayers.md)

Defined in: [elements/map/src/types.ts:243](https://github.com/EOX-A/EOxElements/blob/905b0b1d2cf7f908a65bc64db9509b4fe0c20e80/elements/map/src/types.ts#L243)

***

### eoxMapAdvancedOlSources

> **eoxMapAdvancedOlSources**: [`OLAdvancedSources`](../../map/type-aliases/OLAdvancedSources.md)

Defined in: [elements/map/src/types.ts:244](https://github.com/EOX-A/EOxElements/blob/905b0b1d2cf7f908a65bc64db9509b4fe0c20e80/elements/map/src/types.ts#L244)

***

### eoxMapGlobe

> **eoxMapGlobe**: `object`

Defined in: [elements/map/src/types.ts:245](https://github.com/EOX-A/EOxElements/blob/905b0b1d2cf7f908a65bc64db9509b4fe0c20e80/elements/map/src/types.ts#L245)

#### create()

> **create**: (`__namedParameters`) => `Globe`

##### Parameters

###### \_\_namedParameters

###### EOxMap

`any`

###### target

`any`

##### Returns

`Globe`

#### refresh()

> **refresh**: () => `void`

##### Returns

`void`

***

### ~~event~~

> `readonly` **event**: `Event`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36401

The read-only Window property **`event`** returns the Event which is currently being handled by the site's code.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/event)

***

### ~~external~~

> `readonly` **external**: `External`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36408

The `external` property of the Window API returns an instance of the `External` interface, which was intended to contain functions related to adding external search providers to the browser.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/external)

***

### frameElement

> `readonly` **frameElement**: `Element`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36414

The **`Window.frameElement`** property returns the element (such as iframe or object) in which the window is embedded.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frameElement)

***

### frames

> `readonly` **frames**: `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36420

Returns the window itself, which is an array-like object, listing the direct sub-frames of the current window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frames)

***

### history

> `readonly` **history**: `History`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36426

The `Window.history` read-only property returns a reference to the History object, which provides an interface for manipulating the browser _session history_ (pages visited in the tab or frame that the current page is loaded in).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/history)

***

### indexedDB

> `readonly` **indexedDB**: `IDBFactory`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36898

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB)

#### Inherited from

`WindowOrWorkerGlobalScope.indexedDB`

***

### innerHeight

> `readonly` **innerHeight**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36432

The read-only **`innerHeight`** property of the including the height of the horizontal scroll bar, if present.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerHeight)

***

### innerWidth

> `readonly` **innerWidth**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36438

The read-only Window property **`innerWidth`** returns the interior width of the window in pixels (that is, the width of the window's layout viewport).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerWidth)

***

### isSecureContext

> `readonly` **isSecureContext**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36900

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext)

#### Inherited from

`WindowOrWorkerGlobalScope.isSecureContext`

***

### it

> **it**: `TestFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2332

Describes a test case.

- _Only available when invoked via the mocha CLI._

***

### length

> `readonly` **length**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36444

Returns the number of frames (either frame or A number.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/length)

***

### localStorage

> `readonly` **localStorage**: `Storage`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36883

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

#### Inherited from

`WindowLocalStorage.localStorage`

***

### locationbar

> `readonly` **locationbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36457

Returns the `locationbar` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/locationbar)

***

### menubar

> `readonly` **menubar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36463

Returns the `menubar` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/menubar)

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36469

The `Window.name` property gets/sets the name of the window's browsing context.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/name)

***

### navigator

> `readonly` **navigator**: `Navigator`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36475

The **`Window.navigator`** read-only property returns a reference to the Navigator object, which has methods and properties about the application running the script.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)

***

### onabort()

> **onabort**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12743

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`UIEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onabort`

***

### onafterprint()

> **onafterprint**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36832

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/afterprint_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onafterprint`

***

### onanimationcancel()

> **onanimationcancel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12745

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onanimationcancel`

***

### onanimationend()

> **onanimationend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12747

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onanimationend`

***

### onanimationiteration()

> **onanimationiteration**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12749

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onanimationiteration`

***

### onanimationstart()

> **onanimationstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12751

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onanimationstart`

***

### onauxclick()

> **onauxclick**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12753

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onauxclick`

***

### onbeforeinput()

> **onbeforeinput**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12755

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`InputEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onbeforeinput`

***

### onbeforematch()

> **onbeforematch**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12757

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforematch_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onbeforematch`

***

### onbeforeprint()

> **onbeforeprint**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36834

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeprint_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onbeforeprint`

***

### onbeforetoggle()

> **onbeforetoggle**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12759

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`ToggleEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onbeforetoggle`

***

### onbeforeunload()

> **onbeforeunload**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36836

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`BeforeUnloadEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onbeforeunload`

***

### onblur()

> **onblur**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12761

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`FocusEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onblur`

***

### oncancel()

> **oncancel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12763

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.oncancel`

***

### oncanplay()

> **oncanplay**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12765

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.oncanplay`

***

### oncanplaythrough()

> **oncanplaythrough**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12767

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.oncanplaythrough`

***

### onchange()

> **onchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12769

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onchange`

***

### onclick()

> **onclick**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12771

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onclick`

***

### onclose()

> **onclose**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12773

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onclose`

***

### oncontextlost()

> **oncontextlost**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12775

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextlost_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.oncontextlost`

***

### oncontextmenu()

> **oncontextmenu**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12777

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.oncontextmenu`

***

### oncontextrestored()

> **oncontextrestored**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12779

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.oncontextrestored`

***

### oncopy()

> **oncopy**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12781

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`ClipboardEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.oncopy`

***

### oncuechange()

> **oncuechange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12783

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.oncuechange`

***

### oncut()

> **oncut**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12785

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`ClipboardEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.oncut`

***

### ondblclick()

> **ondblclick**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12787

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ondblclick`

***

### ondevicemotion()

> **ondevicemotion**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36481

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicemotion_event)

#### Parameters

##### this

`Window`

##### ev

`DeviceMotionEvent`

#### Returns

`any`

***

### ondeviceorientation()

> **ondeviceorientation**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36487

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientation_event)

#### Parameters

##### this

`Window`

##### ev

`DeviceOrientationEvent`

#### Returns

`any`

***

### ondeviceorientationabsolute()

> **ondeviceorientationabsolute**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36493

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientationabsolute_event)

#### Parameters

##### this

`Window`

##### ev

`DeviceOrientationEvent`

#### Returns

`any`

***

### ondrag()

> **ondrag**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12789

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ondrag`

***

### ondragend()

> **ondragend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12791

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ondragend`

***

### ondragenter()

> **ondragenter**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12793

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ondragenter`

***

### ondragleave()

> **ondragleave**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12795

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ondragleave`

***

### ondragover()

> **ondragover**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12797

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ondragover`

***

### ondragstart()

> **ondragstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12799

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ondragstart`

***

### ondrop()

> **ondrop**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12801

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ondrop`

***

### ondurationchange()

> **ondurationchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12803

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ondurationchange`

***

### onemptied()

> **onemptied**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12805

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onemptied`

***

### onended()

> **onended**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12807

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onended`

***

### onerror

> **onerror**: `OnErrorEventHandlerNonNull`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12809

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)

#### Inherited from

`GlobalEventHandlers.onerror`

***

### onfocus()

> **onfocus**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12811

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`FocusEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onfocus`

***

### onformdata()

> **onformdata**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12813

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`FormDataEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onformdata`

***

### ongamepadconnected()

> **ongamepadconnected**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36838

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepadconnected_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`GamepadEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.ongamepadconnected`

***

### ongamepaddisconnected()

> **ongamepaddisconnected**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36840

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepaddisconnected_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`GamepadEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.ongamepaddisconnected`

***

### ongotpointercapture()

> **ongotpointercapture**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12815

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ongotpointercapture`

***

### onhashchange()

> **onhashchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36842

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/hashchange_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`HashChangeEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onhashchange`

***

### oninput()

> **oninput**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12817

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.oninput`

***

### oninvalid()

> **oninvalid**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12819

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.oninvalid`

***

### onkeydown()

> **onkeydown**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12821

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`KeyboardEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onkeydown`

***

### ~~onkeypress()~~

> **onkeypress**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12827

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`KeyboardEvent`

#### Returns

`any`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)

#### Inherited from

`GlobalEventHandlers.onkeypress`

***

### onkeyup()

> **onkeyup**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12829

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`KeyboardEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onkeyup`

***

### onlanguagechange()

> **onlanguagechange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36844

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/languagechange_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onlanguagechange`

***

### onload()

> **onload**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12831

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/load_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onload`

***

### onloadeddata()

> **onloadeddata**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12833

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onloadeddata`

***

### onloadedmetadata()

> **onloadedmetadata**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12835

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onloadedmetadata`

***

### onloadstart()

> **onloadstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12837

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onloadstart`

***

### onlostpointercapture()

> **onlostpointercapture**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12839

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onlostpointercapture`

***

### onmessage()

> **onmessage**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36846

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/message_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`MessageEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onmessage`

***

### onmessageerror()

> **onmessageerror**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36848

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/messageerror_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`MessageEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onmessageerror`

***

### onmousedown()

> **onmousedown**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12841

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onmousedown`

***

### onmouseenter()

> **onmouseenter**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12843

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onmouseenter`

***

### onmouseleave()

> **onmouseleave**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12845

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onmouseleave`

***

### onmousemove()

> **onmousemove**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12847

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onmousemove`

***

### onmouseout()

> **onmouseout**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12849

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onmouseout`

***

### onmouseover()

> **onmouseover**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12851

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onmouseover`

***

### onmouseup()

> **onmouseup**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12853

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onmouseup`

***

### onoffline()

> **onoffline**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36850

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/offline_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onoffline`

***

### ononline()

> **ononline**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36852

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/online_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.ononline`

***

### ~~onorientationchange()~~

> **onorientationchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36499

#### Parameters

##### this

`Window`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientationchange_event)

***

### onpagehide()

> **onpagehide**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36854

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagehide_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PageTransitionEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onpagehide`

***

### onpagereveal()

> **onpagereveal**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36856

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagereveal_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PageRevealEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onpagereveal`

***

### onpageshow()

> **onpageshow**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36858

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageshow_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PageTransitionEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onpageshow`

***

### onpageswap()

> **onpageswap**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36860

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageswap_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PageSwapEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onpageswap`

***

### onpaste()

> **onpaste**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12855

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`ClipboardEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onpaste`

***

### onpause()

> **onpause**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12857

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onpause`

***

### onplay()

> **onplay**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12859

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onplay`

***

### onplaying()

> **onplaying**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12861

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onplaying`

***

### onpointercancel()

> **onpointercancel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12863

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onpointercancel`

***

### onpointerdown()

> **onpointerdown**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12865

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onpointerdown`

***

### onpointerenter()

> **onpointerenter**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12867

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onpointerenter`

***

### onpointerleave()

> **onpointerleave**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12869

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onpointerleave`

***

### onpointermove()

> **onpointermove**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12871

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onpointermove`

***

### onpointerout()

> **onpointerout**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12873

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onpointerout`

***

### onpointerover()

> **onpointerover**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12875

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onpointerover`

***

### onpointerrawupdate()

> **onpointerrawupdate**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12881

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerrawupdate_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onpointerrawupdate`

***

### onpointerup()

> **onpointerup**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12883

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onpointerup`

***

### onpopstate()

> **onpopstate**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36862

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PopStateEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onpopstate`

***

### onprogress()

> **onprogress**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12885

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`ProgressEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onprogress`

***

### onratechange()

> **onratechange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12887

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onratechange`

***

### onrejectionhandled()

> **onrejectionhandled**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36864

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/rejectionhandled_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PromiseRejectionEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onrejectionhandled`

***

### onreset()

> **onreset**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12889

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onreset`

***

### onresize()

> **onresize**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12891

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`UIEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onresize`

***

### onscroll()

> **onscroll**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12893

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onscroll`

***

### onscrollend()

> **onscrollend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12895

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onscrollend`

***

### onsecuritypolicyviolation()

> **onsecuritypolicyviolation**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12897

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`SecurityPolicyViolationEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onsecuritypolicyviolation`

***

### onseeked()

> **onseeked**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12899

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onseeked`

***

### onseeking()

> **onseeking**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12901

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onseeking`

***

### onselect()

> **onselect**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12903

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onselect`

***

### onselectionchange()

> **onselectionchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12905

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onselectionchange`

***

### onselectstart()

> **onselectstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12907

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onselectstart`

***

### onslotchange()

> **onslotchange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12909

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onslotchange`

***

### onstalled()

> **onstalled**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12911

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onstalled`

***

### onstorage()

> **onstorage**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36866

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/storage_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`StorageEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onstorage`

***

### onsubmit()

> **onsubmit**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12913

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`SubmitEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onsubmit`

***

### onsuspend()

> **onsuspend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12915

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onsuspend`

***

### ontimeupdate()

> **ontimeupdate**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12917

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ontimeupdate`

***

### ontoggle()

> **ontoggle**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12919

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`ToggleEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ontoggle`

***

### ontouchcancel()?

> `optional` **ontouchcancel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12921

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ontouchcancel`

***

### ontouchend()?

> `optional` **ontouchend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12923

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ontouchend`

***

### ontouchmove()?

> `optional` **ontouchmove**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12925

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ontouchmove`

***

### ontouchstart()?

> `optional` **ontouchstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12927

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ontouchstart`

***

### ontransitioncancel()

> **ontransitioncancel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12929

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ontransitioncancel`

***

### ontransitionend()

> **ontransitionend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12931

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ontransitionend`

***

### ontransitionrun()

> **ontransitionrun**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12933

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ontransitionrun`

***

### ontransitionstart()

> **ontransitionstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12935

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.ontransitionstart`

***

### onunhandledrejection()

> **onunhandledrejection**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36868

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unhandledrejection_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PromiseRejectionEvent`

#### Returns

`any`

#### Inherited from

`WindowEventHandlers.onunhandledrejection`

***

### ~~onunload()~~

> **onunload**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36874

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unload_event)

#### Inherited from

`WindowEventHandlers.onunload`

***

### onvolumechange()

> **onvolumechange**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12937

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onvolumechange`

***

### onwaiting()

> **onwaiting**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12939

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onwaiting`

***

### ~~onwebkitanimationend()~~

> **onwebkitanimationend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12945

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

`GlobalEventHandlers.onwebkitanimationend`

***

### ~~onwebkitanimationiteration()~~

> **onwebkitanimationiteration**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12951

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationiteration`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

`GlobalEventHandlers.onwebkitanimationiteration`

***

### ~~onwebkitanimationstart()~~

> **onwebkitanimationstart**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12957

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationstart`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

`GlobalEventHandlers.onwebkitanimationstart`

***

### ~~onwebkittransitionend()~~

> **onwebkittransitionend**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12963

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `ontransitionend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

`GlobalEventHandlers.onwebkittransitionend`

***

### onwheel()

> **onwheel**: (`this`, `ev`) => `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12965

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`WheelEvent`

#### Returns

`any`

#### Inherited from

`GlobalEventHandlers.onwheel`

***

### opener

> **opener**: `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36505

The Window interface's **`opener`** property returns a reference to the window that opened the window, either with Window.open, or by navigating a link with a `target` attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/opener)

***

### ~~orientation~~

> `readonly` **orientation**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36512

Returns the orientation in degrees (in 90-degree increments) of the viewport relative to the device's natural orientation.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientation)

***

### origin

> `readonly` **origin**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36902

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin)

#### Inherited from

`WindowOrWorkerGlobalScope.origin`

***

### originAgentCluster

> `readonly` **originAgentCluster**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36518

The **`originAgentCluster`** read-only property of the Window interface returns `true` if this window belongs to an _origin-keyed agent cluster_: this means that the operating system has provided dedicated resources (for example an operating system process) to this window's origin that are not shared with windows from other origins.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/originAgentCluster)

***

### outerHeight

> `readonly` **outerHeight**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36524

The **`Window.outerHeight`** read-only property returns the height in pixels of the whole browser window, including any sidebar, window chrome, and window-resizing borders/handles.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerHeight)

***

### outerWidth

> `readonly` **outerWidth**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36530

**`Window.outerWidth`** read-only property returns the width of the outside of the browser window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerWidth)

***

### pageXOffset

> `readonly` **pageXOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36532

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)

***

### pageYOffset

> `readonly` **pageYOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36534

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)

***

### parent

> `readonly` **parent**: `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36540

The **`Window.parent`** property is a reference to the parent of the current window or subframe.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/parent)

***

### performance

> `readonly` **performance**: `Performance`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36904

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance)

#### Inherited from

`WindowOrWorkerGlobalScope.performance`

***

### personalbar

> `readonly` **personalbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36546

Returns the `personalbar` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/personalbar)

***

### run()

> **run**: () => `void`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2405

Triggers root suite execution.

- _Only available if flag --delay is passed into Mocha._
- _Only available when invoked via the mocha CLI._

#### Returns

`void`

#### See

https://mochajs.org/api/global.html#runWithSuite

***

### screen

> `readonly` **screen**: `Screen`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36552

The Window property **`screen`** returns a reference to the screen object associated with the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screen)

***

### screenLeft

> `readonly` **screenLeft**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36558

The **`Window.screenLeft`** read-only property returns the horizontal distance, in CSS pixels, from the left border of the user's browser viewport to the left side of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenLeft)

***

### screenTop

> `readonly` **screenTop**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36564

The **`Window.screenTop`** read-only property returns the vertical distance, in CSS pixels, from the top border of the user's browser viewport to the top side of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenTop)

***

### screenX

> `readonly` **screenX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36570

The **`Window.screenX`** read-only property returns the horizontal distance, in CSS pixels, of the left border of the user's browser viewport to the left side of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenX)

***

### screenY

> `readonly` **screenY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36576

The **`Window.screenY`** read-only property returns the vertical distance, in CSS pixels, of the top border of the user's browser viewport to the top edge of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenY)

***

### scrollbars

> `readonly` **scrollbars**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36594

Returns the `scrollbars` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollbars)

***

### scrollX

> `readonly` **scrollX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36582

The read-only **`scrollX`** property of the Window interface returns the number of pixels by which the document is currently scrolled horizontally.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)

***

### scrollY

> `readonly` **scrollY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36588

The read-only **`scrollY`** property of the Window interface returns the number of pixels by which the document is currently scrolled vertically.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)

***

### self

> `readonly` **self**: `Window` & *typeof* `globalThis`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36600

The **`Window.self`** read-only property returns the window itself, as a WindowProxy.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/self)

***

### sessionStorage

> `readonly` **sessionStorage**: `Storage`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36932

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)

#### Inherited from

`WindowSessionStorage.sessionStorage`

***

### setup

> **setup**: `HookFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2380

Execute before each test case.

- _Only available when invoked via the mocha CLI._

#### See

https://mochajs.org/api/global.html#beforeEach

***

### SimpleMDE

> **SimpleMDE**: `object`

Defined in: [elements/storytelling/src/types.ts:17](https://github.com/EOX-A/EOxElements/blob/905b0b1d2cf7f908a65bc64db9509b4fe0c20e80/elements/storytelling/src/types.ts#L17)

***

### specify

> **specify**: `TestFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2339

Describes a test case.

- _Only available when invoked via the mocha CLI._

***

### speechSynthesis

> `readonly` **speechSynthesis**: `SpeechSynthesis`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36606

The `speechSynthesis` read-only property of the Window object returns a SpeechSynthesis object, which is the entry point into using Web Speech API speech synthesis functionality.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/speechSynthesis)

***

### ~~status~~

> **status**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36613

The **`status`** property of the bar at the bottom of the browser window.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/status)

***

### statusbar

> `readonly` **statusbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36619

Returns the `statusbar` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/statusbar)

***

### suite

> **suite**: `SuiteFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2396

Describe a "suite" containing nested suites and tests.

- _Only available when invoked via the mocha CLI._

***

### suiteSetup

> **suiteSetup**: `HookFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2362

Execute before running tests.

- _Only available when invoked via the mocha CLI._

#### See

https://mochajs.org/api/global.html#before

***

### suiteTeardown

> **suiteTeardown**: `HookFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2371

Execute after running tests.

- _Only available when invoked via the mocha CLI._

#### See

https://mochajs.org/api/global.html#after

***

### tcRangeSlider

> **tcRangeSlider**: *typeof* `TCRangeSlider`

Defined in: node\_modules/toolcool-range-slider/index.d.ts:279

***

### tcRangeSliderObservedAttr

> **tcRangeSliderObservedAttr**: `string`[]

Defined in: node\_modules/toolcool-range-slider/index.d.ts:278

***

### tcRangeSliderPlugins

> **tcRangeSliderPlugins**: () => `IPlugin`[]

Defined in: node\_modules/toolcool-range-slider/index.d.ts:277

#### Returns

`IPlugin`

***

### teardown

> **teardown**: `HookFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2389

Execute after each test case.

- _Only available when invoked via the mocha CLI._

#### See

https://mochajs.org/api/global.html#afterEach

***

### test

> **test**: `TestFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2403

Describes a test case.

- _Only available when invoked via the mocha CLI._

***

### toolbar

> `readonly` **toolbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36625

Returns the `toolbar` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/toolbar)

***

### top

> `readonly` **top**: `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36631

Returns a reference to the topmost window in the window hierarchy.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/top)

***

### visualViewport

> `readonly` **visualViewport**: `VisualViewport`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36637

The **`visualViewport`** read-only property of the Window interface returns a VisualViewport object representing the visual viewport for a given window, or `null` if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/visualViewport)

***

### window

> `readonly` **window**: `Window` & *typeof* `globalThis`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36643

The **`window`** property of a Window object points to the window object itself.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/window)

***

### xcontext

> **xcontext**: `PendingSuiteFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2325

Pending suite.

- _Only available when invoked via the mocha CLI._

***

### xdescribe

> **xdescribe**: `PendingSuiteFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2318

Pending suite.

- _Only available when invoked via the mocha CLI._

***

### xit

> **xit**: `PendingTestFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2346

Describes a pending test case.

- _Only available when invoked via the mocha CLI._

***

### xspecify

> **xspecify**: `PendingTestFunction`

Defined in: node\_modules/cypress/types/mocha/index.d.ts:2353

Describes a pending test case.

- _Only available when invoked via the mocha CLI._

## Accessors

### location

#### Get Signature

> **get** **location**(): `Location`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36450

The **`Window.location`** read-only property returns a Location object with information about the current location of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/location)

##### Returns

`Location`

#### Set Signature

> **set** **location**(`href`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36451

##### Parameters

###### href

`string`

##### Returns

`void`

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36795

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof `WindowEventMap`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

##### Overrides

`EventTarget.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36796

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

##### Overrides

`EventTarget.addEventListener`

***

### alert()

> **alert**(`message?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36649

`window.alert()` instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/alert)

#### Parameters

##### message?

`any`

#### Returns

`void`

***

### atob()

> **atob**(`data`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36906

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob)

#### Parameters

##### data

`string`

#### Returns

`string`

#### Inherited from

`WindowOrWorkerGlobalScope.atob`

***

### ~~blur()~~

> **blur**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36656

The **`Window.blur()`** method does nothing.

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/blur)

***

### btoa()

> **btoa**(`data`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36908

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa)

#### Parameters

##### data

`string`

#### Returns

`string`

#### Inherited from

`WindowOrWorkerGlobalScope.btoa`

***

### cancelAnimationFrame()

> **cancelAnimationFrame**(`handle`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3133

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)

#### Parameters

##### handle

`number`

#### Returns

`void`

#### Inherited from

`AnimationFrameProvider.cancelAnimationFrame`

***

### cancelIdleCallback()

> **cancelIdleCallback**(`handle`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36662

The **`window.cancelIdleCallback()`** method cancels a callback previously scheduled with window.requestIdleCallback().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/cancelIdleCallback)

#### Parameters

##### handle

`number`

#### Returns

`void`

***

### ~~captureEvents()~~

> **captureEvents**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36669

The **`Window.captureEvents()`** method does nothing.

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/captureEvents)

***

### clearInterval()

> **clearInterval**(`id`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36910

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearInterval)

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

`WindowOrWorkerGlobalScope.clearInterval`

***

### clearTimeout()

> **clearTimeout**(`id`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36912

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout)

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

`WindowOrWorkerGlobalScope.clearTimeout`

***

### close()

> **close**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36675

The **`Window.close()`** method closes the current window, or the window on which it was called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/close)

#### Returns

`void`

***

### confirm()

> **confirm**(`message?`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36681

`window.confirm()` instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/confirm)

#### Parameters

##### message?

`string`

#### Returns

`boolean`

***

### createImageBitmap()

#### Call Signature

> **createImageBitmap**(`image`, `options?`): `Promise`\<`ImageBitmap`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36914

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/createImageBitmap)

##### Parameters

###### image

`ImageBitmapSource`

###### options?

`ImageBitmapOptions`

##### Returns

`Promise`\<`ImageBitmap`\>

##### Inherited from

`WindowOrWorkerGlobalScope.createImageBitmap`

#### Call Signature

> **createImageBitmap**(`image`, `sx`, `sy`, `sw`, `sh`, `options?`): `Promise`\<`ImageBitmap`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36915

##### Parameters

###### image

`ImageBitmapSource`

###### sx

`number`

###### sy

`number`

###### sw

`number`

###### sh

`number`

###### options?

`ImageBitmapOptions`

##### Returns

`Promise`\<`ImageBitmap`\>

##### Inherited from

`WindowOrWorkerGlobalScope.createImageBitmap`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11575

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

##### event

`Event`

#### Returns

`boolean`

#### Inherited from

`EventTarget.dispatchEvent`

***

### fetch()

> **fetch**(`input`, `init?`): `Promise`\<`Response`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36917

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

#### Parameters

##### input

`RequestInfo` | `URL`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Inherited from

`WindowOrWorkerGlobalScope.fetch`

***

### focus()

> **focus**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36687

Makes a request to bring the window to the front.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/focus)

#### Returns

`void`

***

### getComputedStyle()

> **getComputedStyle**(`elt`, `pseudoElt?`): `CSSStyleDeclaration`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36693

The **`Window.getComputedStyle()`** method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle)

#### Parameters

##### elt

`Element`

##### pseudoElt?

`string`

#### Returns

`CSSStyleDeclaration`

***

### getSelection()

> **getSelection**(): `Selection`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36699

The **`getSelection()`** method of the Window interface returns the Selection object associated with the window's document, representing the range of text selected by the user or the current position of the caret.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getSelection)

#### Returns

`Selection`

***

### matchMedia()

> **matchMedia**(`query`): `MediaQueryList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36705

The Window interface's **`matchMedia()`** method returns a new MediaQueryList object that can then be used to determine if the document matches the media query string, as well as to monitor the document to detect when it matches (or stops matching) that media query.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)

#### Parameters

##### query

`string`

#### Returns

`MediaQueryList`

***

### moveBy()

> **moveBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36711

The **`moveBy()`** method of the Window interface moves the current window by a specified amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveBy)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### moveTo()

> **moveTo**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36717

The **`moveTo()`** method of the Window interface moves the current window to the specified coordinates.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveTo)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### open()

> **open**(`url?`, `target?`, `features?`): `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36723

The **`open()`** method of the `Window` interface loads a specified resource into a new or existing browsing context (that is, a tab, a window, or an iframe) under a specified name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/open)

#### Parameters

##### url?

`string` | `URL`

##### target?

`string`

##### features?

`string`

#### Returns

`Window`

***

### postMessage()

#### Call Signature

> **postMessage**(`message`, `targetOrigin`, `transfer?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36729

The **`window.postMessage()`** method safely enables cross-origin communication between Window objects; _e.g.,_ between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/postMessage)

##### Parameters

###### message

`any`

###### targetOrigin

`string`

###### transfer?

`Transferable`[]

##### Returns

`void`

#### Call Signature

> **postMessage**(`message`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36730

##### Parameters

###### message

`any`

###### options?

`WindowPostMessageOptions`

##### Returns

`void`

***

### print()

> **print**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36736

Opens the print dialog to print the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/print)

#### Returns

`void`

***

### prompt()

> **prompt**(`message?`, `_default?`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36742

`window.prompt()` instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/prompt)

#### Parameters

##### message?

`string`

##### \_default?

`string`

#### Returns

`string`

***

### queueMicrotask()

> **queueMicrotask**(`callback`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36919

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/queueMicrotask)

#### Parameters

##### callback

`VoidFunction`

#### Returns

`void`

#### Inherited from

`WindowOrWorkerGlobalScope.queueMicrotask`

***

### ~~releaseEvents()~~

> **releaseEvents**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36749

Releases the window from trapping events of a specific type.

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/releaseEvents)

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36797

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof `WindowEventMap`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

##### Overrides

`EventTarget.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36798

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

##### Overrides

`EventTarget.removeEventListener`

***

### reportError()

> **reportError**(`e`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36921

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/reportError)

#### Parameters

##### e

`any`

#### Returns

`void`

#### Inherited from

`WindowOrWorkerGlobalScope.reportError`

***

### requestAnimationFrame()

> **requestAnimationFrame**(`callback`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3135

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)

#### Parameters

##### callback

`FrameRequestCallback`

#### Returns

`number`

#### Inherited from

`AnimationFrameProvider.requestAnimationFrame`

***

### requestIdleCallback()

> **requestIdleCallback**(`callback`, `options?`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36755

The **`window.requestIdleCallback()`** method queues a function to be called during a browser's idle periods.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/requestIdleCallback)

#### Parameters

##### callback

`IdleRequestCallback`

##### options?

`IdleRequestOptions`

#### Returns

`number`

***

### resizeBy()

> **resizeBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36761

The **`Window.resizeBy()`** method resizes the current window by a specified amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeBy)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### resizeTo()

> **resizeTo**(`width`, `height`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36767

The **`Window.resizeTo()`** method dynamically resizes the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeTo)

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### scroll()

#### Call Signature

> **scroll**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36773

The **`Window.scroll()`** method scrolls the window to a particular place in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scroll)

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

#### Call Signature

> **scroll**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36774

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

***

### scrollBy()

#### Call Signature

> **scrollBy**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36780

The **`Window.scrollBy()`** method scrolls the document in the window by the given amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollBy)

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

#### Call Signature

> **scrollBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36781

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

***

### scrollTo()

#### Call Signature

> **scrollTo**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36787

**`Window.scrollTo()`** scrolls to a particular set of coordinates in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollTo)

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

#### Call Signature

> **scrollTo**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36788

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

***

### setInterval()

> **setInterval**(`handler`, `timeout?`, ...`arguments?`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36923

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setInterval)

#### Parameters

##### handler

`TimerHandler`

##### timeout?

`number`

##### arguments?

...`any`[]

#### Returns

`number`

#### Inherited from

`WindowOrWorkerGlobalScope.setInterval`

***

### setTimeout()

> **setTimeout**(`handler`, `timeout?`, ...`arguments?`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36925

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setTimeout)

#### Parameters

##### handler

`TimerHandler`

##### timeout?

`number`

##### arguments?

...`any`[]

#### Returns

`number`

#### Inherited from

`WindowOrWorkerGlobalScope.setTimeout`

***

### stop()

> **stop**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36794

The **`window.stop()`** stops further resource loading in the current browsing context, equivalent to the stop button in the browser.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/stop)

#### Returns

`void`

***

### structuredClone()

> **structuredClone**\<`T`\>(`value`, `options?`): `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36927

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/structuredClone)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### value

`T`

##### options?

`StructuredSerializeOptions`

#### Returns

`T`

#### Inherited from

`WindowOrWorkerGlobalScope.structuredClone`
