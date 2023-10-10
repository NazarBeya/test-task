export interface Wallet {
  address: string;
  amount: number;
  label: string;
}

export interface GenerateWallet {
  address: string;
  amount?: number;
  label: string;
  short?: boolean
  canCopy?: boolean
}

export interface WalletsData {
  hot: Wallet[];
  cold: Wallet[];
}

export interface Wallets {
  request: {
    adminId: number;
    chain: string;
    symbol: string;
  },
  wallets: {
    cold: Wallet[];
    hot: Wallet[];
  }
}

type Transaction = {
  assets_symbol: string;
  assets_decimals: number;
  date: string;
  amount: string;
  chain: string;
};

export type TransferHistory = {
  currentPage: number;
  maxPage: number;
  request: {
    page: number;
    limit: number;
    adminId: number;
  };
  total: number;
  transactions: Transaction[];
};
