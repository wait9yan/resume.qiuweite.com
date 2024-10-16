/*
 * @Author       : wait9yan
 * @Date         : 2024-05-23 19:09:25
 * @LastEditors  : wait9Yan
 * @LastEditTime : 2024-10-16 16:19:17
 * @FilePath     : \resume.qiuweite.com\docs\.vitepress\config.mjs
 * @Description  : 
 */
import { defineConfig } from 'vitepress'
import fa from '@gerhobbelt/markdown-it-fontawesome'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "简历",
  themeConfig: {
    logo: '/favicon.ico',
  },
  markdown: {
    config: (md) => {
      // 使用 Markdown-it 插件
      md.use(fa)
    }
  }
})
