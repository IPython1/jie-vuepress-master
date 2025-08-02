export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/contributing.html", { loader: () => import(/* webpackChunkName: "contributing.html" */"H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/docs/.vuepress/.temp/pages/contributing.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress 🎉! 💯"} }],
  ["/group/bar.html", { loader: () => import(/* webpackChunkName: "group_bar.html" */"H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/docs/.vuepress/.temp/pages/group/bar.html.js"), meta: {"title":"Hello group/bar"} }],
  ["/group/foo.html", { loader: () => import(/* webpackChunkName: "group_foo.html" */"H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/docs/.vuepress/.temp/pages/group/foo.html.js"), meta: {"title":"Hello group/foo"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"页面的标题"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Hello Guide"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
