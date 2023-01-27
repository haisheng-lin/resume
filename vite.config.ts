import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(__dirname, 'src/assets/images/icons')],
      // 指定 symbolId 格式
      symbolId: 'icon-[dir]-[name]'
    }),
    VueI18nPlugin({
      // locale messages resource pre-compile option
      include: path.resolve(__dirname, 'src/i18n/locales/**')
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: '/resume',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 将第三方包全部打包在一个 chunk 中，名称叫 vendor
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});
