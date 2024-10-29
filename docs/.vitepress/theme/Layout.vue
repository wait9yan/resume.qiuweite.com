<!--
 * @Author       : wait9yan
 * @Date         : 2024-05-23 19:09:25
 * @LastEditors  : wait9Yan
 * @LastEditTime : 2024-10-29 19:52:09
 * @FilePath     : \resume.qiuweite.com\docs\.vitepress\theme\Layout.vue
 * @Description  : 
-->
<script setup>
import { useData } from 'vitepress'
const { page } = useData()

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
    <div v-if="page.isNotFound">
        Custom 404 page!
    </div>
    <div v-if="frontmatter.home" class="page-warper" >
    <!--
    <ul>
        <li><a href="/markdown-examples.html">Markdown Examples</a></li>
        <li><a href="/api-examples.html">API Examples</a></li>
    </ul> 
    -->
        <div class="page-content">
            <header class="post-header">
                <div class="update-time">
                    <span>简历更新时间：</span>
                    <span>{{ frontmatter.date }}</span>
                    <hr>
                </div>
            </header>
            <Content class="entry-content"/>
        </div>
    </div>
    <div v-else>
    </div>
</template>
