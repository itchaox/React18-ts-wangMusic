/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 15:15
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-15 17:13
 * @desc       :
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 代码路径打包后提示
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
