import { button } from "../../../utils/styles/button";
import { checkbox } from "../../../utils/styles/checkbox";
import { radio } from "../../../utils/styles/radio";
import { slider } from "../../../utils/styles/slider";

const styleEOX = `
${button}
${checkbox}
${radio}
${slider}

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
    z-index: 2;
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
    font-weight: 700;
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
    --block-spacing-vertical: 2rem;
  }
  .story-telling.editor-enabled .section-wrap.section-item {
    position: relative;
    border-bottom: 1px solid #efefef;
  }
  .story-telling.editor-enabled .section-wrap.section-item.section-start {
    border-top: 1px solid #efefef;
  }
  .story-telling.editor-enabled .section-wrap.section-item::after, 
  .story-telling.editor-enabled .section-wrap.section-item.section-start::before {
    content: "+";
    background: white;
    width: 25px;
    height: 25px;
    display: flex;
    position: absolute;
    bottom: -12px;
    left: calc(50% - 12.5px);
    z-index: 1;
    border-radius: 100%;
    box-shadow: 1px 1px 10px #80808094;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: larger;
    cursor: pointer;
  }
  .story-telling.editor-enabled .section-wrap.section-item.section-start::before {
    top: -12px;
  }
  .story-telling .section-wrap.container.section-start {
    padding-top: 4rem;
  }
  .story-telling p:last-child {
    margin-bottom: 0;
  }
  .story-telling .section-wrap.container:last-child {
    padding-bottom: 4rem; 
  }
  .story-telling .tour {
    width: 100%;
    justify-items: start;
    display: grid;
  }
  .story-telling .hero {
    position: relative;      
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .story-telling .hero * {
    color: white;
    margin: 0rem 0.8rem;
  }
  .story-telling .hero.center {
    align-items: center;
    text-align: center;
  }
  .story-telling .hero.left {
    align-items: start;
    text-align: left;
  }
  .story-telling .hero.right {
    align-items: end;
    text-align: right;
  }
  .story-telling .hero img, 
  .story-telling .hero video {
    position: absolute;
    top: -17.5%;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 135%;
    object-fit: cover;
    margin: 0rem;
    will-change: transform;
    backface-visibility: hidden;
    filter: brightness(60%) contrast(100%);
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
    z-index: 4;
    width: 35%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 10px;
    background: #f2f2f2;
    cursor: move;
    box-shadow: 0px 0px 3px 2px #80808026;
    box-sizing: border-box;
  }
  .resize-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 4px;
    left: 4px;
    background-color: black;
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eresize-bottom-right%3C/title%3E%3Cpath d='M22,22H20V20H22V22M22,18H20V16H22V18M18,22H16V20H18V22M18,18H16V16H18V18M14,22H12V20H14V22M22,14H20V12H22V14Z' /%3E%3C/svg%3E");
    webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eresize-bottom-right%3C/title%3E%3Cpath d='M22,22H20V20H22V22M22,18H20V16H22V18M18,22H16V20H18V22M18,18H16V16H18V18M14,22H12V20H14V22M22,14H20V12H22V14Z' /%3E%3C/svg%3E");
    transform: rotate(90deg);
    cursor: sw-resize;
    z-index: 2;
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
    display: none;
    cursor: auto;
    position: absolute;
    bottom: 39px;
    left: 9px;
    width: calc(100% - 20px);
    height: 105px;
    background: #ffc7d3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 2px solid #ff7b9640;
    z-index: 1;
  }
  .editor-error .editor-error-wrapper {
    padding: 0.5rem;
    height: 85%;
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
    padding-inline-start: 20px;
  }
  .editor-error .editor-error-wrapper li {
    color: #dd264c;
    font-size: 0.7rem;
    font-weight: 400;
    margin-bottom: 0;
    margin-left: 0.2rem;
  }
  .editor-saver {
    position: absolute;    
    bottom: 18px;
    left: 17px;
    font-size: 12px;
    color: #959694;
    text-align: right;
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
    z-index: 5;
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
  .story-telling-custom-section-list {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000000b5;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .story-telling-custom-section-list .overlay-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    cursor: pointer;
  }
  .story-telling-custom-section-list .story-telling-popup {
    width: 450px;
    height: 500px;
    background: white;
    border-radius: 0.5rem;
    padding: 20px;
    position: relative;
  }
  .story-telling-section-fields-overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    background: #000000c9;
    height: 100%;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .story-telling-section-fields-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    background: white;
    height: 100%;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    box-shadow: -14px 3px 20px 0px #0e0e0e26;
  }
  .story-telling-popup-wrapper {
    overflow-y: auto;
    height: 100%;
  }
  .story-telling-custom-section-list .story-telling-popup .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
  .story-telling-custom-section-list .story-telling-popup .header:first-child {
    margin-top:0px;
  }
  .story-telling-custom-section-list .story-telling-popup .header h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }
  .story-telling-custom-section-list .story-telling-popup .header p {
    background: #2273EC;
    border-radius: 20px;
    padding: 0px 15px;
    color: white;
    height: 1.1rem;
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 0.75rem;
  }
  .story-telling-custom-section-list .story-telling-popup hr {
    border-top: 2.5px solid #e5eaf0;
  }
  .story-telling-custom-section-list .story-telling-popup .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .story-telling-custom-section-list .story-telling-popup .grid-container .grid-item {
    text-align: center;
    cursor: pointer;
    padding: 0px;
    border: 1px solid #e1e6eb;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
  }
  .story-telling-custom-section-list .story-telling-popup .grid-container .grid-item:hover {
    border-color: #2273EC;
    background-color: #f7f7f7;
  }
  .story-telling-custom-section-list .story-telling-popup .grid-container .grid-item icon {
    font-size: 0px;
  }
  .story-telling-custom-section-list .story-telling-popup .grid-container .grid-item icon::before {
    width: 100%;
    color: black;
    display: inline-block;
    border-radius: 6px;
  }
  .story-telling-custom-section-list .story-telling-popup .grid-container .grid-item p {
    padding: 0px;
    margin: 0px;
    font-size: 0.8rem;
    color: #555555;
    font-weight: 500;
    padding: 4px 0px;
  }
  eox-jsonform#storytelling-editor-fields {
    padding-bottom: 80px;
    height: auto;
    display: block;
  }
  eox-jsonform#storytelling-editor-fields div {
    height: auto;
  }
  .story-telling-section-fields-overflow {
    overflow-y: auto;
    height: calc(100% - 60px);
    padding: 20px;
  }
  .story-telling-section-submit-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 10px 0px;
    background: white;
    display: flex;
    justify-content: center;
    box-shadow: -2px -10px 10px #00000017;
    border-bottom-right-radius: 0.5rem;
  }
  .story-telling-section-submit-wrapper button {
    width: 92%;
    justify-content: center;
  }
  eox-jsonform#storytelling-editor-fields .je-form-input-label {
    text-transform: capitalize;
  }
  eox-jsonform#storytelling-editor-fields .je-object__controls {
    display: none; 
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
