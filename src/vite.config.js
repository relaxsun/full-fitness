import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    laravel({
      input: ["src/resources/css/app.css", "src/resources/js/app.js"],
      refresh: true,
    }),
  ],
});
