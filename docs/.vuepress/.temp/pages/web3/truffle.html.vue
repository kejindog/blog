<template><div><h1 id="truffle" tabindex="-1"><a class="header-anchor" href="#truffle" aria-hidden="true">#</a> Truffle</h1>
<p>Truffle是针对基于以太坊的Solidity语言的一套开发框架。本身基于Javascript，它利用 node.js 包管理并提供 CLI（命令行界面）来管理和创建智能合约。</p>
<h2 id="truffle-特性" tabindex="-1"><a class="header-anchor" href="#truffle-特性" aria-hidden="true">#</a> Truffle 特性</h2>
<ul>
<li>Truffle 使用 web3.js 作为其默认的 Web 库。</li>
<li>Hardhat 和 Truffle 都支持分叉功能（在不影响原始软件的情况下复制软件并进行实验）。</li>
<li>它带有一组名为Drizzle的前端库，用于为 dApp 构建前端。</li>
<li>它支持使用Filecoin和Tezos进行开发，它还具有 Vscode 的扩展</li>
</ul>
<h2 id="truffle-优势" tabindex="-1"><a class="header-anchor" href="#truffle-优势" aria-hidden="true">#</a> Truffle 优势</h2>
<ul>
<li>内置的智能合约编译，链接，部署和二进制文件的管理。</li>
<li>快速开发下的自动合约测试。</li>
<li>脚本化的，可扩展的部署与发布框架。</li>
<li>部署到不管多少的公网或私网的网络环境管理功能</li>
<li>使用EthPM&amp;NPM提供的包管理，使用ERC190标准。</li>
<li>与合约直接通信的直接交互控制台（写完合约就可以命令行里验证了）。</li>
<li>可配的构建流程，支持紧密集成。</li>
<li>在Truffle环境里支持执行外部的脚本。</li>
</ul>
<h2 id="truffle-案例" tabindex="-1"><a class="header-anchor" href="#truffle-案例" aria-hidden="true">#</a> Truffle 案例</h2>
<ul>
<li>Amazon</li>
<li>Microsoft</li>
<li>Consensys：Consensys 是一家区块链软件公司，参与了 Metamask 和 Infura 等流行的区块链项目</li>
<li>J.P. Morgan</li>
<li>ShapeShift：ShapeShift 是一个私人加密货币交易平台，允许用户赚取、购买和交易加密货币资产</li>
</ul>
<h2 id="truffle-资源" tabindex="-1"><a class="header-anchor" href="#truffle-资源" aria-hidden="true">#</a> Truffle 资源</h2>
<p><a href="https://truffle.tryblockchain.org/" target="_blank" rel="noopener noreferrer">Truffle - 以太坊Solidity编程语言开发框架<ExternalLinkIcon/></a>
<a href="https://blog.csdn.net/david2000999/article/details/120472092" target="_blank" rel="noopener noreferrer">以太坊开发框架——Truffle的基础使用<ExternalLinkIcon/></a></p>
<h2 id="truffle教程" tabindex="-1"><a class="header-anchor" href="#truffle教程" aria-hidden="true">#</a> truffle教程</h2>
<h3 id="安装truffle" tabindex="-1"><a class="header-anchor" href="#安装truffle" aria-hidden="true">#</a> 安装truffle</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> truffle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h3>
<p>Truffle 的客户端，我们都知道我们写的智能合约必须部署到链上进行测试，所以我们通过truffle构建内的DAPP也需要一条链进行部署测试。</p>
<p>我们可以选择一些公共的测试链进行测试，比如：Rinkeby 或者 Ropsten ，但是这些公共链也有一定的缺陷，比如：部署和测试的时间比较长，而且需要话费伪代币，因为交易需要 gas 油气费，所以还要花时间去赚取各种伪代币（一般都是每日领取、推特领取等）。</p>
<p>还有一种方法是自己本地创建一个私有链，用来开发（测试还是推荐测试链、正式链哦）。</p>
<p>Truffle 推荐客户端</p>
<ul>
<li>Ganache</li>
<li>truffle develop</li>
</ul>
<h3 id="创建工程" tabindex="-1"><a class="header-anchor" href="#创建工程" aria-hidden="true">#</a> 创建工程</h3>
<h4 id="truffle-init" tabindex="-1"><a class="header-anchor" href="#truffle-init" aria-hidden="true">#</a> truffle init</h4>
<p>truffle init会默认创建一个构建在以太坊内的代币demo应用。算是一个空项目</p>
<img :src="$withBase('/img/truffle-init.jpg')" />
<p>contract/ - Truffle默认的合约文件存放地址</p>
<p>migrations/ - 存放发布脚本文件</p>
<p>test/ - 用来测试应用和合约的测试文件</p>
<p>truffle-config.js - Truffle的配置文件</p>
<h4 id="truffle-unbox" tabindex="-1"><a class="header-anchor" href="#truffle-unbox" aria-hidden="true">#</a> truffle unbox</h4>
<p>直接下载一个 truffle box，即一个预先构建好的 truffle 项目，可以选择参数</p>
<p>参考链接：<a href="http://blog.hubwiz.com/2018/12/26/truffle-box/" target="_blank" rel="noopener noreferrer">truffle开发模板box大全<ExternalLinkIcon/></a></p>
<p>react box：react开发模板包含了在react应用中访问以太坊智能合约的所有依赖</p>
<img :src="$withBase('/img/truffle-unbox-react.png')" />
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>client<span class="token operator">/</span> react<span class="token operator">-</span>web前端客户端，前端地址

truffle<span class="token operator">/</span> 后端合约文件

truffle<span class="token operator">/</span>contract<span class="token operator">/</span> <span class="token operator">-</span> Truffle默认的合约文件存放地址

truffle<span class="token operator">/</span>migrations<span class="token operator">/</span> <span class="token operator">-</span> 存放发布脚本文件

truffle<span class="token operator">/</span>scrippt<span class="token operator">/</span>

truffle<span class="token operator">/</span>test<span class="token operator">/</span> <span class="token operator">-</span> 用来测试应用和合约的测试文件

truffle<span class="token operator">-</span>config<span class="token punctuation">.</span>js <span class="token operator">-</span> Truffle的配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件truffle-config-js" tabindex="-1"><a class="header-anchor" href="#配置文件truffle-config-js" aria-hidden="true">#</a> 配置文件truffle-config.js</h3>
<h3 id="migration-机制" tabindex="-1"><a class="header-anchor" href="#migration-机制" aria-hidden="true">#</a> migration 机制</h3>
<p>Truffle提供了名为 “migration” 的部署机制，用于跟踪哪些合约（及他们的版本）已经被部署了。
migration有关的脚本代码都保存在Truffle的migrations目录。</p>
<p>如果我们部署新的合约，在当前目录创建新的文件去写部署脚本</p>
<p>一个简单的migration文件看起来是这样的：</p>
<p>文件名称：4_example_migration.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> MyContract <span class="token operator">=</span> artifacts<span class="token punctuation">.</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"MyContract"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">deployer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// deployment steps</span>
  deployer<span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span>MyContract<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，文件名称是以数字开头以文件描述结尾。为了记录migration文件是否成功运行，所以文件名称中的前缀编号是必需的。后缀纯粹是为了便于增加阅读者的可读性和理解</p>
<h4 id="artifacts-require" tabindex="-1"><a class="header-anchor" href="#artifacts-require" aria-hidden="true">#</a> ARTIFACTS.REQUIRE()</h4>
<p>在migrate文件的开头，我们通过artifacts.require()这个方法告诉Truffle，哪些合约是我们想要互相作用，互相影响的</p>
<p>这个方法和NodeJS中的require类似</p>
<h3 id="部署到本地ganache链" tabindex="-1"><a class="header-anchor" href="#部署到本地ganache链" aria-hidden="true">#</a> 部署到本地ganache链</h3>
<p>我们可以在配置文件中进行配置，然后部署到测试链上</p>
<h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4>
<p>找到 <code v-pre>truffle-config.js</code> 文件，找到配置，填写ganache本地链信息</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">networks</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">development</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">7545</span><span class="token punctuation">,</span>
      <span class="token literal-property property">network_id</span><span class="token operator">:</span><span class="token string">"5777"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编译合约" tabindex="-1"><a class="header-anchor" href="#编译合约" aria-hidden="true">#</a> 编译合约</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>truffle compile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="部署合约" tabindex="-1"><a class="header-anchor" href="#部署合约" aria-hidden="true">#</a> 部署合约</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>truffle migrate
<span class="token comment"># 可以添加参数，指定网络</span>
truffle migrate <span class="token parameter variable">--network</span> ropsten  // 部署到指定的ropsten网络
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="日志输出" tabindex="-1"><a class="header-anchor" href="#日志输出" aria-hidden="true">#</a> 日志输出</h4>
<img :src="$withBase('/img/truffle1.png')" />
<p>之后就能看见自己Ganache里的账户信息了</p>
<p>block 1 就是我们刚才truffle合约发布到链上，产生的区块，点击可以查看详情</p>
<img :src="$withBase('/img/truffle2.png')" />
<p>可以和我们 <code v-pre>truffle migrate</code> 部署的日志进行对比，发现是一致的</p>
<img :src="$withBase('/img/truffle3.png')" />
<h3 id="交易信息" tabindex="-1"><a class="header-anchor" href="#交易信息" aria-hidden="true">#</a> 交易信息</h3>
</div></template>


