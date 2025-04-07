import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // 确保导入 React 集成

export default defineConfig({
  integrations: [
    tailwind(),
    react(), // 添加 React 集成
  ],
});
