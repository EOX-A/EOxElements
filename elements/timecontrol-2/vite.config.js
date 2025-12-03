import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.js",
      name: "eox-timecontrol-2",
      // the proper extensions will be added
      fileName: "eox-timecontrol-2",
    },
  },
});
