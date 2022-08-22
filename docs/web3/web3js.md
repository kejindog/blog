## web3.js


### 参考资料

[npm web3.js](https://www.npmjs.com/package/web3)
[web3.js README.md](https://github.com/ChainSafe/web3.js/blob/1.x/README.md)
[官方英文文档](https://web3js.readthedocs.io/en/v1.7.5/)
[web3.js中文文档](https://learnblockchain.cn/docs/web3.js/getting-started.html)
[web3.js基本使用](https://blog.csdn.net/david2000999/article/details/120176244)

### web3.js基本介绍

web3.0是一个JavaScript API集合，它服务于以太坊生态系统的各个功能

* web3-eth 用来与以太坊区块链及合约的交互
* web3-shh Whisper 协议相关，进行p2p通信和广播
* web3-bzz swarm 协议（去中心化文件存储）相关
* web3-utils 包含一些对 DApp 开发者有用的方法

### 安装和使用

npm 安装web3.js

```bash
npm install web3
```

* 创建一个web实例
* 设置一个provider

这里是为了保证我们的 MetaMask 设置好的provider不被覆盖掉

```js
// 环境检查
if (typeof web3 !== 'undefined') { 
  web3 = new Web3(web3.currentProvider); 
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 
}

```

### callback 异步回调

和JavaScript中回调函数是一样的，为了解决异步的问题

```js
// web3-eth 包用来与以太坊区块链和以太坊智能合约进行交互
web3.eth.getBlock(48, function(error, result) {
  // 回调风格：错误优先
  if(!error) 
    console.log(JSON.stringify(result)); 
  else 
    console.error(error); 
  }
);

```

### Promise 事件

我们都知道，回调事件是可以造成回调地域的，那么JavaScript推出了 `Promise` 来解决回调地域的问题，那么web3.js也支持这种写法

大多数web3对象允许将一个回调函数作为最后一个参数传入，然后返回一个Promise用于链式函数调用

PromiEvent 是为了满足以太坊作为一个区块链系统，一次请求具有不同的结束阶段，web3js将这类函数调用的返回值包成一个 “承诺事件（PromiEvent）”，它是Promise和EventEmitter的结合体

```js
web3.eth.sendTransaction({
  from: '0x123...',
  data: '0x432...'}
) 
.once('transactionHash', function(hash){ 
  console.log('transactionHash', hash);
}) 
.once('receipt', function(receipt){ 
  console.log('receipt', receipt);
}) 
.on('confirmation', function(confNumber, receipt){ 
  console.log('confirmation', confNumber, receipt);
}) 
.on('error', function(error){ 
  console.log('error', error);
}) 
.then(function(receipt){
  // will be fired once the receipt is mined 
  console.log('receipt', receipt);
});
```