import { css } from "lit";
export default css`
  button {
    position: relative;
    display: inline-flex;
    height: 2.25rem;
    cursor: pointer;
    align-items: center;
    border-radius: 0.25rem;
    border-width: 0px;
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.25px;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
    --tw-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    --tw-shadow-colored: 0px 3px 1px -2px var(--tw-shadow-color),
      0px 2px 2px 0px var(--tw-shadow-color),
      0px 1px 5px 0px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    transition-property: box-shadow, transform, opacity, background;
    transition-duration: 150ms;
    transition-duration: 0.28s;
    transition-timing-function: cubic-bezier(
      0.4,
      0,
      0.2,
      1
    ); /* TODO: why does this only work here and not from :root? */
    --primary-color: #004170;
    outline: none;
    font-family: inherit;
  }
  button:hover:not([disabled]):not(.icon) {
    --tw-bg-opacity: 1;
    background-color: rgb(0 65 112 / var(--tw-bg-opacity));
    --tw-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    --tw-shadow-colored: 0px 2px 4px -1px var(--tw-shadow-color),
      0px 4px 5px 0px var(--tw-shadow-color),
      0px 1px 10px 0px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  button,
  button:active {
    --tw-bg-opacity: 1;
    background-color: rgb(0 65 112 / var(--tw-bg-opacity));
  }
  button[disabled] {
    opacity: 0.5;
  }
  button.icon {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    border-color: none;
    background-color: transparent;
    padding: 0px;
    text-indent: -9999px;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  button.icon::before {
    margin-right: 0px;
    height: 1.5rem;
    content: var(--tw-content);
    width: 1.5rem;
  }
  button.icon-text {
    text-indent: 26px;
  }
  button.icon-text::before {
    height: 18px;
    content: var(--tw-content);
    width: 18px;
  }
  button.icon:before,
  button.icon-text:before {
    position: absolute;
    text-indent: 0;
    line-height: initial;
  }
  button.small {
    height: 1.75rem;
    padding: 12.4px;
    font-size: 0.75rem;
    line-height: 1rem;
  }
  button.discard:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FF5252' viewBox='0 0 24 24'%3E%3Ctitle%3Etrash-can-outline%3C/title%3E%3Cpath d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /%3E%3C/svg%3E");
  }
  button.polygon:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-polygon-plus%3C/title%3E%3Cpath d='M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z' /%3E%3C/svg%3E");
  }
  button.small.icon,
  button.small.icon::before {
    height: 1rem;
    width: 1rem;
    padding: 0px;
  }
  button.discard.icon {
    opacity: 0.7;
  }
  button.discard.icon:hover {
    opacity: 1;
  }
`;
