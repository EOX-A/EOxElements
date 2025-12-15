import{u as l,j as e}from"./iframe-B-z3c6Ma.js";import"./preload-helper-PPVm8Dsz.js";function n(t){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"coding-agents",children:"Coding Agents"}),`
`,e.jsx(s.p,{children:"EOxElements provides several resources to help AI coding agents understand and work with the library."}),`
`,e.jsx(s.h2,{id:"llmstxt",children:"LLMs.txt"}),`
`,e.jsx(s.p,{children:"We provide structured documentation files specifically designed for Large Language Models (LLMs). These files contain comprehensive information about the library, making it easy for AI tools to understand and assist with EOxElements development."}),`
`,e.jsx(s.p,{children:"Available routes:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"./llms.txt",children:e.jsx(s.code,{children:"/llms.txt"})})," - Contains a structured overview of all documentation pages and their links."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"./llms-full.txt",children:e.jsx(s.code,{children:"/llms-full.txt"})})," - Provides comprehensive documentation including getting started guides, API references, and usage examples (snippets)."]}),`
`]}),`
`,e.jsx(s.h2,{id:"mcp-server",children:"MCP Server"}),`
`,e.jsxs(s.p,{children:["The EOxElements MCP Server provides a set of tools for a coding agent to get information about the EOxElements custom elements. It uses the ",e.jsx(s.a,{href:"https://github.com/modelcontextprotocol/typescript-sdk",rel:"nofollow",children:"@modelcontextprotocol/sdk"})," to expose the tools."]}),`
`,e.jsx(s.h3,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(s.p,{children:"Install the package globally from npm:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm install -g @eox/elements-mcp-server
`})}),`
`,e.jsx(s.p,{children:"Then, run the server:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`eox-elements-mcp-server
`})}),`
`,e.jsxs(s.p,{children:["The server will fetch the latest ",e.jsx(s.code,{children:"custom-elements.json"})," from the EOxElements GitHub repository and start on ",e.jsx(s.code,{children:"http://localhost:3000"}),". A compatible coding agent will be able to discover and use the tools."]}),`
`,e.jsx(s.h3,{id:"available-tools",children:"Available Tools"}),`
`,e.jsx(s.p,{children:"The following tools are available:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"list_elements"}),": List all available EOxElements custom elements."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_element_details"}),": Get the full details for a specific EOxElements custom element."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_element_stories"}),": Get the stories (examples/snippets) for a specific EOxElements custom element."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_element_attributes"}),": Get the attributes for a specific EOxElements custom element."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_element_properties"}),": Get the properties for a specific EOxElements custom element."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_element_events"}),": Get the events for a specific EOxElements custom element."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_element_methods"}),": Get the methods for a specific EOxElements custom element."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_element_slots"}),": Get the slots for a specific EOxElements custom element."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_element_css_properties"}),": Get the CSS custom properties for a specific EOxElements custom element."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_element_css_parts"}),": Get the CSS shadow parts for a specific EOxElements custom element."]}),`
`]})]})}function r(t={}){const{wrapper:s}={...l(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{r as default};
