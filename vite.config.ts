import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

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
