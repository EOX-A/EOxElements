import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./index.ts",
      name: "eox-testelement",
      // the proper extensions will be added
      fileName: "eox-testelement",
    },
  },
});
