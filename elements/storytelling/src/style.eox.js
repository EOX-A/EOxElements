const styleEOX = `
  iframe,
  img,
  video {
    max-width: 100%;
  }
  .navigation {
    width: 100%;
    background: white;
    padding: 10px 0px;
    color: black;
    box-shadow: 0px 0px 13px 3px #8080802e;
    max-height: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
  }
  .navigation .container {
    padding: 0px;
  }
  .navigation .container ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: auto;
    margin: 0;
    padding: 0;
  }
  .navigation .container ul::-webkit-scrollbar { 
    display: none;
  }
  .navigation .container ul li {
    list-style: none;
    margin: 0px 10px;
  }
  .navigation li a {
    color: black;
    font-weight: 500;
    text-decoration: none;
    position: relative;
    display: inline-grid;
  }
  .navigation li a:after {
    content: "";
    bottom: -10px;
    width: 100%;
    height: 2px;
    background: transparent;
  }
  .navigation li a:hover:after {
    background: black;
  }
  .navigation li.active a {
    font-weight: 900;
  }
  .navigation li.active a:after {
    background: black;
  }
  .navigation li a:hover {
    --primary-background-hover: transparent;
  }
  .section-wrap {
    scroll-margin: 120px;
  }
`;
export default styleEOX;
