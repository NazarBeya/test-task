import * as zod from "zod";
import {CurrencyType} from "./currency";

const url = zod.string().url();

export type UrlType = zod.infer<typeof url>;

export enum WithdrawalsStatus {
  WAITING_FOR_APPROVAL = "on_review",
  PROCESSING = "processing",
  DONE = "done",
}

const status = zod.nativeEnum(WithdrawalsStatus);

type StatusType = zod.infer<typeof status>;

export type WithdrawalsType = {
  id: number;
  date: number;
  address: string;
  symbol: CurrencyType;
  decimals: number;
  status: StatusType;
  comment: string;
  transaction_core_id: number;
  amount: number;
  chain: string;
  value: string;
  tx_hash: string;
  explorer: UrlType
};

export type WithdrawalsResponseType = {
  transactions: WithdrawalsType[];
  currentPage: number;
  maxPage: number;
  total: number;
};
