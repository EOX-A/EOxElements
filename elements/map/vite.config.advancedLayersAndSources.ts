import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/plugins/advancedLayersAndSources/index.ts",
      name: "eox-map-advanced-layers-and-sources",
      // the proper extensions will be added
      fileName: "eox-map-advanced-layers-and-sources",
    },
  },
});
