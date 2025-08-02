import comp from "H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Hello VuePress 🎉! 💯\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1754130561000,\"contributors\":[{\"name\":\"IPython\",\"username\":\"IPython\",\"email\":\"IPython_Jie@163.com\",\"commits\":2,\"url\":\"https://github.com/IPython\"}],\"changelog\":[{\"hash\":\"2a2135c8cbca6cb2aa518d36c386e52e4fb2b260\",\"time\":1754130561000,\"email\":\"IPython_Jie@163.com\",\"author\":\"IPython\",\"message\":\"initial commit\"},{\"hash\":\"88afb34256e21f2a9103061ef4fd2bdbfd7bc06b\",\"time\":1754111511000,\"email\":\"IPython_Jie@163.com\",\"author\":\"IPython\",\"message\":\"initial commit\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
