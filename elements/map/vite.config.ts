import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./main.ts",
      name: "eox-map",
      // the proper extensions will be added
      fileName: "eox-map",
    },
  },
});
