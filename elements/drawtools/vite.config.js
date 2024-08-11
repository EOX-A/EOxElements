import { defineConfig } from "vite";
import istanbul from "vite-plugin-istanbul";

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
  // plugins: [
  //   istanbul({
  //     cypress: true,
  //     requireEnv: false,
  //   }),
  // ],
});
