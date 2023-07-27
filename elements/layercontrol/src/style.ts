export const style = `
:host {
  display: block;
}
.layer {
  display: flex;
  justify-content: space-between;
}
.drag-handle {
  cursor: ns-resize;
}
ul[data-group] {
  padding-inline-start: 40px;
}
`;
