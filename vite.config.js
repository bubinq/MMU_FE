import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["**/*.test.jsx"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
  server: {
    host: true,
    rewrite: {
      "^/.*": "/index.html",
    },
  },
});
