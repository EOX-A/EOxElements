import eoxStyle from "@eox/ui/style.css?inline";

export const styleEOX = `
${eoxStyle}
:host {
  --primary-color: var(--primary);
  --color-primary-lighter: color-mix(in srgb, var(--primary-color), #fff 95%);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: auto;
  line-height: 1.5;
  box-sizing: border-box;
}
img,
video,
iframe {
  max-width: 100%;
}
header,
main,
footer {
  padding: 30px;
}
header {
  background: var(--color-primary-lighter);
}
section#tags li {
  list-style: none;
}
section#body ul {
  padding: 0;
}
section#body > ul:not(.single-property) {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
section#body li {
  margin-bottom: 8px;
  break-inside: avoid;
}
section#body .value li {
  margin-bottom: 0px;    
}
section#body slot:not([name=description]) ul li {
  list-style: none;
}
section#body .colon {
  margin-right: 4px;
}
section#body .label {
  font-weight: bold;
}
section#body ul li,
section#body ul li ul {
  display: flex;
  flex-wrap: wrap;
}
section#body ul li ul li:not(:last-child):after {
  content: ",";
  margin-right: 4px;
}
section#featured details > div {
  padding: 10px 12px 20px;
}
section#featured .button-container {
  text-align: center;
}
section#featured .button-container .button {
  /*height: 14px;*/
  padding: 8px;
  margin: 8px 0;
  height: auto;
  text-decoration: none;
  /*display: block;
  display: flex;
  align-items: center;
  justify-content: center;*/
}
section#featured .button-container > div {
  text-align: left;
}
section#featured .button-container > div > p {
  margin-bottom: 0;
}
footer .copy {
  position: absolute;
  top: 15px;
  right: 30px;
}
dt {
  font-weight: bold;
  text-transform: uppercase;
}
dd dt {
  text-transform: unset;
}
dd, dt {
  margin: 0;
}
dt {
  margin-top: 20px;
}
dd dt {
  margin-top: 8px;
}

/* from eox-itemfilter
TODO harmonize/refactor */
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
details summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details[open] summary::before {
  transform: rotate(90deg);
}
`;
