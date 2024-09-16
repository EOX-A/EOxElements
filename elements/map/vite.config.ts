import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: "./src-2/main",
      name: "eox-map",
      // the proper extensions will be added
      fileName: "eox-map",
    },
  },
});
