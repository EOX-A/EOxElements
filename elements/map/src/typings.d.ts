import { EOxMap as eoxMap } from "./src/main";
declare global {
  export type EOxMap = eoxMap;
  interface Window {
    __eoxMapRegistry?: Record<string, any>;
  }
}

declare module "vite";
