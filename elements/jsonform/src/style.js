export const style = `
  * {
    font-family: Roboto, sans-serif;
  }
  :host, :root {
    --background-color: var(--eox-background-color, transparent);
    background-color: var(--background-color, transparent);
  }
  form {
    background-color: var(--background-color, transparent);
  }
  .CodeMirror {
    background-color: var(--background-color, transparent)
  }
`;
