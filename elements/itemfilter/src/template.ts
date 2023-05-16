export const itemFilterTemplate = `
<style>
:host {
  display: block;
  height: 100%;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
label {
  display: flex;
  align-items: center;
}
details {
  margin-bottom: 0.5rem;
}
li,
label,
details,
input[type=checkbox],
input[type=radio] {
  cursor: pointer;
}
input[type=checkbox],
input[type=radio] {
  margin: 0;
  margin-right: 0.5rem;
}
input[type=text] {
  display: none;
  margin-bottom: 0.5rem;
}
section {
  padding-left: 1rem;
  padding-right: 1rem;
}
section:first-of-type {
  padding-top: 1rem;
}
section:last-of-type {
  padding-bottom: 1rem;
}
#container-results {
  height: 300px;
  margin-right: -1rem;
}
.scroll {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
<form>
  <section>
    <input type="text" placeholder="Search" />
  </section>
  <section>
    <slot name="filterstitle"></slot>
    <ul id="filters"></ul>
  </section>
  <section>
    <slot name="resultstitle"></slot>
    <div id="container-results" class="scroll">
      <ul id="results"></ul>
    </div>
  </section>
</form>
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
