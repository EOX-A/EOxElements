export const layerSwitcherTemplate = `
<style>
:host {
  display: block;
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
    <span>LAYERTITLE</span>
  </label>
</li>
`;
