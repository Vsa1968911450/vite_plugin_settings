import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
import viteImagemin from 'vite-plugin-imagemin'
// 代码压缩 vite-plugin-compression 下载导入插件  传输的gzip
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  resolve:{
      alias:{
        comp:resolve(__dirname,'src/components/about'),
        '/icon':'./src/assets/image/icon'  // 配置assets下 图片文件路径
      }
  },
  //去console
  build:{
    minify:'terser', // terser才启用 现在默认esbuild 不设置为terser不起这作用
    terserOptions:{
        compress:{
            drop_console:true,
            drop_debugger:true
        }
    },
    // 打包文件分类
    rollupOptions:{
        output:{
            chunkFileNames:'js/[name]-[hash].js', // 出口
            entryFileNames:'js/[name]-[hash].js', // 入口文件
            assetFileNames:'[ext]/[name]-[hash].[ext]' //静态文件
        }
    }
  },
  // el-ui 按需引入 自动引入  cdn导入打包体积会变小
  plugins: [
    // ...
    vue(),
    // 文件压缩
    // viteCompression()
    // 配置mockjs
    viteMockServe({
        mockPath:'./mock',
    }),
    // cdn
    importToCDN({
        modules:[{
            name:"vue",
            var:"vue",
            path:'https://unpkg.com/vue@next',
            css:''
        }]
    }),
    // 图片打包
    viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
  // 解决跨域
  server:{
    proxy:{
        '/api':{
            target:'',
            changeOrigin:true
        }
    }
  }
})
