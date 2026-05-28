// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yuhanfan.com',
  // 如果部署到 yuhanfan.github.io/portfolio 这种子路径，加 base: '/portfolio/'
  // 如果部署到根域名 yuhanfan.github.io 或自定义域名，base 留 '/' 或不写
  // base: '/',

  vite: {
    plugins: [tailwindcss()],
  },

  // i18n 配置：默认中文，英文走 /en 子路径
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false, // 中文走 /，英文走 /en
    },
  },
});
