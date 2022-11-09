# 什么是 Sudoswap？

sudoswap AMM - 或简称*sudoswap* - 是一个最小的、省气的自动做市商 (AMM) 协议，它使用可定制的绑定曲线促进 NFT 到代币的互换（反之亦然）。sudoswap 支持 ERC721 NFT，以及所有 ETH 和 ERC20 代币。

流动性提供者 (LP) 可以将资产存入单边买入或卖出池，或双边交易池，通过可选的点差买卖 NFT 以获取交易费用。

与其他楼层 NFT 协议类似，sudoswap 不区分不同的 ERC721 ID。愿意购买或出售 NFT 的矿池将返回相同的价格，无论哪个 NFT 被送入或送出收藏。

## Sudoswap 是如何工作的？

Sudoswap 是 NFT 的 AMM 协议，这意味着用户从流动性池中购买或出售，而不是直接在他们之间进行交易。如果您熟悉 Uniswap，这是一个类似的概念，但适用于 NFT。

以下是它的工作原理： 1.流动性提供者将 NFT 和/或 ETH（或 ERC20 代币）存入流动性池。他们选择是否要购买或出售 NFT（或两者）并指定起始价格和联合曲线参数。 2.然后用户可以从这些池中购买 NFT 或将 NFT 出售到这些池中。每次购买或出售一个项目时，购买或出售另一个项目的价格会根据其联合曲线在池中发生变化。 3.流动性提供者可以随时更改其资金池的参数或提取资产。

## 什么是流动资金池？

池或流动性池是一种智能合约，可让您在两种资产之间即时交换。在 sudoswap 上，最常见的池类型是 NFT<>ETH 池，这意味着任何持有该集合中的 NFT 的人都可以立即将它们换成 ETH，反之亦然。

池使用联合曲线来确定一种资产与另一种资产交易的相对价格。从池中购买的资产越多，它变得越昂贵。相反，出售给矿池的资产越多，它就越便宜。

理想情况下，一个池包含一定数量的两种资产，使用户能够在它们之间来回交换。但是，也可以创建一个只有一种资产的池，这意味着用户只能从池中购买该资产。

联合曲线是定义资产价格与其供应之间关系的数学公式。绑定曲线是自动做市商的一个关键特征，因为它们用于通过算法调整资产价格。

sudoswap 支持三种类型的结合曲线：linear, exponential, 和 XYK (constant product).

### Linear(线性)

使用线性联合曲线，每次从池中购买物品时，NFT 的价格都会增加一个固定数量（称为“delta” ）。相反，每次将物品出售给矿池时，NFT 的价格都会降低相同的固定金额。

例如，流动性提供者可以创建一个 NFT<>ETH 池，其“起始价格”为 1 ETH，“delta ”为 0.1 ETH。假设它们提供足够的流动性，从池中购买一件物品后，NFT 的价格将增加到 1.1 ETH。购买第二件商品后，价格将增加到 1.2 ETH，以此类推。在任何时候，如果将 NFT 出售给矿池，价格将下降 0.1 ETH。

### Exponential(指数)

使用指数联合曲线，每次从池中购买物品时，NFT 的价格都会增加一定百分比（也称为“delta” ）。相反，每次将物品出售给矿池时，NFT 的价格都会降低。

要计算等量下降，请将百分比转换为小数指数（例如，对于 50%，指数为 1.5）并将价格除以该数字。

例如，流动性提供者可能会创建一个 NFT<>ETH 池，其“起始价格”为 2 ETH，“增量”为 50%。假设它们提供了足够的流动性，从池中购买一件物品后，NFT 的价格将增加到 2 + 50% = 3 ETH。购买第二件商品后，价格将增加到 3 + 50% = 4.5 ETH，以此类推。在任何时候，如果将 NFT 出售给矿池，价格将除以 1.5。

### XYK（常数产品）

使用 XYK 曲线，每次从池中购买或出售物品时都会调整 NFT 的价格，以便在每次交易后两个虚拟储备的乘积保持不变。这些虚拟储备对应于池将购买或出售的 NFT 的数量和价值。

一个额外的集中度参数允许流动性提供者调整（即收紧或放松）XYK 曲线。
有关如何准确计算 XYK 曲线定价的信息，请参阅技术参考中的 [定价](https://docs.sudoswap.xyz/reference/pricing/) 页面。

## 参考

- sudoswap lssvm 官方文档 [lssvm-docs](https://github.com/sudoswap/lssvm-docs/blob/main/docs/index.md "sudoswap lssvm")

---

作者: 谢伟杰
日期: '2022-11-03'

---

# sudoAMM

## 简要描述

[此处](https://blog.0xmons.xyz/83017366310)描述的 AMM 协议的实现。

流动性提供者使用“LSSVMPairFactory ”方法为特定的 NFT 集合 部署了一个修改后的最小代理“LSSVMPair ”。
部署的池维护自己的 TOKEN/NFT 库存。然后，用户可以调用池中的各种“swap”功能来交易 TOKEN/NFT。
`LSSVMPair`是`LSSVMPairEnumerable`还是`LSSVMPairMissingEnumerable`，取决于该货币对的`ERC721`合约是否支持`Enumerable`。如果不支持，我们实现自己的 ID 集，以便轻松访问池中的 NFT ID。

对于实际的代币，NFT 与`ERC20`或`ETH` 配对，因此有 4 种配对类型：

- Missing Enumerable | ETH
- Missing Enumerable | ERC20
- Enumerable | ETH
- Enumerable | ERC20

`LSSVMPair`可以是 TOKEN、NFT 或 TRADE 类型。
类型是指池中包含的内容：

- TOKEN：一个 TOKEN 池有它愿意提供给交易者以换取 NFT 的代币
- NFT： NFT 池有 NFT，它愿意提供给交易者以换取代币
- TRADE：交易池允许 TOKEN-->NFT 和 NFT-->TOKEN 交换。

`LSSVMRouter`允许在多个`LSSVMPair`之间购买和出售多个 NFT，也就是说交易者通过`LSSVMRouter`swap 时，支持跨池(pair/pool)交易

`LSSVMPair` `swap`函数是从最终用户的角度命名的。例如：`swapTokenForAnyNFTs`表示调用者想要发送 ETH 并接收 NFT。

为了确定提供或接收多少 NFT 或代币，每个“LSSVMPair”调用一个符合“ICurve”接口的离散联合曲线合约。`LSSVMPair`负责更新其状态并执行输入/输出验证。

![lssvm 架构图](https://github.com/sudoswap/lssvm/raw/main/sudo-diagram.png)
结构还是比较简单的，主要三部分：

- Pair(LSSVMPair)：NFT 的流动性池，有唯一的 Liquidity Provider 及其设定的 bonding curve；
- Factory(LSSVMPairFactory)：用来创建 Pair 的智能合约，主要是 LPs 来调用；
- Router(LSSVMRouter2)：用户可通过 Router 路由到指定的 Pair 进行交易，是一个交易入口；

---

作者: 谢伟杰
日期: '2022-11-09'

---
