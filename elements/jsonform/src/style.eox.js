export const styleEOX = `
  :host, :root {
    display: block;
    overflow: hidden;
    min-height: 250px;
  }
  :host, :root, form, .CodeMirror {
    --background-color: var(--eox-background-color, transparent);
    background-color: var(--background-color, transparent);
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-modal {
    z-index: 30;
    border-radius: 4px;
    border: none;
    box-shadow: 0 5px 10px #0005;
    padding: 8px;
  }
  form[data-theme="html"][data-theme-custom="eox"] table.je-table {
    width: 100%;
  }
  form[data-theme="html"][data-theme-custom="eox"] table.je-table td {
    display: grid;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-tabholder.tabs {
    width: 130px;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-tabholder.tabs+div {
    margin-left: 130px;
  }
  form[data-theme="html"][data-theme-custom="eox"] .tabs.je-tabholder--top {
    margin-left: 0;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-tabholder--clear > .je-indented-panel {
    border-top-left-radius: 0;
  }
  form[data-theme="html"][data-theme-custom="eox"] .tabs.je-tabholder--top > .je-tab--top {
    border-radius: 3px 3px 0 0;
    padding-left: 10px;
    padding-right: 10px;
  }
  form[data-theme="html"][data-theme-custom="eox"] .tabs.je-tabholder--top > .je-tab--top[data-hidden] {
    display: none;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-indented-panel {
    min-height: 20px;
    padding: var(--eox-panel-spacing, 10px);
    margin: var(--eox-panel-spacing, 10px);
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    background-color: var(--eox-background-color, transparent);
    border: var(--eox-panel-border, 1px solid #ced4da);
    border-radius: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-child-editor-holder {
    margin-bottom: 0;
  }
  .je-object__container {
    position: relative;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-header .je-object__title {
    display: flex;
    align-items: center;
  }
  .je-object__controls {
    margin: 0px 0px 0px 10px;
  }
  .je-header {
    margin-top: var(--eox-panel-spacing, 10px);
  }
  .row:not(.row .row):not(.row:last-child) {
    margin-bottom: 8px;
  }
  form[data-theme="html"][data-theme-custom="eox"] label.je-form-input-label:not([data-schematype="boolean"]),
  form[data-theme="html"][data-theme-custom="eox"] p.je-form-input-label:not([data-schematype="boolean"]) {
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    margin-bottom: 5px;
    margin-top: var(--eox-panel-spacing, 10px);
    font-weight: 400;
  }
  form[data-theme="html"][data-theme-custom="eox"] p.je-form-input-label:not([data-schematype="boolean"]) {
    display: inline-block;
  }
  form[data-theme="html"][data-theme-custom="eox"] label {
    display: flex;
  }
  [data-schematype="boolean"] {
    padding-top: var(--eox-panel-spacing, 10px);
    padding-bottom: var(--eox-panel-spacing, 10px);
  }
  .form-control:not([data-schematype="boolean"] .form-control):not(.row:last-child .form-control) {
    margin-bottom: 15px;
  }
  .form-control input:not([data-schematype="boolean"] input),
  .form-control select {
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: var(--eox-background-color, transparent);
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  }
  input[type="checkbox"] {
    border: none !important;
    padding: 0 !important;
    display: flex !important;
    width: auto !important;
  }
  .form-control input[disabled] {
    opacity: .5;
  }
  [data-schematype=boolean] label {
    display: flex;
    font-size: 1rem !important;
    align-items: center;
    gap: 4px;
  }
  [data-schematype=boolean] label input {
    border: none;
    padding: 0;
  }
  /* description */
  [data-schematype] p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-style: italic;
  }
  .errmsg {
    font-size: x-small;
  }

  /* MD Editor */
  [data-theme-custom="eox"] .editor-toolbar button {
    background: none;
    box-shadow: none;
    color: #555;
  }
  [data-theme-custom="eox"] .editor-toolbar button:hover:not([disabled]):not(.icon),
  [data-theme-custom="eox"] .editor-toolbar button:hover:not([disabled]):not(.icon) {
    box-shadow: none;
    background: #fcfcfc;
    border-color: #95a5a6;
    color: #2c3e50;
  }
  [data-theme-custom="eox"] .editor-toolbar button i {
    font-size: 17px;
  }
  [data-theme-custom="eox"] .editor-statusbar {
    padding-bottom: 0;
  }
  .cm-header-1 {
    font-size: 200% !important;
  }
  .cm-header-1 {
    font-size: 200% !important;
    line-height: 200% !important;
  }
  .cm-header-2 {
    font-size: 160% !important;
    line-height: 160% !important;
  }
  .cm-header-3 {
    font-size: 125% !important;
    line-height: 125% !important;
  }
  .cm-header-4 {
    font-size: 110% !important;
    line-height: 110% !important;
  }
  .cm-comment {
    background: rgba(0, 0, 0, 0.05) !important;
    border-radius: 2px !important;
  }

  /* Ace Editor */
  .ace_editor,
  .ace_editor * {
    font-family: "Monaco", "Menlo", "Ubuntu Mono", "Droid Sans Mono", "Consolas", monospace !important;
  }

  /* Buttons overrides */
  button {
    vertical-align: middle;
  }
  button i {
    display: none;
  }
  button[class*="json-editor-btntype-"] span {
    display: none;
  }
  button[class*="json-editor-btntype-"]::before {
    height: 24px;
    width: 24px;
  }
  button[class*="json-editor-btntype-"] {
    background: none;
    box-shadow: none;
    padding: 0;
    text-indent: 0px;
    margin: 0 4px 8px 0;
    height: unset;
  }
  button.json-editor-btntype-properties {
    margin: 0;
  }
  button[class*="json-editor-btntype-"]:hover {
    background: none !important;
    box-shadow: none !important;
  }
  .json-editor-btntype-toggle[title=Expand],
  .json-editor-btntype-toggle[title=Collapse] {
    margin: 0 4px 4px -8px;
  }
  .json-editor-btntype-toggle[title=Expand]::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  }
  .json-editor-btntype-toggle[title=Collapse]::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-down%3C/title%3E%3Cpath d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /%3E%3C/svg%3E");
  }
  .json-editor-btn-moveup::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M3 21V17H10.5C12.43 17 14 15.43 14 13.5V11H10L16 4L22 11H18V13.5C18 17.64 14.64 21 10.5 21H3Z' /%3E%3C/svg%3E");
  }
  .json-editor-btn-movedown::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M21 3V7H13.5C11.57 7 10 8.57 10 10.5V13H14L8 20L2 13H6V10.5C6 6.36 9.36 3 13.5 3H21Z' /%3E%3C/svg%3E");
  }
  .json-editor-btntype-properties::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplaylist-edit%3C/title%3E%3Cpath fill='%23204270' d='M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z' /%3E%3C/svg%3E");
  }
  .json-editor-btn-moveup,
  .json-editor-btn-movedown,
  .json-editor-btn-moveup::before, 
  .json-editor-btn-movedown::before {
    width: 18px !important;
    height: 18px !important;
  }
  .json-editor-btntype-add::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
  }
  .json-editor-btntype-delete::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z' /%3E%3C/svg%3E");
  }
  .json-editor-btntype-add::before,
    .json-editor-btntype-delete::before {
    width: 16px !important;
    height: 16px !important;
    background: #00417044;
    padding: 4px;
    border-radius: 100px;
  }
  .json-editor-btntype-add,
  .json-editor-btntype-delete {
    opacity: 0.8;
  }
  .json-editor-btntype-add:hover,
    .json-editor-btntype-delete:hover {
    opacity: 1;
  }
  button[class*="json-editor-btntype-"]:active {
    --primary-color: transparent;
  }

  /* Hide stuff on the root level */
  form[data-theme="html"][data-theme-custom="eox"] > [data-schemaid="root"] > .je-indented-panel {
    margin: 0;
    padding: 0;
    border: none;
  }
`;
