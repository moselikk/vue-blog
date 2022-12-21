import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建实例
const axiosInstance: AxiosInstance = axios.create({
  // 前缀
  baseURL: 'https://v1.hitokoto.cn',
  // 超时
  timeout: 1000 * 30,
});

const service = {
  get<T = any>(url: string, data?: object | string): Promise<T> {
    return axiosInstance.get(url, { params: data });
  },
};

const messageApi = {
  // 验证登录实例
  getMessage: () => service.get(`/?c=a&c=c&c=b`),
};

export default messageApi;
