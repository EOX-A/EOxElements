import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/protocol.ts"),
      name: "Protocol",
      fileName: "protocol",
    },
    rollupOptions: {
      output: {
        dir: "public",
      },
    },
  },
});
