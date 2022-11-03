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

## 代码

### LSSVMPairFactory

```solidity
  constructor(
        KejinPairEnumerableETH _enumerableETHTemplate,
        KejinPairMissingEnumerableETH _missingEnumerableETHTemplate,
        KejinPairEnumerableERC20 _enumerableERC20Template,
        KejinPairMissingEnumerableERC20 _missingEnumerableERC20Template,
        address payable _protocolFeeRecipient,  // 工厂协议手续费接收者
        uint256 _protocolFeeMultiplier          // 协议手续费（%）
    ) {
      //...
    }
```

部署 LSSVMPairFactory 合约时，需提供 6 个参数，其中 4 个模板参数作用于：流动性提供者创建 pair 时根据该 nft`ERC721`合约是否支持枚举，以及 token 为原生代币 eth 还是`ERC20`代币，来`create`继承了相应模板的 Pair。在工厂中所有的 pool（pair）每次交易都会向工厂合约地址支付基于交易总额的手续费

### createPairETH

这里以创建 ETH 池举例（ERC20 池类似）：

- 参数说明：`createPairETH`参数注解如上，这里需要注意\_assetRecipient，只有创建的是单边池时，才可用，若创建的是 trade 双边池，需要设置为 address(0)，使用`getAssetRecipient`方法来获取 pair 的资产接收者,若为双边池，则`getAssetRecipient`返回的是 pair 池的地址。\_fee（池手续费）只用于双边池，单边池不可用。

```solidity
function createPairETH(
        IERC721 _nft,                       // nft合约
        ICurve _bondingCurve,               // 数学模型-交易曲线
        address payable _assetRecipient,    // 资产接收者（只有单边池可设置此参数，trade双边池不支持）
        KejinPair.PoolType _poolType,       // 池类型
        uint128 _delta,                     // 每卖出或买入一个nft，价格都会在原有基础上下降或上升的比例
        uint96 _fee,                        // trade双边池手续费
        uint128 _spotPrice,                 // 初始价格
        uint256[] calldata _initialNFTIDs   // 将nft中指定的nft币转给即将创建的pair
    )external payable returns (KejinPairETH pair) {
        require(
            bondingCurveAllowed[_bondingCurve],
            "Bonding curve not whitelisted"
        );

        // Check to see if the NFT supports Enumerable to determine which template to use
        address template;
        // 用erc165合约来判断该nft合约是否支持枚举，并分配不同的模板合约
        try
            IERC165(address(_nft)).supportsInterface(
                INTERFACE_ID_ERC721_ENUMERABLE
            )
        returns (bool isEnumerable) {
            template = isEnumerable
                ? address(enumerableETHTemplate)
                : address(missingEnumerableETHTemplate);
        } catch {
            template = address(missingEnumerableETHTemplate);
        }
        // 利用create opcode部署一个新的eth pair合约
        pair = KejinPairETH(
            payable(
                template.cloneETHPair(
                    this,
                    _bondingCurve,
                    _nft,
                    uint8(_poolType)
                )
            )
        );
        // 初始化eth pair合约
        _initializePairETH(
            pair,
            _nft,
            _assetRecipient,
            _delta,
            _fee,
            _spotPrice,
            _initialNFTIDs
        );
        emit NewPair(address(pair));
    }
```

```solidity
 function _initializePairETH(
        KejinPairETH _pair,
        IERC721 _nft,
        address payable _assetRecipient,
        uint128 _delta,
        uint96 _fee,
        uint128 _spotPrice,
        uint256[] calldata _initialNFTIDs
    ) internal {
        // ...

        // transfer initial ETH to pair
        // 将创建pair时发送的eth直接转给新部署的pair合约
        payable(address(_pair)).safeTransferETH(msg.value);

        // ...
    }
```

### LSSVMRouter

### swapETHForAnyNFTs

拿`swapETHForAnyNFTs`举例，交易者想要在工厂中用 eth 买一些 nft

```solidity
function swapETHForAnyNFTs(
        PairSwapAny[] calldata swapList, // 可在多个池中购买若干nft
        address payable ethRecipient,    // eth接收者
        address nftRecipient,            // nft接收者
        uint256 deadline                 // 此swap的有效期
    )
        external
        payable
        checkDeadline(deadline)
        returns (uint256 remainingValue)
    {
        return
            _swapETHForAnyNFTs(swapList, msg.value, ethRecipient, nftRecipient);
    }
```

- 参数说明：swap 结束，会将购买 nft 之后剩下的 eth 转给 ethRecipient,在池中购买的 nfts 会转移到 nftRecipient 中。

\_swapETHForAnyNFTs 中`swapTokenForAnyNFTs` 核心方法解读：

```solidity
    //遍历所要购买的流动池
    for (uint256 i; i < numSwaps; ) {
            // Calculate the cost per swap first to send exact amount of ETH over, saves gas by avoiding the need to send back excess ETH
            // 根据数学模型曲线，计算出买numItems个nft一共需要的花费
            (error, , , pairCost, ) = swapList[i].pair.getBuyNFTQuote(
                swapList[i].numItems
            );

            // Require no error
            require(error == CurveErrorCodes.Error.OK, "Bonding curve error");

            // Total ETH taken from sender cannot exceed inputAmount
            // because otherwise the deduction from remainingValue will fail
            // 第一次执行此循环时，remainingValue为交易者用于这次交易的所有eth
            remainingValue -= swapList[i].pair.swapTokenForAnyNFTs{
                value: pairCost
            }(
                swapList[i].numItems,  // 购买的nft数量
                remainingValue,        // 剩余的eth
                nftRecipient,          // nft接受者
                true,                  // 是否通过LSSVMRouter来调用
                msg.sender             // 交易者
            );

            unchecked {
                ++i;
            }
        }
```

pair 中的 swapTokenForAnyNFTs：

```solidity
    function swapTokenForAnyNFTs(
        uint256 numNFTs,                    // 购买的nft数量
        uint256 maxExpectedTokenInput,      // 剩余的eth
        address nftRecipient,               // nft接受者
        bool isRouter,                      // 是否通过LSSVMRouter来调用
        address routerCaller                // 如果isRouter时true，erp token将转移到此地址，但对于eth pair无效
    ) external payable virtual nonReentrant returns (uint256 inputAmount) {
        // Store locally to remove extra calls
        IKejinPairFactoryLike _factory = factory();
        ICurve _bondingCurve = bondingCurve();
        IERC721 _nft = nft();

        // Input validation
        {
            PoolType _poolType = poolType();
            // swapTokenForAnyNFTs方法名顾名思义：只可能是nft池或者trade池
            require(
                _poolType == PoolType.NFT || _poolType == PoolType.TRADE,
                "Wrong Pool type"
            );
            require(
                (numNFTs > 0) && (numNFTs <= _nft.balanceOf(address(this))),
                "Ask for > 0 and <= balanceOf NFTs"
            );
        }

        // Call bonding curve for pricing information
        uint256 protocolFee;
        // 根据要购买的numNFTs（nft数量）结合数学模型，返回总共需要花费多少eth（已加上工厂协议和pair手续费）
        // 注意此protocolFee=inputValue.fmul(protocolFeeMultiplier,FixedPointMathLib.WAD);和pair手续费要区分开！
        // protocolFeeMultiplier为创建factory合约时的参数：协议费率，为定值
        // 函数中已经更新了最新的nft定价spotPrice和增幅delta，并发出事件
        (protocolFee, inputAmount) = _calculateBuyInfoAndUpdatePoolParams(
            numNFTs,
            maxExpectedTokenInput,
            _bondingCurve,
            _factory
        );
        // 支付eth或者erc20 token
        _pullTokenInputAndPayProtocolFee(
            inputAmount,
            isRouter,
            routerCaller,
            _factory,
            protocolFee
        );
        // 将numNFTs数量的nft转给nftRecipient
        _sendAnyNFTsToRecipient(_nft, nftRecipient, numNFTs);
        // 将购买nft之后剩下的eth返回给caller
        _refundTokenToSender(inputAmount);

        emit SwapNFTOutPair();
    }
```

`_pullTokenInputAndPayProtocolFee`解读：

```solidity
function _pullTokenInputAndPayProtocolFee(
        uint256 inputAmount,                // 购买nft需要花费的总金额，已包括：协议手续费和池手续费（若为双边池）
        bool, /*isRouter*/
        address, /*routerCaller*/
        IKejinPairFactoryLike _factory,     // 工厂合约
        uint256 protocolFee                 // 工厂协议手续费
    ) internal override {
        require(msg.value >= inputAmount, "Sent too little ETH");

        // Transfer inputAmount ETH to assetRecipient if it's been set
        // 若为双边池_assetRecipient一定指向本本币对合约，若为单边池_assetRecipient为设置的接受资产的地址
        // 若单边池未设置_assetRecipient，则也会指向本币对合约（一般单边池不会不设置）
        address payable _assetRecipient = getAssetRecipient();

        if (_assetRecipient != address(this)) {
            // 由上述方法可知，此safeTransferETH的使用场景一定是单边池
            // 将交易者购买nft的钱转给_assetRecipient（扣除协议手续费），协议手续费需要转给工厂合约
            _assetRecipient.safeTransferETH(inputAmount - protocolFee);
        }

        // Take protocol fee
        //
        if (protocolFee > 0) {
            // Round down to the actual ETH balance if there are numerical stability issues with the bonding curve calculations
            if (protocolFee > address(this).balance) {
                protocolFee = address(this).balance;
            }

            if (protocolFee > 0) {
                // 将协议手续费需要转给工厂合约
                payable(address(_factory)).safeTransferETH(protocolFee);
            }
        }
    }
```

#### 疑问：此方法 eth 的转移似乎只适用于单边池，没有直接写出双边池 eth 的转移方法？

router 中调用 pair 的`swapTokenForAnyNFTs`方法时传入了 value,并且 swapTokenForAnyNFTs 是可 payable 的，因此假如`swapTokenForAnyNFTs`中没有出现任何`safeTransferETH`方法，且执行过程没有任何错误，则 evm 会将传入的`msg.value`自动转移至 payable 方法所在合约的 balance 中（[接受 ETH](https://mirror.xyz/ninjak.eth/NTNHraVAn2OWUKXpr0byphlxl8ytj7fRUAaOaLYfEtA "接受ETH基础")）。

- 什么是 safeTransferETH? 采用了 call opcode 的方式转移 eth,若 payable 标记的函数中使用了一次 safeTransferETH(amount)，则 evm 会将剩下的钱，即 msg.value-amount 转给合约 balance。
  所以双边池收到的 eth 即为 msg.value-protocolFee(其中包含了池手续费作为每完成一笔交易的收益)

---

作者: 谢伟杰
日期: '2022-11-03'

---
