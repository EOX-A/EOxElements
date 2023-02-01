import Map from "ol/Map.js";

declare global {
  interface Window {
    map: Map;
  }
}

export {};
