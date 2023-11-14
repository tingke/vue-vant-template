import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

export default defineConfig({
    plugins: [
        // 按需加载
        vue(),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    css: {
        postcss: {
            plugins: [
                require("autoprefixer")(),
            ],
        },
    },
});
