import eoxStyle from "@eox/ui/style.css?inline";

export const styleEOX = `
${eoxStyle}
:host {
  --primary-color: var(--primary);
  --color-primary-lighter: color-mix(in srgb, var(--primary-color), #fff 95%);
  --padding: 0.5rem;
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
header, footer {
  background: none;
  margin: 0;
  padding: 0 var(--padding);
  min-block-size: 0;
}
details summary {
  padding: 0 var(--padding);
  user-select: none;
}
details summary i {
  transition: transform .1s ease-in-out;
}
details[open] summary i {
  transform: rotate(90deg);
}
details > summary > nav {
  min-height: 32px;
}
details > summary:hover {
  background-color: var(--surface-container);
}
`;
