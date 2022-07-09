import useSWR, { Fetcher } from "swr";
import axios, { AxiosResponse, HeadersDefaults } from "axios";
import paths from "./endpoints";

export type optionsData = {
  url: keyof typeof paths;
  content_type: string | null;
  headers: HeadersDefaults;
  method: string;
  data: any;
};

export const axiosService = (options: optionsData) => {
  const apiPrefix =
    process.env.REACT_APP_API_HOST || "https://drive.google.com";
  const configs: any = {
    url: `${apiPrefix}${paths[options.url]}`,
    method: options.method,
    headers: {
      "Content-Type": options?.content_type || "application/json",
      ...options?.headers,
    },
  };
  if (options.data) {
    configs.data = options.data;
  }
  return axios(configs);
};

export const useAsyncTask = () => {
  const asyncTaskRunner = async (key: string, instance: Fetcher) => {
    const { data, error } = useSWR(key, instance);
  };

  return { asyncTaskRunner };
};
