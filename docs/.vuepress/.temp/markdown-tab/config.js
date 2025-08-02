import { CodeTabs } from "H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
