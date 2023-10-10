import * as zod from "zod";

export enum CryptoCurrency {
  Bitcoin = "BTC",
  Ethereum = "ETH",
  Tether = "USDT",
  USDCoin = "USDC",
  BNB = "BNB",
  ApeCoin = "APE",
  LEEToken = "LEE",
  BinanceUSD = "BUSD",
  PancakeSwap = "CAKE",
  Dai = "DAI",
  Uniswap = "UNI",
  TICKERSHIBA = "SHIB",
  DOGECoin = "DOGE",
}

const currency = zod.nativeEnum(CryptoCurrency);

export type CurrencyType = zod.infer<typeof currency>;
