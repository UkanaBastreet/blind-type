import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@features": path.resolve(__dirname, "src/features"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  preview: {
    port: 5000, // Изменить порт (по умолчанию 4173)
    open: true, // Автоматически открыть в браузере
    cors: true, // Включить CORS для API-запросов
  },
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
});
