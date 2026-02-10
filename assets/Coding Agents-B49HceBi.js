import{u as l,j as e}from"./iframe-DaKuImf6.js";import"./preload-helper-PPVm8Dsz.js";function n(t){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"coding-agents",children:"Coding Agents"}),`
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
`,e.jsx(s.h3,{id:"hosted",children:"Hosted"}),`
`,e.jsx(s.p,{children:"To use the MCP server without installing anything locally, you can point your coding agent to our hosted endpoint:"}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"https://elements.mcp.eox.at"})}),`
`,e.jsx(s.h3,{id:"install",children:"Install"}),`
`,e.jsx(s.h4,{id:"npx",children:"NPX"}),`
`,e.jsx(s.p,{children:"You can use npx to run the mcp-server:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npx @eox/elements-mcp-server
`})}),`
`,e.jsx(s.h4,{id:"global-install",children:"Global Install"}),`
`,e.jsx(s.p,{children:"Install the package globally from npm:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm install -g @eox/elements-mcp-server
`})}),`
`,e.jsx(s.p,{children:"Then, run the server:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`eox-elements-mcp-server
`})}),`
`,e.jsx(s.h3,{id:"getting-started",children:"Getting Started"}),`
`,e.jsxs(s.p,{children:[`Every agentic AI software is different, but usually some config file needs to be set up to define the available MCP servers.
The `,e.jsx(s.code,{children:"@eox/elements-mcp-server"})," will start on ",e.jsx(s.code,{children:"http://localhost:3000"})," (hosted: ",e.jsx(s.code,{children:"https://elements.mcp.eox.at"}),") and a compatible coding agent will be able to discover and use the tools from that endpoint."]}),`
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
