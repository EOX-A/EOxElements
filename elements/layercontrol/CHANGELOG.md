# Changelog

## [0.17.5](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.17.4...layercontrol-v0.17.5) (2024-06-25)


### Bug Fixes

* Add support for exclusive groups ([#1058](https://github.com/EOX-A/EOxElements/issues/1058)) ([d05e8d6](https://github.com/EOX-A/EOxElements/commit/d05e8d6833432427b887026e29fd970244a441a9))

## [0.17.4](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.17.3...layercontrol-v0.17.4) (2024-06-12)


### Miscellaneous chores

* Adaptations for updated ol version ([#987](https://github.com/EOX-A/EOxElements/issues/987)) ([5475125](https://github.com/EOX-A/EOxElements/commit/5475125ae7e280550f8ab90e18cad011d478579e))

## [0.17.3](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.17.2...layercontrol-v0.17.3) (2024-04-22)


### Bug Fixes

* Infinite rendering loop ([#875](https://github.com/EOX-A/EOxElements/issues/875)) ([2f7dd5e](https://github.com/EOX-A/EOxElements/commit/2f7dd5e948bc9a7745c4d1f2d06ffce6b6d75162))

## [0.17.2](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.17.1...layercontrol-v0.17.2) (2024-03-25)


### Bug Fixes

* Replace startVals with value in jsonform usage ([#776](https://github.com/EOX-A/EOxElements/issues/776)) ([66e9b66](https://github.com/EOX-A/EOxElements/commit/66e9b6679d8a4f9e38b89aa5a985b50b0c91c989))

## [0.17.1](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.17.0...layercontrol-v0.17.1) (2024-03-11)


### Bug Fixes

* Only use layerConfig element when layerConfig property is used ([#735](https://github.com/EOX-A/EOxElements/issues/735)) ([16d7dc2](https://github.com/EOX-A/EOxElements/commit/16d7dc2524a0af3c685c62d01294cbee5eb3d28b))

## [0.17.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.16.0...layercontrol-v0.17.0) (2024-03-07)


### Features

* Dispatch layerchange event ([#721](https://github.com/EOX-A/EOxElements/issues/721)) ([6f54911](https://github.com/EOX-A/EOxElements/commit/6f54911c7c786caa30fd580dca82fe645387a8af))

## [0.16.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.15.1...layercontrol-v0.16.0) (2024-03-05)


### ⚠ BREAKING CHANGES

* remove @eox/jsonform from layercontrol bundle ([#714](https://github.com/EOX-A/EOxElements/issues/714))

### Bug Fixes

* Remove @eox/jsonform from layercontrol bundle ([#714](https://github.com/EOX-A/EOxElements/issues/714)) ([273cb6c](https://github.com/EOX-A/EOxElements/commit/273cb6c051d34872df79a0465980e124e8043eaf))

## [0.15.1](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.15.0...layercontrol-v0.15.1) (2024-02-19)


### Bug Fixes

* Debounce data change function in layer config ([#656](https://github.com/EOX-A/EOxElements/issues/656)) ([8fc3006](https://github.com/EOX-A/EOxElements/commit/8fc3006e28d38b3e2957012c57d00b8b32526ebe))

## [0.15.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.14.0...layercontrol-v0.15.0) (2024-02-15)


### Features

* Hide styled details marker if no children are in group ([#651](https://github.com/EOX-A/EOxElements/issues/651)) ([37bafeb](https://github.com/EOX-A/EOxElements/commit/37bafeb4b06db6d4db53db996fa64d5e8ae0fe47))


### Bug Fixes

* Don't expand layer if `layerControlExpand` is falsy ([#653](https://github.com/EOX-A/EOxElements/issues/653)) ([3d70769](https://github.com/EOX-A/EOxElements/commit/3d707690e82de29ea585d3ce1de89e37ee9b1af6))
* **test:** Mock map layer order ([#654](https://github.com/EOX-A/EOxElements/issues/654)) ([31c61ac](https://github.com/EOX-A/EOxElements/commit/31c61ac57ad5ba455bc90415626ed8582940d242))

## [0.14.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.13.1...layercontrol-v0.14.0) (2024-01-17)


### Features

* Allow sorting layers by dragging them ([#582](https://github.com/EOX-A/EOxElements/issues/582)) ([fea7392](https://github.com/EOX-A/EOxElements/commit/fea73924a0fff64436f21a21b0c735e331702623))


### Bug Fixes

* Make sure a fallback layer id is rendered in time in order to support sorting ([#588](https://github.com/EOX-A/EOxElements/issues/588)) ([acced90](https://github.com/EOX-A/EOxElements/commit/acced905e93ec89f6ee071e871b217b7423f74e9))
* Properly render single action button ([#581](https://github.com/EOX-A/EOxElements/issues/581)) ([945d9db](https://github.com/EOX-A/EOxElements/commit/945d9dbcf87ceea8d23c359bee6a957c603bc2a1))
* Replace empty button to fix firefox sorting ([#583](https://github.com/EOX-A/EOxElements/issues/583)) ([6d9610a](https://github.com/EOX-A/EOxElements/commit/6d9610a7164542302acc076e5239deb070f78b6d))

## [0.13.1](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.13.0...layercontrol-v0.13.1) (2023-12-22)


### Bug Fixes

* Various unstyled mode, jsdocs and cypress test fixes ([#546](https://github.com/EOX-A/EOxElements/issues/546)) ([370740b](https://github.com/EOX-A/EOxElements/commit/370740be9d7d6b8f060b3c68b56118d033be22a5))

## [0.13.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.12.0...layercontrol-v0.13.0) (2023-12-21)


### Bug Fixes

* **test:** Prevent build fail due to async call ([#539](https://github.com/EOX-A/EOxElements/issues/539)) ([09d1e03](https://github.com/EOX-A/EOxElements/commit/09d1e03698d5f2bc34d9cf316bd48e1bebb1dd8d))


### Code Refactoring

* New structure ([#527](https://github.com/EOX-A/EOxElements/issues/527)) ([9968efb](https://github.com/EOX-A/EOxElements/commit/9968efb1e87933062cd8d550d5afca337cd779b3))

## [0.12.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.11.4...layercontrol-v0.12.0) (2023-12-13)


### Features

* External WMS/XYZ layer adding ([#502](https://github.com/EOX-A/EOxElements/issues/502)) ([9b9e005](https://github.com/EOX-A/EOxElements/commit/9b9e0050355276bb3c5450ae0d3a23bfcbafd7ed))

## [0.11.4](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.11.3...layercontrol-v0.11.4) (2023-12-07)


### Miscellaneous Chores

* Adaptations for eox-map reactive properties ([5121bca](https://github.com/EOX-A/EOxElements/commit/5121bcab7f68ecbee4bdd8899303c6c1b18ca78d))

## [0.11.3](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.11.2...layercontrol-v0.11.3) (2023-12-05)


### Bug Fixes

* Sorting with optional & hidden layers ([#491](https://github.com/EOX-A/EOxElements/issues/491)) ([da132e7](https://github.com/EOX-A/EOxElements/commit/da132e723133b11ca3db916d97e7333ab84df1da))

## [0.11.2](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.11.1...layercontrol-v0.11.2) (2023-11-29)


### Bug Fixes

* Make currently active tab unselectable ([#482](https://github.com/EOX-A/EOxElements/issues/482)) ([dcbb7ff](https://github.com/EOX-A/EOxElements/commit/dcbb7fff987036a53aed3d17120d03b4c585d3cc))
* Mobile sorting improvement and handling of hidden layers ([#344](https://github.com/EOX-A/EOxElements/issues/344)) ([82e12b3](https://github.com/EOX-A/EOxElements/commit/82e12b3c43e64417dcef9a5b321388dcae26c6f6))

## [0.11.1](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.11.0...layercontrol-v0.11.1) (2023-11-23)


### Bug Fixes

* Handle `tileUrlFunction()` use case for `layerConfig` ([#451](https://github.com/EOX-A/EOxElements/issues/451)) ([0e75e6d](https://github.com/EOX-A/EOxElements/commit/0e75e6d818f02dcda086eed3fc60937aa2c175f9))
* Use default rendering for config tool button ([4879325](https://github.com/EOX-A/EOxElements/commit/4879325a3c401bfe9f2864cf9d9fc87030ef7db2))

## [0.11.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.10.0...layercontrol-v0.11.0) (2023-11-21)


### Features

* Added layer config tool with url param controls ([#430](https://github.com/EOX-A/EOxElements/issues/430)) ([75b29b3](https://github.com/EOX-A/EOxElements/commit/75b29b35e8f2e468a8c7c35f3c296549f367f28f))

## [0.10.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.9.0...layercontrol-v0.10.0) (2023-11-16)


### Features

* Add visual feedback if a layer is outside its min/max zoom ([09f5288](https://github.com/EOX-A/EOxElements/commit/09f5288de6e86aab72f8f6cee0ba4cce337c7cfe)), closes [#248](https://github.com/EOX-A/EOxElements/issues/248)


### Bug Fixes

* Update optional layer list after layer removal ([#391](https://github.com/EOX-A/EOxElements/issues/391)) ([36eb916](https://github.com/EOX-A/EOxElements/commit/36eb916cfe3886fd664c261f31f74b487f054125))

## [0.9.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.8.0...layercontrol-v0.9.0) (2023-11-03)


### Features

* Introduce optional shadow + styleOverride ([#386](https://github.com/EOX-A/EOxElements/issues/386)) ([a0a2b80](https://github.com/EOX-A/EOxElements/commit/a0a2b8010d092d254031ac8fa5e4945e2a401c6c))

## [0.8.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.7.1...layercontrol-v0.8.0) (2023-10-31)


### Features

* Introduce layerControlToolsExpand property ([266da0d](https://github.com/EOX-A/EOxElements/commit/266da0df89a6775f7e3def5e5de6b785c963a574))

## [0.7.1](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.7.0...layercontrol-v0.7.1) (2023-10-19)


### Bug Fixes

* Removed icon highlight on hover ([#345](https://github.com/EOX-A/EOxElements/issues/345)) ([68692f9](https://github.com/EOX-A/EOxElements/commit/68692f9f6ac24280086c07601c900d350cafd211))

## [0.7.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.6.8...layercontrol-v0.7.0) (2023-10-12)

### Miscellaneous Chores

- **docs:** Update readme ([47ece11](https://github.com/EOX-A/EOxElements/commit/47ece1152f093bde4761b6ddb4d7cbc553af7376))

## 0.6.8 (2023-10-11)

### Miscellaneous Chores

- Update readme ([82f3feb](https://github.com/EOX-A/EOxElements/commit/82f3feb2cb88965b9042fe5c9c9c0c2ba1e78c75))

## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!--
    Add new changelog entries here.
    Each entry may be annotated with "Added", "Changed", "Removed", and "Fixed" or other sections mentioned in the definition of Keep A Changelog.

    Example release:

    ## [1.0.0] - May 16, 2023

    ### Added
    - New visual identity.

    ### Changed
    - Start using "changelog" over "change log" since it's the common usage.

    ### Removed
    - Section about "changelog" vs "CHANGELOG".

    ### Fixed
    - Fix typos in recent README changes.
    - Update outdated unreleased diff link.
-->

## Unreleased

### Added

- Delete button for layers and groups along with a Cypress unit test.
