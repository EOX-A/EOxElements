import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: "./src/main.js",
      name: "eox-globe",
      fileName: "eox-globe",
    },
    rollupOptions: {
      external: ["cesium", "lit"],
    },
  },
});
