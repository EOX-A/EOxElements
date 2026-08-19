import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./mdx-react-FbD155J4.js";function i(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`coding-agents`,children:`Coding Agents`}),`
`,(0,o.jsx)(t.p,{children:`EOxElements provides several resources to help AI coding agents understand and work with the library.`}),`
`,(0,o.jsx)(t.h2,{id:`llmstxt`,children:`LLMs.txt`}),`
`,(0,o.jsx)(t.p,{children:`We provide structured documentation files specifically designed for Large Language Models (LLMs). These files contain comprehensive information about the library, making it easy for AI tools to understand and assist with EOxElements development.`}),`
`,(0,o.jsx)(t.p,{children:`Available routes:`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:`./llms.txt`,children:(0,o.jsx)(t.code,{children:`/llms.txt`})}),` - Contains a structured overview of all documentation pages and their links.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:`./llms-full.txt`,children:(0,o.jsx)(t.code,{children:`/llms-full.txt`})}),` - Provides comprehensive documentation including getting started guides, API references, and usage examples (snippets).`]}),`
`]}),`
`,(0,o.jsx)(t.h2,{id:`mcp-server`,children:`MCP Server`}),`
`,(0,o.jsxs)(t.p,{children:[`The EOxElements MCP Server provides a set of tools for a coding agent to get information about the EOxElements custom elements. It uses the `,(0,o.jsx)(t.a,{href:`https://github.com/modelcontextprotocol/typescript-sdk`,rel:`nofollow`,children:`@modelcontextprotocol/sdk`}),` to expose the tools.`]}),`
`,(0,o.jsx)(t.h3,{id:`hosted`,children:`Hosted`}),`
`,(0,o.jsx)(t.p,{children:`To use the MCP server without installing anything locally, you can point your coding agent to our hosted endpoint:`}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:`https://elements.mcp.eox.at`})}),`
`,(0,o.jsx)(t.h3,{id:`install`,children:`Install`}),`
`,(0,o.jsx)(t.h4,{id:`npx`,children:`NPX`}),`
`,(0,o.jsx)(t.p,{children:`You can use npx to run the mcp-server:`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-bash`,children:`npx @eox/elements-mcp-server
`})}),`
`,(0,o.jsx)(t.h4,{id:`global-install`,children:`Global Install`}),`
`,(0,o.jsx)(t.p,{children:`Install the package globally from npm:`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-bash`,children:`npm install -g @eox/elements-mcp-server
`})}),`
`,(0,o.jsx)(t.p,{children:`Then, run the server:`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-bash`,children:`eox-elements-mcp-server
`})}),`
`,(0,o.jsx)(t.h3,{id:`getting-started`,children:`Getting Started`}),`
`,(0,o.jsxs)(t.p,{children:[`Every agentic AI software is different, but usually some config file needs to be set up to define the available MCP servers.
The `,(0,o.jsx)(t.code,{children:`@eox/elements-mcp-server`}),` will start on `,(0,o.jsx)(t.code,{children:`http://localhost:3000`}),` (hosted: `,(0,o.jsx)(t.code,{children:`https://elements.mcp.eox.at`}),`) and a compatible coding agent will be able to discover and use the tools from that endpoint.`]}),`
`,(0,o.jsx)(t.h3,{id:`available-tools`,children:`Available Tools`}),`
`,(0,o.jsx)(t.p,{children:`The following tools are available:`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`list_elements`}),`: List all available EOxElements custom elements.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`get_element_details`}),`: Get the full details for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`get_element_stories`}),`: Get the stories (examples/snippets) for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`get_element_attributes`}),`: Get the attributes for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`get_element_properties`}),`: Get the properties for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`get_element_events`}),`: Get the events for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`get_element_methods`}),`: Get the methods for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`get_element_slots`}),`: Get the slots for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`get_element_css_properties`}),`: Get the CSS custom properties for a specific EOxElements custom element.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`get_element_css_parts`}),`: Get the CSS shadow parts for a specific EOxElements custom element.`]}),`
`]}),`
`,(0,o.jsx)(t.h2,{id:`a2ui-integration`,children:`A2UI Integration`}),`
`,(0,o.jsxs)(t.p,{children:[`EOxElements is compatible with `,(0,o.jsxs)(t.a,{href:`https://a2ui.org/`,rel:`nofollow`,children:[(0,o.jsx)(t.strong,{children:`A2UI`}),` (Agent-to-User Interface)`]}),` via our `,(0,o.jsx)(t.code,{children:`@eox/elements-a2ui`}),` package. This allows AI coding agents and backend streams to dynamically generate and control complex layouts of maps, charts, forms, and tools using standard JSON streams.`]}),`
`,(0,o.jsx)(t.h3,{id:`custom-catalog`,children:`Custom Catalog`}),`
`,(0,o.jsx)(t.p,{children:`We publish two auto-generated catalogs containing Zod schemas for all EOxElements:`}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsxs)(t.li,{children:[`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`EOxElements Custom Catalog`}),`
This is our custom catalog containing strictly EOxElements components.`]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Catalog ID/URL`}),`: `,(0,o.jsx)(t.code,{children:`https://eox-a.github.io/EOxElements/a2ui/0_9/eox_catalog.json`})]}),`
`]}),`
`]}),`
`,(0,o.jsxs)(t.li,{children:[`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Combined Catalog`}),` (Additional Helper)
This is an additional helper catalog that combines standard `,(0,o.jsx)(t.code,{children:`@a2ui/lit`}),`'s `,(0,o.jsx)(t.code,{children:`basicCatalog`}),` with our custom EOxElements catalog. It is useful for applications that need both in one place.`]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Catalog ID/URL`}),`: `,(0,o.jsx)(t.code,{children:`https://eox-a.github.io/EOxElements/a2ui/0_9/combined_catalog.json`})]}),`
`]}),`
`]}),`
`]}),`
`,(0,o.jsxs)(t.h3,{id:`mounting-with-eox-a2ui-wrapper`,children:[`Mounting with `,(0,o.jsx)(t.code,{children:`<eox-a2ui-wrapper>`})]}),`
`,(0,o.jsx)(t.p,{children:`You can render this entire interactive workspace directly inside your webpage by using our wrapper element:`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-html`,children:`<!-- Load elements and wrappers -->
<script type="module">
  import "@eox/elements-a2ui";
  import "@eox/elements/map";
  import "@eox/elements/drawtools";
  import "@eox/elements/layercontrol";
<\/script>

<!-- Render the stream -->
<eox-a2ui-wrapper id="workspace-renderer"></eox-a2ui-wrapper>

<script>
  const renderer = document.getElementById('workspace-renderer');
  renderer.stream = /* the JSON specification stream above */;
<\/script>
`})}),`
`,(0,o.jsx)(t.h3,{id:`live-rendered-showcase`,children:`Live Rendered Showcase`}),`
`,(0,o.jsxs)(t.p,{children:[`You can view this interactive showcase as a full-screen, standalone demo in the `,(0,o.jsx)(t.strong,{children:`Demo`}),` category `,(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:`./?path=/story/demo--a-2-ui-showcase`,children:`here`})}),`.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),r()})))()}s();export{a as default};