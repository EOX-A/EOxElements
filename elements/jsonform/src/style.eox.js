export const styleEOX = `
  [data-schemaid=root] > .je-header {
    display: none;
  }
  .je-range-control {
    padding: 0.5rem 0;
  }
  .errmsg {
    font-size: x-small;
  }
  tc-range-slider{
    display: block;
    margin: 0.5rem 0;
  }
  .je-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #0002;
    padding: 0.5rem 0;
  }
  .je-indented-panel span {
    display: flex;
    align-items: center;
  }
  .je-header span:first-of-type, form[data-theme="html"] .je-form-input-label {
    font-size: 14px;
    font-weight: 500;
  }
  form[data-theme="html"] .je-indented-panel {
    border: none;
    margin: 0.4rem;
  }
  button[class*="json-editor-btntype-"] span {
    display: none;
  }
  button[class*="json-editor-btntype-"]::before {
    height: 24px;
    width: 24px;
  }
  button[class*="json-editor-btntype-"] {
    text-indent: 0px;
    margin: 0px;
    display: flex;
  }
  .json-editor-btntype-toggle::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  }
  .json-editor-btn-moveup::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M3 21V17H10.5C12.43 17 14 15.43 14 13.5V11H10L16 4L22 11H18V13.5C18 17.64 14.64 21 10.5 21H3Z' /%3E%3C/svg%3E");
  }
  .json-editor-btn-movedown::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M21 3V7H13.5C11.57 7 10 8.57 10 10.5V13H14L8 20L2 13H6V10.5C6 6.36 9.36 3 13.5 3H21Z' /%3E%3C/svg%3E");
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
    margin: 0px 0.5rem !important;
  }
  .json-editor-btntype-add:hover,
   .json-editor-btntype-delete:hover {
    opacity: 1;
  }
  button[class*="json-editor-btntype-"]:active {
    --primary-color: transparent;
  }
  .je-indented-panel .row {
    margin-top: 10px;
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
`;
