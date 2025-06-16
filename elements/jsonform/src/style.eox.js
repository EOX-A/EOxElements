import eoxStyle from "@eox/ui/style.css?inline";
import { addCommonStylesheet } from "@eox/elements-utils";

addCommonStylesheet();

export const styleEOX = `
  ${eoxStyle}

  /*EOxUI Overrides*/
  .row {
    display: inline;
  }

  :host, :root {
    display: block;
    overflow: hidden;
    min-height: 0;
  }
  :host, :root, form, .CodeMirror {
    --background-color: var(--eox-background-color, transparent);
    background-color: var(--background-color, transparent);
  }
  .editor-toolbar, .CodeMirror {
    border-color: var(--outline) !important;
  }
  form[data-theme="html"][data-theme-custom="eox"] {
    margin-block-start: 0;
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
    border: var(--eox-panel-border, 1px solid var(--outline));
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
  .form-control:not([data-schematype="boolean"] .form-control) {
    margin-bottom: 15px;
  }
  .form-control input:not([data-schematype="boolean"] input):not([type="range"]),
  .form-control select {
    display: block;
    opacity: 1;
    position: relative;
    width: 100%;
    padding: 6px 12px;
    font-size: 0.75rem;
    line-height: 1.42857143;
    color: inherit;
    background-color: var(--eox-background-color, transparent);
    background-image: none;
    border: .0625rem solid transparent;
    border-color: var(--outline);
    border-radius: 4px;
    block-size: 40px;
    outline: none;
    font-family: Inter, sans-serif;
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  }
  .form-control input:not([data-schematype="boolean"] input):not([type="range"]):focus,
  .form-control input:not([data-schematype="boolean"] input):not([type="range"]):focus-visible {
    border: .125rem solid transparent;
    border-color: var(--primary);
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
  .je-range-control {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .je-range-control > input {
    order: 1;
  }
  .je-range-control > output {
    order: 2;
    width: 34px;
    text-align: right;
  }
  /* description */
  [data-schematype] p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-style: italic;
  }
  .errmsg {
    font-size: x-small;
    color: #ba1a1a !important;
  }
  @media (prefers-color-scheme: dark) {
    .errmsg {
      color: #ffb4ab !important;
    }
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
  [data-theme-custom="eox"] .editor-toolbar i.separator {
    block-size: 25px;
    inline-size: 0;
    min-block-size: 24px;
    min-inline-size: 0;
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

  /* Hide stuff on the root level */
  form[data-theme="html"][data-theme-custom="eox"] > [data-schemaid="root"] > .je-indented-panel {
    margin: 0;
    padding: 0;
    border: none;
  }
`;
