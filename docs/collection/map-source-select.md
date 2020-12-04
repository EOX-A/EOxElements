# map-source-select

<div style="height:400px">
  <ClientOnly>
    <map-source-select />
  </ClientOnly>
</div>

``` md
<map-basic
  :tileLayers="tileLayers"
  style="height: 100%; width: 100%;"
>
  <map-source-select
    :selectionItems="selectionItems"
    @selectLayer="changeLayer"
  />
</map-basic>
```
<br />

Source select with `enableCompare` prop (WIP):

<br />
<div style="height:400px">
  <ClientOnly>
    <map-source-select-compare />
  </ClientOnly>
</div>

``` md
<map-basic
  :tileLayers="tileLayers"
>
  <map-layer-swipe
    v-if="layerComparison"
    embeddedMode
    reverseDirection
    :swipeLayer="'osm'"
    :swipeLayerName="'OSM'"
    :originalLayerName="tileLayers[0]"
  />
  <map-source-select
    reverseDirection
    enableCompare
    :selectionItems="selectionItems"
    @selectLayer="changeLayer"
    @selectCompareLayer="changeCompareLayer"
    @toggleCompare="toggleCompare"
  />
</map-basic>
```