import { EOxMap as eoxMap } from "./src/main";
declare global {
  export type EOxMap = eoxMap;
}

declare module "vite";