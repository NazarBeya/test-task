import {CurrencyType} from "./currency";

export type DepositsType = {
  amount: number;
  chain: string;
  date: number;
  decimals: number;
  id: number;
  status: string;
  symbol: CurrencyType;
  tx_hash: string;
  user_core_id: number;
};

export type DepositsResponseType = {
  transactions: DepositsType[];
  currentPage: number;
  maxPage: number;
  total: number;
};
