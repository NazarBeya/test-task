import axios, {HeadersDefaults} from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from "universal-cookie";
import routes from "@/view/routes";

export const API_URL = import.meta.env.VITE_PUBLIC_API_URL || "http://localhost:5173/";
export const ADMIN_URL = import.meta.env.VITE_PUBLIC_SOCKET_URL || "http://localhost:3000/";

type HeadersTypes = {
  "Content-Type": string;
  Accept: string;
  Authorization: string;
};

const adminApi = axios.create({
  baseURL: ADMIN_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  } as unknown as HeadersDefaults & HeadersTypes,
});

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  } as unknown as HeadersDefaults & HeadersTypes,
});

adminApi.interceptors.request.use(
  (config) => {
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");
    if (!config.headers.Authorization && accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

adminApi.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    const cookies = new Cookies();
    if (err.response) {
      // Access Token was expired
      // eslint-disable-next-line no-underscore-dangle
      if (err.response.status === 401 && !originalConfig._retry) {
        // eslint-disable-next-line no-underscore-dangle
        originalConfig._retry = true;

        try {
          originalConfig.headers = {
            ...originalConfig.headers,
          };

          return await api(originalConfig);
        } catch (_error) {
          cookies.remove("accessToken");
          cookies.remove("refreshToken");
          // Redirecting the users to the landing page
          window.location.href = routes.login;
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  },
);

export {adminApi, api};
