import { defineConfig } from "vite";
import postCssPxToRem from 'postcss-pxtorem'

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                // 自适应，px->rem转换
                postCssPxToRem({
                    // viewportWidth: 750,  // 视窗的宽度，对应的是我们设计稿的宽度.
                    rootValue: 16, // 1rem的大小
                    propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
                    selectorBlackList: ["norem", "#app"], // 过滤掉norem-开头的class，不进行rem转换
                }),
                require("autoprefixer")(),
            ],
        },
    },
});
