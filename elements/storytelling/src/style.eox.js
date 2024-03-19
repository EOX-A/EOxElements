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
    z-index: 1;
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
  .story-telling p {
    display: block;
    --font-size: 1.1rem;
    font-weight: 400;
    line-height: 170%;
    margin-top: 0.8rem;
    margin-bottom: 1.6rem;
  }
  .story-telling a {
    --font-size: 1.1rem;
    --color: var(--primary-color);
    --background-color: transparent;
    outline: 0;
    background-color: var(--background-color);
    color: var(--color);
    text-underline-offset: 4px;
    font-size: var(--font-size)
  }
  .story-telling a:hover {
    --bg-hover-transparency: 10%;
    background-color: color-mix(
      in srgb,
      var(--primary-color) var(--bg-hover-transparency),
      transparent
    );
  }
  .story-telling li {
    margin-bottom: 1rem;
  }
  .story-telling table {
    width:100%;
    color: var(--color);
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    margin: 2rem 0rem;
  }
  .story-telling td, 
  .story-telling th {
    padding: 1rem;
    color: var(--color);
    font-weight: 400;
    font-size: 1rem;
    text-align: left;
    text-align: start;
    border-bottom: 1px solid var(--color);
  }
  .story-telling th {
    font-weight: 600;
    border-bottom: 3px solid var(--color);
  }
  .story-telling .container {
    width: 90%;
    --block-spacing-vertical: 1rem;
  }
  .story-telling .tour {
    width: 100%;
    height: 100vh
  }
  .story-telling .tour eox-map {
    width: 100%;
    height: 100vh;
  }
`;
export default styleEOX;
