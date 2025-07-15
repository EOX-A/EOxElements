# Changelog

## [1.23.0](https://github.com/EOX-A/EOxElements/compare/map-v1.22.0...map-v1.23.0) (2025-07-15)


### Features

* Support custom tooltips ([#1761](https://github.com/EOX-A/EOxElements/issues/1761)) ([1d06aa7](https://github.com/EOX-A/EOxElements/commit/1d06aa75ab52e69fab0d33381a5ac566eaad41c3))


### Bug Fixes

* Config with preventScroll causing unwanted dragging ([#1766](https://github.com/EOX-A/EOxElements/issues/1766)) ([5f0a880](https://github.com/EOX-A/EOxElements/commit/5f0a88091ee898458363486f0914089c4c954a0c))
* Optimize config setter to not cause triggers for each property ([#1767](https://github.com/EOX-A/EOxElements/issues/1767)) ([0acba08](https://github.com/EOX-A/EOxElements/commit/0acba0803557e6821c3d4f0b3c54da7899b6554e))
* Show select overlay also on feature borders ([#1763](https://github.com/EOX-A/EOxElements/issues/1763)) ([f766b3d](https://github.com/EOX-A/EOxElements/commit/f766b3d3f29ba293e7dd31946f0d02d1d42b9a3b))

## [1.22.0](https://github.com/EOX-A/EOxElements/compare/map-v1.21.3...map-v1.22.0) (2025-06-30)


### Features

* **style:** Use unified ui package ([#1583](https://github.com/EOX-A/EOxElements/issues/1583)) ([239cdc1](https://github.com/EOX-A/EOxElements/commit/239cdc12d1e792ad77a52b5e8b8e51586e836141))

## [1.21.3](https://github.com/EOX-A/EOxElements/compare/map-v1.21.2...map-v1.21.3) (2025-06-10)


### Bug Fixes

* Min/max zoom was setting the zoom level even when the current min and max level same, which was causing some weird zoom level issue ([#1714](https://github.com/EOX-A/EOxElements/issues/1714)) ([f8cd03d](https://github.com/EOX-A/EOxElements/commit/f8cd03dc61cb9a050e95b0a40d2172dd3ce0e5ef))

## [1.21.2](https://github.com/EOX-A/EOxElements/compare/map-v1.21.1...map-v1.21.2) (2025-05-20)


### Bug Fixes

* Disable zoom in/out buttons when reaching limits ([#1633](https://github.com/EOX-A/EOxElements/issues/1633)) ([0ddca87](https://github.com/EOX-A/EOxElements/commit/0ddca87306d076f038a2f7b4978ccde00ea6dbe8))

## [1.21.1](https://github.com/EOX-A/EOxElements/compare/map-v1.21.0...map-v1.21.1) (2025-05-08)


### Bug Fixes

* Refactor type `EoxLayer` & Generate Layer JSON Schema ([#1615](https://github.com/EOX-A/EOxElements/issues/1615)) ([34dfb3e](https://github.com/EOX-A/EOxElements/commit/34dfb3e717adcb889612712aebf03a94b17e0d67))

## [1.21.0](https://github.com/EOX-A/EOxElements/compare/map-v1.20.0...map-v1.21.0) (2025-04-10)


### Features

* Updated ol package to `10.5.0` ([#1645](https://github.com/EOX-A/EOxElements/issues/1645)) ([76ebcc9](https://github.com/EOX-A/EOxElements/commit/76ebcc94724a4a7a9e695f8885a20eaf307691b6))

## [1.20.0](https://github.com/EOX-A/EOxElements/compare/map-v1.19.4...map-v1.20.0) (2025-03-03)


### Features

* Added new prop to  and ([#1574](https://github.com/EOX-A/EOxElements/issues/1574)) ([dce69d5](https://github.com/EOX-A/EOxElements/commit/dce69d5506a46e430c22c80fbc1a03d0ff2bd541))

## [1.19.4](https://github.com/EOX-A/EOxElements/compare/map-v1.19.3...map-v1.19.4) (2025-02-25)


### Bug Fixes

* Check interactions identifiers when updating a layer ([#1563](https://github.com/EOX-A/EOxElements/issues/1563)) ([95856b6](https://github.com/EOX-A/EOxElements/commit/95856b688eca8157a6d8ae159e478a2f76cc8c9f))

## [1.19.3](https://github.com/EOX-A/EOxElements/compare/map-v1.19.2...map-v1.19.3) (2025-01-30)


### Bug Fixes

* View sync between a visible and a hidden view ([#1406](https://github.com/EOX-A/EOxElements/issues/1406)) ([bd10af9](https://github.com/EOX-A/EOxElements/commit/bd10af930eb5be753fdb7b5a4bb0b80bb1e8a468))

## [1.19.2](https://github.com/EOX-A/EOxElements/compare/map-v1.19.1...map-v1.19.2) (2025-01-22)


### Bug Fixes

* Added fallback to ol uid if no id property is found ([#1488](https://github.com/EOX-A/EOxElements/issues/1488)) ([8e4014d](https://github.com/EOX-A/EOxElements/commit/8e4014da67475f12f01dda44bdb78dba8716dbac))

## [1.19.1](https://github.com/EOX-A/EOxElements/compare/map-v1.19.0...map-v1.19.1) (2025-01-08)


### Bug Fixes

* **deps:** Update elements-utils package ([#1471](https://github.com/EOX-A/EOxElements/issues/1471)) ([5b56ed5](https://github.com/EOX-A/EOxElements/commit/5b56ed50aeda0f0ad7044d3b26d0bcca568dcce4))

## [1.19.0](https://github.com/EOX-A/EOxElements/compare/map-v1.18.0...map-v1.19.0) (2024-12-18)


### Features

* Disable tooltip of select interaction ([#1409](https://github.com/EOX-A/EOxElements/issues/1409)) ([23e5297](https://github.com/EOX-A/EOxElements/commit/23e529768f1e04a662f009ade1f5967918514d2a))


### Bug Fixes

* Cursor-change after layer-interaction update ([#1434](https://github.com/EOX-A/EOxElements/issues/1434)) ([3bc9d95](https://github.com/EOX-A/EOxElements/commit/3bc9d959d6dd156355cca3903e7023182ba78828))

## [1.18.0](https://github.com/EOX-A/EOxElements/compare/map-v1.17.0...map-v1.18.0) (2024-11-12)


### Features

* Add hover interaction pointer cursor (alternative) ([#1348](https://github.com/EOX-A/EOxElements/issues/1348)) ([41ea65a](https://github.com/EOX-A/EOxElements/commit/41ea65a4e53a33dbf8ea016257ef077765798d4e))


### Bug Fixes

* Properly remove interaction on layer update ([#1360](https://github.com/EOX-A/EOxElements/issues/1360)) ([eaf9384](https://github.com/EOX-A/EOxElements/commit/eaf9384a244f98e39739f445a57e871335d57676))

## [1.17.0](https://github.com/EOX-A/EOxElements/compare/map-v1.16.2...map-v1.17.0) (2024-11-07)


### Features

* Build and include element's type declarations ([#1353](https://github.com/EOX-A/EOxElements/issues/1353)) ([f17166e](https://github.com/EOX-A/EOxElements/commit/f17166e292ce546a2ff45433a05248330eb63713))

## [1.16.2](https://github.com/EOX-A/EOxElements/compare/map-v1.16.1...map-v1.16.2) (2024-11-04)


### Bug Fixes

* Keep selectLayer activation state in change listener ([#1334](https://github.com/EOX-A/EOxElements/issues/1334)) ([543282e](https://github.com/EOX-A/EOxElements/commit/543282e1b0af4d40ad12c57bbffaef05a5ea0b47))

## [1.16.1](https://github.com/EOX-A/EOxElements/compare/map-v1.16.0...map-v1.16.1) (2024-10-17)


### Bug Fixes

* Layer order stability insided group layers ([#1321](https://github.com/EOX-A/EOxElements/issues/1321)) ([95fef59](https://github.com/EOX-A/EOxElements/commit/95fef5941fd98fdf4ac82f0cdc6ca674af3389f7))

## [1.16.0](https://github.com/EOX-A/EOxElements/compare/map-v1.15.0...map-v1.16.0) (2024-10-17)


### Features

* **build:** Provide un-bundled element by default (bundled version still available in dist folder) ([#1065](https://github.com/EOX-A/EOxElements/issues/1065)) ([333e324](https://github.com/EOX-A/EOxElements/commit/333e324def0354992fadd4640fc2ee9b72a545b4))

## [1.15.0](https://github.com/EOX-A/EOxElements/compare/map-v1.14.0...map-v1.15.0) (2024-10-08)


### Features

* FlatGeoBuf source ([#1298](https://github.com/EOX-A/EOxElements/issues/1298)) ([3f59636](https://github.com/EOX-A/EOxElements/commit/3f5963675deab91c124b7a6770feaffff83dff6e))

## [1.14.0](https://github.com/EOX-A/EOxElements/compare/map-v1.13.1...map-v1.14.0) (2024-10-01)


### Features

* Refactor and convert code from `ts` to `js` ([#1206](https://github.com/EOX-A/EOxElements/issues/1206)) ([e417b3f](https://github.com/EOX-A/EOxElements/commit/e417b3f65373824b68d3ece327e2952100dd90e7))

## [1.13.1](https://github.com/EOX-A/EOxElements/compare/map-v1.13.0...map-v1.13.1) (2024-09-23)


### Bug Fixes

* Update maps tiles url to public domain ([#1262](https://github.com/EOX-A/EOxElements/issues/1262)) ([3f57038](https://github.com/EOX-A/EOxElements/commit/3f570381472beb3d93656958d818eece4084ef65))

## [1.13.0](https://github.com/EOX-A/EOxElements/compare/map-v1.12.0...map-v1.13.0) (2024-08-12)


### Features

* Optionally add extent to registerProjection function ([#1205](https://github.com/EOX-A/EOxElements/issues/1205)) ([cbfc366](https://github.com/EOX-A/EOxElements/commit/cbfc366d5c035503098f0e5ddfbd21c1d489933e))

## [1.12.0](https://github.com/EOX-A/EOxElements/compare/map-v1.11.2...map-v1.12.0) (2024-08-06)


### Features

* Highlight and animate feature(s) by ID ([#1176](https://github.com/EOX-A/EOxElements/issues/1176)) ([1f95016](https://github.com/EOX-A/EOxElements/commit/1f9501632f00d087473a8deb2435154742f236d2))
* Loading indicator map control ([#1173](https://github.com/EOX-A/EOxElements/issues/1173)) ([fb727d3](https://github.com/EOX-A/EOxElements/commit/fb727d3fb585216656b9201602fd8de322cc460d))
* LonLatCenter & lonLatExtent ([#1181](https://github.com/EOX-A/EOxElements/issues/1181)) ([0a154db](https://github.com/EOX-A/EOxElements/commit/0a154db770d262e6ccbb42b786cc2a8d8a5c754f))

## [1.11.2](https://github.com/EOX-A/EOxElements/compare/map-v1.11.1...map-v1.11.2) (2024-07-31)


### Bug Fixes

* Issue of layer groups not removing all previous layers ([#1161](https://github.com/EOX-A/EOxElements/issues/1161)) ([e888a61](https://github.com/EOX-A/EOxElements/commit/e888a61c93aafaa73f1130e00b3ab606986407a4))

## [1.11.1](https://github.com/EOX-A/EOxElements/compare/map-v1.11.0...map-v1.11.1) (2024-07-30)


### Bug Fixes

* Layer update of group layers ([#1147](https://github.com/EOX-A/EOxElements/issues/1147)) ([5f44bc0](https://github.com/EOX-A/EOxElements/commit/5f44bc0aaaa7b003923f6d51d89ad882bb0fb324))

## [1.11.0](https://github.com/EOX-A/EOxElements/compare/map-v1.10.1...map-v1.11.0) (2024-07-29)


### Dependency upgrade

* **deps:** Upgrade `ol` to version `10.0.0` ([#1141](https://github.com/EOX-A/EOxElements/pull/1141)) ([a594d2d](https://github.com/EOX-A/EOxElements/commit/a594d2df80702225afa5836be43f388bb6c0362c))

## [1.10.1](https://github.com/EOX-A/EOxElements/compare/map-v1.10.0...map-v1.10.1) (2024-07-23)


### Bug Fixes

* **deps:** Support `ol` version `9.2.5-dev.1719634408469` ([#1077](https://github.com/EOX-A/EOxElements/issues/1077)) ([de6cef1](https://github.com/EOX-A/EOxElements/commit/de6cef114ca47c9cd38b514a2ac25476d78d9182))

## [1.10.0](https://github.com/EOX-A/EOxElements/compare/map-v1.9.3...map-v1.10.0) (2024-07-18)


### Features

* Allow passing an eox-map DOM element to `sync` property ([#1106](https://github.com/EOX-A/EOxElements/issues/1106)) ([0fd08ae](https://github.com/EOX-A/EOxElements/commit/0fd08ae3a1b363968b4aeeb4a6ff3e1bce8350b2))
* Enable/disable compare ([#1100](https://github.com/EOX-A/EOxElements/issues/1100)) ([c7ee092](https://github.com/EOX-A/EOxElements/commit/c7ee09211ab279eb26f898f4f93f964f84d7bf04))


### Bug Fixes

* Height of compare container ([#1099](https://github.com/EOX-A/EOxElements/issues/1099)) ([8a77926](https://github.com/EOX-A/EOxElements/commit/8a77926a6737ff10ee046f109366bc31a190e465))

## [1.9.3](https://github.com/EOX-A/EOxElements/compare/map-v1.9.2...map-v1.9.3) (2024-07-04)


### Bug Fixes

* Unmanaged Styles ([#1078](https://github.com/EOX-A/EOxElements/issues/1078)) ([be75396](https://github.com/EOX-A/EOxElements/commit/be75396f9cf90f31a4a872794c02789a598b1086))

## [1.9.2](https://github.com/EOX-A/EOxElements/compare/map-v1.9.1...map-v1.9.2) (2024-07-01)


### Features

* WMTS Tile Grid & Source Projections ([#1046](https://github.com/EOX-A/EOxElements/issues/1046)) ([d613bd1](https://github.com/EOX-A/EOxElements/commit/d613bd1fb64c4d5adeefa827998a8b13667c3341))

## [1.9.1](https://github.com/EOX-A/EOxElements/compare/map-v1.9.0...map-v1.9.1) (2024-06-25)


### Bug Fixes

* Order of format, layer and source import ([#1056](https://github.com/EOX-A/EOxElements/issues/1056)) ([56c19c5](https://github.com/EOX-A/EOxElements/commit/56c19c53af15f3c29c4ccd465b6bcb91a6640937))

## [1.9.0](https://github.com/EOX-A/EOxElements/compare/map-v1.8.2...map-v1.9.0) (2024-06-17)


### Features

* Emit mapmounted event ([#1007](https://github.com/EOX-A/EOxElements/issues/1007)) ([9bdb5aa](https://github.com/EOX-A/EOxElements/commit/9bdb5aa4908082262b983d8b6e8f2167e2d763b0))
* Format options ([#1006](https://github.com/EOX-A/EOxElements/issues/1006)) ([cab9b1e](https://github.com/EOX-A/EOxElements/commit/cab9b1e03f9a64d73b041103d23cf2257257c161))


### Bug Fixes

* Update ol version and style test ([#987](https://github.com/EOX-A/EOxElements/issues/987)) ([5475125](https://github.com/EOX-A/EOxElements/commit/5475125ae7e280550f8ab90e18cad011d478579e))

## [1.8.2](https://github.com/EOX-A/EOxElements/compare/map-v1.8.1...map-v1.8.2) (2024-05-16)


### Bug Fixes

* Prevent reaction to undefined zoom ([#961](https://github.com/EOX-A/EOxElements/issues/961)) ([4dcb512](https://github.com/EOX-A/EOxElements/commit/4dcb512eac3acf6b73d1cff09d4ad2c3c475a70c))

## [1.8.1](https://github.com/EOX-A/EOxElements/compare/map-v1.8.0...map-v1.8.1) (2024-05-16)


### Miscellaneous Chores

* Revert non-working parts of config extraction ([5b622cc](https://github.com/EOX-A/EOxElements/commit/5b622cc836bd0863e687111489ed9f16cef86360))

## [1.8.0](https://github.com/EOX-A/EOxElements/compare/map-v1.7.0...map-v1.8.0) (2024-05-15) - DEPRECATED


### Features

* Improved vanilla ol map config export ([#944](https://github.com/EOX-A/EOxElements/issues/944)) ([ba20a5f](https://github.com/EOX-A/EOxElements/commit/ba20a5fbe41550023f002df96c8a7f919527b597))

## [1.7.0](https://github.com/EOX-A/EOxElements/compare/map-v1.6.1...map-v1.7.0) (2024-05-08)


### Features

* Config getter transforming native OL state ([#926](https://github.com/EOX-A/EOxElements/issues/926)) ([14c81de](https://github.com/EOX-A/EOxElements/commit/14c81deb77ac776e549d885d52e6fcabd0913bf8))
* Map animations via properties ([#922](https://github.com/EOX-A/EOxElements/issues/922)) ([d7eff90](https://github.com/EOX-A/EOxElements/commit/d7eff901af9ae530811392bf63d35bc6f9de5241))

## [1.6.1](https://github.com/EOX-A/EOxElements/compare/map-v1.6.0...map-v1.6.1) (2024-04-10)


### Miscellaneous Chores

* **deps:** Update ol-stac package ([#845](https://github.com/EOX-A/EOxElements/issues/845)) ([53f3c12](https://github.com/EOX-A/EOxElements/commit/53f3c1274f675f4377abf80df75e83327fe8ec20))

## [1.6.0](https://github.com/EOX-A/EOxElements/compare/map-v1.5.1...map-v1.6.0) (2024-04-08)


### Features

* Delayed location popup for geolocation ([#825](https://github.com/EOX-A/EOxElements/issues/825)) ([f9e5481](https://github.com/EOX-A/EOxElements/commit/f9e5481658605fd7ee1d886998e97b12ea55165d))


### Bug Fixes

* Update internal `_jsonDefinition` ([#823](https://github.com/EOX-A/EOxElements/issues/823)) ([65326f0](https://github.com/EOX-A/EOxElements/commit/65326f0211e2b2092873833d6e27dbbe7fb87eaf))

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
