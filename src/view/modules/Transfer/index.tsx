import React, {useState} from "react";
import TranferForm from "./components/TranferForm";
import {Wallet, Wallets} from "./types";
import useToggle from "@/hooks/useToggle";

function Transfer() {
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [selectedHotWallet, setSelectedHotWallet] = useState<Wallet | null>(null);
  const [selectedColdWallet, setSelectedColdWallet] = useState<Wallet | null>(null);
  const [wallets, setWallets] = useState<Wallets | null>(null);
  const [toastSendTransfer, setToastSendTransfer] = useToggle(false);
  const [amountForm, setAmountForm] = useState<string >("");

  const sendTransfer = ({
    network, currency, amount, hot, cold,
  }: {network: string,
    currency: string;
    amount: string;
    hot: string;
    cold:string;}) => {
      console.log(network, currency, amount, hot, cold, '123123123')
    setAmountForm(`${amount} ${currency} is transferred to Cold Eth 1`);
    setToastSendTransfer();
    setWallets(null);
    setSelectedHotWallet(null);
    setSelectedColdWallet(null);
    setSelectedNetwork("");
  };

  return (
    <>
      <TranferForm
        onClick={sendTransfer}
      />
    </>
  );
}

export default Transfer;
