import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
    server: {
    host: '0.0.0.0', // 监听所有可用的网络接口
    port: 8088, // 自定义端口号，例如使用 8080

    //代理配置
    proxy: {
      '/api': {
        target:'https://mock.mengxuegu.com/mock/65eff63b8ecfd33cdfbd6ef7/glpt',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
