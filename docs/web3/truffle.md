# Truffle

Truffle是针对基于以太坊的Solidity语言的一套开发框架。本身基于Javascript，它利用 node.js 包管理并提供 CLI（命令行界面）来管理和创建智能合约。



## Truffle 特性

* Truffle 使用 web3.js 作为其默认的 Web 库。
* Hardhat 和 Truffle 都支持分叉功能（在不影响原始软件的情况下复制软件并进行实验）。
* 它带有一组名为Drizzle的前端库，用于为 dApp 构建前端。
* 它支持使用Filecoin和Tezos进行开发，它还具有 Vscode 的扩展

## Truffle 优势


* 内置的智能合约编译，链接，部署和二进制文件的管理。
* 快速开发下的自动合约测试。
* 脚本化的，可扩展的部署与发布框架。
* 部署到不管多少的公网或私网的网络环境管理功能
* 使用EthPM&NPM提供的包管理，使用ERC190标准。
* 与合约直接通信的直接交互控制台（写完合约就可以命令行里验证了）。
* 可配的构建流程，支持紧密集成。
* 在Truffle环境里支持执行外部的脚本。


## Truffle 案例

* Amazon
* Microsoft
* Consensys：Consensys 是一家区块链软件公司，参与了 Metamask 和 Infura 等流行的区块链项目
* J.P. Morgan
* ShapeShift：ShapeShift 是一个私人加密货币交易平台，允许用户赚取、购买和交易加密货币资产

## Truffle 资源

[Truffle - 以太坊Solidity编程语言开发框架](https://truffle.tryblockchain.org/)
[以太坊开发框架——Truffle的基础使用](https://blog.csdn.net/david2000999/article/details/120472092)

## truffle教程

### 安装truffle

```bash
# 安装
npm install -g truffle
```

### 客户端

Truffle 的客户端，我们都知道我们写的智能合约必须部署到链上进行测试，所以我们通过truffle构建内的DAPP也需要一条链进行部署测试。

我们可以选择一些公共的测试链进行测试，比如：Rinkeby 或者 Ropsten ，但是这些公共链也有一定的缺陷，比如：部署和测试的时间比较长，而且需要话费伪代币，因为交易需要 gas 油气费，所以还要花时间去赚取各种伪代币（一般都是每日领取、推特领取等）。

还有一种方法是自己本地创建一个私有链，用来开发（测试还是推荐测试链、正式链哦）。

Truffle 推荐客户端
* Ganache
* truffle develop

### 创建工程

#### truffle init

truffle init会默认创建一个构建在以太坊内的代币demo应用。算是一个空项目

<img src="/img/truffle-init.jpg" />

contract/ - Truffle默认的合约文件存放地址

migrations/ - 存放发布脚本文件

test/ - 用来测试应用和合约的测试文件

truffle-config.js - Truffle的配置文件

#### truffle unbox

直接下载一个 truffle box，即一个预先构建好的 truffle 项目，可以选择参数

参考链接：[truffle开发模板box大全](http://blog.hubwiz.com/2018/12/26/truffle-box/)

react box：react开发模板包含了在react应用中访问以太坊智能合约的所有依赖

<img src="/img/truffle-unbox-react.png" />

```js
client/ react-web前端客户端，前端地址

truffle/ 后端合约文件

truffle/contract/ - Truffle默认的合约文件存放地址

truffle/migrations/ - 存放发布脚本文件

truffle/scrippt/

truffle/test/ - 用来测试应用和合约的测试文件

truffle-config.js - Truffle的配置文件
```

### 配置文件truffle-config.js

### migration 机制

Truffle提供了名为 “migration” 的部署机制，用于跟踪哪些合约（及他们的版本）已经被部署了。
migration有关的脚本代码都保存在Truffle的migrations目录。

如果我们部署新的合约，在当前目录创建新的文件去写部署脚本

一个简单的migration文件看起来是这样的：

文件名称：4_example_migration.js
```js
var MyContract = artifacts.require("MyContract");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};
```

注意，文件名称是以数字开头以文件描述结尾。为了记录migration文件是否成功运行，所以文件名称中的前缀编号是必需的。后缀纯粹是为了便于增加阅读者的可读性和理解

#### ARTIFACTS.REQUIRE()

在migrate文件的开头，我们通过artifacts.require()这个方法告诉Truffle，哪些合约是我们想要互相作用，互相影响的

这个方法和NodeJS中的require类似


### 部署到本地ganache链

我们可以在配置文件中进行配置，然后部署到测试链上
#### 配置
找到 `truffle-config.js` 文件，找到配置，填写ganache本地链信息

```js
module.exports = {
  networks:{
    development:{
      host:"127.0.0.1",
      port: 7545,
      network_id:"5777"
    }
  }
};
```

#### 编译合约

```bash
truffle compile
```

#### 部署合约

```bash
truffle migrate
# 可以添加参数，指定网络
truffle migrate --network ropsten  // 部署到指定的ropsten网络
```

#### 日志输出

<img src="/img/truffle1.png" />

之后就能看见自己Ganache里的账户信息了

block 1 就是我们刚才truffle合约发布到链上，产生的区块，点击可以查看详情

<img src="/img/truffle2.png" />

可以和我们 `truffle migrate` 部署的日志进行对比，发现是一致的

<img src="/img/truffle3.png" />

### 交易信息



