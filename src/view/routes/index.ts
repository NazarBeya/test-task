const routes = {
  index: "/",
  login: "/login",
  users: {
    index: "/users",
  },
  user: (userId: string) => ({
    index: `/user/${userId}`,
    balance: `/user/${userId}/balance`,
    transactions: `/user/${userId}/transactions`,
    gameHistory: `/user/${userId}/game-history`,
    sessions: `/user/${userId}/sessions`,
    bonusRewards: `/user/${userId}/bonus-rewards`,
    referrals: `/user/${userId}/referrals`,
    history: `/user/${userId}/history`,
  }),
  balances: {
    index: "/balances",
  },
  transfer: {
    index: "/transfer",
  },
  dashboard: {
    index: "/dashboard",
  },
  payments: {
    index: "/payments",
    withdrawals: {
      index: "/payments/withdrawals",
      waitingForApproval: "/payments/withdrawals/waiting-for-approval",
      processing: "/payments/withdrawals/processing",
      done: "/payments/withdrawals/done",
    },
    deposits: {
      index: "/payments/deposits",
    },
  },

};

export default routes;
