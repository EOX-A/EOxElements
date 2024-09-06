# Changelog

## [1.1.0](https://github.com/EOX-A/EOxElements/compare/itemfilter-v1.0.3...itemfilter-v1.1.0) (2024-08-19)


### Features

* Allow setting step in range filter ([#1202](https://github.com/EOX-A/EOxElements/issues/1202)) ([ec22599](https://github.com/EOX-A/EOxElements/commit/ec225990e2d49bbaccc51a56dd2742c83cdf9151))

## [1.0.3](https://github.com/EOX-A/EOxElements/compare/itemfilter-v1.0.2...itemfilter-v1.0.3) (2024-08-05)


### Bug Fixes

* **style:** Highlight on hover and primary color on select ([#1178](https://github.com/EOX-A/EOxElements/issues/1178)) ([bcd557c](https://github.com/EOX-A/EOxElements/commit/bcd557cae699dba502be4772d40f044db33aa518))

## [1.0.2](https://github.com/EOX-A/EOxElements/compare/itemfilter-v1.0.1...itemfilter-v1.0.2) (2024-07-31)


### Bug Fixes

* Added non date format to chip and use title as chip text not key ([#1171](https://github.com/EOX-A/EOxElements/issues/1171)) ([b1d8115](https://github.com/EOX-A/EOxElements/commit/b1d81157684603029876468d9edd115fdb51b292))

## [1.0.1](https://github.com/EOX-A/EOxElements/compare/itemfilter-v1.0.0...itemfilter-v1.0.1) (2024-07-29)


### Bug Fixes

* Support inline mode state change ([#1138](https://github.com/EOX-A/EOxElements/issues/1138)) ([cbe4250](https://github.com/EOX-A/EOxElements/commit/cbe42501d491237fb5b14615fd207f3d929fb56b))

## [1.0.0](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.14.1...itemfilter-v1.0.0) (2024-07-24)


This is a complete rewrite of the itemfilter in JS with many bug fixes

### ⚠ BREAKING CHANGES
- `filter` and `select` events: listeners need to be added to `filter` and `select` events instead of setting `onFilter` and `onSelect` config properties ([842c30e](https://github.com/EOX-A/EOxElements/pull/989/commits/842c30e88849bb78f2951181710921290998e3e6)) ([ccdea8b](https://github.com/EOX-A/EOxElements/pull/989/commits/ccdea8b21884d5ccf20946544dc4c558b7e1d7d6))
- remove `apply` function: the `apply` function has been deprecated, the `items` property needs to be used instead
- remove `config` object: the `config` object has been deprecated, the config properties need to be passed individually ([3826047](https://github.com/EOX-A/EOxElements/pull/989/commits/3826047a8e9a2f802a7ed22c4c3fe7ce479928f6))

### Features
- Nested filter properties ([0c488b9](https://github.com/EOX-A/EOxElements/pull/989/commits/0c488b9c864f9397ccc11dcde6ee86743620f4ed))
- Force filter keys via `filterKeys` ([c1b88db](https://github.com/EOX-A/EOxElements/pull/989/commits/c1b88db289c337c265fd5b1adde0881eb0f21d46))
- Restyling of result list ([#1109](https://github.com/EOX-A/EOxElements/pull/1109)) ([ddae31a](https://github.com/EOX-A/EOxElements/pull/989/commits/ddae31a91c316c2bf5a25f3684bb4cbccbb67dff))
- Deselection of results ([#1109](https://github.com/EOX-A/EOxElements/pull/1109)) ([ddae31a](https://github.com/EOX-A/EOxElements/pull/989/commits/ddae31a91c316c2bf5a25f3684bb4cbccbb67dff))
- Optional subtitles for results ([#1109](https://github.com/EOX-A/EOxElements/pull/1109)) ([ddae31a](https://github.com/EOX-A/EOxElements/pull/989/commits/ddae31a91c316c2bf5a25f3684bb4cbccbb67dff))
- Dropdown in top-layer ([#1125](https://github.com/EOX-A/EOxElements/pull/1125)) ([f121142](https://github.com/EOX-A/EOxElements/pull/989/commits/f12114202c19db9fd802112075cdba91d830c4b0))

### Miscellaneous chores
- Improve and rewrite itemfilter

## [0.14.1](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.14.0...itemfilter-v0.14.1) (2024-06-10)


### Miscellaneous chores

* Adaptations for updated ol version ([#987](https://github.com/EOX-A/EOxElements/issues/987)) ([5475125](https://github.com/EOX-A/EOxElements/commit/5475125ae7e280550f8ab90e18cad011d478579e))

## [0.14.0](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.13.0...itemfilter-v0.14.0) (2024-04-02)


### Features

* Added autoSpreadSingle option to not show summary for single item groups ([#792](https://github.com/EOX-A/EOxElements/issues/792)) ([2c3c6e7](https://github.com/EOX-A/EOxElements/commit/2c3c6e70f1a9fb5d011c7e00eef199273b066386))

## [0.13.0](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.12.1...itemfilter-v0.13.0) (2024-03-06)


### Features

* Introduce reactive `items` property ([#720](https://github.com/EOX-A/EOxElements/issues/720)) ([3281be4](https://github.com/EOX-A/EOxElements/commit/3281be4fdaf42e48ca10184e7ef008be86e957b9))

## [0.12.1](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.12.0...itemfilter-v0.12.1) (2023-12-20)


### Bug Fixes

* StyleOverride access to selectionlist ([#536](https://github.com/EOX-A/EOxElements/issues/536)) ([8620f93](https://github.com/EOX-A/EOxElements/commit/8620f93d417215b6cf34a4c848eb59818d950353))

## [0.12.0](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.11.2...itemfilter-v0.12.0) (2023-12-18)


### Features

* Custom ordering for select and multi select filters ([#526](https://github.com/EOX-A/EOxElements/issues/526)) ([b0ddf52](https://github.com/EOX-A/EOxElements/commit/b0ddf522fc2d4c6850bcf0761406f4f5f1155ddd))

## [0.11.2](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.11.1...itemfilter-v0.11.2) (2023-12-07)


### Miscellaneous Chores

* Adaptations for eox-map reactive properties ([#476](https://github.com/EOX-A/EOxElements/issues/476)) ([96cf532](https://github.com/EOX-A/EOxElements/commit/96cf532c482e473438f3e8346775c65fa6859234))

## [0.11.1](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.11.0...itemfilter-v0.11.1) (2023-11-29)


### Bug Fixes

* Prevent false dirty state when using autocomplete ([#480](https://github.com/EOX-A/EOxElements/issues/480)) ([b41c9d3](https://github.com/EOX-A/EOxElements/commit/b41c9d32ae8fc04c5ddc51030815fec82236c62e))

## [0.11.0](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.10.2...itemfilter-v0.11.0) (2023-11-29)


### Features

* Add reset for individual filters ([#413](https://github.com/EOX-A/EOxElements/issues/413)) ([a415adc](https://github.com/EOX-A/EOxElements/commit/a415adc3c59216daae093720062b9e1c9f488166))


### Bug Fixes

* Calling of inputhandler ([#478](https://github.com/EOX-A/EOxElements/issues/478)) ([74eb5e8](https://github.com/EOX-A/EOxElements/commit/74eb5e89225b9ea4d696a28208bcc47ada734a73))

## [0.10.2](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.10.1...itemfilter-v0.10.2) (2023-11-27)


### Miscellaneous Chores

* Adaptations to new map interaction API ([#400](https://github.com/EOX-A/EOxElements/issues/400)) ([808539b](https://github.com/EOX-A/EOxElements/commit/808539b5846b6ac010e3bd7686c0aaf1c5c86cf9))

## [0.10.1](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.10.0...itemfilter-v0.10.1) (2023-11-20)


### Bug Fixes

* **style:** Max height of scroll container ([5d4b362](https://github.com/EOX-A/EOxElements/commit/5d4b362650b71feee488710d183b944ecad79074))

## [0.10.0](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.9.0...itemfilter-v0.10.0) (2023-11-16)


### Features

* Autocomplete & inline mode ([#422](https://github.com/EOX-A/EOxElements/issues/422)) ([10bdf21](https://github.com/EOX-A/EOxElements/commit/10bdf2192e1dd655fb97ca006b5fa02066fb9de9))


### Bug Fixes

* Remove live directive for checking mode matching ([fdd387b](https://github.com/EOX-A/EOxElements/commit/fdd387b8a5f4508d51dcd008f7b143fdb5eb5255))

## [0.9.0](https://github.com/EOX-A/EOxElements/compare/itemfilter-v0.8.6...itemfilter-v0.9.0) (2023-10-31)


### Features

* Introduce expandResults property to set initial result accordeon state ([97146ad](https://github.com/EOX-A/EOxElements/commit/97146ad219855798ad5abbf8bf9c65b80382833c))

## 0.8.6 (2023-10-11)

### Miscellaneous Chores

- Update readme ([008c36e](https://github.com/EOX-A/EOxElements/commit/008c36ef59f470d6226984e2266aaec44df3ed28))
