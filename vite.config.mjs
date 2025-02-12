import { defineConfig } from "vite";
import istanbul from "vite-plugin-istanbul";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
    tsconfigPaths(),
  ],
});
