import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  paths: {
    "src/*": ["./src/*"],
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test-setup.js",
    exclude: ["**/node_modules/**", "**/e2e/**", "**/"],
  },
});
