import { button } from "../../../utils/styles/button";

export const styleEOX = `
* {
  font-family: Roboto, sans-serif;
}

${button}

button.discard:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FF5252' viewBox='0 0 24 24'%3E%3Ctitle%3Etrash-can-outline%3C/title%3E%3Cpath d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /%3E%3C/svg%3E")
}

button.polygon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-polygon-plus%3C/title%3E%3Cpath d='M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z' /%3E%3C/svg%3E");
}
`;

export const styleListEOX = `
  * {
    font-family: Roboto, sans-serif;
  }
  ul {
    padding: 0;
  }
  ul ul {
    padding-left: 48px;
  }
  li:hover {
    background: #f0f5f9;
  }
  li.selected {
    background: #f0f5f9;
  }
  li {
    list-style: none;
    padding: 4px;
  }
  li {
    border-bottom: 1px solid #0041703a;
  }
  li:first-child {
    border-top: 1px solid #0041703a;
  }
  li.sortable-chosen {
    background: #eeea;
  }
  li.sortable-drag {
    opacity: 0;
  }
  li.sortable-ghost {
  }
  eox-drawtools-list {
    width: 100%;
  }
  .list {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: small;
    gap: 10px;

  }
  label {
    gap: 10px;
  }
  label, span {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: small;
    flex-grow: 1;
  }
  button.icon {
    transition: opacity .2s;
    opacity: .7;
    display: flex;
    justify-content: center;
    background: transparent;
  }
  button.icon:hover {
    opacity: 1;
  }
  button.icon, button.icon::before {
    height: 16px;
    width: 16px;
  }
`;
