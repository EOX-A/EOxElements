import { css } from "lit";
// import { button } from "../../utils/styles/button";

export const styleEOX = css`
  .geosearch {
    display: flex;
    flex-direction: row;
    align-items: start;
  }

  .search-container {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .search-container.hidden {
    opacity: 0;
  }
  .results-container {
    min-height: 100px;
    width: 332px;
    background: var(--results-bg, #eaf1f5);
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.08),
      0px 2px 2px 0px rgba(0, 0, 0, 0.08), 0px 1px 5px 0px rgba(0, 0, 0, 0.08);
    padding: 0;
    margin: 0;
  }
  input {
    background: var(--input-bg, #c6d4dd);
    color: var(--input-fg, #333);
    height: 48px;
    border-radius: 6px;
    padding: 0 16px;
    min-width: 300px;
    border: none;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.05),
      0px 2px 2px 0px rgba(0, 0, 0, 0.05), 0px 1px 5px 0px rgba(0, 0, 0, 0.05);
  }
  input::before {
    background: url("_data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' color='%23999999' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /%3E%3C/svg%3E");
    width: 48px;
    height: 48px;
    display: inline-block;
  }
  button {
    height: auto;
    background: var(--button-bg, #FFF);
  }

  .geosearch.small button {
    height: var(--button-size, 32px);
    width: var(--button-size, 32px);
    padding: calc((var(--button-size, 32px) - 20px) / 2);
  }

  .geosearch.small button .icon {
    width: 20px;
    height: 20px;
    transform: translateX(1px);
    fill: var(--button-fg, #fff);
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /%3E%3C/svg%3E");
  }

  .geosearch.small button .chevron {
    display: none;
  }

  .geosearch input {
    background: #fff;
  }

  .chevron {
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-left%3C/title%3E%3Cpath d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /%3E%3C/svg%3E");
    margin-right: 9px;
  }

  .chevron.right {
    transform: rotate(180deg);
    margin-left: 9px;
  }

  .chevron.top {
    transform: rotate(90deg);
    margin-bottom: 9px;
  }

  .chevron.bottom {
    transform: rotate(-90deg);
    margin-top: 9px;
  }

  .chevron.right.active {
    transform: rotate(180deg);
  }

  .search-result {
    padding: 10px;
    border-bottom: 1px solid var(--results-border-color, #aaa);
    color: var(--results-fg, #000);
    cursor: pointer;
    font-size: 0.9rem;
    list-style: none;
  }

  .search-result:hover {
    background: #0001;
  }
`;
