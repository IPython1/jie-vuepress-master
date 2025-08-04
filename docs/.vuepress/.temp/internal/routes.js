export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dongyajie/code/webP/jie-vuepress-master/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/contributing.html", { loader: () => import(/* webpackChunkName: "contributing.html" */"/Users/dongyajie/code/webP/jie-vuepress-master/docs/.vuepress/.temp/pages/contributing.html.js"), meta: {"title":""} }],
  ["/backend/", { loader: () => import(/* webpackChunkName: "backend_index.html" */"/Users/dongyajie/code/webP/jie-vuepress-master/docs/.vuepress/.temp/pages/backend/index.html.js"), meta: {"title":"后端学习路线"} }],
  ["/frontend/", { loader: () => import(/* webpackChunkName: "frontend_index.html" */"/Users/dongyajie/code/webP/jie-vuepress-master/docs/.vuepress/.temp/pages/frontend/index.html.js"), meta: {"title":"前端学习路线"} }],
  ["/group/bar.html", { loader: () => import(/* webpackChunkName: "group_bar.html" */"/Users/dongyajie/code/webP/jie-vuepress-master/docs/.vuepress/.temp/pages/group/bar.html.js"), meta: {"title":"Hello group/bar"} }],
  ["/group/foo.html", { loader: () => import(/* webpackChunkName: "group_foo.html" */"/Users/dongyajie/code/webP/jie-vuepress-master/docs/.vuepress/.temp/pages/group/foo.html.js"), meta: {"title":"Hello group/foo"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/dongyajie/code/webP/jie-vuepress-master/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"这里放置相关学习资源url地址"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"/Users/dongyajie/code/webP/jie-vuepress-master/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"页面的标题"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/dongyajie/code/webP/jie-vuepress-master/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
