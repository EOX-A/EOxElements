import{g as u}from"./index-BxHdHdow.js";function b(t,r){for(var n=0;n<r.length;n++){const e=r[n];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in t)){const c=Object.getOwnPropertyDescriptor(e,a);c&&Object.defineProperty(t,a,c.get?c:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},o;function A(){return o||(o=1,function(t,r){ace.define("ace/theme/github-css",["require","exports","module"],function(n,e,a){a.exports=`/* CSS style content from github's default pygments highlighter template.
   Cursor and selection styles from textmate.css. */
.ace-github .ace_gutter {
  background: #e8e8e8;
  color: #AAA;
}

.ace-github  {
  background: #fff;
  color: #000;
}

.ace-github .ace_keyword {
  font-weight: bold;
}

.ace-github .ace_string {
  color: #D14;
}

.ace-github .ace_variable.ace_class {
  color: teal;
}

.ace-github .ace_constant.ace_numeric {
  color: #099;
}

.ace-github .ace_constant.ace_buildin {
  color: #0086B3;
}

.ace-github .ace_support.ace_function {
  color: #0086B3;
}

.ace-github .ace_comment {
  color: #998;
  font-style: italic;
}

.ace-github .ace_variable.ace_language  {
  color: #0086B3;
}

.ace-github .ace_paren {
  font-weight: bold;
}

.ace-github .ace_boolean {
  font-weight: bold;
}

.ace-github .ace_string.ace_regexp {
  color: #009926;
  font-weight: normal;
}

.ace-github .ace_variable.ace_instance {
  color: teal;
}

.ace-github .ace_constant.ace_language {
  font-weight: bold;
}

.ace-github .ace_cursor {
  color: black;
}

.ace-github.ace_focus .ace_marker-layer .ace_active-line {
  background: rgb(255, 255, 204);
}
.ace-github .ace_marker-layer .ace_active-line {
  background: rgb(245, 245, 245);
}

.ace-github .ace_marker-layer .ace_selection {
  background: rgb(181, 213, 255);
}

.ace-github.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px white;
}
/* bold keywords cause cursor issues for some fonts */
/* this disables bold style for editor and keeps for static highlighter */
.ace-github.ace_nobold .ace_line > span {
    font-weight: normal !important;
}

.ace-github .ace_marker-layer .ace_step {
  background: rgb(252, 255, 0);
}

.ace-github .ace_marker-layer .ace_stack {
  background: rgb(164, 229, 101);
}

.ace-github .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-github .ace_gutter-active-line {
    background-color : rgba(0, 0, 0, 0.07);
}

.ace-github .ace_marker-layer .ace_selected-word {
  background: rgb(250, 250, 255);
  border: 1px solid rgb(200, 200, 250);
}

.ace-github .ace_invisible {
  color: #BFBFBF
}

.ace-github .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-github .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}

.ace-github .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
}
`}),ace.define("ace/theme/github",["require","exports","module","ace/theme/github-css","ace/lib/dom"],function(n,e,a){e.isDark=!1,e.cssClass="ace-github",e.cssText=n("./github-css");var c=n("../lib/dom");c.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/github"],function(n){t&&(t.exports=n)})}()}(i)),i.exports}var g=A();const s=u(g),h=b({__proto__:null,default:s},[g]);export{h as t};
