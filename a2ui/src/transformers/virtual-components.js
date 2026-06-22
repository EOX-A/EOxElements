import { storytellingVirtualComponents } from "./eox-storytelling-virtual-components.js";

// Central registry to export and combine virtual component definitions for all elements
export const virtualComponents = [
  ...storytellingVirtualComponents,
  // Add other virtual components here in the future:
  // ...mapVirtualComponents,
  // ...jsonformVirtualComponents,
];
