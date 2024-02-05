const list = `
  ul.list-wrap {
    padding: 0;
  }
  ul.list-wrap li:hover, 
  ul.list-wrap li.selected  {
    background: var(--primary-background-hover);
  }
  ul.list-wrap li {
    list-style: none;
    padding: 4px;
  }
  ul.list-wrap li {
    border-bottom: 1.2px solid var(--secondary);
  }
  ul.list-wrap li:first-child {
    border-top: 1.2px solid var(--secondary);
  }
  ul.list-wrap li .list {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: small;
    gap: 10px;
  }
  ul.list-wrap li .list span {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: small;
    flex-grow: 1;
  }
`;

export default list;
