import { button } from "../../../utils/styles/button";

export const styleEOX = `
${button}

:host {
  --color-primary: #004170;
  --color-primary-lighter: color-mix(in srgb, var(--color-primary), #fff 95%);
  display: flex;
  flex-direction: column;
  min-height: 100%;
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
main {
  padding-bottom: 50px;
  flex: 1;
}
footer {
  background: var(--color-primary);
  color: white;
  padding: 10px 30px 20px;
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
  border: 2px solid #fff;
  border-radius: 5px;
}
footer .copy:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'%3E%3Ctitle%3Econtent-copy%3C/title%3E%3Cpath d='M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z' /%3E%3C/svg%3E");
}
slot[name=footer] {
  display: flex;
  align-items: center;
}
#properties ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}
#properties li {
  flex-basis: 50%;
  padding: 20px 0;
}
#properties li > .label {
}
#properties li > .value {
  font-weight: bold;
}
details {
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
}
details > summary {
  font-weight: bold;
}
dl {
  margin: 0;
}
dd {
  margin-left: 0;
}
li ul, dd ul {
  padding-left: 0;
  display: initial;
  list-style: initial;
}
dd li, li ul li {
  padding: 0;
}
`;
