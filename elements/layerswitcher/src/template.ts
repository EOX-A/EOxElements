export const layerSwitcherTemplate = `
<style>
:host {
  display: block;
}
.dragHandle {
  cursor: ns-resize;
}
</style>
<div>
  <slot></slot>
  <ul></ul>
</div>
`;

export const layerSwitcherItem = `
<li>
  <label>
    <input type="checkbox" />
    <span class="title">LAYERTITLE</span>
  </label>
  <input type="range" value="100" />
  <span class="dragHandle">=</span>
</li>
`;
