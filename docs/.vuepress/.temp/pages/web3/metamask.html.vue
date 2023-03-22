<template><div><h1 id="metamask" tabindex="-1"><a class="header-anchor" href="#metamask" aria-hidden="true">#</a> MetaMask</h1>
<h2 id="metamask-1" tabindex="-1"><a class="header-anchor" href="#metamask-1" aria-hidden="true">#</a> metamask</h2>
<p><a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">官网下载地址<ExternalLinkIcon/></a></p>
<p><a href="https://docs.metamask.io/guide/" target="_blank" rel="noopener noreferrer">官方文档地址<ExternalLinkIcon/></a></p>
<p>Metamask 小狐狸，是一个开源的以太坊钱包，能用帮助用户方便的管理自己的以太坊数字资产</p>
<p>一般都是chrome插件的形式去使用的。</p>
<p>以 metamask 链接本地 ganache 创建的测试网络为例</p>
<h2 id="ganache" tabindex="-1"><a class="header-anchor" href="#ganache" aria-hidden="true">#</a> ganache</h2>
<p>ganache 是一个以太坊的个人开发环境，你可以在上面部署合约、开发程序和进行测试。它有桌面版本和命令行工具版本，同时提供对windows、Mac和Linux的支持</p>
<p>ganache 是一个本地版的以太坊，是我们开发的必备工具。</p>
<p>因为测试网络（免费），但是测试网络响应速度太慢了，有时候一个交易要进行10秒，虽然测试网的响应速度相对主网而言比较快（😅），所以我们创建一个本地网络，可以体验无缝衔接的感觉，快啊。</p>
<h3 id="ganache-下载安装" tabindex="-1"><a class="header-anchor" href="#ganache-下载安装" aria-hidden="true">#</a> ganache 下载安装</h3>
<p><a href="https://trufflesuite.com/ganache/" target="_blank" rel="noopener noreferrer">ganache 下载地址<ExternalLinkIcon/></a> 各个版本都有</p>
<p>ganache 创建一个本地测试网络</p>
<ol>
<li>打开界面</li>
</ol>
<img :src="$withBase('/img/ganache1.png')" >
<ol start="2">
<li>点击 quickstart 快速生成一个本地网络，找到右边的设置按钮，点击</li>
</ol>
<img :src="$withBase('/img/ganache2.png')" >
<ol start="3">
<li>注意上面的 SERVE 找到当前网络信息，需要在metamask添加网络的时候用得到</li>
</ol>
<img :src="$withBase('/img/ganache3.png')" >
<p>后续连接钱包看metamask具体设置</p>
<h3 id="ganache-入门介绍" tabindex="-1"><a class="header-anchor" href="#ganache-入门介绍" aria-hidden="true">#</a> ganache 入门介绍</h3>
<h4 id="账号accounts" tabindex="-1"><a class="header-anchor" href="#账号accounts" aria-hidden="true">#</a> 账号Accounts</h4>
<p>界面主体有10个账号，分别列出了每个账号的地址，余额，已经完成的交易数量、账号数组中的索引、显示私钥按钮等。点击那个钥匙图标，就会显示它的私钥</p>
<h4 id="blocks" tabindex="-1"><a class="header-anchor" href="#blocks" aria-hidden="true">#</a> Blocks</h4>
<p>点击导航上的Blocks，可以看到目前Block是0,block记录在链上的区块信息，只包含成功的transactions信息.
这是因为Ganache挖矿机制决定的，每一个交易产生一个block，所以一个block也只会有一笔交易。在我们交易后就会产生一个block，目前还没有</p>
<h4 id="transactions" tabindex="-1"><a class="header-anchor" href="#transactions" aria-hidden="true">#</a> Transactions</h4>
<p>生成的交易信息，有成功记录到区块上的，也有没有成功记录上的</p>
<h4 id="contracts" tabindex="-1"><a class="header-anchor" href="#contracts" aria-hidden="true">#</a> contracts</h4>
<p>因为们工作空间并没有添加truffle工程，所以这里也是空的。</p>
<h2 id="metamask链接本地ganache网络" tabindex="-1"><a class="header-anchor" href="#metamask链接本地ganache网络" aria-hidden="true">#</a> metamask链接本地ganache网络</h2>
<ol>
<li>metamask 设置</li>
</ol>
<img width="330" :src="$withBase('/img/metamask1.png')" />
<ol start="2">
<li>找到网络</li>
</ol>
<img width="330" :src="$withBase('/img/metamask2.png')" />
<ol start="3">
<li>点击添加网络</li>
</ol>
<img width="330" :src="$withBase('/img/metamask3.png')" />
<ol start="4">
<li>查看ganache 网络信息</li>
</ol>
<img :src="$withBase('/img/ganache3.png')" >
<ol start="5">
<li>填写本地/链上的地址信息</li>
</ol>
<img :src="$withBase('/img/metamask4.png')" />
<ol start="6">
<li>选择刚才添加的网络</li>
</ol>
<img width="330" :src="$withBase('/img/metamask5.png')" />
<ol start="7">
<li>针对刚才的网络，添加账户，需要先查看ganache提供的默认10个账号中的某个私钥</li>
</ol>
<img :src="$withBase('/img/ganache4.png')" />
<ol start="8">
<li>复制私钥</li>
</ol>
<img :src="$withBase('/img/ganache5.png')" />
<ol start="9">
<li>metamask 选择网络后，点击导入账户</li>
</ol>
<img  width="330" :src="$withBase('/img/ganache6.png')" />
<ol start="10">
<li>将刚才复制的私钥，写进入即可</li>
</ol>
<img  width="330" :src="$withBase('/img/ganache7.png')" />
<ol start="11">
<li>刷新即可看到余额</li>
</ol>
<img  width="330" :src="$withBase('/img/ganache8.png')" />
<p>至此，我们的 metamask钱包 链接本地 ganache 创建的链就成功了，我们后面把我们写的智能合约发布到我们的本地链上即可</p>
<h2 id="metamask-开发" tabindex="-1"><a class="header-anchor" href="#metamask-开发" aria-hidden="true">#</a> MetaMask 开发</h2>
<p>MetaMask钱包提供了一系列的API让我们的DAPP可以和钱包进行交互</p>
<p>文档地址：<a href="https://docs.metamask.io/guide/" target="_blank" rel="noopener noreferrer">https://docs.metamask.io/guide/<ExternalLinkIcon/></a></p>
<h3 id="metamask-以太坊一键登录" tabindex="-1"><a class="header-anchor" href="#metamask-以太坊一键登录" aria-hidden="true">#</a> MetaMask 以太坊一键登录</h3>
<ol>
<li>检查是否支持MetaMask</li>
<li>点击登录获取钱包授权</li>
<li>获取钱包信息、进行事件监听</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  ethers
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ethers'</span>
<span class="token keyword">import</span> MetaMaskOnboarding <span class="token keyword">from</span> <span class="token string">'@metamask/onboarding'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Message
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
<span class="token doc-comment comment">/**
 * 1. 主动连接钱包 <span class="token punctuation">{</span> 检验是安装浏览器插件 如没有 弹窗提示 引导官网安装 <span class="token punctuation">}</span>
 * 2. 自动获取钱包信息
 * 3. 监听切换网络，监听用户关闭网站授权
 * 4. 添加网络
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">connectMetaMask</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">connectMetaMask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isMetaMaskInstalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断是否安装MetaMask扩展工具</span>
    <span class="token keyword">const</span> forwarderOrigin <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>origin
    <span class="token keyword">const</span> onboarding <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MetaMaskOnboarding</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      forwarderOrigin
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 跳转应用商店，安装钱包</span>
    onboarding<span class="token punctuation">.</span><span class="token function">startOnboarding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> provider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ethers<span class="token punctuation">.</span>providers<span class="token punctuation">.</span>Web3Provider</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>ethereum<span class="token punctuation">)</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取用户的以太坊账户地址</span>
    <span class="token keyword">const</span> accounts <span class="token operator">=</span> <span class="token keyword">await</span> window<span class="token punctuation">.</span>ethereum<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'eth_requestAccounts'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> chainId <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getNetwork</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> account <span class="token operator">=</span> accounts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>ethereum<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'chainChanged'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chainId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      Message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'网络切换'</span><span class="token punctuation">,</span> chainId<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>ethereum<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'accountsChanged'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">accounts</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      Message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'账户切换'</span><span class="token punctuation">,</span> accounts<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>ethereum<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token parameter">message</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// message：type: string、data</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'收到一些应该通知消费者的消息时触发'</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 当 MetaMask 提供者第一次能够向链提交 RPC 请求时，它会发出此事件</span>
    window<span class="token punctuation">.</span>ethereum<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'connect'</span><span class="token punctuation">,</span> <span class="token parameter">message</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'结合ethereum.isConnected()确定何时/是否连接了提供程序'</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>ethereum<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'disconnect'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'walletType'</span><span class="token punctuation">)</span>
      localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'walletTypeVerify'</span><span class="token punctuation">)</span>
      <span class="token comment">// 这个时候就不会接受任何新的请求了，必须刷新页面确认是否新的链接，或者使用方法ethereum.isConnected()</span>
      Message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'断开、链接失败'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// react中卸载组件的时候：ethereum.removeListener('accountsChanged', function);</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      account<span class="token punctuation">,</span>
      provider<span class="token punctuation">,</span>
      chainId<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// Created check function to see if the MetaMask extension is installed</span>
  <span class="token keyword">function</span> <span class="token function">isMetaMaskInstalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Have to check the ethereum binding on the window object to see if it's installed</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ethereum <span class="token punctuation">}</span> <span class="token operator">=</span> window
    <span class="token keyword">return</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>ethereum <span class="token operator">&amp;&amp;</span> ethereum<span class="token punctuation">.</span>isMetaMask<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用json-rpc格式的请求" tabindex="-1"><a class="header-anchor" href="#调用json-rpc格式的请求" aria-hidden="true">#</a> 调用JSON-RPC格式的请求</h3>
<p>json-rpc是一个基于json的跨语言远程调用协议，web3.js 通过RPC调用与本地节点通信，我们的钱包MetaMask 使用该ethereum.request(args)方法来包装 RPC AP</p>
<p>参考地址：以太坊<a href="https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts" target="_blank" rel="noopener noreferrer">wiki<ExternalLinkIcon/></a></p>
<p>调用参考-获取账户地址：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ethereum
    <span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'eth_requestAccounts'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>handleAccountsChanged<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">4001</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// EIP-1193 userRejectedRequest error</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Please connect to MetaMask.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


