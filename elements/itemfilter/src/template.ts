export const itemFilterTemplate = `
<style>
:host {
  display: block;
}
input[type=text] {
  display: none;
}
</style>
<div>
  <slot></slot>
  <form>
    <input type="text" />
    <ul id="filters"></ul>
    <ul id="results"></ul>
  </form>
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
