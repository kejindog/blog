<template><div><h1 id="remix" tabindex="-1"><a class="header-anchor" href="#remix" aria-hidden="true">#</a> Remix</h1>
<p><a href="https://remix.ethereum.org/" target="_blank" rel="noopener noreferrer">官网地址<ExternalLinkIcon/></a>
<a href="https://cryptozombies.io/zh/" target="_blank" rel="noopener noreferrer">学习网址<ExternalLinkIcon/></a></p>
<p>Solidity是Ethereum官方设计和支持的变成语言，专门用于编写智能合约，是一款基于浏览器的IDE</p>
<p>那么编写智能合约推荐使用的以太坊官方退出的Remix，它是一个开源的Solidity智能合约开放环境，提供了基本的编译、部署、合约测试和执行合约等功能</p>
<p>默认情况下，Remix将文件存储在工作工作区就是浏览器本地存储中的文件夹，所以不要随便清除你的浏览器缓存，这样你下次打开remix就丢失了上次你编写的草稿</p>
<h2 id="default-workspace" tabindex="-1"><a class="header-anchor" href="#default-workspace" aria-hidden="true">#</a> default_workspace</h2>
<p>默认工作空间</p>
<ul>
<li>contracts ——智能合约的文件夹，放智能合约，以.sol结尾</li>
<li>scripts ——脚本文件夹，存放运行智能合约的脚本</li>
<li>tests ——测试文件夹，用于运行智能合约单元测试</li>
</ul>
<h2 id="solidity-compiler" tabindex="-1"><a class="header-anchor" href="#solidity-compiler" aria-hidden="true">#</a> SOLIDITY COMPILER</h2>
<h2 id="deploy-deploy-run-transactions" tabindex="-1"><a class="header-anchor" href="#deploy-deploy-run-transactions" aria-hidden="true">#</a> DEPLOY &amp; DEPLOY &amp; RUN TRANSACTIONS</h2>
<p>VM环境的部署</p>
<p>工具栏切换到DEPLOY &amp; RUN TRANSACTIONS，选择JavaScript VM环境对合约进行部署</p>
<p>部署合约会提交创建合约的交易(创建合约本身就是一个交易，只不过这个交易没有接收方)，交易会被挖矿打包在一个区块中，可以在代码区下方的调试信息区域看到部署的交易详情</p>
<h2 id="调用合约" tabindex="-1"><a class="header-anchor" href="#调用合约" aria-hidden="true">#</a> 调用合约</h2>
<p>Remix里用橙色按钮表示动作会修改区块链状态，蓝色表示调用仅仅是读取区块链状态</p>
<p>合约的调用相当于一笔tx，读取的操作都是free的，set动作需要改变区块链状态，是需要汽油费的</p>
<h2 id="部署合约" tabindex="-1"><a class="header-anchor" href="#部署合约" aria-hidden="true">#</a> 部署合约</h2>
<h2 id="获取测试币" tabindex="-1"><a class="header-anchor" href="#获取测试币" aria-hidden="true">#</a> 获取测试币</h2>
<p>https://www.jianshu.com/p/af34760cd1a7</p>
<h2 id="本地安装remix-ide" tabindex="-1"><a class="header-anchor" href="#本地安装remix-ide" aria-hidden="true">#</a> 本地安装Remix IDE</h2>
<h2 id="实战编写发布合约" tabindex="-1"><a class="header-anchor" href="#实战编写发布合约" aria-hidden="true">#</a> 实战编写发布合约</h2>
</div></template>


