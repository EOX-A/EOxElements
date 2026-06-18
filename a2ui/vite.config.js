import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "eox-elements-a2ui",
      fileName: "eox-elements-a2ui",
    },
  },
});
