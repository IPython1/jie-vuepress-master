import { viteBundler } from '@vuepress/bundler-vite'
import {defaultTheme, DefaultThemeOptions} from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme(
        {
            logo: 'https://vuejs.org/images/logo.png',
            //logo:'/logo.png'
        } as DefaultThemeOptions
    ),

    lang: 'zh-CN',
    title: '杰 VuePress !',
    description: '这是我的第一个 VuePress 站点',

})
