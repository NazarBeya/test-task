import * as zod from "zod";

export enum Network {
  Binance = "Binance",
  Ethereum = "Ethereum",
}

const network = zod.nativeEnum(Network);

export type NetworkType = zod.infer<typeof network>;
