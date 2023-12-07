# Changelog

## [0.12.0](https://github.com/EOX-A/EOxElements/compare/layercontrol-v0.11.3...layercontrol-v0.12.0) (2023-12-07)


### ⚠ BREAKING CHANGES

* introduce reactive properties ([#476](https://github.com/EOX-A/EOxElements/issues/476))

### Features

* Introduce reactive properties ([#476](https://github.com/EOX-A/EOxElements/issues/476)) ([96cf532](https://github.com/EOX-A/EOxElements/commit/96cf532c482e473438f3e8346775c65fa6859234))

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
