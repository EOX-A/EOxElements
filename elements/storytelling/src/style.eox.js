import eoxStyle from "@eox/ui/style.css?inline";
import { addCommonStylesheet } from "@eox/elements-utils";

addCommonStylesheet();

const styleEOX = `
  ${eoxStyle}

  /* Typography overrides */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    --font-weight: 700;
  }
  h1 {
    --font-size: 3rem;
    --typography-spacing-vertical: 0.5rem;
  }
  h2 {
    --font-size: 2rem;
    --typography-spacing-vertical: 0.5rem;
  }
  h3 {
    --font-size: 1.75rem;
    --typography-spacing-vertical: 0.5rem;
  }
  h4 {
    --font-size: 1.5rem;
    --typography-spacing-vertical: 0.5rem;
  }
  h5 {
    --font-size: 1.25rem;
    --typography-spacing-vertical: 0.5rem;
  }
  .story-telling h1,
  .story-telling h2,
  .story-telling h3,
  .story-telling h4,
  .story-telling h5,
  .story-telling h6 {
    margin-top: 0;
    margin-bottom: var(--typography-spacing-vertical);
    font-weight: var(--font-weight);
    font-size: var(--font-size);
    font-family: var(--header-font-family);
  }

  .story-telling .hero h1 {
    font-size:clamp(2rem, 5vw, 3rem);
  }

  pre {
    position: relative;
    border-radius: 4px;
    z-index: 1;
    margin: 0;
    padding: 20px 0;
    background: transparent;
    background: var(--code-bg-color, #8e96aa24);
    overflow: auto;
  }
  code {
    display: block;
    padding: 0 24px;
    width: fit-content;
    min-width: 100%;
    line-height: var(--code-line-height, 1.7);
    font-family: var(--code-font-family, monospace);
    font-size: var(--code-font-size, var(--font-size));
    color: var(--code-color, #004170);
  }
  :not(pre) > code {
    display: inline;
    border-radius: 4px;
    background: var(--code-bg-color, #8e96aa24);
    padding: var(--code-padding, 3px 6px);
  }

  :host {
    overflow: unset !important;
    --eox-storytelling-hero-height: 76dvh;
  }

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
    padding: 0px !important;
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
    flex: 1;
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
  .navigation li a small.truncate {
    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial !important;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .hamburger-menu {
    display: none;
    cursor: pointer;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTUsOS41TDcuNSwxNEgyLjVMNSw5LjVNMyw0SDdWOEgzVjRNNSwyMEEyLDIgMCAwLDAgNywxOEEyLDIgMCAwLDAgNSwxNkEyLDIgMCAwLDAgMywxOEEyLDIgMCAwLDAgNSwyME05LDVWN0gyMVY1SDlNOSwxOUgyMVYxN0g5VjE5TTksMTNIMjFWMTFIOVYxM1oiIC8+PC9zdmc+");
    background-repeat: no-repeat;
    background-size: contain;
    width: 30px;
    height: 30px;
  }
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .nav-overlay {
    display: none;
  }
  @media (max-width: 768px) {
    .navigation {
      padding: 0px;
      height: 50px;
    }
    .navigation .container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .hamburger-menu {
      display: flex;
    }
    .navigation .container ul {
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      background: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      z-index: 99999999;
      display: none;
      flex-direction: column;
    }
    .nav-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 99999998;
      cursor: pointer;
    }
    .navigation .container ul.show, .nav-overlay.show {
      display: flex !important;
    }
    .nav-list li {
      padding: 15px;
      border-bottom: 1px solid #eee;
    }
    .hamburger-menu.active span:nth-child(1) {
      transform: rotate(45deg) translate(8px, 8px);
    }
    .hamburger-menu.active span:nth-child(2) {
      opacity: 0;
    }
    .hamburger-menu.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
    .navigation .container ul li {
      width: 100%;
      text-align: center;
    } 
  }
  .section-wrap {
    scroll-margin: 0px;
  }
  .story-telling p,
  .story-telling code {
    --font-size: 1.1rem;
  }
  .story-telling p {
    display: block;
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
  .story-telling sup a {
    font-size: smaller;
  }
  .story-telling sup a,
  .story-telling a.footnote-backref {
    text-decoration: none;
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
    --block-spacing-horizontal: 1rem;
    --spacing: 1rem;
    margin-right: auto;
    margin-left: auto;
    display: block;
    padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  }

  @media (min-width: 576px) {
    .story-telling .container {
      max-width: 510px;
      padding-right: 0;
      padding-left: 0;
      --block-spacing-vertical: calc(var(--spacing)* 2.5);
    }
  }

  @media (min-width: 768px) {
    .story-telling .container {
      max-width: 700px;
      --block-spacing-vertical: calc(var(--spacing)* 3);
    }
  }

  @media (min-width: 992px) {
    .story-telling .container {
      max-width: 920px;
      --block-spacing-vertical: calc(var(--spacing)* 3.5);
    }
  }

  .story-telling .section-wrap.section-item * {
    overflow-x: hidden;
  }

  .story-telling.editor-enabled .section-wrap.section-item {
    position: relative;
    border-bottom: 1px solid #efefef;
  }
  .story-telling .section-wrap.section-item.section-after-nav{
    margin-top: 2rem;
  }
  .story-telling.editor-enabled .section-wrap.section-item.section-end::after, 
  .story-telling.editor-enabled .section-wrap.section-item::before {
    content: "+";
    background: white;
    width: 25px;
    height: 25px;
    display: flex;
    position: absolute;
    top: -12px;
    left: calc(50% - 12.5px);
    z-index: 1;
    border-radius: 100%;
    box-shadow: 1px 1px 10px #80808094;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: larger;
    cursor: pointer;
    line-height: 25px;
  }
  .story-telling.editor-enabled:not(.nav-enabled) .section-wrap.section-item.section-start::before {
    top: 10px;
  }
  .story-telling.editor-enabled .section-wrap.section-item.section-start.hero::before {
    display: none;
  }
  .story-telling.editor-enabled.editor-closed .section-wrap.section-item.section-end::after, 
  .story-telling.editor-enabled.editor-closed .section-wrap.section-item::before {
    display: none;
  }
  .story-telling.editor-enabled .section-wrap.section-item.section-end::after {
    bottom: -12px;
    top: unset;
  }
  .story-telling .section-wrap.container.section-start:not(.hero) {
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
    height: var(--eox-storytelling-hero-height);
    padding: 10rem 2rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .story-telling .hero .hero-scroll-indicator {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(-45deg);
    animation: bounce 2s infinite;
    cursor: pointer;
    text-decoration: none;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0) rotate(-45deg);
    }
    25% {
      transform: translateY(-15px) rotate(-45deg);
    }
    50% {
      transform: translateY(0) rotate(-45deg);
    }
    75% {
      transform: translateY(-7px) rotate(-45deg);
    }
    100% {
      transform: translateY(0) rotate(-45deg);
    }
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
  .story-telling .tour eox-map:not(section-step eox-map),
  .story-telling .tour img:not(section-step img),
  .story-telling .tour video:not(section-step video) {
    width: 100%;
    height: 100dvh;
    position: sticky;
    top:0;
    z-index: 0;
    object-fit: cover;
  }
  .story-telling .tour section-step {
    background: rgb(255,255,255,0.8);
    backdrop-filter: blur(10px);
    padding: 1.5rem;
    box-shadow: var(--elevate2);
    border-radius: 0.5rem;
    min-height: 8vh;
    margin: 1rem 10% 120vh 10%;
    display: block;
    z-index: 1;
    max-width: 25%;
  }
  @media screen and (max-width: 1024px) {
    .story-telling .tour section-step {
      max-width: 100%;
      margin: 1rem 1rem 120vh 1rem;
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
  .editor-opacity-none {
    opacity: 0;
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
    z-index: 5;
    transform: scale(1.25);
  }
  .switch-button i > svg {
    padding: 0.3rem;
  }
  .switch .icon.editor-view {
    opacity: 0;
  }
  .story-telling-custom-section-list {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100dvh;
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
    height: 100dvh;
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
  .story-telling-section-fields {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
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
  .story-telling .eox-map-overlay {
    position: absolute;
    color: white;
    display: flex;
  }
  .story-telling .eox-map-overlay-content {
    padding: 1.5rem;
    width: 400px;
    height: fit-content;
    border-radius: 10px;
    background: #00000075;
  }
  .story-telling .eox-map-overlay.overlay-bl {
    align-items: end;
    justify-content: flex-start;
    bottom: 3rem;
    left: 2rem;
  }
  .story-telling .eox-map-overlay.overlay-br {
    align-items: end;
    justify-content: flex-end;    
    bottom: 3rem;
    right: 2rem;
  }
  .story-telling .eox-map-overlay.overlay-tl {
    align-items: start;
    justify-content: flex-start;
    top: 5rem;
    left: 2rem;
  }
  .story-telling .eox-map-overlay.overlay-tr {
    align-items: start;
    justify-content: flex-end;
    top: 5rem;
    right: 2rem;
  }
  .story-telling .tour .eox-map-overlay {
    position: fixed;
    width: auto;
    justify-content: center;
    display: none;
  }
  .story-telling .tour.show-overlay .eox-map-overlay {
    display: flex;
  }
  .story-telling .tour .eox-map-overlay.overlay-tl {
    top: 2rem;
    left: 2rem;
  }
  .story-telling .tour .eox-map-overlay.overlay-tr {
    top: 2rem;
    right: 2rem;
  }
  .story-telling.nav-enabled .tour .eox-map-overlay.overlay-tl,
  .story-telling.nav-enabled .tour .eox-map-overlay.overlay-tr {
    top: 7rem;
  }
  .story-telling .tour .eox-map-overlay.overlay-bl {
    bottom: 2rem;
    left: 2rem;
  }
  .story-telling .tour .eox-map-overlay.overlay-br {
    bottom: 2rem;
    right: 2rem;
  }
  @media screen and (max-width: 768px) {
    .story-telling .eox-map-overlay.overlay-tl,
    .story-telling .eox-map-overlay.overlay-tr,
    .story-telling .eox-map-overlay.overlay-bl,
    .story-telling .eox-map-overlay.overlay-br {
      width: calc(100% - 2rem);
      right: unset;
      left: unset;
      justify-content: center;
      align-items: end;
    }
    .story-telling .eox-map-overlay-content {
      width: 80%;
      padding: 1rem;
    }
    .story-telling .tour .eox-map-overlay.overlay-tr,
    .story-telling .tour .eox-map-overlay.overlay-tl,
    .story-telling .tour .eox-map-overlay.overlay-bl,
    .story-telling .tour .eox-map-overlay.overlay-br {
      top: 2rem;
      width: 100dvw;
      right: unset;
      left: unset;
    }
    .story-telling.nav-enabled .tour .eox-map-overlay.overlay-tr,
    .story-telling.nav-enabled .tour .eox-map-overlay.overlay-tl {
      top: 5rem;
    }
  }
`;
export default styleEOX;
