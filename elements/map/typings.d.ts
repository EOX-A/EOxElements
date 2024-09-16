import { EOxMap as eoxMap } from "./src/main";
declare global {
  export type EOxMap = eoxMap;
}

declare module "vite";

declare global {
  interface Window {
    eoxMapAdvancedOlFormats: any;
    eoxMapAdvancedOlLayers: any;
    eoxMapAdvancedOlSources: any;
  }
}
