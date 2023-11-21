import { checkbox } from "../../../utils/styles/checkbox";
import { radio } from "../../../utils/styles/radio";
import { slider } from "../../../utils/styles/slider";

export const styleEOX = `
  ${checkbox}
  ${radio}
  ${slider}

  ul {
    padding-left: 0;
    margin-top: 0;
  }
  li {
    list-style: none;
  }
  li span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  li label {
    display: flex;
    align-items: center;
  }
  li,
  label,
  details,
  input[type="checkbox"],
  input[type="radio"] {
    cursor: pointer;
  }
  input[type="checkbox"],
  input[type="radio"] {
    margin: 0;
  }
  input[type="text"], select {
    box-sizing: border-box !important;
    width: 100% !important;
    margin: 0.5rem 0rem !important;
    padding: 5px 7px !important;
    border-radius: 4px !important;
    border: 1px solid #0004 !important;
  }
  form[data-theme="html"] .je-indented-panel {
    border: 0px !important;
    padding: 12px !important;
    margin: 0px !important;
  }
  section:not(section:last-of-type) {
    margin-bottom: 1rem;
  }
  ul li {
    padding: 5px 10px;
  }
  li.highlighted {
    background: #00417011;
  }
  section {
    position: relative;
  }
  .je-indented-panel {
    border: 0 !important;
    padding: 12px !important;
    margin: 0px !important;
  }
  label {
    font-weight: 500 !important;
    margin-bottom: 0px !important;
  }
  p {
    margin: 0.5rem 0;
  }
  label.je-form-input-label {
    display: flex;
    font-weight: 500;
    font-size: small;
    align-items: center;
    align-items: center;
    border-bottom: 1px solid #0002;
    padding: 0.5rem 0;
  }
  .je-range-control {
    padding: 0.5rem 0;
  }
  .errmsg {
    font-size: x-small;
  }
  .je-header, .je-object__controls {
    display: none !important;
  }
  button.json-editor-btn-collapse {
    box-shadow: none;
    display: inline;
    background: none;
    width: 24px;
    height: 24px;
    font-size: unset;
    padding: 0;
    margin: 0;
    transform: rotate(270deg);
    border: 0;
  }
  button.json-editor-btn-collapse span {
    text-indent: -999999px;
    display: flex;
  }
  button.json-editor-btn-collapse span:before {
    position: absolute;
    text-indent: 0;
    line-height: initial;
  }
  tc-range-slider{
    display: block;
    margin: 0.5rem 0;
  }
`;
