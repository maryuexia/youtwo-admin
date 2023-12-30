import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            // '@': path.resolvers(__dirname, './src/')
        },
        extensions: [".js", ".json", ".ts"],
    },
// 修改element主题色
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "./src/styles/element.scss" as *;`,
            },
        },
    }
})
