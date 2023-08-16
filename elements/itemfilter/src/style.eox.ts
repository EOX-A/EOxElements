import { button } from "../../../utils/styles/button";
import { checkbox } from "../../../utils/styles/checkbox";
import { radio } from "../../../utils/styles/radio";
import { slider } from "../../../utils/styles/slider";

export const styleEOX = `
* {
  font-family: Roboto, sans-serif;
}

${button}
${checkbox}
${radio}
${slider}

ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
  margin-bottom: 10px;
}
li span {
  font-size: small;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li span, label {
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
  margin-top: 24px;
}
details summary .title {
  display: flex;
  font-size: 18px;
  margin-bottom: 12px;
}
details summary .title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details[open] summary .title::before {
  transform: rotate(90deg);
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
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00417044;
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  font-size: 14px;
  color: #004170;
  font-weight: 500;
  margin-left: 9px;
}
`;
