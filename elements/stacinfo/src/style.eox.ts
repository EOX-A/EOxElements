export const styleEOX = `
* {
  font-family: Roboto, sans-serif;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
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
