import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "",
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: "iife",           // ⬅ FORCE NON-MODULE JavaScript
        entryFileNames: "bundle.js",
        chunkFileNames: "bundle.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "style.css";
          }
          return assetInfo.name;
        },
      },
    },
  },
});