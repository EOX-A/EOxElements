import { defineConfig } from "vite";
import { globSync } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    minify: false,
    rollupOptions: {
      input: Object.fromEntries(
        globSync("src/**/*.js").map((file) => [
          path.relative(
            "src",
            file.slice(0, file.length - path.extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output: {
        compact: false,
        format: "es",
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
      treeshake: false,
    },
    lib: {
      entry: "./src/main.js",
      name: "eox-geosearch",
      // the proper extensions will be added
      fileName: "eox-geosearch",
      formats: ["es"],
    },
  },
});
