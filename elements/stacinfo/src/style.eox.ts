export const styleEOX = `
:host {
  --color-primary: #004170;
  --color-primary-lighter: color-mix(in srgb, var(--color-primary), #fff 90%);
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
* {
  font-family: Roboto, sans-serif;
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
main {
  padding-bottom: 50px;
  flex: 1;
}
footer {
  background: var(--color-primary);
  color: white;
  padding: 5px 30px 20px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}
li {
  flex-basis: 50%;
  padding: 20px 0;
}
li > .label {
}
li > .value {
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
