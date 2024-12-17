export const style = `
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
  background-color: var(--background-color)
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  overflow-y: auto;
}
details {
  width: 100%;
}
`;
