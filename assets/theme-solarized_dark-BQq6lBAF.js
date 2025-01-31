import{g as l}from"./index-DuuuSFPv.js";function s(n,o){for(var a=0;a<o.length;a++){const e=o[a];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in n)){const c=Object.getOwnPropertyDescriptor(e,r);c&&Object.defineProperty(n,r,c.get?c:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var d={exports:{}},t;function _(){return t||(t=1,function(n,o){ace.define("ace/theme/solarized_dark-css",["require","exports","module"],function(a,e,r){r.exports=`.ace-solarized-dark .ace_gutter {
  background: #01313f;
  color: #d0edf7
}

.ace-solarized-dark .ace_print-margin {
  width: 1px;
  background: #33555E
}

.ace-solarized-dark {
  background-color: #002B36;
  color: #839496
}

.ace-solarized-dark .ace_entity.ace_other.ace_attribute-name,
.ace-solarized-dark .ace_storage {
  color: #839496
}

.ace-solarized-dark .ace_cursor,
.ace-solarized-dark .ace_string.ace_regexp {
  color: #D30102
}

.ace-solarized-dark .ace_marker-layer .ace_active-line,
.ace-solarized-dark .ace_marker-layer .ace_selection {
  background: rgba(255, 255, 255, 0.1)
}

.ace-solarized-dark.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #002B36;
}

.ace-solarized-dark .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-solarized-dark .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(147, 161, 161, 0.50)
}

.ace-solarized-dark .ace_gutter-active-line {
  background-color: #0d3440
}

.ace-solarized-dark .ace_marker-layer .ace_selected-word {
  border: 1px solid #073642
}

.ace-solarized-dark .ace_invisible {
  color: rgba(147, 161, 161, 0.50)
}

.ace-solarized-dark .ace_keyword,
.ace-solarized-dark .ace_meta,
.ace-solarized-dark .ace_support.ace_class,
.ace-solarized-dark .ace_support.ace_type {
  color: #859900
}

.ace-solarized-dark .ace_constant.ace_character,
.ace-solarized-dark .ace_constant.ace_other {
  color: #CB4B16
}

.ace-solarized-dark .ace_constant.ace_language {
  color: #B58900
}

.ace-solarized-dark .ace_constant.ace_numeric {
  color: #D33682
}

.ace-solarized-dark .ace_fold {
  background-color: #268BD2;
  border-color: #93A1A1
}

.ace-solarized-dark .ace_entity.ace_name.ace_function,
.ace-solarized-dark .ace_entity.ace_name.ace_tag,
.ace-solarized-dark .ace_support.ace_function,
.ace-solarized-dark .ace_variable,
.ace-solarized-dark .ace_variable.ace_language {
  color: #268BD2
}

.ace-solarized-dark .ace_string {
  color: #2AA198
}

.ace-solarized-dark .ace_comment {
  font-style: italic;
  color: #657B83
}

.ace-solarized-dark .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNg0Db1ZVCxc/sPAAd4AlUHlLenAAAAAElFTkSuQmCC) right repeat-y
}

.ace-solarized-dark .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/solarized_dark",["require","exports","module","ace/theme/solarized_dark-css","ace/lib/dom"],function(a,e,r){e.isDark=!0,e.cssClass="ace-solarized-dark",e.cssText=a("./solarized_dark-css");var c=a("../lib/dom");c.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/solarized_dark"],function(a){n&&(n.exports=a)})}()}(d)),d.exports}var i=_();const k=l(i),u=s({__proto__:null,default:k},[i]);export{u as t};
