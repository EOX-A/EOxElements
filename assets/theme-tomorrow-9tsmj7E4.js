import{g as _}from"./index-BxHdHdow.js";function i(a,c){for(var e=0;e<c.length;e++){const o=c[e];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in a)){const n=Object.getOwnPropertyDescriptor(o,r);n&&Object.defineProperty(a,r,n.get?n:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var t={exports:{}},m;function s(){return m||(m=1,function(a,c){ace.define("ace/theme/tomorrow-css",["require","exports","module"],function(e,o,r){r.exports=`.ace-tomorrow .ace_gutter {
  background: #f6f6f6;
  color: #4D4D4C
}

.ace-tomorrow .ace_print-margin {
  width: 1px;
  background: #f6f6f6
}

.ace-tomorrow {
  background-color: #FFFFFF;
  color: #4D4D4C
}

.ace-tomorrow .ace_cursor {
  color: #AEAFAD
}

.ace-tomorrow .ace_marker-layer .ace_selection {
  background: #D6D6D6
}

.ace-tomorrow.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
}

.ace-tomorrow .ace_marker-layer .ace_step {
  background: rgb(255, 255, 0)
}

.ace-tomorrow .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #D1D1D1
}

.ace-tomorrow .ace_marker-layer .ace_active-line {
  background: #EFEFEF
}

.ace-tomorrow .ace_gutter-active-line {
  background-color : #dcdcdc
}

.ace-tomorrow .ace_marker-layer .ace_selected-word {
  border: 1px solid #D6D6D6
}

.ace-tomorrow .ace_invisible {
  color: #D1D1D1
}

.ace-tomorrow .ace_keyword,
.ace-tomorrow .ace_meta,
.ace-tomorrow .ace_storage,
.ace-tomorrow .ace_storage.ace_type,
.ace-tomorrow .ace_support.ace_type {
  color: #8959A8
}

.ace-tomorrow .ace_keyword.ace_operator {
  color: #3E999F
}

.ace-tomorrow .ace_constant.ace_character,
.ace-tomorrow .ace_constant.ace_language,
.ace-tomorrow .ace_constant.ace_numeric,
.ace-tomorrow .ace_keyword.ace_other.ace_unit,
.ace-tomorrow .ace_support.ace_constant,
.ace-tomorrow .ace_variable.ace_parameter {
  color: #F5871F
}

.ace-tomorrow .ace_constant.ace_other {
  color: #666969
}

.ace-tomorrow .ace_invalid {
  color: #FFFFFF;
  background-color: #C82829
}

.ace-tomorrow .ace_invalid.ace_deprecated {
  color: #FFFFFF;
  background-color: #8959A8
}

.ace-tomorrow .ace_fold {
  background-color: #4271AE;
  border-color: #4D4D4C
}

.ace-tomorrow .ace_entity.ace_name.ace_function,
.ace-tomorrow .ace_support.ace_function,
.ace-tomorrow .ace_variable {
  color: #4271AE
}

.ace-tomorrow .ace_support.ace_class,
.ace-tomorrow .ace_support.ace_type {
  color: #C99E00
}

.ace-tomorrow .ace_heading,
.ace-tomorrow .ace_markup.ace_heading,
.ace-tomorrow .ace_string {
  color: #718C00
}

.ace-tomorrow .ace_entity.ace_name.ace_tag,
.ace-tomorrow .ace_entity.ace_other.ace_attribute-name,
.ace-tomorrow .ace_meta.ace_tag,
.ace-tomorrow .ace_string.ace_regexp,
.ace-tomorrow .ace_variable {
  color: #C82829
}

.ace-tomorrow .ace_comment {
  color: #8E908C
}

.ace-tomorrow .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y
}

.ace-tomorrow .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
} 
`}),ace.define("ace/theme/tomorrow",["require","exports","module","ace/theme/tomorrow-css","ace/lib/dom"],function(e,o,r){o.isDark=!1,o.cssClass="ace-tomorrow",o.cssText=e("./tomorrow-css");var n=e("../lib/dom");n.importCssString(o.cssText,o.cssClass,!1)}),function(){ace.require(["ace/theme/tomorrow"],function(e){a&&(a.exports=e)})}()}(t)),t.exports}var A=s();const w=_(A),u=i({__proto__:null,default:w},[A]);export{u as t};
