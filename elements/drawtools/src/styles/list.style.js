import { css } from "lit";
export default css`
  eox-drawtools-list {
    width: 100%;
  }

  ul {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0px;
  }

  ul ul {
    padding-left: 3rem;
  }

  li:hover {
    background: #f0f5f9;
  }

  li.selected {
    background: #f0f5f9;
  }

  li {
    border-bottom-width: 1px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-style: solid;
    border-bottom-color: #0041703a;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    padding: 0.25rem;
  }

  li:first-child {
    border-top-width: 1px;
    border-style: solid;
    border-top-color: #0041703a;
  }

  li {
    list-style: none;
  }

  li.sortable-chosen {
    background: #eeea;
  }

  li.sortable-drag {
    opacity: 0;
  }

  .list {
    display: flex;
    width: 100%;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    gap: 0.625rem;
    font-size: small;
  }

  label {
    gap: 0.625rem;
  }

  label,
  span {
    display: flex;
    flex-grow: 1;
    cursor: pointer;
    align-items: center;
    font-size: small;
  }
`;
