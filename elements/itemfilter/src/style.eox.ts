export const styleEOX = `
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
.inline details[open] {
  position: absolute;
  left: 16px;
  right: 12px;
}
.inline details[open] summary {
  height: 30px;
}
.details-filter summary {
  justify-content: space-between;
}
.details-filter summary span {
  font-size: small;
  font-weight: 900;
}
#details-results summary {
  list-style: none;
}
#details-results summary>.title {
  font-weight: 900;
}
.details-filter summary::after,
#details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg data-cy='expand-button' xmlns='http://www.w3.org/2000/svg' viewBox='6 6 12 12' %3E%3Ctitle%3Echevron-down%3C/title%3E%3Cpath d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /%3E%3C/svg%3E");
  width: 14px;
  height: 14px;
  margin-right: 4px;
  transition: all ease-in-out 0.3s;
}
#details-results summary::before {
  transform: rotate(-90deg);
}
.details-filter[open] summary::after {
  transform: rotate(180deg);
}
#details-results[open] summary::before {
  transform: rotate(0deg);
}
.details-filter li span,
#details-results summary {
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
