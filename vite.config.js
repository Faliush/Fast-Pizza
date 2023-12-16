import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
// npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev

export default defineConfig({
  plugins: [react(), eslint()],
});
