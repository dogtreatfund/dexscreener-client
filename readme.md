ts-node REPL:

```
> import { DexScreenerClient } from './src/index'
> const dexScreenerClient = DexScreenerClient();
> dexScreenerClient.getPairsByTokenAddresses({tokenAddresses: ['0x9a26F5433671751C3276a065f57e5a02D2817973']}).then(console.log)

> {
  schemaVersion: '1.0.0',
  pairs: [
    {
      chainId: 'base',
      dexId: 'uniswap',
      url: 'https://dexscreener.com/base/0x377feeed4820b3b28d1ab429509e7a0789824fca',
      pairAddress: '0x377FeeeD4820B3B28D1ab429509e7A0789824fCA',
      baseToken: [Object],
      quoteToken: [Object],
      priceNative: '0.0000002903',
      priceUsd: '0.0007560',
      txns: [Object],
      volume: [Object],
      priceChange: [Object],
      liquidity: [Object],
      fdv: 7560777,
      pairCreatedAt: 1711420803000
    },
    ...
  ]
```
