import {AxiosResponse} from "axios";
import {adminApi} from "@/api";

export const getCurrency = async (): Promise<AxiosResponse> => {
  return adminApi.get("transfer/getCurrency");
};

export const getCurrencyNetwork = async ({currency}: {currency: string}): Promise<AxiosResponse> => {
  return adminApi.get(`transfer/getCurrencyNetwork/${currency}`);
};
