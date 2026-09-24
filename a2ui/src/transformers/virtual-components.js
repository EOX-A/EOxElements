import { storytellingVirtualComponents } from "./eox-storytelling-virtual-components.js";
import { mapVirtualComponents } from "./eox-map-virtual-components.js";

// Central registry to export and combine virtual component definitions for all elements
export const virtualComponents = [
  ...storytellingVirtualComponents,
  ...mapVirtualComponents
];
