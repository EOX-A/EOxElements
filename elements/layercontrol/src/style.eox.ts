import { button } from "../../../utils/styles/button";
import { slider } from "../../../utils/styles/slider";
import { radio } from "../../../utils/styles/radio";

export const styleEOX = `
* {
  font-family: Roboto, sans-serif;
}

${button}
${slider}
${radio}

summary > .layer {
  height: 36px;
  border-bottom: 1px solid #00417000;
  display: flex;
  align-items: center;
  padding-right: 12px;
}

[data-type=group] .title {
  font-style: italic;
}


[data-type] .title::before {
  width: 24px;
  height: 24px;
  margin-right: 6px;
  margin-left: -1px;
}

li[data-type=raster] .title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236889A0' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckerboard%3C/title%3E%3Cpath d='M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z' /%3E%3C/svg%3E");
}

[data-type=group] .title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236889A0' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-outline%3C/title%3E%3Cpath d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E");
}

[data-type]:not([data-type=group]) .title {
  font-style: normal;
}

details summary { list-style-type: none; } /* Firefox */
details summary::-webkit-details-marker { display: none; } /* Chrome */
details summary::marker { display: none; }

.layers > ul > li {
  background: #F1F5F900;
}

summary {
  position: relative;
}
summary details, summary li, summary ul {
  width: 100%;
}

input.lc-search {
  --search-padding-left: 32px;
  width: calc(100% - var(--search-padding-left) - 4px);
  height: 32px;
  padding-left: var(--search-padding-left);
  font-size: 15px;
}

input.lc-search::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /%3E%3C/svg%3E");
}

ul {
  padding: 0;
  background: #D7E2EE;
  background: #CFDDEB00;
}
li {
  list-style: none;
  cursor: pointer;
  background: #CFDDEB00;
  border-top: 1px solid #00417033;
}
li summary {
  display: flex;
}

.slider-control {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 9px;
  margin-left: 64px;
  margin-bottom: 12px;
}

.slider-control input[type=range] {
  max-width: 120px;
}

.slider-control .slider-property {
  width: 80px;
  color: #3B6289;
  font-size: 14px;
}

.slider-control > * {
  text-transform: capitalize;
}

/* Expansible Section Chevron */
li summary:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  font-size: 13px;
  width: 24px;
  height: 24px;
  margin-right: 6px;
  margin-left: -1px;

  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
li details[open] > summary:before {
  transform: rotate(90deg);
}
li .layer {
  width: 100%;
}
li .layer .left,
li .layer .right {
  display: flex;
}
li .layer .left span {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 6px;
}
li .layer input[type=checkbox] {
  appearance: none;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
}
li .layer input[type=checkbox]:after {
  display: block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
li .layer input[type=checkbox]:checked:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");

}
.drag-handle span {
  display: none;
}
.drag-handle {
  cursor: ns-resize;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Edrag%3C/title%3E%3Cpath fill='%23004170' d='M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z' /%3E%3C/svg%3E");
  width: 24px;
  height: 24px;
}
.drag-handle.disabled {
  cursor: not-allowed;
  opacity: 0.3;
}
li.sortable-chosen {
  background: #eeea;
}
li.sortable-drag {
  opacity: 0;
}
li.sortable-ghost {
}
`;
