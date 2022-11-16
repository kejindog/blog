# MetaMask



## metamask

[官网下载地址](https://metamask.io/)

[官方文档地址](https://docs.metamask.io/guide/)


Metamask 小狐狸，是一个开源的以太坊钱包，能用帮助用户方便的管理自己的以太坊数字资产

一般都是chrome插件的形式去使用的。

以 metamask 链接本地 ganache 创建的测试网络为例
## ganache

ganache 是一个以太坊的个人开发环境，你可以在上面部署合约、开发程序和进行测试。它有桌面版本和命令行工具版本，同时提供对windows、Mac和Linux的支持

ganache 是一个本地版的以太坊，是我们开发的必备工具。

因为测试网络（免费），但是测试网络响应速度太慢了，有时候一个交易要进行10秒，虽然测试网的响应速度相对主网而言比较快（😅），所以我们创建一个本地网络，可以体验无缝衔接的感觉，快啊。

### ganache 下载安装

[ganache 下载地址](https://trufflesuite.com/ganache/) 各个版本都有

ganache 创建一个本地测试网络

1. 打开界面

<img :src="$withBase('/img/ganache1.png')" >

2. 点击 quickstart 快速生成一个本地网络，找到右边的设置按钮，点击

<img :src="$withBase('/img/ganache2.png')" >

3. 注意上面的 SERVE 找到当前网络信息，需要在metamask添加网络的时候用得到

<img :src="$withBase('/img/ganache3.png')" >

后续连接钱包看metamask具体设置

### ganache 入门介绍

#### 账号Accounts

界面主体有10个账号，分别列出了每个账号的地址，余额，已经完成的交易数量、账号数组中的索引、显示私钥按钮等。点击那个钥匙图标，就会显示它的私钥

#### Blocks

点击导航上的Blocks，可以看到目前Block是0,block记录在链上的区块信息，只包含成功的transactions信息.
这是因为Ganache挖矿机制决定的，每一个交易产生一个block，所以一个block也只会有一笔交易。在我们交易后就会产生一个block，目前还没有


#### Transactions

生成的交易信息，有成功记录到区块上的，也有没有成功记录上的

#### contracts

因为们工作空间并没有添加truffle工程，所以这里也是空的。
## metamask链接本地ganache网络

1. metamask 设置

<img width="330" :src="$withBase('/img/metamask1.png')" />

2. 找到网络

<img width="330" :src="$withBase('/img/metamask2.png')" />

3. 点击添加网络

<img width="330" :src="$withBase('/img/metamask3.png')" />

4. 查看ganache 网络信息

<img :src="$withBase('/img/ganache3.png')" >

5. 填写本地/链上的地址信息

<img :src="$withBase('/img/metamask4.png')" />

6. 选择刚才添加的网络

<img width="330" :src="$withBase('/img/metamask5.png')" />

7. 针对刚才的网络，添加账户，需要先查看ganache提供的默认10个账号中的某个私钥

<img :src="$withBase('/img/ganache4.png')" />

8. 复制私钥

<img :src="$withBase('/img/ganache5.png')" />


9. metamask 选择网络后，点击导入账户

<img  width="330" :src="$withBase('/img/ganache6.png')" />

10. 将刚才复制的私钥，写进入即可

<img  width="330" :src="$withBase('/img/ganache7.png')" />

11. 刷新即可看到余额

<img  width="330" :src="$withBase('/img/ganache8.png')" />


至此，我们的 metamask钱包 链接本地 ganache 创建的链就成功了，我们后面把我们写的智能合约发布到我们的本地链上即可


## MetaMask 开发

MetaMask钱包提供了一系列的API让我们的DAPP可以和钱包进行交互

文档地址：[https://docs.metamask.io/guide/](https://docs.metamask.io/guide/)

### MetaMask 以太坊一键登录

1. 检查是否支持MetaMask
2. 点击登录获取钱包授权
3. 获取钱包信息、进行事件监听

```js
import {
  ethers
} from 'ethers'
import MetaMaskOnboarding from '@metamask/onboarding'
import {
  Message
} from 'element-ui'
/**
 * 1. 主动连接钱包 { 检验是安装浏览器插件 如没有 弹窗提示 引导官网安装 }
 * 2. 自动获取钱包信息
 * 3. 监听切换网络，监听用户关闭网站授权
 * 4. 添加网络
 */
export const connectMetaMask = async function connectMetaMask() {
  if (!isMetaMaskInstalled()) {
    // 判断是否安装MetaMask扩展工具
    const forwarderOrigin = window.location.origin
    const onboarding = new MetaMaskOnboarding({
      forwarderOrigin
    })
    // 跳转应用商店，安装钱包
    onboarding.startOnboarding()
    return
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  try {
    // 获取用户的以太坊账户地址
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    const { chainId } = await provider.getNetwork()
    const account = accounts[0];
    window.ethereum.on('chainChanged', (chainId) => {
      Message.success('网络切换', chainId)
    })
    window.ethereum.on('accountsChanged', (accounts) => {
      Message.success('账户切换', accounts)
    })
    window.ethereum.on('message', message => {
      // message：type: string、data
      console.log('收到一些应该通知消费者的消息时触发', message)
    })
    // 当 MetaMask 提供者第一次能够向链提交 RPC 请求时，它会发出此事件
    window.ethereum.on('connect', message => {
      console.log('结合ethereum.isConnected()确定何时/是否连接了提供程序', message)
    })
    window.ethereum.on('disconnect', () => {
      localStorage.removeItem('walletType')
      localStorage.removeItem('walletTypeVerify')
      // 这个时候就不会接受任何新的请求了，必须刷新页面确认是否新的链接，或者使用方法ethereum.isConnected()
      Message.success('断开、链接失败')
    })
    // react中卸载组件的时候：ethereum.removeListener('accountsChanged', function);
    return {
      account,
      provider,
      chainId,
    }
  } catch (error) {
    console.log(error)
    Message.error(error)
    return false
  }
  // Created check function to see if the MetaMask extension is installed
  function isMetaMaskInstalled() {
    // Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }
}

```

### 调用JSON-RPC格式的请求

json-rpc是一个基于json的跨语言远程调用协议，web3.js 通过RPC调用与本地节点通信，我们的钱包MetaMask 使用该ethereum.request(args)方法来包装 RPC AP

参考地址：以太坊[wiki](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts)

调用参考-获取账户地址：

```js
ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Please connect to MetaMask.');
      } else {
        console.error(error);
      }
    });
```