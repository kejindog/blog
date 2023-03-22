<template><div><h2 id="web3-js" tabindex="-1"><a class="header-anchor" href="#web3-js" aria-hidden="true">#</a> web3.js</h2>
<h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<p><a href="https://www.npmjs.com/package/web3" target="_blank" rel="noopener noreferrer">npm web3.js<ExternalLinkIcon/></a>
<a href="https://github.com/ChainSafe/web3.js/blob/1.x/README.md" target="_blank" rel="noopener noreferrer">web3.js README.md<ExternalLinkIcon/></a>
<a href="https://web3js.readthedocs.io/en/v1.7.5/" target="_blank" rel="noopener noreferrer">官方英文文档<ExternalLinkIcon/></a>
<a href="https://learnblockchain.cn/docs/web3.js/getting-started.html" target="_blank" rel="noopener noreferrer">web3.js中文文档<ExternalLinkIcon/></a>
<a href="https://blog.csdn.net/david2000999/article/details/120176244" target="_blank" rel="noopener noreferrer">web3.js基本使用<ExternalLinkIcon/></a></p>
<h3 id="web3-js基本介绍" tabindex="-1"><a class="header-anchor" href="#web3-js基本介绍" aria-hidden="true">#</a> web3.js基本介绍</h3>
<p>web3.0是一个JavaScript API集合，它服务于以太坊生态系统的各个功能</p>
<ul>
<li>web3-eth 用来与以太坊区块链及合约的交互</li>
<li>web3-shh Whisper 协议相关，进行p2p通信和广播</li>
<li>web3-bzz swarm 协议（去中心化文件存储）相关</li>
<li>web3-utils 包含一些对 DApp 开发者有用的方法</li>
</ul>
<h3 id="安装和使用" tabindex="-1"><a class="header-anchor" href="#安装和使用" aria-hidden="true">#</a> 安装和使用</h3>
<p>npm 安装web3.js</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> web3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>创建一个web实例</li>
<li>设置一个provider</li>
</ul>
<p>这里是为了保证我们的 MetaMask 设置好的provider不被覆盖掉</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 环境检查</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> web3 <span class="token operator">!==</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  web3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Web3</span><span class="token punctuation">(</span>web3<span class="token punctuation">.</span>currentProvider<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  web3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Web3</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Web3<span class="token punctuation">.</span>providers<span class="token punctuation">.</span>HttpProvider</span><span class="token punctuation">(</span><span class="token string">"http://localhost:8545"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="callback-异步回调" tabindex="-1"><a class="header-anchor" href="#callback-异步回调" aria-hidden="true">#</a> callback 异步回调</h3>
<p>和JavaScript中回调函数是一样的，为了解决异步的问题</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// web3-eth 包用来与以太坊区块链和以太坊智能合约进行交互</span>
web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">getBlock</span><span class="token punctuation">(</span><span class="token number">48</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 回调风格：错误优先</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>error<span class="token punctuation">)</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token keyword">else</span> 
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="promise-事件" tabindex="-1"><a class="header-anchor" href="#promise-事件" aria-hidden="true">#</a> Promise 事件</h3>
<p>我们都知道，回调事件是可以造成回调地域的，那么JavaScript推出了 <code v-pre>Promise</code> 来解决回调地域的问题，那么web3.js也支持这种写法</p>
<p>大多数web3对象允许将一个回调函数作为最后一个参数传入，然后返回一个Promise用于链式函数调用</p>
<p>PromiEvent 是为了满足以太坊作为一个区块链系统，一次请求具有不同的结束阶段，web3js将这类函数调用的返回值包成一个 “承诺事件（PromiEvent）”，它是Promise和EventEmitter的结合体</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">'0x123...'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'0x432...'</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span> 
<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">'transactionHash'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">hash</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'transactionHash'</span><span class="token punctuation">,</span> hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">'receipt'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">receipt</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'receipt'</span><span class="token punctuation">,</span> receipt<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'confirmation'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">confNumber<span class="token punctuation">,</span> receipt</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'confirmation'</span><span class="token punctuation">,</span> confNumber<span class="token punctuation">,</span> receipt<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">receipt</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// will be fired once the receipt is mined </span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'receipt'</span><span class="token punctuation">,</span> receipt<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


