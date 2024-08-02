import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme(),

    // 重写配置
    base: "/frontRoad/",
    lang: 'zh-CN',
    title: "我的前端笔记",
    description: "我会做好的"

})