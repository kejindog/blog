# Remix

[官网地址](https://remix.ethereum.org/)
[学习网址](https://cryptozombies.io/zh/)

Solidity是Ethereum官方设计和支持的变成语言，专门用于编写智能合约，是一款基于浏览器的IDE

那么编写智能合约推荐使用的以太坊官方退出的Remix，它是一个开源的Solidity智能合约开放环境，提供了基本的编译、部署、合约测试和执行合约等功能

默认情况下，Remix将文件存储在工作工作区就是浏览器本地存储中的文件夹，所以不要随便清除你的浏览器缓存，这样你下次打开remix就丢失了上次你编写的草稿


## default_workspace

默认工作空间

* contracts ——智能合约的文件夹，放智能合约，以.sol结尾
* scripts ——脚本文件夹，存放运行智能合约的脚本
* tests ——测试文件夹，用于运行智能合约单元测试


## SOLIDITY COMPILER


## DEPLOY & DEPLOY & RUN TRANSACTIONS

VM环境的部署

工具栏切换到DEPLOY & RUN TRANSACTIONS，选择JavaScript VM环境对合约进行部署

部署合约会提交创建合约的交易(创建合约本身就是一个交易，只不过这个交易没有接收方)，交易会被挖矿打包在一个区块中，可以在代码区下方的调试信息区域看到部署的交易详情


## 调用合约

Remix里用橙色按钮表示动作会修改区块链状态，蓝色表示调用仅仅是读取区块链状态

合约的调用相当于一笔tx，读取的操作都是free的，set动作需要改变区块链状态，是需要汽油费的


## 部署合约

## 获取测试币

https://www.jianshu.com/p/af34760cd1a7

## 本地安装Remix IDE

## 实战编写发布合约
