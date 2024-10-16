/*!
 * @Author       : wait9yan
 * @Date         : 2024-05-23 19:09:25
 * @LastEditors  : wait9Yan
 * @LastEditTime : 2024-10-16 16:19:31
 * @FilePath     : \resume.qiuweite.com\docs\.vitepress\theme\index.js
 * @Description  : 
 */
// https://vitepress.dev/guide/custom-theme
import '@fortawesome/fontawesome-free/css/all.css'
import './fontawesome.css'
import Layout from './Layout.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}