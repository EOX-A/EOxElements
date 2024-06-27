export const styleEOX = `
* {
  font-family: Roboto, sans-serif;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
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
  text-transform: capitalize;
}
h6.main-heading {
  font-size: 1rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-top: 8px;
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
  padding: 5px 10px;
}
#itemfilter .multiselect li:hover {
  background: #00417011;
}
section {
  position: relative;
}
button#filter-reset {
  position: absolute;
  top: 4px;
  right: 0;
  padding: 2px 10px;
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
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
  padding-left: 0.6rem;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon,
itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: -5px;
  height: 14px;
  width: 14px;
}
eox-itemfilter-expandcontainer button.reset-icon:before,
itemfilter-expandcontainer button.reset-icon:before {
  height: 14px;
  width: 14px;
}
.inline-content {
  padding: 4px;
  border: 1px solid #bbbbbb3b;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #0000000f;
  position: absolute;
  width: calc(100% - 10px);
  max-height: 300px;
  overflow-y: auto;
  background: #f3f4f5;
  z-index: 1;
}
.inline-container {
  position: relative;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
  padding-bottom: 1rem;
}
.inline-container {
  position: relative;
  border: 1px solid #00417066;
  border-radius: 4px;
  height: 24px;
  padding: 5px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  overflow-x: auto;
  display: flex;
}
.inline-container:hover {
  border: 1px solid #004170;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 150px;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
.inline-container::-webkit-scrollbar {
  height: 2px;
}
.inline-container::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 2px;
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.chip.highlighted {
  background: lightgrey;
}
.chip-title {
  pointer-events: none;
  text-transform: capitalize;
}
.chip-container {
  display: flex;
  flex: 0;
}
.chip {
  display: flex;
  align-items: center;
  background: #00417022;
  border-radius: 30px;
  margin-right: 4px;
  padding: 5px 10px;
  font-size: small;
  cursor: default;
  white-space: nowrap;
}
.chip.highlighted {
  background: #004170;
  color: white;
}
.chip-close {
  cursor: pointer;
  margin-left: 8px;
  font-weight: 600;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #00417066;
  border-radius: 4px;
  justify-content: space-between;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
}
.autocomplete-container:hover,
.text-container:hover {
  border: 1px solid #004170;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: none !important;
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding: 3px 0px !important;
  min-width: 150px;
  border-radius: 4px;
}
.suggestions-list {
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  max-height: 200px;
  overflow-y: auto;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #00417036;
}
.suggestion-item {
  padding: 8px;
  cursor: pointer;
  white-space: nowrap;
  font-size: 0.85rem;
  text-transform: capitalize;
}
.suggestion-item.selected {
  background-color: #00417022;
  font-weight: 500;
}
.suggestion-item.highlighted,
.suggestion-item:hover {
  background-color: #00417042;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
li.highlighted,
.select-container li:hover{
  background: #00417011;
}
.selected-item {
  background: #00417022;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 185px;
  overflow-y: auto;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
}
`;
