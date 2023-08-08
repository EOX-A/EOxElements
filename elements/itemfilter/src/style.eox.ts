import { button } from "../../../utils/styles/button";
import { radio } from "../../../utils/styles/radio";

export const styleEOX = `
* {
  font-family: Roboto, sans-serif;
}

${button}
${radio}

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
details li span,
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
  font-size: small;
}
.scroll {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
`;
