import { button } from "../../../utils/styles/button";

export const styleEOX = `
${button}

:host {
  --color-primary: #004170;
  --color-primary-lighter: color-mix(in srgb, var(--color-primary), #fff 95%);
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
  padding: 5px 30px;
}
header {
  background: var(--color-primary-lighter);
}
header h1 {
  font-size: 24px;
  color: var(--color-primary);
}
header h2 {
  font-size: 22px;
  color: var(--color-primary);
}
section#tags ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
section#tags li {
  list-style: none;
}
main {
  padding-bottom: 50px;
  flex: 1;
  font-size: small;
}
section#properties ul {
  padding: 0;
}
section#properties > ul {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
section#properties slot > li {
  margin-bottom: 8px;
  break-inside: avoid;
}
section#properties slot:not([name=description]) ul li {
  list-style: none;
}
section#properties .colon {
  margin-right: 4px;
}
section#properties .label {
  font-weight: bold;
}
section#properties ul li,
section#properties ul li ul {
  display: flex;
  flex-wrap: wrap;
}
section#properties ul li ul li:not(:last-child):after {
  content: ",";
  margin-right: 4px;
}
section#featured details > div {
  padding: 10px 12px 20px;
}
section#featured .button-container {
  text-align: center;
  margin-bottom: 24px;
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
section#featured .button-container .button:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'%3E%3Ctitle%3Eopen-in-new%3C/title%3E%3Cpath d='M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z' /%3E%3C/svg%3E");
}
section#featured .button-container > div {
  text-align: left;
}
section#featured .button-container > div > p {
  margin-bottom: 0;
}
footer {
  background: var(--color-primary);
  color: white;
  padding: 10px 30px 20px;
  position: relative;
}
footer a {
  color: white;
}
footer h1 {
  font-size: 14px;
}
footer h2 {
  font-size: 12px;
}
footer .copy {
  background: none;
  border: none;
  position: absolute;
  top: 15px;
  right: 30px;
}
footer .copy:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='-6 -6 36 36'%3E%3Ctitle%3Econtent-copy%3C/title%3E%3Cpath d='M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z' /%3E%3C/svg%3E");
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
section#tags ul>li,
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
section#tags ul>li {
  padding: 2px 12px;
  margin: 0 4px 4px 0;
}
`;
