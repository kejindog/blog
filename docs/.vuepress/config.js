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
      { text: 'web3', link: '/web3/' },
      { text: '前端', ariaLabel: 'javascript',
        items: [
          { text: '浏览器', link: '/browser/' },
          { text: 'web', link: '/web/' },
        ]
      },
      { text: '资料', link: '/resource/' },
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