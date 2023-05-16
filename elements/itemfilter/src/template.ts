export const itemFilterTemplate = `
<style>
:host {
  display: block;
}
</style>
<div>
  <slot></slot>
  <ul id="filters"></ul>
  <input type="text" />
  <ul id="results"></ul>
</div>
`;

export const itemTemplate = `
<li>
  <label>
    <input type="checkbox" />
    <span class="title">FILTERITEMTITLE</span>
  </label>
</li>
`;

export const itemAggregationTemplate = `
<details open>
  <summary>TITLE</summar>
  <ul></ul>
</details>
`;
