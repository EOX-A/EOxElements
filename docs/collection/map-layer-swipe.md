# map-layer-swipe

<div style="height:400px">
  <ClientOnly>
    <map-layer-swipe />
  </ClientOnly>
</div>

``` md
<map-basic
  :tileLayers="tileLayers"
  style="height: 100%; width: 100%;"
>
  <map-layer-swipe
    :swipeLayer="compareLayer.value"
    :swipeLayerName="compareLayer.name"
    :originalLayerName="tileLayers[0]"
  />
</map-basic>
```
<br />

With the `reverseDirection` prop, you can reverse the order of original/compare:

<br />
<div style="height:400px">
  <ClientOnly>
    <map-layer-swipe-reverse />
  </ClientOnly>
</div>

``` md
<map-basic
  :tileLayers="tileLayers"
  style="height: 100%; width: 100%;"
>
  <map-layer-swipe
    reverseDirection
    :swipeLayer="compareLayer.value"
    :swipeLayerName="compareLayer.name"
    :originalLayerName="tileLayers[0]"
  />
</map-basic>
```