import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    minify: false,
    terserOptions: {
      mangle: false,
      keep_classnames: true,
      keep_fnames: true,
    },
    rollupOptions: {
      output: {
        compact: false,
      },
      treeshake: false,
    },
    lib: {
      entry: "./src/main.js",
      name: "eox-geosearch",
      // the proper extensions will be added
      fileName: "eox-geosearch",
    },
  },
});
