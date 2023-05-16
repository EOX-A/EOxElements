export const itemFilterTemplate = `
<style>
:host {
  display: block;
  box-sizing: border-box;
  height: 100%;
}
*, *:before, *:after {
  box-sizing: inherit;
}
form {
  height: 100%;
  display: flex;
  flex-direction: column;
}
form > * {
  // flex: 0;
  border: solid 1px red;
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
  width: 100%;
  margin-bottom: 0.5rem;
}
section {
  padding-left: 1rem;
  padding-right: 1rem;
}
section:first-of-type {
  padding-top: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
#container-results {
  margin-right: -1rem;
}
.scroll {
  height: 100%;
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
  <section id="section-results">
    <div>
      <slot name="resultstitle"></slot>
    </div>
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

export const itemResultTemplate = `
<li>
  <label>
    <input type="radio" name="result" />
    <span class="title">RESULTTITLE</span>
  </label>
</li>
`;

export const itemAggregationTemplate = `
<details open>
  <summary>TITLE</summar>
  <ul></ul>
</details>
`;
