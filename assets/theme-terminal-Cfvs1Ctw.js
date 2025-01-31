import{g as l}from"./index-DuuuSFPv.js";function _(t,c){for(var a=0;a<c.length;a++){const e=c[a];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in t)){const r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var m={exports:{}},o;function s(){return o||(o=1,function(t,c){ace.define("ace/theme/terminal-css",["require","exports","module"],function(a,e,n){n.exports=`.ace-terminal-theme .ace_gutter {
  background: #1a0005;
  color: steelblue
}

.ace-terminal-theme .ace_print-margin {
  width: 1px;
  background: #1a1a1a
}

.ace-terminal-theme {
  background-color: black;
  color: #DEDEDE
}

.ace-terminal-theme .ace_cursor {
  color: #9F9F9F
}

.ace-terminal-theme .ace_marker-layer .ace_selection {
  background: #424242
}

.ace-terminal-theme.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px black;
}

.ace-terminal-theme .ace_marker-layer .ace_step {
  background: rgb(0, 0, 0)
}

.ace-terminal-theme .ace_marker-layer .ace_bracket {
  background: #090;
}

.ace-terminal-theme .ace_marker-layer .ace_bracket-start {
  background: #090;
}

.ace-terminal-theme .ace_marker-layer .ace_bracket-unmatched {
  margin: -1px 0 0 -1px;
  border: 1px solid #900
}

.ace-terminal-theme .ace_marker-layer .ace_active-line {
  background: #2A2A2A
}

.ace-terminal-theme .ace_gutter-active-line {
  background-color: #2A112A
}

.ace-terminal-theme .ace_marker-layer .ace_selected-word {
  border: 1px solid #424242
}

.ace-terminal-theme .ace_invisible {
  color: #343434
}

.ace-terminal-theme .ace_keyword,
.ace-terminal-theme .ace_meta,
.ace-terminal-theme .ace_storage,
.ace-terminal-theme .ace_storage.ace_type,
.ace-terminal-theme .ace_support.ace_type {
  color: tomato
}

.ace-terminal-theme .ace_keyword.ace_operator {
  color: deeppink
}

.ace-terminal-theme .ace_constant.ace_character,
.ace-terminal-theme .ace_constant.ace_language,
.ace-terminal-theme .ace_constant.ace_numeric,
.ace-terminal-theme .ace_keyword.ace_other.ace_unit,
.ace-terminal-theme .ace_support.ace_constant,
.ace-terminal-theme .ace_variable.ace_parameter {
  color: #E78C45
}

.ace-terminal-theme .ace_constant.ace_other {
  color: gold
}

.ace-terminal-theme .ace_invalid {
  color: yellow;
  background-color: red
}

.ace-terminal-theme .ace_invalid.ace_deprecated {
  color: #CED2CF;
  background-color: #B798BF
}

.ace-terminal-theme .ace_fold {
  background-color: #7AA6DA;
  border-color: #DEDEDE
}

.ace-terminal-theme .ace_entity.ace_name.ace_function,
.ace-terminal-theme .ace_support.ace_function,
.ace-terminal-theme .ace_variable {
  color: #7AA6DA
}

.ace-terminal-theme .ace_support.ace_class,
.ace-terminal-theme .ace_support.ace_type {
  color: #E7C547
}

.ace-terminal-theme .ace_heading,
.ace-terminal-theme .ace_string {
  color: #B9CA4A
}

.ace-terminal-theme .ace_entity.ace_name.ace_tag,
.ace-terminal-theme .ace_entity.ace_other.ace_attribute-name,
.ace-terminal-theme .ace_meta.ace_tag,
.ace-terminal-theme .ace_string.ace_regexp,
.ace-terminal-theme .ace_variable {
  color: #D54E53
}

.ace-terminal-theme .ace_comment {
  color: orangered
}

.ace-terminal-theme .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYLBWV/8PAAK4AYnhiq+xAAAAAElFTkSuQmCC) right repeat-y;
}

.ace-terminal-theme .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/terminal",["require","exports","module","ace/theme/terminal-css","ace/lib/dom"],function(a,e,n){e.isDark=!0,e.cssClass="ace-terminal-theme",e.cssText=a("./terminal-css");var r=a("../lib/dom");r.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/terminal"],function(a){t&&(t.exports=a)})}()}(m)),m.exports}var i=s();const h=l(i),u=_({__proto__:null,default:h},[i]);export{u as t};
