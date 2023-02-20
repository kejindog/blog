(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{306:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"metamask"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metamask"}},[t._v("#")]),t._v(" MetaMask")]),t._v(" "),s("h2",{attrs:{id:"metamask-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metamask-2"}},[t._v("#")]),t._v(" metamask")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.metamask.io/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Metamask 小狐狸，是一个开源的以太坊钱包，能用帮助用户方便的管理自己的以太坊数字资产")]),t._v(" "),s("p",[t._v("一般都是chrome插件的形式去使用的。")]),t._v(" "),s("p",[t._v("以 metamask 链接本地 ganache 创建的测试网络为例")]),t._v(" "),s("h2",{attrs:{id:"ganache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ganache"}},[t._v("#")]),t._v(" ganache")]),t._v(" "),s("p",[t._v("ganache 是一个以太坊的个人开发环境，你可以在上面部署合约、开发程序和进行测试。它有桌面版本和命令行工具版本，同时提供对windows、Mac和Linux的支持")]),t._v(" "),s("p",[t._v("ganache 是一个本地版的以太坊，是我们开发的必备工具。")]),t._v(" "),s("p",[t._v("因为测试网络（免费），但是测试网络响应速度太慢了，有时候一个交易要进行10秒，虽然测试网的响应速度相对主网而言比较快（😅），所以我们创建一个本地网络，可以体验无缝衔接的感觉，快啊。")]),t._v(" "),s("h3",{attrs:{id:"ganache-下载安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ganache-下载安装"}},[t._v("#")]),t._v(" ganache 下载安装")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://trufflesuite.com/ganache/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ganache 下载地址"),s("OutboundLink")],1),t._v(" 各个版本都有")]),t._v(" "),s("p",[t._v("ganache 创建一个本地测试网络")]),t._v(" "),s("ol",[s("li",[t._v("打开界面")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/ganache1.png")}}),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("点击 quickstart 快速生成一个本地网络，找到右边的设置按钮，点击")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/ganache2.png")}}),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("注意上面的 SERVE 找到当前网络信息，需要在metamask添加网络的时候用得到")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/ganache3.png")}}),t._v(" "),s("p",[t._v("后续连接钱包看metamask具体设置")]),t._v(" "),s("h3",{attrs:{id:"ganache-入门介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ganache-入门介绍"}},[t._v("#")]),t._v(" ganache 入门介绍")]),t._v(" "),s("h4",{attrs:{id:"账号accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#账号accounts"}},[t._v("#")]),t._v(" 账号Accounts")]),t._v(" "),s("p",[t._v("界面主体有10个账号，分别列出了每个账号的地址，余额，已经完成的交易数量、账号数组中的索引、显示私钥按钮等。点击那个钥匙图标，就会显示它的私钥")]),t._v(" "),s("h4",{attrs:{id:"blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[t._v("#")]),t._v(" Blocks")]),t._v(" "),s("p",[t._v("点击导航上的Blocks，可以看到目前Block是0,block记录在链上的区块信息，只包含成功的transactions信息.\n这是因为Ganache挖矿机制决定的，每一个交易产生一个block，所以一个block也只会有一笔交易。在我们交易后就会产生一个block，目前还没有")]),t._v(" "),s("h4",{attrs:{id:"transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),s("p",[t._v("生成的交易信息，有成功记录到区块上的，也有没有成功记录上的")]),t._v(" "),s("h4",{attrs:{id:"contracts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contracts"}},[t._v("#")]),t._v(" contracts")]),t._v(" "),s("p",[t._v("因为们工作空间并没有添加truffle工程，所以这里也是空的。")]),t._v(" "),s("h2",{attrs:{id:"metamask链接本地ganache网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metamask链接本地ganache网络"}},[t._v("#")]),t._v(" metamask链接本地ganache网络")]),t._v(" "),s("ol",[s("li",[t._v("metamask 设置")])]),t._v(" "),s("img",{attrs:{width:"330",src:t.$withBase("/img/metamask1.png")}}),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("找到网络")])]),t._v(" "),s("img",{attrs:{width:"330",src:t.$withBase("/img/metamask2.png")}}),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("点击添加网络")])]),t._v(" "),s("img",{attrs:{width:"330",src:t.$withBase("/img/metamask3.png")}}),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("查看ganache 网络信息")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/ganache3.png")}}),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("填写本地/链上的地址信息")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/metamask4.png")}}),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("选择刚才添加的网络")])]),t._v(" "),s("img",{attrs:{width:"330",src:t.$withBase("/img/metamask5.png")}}),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[t._v("针对刚才的网络，添加账户，需要先查看ganache提供的默认10个账号中的某个私钥")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/ganache4.png")}}),t._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[t._v("复制私钥")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/ganache5.png")}}),t._v(" "),s("ol",{attrs:{start:"9"}},[s("li",[t._v("metamask 选择网络后，点击导入账户")])]),t._v(" "),s("img",{attrs:{width:"330",src:t.$withBase("/img/ganache6.png")}}),t._v(" "),s("ol",{attrs:{start:"10"}},[s("li",[t._v("将刚才复制的私钥，写进入即可")])]),t._v(" "),s("img",{attrs:{width:"330",src:t.$withBase("/img/ganache7.png")}}),t._v(" "),s("ol",{attrs:{start:"11"}},[s("li",[t._v("刷新即可看到余额")])]),t._v(" "),s("img",{attrs:{width:"330",src:t.$withBase("/img/ganache8.png")}}),t._v(" "),s("p",[t._v("至此，我们的 metamask钱包 链接本地 ganache 创建的链就成功了，我们后面把我们写的智能合约发布到我们的本地链上即可")]),t._v(" "),s("h2",{attrs:{id:"metamask-开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metamask-开发"}},[t._v("#")]),t._v(" MetaMask 开发")]),t._v(" "),s("p",[t._v("MetaMask钱包提供了一系列的API让我们的DAPP可以和钱包进行交互")]),t._v(" "),s("p",[t._v("文档地址："),s("a",{attrs:{href:"https://docs.metamask.io/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.metamask.io/guide/"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"metamask-以太坊一键登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metamask-以太坊一键登录"}},[t._v("#")]),t._v(" MetaMask 以太坊一键登录")]),t._v(" "),s("ol",[s("li",[t._v("检查是否支持MetaMask")]),t._v(" "),s("li",[t._v("点击登录获取钱包授权")]),t._v(" "),s("li",[t._v("获取钱包信息、进行事件监听")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ethers\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ethers'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MetaMaskOnboarding "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@metamask/onboarding'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Message\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 1. 主动连接钱包 { 检验是安装浏览器插件 如没有 弹窗提示 引导官网安装 }\n * 2. 自动获取钱包信息\n * 3. 监听切换网络，监听用户关闭网站授权\n * 4. 添加网络\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("connectMetaMask")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connectMetaMask")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMetaMaskInstalled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否安装MetaMask扩展工具")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" forwarderOrigin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" onboarding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MetaMaskOnboarding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      forwarderOrigin\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳转应用商店，安装钱包")]),t._v("\n    onboarding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startOnboarding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ethers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("providers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Web3Provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户的以太坊账户地址")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" accounts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eth_requestAccounts'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" chainId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNetwork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" accounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chainChanged'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chainId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'网络切换'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chainId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accountsChanged'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("accounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'账户切换'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" accounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// message：type: string、data")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'收到一些应该通知消费者的消息时触发'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当 MetaMask 提供者第一次能够向链提交 RPC 请求时，它会发出此事件")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'connect'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'结合ethereum.isConnected()确定何时/是否连接了提供程序'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disconnect'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'walletType'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'walletTypeVerify'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个时候就不会接受任何新的请求了，必须刷新页面确认是否新的链接，或者使用方法ethereum.isConnected()")]),t._v("\n      Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'断开、链接失败'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react中卸载组件的时候：ethereum.removeListener('accountsChanged', function);")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      chainId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Created check function to see if the MetaMask extension is installed")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMetaMaskInstalled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Have to check the ethereum binding on the window object to see if it's installed")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ethereum "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ethereum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMetaMask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"调用json-rpc格式的请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用json-rpc格式的请求"}},[t._v("#")]),t._v(" 调用JSON-RPC格式的请求")]),t._v(" "),s("p",[t._v("json-rpc是一个基于json的跨语言远程调用协议，web3.js 通过RPC调用与本地节点通信，我们的钱包MetaMask 使用该ethereum.request(args)方法来包装 RPC AP")]),t._v(" "),s("p",[t._v("参考地址：以太坊"),s("a",{attrs:{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("调用参考-获取账户地址：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ethereum\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eth_requestAccounts'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handleAccountsChanged"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4001")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EIP-1193 userRejectedRequest error")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Please connect to MetaMask.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);