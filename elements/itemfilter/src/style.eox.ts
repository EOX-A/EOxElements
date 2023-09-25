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
}
li span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem 0;
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: small;
  align-items: center;
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  position: absolute;
  right: 8px;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
}
[data-type=filter] .title,
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
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid #0004;
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul li {
  padding-left: 0;
}
eox-itemfilter-expandcontainer ul li,
details ul li {
  padding: 0.2rem;
}
li.highlighted {
  background: #00417011;
}
section {
  position: relative;
}
button#filter-reset {
  position: absolute;
  top: 4px;
  right: 0;
  text-indent: -9999px;
  line-height: 0;
}
button#filter-reset:after {
  content: "Reset";
  text-indent: 0px;
  line-height: initial;
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
  color: #004170;
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range {
  display: flex;
  align-items: center;
  padding: .5rem 0;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before {
  margin-right: .5rem;
}
.range-after {
  margin-left: .5rem;
}
eox-itemfilter-autocomplete {
  width: 100%;
  height: auto;
}
eox-itemfilter-inline {
  position: relative;
}
input[type="text"].autocomplete-input {
  height: 30px;
  margin: 0;
}
.chip-container {
  position: absolute;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 4px;
}
.chip {
  font-size: small;
  background: lightgrey;
  padding: 4px 8px;
  border-radius: 10px;
  margin-right: 4px;
  text-transform: capitalize;
}
.inline-clear {
  position: absolute;
  right: 0px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inline-dropdown {
  padding: 8px;
  box-shadow: 0 3px 7px #0007;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.inline-dropdown ul {
  margin: 0;
}
.inline-dropdown li {
  text-transform: capitalize;
  font-size: small;
}
.inline-clear,
.autocomplete-clear {
  cursor: pointer;
}
`;
