export const style = `
:host {
  display: block;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
li > .layer {
  display: flex;
  justify-content: space-between;
}
li > .layer > label {
  cursor: pointer;
  display: flex;
  align-items: center;
}
li label > img {
  margin-right: 4px;
}
.dragHandle {
  cursor: ns-resize;
}
`;
