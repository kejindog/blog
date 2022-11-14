module.exports = {
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
  // theme: '',
  themeConfig: {
    nav: [
      { text: 'web3', ariaLabel: 'web3',
        items: [
          { text: '基础知识', link: '/web3/' },
          { text: 'Defi', link: '/defi/' }
        ]
      },
      { text: 'web2', ariaLabel: 'javascript',
        items: [
          { text: 'admin', link: '/admin/' },
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
        ]
      },
      { text: '资料', link: '/resource/' },
      { text: '代码规范', link: '/rule/' },
      { text: 'github', link: 'https://github.com/kejindog/blog', target:'_blank' }
    ],
    sidebar: {
      '/web3/': [
        {
          title: '常见链接',
          path: 'Links',
          // collapsable: false, // 可选的, 默认值是 true,
          // sidebarDepth: 1,    // 可选的, 默认值是 1
          // children: []
        },
        {
          title: '你需要了解的关键字',
          path: 'keys'
        },
        {
          title: '初识web3.0',
          path: 'start'
        },
        {
          title: 'MetaMask',
          path: 'metamask'
        },
        {
          title: 'Remix IDE',
          path: 'remix'
        },
        {
          title: 'Truffle',
          path: 'truffle'
        },
        {
          title: 'web3js',
          path: 'web3js'
        }
      ],
      '/defi/': [
        {
          title: 'sudoswap',
          path: 'sudoswap'
        },
      ],
      '/react/': [
        { title: '轮子', path: 'wheel' },
        { title: '面试题', path: 'qs' }
      ],
      '/vue/': [
        { title: 'vue3', path: 'vue3' },
        { title: '面试题', path: 'qs' }
      ]
    },
    sidebarDepth: 4, // 标题深度
    displayAllHeaders: true, // 显示所有标题
    lastUpdated: 'Last Updated', // 最后更新时间
  },
  plugins: [],
  Markdown: {
    lineNumbers: true
  }
}