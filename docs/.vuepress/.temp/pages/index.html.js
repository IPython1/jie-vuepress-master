import comp from "D:/jie-vuepress-master/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Hello VuePress 🎉! 💯\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1754111511000,\"contributors\":[{\"name\":\"IPython\",\"username\":\"\",\"email\":\"IPython_Jie@163.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"88afb34256e21f2a9103061ef4fd2bdbfd7bc06b\",\"time\":1754111511000,\"email\":\"IPython_Jie@163.com\",\"author\":\"IPython\",\"message\":\"initial commit\"}]},\"filePathRelative\":\"README.md\"}")
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
