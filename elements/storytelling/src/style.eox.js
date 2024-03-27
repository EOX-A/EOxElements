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
    justify-items: start;
    display: grid;
  }
  .story-telling .tour.left {
    justify-items: start;
  }
  .story-telling .tour.right {
    justify-items: end;
  }
  .story-telling .tour.center {
    justify-items: center;
  }
  .story-telling .tour eox-map {
    width: 100%;
    height: 100vh;
    position: sticky;
    top:0;
    z-index: 0;
  }
  .story-telling .tour section-step {
    background: white;
    padding: 0.75rem;
    border-radius: 0.5rem;
    min-height: 8vh;
    margin: 1rem;
    margin-bottom: calc(120vh);
    display: block;
    z-index: 1;
    max-width: 40%;
  }
  @media screen and (max-width: 1024px) {
    .story-telling .tour section-step {
      max-width: 100%;
    }
  }
  .editor-wrapper {
    z-index: 9999;
    width: 35%;
    height: calc(100vh - 40px);
    position: fixed;
    top: 20px;
    right: 20px;
    border-radius: 10px;
    background: #f2f2f2;
    cursor: move;
    box-shadow: 0px 0px 3px 2px #80808026;
    box-sizing: border-box;
  }
  .resize-handle {
    display: none;
    position: absolute;
    width: 10px;
    height: 10px;
    bottom: 0;
    left: 0;
    background-color: #444444;
    cursor: sw-resize;
    z-index: 1;
  }
  .editor-wrapper.partial-height {
    height: calc(100vh - 120px);
    top: 100px
  }
  #editor {
    width: 100%;
    height: 100%;
    border: 2px solid #ebebeb;
    cursor: auto;
  }
  @media screen and (max-width: 1024px) {
    .editor-wrapper {
      right: 2.5%;
      width: 95%;
    }
  }
  .editor-hide {
    display: none;
  }
  .editor-error {
    cursor: auto;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 105px;
    background: #ffc7d3;
    border-bottom-right-radius: 10px;
    border: 2px solid #ff7b9640;
  }
  .editor-error .editor-error-wrapper {
    padding: 0.5rem;
    height: 100%;
  }
  .editor-error .editor-error-wrapper .overflow { 
    height: 100%;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 85%;
  }
  .editor-error .editor-error-wrapper .overflow::-webkit-scrollbar { 
    display: none;
  }
  .editor-error .editor-error-wrapper h6 {
    margin: 0;
    padding: 0;
    font-size: 0.7rem;
    color: #dd264c;
  }
  .editor-error .editor-error-wrapper ul {
    margin-top: 0.25rem;
  }
  .editor-error .editor-error-wrapper li {
    color: #dd264c;
    font-size: 0.6rem;
    font-weight: 400;
    margin-bottom: 0;
    margin-left: 0.2rem;
  }
  .editor-saver {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 10px;
    animation: rotate 1s linear infinite;
    display: none;
  }
  .editor-saver::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #5b5b5b85;
    animation: spin 2s linear infinite ;
  }
  @keyframes rotate {
    100% {transform: rotate(360deg)}
  }
  @keyframes spin {
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
  }
  .switch-button {
    position: fixed;
    bottom: 70px;
    right: 60px;
    display: inline-block;
    font-size: 0;
    z-index: 99999;
    border: 5px white solid;
    border-radius: 34px;
    box-shadow: 1px 2px 10px 1px #7e7e7e59;
    cursor: pointer;
  }
  .switch {
    position: relative;
    display: flex;
    align-items: center;
    width: 65px;
    height: 34px;
    font-size: 16px;
    justify-content: space-around;
    margin-bottom: 0px;
  }
  .switch .switch-input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  .switch .icon {
    z-index: 2;
    width: 30px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .switch .icon::before {
    cursor: pointer;
    display: block;
    width: 18px;
    height: 18px;
  }
  .view-icon {
    padding-left: 8px;
  }
  .editor-icon {
    padding-right: 8px;
  }
  .switch .view-icon:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eeye%3C/title%3E%3Cpath fill='white' d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z' /%3E%3C/svg%3E");
  }
  .switch .icon.editor-icon:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Epencil%3C/title%3E%3Cpath fill='white' d='M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z' /%3E%3C/svg%3E");
  }
  .switch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    z-index: 1;
    background-color: #727272;
    transition: .4s;
    border-radius: 34px;
    left: 0px;
    right: 0px;
    width: 65px;
  }
  .switch-slider:before {
    cursor: pointer;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  .switch-input:checked + .switch-slider {
    background-color: #2196F3;
  }
  .switch-input:checked + .switch-slider:before {
    transform: translateX(30px);
  }
  .switch .icon.editor-view {
    opacity: 0;
  }
  @media screen and (max-width: 1024px) {
    .switch-button {
      right: 20px;
    }
  }
  .section-line-decoration {
    background: #757575;
    z-index: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
  }
  .margin-view-overlays {
    background: #e6e6e6;
  }
`;
export default styleEOX;
