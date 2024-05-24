/*!
 * @Author       : wait9yan
 * @Date         : 2024-05-23 19:09:25
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-05-24 13:12:54
 * @FilePath     : \resume\docs\.vitepress\theme\index.js
 * @Description  : 
 */
// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}