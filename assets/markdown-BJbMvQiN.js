import{g as u}from"./index-BxHdHdow.js";function $(o,i){for(var e=0;e<i.length;e++){const t=i[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in o)){const p=Object.getOwnPropertyDescriptor(t,n);p&&Object.defineProperty(o,n,p.get?p:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var s={exports:{}},r;function c(){return r||(r=1,function(o,i){ace.define("ace/snippets/markdown.snippets",["require","exports","module"],function(e,t,n){n.exports=`# Markdown

# Includes octopress (http://octopress.org/) snippets

snippet [
	[\${1:text}](http://\${2:address} "\${3:title}")
snippet [*
	[\${1:link}](\${2:\`@*\`} "\${3:title}")\${4}

snippet [:
	[\${1:id}]: http://\${2:url} "\${3:title}"
snippet [:*
	[\${1:id}]: \${2:\`@*\`} "\${3:title}"

snippet ![
	![\${1:alttext}](\${2:/images/image.jpg} "\${3:title}")
snippet ![*
	![\${1:alt}](\${2:\`@*\`} "\${3:title}")\${4}

snippet ![:
	![\${1:id}]: \${2:url} "\${3:title}"
snippet ![:*
	![\${1:id}]: \${2:\`@*\`} "\${3:title}"

snippet ===
regex /^/=+/=*//
	\${PREV_LINE/./=/g}
	
	\${0}
snippet ---
regex /^/-+/-*//
	\${PREV_LINE/./-/g}
	
	\${0}
snippet blockquote
	{% blockquote %}
	\${1:quote}
	{% endblockquote %}

snippet blockquote-author
	{% blockquote \${1:author}, \${2:title} %}
	\${3:quote}
	{% endblockquote %}

snippet blockquote-link
	{% blockquote \${1:author} \${2:URL} \${3:link_text} %}
	\${4:quote}
	{% endblockquote %}

snippet bt-codeblock-short
	\`\`\`
	\${1:code_snippet}
	\`\`\`

snippet bt-codeblock-full
	\`\`\` \${1:language} \${2:title} \${3:URL} \${4:link_text}
	\${5:code_snippet}
	\`\`\`

snippet codeblock-short
	{% codeblock %}
	\${1:code_snippet}
	{% endcodeblock %}

snippet codeblock-full
	{% codeblock \${1:title} lang:\${2:language} \${3:URL} \${4:link_text} %}
	\${5:code_snippet}
	{% endcodeblock %}

snippet gist-full
	{% gist \${1:gist_id} \${2:filename} %}

snippet gist-short
	{% gist \${1:gist_id} %}

snippet img
	{% img \${1:class} \${2:URL} \${3:width} \${4:height} \${5:title_text} \${6:alt_text} %}

snippet youtube
	{% youtube \${1:video_id} %}

# The quote should appear only once in the text. It is inherently part of it.
# See http://octopress.org/docs/plugins/pullquote/ for more info.

snippet pullquote
	{% pullquote %}
	\${1:text} {" \${2:quote} "} \${3:text}
	{% endpullquote %}
`}),ace.define("ace/snippets/markdown",["require","exports","module","ace/snippets/markdown.snippets"],function(e,t,n){t.snippetText=e("./markdown.snippets"),t.scope="markdown"}),function(){ace.require(["ace/snippets/markdown"],function(e){o&&(o.exports=e)})}()}(s)),s.exports}var l=c();const a=u(l),k=$({__proto__:null,default:a},[l]);export{k as m};
