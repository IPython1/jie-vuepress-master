import { GitContributors } from "H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "H:/杰杰睡不醒/Code/personWebsite/jie-vuepress-master/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
