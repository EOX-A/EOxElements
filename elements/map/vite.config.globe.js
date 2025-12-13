import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/plugins/globe/index.js",
      name: "eox-map-globe",
      // the proper extensions will be added
      fileName: "eox-map-globe",
    },
  },
});
