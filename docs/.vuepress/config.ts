import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { searchPlugin } from '@vuepress/plugin-search'

import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '可杰coding',
    description: '这是我的第一个 VuePress 站点',
    bundler: viteBundler(),
    theme: defaultTheme({
        // logo: 'https://vuejs.org/images/logo.png',
        logo: '../public/logo.png',
        navbar: [
            {
                text: '主页',
                link: '/',
            },
            {
                text: '文档',
                link: '/guide/',//链接的名字和文件夹的名字保持一致
            },
            {
                text: '组别',
                prefix: '/group/',
                children: [
                    {
                        text: 'foo',
                        link: 'foo.md',
                    },
                    {
                        text: 'bar',
                        link: 'bar.md',
                    },
                ],
            },
            {
                text: 'GitHub',
                link: 'https://github.com/IPython1',
            },
        ],


    }),

    plugins: [
        activeHeaderLinksPlugin(),
        searchPlugin({
            // 本地搜索插件配置
            maxSuggestions: 10,
            hotKeys: ['s', '/'],
            // 搜索范围配置
            getExtraFields: (page) => (page.frontmatter.tags as string[]) ?? [],
        }),
    ],



})
