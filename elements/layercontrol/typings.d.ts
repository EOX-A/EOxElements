import { EOxLayerControl as eoxLayerControl } from "./src/main";
import { MockMap as mockMap } from "./test/_mockMap";

declare global {
  export type EOxLayerControl = eoxLayerControl;
  export type MockMap = mockMap;
}
