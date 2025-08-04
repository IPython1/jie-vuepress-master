import { CodeTabs } from "/Users/dongyajie/code/webP/jie-vuepress-master/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/dongyajie/code/webP/jie-vuepress-master/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/dongyajie/code/webP/jie-vuepress-master/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
