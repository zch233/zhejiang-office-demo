import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import';
import * as path from 'path';
const pathResolve = (pathStr: string) =>  path.resolve(__dirname, pathStr)
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name: string) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  build: {
    target: 'es2015',
    assetsDir: 'static',
  },
  resolve: {
    alias: {
      '/@src': pathResolve('./src'),
    }
  },
})
