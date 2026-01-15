import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

export default defineConfig(async () => {
  const plugins = [
    react(),
    metaImagesPlugin(),
  ];

  return {
    plugins,
    root: process.cwd(),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client/src"),
        "@shared": path.resolve(__dirname, "shared"),
      },
    },
    server: {
      middlewareMode: true,
      allowedHosts: true, // السماح بجميع العناوين لتجنب خطأ Blocked Host
    },
  };
});
