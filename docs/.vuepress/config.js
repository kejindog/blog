import { defaultTheme } from 'vuepress'
import vuepressPluginAnchorRight from 'vuepress-plugin-anchor-right'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

export default {
  configureWebpack: {
    resolve: {
      alias: {
        '@public': '/'
      }
    }
  },
  base: '/blog/',
  title: 'kejindog',
  description: 'kejindog blog',
  head: [],
  extraWatchFiles: [],
  theme: defaultTheme({
    navbar: [
      {
        text: 'web服务器',
        children: [
          { text: 'nginx', link: '/nginx/' },
        ]
      },
      { text: 'web3',
        children: [
          { text: '基础知识', link: '/web3/' },
          { text: 'Defi', link: '/defi/' }
        ]
      },
      { text: 'web2',
        children: [
          { text: 'admin', link: '/admins/' },
          { text: 'browser', link: '/browser/' },
          { text: 'css', link: '/css/' },
          { text: 'canvas', link: '/canvas/' },
          { text: 'chart', link: '/chart/' },
          { text: 'javascript', link: '/javascript/' },
          { text: 'mobile', link: '/mobile/' },
          { text: 'node', link: '/node/' },
          { text: 'react', link: '/react/' },
          { text: 'regexp', link: '/regexp/' },
          { text: 'vue', link: '/vue/' },
          { text: 'npm', link: '/npm/' },
        ]
      },
      { text: '资料', link: '/resource/' },
      { text: 'Essay',
        children: [
          { text: 'db', link: '/essay/db/' },
          { text: 'kv', link: '/essay/kv/' },
          { text: 'mq', link: '/essay/mq/' },
          { text: 'log', link: '/essay/log/' },
        ]
      },
      { text: '代码规范', link: '/rule/' },
      { text: 'github', link: 'https://github.com/kejindog/blog', target:'_blank' }
    ],
    sidebar: {
      '/nginx/': [
        {
          text: 'nginx',
          children: [
            {
              text: 'nginx 学习计划',
              link: '/nginx/README.md',
            }
          ]
        }
      ],
      '/web3/': [
        {
          text: 'web3',
          children: [
            {
              text: '常见链接',
              link: '/web3/Links.md',
            },
            {
              text: '你需要了解的关键字',
              link: 'keys'
            },
            {
              text: '初识web3.0',
              link: 'start'
            },
            {
              text: 'MetaMask',
              link: 'metamask'
            },
            {
              text: 'Remix IDE',
              link: 'remix'
            },
            {
              text: 'Truffle',
              link: 'truffle'
            },
            {
              text: 'web3js',
              link: 'web3js'
            }
          ]
        }
      ],
      '/react/': [
        {
          text: 'react',
          children: [
            { text: '轮子', link: 'wheel' },
            { text: '面试题', link: 'qs' }
          ]
        }
      ],
      '/vue/': [
        {
          text: 'vue',
          children: [
            { text: 'vue3', link: 'vue3' },
            { text: '面试题', link: 'qs' }
          ]
        }
      ],
      '/npm/': [
        {
          text: 'npm',
          children: [
            { title: '常见问题', path: 'question' }
          ]
        }
      ],
      '/defi/': [
        {
          text: 'defi',
          children: [
            {
              title: 'sudoswap',
              path: 'sudoswap'
            },
          ]
        }
      ]
    },
    sidebarDepth: 4, // 标题深度
    // displayAllHeaders: true, // 显示所有标题
    lastUpdated: 'Last Updated', // 最后更新时间
    lastUpdatedText: '更新时间'
  }),
  plugins: [
    searchPlugin({}),
    backToTopPlugin(),
    nprogressPlugin(),
    vuepressPluginAnchorRight()
  ],
  Markdown: {
    lineNumbers: true
  }
}