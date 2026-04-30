import{n as e}from"./chunk-jRWAZmH_.js";import{r as t}from"./react-DWT76DiB.js";import{it as n,nt as r}from"./iframe-DIuUgeFN.js";function i(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:`coding-agents`,children:`Coding Agents`}),`
`,(0,o.jsx)(n.p,{children:`EOxElements provides several resources to help AI coding agents understand and work with the library.`}),`
`,(0,o.jsx)(n.h2,{id:`llmstxt`,children:`LLMs.txt`}),`
`,(0,o.jsx)(n.p,{children:`We provide structured documentation files specifically designed for Large Language Models (LLMs). These files contain comprehensive information about the library, making it easy for AI tools to understand and assist with EOxElements development.`}),`
`,(0,o.jsx)(n.p,{children:`Available routes:`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:`./llms.txt`,children:(0,o.jsx)(n.code,{children:`/llms.txt`})}),` - Contains a structured overview of all documentation pages and their links.`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:`./llms-full.txt`,children:(0,o.jsx)(n.code,{children:`/llms-full.txt`})}),` - Provides comprehensive documentation including getting started guides, API references, and usage examples (snippets).`]}),`
`]}),`
`,(0,o.jsx)(n.h2,{id:`mcp-server`,children:`MCP Server`}),`
`,(0,o.jsxs)(n.p,{children:[`The EOxElements MCP Server provides a set of tools for a coding agent to get information about the EOxElements custom elements. It uses the `,(0,o.jsx)(n.a,{href:`https://github.com/modelcontextprotocol/typescript-sdk`,rel:`nofollow`,children:`@modelcontextprotocol/sdk`}),` to expose the tools.`]}),`
`,(0,o.jsx)(n.h3,{id:`hosted`,children:`Hosted`}),`
`,(0,o.jsx)(n.p,{children:`To use the MCP server without installing anything locally, you can point your coding agent to our hosted endpoint:`}),`
`,(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:`https://elements.mcp.eox.at`})}),`
`,(0,o.jsx)(n.h3,{id:`install`,children:`Install`}),`
`,(0,o.jsx)(n.h4,{id:`npx`,children:`NPX`}),`
`,(0,o.jsx)(n.p,{children:`You can use npx to run the mcp-server:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-bash`,children:`npx @eox/elements-mcp-server
`})}),`
`,(0,o.jsx)(n.h4,{id:`global-install`,children:`Global Install`}),`
`,(0,o.jsx)(n.p,{children:`Install the package globally from npm:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-bash`,children:`npm install -g @eox/elements-mcp-server
`})}),`
`,(0,o.jsx)(n.p,{children:`Then, run the server:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-bash`,children:`eox-elements-mcp-server
`})}),`
`,(0,o.jsx)(n.h3,{id:`getting-started`,children:`Getting Started`}),`
`,(0,o.jsxs)(n.p,{children:[`Every agentic AI software is different, but usually some config file needs to be set up to define the available MCP servers.
The `,(0,o.jsx)(n.code,{children:`@eox/elements-mcp-server`}),` will start on `,(0,o.jsx)(n.code,{children:`http://localhost:3000`}),` (hosted: `,(0,o.jsx)(n.code,{children:`https://elements.mcp.eox.at`}),`) and a compatible coding agent will be able to discover and use the tools from that endpoint.`]}),`
`,(0,o.jsx)(n.h3,{id:`available-tools`,children:`Available Tools`}),`
`,(0,o.jsx)(n.p,{children:`The following tools are available:`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`list_elements`}),`: List all available EOxElements custom elements.`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`get_element_details`}),`: Get the full details for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`get_element_stories`}),`: Get the stories (examples/snippets) for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`get_element_attributes`}),`: Get the attributes for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`get_element_properties`}),`: Get the properties for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`get_element_events`}),`: Get the events for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`get_element_methods`}),`: Get the methods for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`get_element_slots`}),`: Get the slots for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`get_element_css_properties`}),`: Get the CSS custom properties for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`get_element_css_parts`}),`: Get the CSS shadow parts for a specific EOxElements custom element.`]}),`
`]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=n(),r()}))();export{a as default};