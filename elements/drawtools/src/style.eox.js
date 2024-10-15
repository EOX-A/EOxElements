export const styleEOX = `
  button.discard:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FF5252' viewBox='0 0 24 24'%3E%3Ctitle%3Etrash-can-outline%3C/title%3E%3Cpath d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /%3E%3C/svg%3E")
  }
  button.pointer:before {
    content:  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Ecursor-default-click%3C/title%3E%3Cpath d='M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10' /%3E%3C/svg%3E");
  }
  button.polygon:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-polygon-plus%3C/title%3E%3Cpath d='M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z' /%3E%3C/svg%3E");
  }
  button.import:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eupload%3C/title%3E%3Cpath fill='%23004170' d='M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z' /%3E%3C/svg%3E");
  }
  .wrap-btn {
    display: flex;
    justify-content: space-between;
  }
  eox-drawtools-list {
    width: 100%;
  }
  .json-wrapper {
    margin: 0.4rem 0rem;
    padding: 0.75rem;
    background: var(--secondary-color-hover);
    position: relative;
  }
  .json-wrapper textarea {
    height: 200px;
  }
  .icon-copy {
    position: absolute;
    bottom: 26px;
    right: 26px;
    border-radius: 4px;
    height: 26px;
    padding: 4px 6px;
  }
  .icon-copy:before {
    width: 14px;
    min-width: 14px;
    height: 14px;
    display: flex margin-right: 6px;
    color: white;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Econtent-copy%3C/title%3E%3Cpath d='M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z' fill='white' /%3E%3C/svg%3E")
   }
`;
