/*
 * @Author: your name
 * @Date: 2022-02-18 14:08:53
 * @LastEditTime: 2022-03-25 23:05:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \npm\jeft-vue-press\docs\.vuepress\config.js
 */
module.exports = {
  title: 'jeft note-总结',
  description: 'jeft note 总结笔记',
  markdown: {
    lineNumbers: true
  },
  base: '/jeft-vue-note/',
  themeConfig: {
    locales: {
      '/': {
        nav: [
          {
            text: '掘金',
            link: 'https://juejin.cn/user/3914689977544567/posts'
          },
          // {
          //   text: 'github',
          //   link: 'https://github.com'
          // }
        ],
        sidebar: [
          {
            // title: 'vue base',   // 必要的
            // path: '/guide/components/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              ['/guide/js.md', 'js'],
              ['/guide/vue-base.md', 'base基础'],
              ['/guide/vue-advance.md', 'advance原理'],
              ['/guide/vue-3.md', 'vue-3'],
              ['/guide/algorithm.md', 'algorithm'],
              ['/guide/common.md', 'common'],
            ]
          },
        ]
      }
    }
  },
  plugins: ['@vuepress/back-to-top']
};
