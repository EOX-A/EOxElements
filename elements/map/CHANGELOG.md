# Changelog

## [1.5.1](https://github.com/EOX-A/EOxElements/compare/map-v1.5.0...map-v1.5.1) (2024-04-02)


### Bug Fixes

* Update default geolocation control icon ([#802](https://github.com/EOX-A/EOxElements/issues/802)) ([4119da7](https://github.com/EOX-A/EOxElements/commit/4119da7054e0f7dbc4b90c100897672b2933cc1b))

## [1.5.0](https://github.com/EOX-A/EOxElements/compare/map-v1.4.0...map-v1.5.0) (2024-03-25)


### Features

* Custom WMTSCapabilities Source ([#767](https://github.com/EOX-A/EOxElements/issues/767)) ([0186a4f](https://github.com/EOX-A/EOxElements/commit/0186a4f46ade37b4cc105b8bfbc81cd0cf15eeb7))
* Geolocation control ([#769](https://github.com/EOX-A/EOxElements/issues/769)) ([10ae84b](https://github.com/EOX-A/EOxElements/commit/10ae84b4f9687e575df05c52fbdb15a23f80c3c9))


### Bug Fixes

* Add fallback values if config properties are not defined ([#772](https://github.com/EOX-A/EOxElements/issues/772)) ([e6fd179](https://github.com/EOX-A/EOxElements/commit/e6fd179e270db509e988d6da5f807e9bc767498d))

## [1.4.0](https://github.com/EOX-A/EOxElements/compare/map-v1.3.0...map-v1.4.0) (2024-03-13)


### Features

* Switch projections & allow advanced projections ([#730](https://github.com/EOX-A/EOxElements/issues/730)) ([6a1a544](https://github.com/EOX-A/EOxElements/commit/6a1a544514eb6776895eee3a2a8d510521f052b3))


### Bug Fixes

* Refresh source of VectorLayer after projection change ([#733](https://github.com/EOX-A/EOxElements/issues/733)) ([4947ec8](https://github.com/EOX-A/EOxElements/commit/4947ec822db8535b45bbf7b5a3bfa686502694ca))

## [1.3.0](https://github.com/EOX-A/EOxElements/compare/map-v1.2.0...map-v1.3.0) (2024-02-26)


### Features

* Feature editor with shape upload and drag&drop ([#649](https://github.com/EOX-A/EOxElements/issues/649)) ([c21eaf6](https://github.com/EOX-A/EOxElements/commit/c21eaf658217a642f54982dfb1d094d1b8da0bf8))

### Miscellaneous Chores

* Update ol versions to ^9.0.0 ([#689](https://github.com/EOX-A/EOxElements/issues/689)) ([71acb56](https://github.com/EOX-A/EOxElements/commit/71acb560fa99a15688519af0256e6c8c4a2882da))

## [1.2.0](https://github.com/EOX-A/EOxElements/compare/map-v1.1.1...map-v1.2.0) (2024-01-19)


### Features

* Accidental scrolling prevention via `preventScroll ` property / `prevent-scroll` attribute ([#569](https://github.com/EOX-A/EOxElements/issues/569)) ([89a6878](https://github.com/EOX-A/EOxElements/commit/89a68788edf0c65ed8cfeb973337e06d694506a8))


### Bug Fixes

* Consider active inside listener ([#593](https://github.com/EOX-A/EOxElements/issues/593)) ([bf3bb77](https://github.com/EOX-A/EOxElements/commit/bf3bb773696b671c12c89297e097377081141aaf))

## [1.1.1](https://github.com/EOX-A/EOxElements/compare/map-v1.1.0...map-v1.1.1) (2024-01-16)


### Bug Fixes

* Check if overlay was already instantiated before creating a new one ([#571](https://github.com/EOX-A/EOxElements/issues/571)) ([3349e99](https://github.com/EOX-A/EOxElements/commit/3349e996619c059c419e15a087275fa7a7f9aad4))
* Keep tooltip visible if not emitted by pointermove ([#579](https://github.com/EOX-A/EOxElements/issues/579)) ([8f7d9d2](https://github.com/EOX-A/EOxElements/commit/8f7d9d293f828686b4b4f7c1cfb843a3f960bcbb))

## [1.1.0](https://github.com/EOX-A/EOxElements/compare/map-v1.0.0...map-v1.1.0) (2023-12-21)


### Features

* Pass selection feature as second argument to tooltip `propertyTransform` function ([#544](https://github.com/EOX-A/EOxElements/issues/544)) ([7255643](https://github.com/EOX-A/EOxElements/commit/7255643fefbb33f5ecb9794fb93d6c9b06db7ff8))

## [1.0.0](https://github.com/EOX-A/EOxElements/compare/map-v0.11.0...map-v1.0.0) (2023-12-14)


### ⚠ BREAKING CHANGES

* extract advanced layers & sources into separate bundle ([#515](https://github.com/EOX-A/EOxElements/issues/515))

### Features

* External WMS/XYZ layer adding ([#502](https://github.com/EOX-A/EOxElements/issues/502)) ([9b9e005](https://github.com/EOX-A/EOxElements/commit/9b9e0050355276bb3c5450ae0d3a23bfcbafd7ed))
* Extract advanced layers & sources into separate bundle ([#515](https://github.com/EOX-A/EOxElements/issues/515)) ([2ad7893](https://github.com/EOX-A/EOxElements/commit/2ad7893e2d914d775095d8799e0a821b619a9cc9))
* Introduce config object ([#516](https://github.com/EOX-A/EOxElements/issues/516)) ([394b6ea](https://github.com/EOX-A/EOxElements/commit/394b6eac5439e324f6b4a491a5c95915b741e25f))


### Bug Fixes

* Add missing zIndex sync ([#513](https://github.com/EOX-A/EOxElements/issues/513)) ([5052ed8](https://github.com/EOX-A/EOxElements/commit/5052ed8d5419ce307ab192909dbd4d5a9726cf8c))


### Miscellaneous Chores

* Update readme ([8226f97](https://github.com/EOX-A/EOxElements/commit/8226f9781bc3dc969b71358c453866b96f5f2842))

## [0.11.0](https://github.com/EOX-A/EOxElements/compare/map-v0.10.0...map-v0.11.0) (2023-12-07)


### ⚠ BREAKING CHANGES

* introduce reactive properties ([#476](https://github.com/EOX-A/EOxElements/issues/476))

### Features

* Introduce reactive properties ([#476](https://github.com/EOX-A/EOxElements/issues/476)) ([96cf532](https://github.com/EOX-A/EOxElements/commit/96cf532c482e473438f3e8346775c65fa6859234))

## [0.10.0](https://github.com/EOX-A/EOxElements/compare/map-v0.9.1...map-v0.10.0) (2023-11-27)


### ⚠ BREAKING CHANGES

* introduction of new interaction API ([#400](https://github.com/EOX-A/EOxElements/issues/400))

### Features

* Introduction of new interaction API ([#400](https://github.com/EOX-A/EOxElements/issues/400)) ([808539b](https://github.com/EOX-A/EOxElements/commit/808539b5846b6ac010e3bd7686c0aaf1c5c86cf9))

## [0.9.1](https://github.com/EOX-A/EOxElements/compare/map-v0.9.0...map-v0.9.1) (2023-11-21)


### Miscellaneous Chores

* Adaptations for layerConfig ([#430](https://github.com/EOX-A/EOxElements/issues/430)) ([75b29b3](https://github.com/EOX-A/EOxElements/commit/75b29b35e8f2e468a8c7c35f3c296549f367f28f))

## [0.9.0](https://github.com/EOX-A/EOxElements/compare/map-v0.8.3...map-v0.9.0) (2023-11-16)


### Features

* Add proj4  in order to support custom projections ([#388](https://github.com/EOX-A/EOxElements/issues/388)) ([4cc398c](https://github.com/EOX-A/EOxElements/commit/4cc398cdb913ba1a884952e6ae37f549863b546a))
* Display of drawn feature ([#371](https://github.com/EOX-A/EOxElements/issues/371)) ([43753b6](https://github.com/EOX-A/EOxElements/commit/43753b6e24fd799cc71fa1c41a71df37ca50608e))
* Remove tooltip overlay when pointer leaves ([#389](https://github.com/EOX-A/EOxElements/issues/389)) ([ece6bbd](https://github.com/EOX-A/EOxElements/commit/ece6bbdb2bf0ad7a792051bc01428bbc12811841))

## [0.8.3](https://github.com/EOX-A/EOxElements/compare/map-v0.8.3...map-v0.8.3) (2023-10-17)

### Bug Fixes

- Style selection and update ([#317](https://github.com/EOX-A/EOxElements/issues/317)) ([038502d](https://github.com/EOX-A/EOxElements/commit/038502d2022a7cd5bc9eaf40597b01c92671b3cd))

### Miscellaneous Chores

- Empty release ([b89ee96](https://github.com/EOX-A/EOxElements/commit/b89ee96d0bdc82396db2f66429f902598c6346cd))
- Update readme ([0ae05c8](https://github.com/EOX-A/EOxElements/commit/0ae05c84586f4deaf967f3396cc4ac4076675b74))

## [0.8.3](https://github.com/EOX-A/EOxElements/compare/map-v0.8.2...map-v0.8.3) (2023-10-17)

### Bug Fixes

- Style selection and update ([#317](https://github.com/EOX-A/EOxElements/issues/317)) ([038502d](https://github.com/EOX-A/EOxElements/commit/038502d2022a7cd5bc9eaf40597b01c92671b3cd))

### Miscellaneous Chores

- Empty release ([b89ee96](https://github.com/EOX-A/EOxElements/commit/b89ee96d0bdc82396db2f66429f902598c6346cd))
- Update readme ([0ae05c8](https://github.com/EOX-A/EOxElements/commit/0ae05c84586f4deaf967f3396cc4ac4076675b74))

## [0.8.2](https://github.com/EOX-A/EOxElements/compare/map-v0.8.1...map-v0.8.2) (2023-10-17)

### Bug Fixes

- Style selection and update ([#317](https://github.com/EOX-A/EOxElements/issues/317)) ([038502d](https://github.com/EOX-A/EOxElements/commit/038502d2022a7cd5bc9eaf40597b01c92671b3cd))

## 0.8.1 (2023-10-10)

### Miscellaneous Chores

- Update readme ([0ae05c8](https://github.com/EOX-A/EOxElements/commit/0ae05c84586f4deaf967f3396cc4ac4076675b74))
