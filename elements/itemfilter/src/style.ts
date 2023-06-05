export const style = `
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form {
  height: 100%;
  width: 100%;
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
details[open] {
  position: absolute;
  left: 16px;
  right: 12px;
}
details[open] summary {
  height: 30px;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
}
.details-filter summary {
  justify-content: space-between;
}
#details-results summary {
  list-style: none;
}
.details-filter summary svg,
#details-results summary svg {
  width: 14px;
  height: 14px;
  transition: all ease-in-out 0.3s;
}
#details-results summary svg {
  transform: rotate(-90deg);
}
.details-filter[open] summary svg {
  transform: rotate(180deg);
}
#details-results[open] summary svg {
  transform: rotate(0deg);
}
.details-filter li span,
details summary {
  text-transform: capitalize;
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
  margin-right: 0.5rem;
}
input[type="text"] {
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
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
#filter-reset {
  cursor: pointer;
}
section.inline,
section.inline > ul {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
}
section.inline details.details-filter {
  background: lightgrey;
  border-radius: 13px;
  margin: 0;
  margin-right: 4px;
  padding: 4px 7px;
}
section.inline details.details-filter summary {
  display: flex;
  align-items: center;
}
.scroll {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
`;
