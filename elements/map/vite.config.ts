import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: "./main.js",
      name: "eox-map",
      // the proper extensions will be added
      fileName: "eox-map",
    },
  },
});
