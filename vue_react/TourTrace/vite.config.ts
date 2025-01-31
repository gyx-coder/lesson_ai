import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 
// 预先加载UI 组件库
import Components from 'unplugin-vue-components/vite'
// 引入vant组件 编译阶段 自动引入 快
import { VantResolver} from '@vant/auto-import-resolver'
console.log(__dirname,path.resolve(__dirname,'src'))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        VantResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': path.resolve(__dirname, 'src')
    }
  }
})