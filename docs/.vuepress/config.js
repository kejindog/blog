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
      { text: '前端', link: '/web/' },
      { text: '资料', link: '/resource/' },
      { text: 'github', link: 'https://github.com/kejindog/blog', target:'_blank' }
    ],
    sidebar: {
      '/web3/': [
        ['Links', 'links']
      ]
    }
  },
  plugins: [],
  Markdown: {
    lineNumbers: true
  }
}