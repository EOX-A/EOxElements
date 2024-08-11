import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.js",
      name: "eox-drawtools",
      // the proper extensions will be added
      fileName: "eox-drawtools",
    },
  },
});
