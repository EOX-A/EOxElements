export const itemFilterTemplate = `
<style>
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}
*, *:before, *:after {
  box-sizing: inherit;
}
form {
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  font-size: small;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
label {
  display: flex;
  align-items: center;
}
details {
  margin-bottom: 0.5rem;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
}
#details-filter summary {
  justify-content: space-between;
}
#details-results summary {
  list-style: none;
}
#details-filter summary svg,
#details-results summary svg {
  width: 24px;
  height: 24px;
  transition: all ease-in-out 0.3s;
}
#details-results summary svg {
  transform: rotate(-90deg);
}
#details-filter[open] summary svg {
  transform: rotate(180deg);
}
#details-results[open] summary svg {
  transform: rotate(0deg);
}
li span,
details summary {
  text-transform: capitalize;
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
ul#results {
  padding-right: 1rem;
}
ul#results li {
  padding-left: 0.5rem;
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

export const filterTemplate = `
<li>
  <label>
    <input type="checkbox" />
    <span class="title">FILTERITEMTITLE</span>
  </label>
</li>
`;

export const filterAggregationTemplate = `
<details id="details-filter">
  <summary>
    <small>
      <strong class="title">
        FILTERTITLE
      </strong>
    </small>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
    </div>
  </summary>
  <ul></ul>
</details>
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
<details id="details-results" open>
  <summary>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
    <strong class="title">
      SUMMARYTITLE
    </strong>
    <span style="margin-left: 0.25rem">(<span class="count"></span>)</span>
  </summary>
  <ul></ul>
</details>
`;
